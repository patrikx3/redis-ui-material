require('./scss/index.scss')

// Capture Electron UI storage bootstrap data from URL query params BEFORE Angular's
// router strips them during its initial redirect (e.g. / -> /settings).
// Stored on globalThis.__p3xr_electron_bootstrap for SettingsComponent.
try {
    const encoded = new URLSearchParams(window.location.search).get('p3xreUiStorage')
    if (encoded) {
        const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encoded.length / 4) * 4, '=')
        const parsed = JSON.parse(atob(base64))
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            globalThis.__p3xr_electron_bootstrap = parsed
        }
    }
} catch (e) {
    // ignore — bootstrap data is optional
}
// Also try window.name (set by Electron shell via iframe.name before src is loaded)
if (!globalThis.__p3xr_electron_bootstrap) {
    try {
        const fromName = window.name ? JSON.parse(window.name) : null
        if (fromName?.p3xreUiStorage && typeof fromName.p3xreUiStorage === 'object') {
            globalThis.__p3xr_electron_bootstrap = fromName.p3xreUiStorage
        }
    } catch (e) {
        // ignore
    }
}

// Translation loading — standalone module, no p3xr global
const { getTranslations, loadTranslation } = require('./core/translation-loader')

// English is always loaded synchronously — it is the required fallback for all other languages.
getTranslations()['en'] = require('./strings/en/strings')

// Read the language from localStorage or Electron bootstrap storage.
let _initialLang = 'en'
try {
    const electronLang = globalThis.__p3xr_electron_bootstrap?.['p3xr-language']
    if (electronLang) {
        _initialLang = electronLang
    } else {
        _initialLang = localStorage.getItem('p3xr-language') || 'en'
    }
} catch { /* ignore */ }

// Load the initial language (no-op for English — already loaded above), then boot Angular.
loadTranslation(_initialLang).then(() => {
    require('./ng/main')
})
