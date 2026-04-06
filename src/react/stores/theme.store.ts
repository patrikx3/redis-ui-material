import { create } from 'zustand'
import { isDarkTheme } from '../themes'

const STORAGE_KEY = 'p3xr-theme'
const AUTO = 'auto'

function getSystemDark(): boolean {
    return typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches
}

function normalizeThemeKey(raw: string): string {
    // Handle Angular format: p3xrThemeDark → dark, p3xrThemeEnterprise → enterprise
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

interface ThemeState {
    isAuto: boolean
    themeKey: string     // resolved key: 'dark', 'enterprise', 'light', etc.
    storedValue: string  // raw stored: 'auto' or theme key
    setTheme: (choice: string) => void  // 'auto' or any theme key
}

export const useThemeStore = create<ThemeState>((set) => {
    const stored = readStored()
    const isAuto = stored === AUTO
    const themeKey = resolveThemeKey(stored)

    // Apply on initial load
    applyBodyClasses(themeKey)

    return {
        isAuto,
        themeKey,
        storedValue: stored,

        setTheme: (choice: string) => {
            const auto = choice === AUTO
            const resolved = auto ? resolveThemeKey(AUTO) : choice
            try { localStorage.setItem(STORAGE_KEY, choice) } catch {}

            applyBodyClasses(resolved)

            // Notify Electron parent
            try {
                window.parent?.postMessage({ type: 'p3x-theme-change', dark: isDarkTheme(resolved) }, '*')
            } catch {}

            set({ isAuto: auto, themeKey: resolved, storedValue: choice })
        },
    }
})

// Listen for system theme changes (auto mode)
if (typeof window !== 'undefined' && window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const { isAuto } = useThemeStore.getState()
        if (isAuto) {
            const resolved = getSystemDark() ? 'dark' : 'enterprise'
            applyBodyClasses(resolved)
            useThemeStore.setState({ themeKey: resolved })
        }
    })
}
