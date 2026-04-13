<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import HexMonitor from './HexMonitor.vue'
import KeyPagerInline from './KeyPagerInline.vue'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog.vue'
import JsonViewDialog from '../../../dialogs/JsonViewDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useCommonStore } from '../../../stores/common'
import { request } from '../../../stores/socket.service'
import { type Paging, createPaging, rePaging, formatValue, truncateDisplay, isTruncated, copyToClipboard, str } from './key-type-base'

interface StreamEntry { id: string; fields: Array<[string, string]>; data: any; hasDuplicateFields: boolean }

const intlLocaleMap: Record<string, string> = { 'zn': 'zh-CN', 'no': 'nb', 'fil': 'tl' }

function hasDupFields(fields: Array<[string, string]>): boolean {
    const seen = new Set<string>()
    for (const [k] of fields) { if (seen.has(k)) return true; seen.add(k) }
    return false
}

function buildEntries(value: any[]): StreamEntry[] {
    if (!value) return []
    return value.map((entry: any) => {
        const id = entry[0]
        const raw = entry[1]
        const fields: Array<[string, string]> = []
        for (let i = 0; i < raw.length; i += 2) fields.push([raw[i], raw[i + 1]])
        const hasDup = hasDupFields(fields)
        const data = hasDup ? fields.map(([f, v]) => ({ field: f, value: v })) : Object.fromEntries(fields)
        return { id, fields, data, hasDuplicateFields: hasDup }
    })
}

function entryToExport(entry: StreamEntry): any {
    if (entry.hasDuplicateFields) return { id: entry.id, fields: entry.data }
    return { id: entry.id, ...entry.data }
}

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()
const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const isReadonly = computed(() => useRedisStateStore().connection?.readonly === true)
const common = useCommonStore()

const allEntries = ref<StreamEntry[]>([])
const paging = ref<Paging>(createPaging(0))
const pagedEntries = ref<StreamEntry[]>([])
const editDialogOpen = ref(false)
const editDialogData = ref<any>(null)
const jsonViewOpen = ref(false)
const jsonViewValue = ref('')

function updatePaged(p: Paging) { paging.value = p; pagedEntries.value = allEntries.value.slice(p.startIndex, p.endIndex) }
watch(() => props.value, () => {
    const entries = buildEntries(props.value)
    allEntries.value = entries
    updatePaged(rePaging(paging.value, entries.length))
}, { immediate: true })

function showTimestamp(id: string): string {
    try {
        const ms = parseInt(id.slice(0, id.indexOf('-')))
        const lang = i18n.currentLang
        const locale = intlLocaleMap[lang] || lang
        return new Date(ms).toLocaleString(locale, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    } catch { return id }
}

function addStream() { editDialogData.value = { type: 'append', model: { type: 'stream', key: props.keyName } }; editDialogOpen.value = true }
function handleEditClose(r?: any) { editDialogOpen.value = false; editDialogData.value = null; if (r) emit('refresh') }

async function deleteEntry(id: string) {
    try { await common.confirm({ message: str(strings.value?.confirm?.deleteStreamTimestamp) }); await request({ action: 'key/stream-delete-timestamp', payload: { key: props.keyName, streamTimestamp: id } }); common.toast(str(strings.value?.status?.deletedStreamTimestamp)); emit('refresh') }
    catch (e) { if (e !== undefined) common.generalHandleError(e) }
}

function copyEntry(entry: StreamEntry) { copyToClipboard(JSON.stringify(entryToExport(entry), null, 2)) }
function downloadEntry(entry: StreamEntry) {
    const lines = [entry.id]; for (const [f, v] of entry.fields) { lines.push(f); lines.push(v) }
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `${props.keyName}-${entry.id}.txt`; a.click(); URL.revokeObjectURL(url)
}
function viewEntryJson(entry: StreamEntry) { jsonViewValue.value = JSON.stringify(entryToExport(entry)); jsonViewOpen.value = true }
</script>

<template>
    <div>
        <KeyPagerInline :paging="paging" @page-changed="updatePaged" />
        <div class="p3xr-key-table-header">
            <span style="flex:1;">{{ str(strings?.page?.key?.stream?.table?.timestamp) }}</span>
            <span style="text-align:right;"><v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.add)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" style="cursor:pointer;color:inherit;" @click="addStream">mdi-plus</v-icon></template></v-tooltip></span>
        </div>
        <div v-for="(entry, i) in pagedEntries" :key="entry.id" class="p3xr-stream-entry" :class="{ 'p3xr-key-table-odd': i % 2 === 0 }">
            <div class="p3xr-stream-entry-header">
                <div style="display:flex;align-items:center;gap:12px;">
                    <v-tooltip :text="showTimestamp(entry.id)" location="top">
                        <template #activator="{ props: tp }">
                            <strong v-bind="tp" style="cursor:default;">{{ entry.id }}</strong>
                        </template>
                    </v-tooltip>
                    <span style="opacity:0.5;font-size:12px;">{{ showTimestamp(entry.id) }}</span>
                </div>
                <span style="white-space:nowrap;">
                    <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.delete)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-error));" @click="deleteEntry(entry.id)">mdi-delete</v-icon></template></v-tooltip>
                    <v-tooltip :text="str(strings?.intention?.jsonViewShow)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="viewEntryJson(entry)">mdi-file-tree</v-icon></template></v-tooltip>
                    <v-tooltip :text="str(strings?.intention?.copy)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="copyEntry(entry)">mdi-content-copy</v-icon></template></v-tooltip>
                    <v-tooltip :text="str(strings?.intention?.downloadBuffer)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="downloadEntry(entry)">mdi-download</v-icon></template></v-tooltip>
                </span>
            </div>
            <div class="p3xr-stream-entry-fields">
                <div v-for="([field, val], fi) in entry.fields" :key="`${field}-${fi}`" class="p3xr-stream-field-row">
                    <span style="min-width:120px;opacity:0.7;">{{ field }}</span>
                    <span class="p3xr-stream-field-value">
                        <HexMonitor v-if="valueFormat === 'hex'" :value="truncateDisplay(val)" />
                        <template v-else>{{ truncateDisplay(formatValue(val, valueFormat)) }}<span v-if="isTruncated(val)" style="opacity:0.5;">...</span></template>
                    </span>
                </div>
            </div>
        </div>
        <KeyNewOrSetDialog :open="editDialogOpen" :data="editDialogData" @close="handleEditClose" />
        <JsonViewDialog :open="jsonViewOpen" :value="jsonViewValue" @close="jsonViewOpen = false" />
    </div>
</template>

<style src="./key-table.css"></style>
<style scoped>
.p3xr-stream-entry { border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.05); }
.p3xr-stream-entry:hover { background-color: rgba(var(--v-theme-on-surface), 0.1) !important; }
.p3xr-stream-entry-header { display: flex; align-items: center; justify-content: space-between; padding: 6px 16px; font-size: 13px; }
.p3xr-stream-entry-fields { padding: 0 16px 8px; overflow: auto; max-height: 300px; }
.p3xr-stream-field-row { display: flex; gap: 8px; padding: 2px 0; }
.p3xr-stream-field-value { flex: 1; max-height: 200px; overflow: auto; white-space: pre-wrap; word-break: break-all; font-family: 'Roboto Mono', monospace; }
</style>
