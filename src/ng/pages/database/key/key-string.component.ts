import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MainCommandService } from '../../../services/main-command.service';

import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { JsonEditorDialogService } from '../../../dialogs/json-editor-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';
import { KeyTypeBase } from './key-type-base';

declare const p3xr: any;

@Component({
    selector: 'p3xr-key-string',
    standalone: true,
    imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, TextFieldModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-string.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyStringComponent extends KeyTypeBase implements OnInit {
    editable = false;
    buffer = false;
    validateJson = false;
    originalValue: any;

    constructor(
        @Inject(I18nService) i18n: I18nService,
        @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService,
        @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(JsonEditorDialogService) private jsonEditorDialog: JsonEditorDialogService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr);
    }

    ngOnInit(): void {}

    edit(): void {
        const value = this.p3xrValue;
        if (typeof value === 'string' && value.length >= this.maxValueAsBuffer) {
            this.buffer = true;
            this.originalValue = p3xr?.clone?.(this.p3xrValueBuffer) ?? this.p3xrValueBuffer;
        } else {
            this.buffer = false;
            this.originalValue = p3xr?.clone?.(this.p3xrValue) ?? this.p3xrValue;
        }
        this.editable = true;
    }

    cancelEdit(): void {
        if (this.buffer) {
            this.p3xrValueBuffer = this.originalValue;
        } else {
            this.p3xrValue = this.originalValue;
        }
        this.editable = false;
        this.buffer = false;
    }

    async save(): Promise<void> {
        const valueToSave = this.buffer ? this.p3xrValueBuffer : this.p3xrValue;
        try {
            if (this.validateJson) {
                JSON.parse(valueToSave);
            }
            p3xr.ui.overlay.show({ message: this.strings?.intention?.save ?? 'Saving...' });
            await this.socket.request({
                action: 'key-set',
                payload: {
                    type: this.p3xrResponse?.type,
                    key: this.p3xrKey,
                    value: valueToSave,
                },
            });
            this.gtag('/key-set');
            this.editable = false;
            this.buffer = false;
            this.refreshKey();
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            p3xr.ui.overlay.hide();
        }
    }

    async setBufferUpload(): Promise<void> {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onerror = (error) => {
                this.common.generalHandleError(error);
            };
            reader.onload = async (loadEvent: any) => {
                const arrayBuffer = loadEvent.target.result;
                try {
                    if (this.editable) {
                        await this.common.confirm({ message: this.i18n.strings().confirm?.uploadBuffer });
                        if (this.buffer) {
                            this.p3xrValueBuffer = arrayBuffer;
                        } else {
                            this.p3xrValue = arrayBuffer;
                        }
                        this.common.toast(this.i18n.strings().confirm?.uploadBufferDone);
                        return;
                    }
                    await this.common.confirm({ message: this.i18n.strings().confirm?.uploadBuffer });
                    p3xr.ui.overlay.show();
                    await this.socket.request({
                        action: 'key-set',
                        payload: {
                            type: this.p3xrResponse?.type,
                            value: arrayBuffer,
                            key: this.p3xrKey,
                        },
                    });
                    this.common.toast(this.i18n.strings().confirm?.uploadBufferDoneAndSave);
                    this.gtag('/key-set');
                    this.refreshKey();
                } catch (e) {
                    this.common.generalHandleError(e);
                } finally {
                    p3xr.ui.overlay.hide();
                }
            };
            reader.readAsArrayBuffer(file);
        };
        input.click();
    }

    async jsonViewer(event?: Event): Promise<void> {
        await this.showJson(this.p3xrValue, event);
    }

    async jsonEditor(): Promise<void> {
        try {
            const result = await this.jsonEditorDialog.show({ value: this.p3xrValue });
            this.p3xrValue = result.obj;
            await this.save();
        } catch { /* cancelled */ }
    }

    async formatJson(): Promise<void> {
        try {
            this.p3xrValue = JSON.stringify(JSON.parse(this.p3xrValue), null, p3xr?.settings?.jsonFormat ?? 2);
            await this.save();
        } catch {
            this.common.toast(this.strings?.label?.jsonViewNotParsable ?? 'Not valid JSON');
        }
    }

    copyValue(): void {
        this.copy(this.p3xrValue);
    }

    downloadBufferFile(): void {
        this.downloadBuffer(this.p3xrValueBuffer);
    }

    bufferDisplay(): string {
        if (this.p3xrValueBuffer?.byteLength !== undefined) {
            return '(' + this.prettyBytes(this.p3xrValueBuffer.byteLength) + ')';
        }
        return '';
    }
}
