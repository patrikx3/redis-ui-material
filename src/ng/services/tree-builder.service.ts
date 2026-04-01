import { Injectable } from '@angular/core';

/**
 * Offloads keysToTreeControl and key sorting to a Web Worker.
 * Falls back to main-thread execution if Workers are unavailable.
 */
@Injectable({ providedIn: 'root' })
export class TreeBuilderService {

    private worker: Worker | null = null;
    private nextRequestId = 0;
    private pendingResolves = new Map<number, (result: any) => void>();

    constructor() {
        this.initWorker();
    }

    private initWorker(): void {
        try {
            const blob = new Blob([
                `(${workerFn.toString()})()`
            ], { type: 'application/javascript' });
            this.worker = new Worker(URL.createObjectURL(blob));
            this.worker.onmessage = (e: MessageEvent) => {
                const { _requestId, ...result } = e.data;
                const resolve = this.pendingResolves.get(_requestId);
                if (resolve) {
                    this.pendingResolves.delete(_requestId);
                    resolve(result);
                }
            };
            this.worker.onerror = () => {
                this.worker = null;
            };
        } catch {
            this.worker = null;
        }
    }

    /**
     * Build tree from keys — runs in Web Worker.
     */
    keysToTreeControl(options: {
        keys: string[];
        divider: string;
        keysInfo: any;
        savedExpandedNodes?: any[];
    }): Promise<{ nodes: any[]; expandedNodes: any[] }> {
        if (this.worker) {
            const id = ++this.nextRequestId;
            return new Promise((resolve) => {
                this.pendingResolves.set(id, resolve);
                this.worker!.postMessage({
                    _requestId: id,
                    action: 'buildTree',
                    keys: options.keys,
                    divider: options.divider,
                    keysInfo: options.keysInfo,
                    savedExpandedNodes: options.savedExpandedNodes ?? [],
                });
            });
        }
        return Promise.resolve(buildTreeSync(options));
    }

    /**
     * Sort keys with natural compare — runs in Web Worker.
     */
    sortKeys(keys: string[]): Promise<string[]> {
        if (this.worker) {
            const id = ++this.nextRequestId;
            return new Promise((resolve) => {
                this.pendingResolves.set(id, (result: any) => resolve(result.keys));
                this.worker!.postMessage({
                    _requestId: id,
                    action: 'sortKeys',
                    keys,
                });
            });
        }
        return Promise.resolve(keys.sort(naturalCompare()));
    }
}

// ============================================================================
// Worker function — serialized into a Blob URL
// ============================================================================
function workerFn() {
    const naturalCompare = () => {
        return (a: string, b: string) => {
            const regex = /(\d+)|(\D+)/g;
            const ax: any[] = [], bx: any[] = [];
            a.replace(regex, (_: any, $1: any, $2: any) => { ax.push([$1 || Infinity, $2 || '']); return ''; });
            b.replace(regex, (_: any, $1: any, $2: any) => { bx.push([$1 || Infinity, $2 || '']); return ''; });
            while (ax.length && bx.length) {
                const an = ax.shift()!;
                const bn = bx.shift()!;
                const nn = (parseFloat(an[0]) - parseFloat(bn[0])) || an[1].localeCompare(bn[1]);
                if (nn) return nn;
            }
            return ax.length - bx.length;
        };
    };

    const buildTree = (keys: string[], divider: string, keysInfo: any, savedExpandedNodes: any[]) => {
        const mainNodes: any[] = [];
        const newExpandedNodes: any[] = [];
        const saved = savedExpandedNodes || [];

        const recursiveNodes = (splitKey: string[], level = 0, nodes: any[] = mainNodes) => {
            let foundNode: any = false;
            if (level + 1 < splitKey.length) {
                for (let i = 0; i < nodes.length; i++) {
                    if (nodes[i].label === splitKey[level] && nodes[i].type === 'folder') {
                        foundNode = nodes[i];
                        break;
                    }
                }
            }
            if (!foundNode) {
                const node: any = {
                    label: splitKey[level],
                    key: splitKey.slice(0, level + 1).join(divider),
                    children: [],
                    childCount: 0,
                    type: level + 1 === splitKey.length ? 'element' : 'folder',
                };
                if (node.type === 'element' && keysInfo) {
                    node.keysInfo = keysInfo[node.key];
                }
                nodes.push(node);
                foundNode = node;
                for (let j = 0; j < saved.length; j++) {
                    if (saved[j].key === foundNode.key) {
                        newExpandedNodes.push(foundNode);
                    }
                }
            }
            if (level + 1 < splitKey.length) {
                recursiveNodes(splitKey, level + 1, foundNode.children);
            }
        };

        for (let i = 0; i < keys.length; i++) {
            recursiveNodes(divider === '' ? [keys[i]] : keys[i].split(divider));
        }

        const recursiveKeyCount = (node: any) => {
            node.childCount = 0;
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].type === 'element') node.childCount++;
            }
            for (let i = 0; i < node.children.length; i++) {
                recursiveKeyCount(node.children[i]);
                if (node.children[i].type === 'folder') node.childCount += node.children[i].childCount;
            }
        };

        for (let i = 0; i < mainNodes.length; i++) {
            recursiveKeyCount(mainNodes[i]);
        }

        return { nodes: mainNodes, expandedNodes: newExpandedNodes };
    };

    (self as any).onmessage = function (e: MessageEvent) {
        const data = e.data;
        const _requestId = data._requestId;
        if (data.action === 'sortKeys') {
            const sorted = data.keys.sort(naturalCompare());
            (self as any).postMessage({ _requestId, keys: sorted });
        } else if (data.action === 'buildTree') {
            const result = buildTree(data.keys, data.divider, data.keysInfo, data.savedExpandedNodes);
            (self as any).postMessage({ _requestId, ...result });
        }
    };
}

// ============================================================================
// Main-thread fallbacks
// ============================================================================
function naturalCompare() {
    return (a: string, b: string) => {
        const regex = /(\d+)|(\D+)/g;
        const ax: any[] = [], bx: any[] = [];
        a.replace(regex, (_: any, $1: any, $2: any) => { ax.push([$1 || Infinity, $2 || '']); return ''; });
        b.replace(regex, (_: any, $1: any, $2: any) => { bx.push([$1 || Infinity, $2 || '']); return ''; });
        while (ax.length && bx.length) {
            const an = ax.shift()!;
            const bn = bx.shift()!;
            const nn = (parseFloat(an[0]) - parseFloat(bn[0])) || an[1].localeCompare(bn[1]);
            if (nn) return nn;
        }
        return ax.length - bx.length;
    };
}

function buildTreeSync(options: {
    keys: string[];
    divider: string;
    keysInfo: any;
    savedExpandedNodes?: any[];
}): { nodes: any[]; expandedNodes: any[] } {
    const { keys, divider, keysInfo } = options;
    const saved = options.savedExpandedNodes ?? [];
    const mainNodes: any[] = [];
    const newExpandedNodes: any[] = [];

    const recursiveNodes = (splitKey: string[], level = 0, nodes: any[] = mainNodes) => {
        let foundNode: any = false;
        if (level + 1 < splitKey.length) {
            for (const node of nodes) {
                if (node.label === splitKey[level] && node.type === 'folder') {
                    foundNode = node;
                    break;
                }
            }
        }
        if (!foundNode) {
            const node: any = {
                label: splitKey[level],
                key: splitKey.slice(0, level + 1).join(divider),
                children: [],
                childCount: 0,
                type: level + 1 === splitKey.length ? 'element' : 'folder',
            };
            if (node.type === 'element' && keysInfo) {
                node.keysInfo = keysInfo[node.key];
            }
            nodes.push(node);
            foundNode = node;
            for (const s of saved) {
                if (s.key === foundNode.key) newExpandedNodes.push(foundNode);
            }
        }
        if (level + 1 < splitKey.length) {
            recursiveNodes(splitKey, level + 1, foundNode.children);
        }
    };

    for (const key of keys) {
        recursiveNodes(divider === '' ? [key] : key.split(divider));
    }

    const recursiveKeyCount = (node: any) => {
        node.childCount = node.children.filter((c: any) => c.type === 'element').length;
        for (const child of node.children) {
            recursiveKeyCount(child);
            if (child.type === 'folder') node.childCount += child.childCount;
        }
    };

    for (const node of mainNodes) {
        recursiveKeyCount(node);
    }

    return { nodes: mainNodes, expandedNodes: newExpandedNodes };
}
