global.p3xr.api = {
    host: undefined,
}

const apiUrl = new URL(location.toString())
if (global.p3xrDevMode === true && apiUrl.port === "8080") {
    global.p3xr.api.host = `http://${apiUrl.hostname}:7843`
} else {
    global.p3xr.api.host = `${apiUrl.protocol}//${apiUrl.host}`
}
