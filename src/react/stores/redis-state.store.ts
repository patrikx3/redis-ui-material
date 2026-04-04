import { create } from 'zustand'

function computeApiHost(): string {
    const apiUrl = new URL(location.toString())
    if ((globalThis as any).p3xrDevMode === true) {
        const apiPort = (globalThis as any).p3xrApiPort || '7843'
        return `http://${apiUrl.hostname}:${apiPort}`
    }
    return `${apiUrl.protocol}//${apiUrl.host}`
}

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
    theme: string | undefined
    redisConnections: Record<string, any>
    keysInfoFetchedAt: number
    redisChanged: boolean
    failed: boolean
    reducedFunctions: boolean

    resetConnections: () => void
}

export const useRedisStateStore = create<RedisState>((set) => ({
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
    theme: undefined,
    redisConnections: {},
    keysInfoFetchedAt: Date.now(),
    redisChanged: false,
    failed: false,
    reducedFunctions: false,

    resetConnections: () => set({ connections: { list: [] } }),
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
