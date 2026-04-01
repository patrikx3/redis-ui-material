import { Component, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../services/i18n.service';
import { CommonService } from '../services/common.service';
import { SocketService } from '../services/socket.service';
import { JsonViewDialogService } from './json-view-dialog.service';
import { JsonEditorDialogService } from './json-editor-dialog.service';

declare const p3xr: any;

export interface KeyNewOrSetDialogData {
    type: 'add' | 'edit' | 'append';
    $event?: any;
    node?: any;
    model?: any;
}

/**
 * Key New/Edit dialog — Angular replacement for p3xrDialogKeyNewOrSet.
 * Multi-type form for creating or editing Redis keys (string, list, hash, set, zset, stream).
 */
@Component({
    selector: 'p3xr-key-new-or-set-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatSlideToggleModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <form (ngSubmit)="submit()" novalidate #keyForm="ngForm">
            <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
                <span mat-dialog-title class="p3xr-dialog-title">
                    {{ getTitle() }}
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content">
                <mat-form-field class="full-width">
                    <mat-label>{{ strings().form?.key?.field?.key || 'Key' }}</mat-label>
                    <input matInput required minlength="1" name="key" [(ngModel)]="model.key"
                           [disabled]="options.type !== 'add'" />
                    @if (keyForm.controls['key']?.invalid && keyForm.controls['key']?.touched) {
                        <mat-error>{{ strings().form?.key?.error?.key }}</mat-error>
                    }
                </mat-form-field>

                <mat-form-field class="full-width">
                    <mat-label>{{ strings().form?.key?.field?.type || 'Type' }}</mat-label>
                    <mat-select name="type" [(ngModel)]="model.type" [disabled]="options.type !== 'add'">
                        @for (t of types; track t) {
                            <mat-option [value]="t">{{ strings().redisTypes?.[t] || t }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>

                <!-- Type-specific fields -->
                @switch (model.type) {
                    @case ('list') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.index || 'Index' }}</mat-label>
                            <input matInput type="number" step="1" name="index" [(ngModel)]="model.index" />
                        </mat-form-field>
                        <div class="info-text">{{ strings().label?.redisListIndexInfo }}</div>
                    }
                    @case ('hash') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.hashKey || 'Hash Key' }}</mat-label>
                            <input matInput required minlength="1" name="hashKey" [(ngModel)]="model.hashKey" />
                            @if (keyForm.controls['hashKey']?.invalid && keyForm.controls['hashKey']?.touched) {
                                <mat-error>{{ strings().form?.key?.error?.hashKey }}</mat-error>
                            }
                        </mat-form-field>
                    }
                    @case ('zset') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.score || 'Score' }}</mat-label>
                            <input matInput type="number" required name="score" [(ngModel)]="model.score" />
                            @if (keyForm.controls['score']?.invalid && keyForm.controls['score']?.touched) {
                                <mat-error>{{ strings().form?.key?.error?.score }}</mat-error>
                            }
                        </mat-form-field>
                    }
                    @case ('stream') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.streamTimestamp || 'Timestamp' }}</mat-label>
                            <input matInput required name="streamTimestamp" [(ngModel)]="model.streamTimestamp" />
                            @if (keyForm.controls['streamTimestamp']?.invalid && keyForm.controls['streamTimestamp']?.touched) {
                                <mat-error>{{ strings().form?.key?.error?.streamTimestamp }}</mat-error>
                            }
                        </mat-form-field>
                        <div class="info-text">{{ strings().label?.streamTimestampId }}</div>
                    }
                }

                <!-- Buffer upload -->
                <input type="file" #fileInput style="display: none" (change)="onFileSelected($event)" />
                @if (model.type !== 'stream' && hasProOrEnterprise()) {
                    <button mat-raised-button class="btn-primary p3xr-action-btn" type="button" (click)="fileInput.click()"
                        [matTooltip]="isWide ? '' : (strings().intention?.setBuffer || 'Upload Binary')">
                        <mat-icon>upload</mat-icon>
                        @if (isWide) { <span>{{ strings().intention?.setBuffer || 'Upload Binary' }}</span> }
                    </button>
                }

                @if (hasProOrEnterprise()) {
                    <button mat-raised-button class="btn-primary p3xr-action-btn" type="button" (click)="openJsonEditor()"
                        [matTooltip]="isWide ? '' : (strings().intention?.jsonViewEditor || 'Edit JSON')">
                        <mat-icon>description</mat-icon>
                        @if (isWide) { <span>{{ strings().intention?.jsonViewEditor || 'Edit JSON' }}</span> }
                    </button>
                }

                <button mat-raised-button class="btn-primary p3xr-action-btn" type="button" (click)="formatJson()"
                    [matTooltip]="isWide ? '' : (strings().intention?.formatJson || 'Format JSON')">
                    <mat-icon>format_line_spacing</mat-icon>
                    @if (isWide) { <span>{{ strings().intention?.formatJson || 'Format JSON' }}</span> }
                </button>

                <button mat-raised-button class="btn-accent p3xr-action-btn" type="button" (click)="openJsonViewer()"
                    [matTooltip]="isWide ? '' : (strings().intention?.jsonViewShow || 'Display JSON')">
                    <mat-icon>table_chart</mat-icon>
                    @if (isWide) { <span>{{ strings().intention?.jsonViewShow || 'Display JSON' }}</span> }
                </button>

                <button mat-raised-button class="btn-accent p3xr-action-btn" type="button" (click)="copy()"
                    [matTooltip]="isWide ? '' : (strings().intention?.copy || 'Copy')">
                    <mat-icon>content_copy</mat-icon>
                    @if (isWide) { <span>{{ strings().intention?.copy || 'Copy' }}</span> }
                </button>

                <mat-slide-toggle [(ngModel)]="validateJson" name="validateJson" style="display: block; margin: 8px 0;">
                    {{ strings().label?.validateJson || 'Validate JSON' }}
                </mat-slide-toggle>

                @if (model.type === 'stream') {
                    <div class="info-text">{{ strings().label?.streamValue }}</div>
                }

                @if (isBuffer) {
                    <div class="info-text">
                        {{ strings().label?.isBuffer?.({ maxValueAsBuffer: p3xr?.settings?.prettyBytes?.(p3xr?.settings?.maxValueAsBuffer) ?? '' }) }}
                        {{ bufferDisplay(model.value) }}
                    </div>
                }

                <mat-form-field class="full-width">
                    <mat-label>{{ strings().form?.key?.field?.value || 'Value' }}</mat-label>
                    <textarea matInput required name="value" [(ngModel)]="model.value" rows="5"></textarea>
                    @if (keyForm.controls['value']?.invalid && keyForm.controls['value']?.touched) {
                        <mat-error>{{ strings().form?.key?.error?.value }}</mat-error>
                    }
                </mat-form-field>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
                @if (!isReadonly) {
                    <button mat-raised-button class="btn-primary" type="submit">
                        <mat-icon>{{ options.type === 'edit' ? 'edit' : 'add' }}</mat-icon>
                        {{ options.type === 'edit' ? (strings().intention?.save || 'Save') : (strings().intention?.add || 'Add') }}
                    </button>
                }
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        .full-width { width: 100%; }
        .info-text { opacity: 0.5; font-size: 12px; margin-bottom: 8px; }
        .hide-sm { display: inline; }
        @media (max-width: 959px) { .hide-sm { display: none; } }
    `],
})
export class KeyNewOrSetDialogComponent implements OnInit {
    model: any = {};
    options: KeyNewOrSetDialogData;
    get types(): string[] {
        const base = ['string', 'list', 'hash', 'set', 'zset', 'stream'];
        if (p3xr?.state?.hasReJSON && p3xr?.state?.hasProOrEnterpriseJsonBinary) {
            base.push('json');
        }
        return base;
    }
    validateJson = false;
    isReadonly = false;
    isBuffer = false;
    isWide = window.innerWidth >= 720;
    strings;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<KeyNewOrSetDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: KeyNewOrSetDialogData,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(CommonService) private common: CommonService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(JsonViewDialogService) private jsonViewDialog: JsonViewDialogService,
        @Inject(JsonEditorDialogService) private jsonEditorDialog: JsonEditorDialogService,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
        this.options = data;
    }

    ngOnInit(): void {
        this.isReadonly = p3xr?.state?.connection?.readonly === true;
        this.breakpointObserver.observe('(min-width: 720px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });

        this.model = {
            type: 'string',
            key: this.data.node?.key ? this.data.node.key + (p3xr?.settings?.redisTreeDivider ?? ':') : '',
            value: undefined,
            score: undefined,
            streamTimestamp: '*',
            hashKey: undefined,
            index: undefined,
        };

        if (this.data.model) {
            Object.assign(this.model, this.data.model);
        }

        this.isBuffer = typeof this.model.value === 'object' && this.model.value !== null;
    }

    getTitle(): string {
        const s = this.strings();
        if (this.options.type === 'edit') return s.form?.key?.label?.formName?.edit || 'Edit Key';
        if (this.options.type === 'append') return s.form?.key?.label?.formName?.append || 'Append';
        return s.form?.key?.label?.formName?.add || 'Add Key';
    }

    hasProOrEnterprise(): boolean {
        return p3xr?.state?.hasProOrEnterpriseJsonBinary === true;
    }

    bufferDisplay(value: any): string {
        if (value?.byteLength !== undefined) {
            return '(' + p3xr?.settings?.prettyBytes(value.byteLength) + ')';
        }
        return '';
    }

    async copy(): Promise<void> {
        await p3xr.clipboard({ value: this.model.value });
        this.common.toast(this.strings().status?.dataCopied || 'Copied');
    }

    async openJsonViewer(): Promise<void> {
        await this.jsonViewDialog.show({ value: this.model.value });
    }

    async openJsonEditor(): Promise<void> {
        try {
            const result = await this.jsonEditorDialog.show({ value: this.model.value });
            this.model.value = result.obj;
        } catch (e) { /* cancelled */ }
    }

    formatJson(): void {
        try {
            this.model.value = JSON.stringify(JSON.parse(this.model.value), null, p3xr?.settings?.jsonFormat ?? 2);
        } catch (e) {
            this.common.toast(this.strings().label?.jsonViewNotParsable || 'Not valid JSON');
        }
    }

    async onFileSelected(event: Event): Promise<void> {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;

        try {
            await this.common.confirm({ message: this.strings().confirm?.uploadBuffer || 'Upload buffer?' });
            const arrayBuffer = await file.arrayBuffer();
            this.model.value = arrayBuffer;
            this.isBuffer = true;
            this.common.toast(this.strings().confirm?.uploadBufferDone || 'Buffer uploaded');
        } catch (e) { /* cancelled */ }

        input.value = '';
    }

    async submit(): Promise<void> {
        if (!this.model.key || this.model.key.trim().length === 0) {
            this.common.toast(this.strings().form?.key?.error?.key || 'Key cannot be empty');
            return;
        }

        if (this.validateJson) {
            try {
                JSON.parse(this.model.value);
            } catch (e) {
                this.common.toast(this.strings().label?.jsonViewNotParsable || 'Not valid JSON');
                return;
            }
        }

        try {
            p3xr.ui.overlay.show();
            const response = await this.socket.request({
                action: 'key-new-or-set',
                payload: {
                    type: this.options.type,
                    originalValue: this.data.model?.value,
                    originalHashKey: this.data.model?.hashKey,
                    model: p3xr.clone(this.model),
                },
            });

            if (typeof window['gtag'] === 'function') {
                window['gtag']('config', p3xr?.settings?.googleAnalytics, { page_path: '/key-new-or-set' });
            }

            this.common.toast(this.strings().status?.set || 'Saved');
            this.dialogRef.close(response);
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            p3xr.ui.overlay.hide();
        }
    }

    cancel(): void {
        this.dialogRef.close(undefined);
    }
}
