const cookieExpiry = new Date()
cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 5)

p3xr.settings = {
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
        default: 100,
        cookieName: 'p3xr-main-treecontrol-page-size'
    },
    pageCount: 100,
    keySortInfo: {
        default: false,
        cookieName: 'p3xr-main-treecontrol-key-sort',
    },
    keysSort: false,
    searchClientSide: true,
    searchInfoClientSide: {
        default: true,
        cookieName: 'p3xr-main-treecontrol-search-client-mode'
    }
}