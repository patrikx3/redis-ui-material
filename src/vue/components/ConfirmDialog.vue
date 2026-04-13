<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useCommonStore } from '../stores/common.store'
import { useI18nStore } from '../stores/i18n.store'
import P3xrDialog from './P3xrDialog.vue'

const commonStore = useCommonStore()
const i18n = useI18nStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const isAlert = computed(() => commonStore.confirmOptions?.disableCancel === true)
const okLabel = computed(() => isAlert.value ? i18n.strings?.intention?.ok : i18n.strings?.intention?.sure)
const cancelLabel = computed(() => i18n.strings?.intention?.cancel)

function handleOk() {
    commonStore.resolveConfirm?.(true)
}

function handleCancel() {
    commonStore.resolveConfirm?.(false)
}
</script>

<template>
    <P3xrDialog
        v-if="commonStore.confirmOpen && commonStore.confirmOptions"
        :open="true"
        :title="commonStore.confirmOptions.title || ''"
        width="600px"
        @close="handleCancel"
    >
        <div v-html="commonStore.confirmOptions.message" />

        <template #actions>
            <v-btn
                v-if="!isAlert"
                variant="flat"
                color="warning"
                :aria-label="cancelLabel"
                @click="handleCancel"
            >
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ cancelLabel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ cancelLabel }}</v-tooltip>
            </v-btn>

            <v-btn
                variant="flat"
                color="primary"
                @click="handleOk"
            >
                <v-icon class="mr-1">mdi-check</v-icon>
                <span>{{ okLabel }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
