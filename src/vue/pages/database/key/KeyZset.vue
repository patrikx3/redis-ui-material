<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import HexMonitor from './HexMonitor.vue'
import KeyPagerInline from './KeyPagerInline.vue'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog.vue'
import JsonViewDialog from '../../../dialogs/JsonViewDialog.vue'
import { useI18nStore } from '../../../stores/i18n'
import { useRedisStateStore } from '../../../stores/redis-state'
import { useCommonStore } from '../../../stores/common'
import { request } from '../../../stores/socket.service'
import { type Paging, createPaging, rePaging, formatValue, truncateDisplay, isTruncated, copyToClipboard, downloadBuffer, str } from './key-type-base'

interface ZsetItem { score: string; member: string; index: number }

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()
const strings = computed(() => useI18nStore().strings)
const isReadonly = computed(() => useRedisStateStore().connection?.readonly === true)
const common = useCommonStore()

const paging = ref<Paging>(createPaging(0, true))
const pagedItems = ref<ZsetItem[]>([])
const editDialogOpen = ref(false)
const editDialogData = ref<any>(null)
const jsonViewOpen = ref(false)
const jsonViewValue = ref('')

function buildItems(val: any[], p: Paging): ZsetItem[] {
    if (!val) return []
    const items: ZsetItem[] = []
    for (let i = 0; i < val.length; i += 2) items.push({ member: val[i], score: val[i + 1], index: i / 2 })
    return items.slice(p.startIndex, p.endIndex)
}

function updatePaged(p: Paging) { paging.value = p; pagedItems.value = buildItems(props.value, p) }
watch(() => props.value, () => { if (props.value) { const p = rePaging(paging.value, props.value.length, true); updatePaged(p) } }, { immediate: true })

function addItem() { editDialogData.value = { type: 'append', model: { type: 'zset', key: props.keyName } }; editDialogOpen.value = true }
function editItem(item: ZsetItem) { editDialogData.value = { type: 'edit', model: { type: 'zset', key: props.keyName, value: item.member, score: item.score } }; editDialogOpen.value = true }
function handleEditClose(r?: any) { editDialogOpen.value = false; editDialogData.value = null; if (r) emit('refresh') }
async function deleteItem(item: ZsetItem) {
    try { await common.confirm({ message: str(strings.value?.confirm?.deleteZSetMember) }); await request({ action: 'key/zset-delete-member', payload: { key: props.keyName, value: props.valueBuffer?.[item.index * 2] } }); common.toast(str(strings.value?.status?.deletedZSetMember)); emit('refresh') }
    catch (e) { if (e !== undefined) common.generalHandleError(e) }
}
</script>

<template>
    <div>
        <KeyPagerInline :paging="paging" @page-changed="updatePaged" />
        <div class="p3xr-key-table-header">
            <span style="flex:20%;">{{ str(strings?.page?.key?.zset?.table?.score) }}</span>
            <span style="flex:60%;">{{ str(strings?.page?.key?.zset?.table?.value) }}</span>
            <span class="p3xr-key-table-header-actions"><v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.add)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" style="cursor:pointer;color:inherit;" @click="addItem">mdi-plus</v-icon></template></v-tooltip></span>
        </div>
        <div v-for="(item, i) in pagedItems" :key="item.index" class="p3xr-key-table-row" :class="{ 'p3xr-key-table-odd': i % 2 === 0 }">
            <span style="flex:20%;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;user-select:text;" @click="!isReadonly && editItem(item)">{{ item.score }}</span>
            <span class="p3xr-key-table-value" @click="!isReadonly && editItem(item)">
                <HexMonitor v-if="valueFormat === 'hex'" :value="truncateDisplay(item.member)" />
                <template v-else>{{ truncateDisplay(formatValue(item.member, valueFormat)) }}<span v-if="isTruncated(item.member)" style="opacity:0.5;">...</span></template>
            </span>
            <span class="p3xr-key-table-actions">
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.delete)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-error));" @click="deleteItem(item)">mdi-delete</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.jsonViewShow)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="jsonViewValue = String(item.member ?? ''); jsonViewOpen = true">mdi-file-tree</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.copy)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="copyToClipboard(String(item.member ?? ''))">mdi-content-copy</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.downloadBuffer)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="downloadBuffer(valueBuffer?.[item.index * 2], keyName)">mdi-download</v-icon></template></v-tooltip>
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.edit)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-primary));" @click="editItem(item)">mdi-pencil</v-icon></template></v-tooltip>
            </span>
        </div>
        <KeyNewOrSetDialog :open="editDialogOpen" :data="editDialogData" @close="handleEditClose" />
        <JsonViewDialog :open="jsonViewOpen" :value="jsonViewValue" @close="jsonViewOpen = false" />
    </div>
</template>
<style src="./key-table.css"></style>
