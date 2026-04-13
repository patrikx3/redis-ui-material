import { Component, Inject, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, AbstractControl } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { I18nService } from '../services/i18n.service';
import { SettingsService } from '../services/settings.service';
import { RedisStateService } from '../services/redis-state.service';
import { CommonService } from '../services/common.service';
import { MainCommandService } from '../services/main-command.service';
import { SocketService } from '../services/socket.service';
import { TreeBuilderService } from '../services/tree-builder.service';

/**
 * Tree control settings dialog — Angular replacement for p3xrDialogTreecontrolSettings.
 * Edits pagination, sorting, search, display, and animation settings.
 */
@Component({
    selector: 'p3xr-treecontrol-settings-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
        MatButtonModule, MatIconModule, MatToolbarModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <form (ngSubmit)="submit()" novalidate #settingsForm="ngForm">
            <mat-toolbar class="p3xr-dialog-toolbar p3xr-tree-settings-dialog-toolbar p3xr-mat-layout-strong">
                <span mat-dialog-title class="p3xr-dialog-title">
                    {{ strings().form?.treeSettings?.label?.formName }}
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content p3xr-tree-settings-dialog-content">
                <div class="p3xr-padding">
                    @if (reducedFunctions) {
                        <div class="p3xr-tree-settings-reduced-functions">
                            <div>{{ strings().form?.treeSettings?.keyCount?.({ keyCount: keysRawLength }) }}</div>
                            <div class="p3xr-tree-settings-reduced-functions-note">
                                {{ strings().label?.tooManyKeys?.({ count: keysRawLength, maxLightKeysCount: settings.maxLightKeysCount }) }}
                            </div>
                        </div>
                    }

                    <div class="p3xr-tree-settings-field-block p3xr-tree-settings-field-block-tree-separator">
                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom" subscriptSizing="dynamic">
                            <mat-label>{{ strings().form?.treeSettings?.field?.treeSeparator }}</mat-label>
                            <input matInput name="treeSeparator" [(ngModel)]="model.treeSeparator" />
                        </mat-form-field>
                        <div class="p3xr-md-input-container-bottom-info">
                            {{ strings().label?.treeSeparatorEmpty }}
                        </div>
                    </div>

                    <div class="p3xr-tree-settings-field-block p3xr-tree-settings-field-block-page-count">
                        <mat-form-field class="md-block" [class.p3xr-field-error]="isFieldInvalid('pageCount', 10, 5000)">
                            <mat-label>{{ strings().form?.treeSettings?.field?.page }}</mat-label>
                            <input matInput type="number" required step="1" name="pageCount"
                                [(ngModel)]="model.pageCount" />
                        </mat-form-field>
                        @if (isFieldInvalid('pageCount', 10, 5000)) {
                            <div class="p3xr-field-error-text">{{ strings().form?.treeSettings?.error?.page }}</div>
                        }
                    </div>

                    <div class="p3xr-tree-settings-field-block p3xr-tree-settings-field-block-key-page-count">
                        <mat-form-field class="md-block" [class.p3xr-field-error]="isFieldInvalid('keyPageCount', 5, 100)">
                            <mat-label>{{ strings().form?.treeSettings?.field?.keyPageCount }}</mat-label>
                            <input matInput type="number" required step="1" name="keyPageCount"
                                [(ngModel)]="model.keyPageCount" />
                        </mat-form-field>
                        @if (isFieldInvalid('keyPageCount', 5, 100)) {
                            <div class="p3xr-field-error-text">{{ strings().form?.treeSettings?.error?.keyPageCount }}</div>
                        }
                    </div>

                    <div class="p3xr-tree-settings-field-block p3xr-tree-settings-field-block-max-value-display">
                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom" [class.p3xr-field-error]="isFieldInvalid('maxValueDisplay', -1, 32768)" subscriptSizing="dynamic">
                            <mat-label>{{ strings().form?.treeSettings?.maxValueDisplay }}</mat-label>
                            <input matInput type="number" required step="1" name="maxValueDisplay"
                                [(ngModel)]="model.maxValueDisplay" />
                        </mat-form-field>
                        @if (isFieldInvalid('maxValueDisplay', -1, 32768)) {
                            <div class="p3xr-field-error-text">{{ strings().form?.treeSettings?.error?.maxValueDisplay }}</div>
                        } @else {
                            <div class="p3xr-md-input-container-bottom-info">{{ strings().form?.treeSettings?.maxValueDisplayInfo }}</div>
                        }
                    </div>

                    <div class="p3xr-tree-settings-field-block p3xr-tree-settings-field-block-max-keys">
                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom" [class.p3xr-field-error]="isFieldInvalid('maxKeys', 5, 100000)" subscriptSizing="dynamic">
                            <mat-label>{{ strings().form?.treeSettings?.maxKeys }}</mat-label>
                            <input matInput type="number" required step="1" name="maxKeys"
                                [(ngModel)]="model.maxKeys" />
                        </mat-form-field>
                        @if (isFieldInvalid('maxKeys', 5, 100000)) {
                            <div class="p3xr-field-error-text">{{ strings().form?.treeSettings?.error?.maxKeys }}</div>
                        } @else {
                            <div class="p3xr-md-input-container-bottom-info">{{ strings().form?.treeSettings?.maxKeysInfo }}</div>
                        }
                    </div>

                    @if (!reducedFunctions) {
                        <div class="p3xr-tree-settings-toggle-block p3xr-tree-settings-toggle-block-with-info p3xr-tree-settings-toggle-block-keys-sort">
                            <mat-slide-toggle [(ngModel)]="model.keysSort" name="keysSort">
                                {{ model.keysSort ? strings().label?.keysSort?.on : strings().label?.keysSort?.off }}
                            </mat-slide-toggle>
                            <div class="p3xr-md-input-container-bottom-info">
                                {{ strings().label?.treeKeyStore }}
                            </div>
                        </div>

                        <div class="p3xr-tree-settings-toggle-block p3xr-tree-settings-toggle-block-with-info p3xr-tree-settings-toggle-block-search-client">
                            <mat-slide-toggle
                                [(ngModel)]="model.searchClientSide"
                                name="searchClientSide"
                                [disabled]="dbsize > settings.maxLightKeysCount">
                                {{
                                    model.searchClientSide
                                        ? strings().form?.treeSettings?.label?.searchModeClient
                                        : strings().form?.treeSettings?.label?.searchModeServer
                                }}
                            </mat-slide-toggle>
                            <div class="p3xr-md-input-container-bottom-info">
                                {{ strings().page?.treeControls?.search?.info?.({ maxLightKeysCount: settings.maxLightKeysCount }) }}
                                @if (dbsize > settings.maxLightKeysCount) {
                                    <div class="p3xr-tree-settings-extra-info">
                                        {{ strings().page?.treeControls?.search?.largeSetInfo }}
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    <div class="p3xr-tree-settings-toggle-block">
                        <mat-slide-toggle [(ngModel)]="model.searchStartsWith" name="searchStartsWith">
                            {{
                                model.searchStartsWith
                                    ? strings().form?.treeSettings?.label?.searchModeStartsWith
                                    : strings().form?.treeSettings?.label?.searchModeIncludes
                            }}
                        </mat-slide-toggle>
                    </div>

                    <div class="p3xr-tree-settings-toggle-block">
                        <mat-slide-toggle [(ngModel)]="model.jsonFormat" name="jsonFormat">
                            {{
                                model.jsonFormat
                                    ? strings().form?.treeSettings?.label?.jsonFormatTwoSpace
                                    : strings().form?.treeSettings?.label?.jsonFormatFourSpace
                            }}
                        </mat-slide-toggle>
                    </div>

                    <div class="p3xr-tree-settings-toggle-block">
                        <mat-slide-toggle [(ngModel)]="model.animation" name="animation">
                            {{
                                model.animation
                                    ? strings().form?.treeSettings?.label?.animation
                                    : strings().form?.treeSettings?.label?.noAnimation
                            }}
                        </mat-slide-toggle>
                    </div>

                    <div class="p3xr-tree-settings-toggle-block">
                        <mat-slide-toggle [(ngModel)]="model.undoEnabled" name="undoEnabled">
                            {{
                                model.undoEnabled
                                    ? (strings().form?.treeSettings?.label?.undoEnabled)
                                    : (strings().form?.treeSettings?.label?.undoDisabled)
                            }}
                        </mat-slide-toggle>
                        <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">{{ strings().form?.treeSettings?.undoHint }}</div>
                    </div>

                    <div class="p3xr-tree-settings-toggle-block p3xr-tree-settings-toggle-block-last">
                        <mat-slide-toggle [(ngModel)]="model.showDiffBeforeSave" name="showDiffBeforeSave">
                            {{
                                model.showDiffBeforeSave
                                    ? (strings().form?.treeSettings?.label?.diffEnabled)
                                    : (strings().form?.treeSettings?.label?.diffDisabled)
                            }}
                        </mat-slide-toggle>
                    </div>
                </div>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
                <button mat-raised-button class="btn-primary" type="submit">
                    <mat-icon>save</mat-icon>
                    {{ strings().intention?.save }}
                </button>
            </mat-dialog-actions>
        </form>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`
        .md-block { width: 100%; }

        .p3xr-field-error .mdc-line-ripple::before,
        .p3xr-field-error .mdc-line-ripple::after {
            border-bottom-color: #f44336 !important;
        }

        .p3xr-field-error .mdc-floating-label,
        .p3xr-field-error .mat-mdc-form-field-required-marker {
            color: #f44336 !important;
        }

        .p3xr-field-error-text {
            color: #f44336;
            font-size: 12px;
            margin-top: -16px;
            padding-left: 16px;
        }

        .p3xr-field-hint-text {
            color: var(--mat-app-text-color, rgba(0, 0, 0, 0.6));
            opacity: 0.7;
            font-size: 12px;
            margin-top: -16px;
            padding-left: 16px;
        }
    `],
})
export class TreecontrolSettingsDialogComponent implements OnInit, AfterViewInit {
    @ViewChild('settingsForm') private formRef?: NgForm;

    model: any = {};
    reducedFunctions = false;
    keysRawLength = 0;
    dbsize = 0;
    strings;


    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<TreecontrolSettingsDialogComponent>,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SettingsService) public settings: SettingsService,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(CommonService) private common: CommonService,
        @Inject(MainCommandService) private cmd: MainCommandService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(TreeBuilderService) private treeBuilder: TreeBuilderService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        // Read current settings into local model
        this.model = {
            treeSeparator: this.settings.redisTreeDivider(),
            pageCount: this.settings.pageCount(),
            keyPageCount: this.settings.keyPageCount(),
            keysSort: this.settings.keysSort(),
            searchClientSide: this.settings.searchClientSide(),
            searchStartsWith: this.settings.searchStartsWith(),
            maxValueDisplay: this.settings.maxValueDisplay(),
            maxKeys: this.settings.maxKeys(),
            jsonFormat: this.settings.jsonFormat() === 2,
            animation: this.settings.animation(),
            undoEnabled: this.settings.undoEnabled(),
            showDiffBeforeSave: this.settings.showDiffBeforeSave(),
        };

        // Read state from signals (with fallback to global)
        this.reducedFunctions = this.state.reducedFunctions() ?? false;
        this.keysRawLength = this.state.keysRaw()?.length ?? 0;
        this.dbsize = this.state.dbsize() ?? 0;
    }

    ngAfterViewInit(): void {
        // Validate all fields after the form is ready so pre-filled invalid values show errors
        setTimeout(() => this.validateAllFields());
    }

    isFieldInvalid(fieldName: string, min: number, max: number): boolean {
        const value = this.model[fieldName];
        if (value === null || value === undefined || value === '') {
            return true;
        }
        const num = Number(value);
        return isNaN(num) || !Number.isInteger(num) || num < min || num > max;
    }

    validateField(fieldName: string, min: number, max: number): void {
        const control = this.formRef?.controls[fieldName];
        if (!control) {
            return;
        }
        if (this.isFieldInvalid(fieldName, min, max)) {
            control.setErrors({ range: true });
            control.markAsTouched();
        } else {
            control.setErrors(null);
        }
    }

    onFieldChange(fieldName: string, min: number, max: number): void {
        setTimeout(() => this.validateField(fieldName, min, max));
    }

    validateAllFields(): void {
        this.validateField('pageCount', 10, 5000);
        this.validateField('keyPageCount', 5, 100);
        this.validateField('maxValueDisplay', -1, 32768);
        this.validateField('maxKeys', 5, 100000);
    }

    showFieldError(controlName: string): boolean {
        const control = this.formRef?.controls[controlName];
        return !!control && control.invalid && (control.touched || this.formRef?.submitted);
    }

    private markAllControlsTouched(): void {
        if (!this.formRef) {
            return;
        }

        Object.values(this.formRef.controls).forEach((control) => {
            control.markAsTouched();
            control.updateValueAndValidity();
        });
    }

    private handleInvalidForm(): boolean {
        if (this.formRef?.invalid) {
            this.common.toast({
                message: this.strings().form?.error?.invalid,
            });
            return false;
        }

        return true;
    }

    submit(): void {
        this.markAllControlsTouched();

        const hasRangeError =
            this.isFieldInvalid('pageCount', 10, 5000) ||
            this.isFieldInvalid('keyPageCount', 5, 100) ||
            this.isFieldInvalid('maxValueDisplay', -1, 32768) ||
            this.isFieldInvalid('maxKeys', 5, 100000);

        if (hasRangeError || !this.handleInvalidForm()) {
            this.common.toast({
                message: this.strings().form?.error?.invalid,
            });
            return;
        }

        // Save to Angular SettingsService signals
        this.settings.redisTreeDivider.set(this.model.treeSeparator);
        this.settings.pageCount.set(this.model.pageCount);
        this.settings.keyPageCount.set(this.model.keyPageCount);
        this.settings.keysSort.set(this.model.keysSort);
        this.settings.searchClientSide.set(this.model.searchClientSide);
        this.settings.searchStartsWith.set(this.model.searchStartsWith);
        this.settings.maxValueDisplay.set(this.model.maxValueDisplay);
        this.settings.maxKeys.set(this.model.maxKeys);
        this.settings.jsonFormat.set(this.model.jsonFormat ? 2 : 4);
        this.settings.animation.set(this.model.animation);
        this.settings.undoEnabled.set(this.model.undoEnabled);
        this.settings.showDiffBeforeSave.set(this.model.showDiffBeforeSave);

        this.state.page.set(1);
        this.state.redisChanged.set(true);

        // Always refresh from server — settings like sort, page size, max keys affect the data
        this.cmd.refresh().then(() => {
            this.socket.stateChanged$.next();
            this.socket.tick();
        });

        this.dialogRef.close();
    }

    cancel(): void {
        this.dialogRef.close();
    }
}
