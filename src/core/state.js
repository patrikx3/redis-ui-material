p3xr.state = {
    theme: undefined,
    connection: undefined,
    currentDatabase: undefined,
    redisChanged: false,
    databaseIndexes: [0],
    connections: [],
    redisConnections: {},
    keys: [],
    cfg: undefined,
    version: undefined,
    keysInfo: undefined,
    failed: false,
    keysRaw: [],
    search: '',
    commands: [],
    reducedFunctions: false,
    dbsize: undefined,
    monitor: false,
    //infoObject: undefined,
}

Object.defineProperty(p3xr.state, 'themeLayout', {
    get: () => {
        return p3xr.state.theme + 'Layout'
    }
})

Object.defineProperty(p3xr.state, 'themeCommon', {
    get: () => {
        return p3xr.state.theme + 'Common'
    }
})

p3xr.connectionsReset = () => {
    p3xr.state.connections = {
        list: []
    }
}

p3xr.connectionsReset()
