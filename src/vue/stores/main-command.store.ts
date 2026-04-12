import { defineStore } from 'pinia'
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

export function emitCommand(event: string, data?: any) {
    cmdListeners[event]?.forEach(cb => cb(data))
}

let lastRefreshAt = 0

export const useMainCommandStore = defineStore('mainCommand', () => {
    async function selectDatabase(dbIndex: number) {
        const redisState = useRedisStateStore()
        const settings = useSettingsStore()

        redisState.currentDatabase = dbIndex
        redisState.page = 1
        redisState.redisChanged = true

        try {
            await request({ action: 'redis/console', payload: { command: `select ${dbIndex}` } })
            const i18n = useI18nStore()
            const s = i18n.strings
            const fn = s?.status?.dbChanged
            const msg = typeof fn === 'function' ? fn({ db: dbIndex }) : ''
            const common = useCommonStore()
            if (msg) common.toast(msg)

            // Persist
            const storageKey = settings.getStorageKeyCurrentDatabase(redisState.connection?.id)
            if (storageKey) try { localStorage.setItem(storageKey, String(dbIndex)) } catch {}

            await refresh({ force: true })
        } catch (e) {
            useCommonStore().generalHandleError(e)
        }
    }

    async function save() {
        try {
            const response = await request({ action: 'redis/save' })
            const info = parseRedisInfo(response.info)
            const redisState = useRedisStateStore()
            redisState.info = info
            const i18n = useI18nStore()
            const s = i18n.strings
            useCommonStore().toast(s?.status?.savedRedis)
        } catch (e) {
            useCommonStore().generalHandleError(e)
        }
    }

    async function statistics() {
        try {
            navigateTo('database.statistics')
            await refresh({ force: true })
        } catch (e) {
            useCommonStore().generalHandleError(e)
        }
    }

    async function refresh(options: { withoutParent?: boolean; force?: boolean } = {}) {
        const now = Date.now()
        if (!options.force && now - lastRefreshAt < 2000) return
        lastRefreshAt = now

        try {
            const redisState = useRedisStateStore()
            const settings = useSettingsStore()
            const payload: any = {}

            const searchValue = redisState.search
            if (!settings.searchClientSide && typeof searchValue === 'string' && searchValue.length > 0) {
                payload.match = settings.searchStartsWith ? searchValue + '*' : '*' + searchValue + '*'
            }

            const response = await request({ action: 'redis/refresh', payload })
            redisState.dbsize = response.dbsize
            redisState.redisChanged = true
            useCommonStore().loadRedisInfoResponse({ response })

            emitCommand('tree-refresh')
            if (!options.withoutParent) emitCommand('refresh-key')
        } catch (e) {
            useCommonStore().generalHandleError(e)
        }
    }

    async function disconnect() {
        const redisState = useRedisStateStore()
        const settings = useSettingsStore()

        try { localStorage.removeItem(settings.connectInfoStorageKey) } catch {}
        redisState.connection = undefined
        redisState.redisConnections = {}
        redisState.monitor = false

        try {
            await request({
                action: 'connection/disconnect',
                payload: { connectionId: redisState.connection?.id },
            })
        } catch {}

        navigateTo('settings')
    }

    function addKey(options: { event: Event; node?: any }) {
        options.event.stopPropagation()
        emitCommand('key-new', options)
    }

    function getCurrentDatabase(): number {
        const redisState = useRedisStateStore()
        const settings = useSettingsStore()
        let db: any = redisState.currentDatabase
        if (db === undefined) {
            const storageKey = settings.getStorageKeyCurrentDatabase(redisState.connection?.id)
            if (storageKey) try { db = localStorage.getItem(storageKey) } catch {}
        }
        return Number(db ?? 0)
    }

    function setCurrentDatabase(value: number) {
        const redisState = useRedisStateStore()
        const settings = useSettingsStore()
        redisState.currentDatabase = value
        const storageKey = settings.getStorageKeyCurrentDatabase(redisState.connection?.id)
        if (storageKey) try { localStorage.setItem(storageKey, String(value)) } catch {}
    }

    return {
        selectDatabase,
        save,
        statistics,
        refresh,
        disconnect,
        addKey,
        getCurrentDatabase,
        setCurrentDatabase,
    }
})
