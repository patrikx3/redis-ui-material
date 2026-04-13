<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, useTemplateRef } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useThemeStore } from '../../stores/theme'
import { useMainCommandStore, onCommandEvent } from '../../stores/main-command'
import { navigateTo } from '../../stores/navigation.store'
import KeyNewOrSetDialog from '../../dialogs/KeyNewOrSetDialog.vue'
import type { KeyNewOrSetData } from '../../dialogs/KeyNewOrSetDialog.vue'
import DatabaseHeader from './DatabaseHeader.vue'
import DatabaseTreeControls from './DatabaseTreeControls.vue'
import DatabaseTree from './DatabaseTree.vue'
import ConsoleComponent from '../console/ConsoleComponent.vue'

const RESIZE_MIN_WIDTH = 315
const CONSOLE_COLLAPSED_HEIGHT = 80
const PANEL_WIDTH_KEY = 'p3xr-database-panel-width'

const router = useRouter()
const route = useRoute()
const i18n = useI18nStore()
const state = useRedisStateStore()
const { themeKey } = storeToRefs(useThemeStore())
const { width: displayWidth } = useDisplay()

const strings = computed(() => i18n.strings)
const isXs = computed(() => displayWidth.value < 600)
const cmd = useMainCommandStore()
const hasConnection = computed(() => !!state.connection)

// --- Key New/Edit dialog ---
const keyDialogOpen = ref(false)
const keyDialogData = ref<KeyNewOrSetData | null>(null)
const keyDialogUnsubs: Array<() => void> = []

function openKeyDialog(options: any) {
    keyDialogData.value = {
        type: options.type,
        node: options.node,
        model: options.model,
    }
    keyDialogOpen.value = true
}

async function handleKeyDialogClose(result?: any) {
    keyDialogOpen.value = false
    keyDialogData.value = null
    if (result) {
        state.redisChanged = true
        await cmd.refresh({ force: true })
    }
}

// Panel resize state
function getInitialWidth(): number {
    const saved = localStorage.getItem(PANEL_WIDTH_KEY)
    if (saved) {
        const w = parseInt(saved, 10)
        if (!isNaN(w) && w >= RESIZE_MIN_WIDTH) return w
    }
    return RESIZE_MIN_WIDTH
}
const leftWidth = ref(getInitialWidth())
const isDragging = ref(false)
const isHovering = ref(false)
const containerEl = ref<HTMLDivElement>()

// Console expand/collapse
const consoleExpanded = ref(false)
const consolePanelEl = ref<HTMLDivElement>()

// Accordion colors for header/resizer (same as P3xrAccordion)
const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const resizerBg = computed(() => ACCORDION_BG[themeKey.value])

const isDark = computed(() => document.body.classList.contains('p3xr-theme-dark'))
const resizerFilter = computed(() => {
    if (isDragging.value) return isDark.value ? 'brightness(1.6)' : 'brightness(0.7)'
    if (isHovering.value) return isDark.value ? 'brightness(1.3)' : 'brightness(0.85)'
    return 'none'
})

const consoleHeight = computed(() => consoleExpanded.value ? '33%' : `${CONSOLE_COLLAPSED_HEIGHT}px`)
const consoleMinHeight = computed(() => consoleExpanded.value ? 220 : CONSOLE_COLLAPSED_HEIGHT)

// Redirect to statistics on bare /database + listen for key-new event
onMounted(() => {
    if (state.connection) {
        const path = route.path
        if (path === '/database' || path === '/database/') {
            navigateTo('database.statistics')
        }
    }
    keyDialogUnsubs.push(onCommandEvent('key-new', (options: any) => openKeyDialog(options)))
})

// --- Drag resize ---
function handleMouseDown(e: MouseEvent) {
    e.preventDefault()
    isDragging.value = true
    document.documentElement.style.cursor = 'ew-resize'
    document.body.classList.add('p3xr-not-selectable')
}

let lastDragWidth = RESIZE_MIN_WIDTH

function onMouseMove(e: MouseEvent) {
    if (!isDragging.value) return
    const container = containerEl.value
    if (!container) return
    const rect = container.getBoundingClientRect()
    const newWidth = e.clientX - rect.left
    if (newWidth < RESIZE_MIN_WIDTH || newWidth > rect.width - RESIZE_MIN_WIDTH) {
        document.documentElement.style.cursor = 'not-allowed'
        return
    }
    document.documentElement.style.cursor = 'ew-resize'
    lastDragWidth = newWidth
    leftWidth.value = newWidth
}

function onMouseUp() {
    if (!isDragging.value) return
    isDragging.value = false
    document.documentElement.style.cursor = 'auto'
    document.body.classList.remove('p3xr-not-selectable')
    if (lastDragWidth >= RESIZE_MIN_WIDTH) {
        localStorage.setItem(PANEL_WIDTH_KEY, String(lastDragWidth))
    }
}

onMounted(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
})
onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
    keyDialogUnsubs.forEach(fn => fn())
})

// --- Console click-outside-to-collapse ---
function onDocumentMouseDown(event: MouseEvent) {
    if (isXs.value || !hasConnection.value) return
    const panel = consolePanelEl.value
    if (!panel) return

    if (panel.contains(event.target as Node)) {
        const actions = panel.querySelector('.p3xr-console-toolbar-actions')
        if (actions && actions.contains(event.target as Node)) return
        if (!consoleExpanded.value) {
            consoleExpanded.value = true
        }
        return
    }
    if (consoleExpanded.value) {
        consoleExpanded.value = false
    }
}

onMounted(() => document.addEventListener('mousedown', onDocumentMouseDown))
onUnmounted(() => document.removeEventListener('mousedown', onDocumentMouseDown))
</script>

<template>
    <div class="p3xr-database-root">
        <DatabaseHeader />

        <div class="p3xr-database-body">
            <template v-if="hasConnection">
                <!-- Mobile layout -->
                <div v-if="isXs" class="p3xr-database-mobile">
                    <div class="p3xr-database-mobile-tree-controls">
                        <DatabaseTreeControls />
                    </div>
                    <div class="p3xr-database-mobile-tree">
                        <DatabaseTree />
                    </div>
                    <div class="p3xr-database-mobile-content">
                        <router-view />
                    </div>
                    <div class="p3xr-database-mobile-console">
                        <ConsoleComponent embedded />
                    </div>
                </div>

                <!-- Desktop layout -->
                <div v-else ref="containerEl" class="p3xr-database-desktop" :class="{ 'p3xr-not-selectable': isDragging }">
                    <!-- Main content: tree + resizer + outlet -->
                    <div class="p3xr-database-main">
                        <!-- Left: tree controls + tree -->
                        <div class="p3xr-database-left" :style="{ width: leftWidth + 'px', minWidth: RESIZE_MIN_WIDTH + 'px' }">
                            <DatabaseTreeControls />
                            <div class="p3xr-database-tree-area">
                                <DatabaseTree />
                            </div>
                        </div>

                        <!-- Resizer -->
                        <div
                            class="p3xr-database-resizer"
                            :style="{ backgroundColor: resizerBg, filter: resizerFilter }"
                            @mousedown="handleMouseDown"
                            @mouseenter="isHovering = true"
                            @mouseleave="isHovering = false"
                        />

                        <!-- Right: key viewer / statistics -->
                        <div class="p3xr-database-right">
                            <router-view />
                        </div>
                    </div>

                    <!-- Bottom console panel -->
                    <div
                        ref="consolePanelEl"
                        class="p3xr-database-console-panel"
                        :style="{
                            height: consoleHeight,
                            minHeight: consoleMinHeight + 'px',
                            maxHeight: consoleExpanded ? '50%' : CONSOLE_COLLAPSED_HEIGHT + 'px',
                        }"
                    >
                        <ConsoleComponent embedded :collapsed="!consoleExpanded" />
                    </div>
                </div>
            </template>
        </div>

        <!-- Key New/Edit Dialog -->
        <KeyNewOrSetDialog :open="keyDialogOpen" :data="keyDialogData" @close="handleKeyDialogClose" />
    </div>
</template>

<style scoped>
.p3xr-database-root {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
    border-radius: 4px 4px 0 0;
    overflow: hidden;
}

.p3xr-database-body {
    flex: 1;
    min-height: 0;
    background-color: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

/* Desktop layout */
.p3xr-database-desktop {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
}

.p3xr-database-main {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
}

.p3xr-database-left {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.p3xr-database-tree-area {
    flex: 1;
    min-height: 0;
    overflow: hidden;
}

.p3xr-database-resizer {
    width: 5px;
    flex-shrink: 0;
    cursor: ew-resize;
    transition: filter 0.15s ease;
    z-index: 8;
}

.p3xr-database-right {
    flex: 1;
    overflow: auto;
}

.p3xr-database-console-panel {
    flex-shrink: 0;
    border-top: 1px solid rgba(var(--v-border-color), 0.16);
    overflow: hidden;
    box-sizing: border-box;
    z-index: 9;
}

/* Mobile layout */
.p3xr-database-mobile {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
}

.p3xr-database-mobile-tree-controls {
    flex: 0 0 auto;
}

.p3xr-database-mobile-tree {
    flex: 1 1 auto;
    min-height: 0;
    height: 20vh;
    min-height: 100px;
    overflow: auto;
}

.p3xr-database-mobile-content {
    flex: 1;
}

.p3xr-database-mobile-console {
    height: 33vh;
    min-height: 220px;
    margin-top: auto;
    border-top: 1px solid rgba(var(--v-border-color), 0.16);
    overflow-x: hidden;
}
</style>

<style>
.p3xr-not-selectable {
    user-select: none !important;
}
</style>
