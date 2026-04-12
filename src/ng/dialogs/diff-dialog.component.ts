import { Component, Inject, ChangeDetectionStrategy, ViewEncapsulation, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BreakpointObserver } from '@angular/cdk/layout';
import { diffLines, Change } from 'diff';
import { I18nService } from '../services/i18n.service';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';

export interface DiffDialogData {
    keyName: string;
    fieldName?: string;
    oldValue: string;
    newValue: string;
}

interface DiffBlock {
    type: 'added' | 'removed' | 'unchanged' | 'collapse';
    lines: string[];
    collapsedCount?: number;
    expanded?: boolean;
}

const CONTEXT_LINES = 3;

@Component({
    selector: 'p3xr-diff-dialog',
    standalone: true,
    imports: [
        CommonModule, MatDialogModule, MatButtonModule, MatIconModule,
        MatToolbarModule, MatTooltipModule, MatButtonToggleModule,
        DialogCancelButtonComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title p3xr-dialog-title-with-icon" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <mat-icon svgIcon="difference"></mat-icon>
                <span>{{ diffStrings().reviewChanges || 'Review changes' }}</span>
            </span>
            <span style="flex: 1;"></span>
            <mat-button-toggle-group [value]="mode()" (change)="mode.set($event.value)" class="p3xr-diff-toggle" [hideSingleSelectionIndicator]="true">
                <mat-button-toggle value="inline">{{ diffStrings().inline || 'Inline' }}</mat-button-toggle>
                <mat-button-toggle value="side-by-side">{{ diffStrings().sideBySide || 'Side by side' }}</mat-button-toggle>
            </mat-button-toggle-group>
            <span class="p3xr-diff-summary-header">
                <span class="p3xr-diff-count-add">+{{ additions() }}</span> {{ diffStrings().additions || 'additions' }},
                <span class="p3xr-diff-count-del">-{{ deletions() }}</span> {{ diffStrings().deletions || 'deletions' }}
            </span>
            <button mat-icon-button (click)="dialogRef.close(false)"><mat-icon svgIcon="close"></mat-icon></button>
        </mat-toolbar>

        <mat-dialog-content class="p3xr-dialog-content p3xr-diff-content" [class.p3xr-diff-sbs]="mode() === 'side-by-side'">
            @if (mode() === 'inline') {
                @for (block of blocks(); track $index) {
                    @if (block.type === 'collapse' && !block.expanded) {
                        <div class="p3xr-diff-collapse" (click)="expandBlock($index)">... {{ block.collapsedCount }} {{ diffStrings().unchangedLines || 'unchanged lines' }} ...</div>
                    } @else {
                        @for (line of block.lines; track $index) {
                            <div class="p3xr-diff-line" [class.p3xr-diff-added]="block.type === 'added'" [class.p3xr-diff-removed]="block.type === 'removed'" [class.p3xr-diff-unchanged]="block.type === 'unchanged' || block.type === 'collapse'">
                                <span class="p3xr-diff-prefix">{{ block.type === 'added' ? '+' : block.type === 'removed' ? '-' : ' ' }}</span>{{ line }}
                            </div>
                        }
                    }
                }
            } @else {
                <div class="p3xr-diff-side">
                    <div class="p3xr-diff-side-header">{{ diffStrings().before || 'Before' }}</div>
                    @for (block of blocks(); track $index) {
                        @if (block.type === 'collapse' && !block.expanded) {
                            <div class="p3xr-diff-collapse" (click)="expandBlock($index)">... {{ block.collapsedCount }} {{ diffStrings().unchangedLines || 'unchanged lines' }} ...</div>
                        } @else if (block.type !== 'added') {
                            @for (line of block.lines; track $index) {
                                <div class="p3xr-diff-line" [class.p3xr-diff-removed]="block.type === 'removed'" [class.p3xr-diff-unchanged]="block.type === 'unchanged' || block.type === 'collapse'">{{ line }}</div>
                            }
                        }
                    }
                </div>
                <div class="p3xr-diff-side">
                    <div class="p3xr-diff-side-header">{{ diffStrings().after || 'After' }}</div>
                    @for (block of blocks(); track $index) {
                        @if (block.type === 'collapse' && !block.expanded) {
                            <div class="p3xr-diff-collapse" (click)="expandBlock($index)">... {{ block.collapsedCount }} {{ diffStrings().unchangedLines || 'unchanged lines' }} ...</div>
                        } @else if (block.type !== 'removed') {
                            @for (line of block.lines; track $index) {
                                <div class="p3xr-diff-line" [class.p3xr-diff-added]="block.type === 'added'" [class.p3xr-diff-unchanged]="block.type === 'unchanged' || block.type === 'collapse'">{{ line }}</div>
                            }
                        }
                    }
                </div>
            }
        </mat-dialog-content>

        <mat-dialog-actions class="p3xr-dialog-actions">
            <p3xr-dialog-cancel (cancel)="dialogRef.close(false)"></p3xr-dialog-cancel>
            <button mat-raised-button class="btn-primary" (click)="dialogRef.close(true)"
                [matTooltip]="strings().intention?.save || 'Save'" [matTooltipDisabled]="isWide">
                <mat-icon svgIcon="save"></mat-icon>
                @if (isWide) { <span>{{ strings().intention?.save || 'Save' }}</span> }
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        .p3xr-diff-content {
            font-family: 'Roboto Mono', monospace;
            font-size: 13px;
            padding: 0 !important;
            min-height: 200px;
            max-height: 60vh;
            overflow: auto;
        }
        .p3xr-diff-sbs {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .p3xr-diff-side {
            overflow: auto;
            &:first-child { border-right: 1px solid rgba(128,128,128,0.2); }
        }
        .p3xr-diff-side-header {
            padding: 4px 8px;
            font-weight: 500;
            position: sticky;
            top: 0;
            z-index: 1;
            border-bottom: 1px solid rgba(128,128,128,0.2);
            background: var(--p3xr-content-bg, inherit);
        }
        .p3xr-diff-line {
            padding: 1px 8px;
            white-space: pre-wrap;
            word-break: break-all;
        }
        .p3xr-diff-prefix {
            display: inline-block;
            width: 16px;
            font-weight: 700;
            user-select: none;
        }
        .p3xr-diff-added { background: rgba(76,175,80,0.12); }
        .p3xr-diff-removed { background: rgba(244,67,54,0.12); }
        .p3xr-diff-unchanged { opacity: 0.6; }
        .p3xr-diff-collapse {
            padding: 4px 8px;
            opacity: 0.4;
            font-style: italic;
            cursor: pointer;
            &:hover { opacity: 0.7; }
        }
        .p3xr-diff-toggle {
            height: 28px;
            margin-right: 4px;
            border-radius: 4px !important;
            overflow: hidden;
            border: 1px solid rgba(255,255,255,0.3) !important;

            .mat-button-toggle {
                height: 28px;
                font-size: 12px;
                border: none !important;
                border-left: 1px solid rgba(255,255,255,0.3) !important;
                border-radius: 0 !important;
                background: transparent;
                color: rgba(255,255,255,0.7);
            }
            .mat-button-toggle:first-child {
                border-left: none !important;
            }
            .mat-button-toggle-checked {
                background: rgba(255,255,255,0.15) !important;
                color: rgba(255,255,255,0.95) !important;
            }
            .mat-button-toggle-button {
                height: 28px;
            }
            .mat-button-toggle-label-content {
                line-height: 28px !important;
                padding: 0 10px !important;
            }
            .mat-pseudo-checkbox,
            .mdc-button__icon {
                display: none !important;
            }
            .mat-button-toggle-button {
                padding: 0 !important;
            }
        }
        .p3xr-diff-summary-header {
            font-size: 12px; opacity: 0.8; white-space: nowrap; margin-left: 8px; margin-right: 4px;
        }
        .p3xr-diff-count-add { color: #81c784; font-weight: 700; }
        .p3xr-diff-count-del { color: #ef9a9a; font-weight: 700; }
    `],
})
export class DiffDialogComponent implements OnInit {
    readonly strings;
    readonly diffStrings;
    readonly mode = signal<'inline' | 'side-by-side'>('inline');
    readonly blocks = signal<DiffBlock[]>([]);
    isWide = true;

    private rawChanges: Change[];
    readonly additions;
    readonly deletions;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: DiffDialogData,
        @Inject(MatDialogRef) public dialogRef: MatDialogRef<DiffDialogComponent>,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
    ) {
        this.strings = this.i18n.strings;
        this.diffStrings = computed(() => this.strings()?.diff || {});
        this.rawChanges = diffLines(data.oldValue, data.newValue);
        this.additions = computed(() => this.rawChanges.filter(c => c.added).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0));
        this.deletions = computed(() => this.rawChanges.filter(c => c.removed).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0));
    }

    ngOnInit(): void {
        this.blocks.set(this.buildBlocks());
        this.breakpointObserver.observe('(min-width: 600px)').subscribe(r => {
            this.isWide = r.matches;
        });
    }

    expandBlock(index: number): void {
        const updated = [...this.blocks()];
        const block = { ...updated[index] };
        block.expanded = true;
        block.type = 'unchanged';
        updated[index] = block;
        this.blocks.set(updated);
    }

    private buildBlocks(): DiffBlock[] {
        const blocks: DiffBlock[] = [];
        for (const change of this.rawChanges) {
            const lines = change.value.replace(/\n$/, '').split('\n');
            if (change.added) {
                blocks.push({ type: 'added', lines });
            } else if (change.removed) {
                blocks.push({ type: 'removed', lines });
            } else {
                if (lines.length <= CONTEXT_LINES * 2 + 1) {
                    blocks.push({ type: 'unchanged', lines });
                } else {
                    blocks.push({ type: 'unchanged', lines: lines.slice(0, CONTEXT_LINES) });
                    const collapsed = lines.slice(CONTEXT_LINES, -CONTEXT_LINES);
                    blocks.push({ type: 'collapse', lines: collapsed, collapsedCount: collapsed.length });
                    blocks.push({ type: 'unchanged', lines: lines.slice(-CONTEXT_LINES) });
                }
            }
        }
        return blocks;
    }
}
