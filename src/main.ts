/**
 * Angular CLI entry point — replaces the old vendor.js + main.js entry chain.
 *
 * Responsibilities:
 * 1. Setup globals (htmlEncode, p3xrDevMode)
 * 2. Capture Electron bootstrap data before Angular router strips URL params
 * 3. Load the initial translation, then bootstrap Angular
 *
 * zone.js is loaded via angular.json polyfills.
 * Global CSS (fonts, icons, uPlot) is loaded via angular.json styles.
 * socket.io-client is imported directly in SocketService.
 */

declare const P3XR_DEV_MODE: boolean;

// --- Dev mode flag (used by SocketService, RedisStateService, AuthService) ---
(globalThis as any).p3xrDevMode = typeof P3XR_DEV_MODE !== 'undefined' ? P3XR_DEV_MODE : false;

// --- Global htmlEncode (used by ConsoleComponent, DatabaseTreeComponent, DatabaseKeyComponent) ---
import { htmlEncode } from 'js-htmlencode';
(globalThis as any).htmlEncode = htmlEncode;

// --- Electron bootstrap: capture UI storage data from URL query params ---
// Must happen BEFORE Angular's router strips them during initial redirect.
try {
    const encoded = new URLSearchParams(window.location.search).get('p3xreUiStorage');
    if (encoded) {
        const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encoded.length / 4) * 4, '=');
        const parsed = JSON.parse(atob(base64));
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
            (globalThis as any).__p3xr_electron_bootstrap = parsed;
        }
    }
} catch {
    // ignore — bootstrap data is optional
}
// Also try window.name (set by Electron shell via iframe.name before src is loaded)
if (!(globalThis as any).__p3xr_electron_bootstrap) {
    try {
        const fromName = window.name ? JSON.parse(window.name) : null;
        if (fromName?.p3xreUiStorage && typeof fromName.p3xreUiStorage === 'object') {
            (globalThis as any).__p3xr_electron_bootstrap = fromName.p3xreUiStorage;
        }
    } catch {
        // ignore
    }
}

// --- Translation loading: load initial language before Angular boots ---
import { getTranslations, loadTranslation } from './core/translation-loader';
import enStrings from './strings/en/strings';

// English is always loaded synchronously — it is the required fallback for all other languages.
getTranslations()['en'] = enStrings;

// Read the language from localStorage or Electron bootstrap storage.
let initialLang = 'en';
try {
    const electronLang = (globalThis as any).__p3xr_electron_bootstrap?.['p3xr-language'];
    if (electronLang) {
        initialLang = electronLang;
    } else {
        initialLang = localStorage.getItem('p3xr-language') || 'en';
    }
} catch { /* ignore */ }

// Load the initial language (no-op for English — already loaded above), then boot Angular.
loadTranslation(initialLang).then(() => {
    import('./ng/main');
});
