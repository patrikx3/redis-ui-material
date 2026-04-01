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
    selector: 'p3xr-key-set',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, KeyPagerInlineComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-set.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeySetComponent extends KeyTypeBase implements OnInit, OnChanges {
    paging = new KeyPaging();
    pagedItems: Array<{ index: number; value: any }> = [];

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
        this.pagedItems = this.p3xrValue.slice(this.paging.startIndex, this.paging.endIndex)
            .map((v: any, i: number) => ({ index: this.paging.startIndex + i, value: v }));
    }

    async addSet(event: Event): Promise<void> {
        try {
            await this.keyNewOrSetDialog.show({ $event: event, type: 'append', model: { type: 'set', key: this.p3xrKey } });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async deleteSetMember(index: number, event: Event): Promise<void> {
        try {
            await this.common.confirm({ message: this.i18n.strings().confirm?.deleteSetMember });
            await this.socket.request({ action: 'key-set-delete-member', payload: { key: this.p3xrKey, value: this.p3xrValueBuffer[index] } });
            this.common.toast(this.i18n.strings().status?.deletedSetMember);
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async editValue(index: number, value: any, event: Event): Promise<void> {
        try {
            const editValue = typeof value === 'string' && value.length >= this.maxValueAsBuffer
                ? this.p3xrValueBuffer[index] : value;
            await this.keyNewOrSetDialog.show({
                $event: event, type: 'edit',
                model: { type: 'set', key: this.p3xrKey, value: editValue },
            });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    copyItem(value: any): void { this.copy(value); }
    showJsonItem(value: any, event: Event): void { this.showJson(value, event); }
    downloadItem(index: number): void { this.downloadBuffer(this.p3xrValueBuffer[index]); }
}
