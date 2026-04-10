import { create } from 'zustand'
import prettyBytes from 'pretty-bytes'
import { useI18nStore } from './i18n.store'

function readLocal(key: string, fallback: string): string {
    try { return localStorage.getItem(key) ?? fallback } catch { return fallback }
}

function readLocalBool(key: string, fallback: boolean): boolean {
    try {
        const v = localStorage.getItem(key)
        return v === null ? fallback : v === 'true'
    } catch { return fallback }
}

function readLocalNum(key: string, fallback: number): number {
    try {
        const v = localStorage.getItem(key)
        return v === null ? fallback : Number(v)
    } catch { return fallback }
}

interface SettingsState {
    redisTreeDivider: string
    jsonFormat: number
    animation: boolean
    maxValueDisplay: number
    maxKeys: number
    keysSort: boolean
    searchClientSide: boolean
    searchStartsWith: boolean
    pageCount: number
    keyPageCount: number
    language: string
    undoEnabled: boolean
    showDiffBeforeSave: boolean
    googleAnalytics: string
    connectInfoStorageKey: string
    socketTimeout: number
    maxLightKeysCount: number
    maxValueAsBuffer: number

    setSetting: (key: string, value: any) => void
    getStorageKeyCurrentDatabase: (connectionId: string) => string
    prettyBytes: (value: number) => string
    getHumanizeDurationOptions: () => { language: string; languages: Record<string, any> }
    generateId: () => string
}

export const useSettingsStore = create<SettingsState>((set) => ({
    // All localStorage keys match Angular settings.service.ts exactly
    redisTreeDivider: readLocal('p3xr-main-treecontrol-divider', ':'),
    jsonFormat: readLocalNum('p3xr-json-format', 4),
    animation: readLocalNum('p3xr-animation-settings', 0) === 1,
    maxValueDisplay: readLocalNum('p3xr-main-treecontrol-max-value-display', 1024),
    maxKeys: readLocalNum('p3xr-max-keys', 1000),
    keysSort: readLocalBool('p3xr-main-treecontrol-key-sort', true),
    searchClientSide: readLocalBool('p3xr-main-treecontrol-search-client-mode', false),
    searchStartsWith: readLocalBool('p3xr-main-treecontrol-search-starts-with', false),
    pageCount: readLocalNum('p3xr-main-treecontrol-page-size', 250),
    keyPageCount: readLocalNum('p3xr-main-key-page-size', 5),
    language: readLocal('p3xr-language', 'en'),
    undoEnabled: readLocalBool('p3xr-undo-enabled', true),
    showDiffBeforeSave: readLocalBool('p3xr-show-diff-before-save', false),
    googleAnalytics: 'G-8M2CK7993T',
    connectInfoStorageKey: 'p3xr-connect-info',
    socketTimeout: 300000,
    maxLightKeysCount: 110000,
    maxValueAsBuffer: 1000 * 256,

    setSetting: (key: string, value: any) => {
        try { localStorage.setItem(key, String(value)) } catch {}
        const map: Record<string, string> = {
            'p3xr-main-treecontrol-divider': 'redisTreeDivider',
            'p3xr-json-format': 'jsonFormat',
            'p3xr-animation-settings': 'animation',
            'p3xr-main-treecontrol-max-value-display': 'maxValueDisplay',
            'p3xr-max-keys': 'maxKeys',
            'p3xr-main-treecontrol-key-sort': 'keysSort',
            'p3xr-main-treecontrol-search-client-mode': 'searchClientSide',
            'p3xr-main-treecontrol-search-starts-with': 'searchStartsWith',
            'p3xr-main-treecontrol-page-size': 'pageCount',
            'p3xr-main-key-page-size': 'keyPageCount',
            'p3xr-language': 'language',
            'p3xr-undo-enabled': 'undoEnabled',
            'p3xr-show-diff-before-save': 'showDiffBeforeSave',
        }
        const stateKey = map[key]
        if (stateKey) {
            set({ [stateKey]: value } as any)
        }

        if (key === 'p3xr-animation-settings') {
            const enabled = String(value) === '1'
            document.body.classList.toggle('p3xr-animation', enabled)
            document.body.classList.toggle('p3xr-no-animation', !enabled)
        }
    },

    getStorageKeyCurrentDatabase: (connectionId: string) => `p3xr-main-current-database-${connectionId}`,

    prettyBytes: (value: number) => {
        let lang = useSettingsStore.getState().language
        if (lang === 'auto') lang = useI18nStore.getState().currentLang || 'en'
        return prettyBytes(value, { locale: lang })
    },

    getHumanizeDurationOptions: () => {
        // Use resolved language from i18n store (not raw localStorage which may be 'auto')
        let lang = useSettingsStore.getState().language
        if (lang === 'auto') {
            lang = useI18nStore.getState().currentLang || 'en'
        }
        const languageMap: Record<string, string> = {
            'pt-BR': 'pt', 'zn': 'zh_CN', 'zh-HK': 'zh_TW', 'zh-TW': 'zh_TW', 'pt-PT': 'pt',
        }
        const customLanguages: Record<string, any> = {
            az: { y: () => 'il', mo: () => 'ay', w: () => 'həftə', d: () => 'gün', h: () => 'saat', m: () => 'dəqiqə', s: () => 'saniyə', ms: () => 'millisaniyə' },
            be: { y: (c: number) => c === 1 ? 'год' : 'гадоў', mo: (c: number) => c === 1 ? 'месяц' : 'месяцаў', w: (c: number) => c === 1 ? 'тыдзень' : 'тыдняў', d: (c: number) => c === 1 ? 'дзень' : 'дзён', h: (c: number) => c === 1 ? 'гадзіна' : 'гадзін', m: (c: number) => c === 1 ? 'хвіліна' : 'хвілін', s: (c: number) => c === 1 ? 'секунда' : 'секунд', ms: (c: number) => c === 1 ? 'мілісекунда' : 'мілісекунд' },
            bs: { y: () => 'godina', mo: () => 'mjeseci', w: () => 'sedmica', d: () => 'dana', h: () => 'sati', m: () => 'minuta', s: () => 'sekundi', ms: () => 'milisekundi' },
            fil: { y: () => 'taon', mo: () => 'buwan', w: () => 'linggo', d: () => 'araw', h: () => 'oras', m: () => 'minuto', s: () => 'segundo', ms: () => 'millisegundo' },
            hy: { y: () => 'տարի', mo: () => 'ամիս', w: () => 'շաբաթ', d: () => 'օր', h: () => 'ժամ', m: () => 'րոպusage', s: () => 'վdelays', ms: () => 'միdelays' },
            ka: { y: () => 'წელი', mo: () => 'თვე', w: () => 'კვირა', d: () => 'დღე', h: () => 'საათი', m: () => 'წუთი', s: () => 'წამი', ms: () => 'მილიწამი' },
            kk: { y: () => 'жыл', mo: () => 'ай', w: () => 'апта', d: () => 'күн', h: () => 'сағат', m: () => 'минут', s: () => 'секунд', ms: () => 'миллисекунд' },
            ky: { y: () => 'жыл', mo: () => 'ай', w: () => 'апта', d: () => 'күн', h: () => 'саат', m: () => 'мүнөт', s: () => 'секунд', ms: () => 'миллисекунд' },
            ne: { y: () => 'वर्ष', mo: () => 'महिना', w: () => 'हप्ता', d: () => 'दिन', h: () => 'घण्टा', m: () => 'मिनेट', s: () => 'सेकेन्ड', ms: () => 'मिलिसेकेन्ड' },
            si: { y: () => 'වසර', mo: () => 'මාස', w: () => 'සති', d: () => 'දින', h: () => 'පැය', m: () => 'මිනිත්තු', s: () => 'තත්පර', ms: () => 'මිලි තත්පර' },
            tg: { y: () => 'сол', mo: () => 'моҳ', w: () => 'ҳафта', d: () => 'рӯз', h: () => 'соат', m: () => 'дақиқа', s: () => 'сония', ms: () => 'миллисония' },
            nb: { y: (c: number) => c === 1 ? 'år' : 'år', mo: (c: number) => c === 1 ? 'måned' : 'måneder', w: (c: number) => c === 1 ? 'uke' : 'uker', d: (c: number) => c === 1 ? 'dag' : 'dager', h: (c: number) => c === 1 ? 'time' : 'timer', m: (c: number) => c === 1 ? 'minutt' : 'minutter', s: (c: number) => c === 1 ? 'sekund' : 'sekunder', ms: () => 'millisekund' },
        }
        return {
            language: languageMap[lang] || lang || 'en',
            languages: customLanguages,
        }
    },

    // Apply animation class on init
    _initAnimation: (() => {
        const enabled = readLocalNum('p3xr-animation-settings', 0) === 1
        document.body.classList.toggle('p3xr-animation', enabled)
        document.body.classList.toggle('p3xr-no-animation', !enabled)
    })(),

    generateId: () => {
        return 'P3Xid' + Array.from(crypto.getRandomValues(new Uint8Array(16)))
            .map(b => b.toString(16).padStart(2, '0')).join('')
    },
}))
