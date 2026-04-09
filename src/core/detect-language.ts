/**
 * Auto-detect the best matching UI language from the browser/system locale.
 * Used by both Angular and React i18n services.
 */

export const AVAILABLE_LANGUAGES = [
    'ar', 'az', 'be', 'bg', 'bn', 'bs', 'cs', 'da', 'de', 'el',
    'en', 'es', 'et', 'fi', 'fil', 'fr', 'he', 'hr', 'hu', 'hy',
    'id', 'it', 'ja', 'ka', 'kk', 'km', 'ko', 'ky', 'lt', 'mk',
    'ms', 'ne', 'nl', 'no', 'pl', 'pt-BR', 'pt-PT', 'ro', 'ru',
    'si', 'sk', 'sl', 'sr', 'sv', 'sw', 'ta', 'tg', 'th', 'tr',
    'uk', 'vi', 'zh-HK', 'zh-TW', 'zn',
];

export function detectLanguageFromLocale(locale: string): string {
    if (!locale) return 'en';
    const raw = locale.trim();
    const lower = raw.toLowerCase();

    // Chinese special cases (must come before generic matching)
    if (lower.startsWith('zh')) {
        if (lower === 'zh-hk') return 'zh-HK';
        if (lower === 'zh-tw' || lower.startsWith('zh-hant')) return 'zh-TW';
        // zh, zh-CN, zh-Hans, zh-SG → simplified Chinese
        return 'zn';
    }

    // Try exact match (case-insensitive against available)
    const exactMatch = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === lower);
    if (exactMatch) return exactMatch;

    // Try with region (e.g., pt-BR → pt-BR)
    const withRegion = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === lower.replace('_', '-'));
    if (withRegion) return withRegion;

    // Extract base language (e.g., fr-FR → fr, de-DE → de)
    const base = lower.split('-')[0].split('_')[0];

    // Portuguese without region → pt-PT
    if (base === 'pt') return 'pt-PT';

    // Filipino/Tagalog
    if (base === 'tl') return 'fil';

    // Norwegian variants
    if (base === 'nb' || base === 'nn') return 'no';

    // Try base language match
    const baseMatch = AVAILABLE_LANGUAGES.find(l => l.toLowerCase() === base);
    if (baseMatch) return baseMatch;

    return 'en';
}
