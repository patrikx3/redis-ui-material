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
import { RedisStateService } from '../services/redis-state.service';
import { SettingsService } from '../services/settings.service';
import { JsonViewDialogService } from './json-view-dialog.service';
import { JsonEditorDialogService } from './json-editor-dialog.service';
import { OverlayService } from '../services/overlay.service';
import { DiffDialogService } from './diff-dialog.service';

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
                    @case ('timeseries') {
                        @if (options.type === 'add') {
                            <mat-form-field class="full-width">
                                <mat-label>{{ strings().page?.key?.timeseries?.retention || 'Retention' }} (ms)</mat-label>
                                <input matInput type="number" name="tsRetention" [(ngModel)]="model.tsRetention" />
                                <mat-hint>{{ strings().page?.key?.timeseries?.retentionHint || '0 = no expiry, or milliseconds' }}</mat-hint>
                            </mat-form-field>
                            <mat-form-field class="full-width">
                                <mat-label>{{ strings().page?.key?.timeseries?.duplicatePolicy || 'Duplicate policy' }}</mat-label>
                                <mat-select name="tsDuplicatePolicy" [(ngModel)]="model.tsDuplicatePolicy">
                                    <mat-option value="LAST">LAST</mat-option>
                                    <mat-option value="FIRST">FIRST</mat-option>
                                    <mat-option value="MIN">MIN</mat-option>
                                    <mat-option value="MAX">MAX</mat-option>
                                    <mat-option value="SUM">SUM</mat-option>
                                    <mat-option value="BLOCK">BLOCK</mat-option>
                                </mat-select>
                            </mat-form-field>
                        }
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().page?.key?.timeseries?.labels || 'Labels' }}</mat-label>
                            <input matInput name="tsLabels" [(ngModel)]="model.tsLabels" />
                            <mat-hint>{{ strings().page?.key?.timeseries?.labelsHint || 'key1 value1 key2 value2' }}</mat-hint>
                        </mat-form-field>
                        @if (!model.tsBulkMode) {
                            <mat-form-field class="full-width">
                                <mat-label>{{ strings().page?.key?.timeseries?.timestamp || 'Timestamp' }}</mat-label>
                                <input matInput name="tsTimestamp" [(ngModel)]="model.tsTimestamp" [disabled]="model.originalTimestamp !== undefined" />
                                <mat-hint>{{ strings().page?.key?.timeseries?.timestampHint || "'*' means auto generated, or milliseconds timestamp" }}</mat-hint>
                            </mat-form-field>
                        }
                        @if (model.originalTimestamp === undefined) {
                            <mat-slide-toggle [(ngModel)]="model.tsBulkMode" name="tsBulkMode" style="display: block; margin: 8px 0;">
                                {{ strings().page?.key?.timeseries?.bulkMode || 'Bulk generate' }}
                            </mat-slide-toggle>
                        }
                    }
                    @case ('bloom') {
                        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                            <mat-form-field style="flex: 1; min-width: 140px;">
                                <mat-label>{{ strings().form?.key?.field?.errorRate || 'Error rate' }}</mat-label>
                                <input matInput type="number" step="0.001" name="bloomErrorRate" [(ngModel)]="model.bloomErrorRate" placeholder="0.01 = 1%" />
                            </mat-form-field>
                            <mat-form-field style="flex: 1; min-width: 140px;">
                                <mat-label>{{ strings().form?.key?.field?.capacity || 'Capacity' }}</mat-label>
                                <input matInput type="number" name="bloomCapacity" [(ngModel)]="model.bloomCapacity" />
                            </mat-form-field>
                        </div>
                    }
                    @case ('cuckoo') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.capacity || 'Capacity' }}</mat-label>
                            <input matInput type="number" name="cuckooCapacity" [(ngModel)]="model.cuckooCapacity" />
                        </mat-form-field>
                    }
                    @case ('topk') {
                        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                            <mat-form-field style="flex: 1; min-width: 100px;">
                                <mat-label>Top K</mat-label>
                                <input matInput type="number" name="topkK" [(ngModel)]="model.topkK" />
                            </mat-form-field>
                            <mat-form-field style="flex: 1; min-width: 100px;">
                                <mat-label>{{ strings().form?.key?.field?.width || 'Width' }}</mat-label>
                                <input matInput type="number" name="topkWidth" [(ngModel)]="model.topkWidth" />
                            </mat-form-field>
                            <mat-form-field style="flex: 1; min-width: 100px;">
                                <mat-label>{{ strings().form?.key?.field?.depth || 'Depth' }}</mat-label>
                                <input matInput type="number" name="topkDepth" [(ngModel)]="model.topkDepth" />
                            </mat-form-field>
                            <mat-form-field style="flex: 1; min-width: 100px;">
                                <mat-label>{{ strings().form?.key?.field?.decay || 'Decay' }}</mat-label>
                                <input matInput type="number" step="0.1" name="topkDecay" [(ngModel)]="model.topkDecay" />
                            </mat-form-field>
                        </div>
                    }
                    @case ('cms') {
                        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                            <mat-form-field style="flex: 1; min-width: 140px;">
                                <mat-label>{{ strings().form?.key?.field?.width || 'Width' }}</mat-label>
                                <input matInput type="number" name="cmsWidth" [(ngModel)]="model.cmsWidth" />
                            </mat-form-field>
                            <mat-form-field style="flex: 1; min-width: 140px;">
                                <mat-label>{{ strings().form?.key?.field?.depth || 'Depth' }}</mat-label>
                                <input matInput type="number" name="cmsDepth" [(ngModel)]="model.cmsDepth" />
                            </mat-form-field>
                        </div>
                    }
                    @case ('tdigest') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().form?.key?.field?.compression || 'Compression' }}</mat-label>
                            <input matInput type="number" name="tdigestCompression" [(ngModel)]="model.tdigestCompression" />
                        </mat-form-field>
                    }
                    @case ('vectorset') {
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().page?.key?.vectorset?.elementName || 'Element name' }}</mat-label>
                            <input matInput name="vectorElement" [(ngModel)]="model.vectorElement" />
                        </mat-form-field>
                        <mat-form-field class="full-width">
                            <mat-label>{{ strings().page?.key?.vectorset?.vectorValues || 'Vector values' }}</mat-label>
                            <input matInput name="vectorValues" [(ngModel)]="model.vectorValues" placeholder="0.1, 0.2, 0.3" />
                        </mat-form-field>
                    }
                }

                <!-- Buffer upload -->
                <input type="file" #fileInput style="display: none" (change)="onFileSelected($event)" />
                @if (model.type !== 'stream' && model.type !== 'timeseries' && !isProbabilisticType()) {
                    <button mat-raised-button class="btn-primary p3xr-action-btn" type="button" (click)="fileInput.click()"
                        [matTooltip]="isWide ? '' : (strings().intention?.setBuffer || 'Upload Binary')">
                        <mat-icon>upload</mat-icon>
                        @if (isWide) { <span>{{ strings().intention?.setBuffer || 'Upload Binary' }}</span> }
                    </button>
                }

                @if (model.type !== 'timeseries' && !isProbabilisticType()) {
                    <button mat-raised-button class="btn-primary p3xr-action-btn" type="button" (click)="openJsonEditor()"
                        [matTooltip]="isWide ? '' : (strings().intention?.jsonViewEditor || 'Edit JSON')">
                        <mat-icon>description</mat-icon>
                        @if (isWide) { <span>{{ strings().intention?.jsonViewEditor || 'Edit JSON' }}</span> }
                    </button>

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
                }

                <div style="margin: 8px 0;">
                    <button mat-raised-button class="btn-accent p3xr-action-btn" type="button" (click)="copy()"
                        [matTooltip]="isWide ? '' : (strings().intention?.copy || 'Copy')">
                        <mat-icon>content_copy</mat-icon>
                        @if (isWide) { <span>{{ strings().intention?.copy || 'Copy' }}</span> }
                    </button>
                </div>

                @if (model.type !== 'timeseries' && !isProbabilisticType()) {
                    <mat-slide-toggle [(ngModel)]="validateJson" name="validateJson" style="display: block; margin: 8px 0;">
                        {{ strings().label?.validateJson || 'Validate JSON' }}
                    </mat-slide-toggle>

                    @if (model.type === 'stream') {
                        <div class="info-text">{{ strings().label?.streamValue }}</div>
                    }

                    @if (isBuffer) {
                        <div class="info-text">
                            {{ strings().label?.isBuffer?.({ maxValueAsBuffer: getMaxValueAsBufferText() }) }}
                            {{ bufferDisplay(model.value) }}
                        </div>
                    }
                }

                @if (model.type === 'timeseries' && (model.tsEditAll || model.tsBulkMode)) {
                    <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 8px;">
                        <mat-form-field style="min-width: 140px; flex: 1;" subscriptSizing="dynamic">
                            <mat-label>{{ strings().page?.key?.timeseries?.autoSpread || 'Auto * spread' }}</mat-label>
                            <mat-select name="tsSpread" [(ngModel)]="model.tsSpread">
                                <mat-option [value]="1000">1 {{ strings().time?.second || 'second' }}</mat-option>
                                <mat-option [value]="30000">30 {{ strings().time?.seconds || 'seconds' }}</mat-option>
                                <mat-option [value]="60000">1 {{ strings().time?.minute || 'minute' }}</mat-option>
                                <mat-option [value]="1800000">30 {{ strings().time?.minutes || 'minutes' }}</mat-option>
                                <mat-option [value]="3600000">1 {{ strings().time?.hour || 'hour' }}</mat-option>
                                <mat-option [value]="86400000">24 {{ strings().time?.hours || 'hours' }}</mat-option>
                            </mat-select>
                        </mat-form-field>

                        <mat-form-field style="min-width: 120px; flex: 1;" subscriptSizing="dynamic">
                            <mat-label>{{ strings().page?.key?.timeseries?.formula || 'Formula' }}</mat-label>
                            <mat-select name="tsFormula" [(ngModel)]="model.tsFormula">
                                <mat-option value="">{{ strings().page?.key?.timeseries?.none || 'None' }}</mat-option>
                                <mat-option value="sin">sin</mat-option>
                                <mat-option value="cos">cos</mat-option>
                                <mat-option value="linear">{{ strings().page?.key?.timeseries?.formulaLinear || 'Linear' }}</mat-option>
                                <mat-option value="random">{{ strings().page?.key?.timeseries?.formulaRandom || 'Random' }}</mat-option>
                                <mat-option value="sawtooth">{{ strings().page?.key?.timeseries?.formulaSawtooth || 'Sawtooth' }}</mat-option>
                            </mat-select>
                        </mat-form-field>
                    </div>

                    @if (model.tsFormula) {
                        <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin-bottom: 8px;">
                            <mat-form-field style="min-width: 80px; flex: 1;" subscriptSizing="dynamic">
                                <mat-label>{{ strings().page?.key?.timeseries?.formulaPoints || 'Points' }}</mat-label>
                                <input matInput type="number" name="tsFormulaPoints" [(ngModel)]="model.tsFormulaPoints" min="1" max="10000" />
                            </mat-form-field>
                            <mat-form-field style="min-width: 80px; flex: 1;" subscriptSizing="dynamic">
                                <mat-label>{{ strings().page?.key?.timeseries?.formulaAmplitude || 'Amplitude' }}</mat-label>
                                <input matInput type="number" name="tsFormulaAmplitude" [(ngModel)]="model.tsFormulaAmplitude" />
                            </mat-form-field>
                            <mat-form-field style="min-width: 80px; flex: 1;" subscriptSizing="dynamic">
                                <mat-label>{{ strings().page?.key?.timeseries?.formulaOffset || 'Offset' }}</mat-label>
                                <input matInput type="number" name="tsFormulaOffset" [(ngModel)]="model.tsFormulaOffset" />
                            </mat-form-field>
                            <button mat-raised-button class="btn-accent p3xr-action-btn" type="button" (click)="generateFormula()">
                                <mat-icon>auto_graph</mat-icon>
                                @if (isWide) { <span>{{ strings().page?.key?.timeseries?.generate || 'Generate' }}</span> }
                            </button>
                        </div>
                    }

                    <mat-form-field class="full-width">
                        <mat-label>{{ strings().page?.key?.timeseries?.dataPoints || 'data points' }}</mat-label>
                        <textarea matInput required name="value" [(ngModel)]="model.value" rows="10"
                                  style="font-family: 'Roboto Mono', monospace; font-size: 13px;"></textarea>
                        <mat-hint>{{ strings().page?.key?.timeseries?.editAllHint || 'One data point per line: timestamp value (timestamp can be * for auto)' }}</mat-hint>
                        @if (keyForm.controls['value']?.invalid && keyForm.controls['value']?.touched) {
                            <mat-error>{{ strings().form?.key?.error?.value }}</mat-error>
                        }
                    </mat-form-field>
                } @else if (model.type === 'timeseries' && !model.tsBulkMode) {
                    <mat-form-field class="full-width">
                        <mat-label>{{ strings().page?.key?.timeseries?.value || 'Value' }}</mat-label>
                        <input matInput type="number" required name="value" [(ngModel)]="model.value" />
                        @if (keyForm.controls['value']?.invalid && keyForm.controls['value']?.touched) {
                            <mat-error>{{ strings().form?.key?.error?.value }}</mat-error>
                        }
                    </mat-form-field>
                } @else if (!isProbabilisticType()) {
                    <mat-form-field class="full-width">
                        <mat-label>{{ strings().form?.key?.field?.value || 'Value' }}</mat-label>
                        <textarea matInput required name="value" [(ngModel)]="model.value" rows="5"></textarea>
                        @if (keyForm.controls['value']?.invalid && keyForm.controls['value']?.touched) {
                            <mat-error>{{ strings().form?.key?.error?.value }}</mat-error>
                        }
                    </mat-form-field>
                }
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
        if (this.state.hasTimeSeries()) {
            base.push('timeseries');
        }
        if (this.state.hasReJSON()) {
            base.push('json');
        }
        if (this.state.hasBloom()) {
            base.push('bloom', 'cuckoo', 'topk', 'cms', 'tdigest');
        }
        base.push('vectorset');
        return base;
    }
    private static readonly PROBABILISTIC_TYPES = ['bloom', 'cuckoo', 'topk', 'cms', 'tdigest'];
    isProbabilisticType(): boolean {
        return KeyNewOrSetDialogComponent.PROBABILISTIC_TYPES.includes(this.model.type) || this.model.type === 'vectorset';
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
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(SettingsService) private settings: SettingsService,
        @Inject(OverlayService) private overlay: OverlayService,
        @Inject(DiffDialogService) private diffDialog: DiffDialogService,
    ) {
        this.strings = this.i18n.strings;
        this.options = data;
    }

    ngOnInit(): void {
        this.isReadonly = this.state.connection()?.readonly === true;
        this.breakpointObserver.observe('(min-width: 720px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });

        this.model = {
            type: 'string',
            key: this.data.node?.key ? this.data.node.key + (this.settings.redisTreeDivider() ?? ':') : '',
            value: undefined,
            score: undefined,
            streamTimestamp: '*',
            tsTimestamp: '*',
            tsRetention: 0,
            tsDuplicatePolicy: 'LAST',
            tsLabels: '',
            tsBulkMode: false,
            tsSpread: 60000,
            tsFormula: '',
            tsFormulaPoints: 25,
            tsFormulaAmplitude: 100,
            tsFormulaOffset: 0,
            hashKey: undefined,
            index: undefined,
            bloomErrorRate: 0.01,
            bloomCapacity: 100,
            cuckooCapacity: 1024,
            topkK: 10,
            topkWidth: 2000,
            topkDepth: 7,
            topkDecay: 0.9,
            cmsWidth: 2000,
            cmsDepth: 7,
            tdigestCompression: 100,
            vectorElement: '',
            vectorValues: '',
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

    getMaxValueAsBufferText(): string {
        try {
            return this.settings.prettyBytes(this.settings.maxValueAsBuffer);
        } catch {
            return `${this.settings.maxValueAsBuffer} bytes`;
        }
    }

    bufferDisplay(value: any): string {
        if (value?.byteLength !== undefined) {
            return '(' + this.settings.prettyBytes(value.byteLength) + ')';
        }
        return '';
    }

    async copy(): Promise<void> {
        let value = this.model.value;
        if (this.model.type === 'timeseries') {
            value = `TS.ADD ${this.model.key} ${this.model.tsTimestamp || '*'} ${this.model.value}`;
        }
        await this.settings.clipboard(value);
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
            this.model.value = JSON.stringify(JSON.parse(this.model.value), null, this.settings.jsonFormat() ?? 2);
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
            // Show diff for edits (not new keys)
            if (this.data.model?.value !== undefined && this.data.model.value !== this.model.value) {
                const confirmed = await this.diffDialog.show({
                    keyName: this.model.key,
                    fieldName: this.model.hashKey || undefined,
                    oldValue: String(this.data.model.value),
                    newValue: String(this.model.value),
                });
                if (!confirmed) return;
            }

            this.overlay.show();
            const response = await this.socket.request({
                action: 'key/new-or-set',
                payload: {
                    type: this.options.type,
                    originalValue: this.data.model?.value,
                    originalHashKey: this.data.model?.hashKey,
                    model: structuredClone(this.model),
                },
            });

            if (typeof window['gtag'] === 'function') {
                window['gtag']('config', this.settings.googleAnalytics, { page_path: '/key-new-or-set' });
            }

            this.common.toast(this.strings().status?.set || 'Saved');
            this.dialogRef.close(response);
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            this.overlay.hide();
        }
    }

    generateFormula(): void {
        const points = Math.min(Math.max(parseInt(this.model.tsFormulaPoints) || 25, 1), 10000);
        const amplitude = parseFloat(this.model.tsFormulaAmplitude) || 100;
        const offset = parseFloat(this.model.tsFormulaOffset) || 0;
        const formula = this.model.tsFormula;
        const lines: string[] = [];

        for (let i = 0; i < points; i++) {
            const x = i / points;
            let value: number;
            switch (formula) {
                case 'sin':
                    value = Math.sin(x * Math.PI * 2) * amplitude + offset;
                    break;
                case 'cos':
                    value = Math.cos(x * Math.PI * 2) * amplitude + offset;
                    break;
                case 'linear':
                    value = x * amplitude + offset;
                    break;
                case 'random':
                    value = Math.random() * amplitude + offset;
                    break;
                case 'sawtooth':
                    value = (x % 0.25) * 4 * amplitude + offset;
                    break;
                default:
                    value = offset;
            }
            lines.push(`* ${parseFloat(value.toFixed(4))}`);
        }
        this.model.value = lines.join('\n');
    }

    cancel(): void {
        this.dialogRef.close(undefined);
    }
}
