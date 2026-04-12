import { defineStore } from 'pinia'
import { ref } from 'vue'
import { merge } from 'lodash-es'
import { getPersistentItem } from './electron-bridge'
import { detectLanguageFromLocale } from '../../core/detect-language'

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

export const useI18nStore = defineStore('i18n', () => {
    const currentLang = ref('en')
    const isAuto = ref(true)
    const strings = ref<any>({})
    const translations = ref<Record<string, any>>({})
    const loading = ref(true)
    const ready = ref(false)

    async function setLanguage(choice: string) {
        const enStrings = translations.value['en'] || {}
        const auto = choice === AUTO
        const lang = auto ? resolveAutoLanguage() : choice
        const storageValue = auto ? AUTO : lang

        if (!translations.value[lang]) {
            loading.value = true
            translations.value[lang] = await loadLangModule(lang)
        }

        const merged = merge({}, enStrings, translations.value[lang])
        try { localStorage.setItem(STORAGE_KEY, storageValue) } catch {}

        try {
            window.parent?.postMessage({ type: 'p3x-ui-storage-set', key: STORAGE_KEY, value: storageValue }, '*')
        } catch {}

        document.documentElement.lang = lang

        currentLang.value = lang
        isAuto.value = auto
        strings.value = merged
        loading.value = false
    }

    /**
     * Explicit init method -- must be called after app.use(pinia).
     * Loads English first, then detected language, sets ready = true.
     */
    async function init() {
        const enStrings = await loadLangModule('en')
        translations.value['en'] = enStrings

        const { lang: initLang, isAuto: initIsAuto } = detectLanguage()
        if (initLang !== 'en') {
            translations.value[initLang] = await loadLangModule(initLang)
        }

        const langStrings = translations.value[initLang] || {}
        const merged = merge({}, enStrings, langStrings)

        document.documentElement.lang = initLang

        currentLang.value = initLang
        isAuto.value = initIsAuto
        strings.value = merged
        loading.value = false
        ready.value = true
    }

    return {
        currentLang,
        isAuto,
        strings,
        translations,
        loading,
        ready,
        setLanguage,
        init,
    }
})
