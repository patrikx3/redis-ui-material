<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import P3xrDialog from '../components/P3xrDialog.vue'
import { useCommonStore } from '../stores/common.store'
import { useI18nStore } from '../stores/i18n'

const common = useCommonStore()
const strings = computed(() => useI18nStore().strings)

const username = ref('')
const password = ref('')
const pwVisible = ref(false)

watch(() => common.askAuthOpen, (open) => {
    if (open) {
        username.value = ''
        password.value = ''
        pwVisible.value = false
    }
})

function handleOk() {
    common.resolveAskAuth?.({ username: username.value, password: password.value })
}

function handleCancel() {
    common.resolveAskAuth?.(null)
}

function str(val: any, opts?: any): string {
    if (typeof val === 'function') return val(opts)
    return val ?? ''
}
</script>

<template>
    <P3xrDialog
        :open="common.askAuthOpen"
        :title="str(strings?.label?.askAuth)"
        icon="mdi-shield"
        width="400px"
        :full-screen-on-mobile="false"
        @close="handleCancel"
    >
        <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">{{ strings?.label?.aclAuthHint }}</div>
        <v-text-field
            v-model="username" autofocus
            :label="str(strings?.form?.connection?.label?.username)"
            autocomplete="off" density="comfortable" variant="outlined" hide-details class="mb-3"
            @keydown.enter="handleOk"
        >
            <template #prepend-inner>
                <v-icon size="20">mdi-account</v-icon>
            </template>
        </v-text-field>
        <v-text-field
            v-model="password"
            :label="str(strings?.form?.connection?.label?.password)"
            :type="pwVisible ? 'text' : 'password'"
            autocomplete="off" density="comfortable" variant="outlined" hide-details
            @keydown.enter="handleOk"
        >
            <template #prepend-inner>
                <v-icon size="20">mdi-lock</v-icon>
            </template>
            <template #append-inner>
                <v-icon size="20" style="cursor:pointer;" @click="pwVisible = !pwVisible">
                    {{ pwVisible ? 'mdi-eye-off' : 'mdi-eye' }}
                </v-icon>
            </template>
        </v-text-field>

        <template #actions>
            <v-btn color="error" variant="flat" @click="handleCancel">
                <v-icon size="20" class="mr-1">mdi-close-circle</v-icon>
                {{ str(strings?.intention?.cancel) }}
            </v-btn>
            <v-btn color="primary" variant="flat" @click="handleOk">
                <v-icon size="20" class="mr-1">mdi-check</v-icon>
                {{ str(strings?.intention?.ok) }}
            </v-btn>
        </template>
    </P3xrDialog>
</template>
