import { Component, Inject, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, effect } from '@angular/core';
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

const intlLocaleMap: Record<string, string> = { 'zn': 'zh-CN', 'no': 'nb', 'fil': 'tl' };

@Component({
    selector: 'p3xr-key-stream',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, KeyPagerInlineComponent, HexMonitorComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-stream.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyStreamComponent extends KeyTypeBase implements OnInit, OnChanges {
    paging: KeyPaging;
    pagedEntries: Array<{ id: string; fields: Array<[string, string]>; data: any; displayData: any; hasDuplicateFields: boolean }> = [];
    private allEntries: Array<{ id: string; fields: Array<[string, string]>; data: any; displayData: any; hasDuplicateFields: boolean }> = [];

    constructor(
        @Inject(I18nService) i18n: I18nService, @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService, @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(RedisStateService) redisState: RedisStateService,
        @Inject(SettingsService) settingsService: SettingsService,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr, redisState, settingsService);
        this.paging = new KeyPaging({ settingsService });

        effect(() => {
            this.i18n.strings();
            if (this.allEntries.length === 0) {
                return;
            }

            this.allEntries = this.allEntries.map((entry) => ({
                ...entry,
                displayData: this.toDisplayData(entry.data, entry.hasDuplicateFields),
            }));
            this.updatePagedItems();
            this.cdr.markForCheck();
        });
    }

    ngOnInit(): void { this.updatePaging(); }
    ngOnChanges(c: SimpleChanges): void { if (c['p3xrValue']) this.updatePaging(); }

    updatePaging(): void {
        if (!this.p3xrValue) return;
        this.allEntries = this.p3xrValue.map((entry: any) => {
            const id = entry[0];
            const rawData = entry[1];
            const fields: Array<[string, string]> = [];
            for (let i = 0; i < rawData.length; i += 2) {
                fields.push([rawData[i], rawData[i + 1]]);
            }
            const hasDuplicateFields = this.hasDuplicateFields(fields);
            const data = hasDuplicateFields ? this.fieldsToArray(fields) : this.fieldsToObject(fields);
            return {
                id,
                fields,
                data,
                displayData: this.toDisplayData(data, hasDuplicateFields),
                hasDuplicateFields,
            };
        });
        this.paging.figurePaging(this.allEntries.length);
        this.updatePagedItems();
    }

    updatePagedItems(): void {
        this.pagedEntries = this.allEntries.slice(this.paging.startIndex, this.paging.endIndex);
    }

    showTimestamp(id: string): string {
        try {
            const ms = parseInt(id.slice(0, id.indexOf('-')));
            const lang = this.i18n.currentLang() || 'en';
            const locale = intlLocaleMap[lang] || lang;
            const date = new Date(ms);
            return date.toLocaleString(locale, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        } catch { return id; }
    }

    isJsonValue(value: string): boolean {
        if (!value || value.length < 2) return false;
        const first = value.charAt(0);
        if (first !== '{' && first !== '[') return false;
        try {
            JSON.parse(value);
            return true;
        } catch {
            return false;
        }
    }

    formatJsonValue(value: string): string {
        try {
            return JSON.stringify(JSON.parse(value), null, this.settingsService.jsonFormat() ?? 2);
        } catch {
            return value;
        }
    }

    private parseFieldValue(value: string): any {
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    }

    private hasDuplicateFields(fields: Array<[string, string]>): boolean {
        const seen = new Set<string>();
        for (const [key] of fields) {
            if (seen.has(key)) {
                return true;
            }
            seen.add(key);
        }
        return false;
    }

    private fieldsToObject(fields: Array<[string, string]>): any {
        const obj: any = {};
        for (const [key, value] of fields) {
            obj[key] = this.parseFieldValue(value);
        }
        return obj;
    }

    private fieldsToArray(fields: Array<[string, string]>): Array<{ field: string; value: any }> {
        return fields.map(([field, value]) => ({
            field,
            value: this.parseFieldValue(value),
        }));
    }

    private toDisplayData(data: any, hasDuplicateFields: boolean): any {
        if (!hasDuplicateFields) {
            return data;
        }

        const fieldLabel = this.strings?.page?.key?.stream?.table?.field || 'Field';
        const valueLabel = this.strings?.page?.key?.stream?.table?.value || 'Value';
        return data.map((item: { field: string; value: any }) => ({
            [fieldLabel]: item.field,
            [valueLabel]: item.value,
        }));
    }

    private entryToExport(entry: { id: string; fields: Array<[string, string]>; data: any; displayData: any; hasDuplicateFields: boolean }): any {
        if (entry.hasDuplicateFields) {
            return {
                id: entry.id,
                fields: entry.data,
            };
        }
        return { id: entry.id, ...entry.data };
    }

    downloadEntry(entry: { id: string; fields: Array<[string, string]> }): void {
        const lines = [entry.id];
        for (const [field, value] of entry.fields) {
            lines.push(field);
            lines.push(value);
        }
        const text = lines.join('\n');
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.p3xrKey}-${entry.id}.txt`;
        a.click();
        URL.revokeObjectURL(url);
    }

    async copyEntry(entry: { id: string; fields: Array<[string, string]>; data: any; displayData: any; hasDuplicateFields: boolean }): Promise<void> {
        const obj = this.entryToExport(entry);
        await this.copy(JSON.stringify(obj, null, 2));
    }

    async viewEntryJson(entry: { id: string; fields: Array<[string, string]>; data: any; displayData: any; hasDuplicateFields: boolean }, event?: Event): Promise<void> {
        const obj = this.entryToExport(entry);
        await this.showJson(JSON.stringify(obj), event);
    }

    async viewFieldJson(value: string, event?: Event): Promise<void> {
        await this.showJson(value, event);
    }

    copyField(value: any): void { this.copy(value); }

    async addStream(event: Event): Promise<void> {
        try {
            await this.keyNewOrSetDialog.show({ $event: event, type: 'append', model: { type: 'stream', key: this.p3xrKey } });
            this.refreshKey();
        } catch (e) { this.common.generalHandleError(e); }
    }

    async deleteStreamTimestamp(id: string, event: Event): Promise<void> {
        try {
            await this.common.confirm({ message: this.i18n.strings().confirm?.deleteStreamTimestamp });
            await this.socket.request({ action: 'key/stream-delete-timestamp', payload: { key: this.p3xrKey, streamTimestamp: id } });
            this.common.toast(this.i18n.strings().status?.deletedStreamTimestamp || this.i18n.strings().status?.deletedKey || 'Deleted');
            this.refreshKey();
        } catch (e) { if (e) this.common.generalHandleError(e); }
    }
}
