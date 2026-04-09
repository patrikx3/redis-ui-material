/**
 * Standalone translation storage and lazy-loading.
 *
 * Decoupled from the p3xr global. Both main.ts (pre-Angular) and I18nService
 * (Angular) import from this module.
 */
const translations: Record<string, any> = {};

export function getTranslations(): Record<string, any> {
    return translations;
}

/**
 * Lazily load a translation chunk. Each case produces a separate chunk
 * (~25 KiB each) loaded only when needed.
 */
export function loadTranslation(lang: string): Promise<any> {
    if (translations[lang]) {
        return Promise.resolve(translations[lang]);
    }
    let loader: Promise<any>;
    switch (lang) {
        case 'ar':    loader = import('../strings/ar/strings');    break;
        case 'az':    loader = import('../strings/az/strings');    break;
        case 'be':    loader = import('../strings/be/strings');    break;
        case 'bg':    loader = import('../strings/bg/strings');    break;
        case 'bn':    loader = import('../strings/bn/strings');    break;
        case 'cs':    loader = import('../strings/cs/strings');    break;
        case 'da':    loader = import('../strings/da/strings');    break;
        case 'de':    loader = import('../strings/de/strings');    break;
        case 'el':    loader = import('../strings/el/strings');    break;
        case 'es':    loader = import('../strings/es/strings');    break;
        case 'et':    loader = import('../strings/et/strings');    break;
        case 'fi':    loader = import('../strings/fi/strings');    break;
        case 'fil':   loader = import('../strings/fil/strings');   break;
        case 'fr':    loader = import('../strings/fr/strings');    break;
        case 'he':    loader = import('../strings/he/strings');    break;
        case 'hr':    loader = import('../strings/hr/strings');    break;
        case 'hu':    loader = import('../strings/hu/strings');    break;
        case 'hy':    loader = import('../strings/hy/strings');    break;
        case 'id':    loader = import('../strings/id/strings');    break;
        case 'it':    loader = import('../strings/it/strings');    break;
        case 'ja':    loader = import('../strings/ja/strings');    break;
        case 'ka':    loader = import('../strings/ka/strings');    break;
        case 'kk':    loader = import('../strings/kk/strings');    break;
        case 'km':    loader = import('../strings/km/strings');    break;
        case 'ko':    loader = import('../strings/ko/strings');    break;
        case 'ky':    loader = import('../strings/ky/strings');    break;
        case 'lt':    loader = import('../strings/lt/strings');    break;
        case 'mk':    loader = import('../strings/mk/strings');    break;
        case 'ms':    loader = import('../strings/ms/strings');    break;
        case 'ne':    loader = import('../strings/ne/strings');    break;
        case 'nl':    loader = import('../strings/nl/strings');    break;
        case 'no':    loader = import('../strings/no/strings');    break;
        case 'pl':    loader = import('../strings/pl/strings');    break;
        case 'pt-BR': loader = import('../strings/pt-BR/strings'); break;
        case 'pt-PT': loader = import('../strings/pt-PT/strings'); break;
        case 'ro':    loader = import('../strings/ro/strings');    break;
        case 'ru':    loader = import('../strings/ru/strings');    break;
        case 'sk':    loader = import('../strings/sk/strings');    break;
        case 'sl':    loader = import('../strings/sl/strings');    break;
        case 'sr':    loader = import('../strings/sr/strings');    break;
        case 'sv':    loader = import('../strings/sv/strings');    break;
        case 'tg':    loader = import('../strings/tg/strings');    break;
        case 'th':    loader = import('../strings/th/strings');    break;
        case 'tr':    loader = import('../strings/tr/strings');    break;
        case 'uk':    loader = import('../strings/uk/strings');    break;
        case 'vi':    loader = import('../strings/vi/strings');    break;
        case 'zh-HK': loader = import('../strings/zh-HK/strings'); break;
        case 'zh-TW': loader = import('../strings/zh-TW/strings'); break;
        case 'zn':    loader = import('../strings/zn/strings');    break;
        case 'bs':    loader = import('../strings/bs/strings');    break;
        case 'si':    loader = import('../strings/si/strings');    break;
        case 'sw':    loader = import('../strings/sw/strings');    break;
        case 'ta':    loader = import('../strings/ta/strings');    break;
        default:      return Promise.resolve(translations['en']);
    }
    return loader.then(m => {
        translations[lang] = m.default || m;
        return translations[lang];
    });
}
