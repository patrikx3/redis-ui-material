import { Component, Inject, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';
import { MainCommandService } from '../../../services/main-command.service';
import { RedisStateService } from '../../../services/redis-state.service';
import { SettingsService } from '../../../services/settings.service';
import { KeyTypeBase } from './key-type-base';
import { KeyPaging } from './key-paging';
import { KeyPagerInlineComponent } from './key-pager-inline.component';
import { P3xrAccordionComponent } from '../../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../../components/p3xr-button.component';

@Component({
    selector: 'p3xr-key-vectorset',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatButtonModule, MatIconModule, MatTooltipModule,
        MatFormFieldModule, MatInputModule,
        MatListModule, MatDividerModule,
        P3xrAccordionComponent, P3xrButtonComponent, KeyPagerInlineComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-vectorset.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyVectorsetComponent extends KeyTypeBase implements OnInit, OnChanges, OnDestroy {

    infoItems: Array<{ key: string; value: any }> = [];
    elements: Array<{ element: string; score: number }> = [];
    pagedElements: Array<{ element: string; score: number }> = [];
    paging: KeyPaging;
    simResults: Array<{ element: string; score: number }> = [];

    elementInput = '';
    vectorInput = '';
    simQueryInput = '';
    simCountInput = 10;
    simFilterInput = '';
    simMode: 'element' | 'vector' = 'element';

    autoRefresh = false;
    private autoRefreshInterval: any = null;
    readonly = false;
    showAddForm = false;

    constructor(
        @Inject(I18nService) i18n: I18nService,
        @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService,
        @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(RedisStateService) redisState: RedisStateService,
        @Inject(SettingsService) settingsService: SettingsService,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr, redisState, settingsService);
        this.paging = new KeyPaging({ settingsService });
    }

    updatePagedElements(): void {
        this.pagedElements = this.elements.slice(this.paging.startIndex, this.paging.endIndex);
    }

    get strings() {
        return this.i18n.strings;
    }

    ngOnInit() {
        this.readonly = this.redisState.connection()?.readonly === true;
        this.parseInfo();
        this.loadElements();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['p3xrValue']) {
            this.parseInfo();
        }
    }

    ngOnDestroy() {
        this.stopAutoRefresh();
        this.destroyBase();
    }

    toggleAutoRefresh(): void {
        this.autoRefresh = !this.autoRefresh;
        if (this.autoRefresh) {
            this.startAutoRefresh();
        } else {
            this.stopAutoRefresh();
        }
        this.cdr.markForCheck();
    }

    private startAutoRefresh(): void {
        this.stopAutoRefresh();
        this.autoRefreshInterval = setInterval(() => {
            this.refresh();
        }, 10000);
    }

    private stopAutoRefresh(): void {
        if (this.autoRefreshInterval) {
            clearInterval(this.autoRefreshInterval);
            this.autoRefreshInterval = null;
        }
    }

    private parseInfo() {
        this.infoItems = [];
        try {
            const val = this.p3xrValue;
            let info: any;
            if (typeof val === 'object' && val !== null && !ArrayBuffer.isView(val)) {
                info = val;
            } else if (typeof val === 'string') {
                info = JSON.parse(val);
            } else if (ArrayBuffer.isView(val)) {
                info = JSON.parse(new TextDecoder().decode(val as any));
            }
            if (info && typeof info === 'object') {
                this.infoItems = Object.entries(info).map(([key, value]) => ({ key, value }));
            }
        } catch {
            // ignore parse errors
        }
    }

    async loadElements() {
        try {
            const response = await this.socket.request({
                action: 'vectorset-elements',
                payload: {
                    key: this.p3xrKey,
                },
            });
            this.elements = (response as any).elements || [];
            this.paging.figurePaging(this.elements.length);
            this.updatePagedElements();
        } catch {
            this.elements = [];
            this.pagedElements = [];
        }
        this.cdr.markForCheck();
    }

    async searchSimilar(queryValue?: string, mode?: 'element' | 'vector') {
        const query = queryValue || this.simQueryInput;
        const searchMode = mode || this.simMode;
        if (!query.trim()) return;
        try {
            const response = await this.socket.request({
                action: 'vectorset-sim',
                payload: {
                    key: this.p3xrKey,
                    query: query.trim(),
                    count: this.simCountInput,
                    mode: searchMode,
                    filter: this.simFilterInput.trim() || undefined,
                },
            });
            this.simResults = (response as any).results || [];
            this.common.toast(this.strings()?.page?.key?.vectorset?.searchComplete || 'Search complete');
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
            this.simResults = [];
        }
        this.cdr.markForCheck();
    }

    searchSimilarByElement(element: string) {
        this.simQueryInput = element;
        this.simMode = 'element';
        this.searchSimilar(element, 'element');
    }

    async addElement() {
        if (!this.elementInput.trim() || !this.vectorInput.trim()) return;
        try {
            await this.socket.request({
                action: 'vectorset-add',
                payload: {
                    key: this.p3xrKey,
                    element: this.elementInput.trim(),
                    vector: this.vectorInput.trim(),
                },
            });
            this.common.toast(this.strings()?.page?.key?.vectorset?.addedSuccessfully || 'Element added successfully');
            this.elementInput = '';
            this.vectorInput = '';
            this.refresh();
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    async removeElement(element: string) {
        try {
            await this.common.confirm({
                message: this.strings()?.confirm?.delete || 'Delete?',
            });
            await this.socket.request({
                action: 'vectorset-remove',
                payload: {
                    key: this.p3xrKey,
                    element: element,
                },
            });
            this.common.toast(this.strings()?.page?.key?.vectorset?.removedSuccessfully || 'Element removed successfully');
            this.refresh();
        } catch (e: any) {
            if (e?.message) this.common.toast(e.message);
        }
        this.cdr.markForCheck();
    }

    async getAttributes(element: string) {
        try {
            const response = await this.socket.request({
                action: 'vectorset-getattr',
                payload: {
                    key: this.p3xrKey,
                    element: element,
                },
            });
            const attrs = (response as any).attributes;
            if (attrs) {
                this.common.toast(`${element}: ${JSON.stringify(attrs)}`);
            } else {
                this.common.toast(`${element}: ${this.strings()?.page?.key?.vectorset?.noAttributes || 'No attributes'}`);
            }
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    refresh() {
        this.cmd.refreshKey$.next();
        this.loadElements();
    }
}
