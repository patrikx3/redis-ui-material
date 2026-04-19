<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import TreeSettingsDialog from '../../dialogs/TreeSettingsDialog.vue'
import KeyImportDialog from '../../dialogs/KeyImportDialog.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useSettingsStore } from '../../stores/settings'
import { useCommonStore } from '../../stores/common'
import { useMainCommandStore, emitCommand } from '../../stores/main-command'
import { useOverlayStore } from '../../stores/overlay'
import { useThemeStore } from '../../stores/theme'
import { request } from '../../stores/socket.service'

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const cmd = useMainCommandStore()
const overlay = useOverlayStore()
const { themeKey } = storeToRefs(useThemeStore())

const strings = computed(() => i18n.strings)
const isReadonly = computed(() => state.connection?.readonly === true)
const pages = computed(() => state.pages)

// Local state synced from store
const localSearch = ref(state.search || '')
const localDivider = ref(settings.redisTreeDivider)
const localPage = ref(state.page || 1)

watch(() => state.search, (v) => { localSearch.value = v || '' })
watch(() => settings.redisTreeDivider, (v) => { localDivider.value = v })
watch(() => state.page, (v) => { localPage.value = v || 1 })

// Menus & dialogs
const expandMenuOpen = ref(false)
const dividerMenuOpen = ref(false)
const moreMenuOpen = ref(false)
const treeSettingsOpen = ref(false)
const importDialogOpen = ref(false)
const importDialogData = ref<{ keys: any[] } | null>(null)

// Theme colors (exact from React themes/index.ts)
const TREECONTROL_ICON_COLOR: Record<string, string> = {
    enterprise: 'rgba(0,0,0,0.87)', light: 'rgba(0,0,0,0.87)', redis: 'rgba(0,0,0,0.87)',
    dark: 'rgba(255,255,255,0.7)', darkNeu: 'rgba(255,255,255,0.7)', darkoBluo: 'rgba(255,255,255,0.7)',
    matrix: 'rgba(255,255,255,0.7)',
}
const INPUT_BG: Record<string, string> = {
    enterprise: 'white', light: 'white', redis: 'white',
    dark: 'rgba(64,64,64,1)', darkNeu: 'rgba(64,64,64,1)', darkoBluo: 'rgba(64,64,64,1)',
    matrix: 'rgba(64,64,64,1)',
}
const INPUT_COLOR: Record<string, string> = {
    enterprise: 'black', light: 'black', redis: 'black',
    dark: 'white', darkNeu: 'white', darkoBluo: 'white',
    matrix: 'white',
}
const INPUT_BORDER: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const COMMON_WARN: Record<string, string> = {
    enterprise: '#03a9f4', light: '#607d8b', redis: '#f44336',
    dark: '#9fa8da', darkNeu: '#2196f3', darkoBluo: '#03a9f4',
    matrix: '#4caf50',
}

const iconColor = computed(() => TREECONTROL_ICON_COLOR[themeKey.value])
const inputBg = computed(() => INPUT_BG[themeKey.value])
const inputColor = computed(() => INPUT_COLOR[themeKey.value])
const inputBorder = computed(() => INPUT_BORDER[themeKey.value])
const warnColor = computed(() => COMMON_WARN[themeKey.value])

const treeDividers = computed(() => state.cfg?.treeDividers || [':', '/', '-', '.', '_', '|'])

// Helper: resolve translation strings that may be functions
function str(val: any, opts?: any): string {
    if (typeof val === 'function') return val(opts)
    return val || ''
}

const hasSearch = computed(() => localSearch.value.length > 0)
const keyCount = computed(() => state.keysRaw?.length ?? 0)

const exportLabel = computed(() => {
    if (hasSearch.value) {
        return str(strings.value?.intention?.exportSearchResults, { count: keyCount.value })
    }
    return str(strings.value?.intention?.exportAllKeys, { count: keyCount.value })
})

const deleteSearchLabel = computed(() => {
    if (hasSearch.value) {
        return str(strings.value?.intention?.deleteSearchKeys, { count: keyCount.value })
    }
    return str(strings.value?.intention?.deleteAllKeysMenu, { count: keyCount.value })
})

const keyCountLabel = computed(() => {
    const fn = strings.value?.label?.keysCount
    const count = state.keysRaw?.length ?? 0
    return typeof fn === 'function' ? fn({ count }) : `${count} keys`
})

// --- Search ---
function onSearchSubmit() {
    state.search = localSearch.value
    state.page = 1
    cmd.refresh({ force: true })
}

function clearSearch() {
    localSearch.value = ''
    state.search = ''
    state.page = 1
    cmd.refresh({ force: true })
}

// --- Pagination ---
function pagerAction(action: string) {
    const p = pages.value
    if (p <= 1) return
    let newPage = localPage.value
    if (action === 'first') newPage = 1
    else if (action === 'prev') newPage = Math.max(1, newPage - 1)
    else if (action === 'next') newPage = Math.min(p, newPage + 1)
    else if (action === 'last') newPage = p
    localPage.value = newPage
    state.page = newPage
}

function onPageChange() {
    let p = localPage.value
    if (p < 1) p = 1
    if (p > pages.value) p = pages.value
    localPage.value = p
    state.page = p
}

// --- Divider ---
let dividerTimer: any = null
function onDividerChange() {
    clearTimeout(dividerTimer)
    dividerTimer = setTimeout(() => {
        settings.setSetting('p3xr-main-treecontrol-divider', localDivider.value)
    }, 666)
}

function setDividerQuick(d: string) {
    localDivider.value = d
    settings.setSetting('p3xr-main-treecontrol-divider', d)
    dividerMenuOpen.value = false
}

// --- Expand/Collapse ---
function expandAll() { emitCommand('expand-all'); expandMenuOpen.value = false }
function collapseAll() { emitCommand('collapse-all') }
function expandToLevel(level: number) { emitCommand(`expand-level-${level}`); expandMenuOpen.value = false }

// --- Add key ---
function cmdAddKey(e: Event) { cmd.addKey({ event: e }) }

// --- Export (matches React: action 'key/export', uses keysRaw) ---
async function exportKeys() {
    moreMenuOpen.value = false
    const keys = state.keysRaw
    if (!Array.isArray(keys) || keys.length === 0) {
        common.toast(str(strings.value?.label?.noKeysToExport))
        return
    }
    try {
        overlay.show({ message: str(strings.value?.label?.exportProgress) })
        const response = await request({ action: 'key/export', payload: { keys } })
        const json = JSON.stringify(response.data, null, 2)
        const blob = new Blob([json], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        const connName = state.connection?.name
        const db = state.currentDatabase ?? 0
        a.download = `${connName}-db${db}-export.json`
        a.click()
        URL.revokeObjectURL(url)
        common.toast(str(strings.value?.status?.exportDone))
    } catch (e) {
        common.generalHandleError(e)
    } finally {
        overlay.hide()
    }
}

// --- Import (matches React: file picker → dialog for conflict mode → action 'key/import') ---
function importKeys() {
    moreMenuOpen.value = false
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json'
    input.onchange = () => {
        const file = input.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (e: any) => {
            try {
                const parsed = JSON.parse(e.target.result)
                if (!parsed?.keys || !Array.isArray(parsed.keys) || parsed.keys.length === 0) {
                    common.toast(str(strings.value?.label?.importNoKeys))
                    return
                }
                importDialogData.value = parsed
                importDialogOpen.value = true
            } catch (err: any) {
                if (err !== undefined && err !== null) common.generalHandleError(err)
            }
        }
        reader.readAsText(file)
    }
    input.click()
}

async function handleImportDialogClose(result: { pending: boolean; keys: any[]; conflictMode: string } | null) {
    importDialogOpen.value = false
    importDialogData.value = null
    if (!result?.pending) return
    try {
        overlay.show({ message: str(strings.value?.label?.importProgress) })
        const response = await request({
            action: 'key/import',
            payload: { keys: result.keys, conflictMode: result.conflictMode },
        })
        const data = response.data || response
        const statusMsg = str(strings.value?.status?.importDone, data)
        common.toast(statusMsg)
        await cmd.refresh({ force: true })
    } catch (e: any) {
        if (e !== undefined && e !== null) common.generalHandleError(e)
    } finally {
        overlay.hide()
    }
}

// --- Delete search keys (matches React: pattern with wildcard, action 'key/delete-search-keys') ---
async function deleteSearchKeys() {
    moreMenuOpen.value = false
    const searchVal = localSearch.value
    let match: string
    if (searchVal.length > 0) {
        match = settings.searchStartsWith ? searchVal + '*' : '*' + searchVal + '*'
    } else {
        match = '*'
    }
    const keyCount = state.keysRaw?.length ?? 0
    try {
        const confirmMsg = str(strings.value?.confirm?.deleteSearchKeys, { count: keyCount, pattern: match })
        await common.confirm({ message: confirmMsg })
        overlay.show({ message: str(strings.value?.label?.deletingSearchKeys) })
        const response = await request({ action: 'key/delete-search-keys', payload: { match } })
        const deletedCount = response.deletedCount || response.deleted || 0
        const toastMsg = str(strings.value?.status?.deletedSearchKeys, { count: deletedCount })
        common.toast(toastMsg)
        await cmd.refresh({ force: true })
    } catch (e) {
        if (e !== undefined) common.generalHandleError(e)
    } finally {
        overlay.hide()
    }
}
</script>

<template>
    <div class="p3xr-tree-controls">
        <!-- Row 1: expand/collapse, divider, refresh, settings, pagination -->
        <div class="p3xr-tree-controls-row">
            <!-- Expand menu -->
            <v-menu v-model="expandMenuOpen" location="bottom start">
                <template #activator="{ props: mp }">
                    <v-btn v-bind="mp" icon variant="text" class="p3xr-tc-btn-primary">
                        <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
                <v-list density="compact">
                    <v-list-item v-for="lvl in 5" :key="lvl" @click="expandToLevel(lvl)">
                        {{ strings?.page?.treeControls?.level }} {{ lvl }}
                    </v-list-item>
                    <v-divider />
                    <v-list-item @click="expandAll()">{{ strings?.page?.treeControls?.expandAll }}</v-list-item>
                </v-list>
            </v-menu>

            <!-- Collapse -->
            <v-tooltip :text="strings?.page?.treeControls?.collapseAll" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }" @click="collapseAll()">
                        <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Refresh -->
            <v-tooltip :text="strings?.intention?.refresh" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }" @click="cmd.refresh({ force: true })">
                        <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Settings (opens TreeSettingsDialog) -->
            <v-tooltip :text="strings?.form?.treeSettings?.label?.formName" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }" @click="treeSettingsOpen = true">
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Divider input -->
            <v-tooltip :text="strings?.form?.treeSettings?.field?.treeSeparator" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <input
                        v-bind="tp"
                        v-model="localDivider"
                        class="p3xr-tc-divider-input"
                        :style="{ backgroundColor: inputBg, color: inputColor, borderColor: inputBorder }"
                        maxlength="3"
                        @input="onDividerChange()"
                    />
                </template>
            </v-tooltip>

            <!-- Divider selector dropdown — narrow, aligned under input (matches React translateX(-23px)) -->
            <v-menu v-if="treeDividers.length > 0" v-model="dividerMenuOpen" location="bottom start" :offset="[0, 4]">
                <template #activator="{ props: mp }">
                    <v-btn v-bind="mp" icon variant="text" class="p3xr-tc-btn-narrow" :style="{ color: iconColor }">
                        <v-icon size="18">mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list density="compact" class="p3xr-tc-divider-menu">
                    <v-list-item v-for="d in treeDividers" :key="d" @click="setDividerQuick(d)" class="p3xr-tc-divider-menu-item">
                        {{ d }}
                    </v-list-item>
                </v-list>
            </v-menu>

            <span style="flex: 1;" />

            <!-- Pagination (only if multiple pages) -->
            <template v-if="pages > 1">
                <span style="display: inline-flex; align-items: center; white-space: nowrap; margin-left: 2px;">
                    <v-tooltip :text="strings?.page?.treeControls?.pager?.first" location="top" :open-delay="300">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn-primary" :disabled="localPage <= 1" @click="pagerAction('first')">
                                <v-icon size="18">mdi-skip-previous</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip :text="strings?.page?.treeControls?.pager?.prev" location="top" :open-delay="300">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }" :disabled="localPage <= 1" @click="pagerAction('prev')">
                                <v-icon size="18">mdi-chevron-left</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                    <input
                        v-model.number="localPage"
                        type="number"
                        class="p3xr-tc-page-input"
                        :style="{ backgroundColor: inputBg, color: inputColor, borderColor: inputBorder }"
                        min="1" :max="pages"
                        @change="onPageChange()"
                        @input="onPageChange()"
                    />
                    <span style="opacity: 0.6; font-family: 'Roboto Mono', monospace; font-size: 12px; margin: 0 2px;">/ {{ pages }}</span>
                    <v-tooltip :text="strings?.page?.treeControls?.pager?.next" location="top" :open-delay="300">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }" :disabled="localPage >= pages" @click="pagerAction('next')">
                                <v-icon size="18">mdi-chevron-right</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                    <v-tooltip :text="strings?.page?.treeControls?.pager?.last" location="top" :open-delay="300">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn-primary" :disabled="localPage >= pages" @click="pagerAction('last')">
                                <v-icon size="18">mdi-skip-next</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                </span>
            </template>
            <span v-else style="margin-left: auto; opacity: 0.5; font-size: 12px;">{{ keyCountLabel }}&nbsp;</span>
        </div>

        <!-- Row 2: search bar -->
        <div class="p3xr-tree-controls-search">
            <input
                v-model="localSearch"
                class="p3xr-tc-search-input"
                :style="{ backgroundColor: inputBg, color: inputColor, borderColor: inputBorder }"
                :placeholder="settings.searchClientSide ? strings?.label?.searchKeys : strings?.label?.searchKeysServer"
                @keydown.enter="onSearchSubmit()"
            />

            <!-- Search button -->
            <v-tooltip :text="strings?.page?.treeControls?.search?.search" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn-primary" @click="onSearchSubmit()">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Clear search -->
            <v-tooltip v-if="localSearch" :text="strings?.page?.treeControls?.search?.clear" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" class="p3xr-tc-btn-primary" @click="clearSearch()">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Add key (non-readonly) -->
            <v-tooltip v-if="!isReadonly" :text="strings?.intention?.addKeyRoot" location="top" :open-delay="300">
                <template #activator="{ props: tp }">
                    <v-icon v-bind="tp" :style="{ fontSize: '24px', cursor: 'pointer', color: warnColor }" @click="cmdAddKey($event)">mdi-plus</v-icon>
                </template>
            </v-tooltip>

            <!-- More actions menu -->
            <v-menu v-model="moreMenuOpen" location="bottom end">
                <template #activator="{ props: mp }">
                    <v-btn v-bind="mp" icon variant="text" class="p3xr-tc-btn" :style="{ color: iconColor }">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list density="compact" style="min-width: 280px;">
                    <v-list-item @click="exportKeys()">
                        <template #prepend><v-icon size="18" style="margin-right: 8px;">mdi-download</v-icon></template>
                        <v-list-item-title>{{ exportLabel }}</v-list-item-title>
                        <v-list-item-subtitle v-if="hasSearch" style="opacity: 0.5; font-size: 11px; font-style: italic; white-space: normal;">
                            {{ str(strings?.label?.exportSearchHint) }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item v-if="!isReadonly" @click="importKeys()">
                        <template #prepend><v-icon size="18" style="margin-right: 8px;">mdi-upload</v-icon></template>
                        <v-list-item-title>{{ str(strings?.intention?.importKeys) }}</v-list-item-title>
                        <v-list-item-subtitle v-if="hasSearch" style="opacity: 0.5; font-size: 11px; font-style: italic; white-space: normal;">
                            {{ str(strings?.label?.importSearchHint) }}
                        </v-list-item-subtitle>
                    </v-list-item>
                    <template v-if="!isReadonly">
                        <v-divider />
                        <v-list-item @click="deleteSearchKeys()">
                            <template #prepend><v-icon size="18" color="error" style="margin-right: 8px;">mdi-delete-sweep</v-icon></template>
                            <v-list-item-title>{{ deleteSearchLabel }}</v-list-item-title>
                            <v-list-item-subtitle v-if="hasSearch" style="opacity: 0.5; font-size: 11px; font-style: italic; white-space: normal;">
                                {{ str(strings?.label?.deleteSearchHint) }}
                            </v-list-item-subtitle>
                        </v-list-item>
                    </template>
                </v-list>
            </v-menu>
        </div>
    </div>

    <!-- Tree Settings Dialog -->
    <TreeSettingsDialog :open="treeSettingsOpen" @close="treeSettingsOpen = false" />

    <!-- Key Import Dialog -->
    <KeyImportDialog :open="importDialogOpen" :data="importDialogData" @close="handleImportDialogClose" />
</template>

<style scoped>
.p3xr-tree-controls {
    flex-shrink: 0;
    padding: 4px;
}

.p3xr-tree-controls-row {
    display: flex;
    align-items: center;
    gap: 1px;
    min-height: 28px;
    flex-wrap: wrap;
}

.p3xr-tree-controls-search {
    display: flex;
    align-items: center;
    gap: 1px;
    margin-top: 4px;
}

/* Icon button base: 24x24 circular, matching React iconBtnBase */
.p3xr-tc-btn {
    padding: 0 !important;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    border-radius: 50% !important;
}

/* Primary icon buttons use theme primary color */
.p3xr-tc-btn-primary {
    padding: 0 !important;
    width: 24px !important;
    height: 24px !important;
    min-width: 24px !important;
    min-height: 24px !important;
    border-radius: 50% !important;
    color: rgb(var(--v-theme-primary)) !important;
}

/* Narrow button (divider dropdown) */
.p3xr-tc-btn-narrow {
    padding: 0 !important;
    width: 14px !important;
    height: 24px !important;
    min-width: 14px !important;
    min-height: 24px !important;
    border-radius: 50% !important;
}

/* Divider input */
.p3xr-tc-divider-input {
    width: 23px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    font-weight: 500;
    border: 2px solid;
    border-radius: 3px;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    height: 24px;
    margin: 0 1px;
}

/* Page number input */
.p3xr-tc-page-input {
    width: 32px;
    height: 20px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    border: 2px solid;
    border-radius: 3px;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -moz-appearance: textfield;
}
.p3xr-tc-page-input::-webkit-inner-spin-button,
.p3xr-tc-page-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Search input */
.p3xr-tc-search-input {
    flex: 1;
    min-width: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    border: 2px solid;
    border-radius: 3px;
    padding: 3px;
    outline: none;
    box-sizing: border-box;
    height: 28px;
    margin: 0 1px;
    vertical-align: middle;
}
</style>

<style>
/* Divider dropdown — narrow single-char width */
.p3xr-tc-divider-menu {
    min-width: 0 !important;
    max-width: 32px !important;
    padding: 0 !important;
    transform: translateX(-25px);
    overflow: hidden !important;
}
.p3xr-tc-divider-menu-item {
    font-family: 'Roboto Mono', monospace !important;
    font-size: 14px !important;
    min-height: 28px !important;
    padding: 0 6px !important;
    text-align: center !important;
    justify-content: center !important;
}
.p3xr-tc-divider-menu-item .v-list-item__content {
    text-align: center !important;
}

/* Override global v-icon 24px for tree control buttons */
.p3xr-tc-btn .v-icon,
.p3xr-tc-btn-primary .v-icon,
.p3xr-tc-btn-narrow .v-icon {
    font-size: 20px !important;
    width: 20px !important;
    height: 20px !important;
}
/* Button overlay reset */
.p3xr-tc-btn .v-btn__overlay,
.p3xr-tc-btn-primary .v-btn__overlay,
.p3xr-tc-btn-narrow .v-btn__overlay {
    opacity: 0 !important;
}
</style>
