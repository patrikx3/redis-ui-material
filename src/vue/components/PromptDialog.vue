<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useCommonStore } from '../stores/common.store'
import P3xrDialog from './P3xrDialog.vue'

const commonStore = useCommonStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)
const inputValue = ref('')

watch(() => commonStore.promptOpen, (open) => {
    if (open) {
        inputValue.value = commonStore.promptOptions?.initialValue ?? ''
    }
})

function handleOk() {
    if (!inputValue.value.trim()) return
    commonStore.resolvePrompt?.(inputValue.value)
}

function handleCancel() {
    commonStore.resolvePrompt?.(null)
}
</script>

<template>
    <P3xrDialog
        v-if="commonStore.promptOpen && commonStore.promptOptions"
        :open="true"
        :title="commonStore.promptOptions.title"
        width="600px"
        @close="handleCancel"
    >
        <v-text-field
            v-model="inputValue"
            :label="commonStore.promptOptions.placeholder"
            autofocus
            hide-details
            variant="outlined"
            density="comfortable"
            @keydown.enter="handleOk"
        />

        <template #actions>
            <v-btn
                variant="flat"
                color="warning"
                :aria-label="commonStore.promptOptions.cancelLabel"
                @click="handleCancel"
            >
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ commonStore.promptOptions.cancelLabel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ commonStore.promptOptions.cancelLabel }}</v-tooltip>
            </v-btn>

            <v-btn
                variant="flat"
                color="primary"
                :disabled="!inputValue.trim()"
                :aria-label="commonStore.promptOptions.okLabel"
                @click="handleOk"
            >
                <v-icon :class="{ 'mr-1': isWide }">mdi-check</v-icon>
                <span v-if="isWide">{{ commonStore.promptOptions.okLabel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ commonStore.promptOptions.okLabel }}</v-tooltip>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
