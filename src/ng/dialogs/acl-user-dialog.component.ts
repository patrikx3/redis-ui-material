import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../services/i18n.service';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';

export interface AclUserDialogData {
    username: string;
    rules: string;
    isNew: boolean;
}

export interface AclUserDialogResult {
    username: string;
    rules: string[];
}

@Component({
    selector: 'p3xr-acl-user-dialog',
    standalone: true,
    imports: [
        FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule,
        MatSlideToggleModule, MatCheckboxModule, MatChipsModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title">
                {{ data.isNew ? (strings().page?.acl?.createUser || 'Create User') : (strings().page?.acl?.editUser || 'Edit User') }}
            </span>
            <button mat-icon-button type="button" (click)="onCancel()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>

        <mat-dialog-content class="p3xr-dialog-content">
            <mat-form-field class="md-block">
                <mat-label>{{ strings().page?.acl?.username || 'Username' }}</mat-label>
                <input matInput [(ngModel)]="username" [disabled]="!data.isNew" />
            </mat-form-field>

            @if (username === 'default') {
                <div class="p3xr-acl-default-warning">
                    <mat-icon>info</mat-icon>
                    <span>{{ strings().page?.acl?.defaultUserWarning || 'Caution: Modifying the default user can lock out all connections. If this happens, you will need to restart Redis or use redis-cli to restore access.' }}</span>
                </div>
            }

            <div style="margin-bottom: 16px;">
                <mat-slide-toggle [(ngModel)]="enabled">
                    {{ strings().page?.acl?.enabled || 'Enabled' }}
                </mat-slide-toggle>
            </div>

            <div style="margin-bottom: 12px;">
                <mat-checkbox [(ngModel)]="nopass">
                    {{ strings().page?.acl?.noPassword || 'No password (nopass)' }}
                </mat-checkbox>
            </div>

            @if (!nopass) {
                <mat-form-field class="md-block">
                    <mat-label>{{ strings().page?.acl?.password || 'Password' }}</mat-label>
                    <input matInput [(ngModel)]="password" type="password" autocomplete="new-password" />
                    @if (!data.isNew) {
                        <mat-hint>{{ strings().page?.acl?.passwordHint || 'Leave empty to keep current password' }}</mat-hint>
                    }
                </mat-form-field>
            }

            <mat-form-field class="md-block">
                <mat-label>{{ strings().page?.acl?.commands || 'Commands' }}</mat-label>
                <mat-chip-grid #cmdGrid>
                    @for (rule of commandsList; track rule) {
                        <mat-chip-row (removed)="removeChip(commandsList, rule)"
                            [highlighted]="true"
                            [class.p3xr-chip-deny]="rule.startsWith('-')">
                            {{ rule }}
                            <button matChipRemove><mat-icon>cancel</mat-icon></button>
                        </mat-chip-row>
                    }
                </mat-chip-grid>
                <input matInput [matChipInputFor]="cmdGrid"
                    [matChipInputSeparatorKeyCodes]="separatorKeys"
                    (matChipInputTokenEnd)="addChip(commandsList, $event)"
                    placeholder="+@all, -@dangerous, +get ..." />
                <mat-hint>{{ strings().page?.acl?.commandsHint || 'e.g., +@all or +@read -@dangerous' }}</mat-hint>
            </mat-form-field>

            <mat-form-field class="md-block">
                <mat-label>{{ strings().page?.acl?.keys || 'Key Patterns' }}</mat-label>
                <mat-chip-grid #keyGrid>
                    @for (pattern of keysList; track pattern) {
                        <mat-chip-row (removed)="removeChip(keysList, pattern)"
                            [highlighted]="true">
                            {{ pattern }}
                            <button matChipRemove><mat-icon>cancel</mat-icon></button>
                        </mat-chip-row>
                    }
                </mat-chip-grid>
                <input matInput [matChipInputFor]="keyGrid"
                    [matChipInputSeparatorKeyCodes]="separatorKeys"
                    (matChipInputTokenEnd)="addChip(keysList, $event)"
                    placeholder="~*, ~user:* ..." />
                <mat-hint>{{ strings().page?.acl?.keysHint || 'e.g., ~* or ~user:*' }}</mat-hint>
            </mat-form-field>

            <mat-form-field class="md-block">
                <mat-label>{{ strings().page?.acl?.channels || 'Pub/Sub Channels' }}</mat-label>
                <mat-chip-grid #chanGrid>
                    @for (pattern of channelsList; track pattern) {
                        <mat-chip-row (removed)="removeChip(channelsList, pattern)"
                            [highlighted]="true">
                            {{ pattern }}
                            <button matChipRemove><mat-icon>cancel</mat-icon></button>
                        </mat-chip-row>
                    }
                </mat-chip-grid>
                <input matInput [matChipInputFor]="chanGrid"
                    [matChipInputSeparatorKeyCodes]="separatorKeys"
                    (matChipInputTokenEnd)="addChip(channelsList, $event)"
                    placeholder="&*, &notifications:* ..." />
                <mat-hint>{{ strings().page?.acl?.channelsHint || 'e.g., &* or &notifications:*' }}</mat-hint>
            </mat-form-field>
        </mat-dialog-content>

        <mat-dialog-actions class="p3xr-dialog-actions">
            <p3xr-dialog-cancel (cancel)="onCancel()"></p3xr-dialog-cancel>
            <button mat-raised-button class="btn-primary" type="button" (click)="onSave()"
                [disabled]="!username?.trim()"
                [matTooltip]="strings().intention?.save || 'Save'" [matTooltipDisabled]="isWide">
                <mat-icon>done</mat-icon>
                @if (isWide) { <span>{{ strings().intention?.save || 'Save' }}</span> }
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        .md-block { width: 100%; }
        .p3xr-acl-default-warning {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            padding: 12px;
            margin-bottom: 16px;
            border-radius: 4px;
            background-color: var(--p3xr-btn-warn-bg);
            color: var(--p3xr-btn-warn-color);
            font-size: 13px;
            line-height: 1.4;
        }
        .p3xr-acl-default-warning mat-icon {
            flex-shrink: 0;
        }
        mat-chip-row {
            font-size: 13px;
            --mdc-chip-elevated-container-color: var(--p3xr-btn-primary-bg) !important;
            --mdc-chip-label-text-color: var(--p3xr-btn-primary-color) !important;
            --mat-chip-elevated-selected-container-color: var(--p3xr-btn-primary-bg) !important;
            --mat-chip-selected-label-text-color: var(--p3xr-btn-primary-color) !important;
            --mat-chip-selected-trailing-icon-color: var(--p3xr-btn-primary-color) !important;
        }
        .p3xr-chip-deny {
            --mdc-chip-elevated-container-color: var(--p3xr-btn-warn-bg) !important;
            --mdc-chip-label-text-color: var(--p3xr-btn-warn-color) !important;
            --mat-chip-elevated-selected-container-color: var(--p3xr-btn-warn-bg) !important;
            --mat-chip-selected-label-text-color: var(--p3xr-btn-warn-color) !important;
            --mat-chip-selected-trailing-icon-color: var(--p3xr-btn-warn-color) !important;
        }
    `],
})
export class AclUserDialogComponent {
    strings;
    username: string;
    enabled = true;
    nopass = false;
    password = '';
    commandsList: string[] = [];
    keysList: string[] = [];
    channelsList: string[] = [];
    isWide = true;
    readonly separatorKeys = [ENTER, COMMA, SPACE];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: AclUserDialogData,
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<AclUserDialogComponent>,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
        this.username = data.username;
        this.parseRules(data.rules);
        this.breakpointObserver.observe('(min-width: 600px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });
    }

    addChip(list: string[], event: MatChipInputEvent): void {
        const value = (event.value || '').trim();
        if (value && !list.includes(value)) list.push(value);
        event.chipInput!.clear();
    }

    removeChip(list: string[], value: string): void {
        const idx = list.indexOf(value);
        if (idx >= 0) list.splice(idx, 1);
    }

    private parseRules(rules: string): void {
        const tokens = rules.trim().split(/\s+/).filter(Boolean);
        for (const t of tokens) {
            if (t === 'on') this.enabled = true;
            else if (t === 'off') this.enabled = false;
            else if (t === 'nopass') this.nopass = true;
            else if (t.startsWith('>') || t.startsWith('<') || t.startsWith('#') || t === 'resetpass' || t === 'sanitize-payload' || t === 'skip-sanitize-payload') continue;
            else if (t.startsWith('+') || t.startsWith('-') || t === 'allcommands' || t === 'nocommands') this.commandsList.push(t);
            else if (t.startsWith('~') || t.startsWith('%') || t === 'allkeys' || t === 'resetkeys') this.keysList.push(t);
            else if (t.startsWith('&') || t === 'allchannels' || t === 'resetchannels') this.channelsList.push(t);
        }
    }

    onSave(): void {
        const u = this.username?.trim();
        if (!u) return;
        const rules: string[] = [this.enabled ? 'on' : 'off'];
        // When editing, reset permissions first so removals take effect
        if (!this.data.isNew) {
            rules.push('nocommands', 'resetkeys', 'resetchannels');
            if (this.nopass) rules.push('resetpass', 'nopass');
            else if (this.password.trim()) rules.push('resetpass', '>' + this.password.trim());
            // No password change → existing passwords preserved (no resetpass sent)
        } else {
            if (this.nopass) rules.push('nopass');
            else if (this.password.trim()) rules.push('>' + this.password.trim());
        }
        rules.push(...this.commandsList, ...this.keysList, ...this.channelsList);
        this.dialogRef.close({ username: u, rules } as AclUserDialogResult);
    }

    onCancel(): void {
        this.dialogRef.close(undefined);
    }
}
