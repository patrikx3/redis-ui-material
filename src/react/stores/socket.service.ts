import { io, Socket } from 'socket.io-client'
import { useRedisStateStore } from './redis-state.store'
import { useSettingsStore } from './settings.store'
import { useI18nStore } from './i18n.store'

type Callback = (data: any) => void
type VoidCallback = () => void

// Event bus for components to subscribe to socket events
const listeners: Record<string, Set<Callback>> = {}

function emit(event: string, data?: any) {
    listeners[event]?.forEach(cb => cb(data))
}

export function onSocketEvent(event: string, cb: Callback): VoidCallback {
    if (!listeners[event]) listeners[event] = new Set()
    listeners[event].add(cb)
    return () => { listeners[event].delete(cb) }
}

// --- Singleton Socket.IO client ---
let client: Socket | null = null
let reconnect = false
let connectErrorWas = false
let disconnected = false

export function getClient(): Socket {
    if (client) return client

    const state = useRedisStateStore.getState()

    const ioOptions: any = {
        rejectUnauthorized: false,
        path: '/socket.io',
        secure: true,
        reconnection: true,
        reconnectionAttempts: Infinity,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 5000,
    }

    if ((globalThis as any).p3xrDevMode === true) {
        ioOptions.transports = ['websocket']
    }

    client = io(state.apiHost, ioOptions)

    client.on('connect', () => {
        if (disconnected || connectErrorWas) {
            console.log('p3xr-socket RE-connected', client!.id)
            disconnected = false
            connectErrorWas = false
            location.reload()
            return
        }

        if (reconnect) {
            console.log('p3xr-socket RE-connected', client!.id)
        } else {
            console.log('p3xr-socket connected', client!.id)
        }
        reconnect = true
    })

    client.on('disconnect', () => {
        disconnected = true
        emit('disconnect')
    })

    client.on('error', (error: any) => {
        handleSocketError(error)
    })

    client.on('connect_error', (error: any) => {
        handleSocketError(error)
    })

    client.on('connections', (data: any) => {
        if (data.status === 'error') {
            useRedisStateStore.getState().resetConnections()
            return
        }
        useRedisStateStore.setState({ connections: data.connections })
        emit('connections', data)
    })

    client.on('redis-disconnected', (data: any) => {
        const currentConn = useRedisStateStore.getState().connection
        if (currentConn !== undefined && currentConn.id === data.connectionId) {
            useRedisStateStore.setState({ monitor: false, connection: undefined })

            if (data.status === 'error') {
                const strings = useI18nStore.getState().strings
                const fn = strings?.status?.redisDisconnected
                const msg = typeof fn === 'function' ? fn(data) : 'Redis disconnected'
                showToast(msg)
            } else if (data.status === 'code') {
                const strings = useI18nStore.getState().strings
                const codes = strings?.code ?? {}
                const msg = codes[data.code] ?? `unknown redis disconnect code: ${data.code}`
                showToast(msg)
            }

            emit('redis-disconnected', data)
            request({ action: 'trigger-redis-disconnect', enableResponse: false }).catch(() => {})
        }
    })

    client.on('redis-status', (data: any) => {
        useRedisStateStore.setState({ redisConnections: data.redisConnections })
        emit('redis-status', data)
    })

    let receivedVersion = false
    client.on('configuration', (data: any) => {
        const version = data.snapshot === true ? 'SNAPSHOT' : 'v' + data.version
        useRedisStateStore.setState({ cfg: data, version })

        if (!receivedVersion && !data.snapshot) {
            receivedVersion = true
            try {
                const ga = useSettingsStore.getState().googleAnalytics
                ;(window as any).gtag?.('config', ga, { page_path: '/version/' + version })
            } catch {}
        }
        emit('configuration', data)
    })

    return client
}

function handleSocketError(error: any) {
    if (!connectErrorWas) {
        connectErrorWas = true
        emit('socket-error', error)
    }
}

function showToast(message: string) {
    try {
        const snackBar = (globalThis as any).__p3xr_snackbar
        if (snackBar) {
            const ref = snackBar.open(message, 'x', {
                duration: 5000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom',
            })
            ref.onAction().subscribe(() => ref.dismiss())
        }
    } catch {}
}

// --- Request API ---
export function request(options: {
    action: string
    payload?: any
    enableResponse?: boolean
}): Promise<any> {
    const socket = getClient()
    const settings = useSettingsStore.getState()

    if (!options.payload) {
        options.payload = {}
    }

    options.payload.maxKeys = settings.maxKeys

    const enableResponse = options.enableResponse !== false

    if (!enableResponse) {
        socket.emit('p3xr-request', options)
        return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
        const requestId = settings.generateId()
        ;(options as any).requestId = requestId
        const responseEvent = `p3xr-response-${requestId}`

        let timeout: ReturnType<typeof setTimeout>

        const response = (data: any) => {
            clearTimeout(timeout)
            socket.off(responseEvent)
            if (data?.status === 'ok') {
                resolve(data)
            } else {
                let errMsg = 'Unknown error'
                try {
                    const err = data?.error
                    if (typeof err === 'string') errMsg = err
                    else if (err?.message) errMsg = err.message
                    else if (err !== undefined && err !== null) errMsg = String(err)
                } catch {}
                reject(new Error(errMsg))
            }
        }

        timeout = setTimeout(() => {
            socket.off(responseEvent, response)
            const strings = useI18nStore.getState().strings
            const fn = strings?.label?.socketIoTimeout
            const msg = typeof fn === 'function' ? fn({ timeout: settings.socketTimeout }) : `Socket.IO timeout (${settings.socketTimeout}ms)`
            reject(new Error(msg))
        }, settings.socketTimeout)

        socket.on(responseEvent, response)
        socket.emit('p3xr-request', options)
    })
}

// Initialize connection on module load
getClient()
