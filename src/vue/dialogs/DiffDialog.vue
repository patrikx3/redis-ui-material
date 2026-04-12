<script setup lang="ts">
/**
 * DiffDialog — exact port of React DiffDialog.tsx
 * Inline / side-by-side diff view with collapsible context.
 */
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { diffLines, type Change } from 'diff'
import { useI18nStore } from '../stores/i18n'
import P3xrDialog from '../components/P3xrDialog.vue'

interface DiffBlock {
    type: 'added' | 'removed' | 'unchanged' | 'collapse'
    lines: string[]
    collapsedCount?: number
}

const CONTEXT_LINES = 3

function buildBlocks(changes: Change[]): DiffBlock[] {
    const blocks: DiffBlock[] = []
    for (const change of changes) {
        const lines = change.value.replace(/\n$/, '').split('\n')
        if (change.added) {
            blocks.push({ type: 'added', lines })
        } else if (change.removed) {
            blocks.push({ type: 'removed', lines })
        } else {
            if (lines.length <= CONTEXT_LINES * 2 + 1) {
                blocks.push({ type: 'unchanged', lines })
            } else {
                blocks.push({ type: 'unchanged', lines: lines.slice(0, CONTEXT_LINES) })
                const collapsed = lines.slice(CONTEXT_LINES, -CONTEXT_LINES)
                blocks.push({ type: 'collapse', lines: collapsed, collapsedCount: collapsed.length })
                blocks.push({ type: 'unchanged', lines: lines.slice(-CONTEXT_LINES) })
            }
        }
    }
    return blocks
}

const props = defineProps<{
    open: boolean
    keyName: string
    fieldName?: string
    oldValue: string
    newValue: string
}>()

const emit = defineEmits<{
    confirm: []
    cancel: []
}>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const d = computed(() => strings.value?.diff || {} as any)
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const mode = ref<'inline' | 'side-by-side'>('inline')
const expanded = ref<Set<number>>(new Set())

watch(() => props.open, (v) => {
    if (v) {
        mode.value = 'inline'
        expanded.value = new Set()
    }
})

const changes = computed(() => diffLines(String(props.oldValue ?? ''), String(props.newValue ?? '')))
const blocks = computed(() => buildBlocks(changes.value))
const additions = computed(() => changes.value.filter(c => c.added).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0))
const deletions = computed(() => changes.value.filter(c => c.removed).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0))

function toggleExpand(i: number) {
    const s = new Set(expanded.value)
    s.has(i) ? s.delete(i) : s.add(i)
    expanded.value = s
}

function lineClass(type: string) {
    if (type === 'added') return 'p3xr-diff-added'
    if (type === 'removed') return 'p3xr-diff-removed'
    return 'p3xr-diff-unchanged'
}

const title = computed(() => {
    const prefix = d.value.reviewChanges || 'Review changes'
    const field = props.fieldName ? `${props.fieldName} @ ` : ''
    return `${prefix} — ${field}${props.keyName}`
})
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="title" width="800px" :content-padding="false" @close="emit('cancel')">
        <template #headerActions>
            <v-btn-toggle v-model="mode" mandatory density="compact" class="p3xr-diff-mode-toggle" style="margin-right: 4px;">
                <v-btn value="inline" size="x-small">{{ d.inline || 'Inline' }}</v-btn>
                <v-btn value="side-by-side" size="x-small">{{ d.sideBySide || 'Side by side' }}</v-btn>
            </v-btn-toggle>
            <span style="font-size: 12px; opacity: 0.8; margin-right: 4px; white-space: nowrap;">
                <span style="color: #81c784; font-weight: 700;">+{{ additions }}</span> {{ d.additions || 'additions' }},
                <span style="color: #ef9a9a; font-weight: 700;">-{{ deletions }}</span> {{ d.deletions || 'deletions' }}
            </span>
        </template>

        <div class="p3xr-diff-body" :class="{ 'p3xr-diff-side': mode === 'side-by-side' }">
            <!-- Inline mode -->
            <template v-if="mode === 'inline'">
                <div>
                    <template v-for="(block, i) in blocks" :key="i">
                        <div v-if="block.type === 'collapse' && !expanded.has(i)" class="p3xr-diff-collapse" @click="toggleExpand(i)">
                            ... {{ block.collapsedCount }} {{ d.unchangedLines || 'unchanged lines' }} ...
                        </div>
                        <template v-else>
                            <div v-for="(line, j) in block.lines" :key="`${i}-${j}`" :class="lineClass(block.type)" class="p3xr-diff-line">
                                <span class="p3xr-diff-prefix">{{ block.type === 'added' ? '+' : block.type === 'removed' ? '-' : ' ' }}</span>{{ line }}
                            </div>
                        </template>
                    </template>
                </div>
            </template>

            <!-- Side-by-side mode -->
            <template v-else>
                <div style="border-right: 1px solid rgba(var(--v-theme-on-surface), 0.12); overflow: auto;">
                    <div style="padding: 4px 8px; font-weight: 500; border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12); position: sticky; top: 0; z-index: 1; background: rgb(var(--v-theme-surface));">
                        {{ d.before || 'Before' }}
                    </div>
                    <template v-for="(block, i) in blocks" :key="'l'+i">
                        <div v-if="block.type === 'collapse' && !expanded.has(i)" class="p3xr-diff-collapse" @click="toggleExpand(i)">
                            ... {{ block.collapsedCount }} {{ d.unchangedLines || 'unchanged lines' }} ...
                        </div>
                        <template v-else-if="block.type !== 'added'">
                            <div v-for="(line, j) in block.lines" :key="`l${i}-${j}`" :class="lineClass(block.type)" class="p3xr-diff-line">{{ line }}</div>
                        </template>
                    </template>
                </div>
                <div style="overflow: auto;">
                    <div style="padding: 4px 8px; font-weight: 500; border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.12); position: sticky; top: 0; z-index: 1; background: rgb(var(--v-theme-surface));">
                        {{ d.after || 'After' }}
                    </div>
                    <template v-for="(block, i) in blocks" :key="'r'+i">
                        <div v-if="block.type === 'collapse' && !expanded.has(i)" class="p3xr-diff-collapse" @click="toggleExpand(i)">
                            ... {{ block.collapsedCount }} {{ d.unchangedLines || 'unchanged lines' }} ...
                        </div>
                        <template v-else-if="block.type !== 'removed'">
                            <div v-for="(line, j) in block.lines" :key="`r${i}-${j}`" :class="lineClass(block.type)" class="p3xr-diff-line">{{ line }}</div>
                        </template>
                    </template>
                </div>
            </template>
        </div>

        <template #actions>
            <v-btn variant="flat" color="warning" @click="emit('cancel')">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel }}</span>
            </v-btn>
            <v-btn variant="flat" color="primary" @click="emit('confirm')">
                <v-icon :class="{ 'mr-1': isWide }">mdi-check</v-icon>
                <span v-if="isWide">{{ strings?.intention?.save }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>

<style>
.p3xr-diff-body { min-height: 200px; max-height: 60vh; overflow: auto; }
.p3xr-diff-side { display: grid; grid-template-columns: 1fr 1fr; }
.p3xr-diff-line { padding: 1px 8px; white-space: pre-wrap; word-break: break-all; font-family: 'Roboto Mono', monospace; font-size: 13px; }
.p3xr-diff-added { background-color: rgba(76,175,80,0.12); }
.p3xr-diff-removed { background-color: rgba(244,67,54,0.12); }
.p3xr-diff-unchanged { opacity: 0.6; }
.p3xr-diff-collapse { padding: 4px 8px; opacity: 0.4; font-style: italic; cursor: pointer; font-family: 'Roboto Mono', monospace; font-size: 13px; }
.p3xr-diff-collapse:hover { opacity: 0.7; }
.p3xr-diff-prefix { display: inline-block; width: 16px; font-weight: 700; user-select: none; }
.p3xr-diff-mode-toggle .v-btn { padding: 2px 12px !important; font-size: 12px !important; border-radius: 4px !important; text-transform: none !important; }
</style>
