/**
 * Monitoring data store -- exact port of Angular MonitoringDataService.
 * Manages profiler (MONITOR) and pubsub (PSUBSCRIBE) data streams.
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { request, getClient, ensureConnected } from './socket.service'
import { decode as msgpackDecode } from '@msgpack/msgpack'

export interface ProfilerEntry {
    displayTime: string
    fullTimestamp: string
    database: string
    source: string
    command: string
}

export interface PubsubEntry {
    displayTime: string
    fullTimestamp: string
    channel: string
    message: string
}

const PROFILER_STORAGE_KEY = 'p3xr-profiler-entries'
const PUBSUB_STORAGE_KEY = 'p3xr-pubsub-entries'
const MAX_ENTRIES = 10000
const MAX_STORAGE_ENTRIES = 100
const SAVE_DEBOUNCE = 2000

type ProfilerCallback = (entry: ProfilerEntry) => void
type PubsubCallback = (entry: PubsubEntry) => void

// Subscribers (outside store to avoid re-renders on every entry)
let profilerListeners: Set<ProfilerCallback> = new Set()
let pubsubListeners: Set<PubsubCallback> = new Set()
let profilerSaveTimeout: any = null
let pubsubSaveTimeout: any = null
let langFn: () => string = () => 'en'
let initialized = false
let profilerDesired = false
let pubsubDesired = false
let profilerGeneration = 0
let pubsubGeneration = 0
let profilerStartPromise: Promise<void> | null = null
let pubsubStartPromise: Promise<void> | null = null

function decodePubsubMessage(message: any): string {
    if (message instanceof ArrayBuffer) {
        try {
            const decoded = msgpackDecode(new Uint8Array(message))
            return JSON.stringify(decoded, null, 2)
        } catch {
            return new TextDecoder().decode(message)
        }
    }
    return String(message)
}

function saveToStorage(key: string, entries: any[]): void {
    const toSave = entries.slice(-MAX_STORAGE_ENTRIES)
    try { localStorage.setItem(key, JSON.stringify(toSave)) }
    catch { try { localStorage.removeItem(key) } catch {} }
}

function restoreFromStorage(): { profiler: ProfilerEntry[]; pubsub: PubsubEntry[] } {
    let profiler: ProfilerEntry[] = []
    let pubsub: PubsubEntry[] = []
    try {
        const pj = localStorage.getItem(PROFILER_STORAGE_KEY)
        if (pj) profiler = JSON.parse(pj)
    } catch {}
    try {
        const sj = localStorage.getItem(PUBSUB_STORAGE_KEY)
        if (sj) pubsub = JSON.parse(sj)
    } catch {}
    return { profiler, pubsub }
}

// Store reference for use inside event handlers (set after store creation)
let storeRef: ReturnType<typeof useMonitoringDataStore> | null = null

const onMonitorData = (data: any) => {
    const lang = langFn()
    const date = new Date(parseFloat(data.time) * 1000)
    const displayTime = date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, fractionalSecondDigits: 3 } as any)
    const entry: ProfilerEntry = {
        displayTime,
        fullTimestamp: date.toISOString(),
        database: data.database,
        source: data.source,
        command: (data.args || []).join(' '),
    }
    if (storeRef) {
        let entries = [...storeRef.profilerEntries, entry]
        if (entries.length > MAX_ENTRIES) entries = entries.slice(-MAX_ENTRIES)
        storeRef.profilerEntries = entries
    }
    profilerListeners.forEach(cb => cb(entry))
    // Debounced save
    if (!profilerSaveTimeout) {
        profilerSaveTimeout = setTimeout(() => {
            profilerSaveTimeout = null
            if (storeRef) saveToStorage(PROFILER_STORAGE_KEY, storeRef.profilerEntries)
        }, SAVE_DEBOUNCE)
    }
}

const onPubSubMessage = (data: any) => {
    const lang = langFn()
    const date = new Date()
    const displayTime = date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    const entry: PubsubEntry = {
        displayTime,
        fullTimestamp: date.toISOString(),
        channel: data.channel,
        message: decodePubsubMessage(data.message),
    }
    if (storeRef) {
        let entries = [...storeRef.pubsubEntries, entry]
        if (entries.length > MAX_ENTRIES) entries = entries.slice(-MAX_ENTRIES)
        storeRef.pubsubEntries = entries
    }
    pubsubListeners.forEach(cb => cb(entry))
    if (!pubsubSaveTimeout) {
        pubsubSaveTimeout = setTimeout(() => {
            pubsubSaveTimeout = null
            if (storeRef) saveToStorage(PUBSUB_STORAGE_KEY, storeRef.pubsubEntries)
        }, SAVE_DEBOUNCE)
    }
}

export const useMonitoringDataStore = defineStore('monitoringData', () => {
    const { profiler, pubsub } = restoreFromStorage()
    const profilerEntries = ref<ProfilerEntry[]>(profiler)
    const pubsubEntries = ref<PubsubEntry[]>(pubsub)
    const profilerStarted = ref(false)
    const pubsubStarted = ref(false)
    const pubsubPattern = ref('*')

    // Set storeRef so event handlers can access the store
    // This is done via a side-effect during store creation
    const store = {
        profilerEntries,
        pubsubEntries,
        profilerStarted,
        pubsubStarted,
        pubsubPattern,
    }

    return store
})

export function initMonitoringData(getLang: () => string): void {
    langFn = getLang
    if (!initialized) {
        initialized = true
    }
}

/** Must be called after pinia is installed to set the store reference */
export function bindMonitoringStore(): void {
    storeRef = useMonitoringDataStore()
}

export async function startProfiler(): Promise<void> {
    profilerDesired = true
    if (storeRef?.profilerStarted) return
    if (profilerStartPromise) return profilerStartPromise

    const generation = ++profilerGeneration
    const startPromise = (async () => {
        await request({ action: 'monitor/set', payload: { enabled: true } })

        if (generation !== profilerGeneration || !profilerDesired) return

        const client = getClient()
        client?.removeListener('monitor-data', onMonitorData)
        client?.on('monitor-data', onMonitorData)
        if (storeRef) storeRef.profilerStarted = true
    })().finally(() => {
        if (profilerStartPromise === startPromise) profilerStartPromise = null
    })
    profilerStartPromise = startPromise

    return profilerStartPromise
}

export function stopProfiler(): void {
    const wasStarted = storeRef?.profilerStarted ?? false
    profilerDesired = false
    profilerGeneration++
    profilerStartPromise = null

    getClient()?.removeListener('monitor-data', onMonitorData)
    if (storeRef) storeRef.profilerStarted = false
    if (wasStarted) {
        request({ action: 'monitor/set', payload: { enabled: false } }).catch(() => {})
    }
    if (profilerSaveTimeout) { clearTimeout(profilerSaveTimeout); profilerSaveTimeout = null }
    if (storeRef) saveToStorage(PROFILER_STORAGE_KEY, storeRef.profilerEntries)
}

export async function startPubSub(): Promise<void> {
    pubsubDesired = true
    if (storeRef?.pubsubStarted) return
    if (pubsubStartPromise) return pubsubStartPromise

    const generation = ++pubsubGeneration
    const pattern = storeRef?.pubsubPattern ?? '*'
    const startPromise = (async () => {
        await request({ action: 'settings/subscription', payload: { subscription: true, subscriberPattern: pattern } })

        if (generation !== pubsubGeneration || !pubsubDesired) return

        const client = getClient()
        client?.removeListener('pubsub-message', onPubSubMessage)
        client?.on('pubsub-message', onPubSubMessage)
        if (storeRef) storeRef.pubsubStarted = true
    })().finally(() => {
        if (pubsubStartPromise === startPromise) pubsubStartPromise = null
    })
    pubsubStartPromise = startPromise

    return pubsubStartPromise
}

export function stopPubSub(): void {
    const wasStarted = storeRef?.pubsubStarted ?? false
    pubsubDesired = false
    pubsubGeneration++
    pubsubStartPromise = null

    getClient()?.removeListener('pubsub-message', onPubSubMessage)
    if (storeRef) storeRef.pubsubStarted = false
    if (wasStarted) {
        request({ action: 'settings/subscription', payload: { subscription: false, subscriberPattern: '*' } }).catch(() => {})
    }
    if (pubsubSaveTimeout) { clearTimeout(pubsubSaveTimeout); pubsubSaveTimeout = null }
    if (storeRef) saveToStorage(PUBSUB_STORAGE_KEY, storeRef.pubsubEntries)
}

export async function restartPubSub(): Promise<void> {
    stopPubSub()
    await startPubSub()
}

export function clearProfiler(): void {
    if (storeRef) storeRef.profilerEntries = []
    try { localStorage.removeItem(PROFILER_STORAGE_KEY) } catch {}
}

export function clearPubSub(): void {
    if (storeRef) storeRef.pubsubEntries = []
    try { localStorage.removeItem(PUBSUB_STORAGE_KEY) } catch {}
}

export function destroyMonitoringData(): void {
    if (profilerSaveTimeout) { clearTimeout(profilerSaveTimeout); profilerSaveTimeout = null }
    if (pubsubSaveTimeout) { clearTimeout(pubsubSaveTimeout); pubsubSaveTimeout = null }
    if (storeRef) {
        saveToStorage(PROFILER_STORAGE_KEY, storeRef.profilerEntries)
        saveToStorage(PUBSUB_STORAGE_KEY, storeRef.pubsubEntries)
    }
}

export function onProfilerEntry(cb: ProfilerCallback): () => void {
    profilerListeners.add(cb)
    return () => profilerListeners.delete(cb)
}

export function onPubsubEntry(cb: PubsubCallback): () => void {
    pubsubListeners.add(cb)
    return () => pubsubListeners.delete(cb)
}
