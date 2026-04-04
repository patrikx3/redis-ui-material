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
import { RedisStateService } from '../../services/redis-state.service';
import { SettingsService } from '../../services/settings.service';

require('./database-tree.component.scss');

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
    private expandedNodeObjects: any[] = [];
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
        @Inject(RedisStateService) private readonly state: RedisStateService,
        @Inject(SettingsService) private readonly settingsService: SettingsService,
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
        this.startTtlRepaint();

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

        const subExpandLevel = this.common.treeExpandToLevel$.subscribe((level: number) => this.ngZone.run(() => {
            const keys = new Set<string>();
            const collect = (nodes: any[], depth: number) => {
                for (const node of nodes) {
                    if (node.type === 'folder') {
                        if (depth < level) {
                            keys.add(node.key);
                        }
                        collect(node.children ?? [], depth + 1);
                    }
                }
            };
            collect(this.hierarchicalNodes, 0);
            this.expandedKeys = keys;
            this.flattenVisibleNodes();
            this.syncExpandedNodesToGlobal();
            this.cdr.markForCheck();
        }));
        this.unsubs.push(() => subExpandLevel.unsubscribe());

        setTimeout(() => {
            this.isEnabled = true;
            this.cdr.markForCheck();
        }, 50);
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }

    // --- TTL (computed on-the-fly from fetchedAt, single 30s repaint) ---

    private ttlRepaintTimer: any;

    private startTtlRepaint(): void {
        const tick = () => {
            this.cdr.markForCheck();
            let minTtl = Infinity;
            let hasExpired = false;
            for (const node of this.dataSource) {
                if (node.type === 'folder') continue;
                const serverTtl = node.keysInfo?.ttl;
                if (!serverTtl || serverTtl <= 0) continue;
                const remaining = this.getRemainingTtl(node);
                if (remaining <= 0) {
                    hasExpired = true;
                } else if (remaining < minTtl) {
                    minTtl = remaining;
                }
            }
            if (hasExpired) {
                this.cmd.refresh();
                // Retry soon in case refresh was throttled
                this.ttlRepaintTimer = setTimeout(tick, 3000);
                return;
            }
            let interval: number;
            if (minTtl <= 30) {
                interval = 1000;
            } else if (minTtl <= 300) {
                interval = 5000;
            } else {
                interval = 30000;
            }
            this.ttlRepaintTimer = setTimeout(tick, interval);
        };
        this.ttlRepaintTimer = setTimeout(tick, 30000);
        this.unsubs.push(() => clearTimeout(this.ttlRepaintTimer));
    }

    getRemainingTtl(node: FlatTreeNode): number {
        const ttl = node.keysInfo?.ttl;
        if (!ttl || ttl <= 0) return -1;
        const fetchedAt = this.state.keysInfoFetchedAt() ?? Date.now();
        const elapsed = Math.floor((Date.now() - fetchedAt) / 1000);
        const remaining = ttl - elapsed;
        return remaining > 0 ? remaining : -1;
    }

    formatTtl(node: FlatTreeNode): string {
        const remaining = this.getRemainingTtl(node);
        if (remaining <= 0) return '';
        const humanizeDuration = require('humanize-duration');
        const hdOpts = this.settingsService.getHumanizeDurationOptions();
        return humanizeDuration(remaining * 1000, {
            ...hdOpts,
            largest: 2,
            round: true,
            delimiter: ' ',
        });
    }

    getTtlClass(node: FlatTreeNode): string {
        const remaining = this.getRemainingTtl(node);
        if (remaining <= 0) return '';
        if (remaining < 30) return 'p3xr-tree-ttl-red p3xr-tree-ttl-pulse';
        if (remaining < 300) return 'p3xr-tree-ttl-red';
        if (remaining < 3600) return 'p3xr-tree-ttl-yellow';
        return 'p3xr-tree-ttl-green';
    }

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
                window['gtag']('config', this.settingsService.googleAnalytics, { page_path: '/delete' });
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
                window['gtag']('config', this.settingsService.googleAnalytics, { page_path: '/rename' });
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

            const divider = this.settingsService.redisTreeDivider();
            await this.socket.request({
                action: 'key-del-tree',
                payload: {
                    key: node.key,
                    redisTreeDivider: divider,
                },
            });

            this.common.toast(this.i18n.strings().status.treeDeleted({ key: node.key }));

            // If currently viewing a key under the deleted tree, go to statistics
            const currentPath = location.pathname;
            if (currentPath.startsWith('/database/key/')) {
                const currentKey = decodeURIComponent(currentPath.slice('/database/key/'.length).replace(/~/g, '%'));
                if (currentKey.startsWith(node.key + divider)) {
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
            return (globalThis as any).htmlEncode((strings.redisTypes?.[node.keysInfo.type] ?? node.keysInfo.type) + ' - ' + node.key);
        }
        return (globalThis as any).htmlEncode(node.key);
    }

    deleteTreeTooltip(node: FlatTreeNode): string {
        return this.i18n.strings().confirm?.deleteAllKeys?.({ key: node.key }) ?? '';
    }

    // --- Tree rebuild ---

    private rebuildTree(): void {
        this.divider = this.settingsService.redisTreeDivider() ?? ':';
        this.isReadonly = this.state.connection()?.readonly === true;

        const keys: string[] = this.state.paginatedKeys() ?? [];
        const keysInfo: any = this.state.keysInfo() ?? {};

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

        // Keep expanded nodes locally
        this.expandedNodeObjects = expandedNodeObjects;
    }

    private syncGlobalState(): void {
        this.divider = this.settingsService.redisTreeDivider() ?? ':';
        this.isReadonly = this.state.connection()?.readonly === true;
    }

    // --- Polling for change detection ---

    private startPolling(): void {
        let lastSnapshot = '';
        const id = setInterval(() => {
            const snapshot = JSON.stringify({
                keysLength: this.state.paginatedKeys()?.length,
                page: this.state.page(),
                divider: this.settingsService.redisTreeDivider(),
                readonly: this.state.connection()?.readonly,
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
