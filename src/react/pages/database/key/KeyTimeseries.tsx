/**
 * TimeSeries key type renderer — exact port of Angular key-timeseries.component.
 * uPlot chart, range controls, data table with virtual scroll, TS.INFO with alter mode.
 */
import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import {
    Box, Button, Tooltip, TextField, MenuItem, Select, FormControl, InputLabel,
    List, ListItem, Divider, useMediaQuery, useTheme,
} from '@mui/material'
import {
    Edit, Image, CheckBox, CheckBoxOutlineBlank, Refresh, Add, Delete, Save,
} from '@mui/icons-material'
import { useVirtualizer } from '@tanstack/react-virtual'
import 'uplot/dist/uPlot.min.css'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { useOverlayStore } from '../../../stores/overlay.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps } from './key-type-base'
import P3xrAccordion from '../../../components/P3xrAccordion'
import P3xrButton from '../../../components/P3xrButton'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'

interface DataPoint { timestamp: number; value: number }

const aggregationTypes = ['avg', 'min', 'max', 'sum', 'count', 'first', 'last', 'range', 'std.p', 'std.s', 'var.p', 'var.s']
const SERIES_COLORS = ['#1976d2', '#9c27b0', '#f44336', '#4caf50', '#ff9800', '#00bcd4', '#e91e63', '#8bc34a']

export default function KeyTimeseries({ response, value, keyName, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const muiTheme = useTheme()
    const isGtSm = useMediaQuery('(min-width: 960px)')
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [tsInfo, setTsInfo] = useState<any>(() => value || {})
    const [rangeData, setRangeData] = useState<DataPoint[]>([])
    const [rangeFrom, setRangeFrom] = useState('')
    const [rangeTo, setRangeTo] = useState('')
    const [aggregationType, setAggregationType] = useState('')
    const [aggregationBucket, setAggregationBucket] = useState('')
    const [addTimestamp, setAddTimestamp] = useState('*')
    const [addValue, setAddValue] = useState('')
    const [autoRefresh, setAutoRefresh] = useState(false)
    const [alterMode, setAlterMode] = useState(false)
    const [alterRetention, setAlterRetention] = useState(0)
    const [alterDuplicatePolicy, setAlterDuplicatePolicy] = useState('LAST')
    const [alterLabels, setAlterLabels] = useState('')
    const [overlayKeysInput, setOverlayKeysInput] = useState('')
    const [mrangeFilter, setMrangeFilter] = useState('')
    const [overlaySeries, setOverlaySeries] = useState<Array<{ key: string; data: DataPoint[] }>>([])
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [editDialogData, setEditDialogData] = useState<any>(null)
    const [chartReady, setChartReady] = useState(false)

    const chartRef = useRef<HTMLDivElement>(null)
    const plotRef = useRef<any>(null)
    const uPlotRef = useRef<any>(null)
    const resizeObserverRef = useRef<ResizeObserver | null>(null)
    const autoRefreshRef = useRef<any>(null)
    const debounceRef = useRef<any>(null)
    const dataParentRef = useRef<HTMLDivElement>(null)
    // Keep latest data in refs for chart operations (avoids stale closures)
    const rangeDataRef = useRef<DataPoint[]>([])
    const overlaySeriesRef = useRef<typeof overlaySeries>([])
    rangeDataRef.current = rangeData
    overlaySeriesRef.current = overlaySeries

    // Virtual scrolling for data table
    const virtualizer = useVirtualizer({
        count: rangeData.length,
        getScrollElement: () => dataParentRef.current,
        estimateSize: () => 40,
        overscan: 10,
    })

    // --- Computed ---
    const infoLabels = useMemo(() => {
        if (!tsInfo) return []
        const skip = new Set(['labels', 'rules', 'sourceKey', 'chunks'])
        return Object.entries(tsInfo).filter(([k]) => !skip.has(k)).map(([key, val]) => ({ key, value: val }))
    }, [tsInfo])

    const tsLabels = useMemo(() => {
        const labels = tsInfo?.labels
        if (!labels || typeof labels !== 'object') return []
        return Object.entries(labels).map(([key, val]) => ({ key, value: String(val) }))
    }, [tsInfo])

    const tsRules = useMemo(() => Array.isArray(tsInfo?.rules) ? tsInfo.rules : [], [tsInfo])

    const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : ''

    const formatTimestamp = useCallback((ts: number) => {
        return new Date(ts).toLocaleString(currentLang || 'en', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            fractionalSecondDigits: 3,
        } as any)
    }, [currentLang])

    // --- Chart helpers ---
    // Use a ref so initChart always reads the latest theme colors (no stale closures)
    const themeRef = useRef({ primary: muiTheme.palette.primary.main, isDark })
    themeRef.current = { primary: muiTheme.palette.primary.main, isDark }
    const langRef = useRef(currentLang)
    langRef.current = currentLang

    const getChartColors = useCallback(() => {
        const { primary, isDark: dark } = themeRef.current
        return {
            primary: primary || (dark ? '#90caf9' : '#1976d2'),
            text: dark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
            grid: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        }
    }, [])

    const buildChartData = useCallback((data: DataPoint[], overlays: typeof overlaySeries): number[][] => {
        if (overlays.length === 0) {
            return [data.map(d => d.timestamp / 1000), data.map(d => d.value)]
        }
        const allSeries = [data, ...overlays.map(s => s.data)]
        const tsSet = new Set<number>()
        for (const series of allSeries) for (const d of series) tsSet.add(d.timestamp)
        const sortedTs = Array.from(tsSet).sort((a, b) => a - b)
        const timestamps = sortedTs.map(t => t / 1000)
        const result: number[][] = [timestamps]
        for (const series of allSeries) {
            const valueMap = new Map<number, number>()
            for (const d of series) valueMap.set(d.timestamp, d.value)
            result.push(sortedTs.map(t => valueMap.has(t) ? valueMap.get(t)! : null as any))
        }
        return result
    }, [])

    const destroyChart = useCallback(() => {
        resizeObserverRef.current?.disconnect()
        resizeObserverRef.current = null
        plotRef.current?.destroy()
        plotRef.current = null
    }, [])

    const initChart = useCallback(() => {
        if (!uPlotRef.current || !chartRef.current) return
        destroyChart()

        const el = chartRef.current
        const w = el.clientWidth || 400
        const data = rangeDataRef.current
        const overlays = overlaySeriesRef.current
        const colors = getChartColors()
        const lang = langRef.current || 'en'

        const seriesConfig: any[] = [
            {
                label: strings?.label?.time,
                value: (_: any, v: number) => {
                    if (!v) return ''
                    return new Date(v * 1000).toLocaleString(langRef.current || 'en', {
                        year: 'numeric', month: '2-digit', day: '2-digit',
                        hour: '2-digit', minute: '2-digit', second: '2-digit',
                    })
                },
            },
            { label: keyName, stroke: colors.primary, width: 2, fill: colors.primary + '15' },
        ]
        for (let i = 0; i < overlays.length; i++) {
            seriesConfig.push({
                label: overlays[i].key,
                stroke: SERIES_COLORS[(i + 1) % SERIES_COLORS.length],
                width: 2,
            })
        }

        const opts = {
            width: w, height: 400,
            cursor: { show: true, drag: { x: false, y: false } },
            legend: { show: true, live: true },
            scales: { x: { time: true } },
            axes: [
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto',
                    values: (_: any, ticks: number[]) => ticks.map(t =>
                        new Date(t * 1000).toLocaleTimeString(langRef.current || 'en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
                    ),
                },
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto Mono',
                    size: 65,
                },
            ],
            series: seriesConfig,
        }

        const chartData = buildChartData(data, overlays)
        plotRef.current = new uPlotRef.current(opts, chartData, el)

        let timer: any
        resizeObserverRef.current = new ResizeObserver(() => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                const nw = el.clientWidth
                if (nw > 0) plotRef.current?.setSize({ width: nw, height: 400 })
            }, 50)
        })
        resizeObserverRef.current.observe(el)
    }, [destroyChart, getChartColors, buildChartData]) // reads theme/lang/data from refs

    const updateChart = useCallback(() => {
        if (!uPlotRef.current || !chartRef.current) return
        const data = rangeDataRef.current
        const overlays = overlaySeriesRef.current
        const expectedSeries = 2 + overlays.length
        if (!plotRef.current || plotRef.current.series?.length !== expectedSeries) {
            initChart()
            return
        }
        const chartData = buildChartData(data, overlays)
        plotRef.current.setData(chartData, true)
        if (chartData[0].length > 0) {
            plotRef.current.setScale('x', { min: chartData[0][0], max: chartData[0][chartData[0].length - 1] })
        }
    }, [initChart, buildChartData])

    // --- Load range ---
    const loadRange = useCallback(async () => {
        try {
            const payload: any = { key: keyName }
            if (rangeFrom) payload.from = rangeFrom
            if (rangeTo) payload.to = rangeTo
            if (aggregationType && aggregationBucket) {
                payload.aggregation = { type: aggregationType, timeBucket: parseInt(aggregationBucket, 10) }
            }
            const resp = await request({ action: 'timeseries/range', payload })
            const data: DataPoint[] = resp.data || []
            setRangeData(data)
            rangeDataRef.current = data

            // Overlay keys
            const newOverlays: typeof overlaySeries = []
            const overlayKeys = overlayKeysInput.split(',').map(k => k.trim()).filter(k => k.length > 0)
            for (const ok of overlayKeys) {
                try {
                    const op: any = { key: ok }
                    if (rangeFrom) op.from = rangeFrom
                    if (rangeTo) op.to = rangeTo
                    if (aggregationType && aggregationBucket) {
                        op.aggregation = { type: aggregationType, timeBucket: parseInt(aggregationBucket, 10) }
                    }
                    const or = await request({ action: 'timeseries/range', payload: op })
                    newOverlays.push({ key: ok, data: or.data || [] })
                } catch { /* skip */ }
            }

            // MRANGE by label filter
            if (mrangeFilter.trim().length > 0) {
                try {
                    const mp: any = { filter: mrangeFilter.trim() }
                    if (rangeFrom) mp.from = rangeFrom
                    if (rangeTo) mp.to = rangeTo
                    if (aggregationType && aggregationBucket) {
                        mp.aggregation = { type: aggregationType, timeBucket: parseInt(aggregationBucket, 10) }
                    }
                    const mr = await request({ action: 'timeseries/mrange', payload: mp })
                    for (const entry of (mr.data || [])) {
                        if (entry.key !== keyName) newOverlays.push({ key: entry.key, data: entry.data })
                    }
                } catch { /* skip */ }
            }

            setOverlaySeries(newOverlays)
            overlaySeriesRef.current = newOverlays
            // Update chart after state is set
            setTimeout(() => updateChart(), 0)
        } catch (e: any) { generalHandleError(e) }
    }, [keyName, rangeFrom, rangeTo, aggregationType, aggregationBucket, overlayKeysInput, mrangeFilter, updateChart, generalHandleError])

    const debouncedLoadRange = useCallback(() => {
        clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => loadRange(), 500)
    }, [loadRange])

    // --- Init: load uPlot module ---
    useEffect(() => {
        let cancelled = false
        import('uplot').then(mod => {
            if (cancelled) return
            uPlotRef.current = mod.default
            setChartReady(true)
        }).catch(e => console.error('Failed to load uPlot', e))
        return () => {
            cancelled = true
            destroyChart()
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // --- Init: load data on mount / value change ---
    useEffect(() => {
        setTsInfo(value || {})
        loadRange()
        // Ensure default label
        if (!isReadonly) {
            const labels = (value as any)?.labels
            const labelCount = labels && typeof labels === 'object' ? Object.keys(labels).length : 0
            if (labelCount === 0) {
                request({
                    action: 'timeseries/alter',
                    payload: { key: keyName, labels: `key ${keyName}` },
                }).then(() => {
                    setTsInfo((prev: any) => ({ ...prev, labels: { key: keyName } }))
                }).catch(() => {})
            }
        }
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

    // --- Init chart when uPlot is loaded or data first arrives ---
    useEffect(() => {
        if (!chartReady) return
        const t = setTimeout(() => {
            if (plotRef.current) {
                updateChart()
            } else {
                initChart()
            }
        }, 150)
        return () => clearTimeout(t)
    }, [chartReady, rangeData]) // eslint-disable-line react-hooks/exhaustive-deps

    // --- Full re-init chart on theme or language change (colors/labels change) ---
    const primaryColor = muiTheme.palette.primary.main
    useEffect(() => {
        if (!chartReady) return
        const t = setTimeout(() => {
            destroyChart()
            initChart()
        }, 100)
        return () => clearTimeout(t)
    }, [isDark, currentLang, primaryColor]) // eslint-disable-line react-hooks/exhaustive-deps

    // Auto-refresh
    useEffect(() => {
        if (autoRefresh) {
            autoRefreshRef.current = setInterval(() => loadRange(), 10000)
        } else {
            clearInterval(autoRefreshRef.current)
        }
        return () => clearInterval(autoRefreshRef.current)
    }, [autoRefresh, loadRange])

    // --- Actions ---
    const addDataPoint = useCallback(async () => {
        if (!addValue) return
        try {
            await request({ action: 'timeseries/add', payload: { key: keyName, timestamp: addTimestamp || '*', value: parseFloat(addValue) } })
            toast(strings?.status?.added)
            setAddValue('')
            onRefresh()
        } catch (e: any) { generalHandleError(e) }
    }, [keyName, addTimestamp, addValue, strings, toast, onRefresh, generalHandleError])

    const deleteDataPoint = useCallback(async (point: DataPoint) => {
        try {
            await confirm({ message: strings?.confirm?.delete })
            await request({ action: 'timeseries/del', payload: { key: keyName, from: point.timestamp, to: point.timestamp } })
            toast(strings?.status?.deleted)
            onRefresh()
        } catch (e: any) { if (e !== undefined && e !== null) generalHandleError(e) }
    }, [keyName, strings, confirm, toast, onRefresh, generalHandleError])

    const editDataPoint = useCallback((point: DataPoint) => {
        setEditDialogData({
            type: 'edit',
            model: { type: 'timeseries', key: keyName, tsTimestamp: String(point.timestamp), value: point.value, originalTimestamp: point.timestamp },
        })
        setEditDialogOpen(true)
    }, [keyName])

    const editAllDataPoints = useCallback(() => {
        const allPoints = rangeData.map(p => `${p.timestamp} ${p.value}`).join('\n')
        const currentLabels = tsLabels.map(l => `${l.key} ${l.value}`).join(' ') || `key ${keyName}`
        setEditDialogData({
            type: 'edit',
            model: { type: 'timeseries', key: keyName, value: allPoints, tsEditAll: true, tsLabels: currentLabels },
        })
        setEditDialogOpen(true)
    }, [rangeData, tsLabels, keyName])

    const handleEditClose = useCallback((result?: any) => {
        setEditDialogOpen(false)
        setEditDialogData(null)
        if (result) {
            onRefresh()
            loadRange()
        }
    }, [onRefresh, loadRange])

    const toggleAlterMode = useCallback(() => {
        setAlterMode(prev => {
            if (!prev) {
                setAlterRetention(tsInfo?.retentionTime || 0)
                setAlterDuplicatePolicy((tsInfo?.duplicatePolicy || 'LAST').toUpperCase())
                const labels = tsLabels.map(l => `${l.key} ${l.value}`).join(' ')
                setAlterLabels(labels || `key ${keyName}`)
            }
            return !prev
        })
    }, [tsInfo, tsLabels, keyName])

    const saveAlter = useCallback(async () => {
        try {
            const labels = alterLabels.trim().length > 0 ? alterLabels : `key ${keyName}`
            await request({
                action: 'timeseries/alter',
                payload: { key: keyName, retention: alterRetention, duplicatePolicy: alterDuplicatePolicy, labels },
            })
            toast(strings?.status?.saved)
            setAlterMode(false)
            onRefresh()
        } catch (e: any) { generalHandleError(e) }
    }, [keyName, alterRetention, alterDuplicatePolicy, alterLabels, strings, toast, onRefresh, generalHandleError])

    const exportChartPng = useCallback(() => {
        if (!plotRef.current || !chartRef.current) return
        const chartCanvas = chartRef.current.querySelector('canvas') as HTMLCanvasElement
        if (!chartCanvas) return

        const bgColor = isDark ? '#1e1e1e' : '#ffffff'
        const textColor = isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)'
        const padding = 20
        const titleHeight = 30
        const legendHeight = 30
        const totalWidth = chartCanvas.width + padding * 2
        const totalHeight = chartCanvas.height + padding * 2 + titleHeight + legendHeight

        const exportCanvas = document.createElement('canvas')
        exportCanvas.width = totalWidth
        exportCanvas.height = totalHeight
        const ctx = exportCanvas.getContext('2d')!
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, totalWidth, totalHeight)
        ctx.fillStyle = textColor
        ctx.font = 'bold 14px Roboto, sans-serif'
        ctx.fillText(keyName, padding, padding + 16)
        ctx.drawImage(chartCanvas, padding, padding + titleHeight)

        const allSeriesKeys = [keyName, ...overlaySeries.map(s => s.key)]
        const colors = [getChartColors().primary, ...overlaySeries.map((_, i) => SERIES_COLORS[(i + 1) % SERIES_COLORS.length])]
        let legendX = padding
        const legendY = padding + titleHeight + chartCanvas.height + 16
        ctx.font = '12px Roboto, sans-serif'
        for (let i = 0; i < allSeriesKeys.length; i++) {
            ctx.fillStyle = colors[i]
            ctx.fillRect(legendX, legendY - 8, 12, 12)
            ctx.fillStyle = textColor
            ctx.fillText(allSeriesKeys[i], legendX + 16, legendY + 2)
            legendX += ctx.measureText(allSeriesKeys[i]).width + 32
        }

        const url = exportCanvas.toDataURL('image/png')
        const a = document.createElement('a')
        a.href = url; a.download = `${keyName}-chart.png`; a.click()
    }, [keyName, overlaySeries, isDark, getChartColors])

    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
    const listBorder = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    const iconSx = (color: string) => ({ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color, '&:hover': { opacity: 1 } })
    const fieldSx = { minWidth: 140, maxWidth: 200, '& .MuiInputBase-input': { fontSize: 13 }, '& .MuiInputLabel-root': { fontSize: 13 } }

    return (
        <Box className="p3xr-key-type-content">
            {/* Chart accordion */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.timeseries?.chart}
                accordionKey="ts-chart"
                actions={<>
                    {!isReadonly && (
                        <P3xrButton icon={<Edit sx={{ fontSize: 18 }} />} label={strings?.intention?.edit}
                            breakpoint={1280} color="inherit"
                            onClick={(e) => { e.stopPropagation(); editAllDataPoints() }} />
                    )}
                    <P3xrButton icon={<Image sx={{ fontSize: 18 }} />} label={strings?.page?.key?.timeseries?.exportChart}
                        breakpoint={1280} color="inherit"
                        onClick={(e) => { e.stopPropagation(); exportChartPng() }} />
                    <P3xrButton icon={autoRefresh ? <CheckBox sx={{ fontSize: 18 }} /> : <CheckBoxOutlineBlank sx={{ fontSize: 18 }} />}
                        label={strings?.label?.autoRefresh} breakpoint={1280} color="inherit"
                        onClick={(e) => { e.stopPropagation(); setAutoRefresh(v => !v) }} />
                    {!autoRefresh && (
                        <P3xrButton icon={<Refresh sx={{ fontSize: 18 }} />} label={strings?.intention?.refresh}
                            breakpoint={1280} color="inherit"
                            onClick={(e) => { e.stopPropagation(); loadRange() }} />
                    )}
                </>}
            >
                <Box sx={{ p: 2 }}>
                    {/* Range controls */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1, py: 1 }}>
                        <TextField size="small" sx={fieldSx} label={strings?.page?.key?.timeseries?.from} placeholder="-"
                            value={rangeFrom} onChange={e => { setRangeFrom(e.target.value); debouncedLoadRange() }} />
                        <TextField size="small" sx={fieldSx} label={strings?.page?.key?.timeseries?.to} placeholder="+"
                            value={rangeTo} onChange={e => { setRangeTo(e.target.value); debouncedLoadRange() }} />
                        <FormControl size="small" sx={fieldSx}>
                            <InputLabel sx={{ fontSize: 13 }}>{strings?.page?.key?.timeseries?.aggregation}</InputLabel>
                            <Select value={aggregationType} label={strings?.page?.key?.timeseries?.aggregation}
                                onChange={e => { setAggregationType(e.target.value); setTimeout(() => loadRange(), 0) }}
                                sx={{ fontSize: 13 }}>
                                <MenuItem value="">{strings?.page?.key?.timeseries?.none}</MenuItem>
                                {aggregationTypes.map(a => <MenuItem key={a} value={a}>{a}</MenuItem>)}
                            </Select>
                        </FormControl>
                        {aggregationType && (
                            <TextField size="small" sx={fieldSx} type="number"
                                label={strings?.page?.key?.timeseries?.timeBucket} placeholder="5000"
                                value={aggregationBucket} onChange={e => { setAggregationBucket(e.target.value); debouncedLoadRange() }} />
                        )}
                        <TextField size="small" sx={{ ...fieldSx, minWidth: 200 }}
                            label={strings?.page?.key?.timeseries?.overlay}
                            placeholder={strings?.page?.key?.timeseries?.overlayHint}
                            value={overlayKeysInput} onChange={e => { setOverlayKeysInput(e.target.value); debouncedLoadRange() }} />
                        <TextField size="small" sx={{ ...fieldSx, minWidth: 180 }}
                            label={strings?.page?.key?.timeseries?.mrangeFilter}
                            placeholder={strings?.page?.key?.timeseries?.mrangeHint}
                            value={mrangeFilter} onChange={e => { setMrangeFilter(e.target.value); debouncedLoadRange() }} />
                    </Box>

                    {/* Data points count */}
                    <Box sx={{ py: '4px', opacity: 0.6, fontSize: 13 }}>
                        {rangeData.length} {strings?.page?.key?.timeseries?.dataPoints}
                    </Box>

                    {/* Chart container */}
                    <Box ref={chartRef} sx={{ width: '100%', minHeight: 400 }} />

                    {/* Add data point */}
                    {!isReadonly && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1, mt: 2 }}>
                            <TextField size="small" sx={fieldSx}
                                label={strings?.page?.key?.timeseries?.timestamp}
                                placeholder="* (auto)" value={addTimestamp}
                                onChange={e => setAddTimestamp(e.target.value)} />
                            <TextField size="small" sx={fieldSx} type="number"
                                label={strings?.page?.key?.timeseries?.value}
                                value={addValue} onChange={e => setAddValue(e.target.value)}
                                onKeyDown={e => { if (e.key === 'Enter') addDataPoint() }} />
                            <P3xrButton icon={<Add fontSize="small" />} label={strings?.intention?.add}
                                raised color="primary" onClick={() => addDataPoint()} disabled={!addValue} />
                        </Box>
                    )}
                </Box>
            </P3xrAccordion>

            {/* Data table accordion */}
            {rangeData.length > 0 && (
                <>
                    <br />
                    <P3xrAccordion
                        title={capitalize(strings?.page?.key?.timeseries?.dataPoints) + ` (${rangeData.length})`}
                        accordionKey="ts-data"
                    >
                        <Box>
                            {/* Header */}
                            <Box sx={{
                                display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, fontWeight: 'bold',
                                bgcolor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.contrastText,
                                borderBottom: `2px solid ${listBorder}`,
                            }}>
                                <Box component="span" sx={{ flex: 1 }}>{strings?.page?.key?.timeseries?.timestamp}</Box>
                                <Box component="span">{strings?.page?.key?.timeseries?.value}</Box>
                                {!isReadonly && <Box component="span" sx={{ minWidth: 52 }} />}
                            </Box>

                            {/* Virtual scroll */}
                            <Box ref={dataParentRef} sx={{ height: 600, overflow: 'auto' }}>
                                <Box sx={{ height: virtualizer.getTotalSize(), width: '100%', position: 'relative' }}>
                                    {virtualizer.getVirtualItems().map(vRow => {
                                        const point = rangeData[vRow.index]
                                        return (
                                            <Box key={vRow.key} sx={{
                                                position: 'absolute', top: 0, left: 0, width: '100%',
                                                transform: `translateY(${vRow.start}px)`,
                                                height: vRow.size,
                                                display: 'flex', alignItems: 'center', gap: 1, px: 2,
                                                borderBottom: `1px solid ${listBorder}`,
                                                bgcolor: vRow.index % 2 === 0 ? oddBg : 'transparent',
                                                '&:hover': { bgcolor: `${hoverBg} !important` },
                                            }}>
                                                <Box component="span" sx={{ flex: 1, fontSize: 13 }}>{formatTimestamp(point.timestamp)}</Box>
                                                <Box component="span" sx={{ fontSize: 13, fontFamily: "'Roboto Mono', monospace" }}>{point.value}</Box>
                                                {!isReadonly && (
                                                    <Box component="span" sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Tooltip title={strings?.intention?.delete ?? 'Delete'}>
                                                            <Delete sx={iconSx('error.main')} onClick={() => deleteDataPoint(point)} />
                                                        </Tooltip>
                                                        <Tooltip title={strings?.intention?.edit ?? 'Edit'}>
                                                            <Edit sx={iconSx('primary.main')} onClick={() => editDataPoint(point)} />
                                                        </Tooltip>
                                                    </Box>
                                                )}
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Box>
                        </Box>
                    </P3xrAccordion>
                </>
            )}

            {/* TS.INFO accordion */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.timeseries?.info}
                accordionKey="ts-info"
                actions={!isReadonly ? (
                    <P3xrButton icon={alterMode ? <CheckBox sx={{ fontSize: 18 }} /> : <Edit sx={{ fontSize: 18 }} />}
                        label={strings?.intention?.edit} color="inherit"
                        onClick={(e) => { e.stopPropagation(); toggleAlterMode() }} />
                ) : undefined}
            >
                {alterMode && (
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1 }}>
                            <TextField size="small" type="number" sx={{ flex: 1, minWidth: 150 }}
                                label={`${strings?.page?.key?.timeseries?.retention} (ms)`}
                                helperText={strings?.page?.key?.timeseries?.retentionHint}
                                value={alterRetention} onChange={e => setAlterRetention(Number(e.target.value))} />
                            <FormControl size="small" sx={{ flex: 1, minWidth: 150 }}>
                                <InputLabel>{strings?.page?.key?.timeseries?.duplicatePolicy}</InputLabel>
                                <Select value={alterDuplicatePolicy}
                                    label={strings?.page?.key?.timeseries?.duplicatePolicy}
                                    onChange={e => setAlterDuplicatePolicy(e.target.value)}>
                                    {['LAST', 'FIRST', 'MIN', 'MAX', 'SUM', 'BLOCK'].map(p =>
                                        <MenuItem key={p} value={p}>{p}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <TextField size="small" sx={{ flex: 1, minWidth: 200 }}
                                label={strings?.page?.key?.timeseries?.labels}
                                helperText={strings?.page?.key?.timeseries?.labelsHint}
                                value={alterLabels} onChange={e => setAlterLabels(e.target.value)} />
                            <P3xrButton icon={<Save fontSize="small" />} label={strings?.intention?.save}
                                raised color="primary" onClick={() => saveAlter()} />
                        </Box>
                    </Box>
                )}

                <List disablePadding>
                    {infoLabels.map(item => (
                        <Box key={item.key}>
                            <ListItem sx={{ px: 2, py: 1 }}>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box component="span" sx={{ flex: 1, fontWeight: 500 }}>{item.key}</Box>
                                    <Box component="span" sx={{ wordBreak: 'break-all' }}>{String(item.value)}</Box>
                                </Box>
                            </ListItem>
                            <Divider />
                        </Box>
                    ))}

                    {tsLabels.length > 0 && (
                        <>
                            <ListItem sx={{ px: 2, py: 1 }}><strong>{strings?.page?.key?.timeseries?.labels}</strong></ListItem>
                            <Divider />
                            {tsLabels.map(label => (
                                <Box key={label.key}>
                                    <ListItem sx={{ px: 2, py: 1 }}>
                                        <Box sx={{ display: 'flex', width: '100%' }}>
                                            <Box component="span" sx={{ flex: 1, fontWeight: 500 }}>{label.key}</Box>
                                            <Box component="span" sx={{ wordBreak: 'break-all' }}>{label.value}</Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </>
                    )}

                    {tsRules.length > 0 && (
                        <>
                            <ListItem sx={{ px: 2, py: 1 }}><strong>{strings?.page?.key?.timeseries?.rules}</strong></ListItem>
                            <Divider />
                            {tsRules.map((rule: any) => (
                                <Box key={rule.destKey}>
                                    <ListItem sx={{ px: 2, py: 1 }}>
                                        <Box sx={{ display: 'flex', width: '100%' }}>
                                            <Box component="span" sx={{ flex: 1, fontWeight: 500 }}>{rule.destKey}</Box>
                                            <Box component="span">{rule.aggregationType} / {rule.bucketDuration}ms</Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </>
                    )}
                </List>
            </P3xrAccordion>

            <KeyNewOrSetDialog open={editDialogOpen} data={editDialogData} onClose={handleEditClose} />
        </Box>
    )
}
