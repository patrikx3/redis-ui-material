import { create } from 'zustand'
import merge from 'lodash/merge'
import { getPersistentItem } from './electron-bridge'

// Vite glob import: lazily load all translation files
const translationModules = import.meta.glob('../../strings/*/strings.js')

const STORAGE_KEY = 'p3xr-language'

function detectLanguage(): string {
    const stored = getPersistentItem(STORAGE_KEY)
    if (stored) return stored
    const nav = navigator.language?.toLowerCase() || ''
    if (nav.startsWith('zh')) return 'zn'
    if (nav.startsWith('ru')) return 'ru'
    return 'en'
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
    strings: any
    translations: Record<string, any>
    loading: boolean
    ready: boolean
    setLanguage: (lang: string) => Promise<void>
}

export const useI18nStore = create<I18nState>((set, get) => ({
    currentLang: 'en',
    strings: {},
    translations: {},
    loading: true,
    ready: false,

    setLanguage: async (lang: string) => {
        const { translations } = get()
        const enStrings = translations['en'] || {}

        if (!translations[lang]) {
            set({ loading: true })
            translations[lang] = await loadLangModule(lang)
        }

        const merged = merge({}, enStrings, translations[lang])
        try { localStorage.setItem(STORAGE_KEY, lang) } catch {}

        try {
            window.parent?.postMessage({ type: 'p3x-ui-storage-set', key: STORAGE_KEY, value: lang }, '*')
        } catch {}

        set({
            currentLang: lang,
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

    const initLang = detectLanguage()
    if (initLang !== 'en') {
        store.translations[initLang] = await loadLangModule(initLang)
    }

    const langStrings = store.translations[initLang] || {}
    const merged = merge({}, enStrings, langStrings)

    useI18nStore.setState({
        currentLang: initLang,
        strings: merged,
        translations: store.translations,
        loading: false,
        ready: true,
    })
})()
