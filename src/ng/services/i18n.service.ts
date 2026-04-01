import { Injectable, signal, computed, effect } from '@angular/core';

declare const p3xr: any;

const merge = require('lodash/merge');

/**
 * i18n service wrapping the existing custom translation system.
 *
 * The existing system uses function-valued translations (e.g. arrow functions
 * that accept params), which no standard i18n library supports. This service
 * wraps the existing p3xr.settings.language.translation object with Angular
 * signals for reactive language switching.
 *
 * Language changes are persisted to localStorage using the same key as the translation system.
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

            // Update dayjs locale
            try {
                const dayjs = require('dayjs');
                const localeMap = p3xr?.settings?.language?.momentDateMap || { en: 'en', zn: 'zh-cn', ru: 'ru' };
                dayjs.locale(localeMap[lang] || 'en');
            } catch (e) { /* noop */ }

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
        const loader: ((l: string) => Promise<any>) | undefined =
            (p3xr as any)?.settings?.language?.loadTranslation;
        const doSwitch = () => {
            this.currentLang.set(nextLanguage);
        };
        if (loader) {
            loader(nextLanguage).then(doSwitch, doSwitch);
        } else {
            doSwitch();
        }
    }

    /**
     * Get available language codes.
     */
    getAvailableLanguages(): string[] {
        return Object.keys(this.getTranslations());
    }

    // --- Private helpers ---

    private getTranslations(): Record<string, any> {
        return p3xr?.settings?.language?.translation || {};
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
