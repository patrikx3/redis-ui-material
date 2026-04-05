import { create } from 'zustand'
import merge from 'lodash/merge'
import { getPersistentItem } from './electron-bridge'
// @ts-ignore
import { detectLanguageFromLocale } from '../../core/detect-language.js'

// Vite glob import: lazily load all translation files
const translationModules = import.meta.glob('../../strings/*/strings.js')

const STORAGE_KEY = 'p3xr-language'
const AUTO = 'auto'

function resolveAutoLanguage(): string {
    try {
        return detectLanguageFromLocale(navigator.language)
    } catch { return 'en' }
}

function detectLanguage(): { lang: string, isAuto: boolean } {
    const stored = getPersistentItem(STORAGE_KEY)
    if (stored && stored !== AUTO) return { lang: stored, isAuto: false }
    return { lang: resolveAutoLanguage(), isAuto: true }
}

async function loadLangModule(lang: string): Promise<any> {
    const key = `../../strings/${lang}/strings.js`
    const loader = translationModules[key]
    if (!loader) return {}
    try {
        const mod: any = await loader()
        return mod.default || mod
    } catch (e) {
        console.warn(`Failed to load translation: ${lang}`, e)
        return {}
    }
}

interface I18nState {
    currentLang: string
    isAuto: boolean
    strings: any
    translations: Record<string, any>
    loading: boolean
    ready: boolean
    setLanguage: (lang: string) => Promise<void>
}

export const useI18nStore = create<I18nState>((set, get) => ({
    currentLang: 'en',
    isAuto: true,
    strings: {},
    translations: {},
    loading: true,
    ready: false,

    setLanguage: async (choice: string) => {
        const { translations } = get()
        const enStrings = translations['en'] || {}
        const auto = choice === AUTO
        const lang = auto ? resolveAutoLanguage() : choice
        const storageValue = auto ? AUTO : lang

        if (!translations[lang]) {
            set({ loading: true })
            translations[lang] = await loadLangModule(lang)
        }

        const merged = merge({}, enStrings, translations[lang])
        try { localStorage.setItem(STORAGE_KEY, storageValue) } catch {}

        try {
            window.parent?.postMessage({ type: 'p3x-ui-storage-set', key: STORAGE_KEY, value: storageValue }, '*')
        } catch {}

        document.documentElement.lang = lang

        set({
            currentLang: lang,
            isAuto: auto,
            strings: merged,
            translations,
            loading: false,
        })
    },
}))

// Initialize: load English first, then detected language
;(async () => {
    const store = useI18nStore.getState()
    const enStrings = await loadLangModule('en')
    store.translations['en'] = enStrings

    const { lang: initLang, isAuto } = detectLanguage()
    if (initLang !== 'en') {
        store.translations[initLang] = await loadLangModule(initLang)
    }

    const langStrings = store.translations[initLang] || {}
    const merged = merge({}, enStrings, langStrings)

    document.documentElement.lang = initLang

    useI18nStore.setState({
        currentLang: initLang,
        isAuto,
        strings: merged,
        translations: store.translations,
        loading: false,
        ready: true,
    })
})()
