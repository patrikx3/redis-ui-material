<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useRedisStateStore } from '../stores/redis-state'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { request } from '../stores/socket.service'
import P3xrDialog from '../components/P3xrDialog.vue'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ close: [] }>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const state = useRedisStateStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const apiKey = ref('')

watch(() => props.open, (v) => { if (v) apiKey.value = '' })

async function submit() {
    try {
        const trimmedKey = apiKey.value.trim()
        if (trimmedKey) {
            overlay.show({ message: strings.value?.title?.connectingRedis })
            let validation: any
            try {
                validation = await request({ action: 'ai/validate-groq-api-key', payload: { apiKey: trimmedKey } })
            } catch (e) { common.generalHandleError(e); return }
            finally { overlay.hide() }
            if (!validation.valid) {
                common.toast(strings.value?.label?.aiGroqApiKeyInvalid)
                return
            }
        }
        await request({
            action: 'ai/set-groq-api-key',
            payload: { apiKey: trimmedKey, aiEnabled: state.cfg?.aiEnabled !== false, aiUseOwnKey: state.cfg?.aiUseOwnKey === true },
        })
        state.cfg = { ...state.cfg, hasGroqApiKey: !!(trimmedKey && trimmedKey.startsWith('gsk_') && trimmedKey.length > 20) }
        common.toast(strings.value?.status?.saved)
        emit('close')
    } catch (e) { common.generalHandleError(e) }
}
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="strings?.label?.aiSettings" @close="emit('close')">
        <div style="margin-bottom: 16px; font-size: 14px; opacity: 0.8;">
            {{ strings?.label?.aiGroqApiKeyInfo }}
            <a href="https://console.groq.com" target="_blank" rel="noreferrer"
                style="color: inherit; text-decoration: underline;">console.groq.com</a>
        </div>
        <v-text-field
            v-model="apiKey"
            :label="strings?.label?.aiGroqApiKey"
            placeholder="gsk_..."
            type="password"
            variant="outlined"
            density="comfortable"
            hide-details
            autocomplete="off"
        />

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
