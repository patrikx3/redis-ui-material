import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { I18nService } from '../services/i18n.service';
import { CommonService } from '../services/common.service';

declare const p3xr: any;

const timestring = require('timestring');
const humanizeDuration = require('humanize-duration');

export interface TtlDialogData {
    model: { ttl: number };
}

/**
 * TTL dialog — Angular replacement for p3xrDialogTtl.
 * Edits TTL value with number input and human-readable timestring input.
 */
@Component({
    selector: 'p3xr-ttl-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatToolbarModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <form (ngSubmit)="submit()" novalidate>
            <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
                <span mat-dialog-title class="p3xr-dialog-title">
                    {{ strings().confirm?.ttl?.title || 'TTL' }}
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content">
                <div>{{ strings().confirm?.ttl?.textContent }}</div>

                <mat-form-field class="full-width">
                    <mat-label>{{ strings().confirm?.ttl?.placeholder || 'TTL (seconds)' }}</mat-label>
                    <input matInput type="number" name="ttl" [(ngModel)]="model.ttl" min="-1"
                           [placeholder]="strings().confirm?.ttl?.placeholderPlaceholder || '-1'" />
                </mat-form-field>

                <mat-form-field class="full-width">
                    <mat-label>{{ strings().confirm?.ttl?.convertTextToTime || 'Duration' }}</mat-label>
                    <input matInput name="convertTextToTime" [(ngModel)]="convertTextToTime"
                           (ngModelChange)="onTextTimeChange($event)"
                           [placeholder]="strings().confirm?.ttl?.convertTextToTimePlaceholder || '1h 30m'" />
                </mat-form-field>

                <button mat-button class="btn-accent p3xr-timestring-link" type="button" (click)="openTimestringNpm()">
                    https://www.npmjs.com/package/timestring
                </button>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
                <button mat-raised-button class="btn-primary" type="submit">
                    <mat-icon>timer</mat-icon>
                    {{ strings().intention?.ttl || 'Set TTL' }}
                </button>
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        .full-width { width: 100%; }
    `],
})
export class TtlDialogComponent implements OnInit {
    model: { ttl: number } = { ttl: -1 };
    convertTextToTime = '';
    strings;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<TtlDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: TtlDialogData,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(CommonService) private common: CommonService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.model = { ...this.data.model };
        if (typeof this.model.ttl === 'number' && this.model.ttl > 0) {
            try {
                const hdOpts = p3xr?.settings?.getHumanizeDurationOptions?.() ?? {};
                this.convertTextToTime = humanizeDuration(this.model.ttl * 1000, {
                    ...hdOpts,
                    delimiter: ' ',
                });
            } catch (e) {
                this.convertTextToTime = '';
            }
        }
    }

    onTextTimeChange(value: string): void {
        try {
            this.model.ttl = timestring(String(value), 's');
        } catch (e) {
            console.warn('timestring parse error', e);
        }
    }

    openTimestringNpm(): void {
        window.open('https://www.npmjs.com/package/timestring#keywords', '_blank');
    }

    submit(): void {
        if (isNaN(this.model.ttl)) {
            this.model.ttl = Math.round(this.model.ttl);
        }
        this.dialogRef.close({ model: this.model });
    }

    cancel(): void {
        this.dialogRef.close(undefined);
    }
}
