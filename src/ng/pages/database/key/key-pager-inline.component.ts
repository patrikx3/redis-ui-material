import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { P3xrInputComponent } from '../../../components/p3xr-input.component';
import { I18nService } from '../../../services/i18n.service';
import { KeyPaging } from './key-paging';

@Component({
    selector: 'p3xr-key-pager-inline',
    standalone: true,
    imports: [CommonModule, FormsModule, MatTooltipModule, P3xrInputComponent],
    template: `
        @if (paging.pages > 1) {
            <div class="p3xr-key-pager-inline">
                <button class="p3xr-key-pager-btn" type="button"
                    (click)="paging.pager('first'); pageChanged.emit()"
                    [matTooltip]="strings?.page?.treeControls?.pager?.first ?? 'First'">
                    <span class="material-icons">skip_previous</span>
                </button>
                <button class="p3xr-key-pager-btn" type="button"
                    (click)="paging.pager('prev'); pageChanged.emit()"
                    [matTooltip]="strings?.page?.treeControls?.pager?.prev ?? 'Previous'">
                    <span class="material-icons">keyboard_arrow_left</span>
                </button>

                <p3xr-ng-input class="p3xr-key-pager-input"
                    type="number"
                    step="1"
                    min="1"
                    [max]="'' + paging.pages"
                    [ngModel]="paging.page"
                    (ngModelChange)="onPageChange($event)">
                </p3xr-ng-input>
                <span class="p3xr-key-pager-text">/ {{ paging.pages }}</span>

                <button class="p3xr-key-pager-btn" type="button"
                    (click)="paging.pager('next'); pageChanged.emit()"
                    [matTooltip]="strings?.page?.treeControls?.pager?.next ?? 'Next'">
                    <span class="material-icons">keyboard_arrow_right</span>
                </button>
                <button class="p3xr-key-pager-btn" type="button"
                    (click)="paging.pager('last'); pageChanged.emit()"
                    [matTooltip]="strings?.page?.treeControls?.pager?.last ?? 'Last'">
                    <span class="material-icons">skip_next</span>
                </button>
            </div>
        }
    `,
    styles: [`
        .p3xr-key-pager-inline {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px 0;
        }

        .p3xr-key-pager-btn {
            background: none;
            border: none;
            color: var(--p3xr-input-border-color, var(--p3xr-border-color));
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 28px;
            width: 28px;
            margin: 0;
            padding: 0;
        }

        .p3xr-key-pager-btn:focus {
            outline: none;
        }

        .p3xr-key-pager-btn .material-icons {
            font-size: 24px;
        }

        :host ::ng-deep p3xr-ng-input.p3xr-key-pager-input {
            vertical-align: middle !important;
            width: 64px;
            margin: 0 4px;
        }

        .p3xr-key-pager-text {
            margin: 0 4px;
            color: var(--p3xr-input-color, inherit);
        }
    `],
})
export class KeyPagerInlineComponent {
    @Input() paging!: KeyPaging;
    @Output() pageChanged = new EventEmitter<void>();

    constructor(@Inject(I18nService) private i18n: I18nService) {}

    get strings() { return this.i18n.strings(); }

    onPageChange(value: any): void {
        this.paging.page = value;
        this.paging.pageChange();
        this.pageChanged.emit();
    }
}
