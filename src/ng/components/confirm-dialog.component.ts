import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCancelButtonComponent } from './dialog-cancel-button.component';

export interface ConfirmDialogData {
    title: string;
    message: string;
    disableCancel?: boolean;
    okButton?: string;
    cancelButton?: string;
}

@Component({
    selector: 'p3xr-confirm-dialog',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatToolbarModule, DialogCancelButtonComponent],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title">{{ data.title }}</span>
            <button mat-icon-button type="button" (click)="onCancel()">
                <mat-icon svgIcon="close"></mat-icon>
            </button>
        </mat-toolbar>
        <mat-dialog-content class="p3xr-dialog-content">
            <div class="p3xr-dialog-message" [innerHTML]="data.message"></div>
        </mat-dialog-content>
        <mat-dialog-actions class="p3xr-dialog-actions">
            @if (!data.disableCancel) {
                <p3xr-dialog-cancel [label]="data.cancelButton || 'Cancel'" (cancel)="onCancel()"></p3xr-dialog-cancel>
            }
            <button mat-raised-button class="btn-primary" type="button" (click)="onOk()">
                <mat-icon svgIcon="done"></mat-icon>
                {{ data.okButton || 'OK' }}
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        .p3xr-dialog-message { white-space: normal; }
    `],
})
export class ConfirmDialogComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    ) {}

    onOk(): void {
        this.dialogRef.close(true);
    }

    onCancel(): void {
        this.dialogRef.close(false);
    }
}
