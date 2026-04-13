<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import {
    useMonitoringDataStore,
    onPubsubEntry,
    clearPubSub as storeClearPubSub,
    restartPubSub,
} from '../../stores/monitoring-data'
import type { PubsubEntry } from '../../stores/monitoring-data'

const i18n = useI18nStore()
const state = useRedisStateStore()
const monitorData = useMonitoringDataStore()

const strings = () => i18n.strings
const pubsubOutputEl = ref<HTMLDivElement>()

const maxDomEntries = 66
let entryIndex = 0
let unsubPubsub: (() => void) | null = null
let resizeFn: (() => void) | null = null

function escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function getOddBg(): string {
    const isDark = document.body.classList.contains('p3xr-theme-dark')
    return isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
}

function renderEntry(entry: PubsubEntry): void {
    const el = pubsubOutputEl.value
    if (!el) return
    const odd = entryIndex++ % 2 === 1 ? ` style="background-color:${getOddBg()}"` : ''
    el.insertAdjacentHTML('beforeend',
        `<div class="p3xr-pubsub-entry"${odd}><span style="opacity:0.5">${escapeHtml(entry.displayTime)}</span> <strong>${escapeHtml(entry.channel)}</strong> ${escapeHtml(entry.message)}</div>`
    )
    while (el.children.length > maxDomEntries) {
        el.removeChild(el.firstChild!)
    }
    el.scrollTop = el.scrollHeight
}

function renderExistingEntries(): void {
    const el = pubsubOutputEl.value
    if (!el) return
    const entries = monitorData.pubsubEntries
    const start = Math.max(0, entries.length - maxDomEntries)
    entryIndex = start
    for (let i = start; i < entries.length; i++) {
        renderEntry(entries[i])
    }
    el.scrollTop = el.scrollHeight
}

function recalcHeight(): void {
    const el = pubsubOutputEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const footerHeight = document.getElementById('p3xr-layout-footer-container')?.offsetHeight || 48
    const available = window.innerHeight - rect.top - footerHeight - 8
    el.style.height = Math.max(available, 100) + 'px'
}

function clearPubSub(): void {
    storeClearPubSub()
    entryIndex = 0
    if (pubsubOutputEl.value) {
        pubsubOutputEl.value.innerHTML = ''
    }
}

function exportPubSub(): void {
    const connName = state.connection?.name
    const lines = monitorData.pubsubEntries.map(e => `${e.fullTimestamp} ${e.channel} ${e.message}`)
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${connName}-pubsub-export.txt`
    a.click()
    URL.revokeObjectURL(url)
}

async function handleRestart(): Promise<void> {
    await restartPubSub()
}

onMounted(() => {
    document.body.classList.add('p3xr-no-main-scroll')

    setTimeout(() => {
        renderExistingEntries()
        unsubPubsub = onPubsubEntry(renderEntry)
    })

    resizeFn = () => recalcHeight()
    window.addEventListener('resize', resizeFn)
    setTimeout(() => {
        recalcHeight()
        const el = pubsubOutputEl.value
        if (el) el.scrollTop = el.scrollHeight
    }, 50)
})

onUnmounted(() => {
    document.body.classList.remove('p3xr-no-main-scroll')
    unsubPubsub?.()
    if (resizeFn) window.removeEventListener('resize', resizeFn)
})
</script>

<template>
    <P3xrAccordion title="" accordion-key="profiler-pubsub" :collapsible="false">
        <template #actions>
            <P3xrButton
                @click="clearPubSub(); $event.stopPropagation()"
                :label="strings()?.intention?.clear"
                icon="mdi-backspace"
            />
            <P3xrButton
                @click="exportPubSub(); $event.stopPropagation()"
                :label="strings()?.intention?.export"
                icon="mdi-download"
            />
        </template>
        <div class="p3xr-pubsub-pattern">
            <v-text-field
                v-model="monitorData.pubsubPattern"
                label="Pattern"
                placeholder="*"
                hide-details
                @keydown.enter="handleRestart()"
            />
        </div>
        <div ref="pubsubOutputEl" class="p3xr-pubsub-output"></div>
    </P3xrAccordion>

</template>

<style scoped>
.p3xr-pubsub-output {
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    overflow-y: auto;
    word-break: break-all;
    white-space: normal;
}

.p3xr-pubsub-pattern {
    padding: 8px 16px;
}
</style>

<style>
.p3xr-pubsub-entry {
    padding: 6px 16px;
    word-break: break-all;
    white-space: normal;
}
</style>
