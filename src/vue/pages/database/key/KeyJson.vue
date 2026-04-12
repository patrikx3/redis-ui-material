<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import JsonTreeNode, { type JsonNode } from '../../../components/JsonTreeNode.vue'
import JsonEditorDialog from '../../../dialogs/JsonEditorDialog.vue'
import DiffDialog from '../../../dialogs/DiffDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useSettingsStore } from '../../../stores/settings'
import { useCommonStore } from '../../../stores/common'
import { useOverlayStore } from '../../../stores/overlay'
import { useThemeStore } from '../../../stores/theme'
import { storeToRefs } from 'pinia'
import { request } from '../../../stores/socket.service'
import { truncateDisplay, copyToClipboard, str } from './key-type-base'

function jsonToNode(key: string, value: any): JsonNode {
    if (value === null) return { key, value: null, type: 'null' }
    if (Array.isArray(value)) { const c = value.map((item, i) => jsonToNode(String(i), item)); return { key, value, type: 'array', children: c, childCount: c.length } }
    if (typeof value === 'object') { const c = Object.keys(value).map(k => jsonToNode(k, value[k])); return { key, value, type: 'object', children: c, childCount: c.length } }
    return { key, value, type: typeof value as any }
}

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()
const strings = computed(() => useI18nStore().strings)
const isReadonly = computed(() => useRedisStateStore().connection?.readonly === true)
const { themeKey } = storeToRefs(useThemeStore())
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width } = useDisplay()
const isGtSm = computed(() => width.value >= 960)

const jsonObj = ref<any>(undefined)
const treeWrap = ref(true)
const expandedKeys = ref<Set<string>>(new Set())
const editorOpen = ref(false)
const diffOpen = ref(false)
const diffOldValue = ref('')
const diffNewValue = ref('')
let diffResolve: ((v: boolean) => void) | null = null

const rootLabel = computed(() => strings.value?.label?.tree ?? 'root')
const tree = computed(() => jsonObj.value !== undefined ? jsonToNode(rootLabel.value, jsonObj.value) : null)

watch(() => props.value, () => {
    try {
        jsonObj.value = typeof props.value === 'string' ? JSON.parse(props.value) : props.value
        expandedKeys.value = new Set([`0-${rootLabel.value}`])
    } catch { jsonObj.value = undefined }
}, { immediate: true })

function toggleExpand(path: string) { const s = new Set(expandedKeys.value); s.has(path) ? s.delete(path) : s.add(path); expandedKeys.value = s }

function expandAll() {
    if (jsonObj.value === undefined) return
    const keys = new Set<string>()
    const collect = (node: JsonNode, level: number) => { const p = `${level}-${node.key}`; if (node.type === 'object' || node.type === 'array') { keys.add(p); node.children?.forEach(c => collect(c, level + 1)) } }
    collect(jsonToNode(rootLabel.value, jsonObj.value), 0)
    expandedKeys.value = keys
}
function collapseAll() { expandedKeys.value = new Set([`0-${rootLabel.value}`]) }

function copyVal() { copyToClipboard(String(props.value ?? '')) }
function downloadJson() {
    const blob = new Blob([props.value], { type: 'application/json' })
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `${props.keyName}.json`; a.click(); URL.revokeObjectURL(url)
}

async function handleEditorClose(result?: { obj: string } | null) {
    editorOpen.value = false
    if (!result?.obj) return
    const oldVal = props.value
    const val = typeof result.obj === 'string' ? result.obj : JSON.stringify(result.obj)
    overlay.show()
    try {
        await request({ action: 'key/json-set', payload: { key: props.keyName, path: '$', value: val } })
        emit('refresh'); overlay.hide()
        if (settings.undoEnabled && oldVal !== val) {
            const undo = await common.toastWithUndo(str(strings.value?.status?.set))
            if (undo) { overlay.show({ message: 'Undo...' }); await request({ action: 'key/json-set', payload: { key: props.keyName, path: '$', value: oldVal } }); emit('refresh'); overlay.hide(); common.toast(str(strings.value?.status?.reverted)) }
        }
    } catch (e) { common.generalHandleError(e); overlay.hide() }
}
</script>

<template>
    <div>
        <div class="p3xr-key-type-actions">
            <!-- Copy -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="copyVal()" style="gap:3px;"><v-icon size="small">mdi-content-copy</v-icon><span>{{ str(strings?.intention?.copy) }}</span></v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.copy)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="secondary" @click="copyVal()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">mdi-content-copy</v-icon></v-btn></template></v-tooltip>
            <!-- Download -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="downloadJson()" style="gap:3px;"><v-icon size="small">mdi-download</v-icon><span>{{ str(strings?.intention?.downloadJson) }}</span></v-btn>
            <v-tooltip v-else :text="str(strings?.intention?.downloadJson)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="secondary" @click="downloadJson()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">mdi-download</v-icon></v-btn></template></v-tooltip>
            <!-- Expand All -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="expandAll()" style="gap:3px;"><v-icon size="small">mdi-unfold-more-horizontal</v-icon><span>{{ str(strings?.page?.treeControls?.expandAll) }}</span></v-btn>
            <v-tooltip v-else :text="str(strings?.page?.treeControls?.expandAll)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="secondary" @click="expandAll()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">mdi-unfold-more-horizontal</v-icon></v-btn></template></v-tooltip>
            <!-- Collapse All -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="collapseAll()" style="gap:3px;"><v-icon size="small">mdi-unfold-less-horizontal</v-icon><span>{{ str(strings?.page?.treeControls?.collapseAll) }}</span></v-btn>
            <v-tooltip v-else :text="str(strings?.page?.treeControls?.collapseAll)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="secondary" @click="collapseAll()" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">mdi-unfold-less-horizontal</v-icon></v-btn></template></v-tooltip>
            <!-- Wrap toggle -->
            <v-btn v-if="isGtSm" variant="flat" color="secondary" @click="treeWrap = !treeWrap" style="gap:3px;"><v-icon size="small">{{ treeWrap ? 'mdi-wrap' : 'mdi-wrap-disabled' }}</v-icon><span>{{ treeWrap ? str(strings?.intention?.unwrap) : str(strings?.intention?.wrap) }}</span></v-btn>
            <v-tooltip v-else :text="treeWrap ? str(strings?.intention?.unwrap) : str(strings?.intention?.wrap)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="secondary" @click="treeWrap = !treeWrap" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">{{ treeWrap ? 'mdi-wrap' : 'mdi-wrap-disabled' }}</v-icon></v-btn></template></v-tooltip>
            <!-- Edit (JSON Editor) -->
            <template v-if="!isReadonly">
                <v-btn v-if="isGtSm" variant="flat" color="primary" @click="editorOpen = true" style="gap:3px;"><v-icon size="small">mdi-pencil</v-icon><span>{{ str(strings?.intention?.jsonViewEditor) }}</span></v-btn>
                <v-tooltip v-else :text="str(strings?.intention?.jsonViewEditor)" location="top"><template #activator="{ props: tp }"><v-btn v-bind="tp" variant="flat" color="primary" @click="editorOpen = true" style="min-width:40px;width:40px;height:40px;padding:0;border-radius:4px;"><v-icon size="small">mdi-pencil</v-icon></v-btn></template></v-tooltip>
            </template>
        </div>

        <div class="p3xr-key-type-content" style="overflow:auto;">
            <JsonTreeNode v-if="tree" :node="tree" :level="0" :expanded-keys="expandedKeys" :is-dark="isDark" @toggle="toggleExpand" />
            <div v-else style="font-family:'Roboto Mono',monospace;white-space:pre-wrap;word-break:break-all;">{{ truncateDisplay(value) }}</div>
        </div>

        <JsonEditorDialog :open="editorOpen" :value="String(value ?? '')" hide-format-save @close="handleEditorClose" />
        <DiffDialog :open="diffOpen" :key-name="keyName" :old-value="diffOldValue" :new-value="diffNewValue"
            @confirm="diffOpen = false; diffResolve?.(true)" @cancel="diffOpen = false; diffResolve?.(false)" />
    </div>
</template>

<style scoped>
.p3xr-key-type-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 8px; padding: 4px 8px; }
.p3xr-key-type-content { padding: 8px 16px 24px; }
</style>
