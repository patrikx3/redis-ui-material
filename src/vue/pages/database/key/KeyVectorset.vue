<script setup lang="ts">
/**
 * Vectorset key type renderer — exact port of React KeyVectorset.tsx.
 * Info display, element list with paging, similarity search (by element / by vector).
 */
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import P3xrAccordion from '../../../components/P3xrAccordion.vue'
import P3xrButton from '../../../components/P3xrButton.vue'
import KeyPagerInline from './KeyPagerInline.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useCommonStore } from '../../../stores/common'
import { request } from '../../../stores/socket.service'
import { type Paging, createPaging, rePaging, str } from './key-type-base'
import { parseRedisVersion } from '../../../../core/redis-version'

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()

const strings = computed(() => useI18nStore().strings)
const state = useRedisStateStore()
const isReadonly = computed(() => state.connection?.readonly === true)
const common = useCommonStore()

const elements = ref<any[]>([])
const paging = ref<Paging>(createPaging(0))
const simResults = ref<Array<{ element: string; score: number }>>([])
const autoRefresh = ref(false)
const elementInput = ref('')
const vectorInput = ref('')
const simCountInput = ref(10)
const simFilterInput = ref('')
const simSearchInput = ref('')
const showAddForm = ref(false)
let autoRefreshTimer: any = null

const supportsFilter = computed(() => parseRedisVersion(state.info?.server?.redis_version).isAtLeast(8, 2))

const infoItems = computed(() => {
    try {
        let info: any
        if (typeof props.value === 'object' && props.value !== null && !ArrayBuffer.isView(props.value)) info = props.value
        else if (typeof props.value === 'string') info = JSON.parse(props.value)
        else if (ArrayBuffer.isView(props.value)) info = JSON.parse(new TextDecoder().decode(props.value))
        if (info && typeof info === 'object') return Object.entries(info).map(([key, value]) => ({ key, value }))
    } catch {}
    return []
})

onMounted(() => loadElements())
onUnmounted(() => clearInterval(autoRefreshTimer))

watch(autoRefresh, (v) => {
    clearInterval(autoRefreshTimer)
    if (v) autoRefreshTimer = setInterval(() => { emit('refresh'); loadElements() }, 10000)
})

async function loadElements() {
    try {
        const resp: any = await request({ action: 'vectorset/elements', payload: { key: props.keyName } })
        elements.value = resp.elements || []
        paging.value = rePaging(paging.value, elements.value.length)
    } catch { elements.value = [] }
}

function updatePaging(p: Paging) { paging.value = p }

async function searchByElement() {
    if (!simSearchInput.value.trim()) return
    try {
        const resp: any = await request({ action: 'vectorset/sim', payload: { key: props.keyName, mode: 'element', element: simSearchInput.value.trim(), count: simCountInput.value, filter: simFilterInput.value.trim() || undefined } })
        simResults.value = resp.results || []
        common.toast(str(strings.value?.page?.key?.vectorset?.searchComplete))
    } catch (e: any) { common.toast(e.message) }
}

async function searchByVector() {
    if (!simSearchInput.value.trim()) return
    try {
        const values = simSearchInput.value.split(',').map(Number)
        const resp: any = await request({ action: 'vectorset/sim', payload: { key: props.keyName, mode: 'vector', values, count: simCountInput.value, filter: simFilterInput.value.trim() || undefined } })
        simResults.value = resp.results || []
        common.toast(str(strings.value?.page?.key?.vectorset?.searchComplete))
    } catch (e: any) { common.toast(e.message) }
}

async function searchByElementDirect(element: string) {
    try {
        const resp: any = await request({ action: 'vectorset/sim', payload: { key: props.keyName, mode: 'element', element, count: simCountInput.value } })
        simResults.value = resp.results || []
        common.toast(str(strings.value?.page?.key?.vectorset?.searchComplete))
    } catch (e: any) { common.toast(e.message) }
}

async function getAttributes(element: string) {
    try {
        const resp: any = await request({ action: 'vectorset/getattr', payload: { key: props.keyName, element } })
        const attrs = resp.attributes
        common.toast(attrs && Object.keys(attrs).length > 0
            ? `${element}: ${JSON.stringify(attrs)}`
            : `${element}: ${str(strings.value?.page?.key?.vectorset?.noAttributes)}`)
    } catch (e: any) { if (e?.message) common.toast(e.message) }
}

async function addElement() {
    if (!elementInput.value.trim() || !vectorInput.value.trim()) return
    try {
        await request({ action: 'vectorset/add', payload: { key: props.keyName, element: elementInput.value.trim(), values: vectorInput.value.split(',').map(Number) } })
        common.toast(str(strings.value?.page?.key?.vectorset?.addedSuccessfully))
        elementInput.value = ''; vectorInput.value = ''
        emit('refresh'); loadElements()
    } catch (e: any) { common.toast(e.message) }
}

async function removeElement(element: string) {
    try {
        await common.confirm({ message: str(strings.value?.confirm?.delete) })
        await request({ action: 'vectorset/remove', payload: { key: props.keyName, element } })
        common.toast(str(strings.value?.page?.key?.vectorset?.deletedSuccessfully))
        emit('refresh'); loadElements()
    } catch (e: any) { if (e?.message) common.toast(e.message) }
}
</script>

<template>
    <div class="p3xr-key-type-content">
        <!-- INFO -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.vectorset?.info)" accordion-key="vs-info">
            <template #actions>
                <P3xrButton :icon="autoRefresh ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'" :label="str(strings?.label?.autoRefresh)" :breakpoint="1280" color="inherit" @click.stop="autoRefresh = !autoRefresh" />
                <P3xrButton v-if="!autoRefresh" icon="mdi-refresh" :label="str(strings?.intention?.refresh)" :breakpoint="1280" color="inherit" @click.stop="emit('refresh'); loadElements()" />
            </template>
            <v-list density="compact">
                <template v-for="(item, i) in infoItems" :key="item.key">
                    <v-list-item>
                        <div style="display: flex; width: 100%;">
                            <span style="flex: 1; font-weight: 500;">{{ item.key }}</span>
                            <span style="word-break: break-all;">{{ String(item.value) }}</span>
                        </div>
                    </v-list-item>
                    <v-divider v-if="i < infoItems.length - 1" />
                </template>
            </v-list>
        </P3xrAccordion>

        <!-- ELEMENTS -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.vectorset?.elements) + ` (${elements.length})`" accordion-key="vs-elements">
            <KeyPagerInline :paging="paging" @page-changed="updatePaging" />
            <div class="p3xr-key-table-header">
                <span style="flex: 50%;">{{ str(strings?.page?.key?.vectorset?.element) }}</span>
                <span style="flex: 20%;">{{ str(strings?.page?.key?.vectorset?.score) }}</span>
                <span style="flex: 30%; text-align: right; display: flex; justify-content: flex-end; align-items: center;">
                    <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.add)" location="top">
                        <template #activator="{ props: tp }"><v-icon v-bind="tp" style="cursor:pointer;color:inherit;" @click="showAddForm = !showAddForm">mdi-plus</v-icon></template>
                    </v-tooltip>
                </span>
            </div>
            <div v-for="(elem, i) in elements.slice(paging.startIndex, paging.startIndex + paging.pageCount)" :key="elem.element"
                class="p3xr-vs-row" :class="{ 'p3xr-vs-odd': i % 2 === 0 }">
                <span style="flex: 50%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">{{ elem.element }}</span>
                <span style="flex: 20%; font-family: 'Roboto Mono', monospace;">{{ elem.score?.toFixed(4) }}</span>
                <span style="flex: 30%; text-align: right; white-space: nowrap;">
                    <v-tooltip :text="'Find similar'" location="top"><template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="simSearchInput = elem.element; searchByElementDirect(elem.element)">mdi-magnify</v-icon>
                    </template></v-tooltip>
                    <v-tooltip :text="str(strings?.page?.key?.vectorset?.attributes)" location="top"><template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="getAttributes(elem.element)">mdi-information</v-icon>
                    </template></v-tooltip>
                    <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.delete)" location="top"><template #activator="{ props: tp }">
                        <v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-error));" @click="removeElement(elem.element)">mdi-delete</v-icon>
                    </template></v-tooltip>
                </span>
            </div>
            <!-- Add form -->
            <div v-if="!isReadonly && showAddForm" style="padding: 16px;">
                <div class="p3xr-vs-controls">
                    <v-text-field density="compact" variant="outlined" hide-details style="flex: 1; min-width: 200px;"
                        :label="str(strings?.page?.key?.vectorset?.elementName)"
                        v-model="elementInput" @keyup.enter="addElement()" />
                    <v-text-field density="compact" variant="outlined" hide-details style="flex: 1; min-width: 200px;"
                        :label="str(strings?.page?.key?.vectorset?.vectorValues)" placeholder="0.1, 0.2, 0.3"
                        v-model="vectorInput" @keyup.enter="addElement()" />
                    <P3xrButton icon="mdi-plus" :label="str(strings?.intention?.add)" raised color="primary" @click="addElement()" />
                </div>
            </div>
        </P3xrAccordion>

        <!-- SIMILARITY SEARCH -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.vectorset?.similaritySearch)" accordion-key="vs-sim">
            <div style="padding: 16px;">
                <div class="p3xr-vs-controls">
                    <v-text-field density="compact" variant="outlined" hide-details style="flex: 1; min-width: 200px;"
                        :label="str(strings?.page?.key?.vectorset?.searchTerm)"
                        v-model="simSearchInput" @keyup.enter="searchByElement()" />
                    <v-text-field density="compact" variant="outlined" hide-details type="number" style="width: 80px; max-width: 80px;"
                        :label="str(strings?.page?.key?.vectorset?.count)"
                        v-model.number="simCountInput" />
                    <v-text-field v-if="supportsFilter" density="compact" variant="outlined" hide-details style="flex: 1; min-width: 150px;"
                        :label="str(strings?.page?.key?.vectorset?.filter)" placeholder="attr == 'value'"
                        v-model="simFilterInput" @keyup.enter="searchByElement()" />
                    <P3xrButton icon="mdi-account" :label="str(strings?.page?.key?.vectorset?.byElement)" raised color="primary" @click="searchByElement()" />
                    <P3xrButton icon="mdi-code-array" :label="str(strings?.page?.key?.vectorset?.byVector)" raised color="primary" @click="searchByVector()" />
                </div>
                <template v-if="simResults.length > 0">
                    <v-divider class="my-2" />
                    <v-list density="compact">
                        <template v-for="(entry, i) in simResults" :key="i">
                            <v-list-item>
                                <div style="display: flex; width: 100%;">
                                    <span style="flex: 1; font-weight: 500;">{{ entry.element }}</span>
                                    <span>{{ entry.score }}</span>
                                </div>
                            </v-list-item>
                            <v-divider v-if="i < simResults.length - 1" />
                        </template>
                    </v-list>
                </template>
            </div>
        </P3xrAccordion>
    </div>
</template>

<style scoped>
.p3xr-key-type-content { padding: 8px 16px 24px; }
.p3xr-vs-controls { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 12px; padding: 8px 0; }
.p3xr-key-table-header {
    display: flex; align-items: center; gap: 8px; padding: 8px 16px; font-weight: bold;
    background-color: rgb(var(--v-theme-primary)); color: rgb(var(--v-theme-on-primary));
    border-bottom: 2px solid rgba(var(--v-theme-on-surface), 0.05);
}
.p3xr-vs-row {
    display: flex; align-items: center; gap: 8px; padding: 6px 16px;
    border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.05);
}
.p3xr-vs-row:hover { background-color: rgba(var(--v-theme-on-surface), 0.1) !important; }
.p3xr-vs-odd { background-color: rgba(var(--v-theme-on-surface), 0.04); }
</style>
