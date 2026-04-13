<script setup lang="ts">
/**
 * Probabilistic key type renderer — exact port of React KeyProbabilistic.tsx.
 * Bloom, Cuckoo, TopK, CMS, TDigest — info display + type-specific actions.
 */
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'
import P3xrAccordion from '../../../components/P3xrAccordion.vue'
import P3xrButton from '../../../components/P3xrButton.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useCommonStore } from '../../../stores/common'
import { request } from '../../../stores/socket.service'
import { str } from './key-type-base'

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()

const strings = computed(() => useI18nStore().strings)
const isReadonly = computed(() => useRedisStateStore().connection?.readonly === true)
const common = useCommonStore()

const type = computed(() => props.response?.type || '')

const itemInput = ref('')
const incrementInput = ref(1)
const quantileInput = ref(0.5)
const topkItems = ref<Array<{ item: string; count: number }>>([])
const autoRefresh = ref(false)
let autoRefreshTimer: any = null

const infoItems = computed(() => {
    try {
        let info: any
        if (typeof props.value === 'object' && props.value !== null && !ArrayBuffer.isView(props.value)) {
            info = props.value
        } else if (typeof props.value === 'string') {
            info = JSON.parse(props.value)
        } else if (ArrayBuffer.isView(props.value)) {
            info = JSON.parse(new TextDecoder().decode(props.value))
        }
        if (info && typeof info === 'object') {
            return Object.entries(info).map(([key, value]) => ({ key, value }))
        }
    } catch {}
    return []
})

onMounted(() => { if (type.value === 'topk') loadTopkList() })
onUnmounted(() => clearInterval(autoRefreshTimer))

// Reload TopK when value changes (matches React useEffect [type] dep)
watch(() => props.value, () => { if (type.value === 'topk') loadTopkList() })

watch(autoRefresh, (v) => {
    clearInterval(autoRefreshTimer)
    if (v) autoRefreshTimer = setInterval(() => { emit('refresh'); if (type.value === 'topk') loadTopkList() }, 10000)
})

async function addItem() {
    if (!itemInput.value.trim()) return
    try {
        await request({ action: 'probabilistic/add', payload: { key: props.keyName, type: type.value, item: itemInput.value.trim(), increment: incrementInput.value } })
        common.toast(str(strings.value?.page?.key?.probabilistic?.addedSuccessfully))
        itemInput.value = ''
        emit('refresh')
        if (type.value === 'topk') loadTopkList()
    } catch (e: any) { common.toast(e.message) }
}

async function checkItem() {
    if (!itemInput.value.trim()) return
    try {
        const resp: any = await request({ action: 'probabilistic/check', payload: { key: props.keyName, type: type.value, item: itemInput.value.trim() } })
        const exists = resp.result === 1
        common.toast(`"${itemInput.value}" — ${exists ? str(strings.value?.page?.key?.probabilistic?.exists) : str(strings.value?.page?.key?.probabilistic?.doesNotExist)}`)
    } catch (e: any) { common.toast(e.message) }
}

async function deleteItem() {
    if (!itemInput.value.trim()) return
    try {
        await common.confirm({ message: str(strings.value?.confirm?.delete) })
        await request({ action: 'probabilistic/delete', payload: { key: props.keyName, type: type.value, item: itemInput.value.trim() } })
        common.toast(str(strings.value?.page?.key?.probabilistic?.deletedSuccessfully))
        itemInput.value = ''
        emit('refresh')
    } catch (e: any) { if (e?.message) common.toast(e.message) }
}

async function queryItem() {
    if (!itemInput.value.trim()) return
    try {
        const resp: any = await request({ action: 'probabilistic/check', payload: { key: props.keyName, type: type.value, item: itemInput.value.trim() } })
        const count = Array.isArray(resp.result) ? resp.result[0] : resp.result
        common.toast(`"${itemInput.value}" — ${str(strings.value?.page?.key?.probabilistic?.topkCount)}: ${count}`)
    } catch (e: any) { common.toast(e.message) }
}

async function queryQuantile() {
    try {
        const resp: any = await request({ action: 'probabilistic/check', payload: { key: props.keyName, type: type.value, quantile: quantileInput.value } })
        const result = Array.isArray(resp.result) ? resp.result[0] : resp.result
        common.toast(`${str(strings.value?.page?.key?.probabilistic?.quantile)} ${quantileInput.value} = ${result}`)
    } catch (e: any) { common.toast(e.message) }
}

async function resetTdigest() {
    try {
        await common.confirm({ message: str(strings.value?.page?.key?.probabilistic?.resetConfirm) })
        await request({ action: 'probabilistic/delete', payload: { key: props.keyName, type: 'tdigest' } })
        common.toast('Reset')
        emit('refresh')
    } catch (e: any) { if (e?.message) common.toast(e.message) }
}

async function loadTopkList() {
    try {
        const resp: any = await request({ action: 'probabilistic/check', payload: { key: props.keyName, type: 'topk' } })
        topkItems.value = resp.result || []
    } catch { topkItems.value = [] }
}
</script>

<template>
    <div class="p3xr-key-type-content">
        <!-- INFO -->
        <br />
        <P3xrAccordion :title="str(strings?.page?.key?.probabilistic?.info)" accordion-key="prob-info">
            <template #actions>
                <P3xrButton :icon="autoRefresh ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'" :label="str(strings?.label?.autoRefresh)" :breakpoint="1280" color="inherit" @click.stop="autoRefresh = !autoRefresh" />
                <P3xrButton v-if="!autoRefresh" icon="mdi-refresh" :label="str(strings?.intention?.refresh)" :breakpoint="1280" color="inherit" @click.stop="emit('refresh'); if (type === 'topk') loadTopkList()" />
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

        <!-- ACTIONS -->
        <br />
        <P3xrAccordion :title="type === 'topk' ? str(strings?.page?.key?.probabilistic?.topkList) : str(strings?.page?.key?.probabilistic?.addItem)" accordion-key="prob-actions">
            <div style="padding: 16px;">
                <div class="p3xr-prob-controls">
                    <v-text-field v-if="type === 'tdigest'" density="compact" variant="outlined" hide-details type="number"
                        class="p3xr-ts-field" :label="str(strings?.form?.key?.field?.value)"
                        v-model="itemInput" @keyup.enter="addItem()" />
                    <v-text-field v-else density="compact" variant="outlined" hide-details
                        style="flex: 1; min-width: 200px;" :label="str(strings?.page?.key?.probabilistic?.item)"
                        v-model="itemInput" @keyup.enter="addItem()" />

                    <v-text-field v-if="type === 'cms'" density="compact" variant="outlined" hide-details type="number"
                        style="max-width: 120px;" :label="str(strings?.form?.key?.field?.increment)"
                        v-model.number="incrementInput" />

                    <v-text-field v-if="type === 'tdigest'" density="compact" variant="outlined" hide-details type="number" step="0.1"
                        style="max-width: 120px;" :label="str(strings?.page?.key?.probabilistic?.quantile)"
                        v-model.number="quantileInput" @keyup.enter="queryQuantile()" />

                    <P3xrButton v-if="!isReadonly" icon="mdi-plus" :label="str(strings?.intention?.add)" raised color="primary" @click="addItem()" />
                    <P3xrButton v-if="type === 'bloom' || type === 'cuckoo'" icon="mdi-magnify" :label="str(strings?.page?.key?.probabilistic?.checkItem)" raised color="primary" @click="checkItem()" />
                    <P3xrButton v-if="type === 'cuckoo' && !isReadonly" icon="mdi-delete" :label="str(strings?.intention?.delete)" raised color="primary" @click="deleteItem()" />
                    <P3xrButton v-if="type === 'cms'" icon="mdi-magnify" :label="str(strings?.page?.key?.probabilistic?.queryCount)" raised color="primary" @click="queryItem()" />
                    <P3xrButton v-if="type === 'tdigest'" icon="mdi-chart-bar" :label="str(strings?.page?.key?.probabilistic?.quantile)" raised color="primary" @click="queryQuantile()" />
                    <P3xrButton v-if="type === 'tdigest' && !isReadonly" icon="mdi-undo" label="Reset" raised color="warning" @click="resetTdigest()" />
                </div>
            </div>
            <!-- TOPK ITEMS LIST -->
            <template v-if="type === 'topk' && topkItems.length > 0">
                <v-divider />
                <v-list density="compact">
                    <template v-for="(entry, i) in topkItems" :key="i">
                        <v-list-item>
                            <div style="display: flex; width: 100%;">
                                <span style="flex: 1; font-weight: 500;">{{ entry.item }}</span>
                                <span>{{ entry.count }}</span>
                            </div>
                        </v-list-item>
                        <v-divider v-if="i < topkItems.length - 1" />
                    </template>
                </v-list>
            </template>
        </P3xrAccordion>
    </div>
</template>

<style scoped>
.p3xr-key-type-content { padding: 8px 16px 24px; }
.p3xr-prob-controls { display: flex; flex-wrap: wrap; align-items: flex-start; gap: 12px; padding: 8px 0; }
.p3xr-ts-field { min-width: 140px; max-width: 200px; }
</style>
