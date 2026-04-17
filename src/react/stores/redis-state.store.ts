import { create } from 'zustand'

function computeApiHost(): string {
    const apiUrl = new URL(location.toString())
    if ((globalThis as any).p3xrDevMode === true) {
        const apiPort = (globalThis as any).p3xrApiPort || '7843'
        return `http://${apiUrl.hostname}:${apiPort}`
    }
    return `${apiUrl.protocol}//${apiUrl.host}`
}

type ConnectionState = 'none' | 'connecting' | 'connected'
type CurrentPage = 'connections' | 'database' | 'pulse' | 'profiler' | 'pubsub' | 'analysis' |
    'search' | 'timeseries' | 'info' | 'settings' | 'unknown'

interface RedisState {
    apiHost: string
    connection: any | undefined
    connections: { list: any[] }
    cfg: any | undefined
    version: string | undefined
    currentDatabase: number | undefined
    databaseIndexes: number[]
    keysRaw: string[]
    keysInfo: any
    search: string
    page: number
    info: any
    dbsize: number | undefined
    monitor: boolean
    commands: string[]
    commandsMeta: Record<string, { syntax: string; group: string }>
    modules: any[]
    hasRediSearch: boolean
    hasReJSON: boolean
    hasTimeSeries: boolean
    hasBloom: boolean
    theme: string | undefined
    redisConnections: Record<string, any>
    keysInfoFetchedAt: number
    redisChanged: boolean
    failed: boolean
    reducedFunctions: boolean

    // --- Console drawer + connection-state awareness (Pass 1 of features-smarter) ---
    connectionState: ConnectionState
    currentPage: CurrentPage
    consoleDrawerOpen: boolean

    resetConnections: () => void
    setConnectionState: (s: ConnectionState) => void
    setCurrentPage: (p: CurrentPage) => void
    setConsoleDrawerOpen: (open: boolean) => void
    toggleConsoleDrawer: () => void
}

function getStoredDrawerOpen(): boolean {
    try { return localStorage.getItem('p3xr-console-drawer-open') === 'true' } catch { return false }
}

export const useRedisStateStore = create<RedisState>((set, get) => ({
    apiHost: computeApiHost(),
    connection: undefined,
    connections: { list: [] },
    cfg: undefined,
    version: undefined,
    currentDatabase: undefined,
    databaseIndexes: [],
    keysRaw: [],
    keysInfo: undefined,
    search: '',
    page: 1,
    info: undefined,
    dbsize: undefined,
    monitor: false,
    commands: [],
    commandsMeta: {},
    modules: [],
    hasRediSearch: false,
    hasReJSON: false,
    hasTimeSeries: false,
    hasBloom: false,
    theme: undefined,
    redisConnections: {},
    keysInfoFetchedAt: Date.now(),
    redisChanged: false,
    failed: false,
    reducedFunctions: false,

    connectionState: 'none',
    currentPage: 'unknown',
    consoleDrawerOpen: getStoredDrawerOpen(),

    resetConnections: () => set({ connections: { list: [] } }),
    setConnectionState: (s) => set({ connectionState: s }),
    setCurrentPage: (p) => set({ currentPage: p }),
    setConsoleDrawerOpen: (open) => {
        try { localStorage.setItem('p3xr-console-drawer-open', String(open)) } catch {}
        set({ consoleDrawerOpen: open })
    },
    toggleConsoleDrawer: () => {
        const next = !get().consoleDrawerOpen
        try { localStorage.setItem('p3xr-console-drawer-open', String(next)) } catch {}
        set({ consoleDrawerOpen: next })
    },
}))

// --- Computed helpers (matching Angular computed signals) ---
// Import settings inline to avoid top-level circular dep
import { useSettingsStore } from './settings.store'

export function getFilteredKeys(): string[] {
    const { keysRaw, search } = useRedisStateStore.getState()
    const { searchClientSide, searchStartsWith } = useSettingsStore.getState()
    let keys = keysRaw.slice()
    if (searchClientSide && typeof search === 'string' && search.length > 0) {
        keys = searchStartsWith ? keys.filter((k: string) => k.startsWith(search)) : keys.filter((k: string) => k.includes(search))
    }
    return keys
}

export function getPaginatedKeys(): string[] {
    const { page } = useRedisStateStore.getState()
    const { pageCount } = useSettingsStore.getState()
    const keys = getFilteredKeys()
    if (keys.length <= pageCount) return keys
    const start = (page - 1) * pageCount
    return keys.slice(start, start + pageCount)
}

export function getPages(): number {
    const { pageCount } = useSettingsStore.getState()
    return Math.ceil(getFilteredKeys().length / pageCount)
}
