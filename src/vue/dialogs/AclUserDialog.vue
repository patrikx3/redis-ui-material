<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import P3xrDialog from '../components/P3xrDialog.vue'

const props = defineProps<{
    open: boolean
    username: string
    rules: string
    isNew: boolean
}>()

const emit = defineEmits<{
    close: [result?: { username: string; rules: string[] }]
}>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)

const localUsername = ref('')
const enabled = ref(true)
const nopass = ref(false)
const password = ref('')
const commandsList = ref<string[]>([])
const keysList = ref<string[]>([])
const channelsList = ref<string[]>([])

function parseRules(rules: string) {
    const tokens = rules.trim().split(/\s+/).filter(Boolean)
    enabled.value = true
    nopass.value = false
    password.value = ''
    const cmds: string[] = [], keys: string[] = [], channels: string[] = []

    for (const t of tokens) {
        if (t === 'on') enabled.value = true
        else if (t === 'off') enabled.value = false
        else if (t === 'nopass') nopass.value = true
        else if (t.startsWith('>') || t.startsWith('<') || t.startsWith('#') || t === 'resetpass' || t === 'sanitize-payload' || t === 'skip-sanitize-payload') continue
        else if (t.startsWith('+') || t.startsWith('-') || t === 'allcommands' || t === 'nocommands') cmds.push(t)
        else if (t.startsWith('~') || t.startsWith('%') || t === 'allkeys' || t === 'resetkeys') keys.push(t)
        else if (t.startsWith('&') || t === 'allchannels' || t === 'resetchannels') channels.push(t)
    }

    commandsList.value = cmds
    keysList.value = keys
    channelsList.value = channels
}

watch(() => props.open, (v) => {
    if (v) {
        localUsername.value = props.username
        parseRules(props.rules)
    }
})

function handleSave() {
    const u = localUsername.value.trim()
    if (!u) return
    const rules: string[] = [enabled.value ? 'on' : 'off']
    if (!props.isNew) {
        // Reset permissions first so removals take effect
        rules.push('nocommands', 'resetkeys', 'resetchannels')
        if (nopass.value) rules.push('resetpass', 'nopass')
        else if (password.value.trim()) rules.push('resetpass', '>' + password.value.trim())
    } else {
        if (nopass.value) rules.push('nopass')
        else if (password.value.trim()) rules.push('>' + password.value.trim())
    }
    rules.push(...commandsList.value, ...keysList.value, ...channelsList.value)
    emit('close', { username: u, rules })
}

function handleCancel() {
    emit('close')
}

function chipColor(rule: any): string {
    const val = typeof rule === 'string' ? rule
        : typeof rule?.raw === 'string' ? rule.raw
        : typeof rule?.value === 'string' ? rule.value
        : typeof rule?.title === 'string' ? rule.title
        : ''
    return val.startsWith('-') ? 'error' : 'primary'
}
</script>

<template>
    <P3xrDialog
        v-if="open"
        :open="true"
        :title="isNew ? (strings?.page?.acl?.createUser || 'Create User') : (strings?.page?.acl?.editUser || 'Edit User')"
        width="600px"
        @close="handleCancel"
    >
        <v-text-field
            v-model="localUsername"
            :label="strings?.page?.acl?.username || 'Username'"
            :disabled="!isNew"
            variant="outlined"
            density="comfortable"
            hide-details
            class="mb-3"
        />

        <v-alert v-if="localUsername === 'default'" type="warning" density="compact" class="mb-3" style="font-size: 13px;">
            {{ strings?.page?.acl?.defaultUserWarning || 'Caution: Modifying the default user can lock out all connections. If this happens, you will need to restart Redis or use redis-cli to restore access.' }}
        </v-alert>

        <div style="margin-bottom: 16px;">
            <v-switch
                v-model="enabled"
                :label="strings?.page?.acl?.enabled || 'Enabled'"
                density="comfortable"
                hide-details
            />
        </div>

        <div style="margin-bottom: 12px;">
            <v-checkbox
                v-model="nopass"
                :label="strings?.page?.acl?.noPassword || 'No password (nopass)'"
                density="comfortable"
                hide-details
            />
        </div>

        <v-text-field
            v-if="!nopass"
            v-model="password"
            :label="strings?.page?.acl?.password || 'Password'"
            type="password"
            autocomplete="new-password"
            variant="outlined"
            density="comfortable"
            :hint="!isNew ? (strings?.page?.acl?.passwordHint || 'Leave empty to keep current password') : undefined"
            :persistent-hint="!isNew"
            :hide-details="isNew"
            class="mb-3"
        />

        <v-combobox
            v-model="commandsList"
            :label="strings?.page?.acl?.commands || 'Commands'"
            chips
            multiple
            closable-chips
            variant="outlined"
            density="comfortable"
            :hint="strings?.page?.acl?.commandsHint || 'e.g., +@all or +@read -@dangerous'"
            persistent-hint
            placeholder="+@all, -@dangerous ..."
            class="mb-3"
        >
            <template #chip="{ props: chipProps, item }">
                <v-chip v-bind="chipProps" :color="chipColor(item)" variant="flat" size="small" />
            </template>
        </v-combobox>

        <v-combobox
            v-model="keysList"
            :label="strings?.page?.acl?.keys || 'Key Patterns'"
            chips
            multiple
            closable-chips
            variant="outlined"
            density="comfortable"
            :hint="strings?.page?.acl?.keysHint || 'e.g., ~* or ~user:*'"
            persistent-hint
            placeholder="~*, ~user:* ..."
            class="mb-3"
        >
            <template #chip="{ props: chipProps }">
                <v-chip v-bind="chipProps" color="primary" variant="flat" size="small" />
            </template>
        </v-combobox>

        <v-combobox
            v-model="channelsList"
            :label="strings?.page?.acl?.channels || 'Pub/Sub Channels'"
            chips
            multiple
            closable-chips
            variant="outlined"
            density="comfortable"
            :hint="strings?.page?.acl?.channelsHint || 'e.g., &* or &notifications:*'"
            persistent-hint
            placeholder="&*, &notifications:* ..."
        >
            <template #chip="{ props: chipProps }">
                <v-chip v-bind="chipProps" color="primary" variant="flat" size="small" />
            </template>
        </v-combobox>

        <template #actions>
            <v-btn variant="flat" color="warning" @click="handleCancel">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel || 'Cancel' }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.cancel || 'Cancel' }}</v-tooltip>
            </v-btn>
            <v-btn variant="flat" color="primary" @click="handleSave" :disabled="!localUsername.trim()">
                <v-icon :class="{ 'mr-1': isWide }">mdi-check</v-icon>
                <span v-if="isWide">{{ strings?.intention?.save || 'Save' }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.save || 'Save' }}</v-tooltip>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
