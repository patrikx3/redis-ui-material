import '@fontsource/roboto/latin-300.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'
import '@fontsource/roboto/latin-ext-300.css'
import '@fontsource/roboto/latin-ext-400.css'
import '@fontsource/roboto/latin-ext-500.css'
import '@fontsource/roboto/latin-ext-700.css'
import '@fontsource/roboto/cyrillic-300.css'
import '@fontsource/roboto/cyrillic-400.css'
import '@fontsource/roboto/cyrillic-500.css'
import '@fontsource/roboto/cyrillic-700.css'
import '@fontsource/roboto/cyrillic-ext-300.css'
import '@fontsource/roboto/cyrillic-ext-400.css'
import '@fontsource/roboto/cyrillic-ext-500.css'
import '@fontsource/roboto/cyrillic-ext-700.css'
import '@fontsource/roboto/greek-300.css'
import '@fontsource/roboto/greek-400.css'
import '@fontsource/roboto/greek-500.css'
import '@fontsource/roboto/greek-700.css'
import '@fontsource/roboto/vietnamese-300.css'
import '@fontsource/roboto/vietnamese-400.css'
import '@fontsource/roboto/vietnamese-500.css'
import '@fontsource/roboto/vietnamese-700.css'
import '@fontsource/roboto-mono/latin-400.css'
import '@fontsource/roboto-mono/latin-ext-400.css'
import '@fontsource/roboto-mono/cyrillic-400.css'
import '@fontsource/roboto-mono/cyrillic-ext-400.css'
import '@fontsource/roboto-mono/greek-400.css'
import '@fontsource/roboto-mono/vietnamese-400.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'vuetify/styles'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases } from 'vuetify/iconsets/mdi-svg'
import { mdiSvgIconSet } from './icons'

import App from './App.vue'
import { loadSavedConsoleDrawerHeight } from '../core/console-drawer-height'

// Apply the saved console drawer height BEFORE Vue renders so the CSS var
// is in place when components read it. Otherwise the drawer flashes at 30vh
// default before the component's own onMounted hook sets it.
loadSavedConsoleDrawerHeight()

const pinia = createPinia()

const router = createRouter({
    history: createWebHistory('/vue'),
    routes: [
        { path: '/', redirect: '/settings' },
        { path: '/settings', component: () => import('./pages/settings/SettingsPage.vue') },
        { path: '/info', component: () => import('./pages/info/InfoPage.vue') },
        {
            path: '/database',
            component: () => import('./pages/database/DatabasePage.vue'),
            children: [
                { path: 'statistics', component: () => import('./pages/database/StatisticsPage.vue') },
                { path: 'key/:key', component: () => import('./pages/database/DatabaseKeyPage.vue') },
            ],
        },
        { path: '/search', component: () => import('./pages/search/SearchPage.vue') },
        { path: '/login', component: () => import('./pages/login/LoginPage.vue') },
        {
            path: '/monitoring',
            component: () => import('./pages/monitoring/MonitoringShell.vue'),
            children: [
                { path: '', component: () => import('./pages/monitoring/PulsePage.vue') },
                { path: 'profiler', component: () => import('./pages/monitoring/ProfilerPage.vue') },
                { path: 'pubsub', component: () => import('./pages/monitoring/PubSubPage.vue') },
                { path: 'analysis', component: () => import('./pages/monitoring/MemoryAnalysisPage.vue') },
            ],
        },
    ],
})

// All 7 themes with exact toolbar colors from Angular/React
const vuetify = createVuetify({
    components,
    directives,
    icons: { defaultSet: 'mdi', aliases, sets: { mdi: mdiSvgIconSet } },
    defaults: {
        VTextField: { variant: 'outlined', density: 'compact' },
        VSelect: { variant: 'outlined', density: 'compact' },
        VSwitch: { density: 'compact', hideDetails: true },
    },
    theme: {
        defaultTheme: 'dark',
        themes: {
            // Light themes: WHITE text on colored buttons
            enterprise: {
                dark: false,
                colors: {
                    primary: '#3f51b5', 'on-primary': '#fff',
                    secondary: '#1976d2', 'on-secondary': '#fff',
                    error: '#d32f2f', 'on-error': '#fff',
                    success: '#4caf50', 'on-success': '#fff',
                    warning: '#d32f2f', 'on-warning': '#fff',
                    info: '#1976d2',
                    background: '#e0e0e0', surface: '#fafafa',
                },
            },
            light: {
                dark: false,
                colors: {
                    primary: '#673ab7', 'on-primary': '#fff',
                    secondary: '#9c27b0', 'on-secondary': '#fff',
                    error: '#d32f2f', 'on-error': '#fff',
                    success: '#4caf50', 'on-success': '#fff',
                    warning: '#d32f2f', 'on-warning': '#fff',
                    info: '#9c27b0',
                    background: '#cfd8dc', surface: '#eceff1',
                },
            },
            redis: {
                dark: false,
                colors: {
                    primary: '#212121', 'on-primary': 'rgba(255,255,255,0.87)',
                    secondary: '#757575', 'on-secondary': '#fff',
                    error: '#ffc107', 'on-error': '#fff',
                    success: '#4caf50', 'on-success': '#fff',
                    warning: '#ffc107', 'on-warning': '#fff',
                    info: '#757575',
                    background: '#ffcdd2', surface: '#fafafa',
                },
            },
            // Dark themes: BLACK text on colored buttons (bright backgrounds)
            dark: {
                dark: true,
                colors: {
                    primary: '#7986cb', 'on-primary': 'rgba(0,0,0,0.87)',
                    secondary: '#2196f3', 'on-secondary': 'rgba(0,0,0,0.87)',
                    error: '#ff9800', 'on-error': 'rgba(0,0,0,0.87)',
                    success: '#4caf50', 'on-success': 'rgba(0,0,0,0.87)',
                    warning: '#ff9800', 'on-warning': 'rgba(0,0,0,0.87)',
                    info: '#2196f3',
                    background: '#212121', surface: '#303030',
                },
            },
            darkNeu: {
                dark: true,
                colors: {
                    primary: '#00bcd4', 'on-primary': 'rgba(0,0,0,0.87)',
                    secondary: '#2196f3', 'on-secondary': 'rgba(0,0,0,0.87)',
                    error: '#ffeb3b', 'on-error': 'rgba(0,0,0,0.87)',
                    success: '#4caf50', 'on-success': 'rgba(0,0,0,0.87)',
                    warning: '#ffeb3b', 'on-warning': 'rgba(0,0,0,0.87)',
                    info: '#2196f3',
                    background: '#263238', surface: '#303030',
                },
            },
            darkoBluo: {
                dark: true,
                colors: {
                    primary: '#7986cb', 'on-primary': 'rgba(0,0,0,0.87)',
                    secondary: '#2196f3', 'on-secondary': 'rgba(0,0,0,0.87)',
                    error: '#ff9800', 'on-error': 'rgba(0,0,0,0.87)',
                    success: '#4caf50', 'on-success': 'rgba(0,0,0,0.87)',
                    warning: '#ff9800', 'on-warning': 'rgba(0,0,0,0.87)',
                    info: '#2196f3',
                    background: '#283593', surface: '#303030',
                },
            },
            matrix: {
                dark: true,
                colors: {
                    primary: '#76ff03', 'on-primary': 'rgba(0,0,0,0.87)',
                    secondary: '#c6ff00', 'on-secondary': 'rgba(0,0,0,0.87)',
                    error: '#00c853', 'on-error': 'rgba(0,0,0,0.87)',
                    success: '#76ff03', 'on-success': 'rgba(0,0,0,0.87)',
                    warning: '#00c853', 'on-warning': 'rgba(0,0,0,0.87)',
                    info: '#c6ff00',
                    background: '#1b5e20', surface: '#303030',
                },
            },
        },
    },
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)

// Initialize i18n, socket, then mount
import { useI18nStore } from './stores/i18n'
import { ensureConnected } from './stores/socket.service'

const i18n = useI18nStore()
i18n.init().then(() => {
    ensureConnected()
    import('./stores/shortcuts')
    app.mount('#app')
}).catch((err) => {
    console.error('Vue init failed:', err)
    // Mount anyway so the user sees something
    app.mount('#app')
})

// E2E test interface
import { useRedisStateStore } from './stores/redis-state'
import { useSettingsStore } from './stores/settings'
;(globalThis as any).__p3xr_test = {
    state: new Proxy({}, { get(_, p: string) { return () => (useRedisStateStore() as any)[p] } }),
    settings: new Proxy({}, { get(_, p: string) { return () => (useSettingsStore() as any)[p] } }),
}
