import { Component, Input, Inject, OnInit, OnDestroy, NgZone, ElementRef, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkVirtualScrollViewport, ScrollingModule } from '@angular/cdk/scrolling';
import { MatTooltipModule } from '@angular/material/tooltip';

import { I18nService } from '../../services/i18n.service';
import { CommonService } from '../../services/common.service';
import { ThemeService } from '../../services/theme.service';
import { SocketService } from '../../services/socket.service';
import { KeyNewOrSetDialogService } from '../../dialogs/key-new-or-set-dialog.service';
import { NavigationService } from '../../services/navigation.service';
import { MainCommandService } from '../../services/main-command.service';
import { TreeBuilderService } from '../../services/tree-builder.service';

require('./database-tree.component.scss');

declare const p3xr: any;

export interface FlatTreeNode {
    label: string;
    key: string;
    level: number;
    expandable: boolean;
    type: 'folder' | 'element';
    childCount: number;
    keysInfo?: { type: string; length: number; ttl?: number };
    // Reference to the original hierarchical node (for expandedNodes sync)
    _sourceNode?: any;
}

@Component({
    selector: 'p3xr-database-tree',
    standalone: true,
    imports: [
        CommonModule,
        ScrollingModule,
        MatTooltipModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './database-tree.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseTreeComponent implements OnInit, OnDestroy {
    @Input() p3xrResize: any;
    @Input() p3xrMainRef: any;
    @ViewChild(CdkVirtualScrollViewport) private viewport?: CdkVirtualScrollViewport;

    dataSource: FlatTreeNode[] = [];
    isEnabled = false;
    isReadonly = false;
    divider = ':';
    readonly strings;
    private expandedKeys = new Set<string>();
    private hierarchicalNodes: any[] = [];
    private readonly unsubs: Array<() => void> = [];

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(ThemeService) private readonly theme: ThemeService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(KeyNewOrSetDialogService) private readonly keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(NavigationService) private readonly nav: NavigationService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(TreeBuilderService) private readonly treeBuilder: TreeBuilderService,
    ) {
        this.strings = this.i18n.strings;
        effect(() => {
            this.i18n.currentLang();
            this.cdr.markForCheck();
        });
    }

    ngOnInit(): void {
        this.syncGlobalState();
        this.attachWindowFocusListener();
        this.startPolling();

        // Subscribe to MainCommandService events
        const subDelete = this.cmd.keyDelete$.subscribe((arg) => {
            this.ngZone.run(() => this.deleteKey(arg.event, arg.key));
        });
        this.unsubs.push(() => subDelete.unsubscribe());

        const subRename = this.cmd.keyRename$.subscribe((arg) => {
            this.ngZone.run(() => this.renameKey(arg.event, arg.key));
        });
        this.unsubs.push(() => subRename.unsubscribe());

        const subKeyNew = this.cmd.keyNew$.subscribe((arg) => {
            this.ngZone.run(() => this.addKey(arg.event, arg.node ? { ...arg, _sourceNode: arg.node } as any : arg as any));
        });
        this.unsubs.push(() => subKeyNew.unsubscribe());

        const subTreeEnabled = this.cmd.treeControlEnabled$.subscribe((enabled) => {
            this.ngZone.run(() => { this.isEnabled = enabled; });
        });
        this.unsubs.push(() => subTreeEnabled.unsubscribe());

        const subTreeRefresh = this.cmd.treeRefresh$.subscribe(() => {
            this.ngZone.run(() => {
                this.syncGlobalState();
                this.rebuildTree();
            });
        });
        this.unsubs.push(() => subTreeRefresh.unsubscribe());

        const subExpand = this.common.treeExpandAll$.subscribe(() => this.ngZone.run(() => {
            const allFolderKeys = new Set<string>();
            const collect = (nodes: any[]) => {
                for (const node of nodes) {
                    if (node.type === 'folder') {
                        allFolderKeys.add(node.key);
                        collect(node.children ?? []);
                    }
                }
            };
            collect(this.hierarchicalNodes);
            this.expandedKeys = allFolderKeys;
            this.flattenVisibleNodes();
            this.syncExpandedNodesToGlobal();
            this.cdr.markForCheck();
        }));
        this.unsubs.push(() => subExpand.unsubscribe());

        const subCollapse = this.common.treeCollapseAll$.subscribe(() => this.ngZone.run(() => {
            this.expandedKeys = new Set();
            this.flattenVisibleNodes();
            this.syncExpandedNodesToGlobal();
            this.cdr.markForCheck();
        }));
        this.unsubs.push(() => subCollapse.unsubscribe());

        setTimeout(() => {
            this.isEnabled = true;
            this.cdr.markForCheck();
        }, 50);
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }

    // --- TTL indicator removed: tree TTL is fetched once and becomes stale,
    // causing mismatch with the fresh TTL in key view. See feature-03 docs.
    // The server still includes TTL in keysInfo for potential future use.

    // --- Tree data ---

    trackByKey(_index: number, node: FlatTreeNode): string {
        return node.key;
    }

    isExpanded(node: FlatTreeNode): boolean {
        return this.expandedKeys.has(node.key);
    }

    toggleExpand(node: FlatTreeNode): void {
        if (this.expandedKeys.has(node.key)) {
            this.expandedKeys.delete(node.key);
        } else {
            this.expandedKeys.add(node.key);
        }
        this.flattenVisibleNodes();
        this.syncExpandedNodesToGlobal();
    }

    // --- Node actions ---

    selectNode(node: FlatTreeNode): void {
        this.navigateTo('database.key', {
            key: node.key,
        });
    }

    async deleteKey(event: Event, key: string): Promise<void> {
        try {
            event.preventDefault();
            event.stopPropagation();

            await this.common.confirm({
                message: this.i18n.strings().confirm.deleteKey,
            });

            await this.socket.request({
                action: 'delete',
                payload: { key },
            });

            if (typeof window['gtag'] === 'function') {
                window['gtag']('config', p3xr.settings.googleAnalytics, { page_path: '/delete' });
            }

            this.navigateTo('database.statistics');
            this.common.toast(this.i18n.strings().status.deletedKey({ key }));

            await this.cmd.refresh();
            this.rebuildTree();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async renameKey(event: Event, key: string): Promise<void> {
        try {
            event?.stopPropagation?.();

            const newKey = await this.common.prompt({
                title: this.i18n.strings().confirm.rename.title,
                placeholder: this.i18n.strings().confirm.rename.placeholder,
                initialValue: key,
                ok: this.i18n.strings().intention.rename,
                cancel: this.i18n.strings().intention.cancel,
            });

            await this.socket.request({
                action: 'rename',
                payload: { key, keyNew: newKey },
            });

            if (typeof window['gtag'] === 'function') {
                window['gtag']('config', p3xr.settings.googleAnalytics, { page_path: '/rename' });
            }

            this.navigateTo('database.key', {
                key: newKey,
            });
            this.common.toast(this.i18n.strings().status.renamedKey);

            await this.cmd.refresh();
            this.rebuildTree();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async deleteTree(event: Event, node: FlatTreeNode): Promise<void> {
        try {
            event.stopPropagation();

            await this.common.confirm({
                message: this.i18n.strings().confirm.deleteAllKeys({ key: node.key }),
            });

            await this.socket.request({
                action: 'key-del-tree',
                payload: {
                    key: node.key,
                    redisTreeDivider: p3xr.settings.redisTreeDivider,
                },
            });

            this.common.toast(this.i18n.strings().status.treeDeleted({ key: node.key }));

            // If currently viewing a key under the deleted tree, go to statistics
            const currentPath = location.pathname;
            if (currentPath.startsWith('/database/key/')) {
                const currentKey = decodeURIComponent(currentPath.slice('/database/key/'.length).replace(/~/g, '%'));
                if (currentKey.startsWith(node.key + p3xr.settings.redisTreeDivider)) {
                    this.navigateTo('database.statistics');
                }
            }

            await this.cmd.refresh();
            this.rebuildTree();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async addKey(event: Event, node: FlatTreeNode): Promise<void> {
        try {
            event.stopPropagation();

            const response = await this.keyNewOrSetDialog.show({
                type: 'add',
                $event: event,
                node: node._sourceNode ?? { key: node.key },
            });

            await this.cmd.refresh();
            this.rebuildTree();

            this.navigateTo('database.key', {
                key: response.key,
            });
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    // --- Tooltips ---

    extractNodeTooltip(node: FlatTreeNode): string {
        if (node.type !== 'folder' && node.keysInfo) {
            const strings = this.i18n.strings();
            return p3xr.ui.htmlEncode((strings.redisTypes?.[node.keysInfo.type] ?? node.keysInfo.type) + ' - ' + node.key);
        }
        return p3xr.ui.htmlEncode(node.key);
    }

    deleteTreeTooltip(node: FlatTreeNode): string {
        return this.i18n.strings().confirm?.deleteAllKeys?.({ key: node.key }) ?? '';
    }

    // --- Tree rebuild ---

    private rebuildTree(): void {
        const state = p3xr?.state;
        if (!state) {
            return;
        }

        this.divider = p3xr.settings?.redisTreeDivider ?? ':';
        this.isReadonly = state.connection?.readonly === true;

        const keys: string[] = state.keysRaw ?? [];
        const keysInfo: any = state.keysInfo ?? {};

        this.treeBuilder.keysToTreeControl({
            keys,
            divider: this.divider,
            keysInfo,
        }).then(({ nodes }) => {
            this.hierarchicalNodes = nodes;
            this.flattenVisibleNodes();
            this.requestViewRefresh();
        });
    }

    private flattenVisibleNodes(): void {
        const result: FlatTreeNode[] = [];

        const flatten = (nodes: any[], level: number) => {
            for (const node of nodes) {
                result.push({
                    label: node.label,
                    key: node.key,
                    level,
                    expandable: node.type === 'folder',
                    type: node.type,
                    childCount: node.childCount ?? 0,
                    keysInfo: node.keysInfo,
                    _sourceNode: node,
                });

                if (node.type === 'folder' && this.expandedKeys.has(node.key) && node.children?.length > 0) {
                    flatten(node.children, level + 1);
                }
            }
        };

        flatten(this.hierarchicalNodes, 0);
        this.dataSource = result;
    }

    private syncExpandedNodesToGlobal(): void {
        // Build array of node objects matching the expanded keys
        const expandedNodeObjects: any[] = [];
        const collectExpanded = (nodes: any[]) => {
            for (const node of nodes) {
                if (node.type === 'folder' && this.expandedKeys.has(node.key)) {
                    expandedNodeObjects.push(node);
                }
                if (node.children?.length > 0) {
                    collectExpanded(node.children);
                }
            }
        };
        collectExpanded(this.hierarchicalNodes);

        p3xr.state.expandedNodes = expandedNodeObjects;
    }

    private syncGlobalState(): void {
        this.divider = p3xr?.settings?.redisTreeDivider ?? ':';
        this.isReadonly = p3xr?.state?.connection?.readonly === true;
    }

    // --- Polling for change detection ---

    private startPolling(): void {
        let lastSnapshot = '';
        const id = setInterval(() => {
            const snapshot = JSON.stringify({
                keysLength: p3xr?.state?.keysRaw?.length,
                divider: p3xr?.settings?.redisTreeDivider,
                readonly: p3xr?.state?.connection?.readonly,
            });
            if (snapshot !== lastSnapshot) {
                lastSnapshot = snapshot;
                this.ngZone.run(() => {
                    this.syncGlobalState();
                    this.rebuildTree();
                });
            }
        }, 300);
        this.unsubs.push(() => clearInterval(id));
        // Initial build
        this.ngZone.run(() => this.rebuildTree());
    }

    private attachWindowFocusListener(): void {
        const focusListener = () => {
            if (this.isEnabled) {
                this.ngZone.run(() => {
                    this.isEnabled = false;
                    setTimeout(() => {
                        this.isEnabled = true;
                        this.rebuildTree();
                    });
                });
            }
        };
        window.addEventListener('focus', focusListener);
        this.unsubs.push(() => window.removeEventListener('focus', focusListener));
    }

    // --- Navigation ---

    private navigateTo(state: string, params?: any): void {
        this.nav.navigateTo(state, params);
    }

    private requestViewRefresh(): void {
        setTimeout(() => {
            try {
                this.cdr.detectChanges();
                this.viewport?.checkViewportSize();
            } catch {
                // Ignore late refreshes during teardown.
            }
        });
    }
}
