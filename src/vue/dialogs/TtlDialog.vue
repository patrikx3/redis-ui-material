<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useSettingsStore } from '../stores/settings'
import P3xrDialog from '../components/P3xrDialog.vue'
import humanizeDuration from 'humanize-duration'
import timestring from 'timestring'

const props = defineProps<{
    open: boolean
    ttl: number | string
}>()

const emit = defineEmits<{
    close: [result?: { model: { ttl: number } }]
}>()

const i18n = useI18nStore()
const settings = useSettingsStore()
const strings = computed(() => i18n.strings)
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const ttlValue = ref<number | string>(-1)
const textTime = ref('')

watch(() => props.open, (v) => {
    if (!v) return
    const t = props.ttl ?? -1
    ttlValue.value = t
    if (typeof t === 'number' && t > 0) {
        const hdOpts = settings.getHumanizeDurationOptions()
        textTime.value = humanizeDuration(t * 1000, { ...hdOpts, delimiter: ' ' })
    } else {
        textTime.value = ''
    }
})

function onTextTimeChange(value: string) {
    textTime.value = value
    try { ttlValue.value = timestring(String(value), 's') }
    catch { /* parse error */ }
}

function submit() {
    let t = Number(ttlValue.value)
    if (isNaN(t)) t = Math.round(t)
    emit('close', { model: { ttl: t } })
}

function cancel() {
    emit('close')
}
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.confirm?.ttl?.title" width="600px" @close="cancel">
        <div style="margin-bottom: 16px;">{{ strings?.confirm?.ttl?.textContent }}</div>

        <v-text-field
            v-model.number="ttlValue"
            :label="strings?.confirm?.ttl?.placeholder"
            :placeholder="strings?.confirm?.ttl?.placeholderPlaceholder"
            type="number"
            :min="-1"
            variant="outlined"
            density="comfortable"
            hide-details
            class="mb-3"
        />

        <v-text-field
            v-model="textTime"
            :label="strings?.confirm?.ttl?.convertTextToTime"
            :placeholder="strings?.confirm?.ttl?.convertTextToTimePlaceholder"
            variant="outlined"
            density="comfortable"
            hide-details
            class="mb-3"
            @update:model-value="onTextTimeChange"
        />

        <v-btn variant="text" color="secondary" size="small" style="text-transform: none; margin-top: 4px;"
            @click="window.open('https://www.npmjs.com/package/timestring#keywords', '_blank')">
            https://www.npmjs.com/package/timestring
        </v-btn>

        <template #actions>
            <v-btn variant="flat" color="error" size="small" @click="cancel">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.cancel }}</v-tooltip>
            </v-btn>
            <v-btn variant="flat" color="primary" size="small" @click="submit">
                <v-icon class="mr-1">mdi-timer</v-icon>
                <span>{{ strings?.intention?.ttl }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
