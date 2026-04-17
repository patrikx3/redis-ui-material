import { Component, Inject, ViewEncapsulation, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { I18nService } from '../services/i18n.service';
import { RedisStateService } from '../services/redis-state.service';

interface CheatGroup {
    key: string;
    name: string;
    description?: string;
    prompts: string[];
}

@Component({
    selector: 'p3xr-ai-cheatsheet-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatDialogModule, MatFormFieldModule, MatInputModule,
        MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title">
                {{ strings().label?.cheatsheet?.title }}
            </span>
            <span style="flex: 1 1 auto;"></span>
            <button mat-icon-button type="button" (click)="close()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>

        <mat-dialog-content class="p3xr-dialog-content p3xr-cheatsheet-content">
            <!-- Sticky header: subtitle + tip + search stays above the scroll -->
            <div class="p3xr-cheatsheet-sticky">
                @if (strings().label?.cheatsheet?.subtitle) {
                    <div class="p3xr-cheatsheet-sub">
                        {{ strings().label?.cheatsheet?.subtitle }}
                    </div>
                }
                @if (strings().label?.cheatsheet?.footerHint) {
                    <div class="p3xr-cheatsheet-tip">
                        {{ strings().label?.cheatsheet?.footerHint }}
                    </div>
                }
                <div class="p3xr-cheatsheet-search">
                    <mat-form-field style="width: 100%;" subscriptSizing="dynamic" appearance="fill">
                        <mat-icon matPrefix>search</mat-icon>
                        <input matInput [(ngModel)]="filter"
                               [placeholder]="strings().label?.cheatsheet?.searchPlaceholder ?? ''"
                               (keydown)="$event.stopPropagation()" />
                    </mat-form-field>
                </div>
            </div>

            <div class="p3xr-cheatsheet-groups">
                @for (g of visibleGroups(); track g.key) {
                    <div class="p3xr-cheatsheet-group">
                        <div class="p3xr-cheatsheet-group-name">{{ g.name }}</div>
                        @if (g.description) {
                            <div class="p3xr-cheatsheet-group-desc">{{ g.description }}</div>
                        }
                        <div class="p3xr-cheatsheet-prompts">
                            @for (p of filteredPrompts(g.prompts); track p) {
                                <button class="p3xr-cheatsheet-prompt"
                                        type="button"
                                        (click)="pick(p)">
                                    {{ p }}
                                </button>
                            }
                        </div>
                    </div>
                }
                @if (emptyResults()) {
                    <div class="p3xr-cheatsheet-empty">
                        {{ strings().label?.cheatsheet?.empty }}
                    </div>
                }
            </div>
        </mat-dialog-content>

        <mat-dialog-actions class="p3xr-dialog-actions p3xr-cheatsheet-footer">
            <span style="flex: 1 1 auto;"></span>
            <button mat-raised-button class="btn-primary" type="button" (click)="openOfficialDocs()">
                <mat-icon>menu_book</mat-icon>
                <span>{{ strings().label?.cheatsheet?.openOfficialDocs }}</span>
            </button>
            <button mat-flat-button class="btn-primary" type="button" (click)="close()">
                <mat-icon>close</mat-icon>
                <span>{{ strings().intention?.close }}</span>
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        /* mat-dialog-content must be zero-padded so the sticky block can reach
           the true top of the scroll container (no 24px MDC default padding). */
        .p3xr-cheatsheet-content.mat-mdc-dialog-content {
            padding: 0 !important;
        }

        .p3xr-cheatsheet-sticky {
            position: sticky;
            top: 0;
            z-index: 2;
            background: var(--mat-app-background-color, inherit);
            border-bottom: 1px solid var(--p3xr-content-border-color, rgba(255, 255, 255, 0.08));
            padding: 12px 16px;
        }
        .p3xr-cheatsheet-sub,
        .p3xr-cheatsheet-tip {
            font-size: 13px;
            opacity: 0.8;
            line-height: 1.4;
            padding-bottom: 4px;
        }
        .p3xr-cheatsheet-search {
            margin: 0;
            padding: 4px 0 0 0;
        }
        /* Kill every source of extra vertical space mat-form-field adds around
           the input so the sticky block's padding is the ONLY vertical spacing. */
        .p3xr-cheatsheet-search .mat-mdc-form-field-subscript-wrapper,
        .p3xr-cheatsheet-search .mat-mdc-form-field-bottom-align {
            display: none !important;
            height: 0 !important;
            min-height: 0 !important;
        }
        .p3xr-cheatsheet-search .mat-mdc-text-field-wrapper,
        .p3xr-cheatsheet-search .mat-mdc-form-field {
            margin: 0 !important;
        }
        .p3xr-cheatsheet-groups {
            padding: 12px 16px;
        }
        .p3xr-cheatsheet-group:first-child .p3xr-cheatsheet-group-name {
            margin-top: 0;
        }
        /* Only mat-dialog-content scrolls — this block is inline so the dialog owns the single scrollbar. */
        .p3xr-cheatsheet-groups {
            padding: 0 16px 16px 16px;
        }
        .p3xr-cheatsheet-group {
            margin-bottom: 18px;
        }
        .p3xr-cheatsheet-group-name {
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-top: 6px;
            margin-bottom: 4px;
            opacity: 0.85;
        }
        .p3xr-cheatsheet-group-desc {
            font-size: 12px;
            opacity: 0.65;
            margin-bottom: 8px;
        }
        .p3xr-cheatsheet-prompts {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
        /* Plain bordered button — avoids mat-stroked-button's absolutely-positioned
           border element that doesn't wrap with multi-line content. Consistent padding
           on both single- and multi-line prompts. */
        .p3xr-cheatsheet-prompt {
            display: block;
            width: 100%;
            text-align: left;
            font-family: 'Roboto Mono', monospace;
            font-size: 12px;
            line-height: 1.5;
            padding: 8px 12px;
            border: 1px solid var(--p3xr-content-border-color, rgba(127, 127, 127, 0.3));
            border-radius: 4px;
            background: transparent;
            color: inherit;
            cursor: pointer;
            white-space: normal;
            word-break: break-word;
            overflow-wrap: anywhere;
            transition: background 0.1s ease, border-color 0.1s ease;
        }
        .p3xr-cheatsheet-prompt:hover {
            background: var(--p3xr-accordion-bg, rgba(127, 127, 127, 0.12));
            border-color: var(--mat-sys-primary, currentColor);
        }
        .p3xr-cheatsheet-prompt:focus-visible {
            outline: 2px solid var(--mat-sys-primary, currentColor);
            outline-offset: -1px;
        }
        .p3xr-cheatsheet-empty {
            padding: 24px;
            text-align: center;
            opacity: 0.6;
            font-size: 13px;
        }
        .p3xr-cheatsheet-footer {
            padding: 10px 16px !important;
            min-height: auto !important;
        }
        .p3xr-cheatsheet-footer-hint {
            font-size: 11px;
            opacity: 0.7;
            line-height: 1.4;
        }
    `],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiCheatsheetDialogComponent {

    readonly strings;
    filter = '';

    constructor(
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(RedisStateService) private readonly state: RedisStateService,
        @Inject(ChangeDetectorRef) readonly cdr: ChangeDetectorRef,
        @Inject(MatDialogRef) private readonly dialogRef: MatDialogRef<AiCheatsheetDialogComponent, string | undefined>,
    ) {
        this.strings = this.i18n.strings;
    }

    visibleGroups(): CheatGroup[] {
        const cs = this.strings()?.label?.cheatsheet?.groups;
        if (!cs) return [];
        const modules = (this.state.modules() || []).map((m: any) => (m?.name || '').toLowerCase());
        const hasRedisVersion = (major: number): boolean => {
            const v = this.state.redisVersion?.();
            return v?.isAtLeast ? v.isAtLeast(major, 0) : false;
        };
        const isCluster = this.state.info()?.server?.redis_mode === 'cluster';
        const result: CheatGroup[] = [];

        const push = (key: string, group: any) => {
            if (!group || !Array.isArray(group.prompts) || group.prompts.length === 0) return;
            result.push({ key, name: group.name, description: group.description, prompts: group.prompts });
        };

        push('diagnostics', cs.diagnostics);
        push('keys', cs.keys);
        push('dataTypes', cs.dataTypes);
        if (modules.includes('rejson') || modules.includes('rejson-rl') || modules.includes('json')) push('json', cs.json);
        if (modules.includes('search') || modules.includes('searchlight')) push('search', cs.search);
        if (modules.includes('timeseries')) push('timeseries', cs.timeseries);
        if (modules.includes('bf')) push('bloom', cs.bloom);
        if (hasRedisVersion(8)) {
            push('vectorSet', cs.vectorSet);
            push('redis8', cs.redis8);
        }
        push('scripting', cs.scripting);
        if (isCluster) push('cluster', cs.cluster);
        if (hasRedisVersion(6)) push('acl', cs.acl);
        push('qna', cs.qna);
        push('translate', cs.translate);

        return result;
    }

    filteredPrompts(prompts: string[]): string[] {
        const q = this.filter.trim().toLowerCase();
        if (!q) return prompts;
        return prompts.filter(p => p.toLowerCase().includes(q));
    }

    emptyResults(): boolean {
        return this.visibleGroups().every(g => this.filteredPrompts(g.prompts).length === 0);
    }

    pick(prompt: string): void {
        this.dialogRef.close('ai: ' + prompt);
    }

    openOfficialDocs(): void {
        window.open('https://redis.io/docs/latest/commands/', '_blank');
    }

    close(): void {
        this.dialogRef.close(undefined);
    }
}
