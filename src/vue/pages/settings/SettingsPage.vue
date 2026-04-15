<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useSettingsStore } from '../../stores/settings'
import { useCommonStore } from '../../stores/common.store'
import { useOverlayStore } from '../../stores/overlay.store'
import { useMainCommandStore } from '../../stores/main-command'
import { request, onSocketEvent } from '../../stores/socket.service'
import { getPersistentItem, setPersistentItem } from '../../stores/electron-bridge'
import { isNotificationsEnabled, setNotificationsEnabled } from '../../stores/notification'
import draggable from 'vuedraggable'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import P3xrButton from '../../components/P3xrButton.vue'
import ConnectionDialog from '../../dialogs/ConnectionDialog.vue'
import AiSettingsDialog from '../../dialogs/AiSettingsDialog.vue'
import AclUserDialog from '../../dialogs/AclUserDialog.vue'
import TreeSettingsDialog from '../../dialogs/TreeSettingsDialog.vue'

function openLink(url: string) {
    globalThis.open(url, '_blank')
}

// @ts-ignore
import { switchGui } from '../../../core/gui-switch'

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const isPromoDomain = window.location.hostname === 'p3x.redis.patrikx3.com'
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const mainCommand = useMainCommandStore()
const { width } = useDisplay()
const isXs = computed(() => width.value < 600)

const connectionsList = computed(() => state.connections?.list ?? [])
const readonlyConnections = computed(() => state.cfg?.readonlyConnections === true)
const currentConnectionId = computed(() => state.connection?.id)

// Force re-render on socket events
const tick = ref(0)
const unsubs: (() => void)[] = []
onMounted(() => {
    unsubs.push(
        onSocketEvent('connections', () => tick.value++),
        onSocketEvent('configuration', () => tick.value++),
        onSocketEvent('redis-status', () => tick.value++),
    )
})
onUnmounted(() => unsubs.forEach(fn => fn()))

// Group mode
const groupModeEnabled = ref(getPersistentItem('p3xr-connection-group-mode') === 'true')
const collapsedGroups = ref<Set<string>>((() => {
    try {
        const stored = getPersistentItem('p3xr-collapsed-connection-groups')
        return stored ? new Set(JSON.parse(stored)) : new Set()
    } catch { return new Set() }
})())

function toggleGroupMode() {
    groupModeEnabled.value = !groupModeEnabled.value
    setPersistentItem('p3xr-connection-group-mode', String(groupModeEnabled.value))
}

function toggleGroup(name: string) {
    const s = collapsedGroups.value
    s.has(name) ? s.delete(name) : s.add(name)
    collapsedGroups.value = new Set(s)
    setPersistentItem('p3xr-collapsed-connection-groups', JSON.stringify([...s]))
}

const groupedConnections = computed(() => {
    void tick.value
    const groups = new Map<string, any[]>()
    for (const conn of connectionsList.value) {
        const name = conn.group?.trim() || ''
        if (!groups.has(name)) groups.set(name, [])
        groups.get(name)!.push(conn)
    }
    return Array.from(groups, ([name, conns]) => ({ name, connections: conns }))
})

function getConnectionClients(conn: any): string {
    const results: string[] = []
    for (const key of Object.keys(state.redisConnections || {})) {
        if (state.redisConnections[key]?.connection?.name === conn.name) {
            const fn = strings.value?.page?.overview?.connectedCount
            const clients = state.redisConnections[key].clients?.length || 0
            results.push(typeof fn === 'function' ? fn({ length: clients }) : '')
        }
    }
    return results.join(' ')
}

// --- Drag & drop handlers ---
function arrayMove<T>(arr: T[], oldIndex: number, newIndex: number): T[] {
    const result = [...arr]
    const [item] = result.splice(oldIndex, 1)
    result.splice(newIndex, 0, item)
    return result
}

async function handleDragEndFlat(evt: any) {
    const { oldIndex, newIndex } = evt
    if (oldIndex === newIndex) return
    const reordered = arrayMove(connectionsList.value, oldIndex, newIndex)
    try {
        await request({ action: 'connection/reorder', payload: { ids: reordered.map((c: any) => c.id) } })
    } catch (e) { common.generalHandleError(e) }
}

async function handleDragEndGroupReorder(evt: any) {
    const { oldIndex, newIndex } = evt
    if (oldIndex === newIndex) return
    const reordered = arrayMove(groupedConnections.value, oldIndex, newIndex)
    const allIds: string[] = []
    for (const group of reordered) {
        for (const conn of group.connections) {
            allIds.push(conn.id)
        }
    }
    try {
        await request({ action: 'connection/reorder', payload: { ids: allIds } })
    } catch (e) { common.generalHandleError(e) }
}

async function handleDragEndWithinGroup(groupName: string, evt: any) {
    const { oldIndex, newIndex } = evt
    if (oldIndex === newIndex) return
    const group = groupedConnections.value.find(g => g.name === groupName)
    if (!group) return
    const reordered = arrayMove(group.connections, oldIndex, newIndex)
    try {
        await request({ action: 'connection/reorder', payload: { group: groupName || undefined, ids: reordered.map((c: any) => c.id) } })
    } catch (e) { common.generalHandleError(e) }
}

// Dialog states
const dialogOpen = ref(false)
const dialogType = ref<'new' | 'edit'>('new')
const dialogModel = ref<any>(undefined)
const aiDialogOpen = ref(false)
const treeDialogOpen = ref(false)
const notifToggle = ref(isNotificationsEnabled())
const aclUsers = ref<any[] | null>(null)
const aclCurrentUser = ref('')
const aclLoading = ref(false)
const aclEditOpen = ref(false)
const aclEditUsername = ref('')
const aclEditRules = ref('')
const aclEditIsNew = ref(false)
const currentConnectionName = computed(() => connectionsList.value.find((c: any) => c.id === currentConnectionId.value)?.name || '')

async function loadAclUsers() {
    aclLoading.value = true
    try {
        const resp = await request({ action: 'acl/list' })
        aclUsers.value = resp.data.users
        aclCurrentUser.value = resp.data.currentUser
    } catch {
        aclUsers.value = null
    }
    aclLoading.value = false
}

// Auto-load ACL when connection changes
watch(currentConnectionId, (newId, oldId) => {
    if (newId && newId !== oldId) { loadAclUsers() }
    else if (!newId) { aclUsers.value = null; aclCurrentUser.value = '' }
}, { immediate: true })

async function deleteAclUser(username: string) {
    try {
        const msg = strings.value?.page?.acl?.confirmDelete + ` "${username}"?`
        await common.confirm({ message: msg })
        await request({ action: 'acl/del-user', payload: { username } })
        common.toast(strings.value?.page?.acl?.userDeleted)
        loadAclUsers()
    } catch {}
}

function openAclCreate() {
    aclEditIsNew.value = true
    aclEditUsername.value = ''
    aclEditRules.value = 'on >password +@all ~* &*'
    aclEditOpen.value = true
}

function openAclEdit(user: any) {
    aclEditIsNew.value = false
    aclEditUsername.value = user.name
    aclEditRules.value = user.raw.split(' ').slice(2).join(' ')
    aclEditOpen.value = true
}

async function handleAclDialogClose(result?: { username: string; rules: string[] }) {
    aclEditOpen.value = false
    if (result) {
        try {
            await request({ action: 'acl/set-user', payload: { username: result.username, rules: result.rules } })
            common.toast(strings.value?.page?.acl?.userSaved)
            loadAclUsers()
        } catch (e) { common.generalHandleError(e) }
    }
}

function handleConnectionForm(formType: 'new' | 'edit', formModel?: any) {
    dialogType.value = formType
    dialogModel.value = formModel
    dialogOpen.value = true
}

// Connect
const handleConnect = (conn: any) => mainCommand.connect(conn)

async function handleDelete(conn: any) {
    try {
        await common.confirm({ message: strings.value?.confirm?.deleteConnectionText })
        await request({ action: 'connection/delete', payload: { id: conn.id } })
        common.toast(strings.value?.status?.deleted)
    } catch (e: any) {
        if (e !== undefined) common.generalHandleError(e)
    }
}

// AI settings
const isAiEnabled = computed(() => state.cfg?.aiEnabled !== false)
const hasGroqApiKey = computed(() => state.cfg?.hasGroqApiKey === true)
const isUseOwnKey = computed(() => state.cfg?.aiUseOwnKey === true && hasGroqApiKey.value)
const isAiReadonly = computed(() => readonlyConnections.value || state.cfg?.groqApiKeyReadonly === true)

async function toggleAiEnabled(enabled: boolean) {
    try {
        await request({ action: 'ai/set-groq-api-key', payload: { aiEnabled: enabled } })
        state.cfg = { ...state.cfg, aiEnabled: enabled }
    } catch (e) { common.generalHandleError(e) }
}

async function toggleUseOwnKey(useOwn: boolean) {
    if (useOwn && !hasGroqApiKey.value) return
    try {
        await request({ action: 'ai/set-groq-api-key', payload: { aiEnabled: isAiEnabled.value, aiUseOwnKey: useOwn } })
        state.cfg = { ...state.cfg, aiUseOwnKey: useOwn }
    } catch (e) { common.generalHandleError(e) }
}

// Tree settings items
const treeSettingsItems = computed(() => [
    { label: strings.value?.form?.treeSettings?.field?.treeSeparator, value: settings.redisTreeDivider || strings.value?.label?.treeSeparatorEmptyNote },
    { label: strings.value?.form?.treeSettings?.field?.page, value: settings.pageCount, hint: strings.value?.form?.treeSettings?.error?.page },
    { label: strings.value?.form?.treeSettings?.field?.keyPageCount, value: settings.keyPageCount, hint: strings.value?.form?.treeSettings?.error?.keyPageCount },
    { label: strings.value?.form?.treeSettings?.maxValueDisplay, value: settings.maxValueDisplay, hint: strings.value?.form?.treeSettings?.maxValueDisplayInfo },
    { label: strings.value?.form?.treeSettings?.maxKeys, value: settings.maxKeys, hint: strings.value?.form?.treeSettings?.maxKeysInfo },
    { label: strings.value?.form?.treeSettings?.field?.keysSort, value: settings.keysSort ? strings.value?.label?.keysSort?.on : strings.value?.label?.keysSort?.off },
    { label: strings.value?.form?.treeSettings?.field?.searchMode, value: settings.searchClientSide ? strings.value?.form?.treeSettings?.label?.searchModeClient : strings.value?.form?.treeSettings?.label?.searchModeServer },
    { label: strings.value?.form?.treeSettings?.field?.searchModeStartsWith, value: settings.searchStartsWith ? strings.value?.form?.treeSettings?.label?.searchModeStartsWith : strings.value?.form?.treeSettings?.label?.searchModeIncludes },
    { label: null, value: settings.jsonFormat === 2 ? strings.value?.form?.treeSettings?.label?.jsonFormatTwoSpace : strings.value?.form?.treeSettings?.label?.jsonFormatFourSpace },
    { label: null, value: settings.animation ? strings.value?.form?.treeSettings?.label?.animation : strings.value?.form?.treeSettings?.label?.noAnimation },
    { label: null, value: settings.undoEnabled ? strings.value?.form?.treeSettings?.label?.undoEnabled : strings.value?.form?.treeSettings?.label?.undoDisabled, hint: strings.value?.form?.treeSettings?.undoHint },
    { label: null, value: settings.showDiffBeforeSave ? strings.value?.form?.treeSettings?.label?.diffEnabled : strings.value?.form?.treeSettings?.label?.diffDisabled },
])
</script>

<template>
    <!-- Donate -->
    <P3xrAccordion :title="strings?.title?.donateTitle" accordion-key="donate" :collapsible="false">
        <template #actions>
            <P3xrButton :label="`${strings?.title?.donate} — PayPal`" icon="mdi-heart" @click="openLink('https://www.paypal.me/patrikx3')" />
        </template>
        <div style="padding: 12px 16px; font-size: 13px; opacity: 0.85; line-height: 1.6;">
            {{ strings?.title?.donateDescription }}
        </div>
    </P3xrAccordion>

    <!-- Promo: AI Network Assistant (demo site only) -->
    <template v-if="isPromoDomain">
        <br />

        <P3xrAccordion :title="strings?.promo?.title" accordion-key="promo-network" :collapsible="false">
            <template #actions>
                <P3xrButton :label="strings?.promo?.visit" icon="mdi-earth-arrow-right" @click="openLink('https://network.corifeus.com')" />
            </template>
            <div style="padding: 12px 16px; font-size: 13px; opacity: 0.85; line-height: 1.6;">
                {{ strings?.promo?.description }}
            </div>
            <div style="padding: 0 16px 12px; font-size: 11px; opacity: 0.5; line-height: 1.4;">
                {{ strings?.promo?.disclaimer }}
            </div>
        </P3xrAccordion>
    </template>

    <br />

    <!-- Connections -->
    <P3xrAccordion :title="strings?.label?.connections" accordion-key="settings">
        <template #actions>
            <P3xrButton :label="strings?.label?.grouped" :icon="groupModeEnabled ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline'" @click="toggleGroupMode" />
            <P3xrButton v-if="!readonlyConnections" :label="strings?.intention?.connectionAdd" icon="mdi-plus-box" @click="handleConnectionForm('new')" />
        </template>

        <div v-if="connectionsList.length === 0" style="padding: 16px;">
            {{ strings?.intention?.noConnectionsInSettings }}
        </div>

        <!-- Grouped mode with drag & drop -->
        <draggable v-if="connectionsList.length > 0 && groupModeEnabled"
            :model-value="groupedConnections" item-key="name"
            :animation="150" handle=".p3xr-group-header"
            @end="handleDragEndGroupReorder">
            <template #item="{ element: group }">
                <div>
                    <div class="p3xr-group-header" style="cursor: grab;" @click="toggleGroup(group.name)">
                        <v-icon size="18">{{ collapsedGroups.has(group.name) ? 'mdi-chevron-right' : 'mdi-chevron-down' }}</v-icon>
                        <span>{{ group.name || strings?.label?.ungrouped }}</span>
                        <span style="opacity: 0.5; font-weight: 400; font-size: 12px;">({{ group.connections.length }})</span>
                    </div>
                    <template v-if="!collapsedGroups.has(group.name)">
                        <draggable :model-value="group.connections" item-key="id"
                            :animation="150" handle=".p3xr-connection-row"
                            @end="(evt: any) => handleDragEndWithinGroup(group.name, evt)">
                            <template #item="{ element: conn, index: i }">
                                <div>
                                    <div class="p3xr-connection-row" style="cursor: grab;">
                                        <div style="flex: 1; min-width: 0; overflow: hidden;">
                                            <div style="font-weight: 700;">{{ conn.name }}</div>
                                            <div style="font-size: 13px; opacity: 0.7;">{{ conn.host }}:{{ conn.port }}</div>
                                            <div style="font-size: 13px; opacity: 0.7;">{{ getConnectionClients(conn) }}</div>
                                        </div>
                                        <v-btn v-if="currentConnectionId !== conn.id" variant="flat" color="secondary" size="small" @click="handleConnect(conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                            <v-icon>mdi-power</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.connect }}</span>
                                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.connect }}</v-tooltip>
                                        </v-btn>
                                        <v-btn v-else variant="flat" color="secondary" size="small" @click="mainCommand.disconnect()" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                            <i class="fa fa-power-off" /><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.disconnect }}</span>
                                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.disconnect }}</v-tooltip>
                                        </v-btn>
                                        <template v-if="!readonlyConnections">
                                            <v-btn variant="flat" color="error" size="small" @click="handleDelete(conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                                <v-icon>mdi-delete-forever</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.delete }}</span>
                                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.delete }}</v-tooltip>
                                            </v-btn>
                                            <v-btn variant="flat" color="primary" size="small" @click="handleConnectionForm('edit', conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                                <v-icon>mdi-pencil</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.edit }}</span>
                                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.edit }}</v-tooltip>
                                            </v-btn>
                                        </template>
                                        <v-btn v-if="readonlyConnections" variant="flat" color="primary" size="small" @click="handleConnectionForm('edit', conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                            <v-icon>mdi-comment-text</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.view }}</span>
                                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.view }}</v-tooltip>
                                        </v-btn>
                                    </div>
                                    <v-divider v-if="i < group.connections.length - 1" />
                                </div>
                            </template>
                        </draggable>
                    </template>
                </div>
            </template>
        </draggable>

        <!-- Flat mode with drag & drop -->
        <draggable v-if="connectionsList.length > 0 && !groupModeEnabled"
            :model-value="connectionsList" item-key="id"
            :animation="150" handle=".p3xr-connection-row"
            @end="handleDragEndFlat">
            <template #item="{ element: conn, index: i }">
                <div>
                    <div class="p3xr-connection-row" style="cursor: grab;">
                        <div style="flex: 1; min-width: 0; overflow: hidden;">
                            <div style="font-weight: 700;">{{ conn.name }}</div>
                            <div style="font-size: 13px; opacity: 0.7;">{{ conn.host }}:{{ conn.port }}</div>
                            <div style="font-size: 13px; opacity: 0.7;">{{ getConnectionClients(conn) }}</div>
                        </div>
                        <v-btn v-if="currentConnectionId !== conn.id" variant="flat" color="secondary" size="small" @click="handleConnect(conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                            <v-icon>mdi-power</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.connect }}</span>
                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.connect }}</v-tooltip>
                        </v-btn>
                        <v-btn v-else variant="flat" color="secondary" size="small" @click="mainCommand.disconnect()" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                            <i class="fa fa-power-off" /><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.disconnect }}</span>
                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.disconnect }}</v-tooltip>
                        </v-btn>
                        <template v-if="!readonlyConnections">
                            <v-btn variant="flat" color="error" size="small" @click="handleDelete(conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                <v-icon>mdi-delete-forever</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.delete }}</span>
                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.delete }}</v-tooltip>
                            </v-btn>
                            <v-btn variant="flat" color="primary" size="small" @click="handleConnectionForm('edit', conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                <v-icon>mdi-pencil</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.edit }}</span>
                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.edit }}</v-tooltip>
                            </v-btn>
                        </template>
                        <v-btn v-if="readonlyConnections" variant="flat" color="primary" size="small" @click="handleConnectionForm('edit', conn)" :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                            <v-icon>mdi-comment-text</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.intention?.view }}</span>
                            <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.intention?.view }}</v-tooltip>
                        </v-btn>
                    </div>
                    <v-divider v-if="i < connectionsList.length - 1" />
                </div>
            </template>
        </draggable>
    </P3xrAccordion>

    <template v-if="currentConnectionId">
        <br />
        <!-- ACL Users -->
        <P3xrAccordion :title="`${strings?.page?.acl?.title} — ${currentConnectionName}`" accordion-key="acl-users">
            <template #actions>
                <P3xrButton @click="loadAclUsers(); $event.stopPropagation()" :label="strings?.intention?.refresh" icon="mdi-refresh" />
                <P3xrButton v-if="!readonlyConnections" @click="openAclCreate(); $event.stopPropagation()" :label="strings?.page?.acl?.createUser" icon="mdi-account-plus" />
            </template>
            <div v-if="aclLoading" style="padding: 16px; opacity: 0.6;">
                {{ strings?.page?.acl?.loading }}
            </div>
            <div v-else-if="!aclUsers" style="padding: 16px; opacity: 0.6;">
                {{ strings?.page?.acl?.noUsers }}
            </div>
            <div v-else>
                <template v-for="(user, idx) in aclUsers" :key="user.name">
                    <div :class="{ 'p3xr-settings-list-item': !readonlyConnections }" style="display: flex; align-items: center; gap: 4px; padding: 8px 8px 8px 16px; min-height: 56px;" @click="!readonlyConnections && openAclEdit(user)">
                        <div style="flex: 1; min-width: 0; display: flex; align-items: center;">
                            <span style="font-weight: 700;">{{ user.name }}</span>
                            <span v-if="user.name === aclCurrentUser" style="opacity: 0.5; margin-left: 6px; font-size: 11px; line-height: 1;">({{ strings?.page?.acl?.currentUser }})</span>
                        </div>
                        <v-tooltip v-if="!user.enabled" :text="strings?.page?.acl?.disabled" location="top">
                            <template #activator="{ props: tp }">
                                <v-icon v-bind="tp" color="warning" size="20">mdi-alert</v-icon>
                            </template>
                        </v-tooltip>
                        <template v-if="!readonlyConnections">
                            <v-btn v-if="user.name !== 'default' && user.name !== aclCurrentUser"
                                variant="flat" color="error" size="small"
                                @click.stop="deleteAclUser(user.name)"
                                :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                <v-icon>mdi-delete</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.page?.acl?.deleteUser }}</span>
                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.page?.acl?.deleteUser }}</v-tooltip>
                            </v-btn>
                            <v-btn variant="flat" color="primary" size="small"
                                @click.stop="openAclEdit(user)"
                                :style="isXs ? 'min-width:40px;width:40px;height:40px;padding:0;' : 'min-width:auto;padding:0 8px;'">
                                <v-icon>mdi-pencil</v-icon><span v-if="!isXs" style="margin-left:3px;">{{ strings?.page?.acl?.editUser }}</span>
                                <v-tooltip v-if="isXs" activator="parent" location="top">{{ strings?.page?.acl?.editUser }}</v-tooltip>
                            </v-btn>
                        </template>
                    </div>
                    <v-divider v-if="idx < aclUsers.length - 1" />
                </template>
            </div>
        </P3xrAccordion>
        <AclUserDialog
            :open="aclEditOpen"
            :username="aclEditUsername"
            :rules="aclEditRules"
            :is-new="aclEditIsNew"
            @close="handleAclDialogClose"
        />
    </template>

    <br />

    <!-- GUI Framework -->
    <P3xrAccordion title="GUI" accordion-key="gui-framework">
        <div style="display: flex; justify-content: flex-end; padding: 16px;">
            <div class="p3xr-gui-toggle">
                <span class="p3xr-gui-toggle-item" @click="switchGui('ng')"><i class="fab fa-angular" style="color:#dd0031;margin-right:6px;font-size:28px;line-height:1;"></i>Angular</span>
                <span class="p3xr-gui-toggle-item" @click="switchGui('react')"><i class="fab fa-react" style="color:#61dafb;margin-right:6px;font-size:24px;line-height:1;"></i>React</span>
                <span class="p3xr-gui-toggle-active"><i class="fab fa-vuejs" style="color:#42b883;margin-right:6px;font-size:26px;line-height:1;"></i>Vue</span>
            </div>
        </div>
    </P3xrAccordion>

    <br />

    <!-- AI Settings -->
    <P3xrAccordion :title="strings?.label?.aiSettings" accordion-key="ai-settings">
        <template #actions>
            <P3xrButton v-if="!readonlyConnections && !state.cfg?.groqApiKeyReadonly" :label="strings?.intention?.edit" icon="mdi-pencil" @click="aiDialogOpen = true" />
        </template>
        <v-list density="compact" class="pa-0">
            <v-list-item>
                <div style="display: flex; width: 100%; align-items: center;">
                    <div style="flex: 1; font-weight: 500;">{{ strings?.label?.aiEnabled }}</div>
                    <div style="padding-right: 8px;"><v-switch :model-value="isAiEnabled" :disabled="isAiReadonly" @update:model-value="toggleAiEnabled" density="comfortable" hide-details /></div>
                </div>
            </v-list-item>
            <template v-if="isAiEnabled && hasGroqApiKey">
                <v-divider />
                <v-list-item>
                    <div style="width: 100%;">
                        <div style="display: flex; align-items: center;">
                            <div style="flex: 1; font-weight: 500;">{{ strings?.label?.aiRouteViaNetwork }}</div>
                            <div style="padding-right: 8px;"><v-switch :model-value="!isUseOwnKey" :disabled="isAiReadonly" @update:model-value="(v: any) => toggleUseOwnKey(!v)" density="comfortable" hide-details /></div>
                        </div>
                        <div style="font-size: 12px; opacity: 0.7;">
                            {{ isUseOwnKey ? strings?.label?.aiRoutingDirect : strings?.label?.aiRoutingNetwork }}
                            <a v-if="!isUseOwnKey" href="https://console.groq.com" target="_blank" rel="noreferrer" style="color: inherit; text-decoration: underline;">console.groq.com</a>
                        </div>
                    </div>
                </v-list-item>
                <v-divider />
                <v-list-item>
                    <div style="display: flex; width: 100%;">
                        <div style="flex: 1; font-weight: 500;">{{ strings?.label?.aiGroqApiKey }}</div>
                        <div style="font-family: monospace;">{{ state.cfg?.groqApiKeyMasked }}</div>
                    </div>
                </v-list-item>
            </template>
        </v-list>
    </P3xrAccordion>

    <br />

    <!-- Desktop Notifications -->
    <P3xrAccordion :title="strings?.label?.desktopNotifications" accordion-key="desktop-notifications">
        <v-list density="compact" class="pa-0">
            <v-list-item>
                <div style="display: flex; width: 100%; align-items: center;">
                    <div style="flex: 1; font-weight: 500;">{{ strings?.label?.desktopNotificationsEnabled }}</div>
                    <div style="padding-right: 8px;"><v-switch :model-value="notifToggle" @update:model-value="(v: any) => { setNotificationsEnabled(v); notifToggle = v }" density="comfortable" hide-details /></div>
                </div>
            </v-list-item>
            <v-divider />
            <v-list-item>
                <div style="font-size: 12px; opacity: 0.7;">{{ strings?.label?.desktopNotificationsInfo }}</div>
            </v-list-item>
        </v-list>
    </P3xrAccordion>

    <br />

    <!-- Tree/Redis Settings -->
    <P3xrAccordion :title="strings?.form?.treeSettings?.label?.formName" accordion-key="tree-settings">
        <template #actions>
            <P3xrButton :label="strings?.intention?.edit" icon="mdi-pencil" @click="treeDialogOpen = true" />
        </template>
        <v-list density="compact" class="pa-0">
            <template v-for="(item, i) in treeSettingsItems" :key="i">
                <v-list-item class="p3xr-settings-list-item" @click="treeDialogOpen = true">
                    <div style="width: 100%;">
                        <div style="display: flex; width: 100%;">
                            <div v-if="item.label" style="flex: 1; font-weight: 500;">{{ item.label }}</div>
                            <div :style="{ fontWeight: item.label ? 400 : 500, opacity: item.label ? 0.8 : 1 }">{{ String(item.value) }}</div>
                        </div>
                        <div v-if="item.hint" style="font-size: 12px; opacity: 0.7;">{{ item.hint }}</div>
                    </div>
                </v-list-item>
                <v-divider v-if="i < treeSettingsItems.length - 1" />
            </template>
        </v-list>
    </P3xrAccordion>

    <div style="height: 8px;" />

    <!-- Dialogs -->
    <ConnectionDialog :open="dialogOpen" :type="dialogType" :source-model="dialogModel" @close="dialogOpen = false" />
    <AiSettingsDialog :open="aiDialogOpen" @close="aiDialogOpen = false" />
    <TreeSettingsDialog :open="treeDialogOpen" @close="treeDialogOpen = false" />
</template>

<style scoped>
.p3xr-connection-row {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 8px 8px 16px;
    min-height: 56px;
    box-sizing: border-box;
}
.p3xr-group-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 700;
    font-size: 13px;
    user-select: none;
    opacity: 0.8;
    background: rgba(128, 128, 128, 0.05);
    border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}
.p3xr-group-header:hover {
    opacity: 1;
    background: rgba(128, 128, 128, 0.1);
}
.p3xr-gui-toggle {
    display: inline-flex;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(128, 128, 128, 0.3);
}
.p3xr-gui-toggle-active,
.p3xr-gui-toggle-item {
    padding: 8px 12px;
    font-size: 14px;
    user-select: none;
    display: inline-flex;
    align-items: center;
    height: 40px;
    box-sizing: border-box;
}
.p3xr-gui-toggle-active {
    font-weight: 700;
    background: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-on-primary));
}
.p3xr-gui-toggle-active i[class*="fa-"] {
    text-shadow: 0 0 3px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3);
}
.p3xr-gui-toggle-item {
    font-weight: 500;
    cursor: pointer;
}
.p3xr-gui-toggle-item:hover {
    background: rgba(128, 128, 128, 0.1);
}
</style>

<style>
.p3xr-settings-list-item {
    cursor: pointer;
}
.p3xr-settings-list-item:hover {
    background: rgba(128, 128, 128, 0.08);
}
</style>
