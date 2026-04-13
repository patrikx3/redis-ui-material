<script setup lang="ts">
/**
 * Command Palette — exact port of React CommandPaletteDialog.tsx.
 * Ctrl+K opens, search/filter shortcuts, arrow keys navigate, Enter executes.
 */
import { ref, computed, watch, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '../stores/common.store'
import { useI18nStore } from '../stores/i18n'
import { useThemeStore } from '../stores/theme'
import { getShortcuts, type ShortcutDef } from '../stores/shortcuts'

interface PaletteItem { label: string; description: string; shortcut: ShortcutDef }

const common = useCommonStore()
const strings = computed(() => useI18nStore().strings)
const { themeKey } = storeToRefs(useThemeStore())
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))

const search = ref('')
const selectedIndex = ref(0)
const inputEl = ref<HTMLInputElement>()
const listEl = ref<HTMLDivElement>()

const allItems = computed((): PaletteItem[] => {
    const seen = new Set<string>()
    const items: PaletteItem[] = []
    for (const s of getShortcuts()) {
        if (seen.has(s.descriptionKey)) continue
        seen.add(s.descriptionKey)
        items.push({ label: s.label, description: strings.value?.label?.[s.descriptionKey] || s.descriptionKey, shortcut: s })
    }
    return items
})

const filtered = computed(() => {
    const q = search.value.toLowerCase().trim()
    if (!q) return allItems.value
    return allItems.value.filter(i => i.description.toLowerCase().includes(q) || i.label.toLowerCase().includes(q))
})

watch(() => common.commandPaletteOpen, (open) => {
    if (open) {
        search.value = ''
        selectedIndex.value = 0
        nextTick(() => setTimeout(() => inputEl.value?.focus(), 50))
    }
})

watch(selectedIndex, () => {
    if (!listEl.value) return
    const items = listEl.value.querySelectorAll('.p3xr-cmd-palette-item')
    items[selectedIndex.value]?.scrollIntoView({ block: 'nearest' })
})

function execute(item: PaletteItem) {
    common.setCommandPaletteOpen(false)
    item.shortcut.action()
}

function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown') { e.preventDefault(); selectedIndex.value = Math.min(selectedIndex.value + 1, filtered.value.length - 1) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); selectedIndex.value = Math.max(selectedIndex.value - 1, 0) }
    else if (e.key === 'Enter') { e.preventDefault(); if (filtered.value[selectedIndex.value]) execute(filtered.value[selectedIndex.value]) }
    else if (e.key === 'Escape') { common.setCommandPaletteOpen(false) }
}

function onSearchInput(e: Event) {
    search.value = (e.target as HTMLInputElement).value
    selectedIndex.value = 0
}

const hoverBg = computed(() => isDark.value ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)')
const activeBg = computed(() => isDark.value ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)')
</script>

<template>
    <v-dialog v-model="common.commandPaletteOpen" max-width="500" min-width="360" @keydown.escape="common.setCommandPaletteOpen(false)">
        <v-card style="border-radius: 8px; overflow: hidden;">
            <!-- Search input -->
            <div style="display: flex; align-items: center; gap: 8px; padding: 8px 16px; border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);">
                <v-icon style="opacity: 0.5;">mdi-magnify</v-icon>
                <input
                    ref="inputEl"
                    :value="search"
                    @input="onSearchInput"
                    @keydown="onKeyDown"
                    :placeholder="strings?.label?.commandPalette"
                    autocomplete="off"
                    style="flex: 1; border: none; outline: none; background: transparent; color: inherit; font-size: 16px; font-family: inherit;"
                />
            </div>
            <!-- Items -->
            <div ref="listEl" style="max-height: 300px; overflow-y: auto;">
                <div v-for="(item, i) in filtered" :key="item.label"
                    class="p3xr-cmd-palette-item"
                    :style="{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 16px', cursor: 'pointer',
                        backgroundColor: i === selectedIndex ? activeBg : 'transparent',
                    }"
                    @click="execute(item)">
                    <span style="font-size: 14px;">{{ item.description }}</span>
                    <kbd style="padding: 2px 8px; border-radius: 4px; font-size: 12px; font-family: 'Roboto Mono', monospace; white-space: nowrap; background-color: rgba(var(--v-theme-on-surface), 0.08);">{{ item.label }}</kbd>
                </div>
                <div v-if="filtered.length === 0" style="padding: 16px; text-align: center; opacity: 0.5;">
                    {{ strings?.label?.noResults }}
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.p3xr-cmd-palette-item:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
}
</style>
