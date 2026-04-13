/**
 * Monitoring data store — exact port of Angular MonitoringDataService.
 * Manages profiler (MONITOR) and pubsub (PSUBSCRIBE) data streams.
 */
import { create } from 'zustand'
import { request, getClient } from './socket.service'
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

interface MonitoringDataState {
    profilerEntries: ProfilerEntry[]
    pubsubEntries: PubsubEntry[]
    profilerStarted: boolean
    pubsubStarted: boolean
    pubsubPattern: string
}

// Subscribers (outside Zustand to avoid re-renders on every entry)
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
    const store = useMonitoringDataStore.getState()
    let entries = [...store.profilerEntries, entry]
    if (entries.length > MAX_ENTRIES) entries = entries.slice(-MAX_ENTRIES)
    useMonitoringDataStore.setState({ profilerEntries: entries })
    profilerListeners.forEach(cb => cb(entry))
    // Debounced save
    if (!profilerSaveTimeout) {
        profilerSaveTimeout = setTimeout(() => {
            profilerSaveTimeout = null
            saveToStorage(PROFILER_STORAGE_KEY, useMonitoringDataStore.getState().profilerEntries)
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
    const store = useMonitoringDataStore.getState()
    let entries = [...store.pubsubEntries, entry]
    if (entries.length > MAX_ENTRIES) entries = entries.slice(-MAX_ENTRIES)
    useMonitoringDataStore.setState({ pubsubEntries: entries })
    pubsubListeners.forEach(cb => cb(entry))
    if (!pubsubSaveTimeout) {
        pubsubSaveTimeout = setTimeout(() => {
            pubsubSaveTimeout = null
            saveToStorage(PUBSUB_STORAGE_KEY, useMonitoringDataStore.getState().pubsubEntries)
        }, SAVE_DEBOUNCE)
    }
}

export const useMonitoringDataStore = create<MonitoringDataState>(() => {
    const { profiler, pubsub } = restoreFromStorage()
    return {
        profilerEntries: profiler,
        pubsubEntries: pubsub,
        profilerStarted: false,
        pubsubStarted: false,
        pubsubPattern: '*',
    }
})

export function initMonitoringData(getLang: () => string): void {
    langFn = getLang
    if (!initialized) {
        initialized = true
    }
}

export async function startProfiler(): Promise<void> {
    profilerDesired = true
    if (useMonitoringDataStore.getState().profilerStarted) return
    if (profilerStartPromise) return profilerStartPromise

    const generation = ++profilerGeneration
    const startPromise = (async () => {
        await request({ action: 'monitor/set', payload: { enabled: true } })

        // Ignore stale async completions from a previous mount/unmount cycle.
        if (generation !== profilerGeneration || !profilerDesired) return

        const client = getClient()
        client?.removeListener('monitor-data', onMonitorData)
        client?.on('monitor-data', onMonitorData)
        useMonitoringDataStore.setState({ profilerStarted: true })
    })().finally(() => {
        if (profilerStartPromise === startPromise) profilerStartPromise = null
    })
    profilerStartPromise = startPromise

    return profilerStartPromise
}

export function stopProfiler(): void {
    const wasStarted = useMonitoringDataStore.getState().profilerStarted
    profilerDesired = false
    profilerGeneration++
    profilerStartPromise = null

    getClient()?.removeListener('monitor-data', onMonitorData)
    useMonitoringDataStore.setState({ profilerStarted: false })
    if (wasStarted) {
        request({ action: 'monitor/set', payload: { enabled: false } }).catch(() => {})
    }
    if (profilerSaveTimeout) { clearTimeout(profilerSaveTimeout); profilerSaveTimeout = null }
    saveToStorage(PROFILER_STORAGE_KEY, useMonitoringDataStore.getState().profilerEntries)
}

export async function startPubSub(): Promise<void> {
    pubsubDesired = true
    if (useMonitoringDataStore.getState().pubsubStarted) return
    if (pubsubStartPromise) return pubsubStartPromise

    const generation = ++pubsubGeneration
    const pattern = useMonitoringDataStore.getState().pubsubPattern
    const startPromise = (async () => {
        await request({ action: 'settings/subscription', payload: { subscription: true, subscriberPattern: pattern } })

        // Ignore stale async completions from a previous mount/unmount cycle.
        if (generation !== pubsubGeneration || !pubsubDesired) return

        const client = getClient()
        client?.removeListener('pubsub-message', onPubSubMessage)
        client?.on('pubsub-message', onPubSubMessage)
        useMonitoringDataStore.setState({ pubsubStarted: true })
    })().finally(() => {
        if (pubsubStartPromise === startPromise) pubsubStartPromise = null
    })
    pubsubStartPromise = startPromise

    return pubsubStartPromise
}

export function stopPubSub(): void {
    const wasStarted = useMonitoringDataStore.getState().pubsubStarted
    pubsubDesired = false
    pubsubGeneration++
    pubsubStartPromise = null

    getClient()?.removeListener('pubsub-message', onPubSubMessage)
    useMonitoringDataStore.setState({ pubsubStarted: false })
    if (wasStarted) {
        request({ action: 'settings/subscription', payload: { subscription: false, subscriberPattern: '*' } }).catch(() => {})
    }
    if (pubsubSaveTimeout) { clearTimeout(pubsubSaveTimeout); pubsubSaveTimeout = null }
    saveToStorage(PUBSUB_STORAGE_KEY, useMonitoringDataStore.getState().pubsubEntries)
}

export async function restartPubSub(): Promise<void> {
    stopPubSub()
    await startPubSub()
}

export function clearProfiler(): void {
    useMonitoringDataStore.setState({ profilerEntries: [] })
    try { localStorage.removeItem(PROFILER_STORAGE_KEY) } catch {}
}

export function clearPubSub(): void {
    useMonitoringDataStore.setState({ pubsubEntries: [] })
    try { localStorage.removeItem(PUBSUB_STORAGE_KEY) } catch {}
}

export function destroyMonitoringData(): void {
    if (profilerSaveTimeout) { clearTimeout(profilerSaveTimeout); profilerSaveTimeout = null }
    if (pubsubSaveTimeout) { clearTimeout(pubsubSaveTimeout); pubsubSaveTimeout = null }
    saveToStorage(PROFILER_STORAGE_KEY, useMonitoringDataStore.getState().profilerEntries)
    saveToStorage(PUBSUB_STORAGE_KEY, useMonitoringDataStore.getState().pubsubEntries)
}

export function onProfilerEntry(cb: ProfilerCallback): () => void {
    profilerListeners.add(cb)
    return () => profilerListeners.delete(cb)
}

export function onPubsubEntry(cb: PubsubCallback): () => void {
    pubsubListeners.add(cb)
    return () => pubsubListeners.delete(cb)
}
