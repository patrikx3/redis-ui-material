<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import TtlDialog from '../../dialogs/TtlDialog.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useSettingsStore } from '../../stores/settings'
import { useCommonStore } from '../../stores/common'
import { useThemeStore } from '../../stores/theme'
import { useMainCommandStore, onCommandEvent } from '../../stores/main-command'
import { request } from '../../stores/socket.service'
import { navigateTo } from '../../stores/navigation.store'
import { decodeValue, str, calculateSize } from './key/key-type-base'
import humanizeDuration from 'humanize-duration'

// Lazy-load key type renderers
const KeyString = defineAsyncComponent(() => import('./key/KeyString.vue'))
const KeyHash = defineAsyncComponent(() => import('./key/KeyHash.vue'))
const KeyList = defineAsyncComponent(() => import('./key/KeyList.vue'))
const KeySet = defineAsyncComponent(() => import('./key/KeySet.vue'))
const KeyZset = defineAsyncComponent(() => import('./key/KeyZset.vue'))
const KeyJson = defineAsyncComponent(() => import('./key/KeyJson.vue'))
const KeyStream = defineAsyncComponent(() => import('./key/KeyStream.vue'))
const KeyTimeseries = defineAsyncComponent(() => import('./key/KeyTimeseries.vue'))
const KeyProbabilistic = defineAsyncComponent(() => import('./key/KeyProbabilistic.vue'))
const KeyVectorset = defineAsyncComponent(() => import('./key/KeyVectorset.vue'))

const route = useRoute()
const { width: displayWidth } = useDisplay()
const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const cmd = useMainCommandStore()
const { themeKey } = storeToRefs(useThemeStore())

const strings = computed(() => i18n.strings)
// isGtSm — (min-width: 960px) per guidelines-responsive-buttons.md
const isGtSm = computed(() => displayWidth.value >= 960)
const isReadonly = computed(() => state.connection?.readonly === true)
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))

// Key state
const loading = ref(true)
const keyName = ref('')
const response = ref<any>(null)
const keyValue = ref<any>(null)
const keyValueBuffer = ref<any>(null)
const keyType = ref('')
const ttl = ref(-1)
const valueFormat = ref<'raw' | 'json' | 'hex' | 'base64'>('raw')
const keySize = ref(0)
const ttlDialogOpen = ref(false)

let ttlInterval: any = null
let wasExpiring = false
const unsubs: Array<() => void> = []

// --- Key loading ---
async function loadKey(key: string) {
    if (!key) {
        loading.value = false
        return
    }
    loading.value = true
    try {
        const resp = await request({ action: 'key/get', payload: { key } })

        if (resp.ttl === -2) {
            common.toast(str(strings.value?.status?.keyIsNotExisting, { key }))
            navigateTo('database.statistics')
            return
        }

        response.value = resp
        keyType.value = resp.type || ''
        ttl.value = resp.ttl ?? -1

        const decoded = decodeValue(resp.value, resp.valueBuffer, resp.type)
        keyValue.value = decoded.value
        keyValueBuffer.value = decoded.valueBuffer
        keySize.value = calculateSize(resp)

        wasExpiring = ttl.value > -1
        startTtlCountdown()
        injectHighlightStyle(key)
    } catch (e) {
        common.generalHandleError(e)
    } finally {
        loading.value = false
    }
}

// --- TTL countdown (decrements every second, template is reactive) ---
function startTtlCountdown() {
    if (ttlInterval) clearInterval(ttlInterval)
    if (ttl.value <= -1) return
    ttlInterval = setInterval(() => {
        ttl.value--
        if (ttl.value < -1 || (wasExpiring && ttl.value < 1)) {
            clearInterval(ttlInterval)
            ttlInterval = null
            common.toast(str(strings.value?.status?.keyIsNotExisting, { key: keyName.value }))
            state.redisChanged = true
            navigateTo('database.statistics')
        }
    }, 1000)
}

// Humanized TTL — recomputes every second as ttl ref changes
const humanizedTtl = computed(() => {
    if (ttl.value <= -1) return ''
    const hdOpts = settings.getHumanizeDurationOptions()
    return humanizeDuration(ttl.value * 1000, { ...hdOpts, delimiter: ' ' })
})

// --- Tree highlight ---
function injectHighlightStyle(key: string) {
    const id = 'p3xr-theme-styles-tree-key'
    let styleEl = document.getElementById(id) as HTMLStyleElement
    if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = id
        document.head.appendChild(styleEl)
    }
    const escapedKey = key.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    const bg = isDark.value ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
    styleEl.textContent = `[data-p3xr-tree-key="${escapedKey}"] .p3xr-database-tree-node-label { background-color: ${bg}; border-radius: 3px; padding: 0 4px; }`
}

function removeHighlightStyle() {
    document.getElementById('p3xr-theme-styles-tree-key')?.remove()
}

// --- Actions ---
async function deleteKey() {
    try {
        await common.confirm({ message: str(strings.value?.confirm?.deleteKey) })
        await request({ action: 'key/delete', payload: { key: keyName.value } })
        common.toast(str(strings.value?.status?.deletedKey, { key: keyName.value }))
        state.redisChanged = true
        navigateTo('database.statistics')
        await cmd.refresh({ force: true })
    } catch (e) {
        if (e !== undefined) common.generalHandleError(e)
    }
}

async function renameKey() {
    try {
        const newKey = await common.prompt({
            title: str(strings.value?.confirm?.rename?.title),
            placeholder: str(strings.value?.confirm?.rename?.placeholder),
            initialValue: keyName.value,
            okLabel: str(strings.value?.intention?.rename),
            cancelLabel: str(strings.value?.intention?.cancel),
        })
        await request({ action: 'key/rename', payload: { key: keyName.value, keyNew: newKey } })
        common.toast(str(strings.value?.status?.renamedKey))
        state.redisChanged = true
        await cmd.refresh({ force: true })
        navigateTo('database.key', { key: newKey })
    } catch (e) {
        if (e !== undefined) common.generalHandleError(e)
    }
}

// TTL — opens TtlDialog (matching React TtlDialog pattern)
function setTtl() {
    ttlDialogOpen.value = true
}

async function handleTtlClose(result?: { model: { ttl: number } }) {
    ttlDialogOpen.value = false
    if (!result) return
    try {
        const ttlVal = result.model.ttl
        const ttlStr = String(ttlVal).trim()
        if (ttlStr === '' || ttlVal == null) {
            // Empty = persist (remove TTL)
            await request({ action: 'key/persist', payload: { key: keyName.value } })
            await cmd.refresh({ force: true })
            await loadKey(keyName.value)
            common.toast(str(strings.value?.status?.persisted))
        } else if (!/^-?\d+$/.test(ttlStr)) {
            common.toast(str(strings.value?.status?.notInteger))
        } else {
            // Set expiry
            await request({ action: 'key/expire', payload: { key: keyName.value, ttl: parseInt(ttlStr) } })
            await cmd.refresh({ force: true })
            await loadKey(keyName.value)
            common.toast(str(strings.value?.status?.ttlChanged))
        }
    } catch (e) {
        common.generalHandleError(e)
    }
}

function addKey(e: Event) { cmd.addKey({ event: e, node: { key: keyName.value } }) }

async function refresh() { await loadKey(keyName.value) }

// --- Action button definitions (data-driven, replaces P3xrButton) ---
const actionButtons = computed(() => {
    const list: { icon: string; label: string; color: string; click: (e?: Event) => void }[] = []
    if (!isReadonly.value) {
        list.push({ icon: 'mdi-plus', label: str(strings.value?.intention?.addKey), color: 'secondary', click: (e) => addKey(e!) })
        list.push({ icon: 'mdi-delete', label: str(strings.value?.intention?.delete), color: 'error', click: () => deleteKey() })
        list.push({ icon: 'mdi-timer', label: str(strings.value?.intention?.ttl), color: 'primary', click: () => setTtl() })
        list.push({ icon: 'mdi-fingerprint', label: str(strings.value?.intention?.rename), color: 'primary', click: () => renameKey() })
    }
    list.push({ icon: 'mdi-refresh', label: str(strings.value?.intention?.reloadKey), color: 'secondary', click: () => refresh() })
    return list
})

// --- Type component map ---
const typeComponentMap: Record<string, any> = {
    string: KeyString, hash: KeyHash, list: KeyList, set: KeySet,
    zset: KeyZset, 'ReJSON-RL': KeyJson, json: KeyJson, stream: KeyStream,
    'TSDB-TYPE': KeyTimeseries, timeseries: KeyTimeseries,
    bloom: KeyProbabilistic, cuckoo: KeyProbabilistic, topk: KeyProbabilistic, cms: KeyProbabilistic, tdigest: KeyProbabilistic,
    vectorset: KeyVectorset,
}
const keyComponent = computed(() => typeComponentMap[keyType.value] || null)

const showFormatToggle = computed(() => {
    const t = keyType.value
    return t && !['ReJSON-RL', 'json', 'TSDB-TYPE', 'timeseries'].includes(t) &&
        !t.startsWith('MBbloom') && !t.startsWith('TopK') && !t.startsWith('CMSk') &&
        !t.startsWith('TDigest') && t !== 'vectorset'
})

// --- Lifecycle ---
onMounted(() => {
    const key = decodeURIComponent(route.params.key as string || '')
    keyName.value = key
    loadKey(key)
    unsubs.push(onCommandEvent('refresh-key', () => refresh()))
})

watch(() => route.params.key, (newKey) => {
    if (!newKey) return
    const key = decodeURIComponent(newKey as string)
    keyName.value = key
    loadKey(key)
})

watch(isDark, () => { if (keyName.value) injectHighlightStyle(keyName.value) })

onUnmounted(() => {
    if (ttlInterval) clearInterval(ttlInterval)
    removeHighlightStyle()
    unsubs.forEach(fn => fn())
})
</script>

<template>
    <!-- Loading — centered spinner -->
    <div v-if="loading" class="p3xr-key-loading">
        <v-progress-circular indeterminate :size="40" />
    </div>

    <div v-else-if="response">
        <!-- Action buttons — direct ActionBtn pattern per guidelines-responsive-buttons.md -->
        <div class="p3xr-key-actions">
            <template v-for="btn in actionButtons" :key="btn.icon">
                <!-- Wide (>=960px): contained button with icon + text -->
                <v-btn v-if="isGtSm" variant="flat" :color="btn.color" @click="btn.click($event)">
                    <v-icon size="small">{{ btn.icon }}</v-icon>
                    <span>{{ btn.label }}</span>
                </v-btn>
                <!-- Narrow (<960px): 40x40 square with tooltip (React ActionBtn narrow) -->
                <v-tooltip v-else :text="btn.label" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" :color="btn.color" @click="btn.click($event)"
                            style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;">
                            <v-icon size="small">{{ btn.icon }}</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
        </div>

        <!-- Key info rows — React: space-between, baseline, px:16 py:12, themed borders -->
        <div class="p3xr-key-info">
            <!-- Key name — always clickable -->
            <div class="p3xr-key-info-row p3xr-key-clickable" @click="renameKey()">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.key) }}:</strong>
                <span class="p3xr-key-value p3xr-key-ellipsis" :title="keyName">{{ keyName }}</span>
            </div>

            <!-- TTL — always clickable, seconds countdown + humanized duration -->
            <div class="p3xr-key-info-row p3xr-key-clickable" @click="setTtl()">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.ttl) }}:</strong>
                <span v-if="ttl === -1" class="p3xr-key-value">{{ str(strings?.page?.key?.label?.ttlNotExpire) }}</span>
                <div v-else class="p3xr-ttl-column">
                    <span>{{ ttl }}</span>
                    <span class="p3xr-ttl-humanized">{{ humanizedTtl }}</span>
                </div>
            </div>

            <!-- Type -->
            <div class="p3xr-key-info-row">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.type) }}:</strong>
                <span class="p3xr-key-value">{{ strings?.redisTypes?.[keyType] || keyType }}</span>
            </div>

            <!-- Encoding -->
            <div class="p3xr-key-info-row">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.encoding) }}:</strong>
                <span class="p3xr-key-value">{{ response.encoding }}</span>
            </div>

            <!-- Compression — colored badges -->
            <div v-if="response.compression" class="p3xr-key-info-row">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.compression) }}:</strong>
                <span class="p3xr-key-value p3xr-compression-badges">
                    <span class="p3xr-badge p3xr-badge-algo">{{ response.compression.algorithm?.toUpperCase() }}</span>
                    <span class="p3xr-badge" :class="response.compression.ratio >= 0 ? 'p3xr-badge-positive' : 'p3xr-badge-negative'">
                        {{ response.compression.ratio >= 0 ? '' : '-' }}{{ Math.abs(response.compression.ratio) }}%
                    </span>
                </span>
            </div>

            <!-- Length/Size — React format: (prettyBytes) raw bytes, N items -->
            <div class="p3xr-key-info-row">
                <strong class="p3xr-key-label">{{ str(strings?.page?.key?.label?.length) }}:</strong>
                <span class="p3xr-key-value">
                    <span v-if="keySize >= 1024" class="p3xr-size-pretty">({{ settings.prettyBytes(keySize) }})&nbsp;</span>{{ keySize }}&nbsp;{{ str(strings?.page?.key?.label?.lengthString) }}<span v-if="response.length">, {{ response.length }} {{ str(strings?.page?.key?.label?.lengthItem) }}</span>
                </span>
            </div>

            <!-- Format toggle — React ToggleButtonGroup style -->
            <div v-if="showFormatToggle" class="p3xr-key-info-row p3xr-format-row">
                <strong class="p3xr-key-label p3xr-format-label">{{ str(strings?.label?.format) }}:</strong>
                <v-btn-toggle v-model="valueFormat" mandatory class="p3xr-format-toggle" density="compact">
                    <v-btn value="raw">Raw</v-btn>
                    <v-btn value="json">JSON</v-btn>
                    <v-btn value="hex">Hex</v-btn>
                    <v-btn value="base64">Base64</v-btn>
                </v-btn-toggle>
            </div>
        </div>

        <!-- Type-specific renderer -->
        <component v-if="keyComponent" :is="keyComponent"
            :response="response" :value="keyValue" :value-buffer="keyValueBuffer"
            :key-name="keyName" :value-format="valueFormat" @refresh="refresh()" />
        <div v-else class="p3xr-key-unsupported">
            {{ strings?.page?.key?.probabilistic?.noItems }}
        </div>

        <!-- TTL Dialog (matching React TtlDialog) -->
        <TtlDialog :open="ttlDialogOpen" :ttl="ttl === -1 ? '' : ttl" @close="handleTtlClose" />
    </div>
</template>

<style scoped>
/* Loading — centered spinner */
.p3xr-key-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 32px;
}

/* Action buttons — right-aligned row (React: flex-end, gap:8, px:8, py:4) */
.p3xr-key-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    padding: 4px 8px;
}

/* Info container — top border separates from action buttons */
.p3xr-key-info {
    border-top: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

/* Info rows — React: px:16 py:12 space-between baseline, bottom border */
.p3xr-key-info-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12);
}

/* Clickable rows (Key, TTL) — always clickable */
.p3xr-key-clickable {
    cursor: pointer;
}
.p3xr-key-clickable:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.1);
}

/* Labels — bold with colon, nowrap, 16px right margin */
.p3xr-key-label {
    white-space: nowrap;
    margin-right: 16px;
}

/* Values — right-aligned, selectable text */
.p3xr-key-value {
    text-align: right;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: text;
}

/* Key name — word-break for long keys */
.p3xr-key-ellipsis {
    min-width: 0;
    word-break: break-all;
}

/* TTL column — seconds on top, humanized duration below */
.p3xr-ttl-column {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.p3xr-ttl-humanized {
    opacity: 0.5;
    font-size: 0.85em;
    font-weight: normal;
}

/* Compression badges — inline colored pills */
.p3xr-compression-badges {
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.p3xr-badge {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.5px;
}
.p3xr-badge-algo {
    background-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-on-secondary));
}
.p3xr-badge-positive {
    background-color: rgb(var(--v-theme-success));
    color: rgb(var(--v-theme-on-success));
}
.p3xr-badge-negative {
    background-color: rgb(var(--v-theme-error));
    color: rgb(var(--v-theme-on-error));
}

/* Size pretty bytes — dimmed prefix */
.p3xr-size-pretty {
    opacity: 0.5;
}

/* Format toggle row — center-aligned (not baseline) */
.p3xr-format-row {
    align-items: center;
}
.p3xr-format-label {
    flex: 1;
}

/* Format toggle — React ToggleButtonGroup style */
.p3xr-format-toggle {
    border-radius: 4px;
    overflow: hidden;
    border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
}
.p3xr-format-toggle :deep(.v-btn) {
    height: 32px !important;
    font-size: 13px !important;
    padding: 0 12px !important;
    border-radius: 0 !important;
    text-transform: none !important;
    letter-spacing: normal !important;
}
.p3xr-format-toggle :deep(.v-btn .v-btn__content) {
    text-transform: none !important;
    letter-spacing: normal !important;
    border: none !important;
    border-left: thin solid rgba(var(--v-border-color), var(--v-border-opacity)) !important;
}
.p3xr-format-toggle :deep(.v-btn--active) {
    background-color: rgba(var(--v-theme-primary), 0.25) !important;
    color: rgb(var(--v-theme-primary)) !important;
}
.p3xr-format-toggle :deep(.v-btn__overlay),
.p3xr-format-toggle :deep(.v-btn__underlay) {
    border-radius: 0 !important;
}
.p3xr-format-toggle :deep(.v-btn:first-child) {
    border-radius: 4px 0 0 4px !important;
    border-left: none;
}
.p3xr-format-toggle :deep(.v-btn:last-child) {
    border-radius: 0 4px 4px 0 !important;
}

/* Unsupported type fallback */
.p3xr-key-unsupported {
    padding: 16px;
    opacity: 0.7;
}
</style>
