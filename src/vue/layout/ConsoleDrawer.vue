<script setup lang="ts">
import { computed } from 'vue'
import { useRedisStateStore } from '../stores/redis-state'
import ConsoleComponent from '../pages/console/ConsoleComponent.vue'

const state = useRedisStateStore()
const isOpen = computed(() => state.consoleDrawerOpen)

function close() {
    state.setConsoleDrawerOpen(false)
}
</script>

<template>
    <div id="p3xr-console-drawer" :class="{ 'p3xr-drawer-open': isOpen }">
        <div id="p3xr-console-drawer-body">
            <ConsoleComponent :embedded="true"
                              :show-close-button="true"
                              @close-request="close" />
        </div>
    </div>
</template>

<style>
#p3xr-console-drawer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 48px;
    height: 0;
    overflow: hidden;
    background-color: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), 0.87);
    border-top: 1px solid rgba(255, 255, 255, 0.16);
    z-index: 8;
    transition: height 150ms ease-out;
    display: flex;
    flex-direction: column;
}
#p3xr-console-drawer.p3xr-drawer-open {
    height: var(--p3xr-console-drawer-height, 30vh);
}
#p3xr-console-drawer-body {
    flex: 1 1 auto;
    min-height: 0;
    overflow: hidden;
    position: relative;
}
#p3xr-console-drawer-body > * {
    width: 100%;
    height: 100%;
}
:root {
    --p3xr-console-drawer-height: 30vh;
}
</style>
