const cookieExpiry = new Date()
cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 5)

const prettyBytes = require('pretty-bytes')

p3xr.settings = {
    prettyBytes: (value) => {
        return prettyBytes(value, {
            locale: p3xr.settings.language.current
        })
    },
    getHumanizeDurationLanguage: () => {
        let language
        switch(p3xr.settings.language.current) {
            case 'zn':
                language = 'zh_CN'
                break;
            case 'ru':
                language = 'ru'
                break;
            default:                                
                language = 'en'
                break;
        }
        return language
    },
    maxLightKeysCount: 110000,
//    maxLightKeysCount: 1,
    resizeMinWidth: 350,
    socket: {
        timeout: 300000,
    },
    toast: {
        timeout: 5000,
        position: 'bottom right',
    },
    debounce: 100,
    debounceSearch: 2000,
    cookieExpiry: cookieExpiry,
    connection: {
        cookieNameCurrentDatabase: 'p3xr-main-current-database',
        getCookieNameCurrentDatabase: (id) => {
            return p3xr.settings.connection.cookieNameCurrentDatabase + '-' + id
        }
    },
    tree: {
        cookieName: 'p3xr-main-treecontrol-divider',
        defaultDivider: ':',
    },
    redisTreeDivider: ':',
    animation: 0,
    animationSettings: {
        default: 0,
        cookieName: 'p3xr-animation-settings',
    },
    jsonFormat: 4,
    googleAnalytics: 'G-8M2CK7993T',
    jsonFormatSettings: {
        default: 4,
        cookieName: 'p3xr-json-format',
    },
    paging: {
        default: 250,
        cookieName: 'p3xr-main-treecontrol-page-size'
    },
    keyPage: {
        default: 5,
        cookieName: 'p3xr-main-key-page-size',
    },
    keyPageCount: 5,
    language: {
        momentDateMap: {
            en: 'en',
            zn: 'zh-cn',
            ru: 'ru',
        },
        defaultLanguage: 'en',
        current: undefined,
        cookieName: 'p3xr-language',
        translation: {}
    },
    pageCount: 50,
    maxValueDisplay: 1024,
    maxValueAsBuffer: 1000 * 256,
    maxValueDisplaySetting: {
      default: 1024,
      cookieName: 'p3xr-main-treecontrol-max-value-display'
    },
    maxKeys: 1000,
    maxKeysSettings: {
        default: 1000,
        max: 100000,
        cookieName: 'p3xr-max-keys'
    },
    keySortInfo: {
        default: true,
        cookieName: 'p3xr-main-treecontrol-key-sort',
    },
    keysSort: true,
    searchClientSide: false,
    searchInfoClientSide: {
        default: false,
        cookieName: 'p3xr-main-treecontrol-search-client-mode'
    },
    searchStartsWith: false,
    searchInfoStartsWith: {
        default: false,
        cookieName: 'p3xr-main-treecontrol-search-starts-with'
    },
    connectInfo: {
        cookieName: 'p3xr-layout-connect',
    }
}

