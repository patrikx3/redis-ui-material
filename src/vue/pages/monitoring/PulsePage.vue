<script setup lang="ts">
import 'uplot/dist/uPlot.min.css'
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useCommonStore } from '../../stores/common'
import { request, onSocketEvent } from '../../stores/socket.service'
import { useMonitoringDataStore } from '../../stores/monitoring-data'

interface MonitorSnapshot {
    timestamp: number
    memory: { used: number; rss: number; peak: number; usedHuman: string; rssHuman: string; peakHuman: string; fragRatio: number }
    stats: { opsPerSec: number; hits: number; misses: number; hitRate: number; inputKbps: number; outputKbps: number; totalCommands: number; expiredKeys: number; evictedKeys: number }
    clients: { connected: number; blocked: number }
    server: { version: string; uptime: number; mode: string }
    keyspace: Record<string, string>
    slowlog: Array<{ id: number; timestamp: number; duration: number; command: string }>
}

const MAX_HISTORY = 120

const i18n = useI18nStore()
const state = useRedisStateStore()
const common = useCommonStore()
const monitorData = useMonitoringDataStore()

const strings = computed(() => i18n.strings)
const current = ref<MonitorSnapshot | null>(null)
const history = ref<MonitorSnapshot[]>([])
const paused = ref(false)
const clientList = ref<any[]>([])
const topKeys = ref<any[]>([])
const isReadonly = ref(false)
const autoRefreshClients = ref(localStorage.getItem('p3xr-monitor-auto-clients') === 'true')
const autoRefreshTopKeys = ref(localStorage.getItem('p3xr-monitor-auto-topkeys') === 'true')
const clientListLoaded = ref(false)
const topKeysLoaded = ref(false)
const slotStats = ref<any[]>([])
const slotStatsMetric = ref('KEY-COUNT')
const slotStatsLoaded = ref(false)
const isCluster = ref(false)

// Chart refs
const memoryChartEl = ref<HTMLDivElement>()
const opsChartEl = ref<HTMLDivElement>()
const clientsChartEl = ref<HTMLDivElement>()
const networkChartEl = ref<HTMLDivElement>()

let intervalId: any
let uPlotLib: any
let memoryPlot: any
let opsPlot: any
let clientsPlot: any
let networkPlot: any
let chartsInitialized = false
let resizeObserver: ResizeObserver | null = null
let themeObserver: MutationObserver | null = null
const unsubFns: Array<() => void> = []

const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
const formatTime = (ms: number) => timeFormatter.format(new Date(ms))

const connName = computed(() => state.connection?.name || 'redis')

const uptimeFormatted = computed(() => {
    if (!current.value) return '-'
    const s = current.value.server.uptime
    const d = Math.floor(s / 86400)
    const h = Math.floor((s % 86400) / 3600)
    const m = Math.floor((s % 3600) / 60)
    return d > 0 ? `${d}d ${h}h ${m}m` : h > 0 ? `${h}h ${m}m` : `${m}m`
})

function formatBytes(bytes: number): string {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

function downloadText(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

// --- Computed properties for sections ---

const serverInfo = computed(() => {
    const info = state.info
    if (!info) return null
    const s = info.server || {}
    const c = info.cpu || {}
    return {
        os: s.os || '',
        port: s.tcp_port || '',
        pid: s.process_id || '',
        configFile: s.config_file || '',
        cpuSys: c.used_cpu_sys || '0',
        cpuUser: c.used_cpu_user || '0',
    }
})

const persistenceInfo = computed(() => {
    const info = state.info
    if (!info?.persistence) return null
    const p = info.persistence
    const lastSaveTs = parseInt(p.rdb_last_save_time, 10)
    const lastSave = lastSaveTs ? new Date(lastSaveTs * 1000).toLocaleString() : 'N/A'
    return {
        rdbLastSave: lastSave,
        rdbStatus: p.rdb_last_bgsave_status || 'N/A',
        rdbChanges: p.rdb_changes_since_last_save ?? 'N/A',
        aofEnabled: p.aof_enabled === '1' ? 'Yes' : 'No',
        aofSize: p.aof_enabled === '1' ? formatBytes(parseInt(p.aof_current_size, 10) || 0) : '',
    }
})

const replicationInfo = computed(() => {
    const info = state.info
    if (!info?.replication) return null
    const r = info.replication
    const result: any = { role: r.role || 'unknown' }
    if (r.role === 'master') {
        result.replicas = r.connected_slaves ?? '0'
    } else if (r.role === 'slave') {
        result.masterHost = r.master_host
        result.masterPort = r.master_port
        result.linkStatus = r.master_link_status
    }
    return result
})

const keyspaceEntries = computed(() => {
    const info = state.info
    if (!info?.keyspace) return []
    return Object.keys(info.keyspace)
        .filter(k => k.startsWith('db'))
        .sort((a, b) => parseInt(a.slice(2), 10) - parseInt(b.slice(2), 10))
        .map(db => {
            const entry = info.keyspace[db]
            return {
                db,
                keys: typeof entry === 'object' ? (entry.keys || '0') : '0',
                expires: typeof entry === 'object' ? (entry.expires || '0') : '0',
            }
        })
})

const modulesList = computed(() => {
    return (state.modules || []).map((m: any) => ({
        name: m.name || 'unknown',
        ver: String(m.ver ?? m.version ?? ''),
    }))
})

// --- Data fetching ---

async function fetchData() {
    try {
        const response = await request({ action: 'monitor/info', payload: {} })
        const data: MonitorSnapshot = response.data
        current.value = data
        history.value.push(data)
        if (history.value.length > MAX_HISTORY) history.value.shift()
        if (chartsInitialized) {
            updateCharts()
        } else if (uPlotLib && history.value.length >= 2) {
            initCharts()
        }
    } catch { /* next tick will retry */ }
}

async function loadClientList() {
    try {
        const response = await request({ action: 'client/list', payload: {} })
        clientList.value = response.data
        clientListLoaded.value = true
    } catch { clientListLoaded.value = true }
}

async function loadTopKeys() {
    try {
        const response = await request({ action: 'memory/top-keys', payload: { topN: 20 } })
        topKeys.value = response.data
        topKeysLoaded.value = true
    } catch { topKeysLoaded.value = true }
}

async function loadSlotStats() {
    try {
        const response = await request({
            action: 'cluster/slot-stats',
            payload: { metric: slotStatsMetric.value, limit: 20 },
        })
        slotStats.value = response.slots || []
        slotStatsLoaded.value = true
    } catch { slotStatsLoaded.value = true; slotStats.value = [] }
}

async function killClient(id: string, event: Event) {
    event.stopPropagation()
    try {
        await common.confirm({
            message: strings.value?.page?.monitor?.confirmKillClient || 'Are you sure to kill this client?',
        })
        await request({ action: 'client/kill', payload: { id } })
        common.toast(strings.value?.page?.monitor?.clientKilled || 'Client killed')
        await loadClientList()
    } catch (e) {
        if (e !== undefined) common.generalHandleError(e)
    }
}

function togglePause() { paused.value = !paused.value }

function toggleAutoRefreshClients() {
    autoRefreshClients.value = !autoRefreshClients.value
    try { localStorage.setItem('p3xr-monitor-auto-clients', String(autoRefreshClients.value)) } catch {}
}

function toggleAutoRefreshTopKeys() {
    autoRefreshTopKeys.value = !autoRefreshTopKeys.value
    try { localStorage.setItem('p3xr-monitor-auto-topkeys', String(autoRefreshTopKeys.value)) } catch {}
}

// --- Export methods ---

function exportOverview() {
    if (!current.value) return
    const c = current.value
    const mon = strings.value?.page?.monitor || {}
    const lines = [
        `${mon.memory || 'Memory'}: ${c.memory.usedHuman}`,
        `${mon.rss || 'RSS'}: ${c.memory.rssHuman}`,
        `${mon.peak || 'Peak'}: ${c.memory.peakHuman}`,
        `${mon.fragmentation || 'Fragmentation'}: ${c.memory.fragRatio}x`,
        `${mon.opsPerSec || 'Ops/sec'}: ${c.stats.opsPerSec}`,
        `${mon.totalCommands || 'Total'}: ${c.stats.totalCommands}`,
        `${mon.clients || 'Clients'}: ${c.clients.connected}`,
        `${mon.blocked || 'Blocked'}: ${c.clients.blocked}`,
        `${mon.hitsMisses || 'Hit Rate'}: ${c.stats.hitRate}%`,
        `${mon.hitsAndMisses || 'Hits / Misses'}: ${c.stats.hits} / ${c.stats.misses}`,
        `${mon.networkIo || 'Network I/O'}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
        `${mon.expired || 'Expired'}: ${c.stats.expiredKeys}`,
        `${mon.evicted || 'Evicted'}: ${c.stats.evictedKeys}`,
    ]
    downloadText(lines.join('\n'), `${connName.value}-overview.txt`)
}

function exportServerInfo() {
    const s = serverInfo.value
    if (!s) return
    const mon = strings.value?.page?.monitor || {}
    const lines = [
        `${mon.os || 'OS'}: ${s.os}`,
        `${mon.port || 'Port'}: ${s.port}`,
        `${mon.pid || 'Process ID'}: ${s.pid}`,
        `${mon.configFile || 'Config File'}: ${s.configFile}`,
        `${mon.cpuSys || 'System'} CPU: ${s.cpuSys}`,
        `${mon.cpuUser || 'User'} CPU: ${s.cpuUser}`,
    ]
    downloadText(lines.join('\n'), `${connName.value}-server-info.txt`)
}

function exportPersistence() {
    const p = persistenceInfo.value
    if (!p) return
    const mon = strings.value?.page?.monitor || {}
    const lines = [
        `${mon.rdbLastSave || 'RDB Last Save'}: ${p.rdbLastSave}`,
        `${mon.rdbStatus || 'RDB Status'}: ${p.rdbStatus}`,
        `${mon.rdbChanges || 'Changes Since Last Save'}: ${p.rdbChanges}`,
        `${mon.aofEnabled || 'AOF Enabled'}: ${p.aofEnabled}`,
    ]
    if (p.aofSize) lines.push(`${mon.aofSize || 'AOF Size'}: ${p.aofSize}`)
    downloadText(lines.join('\n'), `${connName.value}-persistence.txt`)
}

function exportReplication() {
    const r = replicationInfo.value
    if (!r) return
    const mon = strings.value?.page?.monitor || {}
    const lines = [`${mon.role || 'Role'}: ${r.role}`]
    if (r.replicas !== undefined) lines.push(`${mon.replicas || 'Connected Replicas'}: ${r.replicas}`)
    if (r.masterHost) lines.push(`${mon.masterHost || 'Master Host'}: ${r.masterHost}:${r.masterPort}`)
    if (r.linkStatus) lines.push(`${mon.linkStatus || 'Link Status'}: ${r.linkStatus}`)
    downloadText(lines.join('\n'), `${connName.value}-replication.txt`)
}

function exportKeyspace() {
    const entries = keyspaceEntries.value
    if (entries.length === 0) return
    const mon = strings.value?.page?.monitor || {}
    const lines = entries.map(e => `${e.db}: ${mon.keys || 'Keys'}: ${e.keys}, ${mon.expires || 'Expires'}: ${e.expires}`)
    downloadText(lines.join('\n'), `${connName.value}-keyspace.txt`)
}

function exportModules() {
    const mods = modulesList.value
    const mon = strings.value?.page?.monitor || {}
    if (mods.length === 0) {
        downloadText(mon.noModules || 'No modules loaded', `${connName.value}-modules.txt`)
        return
    }
    const lines = mods.map(m => `${m.name} v${m.ver}`)
    downloadText(lines.join('\n'), `${connName.value}-modules.txt`)
}

function exportChart(chartEl: HTMLDivElement | undefined, name: string) {
    const canvas = chartEl?.querySelector('canvas') as HTMLCanvasElement
    if (!canvas) return
    const exportCanvas = document.createElement('canvas')
    exportCanvas.width = canvas.width
    exportCanvas.height = canvas.height
    const ctx = exportCanvas.getContext('2d')!
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDark ? '#1e1e1e' : '#ffffff')
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height)
    ctx.drawImage(canvas, 0, 0)
    const url = exportCanvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = `${connName.value}-${name}.png`
    a.click()
}

function exportSlowLog() {
    if (!current.value) return
    const lines = current.value.slowlog.map(e => `${e.duration}\u00B5s ${e.command}`)
    downloadText(lines.join('\n'), `${connName.value}-slowlog.txt`)
}

function exportClientList() {
    const lines = clientList.value.map(c => `${c.addr} ${c.name || ''} db${c.db} ${c.cmd} idle:${c.idle}s`)
    downloadText(lines.join('\n'), `${connName.value}-clients.txt`)
}

function exportTopKeys() {
    const lines = topKeys.value.map((e: any, i: number) => `#${i + 1} ${e.key} ${formatBytes(e.bytes)}`)
    downloadText(lines.join('\n'), `${connName.value}-topkeys.txt`)
}

// --- Charts ---

function getChartColors() {
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    const style = getComputedStyle(document.body)
    const primary = style.getPropertyValue('--p3xr-btn-primary-bg').trim()
    const accent = style.getPropertyValue('--p3xr-btn-accent-bg').trim()
    const warn = style.getPropertyValue('--p3xr-btn-warn-bg').trim()
    return {
        primary: primary || (isDark ? '#90caf9' : '#1976d2'),
        accent: accent || (isDark ? '#ce93d8' : '#9c27b0'),
        warn: warn || (isDark ? '#ef9a9a' : '#f44336'),
        text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
        grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    }
}

function buildChartData() {
    return {
        timestamps: history.value.map(h => h.timestamp / 1000),
        memUsed: history.value.map(h => h.memory.used / (1024 * 1024)),
        memRss: history.value.map(h => h.memory.rss / (1024 * 1024)),
        ops: history.value.map(h => h.stats.opsPerSec),
        connected: history.value.map(h => h.clients.connected),
        blocked: history.value.map(h => h.clients.blocked),
        netIn: history.value.map(h => h.stats.inputKbps),
        netOut: history.value.map(h => h.stats.outputKbps),
    }
}

function getChartWidth(el: HTMLDivElement | undefined): number {
    return el?.offsetWidth || 500
}

function createOpts(width: number, seriesConfig: any[]): any {
    const colors = getChartColors()
    return {
        width,
        height: 180,
        cursor: { show: true, drag: { x: false, y: false } },
        legend: { show: true, live: false },
        scales: { x: { time: true } },
        axes: [
            {
                stroke: colors.text,
                grid: { stroke: colors.grid, width: 1 },
                ticks: { stroke: colors.grid },
                font: '11px Roboto',
                values: (_: any, ticks: number[]) => ticks.map(t => formatTime(t * 1000)),
            },
            {
                stroke: colors.text,
                grid: { stroke: colors.grid, width: 1 },
                ticks: { stroke: colors.grid },
                font: '11px Roboto Mono',
                size: 55,
            },
        ],
        series: [
            { label: strings.value?.label?.time || 'Time', value: (_: any, rawValue: number) => rawValue ? formatTime(rawValue * 1000) : '' },
            ...seriesConfig,
        ],
    }
}

function initCharts() {
    if (!uPlotLib || chartsInitialized) return

    const colors = getChartColors()
    const data = buildChartData()

    const memEl = memoryChartEl.value
    const opsEl = opsChartEl.value
    const cliEl = clientsChartEl.value
    const netEl = networkChartEl.value

    if (!memEl || !opsEl || !cliEl || !netEl) return

    const s = strings.value?.page?.monitor || {}

    memoryPlot = new uPlotLib(
        createOpts(getChartWidth(memEl), [
            { label: s.memory || 'Memory', stroke: colors.primary, width: 2, fill: colors.primary + '15' },
            { label: 'RSS', stroke: colors.accent, width: 2 },
        ]),
        [data.timestamps, data.memUsed, data.memRss],
        memEl,
    )

    opsPlot = new uPlotLib(
        createOpts(getChartWidth(opsEl), [
            { label: s.opsPerSec || 'Ops/s', stroke: colors.primary, width: 2, fill: colors.primary + '20' },
        ]),
        [data.timestamps, data.ops],
        opsEl,
    )

    clientsPlot = new uPlotLib(
        createOpts(getChartWidth(cliEl), [
            { label: s.clients || 'Connected', stroke: colors.primary, width: 2 },
            { label: s.blocked || 'Blocked', stroke: colors.warn, width: 2 },
        ]),
        [data.timestamps, data.connected, data.blocked],
        cliEl,
    )

    networkPlot = new uPlotLib(
        createOpts(getChartWidth(netEl), [
            { label: '\u2193 In', stroke: colors.primary, width: 2, fill: colors.primary + '15' },
            { label: '\u2191 Out', stroke: colors.accent, width: 2 },
        ]),
        [data.timestamps, data.netIn, data.netOut],
        netEl,
    )

    chartsInitialized = true

    let resizeTimer: any
    resizeObserver = new ResizeObserver(() => {
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(() => {
            const mw = getChartWidth(memEl)
            const ow = getChartWidth(opsEl)
            const cw = getChartWidth(cliEl)
            const nw = getChartWidth(netEl)
            if (mw > 0) memoryPlot?.setSize({ width: mw, height: 180 })
            if (ow > 0) opsPlot?.setSize({ width: ow, height: 180 })
            if (cw > 0) clientsPlot?.setSize({ width: cw, height: 180 })
            if (nw > 0) networkPlot?.setSize({ width: nw, height: 180 })
        }, 50)
    })
    resizeObserver.observe(memEl)
    resizeObserver.observe(opsEl)
    resizeObserver.observe(cliEl)
    resizeObserver.observe(netEl)
}

function reinitCharts() {
    memoryPlot?.destroy()
    opsPlot?.destroy()
    clientsPlot?.destroy()
    networkPlot?.destroy()
    chartsInitialized = false
    if (history.value.length >= 2) initCharts()
}

function updateCharts() {
    if (!chartsInitialized) return
    const data = buildChartData()
    memoryPlot?.setData([data.timestamps, data.memUsed, data.memRss])
    opsPlot?.setData([data.timestamps, data.ops])
    clientsPlot?.setData([data.timestamps, data.connected, data.blocked])
    networkPlot?.setData([data.timestamps, data.netIn, data.netOut])
}

async function loadUPlot() {
    const uPlotModule = await import('uplot')
    uPlotLib = uPlotModule.default
    if (history.value.length >= 2) initCharts()
}

// --- Export All helpers (chart rendering for ZIP/PDF) ---

function renderLineChart(
    timestamps: number[],
    series: Array<{ label: string; color: string; values: number[]; fill?: boolean }>,
    colors: ReturnType<typeof getChartColors>,
): HTMLCanvasElement {
    const dpr = 2
    const width = 900, height = 260
    const padTop = 32, padBottom = 40, padLeft = 60, padRight = 16, legendH = 20
    const chartW = width - padLeft - padRight, chartH = height - padTop - padBottom - legendH
    const canvas = document.createElement('canvas')
    canvas.width = width * dpr; canvas.height = height * dpr
    const ctx = canvas.getContext('2d')!
    ctx.scale(dpr, dpr)
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDark ? '#1e1e1e' : '#ffffff')
    ctx.fillRect(0, 0, width, height)
    const n = timestamps.length
    if (n < 2) return canvas
    let yMin = Infinity, yMax = -Infinity
    for (const s of series) { for (const v of s.values) { if (v < yMin) yMin = v; if (v > yMax) yMax = v } }
    if (yMin === yMax) { yMin -= 1; yMax += 1 }
    const yRange = yMax - yMin, tMin = timestamps[0], tMax = timestamps[n - 1], tRange = tMax - tMin || 1
    const toX = (t: number) => padLeft + ((t - tMin) / tRange) * chartW
    const toY = (v: number) => padTop + chartH - ((v - yMin) / yRange) * chartH
    ctx.strokeStyle = colors.grid; ctx.lineWidth = 1
    for (let i = 0; i <= 5; i++) {
        const gy = padTop + (chartH / 5) * i
        ctx.beginPath(); ctx.moveTo(padLeft, gy); ctx.lineTo(padLeft + chartW, gy); ctx.stroke()
        const val = yMax - (yRange / 5) * i
        ctx.fillStyle = colors.text; ctx.font = '10px Roboto Mono, monospace'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
        ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val.toFixed(1), padLeft - 6, gy)
    }
    const labelCount = Math.min(6, n)
    ctx.font = '10px Roboto, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = colors.text
    for (let i = 0; i < labelCount; i++) {
        const idx = Math.round((i / (labelCount - 1)) * (n - 1)), t = timestamps[idx], d = new Date(t * 1000)
        ctx.fillText(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`, toX(t), padTop + chartH + 6)
    }
    for (const s of series) {
        ctx.strokeStyle = s.color; ctx.lineWidth = 2; ctx.lineJoin = 'round'; ctx.beginPath()
        for (let i = 0; i < n; i++) { const x = toX(timestamps[i]), y = toY(s.values[i]); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y) }
        ctx.stroke()
        if (s.fill) {
            ctx.fillStyle = s.color + '20'; ctx.beginPath(); ctx.moveTo(toX(timestamps[0]), toY(s.values[0]))
            for (let i = 1; i < n; i++) ctx.lineTo(toX(timestamps[i]), toY(s.values[i]))
            ctx.lineTo(toX(timestamps[n - 1]), padTop + chartH); ctx.lineTo(toX(timestamps[0]), padTop + chartH); ctx.closePath(); ctx.fill()
        }
    }
    let lx = padLeft; const ly = height - legendH + 4
    ctx.font = '11px Roboto, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'
    for (const s of series) { ctx.fillStyle = s.color; ctx.fillRect(lx, ly - 4, 12, 8); ctx.fillStyle = colors.text; ctx.fillText(s.label, lx + 16, ly); lx += ctx.measureText(s.label).width + 32 }
    return canvas
}

function renderBarChartCanvas(items: Array<{ label: string; value: number }>): HTMLCanvasElement | null {
    if (items.length === 0) return null
    const colors = getChartColors()
    const isDark = colors.text.includes('255')
    const barColors = [colors.primary, colors.accent, colors.warn, isDark ? '#ffb74d' : '#ff9800', isDark ? '#81c784' : '#4caf50', isDark ? '#4dd0e1' : '#00bcd4', isDark ? '#a1887f' : '#795548', isDark ? '#90a4ae' : '#607d8b']
    const dpr = 2, width = 800, barHeight = 24, labelWidth = 120, valueWidth = 80
    const chartLeft = labelWidth + 8, chartRight = width - valueWidth - 8, chartWidth = chartRight - chartLeft, topPad = 8
    const height = topPad + items.length * (barHeight + 4) + 8
    const canvas = document.createElement('canvas')
    canvas.width = width * dpr; canvas.height = height * dpr
    const ctx = canvas.getContext('2d')!; ctx.scale(dpr, dpr)
    const bgIsDark = document.body.classList.contains('p3xr-theme-dark')
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (bgIsDark ? '#1e1e1e' : '#ffffff')
    ctx.fillRect(0, 0, width, height)
    const maxVal = Math.max(...items.map(i => i.value), 1)
    items.forEach((item, i) => {
        const y = topPad + i * (barHeight + 4)
        ctx.fillStyle = colors.text; ctx.font = '12px Roboto, sans-serif'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
        ctx.fillText(item.label.length > 15 ? item.label.substring(0, 14) + '\u2026' : item.label, labelWidth, y + barHeight / 2)
        ctx.fillStyle = colors.grid; ctx.fillRect(chartLeft, y, chartWidth, barHeight)
        ctx.fillStyle = barColors[i % barColors.length]; ctx.fillRect(chartLeft, y, (item.value / maxVal) * chartWidth, barHeight)
        ctx.fillStyle = colors.text; ctx.font = '11px Roboto Mono, monospace'; ctx.textAlign = 'left'
        ctx.fillText(formatBytes(item.value), chartRight + 8, y + barHeight / 2)
    })
    return canvas
}

function renderPulseChartsForExport(): Array<{ label: string; canvas: HTMLCanvasElement }> {
    const colors = getChartColors()
    const s = strings.value?.page?.monitor || {}
    let data: ReturnType<typeof buildChartData>
    if (history.value.length >= 2) { data = buildChartData() }
    else if (current.value) {
        const c = current.value, now = Date.now() / 1000
        data = { timestamps: [now - 1, now], memUsed: [c.memory.used / (1024 * 1024), c.memory.used / (1024 * 1024)], memRss: [c.memory.rss / (1024 * 1024), c.memory.rss / (1024 * 1024)], ops: [c.stats.opsPerSec, c.stats.opsPerSec], connected: [c.clients.connected, c.clients.connected], blocked: [c.clients.blocked, c.clients.blocked], netIn: [c.stats.inputKbps, c.stats.inputKbps], netOut: [c.stats.outputKbps, c.stats.outputKbps] }
    } else { return [] }
    return [
        { label: (s.memory || 'Memory') + ' (MB)', series: [{ label: s.memory || 'Memory', color: colors.primary, values: data.memUsed, fill: true }, { label: 'RSS', color: colors.accent, values: data.memRss }] },
        { label: s.opsPerSec || 'Ops/sec', series: [{ label: s.opsPerSec || 'Ops/s', color: colors.primary, values: data.ops, fill: true }] },
        { label: s.clients || 'Clients', series: [{ label: s.clients || 'Connected', color: colors.primary, values: data.connected }, { label: s.blocked || 'Blocked', color: colors.warn, values: data.blocked }] },
        { label: (s.networkIo || 'Network I/O') + ' (KB/s)', series: [{ label: '\u2193 In', color: colors.primary, values: data.netIn, fill: true }, { label: '\u2191 Out', color: colors.accent, values: data.netOut }] },
    ].map(config => ({ label: config.label, canvas: renderLineChart(data.timestamps, config.series, colors) }))
}

async function stitchCharts(items: Array<{ label: string; canvas: HTMLCanvasElement }>): Promise<Blob | null> {
    const padding = 32, labelHeight = 60, chartSpacing = 40
    const width = Math.max(2400, ...items.map(i => i.canvas.width))
    let totalHeight = padding
    for (const item of items) { totalHeight += labelHeight + item.canvas.height * (width / item.canvas.width) + chartSpacing }
    totalHeight += padding
    const stitched = document.createElement('canvas'); stitched.width = width; stitched.height = totalHeight
    const ctx = stitched.getContext('2d')!
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    const bgColor = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDark ? '#1e1e1e' : '#ffffff')
    const colors = getChartColors()
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, width, totalHeight)
    let y = padding
    for (const item of items) {
        ctx.fillStyle = colors.text; ctx.font = 'bold 28px Roboto, sans-serif'; ctx.textAlign = 'left'; ctx.textBaseline = 'top'; ctx.fillText(item.label, padding, y); y += labelHeight
        const drawW = width - padding * 2, drawH = item.canvas.height * (drawW / item.canvas.width)
        ctx.drawImage(item.canvas, padding, y, drawW, drawH); y += drawH + chartSpacing
    }
    return new Promise(resolve => stitched.toBlob(b => resolve(b), 'image/png'))
}

async function generatePdf(sections: string[], charts: Array<{ label: string; canvas: HTMLCanvasElement }>, tailSections: string[] = []): Promise<Blob | null> {
    const { jsPDF } = await import('jspdf')
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    const bgColor = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDark ? '#1e1e1e' : '#ffffff')
    const textColor = isDark ? '#e0e0e0' : '#212121'
    const headerColor = isDark ? '#90caf9' : '#1565c0'
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
    const pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight(), margin = 12, contentW = pageW - margin * 2
    let y = margin
    const fillBg = () => { pdf.setFillColor(bgColor); pdf.rect(0, 0, pageW, pageH, 'F') }
    fillBg()
    const checkPage = (needed: number) => { if (y + needed > pageH - margin) { pdf.addPage(); fillBg(); y = margin } }
    for (const line of sections) {
        if (line.startsWith('====')) continue
        const isSectionTitle = ['PULSE', 'PROFILER', 'PUBSUB', 'ANALYSIS'].includes(line.trim())
        if (isSectionTitle) { checkPage(14); y += 4; pdf.setFontSize(14); pdf.setTextColor(headerColor); pdf.text(line.trim(), margin, y); y += 8; continue }
        if (line.startsWith('---') && line.endsWith('---')) { checkPage(8); const title = line.replace(/^-+\s*/, '').replace(/\s*-+$/, ''); y += 2; pdf.setFontSize(10); pdf.setTextColor(headerColor); pdf.text(title, margin, y); y += 5; continue }
        if (line === '') { y += 2; continue }
        checkPage(4); pdf.setTextColor(textColor); pdf.setFontSize(8)
        for (const wl of pdf.splitTextToSize(line, contentW)) { checkPage(4); pdf.text(wl, margin, y); y += 3.5 }
    }
    for (const chart of charts) {
        pdf.addPage(); fillBg(); y = margin
        pdf.setFontSize(12); pdf.setTextColor(headerColor); pdf.text(chart.label, margin, y); y += 8
        const imgData = chart.canvas.toDataURL('image/png'), ratio = chart.canvas.height / chart.canvas.width
        const imgW = contentW, imgH = Math.min(imgW * ratio, pageH - y - margin)
        pdf.addImage(imgData, 'PNG', margin, y, imgH / ratio > contentW ? contentW : imgH / ratio, imgH); y += imgH
    }
    if (tailSections.length > 0 && charts.length > 0) { pdf.addPage(); fillBg(); y = margin }
    for (const line of tailSections) {
        if (line.startsWith('====')) continue
        if (['PROFILER', 'PUBSUB'].includes(line.trim())) { checkPage(14); y += 4; pdf.setFontSize(14); pdf.setTextColor(headerColor); pdf.text(line.trim(), margin, y); y += 8; continue }
        if (line === '') { y += 2; continue }
        checkPage(4); pdf.setTextColor(textColor); pdf.setFontSize(8)
        for (const wl of pdf.splitTextToSize(line, contentW)) { checkPage(4); pdf.text(wl, margin, y); y += 3.5 }
    }
    return pdf.output('blob') as unknown as Blob
}

// --- Export All ---
async function exportAll() {
    if (!current.value) return
    try {
        const JSZip = (await import('jszip')).default
        const zip = new JSZip()
        const c = current.value
        const sections: string[] = []

        const mon = strings.value?.page?.monitor || {}
        const a = strings.value?.page?.analysis || {}
        sections.push(
            `============================`, `  PULSE`, `============================`, ``,
            `--- ${mon.title || 'Monitoring'} ---`,
            `Redis ${c.server.version} \u00B7 ${c.server.mode} \u00B7 Uptime: ${uptimeFormatted.value}`,
            `${mon.memory || 'Memory'}: ${c.memory.usedHuman}`,
            `${mon.rss || 'RSS'}: ${c.memory.rssHuman}`,
            `${mon.peak || 'Peak'}: ${c.memory.peakHuman}`,
            `${mon.fragmentation || 'Fragmentation'}: ${c.memory.fragRatio}x`,
            `${mon.opsPerSec || 'Ops/sec'}: ${c.stats.opsPerSec}`,
            `${mon.totalCommands || 'Total'}: ${c.stats.totalCommands}`,
            `${mon.clients || 'Clients'}: ${c.clients.connected}`,
            `${mon.blocked || 'Blocked'}: ${c.clients.blocked}`,
            `${mon.hitsMisses || 'Hit Rate'}: ${c.stats.hitRate}%`,
            `${mon.hitsAndMisses || 'Hits / Misses'}: ${c.stats.hits} / ${c.stats.misses}`,
            `${mon.networkIo || 'Network I/O'}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
            `${mon.expired || 'Expired'}: ${c.stats.expiredKeys}`,
            `${mon.evicted || 'Evicted'}: ${c.stats.evictedKeys}`,
        )

        const si = serverInfo.value
        if (si) {
            sections.push(``, `--- ${mon.serverInfo || 'Server Info'} ---`)
            sections.push(`${mon.os || 'OS'}: ${si.os}`, `${mon.port || 'Port'}: ${si.port}`, `${mon.pid || 'Process ID'}: ${si.pid}`)
            if (si.configFile) sections.push(`${mon.configFile || 'Config File'}: ${si.configFile}`)
            sections.push(`${mon.cpuSys || 'System'} CPU: ${si.cpuSys}`, `${mon.cpuUser || 'User'} CPU: ${si.cpuUser}`)
        }
        const pi = persistenceInfo.value
        if (pi) {
            sections.push(``, `--- ${mon.persistence || 'Persistence'} ---`)
            sections.push(`${mon.rdbLastSave || 'RDB Last Save'}: ${pi.rdbLastSave}`, `${mon.rdbStatus || 'RDB Status'}: ${pi.rdbStatus}`)
            sections.push(`${mon.rdbChanges || 'Changes Since Last Save'}: ${pi.rdbChanges}`, `${mon.aofEnabled || 'AOF Enabled'}: ${pi.aofEnabled}`)
            if (pi.aofSize) sections.push(`${mon.aofSize || 'AOF Size'}: ${pi.aofSize}`)
        }
        const ri = replicationInfo.value
        if (ri) {
            sections.push(``, `--- ${mon.replication || 'Replication'} ---`)
            sections.push(`${mon.role || 'Role'}: ${ri.role}`)
            if (ri.replicas !== undefined) sections.push(`${mon.replicas || 'Connected Replicas'}: ${ri.replicas}`)
            if (ri.masterHost) sections.push(`${mon.masterHost || 'Master Host'}: ${ri.masterHost}:${ri.masterPort}`)
            if (ri.linkStatus) sections.push(`${mon.linkStatus || 'Link Status'}: ${ri.linkStatus}`)
        }
        const ks = keyspaceEntries.value
        if (ks.length > 0) {
            sections.push(``, `--- ${mon.keyspace || 'Keyspace'} ---`)
            sections.push(...ks.map(e => `${e.db}: ${mon.keys || 'Keys'}: ${e.keys}, ${mon.expires || 'Expires'}: ${e.expires}`))
        }
        const mods = modulesList.value
        if (mods.length > 0) {
            sections.push(``, `--- ${mon.modules || 'Loaded Modules'} ---`)
            sections.push(...mods.map(m => `${m.name} v${m.ver}`))
        } else {
            sections.push(``, `--- ${mon.modules || 'Loaded Modules'} ---`, mon.noModules || 'No modules loaded')
        }
        if (c.slowlog.length > 0) {
            sections.push(``, `--- ${mon.slowLog || 'Slow Log'} ---`)
            sections.push(...c.slowlog.map(e => `${e.duration}\u00B5s ${e.command}`))
        }
        if (clientList.value.length > 0) {
            sections.push(``, `--- ${mon.clientList || 'Client List'} ---`)
            sections.push(...clientList.value.map(cl => `${cl.addr} ${cl.name || ''} db${cl.db} ${cl.cmd} idle:${cl.idle}s`))
        }
        if (topKeys.value.length > 0) {
            sections.push(``, `--- ${mon.topKeys || 'Top Keys by Memory'} ---`)
            sections.push(...topKeys.value.map((e: any, i: number) => `#${i + 1} ${e.key} ${formatBytes(e.bytes)}`))
        }

        // Analysis
        let analysisChartItems: Array<{ name: string; items: Array<{ label: string; value: number }> }> = []
        try {
            const resp = await request({ action: 'memory/analysis', payload: { topN: 20, maxScanKeys: 5000 } })
            const d = resp.data
            if (d) {
                const m = d.memoryInfo
                const exp = d.expirationOverview
                const typeEntries = Object.keys(d.typeDistribution || {}).map((t: string) => ({
                    type: t, count: d.typeDistribution[t], bytes: d.typeMemory?.[t] || 0,
                })).sort((a: any, b: any) => b.bytes - a.bytes)

                sections.push(``, ``, `============================`, `  ANALYSIS`, `============================`)
                sections.push(``, `--- ${a.keysScanned || 'Keys Scanned'} ---`, `${a.keysScanned || 'Keys Scanned'}: ${d.totalScanned} / ${d.dbSize}`)
                sections.push(``, `--- ${a.memoryBreakdown || 'Memory Breakdown'} ---`)
                sections.push(`${a.totalMemory || 'Total'}: ${m.usedHuman}`, `${a.rssMemory || 'RSS'}: ${m.rssHuman}`, `${a.peakMemory || 'Peak'}: ${m.peakHuman}`)
                sections.push(`${a.overheadMemory || 'Overhead'}: ${formatBytes(m.overhead)}`, `${a.datasetMemory || 'Dataset'}: ${formatBytes(m.dataset)}`)
                sections.push(`${a.luaMemory || 'Lua'}: ${formatBytes(m.lua)}`, `${a.fragmentation || 'Fragmentation'}: ${m.fragRatio}x`, `${a.allocator || 'Allocator'}: ${m.allocator}`)
                sections.push(``, `--- ${a.typeDistribution || 'Type Distribution'} ---`)
                sections.push(...typeEntries.map((t: any) => `${t.type}: ${t.count} ${a.keyCount || 'keys'}, ${formatBytes(t.bytes)}`))
                if (d.prefixMemory?.length > 0) {
                    sections.push(``, `--- ${a.prefixMemory || 'Memory by Prefix'} ---`)
                    sections.push(...d.prefixMemory.map((p: any, i: number) => `#${i + 1} ${p.prefix} \u2014 ${p.keyCount} ${a.keyCount || 'keys'}, ${formatBytes(p.totalBytes)}`))
                }
                sections.push(``, `--- ${a.expirationOverview || 'Key Expiration'} ---`)
                sections.push(`${a.withTTL || 'With TTL'}: ${exp.withTTL}`, `${a.persistent || 'Persistent'}: ${exp.persistent}`, `${a.avgTTL || 'Average TTL'}: ${exp.avgTTL}s`)

                analysisChartItems = [
                    { name: a.typeDistribution || 'Type Distribution', items: typeEntries.map((t: any) => ({ label: t.type, value: t.bytes })) },
                    { name: a.prefixMemory || 'Memory by Prefix', items: (d.prefixMemory || []).slice(0, 20).map((p: any) => ({ label: p.prefix, value: p.totalBytes })) },
                ]
            }
        } catch { /* analysis optional */ }

        // Profiler + PubSub tail
        const sanitize = (s: string) => s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
        const tailSections: string[] = []
        if (monitorData.profilerEntries.length > 0) {
            tailSections.push(``, ``, `============================`, `  PROFILER`, `============================`, ``)
            tailSections.push(...monitorData.profilerEntries.map(
                e => sanitize(`${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`)
            ))
        }
        if (monitorData.pubsubEntries.length > 0) {
            tailSections.push(``, ``, `============================`, `  PUBSUB`, `============================`, ``)
            tailSections.push(...monitorData.pubsubEntries.map(
                e => sanitize(`${e.fullTimestamp} ${e.channel} ${e.message}`)
            ))
        }

        const textContent = [...sections, ...tailSections].join('\n')
        const textBytes = new TextEncoder().encode(textContent)
        const bom = new Uint8Array([0xEF, 0xBB, 0xBF])
        const txtWithBom = new Uint8Array(bom.length + textBytes.length)
        txtWithBom.set(bom)
        txtWithBom.set(textBytes, bom.length)
        zip.file('monitoring.txt', txtWithBom)

        // Collect all chart canvases and stitch into 1 tall PNG
        const allCanvases: Array<{ label: string; canvas: HTMLCanvasElement }> = []
        allCanvases.push(...renderPulseChartsForExport())
        for (const ci of analysisChartItems) {
            if (ci.items.length === 0) continue
            const canvas = renderBarChartCanvas(ci.items)
            if (canvas) allCanvases.push({ label: ci.name, canvas })
        }
        if (allCanvases.length > 0) {
            const blob = await stitchCharts(allCanvases)
            if (blob) zip.file('charts.png', blob)
        }

        // Generate PDF with text + charts
        try {
            const pdfBlob = await generatePdf(sections, allCanvases, tailSections)
            if (pdfBlob) zip.file('monitoring.pdf', pdfBlob)
        } catch { /* pdf optional */ }

        const content = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(content)
        const link = document.createElement('a')
        link.href = url
        link.download = `${connName.value}-monitoring.zip`
        link.click()
        URL.revokeObjectURL(url)
    } catch (e) {
        common.generalHandleError(e)
    }
}

// --- Lifecycle ---

onMounted(() => {
    isReadonly.value = state.connection?.readonly === true
    isCluster.value = state.connection?.cluster === true
    fetchData()
    loadClientList()
    loadTopKeys()

    // Reload all data on connection change
    unsubFns.push(onSocketEvent('connections', () => {
        isReadonly.value = state.connection?.readonly === true
        history.value = []
        chartsInitialized = false
        memoryPlot?.destroy()
        opsPlot?.destroy()
        clientsPlot?.destroy()
        networkPlot?.destroy()
        fetchData()
        loadClientList()
        loadTopKeys()
    }))

    intervalId = setInterval(() => {
        if (!paused.value) {
            fetchData()
            if (autoRefreshClients.value) loadClientList()
            if (autoRefreshTopKeys.value) loadTopKeys()
        }
    }, 2000)

    // Theme change re-init
    themeObserver = new MutationObserver(() => {
        if (chartsInitialized) setTimeout(() => reinitCharts(), 100)
    })
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // Language change re-init
    let prevLang = i18n.currentLang
    const langCheckInterval = setInterval(() => {
        if (i18n.currentLang !== prevLang) {
            prevLang = i18n.currentLang
            if (chartsInitialized) setTimeout(() => reinitCharts(), 100)
        }
    }, 500)
    unsubFns.push(() => clearInterval(langCheckInterval))

    nextTick(() => setTimeout(() => loadUPlot(), 500))
})

onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
    unsubFns.forEach(fn => fn())
    themeObserver?.disconnect()
    resizeObserver?.disconnect()
    memoryPlot?.destroy()
    opsPlot?.destroy()
    clientsPlot?.destroy()
    networkPlot?.destroy()
})
</script>

<template>
    <div v-if="!current" class="p3xr-monitoring-loading">
        <v-icon>mdi-timer-sand</v-icon>
        <span>{{ strings?.label?.loading || 'Loading...' }}</span>
    </div>

    <div v-if="current">
        <!-- Overview -->
        <P3xrAccordion :title="strings?.page?.monitor?.title || 'Monitoring'" accordion-key="monitor-overview">
            <template #actions>
                <P3xrButton
                    @click="togglePause(); $event.stopPropagation()"
                    :label="paused ? (strings?.intention?.resume || 'Resume') : (strings?.intention?.pause || 'Pause')"
                    :icon="paused ? 'mdi-play' : 'mdi-pause'"
                />
                <P3xrButton
                    @click="exportOverview(); $event.stopPropagation()"
                    :label="strings?.intention?.export || 'Export'"
                    icon="mdi-download"
                />
                <P3xrButton
                    @click="exportAll(); $event.stopPropagation()"
                    :label="strings?.page?.analysis?.exportAll || 'Export All'"
                    icon="mdi-archive"
                />
            </template>
            <v-list density="compact" class="pa-0">
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">Redis {{ current.server.version }} &middot; {{ current.server.mode }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ uptimeFormatted }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.memory || 'Memory' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.memory.usedHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.rss || 'RSS' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.memory.rssHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.peak || 'Peak' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.memory.peakHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.fragmentation || 'Fragmentation' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.memory.fragRatio }}x</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.opsPerSec || 'Ops/sec' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.opsPerSec }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.totalCommands || 'Total Commands' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.totalCommands }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.clients || 'Clients' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.clients.connected }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.blocked || 'Blocked' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.clients.blocked }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.hitsMisses || 'Hit Rate' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.hitRate }}%</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.hitsAndMisses || 'Hits / Misses' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.hits }} / {{ current.stats.misses }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.networkIo || 'Network I/O' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.inputKbps.toFixed(1) }} / {{ current.stats.outputKbps.toFixed(1) }} KB/s</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.expired || 'Expired' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.expiredKeys }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ strings?.page?.monitor?.evicted || 'Evicted' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ current.stats.evictedKeys }}</div>
                    </div>
                </v-list-item>
            </v-list>
        </P3xrAccordion>

        <!-- Server Info -->
        <template v-if="serverInfo">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.serverInfo || 'Server Info'" accordion-key="monitor-server-info">
                <template #actions>
                    <P3xrButton @click="exportServerInfo(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
                </template>
                <v-list density="compact" class="pa-0">
                    <template v-if="serverInfo.os">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.os || 'OS' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.os }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                    <template v-if="serverInfo.port">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.port || 'Port' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.port }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                    <template v-if="serverInfo.pid">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.pid || 'Process ID' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.pid }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                    <template v-if="serverInfo.configFile">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.configFile || 'Config File' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.configFile }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.cpuSys || 'System' }} CPU</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.cpuSys }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.cpuUser || 'User' }} CPU</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ serverInfo.cpuUser }}</div>
                        </div>
                    </v-list-item>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Persistence -->
        <template v-if="persistenceInfo">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.persistence || 'Persistence'" accordion-key="monitor-persistence">
                <template #actions>
                    <P3xrButton @click="exportPersistence(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
                </template>
                <v-list density="compact" class="pa-0">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.rdbLastSave || 'RDB Last Save' }}</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ persistenceInfo.rdbLastSave }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.rdbStatus || 'RDB Status' }}</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ persistenceInfo.rdbStatus }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.rdbChanges || 'Changes Since Last Save' }}</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ persistenceInfo.rdbChanges }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.aofEnabled || 'AOF Enabled' }}</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ persistenceInfo.aofEnabled }}</div>
                        </div>
                    </v-list-item>
                    <template v-if="persistenceInfo.aofSize">
                        <v-divider />
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.aofSize || 'AOF Size' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ persistenceInfo.aofSize }}</div>
                            </div>
                        </v-list-item>
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Replication -->
        <template v-if="replicationInfo">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.replication || 'Replication'" accordion-key="monitor-replication">
                <template #actions>
                    <P3xrButton @click="exportReplication(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
                </template>
                <v-list density="compact" class="pa-0">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ strings?.page?.monitor?.role || 'Role' }}</div>
                            <div class="p3xr-pair-value p3xr-mono">{{ replicationInfo.role }}</div>
                        </div>
                    </v-list-item>
                    <template v-if="replicationInfo.replicas !== undefined">
                        <v-divider />
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.replicas || 'Connected Replicas' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ replicationInfo.replicas }}</div>
                            </div>
                        </v-list-item>
                    </template>
                    <template v-if="replicationInfo.masterHost">
                        <v-divider />
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.masterHost || 'Master Host' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ replicationInfo.masterHost }}:{{ replicationInfo.masterPort }}</div>
                            </div>
                        </v-list-item>
                    </template>
                    <template v-if="replicationInfo.linkStatus">
                        <v-divider />
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ strings?.page?.monitor?.linkStatus || 'Link Status' }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ replicationInfo.linkStatus }}</div>
                            </div>
                        </v-list-item>
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Keyspace -->
        <template v-if="keyspaceEntries.length > 0">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.keyspace || 'Keyspace'" accordion-key="monitor-keyspace">
                <template #actions>
                    <P3xrButton @click="exportKeyspace(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
                </template>
                <v-list density="compact" class="pa-0">
                    <template v-for="(entry, idx) in keyspaceEntries" :key="entry.db">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">{{ entry.db }}</div>
                                <div class="p3xr-pair-value p3xr-mono">{{ strings?.page?.monitor?.keys || 'Keys' }}: {{ entry.keys }} &middot; {{ strings?.page?.monitor?.expires || 'Expires' }}: {{ entry.expires }}</div>
                            </div>
                        </v-list-item>
                        <v-divider v-if="idx < keyspaceEntries.length - 1" />
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Modules -->
        <br />
        <P3xrAccordion :title="strings?.page?.monitor?.modules || 'Loaded Modules'" accordion-key="monitor-modules">
            <template #actions>
                <P3xrButton @click="exportModules(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div v-if="modulesList.length === 0" style="padding: 16px; opacity: 0.5;">{{ strings?.page?.monitor?.noModules || 'No modules loaded' }}</div>
            <v-list v-if="modulesList.length > 0" density="compact" class="pa-0">
                <template v-for="(mod, idx) in modulesList" :key="mod.name">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">{{ mod.name }}</div>
                            <div class="p3xr-pair-value p3xr-mono">v{{ mod.ver }}</div>
                        </div>
                    </v-list-item>
                    <v-divider v-if="idx < modulesList.length - 1" />
                </template>
            </v-list>
        </P3xrAccordion>

        <br />

        <!-- Charts -->
        <P3xrAccordion :title="(strings?.page?.monitor?.memory || 'Memory') + ' (MB)'" accordion-key="monitor-chart-memory">
            <template #actions>
                <P3xrButton @click="exportChart(memoryChartEl, 'memory'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="memoryChartEl" class="p3xr-monitoring-chart"></div>
        </P3xrAccordion>

        <br />

        <P3xrAccordion :title="strings?.page?.monitor?.opsPerSec || 'Ops/sec'" accordion-key="monitor-chart-ops">
            <template #actions>
                <P3xrButton @click="exportChart(opsChartEl, 'ops'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="opsChartEl" class="p3xr-monitoring-chart"></div>
        </P3xrAccordion>

        <br />

        <P3xrAccordion :title="strings?.page?.monitor?.clients || 'Clients'" accordion-key="monitor-chart-clients">
            <template #actions>
                <P3xrButton @click="exportChart(clientsChartEl, 'clients'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="clientsChartEl" class="p3xr-monitoring-chart"></div>
        </P3xrAccordion>

        <br />

        <P3xrAccordion :title="(strings?.page?.monitor?.networkIo || 'Network I/O') + ' (KB/s)'" accordion-key="monitor-chart-network">
            <template #actions>
                <P3xrButton @click="exportChart(networkChartEl, 'network'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="networkChartEl" class="p3xr-monitoring-chart"></div>
        </P3xrAccordion>

        <!-- Slow Log -->
        <template v-if="current.slowlog.length > 0">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.slowLog || 'Slow Log'" accordion-key="monitor-slowlog">
                <template #actions>
                    <P3xrButton @click="exportSlowLog(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
                </template>
                <v-list density="compact" class="pa-0">
                    <template v-for="entry in current.slowlog" :key="entry.id">
                        <v-list-item>
                            <div class="p3xr-slowlog-row">
                                <kbd class="p3xr-kbd p3xr-kbd-small">{{ entry.duration }}&micro;s</kbd>
                                <span class="p3xr-slowlog-cmd">{{ entry.command }}</span>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Client List -->
        <br />
        <P3xrAccordion :title="strings?.page?.monitor?.clientList || 'Client List'" accordion-key="monitor-clients-list">
            <template #actions>
                <P3xrButton
                    @click="toggleAutoRefreshClients(); $event.stopPropagation()"
                    :label="strings?.label?.autoRefresh || 'Auto'"
                    :icon="autoRefreshClients ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
                />
                <P3xrButton v-if="!autoRefreshClients"
                    @click="loadClientList(); $event.stopPropagation()"
                    :label="strings?.intention?.refresh || 'Refresh'"
                    icon="mdi-refresh"
                />
                <P3xrButton
                    @click="exportClientList(); $event.stopPropagation()"
                    :label="strings?.intention?.export || 'Export'"
                    icon="mdi-download"
                />
            </template>
            <div v-if="clientList.length === 0 && clientListLoaded" style="padding: 16px; opacity: 0.5;">{{ strings?.page?.monitor?.noClients || 'No clients' }}</div>
            <div v-if="clientList.length === 0 && !clientListLoaded" style="padding: 16px; opacity: 0.5;">{{ strings?.label?.loading || 'Loading...' }}</div>
            <v-list v-if="clientList.length > 0" density="compact" class="pa-0">
                <template v-for="client in clientList" :key="client.id">
                    <v-list-item>
                        <div class="p3xr-client-row">
                            <span class="p3xr-mono p3xr-client-addr">{{ client.addr }}</span>
                            <span v-if="client.name" class="p3xr-client-name">({{ client.name }})</span>
                            <span class="p3xr-client-info">
                                db{{ client.db }} &middot; {{ client.cmd }} &middot; {{ client.idle }}s
                            </span>
                            <v-icon v-if="!isReadonly" class="p3xr-client-kill" @click="killClient(client.id, $event)">mdi-close</v-icon>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>
            </v-list>
        </P3xrAccordion>

        <!-- Memory Top Keys -->
        <br />
        <P3xrAccordion :title="strings?.page?.monitor?.topKeys || 'Top Keys by Memory'" accordion-key="monitor-top-keys">
            <template #actions>
                <P3xrButton
                    @click="toggleAutoRefreshTopKeys(); $event.stopPropagation()"
                    :label="strings?.label?.autoRefresh || 'Auto'"
                    :icon="autoRefreshTopKeys ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'"
                />
                <P3xrButton v-if="!autoRefreshTopKeys"
                    @click="loadTopKeys(); $event.stopPropagation()"
                    :label="strings?.intention?.refresh || 'Refresh'"
                    icon="mdi-refresh"
                />
                <P3xrButton
                    @click="exportTopKeys(); $event.stopPropagation()"
                    :label="strings?.intention?.export || 'Export'"
                    icon="mdi-download"
                />
            </template>
            <div v-if="topKeys.length === 0 && topKeysLoaded" style="padding: 16px; opacity: 0.5;">{{ strings?.page?.monitor?.noKeys || 'No keys' }}</div>
            <div v-if="topKeys.length === 0 && !topKeysLoaded" style="padding: 16px; opacity: 0.5;">{{ strings?.label?.loading || 'Loading...' }}</div>
            <v-list v-if="topKeys.length > 0" density="compact" class="pa-0">
                <template v-for="(entry, i) in topKeys" :key="entry.key">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">
                                <span style="opacity: 0.4; margin-right: 8px;">#{{ i + 1 }}</span>
                                <span class="p3xr-mono" style="font-size: 13px;">{{ entry.key }}</span>
                            </div>
                            <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(entry.bytes) }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>
            </v-list>
        </P3xrAccordion>

        <!-- Cluster Slot Stats (conditional) -->
        <template v-if="isCluster">
            <br />
            <P3xrAccordion :title="strings?.page?.monitor?.slotStats || 'Cluster Slot Stats'" accordion-key="monitor-slot-stats">
                <template #actions>
                    <P3xrButton
                        @click="loadSlotStats(); $event.stopPropagation()"
                        :label="strings?.intention?.refresh || 'Refresh'"
                        icon="mdi-refresh"
                    />
                </template>
                <div style="padding: 8px 16px; display: flex; gap: 8px; align-items: center;">
                    <v-select
                        v-model="slotStatsMetric"
                        :items="[
                            { title: 'Key Count', value: 'KEY-COUNT' },
                            { title: 'CPU (\u00B5s)', value: 'CPU-USEC' },
                            { title: 'Memory (bytes)', value: 'MEMORY-BYTES' },
                        ]"
                        label="Metric"
                        style="max-width: 180px;"
                        @update:model-value="loadSlotStats()"
                    />
                </div>
                <div v-if="slotStats.length === 0 && slotStatsLoaded" style="padding: 16px; opacity: 0.5;">No slot data</div>
                <v-list v-if="slotStats.length > 0" density="compact" class="pa-0">
                    <template v-for="(entry, i) in slotStats" :key="entry.slot">
                        <v-list-item>
                            <div class="p3xr-pair-row">
                                <div class="p3xr-pair-label">
                                    <span style="opacity: 0.4; margin-right: 8px;">#{{ i + 1 }}</span>
                                    <span class="p3xr-mono">Slot {{ entry.slot }}</span>
                                </div>
                                <div class="p3xr-pair-value p3xr-mono">
                                    <template v-if="slotStatsMetric === 'KEY-COUNT'">{{ entry['key-count'] }} keys</template>
                                    <template v-if="slotStatsMetric === 'CPU-USEC'">{{ entry['cpu-usec'] }} &micro;s</template>
                                    <template v-if="slotStatsMetric === 'MEMORY-BYTES'">{{ formatBytes(entry['memory-bytes']) }}</template>
                                </div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>
    </div>
</template>

<style scoped>
.p3xr-monitoring-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 64px;
    opacity: 0.5;
    font-size: 18px;
}

.p3xr-pair-row {
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
}
.p3xr-pair-label {
    flex: 1 1 auto;
    min-width: 0;
    font-weight: 500;
}
.p3xr-pair-value {
    flex: 0 1 auto;
    min-width: 0;
    text-align: right;
    white-space: nowrap;
}
.p3xr-mono {
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
}

.p3xr-monitoring-chart {
    width: 100%;
    min-height: 180px;
    overflow: hidden;
}

.p3xr-slowlog-row {
    display: flex;
    width: 100%;
    gap: 12px;
    align-items: center;
}
.p3xr-kbd {
    font-family: 'Roboto Mono', monospace;
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 4px;
    padding: 2px 8px;
    background-color: rgba(128, 128, 128, 0.1);
    white-space: nowrap;
}
.p3xr-kbd-small {
    font-size: 11px;
    min-width: 60px;
    text-align: center;
}
.p3xr-slowlog-cmd {
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.p3xr-client-row {
    display: flex;
    width: 100%;
    gap: 8px;
    align-items: center;
}
.p3xr-client-addr {
    font-size: 13px;
    font-weight: 700;
    min-width: 150px;
}
.p3xr-client-name {
    opacity: 0.5;
    font-size: 12px;
}
.p3xr-client-info {
    flex: 1;
    text-align: right;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    opacity: 0.6;
}
.p3xr-client-kill {
    cursor: pointer;
    font-size: 18px !important;
    width: 18px !important;
    height: 18px !important;
    color: var(--p3xr-btn-warn-bg, #f44336);
    opacity: 0.7;
    flex-shrink: 0;
}
.p3xr-client-kill:hover {
    opacity: 1;
}
</style>

<style>
/* uPlot chart styles (must be unscoped to reach uPlot DOM) */
.p3xr-monitoring-chart .uplot {
    font-family: 'Roboto', sans-serif;
}
.p3xr-monitoring-chart .u-legend {
    font-size: 12px;
    opacity: 0.8;
}
.p3xr-monitoring-chart .u-legend .u-series td {
    padding: 1px 4px;
}
</style>
