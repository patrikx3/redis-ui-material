<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useCommonStore } from '../../stores/common'
import { request, onSocketEvent } from '../../stores/socket.service'

const i18n = useI18nStore()
const state = useRedisStateStore()
const common = useCommonStore()

const strings = computed(() => i18n.strings)
const s = computed(() => strings.value?.page?.analysis || {})

const data = ref<any>(null)
const loading = ref(false)
const topN = ref(20)
const maxScanKeys = ref(5000)
const typeEntries = ref<Array<{ type: string; count: number; bytes: number }>>([])

const typeChartEl = ref<HTMLDivElement>()
const prefixChartEl = ref<HTMLDivElement>()
const rootEl = ref<HTMLElement>()

const connName = computed(() => state.connection?.name || 'redis')

let themeObserver: MutationObserver | null = null
let chartResizeObserver: ResizeObserver | null = null
let resizeTimer: any
const unsubFns: Array<() => void> = []

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

function downloadText(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

// --- Chart helpers ---

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
        isDark,
    }
}

function getBarColors(colors: ReturnType<typeof getChartColors>): string[] {
    const isDark = colors.isDark
    return [
        colors.primary, colors.accent, colors.warn,
        isDark ? '#ffb74d' : '#ff9800',
        isDark ? '#81c784' : '#4caf50',
        isDark ? '#4dd0e1' : '#00bcd4',
        isDark ? '#a1887f' : '#795548',
        isDark ? '#90a4ae' : '#607d8b',
    ]
}

function drawBarChart(container: HTMLDivElement | undefined, items: Array<{ label: string; value: number }>) {
    if (!container || items.length === 0 || container.offsetWidth <= 0) return
    container.innerHTML = ''

    const colors = getChartColors()
    const barColors = getBarColors(colors)

    const canvas = document.createElement('canvas')
    const dpr = window.devicePixelRatio || 1
    const width = container.offsetWidth || 500
    const barHeight = 24
    const labelWidth = 120
    const valueWidth = 80
    const chartLeft = labelWidth + 8
    const chartRight = width - valueWidth - 8
    const chartWidth = chartRight - chartLeft
    const topPad = 8
    const height = topPad + items.length * (barHeight + 4) + 8

    canvas.width = width * dpr
    canvas.height = height * dpr
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    const ctx = canvas.getContext('2d')!
    ctx.scale(dpr, dpr)

    const maxVal = Math.max(...items.map(i => i.value), 1)

    items.forEach((item, i) => {
        const y = topPad + i * (barHeight + 4)

        ctx.fillStyle = colors.text
        ctx.font = '12px Roboto, sans-serif'
        ctx.textAlign = 'right'
        ctx.textBaseline = 'middle'
        ctx.fillText(item.label.length > 15 ? item.label.substring(0, 14) + '\u2026' : item.label, labelWidth, y + barHeight / 2)

        ctx.fillStyle = colors.grid
        ctx.fillRect(chartLeft, y, chartWidth, barHeight)

        const barWidth = (item.value / maxVal) * chartWidth
        ctx.fillStyle = barColors[i % barColors.length]
        ctx.fillRect(chartLeft, y, barWidth, barHeight)

        ctx.fillStyle = colors.text
        ctx.font = '11px Roboto Mono, monospace'
        ctx.textAlign = 'left'
        ctx.fillText(formatBytes(item.value), chartRight + 8, y + barHeight / 2)
    })

    container.appendChild(canvas)
}

function drawCharts() {
    drawBarChart(typeChartEl.value, typeEntries.value.map(t => ({
        label: t.type,
        value: t.bytes,
    })))
    drawBarChart(prefixChartEl.value, (data.value?.prefixMemory || []).slice(0, 20).map((p: any) => ({
        label: p.prefix,
        value: p.totalBytes,
    })))
}

// --- Data fetching ---

async function runAnalysis() {
    if (loading.value) return
    loading.value = true
    try {
        const response = await request({
            action: 'memory/analysis',
            payload: { topN: topN.value, maxScanKeys: maxScanKeys.value },
        })
        data.value = response.data
        typeEntries.value = Object.keys(data.value.typeDistribution).map(type => ({
            type,
            count: data.value.typeDistribution[type],
            bytes: data.value.typeMemory[type] || 0,
        })).sort((a, b) => b.bytes - a.bytes)
        loading.value = false
        nextTick(() => setTimeout(() => drawCharts(), 100))
    } catch (e) {
        loading.value = false
        common.generalHandleError(e)
    }
}

// --- Exports ---

function exportOverview() {
    if (!data.value) return
    const t = s.value
    downloadText([
        `${t.keysScanned || 'Keys Scanned'}: ${data.value.totalScanned} / ${data.value.dbSize}`,
        `${t.topN || 'Top N'}: ${topN.value}`,
        `${t.maxScanKeys || 'Max Scan Keys'}: ${maxScanKeys.value}`,
    ].join('\n'), `${connName.value}-analysis-overview.txt`)
}

function exportMemoryBreakdown() {
    if (!data.value) return
    const t = s.value
    const m = data.value.memoryInfo
    downloadText([
        `${t.totalMemory || 'Total'}: ${m.usedHuman}`,
        `${t.rssMemory || 'RSS'}: ${m.rssHuman}`,
        `${t.peakMemory || 'Peak'}: ${m.peakHuman}`,
        `${t.overheadMemory || 'Overhead'}: ${formatBytes(m.overhead)}`,
        `${t.datasetMemory || 'Dataset'}: ${formatBytes(m.dataset)}`,
        `${t.luaMemory || 'Lua'}: ${formatBytes(m.lua)}`,
        `${t.fragmentation || 'Fragmentation'}: ${m.fragRatio}x`,
        `${t.allocator || 'Allocator'}: ${m.allocator}`,
    ].join('\n'), `${connName.value}-memory-breakdown.txt`)
}

function exportExpiration() {
    if (!data.value) return
    const t = s.value
    const e = data.value.expirationOverview
    downloadText([
        `${t.withTTL || 'With TTL'}: ${e.withTTL}`,
        `${t.persistent || 'Persistent'}: ${e.persistent}`,
        `${t.avgTTL || 'Average TTL'}: ${formatTTL(e.avgTTL)}`,
    ].join('\n'), `${connName.value}-expiration.txt`)
}

function exportChart(chartEl: HTMLDivElement | undefined, name: string) {
    const canvas = chartEl?.querySelector('canvas') as HTMLCanvasElement
    if (!canvas) return
    const exportCanvas = document.createElement('canvas')
    exportCanvas.width = canvas.width
    exportCanvas.height = canvas.height
    const ctx = exportCanvas.getContext('2d')!
    const isDarkBg = document.body.classList.contains('p3xr-theme-dark')
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || (isDarkBg ? '#1e1e1e' : '#ffffff')
    ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height)
    ctx.drawImage(canvas, 0, 0)
    const url = exportCanvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = url
    a.download = `${connName.value}-${name}.png`
    a.click()
}

// --- Lifecycle ---

// Watch rootEl + chart containers — set up ResizeObserver when they appear
// Fires on window resize, accordion open/close, any layout change
watch([rootEl, typeChartEl, prefixChartEl], () => {
    chartResizeObserver?.disconnect()
    chartResizeObserver = null
    const els = [rootEl.value, typeChartEl.value, prefixChartEl.value].filter(Boolean) as HTMLElement[]
    if (els.length > 0) {
        chartResizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => { if (data.value) drawCharts() }, 150)
        })
        els.forEach(el => chartResizeObserver!.observe(el))
    }
})

onMounted(() => {
    runAnalysis()

    unsubFns.push(onSocketEvent('connections', () => {
        data.value = null
        runAnalysis()
    }))

    themeObserver = new MutationObserver(() => {
        if (data.value) setTimeout(() => drawCharts(), 100)
    })
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
})

onUnmounted(() => {
    themeObserver?.disconnect()
    chartResizeObserver?.disconnect()
    unsubFns.forEach(fn => fn())
})
</script>

<template>
    <div v-if="loading && !data" class="p3xr-analysis-loading">
        <v-icon>mdi-timer-sand</v-icon>
        <span>{{ s.running || 'Analyzing...' }}</span>
    </div>

    <div v-if="!loading && !data" class="p3xr-analysis-loading">
        <v-icon>mdi-chart-bar</v-icon>
        <span>{{ s.noData || 'No data. Click Run Analysis to start.' }}</span>
    </div>

    <div v-if="data" ref="rootEl">
        <!-- Controls + Overview -->
        <P3xrAccordion :title="s.title || 'Memory Analysis'" accordion-key="analysis-controls">
            <template #actions>
                <P3xrButton
                    @click="runAnalysis(); $event.stopPropagation()"
                    :label="loading ? (s.running || 'Analyzing...') : (s.runAnalysis || 'Run Analysis')"
                    :icon="loading ? 'mdi-timer-sand' : 'mdi-play'"
                    :disabled="loading"
                />
                <P3xrButton
                    @click="exportOverview(); $event.stopPropagation()"
                    :label="strings?.intention?.export || 'Export'"
                    icon="mdi-download"
                />
            </template>
            <v-list density="compact" class="pa-0">
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.keysScanned || 'Keys Scanned' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.totalScanned?.toLocaleString() }} / {{ data.dbSize?.toLocaleString() }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.topN || 'Top N' }}</div>
                        <div class="p3xr-pair-value">
                            <v-text-field
                                v-model.number="topN"
                                type="number"
                                min="5"
                                max="100"
                                hide-details
                                style="max-width: 100px;"
                            />
                        </div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.maxScanKeys || 'Max Scan Keys' }}</div>
                        <div class="p3xr-pair-value">
                            <v-text-field
                                v-model.number="maxScanKeys"
                                type="number"
                                min="100"
                                max="100000"
                                step="1000"
                                hide-details
                                style="max-width: 120px;"
                            />
                        </div>
                    </div>
                </v-list-item>
            </v-list>
        </P3xrAccordion>

        <br />

        <!-- Memory Breakdown -->
        <P3xrAccordion :title="s.memoryBreakdown || 'Memory Breakdown'" accordion-key="analysis-memory-info">
            <template #actions>
                <P3xrButton @click="exportMemoryBreakdown(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <v-list density="compact" class="pa-0">
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.totalMemory || 'Total Memory' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.memoryInfo.usedHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.rssMemory || 'RSS Memory' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.memoryInfo.rssHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.peakMemory || 'Peak Memory' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.memoryInfo.peakHuman }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.overheadMemory || 'Overhead' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(data.memoryInfo.overhead) }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.datasetMemory || 'Dataset' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(data.memoryInfo.dataset) }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.luaMemory || 'Lua Memory' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(data.memoryInfo.lua) }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.fragmentation || 'Fragmentation' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.memoryInfo.fragRatio }}x</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.allocator || 'Allocator' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.memoryInfo.allocator }}</div>
                    </div>
                </v-list-item>
            </v-list>
        </P3xrAccordion>

        <br />

        <!-- Type Distribution -->
        <P3xrAccordion :title="s.typeDistribution || 'Type Distribution'" accordion-key="analysis-type-dist">
            <template #actions>
                <P3xrButton @click="exportChart(typeChartEl, 'type-distribution'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="typeChartEl" class="p3xr-analysis-chart"></div>
            <v-list density="compact" class="pa-0">
                <template v-for="item in typeEntries" :key="item.type">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">
                                <span style="font-weight: 500;">{{ item.type }}</span>
                                <span class="p3xr-analysis-sub">{{ item.count }} keys</span>
                            </div>
                            <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(item.bytes) }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>
            </v-list>
        </P3xrAccordion>

        <br />

        <!-- Memory by Prefix -->
        <P3xrAccordion :title="s.prefixMemory || 'Memory by Prefix'" accordion-key="analysis-prefix-mem">
            <template #actions>
                <P3xrButton @click="exportChart(prefixChartEl, 'memory-by-prefix'); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <div ref="prefixChartEl" class="p3xr-analysis-chart"></div>
            <v-list density="compact" class="pa-0">
                <template v-for="(item, i) in data.prefixMemory" :key="item.prefix">
                    <v-list-item>
                        <div class="p3xr-pair-row">
                            <div class="p3xr-pair-label">
                                <span style="opacity: 0.4; margin-right: 8px;">#{{ i + 1 }}</span>
                                <span class="p3xr-mono" style="font-size: 13px;">{{ item.prefix }}</span>
                                <span class="p3xr-analysis-sub">{{ item.keyCount }} keys</span>
                            </div>
                            <div class="p3xr-pair-value p3xr-mono">{{ formatBytes(item.totalBytes) }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>
            </v-list>
        </P3xrAccordion>

        <br />

        <!-- Key Expiration Overview -->
        <P3xrAccordion :title="s.expirationOverview || 'Key Expiration'" accordion-key="analysis-expiration">
            <template #actions>
                <P3xrButton @click="exportExpiration(); $event.stopPropagation()" :label="strings?.intention?.export || 'Export'" icon="mdi-download" />
            </template>
            <v-list density="compact" class="pa-0">
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.withTTL || 'With TTL' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.expirationOverview.withTTL?.toLocaleString() }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.persistent || 'Persistent' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ data.expirationOverview.persistent?.toLocaleString() }}</div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div class="p3xr-pair-row">
                        <div class="p3xr-pair-label">{{ s.avgTTL || 'Average TTL' }}</div>
                        <div class="p3xr-pair-value p3xr-mono">{{ formatTTL(data.expirationOverview.avgTTL) }}</div>
                    </div>
                </v-list-item>
            </v-list>
        </P3xrAccordion>
    </div>
</template>

<style scoped>
.p3xr-analysis-loading {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 32px 16px;
    opacity: 0.5;
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

.p3xr-analysis-chart {
    padding: 8px 16px;
    min-height: 50px;
}

.p3xr-analysis-sub {
    opacity: 0.5;
    font-size: 12px;
    margin-left: 8px;
}
</style>
