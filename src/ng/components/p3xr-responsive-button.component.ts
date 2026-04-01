import { Component, Input, Output, EventEmitter, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';

/**
 * Responsive action button — shows mat-raised-button with text+icon on desktop (>960px),
 * mat-mini-fab with icon-only + tooltip on mobile.
 *
 * Usage:
 *   <p3xr-responsive-button
 *       icon="add"
 *       [label]="strings().intention?.addKey || 'Add'"
 *       color="accent"
 *       [disabled]="false"
 *       (clicked)="doSomething()">
 *   </p3xr-responsive-button>
 *
 * Colors: 'primary' | 'accent' | 'warn'
 */
@Component({
    selector: 'p3xr-responsive-button',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
    template: `
        @if (isWide) {
            <button mat-raised-button [ngClass]="'btn-' + color" [disabled]="disabled" (click)="clicked.emit($event)">
                <mat-icon>{{ icon }}</mat-icon>
                <span>{{ label }}</span>
            </button>
        } @else {
            <button mat-mini-fab [ngClass]="'btn-' + color" [disabled]="disabled" (click)="clicked.emit($event)"
                    [matTooltip]="label" matTooltipPosition="above">
                <mat-icon>{{ icon }}</mat-icon>
            </button>
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class P3xrResponsiveButtonComponent implements OnInit, OnDestroy {
    @Input() icon = '';
    @Input() label = '';
    @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
    @Input() disabled = false;
    @Output() clicked = new EventEmitter<Event>();

    isWide = true;
    private unsub: (() => void) | null = null;

    constructor(
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {}

    ngOnInit(): void {
        const sub = this.breakpointObserver.observe('(min-width: 960px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });
        this.unsub = () => sub.unsubscribe();
    }

    ngOnDestroy(): void {
        this.unsub?.();
    }
}
