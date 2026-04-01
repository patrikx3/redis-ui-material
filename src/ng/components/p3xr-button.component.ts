import { Component, Input, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';

/**
 * Button component — Angular standalone replacement for AngularJS p3xrButton.
 *
 * Features:
 * - Shows icon (Material or FontAwesome) + label on wide screens
 * - Shows icon + tooltip on narrow screens (< 720px)
 * - Supports custom CSS classes (btn-primary, btn-accent, btn-warn)
 * - `raised` input switches from flat (mat-button) to filled (mat-flat-button)
 */
@Component({
    selector: 'p3xr-ng-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
    template: `
        @if (raised) {
            @if (isWide) {
                <button mat-flat-button [ngClass]="classes" [disabled]="disabled">
                    @if (mdIcon) { <mat-icon>{{ mdIcon }}</mat-icon> }
                    @if (faIcon) { <i [class]="faIcon"></i> }
                    <span>{{ label }}</span>
                </button>
            } @else {
                <button mat-mini-fab [ngClass]="classes" [disabled]="disabled"
                    [matTooltip]="label" [matTooltipPosition]="tooltipPosition"
                    [matTooltipDisabled]="!label" [attr.aria-label]="label || null">
                    @if (mdIcon) { <mat-icon>{{ mdIcon }}</mat-icon> }
                    @if (faIcon) { <i [class]="faIcon"></i> }
                </button>
            }
        } @else {
            @if (isWide) {
                <button mat-button [ngClass]="classes" class="md-button-dark-hover-fix" [disabled]="disabled">
                    @if (mdIcon) { <mat-icon>{{ mdIcon }}</mat-icon> }
                    @if (faIcon) { <i [class]="faIcon"></i> }
                    <span>{{ label }}</span>
                </button>
            } @else {
                <button mat-icon-button [ngClass]="classes" class="md-button-dark-hover-fix" [disabled]="disabled"
                    [matTooltip]="label" [matTooltipPosition]="tooltipPosition"
                    [matTooltipDisabled]="!label" [attr.aria-label]="label || null">
                    @if (mdIcon) { <mat-icon>{{ mdIcon }}</mat-icon> }
                    @if (faIcon) { <i [class]="faIcon"></i> }
                </button>
            }
        }
    `,
    styles: [`
        :host { display: inline-block; }
        :host button { margin: 0 !important; }
    `]
})
export class P3xrButtonComponent {
    @Input() label: string = '';
    @Input() mdIcon: string | undefined;
    @Input() faIcon: string | undefined;
    @Input() tooltipDirection: string = 'above';
    @Input() classes: string = '';
    @Input() disabled = false;
    @Input() raised = false;

    isWide = true;

    constructor(
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.breakpointObserver.observe('(min-width: 720px)').subscribe(result => {
            this.isWide = result.matches;
            this.cdr.markForCheck();
        });
    }

    get tooltipPosition(): TooltipPosition {
        switch (this.tooltipDirection) {
            case 'top': return 'above';
            case 'bottom': return 'below';
            case 'above': case 'below': case 'left': case 'right': case 'before': case 'after':
                return this.tooltipDirection;
            default: return 'above';
        }
    }
}
