import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';

export interface PromptDialogData {
    title: string;
    placeholder: string;
    initialValue?: string;
    okButton: string;
    cancelButton: string;
}

@Component({
    selector: 'p3xr-prompt-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title">{{ data.title }}</span>
            <button mat-icon-button type="button" (click)="onCancel()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>
        <mat-dialog-content class="p3xr-dialog-content">
            <mat-form-field class="full-width">
                <mat-label>{{ data.placeholder }}</mat-label>
                <input matInput [(ngModel)]="value" (keydown.enter)="onOk()" required #inputField="ngModel" />
                @if (inputField.invalid && inputField.touched) {
                    <mat-error>{{ data.placeholder }} is required</mat-error>
                }
            </mat-form-field>
        </mat-dialog-content>
        <mat-dialog-actions class="p3xr-dialog-actions">
            <p3xr-dialog-cancel [label]="data.cancelButton" (cancel)="onCancel()"></p3xr-dialog-cancel>
            <button mat-raised-button class="btn-primary" type="button" (click)="onOk()" [disabled]="!value?.trim()"
                [matTooltip]="data.okButton" [matTooltipDisabled]="isWide">
                <mat-icon>done</mat-icon>
                @if (isWide) { <span>{{ data.okButton }}</span> }
            </button>
        </mat-dialog-actions>
    `,
    styles: [`.full-width { width: 100%; min-width: 0; }`],
})
export class PromptDialogComponent {
    value: string;
    isWide = true;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PromptDialogData,
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<PromptDialogComponent>,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.value = data.initialValue || '';
        this.breakpointObserver.observe('(min-width: 600px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });
    }

    onOk(): void {
        if (!this.value?.trim()) return;
        this.dialogRef.close(this.value);
    }

    onCancel(): void {
        this.dialogRef.close(undefined);
    }
}
