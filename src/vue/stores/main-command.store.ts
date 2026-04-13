import { defineStore } from 'pinia'
import { request } from './socket.service'
import { useCommonStore } from './common.store'
import { useRedisStateStore } from './redis-state.store'
import { useSettingsStore } from './settings.store'
import { useI18nStore } from './i18n.store'
import { useOverlayStore } from './overlay.store'
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
    async function connect(conn: any) {
        const cloned = JSON.parse(JSON.stringify(conn))
        const settings = useSettingsStore()
        const overlay = useOverlayStore()
        const common = useCommonStore()
        try {
            const dbStorageKey = settings.getStorageKeyCurrentDatabase(cloned.id)
            let db: string | undefined
            try { db = localStorage.getItem(dbStorageKey) ?? undefined } catch {}

            if (cloned.askAuth === true) {
                try {
                    const a = await common.askAuth()
                    cloned.username = a.username || undefined
                    cloned.password = a.password || undefined
                } catch { return }
            }

            const i18n = useI18nStore()
            overlay.show({ message: i18n.strings?.title?.connectingRedis })

            const response = await request({
                action: 'connection/connect',
                payload: { connection: cloned, db },
            })

            const redisState = useRedisStateStore()
            const databaseIndexes: number[] = []
            let idx = 0
            while (idx < response.databases) databaseIndexes.push(idx++)
            const commands: string[] = []
            Object.keys(response.commands ?? {}).forEach(k => commands.push(response.commands[k][0]))
            commands.sort()
            const modules = Array.isArray(response.modules) ? response.modules : []

            redisState.page = 1
            redisState.monitor = false
            redisState.dbsize = response.dbsize
            redisState.databaseIndexes = databaseIndexes
            redisState.connection = cloned
            redisState.commands = commands
            redisState.commandsMeta = response.commandsMeta ?? {}
            redisState.modules = modules
            redisState.hasReJSON = modules.some((m: any) => m.name === 'ReJSON')
            redisState.hasRediSearch = modules.some((m: any) => m.name === 'search')
            redisState.hasTimeSeries = modules.some((m: any) => m.name === 'timeseries' || m.name === 'Timeseries')
            redisState.hasBloom = modules.some((m: any) => m.name === 'bf')

            common.loadRedisInfoResponse({ response })
            try { localStorage.setItem(settings.connectInfoStorageKey, JSON.stringify(cloned)) } catch {}
        } catch (error) {
            const settings = useSettingsStore()
            try { localStorage.removeItem(settings.connectInfoStorageKey) } catch {}
            useRedisStateStore().connection = undefined
            common.generalHandleError(error)
        } finally {
            overlay.hide()
        }
    }

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
        connect,
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
