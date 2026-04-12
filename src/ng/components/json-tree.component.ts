import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTreeModule, MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface JsonNode {
    key: string;
    value: any;
    type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';
    children?: JsonNode[];
    childCount?: number;
}

interface FlatJsonNode {
    key: string;
    value: any;
    type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';
    level: number;
    expandable: boolean;
    childCount?: number;
}

/**
 * JSON tree viewer using Angular Material mat-tree.
 * Displays a JSON object/array as an expandable tree with syntax-colored values.
 *
 * Usage:
 *   <p3xr-json-tree [data]="myObject" [expanded]="true" [label]="'root'"></p3xr-json-tree>
 */
@Component({
    selector: 'p3xr-json-tree',
    standalone: true,
    imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-tree [dataSource]="dataSource" [treeControl]="treeControl" class="p3xr-json-mat-tree" [class.p3xr-json-tree-nowrap]="!wrap">
            <!-- Leaf nodes -->
            <mat-tree-node *matTreeNodeDef="let node" matTreeNodePadding [matTreeNodePaddingIndent]="20">
                <button mat-icon-button disabled class="p3xr-json-tree-toggle p3xr-json-tree-toggle-hidden">
                    <mat-icon svgIcon="chevron_right"></mat-icon>
                </button>
                <span class="p3xr-json-tree-leaf-content">
                    <span class="p3xr-json-tree-leaf-key"><span class="p3xr-json-tree-key">{{ node.key }}</span><span class="p3xr-json-tree-colon">:</span></span>
                    <span [class]="'p3xr-json-tree-value p3xr-json-tree-value-' + node.type">{{ formatDisplay(node) }}</span>
                </span>
            </mat-tree-node>

            <!-- Expandable nodes -->
            <mat-tree-node *matTreeNodeDef="let node; when: hasChild" matTreeNodePadding [matTreeNodePaddingIndent]="20">
                <button mat-icon-button matTreeNodeToggle class="p3xr-json-tree-toggle">
                    <mat-icon svgIcon="{{ treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right' }}"></mat-icon>
                </button>
                <span class="p3xr-json-tree-key">{{ node.key }}</span>
                <span class="p3xr-json-tree-colon">:&nbsp;</span>
                @if (!treeControl.isExpanded(node)) {
                    <span class="p3xr-json-tree-bracket">{{ node.type === 'array' ? '[' : '{' }}</span>
                    <span class="p3xr-json-tree-ellipsis">...</span>
                    <span class="p3xr-json-tree-bracket">{{ node.type === 'array' ? ']' : '}' }}</span>
                    <span class="p3xr-json-tree-count">({{ node.childCount }})</span>
                }
            </mat-tree-node>
        </mat-tree>
    `,
    styles: [`
        .p3xr-json-mat-tree {
            font-family: 'Roboto Mono', monospace;
            font-size: 13px;
            background: inherit !important;
        }
        .p3xr-json-mat-tree .mat-tree-node,
        .p3xr-json-mat-tree .mat-nested-tree-node {
            background: inherit !important;
            color: inherit !important;
        }
        .p3xr-json-mat-tree .mat-tree-node {
            min-height: 24px;
            height: auto;
            line-height: 1.6;
        }
        .p3xr-json-tree-toggle-hidden {
            visibility: hidden !important;
        }
        .p3xr-json-tree-toggle {
            width: 24px !important;
            height: 24px !important;
            padding: 0 !important;
            flex-shrink: 0;
        }
        .p3xr-json-tree-toggle .mat-icon {
            font-size: 18px;
            width: 18px;
            height: 18px;
            opacity: 0.6;
        }
        .p3xr-json-tree-leaf-content {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: flex-start;
            gap: 6px;
        }
        .p3xr-json-tree-leaf-key {
            flex-shrink: 0;
            white-space: nowrap;
        }
        .p3xr-json-tree-value {
            word-break: break-word;
            min-width: 0;
        }
        .p3xr-json-tree-key {
            font-weight: bold;
            color: var(--p3xr-json-key-color, #881391);
        }
        .p3xr-json-tree-colon { opacity: 0.6; }
        .p3xr-json-tree-bracket { opacity: 0.5; }
        .p3xr-json-tree-ellipsis { opacity: 0.4; margin: 0 2px; }
        .p3xr-json-tree-count { opacity: 0.4; font-size: 11px; margin-left: 4px; align-self: center; }
        :host { display: block; overflow: auto; }
        .p3xr-json-tree-value-string { color: var(--p3xr-json-value-string, #0b7500); }
        .p3xr-json-tree-value-number { color: var(--p3xr-json-value-number, #1a01cc); }
        .p3xr-json-tree-value-boolean { color: var(--p3xr-json-value-boolean, #c41a16); }
        .p3xr-json-tree-value-null { color: var(--p3xr-json-value-null, #808080); font-style: italic; }
        .p3xr-json-mat-tree .p3xr-json-tree-value { word-break: break-all; }
        .p3xr-json-mat-tree.p3xr-json-tree-nowrap .p3xr-json-tree-value { white-space: nowrap; word-break: normal; }
        .p3xr-json-mat-tree.p3xr-json-tree-nowrap .mat-tree-node { flex-wrap: nowrap; }
    `],
})
export class JsonTreeComponent implements OnChanges {
    @Input() data: any;
    @Input() label: string = '';
    @Input() expanded: boolean | 'recursive' = true;
    @Input() depth: number = 0;
    @Input() wrap: boolean = true;

    private transformer = (node: JsonNode, level: number): FlatJsonNode => ({
        key: node.key,
        value: node.value,
        type: node.type,
        level: level,
        expandable: node.type === 'object' || node.type === 'array',
        childCount: node.childCount,
    });

    treeControl = new FlatTreeControl<FlatJsonNode>(
        node => node.level,
        node => node.expandable,
    );

    private treeFlattener = new MatTreeFlattener(
        this.transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    hasChild = (_: number, node: FlatJsonNode) => node.expandable;

    ngOnChanges(_changes: SimpleChanges): void {
        this.buildTree();
    }

    private buildTree(): void {
        if (this.data === undefined || this.data === null) {
            this.dataSource.data = [];
            return;
        }

        const rootNode = this.jsonToNode(this.label || 'root', this.data);
        // If root is object/array, show its children directly under the root label
        this.dataSource.data = rootNode.children ? [rootNode] : [rootNode];

        // Expand based on the expanded input
        if (this.expanded === 'recursive') {
            this.treeControl.expandAll();
        } else if (this.expanded === true) {
            // Expand only the first level
            const flatNodes = this.treeControl.dataNodes;
            for (const node of flatNodes) {
                if (node.level === 0 && node.expandable) {
                    this.treeControl.expand(node);
                }
            }
        }
    }

    private jsonToNode(key: string, value: any): JsonNode {
        if (value === null) {
            return { key, value: null, type: 'null' };
        }
        if (Array.isArray(value)) {
            const children = value.map((item, index) => this.jsonToNode(String(index), item));
            return { key, value, type: 'array', children, childCount: children.length };
        }
        if (typeof value === 'object') {
            const children = Object.keys(value).map(k => this.jsonToNode(k, value[k]));
            return { key, value, type: 'object', children, childCount: children.length };
        }
        return { key, value, type: typeof value as any };
    }

    formatDisplay(node: FlatJsonNode): string {
        if (node.type === 'null') return 'null';
        if (node.type === 'string') return `"${node.value}"`;
        return String(node.value);
    }
}
