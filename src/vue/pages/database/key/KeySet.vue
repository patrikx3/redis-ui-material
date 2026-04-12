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

const props = defineProps<{ response: any; value: any; valueBuffer: any; keyName: string; valueFormat: string }>()
const emit = defineEmits<{ refresh: [] }>()
const strings = computed(() => useI18nStore().strings)
const isReadonly = computed(() => useRedisStateStore().connection?.readonly === true)
const common = useCommonStore()

const paging = ref<Paging>(createPaging(0))
const pagedItems = ref<Array<{ index: number; value: any }>>([])
const editDialogOpen = ref(false)
const editDialogData = ref<any>(null)
const jsonViewOpen = ref(false)
const jsonViewValue = ref('')

function updatePaged(p: Paging) {
    paging.value = p
    if (!props.value) { pagedItems.value = []; return }
    pagedItems.value = props.value.slice(p.startIndex, p.endIndex).map((v: any, i: number) => ({ index: p.startIndex + i, value: v }))
}
watch(() => props.value, () => { if (props.value) updatePaged(rePaging(paging.value, props.value.length)) }, { immediate: true })

function addItem() { editDialogData.value = { type: 'append', model: { type: 'set', key: props.keyName } }; editDialogOpen.value = true }
function editItem(index: number, val: any) { editDialogData.value = { type: 'edit', model: { type: 'set', key: props.keyName, value: val } }; editDialogOpen.value = true }
function handleEditClose(r?: any) { editDialogOpen.value = false; editDialogData.value = null; if (r) emit('refresh') }
async function deleteItem(index: number) {
    try { await common.confirm({ message: str(strings.value?.confirm?.deleteSetMember) }); await request({ action: 'key/set-delete-member', payload: { key: props.keyName, value: props.valueBuffer?.[index] } }); common.toast(str(strings.value?.status?.deletedSetMember)); emit('refresh') }
    catch (e) { if (e !== undefined) common.generalHandleError(e) }
}
</script>

<template>
    <div>
        <KeyPagerInline :paging="paging" @page-changed="updatePaged" />
        <div class="p3xr-key-table-header">
            <span style="flex:95%;">{{ str(strings?.page?.key?.set?.table?.value) }}</span>
            <span style="flex:5%;text-align:right;display:flex;justify-content:flex-end;align-items:center;"><v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.add)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" style="cursor:pointer;color:inherit;" @click="addItem">mdi-plus</v-icon></template></v-tooltip></span>
        </div>
        <div v-for="(item, i) in pagedItems" :key="item.index" class="p3xr-key-table-row" :class="{ 'p3xr-key-table-odd': i % 2 === 0 }">
            <span class="p3xr-key-table-value" style="flex:95%;" @click="!isReadonly && editItem(item.index, item.value)">
                <HexMonitor v-if="valueFormat === 'hex'" :value="truncateDisplay(item.value)" />
                <template v-else>{{ truncateDisplay(formatValue(item.value, valueFormat)) }}<span v-if="isTruncated(item.value)" style="opacity:0.5;">...</span></template>
            </span>
            <span style="flex:5%;" class="p3xr-key-table-actions">
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.delete)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-error));" @click="deleteItem(item.index)">mdi-delete</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.jsonViewShow)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="jsonViewValue = String(item.value ?? ''); jsonViewOpen = true">mdi-file-tree</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.copy)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="copyToClipboard(String(item.value ?? ''))">mdi-content-copy</v-icon></template></v-tooltip>
                <v-tooltip :text="str(strings?.intention?.downloadBuffer)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-secondary));" @click="downloadBuffer(valueBuffer?.[item.index], keyName)">mdi-download</v-icon></template></v-tooltip>
                <v-tooltip v-if="!isReadonly" :text="str(strings?.intention?.edit)" location="top"><template #activator="{ props: tp }"><v-icon v-bind="tp" size="24" class="p3xr-key-icon" style="color:rgb(var(--v-theme-primary));" @click="editItem(item.index, item.value)">mdi-pencil</v-icon></template></v-tooltip>
            </span>
        </div>
        <KeyNewOrSetDialog :open="editDialogOpen" :data="editDialogData" @close="handleEditClose" />
        <JsonViewDialog :open="jsonViewOpen" :value="jsonViewValue" @close="jsonViewOpen = false" />
    </div>
</template>
<style src="./key-table.css"></style>
