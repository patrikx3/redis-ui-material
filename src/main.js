require('./scss/index.scss')

// fontawesome
//require('@fortawesome/fontawesome-free/js/all')




require('./decorate/string')

// p3xr is injected by webpack ProvidePlugin — not on window
// Explicit require as safety net (ProvidePlugin also auto-injects)
const p3xr = require('./core/p3xr')

// Capture Electron UI storage bootstrap data from URL query params BEFORE Angular's
// router strips them during its initial redirect (e.g. / → /settings).
// This makes the data available on p3xr.electronUiStorageBootstrap for SettingsComponent.
try {
    const encoded = new URLSearchParams(window.location.search).get('p3xreUiStorage')
    if (encoded) {
        const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encoded.length / 4) * 4, '=')
        const parsed = JSON.parse(atob(base64))
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            p3xr.electronUiStorageBootstrap = parsed
        }
    }
} catch (e) {
    // ignore — bootstrap data is optional
}
// Also try window.name (set by Electron shell via iframe.name before src is loaded)
if (!p3xr.electronUiStorageBootstrap) {
    try {
        const fromName = window.name ? JSON.parse(window.name) : null
        if (fromName?.p3xreUiStorage && typeof fromName.p3xreUiStorage === 'object') {
            p3xr.electronUiStorageBootstrap = fromName.p3xreUiStorage
        }
    } catch (e) {
        // ignore
    }
}

p3xr.theme = {
    dark: undefined,
    light: undefined,
}

p3xr.ui = {
    // Fallback no-op overlay to avoid runtime crashes before overlay bootstrap.
    overlay: {
        show: () => {},
        hide: () => {},
    },
    htmlEncode: global.htmlEncode
}

require('./core/settings')
require('./core/strings')
require('./core/random')
require('./core/is-bot')
require('./core/next-id')
require('./core/api')
require('./core/state')
require('./core/dom')
require('./core/sort')
require('./core/clipboard')
require('./core/clone')

require('./overlay/overlay')


// English is always loaded synchronously — it is the required fallback for all other languages.
p3xr.settings.language.translation['en'] = require('./strings/en/strings')

// Lazy-load any non-English translation on demand.
// Each case produces a separate webpack chunk (~25 KiB each) loaded only when needed.
// Returns a Promise that resolves once the translation is stored in
// p3xr.settings.language.translation[lang].
p3xr.settings.language.loadTranslation = (lang) => {
    if (p3xr.settings.language.translation[lang]) {
        return Promise.resolve(p3xr.settings.language.translation[lang])
    }
    let loader
    switch (lang) {
        case 'ar':    loader = import(/* webpackChunkName: "i18n-ar"    */ './strings/ar/strings');    break
        case 'az':    loader = import(/* webpackChunkName: "i18n-az"    */ './strings/az/strings');    break
        case 'be':    loader = import(/* webpackChunkName: "i18n-be"    */ './strings/be/strings');    break
        case 'bg':    loader = import(/* webpackChunkName: "i18n-bg"    */ './strings/bg/strings');    break
        case 'bn':    loader = import(/* webpackChunkName: "i18n-bn"    */ './strings/bn/strings');    break
        case 'cs':    loader = import(/* webpackChunkName: "i18n-cs"    */ './strings/cs/strings');    break
        case 'da':    loader = import(/* webpackChunkName: "i18n-da"    */ './strings/da/strings');    break
        case 'de':    loader = import(/* webpackChunkName: "i18n-de"    */ './strings/de/strings');    break
        case 'el':    loader = import(/* webpackChunkName: "i18n-el"    */ './strings/el/strings');    break
        case 'es':    loader = import(/* webpackChunkName: "i18n-es"    */ './strings/es/strings');    break
        case 'et':    loader = import(/* webpackChunkName: "i18n-et"    */ './strings/et/strings');    break
        case 'fi':    loader = import(/* webpackChunkName: "i18n-fi"    */ './strings/fi/strings');    break
        case 'fil':   loader = import(/* webpackChunkName: "i18n-fil"   */ './strings/fil/strings');   break
        case 'fr':    loader = import(/* webpackChunkName: "i18n-fr"    */ './strings/fr/strings');    break
        case 'he':    loader = import(/* webpackChunkName: "i18n-he"    */ './strings/he/strings');    break
        case 'hr':    loader = import(/* webpackChunkName: "i18n-hr"    */ './strings/hr/strings');    break
        case 'hu':    loader = import(/* webpackChunkName: "i18n-hu"    */ './strings/hu/strings');    break
        case 'hy':    loader = import(/* webpackChunkName: "i18n-hy"    */ './strings/hy/strings');    break
        case 'id':    loader = import(/* webpackChunkName: "i18n-id"    */ './strings/id/strings');    break
        case 'it':    loader = import(/* webpackChunkName: "i18n-it"    */ './strings/it/strings');    break
        case 'ja':    loader = import(/* webpackChunkName: "i18n-ja"    */ './strings/ja/strings');    break
        case 'ka':    loader = import(/* webpackChunkName: "i18n-ka"    */ './strings/ka/strings');    break
        case 'kk':    loader = import(/* webpackChunkName: "i18n-kk"    */ './strings/kk/strings');    break
        case 'km':    loader = import(/* webpackChunkName: "i18n-km"    */ './strings/km/strings');    break
        case 'ko':    loader = import(/* webpackChunkName: "i18n-ko"    */ './strings/ko/strings');    break
        case 'ky':    loader = import(/* webpackChunkName: "i18n-ky"    */ './strings/ky/strings');    break
        case 'lt':    loader = import(/* webpackChunkName: "i18n-lt"    */ './strings/lt/strings');    break
        case 'mk':    loader = import(/* webpackChunkName: "i18n-mk"    */ './strings/mk/strings');    break
        case 'ms':    loader = import(/* webpackChunkName: "i18n-ms"    */ './strings/ms/strings');    break
        case 'ne':    loader = import(/* webpackChunkName: "i18n-ne"    */ './strings/ne/strings');    break
        case 'nl':    loader = import(/* webpackChunkName: "i18n-nl"    */ './strings/nl/strings');    break
        case 'no':    loader = import(/* webpackChunkName: "i18n-no"    */ './strings/no/strings');    break
        case 'pl':    loader = import(/* webpackChunkName: "i18n-pl"    */ './strings/pl/strings');    break
        case 'pt-BR': loader = import(/* webpackChunkName: "i18n-pt-BR" */ './strings/pt-BR/strings'); break
        case 'pt-PT': loader = import(/* webpackChunkName: "i18n-pt-PT" */ './strings/pt-PT/strings'); break
        case 'ro':    loader = import(/* webpackChunkName: "i18n-ro"    */ './strings/ro/strings');    break
        case 'ru':    loader = import(/* webpackChunkName: "i18n-ru"    */ './strings/ru/strings');    break
        case 'sk':    loader = import(/* webpackChunkName: "i18n-sk"    */ './strings/sk/strings');    break
        case 'sl':    loader = import(/* webpackChunkName: "i18n-sl"    */ './strings/sl/strings');    break
        case 'sr':    loader = import(/* webpackChunkName: "i18n-sr"    */ './strings/sr/strings');    break
        case 'sv':    loader = import(/* webpackChunkName: "i18n-sv"    */ './strings/sv/strings');    break
        case 'tg':    loader = import(/* webpackChunkName: "i18n-tg"    */ './strings/tg/strings');    break
        case 'th':    loader = import(/* webpackChunkName: "i18n-th"    */ './strings/th/strings');    break
        case 'tr':    loader = import(/* webpackChunkName: "i18n-tr"    */ './strings/tr/strings');    break
        case 'uk':    loader = import(/* webpackChunkName: "i18n-uk"    */ './strings/uk/strings');    break
        case 'vi':    loader = import(/* webpackChunkName: "i18n-vi"    */ './strings/vi/strings');    break
        case 'zh-HK': loader = import(/* webpackChunkName: "i18n-zh-HK" */ './strings/zh-HK/strings'); break
        case 'zh-TW': loader = import(/* webpackChunkName: "i18n-zh-TW" */ './strings/zh-TW/strings'); break
        case 'zn':    loader = import(/* webpackChunkName: "i18n-zn"    */ './strings/zn/strings');    break
        case 'bs':    loader = import(/* webpackChunkName: "i18n-bs"    */ './strings/bs/strings');    break
        case 'si':    loader = import(/* webpackChunkName: "i18n-si"    */ './strings/si/strings');    break
        case 'sw':    loader = import(/* webpackChunkName: "i18n-sw"    */ './strings/sw/strings');    break
        case 'ta':    loader = import(/* webpackChunkName: "i18n-ta"    */ './strings/ta/strings');    break
        default:      return Promise.resolve(p3xr.settings.language.translation['en'])
    }
    return loader.then(m => {
        p3xr.settings.language.translation[lang] = m.default || m
        return p3xr.settings.language.translation[lang]
    })
}

// Read the language from localStorage so we can pre-load the correct
// translation before bootstrapping Angular.
let _initialLang = 'en'
try {
    _initialLang = localStorage.getItem(p3xr.settings.language.storageKey) || 'en'
} catch { /* ignore */ }

// Load the initial language (no-op for English — already loaded above), then boot.
p3xr.settings.language.loadTranslation(_initialLang).then(() => {
    // Initialize cookie-backed state properties (standalone, no AngularJS)
    require('./core/state-properties')

    // Bootstrap Angular (standalone, no AngularJS)
    require('./ng/main')
})
