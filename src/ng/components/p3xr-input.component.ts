import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * Styled input component — Angular standalone replacement for AngularJS p3xrInput directive.
 *
 * The AngularJS version used $mdColors and p3xrCommon for dynamic background/color/border.
 * The Angular version uses CSS custom properties from the theme system:
 *   --p3xr-input-bg, --p3xr-input-color, --p3xr-border-color
 *
 * Implements ControlValueAccessor so it works with ngModel and reactive forms.
 *
 * AngularJS usage:  <p3xr-input ng-model="value" type="text">
 * Downgraded usage: <p3xr-ng-input ng-model="value" type="text">
 */
@Component({
    selector: 'p3xr-ng-input',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
        <input
            class="p3xr-input"
            [type]="type"
            [step]="step"
            [min]="min"
            [max]="max"
            [placeholder]="placeholder"
            [style.background]="'var(--p3xr-input-bg)'"
            [style.color]="'var(--p3xr-input-color)'"
            [style.border-color]="'var(--p3xr-input-border-color, var(--p3xr-border-color))'"
            [ngModel]="value"
            (ngModelChange)="onValueChange($event)"
            (focus)="focused = true"
            (blur)="focused = false; onTouched()"
            (keyup.enter)="onEnterPressed($event)"
        />
    `,
    styles: [`
        :host {
            display: inline-block;
            vertical-align: top;
        }

        .p3xr-input {
            box-sizing: border-box;
            width: 100%;
        }

        .p3xr-input {
            padding: 3px;
            border-style: solid;
            border-width: 2px;
            margin: 1px;
        }


.p3xr-input::placeholder {
    opacity: 0.5;
}

.p3xr-input:focus {
    margin: 0px;
    border-width: 3px;
    outline: none;
}

    `],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => P3xrInputComponent),
        multi: true,
    }]
})
export class P3xrInputComponent implements ControlValueAccessor {
    @Input() type: string = 'text';
    @Input() step: string | undefined;
    @Input() min: string | undefined;
    @Input() max: string | undefined;
    @Input() placeholder: string = '';
    @Output() enterPressed = new EventEmitter<void>();

    value: any = '';
    focused = false;

    private onChange: (value: any) => void = () => { };
    onTouched: () => void = () => { };

    onValueChange(newValue: any): void {
        this.value = newValue;
        this.onChange(newValue);
    }

    writeValue(value: any): void {
        this.value = value;
    }

    registerOnChange(fn: (value: any) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    onEnterPressed(event: KeyboardEvent): void {
        event.preventDefault();
        // Emit after the current input event turn so parent ngModel handlers have settled.
        setTimeout(() => this.enterPressed.emit());
    }
}
