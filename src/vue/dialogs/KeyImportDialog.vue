<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useVirtualizer } from '@tanstack/vue-virtual'
import { useI18nStore } from '../stores/i18n'
import P3xrDialog from '../components/P3xrDialog.vue'

const ROW_HEIGHT = 40

const props = defineProps<{
    open: boolean
    data: { keys: any[] } | null
}>()

const emit = defineEmits<{
    close: [result: { pending: boolean; keys: any[]; conflictMode: string } | null]
}>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const conflictMode = ref('overwrite')
const keys = computed(() => props.data?.keys || [])
const parentRef = ref<HTMLDivElement | null>(null)

const virtualizer = useVirtualizer(computed(() => ({
    count: keys.value.length,
    getScrollElement: () => parentRef.value,
    estimateSize: () => ROW_HEIGHT,
    overscan: 10,
})))

function cancel() {
    emit('close', null)
}

function doImport() {
    emit('close', { pending: true, keys: keys.value, conflictMode: conflictMode.value })
}
</script>

<template>
    <P3xrDialog v-if="open && keys.length > 0" :open="true"
        :title="strings?.intention?.importKeys"
        @close="cancel()">

        <!-- Preview label -->
        <div style="margin-bottom: 8px; font-size: 13px; opacity: 0.7;">
            {{ keys.length }} {{ strings?.label?.keysToImport }}
        </div>

        <!-- Virtual scrolled key preview list (300px height, 40px rows) -->
        <div ref="parentRef" class="p3xr-import-preview-list">
            <div :style="{ height: virtualizer.getTotalSize() + 'px', width: '100%', position: 'relative' }">
                <div
                    v-for="virtualRow in virtualizer.getVirtualItems()"
                    :key="keys[virtualRow.index].key"
                    class="p3xr-import-preview-row"
                    :style="{
                        position: 'absolute', top: 0, left: 0, width: '100%',
                        height: ROW_HEIGHT + 'px',
                        transform: 'translateY(' + virtualRow.start + 'px)',
                    }"
                >
                    <span class="p3xr-import-key-name">{{ keys[virtualRow.index].key }}</span>
                    <kbd v-if="keys[virtualRow.index].type" class="p3xr-import-key-type">{{ keys[virtualRow.index].type }}</kbd>
                </div>
            </div>
        </div>

        <!-- Conflict mode radio -->
        <div style="margin-top: 12px;">
            <v-radio-group v-model="conflictMode" inline hide-details>
                <v-radio value="overwrite" :label="strings?.label?.importOverwrite" />
                <v-radio value="skip" :label="strings?.label?.importSkip" />
            </v-radio-group>
        </div>

        <template #actions>
            <v-btn variant="flat" color="warning" @click="cancel()">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.cancel }}</v-tooltip>
            </v-btn>
            <v-btn variant="flat" color="primary" @click="doImport()">
                <v-icon class="mr-1">mdi-upload</v-icon>
                <span>{{ strings?.intention?.import }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>

<style scoped>
.p3xr-import-preview-list {
    height: 300px;
    overflow-y: auto;
    border: 1px solid rgba(var(--v-border-color), 0.12);
    border-radius: 4px;
}

.p3xr-import-preview-row {
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-bottom: 1px solid rgba(var(--v-border-color), 0.06);
    gap: 8px;
    box-sizing: border-box;
}

.p3xr-import-key-name {
    flex: 1;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.p3xr-import-key-type {
    display: inline-block;
    font-family: 'Roboto Mono', monospace;
    font-size: 11px;
    padding: 1px 6px;
    border: 1px solid rgba(var(--v-border-color), 0.2);
    border-radius: 3px;
    background: rgba(128, 128, 128, 0.1);
    white-space: nowrap;
}
</style>
