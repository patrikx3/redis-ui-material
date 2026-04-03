import { Injectable, signal, computed, effect } from '@angular/core';

const merge = require('lodash/merge');
const { getTranslations, loadTranslation: loadTranslationChunk } = require('../../core/translation-loader');

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

    /**
     * List of missing translation keys in the current language (for development).
     */
    readonly missingKeys = computed(() => {
        const translations = this.getTranslations();
        const en = translations['en'] || {};
        const current = translations[this.currentLang()] || {};
        const missing: string[] = [];

        const isObject = (v: any) => v && typeof v === 'object' && !Array.isArray(v);
        const diffKeys = (base: any, target: any, path: string = '') => {
            Object.keys(base || {}).forEach((k) => {
                const nextPath = path ? `${path}.${k}` : k;
                if (!(target && Object.prototype.hasOwnProperty.call(target, k))) {
                    missing.push(nextPath);
                } else if (isObject(base[k]) && isObject(target[k])) {
                    diffKeys(base[k], target[k], nextPath);
                }
            });
        };

        try {
            diffKeys(en, current);
        } catch (e) { /* noop */ }

        return missing;
    });

    constructor() {
        // Persist language changes to localStorage and sync with AngularJS
        effect(() => {
            const lang = this.currentLang();
            this.setStorageItem(I18nService.STORAGE_KEY, lang);
            this.applyDocumentLanguage(lang);

            // Notify Electron shell so language persists across restarts
            try {
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage({ type: 'p3x-ui-storage-set', key: I18nService.STORAGE_KEY, value: lang }, '*');
                }
            } catch { /* not in iframe */ }

            // Log missing keys in development
            const missing = this.missingKeys();
            if (missing.length > 0) {
                console.warn(`[i18n] Missing translation keys for '${lang}':`, missing);
            }
        });
    }

    /**
     * Switch the active language. Lazily loads the translation chunk if not yet
     * cached, then triggers recomputation of the strings signal.
     */
    setLanguage(lang: string): void {
        const nextLanguage = lang || 'en';
        loadTranslationChunk(nextLanguage).then(
            () => this.currentLang.set(nextLanguage),
            () => this.currentLang.set(nextLanguage),
        );
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

    private detectInitialLanguage(): string {
        // Try localStorage first
        const storedLang = this.readStorageItem(I18nService.STORAGE_KEY);
        if (storedLang) return storedLang;

        // Auto-detect from browser (same logic as AngularJS boot.js)
        try {
            const navLang = (navigator.language || '').toLowerCase();
            if (navLang.startsWith('zh')) return 'zn';
            if (navLang.startsWith('ru')) return 'ru';
        } catch (e) { /* noop */ }

        return 'en';
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
