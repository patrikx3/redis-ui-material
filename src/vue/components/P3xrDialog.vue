<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'

const props = withDefaults(defineProps<{
    open: boolean
    title: string
    icon?: string
    fullScreenOnMobile?: boolean
    width?: string
    contentPadding?: boolean
    height?: string
}>(), {
    fullScreenOnMobile: true,
    width: '75vw',
    contentPadding: true,
})

const emit = defineEmits<{ close: [] }>()

const { width: displayWidth } = useDisplay()
const { themeKey } = storeToRefs(useThemeStore())
const isSmall = computed(() => displayWidth.value < 600)
const fullScreen = computed(() => props.fullScreenOnMobile && isSmall.value)

// Exact toolbar colors per theme (strongBg from React themes)
const STRONG_BG: Record<string, string> = {
    enterprise: '#212121', light: '#263238', redis: '#b71c1c',
    dark: '#212121', darkNeu: '#263238', darkoBluo: '#1a237e',
    matrix: '#33691e',
}
const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}

const headerBg = computed(() => STRONG_BG[themeKey.value] || '#212121')
// Matrix dialog footer uses dark green, not bright green
const footerBg = computed(() => themeKey.value === 'matrix' ? '#0a2e0d' : (ACCORDION_BG[themeKey.value] || '#9e9e9e'))
</script>

<template>
    <v-dialog
        :model-value="open"
        @update:model-value="(v: boolean) => { if (!v) emit('close') }"
        :fullscreen="fullScreen"
        :max-width="fullScreen ? undefined : width"
        :width="fullScreen ? undefined : width"
        scrollable
    >
        <v-card :style="{ maxHeight: fullScreen ? undefined : 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column', overflow: 'hidden', ...(height && !fullScreen ? { height } : {}) }">
            <!-- Header — strongBg, 48px -->
            <v-toolbar
                density="compact"
                :style="{ backgroundColor: headerBg, color: 'rgba(255,255,255,0.87)', flexShrink: 0, boxShadow: 'none', height: '48px', minHeight: '48px', maxHeight: '48px' }"
            >
                <div style="flex: 1; display: flex; align-items: center; height: 100%; padding-left: 12px; font-size: 16px; font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                    <v-icon v-if="icon" size="20" style="margin-right: 8px;">{{ icon }}</v-icon>
                    {{ title }}
                </div>
                <slot name="headerActions" />
                <v-btn icon variant="text" color="inherit" size="small" @click="emit('close')" style="margin: 0;">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>

            <!-- Content — scrollable -->
            <v-card-text :style="{ flex: '1 1 auto', minHeight: 0, overflow: 'auto', padding: contentPadding ? '16px' : '0' }">
                <slot />
            </v-card-text>

            <!-- Footer — accordionBg -->
            <v-card-actions v-if="$slots.actions" :style="{ flexShrink: 0, backgroundColor: footerBg, gap: '8px', padding: '8px', justifyContent: 'flex-end' }">
                <slot name="actions" />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
