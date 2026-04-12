<script setup lang="ts">
/**
 * JsonEditorDialog — exact port of React JsonEditorDialog.tsx
 * CodeMirror 6 JSON editor with theme, line wrapping, save, diff.
 */
import { ref, computed, watch, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../stores/i18n'
import { useCommonStore } from '../stores/common'
import { useRedisStateStore } from '../stores/redis-state'
import { useSettingsStore } from '../stores/settings'
import { useThemeStore } from '../stores/theme'
import P3xrDialog from '../components/P3xrDialog.vue'
import DiffDialog from './DiffDialog.vue'

const props = defineProps<{
    open: boolean
    value: string
    hideFormatSave?: boolean
}>()

const emit = defineEmits<{
    close: [result?: { obj: string } | null]
}>()

const i18n = useI18nStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const { themeKey } = storeToRefs(useThemeStore())
const strings = computed(() => i18n.strings)
const { width } = useDisplay()
const isWide = computed(() => width.value >= 960)
const isReadonly = computed(() => state.connection?.readonly === true)
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))

const editorEl = ref<HTMLDivElement>()
const isJson = ref(false)
const lineWrap = ref(true)

// CodeMirror refs
let view: any = null
let wrapCompartment: any = null
let EditorViewClass: any = null

// Diff dialog state
const diffOpen = ref(false)
const diffNewValue = ref('')
let diffResolve: ((v: boolean) => void) | null = null

watch(() => props.open, async (v) => {
    if (!v) {
        destroyEditor()
        return
    }

    let obj: any
    try { obj = JSON.parse(props.value); isJson.value = true }
    catch { isJson.value = false; return }

    const doc = JSON.stringify(obj, null, settings.jsonFormat || 2)

    // Wait for DOM
    await new Promise(r => setTimeout(r, 50))
    if (!editorEl.value) return

    const { EditorView, keymap, lineNumbers, highlightActiveLineGutter,
        highlightSpecialChars, drawSelection, highlightActiveLine,
        rectangularSelection, crosshairCursor } = await import('@codemirror/view')
    const { EditorState, Compartment } = await import('@codemirror/state')
    const { json } = await import('@codemirror/lang-json')
    const { defaultKeymap, history, historyKeymap } = await import('@codemirror/commands')
    const { bracketMatching, foldGutter, foldKeymap, indentOnInput,
        syntaxHighlighting, defaultHighlightStyle } = await import('@codemirror/language')
    const { closeBrackets, closeBracketsKeymap } = await import('@codemirror/autocomplete')
    const { searchKeymap, highlightSelectionMatches } = await import('@codemirror/search')
    const { lintKeymap } = await import('@codemirror/lint')

    let themeExt: any
    if (isDark.value) {
        const { oneDark } = await import('@codemirror/theme-one-dark')
        themeExt = oneDark
    } else {
        const { githubLight } = await import('@uiw/codemirror-theme-github')
        themeExt = githubLight
    }

    wrapCompartment = new Compartment()
    EditorViewClass = EditorView

    view = new EditorView({
        state: EditorState.create({
            doc,
            extensions: [
                lineNumbers(),
                highlightActiveLineGutter(),
                highlightSpecialChars(),
                history(),
                foldGutter(),
                drawSelection(),
                indentOnInput(),
                syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
                bracketMatching(),
                closeBrackets(),
                rectangularSelection(),
                crosshairCursor(),
                highlightActiveLine(),
                highlightSelectionMatches(),
                keymap.of([
                    ...closeBracketsKeymap, ...defaultKeymap,
                    ...searchKeymap, ...historyKeymap,
                    ...foldKeymap, ...lintKeymap,
                ]),
                json(),
                themeExt,
                EditorView.theme({
                    '&': {
                        'height': 'calc(90vh - 100px)',
                        'max-height': 'calc(90vh - 100px)',
                    },
                    '.cm-scroller': {
                        'overflow': 'auto',
                        'scrollbar-width': 'auto',
                        'min-height': '0',
                    },
                    '.cm-scroller::-webkit-scrollbar': { 'height': '12px', 'display': 'block' },
                    '.cm-scroller::-webkit-scrollbar-track': { 'background': 'rgba(128,128,128,0.1)' },
                    '.cm-scroller::-webkit-scrollbar-thumb': { 'background': 'rgba(128,128,128,0.4)', 'border-radius': '6px' },
                    '.cm-scroller::-webkit-scrollbar-thumb:hover': { 'background': 'rgba(128,128,128,0.6)' },
                }),
                wrapCompartment.of(EditorView.lineWrapping),
                EditorState.readOnly.of(isReadonly.value),
            ],
        }),
        parent: editorEl.value,
    })

    // Force layout recalculation after dialog is fully rendered
    // Without this, CodeMirror doesn't know its container dimensions
    requestAnimationFrame(() => view.requestMeasure())
})

function destroyEditor() {
    if (view) { view.destroy(); view = null }
    wrapCompartment = null
    EditorViewClass = null
}

onUnmounted(destroyEditor)

function toggleWrap() {
    lineWrap.value = !lineWrap.value
    if (view && wrapCompartment && EditorViewClass) {
        view.dispatch({
            effects: wrapCompartment.reconfigure(lineWrap.value ? EditorViewClass.lineWrapping : []),
        })
    }
}

async function save(format: boolean) {
    try {
        const text = view.state.doc.toString()
        const parsed = JSON.parse(text)
        const result = JSON.stringify(parsed, null, format ? (settings.jsonFormat || 2) : 0)
        if (settings.showDiffBeforeSave && props.value !== result) {
            diffNewValue.value = result
            diffOpen.value = true
            const confirmed = await new Promise<boolean>(resolve => { diffResolve = resolve })
            if (!confirmed) return
        }
        emit('close', { obj: result })
    } catch (e) {
        common.generalHandleError(e)
    }
}

function cancel() {
    emit('close', null)
}
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.intention?.jsonViewEditor" width="90vw" height="90vh" :content-padding="!isJson" @close="cancel">
        <div v-if="isJson" ref="editorEl" class="p3xr-json-editor-container" />
        <div v-else style="min-height: 320px;">{{ strings?.label?.jsonViewNotParsable }}</div>

        <template #actions>
            <v-btn variant="flat" color="secondary" size="small" @click="toggleWrap">
                <v-icon size="small">{{ lineWrap ? 'mdi-wrap' : 'mdi-wrap-disabled' }}</v-icon>
                <span v-if="isWide" style="margin-left: 3px;">{{ lineWrap ? strings?.intention?.unwrap : strings?.intention?.wrap }}</span>
            </v-btn>
            <div style="flex: 1;" />
            <v-btn variant="flat" color="error" size="small" @click="cancel">
                <v-icon size="small">mdi-close-circle</v-icon>
                <span style="margin-left: 3px;">{{ strings?.intention?.cancel }}</span>
            </v-btn>
            <template v-if="isJson && !isReadonly">
                <v-btn variant="flat" color="primary" size="small" @click="save(false)">
                    <v-icon size="small">mdi-check</v-icon>
                    <span v-if="isWide" style="margin-left: 3px;">{{ strings?.intention?.save }}</span>
                </v-btn>
                <v-btn v-if="!hideFormatSave" variant="flat" color="primary" size="small" @click="save(true)">
                    <v-icon size="small">mdi-check</v-icon>
                    <v-icon size="small">mdi-format-line-spacing</v-icon>
                    <span v-if="isWide" style="margin-left: 3px;">{{ strings?.intention?.saveWithFormatJson }}</span>
                </v-btn>
            </template>
        </template>
    </P3xrDialog>

    <DiffDialog :open="diffOpen" key-name="JSON" :old-value="value" :new-value="diffNewValue"
        @confirm="diffOpen = false; diffResolve?.(true)"
        @cancel="diffOpen = false; diffResolve?.(false)" />
</template>

<style>
/* Match Angular: explicit calc height, dialog content overflow hidden,
   CM scroller handles all scrolling with sticky bottom scrollbar */
.p3xr-json-editor-container {
    height: calc(90vh - 100px);
}
/* Override P3xrDialog's v-card-text overflow: auto — editor handles its own scrolling */
.p3xr-json-editor-container .cm-editor {
    height: 100% !important;
    max-height: 100% !important;
}
.p3xr-json-editor-container .cm-scroller {
    overflow: auto !important;
    min-height: 0 !important;
}
</style>
