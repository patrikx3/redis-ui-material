import { Injectable } from '@angular/core';
declare const p3xr: any;

/**
 * Angular service that mirrors the AngularJS p3xrRedisParser factory.
 * Pure logic — no AngularJS dependencies. During hybrid mode, both this
 * service and the AngularJS factory coexist. Future Angular components
 * inject this service; existing AngularJS components keep using the factory.
 */
@Injectable({ providedIn: 'root' })
export class RedisParserService {

    /**
     * Parses a key=value line into an object.
     * e.g. "keys=10,expires=5" → { keys: "10", expires: "5" }
     */
    array(options: { line: string; divider?: string; fieldDivider?: string }): Record<string, string> {
        const { line } = options;
        const divider = options.divider ?? ',';
        const fieldDivider = options.fieldDivider ?? '=';
        const rows = line.split(divider);
        const obj: Record<string, string> = {};
        for (const row of rows) {
            const rowLine = row.split(fieldDivider);
            const rowLineData = rowLine[1] ?? '';
            obj[rowLine[0]] = rowLineData.trim();
        }
        return obj;
    }

    /**
     * Parses Redis INFO command output into a nested object grouped by section.
     */
    info(str: string): any {
        const lines = str.split('\n');
        const obj: any = {};
        let section: string | undefined;
        let currentSectionObj: any = {};
        let hadSection = false;
        let pikaIndex = 0;

        for (const line of lines) {
            if (line.startsWith('#')) {
                if (hadSection) {
                    continue;
                }
                hadSection = true;
                if (section !== undefined) {
                    obj[section] = currentSectionObj;
                }
                section = line.substring(1).toLowerCase().trim();
                currentSectionObj = {};
            } else if (line.length > 2) {
                hadSection = false;
                if (line.includes(':')) {
                    const lineArray = line.split(':');
                    const value = lineArray[1] ?? '';
                    currentSectionObj[lineArray[0]] = value.includes(',')
                        ? this.array({ line: value.trim() })
                        : value.trim();
                } else {
                    // pika format
                    const [key, ...rest] = line.split(/ (.+)/);
                    const values = rest[0] ?? '';
                    const value = values
                        .split(',')
                        .map((item: string) => `${pikaIndex}-${item.trim()}`)
                        .join(',');

                    if (currentSectionObj.hasOwnProperty('db0')) {
                        Object.assign(
                            currentSectionObj['db0'],
                            value.includes(',') ? this.array({ line: value.trim() }) : value.trim()
                        );
                    } else {
                        currentSectionObj['db0'] = value.includes(',')
                            ? this.array({ line: value.trim() })
                            : value.trim();
                    }
                    pikaIndex++;
                }
            }
        }
        if (section !== undefined && Object.keys(currentSectionObj).length > 0) {
            obj[section] = currentSectionObj;
        }

        obj.keyspaceDatabases = {};
        if (obj.hasOwnProperty('keyspace')) {
            Object.keys(obj.keyspace).forEach((key) => {
                const dbIndex = parseInt(key.substring(2));
                obj.keyspaceDatabases[dbIndex] = true;
            });
        }

        return obj;
    }

    /**
     * Converts a flat list of Redis keys into a hierarchical tree structure.
     * Used by the tree control to display keys grouped by divider (default ':').
     */
    keysToTreeControl(options: {
        keys: string[];
        divider?: string;
        keysInfo?: any;
        savedExpandedNodes?: any[];
    }): { nodes: any[]; expandedNodes: any[] } {
        const { keys } = options;
        const divider = options.divider ?? p3xr?.settings?.redisTreeDivider ?? ':';
        const keysInfo = options.keysInfo ?? p3xr?.state?.keysInfo ?? {};
        const savedExpandedNodes = options.savedExpandedNodes ?? [];

        const mainNodes: any[] = [];
        const newExpandedNodes: any[] = [];

        const recursiveNodes = (splitKey: string[], level: number = 0, nodes: any[] = mainNodes) => {
            let foundNode: any = false;
            if (level + 1 < splitKey.length) {
                for (const node of nodes) {
                    if (node.label === splitKey[level] && node.type === 'folder') {
                        foundNode = node;
                    }
                }
            }
            if (!foundNode) {
                const defaultFoundNode: any = {
                    label: splitKey[level],
                    key: splitKey.slice(0, level + 1).join(divider),
                    children: [],
                    childCount: 0,
                    type: level + 1 === splitKey.length ? 'element' : 'folder',
                };
                if (defaultFoundNode.type === 'element') {
                    defaultFoundNode.keysInfo = keysInfo[defaultFoundNode.key];
                }
                nodes.push(defaultFoundNode);
                foundNode = defaultFoundNode;

                for (const saveExpandedNode of savedExpandedNodes) {
                    if (saveExpandedNode.key === foundNode.key) {
                        newExpandedNodes.push(foundNode);
                    }
                }
            }

            if (level + 1 < splitKey.length) {
                recursiveNodes(splitKey, level + 1, foundNode.children);
            }
        };

        for (const key of keys) {
            const splitkey = divider === '' ? [key] : key.split(divider);
            recursiveNodes(splitkey);
        }

        const recursiveKeyCount = (node: any) => {
            node.childCount = 0;
            for (const child of node.children) {
                if (child.type === 'element') {
                    const info = child.keysInfo;
                    if (info && info.type !== 'string' && info.type !== 'json' && info.length != null) {
                        node.childCount += info.length;
                    } else {
                        node.childCount += 1;
                    }
                }
            }
            for (const child of node.children) {
                recursiveKeyCount(child);
                if (child.type === 'folder') {
                    node.childCount += child.childCount;
                }
            }
        };

        for (const node of mainNodes) {
            recursiveKeyCount(node);
        }

        return { nodes: mainNodes, expandedNodes: newExpandedNodes };
    }

    /**
     * Parses console command response into a display string.
     */
    consoleParse(responseResult: any): string {
        if (typeof responseResult === 'object') {
            let result = '';
            Object.keys(responseResult).forEach((key) => {
                if (result !== '') {
                    result += '\n';
                }
                result += responseResult[key];
            });
            return result;
        } else {
            return responseResult;
        }
    }
}
