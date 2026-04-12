<script setup lang="ts">
/**
 * JsonTreeNode — recursive JSON tree node for JsonViewDialog.
 * Matches React TreeNode render: key:value display, expand/collapse, syntax colors.
 */
import { computed } from 'vue'

export interface JsonNode {
    key: string
    value: any
    type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null'
    children?: JsonNode[]
    childCount?: number
}

const props = defineProps<{
    node: JsonNode
    level: number
    expandedKeys: Set<string>
    isDark: boolean
}>()

const emit = defineEmits<{
    toggle: [path: string]
}>()

const path = computed(() => `${props.level}-${props.node.key}`)
const isExpandable = computed(() => props.node.type === 'object' || props.node.type === 'array')
const isExpanded = computed(() => props.expandedKeys.has(path.value))

function formatDisplay(): string {
    if (props.node.type === 'null') return 'null'
    if (props.node.type === 'string') return `"${props.node.value}"`
    return String(props.node.value)
}

function valueColor(): string | undefined {
    const t = props.node.type
    if (t === 'object' || t === 'array') return undefined
    if (t === 'string') return 'rgb(var(--v-theme-secondary))'
    if (t === 'number') return 'rgb(var(--v-theme-primary))'
    if (t === 'boolean') return 'rgb(var(--v-theme-error))'
    if (t === 'null') return props.isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
    return undefined
}

function onToggle(p: string) {
    emit('toggle', p)
}
</script>

<template>
    <!-- Current node line -->
    <div class="p3xr-json-node" :style="{ paddingLeft: level * 20 + 'px' }">
        <!-- Expand/collapse toggle or spacer -->
        <span v-if="isExpandable" class="p3xr-json-toggle" @click="onToggle(path)">
            <v-icon :size="18">{{ isExpanded ? 'mdi-chevron-down' : 'mdi-chevron-right' }}</v-icon>
        </span>
        <span v-else class="p3xr-json-spacer" />

        <!-- Key + value -->
        <span class="p3xr-json-kv">
            <span class="p3xr-json-key-wrap">
                <span style="font-weight: bold;">{{ node.key }}</span><span style="opacity: 0.6;">:</span>
            </span>

            <!-- Expandable: show brackets when collapsed -->
            <template v-if="isExpandable">
                <template v-if="!isExpanded">
                    <span style="opacity: 0.5;">{{ node.type === 'array' ? '[' : '{' }}</span>
                    <span style="opacity: 0.4;">...</span>
                    <span style="opacity: 0.5;">{{ node.type === 'array' ? ']' : '}' }}</span>
                    <span style="opacity: 0.4; font-size: 11px; margin-left: 4px;">({{ node.childCount }})</span>
                </template>
            </template>

            <!-- Leaf value -->
            <span v-else :style="{ wordBreak: 'break-word', minWidth: 0, color: valueColor(), fontStyle: node.type === 'null' ? 'italic' : 'normal' }">
                {{ formatDisplay() }}
            </span>
        </span>
    </div>

    <!-- Recursive children -->
    <template v-if="isExpandable && isExpanded && node.children">
        <JsonTreeNode v-for="(child, i) in node.children" :key="`${child.key}-${i}`"
            :node="child" :level="level + 1" :expanded-keys="expandedKeys" :is-dark="isDark"
            @toggle="onToggle" />
    </template>
</template>

<style scoped>
.p3xr-json-node {
    display: flex;
    align-items: flex-start;
    min-height: 24px;
    line-height: 1.6;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
}
.p3xr-json-toggle {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex-shrink: 0;
    opacity: 0.6;
}
.p3xr-json-spacer {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}
.p3xr-json-kv {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    flex: 1;
    min-width: 0;
    flex-wrap: nowrap;
}
.p3xr-json-key-wrap {
    flex-shrink: 0;
    white-space: nowrap;
}
</style>
