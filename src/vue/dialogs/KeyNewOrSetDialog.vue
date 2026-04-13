<script setup lang="ts">
/**
 * KeyNewOrSetDialog — exact port of React KeyNewOrSetDialog.tsx
 * Multi-type form for creating or editing Redis keys.
 */
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useRedisStateStore } from '../stores/redis-state'
import { useSettingsStore } from '../stores/settings'
import { useCommonStore } from '../stores/common'
import { useOverlayStore } from '../stores/overlay'
import { request } from '../stores/socket.service'
import { str } from '../pages/database/key/key-type-base'
import P3xrDialog from '../components/P3xrDialog.vue'
import JsonViewDialog from './JsonViewDialog.vue'
import JsonEditorDialog from './JsonEditorDialog.vue'
import DiffDialog from './DiffDialog.vue'

export interface KeyNewOrSetData {
    type: 'add' | 'edit' | 'append'
    node?: any
    model?: any
}

const props = defineProps<{
    open: boolean
    data: KeyNewOrSetData | null
}>()

const emit = defineEmits<{
    close: [result?: any]
}>()

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width } = useDisplay()

const strings = computed(() => i18n.strings)
const isWide = computed(() => width.value >= 720)
const isReadonly = computed(() => state.connection?.readonly === true)

const validateJson = ref(false)
const jsonViewOpen = ref(false)
const jsonEditorOpen = ref(false)
const fileInputRef = ref<HTMLInputElement>()

// Diff dialog
const diffOpen = ref(false)
const diffOldValue = ref('')
const diffNewValue = ref('')
const diffFieldName = ref('')
let diffResolve: ((v: boolean) => void) | null = null

// Model
const model = ref<any>({})

const isProbabilistic = computed(() => ['bloom', 'cuckoo', 'topk', 'cms', 'tdigest'].includes(model.value.type))
const isVectorset = computed(() => model.value.type === 'vectorset')

const types = computed(() => {
    const base = ['string', 'list', 'hash', 'set', 'zset', 'stream']
    if (state.hasTimeSeries) base.push('timeseries')
    if (state.hasReJSON) base.push('json')
    if (state.hasBloom) base.push('bloom', 'cuckoo', 'topk', 'cms', 'tdigest')
    base.push('vectorset')
    return base
})

watch(() => props.open, (v) => {
    if (!v || !props.data) return
    const divider = settings.redisTreeDivider
    const m: any = {
        type: 'string',
        key: props.data.node?.key ? props.data.node.key + divider : '',
        value: '',
        score: '',
        streamTimestamp: '*',
        tsTimestamp: '*',
        tsRetention: 0,
        tsDuplicatePolicy: 'LAST',
        tsLabels: '',
        tsBulkMode: false,
        tsSpread: 60000,
        tsFormula: '',
        tsFormulaPoints: 25,
        tsFormulaAmplitude: 100,
        tsFormulaOffset: 0,
        tsEditAll: false,
        hashKey: '',
        index: undefined,
        bloomErrorRate: 0.01,
        bloomCapacity: 100,
        cuckooCapacity: 1024,
        topkK: 10,
        topkWidth: 2000,
        topkDepth: 7,
        topkDecay: 0.9,
        cmsWidth: 2000,
        cmsDepth: 7,
        tdigestCompression: 100,
        vectorElement: '',
        vectorValues: '',
    }
    if (props.data.model) Object.assign(m, props.data.model)
    model.value = m
    validateJson.value = false
})

const isAdd = computed(() => props.data?.type === 'add')

const title = computed(() => {
    if (props.data?.type === 'edit') return str(strings.value?.form?.key?.label?.formName?.edit)
    if (props.data?.type === 'append') return str(strings.value?.form?.key?.label?.formName?.append)
    return str(strings.value?.form?.key?.label?.formName?.add)
})

function set(field: string, value: any) {
    model.value = { ...model.value, [field]: value }
}

// --- Actions ---
function copy() {
    let value = model.value.value
    if (model.value.type === 'timeseries') {
        value = `TS.ADD ${model.value.key} ${model.value.tsTimestamp} ${model.value.value}`
    }
    navigator.clipboard.writeText(String(value ?? '')).catch(() => {})
    common.toast(str(strings.value?.status?.dataCopied))
}

function formatJson() {
    try {
        set('value', JSON.stringify(JSON.parse(model.value.value), null, settings.jsonFormat || 2))
    } catch {
        common.toast(str(strings.value?.label?.jsonViewNotParsable))
    }
}

function onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    const file = input.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (e: any) => {
        try {
            await common.confirm({ message: str(strings.value?.confirm?.uploadBuffer) })
            set('value', e.target.result)
            common.toast(str(strings.value?.confirm?.uploadBufferDone))
        } catch {}
    }
    reader.readAsArrayBuffer(file)
    input.value = ''
}

function generateFormula() {
    const points = Math.min(Math.max(parseInt(String(model.value.tsFormulaPoints)) || 25, 1), 10000)
    const amplitude = parseFloat(String(model.value.tsFormulaAmplitude)) || 100
    const offset = parseFloat(String(model.value.tsFormulaOffset)) || 0
    const formula = model.value.tsFormula
    const lines: string[] = []
    for (let i = 0; i < points; i++) {
        const x = i / points
        let v: number
        switch (formula) {
            case 'sin': v = Math.sin(x * Math.PI * 2) * amplitude + offset; break
            case 'cos': v = Math.cos(x * Math.PI * 2) * amplitude + offset; break
            case 'linear': v = x * amplitude + offset; break
            case 'random': v = Math.random() * amplitude + offset; break
            case 'sawtooth': v = (x % 0.25) * 4 * amplitude + offset; break
            default: v = offset
        }
        lines.push(`* ${parseFloat(v.toFixed(4))}`)
    }
    set('value', lines.join('\n'))
}

function handleJsonEditorClose(result?: { obj: string } | null) {
    jsonEditorOpen.value = false
    if (result?.obj) set('value', result.obj)
}

async function submit() {
    if (!model.value.key?.trim()) {
        common.toast(str(strings.value?.form?.key?.error?.key))
        return
    }
    if (validateJson.value) {
        try { JSON.parse(model.value.value) }
        catch { common.toast(str(strings.value?.label?.jsonViewNotParsable)); return }
    }
    // Diff for edits
    if (props.data?.model?.value !== undefined && props.data.model.value !== model.value.value) {
        if (settings.showDiffBeforeSave) {
            diffOldValue.value = String(props.data.model.value)
            diffNewValue.value = String(model.value.value)
            diffFieldName.value = model.value.hashKey || ''
            diffOpen.value = true
            const confirmed = await new Promise<boolean>(resolve => { diffResolve = resolve })
            if (!confirmed) return
        }
    }
    try {
        overlay.show({ message: str(strings.value?.label?.saving) })
        const response = await request({
            action: 'key/new-or-set',
            payload: {
                type: props.data?.type,
                originalValue: props.data?.model?.value,
                originalHashKey: props.data?.model?.hashKey,
                model: structuredClone(model.value),
            },
        })
        common.toast(str(strings.value?.status?.set))
        emit('close', response)
    } catch (e) {
        common.generalHandleError(e)
    } finally {
        overlay.hide()
    }
}

function cancel() {
    emit('close')
}
</script>

<template>
    <P3xrDialog v-if="open && data" :open="true" :title="title" @close="cancel">
        <!-- Key -->
        <v-text-field v-model="model.key" :label="str(strings?.form?.key?.field?.key)" required :disabled="!isAdd"
            variant="outlined" density="comfortable" hide-details class="mb-3" />

        <!-- Type -->
        <v-select v-model="model.type" :label="str(strings?.form?.key?.field?.type)" :items="types" :disabled="!isAdd"
            variant="outlined" density="comfortable" hide-details class="mb-3">
            <template #item="{ item, props: itemProps }">
                <v-list-item v-bind="itemProps" :title="strings?.redisTypes?.[item.value] || item.value" />
            </template>
            <template #selection="{ item }">
                {{ strings?.redisTypes?.[item.value] || item.value }}
            </template>
        </v-select>

        <!-- Type-specific fields -->
        <v-text-field v-if="model.type === 'list'" v-model="model.index" :label="str(strings?.form?.key?.field?.index)"
            type="number" variant="outlined" density="comfortable"
            :hint="str(strings?.label?.redisListIndexInfo)" persistent-hint class="mb-3" />

        <v-text-field v-if="model.type === 'hash'" v-model="model.hashKey" :label="str(strings?.form?.key?.field?.hashKey)"
            required variant="outlined" density="comfortable" hide-details class="mb-3" />

        <v-text-field v-if="model.type === 'zset'" v-model="model.score" :label="str(strings?.form?.key?.field?.score)"
            type="number" required variant="outlined" density="comfortable" hide-details class="mb-3" />

        <template v-if="model.type === 'stream'">
            <v-text-field v-model="model.streamTimestamp" :label="str(strings?.form?.key?.field?.streamTimestamp)"
                required variant="outlined" density="comfortable"
                :hint="str(strings?.label?.streamTimestampId)" persistent-hint class="mb-3" />
        </template>

        <!-- Timeseries create fields -->
        <template v-if="model.type === 'timeseries' && isAdd">
            <v-text-field v-model.number="model.tsRetention" :label="`${str(strings?.page?.key?.timeseries?.retention)} (ms)`"
                type="number" variant="outlined" density="comfortable"
                :hint="str(strings?.page?.key?.timeseries?.retentionHint)" persistent-hint class="mb-3" />
            <v-select v-model="model.tsDuplicatePolicy" :label="str(strings?.page?.key?.timeseries?.duplicatePolicy)"
                :items="['LAST', 'FIRST', 'MIN', 'MAX', 'SUM', 'BLOCK']"
                variant="outlined" density="comfortable" hide-details class="mb-3" />
        </template>

        <!-- Timeseries common fields -->
        <template v-if="model.type === 'timeseries'">
            <v-text-field v-model="model.tsLabels" :label="str(strings?.page?.key?.timeseries?.labels)"
                variant="outlined" density="comfortable"
                :hint="str(strings?.page?.key?.timeseries?.labelsHint)" persistent-hint class="mb-3" />
            <v-text-field v-if="!model.tsBulkMode" v-model="model.tsTimestamp" :label="str(strings?.page?.key?.timeseries?.timestamp)"
                :disabled="model.originalTimestamp !== undefined" variant="outlined" density="comfortable"
                :hint="str(strings?.page?.key?.timeseries?.timestampHint)" persistent-hint class="mb-3" />
            <v-switch v-if="model.originalTimestamp === undefined" v-model="model.tsBulkMode"
                :label="str(strings?.page?.key?.timeseries?.bulkMode)" density="compact" hide-details class="mb-3" />
        </template>

        <!-- Probabilistic fields — all hide-details for clean flex alignment -->
        <div v-if="model.type === 'bloom'" class="p3xr-flex-row">
            <v-text-field v-model.number="model.bloomErrorRate" :label="str(strings?.form?.key?.field?.errorRate)"
                type="number" step="0.001" placeholder="0.01 = 1%" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:140px;" />
            <v-text-field v-model.number="model.bloomCapacity" :label="str(strings?.form?.key?.field?.capacity)"
                type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:140px;" />
        </div>
        <v-text-field v-if="model.type === 'cuckoo'" v-model.number="model.cuckooCapacity"
            :label="str(strings?.form?.key?.field?.capacity)" type="number" variant="outlined" density="comfortable" hide-details class="mb-3" />
        <div v-if="model.type === 'topk'" class="p3xr-flex-row">
            <v-text-field v-model.number="model.topkK" label="Top K" type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:100px;" />
            <v-text-field v-model.number="model.topkWidth" :label="str(strings?.form?.key?.field?.width)" type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:100px;" />
            <v-text-field v-model.number="model.topkDepth" :label="str(strings?.form?.key?.field?.depth)" type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:100px;" />
            <v-text-field v-model.number="model.topkDecay" :label="str(strings?.form?.key?.field?.decay)" type="number" step="0.1" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:100px;" />
        </div>
        <div v-if="model.type === 'cms'" class="p3xr-flex-row">
            <v-text-field v-model.number="model.cmsWidth" :label="str(strings?.form?.key?.field?.width)" type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:140px;" />
            <v-text-field v-model.number="model.cmsDepth" :label="str(strings?.form?.key?.field?.depth)" type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:140px;" />
        </div>
        <v-text-field v-if="model.type === 'tdigest'" v-model.number="model.tdigestCompression"
            :label="str(strings?.form?.key?.field?.compression)" type="number" variant="outlined" density="comfortable" hide-details class="mb-3" />
        <div v-if="model.type === 'vectorset'" class="p3xr-flex-row">
            <v-text-field v-model="model.vectorElement" :label="str(strings?.page?.key?.vectorset?.elementName)" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:200px;" />
            <v-text-field v-model="model.vectorValues" :label="str(strings?.page?.key?.vectorset?.vectorValues)" placeholder="0.1, 0.2, 0.3" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:200px;" />
        </div>

        <!-- Action buttons -->
        <input ref="fileInputRef" type="file" style="display: none;" @change="onFileSelected" />
        <div style="display: flex; flex-wrap: wrap; gap: 4px; margin: 8px 0;">
            <v-btn v-if="model.type !== 'stream' && model.type !== 'timeseries' && !isProbabilistic && !isVectorset"
                variant="flat" color="primary" size="small" @click="fileInputRef?.click()" style="gap: 3px;">
                <v-icon size="small">mdi-upload</v-icon>
                <span v-if="isWide">{{ str(strings?.intention?.setBuffer) }}</span>
            </v-btn>
            <template v-if="model.type !== 'timeseries' && !isProbabilistic && !isVectorset">
                <v-btn variant="flat" color="primary" size="small" @click="jsonEditorOpen = true" style="gap: 3px;">
                    <v-icon size="small">mdi-file-document-outline</v-icon>
                    <span v-if="isWide">{{ str(strings?.intention?.jsonViewEditor) }}</span>
                </v-btn>
                <v-btn variant="flat" color="primary" size="small" @click="formatJson()" style="gap: 3px;">
                    <v-icon size="small">mdi-format-line-spacing</v-icon>
                    <span v-if="isWide">{{ str(strings?.intention?.formatJson) }}</span>
                </v-btn>
                <v-btn variant="flat" color="secondary" size="small" @click="jsonViewOpen = true" style="gap: 3px;">
                    <v-icon size="small">mdi-file-tree</v-icon>
                    <span v-if="isWide">{{ str(strings?.intention?.jsonViewShow) }}</span>
                </v-btn>
            </template>
            <v-btn variant="flat" color="secondary" size="small" @click="copy()" style="gap: 3px;">
                <v-icon size="small">mdi-content-copy</v-icon>
                <span v-if="isWide">{{ str(strings?.intention?.copy) }}</span>
            </v-btn>
        </div>

        <!-- Validate JSON -->
        <v-switch v-if="model.type !== 'timeseries' && !isProbabilistic && !isVectorset"
            v-model="validateJson" :label="str(strings?.label?.validateJson)" color="secondary" density="compact" hide-details class="mb-3" />

        <!-- Timeseries formula generator -->
        <template v-if="model.type === 'timeseries' && (model.tsEditAll || model.tsBulkMode)">
            <div class="p3xr-flex-row">
                <v-select v-model="model.tsSpread" :label="str(strings?.page?.key?.timeseries?.autoSpread)"
                    :items="[
                        { value: 1000, title: `1 ${str(strings?.time?.second)}` },
                        { value: 30000, title: `30 ${str(strings?.time?.seconds)}` },
                        { value: 60000, title: `1 ${str(strings?.time?.minute)}` },
                        { value: 1800000, title: `30 ${str(strings?.time?.minutes)}` },
                        { value: 3600000, title: `1 ${str(strings?.time?.hour)}` },
                        { value: 86400000, title: `24 ${str(strings?.time?.hours)}` },
                    ]" item-value="value" item-title="title"
                    variant="outlined" density="comfortable" hide-details style="flex:1;min-width:140px;" />
                <v-select v-model="model.tsFormula" :label="str(strings?.page?.key?.timeseries?.formula)"
                    :items="[
                        { value: '', title: str(strings?.page?.key?.timeseries?.none) },
                        { value: 'sin', title: 'sin' },
                        { value: 'cos', title: 'cos' },
                        { value: 'linear', title: str(strings?.page?.key?.timeseries?.formulaLinear) },
                        { value: 'random', title: str(strings?.page?.key?.timeseries?.formulaRandom) },
                        { value: 'sawtooth', title: str(strings?.page?.key?.timeseries?.formulaSawtooth) },
                    ]" item-value="value" item-title="title"
                    variant="outlined" density="comfortable" hide-details style="flex:1;min-width:120px;" />
            </div>
            <div v-if="model.tsFormula" class="p3xr-flex-row">
                <v-text-field v-model.number="model.tsFormulaPoints" :label="str(strings?.page?.key?.timeseries?.formulaPoints)"
                    type="number" :min="1" :max="10000" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:80px;" />
                <v-text-field v-model.number="model.tsFormulaAmplitude" :label="str(strings?.page?.key?.timeseries?.formulaAmplitude)"
                    type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:80px;" />
                <v-text-field v-model.number="model.tsFormulaOffset" :label="str(strings?.page?.key?.timeseries?.formulaOffset)"
                    type="number" variant="outlined" density="comfortable" hide-details style="flex:1;min-width:80px;" />
                <v-btn variant="flat" color="secondary" size="small" @click="generateFormula()" style="gap: 3px;">
                    <v-icon size="small">mdi-chart-line</v-icon>
                    <span v-if="isWide">{{ str(strings?.page?.key?.timeseries?.generate) }}</span>
                </v-btn>
            </div>
        </template>

        <!-- Value field -->
        <template v-if="!isProbabilistic && !isVectorset">
            <template v-if="model.type === 'timeseries' && (model.tsEditAll || model.tsBulkMode)">
                <v-textarea v-model="model.value" :label="str(strings?.page?.key?.timeseries?.dataPoints)" required rows="10"
                    :hint="str(strings?.page?.key?.timeseries?.editAllHint)" persistent-hint
                    variant="outlined" density="comfortable" style="font-family: 'Roboto Mono', monospace; font-size: 13px;" />
            </template>
            <template v-else-if="model.type === 'timeseries' && !model.tsBulkMode">
                <v-text-field v-model="model.value" :label="str(strings?.page?.key?.timeseries?.value)"
                    type="number" required variant="outlined" density="comfortable" hide-details />
            </template>
            <template v-else>
                <div v-if="model.type === 'stream'" style="opacity: 0.5; font-size: 12px; margin-bottom: 8px;">
                    {{ str(strings?.label?.streamValue) }}
                </div>
                <v-textarea v-model="model.value" :label="str(strings?.form?.key?.field?.value)" required rows="5"
                    variant="outlined" density="comfortable" hide-details />
            </template>
        </template>

        <template #actions>
            <v-btn variant="flat" color="error" size="small" @click="cancel">
                <v-icon class="mr-1">mdi-close-circle</v-icon>
                <span>{{ str(strings?.intention?.cancel) }}</span>
            </v-btn>
            <v-btn v-if="!isReadonly" variant="flat" color="primary" size="small" @click="submit">
                <v-icon class="mr-1">{{ data?.type === 'edit' ? 'mdi-pencil' : 'mdi-plus' }}</v-icon>
                <span>{{ data?.type === 'edit' ? str(strings?.intention?.save) : str(strings?.intention?.add) }}</span>
            </v-btn>
        </template>
    </P3xrDialog>

    <!-- Sub-dialogs -->
    <JsonViewDialog :open="jsonViewOpen" :value="String(model.value ?? '')" @close="jsonViewOpen = false" />
    <JsonEditorDialog :open="jsonEditorOpen" :value="String(model.value ?? '')" @close="handleJsonEditorClose" />
    <DiffDialog :open="diffOpen" :key-name="model.key || ''" :field-name="diffFieldName || undefined"
        :old-value="diffOldValue" :new-value="diffNewValue"
        @confirm="diffOpen = false; diffResolve?.(true)"
        @cancel="diffOpen = false; diffResolve?.(false)" />
</template>

<style>
/* Shared flex row for multi-field layouts (probabilistic, timeseries formula) */
.p3xr-flex-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 12px;
}
</style>
