/**
 * Standalone translation storage and lazy-loading.
 *
 * Decoupled from the p3xr global. Both main.js (pre-Angular) and I18nService
 * (Angular) import from this module.
 */
const translations = {}

function getTranslations() {
    return translations
}

/**
 * Lazily load a translation chunk. Each case produces a separate webpack chunk
 * (~25 KiB each) loaded only when needed.
 */
function loadTranslation(lang) {
    if (translations[lang]) {
        return Promise.resolve(translations[lang])
    }
    let loader
    switch (lang) {
        case 'ar':    loader = import(/* webpackChunkName: "i18n-ar"    */ '../strings/ar/strings');    break
        case 'az':    loader = import(/* webpackChunkName: "i18n-az"    */ '../strings/az/strings');    break
        case 'be':    loader = import(/* webpackChunkName: "i18n-be"    */ '../strings/be/strings');    break
        case 'bg':    loader = import(/* webpackChunkName: "i18n-bg"    */ '../strings/bg/strings');    break
        case 'bn':    loader = import(/* webpackChunkName: "i18n-bn"    */ '../strings/bn/strings');    break
        case 'cs':    loader = import(/* webpackChunkName: "i18n-cs"    */ '../strings/cs/strings');    break
        case 'da':    loader = import(/* webpackChunkName: "i18n-da"    */ '../strings/da/strings');    break
        case 'de':    loader = import(/* webpackChunkName: "i18n-de"    */ '../strings/de/strings');    break
        case 'el':    loader = import(/* webpackChunkName: "i18n-el"    */ '../strings/el/strings');    break
        case 'es':    loader = import(/* webpackChunkName: "i18n-es"    */ '../strings/es/strings');    break
        case 'et':    loader = import(/* webpackChunkName: "i18n-et"    */ '../strings/et/strings');    break
        case 'fi':    loader = import(/* webpackChunkName: "i18n-fi"    */ '../strings/fi/strings');    break
        case 'fil':   loader = import(/* webpackChunkName: "i18n-fil"   */ '../strings/fil/strings');   break
        case 'fr':    loader = import(/* webpackChunkName: "i18n-fr"    */ '../strings/fr/strings');    break
        case 'he':    loader = import(/* webpackChunkName: "i18n-he"    */ '../strings/he/strings');    break
        case 'hr':    loader = import(/* webpackChunkName: "i18n-hr"    */ '../strings/hr/strings');    break
        case 'hu':    loader = import(/* webpackChunkName: "i18n-hu"    */ '../strings/hu/strings');    break
        case 'hy':    loader = import(/* webpackChunkName: "i18n-hy"    */ '../strings/hy/strings');    break
        case 'id':    loader = import(/* webpackChunkName: "i18n-id"    */ '../strings/id/strings');    break
        case 'it':    loader = import(/* webpackChunkName: "i18n-it"    */ '../strings/it/strings');    break
        case 'ja':    loader = import(/* webpackChunkName: "i18n-ja"    */ '../strings/ja/strings');    break
        case 'ka':    loader = import(/* webpackChunkName: "i18n-ka"    */ '../strings/ka/strings');    break
        case 'kk':    loader = import(/* webpackChunkName: "i18n-kk"    */ '../strings/kk/strings');    break
        case 'km':    loader = import(/* webpackChunkName: "i18n-km"    */ '../strings/km/strings');    break
        case 'ko':    loader = import(/* webpackChunkName: "i18n-ko"    */ '../strings/ko/strings');    break
        case 'ky':    loader = import(/* webpackChunkName: "i18n-ky"    */ '../strings/ky/strings');    break
        case 'lt':    loader = import(/* webpackChunkName: "i18n-lt"    */ '../strings/lt/strings');    break
        case 'mk':    loader = import(/* webpackChunkName: "i18n-mk"    */ '../strings/mk/strings');    break
        case 'ms':    loader = import(/* webpackChunkName: "i18n-ms"    */ '../strings/ms/strings');    break
        case 'ne':    loader = import(/* webpackChunkName: "i18n-ne"    */ '../strings/ne/strings');    break
        case 'nl':    loader = import(/* webpackChunkName: "i18n-nl"    */ '../strings/nl/strings');    break
        case 'no':    loader = import(/* webpackChunkName: "i18n-no"    */ '../strings/no/strings');    break
        case 'pl':    loader = import(/* webpackChunkName: "i18n-pl"    */ '../strings/pl/strings');    break
        case 'pt-BR': loader = import(/* webpackChunkName: "i18n-pt-BR" */ '../strings/pt-BR/strings'); break
        case 'pt-PT': loader = import(/* webpackChunkName: "i18n-pt-PT" */ '../strings/pt-PT/strings'); break
        case 'ro':    loader = import(/* webpackChunkName: "i18n-ro"    */ '../strings/ro/strings');    break
        case 'ru':    loader = import(/* webpackChunkName: "i18n-ru"    */ '../strings/ru/strings');    break
        case 'sk':    loader = import(/* webpackChunkName: "i18n-sk"    */ '../strings/sk/strings');    break
        case 'sl':    loader = import(/* webpackChunkName: "i18n-sl"    */ '../strings/sl/strings');    break
        case 'sr':    loader = import(/* webpackChunkName: "i18n-sr"    */ '../strings/sr/strings');    break
        case 'sv':    loader = import(/* webpackChunkName: "i18n-sv"    */ '../strings/sv/strings');    break
        case 'tg':    loader = import(/* webpackChunkName: "i18n-tg"    */ '../strings/tg/strings');    break
        case 'th':    loader = import(/* webpackChunkName: "i18n-th"    */ '../strings/th/strings');    break
        case 'tr':    loader = import(/* webpackChunkName: "i18n-tr"    */ '../strings/tr/strings');    break
        case 'uk':    loader = import(/* webpackChunkName: "i18n-uk"    */ '../strings/uk/strings');    break
        case 'vi':    loader = import(/* webpackChunkName: "i18n-vi"    */ '../strings/vi/strings');    break
        case 'zh-HK': loader = import(/* webpackChunkName: "i18n-zh-HK" */ '../strings/zh-HK/strings'); break
        case 'zh-TW': loader = import(/* webpackChunkName: "i18n-zh-TW" */ '../strings/zh-TW/strings'); break
        case 'zn':    loader = import(/* webpackChunkName: "i18n-zn"    */ '../strings/zn/strings');    break
        case 'bs':    loader = import(/* webpackChunkName: "i18n-bs"    */ '../strings/bs/strings');    break
        case 'si':    loader = import(/* webpackChunkName: "i18n-si"    */ '../strings/si/strings');    break
        case 'sw':    loader = import(/* webpackChunkName: "i18n-sw"    */ '../strings/sw/strings');    break
        case 'ta':    loader = import(/* webpackChunkName: "i18n-ta"    */ '../strings/ta/strings');    break
        default:      return Promise.resolve(translations['en'])
    }
    return loader.then(m => {
        translations[lang] = m.default || m
        return translations[lang]
    })
}

module.exports = { getTranslations, loadTranslation }
