<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useRedisStateStore } from '../stores/redis-state'
import { useSettingsStore } from '../stores/settings'
import { useCommonStore } from '../stores/common.store'
import { useMainCommandStore } from '../stores/main-command'
import P3xrDialog from '../components/P3xrDialog.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const settings = useSettingsStore()
const state = useRedisStateStore()
const common = useCommonStore()
const mainCommand = useMainCommandStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const FIELD_RANGES: Record<string, { min: number; max: number }> = {
    pageCount: { min: 10, max: 5000 },
    keyPageCount: { min: 5, max: 100 },
    maxValueDisplay: { min: -1, max: 32768 },
    maxKeys: { min: 5, max: 100000 },
}

const model = ref({
    treeSeparator: '', pageCount: 250, keyPageCount: 5,
    maxValueDisplay: 1024, maxKeys: 1000, keysSort: true,
    searchClientSide: false, searchStartsWith: false,
    jsonFormat: true, animation: true, undoEnabled: true, showDiffBeforeSave: true,
})
const errors = ref<Record<string, string>>({})

watch(() => props.open, (v) => {
    if (v) {
        model.value = {
            treeSeparator: settings.redisTreeDivider,
            pageCount: settings.pageCount,
            keyPageCount: settings.keyPageCount,
            maxValueDisplay: settings.maxValueDisplay,
            maxKeys: settings.maxKeys,
            keysSort: settings.keysSort,
            searchClientSide: settings.searchClientSide,
            searchStartsWith: settings.searchStartsWith,
            jsonFormat: Number(settings.jsonFormat) !== 2,
            animation: settings.animation === true || settings.animation === 1 || String(settings.animation) === '1',
            undoEnabled: settings.undoEnabled,
            showDiffBeforeSave: settings.showDiffBeforeSave,
        }
        errors.value = {}
    }
})

function setField(field: string, value: any) {
    ;(model.value as any)[field] = value
    const range = FIELD_RANGES[field]
    if (range) {
        const num = Number(value)
        if (isNaN(num) || !Number.isInteger(num)) {
            errors.value[field] = strings.value?.form?.error?.integer
        } else if (num < range.min || num > range.max) {
            errors.value[field] = `${range.min} - ${range.max}`
        } else {
            delete errors.value[field]
        }
    }
}

function validateAll(): boolean {
    const newErrors: Record<string, string> = {}
    for (const [field, range] of Object.entries(FIELD_RANGES)) {
        const value = (model.value as any)[field]
        const num = Number(value)
        if (value === '' || value === undefined || value === null) {
            newErrors[field] = strings.value?.form?.error?.required
        } else if (isNaN(num) || !Number.isInteger(num)) {
            newErrors[field] = strings.value?.form?.error?.integer
        } else if (num < range.min || num > range.max) {
            newErrors[field] = `${range.min} - ${range.max}`
        }
    }
    errors.value = newErrors
    return Object.keys(newErrors).length === 0
}

async function submit() {
    if (!validateAll()) {
        common.toast(strings.value?.form?.error?.invalid)
        return
    }
    try {
        const m = model.value
        settings.setSetting('p3xr-main-treecontrol-divider', m.treeSeparator)
        settings.setSetting('p3xr-main-treecontrol-page-size', m.pageCount)
        settings.setSetting('p3xr-main-key-page-size', m.keyPageCount)
        settings.setSetting('p3xr-main-treecontrol-max-value-display', m.maxValueDisplay)
        settings.setSetting('p3xr-max-keys', m.maxKeys)
        settings.setSetting('p3xr-main-treecontrol-key-sort', m.keysSort)
        settings.setSetting('p3xr-main-treecontrol-search-client-mode', m.searchClientSide)
        settings.setSetting('p3xr-main-treecontrol-search-starts-with', m.searchStartsWith)
        settings.setSetting('p3xr-json-format', m.jsonFormat ? 4 : 2)
        settings.setSetting('p3xr-animation-settings', m.animation ? '1' : '0')
        settings.setSetting('p3xr-undo-enabled', m.undoEnabled)
        settings.setSetting('p3xr-show-diff-before-save', m.showDiffBeforeSave)
        state.page = 1
        state.redisChanged = true
        if (state.connection) await mainCommand.refresh()
        common.toast(strings.value?.status?.saved)
        emit('close')
    } catch (e) {
        common.generalHandleError(e)
    }
}

const reducedFunctions = computed(() => state.reducedFunctions)
const keysRawLength = computed(() => state.keysRaw?.length ?? 0)
const dbsize = computed(() => state.dbsize ?? 0)
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.form?.treeSettings?.label?.formName || 'Settings'" @close="emit('close')">
        <v-text-field v-model="model.treeSeparator" :label="strings?.form?.treeSettings?.field?.treeSeparator" variant="outlined" density="comfortable" hide-details class="mb-3" />
        <v-text-field v-model.number="model.pageCount" :label="strings?.form?.treeSettings?.field?.page" type="number" variant="outlined" density="comfortable"
            :error="!!errors.pageCount" :error-messages="errors.pageCount" :hint="!errors.pageCount ? strings?.form?.treeSettings?.error?.page : ''" persistent-hint
            class="mb-3" @update:model-value="v => setField('pageCount', v)" />
        <v-text-field v-model.number="model.keyPageCount" :label="strings?.form?.treeSettings?.field?.keyPageCount" type="number" variant="outlined" density="comfortable"
            :error="!!errors.keyPageCount" :error-messages="errors.keyPageCount" :hint="!errors.keyPageCount ? strings?.form?.treeSettings?.error?.keyPageCount : ''" persistent-hint
            class="mb-3" @update:model-value="v => setField('keyPageCount', v)" />
        <v-text-field v-model.number="model.maxValueDisplay" :label="strings?.form?.treeSettings?.maxValueDisplay" type="number" variant="outlined" density="comfortable"
            :error="!!errors.maxValueDisplay" :error-messages="errors.maxValueDisplay" :hint="!errors.maxValueDisplay ? strings?.form?.treeSettings?.maxValueDisplayInfo : ''" persistent-hint
            class="mb-3" @update:model-value="v => setField('maxValueDisplay', v)" />
        <v-text-field v-model.number="model.maxKeys" :label="strings?.form?.treeSettings?.maxKeys" type="number" variant="outlined" density="comfortable"
            :error="!!errors.maxKeys" :error-messages="errors.maxKeys" :hint="!errors.maxKeys ? strings?.form?.treeSettings?.maxKeysInfo : ''" persistent-hint
            class="mb-3" @update:model-value="v => setField('maxKeys', v)" />

        <template v-if="!reducedFunctions">
            <div class="p3xr-settings-switch-row"><v-switch v-model="model.keysSort" :label="model.keysSort ? strings?.label?.keysSort?.on : strings?.label?.keysSort?.off" density="comfortable" hide-details /></div>
            <div class="p3xr-settings-switch-row"><v-switch v-model="model.searchClientSide" :disabled="dbsize > settings.maxLightKeysCount"
                :label="model.searchClientSide ? strings?.form?.treeSettings?.label?.searchModeClient : strings?.form?.treeSettings?.label?.searchModeServer"
                density="comfortable" hide-details /></div>
        </template>
        <div v-if="reducedFunctions" style="margin-top: 8px; padding: 12px; background: rgba(128,128,128,0.1); border-radius: 4px; font-size: 13px; opacity: 0.8;">
            {{ typeof strings?.label?.tooManyKeys === 'function' ? strings.label.tooManyKeys({ count: keysRawLength, maxLightKeysCount: settings.maxLightKeysCount }) : '' }}
        </div>

        <div class="p3xr-settings-switch-row"><v-switch v-model="model.searchStartsWith" :label="model.searchStartsWith ? strings?.form?.treeSettings?.label?.searchModeStartsWith : strings?.form?.treeSettings?.label?.searchModeIncludes" density="comfortable" hide-details /></div>
        <div class="p3xr-settings-switch-row"><v-switch v-model="model.jsonFormat" :label="model.jsonFormat ? strings?.form?.treeSettings?.label?.jsonFormatFourSpace : strings?.form?.treeSettings?.label?.jsonFormatTwoSpace" density="comfortable" hide-details /></div>
        <div class="p3xr-settings-switch-row"><v-switch v-model="model.animation" :label="model.animation ? strings?.form?.treeSettings?.label?.animation : strings?.form?.treeSettings?.label?.noAnimation" density="comfortable" hide-details /></div>
        <div class="p3xr-settings-switch-row"><v-switch v-model="model.undoEnabled" :label="model.undoEnabled ? (strings?.form?.treeSettings?.label?.undoEnabled || 'Undo enabled') : (strings?.form?.treeSettings?.label?.undoDisabled || 'Undo disabled')" density="comfortable" hide-details /></div>
        <div style="font-size: 12px; opacity: 0.7; margin-left: 50px; margin-top: -4px; margin-bottom: 4px;">{{ strings?.form?.treeSettings?.undoHint || 'Undo is available for string and JSON key types only' }}</div>
        <div class="p3xr-settings-switch-row"><v-switch v-model="model.showDiffBeforeSave" :label="model.showDiffBeforeSave ? (strings?.form?.treeSettings?.label?.diffEnabled || 'Show diff before saving') : (strings?.form?.treeSettings?.label?.diffDisabled || 'Diff before save disabled')" density="comfortable" hide-details /></div>

        <template #actions>
            <v-btn variant="flat" color="warning" @click="emit('close')">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.cancel }}</v-tooltip>
            </v-btn>
            <v-btn variant="flat" color="primary" @click="submit">
                <v-icon class="mr-1">mdi-check</v-icon>
                <span>{{ strings?.intention?.save }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>

<style>
.p3xr-settings-switch-row {
    display: block;
    margin-bottom: 4px;
}
.p3xr-settings-switch-row .v-input {
    display: flex !important;
}
</style>
