<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../stores/i18n'
import { useThemeStore } from '../stores/theme'

const props = withDefaults(defineProps<{
    title: string
    accordionKey?: string
    collapsible?: boolean
}>(), {
    collapsible: true,
})

const i18n = useI18nStore()
const strings = () => i18n.strings
const { themeKey } = storeToRefs(useThemeStore())

// Accordion colors per theme (exact from React/Angular)
const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const ACCORDION_COLOR: Record<string, string> = {
    enterprise: 'rgba(0,0,0,0.87)', light: 'rgba(0,0,0,0.87)', redis: 'rgba(0,0,0,0.87)',
    dark: 'rgba(0,0,0,0.87)', darkNeu: 'rgba(0,0,0,0.87)', darkoBluo: '#fff',
    matrix: 'rgba(0,0,0,0.87)',
}

let counter = 0
const key = props.accordionKey || String(++counter)
const storageKey = `p3xr-accordion-extended-${key}`

const extended = ref(true)

onMounted(() => {
    if (!props.collapsible) { extended.value = true; return }
    try {
        const v = localStorage.getItem(storageKey)
        extended.value = v === null ? true : v === 'true'
    } catch { extended.value = true }
})

watch(extended, (v) => {
    if (!props.collapsible) return
    try { localStorage.setItem(storageKey, String(v)) } catch {}
})

function toggle() { extended.value = !extended.value }
</script>

<template>
    <div class="p3xr-accordion-wrapper">
        <!-- Toolbar header -->
        <div
            class="p3xr-accordion-toolbar"
            :class="{ 'p3xr-collapsed': !extended }"
            :style="{
                backgroundColor: ACCORDION_BG[themeKey] || '#9e9e9e',
                color: ACCORDION_COLOR[themeKey] || 'rgba(0,0,0,0.87)',
            }"
        >
            <div class="p3xr-accordion-toolbar-inner">
                <span class="p3xr-accordion-title"
                    :style="{ cursor: collapsible ? 'pointer' : 'default' }"
                    @click="collapsible ? toggle() : undefined">
                    {{ title }}
                </span>
                <div class="p3xr-accordion-actions">
                    <slot name="actions" />
                </div>
                <v-tooltip v-if="collapsible" :text="extended ? (strings()?.intention?.collapse || 'Collapse') : (strings()?.intention?.extend || 'Extend')" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" icon variant="text" color="inherit"
                            class="p3xr-accordion-toggle" @click="toggle">
                            <v-icon>{{ extended ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </div>
        </div>

        <!-- Content — hidden via CSS, not unmounted, to preserve chart DOM -->
        <div class="p3xr-accordion-content"
            :style="{
                display: extended ? 'block' : 'none',
                borderColor: ACCORDION_BG[themeKey] || '#9e9e9e',
            }">
            <slot name="content" />
            <!-- Also support default slot for convenience -->
            <slot />
        </div>
    </div>
</template>

<style scoped>
.p3xr-accordion-wrapper {
    margin-bottom: 0;
}
.p3xr-accordion-toolbar {
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    font-size: 20px;
    font-weight: 400;
    padding: 0;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.p3xr-accordion-toolbar.p3xr-collapsed {
    box-shadow: 0 1px 1px rgba(0,0,0,0.4);
    border-radius: 4px;
}
.p3xr-accordion-toolbar-inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 8px 0 16px;
    box-sizing: border-box;
}
.p3xr-accordion-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.p3xr-accordion-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
}
.p3xr-accordion-toggle {
    flex-shrink: 0;
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
}
.p3xr-accordion-content {
    border: 1px solid;
    border-radius: 0 0 4px 4px;
    border-top: 0;
    background-color: rgb(var(--v-theme-surface));
    overflow: hidden;
}
/* List items inside accordion: proper padding matching MUI ListItem (16px sides) */
.p3xr-accordion-content .v-list-item {
    padding-left: 16px !important;
    padding-right: 16px !important;
}
</style>

<style>
/* ALL buttons inside accordion toolbar: inherit toolbar text color, never use theme color */
.p3xr-accordion-toolbar .v-btn {
    color: inherit !important;
}
.p3xr-accordion-toolbar .v-btn .v-icon {
    color: inherit !important;
}
.p3xr-accordion-toolbar .v-btn .v-btn__overlay {
    opacity: 0 !important;
}
.p3xr-accordion-toolbar .v-btn:hover .v-btn__overlay {
    opacity: 0.08 !important;
}
.p3xr-accordion-actions .v-btn {
    color: inherit !important;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.1px;
    min-width: auto;
}
</style>
