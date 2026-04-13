<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import P3xrButton from '../../components/P3xrButton.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useThemeStore } from '../../stores/theme'
import { useMainCommandStore } from '../../stores/main-command'

const i18n = useI18nStore()
const state = useRedisStateStore()
const cmd = useMainCommandStore()
const { themeKey } = storeToRefs(useThemeStore())
const { width: displayWidth } = useDisplay()

const strings = computed(() => i18n.strings)
const isXs = computed(() => displayWidth.value < 600)
const isWide = computed(() => displayWidth.value >= 720)
const isReadonly = computed(() => state.connection?.readonly === true)
const isCluster = computed(() => state.connection?.cluster === true)
const hasConnection = computed(() => !!state.connection)

const keyspaceDatabases = computed(() => state.info?.keyspaceDatabases || {})
const hasKeys = (dbIndex: number) => !!keyspaceDatabases.value[dbIndex]

// Accordion colors for toolbar background
const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const ACCORDION_COLOR: Record<string, string> = {
    enterprise: 'rgba(0,0,0,0.87)', light: 'rgba(0,0,0,0.87)', redis: 'rgba(0,0,0,0.87)',
    dark: 'rgba(0,0,0,0.87)', darkNeu: 'rgba(0,0,0,0.87)', darkoBluo: '#fff',
    matrix: 'rgba(0,0,0,0.87)',
}
const toolbarBg = computed(() => ACCORDION_BG[themeKey.value])
const toolbarColor = computed(() => ACCORDION_COLOR[themeKey.value])
</script>

<template>
    <div v-if="hasConnection" class="p3xr-database-header" :style="{ backgroundColor: toolbarBg, color: toolbarColor }">
        <div class="p3xr-database-header-inner">
            <!-- Title (hidden on xs) -->
            <span v-if="!isXs" class="p3xr-database-header-title" @click="cmd.statistics()">
                {{ strings?.intention?.main }}
            </span>

            <!-- DB Selector -->
            <v-menu v-if="!isCluster && state.databaseIndexes.length > 0" location="bottom start">
                <template #activator="{ props: menuProps }">
                    <v-btn v-bind="menuProps" variant="text" style="color: inherit; text-transform: none; font-size: 14px; min-width: auto; padding: 0 8px;">
                        <span style="font-weight: bold; margin-right: 4px;">DB:</span>
                        <v-icon size="16" style="margin-right: 2px;">{{ hasKeys(state.currentDatabase ?? 0) ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}</v-icon>
                        <span>{{ state.currentDatabase ?? 0 }}</span>
                        <v-icon size="18" style="margin-left: 2px;">mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list density="compact">
                    <v-list-item
                        v-for="idx in state.databaseIndexes"
                        :key="idx"
                        :active="(state.currentDatabase ?? 0) === idx"
                        @click="cmd.selectDatabase(idx)"
                    >
                        <template #prepend>
                            <v-icon size="18">{{ hasKeys(idx) ? 'mdi-radiobox-marked' : 'mdi-radiobox-blank' }}</v-icon>
                        </template>
                        <v-list-item-title>{{ idx }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- Save (non-readonly) -->
            <P3xrButton v-if="!isReadonly"
                @click="cmd.save()"
                :label="strings?.intention?.save"
                icon="mdi-content-save"
            />

            <!-- Statistics -->
            <P3xrButton
                @click="cmd.statistics()"
                :label="strings?.intention?.statistics"
                icon="mdi-chart-line"
            />

            <!-- Refresh -->
            <P3xrButton
                @click="cmd.refresh()"
                :label="strings?.intention?.refresh"
                icon="mdi-refresh"
            />
        </div>
    </div>
</template>

<style scoped>
.p3xr-database-header {
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    border-radius: 4px 4px 0 0;
    box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}

.p3xr-database-header-inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 8px 0 16px;
    box-sizing: border-box;
    gap: 4px;
}

.p3xr-database-header-title {
    flex: 1;
    font-size: 20px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}

.p3xr-database-header-db {
    display: flex;
    align-items: center;
    margin-right: 4px;
}
</style>

<style>
/* Header buttons inherit toolbar color */
.p3xr-database-header .v-btn {
    color: inherit !important;
}
.p3xr-database-header .v-btn .v-icon {
    color: inherit !important;
}
.p3xr-database-header .v-btn .v-btn__overlay {
    opacity: 0 !important;
}
.p3xr-database-header .v-btn:hover .v-btn__overlay {
    opacity: 0.08 !important;
}
</style>
