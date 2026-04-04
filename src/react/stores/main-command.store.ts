import { create } from 'zustand'
import { request } from './socket.service'
import { useCommonStore } from './common.store'
import { useRedisStateStore } from './redis-state.store'
import { useSettingsStore } from './settings.store'
import { useI18nStore } from './i18n.store'
import { navigateTo } from './navigation.store'
import { parseRedisInfo } from './redis-parser'

// --- Event bus for component communication ---
type Callback = (...args: any[]) => void
type VoidCallback = () => void
const cmdListeners: Record<string, Set<Callback>> = {}

export function onCommandEvent(event: string, cb: Callback): VoidCallback {
    if (!cmdListeners[event]) cmdListeners[event] = new Set()
    cmdListeners[event].add(cb)
    return () => { cmdListeners[event].delete(cb) }
}

function emitCommand(event: string, data?: any) {
    cmdListeners[event]?.forEach(cb => cb(data))
}

interface MainCommandState {
    selectDatabase: (dbIndex: number) => Promise<void>
    save: () => Promise<void>
    refresh: (options?: { withoutParent?: boolean; force?: boolean }) => Promise<void>
    statistics: () => Promise<void>
    disconnect: () => Promise<void>
    addKey: (options: { event: Event; node?: any }) => void
    getCurrentDatabase: () => number
    setCurrentDatabase: (value: number) => void
}

let lastRefreshAt = 0

export const useMainCommandStore = create<MainCommandState>(() => ({
    selectDatabase: async (dbIndex: number) => {
        const state = useRedisStateStore.getState()
        const settings = useSettingsStore.getState()

        useRedisStateStore.setState({ currentDatabase: dbIndex, page: 1, redisChanged: true })
        try {
            await request({ action: 'console', payload: { command: `select ${dbIndex}` } })
            const strings = useI18nStore.getState().strings
            const fn = strings?.status?.dbChanged
            const msg = typeof fn === 'function' ? fn({ db: dbIndex }) : ''
            if (msg) useCommonStore.getState().toast(msg)

            // Persist
            const storageKey = settings.getStorageKeyCurrentDatabase(state.connection?.id)
            if (storageKey) try { localStorage.setItem(storageKey, String(dbIndex)) } catch {}

            await useMainCommandStore.getState().refresh({ force: true })
        } catch (e) {
            useCommonStore.getState().generalHandleError(e)
        }
    },

    save: async () => {
        try {
            const response = await request({ action: 'save' })
            const info = parseRedisInfo(response.info)
            useRedisStateStore.setState({ info })
            const strings = useI18nStore.getState().strings
            useCommonStore.getState().toast(strings?.status?.savedRedis)
        } catch (e) {
            useCommonStore.getState().generalHandleError(e)
        }
    },

    statistics: async () => {
        try {
            navigateTo('database.statistics')
            await useMainCommandStore.getState().refresh({ force: true })
        } catch (e) {
            useCommonStore.getState().generalHandleError(e)
        }
    },

    refresh: async (options: { withoutParent?: boolean; force?: boolean } = {}) => {
        const now = Date.now()
        if (!options.force && now - lastRefreshAt < 2000) return
        lastRefreshAt = now

        try {
            const state = useRedisStateStore.getState()
            const settings = useSettingsStore.getState()
            const payload: any = {}

            const searchValue = state.search
            if (!settings.searchClientSide && typeof searchValue === 'string' && searchValue.length > 0) {
                payload.match = settings.searchStartsWith ? searchValue + '*' : '*' + searchValue + '*'
            }

            const response = await request({ action: 'refresh', payload })
            useRedisStateStore.setState({ dbsize: response.dbsize, redisChanged: true })
            useCommonStore.getState().loadRedisInfoResponse({ response })

            emitCommand('tree-refresh')
            if (!options.withoutParent) emitCommand('refresh-key')
        } catch (e) {
            useCommonStore.getState().generalHandleError(e)
        }
    },

    disconnect: async () => {
        const state = useRedisStateStore.getState()
        const settings = useSettingsStore.getState()

        try { localStorage.removeItem(settings.connectInfoStorageKey) } catch {}
        useRedisStateStore.setState({
            connection: undefined,
            redisConnections: {},
            monitor: false,
        })

        try {
            await request({
                action: 'connection-disconnect',
                payload: { connectionId: state.connection?.id },
            })
        } catch {}

        navigateTo('settings')
    },

    addKey: (options: { event: Event; node?: any }) => {
        options.event.stopPropagation()
        emitCommand('key-new', options)
    },

    getCurrentDatabase: () => {
        const state = useRedisStateStore.getState()
        const settings = useSettingsStore.getState()
        let db: any = state.currentDatabase
        if (db === undefined) {
            const storageKey = settings.getStorageKeyCurrentDatabase(state.connection?.id)
            if (storageKey) try { db = localStorage.getItem(storageKey) } catch {}
        }
        return Number(db ?? 0)
    },

    setCurrentDatabase: (value: number) => {
        const state = useRedisStateStore.getState()
        const settings = useSettingsStore.getState()
        useRedisStateStore.setState({ currentDatabase: value })
        const storageKey = settings.getStorageKeyCurrentDatabase(state.connection?.id)
        if (storageKey) try { localStorage.setItem(storageKey, String(value)) } catch {}
    },
}))
