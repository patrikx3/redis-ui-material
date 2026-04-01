import { Component, Inject, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
import { SocketService } from '../services/socket.service';
import { CommonService } from '../services/common.service';

declare const p3xr: any;

@Component({
    selector: 'p3xr-ai-settings-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatToolbarModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <form (ngSubmit)="save()" novalidate>
            <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
                <span mat-dialog-title class="p3xr-dialog-title">
                    {{ strings().label?.aiSettings || 'AI Settings' }}
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content">
                <div class="p3xr-padding">
                    <div style="margin-bottom: 16px; opacity: 0.8; font-size: 13px;">
                        {{ strings().label?.aiGroqApiKeyInfo || 'Optional. Your own Groq API key for better performance. Get a free key from' }}
                        <a href="https://console.groq.com" target="_blank" style="color: inherit; text-decoration: underline;">console.groq.com</a>
                    </div>

                    <mat-form-field style="width: 100%;" subscriptSizing="dynamic">
                        <mat-label>{{ strings().label?.aiGroqApiKey || 'Groq API Key' }}</mat-label>
                        <input matInput type="password" name="apiKey" [(ngModel)]="apiKey"
                               [placeholder]="strings().label?.aiGroqApiKeyPlaceholder || 'gsk_...'" />
                    </mat-form-field>
                </div>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>
                <button mat-raised-button class="btn-primary" type="submit" [disabled]="saving">
                    <mat-icon>save</mat-icon>
                    {{ strings().intention?.save || 'Save' }}
                </button>
            </mat-dialog-actions>
        </form>
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiSettingsDialogComponent {
    strings;
    apiKey = '';
    saving = false;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<AiSettingsDialogComponent>,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
    }

    cancel(): void {
        this.dialogRef.close();
    }

    async save(): Promise<void> {
        this.saving = true;
        this.cdr.markForCheck();
        try {
            const key = this.apiKey.trim();

            if (key) {
                const validation = await this.socket.request({
                    action: 'validate-groq-api-key',
                    payload: { apiKey: key },
                });
                if (!validation.valid) {
                    this.common.toast({ message: this.strings().label?.aiGroqApiKeyInvalid || 'Invalid Groq API key' });
                    return;
                }
            }

            await this.socket.request({
                action: 'set-groq-api-key',
                payload: { apiKey: key, aiEnabled: p3xr.state.cfg?.aiEnabled !== false, aiUseOwnKey: p3xr.state.cfg?.aiUseOwnKey === true },
            });
            p3xr.state.cfg.groqApiKey = key || '';
            this.common.toast({ message: this.strings().label?.aiGroqApiKeySaved || 'AI settings saved' });
            this.dialogRef.close();
        } catch (e: any) {
            this.common.generalHandleError(e);
        } finally {
            this.saving = false;
            this.cdr.markForCheck();
        }
    }
}
