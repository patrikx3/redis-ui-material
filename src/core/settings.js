const cookieExpiry = new Date()
cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 5)

p3xr.settings = {
    resizeMinWidth: 300,
    socket: {
      timeout: 3000,
    },
    toast: {
        timeout: 3000,
        position: 'bottom right',
    },
    debounce: 250,
    debounceSearch: 1000,
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
    paging: {
        default: 50,
        cookieName: 'p3xr-main-treecontrol-page-size'
    },
    pageCount: 50,
    keySortInfo: {
        default: false,
        cookieName: 'p3xr-main-treecontrol-key-sort',
    },
    keysSort: false,
    searchClientSide: true,
    searchInfoClientSide: {
        default: true,
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