import { Component, Input, Output, EventEmitter, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../services/i18n.service';

/**
 * Shared responsive cancel button for all dialogs.
 * - Wide screens: shows icon + text
 * - Small screens: shows icon only + tooltip
 *
 * Usage:
 *   <p3xr-dialog-cancel (cancel)="onCancel()"></p3xr-dialog-cancel>
 *   <p3xr-dialog-cancel [label]="'Close'" icon="close" (cancel)="onClose()"></p3xr-dialog-cancel>
 */
@Component({
    selector: 'p3xr-dialog-cancel',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
    template: `
        <button mat-raised-button class="btn-warn" type="button" (click)="cancel.emit()"
            [matTooltip]="label" [matTooltipDisabled]="isWide"
            [attr.aria-label]="label">
            <mat-icon svgIcon="{{ icon }}"></mat-icon>
            @if (isWide) { <span>{{ label }}</span> }
        </button>
    `,
})
export class DialogCancelButtonComponent {
    @Input() label: string = '';
    @Input() icon: string = 'cancel';
    @Output() cancel = new EventEmitter<void>();

    isWide = true;

    constructor(
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
    ) {
        this.breakpointObserver.observe('(min-width: 600px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });
    }

    ngOnInit(): void {
        if (!this.label) {
            this.label = this.i18n.strings().intention?.cancel || 'Cancel';
        }
    }
}
