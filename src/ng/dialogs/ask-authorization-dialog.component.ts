import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { I18nService } from '../services/i18n.service';

/**
 * Ask Authorization dialog — Angular replacement for p3xrDialogAskAuthorization.
 * Simple username/password form. Returns { username, password } on submit.
 */
@Component({
    selector: 'p3xr-ask-authorization-dialog',
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
                    <mat-icon style="margin-right: 8px; vertical-align: middle;">shield</mat-icon>
                    {{ strings().label?.askAuth }}
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content">
                <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">
                    {{ strings().label?.aclAuthHint }}
                </div>
                <mat-form-field class="full-width">
                    <mat-label>{{ strings().form?.connection?.label?.username }}</mat-label>
                    <mat-icon matPrefix>person</mat-icon>
                    <input matInput name="username" type="text" [(ngModel)]="model.username" autocomplete="off" />
                </mat-form-field>

                <mat-form-field class="full-width">
                    <mat-label>{{ strings().form?.connection?.label?.password }}</mat-label>
                    <mat-icon matPrefix>lock</mat-icon>
                    <input matInput name="password" type="password" [(ngModel)]="model.password" autocomplete="off" />
                </mat-form-field>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
                <button mat-raised-button class="btn-primary" type="submit">
                    <mat-icon>done</mat-icon>
                    {{ strings().intention?.ok }}
                </button>
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        .full-width { width: 100%; }
        .p3xr-dialog-content { min-width: 300px; }
    `],
})
export class AskAuthorizationDialogComponent {
    model = { username: '', password: '' };
    strings;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<AskAuthorizationDialogComponent>,
        @Inject(I18nService) private i18n: I18nService,
    ) {
        this.strings = this.i18n.strings;
    }

    submit(): void {
        this.dialogRef.close(this.model);
    }

    cancel(): void {
        this.dialogRef.close(undefined);
    }
}
