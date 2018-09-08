p3xr.state = {
    theme: undefined,
    connection: undefined,
    currentDatabase: undefined,
    databaseIndexes: [0],
    connections: [],
    redisConnections: {}
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