<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../stores/i18n'
import { useRedisStateStore } from '../stores/redis-state'
import { useSettingsStore } from '../stores/settings'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { request } from '../stores/socket.service'
import P3xrDialog from '../components/P3xrDialog.vue'

const props = defineProps<{ open: boolean; type: 'new' | 'edit'; sourceModel?: any }>()
const emit = defineEmits<{ close: [] }>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const { width } = useDisplay()
const isWide = computed(() => width.value >= 600)
const readonlyConnections = computed(() => state.cfg?.readonlyConnections === true)

const model = ref<any>({})
const pwVisible = ref(false)
const sshPwVisible = ref(false)
const nodePwVisible = ref<Record<number, boolean>>({})

function initModel(type: string, source?: any): any {
    let m: any
    if (source) {
        m = JSON.parse(JSON.stringify(source))
        m.password = source.id
        m.tlsCrt = source.id
        m.tlsKey = source.id
        m.tlsCa = source.id
        m.sshPassword = source.id
        m.sshPrivateKey = source.id
    } else {
        m = {
            name: '', host: '', port: 6379, askAuth: false,
            password: '', username: '', id: undefined, group: '',
            readonly: false, tlsWithoutCert: false, tlsRejectUnauthorized: false,
            tlsCrt: '', tlsKey: '', tlsCa: '',
        }
    }
    if (!m.ssh) {
        m.ssh = false; m.sshHost = m.sshHost || ''
        m.sshPort = m.sshPort || 22; m.sshUsername = m.sshUsername || ''
        m.sshPassword = m.sshPassword || source?.id || ''
        m.sshPrivateKey = m.sshPrivateKey || source?.id || ''
    }
    if (!m.cluster) m.cluster = false
    if (!m.sentinel) m.sentinel = false
    if (!m.nodes) m.nodes = []
    for (const node of m.nodes) { node.password = node.id }
    return m
}

watch(() => props.open, (v) => {
    if (v) {
        model.value = initModel(props.type, props.sourceModel)
        pwVisible.value = false; sshPwVisible.value = false; nodePwVisible.value = {}
    }
})

const existingGroups = computed(() => {
    const groups = new Set<string>()
    for (const conn of (state.connections?.list ?? [])) {
        if (conn.group?.trim()) groups.add(conn.group.trim())
    }
    return [...groups].sort()
})

function addNode(index?: number) {
    const newNode = { host: '', port: undefined, password: '', username: '', id: settings.generateId() }
    const nodes = [...model.value.nodes]
    if (index === undefined) nodes.push(newNode); else nodes.splice(index + 1, 0, newNode)
    model.value = { ...model.value, nodes }
}

async function removeNode(idx: number) {
    try {
        await common.confirm({ message: strings.value?.confirm?.deleteConnectionText })
        model.value = { ...model.value, nodes: model.value.nodes.filter((_: any, i: number) => i !== idx) }
        common.toast(strings.value?.status?.nodeRemoved)
    } catch {}
}

function validateForm(): boolean {
    if (!model.value.name?.trim()) { common.toast(strings.value?.form?.error?.invalid); return false }
    if (model.value.ssh) {
        if (!model.value.sshHost?.trim() || !model.value.sshUsername?.trim()) { common.toast(strings.value?.form?.error?.invalid); return false }
    }
    if (model.value.sentinel && !model.value.sentinelName?.trim()) { common.toast(strings.value?.form?.error?.invalid); return false }
    return true
}

async function testConnection() {
    if (!validateForm()) return
    try {
        const authModel = JSON.parse(JSON.stringify(model.value))
        if (model.value.askAuth === true) {
            try {
                const auth = await common.askAuth()
                authModel.username = auth.username || undefined
                authModel.password = auth.password || undefined
            } catch { return }
        }
        overlay.show({ message: strings.value?.title?.connectingRedis })
        await request({ action: 'connection/test', payload: { model: authModel } })
        common.toast(strings.value?.status?.redisConnected)
    } catch (e) { common.generalHandleError(e) }
    finally { overlay.hide() }
}

async function submit() {
    if (!validateForm()) return
    const saveModel = JSON.parse(JSON.stringify(model.value))
    if (!saveModel.host) saveModel.host = 'localhost'
    if (!saveModel.port) saveModel.port = 6379
    if (props.type === 'new') saveModel.id = settings.generateId()
    for (const node of saveModel.nodes) {
        if (!node.host) node.host = 'localhost'
        if (!node.id) node.id = settings.generateId()
    }
    if (typeof saveModel.group === 'string') saveModel.group = saveModel.group.trim() || undefined
    try {
        await request({ action: 'connection/save', payload: { model: saveModel } })
        common.toast(props.type === 'new' ? strings.value?.status?.added : strings.value?.status?.saved)
        emit('close')
    } catch (e) { common.generalHandleError(e) }
}

const title = computed(() =>
    readonlyConnections.value ? strings.value?.label?.connectiondView
        : props.type === 'new' ? strings.value?.label?.connectiondAdd : strings.value?.label?.connectiondEdit
)
</script>

<template>
    <P3xrDialog v-if="open" :open="true" :title="title || ''" @close="emit('close')">
        <!-- ID -->
        <template v-if="model.id && type !== 'new'">
            <v-text-field :model-value="model.id" :label="strings?.label?.id?.id" variant="outlined" density="comfortable" disabled hide-details class="mb-1" />
            <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">{{ strings?.label?.id?.info }}</div>
        </template>

        <!-- Name + Group -->
        <v-text-field v-model="model.name" :label="strings?.form?.connection?.label?.name" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3" />
        <v-combobox v-model="model.group" :items="existingGroups" :label="strings?.form?.connection?.label?.group" variant="outlined" density="comfortable" :disabled="readonlyConnections" hide-details class="mb-3" />

        <!-- SSH -->
        <v-switch v-model="model.ssh" :label="model.ssh ? strings?.label?.ssh?.on : strings?.label?.ssh?.off" :disabled="readonlyConnections" density="comfortable" hide-details class="mb-1" />
        <fieldset v-if="model.ssh" style="border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; padding: 16px; margin-top: 8px;">
            <legend style="font-weight: 700;">SSH</legend>
            <v-text-field v-model="model.sshHost" :label="strings?.label?.ssh?.sshHost" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3" />
            <v-text-field v-model.number="model.sshPort" :label="strings?.label?.ssh?.sshPort" type="number" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3" />
            <v-text-field v-model="model.sshUsername" :label="strings?.label?.ssh?.sshUsername" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3" />
            <v-text-field v-model="model.sshPassword" :label="strings?.label?.ssh?.sshPassword" :type="sshPwVisible ? 'text' : 'password'" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" hide-details class="mb-1"
                :append-inner-icon="sshPwVisible ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="sshPwVisible = !sshPwVisible" />
            <div style="font-size: 12px; opacity: 0.7;">{{ strings?.label?.passwordSecure }}</div>
            <v-textarea v-model="model.sshPrivateKey" :label="strings?.label?.ssh?.sshPrivateKey" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" rows="1" auto-grow hide-details class="mb-1 mt-3" />
            <div style="font-size: 12px; opacity: 0.7;">{{ strings?.label?.secureFeature }}</div>
        </fieldset>

        <!-- Node 1 -->
        <fieldset style="border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; padding: 16px; margin-top: 16px;">
            <legend style="font-weight: 700;">Node 1</legend>
            <v-text-field v-model="model.host" :label="strings?.form?.connection?.label?.host" variant="outlined" density="comfortable" :disabled="readonlyConnections" hide-details class="mb-3" />
            <v-text-field v-model.number="model.port" :label="strings?.form?.connection?.label?.port" type="number" variant="outlined" density="comfortable" :disabled="readonlyConnections" hide-details class="mb-3" />
            <v-switch v-model="model.askAuth" :label="strings?.label?.askAuth" :disabled="readonlyConnections" density="comfortable" hide-details class="mb-1" @update:model-value="(v: any) => { if (v) { model.username = ''; model.password = '' } }" />
            <div style="font-size: 12px; opacity: 0.7; margin-bottom: 4px;">{{ strings?.label?.aclAuthHint }}</div>
            <template v-if="!model.askAuth">
                <v-text-field v-model="model.username" :label="strings?.form?.connection?.label?.username" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" hide-details class="mb-3" />
                <v-text-field v-model="model.password" :label="strings?.form?.connection?.label?.password" :type="pwVisible ? 'text' : 'password'" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" hide-details class="mb-1"
                    :append-inner-icon="pwVisible ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="pwVisible = !pwVisible" />
                <div style="font-size: 12px; opacity: 0.7;">{{ strings?.label?.passwordSecure }}</div>
            </template>
        </fieldset>

        <!-- Readonly -->
        <v-switch v-model="model.readonly" :label="model.readonly ? strings?.label?.readonly?.on : strings?.label?.readonly?.off" :disabled="readonlyConnections" density="comfortable" hide-details class="mt-2 mb-1" />

        <!-- Cluster / Sentinel -->
        <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap; margin-top: 8px;">
            <v-switch v-model="model.cluster" :label="model.cluster ? strings?.label?.cluster?.on : strings?.label?.cluster?.off" :disabled="readonlyConnections" density="comfortable" hide-details
                @update:model-value="v => { if (v) model.sentinel = false }" />
            <v-switch v-model="model.sentinel" :label="model.sentinel ? strings?.label?.sentinel?.on : strings?.label?.sentinel?.off" :disabled="readonlyConnections" density="comfortable" hide-details
                @update:model-value="v => { if (v) model.cluster = false }" />
            <div style="flex: 1;" />
            <v-btn v-if="(model.cluster || model.sentinel) && !readonlyConnections" variant="flat" color="primary" size="small" @click="addNode()">
                <v-icon class="mr-1">mdi-plus-box</v-icon>
                <span>{{ strings?.label?.addNode }}</span>
            </v-btn>
        </div>

        <v-text-field v-if="model.sentinel" v-model="model.sentinelName" :label="strings?.label?.sentinel?.name" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3 mt-2" />

        <!-- Dynamic nodes -->
        <template v-if="model.cluster || model.sentinel">
            <fieldset v-for="(node, idx) in model.nodes" :key="node.id || idx" style="border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; padding: 16px; margin-top: 16px;">
                <legend style="font-weight: 700;">Node {{ idx + 2 }}</legend>
                <div v-if="!readonlyConnections" style="float: right; display: flex; gap: 4px;">
                    <v-btn variant="flat" color="error" size="small" style="min-width: 40px; padding: 4px;" @click="removeNode(idx)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn variant="flat" color="primary" size="small" style="min-width: 40px; padding: 4px;" @click="addNode(idx)">
                        <v-icon>mdi-plus-box</v-icon>
                    </v-btn>
                </div>
                <template v-if="node.id">
                    <v-text-field :model-value="node.id" :label="strings?.label?.id?.nodeId" variant="outlined" density="comfortable" disabled hide-details class="mb-1" />
                    <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">{{ strings?.label?.id?.info }}</div>
                </template>
                <v-text-field v-model="node.host" :label="strings?.form?.connection?.label?.host" variant="outlined" density="comfortable" :disabled="readonlyConnections" hide-details class="mb-3" />
                <v-text-field v-model.number="node.port" :label="strings?.form?.connection?.label?.port" type="number" variant="outlined" density="comfortable" required :disabled="readonlyConnections" hide-details class="mb-3" />
                <v-text-field v-model="node.username" :label="strings?.form?.connection?.label?.username" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" hide-details class="mb-3" />
                <v-text-field v-model="node.password" :label="strings?.form?.connection?.label?.password" :type="nodePwVisible[idx] ? 'text' : 'password'" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" hide-details class="mb-1"
                    :append-inner-icon="nodePwVisible[idx] ? 'mdi-eye-off' : 'mdi-eye'" @click:append-inner="nodePwVisible[idx] = !nodePwVisible[idx]" />
                <div style="font-size: 12px; opacity: 0.7;">{{ strings?.label?.passwordSecure }}</div>
            </fieldset>
        </template>

        <!-- TLS -->
        <div style="display: flex; gap: 16px; margin-top: 16px; flex-wrap: wrap;">
            <v-switch v-model="model.tlsWithoutCert" :label="strings?.label?.tlsWithoutCert" :disabled="readonlyConnections" density="comfortable" hide-details />
            <v-switch v-model="model.tlsRejectUnauthorized" :label="strings?.label?.tlsRejectUnauthorized" :disabled="readonlyConnections" density="comfortable" hide-details />
        </div>
        <fieldset v-if="!model.tlsWithoutCert" style="border: 1px solid rgba(128,128,128,0.3); border-radius: 4px; padding: 16px; margin-top: 8px;">
            <legend style="font-weight: 700;">TLS</legend>
            <template v-for="{ label, field } in [{ label: 'TLS (redis.crt)', field: 'tlsCrt' }, { label: 'TLS (redis.key)', field: 'tlsKey' }, { label: 'TLS (ca.crt)', field: 'tlsCa' }]" :key="field">
                <v-textarea v-model="model[field]" :label="label" variant="outlined" density="comfortable" :disabled="readonlyConnections" autocomplete="off" rows="1" auto-grow hide-details class="mb-1" />
                <div style="font-size: 12px; opacity: 0.7; margin-bottom: 8px;">{{ strings?.label?.tlsSecure }}</div>
            </template>
        </fieldset>

        <template #actions>
            <v-btn variant="flat" color="warning" @click="emit('close')">
                <v-icon :class="{ 'mr-1': isWide }">mdi-close-circle</v-icon>
                <span v-if="isWide">{{ strings?.intention?.cancel }}</span>
                <v-tooltip v-if="!isWide" activator="parent" location="top">{{ strings?.intention?.cancel }}</v-tooltip>
            </v-btn>
            <v-btn variant="flat" color="success" @click="testConnection">
                <i class="fas fa-plug" style="margin-right: 4px;" />
                <span>{{ strings?.intention?.testConnection }}</span>
            </v-btn>
            <v-btn v-if="!readonlyConnections" variant="flat" color="primary" @click="submit">
                <v-icon class="mr-1">{{ type === 'new' ? 'mdi-plus-box' : 'mdi-content-save' }}</v-icon>
                <span>{{ type === 'new' ? strings?.intention?.add : strings?.intention?.save }}</span>
            </v-btn>
        </template>
    </P3xrDialog>
</template>
