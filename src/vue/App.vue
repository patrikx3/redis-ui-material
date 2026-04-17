<script setup lang="ts">
import { watch } from 'vue'
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useI18nStore } from './stores/i18n'
import { useThemeStore } from './stores/theme'
import Layout from './layout/Layout.vue'
import Toast from './components/Toast.vue'
import Overlay from './components/Overlay.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import PromptDialog from './components/PromptDialog.vue'
import AskAuthorizationDialog from './dialogs/AskAuthorizationDialog.vue'
import CommandPaletteDialog from './dialogs/CommandPaletteDialog.vue'

const i18n = useI18nStore()
const themeStore = useThemeStore()
const { themeKey } = storeToRefs(themeStore)
const vuetifyTheme = useTheme()

const ALL = ['enterprise', 'light', 'redis', 'dark', 'darkNeu', 'darkoBluo', 'matrix']
function applyTheme(key: string) { vuetifyTheme.change(ALL.includes(key) ? key : 'dark') }
applyTheme(themeKey.value)
watch(themeKey, applyTheme)
</script>

<template>
    <v-app v-if="i18n.ready">
        <Layout />
        <ConfirmDialog />
        <PromptDialog />
        <AskAuthorizationDialog />
        <CommandPaletteDialog />
        <Toast />
        <Overlay />
    </v-app>
</template>

<style>
/* ===== GLOBAL STYLES matching React/Angular ===== */
html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; }
.v-application { font-family: Roboto, 'Helvetica Neue', sans-serif; }
/* Override Vuetify's color-scheme so scrollbars follow the actual theme */
body.p3xr-theme-light .v-application { color-scheme: light !important; }
body.p3xr-theme-dark .v-application { color-scheme: dark !important; }

/* Match MUI dense Toolbar padding: 0 16px */
.p3xr-toolbar.v-toolbar {
    padding-left: 0 !important;
    padding-right: 0 !important;
}
.p3xr-toolbar .v-toolbar__content {
    padding: 0 16px !important;
}

/* ===== TOOLBAR BUTTON STYLES (exact match of React MUI) ===== */
.p3xr-toolbar .v-btn {
    color: inherit !important;
    letter-spacing: 0.1px !important;
    text-transform: uppercase;
    height: 36px;
    min-height: 36px;
    min-width: auto !important;
    padding: 0 4px;
    margin: 0 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    gap: 0;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;
}
.p3xr-toolbar .v-btn:hover {
    background-color: rgba(255, 255, 255, 0.15) !important;
}
.p3xr-toolbar .v-btn .v-icon {
    margin-right: 4px;
    font-size: 20px;
}
.p3xr-toolbar .v-btn .v-icon:only-child {
    margin-right: 0;
}
/* Matrix theme has dark toolbar text */
.v-theme--matrix .p3xr-toolbar .v-btn:hover {
    background-color: rgba(0, 0, 0, 0.15) !important;
}

/* FontAwesome in toolbar */
.p3xr-toolbar i.fa, .p3xr-toolbar i.fas, .p3xr-toolbar i.far, .p3xr-toolbar i.fab {
    display: inline-flex; align-items: center; justify-content: center;
    width: 24px; height: 24px; font-size: 20px; line-height: 24px;
    vertical-align: middle; margin-right: 4px;
}
.p3xr-toolbar i.fa-power-off, .p3xr-toolbar i.fa-donate { font-size: 18px; }

/* Active nav button highlight (matches React activeSx) */
.p3xr-toolbar .v-btn.p3xr-active {
    background-color: rgba(255, 255, 255, 0.1) !important;
}
.v-theme--matrix .p3xr-toolbar .v-btn.p3xr-active {
    background-color: rgba(0, 0, 0, 0.1) !important;
}
/* Keep highlight on hover too */
.p3xr-toolbar .v-btn.p3xr-active:hover {
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.v-theme--matrix .p3xr-toolbar .v-btn.p3xr-active:hover {
    background-color: rgba(0, 0, 0, 0.2) !important;
}

/* Content area — fixed-height scrollable container; shrinks when console drawer opens */
#p3xr-layout-content {
    position: fixed; left: 0; right: 0;
    top: 48px;
    bottom: calc(48px + var(--p3xr-console-drawer-height-active, 0px));
    padding: 5px;
    padding-bottom: 4px !important;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex; flex-direction: column;
    transition: bottom 150ms ease-out;
}

/* Monitoring page owns its own tab-shell layout — drop the 4px so tab shell flush to bottom */
#p3xr-layout-content:has(.p3xr-monitoring-shell-container) {
    padding-bottom: 0 !important;
}

html.p3xr-console-drawer-open {
    --p3xr-console-drawer-height-active: 30vh;
}
html:not(.p3xr-console-drawer-open) {
    --p3xr-console-drawer-height-active: 0px;
}

body {
    overflow: hidden;
}

/* Global button sizing — match Angular mat-raised-button (36px height, 14px font, uppercase) */
.v-btn:not(.v-btn--icon):not(.p3xr-toolbar .v-btn):not(.v-tab) {
    height: 36px !important;
    min-height: 36px !important;
    font-size: 14px !important;
    padding: 0 6px !important;
    text-transform: uppercase !important;
    letter-spacing: 0.1px !important;
    border-radius: 4px !important;
    gap: 3px !important;
    min-width: 0 !important;
}
.v-btn:not(.v-btn--icon):not(.p3xr-toolbar .v-btn):not(.v-tab) .v-icon {
    margin-right: 4px;
}
.v-btn:not(.v-btn--icon):not(.p3xr-toolbar .v-btn) .v-icon:only-child {
    margin-right: 0;
}

/* Global icon size — match Angular mat-icon default (24px) */
.v-icon {
    font-size: 24px !important;
    width: 24px !important;
    height: 24px !important;
}

/* Icon buttons: square-rounded (4px) hover + ripple, matching Angular.
   High specificity so scoped toolbar padding rules don't re-widen them. */
.v-btn.v-btn--icon.v-btn--icon {
    border-radius: 4px !important;
    aspect-ratio: 1 !important;
    padding: 0 !important;
    min-width: 0 !important;
    width: auto !important;
}
.v-btn.v-btn--icon.v-btn--icon .v-btn__overlay,
.v-btn.v-btn--icon.v-btn--icon .v-btn__underlay,
.v-btn.v-btn--icon.v-btn--icon .v-ripple__container,
.v-btn.v-btn--icon.v-btn--icon .v-ripple__animation {
    border-radius: 4px !important;
}

/* Animation control — disable all transitions/animations including Vuetify overlays */
body.p3xr-no-animation *,
body.p3xr-no-animation *::before,
body.p3xr-no-animation *::after,
body.p3xr-no-animation ~ * *,
body.p3xr-no-animation .v-overlay *,
body.p3xr-no-animation .v-menu *,
body.p3xr-no-animation .v-dialog * {
    animation-duration: 0ms !important;
    transition-duration: 0ms !important;
    transition-delay: 0ms !important;
}
/* Overlay spinning gear must always rotate even with animations disabled */
body.p3xr-no-animation #p3xr-overlay .fa-spin {
    animation-duration: 2s !important;
    animation-iteration-count: infinite !important;
    animation-timing-function: linear !important;
}

/* Input focus: primary color border + label, matching MUI outlined */
.v-field--focused .v-field__outline {
    --v-field-border-opacity: 1;
    color: rgb(var(--v-theme-primary)) !important;
}
.v-field--focused .v-label {
    color: rgb(var(--v-theme-primary)) !important;
}

/* Language search input focus style */
.p3xr-language-menu input:focus {
    border-width: 3px !important;
    border-color: var(--v-theme-primary) !important;
}

/* Dividers matching MUI / Angular Material (0.12 opacity) */
.v-divider {
    opacity: 0.12;
}

/* Switches/checkboxes: compact, no expand — match Angular/React */
.v-input.v-switch,
.v-input.v-checkbox {
    display: inline-flex !important;
    flex: 0 0 auto !important;
    width: auto !important;
    margin: 0 !important;
    padding: 0 !important;
}
.v-input.v-switch > .v-input__control,
.v-input.v-checkbox > .v-input__control {
    width: auto !important;
    flex: 0 0 auto !important;
}
.v-input.v-switch .v-selection-control,
.v-input.v-checkbox .v-selection-control {
    width: auto !important;
    flex: 0 0 auto !important;
    min-height: 36px !important;
}
.v-input.v-switch .v-selection-control__wrapper {
    overflow: visible;
}
.v-input.v-switch .v-selection-control .v-label,
.v-input.v-checkbox .v-selection-control .v-label {
    white-space: nowrap;
}
/* Switch: match Angular mat-slide-toggle exactly */
/* Unchecked: gray track, white thumb */
.v-switch .v-switch__track {
    background-color: rgba(var(--v-theme-on-surface), 0.38) !important;
    opacity: 1 !important;
}
.v-switch .v-selection-control:not(.v-selection-control--dirty) .v-switch__thumb {
    color: #fff !important;
    background-color: #fff !important;
}
.v-switch .v-selection-control:not(.v-selection-control--dirty) .v-switch__thumb * {
    color: #fff !important;
    background-color: #fff !important;
}
/* Checked: lighter primary track, solid primary thumb — match React MUI */
.v-input--dirty .v-switch__track {
    background-color: rgb(var(--v-theme-primary)) !important;
    opacity: 0.5 !important;
}
.v-input--dirty .v-switch__thumb,
.v-input--dirty .v-switch__thumb * {
    background-color: rgb(var(--v-theme-primary)) !important;
    color: rgb(var(--v-theme-primary)) !important;
    caret-color: rgb(var(--v-theme-primary)) !important;
}
/* Checkbox: use theme primary when checked */
.v-checkbox .v-selection-control--dirty .v-icon {
    color: rgb(var(--v-theme-primary)) !important;
}

/* Clickable list items */
.v-list-item { cursor: pointer; }
.v-list-item--disabled { cursor: default; }

/* Language menu keyboard highlight */
.p3xr-lang-highlighted {
    background-color: rgba(var(--v-theme-on-surface), 0.08) !important;
}
</style>
