const prettyBytesModule = require('pretty-bytes')
const prettyBytes = prettyBytesModule.default || prettyBytesModule

p3xr.settings = {
    prettyBytes: (value) => {
        return prettyBytes(value, {
            locale: p3xr.settings.language.current
        })
    },

    // Custom humanize-duration language definitions for unsupported locales
    humanizeDurationCustomLanguages: {
        az: { y: () => 'il', mo: () => 'ay', w: () => 'həftə', d: () => 'gün', h: () => 'saat', m: () => 'dəqiqə', s: () => 'saniyə', ms: () => 'millisaniyə' },
        be: { y: (c) => c === 1 ? 'год' : 'гадоў', mo: (c) => c === 1 ? 'месяц' : 'месяцаў', w: (c) => c === 1 ? 'тыдзень' : 'тыдняў', d: (c) => c === 1 ? 'дзень' : 'дзён', h: (c) => c === 1 ? 'гадзіна' : 'гадзін', m: (c) => c === 1 ? 'хвіліна' : 'хвілін', s: (c) => c === 1 ? 'секунда' : 'секунд', ms: (c) => c === 1 ? 'мілісекунда' : 'мілісекунд' },
        bs: { y: (c) => c === 1 ? 'godina' : 'godina', mo: (c) => c === 1 ? 'mjesec' : 'mjeseci', w: (c) => c === 1 ? 'sedmica' : 'sedmica', d: (c) => c === 1 ? 'dan' : 'dana', h: (c) => c === 1 ? 'sat' : 'sati', m: (c) => c === 1 ? 'minuta' : 'minuta', s: (c) => c === 1 ? 'sekunda' : 'sekundi', ms: (c) => c === 1 ? 'milisekunda' : 'milisekundi' },
        fil: { y: () => 'taon', mo: () => 'buwan', w: () => 'linggo', d: () => 'araw', h: () => 'oras', m: () => 'minuto', s: () => 'segundo', ms: () => 'millisegundo' },
        hy: { y: () => '\u057F\u0561\u0580\u056B', mo: () => '\u0561\u0574\u056B\u057D', w: () => '\u0577\u0561\u0562\u0561\u0569', d: () => '\u0585\u0580', h: () => '\u056A\u0561\u0574', m: () => '\u0580\u0578\u057A\u0565', s: () => '\u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576', ms: () => '\u0574\u056B\u056C\u056B\u057E\u0561\u0575\u0580\u056F\u0575\u0561\u0576' },
        ka: { y: (c) => c === 1 ? 'წელი' : 'წელი', mo: (c) => c === 1 ? 'თვე' : 'თვე', w: (c) => c === 1 ? 'კვირა' : 'კვირა', d: (c) => c === 1 ? 'დღე' : 'დღე', h: (c) => c === 1 ? 'საათი' : 'საათი', m: (c) => c === 1 ? 'წუთი' : 'წუთი', s: (c) => c === 1 ? 'წამი' : 'წამი', ms: () => 'მილიწამი' },
        kk: { y: (c) => c === 1 ? 'жыл' : 'жыл', mo: (c) => c === 1 ? 'ай' : 'ай', w: (c) => c === 1 ? 'апта' : 'апта', d: (c) => c === 1 ? 'күн' : 'күн', h: (c) => c === 1 ? 'сағат' : 'сағат', m: (c) => c === 1 ? 'минут' : 'минут', s: (c) => c === 1 ? 'секунд' : 'секунд', ms: () => 'миллисекунд' },
        ky: { y: (c) => c === 1 ? 'жыл' : 'жыл', mo: (c) => c === 1 ? 'ай' : 'ай', w: (c) => c === 1 ? 'апта' : 'апта', d: (c) => c === 1 ? 'күн' : 'күн', h: (c) => c === 1 ? 'саат' : 'саат', m: (c) => c === 1 ? 'мүнөт' : 'мүнөт', s: (c) => c === 1 ? 'секунд' : 'секунд', ms: () => 'миллисекунд' },
        ne: { y: () => 'वर्ष', mo: () => 'महिना', w: () => 'हप्ता', d: () => 'दिन', h: () => 'घण्टा', m: () => 'मिनेट', s: () => 'सेकेन्ड', ms: () => 'मिलिसेकेन्ड' },
        si: { y: () => 'වසර', mo: () => 'මාස', w: () => 'සති', d: () => 'දින', h: () => 'පැය', m: () => 'මිනිත්තු', s: () => 'තත්පර', ms: () => 'මිලි තත්පර' },
        tg: { y: (c) => c === 1 ? 'сол' : 'сол', mo: (c) => c === 1 ? 'моҳ' : 'моҳ', w: (c) => c === 1 ? 'ҳафта' : 'ҳафта', d: (c) => c === 1 ? 'рӯз' : 'рӯз', h: (c) => c === 1 ? 'соат' : 'соат', m: (c) => c === 1 ? 'дақиқа' : 'дақиқа', s: (c) => c === 1 ? 'сония' : 'сония', ms: () => 'миллисония' },
        nb: { y: (c) => c === 1 ? 'år' : 'år', mo: (c) => c === 1 ? 'måned' : 'måneder', w: (c) => c === 1 ? 'uke' : 'uker', d: (c) => c === 1 ? 'dag' : 'dager', h: (c) => c === 1 ? 'time' : 'timer', m: (c) => c === 1 ? 'minutt' : 'minutter', s: (c) => c === 1 ? 'sekund' : 'sekunder', ms: () => 'millisekund' },
    },
    getHumanizeDurationLanguage: () => {
        const map = {
            'pt-BR': 'pt',
            'zn': 'zh_CN',
            'zh-HK': 'zh_TW',
            'zh-TW': 'zh_TW',
            'pt-PT': 'pt',
        }
        const current = p3xr.settings.language.current
        return map[current] || current || 'en'
    },
    getHumanizeDurationOptions: () => {
        return {
            language: p3xr.settings.getHumanizeDurationLanguage(),
            languages: p3xr.settings.humanizeDurationCustomLanguages,
        }
    },
    handleConnectionIsClosed: (error) => {
        if (error?.message === 'Connection is closed.') {
            p3xr.state.connection = undefined
            return true
        }
        return false
    },
    maxLightKeysCount: 110000,
//    maxLightKeysCount: 1,
    resizeMinWidth: 315,
    socket: {
        timeout: 300000,
    },
    toast: {
        timeout: 5000,
        position: 'bottom right',
    },
    debounce: 100,
    debounceSearch: 2000,
    connection: {
        storageKeyCurrentDatabase: 'p3xr-main-current-database',
        getStorageKeyCurrentDatabase: (id) => {
            return p3xr.settings.connection.storageKeyCurrentDatabase + '-' + id
        }
    },
    tree: {
        storageKey: 'p3xr-main-treecontrol-divider',
        defaultDivider: ':',
    },
    redisTreeDivider: ':',
    animation: 0,
    animationSettings: {
        default: 0,
        storageKey: 'p3xr-animation-settings',
    },
    jsonFormat: 4,
    googleAnalytics: 'G-8M2CK7993T',
    jsonFormatSettings: {
        default: 4,
        storageKey: 'p3xr-json-format',
    },
    paging: {
        default: 250,
        storageKey: 'p3xr-main-treecontrol-page-size'
    },
    keyPage: {
        default: 5,
        storageKey: 'p3xr-main-key-page-size',
    },
    keyPageCount: 5,
    language: {
        momentDateMap: {
            en: 'en',
            ar: 'ar',
            az: 'az',
            be: 'be',
            bg: 'bg',
            bn: 'bn',
            cs: 'cs',
            da: 'da',
            de: 'de',
            el: 'el',
            es: 'es',
            et: 'et',
            fi: 'fi',
            fil: 'tl-ph',
            fr: 'fr',
            he: 'he',
            hr: 'hr',
            hu: 'hu',
            hy: 'hy-am',
            id: 'id',
            it: 'it',
            ja: 'ja',
            ka: 'ka',
            kk: 'kk',
            km: 'km',
            ko: 'ko',
            ky: 'ky',
            lt: 'lt',
            mk: 'mk',
            ms: 'ms',
            ne: 'ne',
            nl: 'nl',
            no: 'nb',
            pl: 'pl',
            'pt-BR': 'pt-br',
            'pt-PT': 'pt',
            ro: 'ro',
            ru: 'ru',
            sk: 'sk',
            sl: 'sl',
            sr: 'sr',
            sv: 'sv',
            tg: 'tg',
            th: 'th',
            tr: 'tr',
            uk: 'uk',
            vi: 'vi',
            'zh-HK': 'zh-hk',
            'zh-TW': 'zh-tw',
            zn: 'zh-cn',
            bs: 'bs',
            si: 'si',
            sw: 'sw',
            ta: 'ta',
        },
        defaultLanguage: 'en',
        current: undefined,
        storageKey: 'p3xr-language',
        translation: {}
    },
    pageCount: 50,
    maxValueDisplay: 1024,
    maxValueAsBuffer: 1000 * 256,
    maxValueDisplaySetting: {
      default: 1024,
      storageKey: 'p3xr-main-treecontrol-max-value-display'
    },
    maxKeys: 1000,
    maxKeysSettings: {
        default: 1000,
        max: 100000,
        storageKey: 'p3xr-max-keys'
    },
    keySortInfo: {
        default: true,
        storageKey: 'p3xr-main-treecontrol-key-sort',
    },
    keysSort: true,
    searchClientSide: false,
    searchInfoClientSide: {
        default: false,
        storageKey: 'p3xr-main-treecontrol-search-client-mode'
    },
    searchStartsWith: false,
    searchInfoStartsWith: {
        default: false,
        storageKey: 'p3xr-main-treecontrol-search-starts-with'
    },
    connectInfo: {
        storageKey: 'p3xr-layout-connect',
    }
}
