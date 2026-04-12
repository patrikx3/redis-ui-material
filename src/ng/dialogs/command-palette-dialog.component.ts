import { Component, Inject, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { I18nService } from '../services/i18n.service';
import { ShortcutsService, ShortcutDef } from '../services/shortcuts.service';

@Component({
    selector: 'p3xr-command-palette-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule, MatDialogModule, MatListModule,
        MatIconModule, MatInputModule, MatFormFieldModule,
    ],
    template: `
        <div class="p3xr-command-palette">
            <div class="p3xr-command-palette-search">
                <mat-icon svgIcon="search"></mat-icon>
                <input #searchInput matInput
                    [(ngModel)]="search"
                    (keydown)="onKeydown($event)"
                    [placeholder]="strings().label?.commandPalette || 'Command Palette'"
                    autocomplete="off" />
            </div>
            <div class="p3xr-command-palette-list">
                @for (item of filtered; track item.label; let i = $index) {
                    <div class="p3xr-command-palette-item"
                        [class.p3xr-command-palette-item-active]="i === selectedIndex"
                        (click)="execute(item)">
                        <span class="p3xr-command-palette-desc">{{ item.description }}</span>
                        <kbd class="p3xr-kbd">{{ item.label }}</kbd>
                    </div>
                }
                @if (filtered.length === 0) {
                    <div class="p3xr-command-palette-empty">
                        {{ strings().label?.noResults || 'No results' }}
                    </div>
                }
            </div>
        </div>
    `,
    styles: [`
        .p3xr-command-palette { width: 100%; min-width: 400px; }
        .p3xr-command-palette-search {
            display: flex; align-items: center; gap: 8px; padding: 12px 16px;
            border-bottom: 1px solid var(--p3xr-list-border, rgba(0,0,0,0.12));
        }
        .p3xr-command-palette-search input {
            flex: 1; border: none; outline: none; background: transparent;
            color: inherit; font-size: 16px; font-family: inherit;
        }
        .p3xr-command-palette-list { max-height: 300px; overflow-y: auto; }
        .p3xr-command-palette-item {
            display: flex; align-items: center; justify-content: space-between;
            padding: 10px 16px; cursor: pointer;
        }
        .p3xr-command-palette-item:hover, .p3xr-command-palette-item-active {
            background: var(--p3xr-hover-bg, rgba(0,0,0,0.04));
        }
        .p3xr-command-palette-empty { padding: 16px; text-align: center; opacity: 0.5; }
    `],
})
export class CommandPaletteDialogComponent implements OnInit, AfterViewInit {
    @ViewChild('searchInput') searchInput!: ElementRef;
    search = '';
    selectedIndex = 0;
    strings;
    allItems: Array<{ label: string; description: string; shortcut: ShortcutDef }> = [];
    filtered: Array<{ label: string; description: string; shortcut: ShortcutDef }> = [];

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<CommandPaletteDialogComponent>,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(ShortcutsService) private shortcutsService: ShortcutsService,
    ) { this.strings = this.i18n.strings; }

    ngOnInit(): void {
        const strings = this.strings();
        const seen = new Set<string>();
        this.allItems = [];
        for (const s of this.shortcutsService.getShortcuts()) {
            if (seen.has(s.descriptionKey)) continue;
            seen.add(s.descriptionKey);
            this.allItems.push({ label: s.label, description: strings?.label?.[s.descriptionKey] || s.descriptionKey, shortcut: s });
        }
        this.filtered = [...this.allItems];
    }

    ngAfterViewInit(): void { setTimeout(() => this.searchInput?.nativeElement?.focus(), 50); }

    onKeydown(event: KeyboardEvent): void {
        if (event.key === 'ArrowDown') { event.preventDefault(); this.selectedIndex = Math.min(this.selectedIndex + 1, this.filtered.length - 1); }
        else if (event.key === 'ArrowUp') { event.preventDefault(); this.selectedIndex = Math.max(this.selectedIndex - 1, 0); }
        else if (event.key === 'Enter') { event.preventDefault(); if (this.filtered[this.selectedIndex]) this.execute(this.filtered[this.selectedIndex]); }
        else if (event.key === 'Escape') { this.dialogRef.close(); }
        else { this.filter(); }
    }

    filter(): void {
        const q = this.search.toLowerCase().trim();
        this.filtered = q ? this.allItems.filter(i => i.description.toLowerCase().includes(q) || i.label.toLowerCase().includes(q)) : [...this.allItems];
        this.selectedIndex = 0;
    }

    execute(item: { shortcut: ShortcutDef }): void { this.dialogRef.close(); item.shortcut.action(); }
}
