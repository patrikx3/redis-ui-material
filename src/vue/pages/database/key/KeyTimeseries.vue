<script setup lang="ts">
/**
 * TimeSeries key type renderer — exact port of React KeyTimeseries.tsx.
 * uPlot chart, range controls, data table with virtual scroll, TS.INFO with alter mode.
 */
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { storeToRefs } from 'pinia'
import P3xrAccordion from '../../../components/P3xrAccordion.vue'
import P3xrButton from '../../../components/P3xrButton.vue'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useCommonStore } from '../../../stores/common'
import { useOverlayStore } from '../../../stores/overlay'
import { useThemeStore } from '../../../stores/theme'
import { request } from '../../../stores/socket.service'
import { str } from './key-type-base'
import 'uplot/dist/uPlot.min.css'

interface DataPoint { timestamp: number; value: number }

const aggregationTypes = ['avg', 'min', 'max', 'sum', 'count', 'first', 'last', 'range', 'std.p', 'std.s', 'var.p', 'var.s']
const SERIES_COLORS = ['#1976d2', '#9c27b0', '#f44336', '#4caf50', '#ff9800', '#00bcd4', '#e91e63', '#8bc34a']

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const state = useRedisStateStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { themeKey } = storeToRefs(useThemeStore())
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))
const isReadonly = computed(() => state.connection?.readonly === true)

// State
const tsInfo = ref<any>({})
const rangeData = ref<DataPoint[]>([])
const rangeFrom = ref('')
const rangeTo = ref('')
const aggregationType = ref('')
const aggregationBucket = ref('')
const addTimestamp = ref('*')
const addValue = ref('')
const autoRefresh = ref(false)
const alterMode = ref(false)
const alterRetention = ref(0)
const alterDuplicatePolicy = ref('LAST')
const alterLabels = ref('')
const overlayKeysInput = ref('')
const mrangeFilter = ref('')
const overlaySeries = ref<Array<{ key: string; data: DataPoint[] }>>([])
const editDialogOpen = ref(false)
const editDialogData = ref<any>(null)
const chartReady = ref(false)

// Refs
const chartEl = ref<HTMLDivElement>()
const dataParentEl = ref<HTMLDivElement>()
let uPlotLib: any = null
let plot: any = null
let resizeObs: ResizeObserver | null = null
let autoRefreshTimer: any = null
let debounceTimer: any = null

// Virtual scrolling — same pattern as DatabaseTree.vue
const virtualizer = useVirtualizer(computed(() => ({
    count: rangeData.value.length,
    getScrollElement: () => dataParentEl.value,
    estimateSize: () => 40,
    overscan: 10,
})))

// Computed
const infoLabels = computed(() => {
    if (!tsInfo.value) return []
    const skip = new Set(['labels', 'rules', 'sourceKey', 'chunks'])
    return Object.entries(tsInfo.value).filter(([k]) => !skip.has(k)).map(([key, val]) => ({ key, value: val }))
})

const tsLabels = computed(() => {
    const labels = tsInfo.value?.labels
    if (!labels || typeof labels !== 'object') return []
    return Object.entries(labels).map(([key, val]) => ({ key, value: String(val) }))
})

const tsRules = computed(() => Array.isArray(tsInfo.value?.rules) ? tsInfo.value.rules : [])

const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : ''

function formatTimestamp(ts: number): string {
    const lang = i18n.currentLang || 'en'
    return new Date(ts).toLocaleString(lang, {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        fractionalSecondDigits: 3,
    } as any)
}

// --- Chart helpers ---
function getChartColors() {
    const dark = isDark.value
    const style = getComputedStyle(document.body)
    const cssPrimary = style.getPropertyValue('--p3xr-btn-primary-bg').trim()
    return {
        primary: cssPrimary || (dark ? '#90caf9' : '#1976d2'),
        text: dark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
        grid: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
    }
}

function buildChartData(data: DataPoint[], overlays: typeof overlaySeries.value): number[][] {
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
}

function destroyChart() {
    resizeObs?.disconnect()
    resizeObs = null
    plot?.destroy()
    plot = null
}

function initChart() {
    if (!uPlotLib || !chartEl.value) return
    destroyChart()
    const el = chartEl.value
    const w = el.clientWidth || 400
    const colors = getChartColors()
    const lang = i18n.currentLang || 'en'

    const seriesConfig: any[] = [
        {
            label: str(strings.value?.label?.time) || 'Time',
            value: (_: any, v: number) => v ? new Date(v * 1000).toLocaleString(i18n.currentLang || 'en', {
                year: 'numeric', month: '2-digit', day: '2-digit',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
            }) : '',
        },
        { label: props.keyName, stroke: colors.primary, width: 2, fill: colors.primary + '15' },
    ]
    for (let i = 0; i < overlaySeries.value.length; i++) {
        seriesConfig.push({ label: overlaySeries.value[i].key, stroke: SERIES_COLORS[(i + 1) % SERIES_COLORS.length], width: 2 })
    }

    const opts = {
        width: w, height: 400,
        cursor: { show: true, drag: { x: false, y: false } },
        legend: { show: true, live: true },
        scales: { x: { time: true } },
        axes: [
            { stroke: colors.text, grid: { stroke: colors.grid, width: 1 }, ticks: { stroke: colors.grid }, font: '11px Roboto',
                values: (_: any, ticks: number[]) => ticks.map(t => new Date(t * 1000).toLocaleTimeString(i18n.currentLang || 'en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })) },
            { stroke: colors.text, grid: { stroke: colors.grid, width: 1 }, ticks: { stroke: colors.grid }, font: '11px Roboto Mono', size: 65 },
        ],
        series: seriesConfig,
    }

    const chartData = buildChartData(rangeData.value, overlaySeries.value)
    plot = new uPlotLib(opts, chartData, el)

    let timer: any
    resizeObs = new ResizeObserver(() => {
        clearTimeout(timer)
        timer = setTimeout(() => { const nw = el.clientWidth; if (nw > 0) plot?.setSize({ width: nw, height: 400 }) }, 50)
    })
    resizeObs.observe(el)
}

function updateChart() {
    if (!uPlotLib || !chartEl.value) return
    const expectedSeries = 2 + overlaySeries.value.length
    if (!plot || plot.series?.length !== expectedSeries) { initChart(); return }
    const chartData = buildChartData(rangeData.value, overlaySeries.value)
    plot.setData(chartData, true)
    if (chartData[0].length > 0) plot.setScale('x', { min: chartData[0][0], max: chartData[0][chartData[0].length - 1] })
}

// --- Load range ---
async function loadRange() {
    try {
        const payload: any = { key: props.keyName }
        if (rangeFrom.value) payload.from = rangeFrom.value
        if (rangeTo.value) payload.to = rangeTo.value
        if (aggregationType.value && aggregationBucket.value) {
            payload.aggregation = { type: aggregationType.value, timeBucket: parseInt(aggregationBucket.value, 10) }
        }
        const resp = await request({ action: 'timeseries/range', payload })
        rangeData.value = resp.data || []

        // Overlay keys
        const newOverlays: typeof overlaySeries.value = []
        const overlayKeys = overlayKeysInput.value.split(',').map(k => k.trim()).filter(k => k.length > 0)
        for (const ok of overlayKeys) {
            try {
                const op: any = { key: ok }
                if (rangeFrom.value) op.from = rangeFrom.value
                if (rangeTo.value) op.to = rangeTo.value
                if (aggregationType.value && aggregationBucket.value) op.aggregation = { type: aggregationType.value, timeBucket: parseInt(aggregationBucket.value, 10) }
                const or = await request({ action: 'timeseries/range', payload: op })
                newOverlays.push({ key: ok, data: or.data || [] })
            } catch { /* skip */ }
        }

        // MRANGE by label filter
        if (mrangeFilter.value.trim().length > 0) {
            try {
                const mp: any = { filter: mrangeFilter.value.trim() }
                if (rangeFrom.value) mp.from = rangeFrom.value
                if (rangeTo.value) mp.to = rangeTo.value
                if (aggregationType.value && aggregationBucket.value) mp.aggregation = { type: aggregationType.value, timeBucket: parseInt(aggregationBucket.value, 10) }
                const mr = await request({ action: 'timeseries/mrange', payload: mp })
                for (const entry of (mr.data || [])) { if (entry.key !== props.keyName) newOverlays.push({ key: entry.key, data: entry.data }) }
            } catch { /* skip */ }
        }

        overlaySeries.value = newOverlays
        nextTick(() => updateChart())
    } catch (e: any) { common.generalHandleError(e) }
}

function debouncedLoadRange() {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => loadRange(), 500)
}

// --- Actions ---
async function addDataPoint() {
    if (!addValue.value) return
    try {
        await request({ action: 'timeseries/add', payload: { key: props.keyName, timestamp: addTimestamp.value || '*', value: parseFloat(addValue.value) } })
        common.toast(str(strings.value?.status?.added) || 'Added')
        addValue.value = ''
        emit('refresh')
    } catch (e: any) { common.generalHandleError(e) }
}

async function deleteDataPoint(point: DataPoint) {
    try {
        await common.confirm({ message: str(strings.value?.confirm?.delete) || 'Delete?' })
        await request({ action: 'timeseries/del', payload: { key: props.keyName, from: point.timestamp, to: point.timestamp } })
        common.toast(str(strings.value?.status?.deleted) || 'Deleted')
        emit('refresh')
    } catch (e: any) { if (e !== undefined && e !== null) common.generalHandleError(e) }
}

function editDataPoint(point: DataPoint) {
    editDialogData.value = { type: 'edit', model: { type: 'timeseries', key: props.keyName, tsTimestamp: String(point.timestamp), value: point.value, originalTimestamp: point.timestamp } }
    editDialogOpen.value = true
}

function editAllDataPoints() {
    const allPoints = rangeData.value.map(p => `${p.timestamp} ${p.value}`).join('\n')
    const currentLabels = tsLabels.value.map(l => `${l.key} ${l.value}`).join(' ') || `key ${props.keyName}`
    editDialogData.value = { type: 'edit', model: { type: 'timeseries', key: props.keyName, value: allPoints, tsEditAll: true, tsLabels: currentLabels } }
    editDialogOpen.value = true
}

function handleEditClose(result?: any) {
    editDialogOpen.value = false
    editDialogData.value = null
    if (result) { emit('refresh'); loadRange() }
}

function toggleAlterMode() {
    alterMode.value = !alterMode.value
    if (alterMode.value) {
        alterRetention.value = tsInfo.value?.retentionTime || 0
        alterDuplicatePolicy.value = (tsInfo.value?.duplicatePolicy || 'LAST').toUpperCase()
        const labels = tsLabels.value.map(l => `${l.key} ${l.value}`).join(' ')
        alterLabels.value = labels || `key ${props.keyName}`
    }
}

async function saveAlter() {
    try {
        const labels = alterLabels.value.trim().length > 0 ? alterLabels.value : `key ${props.keyName}`
        await request({ action: 'timeseries/alter', payload: { key: props.keyName, retention: alterRetention.value, duplicatePolicy: alterDuplicatePolicy.value, labels } })
        common.toast(str(strings.value?.status?.saved) || 'Updated')
        alterMode.value = false
        emit('refresh')
    } catch (e: any) { common.generalHandleError(e) }
}

function exportChartPng() {
    if (!plot || !chartEl.value) return
    const chartCanvas = chartEl.value.querySelector('canvas') as HTMLCanvasElement
    if (!chartCanvas) return
    const dark = isDark.value
    const bgColor = dark ? '#1e1e1e' : '#ffffff'
    const textColor = dark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)'
    const padding = 20; const titleHeight = 30; const legendHeight = 30
    const totalWidth = chartCanvas.width + padding * 2
    const totalHeight = chartCanvas.height + padding * 2 + titleHeight + legendHeight
    const exportCanvas = document.createElement('canvas')
    exportCanvas.width = totalWidth; exportCanvas.height = totalHeight
    const ctx = exportCanvas.getContext('2d')!
    ctx.fillStyle = bgColor; ctx.fillRect(0, 0, totalWidth, totalHeight)
    ctx.fillStyle = textColor; ctx.font = 'bold 14px Roboto, sans-serif'
    ctx.fillText(props.keyName, padding, padding + 16)
    ctx.drawImage(chartCanvas, padding, padding + titleHeight)
    const allKeys = [props.keyName, ...overlaySeries.value.map(s => s.key)]
    const colors = [getChartColors().primary, ...overlaySeries.value.map((_, i) => SERIES_COLORS[(i + 1) % SERIES_COLORS.length])]
    let legendX = padding; const legendY = padding + titleHeight + chartCanvas.height + 16
    ctx.font = '12px Roboto, sans-serif'
    for (let i = 0; i < allKeys.length; i++) {
        ctx.fillStyle = colors[i]; ctx.fillRect(legendX, legendY - 8, 12, 12)
        ctx.fillStyle = textColor; ctx.fillText(allKeys[i], legendX + 16, legendY + 2)
        legendX += ctx.measureText(allKeys[i]).width + 32
    }
    const url = exportCanvas.toDataURL('image/png')
    const a = document.createElement('a'); a.href = url; a.download = `${props.keyName}-chart.png`; a.click()
}

// --- Lifecycle ---
onMounted(async () => {
    tsInfo.value = props.value || {}
    // Load uPlot
    try {
        const mod = await import('uplot')
        uPlotLib = mod.default
        chartReady.value = true
    } catch (e) { console.error('Failed to load uPlot', e) }
    loadRange()
    // Ensure default label
    if (!isReadonly.value) {
        const labels = props.value?.labels
        const labelCount = labels && typeof labels === 'object' ? Object.keys(labels).length : 0
        if (labelCount === 0) {
            try {
                await request({ action: 'timeseries/alter', payload: { key: props.keyName, labels: `key ${props.keyName}` } })
                tsInfo.value = { ...tsInfo.value, labels: { key: props.keyName } }
            } catch { /* ignore */ }
        }
    }
})

onUnmounted(() => {
    destroyChart()
    clearInterval(autoRefreshTimer)
    clearTimeout(debounceTimer)
})

// Re-init chart when data or chart readiness changes
watch([chartReady, rangeData], () => {
    if (!chartReady.value) return
    setTimeout(() => { plot ? updateChart() : initChart() }, 150)
}, { flush: 'post' })

// Re-init chart on theme/language/primary color change
watch([isDark, () => i18n.currentLang, themeKey], () => {
    if (!chartReady.value) return
    setTimeout(() => { destroyChart(); initChart() }, 100)
})

// Value change
watch(() => props.value, () => {
    tsInfo.value = props.value || {}
    loadRange()
})

// Auto-refresh
watch(autoRefresh, (v) => {
    clearInterval(autoRefreshTimer)
    if (v) autoRefreshTimer = setInterval(() => loadRange(), 10000)
})

// Row styling
const listBorder = computed(() => isDark.value ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)')
const oddBg = computed(() => isDark.value ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)')
const hoverBg = computed(() => isDark.value ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')
</script>

<template>
    <div class="p3xr-key-type-content">

        <!-- Chart accordion -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.timeseries?.chart) || 'Chart'" accordion-key="ts-chart">
            <template #actions>
                <P3xrButton v-if="!isReadonly" icon="mdi-pencil" :label="str(strings?.intention?.edit) || 'Edit'" :breakpoint="1280" color="inherit" @click.stop="editAllDataPoints()" />
                <P3xrButton icon="mdi-image" :label="str(strings?.page?.key?.timeseries?.exportChart) || 'Export PNG'" :breakpoint="1280" color="inherit" @click.stop="exportChartPng()" />
                <P3xrButton :icon="autoRefresh ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'" :label="str(strings?.label?.autoRefresh) || 'Auto'" :breakpoint="1280" color="inherit" @click.stop="autoRefresh = !autoRefresh" />
                <P3xrButton v-if="!autoRefresh" icon="mdi-refresh" :label="str(strings?.intention?.refresh) || 'Refresh'" :breakpoint="1280" color="inherit" @click.stop="loadRange()" />
            </template>

            <div style="padding: 16px;">
                <!-- Range controls -->
                <div class="p3xr-ts-controls">
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        :label="str(strings?.page?.key?.timeseries?.from) || 'From (ms or -)'" placeholder="-"
                        v-model="rangeFrom" @update:model-value="debouncedLoadRange()" />
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        :label="str(strings?.page?.key?.timeseries?.to) || 'To (ms or +)'" placeholder="+"
                        v-model="rangeTo" @update:model-value="debouncedLoadRange()" />
                    <v-select density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        :label="str(strings?.page?.key?.timeseries?.aggregation) || 'Aggregation'"
                        v-model="aggregationType" :items="['', ...aggregationTypes]" @update:model-value="loadRange()">
                        <template #item="{ item, props: itemProps }">
                            <v-list-item v-bind="itemProps" :title="item.value === '' ? (str(strings?.page?.key?.timeseries?.none) || 'None') : item.value" />
                        </template>
                        <template #selection="{ item }">
                            {{ item.value === '' ? (str(strings?.page?.key?.timeseries?.none) || 'None') : item.value }}
                        </template>
                    </v-select>
                    <v-text-field v-if="aggregationType" density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        type="number" :label="str(strings?.page?.key?.timeseries?.timeBucket) || 'Bucket (ms)'" placeholder="5000"
                        v-model="aggregationBucket" @update:model-value="debouncedLoadRange()" />
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field" style="min-width: 200px;"
                        :label="str(strings?.page?.key?.timeseries?.overlay) || 'Overlay keys'"
                        :placeholder="str(strings?.page?.key?.timeseries?.overlayHint) || 'key1, key2'"
                        v-model="overlayKeysInput" @update:model-value="debouncedLoadRange()" />
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field" style="min-width: 180px;"
                        :label="str(strings?.page?.key?.timeseries?.mrangeFilter) || 'Label filter'"
                        :placeholder="str(strings?.page?.key?.timeseries?.mrangeHint) || 'sensor=temp'"
                        v-model="mrangeFilter" @update:model-value="debouncedLoadRange()" />
                </div>

                <div style="padding: 4px 0; opacity: 0.6; font-size: 13px;">
                    {{ rangeData.length }} {{ str(strings?.page?.key?.timeseries?.dataPoints) || 'data points' }}
                </div>

                <!-- Chart container -->
                <div ref="chartEl" style="width: 100%; min-height: 400px;"></div>

                <!-- Add data point -->
                <div v-if="!isReadonly" class="p3xr-ts-controls" style="margin-top: 16px;">
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        :label="str(strings?.page?.key?.timeseries?.timestamp) || 'Timestamp'" placeholder="* (auto)"
                        v-model="addTimestamp" />
                    <v-text-field density="compact" variant="outlined" hide-details class="p3xr-ts-field"
                        type="number" :label="str(strings?.page?.key?.timeseries?.value) || 'Value'"
                        v-model="addValue" @keydown.enter="addDataPoint()" />
                    <P3xrButton icon="mdi-plus" :label="str(strings?.intention?.add) || 'Add'" raised color="primary" :disabled="!addValue" @click="addDataPoint()" />
                </div>
            </div>
        </P3xrAccordion>

        <!-- Data table accordion -->
        <template v-if="rangeData.length > 0">
            <br />
            <P3xrAccordion :title="capitalize(str(strings?.page?.key?.timeseries?.dataPoints) || 'Data') + ` (${rangeData.length})`" accordion-key="ts-data">
                <!-- Header -->
                <div class="p3xr-key-table-header">
                    <span style="flex: 1;">{{ str(strings?.page?.key?.timeseries?.timestamp) || 'Timestamp' }}</span>
                    <span>{{ str(strings?.page?.key?.timeseries?.value) || 'Value' }}</span>
                    <span v-if="!isReadonly" style="min-width: 52px;"></span>
                </div>

                <!-- Virtual scroll -->
                <div ref="dataParentEl" style="height: 600px; overflow: auto;">
                    <div :style="{ height: virtualizer.getTotalSize() + 'px', width: '100%', position: 'relative' }">
                        <div v-for="vRow in virtualizer.getVirtualItems()" :key="vRow.key"
                            :style="{
                                position: 'absolute', top: 0, left: 0, width: '100%',
                                transform: `translateY(${vRow.start}px)`,
                                height: vRow.size + 'px',
                                display: 'flex', alignItems: 'center', gap: '8px', padding: '0 16px',
                                borderBottom: `1px solid ${listBorder}`,
                                backgroundColor: vRow.index % 2 === 0 ? oddBg : 'transparent',
                            }"
                            class="p3xr-ts-data-row">
                            <span style="flex: 1; font-size: 13px;">{{ formatTimestamp(rangeData[vRow.index].timestamp) }}</span>
                            <span style="font-size: 13px; font-family: 'Roboto Mono', monospace;">{{ rangeData[vRow.index].value }}</span>
                            <span v-if="!isReadonly" style="display: flex; align-items: center;">
                                <v-tooltip :text="str(strings?.intention?.delete) || 'Delete'" location="top">
                                    <template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-error));" @click="deleteDataPoint(rangeData[vRow.index])">mdi-delete</v-icon></template>
                                </v-tooltip>
                                <v-tooltip :text="str(strings?.intention?.edit) || 'Edit'" location="top">
                                    <template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-primary));" @click="editDataPoint(rangeData[vRow.index])">mdi-pencil</v-icon></template>
                                </v-tooltip>
                            </span>
                        </div>
                    </div>
                </div>
            </P3xrAccordion>
        </template>

        <!-- TS.INFO accordion -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.timeseries?.info) || 'Info'" accordion-key="ts-info">
            <template v-if="!isReadonly" #actions>
                <P3xrButton :icon="alterMode ? 'mdi-checkbox-marked' : 'mdi-pencil'" :label="str(strings?.intention?.edit) || 'Edit'" color="inherit" @click.stop="toggleAlterMode()" />
            </template>

            <!-- Alter mode -->
            <div v-if="alterMode" style="padding: 16px;">
                <div class="p3xr-ts-controls">
                    <v-text-field density="compact" variant="outlined" type="number" style="flex: 1; min-width: 150px;"
                        :label="`${str(strings?.page?.key?.timeseries?.retention) || 'Retention'} (ms)`"
                        :hint="str(strings?.page?.key?.timeseries?.retentionHint) || '0 = no expiry, or milliseconds'" persistent-hint
                        v-model.number="alterRetention" />
                    <v-select density="compact" variant="outlined" style="flex: 1; min-width: 150px;"
                        :label="str(strings?.page?.key?.timeseries?.duplicatePolicy) || 'Duplicate policy'"
                        v-model="alterDuplicatePolicy" :items="['LAST', 'FIRST', 'MIN', 'MAX', 'SUM', 'BLOCK']" />
                    <v-text-field density="compact" variant="outlined" style="flex: 1; min-width: 200px;"
                        :label="str(strings?.page?.key?.timeseries?.labels) || 'Labels'"
                        :hint="str(strings?.page?.key?.timeseries?.labelsHint) || 'key1 value1 key2 value2'" persistent-hint
                        v-model="alterLabels" />
                    <P3xrButton icon="mdi-content-save" :label="str(strings?.intention?.save) || 'Save'" raised color="primary" @click="saveAlter()" />
                </div>
            </div>

            <!-- Info list -->
            <v-list density="compact">
                <template v-for="item in infoLabels" :key="item.key">
                    <v-list-item>
                        <div style="display: flex; width: 100%;">
                            <span style="flex: 1; font-weight: 500;">{{ item.key }}</span>
                            <span style="word-break: break-all;">{{ item.value }}</span>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>

                <template v-if="tsLabels.length > 0">
                    <v-list-item><strong>{{ str(strings?.page?.key?.timeseries?.labels) || 'Labels' }}</strong></v-list-item>
                    <v-divider />
                    <template v-for="label in tsLabels" :key="label.key">
                        <v-list-item>
                            <div style="display: flex; width: 100%;">
                                <span style="flex: 1; font-weight: 500;">{{ label.key }}</span>
                                <span style="word-break: break-all;">{{ label.value }}</span>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </template>

                <template v-if="tsRules.length > 0">
                    <v-list-item><strong>{{ str(strings?.page?.key?.timeseries?.rules) || 'Rules' }}</strong></v-list-item>
                    <v-divider />
                    <template v-for="rule in tsRules" :key="rule.destKey">
                        <v-list-item>
                            <div style="display: flex; width: 100%;">
                                <span style="flex: 1; font-weight: 500;">{{ rule.destKey }}</span>
                                <span>{{ rule.aggregationType }} / {{ rule.bucketDuration }}ms</span>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </template>
            </v-list>
        </P3xrAccordion>

        <KeyNewOrSetDialog :open="editDialogOpen" :data="editDialogData" @close="handleEditClose" />
    </div>
</template>

<style scoped>
.p3xr-key-type-content { padding: 8px 16px 24px; }
.p3xr-ts-controls { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 8px; padding: 8px 0; }
.p3xr-ts-field { min-width: 140px; max-width: 200px; }
.p3xr-ts-data-row:hover { background-color: rgba(var(--v-theme-on-surface), 0.1) !important; }
.p3xr-key-table-header {
    display: flex; align-items: center; gap: 8px; padding: 8px 16px; font-weight: bold;
    background-color: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-on-primary));
    border-bottom: 2px solid rgba(var(--v-theme-on-surface), 0.05);
}
</style>
