import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { I18nService } from '../services/i18n.service';
import { SocketService } from '../services/socket.service';
import { CommonService } from '../services/common.service';

@Component({
    selector: 'p3xr-key-import-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatToolbarModule, MatButtonModule, MatIconModule,
        MatDividerModule, MatRadioModule, ScrollingModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title">
                {{ strings().intention?.importKeys || 'Import Keys' }}
            </span>
            <button mat-icon-button type="button" (click)="cancel()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>

        <mat-dialog-content class="p3xr-dialog-content">
            <div class="p3xr-padding">

                <div style="margin-bottom: 16px;">
                    <strong>{{ strings().label?.importPreview || 'Preview' }}</strong>
                    <span style="opacity: 0.7; margin-left: 8px;">
                        ({{ data.keys.length }})
                    </span>
                </div>

                <cdk-virtual-scroll-viewport itemSize="40" class="p3xr-import-preview-list">
                    <div *cdkVirtualFor="let entry of data.keys; trackBy: trackByKey" class="p3xr-import-preview-row">
                        <span class="p3xr-import-key-name">{{ entry.key }}</span>
                        <kbd class="p3xr-kbd p3xr-kbd-small">{{ strings().redisTypes?.[entry.type] || entry.type }}</kbd>
                    </div>
                </cdk-virtual-scroll-viewport>

                <div style="margin-top: 16px;">
                    <div style="margin-bottom: 8px; font-weight: 500;">
                        {{ strings().label?.importConflict || 'If key already exists:' }}
                    </div>
                    <mat-radio-group [(ngModel)]="conflictMode">
                        <mat-radio-button value="overwrite" style="margin-right: 16px;">
                            {{ strings().label?.importOverwrite || 'Overwrite' }}
                        </mat-radio-button>
                        <mat-radio-button value="skip">
                            {{ strings().label?.importSkip || 'Skip' }}
                        </mat-radio-button>
                    </mat-radio-group>
                </div>

            </div>
        </mat-dialog-content>

        <mat-dialog-actions class="p3xr-dialog-actions">
            <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
            <button mat-raised-button class="btn-primary" (click)="doImport()" [disabled]="importing">
                <mat-icon>file_upload</mat-icon>
                {{ importing ? (strings().label?.importProgress || 'Importing...') : (strings().intention?.importKeys || 'Import') }}
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        .p3xr-import-preview-list { height: 300px; }
        .p3xr-import-preview-row {
            display: flex; align-items: center; justify-content: space-between; width: 100%; gap: 8px;
            height: 40px; padding: 0 16px; box-sizing: border-box;
            border-bottom: 1px solid var(--p3xr-list-border, rgba(0,0,0,0.12));
        }
        .p3xr-import-key-name {
            flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
            font-family: 'Roboto Mono', monospace; font-size: 13px;
        }
    `],
})
export class KeyImportDialogComponent {
    strings;
    conflictMode: 'overwrite' | 'skip' = 'overwrite';
    importing = false;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<KeyImportDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { keys: any[] },
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
    ) {
        this.strings = this.i18n.strings;
    }

    trackByKey(_index: number, entry: any): string {
        return entry.key;
    }

    cancel(): void {
        this.dialogRef.close(null);
    }

    async doImport(): Promise<void> {
        const keys = this.data.keys;
        const conflictMode = this.conflictMode;
        this.dialogRef.close({ pending: true, keys, conflictMode });
    }
}
