global.p3xr.api = {
    host: undefined,
}

const apiUrl = new URL(location.toString())
if (apiUrl.port === "8080") {
    global.p3xr.api.host  = 'https://localhost:7843'
} else {
    global.p3xr.api.host = `https://${apiUrl.host}`
}
