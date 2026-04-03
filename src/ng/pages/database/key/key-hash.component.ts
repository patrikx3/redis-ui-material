import { Component, Inject, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
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
import { KeyPaging } from './key-paging';
import { KeyPagerInlineComponent } from './key-pager-inline.component';

@Component({
    selector: 'p3xr-key-hash',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, KeyPagerInlineComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-hash.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyHashComponent extends KeyTypeBase implements OnInit, OnChanges {
    paging: KeyPaging;
    pagedItems: Array<{ key: string; value: any }> = [];

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

    ngOnInit(): void { this.updatePaging(); }
    ngOnChanges(changes: SimpleChanges): void {
        if (changes['p3xrValue']) this.updatePaging();
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
            await this.socket.request({ action: 'key-hash-delete-field', payload: { key: this.p3xrKey, hashKey } });
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

    copyItem(value: any): void { this.copy(value); }
    showJsonItem(value: any, event: Event): void { this.showJson(value, event); }
    downloadItem(hashKey: string): void { this.downloadBuffer(this.p3xrValueBuffer[hashKey], `${this.p3xrKey}-${hashKey}.bin`); }
}
