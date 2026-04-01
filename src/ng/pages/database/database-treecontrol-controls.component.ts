import { Component, Input, Inject, OnInit, OnDestroy, NgZone, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
declare const p3xr: any;

import { P3xrInputComponent } from '../../components/p3xr-input.component';
import { I18nService } from '../../services/i18n.service';
import { CommonService } from '../../services/common.service';
import { MainCommandService } from '../../services/main-command.service';
import { SocketService } from '../../services/socket.service';
import { TreecontrolSettingsDialogService } from '../../dialogs/treecontrol-settings-dialog.service';
import { KeyImportDialogService } from '../../dialogs/key-import-dialog.service';

require('./database-treecontrol-controls.component.scss');

@Component({
    selector: 'p3xr-database-treecontrol-controls',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatTooltipModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        P3xrInputComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './database-treecontrol-controls.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseTreecontrolControlsComponent implements OnInit, OnDestroy {
    @Input() p3xrMainRef: any;

    page = 1;
    pages = 0;
    search = '';
    keyCount = 0;
    redisTreeDivider = ':';
    treeDividers: string[] = [];
    searchClientSide = false;
    isReadonly = false;

    readonly strings;

    private readonly unsubs: Array<() => void> = [];
    private readonly dividerChange$ = new Subject<string>();

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(TreecontrolSettingsDialogService) private readonly treeSettingsDialog: TreecontrolSettingsDialogService,
        @Inject(KeyImportDialogService) private readonly keyImportDialog: KeyImportDialogService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.syncFromGlobal();

        // If search was restored from state (e.g. cookie), trigger it
        if (this.search) {
            this.onSearchChange();
        }

        const sub = this.dividerChange$.pipe(debounceTime(666)).subscribe((value) => {
            this.applyDivider(value);
        });
        this.unsubs.push(() => sub.unsubscribe());

        const refreshSub = this.cmd.treeRefresh$.subscribe(() => {
            this.ngZone.run(() => {
                this.syncFromGlobal();
                this.requestViewRefresh();
            });
        });
        this.unsubs.push(() => refreshSub.unsubscribe());
    }

    ngOnDestroy(): void {
        this.unsubs.forEach((unsub) => unsub());
    }

    keyCountText(): string {
        const fn = this.strings()?.status?.keyCount;
        return typeof fn === 'function' ? fn({ keyCount: this.keyCount }) : String(this.keyCount);
    }

    searchPlaceholder(): string {
        const searchStrings = this.strings()?.page?.treeControls?.search;
        return this.searchClientSide
            ? (searchStrings?.placeholderClient || 'Search keys')
            : (searchStrings?.placeholderServer || 'Search keys on server');
    }

    treeExpandAll(): void {
        this.common.treeExpandAll$.next();
    }

    treeCollapseAll(): void {
        this.common.treeCollapseAll$.next();
    }

    async refreshTree(): Promise<void> {
        await this.cmd.refresh();
        this.ngZone.run(() => {
            this.syncFromGlobal();
            this.requestViewRefresh();
        });
    }

    async openTreeSettingDialog(event: Event): Promise<void> {
        await this.treeSettingsDialog.show({ $event: event });
        this.syncFromGlobal();
        this.requestViewRefresh();
    }

    onDividerInputChange(value: string): void {
        this.redisTreeDivider = value ?? '';
        if (p3xr?.settings) {
            p3xr.settings.redisTreeDivider = this.redisTreeDivider;
        }
        this.dividerChange$.next(this.redisTreeDivider);
    }

    setDivider(value: string): void {
        this.redisTreeDivider = value ?? '';
        this.applyDivider(this.redisTreeDivider);
    }

    private applyDivider(value: string): void {
        if (p3xr?.settings) {
            p3xr.settings.redisTreeDivider = value;
        }

        if (p3xr?.state) {
            p3xr.state.redisChanged = true;
        }
        this.cmd.treeRefresh$.next();

        this.syncFromGlobal();
    }

    pageAction(page: 'first' | 'prev' | 'next' | 'last'): void {
        const state = p3xr?.state;
        if (!state) {
            return;
        }

        switch (page) {
            case 'prev':
                if (state.page - 1 >= 1) {
                    state.page = state.page - 1;
                }
                break;
            case 'next':
                if (state.page + 1 <= state.pages) {
                    state.page = state.page + 1;
                }
                break;
            case 'last':
                state.page = state.pages;
                break;
            case 'first':
                state.page = 1;
                break;
        }

        this.syncFromGlobal();
    }

    onPageInputChange(value: any): void {
        const parsed = parseInt(value, 10);
        const state = p3xr?.state;
        if (!state) {
            return;
        }
        state.page = isNaN(parsed) ? 1 : parsed;
        this.pageChange();
    }

    pageChange(): void {
        const state = p3xr?.state;
        if (!state) {
            return;
        }
        if (state.page < 1) {
            state.page = 1;
        } else if (state.page > state.pages) {
            state.page = state.pages;
        }
        this.syncFromGlobal();
    }

    onSearchModelChange(value: string): void {
        this.search = value ?? '';
        if (p3xr?.state) {
            p3xr.state.search = this.search;
        }
    }

    async onSearchChange(): Promise<void> {
        if (!p3xr?.state) {
            return;
        }

        p3xr.state.search = this.search;
        p3xr.state.page = 1;

        if (p3xr.settings?.searchClientSide) {
            p3xr.state.redisChanged = true;
        }

        await this.cmd.refresh();
        this.syncFromGlobal();
        this.requestViewRefresh();
        this.socket.tick();
    }

    async clearSearch(): Promise<void> {
        this.search = '';
        await this.onSearchChange();
    }

    async exportKeys(): Promise<void> {
        const keys = p3xr?.state?.keysRaw;
        if (!Array.isArray(keys) || keys.length === 0) {
            this.common.toast({ message: this.strings().label?.noKeysToExport || 'No keys to export' });
            return;
        }

        try {
            p3xr?.ui?.overlay?.show({
                message: this.strings().label?.exportProgress || 'Exporting keys...',
            });

            const response = await this.socket.request({
                action: 'key-export',
                payload: { keys },
            });

            const json = JSON.stringify(response.data, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const connName = p3xr?.state?.connection?.name || 'redis';
            const db = p3xr?.state?.currentDatabase ?? 0;
            a.download = `${connName}-db${db}-export.json`;
            a.click();
            URL.revokeObjectURL(url);

            this.common.toast({ message: this.strings().status?.exportDone || 'Export complete' });
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            p3xr?.ui?.overlay?.hide();
        }
    }

    async importKeys(): Promise<void> {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onerror = () => this.common.generalHandleError(reader.error);
            reader.onload = async (e: any) => {
                try {
                    const parsed = JSON.parse(e.target.result);
                    if (!parsed?.keys || !Array.isArray(parsed.keys) || parsed.keys.length === 0) {
                        this.common.toast({ message: this.strings().label?.importNoKeys || 'No keys found in file' });
                        return;
                    }

                    const result = await this.keyImportDialog.show({ data: parsed });
                    if (result?.pending) {
                        // Dialog closed, now show overlay and do import
                        try {
                            p3xr?.ui?.overlay?.show({
                                message: this.strings().label?.importProgress || 'Importing keys...',
                            });
                            const response = await this.socket.request({
                                action: 'key-import',
                                payload: {
                                    keys: result.keys,
                                    conflictMode: result.conflictMode,
                                },
                            });
                            const data = response.data;
                            const statusFn = this.strings().status?.importDone;
                            const message = typeof statusFn === 'function'
                                ? statusFn(data)
                                : `Import complete: ${data.created} created, ${data.skipped} skipped, ${data.errors} errors`;
                            this.common.toast({ message });
                        } finally {
                            p3xr?.ui?.overlay?.hide();
                        }
                        // Refresh tree after import
                        await this.cmd.refresh();
                        this.ngZone.run(() => {
                            this.syncFromGlobal();
                            this.requestViewRefresh();
                        });
                    }
                } catch (e: any) {
                    if (e !== undefined && e !== null) {
                        this.common.generalHandleError(e);
                    }
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    searchInputClass(): string {
        const hasSearch = this.search.length > 0;
        if (this.isReadonly) {
            return hasSearch ? 'search-readonly-clear' : 'search-readonly';
        }
        return hasSearch ? 'search-full-clear' : 'search-full';
    }

    exportLabel(): string {
        const strings = this.strings();
        if (this.search.length > 0) {
            const fn = strings.intention?.exportSearchResults;
            return typeof fn === 'function' ? fn({ count: this.keyCount }) : `Export ${this.keyCount} results`;
        }
        const fn = strings.intention?.exportAllKeys;
        return typeof fn === 'function' ? fn({ count: this.keyCount }) : `Export all ${this.keyCount} keys`;
    }

    addRootKey(event: Event): void {
        this.cmd.addKey({ event });
    }

    private syncFromGlobal(): void {
        // Access state.keys to trigger the computed getter that updates globalKeysRaw
        // (pages getter depends on globalKeysRaw which is set inside the keys getter)
        const _keys = p3xr?.state?.keys;
        this.page = Number(p3xr?.state?.page ?? 1);
        this.pages = Number(p3xr?.state?.pages ?? 0);
        this.search = p3xr?.state?.search ?? '';
        this.keyCount = Array.isArray(p3xr?.state?.keysRaw) ? p3xr.state.keysRaw.length : 0;
        this.redisTreeDivider = p3xr?.settings?.redisTreeDivider ?? ':';
        this.treeDividers = Array.isArray(p3xr?.state?.cfg?.treeDividers) ? p3xr.state.cfg.treeDividers.slice() : [];
        this.searchClientSide = !!p3xr?.settings?.searchClientSide;
        this.isReadonly = p3xr?.state?.connection?.readonly === true;
    }

    private requestViewRefresh(): void {
        setTimeout(() => {
            try {
                this.cdr.detectChanges();
            } catch {
                // Ignore late refreshes during teardown.
            }
        });
    }
}
