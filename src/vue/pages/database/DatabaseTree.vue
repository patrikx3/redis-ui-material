<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick, toRaw } from 'vue'
import { storeToRefs } from 'pinia'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useSettingsStore } from '../../stores/settings'
import { useCommonStore } from '../../stores/common'
import { useThemeStore } from '../../stores/theme'
import { useMainCommandStore, onCommandEvent, emitCommand } from '../../stores/main-command'
import { request } from '../../stores/socket.service'
import { keysToTreeControl } from '../../stores/tree-builder'
import { navigateTo } from '../../stores/navigation.store'
import humanizeDuration from 'humanize-duration'

const ROW_HEIGHT = 28
const INDENT_PX = 20

interface FlatTreeNode {
    label: string
    key: string
    level: number
    expandable: boolean
    type: 'folder' | 'element'
    childCount: number
    keysInfo?: { type: string; length: number; ttl?: number }
    _sourceNode?: any
}

const typeIcons: Record<string, string> = {
    hash: 'fas fa-hashtag', list: 'fas fa-list-ol', set: 'fas fa-list',
    string: 'fas fa-ellipsis-h', zset: 'fas fa-chart-line', stream: 'fas fa-stream',
    json: 'fas fa-code', timeseries: 'fas fa-chart-area', bloom: 'fas fa-filter',
    cuckoo: 'fas fa-filter', topk: 'fas fa-trophy', cms: 'fas fa-chart-simple',
    tdigest: 'fas fa-chart-bar', vectorset: 'fas fa-brain',
}

// Theme-specific colors (from React themes/index.ts)
const TREE_BRANCH_COLOR: Record<string, string> = {
    enterprise: '#343dff', light: '#a900a9', redis: '#964900',
    dark: '#bec2ff', darkNeu: '#bec2ff', darkoBluo: '#bec2ff',
    matrix: '#76ff03',
}
const COMMON_WARN_COLOR: Record<string, string> = {
    enterprise: '#03a9f4', light: '#607d8b', redis: '#f44336',
    dark: '#9fa8da', darkNeu: '#2196f3', darkoBluo: '#03a9f4',
    matrix: '#4caf50',
}

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const cmd = useMainCommandStore()
const { themeKey } = storeToRefs(useThemeStore())

const strings = computed(() => i18n.strings)
const isReadonly = computed(() => state.connection?.readonly === true)
const divider = computed(() => settings.redisTreeDivider)
const treeBranchColor = computed(() => TREE_BRANCH_COLOR[themeKey.value] || '#bec2ff')
const warnColor = computed(() => COMMON_WARN_COLOR[themeKey.value] || '#9fa8da')

// --- Expansion state (sessionStorage) ---
const expandedKeys = ref(new Set<string>())
const hierarchicalNodes = ref<any[]>([])
const parentRef = ref<HTMLDivElement | null>(null)
const tick = ref(0) // for TTL repaint

function getExpansionKey(): string {
    const connId = state.connection?.id || 'none'
    const db = state.currentDatabase ?? 0
    return `p3xr-tree-expanded-${connId}-${db}`
}

function saveExpansion() {
    try { sessionStorage.setItem(getExpansionKey(), JSON.stringify([...expandedKeys.value])) } catch {}
}

function restoreExpansion() {
    try {
        const raw = sessionStorage.getItem(getExpansionKey())
        if (raw) expandedKeys.value = new Set(JSON.parse(raw))
    } catch {}
}

// --- Tree building ---
async function rebuildTree() {
    const keys = toRaw(state.paginatedKeys)
    const info = toRaw(state.keysInfo)
    if (!keys || keys.length === 0) {
        hierarchicalNodes.value = []
        return
    }
    // Deep-clone to strip Vue reactivity — Worker postMessage needs plain objects
    const plainInfo = info ? JSON.parse(JSON.stringify(info)) : undefined
    const result = await keysToTreeControl({
        keys: [...keys],
        divider: divider.value,
        keysInfo: plainInfo,
        savedExpandedNodes: [...expandedKeys.value].map(k => ({ key: k })),
    })
    hierarchicalNodes.value = result.nodes || []
    if (result.expandedNodes?.length > 0) {
        expandedKeys.value = new Set(result.expandedNodes.map((n: any) => n.key || n))
    }
}

// --- Flatten (hierarchical → flat for virtualizer) ---
const dataSource = computed(() => {
    // eslint-disable-next-line no-unused-expressions
    tick.value // depend on tick for TTL repaints
    const result: FlatTreeNode[] = []
    const flatten = (nodes: any[], level: number) => {
        for (const node of nodes) {
            result.push({
                label: node.label,
                key: node.key,
                level,
                expandable: node.type === 'folder',
                type: node.type,
                childCount: node.childCount ?? 0,
                keysInfo: node.keysInfo,
                _sourceNode: node,
            })
            if (node.type === 'folder' && expandedKeys.value.has(node.key) && node.children?.length > 0) {
                flatten(node.children, level + 1)
            }
        }
    }
    flatten(hierarchicalNodes.value, 0)
    return result
})

// --- Virtual scrolling (@tanstack/vue-virtual) ---
const virtualizer = useVirtualizer(computed(() => ({
    count: dataSource.value.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
})))

// --- Interaction handlers ---
function toggleExpand(node: FlatTreeNode) {
    const newSet = new Set(expandedKeys.value)
    if (newSet.has(node.key)) newSet.delete(node.key)
    else newSet.add(node.key)
    expandedKeys.value = newSet
    saveExpansion()
}

function selectNode(node: FlatTreeNode) {
    navigateTo('database.key', { key: node.key })
}

function str(val: any, opts?: any): string {
    if (typeof val === 'function') return val(opts)
    return val || ''
}

async function deleteKey(e: Event, key: string) {
    e.preventDefault()
    e.stopPropagation()
    try {
        const msg = str(strings.value?.confirm?.deleteKey, { key }) || 'Delete this key?'
        await common.confirm({ message: msg })
        await request({ action: 'key/delete', payload: { key } })
        navigateTo('database.statistics')
        const toast = str(strings.value?.status?.deletedKey, { key }) || 'Key deleted'
        common.toast(toast)
        await cmd.refresh({ force: true })
    } catch (err) {
        if (err !== undefined) common.generalHandleError(err)
    }
}

async function deleteTree(e: Event, node: FlatTreeNode) {
    e.stopPropagation()
    try {
        const msg = str(strings.value?.confirm?.deleteTree, { key: node.key }) || 'Delete all keys under this prefix?'
        await common.confirm({ message: msg })
        await request({ action: 'key/del-tree', payload: { key: node.key, redisTreeDivider: divider.value } })
        const toast = str(strings.value?.status?.deletedTree, { key: node.key }) || 'Tree deleted'
        common.toast(toast)
        await cmd.refresh({ force: true })
    } catch (err) {
        if (err !== undefined) common.generalHandleError(err)
    }
}

function addKey(e: Event, node: FlatTreeNode) {
    e.stopPropagation()
    emitCommand('key-new', { event: e, node: node._sourceNode ?? { key: node.key } })
}

function nodeTooltip(node: FlatTreeNode): string {
    if (node.type === 'folder') return node.key
    const typeName = node.keysInfo?.type || ''
    return typeName ? `${typeName} - ${node.key}` : node.key
}

// --- TTL ---
function getRemainingTtl(node: FlatTreeNode): number {
    const ttl = node.keysInfo?.ttl
    if (!ttl || ttl <= 0) return -1
    const fetchedAt = state.keysInfoFetchedAt ?? Date.now()
    const elapsed = Math.floor((Date.now() - fetchedAt) / 1000)
    const remaining = ttl - elapsed
    return remaining > 0 ? remaining : -1
}

function formatTtl(node: FlatTreeNode): string {
    const remaining = getRemainingTtl(node)
    if (remaining <= 0) return ''
    try {
        const hdOpts = settings.getHumanizeDurationOptions()
        return humanizeDuration(remaining * 1000, { ...hdOpts, largest: 2, round: true, delimiter: ' ' })
    } catch {
        if (remaining < 60) return remaining + 's'
        if (remaining < 3600) return Math.floor(remaining / 60) + 'm'
        return Math.floor(remaining / 3600) + 'h'
    }
}

function getTtlColor(node: FlatTreeNode): string {
    const remaining = getRemainingTtl(node)
    if (remaining <= 0) return ''
    if (remaining < 300) return '#f44336'   // red (critical)
    if (remaining < 3600) return '#ff9800'  // orange (medium)
    return '#4caf50'                         // green (safe)
}

function isTtlPulsing(node: FlatTreeNode): boolean {
    const remaining = getRemainingTtl(node)
    return remaining > 0 && remaining < 30
}

// --- TTL adaptive repaint ---
let ttlTimer: any = null
function startTtlRepaint() {
    const doTick = () => {
        let minTtl = Infinity
        let hasExpired = false
        for (const node of dataSource.value) {
            if (node.type === 'folder') continue
            const remaining = getRemainingTtl(node)
            if (remaining === -1) continue
            if (remaining <= 0) hasExpired = true
            else if (remaining < minTtl) minTtl = remaining
        }
        if (hasExpired) {
            cmd.refresh({ force: true })
            ttlTimer = setTimeout(doTick, 3000)
            return
        }
        tick.value++ // trigger reactivity for repaint
        let interval: number
        if (minTtl <= 30) interval = 1000
        else if (minTtl <= 300) interval = 5000
        else interval = 30000
        ttlTimer = setTimeout(doTick, interval)
    }
    ttlTimer = setTimeout(doTick, 1000)
}

// --- Event subscriptions ---
const unsubs: Array<() => void> = []

onMounted(() => {
    restoreExpansion()
    rebuildTree()
    startTtlRepaint()

    // Command events
    unsubs.push(onCommandEvent('tree-refresh', () => rebuildTree()))
    unsubs.push(onCommandEvent('expand-all', () => {
        const allKeys = new Set<string>()
        const collect = (nodes: any[]) => {
            for (const n of nodes) {
                if (n.type === 'folder') { allKeys.add(n.key); if (n.children) collect(n.children) }
            }
        }
        collect(hierarchicalNodes.value)
        expandedKeys.value = allKeys
        saveExpansion()
    }))
    unsubs.push(onCommandEvent('collapse-all', () => {
        expandedKeys.value = new Set()
        saveExpansion()
    }))
    for (let lvl = 1; lvl <= 5; lvl++) {
        const level = lvl
        unsubs.push(onCommandEvent(`expand-level-${level}`, () => {
            const keys = new Set<string>()
            const collect = (nodes: any[], depth: number) => {
                for (const n of nodes) {
                    if (n.type === 'folder' && depth < level) {
                        keys.add(n.key)
                        if (n.children) collect(n.children, depth + 1)
                    }
                }
            }
            collect(hierarchicalNodes.value, 0)
            expandedKeys.value = keys
            saveExpansion()
        }))
    }
})

onUnmounted(() => {
    if (ttlTimer) clearTimeout(ttlTimer)
    unsubs.forEach(fn => fn())
})

// Watch for state changes that require tree rebuild
watch(
    () => [state.paginatedKeys, state.keysInfo, divider.value, state.page],
    () => rebuildTree(),
    { deep: true }
)

// Watch connection/database changes to restore expansion
watch(
    () => [state.connection?.id, state.currentDatabase],
    () => {
        expandedKeys.value = new Set()
        restoreExpansion()
        rebuildTree()
    }
)
</script>

<template>
    <div v-if="dataSource.length === 0" style="padding: 8px; opacity: 0.5; font-size: 13px;">
        {{ strings?.label?.noKeys || 'No keys' }}
    </div>

    <div v-else ref="parentRef" class="p3xr-tree-viewport">
        <div :style="{ height: virtualizer.getTotalSize() + 'px', width: '100%', position: 'relative' }">
            <div
                v-for="virtualRow in virtualizer.getVirtualItems()"
                :key="dataSource[virtualRow.index].type + '-' + dataSource[virtualRow.index].key"
                :data-p3xr-tree-key="dataSource[virtualRow.index].type === 'folder' ? '' : dataSource[virtualRow.index].key"
                class="p3xr-tree-row"
                :style="{
                    position: 'absolute', top: 0, left: 0, width: '100%',
                    height: ROW_HEIGHT + 'px',
                    transform: 'translateY(' + virtualRow.start + 'px)',
                    paddingLeft: (dataSource[virtualRow.index].level * INDENT_PX + 4) + 'px',
                }"
            >
                <!-- Folder expand/collapse icon -->
                <span
                    v-if="dataSource[virtualRow.index].expandable"
                    class="p3xr-tree-branch"
                    :class="{ 'p3xr-tree-branch-expanded': expandedKeys.has(dataSource[virtualRow.index].key) }"
                    :style="{ color: treeBranchColor }"
                    @click.stop="toggleExpand(dataSource[virtualRow.index])"
                />

                <!-- Node content wrapper -->
                <span :data-p3xr-tree-key="dataSource[virtualRow.index].type === 'folder' ? '' : dataSource[virtualRow.index].key" style="display: inline-flex; align-items: center; height: 28px;">
                    <!-- Label with tooltip -->
                    <v-tooltip :text="nodeTooltip(dataSource[virtualRow.index])" location="right" :open-delay="500" :offset="36">
                        <template #activator="{ props: tp }">
                            <label
                                v-bind="tp"
                                class="p3xr-tree-node-label"
                                @click="dataSource[virtualRow.index].expandable ? toggleExpand(dataSource[virtualRow.index]) : selectNode(dataSource[virtualRow.index])"
                            >
                                <!-- Type icon -->
                                <i
                                    v-if="dataSource[virtualRow.index].type !== 'folder' && dataSource[virtualRow.index].keysInfo"
                                    :class="typeIcons[dataSource[virtualRow.index].keysInfo.type] || 'fas fa-question'"
                                    class="p3xr-tree-type-icon"
                                    aria-hidden="true"
                                />

                                <span class="p3xr-database-tree-node-label">{{ dataSource[virtualRow.index].label }}</span>

                                <!-- Folder: divider* (count) -->
                                <span v-if="dataSource[virtualRow.index].type === 'folder'" style="opacity: 0.5; margin-left: 4px;">
                                    {{ divider }}* ({{ dataSource[virtualRow.index].childCount }})
                                </span>

                                <!-- Element length (non-string/json) -->
                                <span
                                    v-if="dataSource[virtualRow.index].type !== 'folder' && dataSource[virtualRow.index].keysInfo?.type !== 'string' && dataSource[virtualRow.index].keysInfo?.type !== 'json' && dataSource[virtualRow.index].keysInfo?.length"
                                    style="opacity: 0.5; margin-left: 4px;"
                                >({{ dataSource[virtualRow.index].keysInfo.length }})</span>
                            </label>
                        </template>
                    </v-tooltip>

                    <!-- TTL badge (outside label to avoid tooltip conflict) -->
                    <v-tooltip
                        v-if="dataSource[virtualRow.index].type !== 'folder' && getRemainingTtl(dataSource[virtualRow.index]) > 0"
                        :text="'TTL: ' + formatTtl(dataSource[virtualRow.index])"
                        location="right" :open-delay="300" :offset="36"
                    >
                        <template #activator="{ props: tp }">
                            <span
                                v-bind="tp"
                                class="p3xr-tree-ttl"
                                :class="{ 'p3xr-tree-ttl-pulse': isTtlPulsing(dataSource[virtualRow.index]) }"
                                :style="{ color: getTtlColor(dataSource[virtualRow.index]) }"
                            >
                                <v-icon size="16">mdi-clock-outline</v-icon>
                            </span>
                        </template>
                    </v-tooltip>
                </span>

                <!-- Action buttons (delete, add) — shown on hover, hidden in readonly -->
                <span v-if="!isReadonly" class="p3xr-tree-actions">
                    <!-- Delete tree (folder) -->
                    <v-tooltip v-if="dataSource[virtualRow.index].type === 'folder'"
                        :text="strings?.confirm?.deleteAllKeys ? (typeof strings.confirm.deleteAllKeys === 'function' ? strings.confirm.deleteAllKeys({ key: dataSource[virtualRow.index].key }) : strings.confirm.deleteAllKeys) : 'Delete tree'"
                        location="right" :open-delay="300" :offset="36">
                        <template #activator="{ props: tp }">
                            <v-icon v-bind="tp" class="p3xr-tree-action-delete"
                                @click="deleteTree($event, dataSource[virtualRow.index])">mdi-delete</v-icon>
                        </template>
                    </v-tooltip>
                    <!-- Delete key (element) -->
                    <v-tooltip v-else
                        :text="strings?.intention?.delete || 'Delete'"
                        location="right" :open-delay="300" :offset="36">
                        <template #activator="{ props: tp }">
                            <v-icon v-bind="tp" class="p3xr-tree-action-delete"
                                @click="deleteKey($event, dataSource[virtualRow.index].key)">mdi-delete</v-icon>
                        </template>
                    </v-tooltip>
                    <!-- Add key -->
                    <v-tooltip :text="strings?.intention?.addKey || 'Add key'"
                        location="right" :open-delay="300" :offset="36">
                        <template #activator="{ props: tp }">
                            <v-icon v-bind="tp" class="p3xr-tree-action-add"
                                :style="{ color: warnColor }"
                                @click="addKey($event, dataSource[virtualRow.index])">mdi-plus</v-icon>
                        </template>
                    </v-tooltip>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.p3xr-tree-viewport {
    height: 100%;
    width: 100%;
    overflow: auto;
}

.p3xr-tree-row {
    display: flex;
    align-items: center;
    height: 28px;
    line-height: 28px;
    white-space: nowrap;
    cursor: default;
    box-sizing: border-box;
}

.p3xr-tree-row:hover .p3xr-tree-actions {
    visibility: visible;
}

/* Highlight node label on hover (matches Angular) */
[data-p3xr-tree-key]:hover .p3xr-database-tree-node-label {
    background-color: rgba(var(--v-theme-on-surface), 0.1);
}

/* Folder icon — Font Awesome 5 via ::before */
.p3xr-tree-branch {
    display: inline-block;
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    width: 28px;
    text-align: center;
    margin-right: 4px;
    cursor: pointer;
    flex-shrink: 0;
}
.p3xr-tree-branch::before {
    content: '\f07b';
}
.p3xr-tree-branch-expanded::before {
    content: '\f07c';
}

/* Node label */
.p3xr-tree-node-label {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    height: 28px;
    white-space: nowrap;
}

/* Type icon — same 28px width as folder icon for text alignment */
.p3xr-tree-type-icon {
    display: inline-block;
    width: 28px;
    text-align: center;
    margin-right: 4px;
    font-size: 14px;
}

/* Child count / length */
.p3xr-tree-node-count {
    opacity: 0.5;
}

/* TTL badge — override global v-icon 24px for 16px clock */
.p3xr-tree-ttl {
    display: inline-flex;
    align-items: center;
    height: 28px;
    margin-left: 4px;
    cursor: default;
}
.p3xr-tree-ttl .v-icon {
    font-size: 16px !important;
    width: 16px !important;
    height: 16px !important;
}

.p3xr-tree-ttl-pulse {
    animation: p3xr-ttl-pulse 1s infinite;
}

@keyframes p3xr-ttl-pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

/* Action buttons — hidden until row hover */
.p3xr-tree-actions {
    display: inline-flex;
    align-items: center;
    position: relative;
    top: -1px;
    visibility: hidden;
}

.p3xr-tree-actions .v-icon {
    font-size: 18px !important;
    height: 18px !important;
    width: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    line-height: 18px !important;
    cursor: pointer;
    vertical-align: middle;
}

.p3xr-tree-action-delete {
    color: rgb(var(--v-theme-error)) !important;
}
</style>
