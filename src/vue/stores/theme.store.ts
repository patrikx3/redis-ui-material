import { defineStore } from 'pinia'
import { ref } from 'vue'

// Theme classification -- matches React themes/index.ts
export const DARK_THEMES = ['dark', 'darkNeu', 'darkoBluo', 'matrix']
export const LIGHT_THEMES = ['light', 'enterprise', 'redis']
export const ALL_THEME_KEYS = ['light', 'enterprise', 'dark', 'darkNeu', 'darkoBluo', 'matrix', 'redis']

export function isDarkTheme(key: string): boolean {
    return DARK_THEMES.includes(key)
}

const STORAGE_KEY = 'p3xr-theme'
const AUTO = 'auto'

function getSystemDark(): boolean {
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

function normalizeThemeKey(raw: string): string {
    // Handle Angular format: p3xrThemeDark -> dark, p3xrThemeEnterprise -> enterprise
    if (raw.startsWith('p3xrTheme')) {
        const name = raw.replace('p3xrTheme', '')
        return name.charAt(0).toLowerCase() + name.slice(1)
    }
    return raw
}

function readStored(): string {
    try {
        const raw = localStorage.getItem(STORAGE_KEY) || AUTO
        if (raw === AUTO) return AUTO
        return normalizeThemeKey(raw)
    } catch { return AUTO }
}

function applyBodyClasses(resolved: string): void {
    if (typeof document === 'undefined') return
    const dark = isDarkTheme(resolved)
    document.documentElement.setAttribute('data-color-scheme', dark ? 'dark' : 'light')
    document.body.classList.toggle('p3xr-theme-dark', dark)
    document.body.classList.toggle('p3xr-theme-light', !dark)
}

// Same logic as Angular ThemeService
function resolveThemeKey(stored: string): string {
    if (stored === AUTO) return getSystemDark() ? 'dark' : 'enterprise'
    return stored
}

export const useThemeStore = defineStore('theme', () => {
    const stored = readStored()
    const isAuto = ref(stored === AUTO)
    const themeKey = ref(resolveThemeKey(stored))
    const storedValue = ref(stored)

    // Apply on initial load
    applyBodyClasses(themeKey.value)

    function setTheme(choice: string) {
        const auto = choice === AUTO
        const resolved = auto ? resolveThemeKey(AUTO) : choice
        try { localStorage.setItem(STORAGE_KEY, choice) } catch {}

        applyBodyClasses(resolved)

        // Notify Electron parent
        try {
            window.parent?.postMessage({ type: 'p3x-theme-change', dark: isDarkTheme(resolved) }, '*')
        } catch {}

        isAuto.value = auto
        themeKey.value = resolved
        storedValue.value = choice
    }

    // Listen for system theme changes (auto mode)
    if (typeof window !== 'undefined' && window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (isAuto.value) {
                const resolved = getSystemDark() ? 'dark' : 'enterprise'
                applyBodyClasses(resolved)
                themeKey.value = resolved
            }
        })
    }

    return {
        isAuto,
        themeKey,
        storedValue,
        setTheme,
    }
})
