import { Component, Inject, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import { HexMonitorComponent } from './hex-monitor.component';
import { KeyPaging } from './key-paging';
import { KeyPagerInlineComponent } from './key-pager-inline.component';
import { TtlDialogService } from '../../../dialogs/ttl-dialog.service';
import humanizeDuration from 'humanize-duration';

@Component({
    selector: 'p3xr-key-hash',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, KeyPagerInlineComponent, HexMonitorComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-hash.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyHashComponent extends KeyTypeBase implements OnInit, OnChanges, OnDestroy {
    paging: KeyPaging;
    pagedItems: Array<{ key: string; value: any }> = [];
    fieldTtls: Record<string, number> = {};
    private fieldTtlsFetchedAt = 0;
    private ttlCountdownInterval: any = null;

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
        @Inject(TtlDialogService) private ttlDialog: TtlDialogService,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr, redisState, settingsService);
        this.paging = new KeyPaging({ settingsService });
    }

    ngOnInit(): void { this.updatePaging(); this.loadFieldTtls(); }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['p3xrValue']) { this.updatePaging(); this.loadFieldTtls(); }
    }

    updatePaging(): void {
        if (!this.p3xrValue) return;
        this.paging.figurePaging(Object.keys(this.p3xrValue).length);
        this.updatePagedItems();
    }

    updatePagedItems(): void {
        if (!this.p3xrValue) { this.pagedItems = []; return; }
        const keys = Object.keys(this.p3xrValue);
        this.pagedItems = keys.slice(this.paging.startIndex, this.paging.endIndex)
            .map(k => ({ key: k, value: this.p3xrValue[k] }));
    }

    async addHash(event: Event): Promise<void> {
        try {
            await this.keyNewOrSetDialog.show({ $event: event, type: 'append', model: { type: 'hash', key: this.p3xrKey } });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async deleteHashKey(hashKey: string, event: Event): Promise<void> {
        try {
            await this.common.confirm({ message: this.i18n.strings().confirm?.deleteHashKey });
            await this.socket.request({ action: 'key/hash-delete-field', payload: { key: this.p3xrKey, hashKey } });
            this.common.toast(this.i18n.strings().status?.deletedHashKey);
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async editValue(hashKey: string, value: any, event: Event): Promise<void> {
        try {
            const editValue = typeof value === 'string' && value.length >= this.maxValueAsBuffer
                ? this.p3xrValueBuffer[hashKey] : value;
            await this.keyNewOrSetDialog.show({
                $event: event, type: 'edit',
                model: { type: 'hash', key: this.p3xrKey, hashKey, value: editValue },
            });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    ngOnDestroy(): void {
        this.clearTtlCountdown();
    }

    private clearTtlCountdown(): void {
        if (this.ttlCountdownInterval) {
            clearInterval(this.ttlCountdownInterval);
            this.ttlCountdownInterval = null;
        }
    }

    private startTtlCountdown(): void {
        this.clearTtlCountdown();
        const hasAnyTtl = Object.values(this.fieldTtls).some(t => t > 0);
        if (!hasAnyTtl) return;
        this.ttlCountdownInterval = setInterval(() => {
            // Check if any field just expired — refresh the key view
            const anyExpired = Object.keys(this.fieldTtls).some(f => {
                const ttl = this.fieldTtls[f];
                if (!ttl || ttl <= 0) return false;
                const elapsed = Math.floor((Date.now() - this.fieldTtlsFetchedAt) / 1000);
                return ttl - elapsed <= 0;
            });
            if (anyExpired) {
                this.clearTtlCountdown();
                this.refreshKey();
                return;
            }
            this.cdr.markForCheck();
        }, 1000);
    }

    private getRemainingFieldTtl(field: string): number {
        const ttl = this.fieldTtls[field];
        if (!ttl || ttl <= 0) return -1;
        const elapsed = Math.floor((Date.now() - this.fieldTtlsFetchedAt) / 1000);
        const remaining = ttl - elapsed;
        return remaining > 0 ? remaining : -1;
    }

    async loadFieldTtls(): Promise<void> {
        if (!this.redisState.redisVersion().isAtLeast(8, 0) || !this.pagedItems.length) return;
        try {
            const fields = this.pagedItems.map(item => item.key);
            if (fields.length === 0) return;
            const response = await this.socket.request({
                action: 'hash-field/ttls',
                payload: { key: this.p3xrKey, fields },
            });
            this.fieldTtls = (response as any).fieldTtls || {};
            this.fieldTtlsFetchedAt = Date.now();
            this.startTtlCountdown();
            this.cdr.markForCheck();
        } catch {
            this.fieldTtls = {};
        }
    }

    getFieldTtlColor(field: string): string {
        const remaining = this.getRemainingFieldTtl(field);
        if (remaining <= 0) return '';
        if (remaining < 300) return 'var(--mat-sys-error, #f44336)';
        if (remaining < 3600) return 'var(--mat-sys-tertiary, #ff9800)';
        return '#4caf50';
    }

    isFieldTtlPulsing(field: string): boolean {
        const remaining = this.getRemainingFieldTtl(field);
        return remaining > 0 && remaining < 30;
    }

    hasFieldTtl(field: string): boolean {
        return this.getRemainingFieldTtl(field) > 0;
    }

    formatFieldTtl(field: string): string {
        const remaining = this.getRemainingFieldTtl(field);
        if (remaining <= 0) return '';
        const hdOpts = this.settingsService.getHumanizeDurationOptions();
        return humanizeDuration(remaining * 1000, { ...hdOpts, largest: 2, round: true, delimiter: ' ' });
    }

    async setFieldTtl(hashKey: string, event: Event): Promise<void> {
        try {
            // Get current field TTL
            const ttlResponse = await this.socket.request({
                action: 'hash-field/ttl-get',
                payload: { key: this.p3xrKey, field: hashKey },
            });
            const currentTtl = ttlResponse.ttl ?? -1;
            const result = await this.ttlDialog.show({ $event: event, model: { ttl: currentTtl } });
            await this.socket.request({
                action: 'hash-field/ttl',
                payload: { key: this.p3xrKey, field: hashKey, ttl: result.model.ttl },
            });
            this.common.toast(`${hashKey}: TTL ${result.model.ttl === -1 ? 'removed' : result.model.ttl + 's'}`);
            this.loadFieldTtls();
        } catch (e: any) {
            if (e !== undefined) this.common.generalHandleError(e);
        }
    }

    copyItem(value: any): void { this.copy(value); }
    showJsonItem(value: any, event: Event): void { this.showJson(value, event); }
    downloadItem(hashKey: string): void { this.downloadBuffer(this.p3xrValueBuffer[hashKey], `${this.p3xrKey}-${hashKey}.bin`); }
}
