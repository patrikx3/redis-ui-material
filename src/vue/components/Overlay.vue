<script setup lang="ts">
import { useOverlayStore } from '../stores/overlay.store'
import { useAuthStore } from '../stores/auth.store'

const overlayStore = useOverlayStore()
const authStore = useAuthStore()
</script>

<template>
    <div
        v-if="overlayStore.visible && !(authStore.authRequired && !authStore.isAuthenticated)"
        id="p3xr-overlay"
    >
        <div id="p3xr-overlay-info">
            <i class="fas fa-cog fa-spin" style="font-size: 500% !important; transform: scale(1.5); margin: 0 5px; display: inline-block;" />
            <template v-if="overlayStore.message">
                <br /><br />
                <span>{{ overlayStore.message }}</span>
            </template>
        </div>
    </div>
</template>

<style scoped>
#p3xr-overlay {
    font-size: 125%;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99999;
    color: rgba(128, 128, 128, 0.5);
}
</style>
