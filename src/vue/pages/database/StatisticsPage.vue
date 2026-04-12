<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useThemeStore } from '../../stores/theme'

const EXCLUDE = ['in', 'run', 'per']
const REPLACE: Record<string, string> = { perc: 'percent', sec: 'seconds' }

function generateKey(key: string, s: any): string {
    if (s?.title?.hasOwnProperty(key)) return s.title[key]
    return key.split('_').map((part, idx) => {
        if (REPLACE.hasOwnProperty(part)) part = REPLACE[part]
        if (part.length < 4 && !EXCLUDE.includes(part)) return part.toUpperCase()
        if (idx === 0) return part[0].toUpperCase() + part.substring(1)
        return part
    }).join(' ')
}

function formatValue(value: any): string {
    if (value === null || value === undefined) return ''
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
}

interface TabSection {
    key: string
    label: string
    items: Array<{ key: string; value: any }>
}

const i18n = useI18nStore()
const state = useRedisStateStore()
const theme = useThemeStore()

const strings = computed(() => i18n.strings)
const topTab = ref(0)
const dbTab = ref(0)

const isCluster = computed(() => state.connection?.cluster === true)

const keyspaceDatabaseEntries = computed(() => {
    const ksDbs = state.info?.keyspaceDatabases ?? {}
    return Object.keys(ksDbs).map(k => ({ key: k, value: ksDbs[k] }))
})

const keyspaceItems = computed(() => {
    const result: Record<string, Array<{ key: string; value: any }>> = {}
    for (const dbEntry of keyspaceDatabaseEntries.value) {
        const ks = state.info?.keyspace?.['db' + dbEntry.key]
        result[dbEntry.key] = ks
            ? Object.keys(ks).map(k => ({ key: k, value: ks[k] }))
            : []
    }
    return result
})

const hasDatabases = computed(() => keyspaceDatabaseEntries.value.length > 0)

const infoSections = computed<TabSection[]>(() => {
    if (!state.info) return []
    const sections = Object.keys(state.info)
        .filter(k => k !== 'keyspace' && k !== 'keyspaceDatabases')
        .map(k => ({
            key: k,
            label: generateKey(k, strings.value),
            items: Object.keys(state.info[k]).map(ik => ({ key: ik, value: state.info[k][ik] })),
        }))

    const mods = Array.isArray(state.modules) ? state.modules : []
    if (mods.length > 0) {
        const moduleItems = mods.map((m: any) => ({ key: m.name, value: `v${m.ver}` }))
        const existingIdx = sections.findIndex(s => s.key.toLowerCase() === 'modules')
        if (existingIdx >= 0) {
            sections[existingIdx].items = moduleItems
        } else {
            sections.push({ key: 'modules', label: generateKey('modules', strings.value), items: moduleItems })
        }
    }
    return sections.filter(s => s.items.length > 0)
})

const allTabs = computed<TabSection[]>(() => {
    const tabs: TabSection[] = []
    if (hasDatabases.value && !isCluster.value) {
        tabs.push({ key: '__db__', label: strings.value?.title?.db ?? 'DB', items: [] })
    }
    tabs.push(...infoSections.value)
    return tabs
})

const currentTab = computed(() => allTabs.value[topTab.value])
const isDbTab = computed(() => currentTab.value?.key === '__db__')
</script>

<template>
    <div v-if="!state.connection" style="padding: 16px;">
        {{ strings?.title?.main }}
    </div>

    <div v-else class="p3xr-statistics">
        <!-- Top-level tabs -->
        <v-tabs
            v-model="topTab"
            variant="scrollable"
            show-arrows
            class="p3xr-statistics-tabs"
            color="primary"
            slider-color="primary"
        >
            <v-tab v-for="tab in allTabs" :key="tab.key">{{ tab.label }}</v-tab>
        </v-tabs>

        <!-- Tab content -->
        <div class="p3xr-statistics-content">
            <!-- DB keyspace tabs -->
            <template v-if="isDbTab">
                <v-tabs
                    v-model="dbTab"
                    variant="scrollable"
                    show-arrows
                    class="p3xr-statistics-db-tabs"
                    bg-color="primary"
                >
                    <v-tab v-for="dbEntry in keyspaceDatabaseEntries" :key="dbEntry.key">{{ dbEntry.key }}</v-tab>
                </v-tabs>
                <div v-for="(dbEntry, i) in keyspaceDatabaseEntries" :key="dbEntry.key">
                    <div v-if="dbTab === i" class="p3xr-statistics-items">
                        <div v-for="item in (keyspaceItems[dbEntry.key] ?? [])" :key="item.key" class="p3xr-statistics-row">
                            <strong>{{ generateKey(item.key, strings) }}</strong>
                            <span>{{ item.value }}</span>
                        </div>
                    </div>
                </div>
            </template>

            <!-- Info section content -->
            <template v-else-if="currentTab">
                <div class="p3xr-statistics-items">
                    <div v-for="item in currentTab.items" :key="item.key" class="p3xr-statistics-row">
                        <strong>{{ generateKey(item.key, strings) }}</strong>
                        <span style="text-align: right; word-break: break-all; max-width: 60%;">{{ formatValue(item.value) }}</span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
.p3xr-statistics {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.p3xr-statistics-tabs {
    flex-shrink: 0;
    position: sticky;
    top: 0;
    z-index: 2;
    background-color: rgb(var(--v-theme-surface));
}

.p3xr-statistics-tabs :deep(.v-tab) {
    text-transform: none !important;
}

.p3xr-statistics-db-tabs {
    flex-shrink: 0;
}

.p3xr-statistics-content {
    flex: 1;
    overflow: auto;
}

.p3xr-statistics-items {
    padding: 8px 16px;
}

.p3xr-statistics-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(var(--v-border-color), 0.06);
}
</style>

<style>
/* DB tabs on primary background — white text, except matrix (black) */
.p3xr-statistics-db-tabs .v-tab {
    color: rgba(255,255,255,0.7) !important;
}
.p3xr-statistics-db-tabs .v-tab--selected {
    color: white !important;
}
.v-theme--matrix .p3xr-statistics-db-tabs .v-tab {
    color: rgba(0,0,0,0.6) !important;
}
.v-theme--matrix .p3xr-statistics-db-tabs .v-tab--selected {
    color: rgba(0,0,0,0.87) !important;
}
</style>
