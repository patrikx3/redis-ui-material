const cookieExpiry = new Date()
cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 5)

p3xr.settings = {
    maxLightKeysCount: 110000,
//    maxLightKeysCount: 1,
    resizeMinWidth: 320,
    socket: {
        timeout: 300000,
    },
    toast: {
        timeout: 5000,
        position: 'bottom right',
    },
    debounce: 250,
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
    googleAnalytics: 'UA-169625044-1',
    jsonFormatSettings: {
        default: 4,
        cookieName: 'p3xr-json-format',
    },
    paging: {
        default: 250,
        cookieName: 'p3xr-main-treecontrol-page-size'
    },
    language: {
        defaultLanguage: 'en',
        current: undefined,
        cookieName: 'p3xr-language',
        translation: {}
    },
    pageCount: 50,
    maxValueDisplay: 1024,
    maxValueDisplaySetting: {
      default: 1024,
      cookieName: 'p3xr-main-treecontrol-max-value-display'
    },
    maxKeys: 10000,
    maxKeysSettings: {
        default: 10000,
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

