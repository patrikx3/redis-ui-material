<script setup lang="ts">
/**
 * KeyPagerInline — exact port of React KeyPagerInline.tsx
 * Inline pagination for key type renderers (hash, list, set, zset, stream).
 */
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../../stores/i18n'
import { useThemeStore } from '../../../stores/theme'
import { type Paging, pagerAction, pageChange } from './key-type-base'

const props = defineProps<{
    paging: Paging
}>()

const emit = defineEmits<{
    pageChanged: [paging: Paging]
}>()

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const { themeKey } = storeToRefs(useThemeStore())

// Theme-matched input colors (same as tree controls and console)
const INPUT_BORDER: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5', matrix: '#76ff03',
}
const INPUT_BG: Record<string, string> = {
    enterprise: 'white', light: 'white', redis: 'white',
    dark: 'rgba(64,64,64,1)', darkNeu: 'rgba(64,64,64,1)', darkoBluo: 'rgba(64,64,64,1)', matrix: 'rgba(64,64,64,1)',
}
const INPUT_COLOR: Record<string, string> = {
    enterprise: 'black', light: 'black', redis: 'black',
    dark: 'white', darkNeu: 'white', darkoBluo: 'white', matrix: 'white',
}
const borderColor = computed(() => INPUT_BORDER[themeKey.value] || '#9e9e9e')
const inputBg = computed(() => INPUT_BG[themeKey.value] || 'rgba(64,64,64,1)')
const inputColor = computed(() => INPUT_COLOR[themeKey.value] || 'white')

function doAction(action: 'first' | 'prev' | 'next' | 'last') {
    emit('pageChanged', pagerAction(props.paging, action))
}

function onPageInput(e: Event) {
    const val = parseInt((e.target as HTMLInputElement).value, 10)
    if (!isNaN(val)) emit('pageChanged', pageChange(props.paging, val))
}
</script>

<template>
    <div v-if="paging.pages > 1" class="p3xr-key-pager">
        <v-tooltip :text="strings?.page?.treeControls?.pager?.first" location="top">
            <template #activator="{ props: tp }">
                <button v-bind="tp" class="p3xr-pager-btn" :style="{ color: borderColor }" :disabled="paging.page <= 1" @click="doAction('first')">
                    <v-icon size="24">mdi-skip-previous</v-icon>
                </button>
            </template>
        </v-tooltip>
        <v-tooltip :text="strings?.page?.treeControls?.pager?.prev" location="top">
            <template #activator="{ props: tp }">
                <button v-bind="tp" class="p3xr-pager-btn" :style="{ color: borderColor }" :disabled="paging.page <= 1" @click="doAction('prev')">
                    <v-icon size="24">mdi-chevron-left</v-icon>
                </button>
            </template>
        </v-tooltip>
        <input
            type="number"
            :value="paging.page"
            class="p3xr-pager-input"
            :style="{ borderColor, backgroundColor: inputBg, color: inputColor }"
            min="1" :max="paging.pages"
            @change="onPageInput"
        />
        <span class="p3xr-pager-total" :style="{ color: inputColor }">/ {{ paging.pages }}</span>
        <v-tooltip :text="strings?.page?.treeControls?.pager?.next" location="top">
            <template #activator="{ props: tp }">
                <button v-bind="tp" class="p3xr-pager-btn" :style="{ color: borderColor }" :disabled="paging.page >= paging.pages" @click="doAction('next')">
                    <v-icon size="24">mdi-chevron-right</v-icon>
                </button>
            </template>
        </v-tooltip>
        <v-tooltip :text="strings?.page?.treeControls?.pager?.last" location="top">
            <template #activator="{ props: tp }">
                <button v-bind="tp" class="p3xr-pager-btn" :style="{ color: borderColor }" :disabled="paging.page >= paging.pages" @click="doAction('last')">
                    <v-icon size="24">mdi-skip-next</v-icon>
                </button>
            </template>
        </v-tooltip>
    </div>
</template>

<style scoped>
.p3xr-key-pager {
    display: flex;
    align-items: center;
    padding: 4px 0;
    justify-content: center;
}
.p3xr-pager-btn {
    background: none;
    border: none;
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    margin: 0;
    border-radius: 50%;
}
.p3xr-pager-btn:disabled {
    opacity: 0.3;
    cursor: default;
}
.p3xr-pager-input {
    width: 64px;
    margin: 0 4px;
    text-align: center;
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    border: 2px solid;
    border-radius: 3px;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    height: 24px;
    vertical-align: middle;
    -moz-appearance: textfield;
}
.p3xr-pager-input::-webkit-inner-spin-button,
.p3xr-pager-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.p3xr-pager-total {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    margin: 0 4px;
}
</style>
