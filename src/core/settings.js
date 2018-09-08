const cookieExpiry = new Date()
cookieExpiry.setFullYear(cookieExpiry.getFullYear() + 5)

p3xr.settings = {
    socket: {
      timeout: 5000,
    },
    toast: {
        timeout: 5000,
        position: 'bottom right',
    },
    debounce: 250,
    cookieExpiry: cookieExpiry,
}