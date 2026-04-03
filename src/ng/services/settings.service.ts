import { Injectable, signal, computed, effect } from '@angular/core';

const prettyBytesModule = require('pretty-bytes');
const prettyBytesFn = prettyBytesModule.default || prettyBytesModule;

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

    // --- Static config ---

    readonly maxKeysMax = 100000;
    readonly maxLightKeysCount = 110000;
    readonly resizeMinWidth = 315;
    readonly debounce = 100;
    readonly debounceSearch = 2000;
    readonly googleAnalytics = 'G-8M2CK7993T';
    readonly maxValueAsBuffer = 1000 * 256;
    readonly socketTimeout = 300000;
    readonly connectInfoStorageKey = 'p3xr-connect-info';
    readonly currentDatabaseStorageKeyPrefix = 'p3xr-main-current-database';

    // --- Utility methods ---

    prettyBytes(value: number): string {
        return prettyBytesFn(value, { locale: this.language() });
    }

    getStorageKeyCurrentDatabase(connectionId: string): string {
        return this.currentDatabaseStorageKeyPrefix + '-' + connectionId;
    }

    generateId(): string {
        return Date.now().toString(36) + '-' + Math.random().toString(36).substring(2, 10);
    }

    async clipboard(value: string): Promise<boolean> {
        try {
            await navigator.clipboard.writeText(value);
            return true;
        } catch {
            return false;
        }
    }

    // Custom humanize-duration languages for unsupported locales
    private readonly humanizeDurationCustomLanguages: Record<string, any> = {
        az: { y: () => 'il', mo: () => 'ay', w: () => 'həftə', d: () => 'gün', h: () => 'saat', m: () => 'dəqiqə', s: () => 'saniyə', ms: () => 'millisaniyə' },
        be: { y: (c: number) => c === 1 ? 'год' : 'гадоў', mo: (c: number) => c === 1 ? 'месяц' : 'месяцаў', w: (c: number) => c === 1 ? 'тыдзень' : 'тыдняў', d: (c: number) => c === 1 ? 'дзень' : 'дзён', h: (c: number) => c === 1 ? 'гадзіна' : 'гадзін', m: (c: number) => c === 1 ? 'хвіліна' : 'хвілін', s: (c: number) => c === 1 ? 'секунда' : 'секунд', ms: (c: number) => c === 1 ? 'мілісекунда' : 'мілісекунд' },
        bs: { y: () => 'godina', mo: () => 'mjeseci', w: () => 'sedmica', d: () => 'dana', h: () => 'sati', m: () => 'minuta', s: () => 'sekundi', ms: () => 'milisekundi' },
        fil: { y: () => 'taon', mo: () => 'buwan', w: () => 'linggo', d: () => 'araw', h: () => 'oras', m: () => 'minuto', s: () => 'segundo', ms: () => 'millisegundo' },
        hy: { y: () => 'տարի', mo: () => ' delays', w: () => 'շաբdelays', d: () => 'օdelays', h: () => 'ժdelays', m: () => 'delays', s: () => 'delays', ms: () => 'delays' },
        ka: { y: () => 'წელი', mo: () => 'თვე', w: () => 'კვირა', d: () => 'დღე', h: () => 'საათი', m: () => 'წუთი', s: () => 'წამი', ms: () => 'მილიწამი' },
        kk: { y: () => 'жыл', mo: () => 'ай', w: () => 'апта', d: () => 'күн', h: () => 'сағат', m: () => 'минут', s: () => 'секунд', ms: () => 'миллисекунд' },
        ky: { y: () => 'жыл', mo: () => 'ай', w: () => 'апта', d: () => 'күн', h: () => 'саат', m: () => 'мүнөт', s: () => 'секунд', ms: () => 'миллисекунд' },
        ne: { y: () => 'वर्ष', mo: () => 'महिना', w: () => 'हप्ता', d: () => 'दिन', h: () => 'घण्टा', m: () => 'मिनेट', s: () => 'सेकेन्ड', ms: () => 'मिलिसेकेन्ड' },
        si: { y: () => 'වසර', mo: () => 'මාස', w: () => 'සති', d: () => 'දින', h: () => 'පැය', m: () => 'මිනිත්තු', s: () => 'තත්පර', ms: () => 'මිලි තත්පර' },
        tg: { y: () => 'сол', mo: () => 'моҳ', w: () => 'ҳафта', d: () => 'рӯз', h: () => 'соат', m: () => 'дақиқа', s: () => 'сония', ms: () => 'миллисония' },
        nb: { y: (c: number) => c === 1 ? 'år' : 'år', mo: (c: number) => c === 1 ? 'måned' : 'måneder', w: (c: number) => c === 1 ? 'uke' : 'uker', d: (c: number) => c === 1 ? 'dag' : 'dager', h: (c: number) => c === 1 ? 'time' : 'timer', m: (c: number) => c === 1 ? 'minutt' : 'minutter', s: (c: number) => c === 1 ? 'sekund' : 'sekunder', ms: () => 'millisekund' },
    };

    private readonly humanizeDurationLanguageMap: Record<string, string> = {
        'pt-BR': 'pt', 'zn': 'zh_CN', 'zh-HK': 'zh_TW', 'zh-TW': 'zh_TW', 'pt-PT': 'pt',
    };

    getHumanizeDurationOptions(): { language: string; languages: Record<string, any> } {
        const lang = this.language();
        return {
            language: this.humanizeDurationLanguageMap[lang] || lang || 'en',
            languages: this.humanizeDurationCustomLanguages,
        };
    }

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
