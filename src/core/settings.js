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
    cookieExpiry: cookieExpiry,
    connection: {
        cookieNameCurrentDatabase: 'p3xr-main-current-database',
        getCookieNameCurrentDatabase: (id) => {
            return p3xr.settings.connection.cookieNameCurrentDatabase + '-' + id
        }
    },
    tree: {
        cookieName: 'p3xr-main-treecontrol-divider'
    }
}