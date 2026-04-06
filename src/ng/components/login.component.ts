import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

import { I18nService } from '../services/i18n.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'p3xr-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="p3xr-login-dialog-wrapper">
        <div class="p3xr-login-dialog">
            <form (ngSubmit)="onLogin()" novalidate>
                <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
                    <span class="p3xr-layout-spacer"></span>
                    <button mat-button type="button" [matMenuTriggerFor]="guiMenu"
                            style="color: rgba(255,255,255,0.87);">
                        GUI
                    </button>
                    <mat-menu #guiMenu>
                        <button mat-menu-item (click)="switchGui('ng')"
                                [class.p3xr-mat-menu-item-selected]="currentGui === 'ng'">
                            Angular
                        </button>
                        <button mat-menu-item (click)="switchGui('react')"
                                [class.p3xr-mat-menu-item-selected]="currentGui === 'react'">
                            React
                        </button>
                    </mat-menu>
                </mat-toolbar>

                <div class="p3xr-dialog-content">
                    <mat-form-field class="full-width">
                        <mat-label>{{ i18n.strings().form?.connection?.label?.username || 'Username' }}</mat-label>
                        <input matInput name="username" type="text"
                               [(ngModel)]="username" autocomplete="username" />
                    </mat-form-field>

                    <mat-form-field class="full-width">
                        <mat-label>{{ i18n.strings().form?.connection?.label?.password || 'Password' }}</mat-label>
                        <input matInput name="password"
                               [type]="hidePassword ? 'password' : 'text'"
                               [(ngModel)]="password" autocomplete="current-password"
                               (keydown.enter)="onLogin()" />
                        <button mat-icon-button matSuffix type="button"
                                (click)="hidePassword = !hidePassword">
                            <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
                        </button>
                    </mat-form-field>

                    @if (auth.loginError()) {
                        <div class="p3xr-login-error">
                            {{ getErrorMessage(auth.loginError()) }}
                        </div>
                    }
                </div>

                <div class="p3xr-dialog-actions" style="display: flex; justify-content: flex-end; padding: 8px; gap: 8px;">
                    <button mat-raised-button class="btn-primary" type="submit"
                            [disabled]="loading || !username || !password">
                        <mat-icon>done</mat-icon>
                        {{ i18n.strings().intention?.ok || 'Login' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
    `,
    styles: [`
    .p3xr-login-dialog-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 96px);
    }
    .p3xr-login-dialog {
        width: 400px;
        max-width: calc(100vw - 32px);
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),
                    0 24px 38px 3px rgba(0,0,0,.14),
                    0 9px 46px 8px rgba(0,0,0,.12);
    }
    .full-width { width: 100%; }
    .p3xr-login-error {
        color: #f44336;
        font-size: 13px;
        margin: 4px 0 8px;
    }
    .p3xr-layout-spacer { flex: 1 1 auto; }
    `],
})
export class LoginComponent {
    username = '';
    password = '';
    loading = false;
    hidePassword = true;
    currentGui = 'ng';

    constructor(
        @Inject(I18nService) readonly i18n: I18nService,
        @Inject(AuthService) readonly auth: AuthService,
    ) {
        try {
            this.currentGui = localStorage.getItem('p3xr-frontend') || 'ng';
        } catch {}
    }

    async onLogin(): Promise<void> {
        if (this.loading || !this.username || !this.password) return;
        this.loading = true;
        const success = await this.auth.login(this.username, this.password);
        if (success) {
            location.reload();
        }
        this.loading = false;
    }

    switchGui(gui: string): void {
        this.currentGui = gui;
        try {
            localStorage.setItem('p3xr-frontend', gui);
        } catch {}
        location.href = gui === 'react' ? '/react/' : '/ng/';
    }

    getErrorMessage(error: string): string {
        const strings = this.i18n.strings();
        return strings?.confirm?.invalidCredentials || 'Invalid username or password.';
    }
}
