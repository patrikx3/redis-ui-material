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
import { KeyTypeBase } from './key-type-base';
import { KeyPaging } from './key-paging';
import { KeyPagerInlineComponent } from './key-pager-inline.component';

declare const p3xr: any;

@Component({
    selector: 'p3xr-key-zset',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, KeyPagerInlineComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-zset.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyZsetComponent extends KeyTypeBase implements OnInit, OnChanges {
    paging = new KeyPaging({ zsetMode: true });
    pagedItems: Array<{ score: string; member: string; index: number }> = [];

    constructor(
        @Inject(I18nService) i18n: I18nService, @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService, @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) { super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr); }

    ngOnInit(): void { this.updatePaging(); }
    ngOnChanges(c: SimpleChanges): void { if (c['p3xrValue']) this.updatePaging(); }

    updatePaging(): void {
        if (!this.p3xrValue) return;
        this.paging.figurePaging(this.p3xrValue.length);
        this.updatePagedItems();
    }

    updatePagedItems(): void {
        if (!this.p3xrValue) { this.pagedItems = []; return; }
        // Zset flat array: [member, score, member, score, ...]
        const items: Array<{ score: string; member: string; index: number }> = [];
        for (let i = 0; i < this.p3xrValue.length; i += 2) {
            items.push({ member: this.p3xrValue[i], score: this.p3xrValue[i + 1], index: i / 2 });
        }
        this.pagedItems = items.slice(this.paging.startIndex, this.paging.endIndex);
    }

    async addZSet(event: Event): Promise<void> {
        try {
            await this.keyNewOrSetDialog.show({ $event: event, type: 'append', model: { type: 'zset', key: this.p3xrKey } });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async deleteZSet(item: any, event: Event): Promise<void> {
        try {
            await this.common.confirm({ message: this.i18n.strings().confirm?.deleteZSetMember });
            await this.socket.request({
                action: 'key-zset-delete-member',
                payload: { key: this.p3xrKey, value: this.p3xrValueBuffer[item.index * 2] },
            });
            this.common.toast(this.i18n.strings().status?.deletedZSetMember);
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async editValue(item: any, event: Event): Promise<void> {
        try {
            const editValue = typeof item.member === 'string' && item.member.length >= this.maxValueAsBuffer
                ? this.p3xrValueBuffer[item.index * 2] : item.member;
            await this.keyNewOrSetDialog.show({
                $event: event, type: 'edit',
                model: { type: 'zset', key: this.p3xrKey, value: editValue, score: item.score },
            });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    copyItem(value: any): void { this.copy(value); }
    showJsonItem(value: any, event: Event): void { this.showJson(value, event); }
    downloadItem(index: number): void { this.downloadBuffer(this.p3xrValueBuffer[index * 2]); }
}
