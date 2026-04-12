<script setup lang="ts">
/**
 * HexMonitor — exact port of React HexMonitor.tsx
 * Renders a hex dump: address | hex bytes (8+8) | ASCII
 * With synchronized horizontal scrollbar.
 */
import { computed, ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

interface HexLine {
    addr: string
    hexReal: string
    hexPad: string
    asciiReal: string
    asciiPad: string
}

const props = defineProps<{
    value: string
}>()

const contentRef = ref<HTMLDivElement>()
const scrollbarRef = ref<HTMLDivElement>()
const scrollWidth = ref(0)
let resizeObserver: ResizeObserver | null = null

// Identical parseHexLines algorithm from React/Angular
const lines = computed<HexLine[]>(() => {
    if (!props.value) return []
    const encoded = new TextEncoder().encode(props.value)
    const result: HexLine[] = []
    for (let i = 0; i < encoded.length; i += 16) {
        const chunk = encoded.slice(i, i + 16)
        const n = chunk.length
        const addr = i.toString(16).padStart(8, '0')
        const padded = new Uint8Array(16)
        padded.set(chunk)
        const left = Array.from(padded.slice(0, 8)).map(b => b.toString(16).padStart(2, '0')).join(' ')
        const right = Array.from(padded.slice(8)).map(b => b.toString(16).padStart(2, '0')).join(' ')
        const full = left + '  ' + right
        const asciiAll = Array.from(padded).map(b => b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : '.').join('')

        if (n === 16) {
            result.push({ addr, hexReal: full, hexPad: '', asciiReal: asciiAll, asciiPad: '' })
        } else {
            const splitPos = n <= 8 ? 3 * n - 1 : 25 + 3 * (n - 8) - 1
            result.push({
                addr,
                hexReal: full.substring(0, splitPos),
                hexPad: full.substring(splitPos),
                asciiReal: asciiAll.substring(0, n),
                asciiPad: asciiAll.substring(n),
            })
        }
    }
    return result
})

function measure() {
    if (contentRef.value) scrollWidth.value = contentRef.value.scrollWidth
}

function syncScroll() {
    if (contentRef.value && scrollbarRef.value) {
        contentRef.value.scrollLeft = scrollbarRef.value.scrollLeft
    }
}

onMounted(() => {
    measure()
    if (contentRef.value) {
        resizeObserver = new ResizeObserver(() => measure())
        resizeObserver.observe(contentRef.value)
    }
})

watch(() => props.value, () => nextTick(measure))

onUnmounted(() => {
    resizeObserver?.disconnect()
})
</script>

<template>
    <div class="p3xr-hex-monitor">
        <div ref="contentRef" class="p3xr-hex-content">
            <div v-for="line in lines" :key="line.addr" class="p3xr-hex-line">
                <span class="p3xr-hex-addr">{{ line.addr }}</span>
                <span class="p3xr-hex-bytes">{{ line.hexReal }}<span class="p3xr-hex-dim">{{ line.hexPad }}</span></span>
                <span class="p3xr-hex-ascii">{{ line.asciiReal }}<span class="p3xr-hex-dim">{{ line.asciiPad }}</span></span>
            </div>
        </div>
        <div ref="scrollbarRef" class="p3xr-hex-scrollbar" @scroll="syncScroll">
            <div :style="{ height: '1px', width: scrollWidth + 'px' }" />
        </div>
    </div>
</template>

<style scoped>
/* React: fontFamily: "'Roboto Mono', monospace", fontSize: 16, lineHeight: '22px' */
.p3xr-hex-monitor {
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    line-height: 22px;
}
/* React: overflow: 'hidden' */
.p3xr-hex-content {
    overflow: hidden;
}
/* React: display: 'flex', whiteSpace: 'nowrap' */
.p3xr-hex-line {
    display: flex;
    white-space: nowrap;
}
/* React: opacity: 0.5, paddingRight: 12, flexShrink: 0 */
.p3xr-hex-addr {
    opacity: 0.5;
    padding-right: 12px;
    flex-shrink: 0;
}
/* React: paddingRight: 12, flexShrink: 0, whiteSpace: 'pre' */
.p3xr-hex-bytes {
    padding-right: 12px;
    flex-shrink: 0;
    white-space: pre;
}
/* React: borderLeft: '1px solid var(--p3xr-fieldset-border, rgba(255,255,255,0.25))', paddingLeft: 12, flexShrink: 0 */
.p3xr-hex-ascii {
    border-left: 1px solid rgba(var(--v-theme-on-surface), 0.25);
    padding-left: 12px;
    flex-shrink: 0;
}
/* React: opacity: 0.5 */
.p3xr-hex-dim {
    opacity: 0.5;
}
/* React: overflowX: 'auto', overflowY: 'hidden', position: 'sticky', bottom: 0 */
.p3xr-hex-scrollbar {
    overflow-x: auto;
    overflow-y: hidden;
    position: sticky;
    bottom: 0;
}
</style>
