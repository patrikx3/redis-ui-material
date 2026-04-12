<script setup lang="ts">
/**
 * KeyString — exact port of React KeyString.tsx
 * View: Upload, Download, JSON View, Copy, Format JSON, JSON Editor, Digest, Edit
 * Edit: Validate JSON toggle, Cancel, Upload, Save
 * Display: HexMonitor for hex, formatted text with "..." truncation, hidden until edit
 * Auto-grow textarea with no scrollbar (main content scrolls)
 */
import { ref, computed, nextTick, watch } from 'vue'
import { useDisplay } from 'vuetify'
import HexMonitor from './HexMonitor.vue'
import JsonViewDialog from '../../../dialogs/JsonViewDialog.vue'
import JsonEditorDialog from '../../../dialogs/JsonEditorDialog.vue'
import DiffDialog from '../../../dialogs/DiffDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useSettingsStore } from '../../../stores/settings'
import { useCommonStore } from '../../../stores/common'
import { useOverlayStore } from '../../../stores/overlay'
import { request } from '../../../stores/socket.service'
import { formatValue, truncateDisplay, isTruncated, copyToClipboard, downloadBuffer, str, toBytes } from './key-type-base'
import { parseRedisVersion } from '../../../../core/redis-version'

const props = defineProps<{
    response: any
    value: any
    valueBuffer: any
    keyName: string
    valueFormat: string
}>()
const emit = defineEmits<{ refresh: [] }>()

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width: displayWidth } = useDisplay()

const strings = computed(() => i18n.strings)
const isGtSm = computed(() => displayWidth.value >= 960)
const isReadonly = computed(() => state.connection?.readonly === true)

// Edit state
const editable = ref(false)
const buffer = ref(false)
const validateJson = ref(false)
const editValue = ref('')
const originalValue = ref<any>(null)

// Dialog state
const jsonViewOpen = ref(false)
const jsonEditorOpen = ref(false)
const diffOpen = ref(false)
const diffOldValue = ref('')
const diffNewValue = ref('')
let diffResolve: ((v: boolean) => void) | null = null

// Textarea ref for auto-grow
const textareaRef = ref<HTMLTextAreaElement>()

// --- Display values ---
const displayValue = computed(() => {
    const val = typeof props.value === 'string' ? props.value : ''
    return truncateDisplay(formatValue(val, props.valueFormat))
})

const hexDisplayValue = computed(() => {
    return truncateDisplay(typeof props.value === 'string' ? props.value : '')
})

const isValueTruncated = computed(() => isTruncated(props.value))

// Digest available for Redis 8.4+
const showDigest = computed(() => {
    const ver = parseRedisVersion(state.info?.server?.redis_version)
    return ver.isAtLeast(8, 4)
})

// --- Auto-grow textarea (no scrollbar, main content scrolls) ---
function autoGrow() {
    const el = textareaRef.value
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
}

// Auto-grow when edit mode activates or value changes
watch(editable, (v) => { if (v) nextTick(() => nextTick(autoGrow)) })
watch(editValue, () => nextTick(autoGrow))

// --- Edit mode ---
function edit() {
    const val = props.value
    if (typeof val === 'string' && val.length >= settings.maxValueAsBuffer) {
        buffer.value = true
        originalValue.value = structuredClone(props.valueBuffer)
        editValue.value = String(props.valueBuffer ?? '')
    } else {
        buffer.value = false
        originalValue.value = structuredClone(val)
        editValue.value = String(val ?? '')
    }
    editable.value = true
    nextTick(autoGrow)
}

function cancelEdit() {
    editable.value = false
    buffer.value = false
    editValue.value = ''
}

async function showDiffDialog(oldVal: string, newVal: string): Promise<boolean> {
    if (!settings.showDiffBeforeSave) return true
    if (oldVal === newVal) return true
    diffOldValue.value = oldVal
    diffNewValue.value = newVal
    diffOpen.value = true
    return new Promise(resolve => { diffResolve = resolve })
}

async function save() {
    try {
        if (validateJson.value) JSON.parse(editValue.value)

        if (originalValue.value != null) {
            const confirmed = await showDiffDialog(String(originalValue.value), editValue.value)
            if (!confirmed) return
        }

        overlay.show({ message: str(strings.value?.intention?.save) })
        await request({
            action: 'key/set',
            payload: { type: props.response?.type, key: props.keyName, value: editValue.value },
        })

        const oldVal = originalValue.value
        editable.value = false
        buffer.value = false
        emit('refresh')
        overlay.hide()

        // Undo support
        if (settings.undoEnabled && oldVal !== undefined && String(oldVal) !== editValue.value) {
            const undoClicked = await common.toastWithUndo(str(strings.value?.status?.saved))
            if (undoClicked) {
                overlay.show({ message: 'Undo...' })
                await request({
                    action: 'key/set',
                    payload: { type: props.response?.type, key: props.keyName, value: String(oldVal) },
                })
                emit('refresh')
                overlay.hide()
                common.toast(str(strings.value?.status?.reverted))
            }
        }
    } catch (e) {
        common.generalHandleError(e)
        overlay.hide()
    }
}

// --- Upload binary ---
function uploadBinary() {
    const input = document.createElement('input')
    input.type = 'file'
    input.onchange = async () => {
        const file = input.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onerror = (err) => common.generalHandleError(err)
        reader.onload = async (e: any) => {
            const arrayBuffer = e.target.result
            try {
                if (editable.value) {
                    await common.confirm({ message: str(strings.value?.confirm?.uploadBuffer) })
                    editValue.value = new TextDecoder().decode(arrayBuffer)
                    common.toast(str(strings.value?.confirm?.uploadBufferDone))
                    nextTick(autoGrow)
                    return
                }
                await common.confirm({ message: str(strings.value?.confirm?.uploadBuffer) })
                overlay.show()
                await request({ action: 'key/set', payload: { type: props.response?.type, value: arrayBuffer, key: props.keyName } })
                common.toast(str(strings.value?.confirm?.uploadBufferDoneAndSave))
                emit('refresh')
            } catch (e) {
                if (e !== undefined) common.generalHandleError(e)
            } finally {
                overlay.hide()
            }
        }
        reader.readAsArrayBuffer(file)
    }
    input.click()
}

// --- Format JSON ---
async function formatJson() {
    try {
        const formatted = JSON.stringify(JSON.parse(props.value), null, settings.jsonFormat || 2)
        overlay.show({ message: str(strings.value?.intention?.save) })
        await request({ action: 'key/set', payload: { type: props.response?.type, key: props.keyName, value: formatted } })
        emit('refresh')
    } catch {
        common.toast(str(strings.value?.label?.jsonViewNotParsable))
    } finally {
        overlay.hide()
    }
}

// --- Digest ---
async function digest() {
    try {
        const res = await request({ action: 'key/string-digest', payload: { key: props.keyName } })
        common.toast(res.digest || 'No digest')
    } catch (e) {
        common.generalHandleError(e)
    }
}

// --- Actions ---
function copy() { copyToClipboard(String(props.value ?? '')) }
function download() { downloadBuffer(props.valueBuffer || toBytes(String(props.value ?? '')), props.keyName) }

// --- Buffer info ---
function bufferDisplay(): string {
    if (props.valueBuffer?.byteLength !== undefined) {
        return '(' + settings.prettyBytes(props.valueBuffer.byteLength) + ')'
    }
    return ''
}

// --- JSON Editor close handler ---
async function handleJsonEditorClose(result?: { obj: string } | null) {
    jsonEditorOpen.value = false
    if (!result?.obj) return
    const oldVal = String(props.value ?? '')
    overlay.show({ message: str(strings.value?.intention?.save) })
    try {
        await request({ action: 'key/set', payload: { type: props.response?.type, key: props.keyName, value: result.obj } })
        emit('refresh')
        overlay.hide()
        if (settings.undoEnabled && oldVal !== result.obj) {
            const undoClicked = await common.toastWithUndo(str(strings.value?.status?.saved))
            if (undoClicked) {
                overlay.show({ message: 'Undo...' })
                await request({ action: 'key/set', payload: { type: props.response?.type, key: props.keyName, value: oldVal } })
                emit('refresh')
                overlay.hide()
                common.toast(str(strings.value?.status?.reverted))
            }
        }
    } catch (e) {
        common.generalHandleError(e)
        overlay.hide()
    }
}
</script>

<template>
    <div>
        <!-- View mode actions (React order: Upload, Download, JSON View, Copy, Format JSON, JSON Editor, Digest, Edit) -->
        <div v-if="!editable" class="p3xr-key-type-actions">
            <!-- Upload (non-readonly) -->
            <template v-if="!isReadonly">
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="uploadBinary()" style="gap: 3px;">
                    <v-icon size="small">mdi-upload</v-icon><span>{{ str(strings?.intention?.setBuffer) }}</span>
                </v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.setBuffer)" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="primary" @click="uploadBinary()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-upload</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>

            <!-- Download -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="download()" style="gap: 3px;">
                <v-icon size="small">mdi-download</v-icon><span>{{ str(strings?.intention?.downloadBuffer) }}</span>
            </v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.downloadBuffer)" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="flat" color="secondary" @click="download()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                        <v-icon size="small">mdi-download</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- JSON View -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="jsonViewOpen = true" style="gap: 3px;">
                <v-icon size="small">mdi-file-tree</v-icon><span>{{ str(strings?.intention?.jsonViewShow) }}</span>
            </v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.jsonViewShow)" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="flat" color="secondary" @click="jsonViewOpen = true" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                        <v-icon size="small">mdi-file-tree</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Copy -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="copy()" style="gap: 3px;">
                <v-icon size="small">mdi-content-copy</v-icon><span>{{ str(strings?.intention?.copy) }}</span>
            </v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.copy)" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="flat" color="secondary" @click="copy()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                        <v-icon size="small">mdi-content-copy</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Format JSON (non-readonly) -->
            <template v-if="!isReadonly">
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="formatJson()" style="gap: 3px;">
                    <v-icon size="small">mdi-format-line-spacing</v-icon><span>{{ str(strings?.intention?.formatJson) }}</span>
                </v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.formatJson)" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="primary" @click="formatJson()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-format-line-spacing</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>

            <!-- JSON Editor -->
            <v-btn v-if="isGtSm" variant="flat" color="primary" @click="jsonEditorOpen = true" style="gap: 3px;">
                <v-icon size="small">mdi-file-document-outline</v-icon><span>{{ str(strings?.intention?.jsonViewEditor) }}</span>
            </v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.jsonViewEditor)" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="flat" color="primary" @click="jsonEditorOpen = true" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                        <v-icon size="small">mdi-file-document-outline</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Digest (Redis 8.4+) -->
            <template v-if="showDigest">
                <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="digest()" style="gap: 3px;">
                    <v-icon size="small">mdi-pound</v-icon><span>Digest</span>
                </v-btn>
                <v-tooltip v-else text="Digest" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="secondary" @click="digest()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-pound</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>

            <!-- Edit (non-readonly) -->
            <template v-if="!isReadonly">
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="edit()" style="gap: 3px;">
                    <v-icon size="small">mdi-pencil</v-icon><span>{{ str(strings?.intention?.edit) }}</span>
                </v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.edit)" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="primary" @click="edit()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
        </div>

        <!-- Edit mode actions (React: Validate JSON switch, Cancel, Upload, Save) -->
        <div v-else class="p3xr-key-type-actions">
            <!-- Validate JSON toggle -->
            <v-switch v-if="!isReadonly" v-model="validateJson" :label="str(strings?.label?.validateJson)" color="secondary"
                density="compact" hide-details style="margin-right: 8px;" />

            <!-- Cancel -->
            <v-btn v-if="isGtSm" variant="flat" color="error" @click="cancelEdit()" style="gap: 3px;">
                <v-icon size="small">mdi-close-circle</v-icon><span>{{ str(strings?.intention?.cancel) }}</span>
            </v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.cancel)" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="flat" color="error" @click="cancelEdit()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                        <v-icon size="small">mdi-close-circle</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>

            <!-- Upload (non-readonly) -->
            <template v-if="!isReadonly">
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="uploadBinary()" style="gap: 3px;">
                    <v-icon size="small">mdi-upload</v-icon><span>{{ str(strings?.intention?.setBuffer) }}</span>
                </v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.setBuffer)" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="primary" @click="uploadBinary()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-upload</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>

                <!-- Save -->
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="save()" style="gap: 3px;">
                    <v-icon size="small">mdi-check</v-icon><span>{{ str(strings?.intention?.save) }}</span>
                </v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.save)" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="tp" variant="flat" color="primary" @click="save()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;">
                            <v-icon size="small">mdi-check</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
        </div>

        <!-- Value display / editor -->
        <div class="p3xr-key-type-content">
            <!-- Edit mode -->
            <div v-if="editable" class="p3xr-key-type-editor">
                <!-- Buffer info -->
                <div v-if="buffer || String(value) === '[object ArrayBuffer]'" class="p3xr-key-type-buffer-info">
                    {{ typeof strings?.label?.isBuffer === 'function' ? strings.label.isBuffer({ maxValueAsBuffer: settings.prettyBytes(settings.maxValueAsBuffer) }) : '' }}
                    {{ bufferDisplay() }}
                </div>
                <!-- Auto-grow textarea, no scrollbar -->
                <textarea ref="textareaRef" v-model="editValue" class="p3xr-key-string-textarea" @input="autoGrow()" />
            </div>

            <!-- View mode -->
            <div v-else class="p3xr-key-type-display"
                :style="{ cursor: isReadonly ? 'default' : 'pointer', overflow: valueFormat === 'hex' ? 'visible' : 'auto' }"
                @click="!isReadonly && edit()">

                <!-- Hidden until edit -->
                <div v-if="settings.maxValueDisplay === -1" style="opacity: 0.5; font-style: italic;">
                    {{ str(strings?.label?.hiddenUntilEdit) }}
                </div>

                <!-- Hex format -->
                <HexMonitor v-else-if="valueFormat === 'hex'" :value="hexDisplayValue" />

                <!-- Raw / JSON / Base64 -->
                <span v-else class="p3xr-key-string-display">{{ displayValue }}<span v-if="isValueTruncated" style="opacity: 0.5;">...</span></span>
            </div>
        </div>

        <!-- Dialogs -->
        <JsonViewDialog :open="jsonViewOpen" :value="String(value ?? '')" @close="jsonViewOpen = false" />
        <JsonEditorDialog :open="jsonEditorOpen" :value="String(value ?? '')" @close="handleJsonEditorClose" />
        <DiffDialog :open="diffOpen" :key-name="keyName" :old-value="diffOldValue" :new-value="diffNewValue"
            @confirm="diffOpen = false; diffResolve?.(true)"
            @cancel="diffOpen = false; diffResolve?.(false)" />
    </div>
</template>

<style scoped>
.p3xr-key-type-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; padding: 4px 8px; }
.p3xr-key-type-content { padding: 8px 16px 24px; }
.p3xr-key-type-display { padding: 8px; max-width: 100%; }
.p3xr-key-type-editor { width: 100%; }
.p3xr-key-type-buffer-info { padding: 8px; opacity: 0.7; font-style: italic; }
/* React: fontSize: 16, lineHeight: '18px', wordBreak: 'break-all', whiteSpace: 'pre-wrap' */
.p3xr-key-string-display { font-family: 'Roboto Mono', monospace; font-size: 16px; line-height: 18px; word-break: break-all; white-space: pre-wrap; }
/* Auto-grow textarea: no scrollbar, grows with content, main page scrolls */
.p3xr-key-string-textarea {
    width: 100%;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    background: transparent;
    color: inherit;
    border: 2px solid rgba(var(--v-border-color), 0.25);
    border-radius: 4px;
    padding: 8px;
    outline: none;
    resize: vertical;
    box-sizing: border-box;
    min-height: 120px;
    overflow: hidden;
}
.p3xr-key-string-textarea:focus { border-color: rgb(var(--v-theme-primary)); }
</style>
