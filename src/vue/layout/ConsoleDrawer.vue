<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRedisStateStore } from '../stores/redis-state'
import { useThemeStore } from '../stores/theme'
import ConsoleComponent from '../pages/console/ConsoleComponent.vue'

const state = useRedisStateStore()
const { themeKey } = storeToRefs(useThemeStore())
const isOpen = computed(() => state.consoleDrawerOpen)

const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const borderColor = computed(() => ACCORDION_BG[themeKey.value])

function close() {
    state.setConsoleDrawerOpen(false)
}
</script>

<template>
    <div id="p3xr-console-drawer" :class="{ 'p3xr-drawer-open': isOpen }" :style="{ borderColor: borderColor }">
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
    left: 5px;
    right: calc(5px + var(--p3xr-scroll-gutter, 0px));
    bottom: 48px;
    height: 0;
    overflow: hidden;
    background-color: rgb(var(--v-theme-surface));
    color: rgba(var(--v-theme-on-surface), 0.87);
    border: 0 solid;
    border-radius: 4px 4px 0 0;
    z-index: 8;
    transition: height 150ms ease-out;
    display: flex;
    flex-direction: column;
}
#p3xr-console-drawer.p3xr-drawer-open {
    height: var(--p3xr-console-drawer-height, 30vh);
    border-width: 1px;
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
