<script setup lang="ts">
/**
 * JsonViewDialog — exact port of React JsonViewDialog.tsx
 * Interactive JSON tree viewer with expand/collapse and syntax colors.
 */
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../stores/i18n'
import { useThemeStore } from '../stores/theme'
import P3xrDialog from '../components/P3xrDialog.vue'
import JsonTreeNode, { type JsonNode } from '../components/JsonTreeNode.vue'

function jsonToNode(key: string, value: any): JsonNode {
    if (value === null) return { key, value: null, type: 'null' }
    if (Array.isArray(value)) {
        const children = value.map((item, i) => jsonToNode(String(i), item))
        return { key, value, type: 'array', children, childCount: children.length }
    }
    if (typeof value === 'object') {
        const children = Object.keys(value).map(k => jsonToNode(k, value[k]))
        return { key, value, type: 'object', children, childCount: children.length }
    }
    return { key, value, type: typeof value as any }
}

const props = defineProps<{
    open: boolean
    value: string
}>()

const emit = defineEmits<{ close: [] }>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const { themeKey } = storeToRefs(useThemeStore())
const isDark = computed(() => ['dark', 'darkNeu', 'darkoBluo', 'matrix'].includes(themeKey.value))

const expandedKeys = ref<Set<string>>(new Set())

const rootLabel = computed(() => strings.value?.label?.tree ?? 'root')

const parseResult = computed(() => {
    try {
        const obj = JSON.parse(props.value)
        return { isJson: true, tree: jsonToNode(rootLabel.value, obj) }
    } catch {
        return { isJson: false, tree: null }
    }
})

// Reset: expand root (level 0) on open — matches Angular expanded=true (first level)
watch(() => props.open, (v) => {
    if (v && parseResult.value.isJson) {
        expandedKeys.value = new Set([`0-${rootLabel.value}`])
    }
})

function toggleExpand(path: string) {
    const s = new Set(expandedKeys.value)
    s.has(path) ? s.delete(path) : s.add(path)
    expandedKeys.value = s
}

function expandAll() {
    if (!parseResult.value.tree) return
    const keys = new Set<string>()
    const collect = (node: JsonNode, level: number) => {
        const path = `${level}-${node.key}`
        if (node.type === 'object' || node.type === 'array') {
            keys.add(path)
            node.children?.forEach(c => collect(c, level + 1))
        }
    }
    collect(parseResult.value.tree, 0)
    expandedKeys.value = keys
}

function collapseAll() {
    expandedKeys.value = new Set([`0-${rootLabel.value}`])
}
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.intention?.jsonViewShow" @close="emit('close')">
        <template #headerActions>
            <v-tooltip :text="strings?.page?.treeControls?.expandAll" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" color="inherit" size="small" @click="expandAll">
                        <v-icon size="small">mdi-chevron-down</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
            <v-tooltip :text="strings?.page?.treeControls?.collapseAll" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" icon variant="text" color="inherit" size="small" @click="collapseAll">
                        <v-icon size="small">mdi-chevron-up</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <div v-if="parseResult.isJson && parseResult.tree" style="min-height: 200px; max-height: 70vh; overflow: auto;">
            <JsonTreeNode :node="parseResult.tree" :level="0" :expanded-keys="expandedKeys" :is-dark="isDark"
                @toggle="toggleExpand" />
        </div>
        <div v-else>{{ strings?.label?.jsonViewNotParsable }}</div>

        <template #actions>
            <v-btn variant="flat" color="secondary" size="small" @click="emit('close')">
                <v-icon class="mr-1">mdi-close</v-icon>
                <span>{{ strings?.intention?.close }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
