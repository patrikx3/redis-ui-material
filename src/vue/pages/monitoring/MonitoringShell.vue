<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { onSocketEvent } from '../../stores/socket.service'
import {
    initMonitoringData,
    bindMonitoringStore,
    startProfiler,
    stopProfiler,
    startPubSub,
    stopPubSub,
    destroyMonitoringData,
} from '../../stores/monitoring-data'

const router = useRouter()
const route = useRoute()
const i18n = useI18nStore()
const state = useRedisStateStore()

const strings = computed(() => i18n.strings)

const routes = ['/monitoring', '/monitoring/profiler', '/monitoring/pubsub', '/monitoring/analysis']
const selectedTab = ref(0)

function syncTab(path: string) {
    if (path.startsWith('/monitoring/profiler')) selectedTab.value = 1
    else if (path.startsWith('/monitoring/pubsub')) selectedTab.value = 2
    else if (path.startsWith('/monitoring/analysis')) selectedTab.value = 3
    else selectedTab.value = 0
}

function onTabChange(index: number) {
    if (index >= 0 && index < routes.length) {
        router.push(routes[index])
    }
}

let servicesStarted = false
const unsubFns: Array<() => void> = []

async function startServices() {
    try { await startProfiler() } catch (e) { console.error('startProfiler failed', e) }
    try { await startPubSub() } catch (e) { console.error('startPubSub failed', e) }
}

function initServices() {
    servicesStarted = true
    initMonitoringData(() => i18n.currentLang)
    bindMonitoringStore()
    startServices()
}

onMounted(() => {
    syncTab(route.path)

    // Redirect to settings on Redis disconnect
    unsubFns.push(onSocketEvent('redis-disconnected', () => {
        router.push('/settings')
    }))

    // If connected, start immediately; otherwise wait
    if (state.connection) {
        initServices()
    } else {
        unsubFns.push(onSocketEvent('connections', () => {
            if (state.connection && !servicesStarted) {
                initServices()
            }
        }))
    }
})

// Watch route changes to sync tab
watch(() => route.path, (path) => syncTab(path))

onUnmounted(() => {
    stopProfiler()
    stopPubSub()
    destroyMonitoringData()
    unsubFns.forEach(fn => fn())
})
</script>

<template>
    <div class="p3xr-monitoring-shell-container">
        <v-tabs
            v-model="selectedTab"
            class="p3xr-monitoring-tabs"
            grow
            centered
            color="primary"
            slider-color="primary"
            @update:model-value="onTabChange"
        >
            <v-tab :value="0">{{ strings?.intention?.pulse }}</v-tab>
            <v-tab :value="1">{{ strings?.intention?.profiler }}</v-tab>
            <v-tab :value="2">{{ strings?.intention?.pubsubMonitor }}</v-tab>
            <v-tab :value="3">{{ strings?.intention?.memoryAnalysis }}</v-tab>
        </v-tabs>
        <div class="p3xr-monitoring-shell-content">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.p3xr-monitoring-shell-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.p3xr-monitoring-tabs {
    flex: 0 0 auto;
    background-color: var(--p3xr-content-bg, rgb(var(--v-theme-surface))) !important;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity, 0.12));
}

.p3xr-monitoring-shell-content {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 5px;
}
</style>
