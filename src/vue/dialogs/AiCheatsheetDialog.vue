<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useRedisStateStore } from '../stores/redis-state'
import P3xrDialog from '../components/P3xrDialog.vue'

interface CheatGroup {
    key: string
    name: string
    description?: string
    prompts: string[]
}

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{
    (e: 'close'): void
    (e: 'pick', prompt: string): void
}>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const state = useRedisStateStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const filter = ref('')

const moduleNames = computed(() => (state.modules || []).map((m: any) => (m?.name || '').toLowerCase()))
const version = computed(() => {
    const v = state.info?.server?.redis_version || ''
    const match = /^(\d+)/.exec(v)
    return match ? parseInt(match[1], 10) : 0
})
const isCluster = computed(() => state.info?.server?.redis_mode === 'cluster')

const visibleGroups = computed<CheatGroup[]>(() => {
    const cs = strings.value?.label?.cheatsheet?.groups
    if (!cs) return []
    const result: CheatGroup[] = []
    const push = (key: string, g: any) => {
        if (!g || !Array.isArray(g.prompts) || g.prompts.length === 0) return
        result.push({ key, name: g.name, description: g.description, prompts: g.prompts })
    }
    push('diagnostics', cs.diagnostics)
    push('keys', cs.keys)
    push('dataTypes', cs.dataTypes)
    if (moduleNames.value.includes('rejson') || moduleNames.value.includes('rejson-rl') || moduleNames.value.includes('json')) push('json', cs.json)
    if (moduleNames.value.includes('search') || moduleNames.value.includes('searchlight')) push('search', cs.search)
    if (moduleNames.value.includes('timeseries')) push('timeseries', cs.timeseries)
    if (moduleNames.value.includes('bf')) push('bloom', cs.bloom)
    if (version.value >= 8) {
        push('vectorSet', cs.vectorSet)
        push('redis8', cs.redis8)
    }
    push('scripting', cs.scripting)
    if (isCluster.value) push('cluster', cs.cluster)
    if (version.value >= 6) push('acl', cs.acl)
    push('qna', cs.qna)
    push('translate', cs.translate)
    return result
})

function filterPrompts(prompts: string[]): string[] {
    const q = filter.value.trim().toLowerCase()
    if (!q) return prompts
    return prompts.filter(p => p.toLowerCase().includes(q))
}

const emptyResults = computed(() => visibleGroups.value.every(g => filterPrompts(g.prompts).length === 0))

function pick(p: string) {
    emit('pick', 'ai: ' + p)
    emit('close')
}

function openOfficialDocs() {
    window.open('https://redis.io/docs/latest/commands/', '_blank')
}
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.label?.cheatsheet?.title" :content-padding="false" @close="emit('close')">
        <!-- Sticky: subtitle + tip + search stay above the scrolling prompts -->
        <div class="p3xr-cheatsheet-sticky">
            <div v-if="strings?.label?.cheatsheet?.subtitle" class="p3xr-cheatsheet-sub">
                {{ strings.label.cheatsheet.subtitle }}
            </div>
            <div v-if="strings?.label?.cheatsheet?.footerHint" class="p3xr-cheatsheet-tip">
                {{ strings.label.cheatsheet.footerHint }}
            </div>
            <v-text-field
                v-model="filter"
                :placeholder="strings?.label?.cheatsheet?.searchPlaceholder"
                density="compact"
                variant="outlined"
                hide-details
                prepend-inner-icon="mdi-magnify"
                class="p3xr-cheatsheet-search"
                @keydown.stop
            />
        </div>

        <div class="p3xr-cheatsheet-groups">
            <template v-for="g in visibleGroups" :key="g.key">
                <div v-if="filterPrompts(g.prompts).length > 0" class="p3xr-cheatsheet-group">
                    <div class="p3xr-cheatsheet-group-name">{{ g.name }}</div>
                    <div v-if="g.description" class="p3xr-cheatsheet-group-desc">{{ g.description }}</div>
                    <div class="p3xr-cheatsheet-prompts">
                        <button v-for="(p, i) in filterPrompts(g.prompts)"
                                :key="i"
                                type="button"
                                class="p3xr-cheatsheet-prompt"
                                @click="pick(p)">
                            {{ p }}
                        </button>
                    </div>
                </div>
            </template>
            <div v-if="emptyResults" class="p3xr-cheatsheet-empty">
                {{ strings?.label?.cheatsheet?.empty }}
            </div>
        </div>

        <template #actions>
            <div style="flex: 1 1 auto;"></div>
            <v-btn variant="flat" color="primary" @click="openOfficialDocs">
                <v-icon class="mr-1">mdi-book-open-page-variant</v-icon>
                <span>{{ strings?.label?.cheatsheet?.openOfficialDocs }}</span>
            </v-btn>
            <v-btn variant="flat" color="primary" @click="emit('close')">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close</v-icon>
                <span v-if="isWide">{{ strings?.intention?.close }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.close }}</v-tooltip>
            </v-btn>
        </template>
    </P3xrDialog>
</template>

<style scoped>
/* P3xrDialog is rendered with content-padding=false, so we own all the padding
   inside. Sticky sits at the true top of the scroll container — no content
   shows above it. */
.p3xr-cheatsheet-sticky {
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: rgb(var(--v-theme-surface));
    border-bottom: 1px solid rgba(127, 127, 127, 0.2);
    padding: 12px 16px;
}
.p3xr-cheatsheet-sub,
.p3xr-cheatsheet-tip {
    font-size: 13px;
    opacity: 0.8;
    line-height: 1.4;
    padding-bottom: 4px;
}
.p3xr-cheatsheet-search {
    margin: 0;
    padding: 4px 0 0 0;
}
/* Kill Vuetify's default form-field bottom spacing so the search sits flush. */
.p3xr-cheatsheet-search :deep(.v-input__details) {
    display: none !important;
}
.p3xr-cheatsheet-search :deep(.v-field) {
    margin-bottom: 0 !important;
}
.p3xr-cheatsheet-groups {
    padding: 12px 16px;
}
.p3xr-cheatsheet-group {
    margin-bottom: 18px;
}
.p3xr-cheatsheet-group-name {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 6px;
    margin-bottom: 4px;
    opacity: 0.85;
}
.p3xr-cheatsheet-group-desc {
    font-size: 12px;
    opacity: 0.65;
    margin-bottom: 8px;
}
.p3xr-cheatsheet-prompts {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.p3xr-cheatsheet-prompt {
    display: block;
    width: 100%;
    text-align: left;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    line-height: 1.5;
    padding: 8px 12px;
    border: 1px solid rgba(127, 127, 127, 0.3);
    border-radius: 4px;
    background: transparent;
    color: inherit;
    cursor: pointer;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: anywhere;
    transition: background 0.1s ease, border-color 0.1s ease;
}
.p3xr-cheatsheet-prompt:hover {
    background: rgba(127, 127, 127, 0.12);
    border-color: rgb(var(--v-theme-primary));
}
.p3xr-cheatsheet-prompt:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: -1px;
}
.p3xr-cheatsheet-empty {
    padding: 24px;
    text-align: center;
    opacity: 0.6;
    font-size: 13px;
}
</style>
