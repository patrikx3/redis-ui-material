<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import {
    useMonitoringDataStore,
    onProfilerEntry,
    clearProfiler as storeClearProfiler,
} from '../../stores/monitoring-data'
import type { ProfilerEntry } from '../../stores/monitoring-data'

const i18n = useI18nStore()
const state = useRedisStateStore()
const monitorData = useMonitoringDataStore()

const strings = () => i18n.strings
const profilerOutputEl = ref<HTMLDivElement>()

const maxDomEntries = 66
let entryIndex = 0
let unsubProfiler: (() => void) | null = null
let resizeFn: (() => void) | null = null

function escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function getOddBg(): string {
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    return isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
}

function renderEntry(entry: ProfilerEntry): void {
    const el = profilerOutputEl.value
    if (!el) return
    const odd = entryIndex++ % 2 === 1 ? ` style="background-color:${getOddBg()}"` : ''
    el.insertAdjacentHTML('beforeend',
        `<div class="p3xr-profiler-entry"${odd}><span style="opacity:0.5">${escapeHtml(entry.displayTime)}</span> <span style="opacity:0.7">[${escapeHtml(entry.database)} ${escapeHtml(entry.source)}]</span> ${escapeHtml(entry.command)}</div>`
    )
    while (el.children.length > maxDomEntries) {
        el.removeChild(el.firstChild!)
    }
    el.scrollTop = el.scrollHeight
}

function renderExistingEntries(): void {
    const el = profilerOutputEl.value
    if (!el) return
    const entries = monitorData.profilerEntries
    const start = Math.max(0, entries.length - maxDomEntries)
    entryIndex = start
    for (let i = start; i < entries.length; i++) {
        renderEntry(entries[i])
    }
    el.scrollTop = el.scrollHeight
}

function recalcHeight(): void {
    const el = profilerOutputEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const footerHeight = document.getElementById('p3xr-layout-footer-container')?.offsetHeight || 48
    const drawerCssValue = getComputedStyle(document.documentElement)
        .getPropertyValue('--p3xr-console-drawer-height-active').trim()
    let drawerHeight = 0
    if (drawerCssValue.endsWith('vh')) drawerHeight = Math.round((parseFloat(drawerCssValue) / 100) * window.innerHeight)
    else if (drawerCssValue.endsWith('px')) drawerHeight = parseFloat(drawerCssValue)
    const available = window.innerHeight - rect.top - footerHeight - drawerHeight - 8
    el.style.height = Math.max(available, 100) + 'px'
}

// Re-run height calculation when the global console drawer opens/closes
watch(() => state.consoleDrawerOpen, () => {
    setTimeout(() => recalcHeight(), 160) // after the 150ms drawer transition
})

function clearProfiler(): void {
    storeClearProfiler()
    entryIndex = 0
    if (profilerOutputEl.value) {
        profilerOutputEl.value.innerHTML = ''
    }
}

function exportProfiler(): void {
    const connName = state.connection?.name
    const lines = monitorData.profilerEntries.map(e => `${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`)
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${connName}-profiler-export.txt`
    a.click()
    URL.revokeObjectURL(url)
}

onMounted(() => {
    document.body.classList.add('p3xr-no-main-scroll')

    setTimeout(() => {
        renderExistingEntries()
        unsubProfiler = onProfilerEntry(renderEntry)
    })

    resizeFn = () => recalcHeight()
    window.addEventListener('resize', resizeFn)
    setTimeout(() => {
        recalcHeight()
        const el = profilerOutputEl.value
        if (el) el.scrollTop = el.scrollHeight
    }, 50)
})

onUnmounted(() => {
    document.body.classList.remove('p3xr-no-main-scroll')
    unsubProfiler?.()
    if (resizeFn) window.removeEventListener('resize', resizeFn)
})
</script>

<template>
    <P3xrAccordion title="" accordion-key="profiler-monitor" :collapsible="false">
        <template #actions>
            <P3xrButton
                @click="clearProfiler(); $event.stopPropagation()"
                :label="strings()?.intention?.clear"
                icon="mdi-backspace"
            />
            <P3xrButton
                @click="exportProfiler(); $event.stopPropagation()"
                :label="strings()?.intention?.export"
                icon="mdi-download"
            />
        </template>
        <div ref="profilerOutputEl" class="p3xr-profiler-output"></div>
    </P3xrAccordion>

</template>

<style scoped>
.p3xr-profiler-output {
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    overflow-y: auto;
    word-break: break-all;
    white-space: normal;
}
</style>

<style>
.p3xr-profiler-entry {
    padding: 6px 16px;
    word-break: break-all;
    white-space: normal;
}
</style>
