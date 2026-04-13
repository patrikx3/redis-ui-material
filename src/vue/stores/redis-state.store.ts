import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useSettingsStore } from './settings.store'

function computeApiHost(): string {
    const apiUrl = new URL(location.toString())
    if ((globalThis as any).p3xrDevMode === true) {
        const apiPort = (globalThis as any).p3xrApiPort
        return `http://${apiUrl.hostname}:${apiPort}`
    }
    return `${apiUrl.protocol}//${apiUrl.host}`
}

export const useRedisStateStore = defineStore('redisState', () => {
    const apiHost = ref(computeApiHost())
    const connection = ref<any>(undefined)
    const connections = ref<{ list: any[] }>({ list: [] })
    const cfg = ref<any>(undefined)
    const version = ref<string | undefined>(undefined)
    const currentDatabase = ref<number | undefined>(undefined)
    const databaseIndexes = ref<number[]>([])
    const keysRaw = ref<string[]>([])
    const keysInfo = ref<any>(undefined)
    const search = ref('')
    const page = ref(1)
    const info = ref<any>(undefined)
    const dbsize = ref<number | undefined>(undefined)
    const monitor = ref(false)
    const commands = ref<string[]>([])
    const commandsMeta = ref<Record<string, { syntax: string; group: string }>>({})
    const modules = ref<any[]>([])
    const hasRediSearch = ref(false)
    const hasReJSON = ref(false)
    const hasTimeSeries = ref(false)
    const hasBloom = ref(false)
    const theme = ref<string | undefined>(undefined)
    const redisConnections = ref<Record<string, any>>({})
    const keysInfoFetchedAt = ref(Date.now())
    const redisChanged = ref(false)
    const failed = ref(false)
    const reducedFunctions = ref(false)

    function resetConnections() {
        connections.value = { list: [] }
    }

    // --- Computed helpers (matching Angular computed signals) ---
    const filteredKeys = computed(() => {
        const settings = useSettingsStore()
        let keys = keysRaw.value.slice()
        if (settings.searchClientSide && typeof search.value === 'string' && search.value.length > 0) {
            keys = settings.searchStartsWith
                ? keys.filter((k: string) => k.startsWith(search.value))
                : keys.filter((k: string) => k.includes(search.value))
        }
        return keys
    })

    const paginatedKeys = computed(() => {
        const settings = useSettingsStore()
        const keys = filteredKeys.value
        if (keys.length <= settings.pageCount) return keys
        const start = (page.value - 1) * settings.pageCount
        return keys.slice(start, start + settings.pageCount)
    })

    const pages = computed(() => {
        const settings = useSettingsStore()
        return Math.ceil(filteredKeys.value.length / settings.pageCount)
    })

    return {
        apiHost,
        connection,
        connections,
        cfg,
        version,
        currentDatabase,
        databaseIndexes,
        keysRaw,
        keysInfo,
        search,
        page,
        info,
        dbsize,
        monitor,
        commands,
        commandsMeta,
        modules,
        hasRediSearch,
        hasReJSON,
        hasTimeSeries,
        hasBloom,
        theme,
        redisConnections,
        keysInfoFetchedAt,
        redisChanged,
        failed,
        reducedFunctions,
        resetConnections,
        filteredKeys,
        paginatedKeys,
        pages,
    }
})
