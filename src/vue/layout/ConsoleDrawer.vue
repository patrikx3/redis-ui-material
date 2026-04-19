<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRedisStateStore } from '../stores/redis-state'
import { useThemeStore } from '../stores/theme'
import ConsoleComponent from '../pages/console/ConsoleComponent.vue'

const HEIGHT_KEY = 'p3xr-console-drawer-height'
const MIN_VH = 15
const MAX_VH = 66
const FOOTER_HEIGHT = 48

const state = useRedisStateStore()
const { themeKey } = storeToRefs(useThemeStore())
const isOpen = computed(() => state.consoleDrawerOpen)

const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const borderColor = computed(() => ACCORDION_BG[themeKey.value])

const resizeClicked = ref(false)
const sizerHover = ref(false)
const drawerRef = ref<HTMLElement | null>(null)

let dragStyleEl: HTMLStyleElement | null = null
let drawerResizeObserver: ResizeObserver | null = null

function applyDragCursor(cursor: 'ns-resize' | 'not-allowed') {
    if (!dragStyleEl) {
        dragStyleEl = document.createElement('style')
        dragStyleEl.setAttribute('data-p3xr-console-drawer-drag', '')
        document.head.appendChild(dragStyleEl)
    }
    dragStyleEl.textContent = `*, *::before, *::after { cursor: ${cursor} !important; }`
}

function clearDragCursor() {
    dragStyleEl?.remove()
    dragStyleEl = null
}

// Saved height is applied at bootstrap (src/core/console-drawer-height.ts)
// so it's in place before this component mounts.

function handleSizerMouseDown(e: MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    resizeClicked.value = true
    applyDragCursor('ns-resize')
    document.body.classList.add('p3xr-not-selectable')
    document.documentElement.classList.add('p3xr-console-drawer-resizing')
}

function onMouseMove(e: MouseEvent) {
    if (!resizeClicked.value) return
    const minPx = (MIN_VH / 100) * window.innerHeight
    const maxPx = (MAX_VH / 100) * window.innerHeight
    let newHeight = window.innerHeight - e.clientY - FOOTER_HEIGHT
    const outOfBounds = newHeight < minPx || newHeight > maxPx
    if (newHeight < minPx) newHeight = minPx
    if (newHeight > maxPx) newHeight = maxPx
    applyDragCursor(outOfBounds ? 'not-allowed' : 'ns-resize')
    document.documentElement.style.setProperty('--p3xr-console-drawer-height', `${Math.round(newHeight)}px`)
}

function onMouseUp() {
    if (!resizeClicked.value) return
    resizeClicked.value = false
    clearDragCursor()
    document.body.classList.remove('p3xr-not-selectable')
    document.documentElement.classList.remove('p3xr-console-drawer-resizing')
    const current = document.documentElement.style.getPropertyValue('--p3xr-console-drawer-height')
    if (current && current.endsWith('px')) {
        localStorage.setItem(HEIGHT_KEY, current)
    }
}

onMounted(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
    // Observe the drawer element — fires on every size change frame
    // (open/close transition + live drag). Listeners on window.resize
    // (profiler/pubsub page height calc) pick it up.
    if (drawerRef.value && typeof ResizeObserver !== 'undefined') {
        drawerResizeObserver = new ResizeObserver(() => {
            window.dispatchEvent(new Event('resize'))
        })
        drawerResizeObserver.observe(drawerRef.value)
    }
})

onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    drawerResizeObserver?.disconnect()
    drawerResizeObserver = null
    clearDragCursor()
})

function close() {
    state.setConsoleDrawerOpen(false)
}
</script>

<template>
    <div ref="drawerRef"
         id="p3xr-console-drawer"
         :class="{ 'p3xr-drawer-open': isOpen }"
         :style="{ borderColor: borderColor, transition: resizeClicked ? 'none' : 'height 150ms ease-out' }">
        <div id="p3xr-console-drawer-sizer"
             role="separator"
             aria-orientation="horizontal"
             aria-label="Resize console drawer"
             :class="{ 'p3xr-resizer-hover': sizerHover, 'p3xr-resizer-active': resizeClicked }"
             @mousedown="handleSizerMouseDown"
             @mouseenter="sizerHover = true"
             @mouseleave="sizerHover = false"
             :style="{ backgroundColor: (sizerHover || resizeClicked) ? borderColor : 'transparent' }"></div>
        <div id="p3xr-console-drawer-body">
            <ConsoleComponent :embedded="true"
                              :show-close-button="true"
                              @close-request="close" />
        </div>
    </div>
</template>

<style>
#p3xr-console-drawer {
    position: fixed;
    left: 5px;
    right: calc(5px + var(--p3xr-scroll-gutter, 0px));
    bottom: 48px;
    height: 0;
    overflow: hidden;
    background-color: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), 0.87);
    border: 0 solid;
    border-radius: 4px 4px 0 0;
    z-index: 8;
    transition: height 150ms ease-out;
    display: flex;
    flex-direction: column;
}
#p3xr-console-drawer.p3xr-drawer-open {
    height: var(--p3xr-console-drawer-height, 30vh);
    border-width: 1px;
}
#p3xr-console-drawer-sizer {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 5px;
    cursor: ns-resize;
    z-index: 3;
    background-color: transparent;
    transition: background-color 0.15s ease, filter 0.15s ease;
}
body.p3xr-theme-dark #p3xr-console-drawer-sizer.p3xr-resizer-hover {
    filter: brightness(1.5);
}
body.p3xr-theme-dark #p3xr-console-drawer-sizer.p3xr-resizer-active {
    filter: brightness(2);
}
body.p3xr-theme-light #p3xr-console-drawer-sizer.p3xr-resizer-hover {
    filter: brightness(0.75);
}
body.p3xr-theme-light #p3xr-console-drawer-sizer.p3xr-resizer-active {
    filter: brightness(0.5);
}
#p3xr-console-drawer-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    position: relative;
}
#p3xr-console-drawer-body > * {
    width: 100%;
    height: 100%;
}
:root {
    --p3xr-console-drawer-height: 30vh;
}
</style>
