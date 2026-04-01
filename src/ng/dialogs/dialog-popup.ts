import { MatDialogConfig } from '@angular/material/dialog';

type DialogPanelClass = string | string[] | undefined;
type DialogBackdropClass = string | string[] | undefined;

export interface DialogPopupSettings<T = unknown> extends Omit<MatDialogConfig<T>, 'panelClass' | 'backdropClass'> {
    panelClass?: DialogPanelClass;
    backdropClass?: DialogBackdropClass;
}

const BASE_DIALOG_PANEL_CLASS = 'p3xr-dialog-panel';
const BASE_DIALOG_BACKDROP_CLASS = 'p3xr-dialog-backdrop';
const NO_ANIMATION_PANEL_CLASS = 'p3xr-dialog-no-animation';
const NO_ANIMATION_BACKDROP_CLASS = 'p3xr-dialog-backdrop-no-animation';

function normalizeClassList(value: string | string[] | undefined): string[] {
    if (!value) {
        return [];
    }

    const classes = Array.isArray(value) ? value : [value];
    return classes.filter((value): value is string => typeof value === 'string' && value.length > 0);
}

function readStorageItem(name: string): string | null {
    try { return localStorage.getItem(name); } catch { return null; }
}

function isDialogAnimationEnabled(): boolean {
    if (typeof document === 'undefined') {
        return true;
    }

    const body = document.body;
    if (body?.classList.contains('p3xr-no-animation')) {
        return false;
    }
    if (body?.classList.contains('p3xr-animation')) {
        return true;
    }

    return readStorageItem('p3xr-animation-settings') === '1';
}

export function createDialogPopupSettings<T = unknown>(options: DialogPopupSettings<T> = {}): MatDialogConfig<T> {
    const {
        panelClass,
        backdropClass,
        autoFocus,
        disableClose,
        maxWidth,
        maxHeight,
        enterAnimationDuration,
        exitAnimationDuration,
        ...rest
    } = options;

    const animationEnabled = isDialogAnimationEnabled();
    const panelClasses = [BASE_DIALOG_PANEL_CLASS, ...normalizeClassList(panelClass)];
    const backdropClasses = [BASE_DIALOG_BACKDROP_CLASS, ...normalizeClassList(backdropClass)];

    if (!animationEnabled) {
        panelClasses.push(NO_ANIMATION_PANEL_CLASS);
        backdropClasses.push(NO_ANIMATION_BACKDROP_CLASS);
    }

    return {
        autoFocus: autoFocus ?? true,
        disableClose: disableClose ?? false,
        maxWidth: maxWidth ?? '100vw',
        maxHeight: maxHeight ?? '100vh',
        enterAnimationDuration: enterAnimationDuration ?? (animationEnabled ? undefined : '0ms'),
        exitAnimationDuration: exitAnimationDuration ?? (animationEnabled ? undefined : '0ms'),
        ...rest,
        panelClass: Array.from(new Set(panelClasses)),
        backdropClass: Array.from(new Set(backdropClasses)),
    };
}
