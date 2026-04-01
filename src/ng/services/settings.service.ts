import { Injectable, signal, computed, effect } from '@angular/core';

declare const p3xr: any;

/**
 * LocalStorage-backed settings service using Angular signals.
 *
 * Each setting is a WritableSignal that reads its initial value from
 * localStorage and persists changes back to localStorage.
 */
@Injectable({ providedIn: 'root' })
export class SettingsService {

    // --- LocalStorage-backed signals ---

    readonly redisTreeDivider = signal<string>(this.getStorage('p3xr-main-treecontrol-divider', ':'));
    readonly jsonFormat = signal<number>(this.getStorageInt('p3xr-json-format', 4));
    readonly animation = signal<boolean>(this.getStorageInt('p3xr-animation-settings', 0) === 1);
    readonly maxValueDisplay = signal<number>(this.getStorageInt('p3xr-main-treecontrol-max-value-display', 1024));
    readonly maxKeys = signal<number>(this.clampMaxKeys(this.getStorageInt('p3xr-max-keys', 1000)));
    readonly keysSort = signal<boolean>(this.getStorageBool('p3xr-main-treecontrol-key-sort', true));
    readonly searchClientSide = signal<boolean>(this.getStorageBool('p3xr-main-treecontrol-search-client-mode', false));
    readonly searchStartsWith = signal<boolean>(this.getStorageBool('p3xr-main-treecontrol-search-starts-with', false));
    readonly pageCount = signal<number>(this.getStorageInt('p3xr-main-treecontrol-page-size', 250));
    readonly keyPageCount = signal<number>(this.getStorageInt('p3xr-main-key-page-size', 5));
    readonly language = signal<string>(this.getStorage('p3xr-language', 'en'));

    // --- Computed values ---

    readonly maxKeysMax = 100000;
    readonly maxLightKeysCount = 110000;

    constructor() {
        // Persist signal changes back to localStorage
        effect(() => { this.setStorage('p3xr-main-treecontrol-divider', this.redisTreeDivider()); });
        effect(() => { this.setStorage('p3xr-json-format', String(this.jsonFormat())); });
        effect(() => { this.setStorage('p3xr-animation-settings', this.animation() ? '1' : '0'); });
        effect(() => { this.applyAnimationClass(this.animation()); });
        effect(() => { this.setStorage('p3xr-main-treecontrol-max-value-display', String(this.maxValueDisplay())); });
        effect(() => { this.setStorage('p3xr-max-keys', String(this.maxKeys())); });
        effect(() => { this.setStorage('p3xr-main-treecontrol-key-sort', String(this.keysSort())); });
        effect(() => { this.setStorage('p3xr-main-treecontrol-search-client-mode', String(this.searchClientSide())); });
        effect(() => { this.setStorage('p3xr-main-treecontrol-search-starts-with', String(this.searchStartsWith())); });
        effect(() => { this.setStorage('p3xr-main-treecontrol-page-size', String(this.pageCount())); });
        effect(() => { this.setStorage('p3xr-main-key-page-size', String(this.keyPageCount())); });
        effect(() => { this.setStorage('p3xr-language', this.language()); });
    }

    // --- Storage helpers ---

    private getStorage(name: string, defaultValue: string): string {
        try {
            const value = localStorage.getItem(name);
            return value !== null ? value : defaultValue;
        } catch {
            return defaultValue;
        }
    }

    private getStorageInt(name: string, defaultValue: number): number {
        const value = this.getStorage(name, '');
        if (!value) return defaultValue;
        const parsed = parseInt(value, 10);
        return isNaN(parsed) ? defaultValue : parsed;
    }

    private getStorageBool(name: string, defaultValue: boolean): boolean {
        const value = this.getStorage(name, '');
        if (!value) return defaultValue;
        if (value === 'true') return true;
        if (value === 'false') return false;
        return defaultValue;
    }

    private clampMaxKeys(value: number): number {
        if (isNaN(value) || value < 5 || value > this.maxKeysMax) {
            return 1000;
        }
        return value;
    }

    private setStorage(name: string, value: string): void {
        try {
            localStorage.setItem(name, value);
        } catch { /* ignore */ }
    }

    private applyAnimationClass(enabled: boolean): void {
        if (typeof document === 'undefined') {
            return;
        }

        document.body.classList.toggle('p3xr-animation', enabled);
        document.body.classList.toggle('p3xr-no-animation', !enabled);
    }
}
