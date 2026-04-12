/**
 * Memory Analysis page — exact port of Angular memory-analysis.component.
 * Bar charts via canvas (theme-aware), memory breakdown, type distribution, prefix memory, expiration.
 */
import { useState, useEffect, useCallback, useRef } from 'react'
import {
    Box, List, ListItem, Divider, TextField, useTheme,
} from '@mui/material'
import { PlayArrow, HourglassEmpty, Download, Analytics } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useCommonStore } from '../../stores/common.store'
import { request } from '../../stores/socket.service'
import P3xrAccordion from '../../components/P3xrAccordion'
import P3xrButton from '../../components/P3xrButton'

function formatBytes(bytes: number): string {
    if (bytes == null || isNaN(bytes)) return '-'
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

function formatTTL(seconds: number): string {
    if (!seconds || seconds <= 0) return '-'
    if (seconds < 60) return seconds + 's'
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's'
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ' + Math.floor((seconds % 3600) / 60) + 'm'
    return Math.floor(seconds / 86400) + 'd ' + Math.floor((seconds % 86400) / 3600) + 'h'
}

function downloadText(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = filename; a.click()
    URL.revokeObjectURL(url)
}

export default function MemoryAnalysisPage() {
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const connection = useRedisStateStore(s => s.connection)
    const { generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'
    const connName = connection?.name || 'redis'

    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [topN, setTopN] = useState(20)
    const [maxScanKeys, setMaxScanKeys] = useState(5000)
    const [typeEntries, setTypeEntries] = useState<Array<{ type: string; count: number; bytes: number }>>([])

    const typeChartRef = useRef<HTMLDivElement>(null)
    const prefixChartRef = useRef<HTMLDivElement>(null)
    const resizeObRef = useRef<ResizeObserver | null>(null)
    const redrawRef = useRef<() => void>(() => {})

    const getChartColors = useCallback(() => ({
        primary: muiTheme.palette.primary.main || (isDark ? '#90caf9' : '#1976d2'),
        accent: muiTheme.palette.secondary.main || (isDark ? '#ce93d8' : '#9c27b0'),
        warn: muiTheme.palette.error.main || (isDark ? '#ef9a9a' : '#f44336'),
        text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
        grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    }), [muiTheme, isDark])

    const getBarColors = useCallback(() => {
        const c = getChartColors()
        return [c.primary, c.accent, c.warn,
            isDark ? '#ffb74d' : '#ff9800', isDark ? '#81c784' : '#4caf50',
            isDark ? '#4dd0e1' : '#00bcd4', isDark ? '#a1887f' : '#795548', isDark ? '#90a4ae' : '#607d8b']
    }, [getChartColors, isDark])

    const drawBarChart = useCallback((container: HTMLDivElement | null, items: Array<{ label: string; value: number }>) => {
        if (!container || items.length === 0 || container.offsetWidth <= 0) return
        container.innerHTML = ''
        const colors = getChartColors()
        const barColors = getBarColors()
        const dpr = window.devicePixelRatio || 1
        const width = container.offsetWidth || 500
        const barHeight = 24, labelWidth = 120, valueWidth = 80
        const chartLeft = labelWidth + 8, chartRight = width - valueWidth - 8
        const chartWidth = chartRight - chartLeft, topPad = 8
        const height = topPad + items.length * (barHeight + 4) + 8

        const canvas = document.createElement('canvas')
        canvas.width = width * dpr; canvas.height = height * dpr
        canvas.style.width = width + 'px'; canvas.style.height = height + 'px'
        const ctx = canvas.getContext('2d')!
        ctx.scale(dpr, dpr)
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
        container.appendChild(canvas)
    }, [getChartColors, getBarColors])

    const drawCharts = useCallback((analysisData: any, entries: typeof typeEntries) => {
        drawBarChart(typeChartRef.current, entries.map(t => ({ label: t.type, value: t.bytes })))
        drawBarChart(prefixChartRef.current, (analysisData?.prefixMemory || []).slice(0, 20).map((p: any) => ({ label: p.prefix, value: p.totalBytes })))
    }, [drawBarChart])

    // Keep redraw ref in sync for ResizeObserver (always reads latest closure values)
    redrawRef.current = () => {
        if (data && typeEntries.length > 0) drawCharts(data, typeEntries)
    }

    const runAnalysis = useCallback(async () => {
        if (loading) return
        setLoading(true)
        try {
            const resp = await request({ action: 'memory/analysis', payload: { topN, maxScanKeys } })
            const d = resp.data
            setData(d)
            const entries = Object.keys(d.typeDistribution).map(type => ({
                type, count: d.typeDistribution[type], bytes: d.typeMemory[type] || 0,
            })).sort((a, b) => b.bytes - a.bytes)
            setTypeEntries(entries)
            setLoading(false)
            setTimeout(() => drawCharts(d, entries), 100)
        } catch (e) {
            setLoading(false)
            generalHandleError(e)
        }
    }, [topN, maxScanKeys, loading, drawCharts, generalHandleError])

    const connectionId = connection?.id
    useEffect(() => {
        setData(null)
        setTypeEntries([])
        runAnalysis()
    }, [connectionId]) // eslint-disable-line react-hooks/exhaustive-deps

    // Redraw charts on theme change
    const primaryColor = muiTheme.palette.primary.main
    useEffect(() => {
        if (data) setTimeout(() => drawCharts(data, typeEntries), 100)
    }, [isDark, currentLang, primaryColor]) // eslint-disable-line react-hooks/exhaustive-deps

    // ResizeObserver for responsive bar charts in accordions
    const hasData = !!data
    useEffect(() => {
        if (!hasData) return
        let rt: any
        const ob = new ResizeObserver(() => {
            clearTimeout(rt)
            rt = setTimeout(() => redrawRef.current(), 50)
        })
        resizeObRef.current = ob
        if (typeChartRef.current) ob.observe(typeChartRef.current)
        if (prefixChartRef.current) ob.observe(prefixChartRef.current)
        return () => {
            clearTimeout(rt)
            ob.disconnect()
            resizeObRef.current = null
        }
    }, [hasData]) // eslint-disable-line react-hooks/exhaustive-deps

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

    const s = strings?.page?.analysis || {} as any

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

    if (loading && !data) {
        return <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 4, opacity: 0.5 }}><HourglassEmpty /> {s.running || 'Analyzing...'}</Box>
    }
    if (!loading && !data) {
        return <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 4, opacity: 0.5 }}><Analytics /> {s.noData || 'No data. Click Run Analysis to start.'}</Box>
    }
    if (!data) return null

    const m = data.memoryInfo
    const exp = data.expirationOverview

    return (
        <Box>
            {/* Controls */}
            <P3xrAccordion title={s.title || 'Memory Analysis'} accordionKey="analysis-controls"
                actions={<>
                    <P3xrButton icon={loading ? <HourglassEmpty sx={{ fontSize: 18 }} /> : <PlayArrow sx={{ fontSize: 18 }} />}
                        label={loading ? (s.running || 'Analyzing...') : (s.runAnalysis || 'Run Analysis')}
                        color="inherit" disabled={loading} onClick={(e) => { e.stopPropagation(); runAnalysis() }} />
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                        color="inherit" onClick={(e) => { e.stopPropagation();
                            downloadText([`${s.keysScanned || 'Keys Scanned'}: ${data.totalScanned} / ${data.dbSize}`,
                                `${s.topN || 'Top N'}: ${topN}`, `${s.maxScanKeys || 'Max Scan Keys'}: ${maxScanKeys}`].join('\n'),
                                `${connName}-analysis-overview.txt`) }} />
                </>}>
                <List disablePadding>
                    <InfoRow label={s.keysScanned || 'Keys Scanned'} value={`${data.totalScanned} / ${data.dbSize}`} />
                    <ListItem sx={{ px: 2, py: 1 }}>
                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ flex: 1 }}>{s.topN || 'Top N'}</Box>
                            <TextField size="small" type="number" value={topN} onChange={e => setTopN(Number(e.target.value))}
                                slotProps={{ htmlInput: { min: 5, max: 100 } }} sx={{ width: 80 }} />
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ px: 2, py: 1 }}>
                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ flex: 1 }}>{s.maxScanKeys || 'Max Scan Keys'}</Box>
                            <TextField size="small" type="number" value={maxScanKeys} onChange={e => setMaxScanKeys(Number(e.target.value))}
                                slotProps={{ htmlInput: { min: 100, max: 100000, step: 1000 } }} sx={{ width: 100 }} />
                        </Box>
                    </ListItem>
                </List>
            </P3xrAccordion>

            <br />

            {/* Memory Breakdown */}
            <P3xrAccordion title={s.memoryBreakdown || 'Memory Breakdown'} accordionKey="analysis-memory-info"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation();
                        downloadText([`${s.totalMemory || 'Total'}: ${m.usedHuman}`, `${s.rssMemory || 'RSS'}: ${m.rssHuman}`,
                            `${s.peakMemory || 'Peak'}: ${m.peakHuman}`, `${s.overheadMemory || 'Overhead'}: ${formatBytes(m.overhead)}`,
                            `${s.datasetMemory || 'Dataset'}: ${formatBytes(m.dataset)}`, `${s.luaMemory || 'Lua'}: ${formatBytes(m.lua)}`,
                            `${s.fragmentation || 'Fragmentation'}: ${m.fragRatio}x`, `${s.allocator || 'Allocator'}: ${m.allocator}`].join('\n'),
                            `${connName}-memory-breakdown.txt`) }} />}>
                <List disablePadding>
                    <InfoRow label={s.totalMemory || 'Total Memory'} value={m.usedHuman} />
                    <InfoRow label={s.rssMemory || 'RSS Memory'} value={m.rssHuman} />
                    <InfoRow label={s.peakMemory || 'Peak Memory'} value={m.peakHuman} />
                    <InfoRow label={s.overheadMemory || 'Overhead'} value={formatBytes(m.overhead)} />
                    <InfoRow label={s.datasetMemory || 'Dataset'} value={formatBytes(m.dataset)} />
                    <InfoRow label={s.luaMemory || 'Lua Memory'} value={formatBytes(m.lua)} />
                    <InfoRow label={s.fragmentation || 'Fragmentation'} value={`${m.fragRatio}x`} />
                    <InfoRow label={s.allocator || 'Allocator'} value={m.allocator} />
                </List>
            </P3xrAccordion>

            <br />

            {/* Type Distribution */}
            <P3xrAccordion title={s.typeDistribution || 'Type Distribution'} accordionKey="analysis-type-dist"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(typeChartRef, 'type-distribution') }} />}>
                <Box ref={typeChartRef} sx={{ minHeight: 200, width: '100%' }} />
                <List disablePadding>
                    {typeEntries.map(item => (
                        <Box key={item.type}>
                            <ListItem sx={{ px: 2, py: 1 }}>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Box component="span" sx={{ fontWeight: 500 }}>{item.type}</Box>
                                        <Box component="span" sx={{ ml: 1, opacity: 0.5, fontSize: 12 }}>{item.count} keys</Box>
                                    </Box>
                                    <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{formatBytes(item.bytes)}</Box>
                                </Box>
                            </ListItem>
                            <Divider />
                        </Box>
                    ))}
                </List>
            </P3xrAccordion>

            <br />

            {/* Memory by Prefix */}
            <P3xrAccordion title={s.prefixMemory || 'Memory by Prefix'} accordionKey="analysis-prefix-mem"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation(); exportChart(prefixChartRef, 'memory-by-prefix') }} />}>
                <Box ref={prefixChartRef} sx={{ minHeight: 200, width: '100%' }} />
                <List disablePadding>
                    {(data.prefixMemory || []).map((item: any, i: number) => (
                        <Box key={item.prefix}>
                            <ListItem sx={{ px: 2, py: 1 }}>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Box component="span" sx={{ opacity: 0.4, mr: 1 }}>#{i + 1}</Box>
                                        <Box component="span" sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{item.prefix}</Box>
                                        <Box component="span" sx={{ ml: 1, opacity: 0.5, fontSize: 12 }}>{item.keyCount} keys</Box>
                                    </Box>
                                    <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 13 }}>{formatBytes(item.totalBytes)}</Box>
                                </Box>
                            </ListItem>
                            <Divider />
                        </Box>
                    ))}
                </List>
            </P3xrAccordion>

            <br />

            {/* Key Expiration Overview */}
            <P3xrAccordion title={s.expirationOverview || 'Key Expiration'} accordionKey="analysis-expiration"
                actions={<P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export || 'Export'}
                    color="inherit" onClick={(e) => { e.stopPropagation();
                        downloadText([`${s.withTTL || 'With TTL'}: ${exp.withTTL}`, `${s.persistent || 'Persistent'}: ${exp.persistent}`,
                            `${s.avgTTL || 'Average TTL'}: ${formatTTL(exp.avgTTL)}`].join('\n'), `${connName}-expiration.txt`) }} />}>
                <List disablePadding>
                    <InfoRow label={s.withTTL || 'With TTL'} value={exp.withTTL} />
                    <InfoRow label={s.persistent || 'Persistent'} value={exp.persistent} />
                    <InfoRow label={s.avgTTL || 'Average TTL'} value={formatTTL(exp.avgTTL)} />
                </List>
            </P3xrAccordion>

        </Box>
    )
}
