import { Injectable, signal, computed, effect } from '@angular/core';

const merge = require('lodash/merge');
const { getTranslations, loadTranslation: loadTranslationChunk } = require('../../core/translation-loader');
const { detectLanguageFromLocale } = require('../../core/detect-language');

/**
 * i18n service — Angular-native translation management.
 *
 * Uses function-valued translations (e.g. arrow functions that accept params),
 * which no standard i18n library supports. Translation storage and lazy loading
 * are provided by the standalone translation-loader module.
 *
 * Language changes are persisted to localStorage.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
    private static readonly STORAGE_KEY = 'p3xr-language';
    private static readonly AUTO = 'auto';

    /**
     * Whether language is in auto-detect mode (from browser/system locale).
     */
    readonly isAuto = signal<boolean>(this.detectIsAuto());

    /**
     * Current language code signal.
     * Initialized from localStorage or browser detection, same as AngularJS boot.js.
     */
    readonly currentLang = signal<string>(this.detectInitialLanguage());

    /**
     * Merged strings object: English fallback merged with current language.
     * Recomputes when currentLang changes. Supports function-valued translations.
     */
    readonly strings = computed(() => {
        const translations = this.getTranslations();
        const en = translations['en'] || {};
        const current = translations[this.currentLang()] || {};
        return merge({}, en, current);
    });

    constructor() {
        // Persist language changes to localStorage and sync with AngularJS
        effect(() => {
            const lang = this.currentLang();
            const auto = this.isAuto();
            const storageValue = auto ? I18nService.AUTO : lang;
            this.setStorageItem(I18nService.STORAGE_KEY, storageValue);
            this.applyDocumentLanguage(lang);

            // Notify Electron shell so language persists across restarts
            try {
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage({ type: 'p3x-ui-storage-set', key: I18nService.STORAGE_KEY, value: storageValue }, '*');
                }
            } catch { /* not in iframe */ }
        });
    }

    /**
     * Switch the active language. 'auto' resolves from browser locale.
     * Lazily loads the translation chunk if not yet cached.
     */
    setLanguage(choice: string): void {
        const auto = choice === I18nService.AUTO;
        const lang = auto ? this.resolveAutoLanguage() : (choice || 'en');
        this.isAuto.set(auto);
        loadTranslationChunk(lang).then(
            () => this.currentLang.set(lang),
            () => this.currentLang.set(lang),
        );
    }

    private resolveAutoLanguage(): string {
        try {
            return detectLanguageFromLocale(navigator.language);
        } catch { return 'en'; }
    }

    /**
     * Get available language codes.
     */
    getAvailableLanguages(): string[] {
        return Object.keys(this.getTranslations());
    }

    // --- Private helpers ---

    private getTranslations(): Record<string, any> {
        return getTranslations();
    }

    private detectIsAuto(): boolean {
        const stored = this.readStorageItem(I18nService.STORAGE_KEY);
        return !stored || stored === I18nService.AUTO;
    }

    private detectInitialLanguage(): string {
        const storedLang = this.readStorageItem(I18nService.STORAGE_KEY);
        if (storedLang && storedLang !== I18nService.AUTO) return storedLang;

        try {
            return detectLanguageFromLocale(navigator.language);
        } catch { return 'en'; }
    }

    private readStorageItem(name: string): string | null {
        try { return localStorage.getItem(name); } catch { return null; }
    }

    private setStorageItem(name: string, value: string): void {
        try { localStorage.setItem(name, value); } catch {}
    }

    private applyDocumentLanguage(lang: string): void {
        if (typeof document === 'undefined') {
            return;
        }

        document.documentElement.setAttribute('lang', lang === 'zn' ? 'zh' : lang);
    }

}
