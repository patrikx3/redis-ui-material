<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useCommonStore } from '../../stores/common'
import { useOverlayStore } from '../../stores/overlay'
import { request } from '../../stores/socket.service'
import { parseRedisVersion } from '../../../core/redis-version'

const i18n = useI18nStore()
const state = useRedisStateStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width: displayWidth } = useDisplay()
const isGtSm = computed(() => displayWidth.value >= 960)

const strings = computed(() => i18n.strings)
const s = computed(() => strings.value?.page?.search || {} as any)
const isReadonly = computed(() => state.connection?.readonly === true)

const indexes = ref<string[]>([])
const selectedIndex = ref('')
const query = ref('*')
const offset = ref(0)
const limit = 20
const total = ref(0)
const results = ref<any[]>([])
const indexInfo = ref<any>(null)
const searchDone = ref(false)
const aiLoading = ref(false)

// Hybrid search
const hybridMode = ref(false)
const vectorField = ref('')
const vectorValues = ref('')
const vectorCount = ref(10)

// Create index
const newIndexName = ref('')
const newIndexPrefix = ref('')
const newIndexFields = ref<{ name: string; type: string; sortable: boolean }[]>([{ name: '', type: 'TEXT', sortable: false }])

const pages = computed(() => Math.ceil(total.value / limit))
const currentPage = computed(() => Math.floor(offset.value / limit) + 1)

function getDocKeys(doc: any) { return Object.keys(doc).filter(k => k !== '_key') }

async function loadIndexes() {
    try {
        const resp = await request({ action: 'search/list', payload: {} })
        indexes.value = resp.data
        return resp.data as string[]
    } catch { return [] }
}

async function loadIndexInfo(idx?: string) {
    const index = idx || selectedIndex.value
    if (!index) return
    try {
        const resp = await request({ action: 'search/index-info', payload: { index } })
        indexInfo.value = resp.data
    } catch (e) { common.generalHandleError(e) }
}

async function doSearch(off?: number) {
    if (!selectedIndex.value || !query.value) return
    try {
        let resp: any
        if (hybridMode.value && vectorField.value && vectorValues.value) {
            const values = vectorValues.value.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v))
            resp = await request({
                action: 'search/hybrid',
                payload: { index: selectedIndex.value, query: query.value, vectorField: vectorField.value, vectorValues: values, count: vectorCount.value, offset: off ?? offset.value, limit },
            })
        } else {
            resp = await request({
                action: 'search/query',
                payload: { index: selectedIndex.value, query: query.value, offset: off ?? offset.value, limit },
            })
        }
        total.value = resp.data.total
        results.value = resp.data.docs
    } catch (e) {
        common.generalHandleError(e)
        results.value = []; total.value = 0
    } finally { searchDone.value = true }
}

async function handleAiQuery(prompt: string) {
    if (!prompt) return
    aiLoading.value = true
    try {
        const resp = await request({
            action: 'ai/redis-query',
            payload: { prompt, context: { indexes: indexes.value, schema: indexInfo.value } },
        })
        query.value = resp.command || '*'
        if (resp.explanation) common.toast(resp.explanation)
        offset.value = 0
        const sr = await request({ action: 'search/query', payload: { index: selectedIndex.value, query: resp.command || '*', offset: 0, limit } })
        total.value = sr.data.total; results.value = sr.data.docs; searchDone.value = true
        await loadIndexInfo()
    } catch (e) { common.generalHandleError(e) }
    finally { aiLoading.value = false }
}

async function handleSearchEnter() {
    const q = (query.value || '').trim()
    if (/^ai:\s*/i.test(q)) { await handleAiQuery(q.replace(/^ai:\s*/i, '').trim()); return }
    try {
        await Promise.all([doSearch(0), loadIndexInfo()])
    } catch {
        if (q.length > 2 && q !== '*' && /\s/.test(q)) {
            overlay.show()
            try { await handleAiQuery(q) } finally { overlay.hide() }
        }
    }
}

function pageAction(action: string) {
    let newOffset = offset.value
    switch (action) {
        case 'first': newOffset = 0; break
        case 'prev': newOffset = Math.max(0, offset.value - limit); break
        case 'next': newOffset = Math.min((pages.value - 1) * limit, offset.value + limit); break
        case 'last': newOffset = (pages.value - 1) * limit; break
    }
    offset.value = newOffset
    doSearch(newOffset)
}

async function dropIndex() {
    if (!selectedIndex.value) return
    try {
        await common.confirm({ message: strings.value?.confirm?.dropIndex || 'Are you sure to drop this index?' })
        await request({ action: 'search/index-drop', payload: { index: selectedIndex.value } })
        common.toast(strings.value?.status?.indexDropped || 'Index dropped')
        selectedIndex.value = ''; results.value = []; total.value = 0; searchDone.value = false; indexInfo.value = null
        await loadIndexes()
    } catch (e: any) { if (e !== undefined) common.generalHandleError(e) }
}

function addField() { newIndexFields.value.push({ name: '', type: 'TEXT', sortable: false }) }

async function confirmRemoveField(index: number) {
    try {
        await common.confirm({ message: (strings.value?.intention?.delete || 'Delete') + '?' })
        newIndexFields.value.splice(index, 1)
    } catch (e: any) { if (e !== undefined) common.generalHandleError(e) }
}

async function createIndex() {
    if (!newIndexName.value.trim()) return
    const schema = newIndexFields.value.filter(f => f.name.trim())
    if (schema.length === 0) return
    try {
        await request({
            action: 'search/index-create',
            payload: { name: newIndexName.value.trim(), prefix: newIndexPrefix.value.trim() || undefined, schema },
        })
        common.toast(strings.value?.status?.indexCreated || 'Index created')
        newIndexName.value = ''; newIndexPrefix.value = ''
        newIndexFields.value = [{ name: '', type: 'TEXT', sortable: false }]
        await loadIndexes()
    } catch (e) { common.generalHandleError(e) }
}

function onIndexChange(idx: string) {
    selectedIndex.value = idx
    offset.value = 0; indexInfo.value = null
    loadIndexInfo(idx)
}

// Init on connection change
watch(() => state.connection?.id, () => {
    selectedIndex.value = ''; results.value = []; total.value = 0
    searchDone.value = false; indexInfo.value = null
    loadIndexes().then(idxs => {
        if (idxs.length > 0) { selectedIndex.value = idxs[0]; loadIndexInfo(idxs[0]) }
    })
}, { immediate: true })

const supportsHybrid = computed(() => {
    const ver = state.info?.server?.redis_version
    return ver ? parseRedisVersion(ver).isAtLeast(8, 4) : false
})
</script>

<template>
    <div>
        <!-- Search Query -->
        <P3xrAccordion :title="s.title || 'Search'" accordion-key="search-query">
            <div style="padding: 16px;">
                <div v-if="indexes.length === 0" style="opacity: 0.5;">{{ s.noIndex || 'No indexes found' }}</div>
                <template v-if="indexes.length > 0">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <v-select v-model="selectedIndex" :items="indexes" :label="s.index || 'Index'"
                            density="compact" variant="outlined" hide-details @update:model-value="onIndexChange" />
                        <v-tooltip v-if="!isReadonly && selectedIndex" :text="s.dropIndex || 'Drop Index'" location="top">
                            <template #activator="{ props: tp }">
                                <v-btn v-bind="tp" color="error" variant="flat"
                                    style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;"
                                    @click="dropIndex">
                                    <v-icon size="small">mdi-delete</v-icon>
                                </v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                    <v-text-field v-model="query" :label="s.query || 'Query'" density="compact" variant="outlined"
                        hide-details :disabled="aiLoading" style="margin-top: 8px;"
                        @keydown.enter="offset = 0; handleSearchEnter()" />

                    <!-- Hybrid search (Redis 8.4+) -->
                    <template v-if="supportsHybrid">
                        <v-switch v-model="hybridMode" :label="s.hybridMode || 'Hybrid Search (FT.HYBRID)'"
                            color="primary" style="margin-top: 8px;" />
                        <div v-if="hybridMode" style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px;">
                            <v-text-field v-model="vectorField" :label="s.vectorField || 'Vector Field'" placeholder="embedding"
                                density="compact" variant="outlined" hide-details style="flex: 1; min-width: 150px;" />
                            <v-text-field v-model="vectorValues" :label="s.vectorValues || 'Vector Values'" placeholder="0.1, 0.2, 0.3, ..."
                                density="compact" variant="outlined" hide-details style="flex: 2; min-width: 200px;" />
                            <v-text-field v-model.number="vectorCount" label="Count" type="number"
                                density="compact" variant="outlined" hide-details style="width: 80px; flex: none;" />
                        </div>
                    </template>

                    <div style="margin-top: 8px; text-align: right;">
                        <v-btn v-if="isGtSm" color="primary" variant="flat" size="small" :disabled="aiLoading"
                            style="gap: 3px;" @click="offset = 0; handleSearchEnter()">
                            <v-icon size="small">mdi-magnify</v-icon>
                            <span>{{ aiLoading ? (strings?.label?.aiTranslating || 'Translating...') : (s.title || 'Search') }}</span>
                        </v-btn>
                        <v-tooltip v-else :text="s.title || 'Search'" location="top">
                            <template #activator="{ props: tp }">
                                <v-btn v-bind="tp" color="primary" variant="flat" :disabled="aiLoading"
                                    style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;"
                                    @click="offset = 0; handleSearchEnter()">
                                    <v-icon size="small">mdi-magnify</v-icon>
                                </v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </template>
            </div>
        </P3xrAccordion>

        <!-- Results - empty -->
        <template v-if="searchDone && total === 0">
            <div style="margin-top: 8px;" />
            <P3xrAccordion :title="`${s.results || 'Results'} (0)`" accordion-key="search-results">
                <div style="padding: 16px; opacity: 0.5;">{{ strings?.label?.noResults || 'No results' }}</div>
            </P3xrAccordion>
        </template>

        <!-- Results - with data -->
        <template v-if="results.length > 0 || total > 0">
            <div style="margin-top: 8px;" />
            <P3xrAccordion :title="`${s.results || 'Results'} (${total})`" accordion-key="search-results">
                <template v-if="pages > 1" #actions>
                    <P3xrButton icon="mdi-skip-previous" label="" color="inherit" @click.stop="pageAction('first')" />
                    <P3xrButton icon="mdi-chevron-left" label="" color="inherit" @click.stop="pageAction('prev')" />
                    <span style="font-size: 12px; opacity: 0.7;">{{ currentPage }} / {{ pages }}</span>
                    <P3xrButton icon="mdi-chevron-right" label="" color="inherit" @click.stop="pageAction('next')" />
                    <P3xrButton icon="mdi-skip-next" label="" color="inherit" @click.stop="pageAction('last')" />
                </template>
                <v-list density="compact" class="pa-0">
                    <template v-for="doc in results" :key="doc._key">
                        <v-list-item style="padding: 8px 16px;">
                            <div style="display: flex; width: 100%; align-items: center;">
                                <div style="flex: 1;">
                                    <kbd style="padding: 2px 6px; border-radius: 4px; font-size: 11px; background: rgba(128,128,128,0.1); font-family: 'Roboto Mono', monospace;">{{ doc._key }}</kbd>
                                </div>
                                <div style="font-family: 'Roboto Mono', monospace; font-size: 12px;">
                                    <template v-for="(field, i) in getDocKeys(doc)" :key="field">
                                        {{ field }}: {{ doc[field] }}<template v-if="i < getDocKeys(doc).length - 1"> &middot; </template>
                                    </template>
                                </div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Index Info -->
        <template v-if="selectedIndex && indexInfo">
            <div style="margin-top: 8px;" />
            <P3xrAccordion :title="`${s.indexInfo || 'Index Info'}: ${selectedIndex}`" accordion-key="search-index-info">
                <template v-if="!isReadonly" #actions>
                    <P3xrButton icon="mdi-delete" :label="s.dropIndex || 'Drop'" color="inherit" @click.stop="dropIndex" />
                </template>
                <v-list density="compact" class="pa-0">
                    <template v-for="key in getDocKeys(indexInfo)" :key="key">
                        <v-list-item style="padding: 8px 16px;">
                            <div style="display: flex; width: 100%;">
                                <div style="flex: 1;">{{ key }}</div>
                                <div style="font-family: 'Roboto Mono', monospace; font-size: 12px;">{{ JSON.stringify(indexInfo[key]) }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </v-list>
            </P3xrAccordion>
        </template>

        <!-- Create Index -->
        <template v-if="!isReadonly">
            <div style="margin-top: 8px;" />
            <P3xrAccordion :title="s.createIndex || 'Create Index'" accordion-key="search-create-index">
                <div style="padding: 16px;">
                    <v-text-field v-model="newIndexName" :label="s.indexName || 'Index Name'"
                        density="compact" variant="outlined" hide-details />
                    <v-text-field v-model="newIndexPrefix" :label="s.prefix || 'Key Prefix (optional)'" placeholder="e.g. doc:"
                        density="compact" variant="outlined" hide-details style="margin-top: 8px;" />

                    <div style="display: flex; align-items: center; gap: 8px; margin: 8px 0;">
                        <strong>Schema</strong>
                        <v-tooltip text="Add" location="top">
                            <template #activator="{ props: tp }">
                                <v-btn v-bind="tp" color="primary" variant="flat"
                                    style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;"
                                    @click="addField">
                                    <v-icon size="small">mdi-plus</v-icon>
                                </v-btn>
                            </template>
                        </v-tooltip>
                    </div>

                    <div v-for="(field, i) in newIndexFields" :key="i" style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px; flex-wrap: wrap;">
                        <v-text-field v-model="field.name" :label="s.fieldName || 'Field Name'"
                            density="compact" variant="outlined" hide-details style="flex: 1; min-width: 120px;" />
                        <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
                            <v-select v-model="field.type" :items="['TEXT', 'NUMERIC', 'TAG', 'GEO', 'VECTOR']"
                                :label="strings?.label?.type || 'Type'"
                                density="compact" variant="outlined" hide-details style="width: 130px;" />
                            <v-tooltip :text="strings?.intention?.delete || 'Delete'" location="top">
                                <template #activator="{ props: tp }">
                                    <v-btn v-bind="tp" color="error" variant="flat" :disabled="newIndexFields.length <= 1"
                                        style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;"
                                        @click="confirmRemoveField(i)">
                                        <v-icon size="small">mdi-minus</v-icon>
                                    </v-btn>
                                </template>
                            </v-tooltip>
                        </div>
                    </div>

                    <div style="margin-top: 8px; text-align: right;">
                        <v-btn v-if="isGtSm" color="secondary" variant="flat" size="small" :disabled="!newIndexName.trim()"
                            style="gap: 3px;" @click="createIndex">
                            <v-icon size="small">mdi-plus</v-icon>
                            <span>{{ s.createIndex || 'Create Index' }}</span>
                        </v-btn>
                        <v-tooltip v-else :text="s.createIndex || 'Create Index'" location="top">
                            <template #activator="{ props: tp }">
                                <v-btn v-bind="tp" color="secondary" variant="flat" :disabled="!newIndexName.trim()"
                                    style="min-width: 40px; width: 40px; height: 40px; padding: 0; border-radius: 4px;"
                                    @click="createIndex">
                                    <v-icon size="small">mdi-plus</v-icon>
                                </v-btn>
                            </template>
                        </v-tooltip>
                    </div>
                </div>
            </P3xrAccordion>
        </template>

        <div style="height: 64px;" />
    </div>
</template>
