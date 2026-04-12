<script setup lang="ts">
/**
 * KeyHash — exact port of React KeyHash.tsx
 * Table with hash key + value, paging, add/delete/edit/copy/json/download per row.
 * Field TTL support for Redis 8+ with countdown, color coding, pulse animation.
 */
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import HexMonitor from './HexMonitor.vue'
import KeyPagerInline from './KeyPagerInline.vue'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog.vue'
import JsonViewDialog from '../../../dialogs/JsonViewDialog.vue'
import TtlDialog from '../../../dialogs/TtlDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useSettingsStore } from '../../../stores/settings'
import { useCommonStore } from '../../../stores/common'
import { useThemeStore } from '../../../stores/theme'
import { request } from '../../../stores/socket.service'
import { type Paging, createPaging, rePaging, formatValue, truncateDisplay, isTruncated, copyToClipboard, downloadBuffer, str } from './key-type-base'
import { parseRedisVersion } from '../../../../core/redis-version'
import humanizeDuration from 'humanize-duration'

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const { themeKey } = storeToRefs(useThemeStore())

const strings = computed(() => i18n.strings)
const isReadonly = computed(() => state.connection?.readonly === true)
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))
const supportsFieldTtl = computed(() => parseRedisVersion(state.info?.server?.redis_version).isAtLeast(8, 0))

// Paging
const paging = ref<Paging>(createPaging(0))
const pagedItems = ref<Array<{ key: string; value: any }>>([])

// Dialogs
const editDialogOpen = ref(false)
const editDialogData = ref<any>(null)
const jsonViewOpen = ref(false)
const jsonViewValue = ref('')
const ttlDialogOpen = ref(false)
const ttlDialogField = ref('')
const ttlDialogValue = ref(-1)

// Field TTL tracking
const fieldTtls = ref<Record<string, number>>({})
let fieldTtlsFetchedAt = 0
let ttlTickInterval: any = null
const tick = ref(0)

function getKeys(): string[] {
    if (!props.value || typeof props.value !== 'object') return []
    return Object.keys(props.value)
}

function updatePagedItems(p: Paging) {
    paging.value = p
    const keys = getKeys()
    const items = keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: props.value[k] }))
    pagedItems.value = items
    loadFieldTtls(items)
}

watch(() => props.value, () => {
    const keys = getKeys()
    const p = rePaging(paging.value, keys.length)
    updatePagedItems(p)
}, { immediate: true })

// --- Field TTL ---
async function loadFieldTtls(items?: Array<{ key: string; value: any }>) {
    if (!props.value || !supportsFieldTtl.value) return
    const fields = (items || pagedItems.value).map(item => item.key)
    if (fields.length === 0) return
    try {
        const res = await request({ action: 'hash-field/ttls', payload: { key: props.keyName, fields } })
        fieldTtls.value = res.fieldTtls || {}
        fieldTtlsFetchedAt = Date.now()
        startTtlTick()
    } catch {
        fieldTtls.value = {}
    }
}

function startTtlTick() {
    if (ttlTickInterval) clearInterval(ttlTickInterval)
    if (!Object.values(fieldTtls.value).some(t => t > 0)) return
    ttlTickInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - fieldTtlsFetchedAt) / 1000)
        const anyExpired = Object.values(fieldTtls.value).some(t => t > 0 && t - elapsed <= 0)
        if (anyExpired) { clearInterval(ttlTickInterval); ttlTickInterval = null; emit('refresh'); return }
        tick.value++
    }, 1000)
}

onUnmounted(() => { if (ttlTickInterval) clearInterval(ttlTickInterval) })

// Inject pulse keyframes once
onMounted(() => {
    if (document.getElementById('p3xr-hash-ttl-pulse-css')) return
    const style = document.createElement('style')
    style.id = 'p3xr-hash-ttl-pulse-css'
    style.textContent = '@keyframes p3xr-hash-ttl-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }'
    document.head.appendChild(style)
})

function getRemaining(field: string): number {
    void tick.value
    const ttl = fieldTtls.value[field]
    if (!ttl || ttl <= 0) return -1
    const elapsed = Math.floor((Date.now() - fieldTtlsFetchedAt) / 1000)
    const r = ttl - elapsed
    return r > 0 ? r : -1
}

function getFieldTtlColor(field: string): string {
    const r = getRemaining(field)
    if (r <= 0) return ''
    if (r < 300) return '#f44336'
    if (r < 3600) return '#ff9800'
    return '#4caf50'
}

function isFieldTtlPulsing(field: string): boolean { return getRemaining(field) > 0 && getRemaining(field) < 30 }
function hasFieldTtl(field: string): boolean { return getRemaining(field) > 0 }

function formatFieldTtl(field: string): string {
    const remaining = getRemaining(field)
    if (remaining <= 0) return ''
    const hdOpts = settings.getHumanizeDurationOptions()
    return humanizeDuration(remaining * 1000, { ...hdOpts, largest: 2, round: true, delimiter: ' ' })
}

// --- Actions ---
function addHash() {
    editDialogData.value = { type: 'append', model: { type: 'hash', key: props.keyName } }
    editDialogOpen.value = true
}

function editValue(hashKey: string, val: any) {
    editDialogData.value = { type: 'edit', model: { type: 'hash', key: props.keyName, hashKey, value: val } }
    editDialogOpen.value = true
}

function handleEditClose(result?: any) {
    editDialogOpen.value = false
    editDialogData.value = null
    if (result) emit('refresh')
}

async function deleteHashKey(hashKey: string) {
    try {
        await common.confirm({ message: str(strings.value?.confirm?.deleteHashKey) })
        await request({ action: 'key/hash-delete-field', payload: { key: props.keyName, hashKey } })
        common.toast(str(strings.value?.status?.deletedHashKey))
        emit('refresh')
    } catch (e) {
        if (e !== undefined) common.generalHandleError(e)
    }
}

async function setFieldTtl(hashKey: string) {
    try {
        const res = await request({ action: 'hash-field/ttl-get', payload: { key: props.keyName, field: hashKey } })
        ttlDialogField.value = hashKey
        ttlDialogValue.value = res.ttl ?? -1
        ttlDialogOpen.value = true
    } catch (e) {
        common.generalHandleError(e)
    }
}

async function handleTtlClose(result?: { model: { ttl: number } }) {
    ttlDialogOpen.value = false
    if (!result) return
    try {
        await request({ action: 'hash-field/ttl', payload: { key: props.keyName, field: ttlDialogField.value, ttl: result.model.ttl } })
        common.toast(`${ttlDialogField.value}: TTL ${result.model.ttl === -1 ? 'removed' : result.model.ttl + 's'}`)
        loadFieldTtls()
    } catch (e) {
        common.generalHandleError(e)
    }
}

function showJson(val: any) {
    jsonViewValue.value = String(val ?? '')
    jsonViewOpen.value = true
}

function copyField(val: any) { copyToClipboard(String(val ?? '')) }
function downloadField(hashKey: string) { downloadBuffer(props.valueBuffer?.[hashKey], props.keyName, `${props.keyName}-${hashKey}`) }
</script>

<template>
    <div>
        <KeyPagerInline :paging="paging" @page-changed="updatePagedItems" />

        <!-- Table header — primary color bg -->
        <div class="p3xr-hash-header">
            <span style="flex: 20%;">{{ str(strings?.page?.key?.hash?.table?.hashkey) }}</span>
            <span style="flex: 60%;">{{ str(strings?.page?.key?.hash?.table?.value) }}</span>
            <span style="flex: 20%; text-align: right; display: flex; justify-content: flex-end; align-items: center;">
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.add)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" style="cursor: pointer; color: inherit;" @click="addHash">mdi-plus</v-icon>
                    </template>
                </v-tooltip>
            </span>
        </div>

        <!-- Rows -->
        <div v-for="(item, i) in pagedItems" :key="item.key" class="p3xr-hash-row"
            :class="{ 'p3xr-hash-odd': i % 2 === 0 }">
            <!-- Hash key — clickable to edit -->
            <span class="p3xr-hash-field" @click="!isReadonly && editValue(item.key, item.value)">{{ item.key }}</span>

            <!-- Value — clickable to edit, hex support -->
            <span class="p3xr-hash-value" @click="!isReadonly && editValue(item.key, item.value)">
                <HexMonitor v-if="valueFormat === 'hex'" :value="truncateDisplay(item.value)" />
                <template v-else>{{ truncateDisplay(formatValue(item.value, valueFormat)) }}<span v-if="isTruncated(item.value)" style="opacity: 0.5;">...</span></template>
            </span>

            <!-- Action icons -->
            <span class="p3xr-hash-actions">
                <!-- Field TTL (Redis 8+) -->
                <v-tooltip v-if="!isReadonly && supportsFieldTtl"
                    :text="hasFieldTtl(item.key) ? `TTL: ${formatFieldTtl(item.key)}` : str(strings?.intention?.ttl)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24"
                            :style="{
                                cursor: 'pointer', margin: '0 2px',
                                color: getFieldTtlColor(item.key) || undefined,
                                opacity: hasFieldTtl(item.key) ? 0.7 : 0.3,
                                animation: isFieldTtlPulsing(item.key) ? 'p3xr-hash-ttl-pulse 1s infinite' : 'none',
                            }"
                            @click="setFieldTtl(item.key)">mdi-clock-outline</v-icon>
                    </template>
                </v-tooltip>

                <!-- Delete -->
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.delete)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-hash-icon" style="color: rgb(var(--v-theme-error));"
                            @click="deleteHashKey(item.key)">mdi-delete</v-icon>
                    </template>
                </v-tooltip>

                <!-- JSON View -->
                <v-tooltip :text="str(strings?.intention?.jsonViewShow)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-hash-icon" style="color: rgb(var(--v-theme-secondary));"
                            @click="showJson(item.value)">mdi-file-tree</v-icon>
                    </template>
                </v-tooltip>

                <!-- Copy -->
                <v-tooltip :text="str(strings?.intention?.copy)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-hash-icon" style="color: rgb(var(--v-theme-secondary));"
                            @click="copyField(item.value)">mdi-content-copy</v-icon>
                    </template>
                </v-tooltip>

                <!-- Download -->
                <v-tooltip :text="str(strings?.intention?.downloadBuffer)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-hash-icon" style="color: rgb(var(--v-theme-secondary));"
                            @click="downloadField(item.key)">mdi-download</v-icon>
                    </template>
                </v-tooltip>

                <!-- Edit -->
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.edit)" location="top">
                    <template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-hash-icon" style="color: rgb(var(--v-theme-primary));"
                            @click="editValue(item.key, item.value)">mdi-pencil</v-icon>
                    </template>
                </v-tooltip>
            </span>
        </div>

        <!-- Dialogs -->
        <KeyNewOrSetDialog :open="editDialogOpen" :data="editDialogData" @close="handleEditClose" />
        <JsonViewDialog :open="jsonViewOpen" :value="jsonViewValue" @close="jsonViewOpen = false" />
        <TtlDialog :open="ttlDialogOpen" :ttl="ttlDialogValue" @close="handleTtlClose" />
    </div>
</template>

<style scoped>
/* Header — primary color background, matching React */
.p3xr-hash-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-weight: bold;
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
    border-bottom: 2px solid rgba(var(--v-theme-on-surface), 0.05);
}
/* Rows — alternating bg, hover */
.p3xr-hash-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 6px 16px;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.05);
}
.p3xr-hash-row:hover {
    background-color: rgba(var(--v-theme-on-surface), 0.1) !important;
}
.p3xr-hash-odd {
    background-color: rgba(var(--v-theme-on-surface), 0.04);
}
/* Columns: 20% | 60% | 20% */
.p3xr-hash-field {
    flex: 20%;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: text;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
}
.p3xr-hash-value {
    flex: 60%;
    cursor: pointer;
    overflow: auto;
    max-height: 200px;
    white-space: pre-wrap;
    word-break: break-all;
    font-family: 'Roboto Mono', monospace;
    user-select: text;
}
.p3xr-hash-actions {
    flex: 20%;
    text-align: right;
    white-space: nowrap;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.p3xr-hash-icon {
    cursor: pointer;
    margin: 0 2px;
    opacity: 0.7;
}
.p3xr-hash-icon:hover {
    opacity: 1;
}
</style>
