import { io, Socket } from 'socket.io-client'
import { useRedisStateStore } from './redis-state.store'
import { useSettingsStore } from './settings.store'
import { useI18nStore } from './i18n.store'
import { notify } from './notification'

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
let authBlocked = false

/**
 * CRITICAL: Do NOT call getClient() at module level.
 * Pinia stores are not available until app.use(pinia).
 * Use ensureConnected() to lazily initialize the socket.
 */
export function getClient(): Socket | null {
    return client
}

export function ensureConnected(): Socket {
    if (client) return client

    const redisState = useRedisStateStore()
    const settingsStore = useSettingsStore()
    const i18nStore = useI18nStore()

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

    // Include auth token if stored (JWT login)
    const authToken = localStorage.getItem('p3xr-auth-token')
    if (authToken) {
        ioOptions.auth = { token: authToken }
    }

    client = io(redisState.apiHost, ioOptions)

    client.on('connect', () => {
        if (disconnected || connectErrorWas) {
            console.log('p3xr-socket RE-connected', client!.id)
            notify(i18nStore.strings?.title?.name || 'P3X Redis UI', i18nStore.strings?.status?.connectionRestored || 'Connection restored')
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
        if (authBlocked) return
        disconnected = true
        emit('disconnect')
    })

    client.on('error', (error: any) => {
        handleSocketError(error)
    })

    client.on('connect_error', (error: any) => {
        if (error?.message === 'auth_required') {
            authBlocked = true
            client!.disconnect()
            emit('auth_required')
            return
        }
        handleSocketError(error)
    })

    client.on('connections', (data: any) => {
        if (data.status === 'error') {
            redisState.resetConnections()
            return
        }
        redisState.connections = data.connections
        emit('connections', data)
    })

    client.on('redis-disconnected', (data: any) => {
        const currentConn = redisState.connection
        if (currentConn !== undefined && currentConn.id === data.connectionId) {
            redisState.monitor = false
            redisState.connection = undefined

            if (data.status === 'error') {
                const strings = i18nStore.strings
                const fn = strings?.status?.redisDisconnected
                const msg = typeof fn === 'function' ? fn(data) : 'Redis disconnected'
                showToast(msg)
                notify(strings?.title?.name || 'P3X Redis UI', msg)
            } else if (data.status === 'code') {
                const strings = i18nStore.strings
                const codes = strings?.code ?? {}
                const msg = codes[data.code] ?? `unknown redis disconnect code: ${data.code}`
                showToast(msg)
                notify(strings?.title?.name || 'P3X Redis UI', msg)
            }

            emit('redis-disconnected', data)
            request({ action: 'connection/trigger-disconnect', enableResponse: false }).catch(() => {})
        }
    })

    client.on('redis-status', (data: any) => {
        redisState.redisConnections = data.redisConnections
        emit('redis-status', data)
    })

    let receivedVersion = false
    client.on('configuration', (data: any) => {
        const version = data.snapshot === true ? 'SNAPSHOT' : 'v' + data.version
        redisState.cfg = data
        redisState.version = version

        if (!receivedVersion && !data.snapshot) {
            receivedVersion = true
            try {
                const ga = settingsStore.googleAnalytics
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
    const socket = ensureConnected()
    const settingsStore = useSettingsStore()

    if (!options.payload) {
        options.payload = {}
    }

    options.payload.maxKeys = settingsStore.maxKeys

    const enableResponse = options.enableResponse !== false

    if (!enableResponse) {
        socket.emit('p3xr-request', options)
        return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
        const requestId = settingsStore.generateId()
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
            const i18nStore = useI18nStore()
            const strings = i18nStore.strings
            const fn = strings?.label?.socketIoTimeout
            const msg = typeof fn === 'function' ? fn({ timeout: settingsStore.socketTimeout }) : `Socket.IO timeout (${settingsStore.socketTimeout}ms)`
            reject(new Error(msg))
        }, settingsStore.socketTimeout)

        socket.on(responseEvent, response)
        socket.emit('p3xr-request', options)
    })
}
