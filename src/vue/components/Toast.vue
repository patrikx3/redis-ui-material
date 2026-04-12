<script setup lang="ts">
import { useCommonStore } from '../stores/common.store'

const commonStore = useCommonStore()

function onClose(value: boolean) {
    if (!value) {
        commonStore.closeToast()
    }
}
</script>

<template>
    <v-snackbar
        v-model="commonStore.toastOpen"
        :timeout="5000"
        location="bottom right"
        @update:model-value="onClose"
    >
        {{ commonStore.toastMessage }}
        <template #actions>
            <v-btn
                v-if="commonStore.toastUndoAction"
                color="primary"
                variant="text"
                size="small"
                @click="commonStore.handleToastUndoClick()"
            >
                {{ commonStore.toastUndoAction }}
            </v-btn>
            <v-btn
                icon
                variant="text"
                size="small"
                color="inherit"
                @click="commonStore.closeToast()"
            >
                <v-icon size="small">mdi-close</v-icon>
            </v-btn>
        </template>
    </v-snackbar>
</template>

<style scoped>
:deep(.v-snackbar__content) {
    flex-wrap: nowrap;
}
</style>
