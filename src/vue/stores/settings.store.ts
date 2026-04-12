import { defineStore } from 'pinia'
import { ref } from 'vue'
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

export const useSettingsStore = defineStore('settings', () => {
    // All localStorage keys match Angular settings.service.ts exactly
    const redisTreeDivider = ref(readLocal('p3xr-main-treecontrol-divider', ':'))
    const jsonFormat = ref(readLocalNum('p3xr-json-format', 4))
    const animation = ref(readLocalNum('p3xr-animation-settings', 0) === 1)
    const maxValueDisplay = ref(readLocalNum('p3xr-main-treecontrol-max-value-display', 1024))
    const maxKeys = ref(readLocalNum('p3xr-max-keys', 1000))
    const keysSort = ref(readLocalBool('p3xr-main-treecontrol-key-sort', true))
    const searchClientSide = ref(readLocalBool('p3xr-main-treecontrol-search-client-mode', false))
    const searchStartsWith = ref(readLocalBool('p3xr-main-treecontrol-search-starts-with', false))
    const pageCount = ref(readLocalNum('p3xr-main-treecontrol-page-size', 250))
    const keyPageCount = ref(readLocalNum('p3xr-main-key-page-size', 5))
    const language = ref(readLocal('p3xr-language', 'en'))
    const undoEnabled = ref(readLocalBool('p3xr-undo-enabled', true))
    const showDiffBeforeSave = ref(readLocalBool('p3xr-show-diff-before-save', false))
    const googleAnalytics = ref('G-8M2CK7993T')
    const connectInfoStorageKey = ref('p3xr-connect-info')
    const socketTimeout = ref(300000)
    const maxLightKeysCount = ref(110000)
    const maxValueAsBuffer = ref(1000 * 256)

    // Apply animation class on init
    ;(() => {
        const enabled = readLocalNum('p3xr-animation-settings', 0) === 1
        document.body.classList.toggle('p3xr-animation', enabled)
        document.body.classList.toggle('p3xr-no-animation', !enabled)
    })()

    function setSetting(key: string, value: any) {
        try { localStorage.setItem(key, String(value)) } catch {}
        const map: Record<string, any> = {
            'p3xr-main-treecontrol-divider': redisTreeDivider,
            'p3xr-json-format': jsonFormat,
            'p3xr-animation-settings': animation,
            'p3xr-main-treecontrol-max-value-display': maxValueDisplay,
            'p3xr-max-keys': maxKeys,
            'p3xr-main-treecontrol-key-sort': keysSort,
            'p3xr-main-treecontrol-search-client-mode': searchClientSide,
            'p3xr-main-treecontrol-search-starts-with': searchStartsWith,
            'p3xr-main-treecontrol-page-size': pageCount,
            'p3xr-main-key-page-size': keyPageCount,
            'p3xr-language': language,
            'p3xr-undo-enabled': undoEnabled,
            'p3xr-show-diff-before-save': showDiffBeforeSave,
        }
        const refTarget = map[key]
        if (refTarget) {
            refTarget.value = value
        }

        if (key === 'p3xr-animation-settings') {
            const enabled = String(value) === '1'
            document.body.classList.toggle('p3xr-animation', enabled)
            document.body.classList.toggle('p3xr-no-animation', !enabled)
        }
    }

    function getStorageKeyCurrentDatabase(connectionId: string): string {
        return `p3xr-main-current-database-${connectionId}`
    }

    function formatPrettyBytes(value: number): string {
        let lang = language.value
        if (lang === 'auto') {
            const i18n = useI18nStore()
            lang = i18n.currentLang || 'en'
        }
        return prettyBytes(value, { locale: lang })
    }

    function getHumanizeDurationOptions(): { language: string; languages: Record<string, any> } {
        let lang = language.value
        if (lang === 'auto') {
            const i18n = useI18nStore()
            lang = i18n.currentLang || 'en'
        }
        const languageMap: Record<string, string> = {
            'pt-BR': 'pt', 'zn': 'zh_CN', 'zh-HK': 'zh_TW', 'zh-TW': 'zh_TW', 'pt-PT': 'pt',
        }
        const customLanguages: Record<string, any> = {
            az: { y: () => 'il', mo: () => 'ay', w: () => 'h\u0259ft\u0259', d: () => 'g\u00fcn', h: () => 'saat', m: () => 'd\u0259qiq\u0259', s: () => 'saniy\u0259', ms: () => 'millisaniy\u0259' },
            be: { y: (c: number) => c === 1 ? '\u0433\u043e\u0434' : '\u0433\u0430\u0434\u043e\u045e', mo: (c: number) => c === 1 ? '\u043c\u0435\u0441\u044f\u0446' : '\u043c\u0435\u0441\u044f\u0446\u0430\u045e', w: (c: number) => c === 1 ? '\u0442\u044b\u0434\u0437\u0435\u043d\u044c' : '\u0442\u044b\u0434\u043d\u044f\u045e', d: (c: number) => c === 1 ? '\u0434\u0437\u0435\u043d\u044c' : '\u0434\u0437\u0451\u043d', h: (c: number) => c === 1 ? '\u0433\u0430\u0434\u0437\u0456\u043d\u0430' : '\u0433\u0430\u0434\u0437\u0456\u043d', m: (c: number) => c === 1 ? '\u0445\u0432\u0456\u043b\u0456\u043d\u0430' : '\u0445\u0432\u0456\u043b\u0456\u043d', s: (c: number) => c === 1 ? '\u0441\u0435\u043a\u0443\u043d\u0434\u0430' : '\u0441\u0435\u043a\u0443\u043d\u0434', ms: (c: number) => c === 1 ? '\u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434\u0430' : '\u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434' },
            bs: { y: () => 'godina', mo: () => 'mjeseci', w: () => 'sedmica', d: () => 'dana', h: () => 'sati', m: () => 'minuta', s: () => 'sekundi', ms: () => 'milisekundi' },
            fil: { y: () => 'taon', mo: () => 'buwan', w: () => 'linggo', d: () => 'araw', h: () => 'oras', m: () => 'minuto', s: () => 'segundo', ms: () => 'millisegundo' },
            hy: { y: () => '\u057f\u0561\u0580\u056b', mo: () => '\u0561\u0574\u056b\u057d', w: () => '\u0577\u0561\u0562\u0561\u0569', d: () => '\u0585\u0580', h: () => '\u056a\u0561\u0574', m: () => '\u0580\u0578\u057a\u0565', s: () => '\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576', ms: () => '\u0574\u056b\u056c\u056b\u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576' },
            ka: { y: () => '\u10ec\u10d4\u10da\u10d8', mo: () => '\u10d7\u10d5\u10d4', w: () => '\u10d9\u10d5\u10d8\u10e0\u10d0', d: () => '\u10d3\u10e6\u10d4', h: () => '\u10e1\u10d0\u10d0\u10d7\u10d8', m: () => '\u10ec\u10e3\u10d7\u10d8', s: () => '\u10ec\u10d0\u10db\u10d8', ms: () => '\u10db\u10d8\u10da\u10d8\u10ec\u10d0\u10db\u10d8' },
            kk: { y: () => '\u0436\u044b\u043b', mo: () => '\u0430\u0439', w: () => '\u0430\u043f\u0442\u0430', d: () => '\u043a\u04af\u043d', h: () => '\u0441\u0430\u0493\u0430\u0442', m: () => '\u043c\u0438\u043d\u0443\u0442', s: () => '\u0441\u0435\u043a\u0443\u043d\u0434', ms: () => '\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434' },
            ky: { y: () => '\u0436\u044b\u043b', mo: () => '\u0430\u0439', w: () => '\u0430\u043f\u0442\u0430', d: () => '\u043a\u04af\u043d', h: () => '\u0441\u0430\u0430\u0442', m: () => '\u043c\u04af\u043d\u04e9\u0442', s: () => '\u0441\u0435\u043a\u0443\u043d\u0434', ms: () => '\u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434' },
            ne: { y: () => '\u0935\u0930\u094d\u0937', mo: () => '\u092e\u0939\u093f\u0928\u093e', w: () => '\u0939\u092a\u094d\u0924\u093e', d: () => '\u0926\u093f\u0928', h: () => '\u0918\u0923\u094d\u091f\u093e', m: () => '\u092e\u093f\u0928\u0947\u091f', s: () => '\u0938\u0947\u0915\u0947\u0928\u094d\u0921', ms: () => '\u092e\u093f\u0932\u093f\u0938\u0947\u0915\u0947\u0928\u094d\u0921' },
            si: { y: () => '\u0dc0\u0dc3\u0dbb', mo: () => '\u0db8\u0dcf\u0dc3', w: () => '\u0dc3\u0dad\u0dd2', d: () => '\u0daf\u0dd2\u0db1', h: () => '\u0db4\u0dd0\u0dba', m: () => '\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4', s: () => '\u0dad\u0dad\u0dca\u0db4\u0dbb', ms: () => '\u0db8\u0dd2\u0dbd\u0dd2 \u0dad\u0dad\u0dca\u0db4\u0dbb' },
            tg: { y: () => '\u0441\u043e\u043b', mo: () => '\u043c\u043e\u04b3', w: () => '\u04b3\u0430\u0444\u0442\u0430', d: () => '\u0440\u04ef\u0437', h: () => '\u0441\u043e\u0430\u0442', m: () => '\u0434\u0430\u049b\u0438\u049b\u0430', s: () => '\u0441\u043e\u043d\u0438\u044f', ms: () => '\u043c\u0438\u043b\u043b\u0438\u0441\u043e\u043d\u0438\u044f' },
            nb: { y: (c: number) => c === 1 ? '\u00e5r' : '\u00e5r', mo: (c: number) => c === 1 ? 'm\u00e5ned' : 'm\u00e5neder', w: (c: number) => c === 1 ? 'uke' : 'uker', d: (c: number) => c === 1 ? 'dag' : 'dager', h: (c: number) => c === 1 ? 'time' : 'timer', m: (c: number) => c === 1 ? 'minutt' : 'minutter', s: (c: number) => c === 1 ? 'sekund' : 'sekunder', ms: () => 'millisekund' },
        }
        return {
            language: languageMap[lang] || lang || 'en',
            languages: customLanguages,
        }
    }

    function generateId(): string {
        return 'P3Xid' + Array.from(crypto.getRandomValues(new Uint8Array(16)))
            .map(b => b.toString(16).padStart(2, '0')).join('')
    }

    return {
        redisTreeDivider,
        jsonFormat,
        animation,
        maxValueDisplay,
        maxKeys,
        keysSort,
        searchClientSide,
        searchStartsWith,
        pageCount,
        keyPageCount,
        language,
        undoEnabled,
        showDiffBeforeSave,
        googleAnalytics,
        connectInfoStorageKey,
        socketTimeout,
        maxLightKeysCount,
        maxValueAsBuffer,
        setSetting,
        getStorageKeyCurrentDatabase,
        prettyBytes: formatPrettyBytes,
        getHumanizeDurationOptions,
        generateId,
    }
})
