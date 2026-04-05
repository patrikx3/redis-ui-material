/**
 * Pulse (monitoring overview) — exact port of Angular monitoring.component.
 * Real-time metrics with 4 uPlot charts, slow log, client list, top keys.
 * Charts are theme-aware and language-aware.
 * Export all (ZIP with TXT + charts PNG + PDF) deferred to end.
 */
import { useState, useEffect, useCallback, useRef } from 'react'
import {
    Box, List, ListItem, Divider, useTheme, CircularProgress, Tooltip,
} from '@mui/material'
import {
    Pause, PlayArrow, Download, Archive, Refresh, Close,
    CheckBox, CheckBoxOutlineBlank, HourglassEmpty,
} from '@mui/icons-material'
import 'uplot/dist/uPlot.min.css'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useCommonStore } from '../../stores/common.store'
import { request } from '../../stores/socket.service'
import P3xrAccordion from '../../components/P3xrAccordion'
import P3xrButton from '../../components/P3xrButton'

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
const formatTime = (ms: number) => new Date(ms).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })

function formatBytes(bytes: number): string {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

function uptimeFormatted(s: number): string {
    const d = Math.floor(s / 86400)
    const h = Math.floor((s % 86400) / 3600)
    const m = Math.floor((s % 3600) / 60)
    return d > 0 ? `${d}d ${h}h ${m}m` : h > 0 ? `${h}h ${m}m` : `${m}m`
}

function downloadText(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = filename; a.click()
    URL.revokeObjectURL(url)
}

export default function PulsePage() {
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'
    const isReadonly = connection?.readonly === true
    const connName = connection?.name || 'redis'

    const [current, setCurrent] = useState<MonitorSnapshot | null>(null)
    const [paused, setPaused] = useState(false)
    const [clientList, setClientList] = useState<any[]>([])
    const [topKeys, setTopKeys] = useState<any[]>([])
    const [clientListLoaded, setClientListLoaded] = useState(false)
    const [topKeysLoaded, setTopKeysLoaded] = useState(false)
    const [autoRefreshClients, setAutoRefreshClients] = useState(() => localStorage.getItem('p3xr-monitor-auto-clients') === 'true')
    const [autoRefreshTopKeys, setAutoRefreshTopKeys] = useState(() => localStorage.getItem('p3xr-monitor-auto-topkeys') === 'true')

    const historyRef = useRef<MonitorSnapshot[]>([])
    const uPlotRef = useRef<any>(null)
    const chartsInitRef = useRef(false)
    const memChartRef = useRef<HTMLDivElement>(null)
    const opsChartRef = useRef<HTMLDivElement>(null)
    const cliChartRef = useRef<HTMLDivElement>(null)
    const netChartRef = useRef<HTMLDivElement>(null)
    const memPlotRef = useRef<any>(null)
    const opsPlotRef = useRef<any>(null)
    const cliPlotRef = useRef<any>(null)
    const netPlotRef = useRef<any>(null)
    const resizeObRef = useRef<ResizeObserver | null>(null)
    const pausedRef = useRef(false)
    const autoCliRef = useRef(autoRefreshClients)
    const autoTopRef = useRef(autoRefreshTopKeys)
    pausedRef.current = paused
    autoCliRef.current = autoRefreshClients
    autoTopRef.current = autoRefreshTopKeys

    // Theme colors via ref — always reads latest palette on every render
    const themeRef = useRef({
        primary: muiTheme.palette.primary.main,
        accent: muiTheme.palette.secondary.main,
        warn: muiTheme.palette.error.main,
        text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
        grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    })
    themeRef.current = {
        primary: muiTheme.palette.primary.main,
        accent: muiTheme.palette.secondary.main,
        warn: muiTheme.palette.error.main,
        text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
        grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    }

    const buildChartData = useCallback(() => {
        const h = historyRef.current
        return {
            timestamps: h.map(s => s.timestamp / 1000),
            memUsed: h.map(s => s.memory.used / (1024 * 1024)),
            memRss: h.map(s => s.memory.rss / (1024 * 1024)),
            ops: h.map(s => s.stats.opsPerSec),
            connected: h.map(s => s.clients.connected),
            blocked: h.map(s => s.clients.blocked),
            netIn: h.map(s => s.stats.inputKbps),
            netOut: h.map(s => s.stats.outputKbps),
        }
    }, [])

    const stringsRef = useRef(strings)
    stringsRef.current = strings

    const createOpts = useCallback((width: number, seriesConfig: any[]) => {
        const c = themeRef.current
        return {
            width, height: 180,
            cursor: { show: true, drag: { x: false, y: false } },
            legend: { show: true, live: false },
            scales: { x: { time: true } },
            axes: [
                { stroke: c.text, grid: { stroke: c.grid, width: 1 }, ticks: { stroke: c.grid }, font: '11px Roboto',
                    values: (_: any, ticks: number[]) => ticks.map(t => formatTime(t * 1000)) },
                { stroke: c.text, grid: { stroke: c.grid, width: 1 }, ticks: { stroke: c.grid }, font: '11px Roboto Mono', size: 55 },
            ],
            series: [
                { label: stringsRef.current?.label?.time || 'Time', value: (_: any, v: number) => v ? formatTime(v * 1000) : '' },
                ...seriesConfig,
            ],
        }
    }, []) // reads theme+strings from refs

    const destroyCharts = useCallback(() => {
        resizeObRef.current?.disconnect(); resizeObRef.current = null
        memPlotRef.current?.destroy(); memPlotRef.current = null
        opsPlotRef.current?.destroy(); opsPlotRef.current = null
        cliPlotRef.current?.destroy(); cliPlotRef.current = null
        netPlotRef.current?.destroy(); netPlotRef.current = null
        chartsInitRef.current = false
    }, [])

    const initCharts = useCallback(() => {
        if (!uPlotRef.current || chartsInitRef.current) return
        const memEl = memChartRef.current, opsEl = opsChartRef.current
        const cliEl = cliChartRef.current, netEl = netChartRef.current
        if (!memEl || !opsEl || !cliEl || !netEl) return
        const data = buildChartData()
        if (data.timestamps.length < 2) return
        const c = themeRef.current
        const s = stringsRef.current?.page?.monitor || {} as any

        memPlotRef.current = new uPlotRef.current(createOpts(memEl.offsetWidth || 500, [
            { label: s.memory || 'Memory', stroke: c.primary, width: 2, fill: c.primary + '15' },
            { label: 'RSS', stroke: c.accent, width: 2 },
        ]), [data.timestamps, data.memUsed, data.memRss], memEl)

        opsPlotRef.current = new uPlotRef.current(createOpts(opsEl.offsetWidth || 500, [
            { label: s.opsPerSec || 'Ops/s', stroke: c.primary, width: 2, fill: c.primary + '20' },
        ]), [data.timestamps, data.ops], opsEl)

        cliPlotRef.current = new uPlotRef.current(createOpts(cliEl.offsetWidth || 500, [
            { label: s.clients || 'Connected', stroke: c.primary, width: 2 },
            { label: s.blocked || 'Blocked', stroke: c.warn, width: 2 },
        ]), [data.timestamps, data.connected, data.blocked], cliEl)

        netPlotRef.current = new uPlotRef.current(createOpts(netEl.offsetWidth || 500, [
            { label: '\u2193 In', stroke: c.primary, width: 2, fill: c.primary + '15' },
            { label: '\u2191 Out', stroke: c.accent, width: 2 },
        ]), [data.timestamps, data.netIn, data.netOut], netEl)

        chartsInitRef.current = true

        let rt: any
        resizeObRef.current = new ResizeObserver(() => {
            clearTimeout(rt)
            rt = setTimeout(() => {
                const h = 180
                if (memEl.offsetWidth > 0) memPlotRef.current?.setSize({ width: memEl.offsetWidth, height: h })
                if (opsEl.offsetWidth > 0) opsPlotRef.current?.setSize({ width: opsEl.offsetWidth, height: h })
                if (cliEl.offsetWidth > 0) cliPlotRef.current?.setSize({ width: cliEl.offsetWidth, height: h })
                if (netEl.offsetWidth > 0) netPlotRef.current?.setSize({ width: netEl.offsetWidth, height: h })
            }, 50)
        })
        resizeObRef.current.observe(memEl)
    }, [buildChartData, createOpts, destroyCharts]) // reads theme+strings from refs

    const updateCharts = useCallback(() => {
        if (!chartsInitRef.current) return
        const d = buildChartData()
        memPlotRef.current?.setData([d.timestamps, d.memUsed, d.memRss])
        opsPlotRef.current?.setData([d.timestamps, d.ops])
        cliPlotRef.current?.setData([d.timestamps, d.connected, d.blocked])
        netPlotRef.current?.setData([d.timestamps, d.netIn, d.netOut])
    }, [buildChartData])

    // --- Data fetching ---
    const fetchData = useCallback(async () => {
        try {
            const resp = await request({ action: 'monitor-info', payload: {} })
            const data: MonitorSnapshot = resp.data
            setCurrent(data)
            historyRef.current.push(data)
            if (historyRef.current.length > MAX_HISTORY) historyRef.current.shift()
            if (chartsInitRef.current) {
                updateCharts()
            } else if (uPlotRef.current && historyRef.current.length >= 2) {
                initCharts()
            }
        } catch { /* next tick */ }
    }, [updateCharts, initCharts])

    const loadClientList = useCallback(async () => {
        try {
            const resp = await request({ action: 'client-list', payload: {} })
            setClientList(resp.data)
            setClientListLoaded(true)
        } catch { setClientListLoaded(true) }
    }, [])

    const loadTopKeys = useCallback(async () => {
        try {
            const resp = await request({ action: 'memory-top-keys', payload: { topN: 20 } })
            setTopKeys(resp.data)
            setTopKeysLoaded(true)
        } catch { setTopKeysLoaded(true) }
    }, [])

    // --- Init ---
    useEffect(() => {
        fetchData()
        loadClientList()
        loadTopKeys()

        import('uplot').then(mod => {
            uPlotRef.current = mod.default
            if (historyRef.current.length >= 2) setTimeout(() => initCharts(), 300)
        })

        const interval = setInterval(() => {
            if (!pausedRef.current) {
                fetchData()
                if (autoCliRef.current) loadClientList()
                if (autoTopRef.current) loadTopKeys()
            }
        }, 2000)

        return () => {
            clearInterval(interval)
            destroyCharts()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Re-init on connection change
    useEffect(() => {
        if (!connection) return
        historyRef.current = []
        destroyCharts()
        setCurrent(null)
        setClientList([])
        setTopKeys([])
        setClientListLoaded(false)
        setTopKeysLoaded(false)
        fetchData()
        loadClientList()
        loadTopKeys()
    }, [connection]) // eslint-disable-line react-hooks/exhaustive-deps

    // Re-init charts on theme/language change — destroy + rebuild with fresh colors from refs
    const primaryColor = muiTheme.palette.primary.main
    useEffect(() => {
        if (!uPlotRef.current || historyRef.current.length < 2) return
        // Always destroy and re-create to pick up new theme colors
        destroyCharts()
        const t = setTimeout(() => initCharts(), 150)
        return () => clearTimeout(t)
    }, [isDark, currentLang, primaryColor]) // eslint-disable-line react-hooks/exhaustive-deps

    // --- Actions ---
    const killClient = useCallback(async (id: string) => {
        try {
            await confirm({ message: strings?.page?.monitor?.confirmKillClient || 'Are you sure to kill this client?' })
            await request({ action: 'client-kill', payload: { id } })
            toast(strings?.page?.monitor?.clientKilled || 'Client killed')
            loadClientList()
        } catch (e: any) { if (e !== undefined) generalHandleError(e) }
    }, [strings, confirm, toast, loadClientList, generalHandleError])

    const toggleAutoClients = () => {
        const next = !autoRefreshClients
        setAutoRefreshClients(next)
        try { localStorage.setItem('p3xr-monitor-auto-clients', String(next)) } catch {}
    }

    const toggleAutoTopKeys = () => {
        const next = !autoRefreshTopKeys
        setAutoRefreshTopKeys(next)
        try { localStorage.setItem('p3xr-monitor-auto-topkeys', String(next)) } catch {}
    }

    const exportOverview = useCallback(() => {
        if (!current) return
        const c = current, mon = strings?.page?.monitor || {} as any
        const lines = [
            `${mon.memory || 'Memory'}: ${c.memory.usedHuman}`, `${mon.rss || 'RSS'}: ${c.memory.rssHuman}`,
            `${mon.peak || 'Peak'}: ${c.memory.peakHuman}`, `${mon.fragmentation || 'Fragmentation'}: ${c.memory.fragRatio}x`,
            `${mon.opsPerSec || 'Ops/sec'}: ${c.stats.opsPerSec}`, `${mon.totalCommands || 'Total'}: ${c.stats.totalCommands}`,
            `${mon.clients || 'Clients'}: ${c.clients.connected}`, `${mon.blocked || 'Blocked'}: ${c.clients.blocked}`,
            `${mon.hitsMisses || 'Hit Rate'}: ${c.stats.hitRate}%`,
            `${mon.hitsAndMisses || 'Hits / Misses'}: ${c.stats.hits} / ${c.stats.misses}`,
            `${mon.networkIo || 'Network I/O'}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
            `${mon.expired || 'Expired'}: ${c.stats.expiredKeys}`, `${mon.evicted || 'Evicted'}: ${c.stats.evictedKeys}`,
        ]
        downloadText(lines.join('\n'), `${connName}-overview.txt`)
    }, [current, strings, connName])

    const exportChart = useCallback((ref: React.RefObject<HTMLDivElement | null>, name: string) => {
        const canvas = ref.current?.querySelector('canvas') as HTMLCanvasElement
        if (!canvas) return
        const ec = document.createElement('canvas')
        ec.width = canvas.width; ec.height = canvas.height
        const ctx = ec.getContext('2d')!
        ctx.fillStyle = isDark ? '#1e1e1e' : '#ffffff'
        ctx.fillRect(0, 0, ec.width, ec.height)
        ctx.drawImage(canvas, 0, 0)
        const a = document.createElement('a'); a.href = ec.toDataURL('image/png')
        a.download = `${connName}-${name}.png`; a.click()
    }, [connName, isDark])

    const exportSlowLog = useCallback(() => {
        if (!current) return
        const lines = current.slowlog.map(e => `${e.duration}\u00B5s ${e.command}`)
        downloadText(lines.join('\n'), `${connName}-slowlog.txt`)
    }, [current, connName])

    const exportClientList = useCallback(() => {
        const lines = clientList.map(c => `${c.addr} ${c.name || ''} db${c.db} ${c.cmd} idle:${c.idle}s`)
        downloadText(lines.join('\n'), `${connName}-clients.txt`)
    }, [clientList, connName])

    const exportTopKeysFile = useCallback(() => {
        const lines = topKeys.map((e, i) => `#${i + 1} ${e.key} ${formatBytes(e.bytes)}`)
        downloadText(lines.join('\n'), `${connName}-topkeys.txt`)
    }, [topKeys, connName])

    function getExportBackgroundColor(): string {
        return getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDark ? '#1e1e1e' : '#ffffff')
    }

    function renderPulseChartsForExport(): Array<{ label: string; canvas: HTMLCanvasElement }> {
        let data: ReturnType<typeof buildChartData>
        if (historyRef.current.length >= 2) {
            data = buildChartData()
        } else if (current) {
            const c = current
            const now = Date.now() / 1000
            data = {
                timestamps: [now - 1, now],
                memUsed: [c.memory.used / (1024 * 1024), c.memory.used / (1024 * 1024)],
                memRss: [c.memory.rss / (1024 * 1024), c.memory.rss / (1024 * 1024)],
                ops: [c.stats.opsPerSec, c.stats.opsPerSec],
                connected: [c.clients.connected, c.clients.connected],
                blocked: [c.clients.blocked, c.clients.blocked],
                netIn: [c.stats.inputKbps, c.stats.inputKbps],
                netOut: [c.stats.outputKbps, c.stats.outputKbps],
            }
        } else {
            return []
        }

        const colors = themeRef.current
        const s = stringsRef.current?.page?.monitor || {} as any

        const chartConfigs: Array<{
            label: string
            series: Array<{ label: string; color: string; values: number[]; fill?: boolean }>
        }> = [
            {
                label: `${s.memory || 'Memory'} (MB)`,
                series: [
                    { label: s.memory || 'Memory', color: colors.primary, values: data.memUsed, fill: true },
                    { label: 'RSS', color: colors.accent, values: data.memRss },
                ],
            },
            {
                label: s.opsPerSec || 'Ops/sec',
                series: [
                    { label: s.opsPerSec || 'Ops/s', color: colors.primary, values: data.ops, fill: true },
                ],
            },
            {
                label: s.clients || 'Clients',
                series: [
                    { label: s.clients || 'Connected', color: colors.primary, values: data.connected },
                    { label: s.blocked || 'Blocked', color: colors.warn, values: data.blocked },
                ],
            },
            {
                label: `${s.networkIo || 'Network I/O'} (KB/s)`,
                series: [
                    { label: '\u2193 In', color: colors.primary, values: data.netIn, fill: true },
                    { label: '\u2191 Out', color: colors.accent, values: data.netOut },
                ],
            },
        ]

        return chartConfigs.map(config => ({
            label: config.label,
            canvas: renderLineChartForExport(data.timestamps, config.series, colors),
        }))
    }

    function renderLineChartForExport(
        timestamps: number[],
        series: Array<{ label: string; color: string; values: number[]; fill?: boolean }>,
        colors: typeof themeRef.current,
    ): HTMLCanvasElement {
        const dpr = 2
        const width = 900
        const height = 260
        const padTop = 32
        const padBottom = 40
        const padLeft = 60
        const padRight = 16
        const legendH = 20
        const chartW = width - padLeft - padRight
        const chartH = height - padTop - padBottom - legendH

        const canvas = document.createElement('canvas')
        canvas.width = width * dpr
        canvas.height = height * dpr
        const ctx = canvas.getContext('2d')!
        ctx.scale(dpr, dpr)

        ctx.fillStyle = getExportBackgroundColor()
        ctx.fillRect(0, 0, width, height)

        const n = timestamps.length
        if (n < 2) return canvas

        let yMin = Infinity
        let yMax = -Infinity
        for (const s of series) {
            for (const v of s.values) {
                if (v < yMin) yMin = v
                if (v > yMax) yMax = v
            }
        }
        if (yMin === yMax) {
            yMin -= 1
            yMax += 1
        }
        const yRange = yMax - yMin
        const tMin = timestamps[0]
        const tMax = timestamps[n - 1]
        const tRange = tMax - tMin || 1

        const toX = (t: number) => padLeft + ((t - tMin) / tRange) * chartW
        const toY = (v: number) => padTop + chartH - ((v - yMin) / yRange) * chartH

        ctx.strokeStyle = colors.grid
        ctx.lineWidth = 1
        const ySteps = 5
        for (let i = 0; i <= ySteps; i++) {
            const gy = padTop + (chartH / ySteps) * i
            ctx.beginPath()
            ctx.moveTo(padLeft, gy)
            ctx.lineTo(padLeft + chartW, gy)
            ctx.stroke()

            const val = yMax - (yRange / ySteps) * i
            ctx.fillStyle = colors.text
            ctx.font = '10px Roboto Mono, monospace'
            ctx.textAlign = 'right'
            ctx.textBaseline = 'middle'
            ctx.fillText(val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val.toFixed(1), padLeft - 6, gy)
        }

        const labelCount = Math.min(6, n)
        ctx.font = '10px Roboto, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'top'
        ctx.fillStyle = colors.text
        for (let i = 0; i < labelCount; i++) {
            const idx = Math.round((i / (labelCount - 1)) * (n - 1))
            const t = timestamps[idx]
            const d = new Date(t * 1000)
            const label = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`
            ctx.fillText(label, toX(t), padTop + chartH + 6)
        }

        for (const s of series) {
            ctx.strokeStyle = s.color
            ctx.lineWidth = 2
            ctx.lineJoin = 'round'
            ctx.beginPath()
            for (let i = 0; i < n; i++) {
                const x = toX(timestamps[i])
                const y = toY(s.values[i])
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
            }
            ctx.stroke()

            if (s.fill) {
                ctx.fillStyle = `${s.color}20`
                ctx.beginPath()
                ctx.moveTo(toX(timestamps[0]), toY(s.values[0]))
                for (let i = 1; i < n; i++) ctx.lineTo(toX(timestamps[i]), toY(s.values[i]))
                ctx.lineTo(toX(timestamps[n - 1]), padTop + chartH)
                ctx.lineTo(toX(timestamps[0]), padTop + chartH)
                ctx.closePath()
                ctx.fill()
            }
        }

        let lx = padLeft
        const ly = height - legendH + 4
        ctx.font = '11px Roboto, sans-serif'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'middle'
        for (const s of series) {
            ctx.fillStyle = s.color
            ctx.fillRect(lx, ly - 4, 12, 8)
            ctx.fillStyle = colors.text
            ctx.fillText(s.label, lx + 16, ly)
            lx += ctx.measureText(s.label).width + 32
        }

        return canvas
    }

    // --- Export All (ZIP with TXT + charts PNG + PDF) ---
    const exportAll = useCallback(async () => {
        if (!current) return
        try {
            const JSZip = (await import('jszip')).default
            const zip = new JSZip()
            const c = current
            const sections: string[] = []
            const mon = stringsRef.current?.page?.monitor || {} as any
            const a = stringsRef.current?.page?.analysis || {} as any
            const sanitize = (s: string) => s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')

            // === PULSE ===
            sections.push(`============================`, `  PULSE`, `============================`, ``,
                `--- ${mon.title || 'Monitoring'} ---`,
                `Redis ${c.server.version} \u00B7 ${c.server.mode} \u00B7 Uptime: ${uptimeFormatted(c.server.uptime)}`,
                `${mon.memory || 'Memory'}: ${c.memory.usedHuman}`, `${mon.rss || 'RSS'}: ${c.memory.rssHuman}`,
                `${mon.peak || 'Peak'}: ${c.memory.peakHuman}`, `${mon.fragmentation || 'Fragmentation'}: ${c.memory.fragRatio}x`,
                `${mon.opsPerSec || 'Ops/sec'}: ${c.stats.opsPerSec}`, `${mon.totalCommands || 'Total'}: ${c.stats.totalCommands}`,
                `${mon.clients || 'Clients'}: ${c.clients.connected}`, `${mon.blocked || 'Blocked'}: ${c.clients.blocked}`,
                `${mon.hitsMisses || 'Hit Rate'}: ${c.stats.hitRate}%`,
                `${mon.hitsAndMisses || 'Hits / Misses'}: ${c.stats.hits} / ${c.stats.misses}`,
                `${mon.networkIo || 'Network I/O'}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
                `${mon.expired || 'Expired'}: ${c.stats.expiredKeys}`, `${mon.evicted || 'Evicted'}: ${c.stats.evictedKeys}`,
            )

            if (c.slowlog.length > 0) {
                sections.push(``, `--- ${mon.slowLog || 'Slow Log'} ---`)
                sections.push(...c.slowlog.map(e => `${e.duration}\u00B5s ${e.command}`))
            }
            if (clientList.length > 0) {
                sections.push(``, `--- ${mon.clientList || 'Client List'} ---`)
                sections.push(...clientList.map(cl => `${cl.addr} ${cl.name || ''} db${cl.db} ${cl.cmd} idle:${cl.idle}s`))
            }
            if (topKeys.length > 0) {
                sections.push(``, `--- ${mon.topKeys || 'Top Keys by Memory'} ---`)
                sections.push(...topKeys.map((e: any, i: number) => `#${i + 1} ${e.key} ${formatBytes(e.bytes)}`))
            }

            // === ANALYSIS ===
            const analysisChartItems: Array<{ name: string; items: Array<{ label: string; value: number }> }> = []
            try {
                const resp = await request({ action: 'memory-analysis', payload: { topN: 20, maxScanKeys: 5000 } })
                const d = resp.data
                if (d) {
                    const m = d.memoryInfo, exp = d.expirationOverview
                    const typeEntries = Object.keys(d.typeDistribution || {}).map((t: string) => ({
                        type: t, count: d.typeDistribution[t], bytes: d.typeMemory?.[t] || 0,
                    })).sort((x: any, y: any) => y.bytes - x.bytes)

                    sections.push(``, ``, `============================`, `  ANALYSIS`, `============================`)
                    sections.push(``, `--- ${a.keysScanned || 'Keys Scanned'} ---`, `${a.keysScanned || 'Keys Scanned'}: ${d.totalScanned} / ${d.dbSize}`)
                    sections.push(``, `--- ${a.memoryBreakdown || 'Memory Breakdown'} ---`)
                    sections.push(`${a.totalMemory || 'Total'}: ${m.usedHuman}`, `${a.rssMemory || 'RSS'}: ${m.rssHuman}`, `${a.peakMemory || 'Peak'}: ${m.peakHuman}`)
                    sections.push(`${a.overheadMemory || 'Overhead'}: ${formatBytes(m.overhead)}`, `${a.datasetMemory || 'Dataset'}: ${formatBytes(m.dataset)}`)
                    sections.push(`${a.luaMemory || 'Lua'}: ${formatBytes(m.lua)}`, `${a.fragmentation || 'Fragmentation'}: ${m.fragRatio}x`, `${a.allocator || 'Allocator'}: ${m.allocator}`)
                    sections.push(``, `--- ${a.typeDistribution || 'Type Distribution'} ---`)
                    sections.push(...typeEntries.map((t: any) => `${t.type}: ${t.count} keys, ${formatBytes(t.bytes)}`))
                    if (d.prefixMemory?.length > 0) {
                        sections.push(``, `--- ${a.prefixMemory || 'Memory by Prefix'} ---`)
                        sections.push(...d.prefixMemory.map((p: any, i: number) => `#${i + 1} ${p.prefix} \u2014 ${p.keyCount} keys, ${formatBytes(p.totalBytes)}`))
                    }
                    sections.push(``, `--- ${a.expirationOverview || 'Key Expiration'} ---`)
                    sections.push(`${a.withTTL || 'With TTL'}: ${exp.withTTL}`, `${a.persistent || 'Persistent'}: ${exp.persistent}`, `${a.avgTTL || 'Average TTL'}: ${exp.avgTTL}s`)

                    analysisChartItems.push(
                        { name: a.typeDistribution || 'Type Distribution', items: typeEntries.map((t: any) => ({ label: t.type, value: t.bytes })) },
                        { name: a.prefixMemory || 'Memory by Prefix', items: (d.prefixMemory || []).slice(0, 20).map((p: any) => ({ label: p.prefix, value: p.totalBytes })) },
                    )
                }
            } catch { /* analysis optional */ }

            // === PROFILER + PUBSUB tail ===
            const tailSections: string[] = []
            const { useMonitoringDataStore } = await import('../../stores/monitoring-data.store')
            const monData = useMonitoringDataStore.getState()
            if (monData.profilerEntries.length > 0) {
                tailSections.push(``, ``, `============================`, `  PROFILER`, `============================`, ``)
                tailSections.push(...monData.profilerEntries.map(e => sanitize(`${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`)))
            }
            if (monData.pubsubEntries.length > 0) {
                tailSections.push(``, ``, `============================`, `  PUBSUB`, `============================`, ``)
                tailSections.push(...monData.pubsubEntries.map(e => sanitize(`${e.fullTimestamp} ${e.channel} ${e.message}`)))
            }

            // TXT file (UTF-8 with BOM)
            const textContent = [...sections, ...tailSections].join('\n')
            const textBytes = new TextEncoder().encode(textContent)
            const bom = new Uint8Array([0xEF, 0xBB, 0xBF])
            const txtWithBom = new Uint8Array(bom.length + textBytes.length)
            txtWithBom.set(bom)
            txtWithBom.set(textBytes, bom.length)
            zip.file('monitoring.txt', txtWithBom)

            // Charts PNG — collect all pulse chart canvases + analysis bar charts
            const allCanvases: Array<{ label: string; canvas: HTMLCanvasElement }> = []
            allCanvases.push(...renderPulseChartsForExport())
            // Render analysis bar charts
            for (const ci of analysisChartItems) {
                if (ci.items.length === 0) continue
                const canvas = renderBarChartForExport(ci.items)
                if (canvas) allCanvases.push({ label: ci.name, canvas })
            }

            // Stitch all canvases into 1 tall image
            if (allCanvases.length > 0) {
                const blob = await stitchCharts(allCanvases)
                if (blob) zip.file('charts.png', blob)
            }

            // PDF
            try {
                const pdfBlob = await generatePdf(sections, allCanvases, tailSections)
                if (pdfBlob) zip.file('monitoring.pdf', pdfBlob)
            } catch { /* pdf optional */ }

            const content = await zip.generateAsync({ type: 'blob' })
            const url = URL.createObjectURL(content)
            const link = document.createElement('a')
            link.href = url; link.download = `${connName}-monitoring.zip`; link.click()
            URL.revokeObjectURL(url)
        } catch (e) { generalHandleError(e) }
    }, [current, clientList, topKeys, connName, isDark, generalHandleError])

    // --- Export helpers ---
    function renderBarChartForExport(items: Array<{ label: string; value: number }>): HTMLCanvasElement | null {
        if (items.length === 0) return null
        const colors = themeRef.current
        const barColors = [colors.primary, colors.accent, colors.warn,
            isDark ? '#ffb74d' : '#ff9800', isDark ? '#81c784' : '#4caf50',
            isDark ? '#4dd0e1' : '#00bcd4', isDark ? '#a1887f' : '#795548', isDark ? '#90a4ae' : '#607d8b']
        const dpr = 2, width = 800, barHeight = 24, labelWidth = 120, valueWidth = 80
        const chartLeft = labelWidth + 8, chartRight = width - valueWidth - 8, chartWidth = chartRight - chartLeft
        const topPad = 8, height = topPad + items.length * (barHeight + 4) + 8
        const canvas = document.createElement('canvas')
        canvas.width = width * dpr; canvas.height = height * dpr
        const ctx = canvas.getContext('2d')!
        ctx.scale(dpr, dpr)
        ctx.fillStyle = getExportBackgroundColor()
        ctx.fillRect(0, 0, width, height)
        const maxVal = Math.max(...items.map(i => i.value), 1)
        items.forEach((item, i) => {
            const y = topPad + i * (barHeight + 4)
            ctx.fillStyle = colors.text; ctx.font = '12px Roboto, sans-serif'
            ctx.textAlign = 'right'; ctx.textBaseline = 'middle'
            ctx.fillText(item.label.length > 15 ? item.label.substring(0, 14) + '\u2026' : item.label, labelWidth, y + barHeight / 2)
            ctx.fillStyle = colors.grid; ctx.fillRect(chartLeft, y, chartWidth, barHeight)
            ctx.fillStyle = barColors[i % barColors.length]
            ctx.fillRect(chartLeft, y, (item.value / maxVal) * chartWidth, barHeight)
            ctx.fillStyle = colors.text; ctx.font = '11px Roboto Mono, monospace'
            ctx.textAlign = 'left'; ctx.fillText(formatBytes(item.value), chartRight + 8, y + barHeight / 2)
        })
        return canvas
    }

    async function stitchCharts(items: Array<{ label: string; canvas: HTMLCanvasElement }>): Promise<Blob | null> {
        const padding = 32, labelHeight = 60, chartSpacing = 40
        const width = Math.max(2400, ...items.map(i => i.canvas.width))
        let totalHeight = padding
        for (const item of items) {
            totalHeight += labelHeight + item.canvas.height * (width / item.canvas.width) + chartSpacing
        }
        totalHeight += padding
        const stitched = document.createElement('canvas')
        stitched.width = width; stitched.height = totalHeight
        const ctx = stitched.getContext('2d')!
        const colors = themeRef.current
        ctx.fillStyle = getExportBackgroundColor()
        ctx.fillRect(0, 0, width, totalHeight)
        let y = padding
        for (const item of items) {
            ctx.fillStyle = colors.text; ctx.font = 'bold 28px Roboto, sans-serif'
            ctx.textAlign = 'left'; ctx.textBaseline = 'top'
            ctx.fillText(item.label, padding, y); y += labelHeight
            const drawW = width - padding * 2, drawH = item.canvas.height * (drawW / item.canvas.width)
            ctx.drawImage(item.canvas, padding, y, drawW, drawH); y += drawH + chartSpacing
        }
        return new Promise(resolve => stitched.toBlob(b => resolve(b), 'image/png'))
    }

    async function generatePdf(sections: string[], charts: Array<{ label: string; canvas: HTMLCanvasElement }>, tailSections: string[]): Promise<Blob | null> {
        const { jsPDF } = await import('jspdf')
        const bgColor = getExportBackgroundColor()
        const textColor = isDark ? '#e0e0e0' : '#212121'
        const headerColor = isDark ? '#90caf9' : '#1565c0'
        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
        const pageW = pdf.internal.pageSize.getWidth(), pageH = pdf.internal.pageSize.getHeight()
        const margin = 12, contentW = pageW - margin * 2
        let y = margin
        const fillBg = () => { pdf.setFillColor(bgColor); pdf.rect(0, 0, pageW, pageH, 'F') }
        fillBg()
        const checkPage = (needed: number) => { if (y + needed > pageH - margin) { pdf.addPage(); fillBg(); y = margin } }

        for (const line of sections) {
            if (line.startsWith('====')) continue
            const isTitle = ['PULSE', 'PROFILER', 'PUBSUB', 'ANALYSIS'].includes(line.trim())
            if (isTitle) { checkPage(14); y += 4; pdf.setFontSize(14); pdf.setTextColor(headerColor); pdf.text(line.trim(), margin, y); y += 8; continue }
            if (line.startsWith('---') && line.endsWith('---')) { checkPage(8); y += 2; pdf.setFontSize(10); pdf.setTextColor(headerColor); pdf.text(line.replace(/^-+\s*/, '').replace(/\s*-+$/, ''), margin, y); y += 5; continue }
            if (line === '') { y += 2; continue }
            checkPage(4); pdf.setTextColor(textColor); pdf.setFontSize(8)
            for (const wl of pdf.splitTextToSize(line, contentW)) { checkPage(4); pdf.text(wl, margin, y); y += 3.5 }
        }
        for (const chart of charts) {
            pdf.addPage(); fillBg(); y = margin
            pdf.setFontSize(12); pdf.setTextColor(headerColor); pdf.text(chart.label, margin, y); y += 8
            const imgData = chart.canvas.toDataURL('image/png')
            const ratio = chart.canvas.height / chart.canvas.width
            const availH = pageH - y - margin
            const imgW = contentW
            const imgH = imgW * ratio
            if (imgH > availH) {
                const drawH = availH
                const drawW = drawH / ratio
                pdf.addImage(imgData, 'PNG', margin, y, drawW, drawH)
                y += drawH
            } else {
                pdf.addImage(imgData, 'PNG', margin, y, imgW, imgH)
                y += imgH
            }
        }
        if (tailSections.length > 0 && charts.length > 0) { pdf.addPage(); fillBg(); y = margin }
        for (const line of tailSections) {
            if (line.startsWith('====')) continue
            const isTitle = ['PROFILER', 'PUBSUB'].includes(line.trim())
            if (isTitle) { checkPage(14); y += 4; pdf.setFontSize(14); pdf.setTextColor(headerColor); pdf.text(line.trim(), margin, y); y += 8; continue }
            if (line === '') { y += 2; continue }
            checkPage(4); pdf.setTextColor(textColor); pdf.setFontSize(8)
            for (const wl of pdf.splitTextToSize(line, contentW)) { checkPage(4); pdf.text(wl, margin, y); y += 3.5 }
        }
        return pdf.output('blob') as unknown as Blob
    }

    // --- Render helpers ---
    const InfoRow = ({ label, value }: { label: string; value: string | number }) => (
        <>
            <ListItem sx={{ px: 2, py: 1 }}>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    <Box sx={{ flex: 1 }}>{label}</Box>
                    <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{value}</Box>
                </Box>
            </ListItem>
            <Divider />
        </>
    )

    if (!current) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, p: 4, opacity: 0.5 }}>
                <HourglassEmpty /> {strings?.label?.loading || 'Loading...'}
            </Box>
        )
    }

    const mon = strings?.page?.monitor || {} as any

    return (
        <Box>
            {/* Overview */}
            <P3xrAccordion title={mon.title || 'Monitoring'} accordionKey="monitor-overview"
                actions={<>
                    <P3xrButton icon={paused ? <PlayArrow sx={{ fontSize: 18 }} /> : <Pause sx={{ fontSize: 18 }} />}
                        label={paused ? (strings?.intention?.resume || 'Resume') : (strings?.intention?.pause || 'Pause')}
                        color="inherit" onClick={(e) => { e.stopPropagation(); setPaused(p => !p) }} />
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                        color="inherit" onClick={(e) => { e.stopPropagation(); exportOverview() }} />
                    <P3xrButton icon={<Archive sx={{ fontSize: 18 }} />} label={strings?.page?.analysis?.exportAll || 'Export All'}
                        color="inherit" onClick={(e) => { e.stopPropagation(); exportAll() }} />
                </>}
            >
                <List disablePadding>
                    <InfoRow label={`Redis ${current.server.version} \u00B7 ${current.server.mode}`} value={uptimeFormatted(current.server.uptime)} />
                    <InfoRow label={mon.memory || 'Memory'} value={current.memory.usedHuman} />
                    <InfoRow label={mon.rss || 'RSS'} value={current.memory.rssHuman} />
                    <InfoRow label={mon.peak || 'Peak'} value={current.memory.peakHuman} />
                    <InfoRow label={mon.fragmentation || 'Fragmentation'} value={`${current.memory.fragRatio}x`} />
                    <InfoRow label={mon.opsPerSec || 'Ops/sec'} value={current.stats.opsPerSec} />
                    <InfoRow label={mon.totalCommands || 'Total Commands'} value={current.stats.totalCommands} />
                    <InfoRow label={mon.clients || 'Clients'} value={current.clients.connected} />
                    <InfoRow label={mon.blocked || 'Blocked'} value={current.clients.blocked} />
                    <InfoRow label={mon.hitsMisses || 'Hit Rate'} value={`${current.stats.hitRate}%`} />
                    <InfoRow label={mon.hitsAndMisses || 'Hits / Misses'} value={`${current.stats.hits} / ${current.stats.misses}`} />
                    <InfoRow label={mon.networkIo || 'Network I/O'} value={`${current.stats.inputKbps.toFixed(1)} / ${current.stats.outputKbps.toFixed(1)} KB/s`} />
                    <InfoRow label={mon.expired || 'Expired'} value={current.stats.expiredKeys} />
                    <InfoRow label={mon.evicted || 'Evicted'} value={current.stats.evictedKeys} />
                </List>
            </P3xrAccordion>

            <Box sx={{ mt: 1 }} />

            {/* Memory Chart */}
            <P3xrAccordion title={`${mon.memory || 'Memory'} (MB)`} accordionKey="monitor-chart-memory"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(memChartRef, 'memory') }} />}>
                <Box ref={memChartRef} sx={{ minHeight: 180, width: '100%', overflow: 'hidden' }} />
            </P3xrAccordion>

            <Box sx={{ mt: 1 }} />

            {/* Ops/sec Chart */}
            <P3xrAccordion title={mon.opsPerSec || 'Ops/sec'} accordionKey="monitor-chart-ops"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(opsChartRef, 'ops') }} />}>
                <Box ref={opsChartRef} sx={{ minHeight: 180, width: '100%', overflow: 'hidden' }} />
            </P3xrAccordion>

            <Box sx={{ mt: 1 }} />

            {/* Clients Chart */}
            <P3xrAccordion title={mon.clients || 'Clients'} accordionKey="monitor-chart-clients"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(cliChartRef, 'clients') }} />}>
                <Box ref={cliChartRef} sx={{ minHeight: 180, width: '100%', overflow: 'hidden' }} />
            </P3xrAccordion>

            <Box sx={{ mt: 1 }} />

            {/* Network I/O Chart */}
            <P3xrAccordion title={`${mon.networkIo || 'Network I/O'} (KB/s)`} accordionKey="monitor-chart-network"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(netChartRef, 'network') }} />}>
                <Box ref={netChartRef} sx={{ minHeight: 180, width: '100%', overflow: 'hidden' }} />
            </P3xrAccordion>

            {/* Slow Log */}
            {current.slowlog.length > 0 && (
                <>
                    <Box sx={{ mt: 1 }} />
                    <P3xrAccordion title={mon.slowLog || 'Slow Log'} accordionKey="monitor-slowlog"
                        actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                            color="inherit" onClick={(e) => { e.stopPropagation(); exportSlowLog() }} />}>
                        <List disablePadding>
                            {current.slowlog.map(entry => (
                                <Box key={entry.id}>
                                    <ListItem sx={{ px: 2, py: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                                            <Box component="kbd" sx={{
                                                px: '6px', py: '2px', borderRadius: '4px', fontSize: 11,
                                                bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                                                fontFamily: "'Roboto Mono', monospace", whiteSpace: 'nowrap',
                                            }}>{entry.duration}{'\u00B5'}s</Box>
                                            <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, wordBreak: 'break-all' }}>{entry.command}</Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </List>
                    </P3xrAccordion>
                </>
            )}

            {/* Client List */}
            <Box sx={{ mt: 1 }} />
            <P3xrAccordion title={mon.clientList || 'Client List'} accordionKey="monitor-clients-list"
                actions={<>
                    <P3xrButton icon={autoRefreshClients ? <CheckBox sx={{ fontSize: 18 }} /> : <CheckBoxOutlineBlank sx={{ fontSize: 18 }} />}
                        label={strings?.label?.autoRefresh || 'Auto'} color="inherit"
                        onClick={(e) => { e.stopPropagation(); toggleAutoClients() }} />
                    {!autoRefreshClients && (
                        <P3xrButton icon={<Refresh sx={{ fontSize: 18 }} />} label={strings?.intention?.refresh || 'Refresh'}
                            color="inherit" onClick={(e) => { e.stopPropagation(); loadClientList() }} />
                    )}
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                        color="inherit" onClick={(e) => { e.stopPropagation(); exportClientList() }} />
                </>}>
                {clientList.length === 0 && (
                    <Box sx={{ p: 2, opacity: 0.5 }}>{clientListLoaded ? (mon.noClients || 'No clients') : (strings?.label?.loading || 'Loading...')}</Box>
                )}
                {clientList.length > 0 && (
                    <List disablePadding>
                        {clientList.map(client => (
                            <Box key={client.id}>
                                <ListItem sx={{ px: 2, py: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                                        <Box component="span" sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13, fontWeight: 700, minWidth: 150 }}>{client.addr}</Box>
                                        {client.name && <Box component="span" sx={{ opacity: 0.5, fontSize: 12 }}>({client.name})</Box>}
                                        <Box component="span" sx={{ flex: 1, textAlign: 'right', fontFamily: "'Roboto Mono', monospace", fontSize: 12, opacity: 0.6 }}>
                                            db{client.db} {'\u00B7'} {client.cmd} {'\u00B7'} {client.idle}s
                                        </Box>
                                        {!isReadonly && (
                                            <Tooltip title={mon.killClient || 'Kill client'}>
                                                <Close sx={{ fontSize: 18, width: 18, height: 18, cursor: 'pointer', color: 'error.main', '&:hover': { opacity: 1 } }}
                                                    onClick={() => killClient(client.id)} />
                                            </Tooltip>
                                        )}
                                    </Box>
                                </ListItem>
                                <Divider />
                            </Box>
                        ))}
                    </List>
                )}
            </P3xrAccordion>

            {/* Top Keys by Memory */}
            <Box sx={{ mt: 1 }} />
            <P3xrAccordion title={mon.topKeys || 'Top Keys by Memory'} accordionKey="monitor-top-keys"
                actions={<>
                    <P3xrButton icon={autoRefreshTopKeys ? <CheckBox sx={{ fontSize: 18 }} /> : <CheckBoxOutlineBlank sx={{ fontSize: 18 }} />}
                        label={strings?.label?.autoRefresh || 'Auto'} color="inherit"
                        onClick={(e) => { e.stopPropagation(); toggleAutoTopKeys() }} />
                    {!autoRefreshTopKeys && (
                        <P3xrButton icon={<Refresh sx={{ fontSize: 18 }} />} label={strings?.intention?.refresh || 'Refresh'}
                            color="inherit" onClick={(e) => { e.stopPropagation(); loadTopKeys() }} />
                    )}
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                        color="inherit" onClick={(e) => { e.stopPropagation(); exportTopKeysFile() }} />
                </>}>
                {topKeys.length === 0 && (
                    <Box sx={{ p: 2, opacity: 0.5 }}>{topKeysLoaded ? (mon.noKeys || 'No keys') : (strings?.label?.loading || 'Loading...')}</Box>
                )}
                {topKeys.length > 0 && (
                    <List disablePadding>
                        {topKeys.map((entry, i) => (
                            <Box key={entry.key}>
                                <ListItem sx={{ px: 2, py: 1 }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <Box sx={{ flex: 1 }}>
                                            <Box component="span" sx={{ opacity: 0.4, mr: 1 }}>#{i + 1}</Box>
                                            <Box component="span" sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{entry.key}</Box>
                                        </Box>
                                        <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{formatBytes(entry.bytes)}</Box>
                                    </Box>
                                </ListItem>
                                <Divider />
                            </Box>
                        ))}
                    </List>
                )}
            </P3xrAccordion>

        </Box>
    )
}
