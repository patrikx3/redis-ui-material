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
import { P3xrAccordionComponent } from '../../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../../components/p3xr-button.component';

@Component({
    selector: 'p3xr-key-probabilistic',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatButtonModule, MatIconModule, MatTooltipModule,
        MatFormFieldModule, MatInputModule,
        MatListModule, MatDividerModule,
        P3xrAccordionComponent, P3xrButtonComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-probabilistic.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyProbabilisticComponent extends KeyTypeBase implements OnInit, OnChanges, OnDestroy {

    infoItems: Array<{ key: string; value: any }> = [];
    topkItems: Array<{ item: string; count: number }> = [];

    itemInput = '';
    incrementInput = 1;
    quantileInput = 0.5;

    autoRefresh = false;
    private autoRefreshInterval: any = null;
    readonly = false;

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
    }

    get strings() {
        return this.i18n.strings;
    }

    get type(): string {
        return this.p3xrResponse?.type || '';
    }

    ngOnInit() {
        this.readonly = this.redisState.connection()?.readonly === true;
        this.parseInfo();
        if (this.type === 'topk') {
            this.loadTopkList();
        }
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

    async addItem() {
        if (!this.itemInput.trim()) return;
        try {
            await this.socket.request({
                action: 'probabilistic-add',
                payload: {
                    key: this.p3xrKey,
                    type: this.type,
                    item: this.itemInput.trim(),
                    increment: this.incrementInput,
                },
            });
            this.common.toast(this.strings()?.page?.key?.probabilistic?.addedSuccessfully || 'Item added successfully');
            this.itemInput = '';
            this.refresh();
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    async checkItem() {
        if (!this.itemInput.trim()) return;
        try {
            const response = await this.socket.request({
                action: 'probabilistic-check',
                payload: {
                    key: this.p3xrKey,
                    type: this.type,
                    item: this.itemInput.trim(),
                },
            });
            const strings = this.strings();
            const exists = (response as any).result === 1;
            this.common.toast(`"${this.itemInput}" — ${exists
                ? (strings?.page?.key?.probabilistic?.exists || 'Exists')
                : (strings?.page?.key?.probabilistic?.doesNotExist || 'Does not exist')}`);
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    async deleteItem() {
        if (!this.itemInput.trim()) return;
        try {
            await this.common.confirm({
                message: this.strings()?.confirm?.delete || 'Delete?',
            });
            await this.socket.request({
                action: 'probabilistic-delete',
                payload: {
                    key: this.p3xrKey,
                    type: this.type,
                    item: this.itemInput.trim(),
                },
            });
            this.common.toast(this.strings()?.page?.key?.probabilistic?.deletedSuccessfully || 'Item deleted successfully');
            this.itemInput = '';
            this.refresh();
        } catch (e: any) {
            if (e?.message) this.common.toast(e.message);
        }
        this.cdr.markForCheck();
    }

    async queryItem() {
        if (!this.itemInput.trim()) return;
        try {
            const response = await this.socket.request({
                action: 'probabilistic-check',
                payload: {
                    key: this.p3xrKey,
                    type: this.type,
                    item: this.itemInput.trim(),
                },
            });
            const count = Array.isArray((response as any).result) ? (response as any).result[0] : (response as any).result;
            this.common.toast(`"${this.itemInput}" — ${this.strings()?.page?.key?.probabilistic?.topkCount || 'Count'}: ${count}`);
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    async queryQuantile() {
        try {
            const response = await this.socket.request({
                action: 'probabilistic-check',
                payload: {
                    key: this.p3xrKey,
                    type: this.type,
                    quantile: this.quantileInput,
                },
            });
            const strings = this.strings();
            const result = Array.isArray((response as any).result) ? (response as any).result[0] : (response as any).result;
            this.common.toast(`${strings?.page?.key?.probabilistic?.quantile || 'Quantile'} ${this.quantileInput} = ${result}`);
        } catch (e: any) {
            this.common.toast(e.message || 'Error');
        }
        this.cdr.markForCheck();
    }

    async resetTdigest() {
        try {
            await this.common.confirm({
                message: this.strings()?.page?.key?.probabilistic?.resetConfirm || 'Reset all data in this T-Digest?',
            });
            await this.socket.request({
                action: 'probabilistic-delete',
                payload: {
                    key: this.p3xrKey,
                    type: 'tdigest',
                },
            });
            this.common.toast('Reset');
            this.refresh();
        } catch (e: any) {
            if (e?.message) this.common.toast(e.message);
        }
        this.cdr.markForCheck();
    }

    async loadTopkList() {
        try {
            const response = await this.socket.request({
                action: 'probabilistic-check',
                payload: {
                    key: this.p3xrKey,
                    type: 'topk',
                },
            });
            this.topkItems = (response as any).result || [];
        } catch {
            this.topkItems = [];
        }
        this.cdr.markForCheck();
    }

    refresh() {
        this.cmd.refreshKey$.next();
        if (this.type === 'topk') {
            this.loadTopkList();
        }
    }
}
