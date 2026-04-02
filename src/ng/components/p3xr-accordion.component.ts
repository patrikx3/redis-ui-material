import { Component, Input, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { I18nService } from '../services/i18n.service';

/**
 * Accordion component — matches AngularJS p3xrAccordion exactly.
 *
 * Production reference: https://redis.patrikx3.com/settings
 * - Toolbar: grey/muted bg from Layout sub-theme, 48px height, 20px bold title
 * - Content: white/neutral bg (NOT tinted), thin border matching toolbar color
 * - No border-radius on content area (square corners)
 * - Toolbar has slight shadow when collapsed, flat when expanded
 */
@Component({
    selector: 'p3xr-ng-accordion',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTooltipModule],
    template: `
        <div class="p3xr-accordion-wrapper">
            <mat-toolbar class="p3xr-accordion-toolbar" [class.p3xr-collapsed]="!extended" [class.mat-elevation-z1]="!extended">
                <div class="p3xr-accordion-toolbar-inner">
                    <span class="p3xr-accordion-title" (click)="collapsible ? toggle() : null" [style.cursor]="collapsible ? 'pointer' : 'default'">
                        {{ title }}
                    </span>
                    <div class="p3xr-accordion-actions">
                        <ng-content select="[actions]"></ng-content>
                    </div>
                    @if (collapsible) {
                        <button mat-icon-button (click)="toggle()" class="p3xr-accordion-toggle"
                            [matTooltip]="extended ? (strings().intention?.collapse || 'Collapse') : (strings().intention?.extend || 'Extend')">
                            <mat-icon>{{ extended ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</mat-icon>
                        </button>
                    }
                </div>
            </mat-toolbar>
            @if (extended) {
                <div class="p3xr-accordion-content">
                    <ng-content select="[content]"></ng-content>
                </div>
            }
        </div>
    `,
    styles: [`
        :host { display: block; }
        .p3xr-accordion-wrapper {
            margin-bottom: 0;
        }
        .p3xr-accordion-toolbar {
            height: 48px;
            min-height: 48px;
            max-height: 48px;
            font-size: 20px;
            font-weight: 400;
            background-color: var(--p3xr-accordion-bg) !important;
            color: rgba(0, 0, 0, 0.87) !important;
            padding: 0;
            border-radius: 4px 4px 0 0;
            box-shadow: 0 1px 1px rgba(0,0,0,0.3);
        }
        .p3xr-accordion-toolbar.p3xr-collapsed {
            box-shadow: 0 1px 1px rgba(0,0,0,0.4);
            border-radius: 4px;
        }
        /* Inner flex layout matching AngularJS md-toolbar-tools */
        .p3xr-accordion-toolbar-inner {
            display: flex;
            align-items: center;
            width: 100%;
            height: 48px;
            padding: 0 8px 0 16px;
            box-sizing: border-box;
        }
        .p3xr-accordion-content {
            border: 1px solid var(--p3xr-accordion-bg);
            border-radius: 0 0 4px 4px;
        }
        .p3xr-accordion-title {
            flex: 1;
            cursor: pointer;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .p3xr-accordion-actions {
            display: flex;
            align-items: center;
        }
        .p3xr-accordion-toggle {
            flex-shrink: 0;
            width: 40px !important;
            height: 40px !important;
            padding: 0 !important;
        }
    `]
})
export class P3xrAccordionComponent implements OnInit {
    @Input() title: string = '';
    @Input() accordionKey: string = '';
    @Input() collapsible: boolean = true;

    readonly strings;

    extended = true;

    private static counter = 0;
    private storageKey = '';

    constructor(@Inject(I18nService) private i18n: I18nService) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        if (!this.accordionKey) {
            this.accordionKey = String(++P3xrAccordionComponent.counter);
        }
        this.storageKey = `p3xr-accordion-extended-${this.accordionKey}`;
        this.loadState();
    }

    toggle(): void {
        this.extended = !this.extended;
        this.saveState();
    }

    private loadState(): void {
        try {
            const value = localStorage.getItem(this.storageKey);
            this.extended = value === null ? true : value === 'true';
        } catch {
            this.extended = true;
        }
    }

    private saveState(): void {
        try { localStorage.setItem(this.storageKey, String(this.extended)); } catch {}
    }
}
