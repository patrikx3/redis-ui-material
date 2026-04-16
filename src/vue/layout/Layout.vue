<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick, defineAsyncComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../stores/i18n'
import { useThemeStore, ALL_THEME_KEYS } from '../stores/theme'
import { useRedisStateStore } from '../stores/redis-state'
import { useSettingsStore } from '../stores/settings'
import { useCommonStore } from '../stores/common'
import { useOverlayStore } from '../stores/overlay'
import { useMainCommandStore } from '../stores/main-command'
import { useAuthStore } from '../stores/auth'
import { request, onSocketEvent } from '../stores/socket.service'
import { setNavigate } from '../stores/navigation.store'
import { trackPage } from '../stores/analytics'

const TOOLBAR_HEIGHT = 48

const router = useRouter()
const route = useRoute()
const { width: displayWidth } = useDisplay()

const i18n = useI18nStore()
const themeStore = useThemeStore()
const state = useRedisStateStore()
const settings = useSettingsStore()
const common = useCommonStore()
const overlay = useOverlayStore()
const mainCommand = useMainCommandStore()
const auth = useAuthStore()

const { themeKey, isAuto: isThemeAuto } = storeToRefs(themeStore)
const strings = computed(() => i18n.strings)
const showLogin = computed(() => auth.authChecked && auth.authRequired && !auth.isAuthenticated)

setNavigate((path: string) => router.push(path))

// Responsive breakpoints (exact match of React)
const isWide = computed(() => displayWidth.value >= 720)
const isGtXs = computed(() => displayWidth.value >= 600)
const isGtSm = computed(() => displayWidth.value >= 960)

const connectionsList = computed(() => state.connections?.list ?? [])

// Toolbar background per theme (exact from React themes/index.ts)
const TOOLBAR_COLORS: Record<string, { bg: string, color: string }> = {
    enterprise: { bg: '#424242', color: 'rgba(255,255,255,0.87)' },
    light: { bg: '#37474f', color: 'rgba(255,255,255,0.87)' },
    redis: { bg: '#c62828', color: 'rgba(255,255,255,0.87)' },
    dark: { bg: '#424242', color: 'rgba(255,255,255,0.87)' },
    darkNeu: { bg: '#37474f', color: 'rgba(255,255,255,0.87)' },
    darkoBluo: { bg: '#1a237e', color: 'rgba(255,255,255,0.87)' },
    matrix: { bg: '#76ff03', color: 'rgba(0,0,0,0.87)' },
}
const toolbarStyle = computed(() => {
    const t = TOOLBAR_COLORS[themeKey.value] || TOOLBAR_COLORS.dark
    return { backgroundColor: t.bg, color: t.color, height: TOOLBAR_HEIGHT + 'px' }
})

// Connection name
const connectionName = computed(() => {
    if (state.connection) {
        const fn = strings.value?.label?.connected
        return typeof fn === 'function' ? fn({ name: state.connection.name }) : state.connection.name
    }
    return strings.value?.intention?.connect
})

// Group mode
const groupMode = ref(false)
try { groupMode.value = localStorage.getItem('p3xr-connection-group-mode') === 'true' } catch {}
const groupedConnectionsList = computed(() => {
    if (!groupMode.value) return [{ name: '', connections: connectionsList.value }]
    const groups = new Map<string, any[]>()
    for (const conn of connectionsList.value) {
        const name = conn.group?.trim() || ''
        if (!groups.has(name)) groups.set(name, [])
        groups.get(name)!.push(conn)
    }
    return Array.from(groups, ([name, conns]) => ({ name, connections: conns }))
})

// Menu states
const connectionMenuOpen = ref(false)
const themeMenuOpen = ref(false)
const githubMenuOpen = ref(false)
const languageMenuOpen = ref(false)

// Language search
const languageSearch = ref('')
const highlightedLangIdx = ref(0)
const languageInputRef = ref<HTMLInputElement | null>(null)
const languageListRef = ref<HTMLElement | null>(null)
const availableLanguages = computed(() => Object.keys(strings.value?.language ?? {}))
const filteredLanguages = computed(() => {
    const s = languageSearch.value.trim().toLowerCase()
    if (!s) return availableLanguages.value
    return availableLanguages.value.filter(k => {
        const label = (strings.value?.language?.[k] ?? k).toLowerCase()
        return label.includes(s) || k.toLowerCase().includes(s)
    })
})
function languageLabel(key: string) { return strings.value?.language?.[key] ?? key }

function scrollLanguageIntoView(idx: number) {
    nextTick(() => {
        const el = languageListRef.value?.$el || languageListRef.value
        if (!el) return
        // +1 to skip the "Auto" item at index 0
        const items = el.querySelectorAll('.v-list-item')
        items[idx + 1]?.scrollIntoView({ block: 'nearest' })
    })
}

function onLanguageMenuOpen() {
    const idx = filteredLanguages.value.indexOf(i18n.currentLang)
    highlightedLangIdx.value = idx >= 0 ? idx : 0
    setTimeout(() => {
        languageInputRef.value?.focus()
        scrollLanguageIntoView(idx >= 0 ? idx : 0)
    }, 150)
}
function onLanguageMenuClose() { languageSearch.value = '' }
function onLanguageKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') { languageMenuOpen.value = false; return }
    if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredLanguages.value.length > 0) {
            i18n.setLanguage(filteredLanguages.value[highlightedLangIdx.value])
            languageMenuOpen.value = false
        }
        return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault()
        const len = filteredLanguages.value.length
        if (!len) return
        highlightedLangIdx.value = e.key === 'ArrowDown'
            ? (highlightedLangIdx.value + 1) % len
            : (highlightedLangIdx.value - 1 + len) % len
        return
    }
    e.stopPropagation()
}
watch(highlightedLangIdx, (idx) => {
    if (!languageMenuOpen.value) return
    scrollLanguageIntoView(idx)
})

// Navigation
function isActivePage(page: string): boolean {
    const p = route.path
    if (page === 'database') return p.startsWith('/database')
    if (page === 'monitoring') return p.startsWith('/monitoring')
    return p === `/${page}`
}
function navigateTo(name: string) {
    const map: Record<string, string> = {
        'database.statistics': '/database/statistics', database: '/database',
        monitoring: '/monitoring', search: '/search', info: '/info', settings: '/settings',
    }
    router.push(map[name] || `/${name}`)
}
function openLink(target: string) {
    const urls: Record<string, string> = {
        github: 'https://github.com/patrikx3/redis-ui',
        githubRelease: 'https://github.com/patrikx3/redis-ui/releases',
        githubChangelog: 'https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log',
        donate: 'https://www.paypal.me/patrikx3',
    }
    window.open(urls[target], '_blank')
}

// Connect — delegates to shared store function
const connect = (conn: any) => mainCommand.connect(conn)

// Lifecycle
onMounted(async () => {
    await auth.checkAuthStatus()
    if (auth.authRequired && !auth.isAuthenticated) overlay.hide()
})
watch(() => auth.isAuthenticated, (v) => {
    if (!v) return
    try {
        const saved = localStorage.getItem(settings.connectInfoStorageKey)
        if (saved) { const c = JSON.parse(saved); if (c?.id) connect(c) }
    } catch {}
}, { immediate: true })

const unsubs: (() => void)[] = []
unsubs.push(onSocketEvent('redis-disconnected', () => navigateTo('settings')))
unsubs.push(onSocketEvent('disconnect', () => { if (!showLogin.value) overlay.show({ message: strings.value?.status?.socketDisconnected }) }))
unsubs.push(onSocketEvent('socket-error', () => { if (!showLogin.value) overlay.show({ message: strings.value?.status?.socketError }) }))
onUnmounted(() => unsubs.forEach(u => u()))

watch(() => route.path, (p) => {
    trackPage(p.toLowerCase().startsWith('/database/key/') ? '/database/key' : p)
}, { immediate: true })

// Prefetch other GUI frameworks — fetch HTML, parse script/style tags, cache all assets
onMounted(() => {
    setTimeout(() => {
        for (const gui of ['/ng/', '/react/']) {
            fetch(gui).then(r => r.text()).then(html => {
                const doc = new DOMParser().parseFromString(html, 'text/html')
                doc.querySelectorAll('script[src], link[rel="stylesheet"]').forEach(el => {
                    const url = (el as any).src || (el as any).href
                    if (url) fetch(url).catch(() => {})
                })
            }).catch(() => {})
        }
    }, 3000)
})

// Promo toast — demo site only, once per session
onMounted(() => {
    if (window.location.hostname !== 'p3x.redis.patrikx3.com') return
    if (sessionStorage.getItem('p3xr-promo-shown')) return
    setTimeout(() => {
        const promo = i18n.strings?.promo
        if (promo?.toastMessage) {
            sessionStorage.setItem('p3xr-promo-shown', '1')
            const msg = promo.toastMessage + (promo.disclaimer ? ' · ' + promo.disclaimer : '')
            common.toast(msg, 30000)
        }
    }, 5000)
})

// Group mode poll
let groupInterval: any
onMounted(() => {
    groupInterval = setInterval(() => {
        try { groupMode.value = localStorage.getItem('p3xr-connection-group-mode') === 'true' } catch {}
    }, 1000)
})
onUnmounted(() => clearInterval(groupInterval))
</script>

<template>
    <!-- ===== HEADER ===== -->
    <v-toolbar
        :style="{ ...toolbarStyle, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)' }"
        density="compact"
        class="p3xr-toolbar"
    >
        <!-- App title with version caption -->
        <div v-if="isWide" style="position: relative; display: inline-flex; align-items: center;">
            <v-btn variant="text" :class="{}"
                @click="navigateTo(state.connection ? 'database.statistics' : 'settings')">
                <i class="fas fa-database" /><span>{{ strings?.title?.name }}</span>
            </v-btn>
            <span v-if="state.version" style="position: absolute; bottom: -3px; left: 4px; right: 13px; text-align: right; font-size: 10px; opacity: 0.7; pointer-events: none; color: inherit; letter-spacing: normal; font-weight: 400; line-height: 1;">
                {{ state.version }}
            </span>
        </div>
        <v-tooltip v-else :text="`${strings?.title?.name || ''}${state.version ? ' ' + state.version : ''}`" location="bottom">
            <template #activator="{ props: tp }">
                <v-btn v-bind="tp" variant="text" :class="{}"
                    @click="navigateTo(state.connection ? 'database.statistics' : 'settings')">
                    <i class="fas fa-database" />
                </v-btn>
            </template>
        </v-tooltip>

        <!-- Database -->
        <template v-if="state.connection">
            <v-btn v-if="isWide" variant="text" :class="{ 'p3xr-active': isActivePage('database') }"
                @click="navigateTo('database.statistics')">
                <v-icon size="small">mdi-dns</v-icon><span>{{ strings?.intention?.main }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.intention?.main" location="bottom">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" :class="{ 'p3xr-active': isActivePage('database') }"
                        @click="navigateTo('database.statistics')">
                        <v-icon size="small">mdi-dns</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <!-- Monitoring -->
        <template v-if="state.connection">
            <v-btn v-if="isWide" variant="text" :class="{ 'p3xr-active': isActivePage('monitoring') }"
                @click="navigateTo('monitoring')">
                <v-icon size="small">mdi-heart-pulse</v-icon><span>{{ strings?.page?.monitor?.title }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.page?.monitor?.title" location="bottom">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" :class="{ 'p3xr-active': isActivePage('monitoring') }"
                        @click="navigateTo('monitoring')">
                        <v-icon size="small">mdi-heart-pulse</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <!-- Search -->
        <template v-if="state.connection && state.hasRediSearch">
            <v-btn v-if="isWide" variant="text" :class="{ 'p3xr-active': isActivePage('search') }"
                @click="navigateTo('search')">
                <v-icon size="small">mdi-magnify</v-icon><span>{{ strings?.page?.search?.title }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.page?.search?.title" location="bottom">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" :class="{ 'p3xr-active': isActivePage('search') }"
                        @click="navigateTo('search')">
                        <v-icon size="small">mdi-magnify</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <v-spacer />

        <!-- Info -->
        <template v-if="!showLogin">
            <v-btn v-if="isWide" variant="text" :class="{ 'p3xr-active': isActivePage('info') }"
                @click="navigateTo('info')">
                <v-icon size="small">mdi-information</v-icon><span>{{ strings?.intention?.info }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.intention?.info" location="bottom">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" :class="{ 'p3xr-active': isActivePage('info') }"
                        @click="navigateTo('info')">
                        <v-icon size="small">mdi-information</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <!-- Settings -->
        <template v-if="!showLogin">
            <v-btn v-if="isWide" variant="text" :class="{ 'p3xr-active': isActivePage('settings') }"
                @click="navigateTo('settings')">
                <v-icon size="small">mdi-cog</v-icon><span>{{ strings?.intention?.settings }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.intention?.settings" location="bottom">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" :class="{ 'p3xr-active': isActivePage('settings') }"
                        @click="navigateTo('settings')">
                        <v-icon size="small">mdi-cog</v-icon>
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <!-- Logout -->
        <v-tooltip v-if="auth.authRequired && auth.isAuthenticated" :text="strings?.intention?.logout" location="bottom">
            <template #activator="{ props: tp }">
                <v-btn v-bind="tp" variant="text" icon @click="async () => { try { await common.confirm({ message: strings?.intention?.logout }); auth.logout() } catch {} }">
                    <v-icon size="small">mdi-logout</v-icon>
                </v-btn>
            </template>
        </v-tooltip>
    </v-toolbar>

    <!-- ===== CONTENT ===== -->
    <div id="p3xr-layout-content">
        <component v-if="showLogin" :is="defineAsyncComponent(() => import('../pages/login/LoginPage.vue'))" />
        <router-view v-else />
    </div>

    <!-- ===== FOOTER ===== -->
    <div id="p3xr-layout-footer-container">
    <v-toolbar
        :style="{ ...toolbarStyle, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }"
        density="compact"
        flat
        class="p3xr-toolbar"
    >
        <!-- Connection menu -->
        <template v-if="!showLogin && connectionsList.length > 0">
            <v-menu v-model="connectionMenuOpen" location="top start" origin="bottom start">
                <template #activator="{ props: menuProps }">
                    <v-btn v-if="isWide" v-bind="menuProps" variant="text">
                        <v-icon size="small">mdi-power-plug</v-icon><span>{{ connectionName }}</span>
                    </v-btn>
                    <v-tooltip v-else :text="connectionName" location="top">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="{ ...menuProps, ...tp }" variant="text" icon>
                                <v-icon size="small">mdi-power-plug</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                </template>
                <v-list density="compact">
                    <template v-for="(group, gi) in groupedConnectionsList" :key="'g-' + gi">
                        <v-list-subheader v-if="groupedConnectionsList.length > 1" style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.6;">
                            {{ group.name || strings?.label?.ungrouped }}
                        </v-list-subheader>
                        <v-list-item v-for="conn in group.connections" :key="conn.id"
                            :active="state.connection?.id === conn.id"
                            @click="connectionMenuOpen = false; connect(conn)">
                            <v-list-item-title style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 280px;">
                                {{ conn.name }}
                            </v-list-item-title>
                        </v-list-item>
                        <v-divider v-if="gi < groupedConnectionsList.length - 1 && groupedConnectionsList.length > 1" />
                    </template>
                </v-list>
            </v-menu>
        </template>

        <!-- Disconnect -->
        <template v-if="!showLogin && state.connection">
            <v-btn v-if="isGtSm" variant="text" @click="mainCommand.disconnect()">
                <i class="fa fa-power-off" /><span>{{ strings?.intention?.disconnect }}</span>
            </v-btn>
            <v-tooltip v-else :text="strings?.intention?.disconnect" location="top">
                <template #activator="{ props: tp }">
                    <v-btn v-bind="tp" variant="text" icon @click="mainCommand.disconnect()">
                        <i class="fa fa-power-off" />
                    </v-btn>
                </template>
            </v-tooltip>
        </template>

        <v-spacer />

        <!-- Donate -->
        <v-btn v-if="isWide" variant="text" @click="openLink('donate')">
            <i class="fas fa-donate" /><span>{{ strings?.title?.donate }}</span>
        </v-btn>
        <v-tooltip v-else :text="strings?.title?.donate" location="top">
            <template #activator="{ props: tp }">
                <v-btn v-bind="tp" variant="text" icon @click="openLink('donate')">
                    <i class="fas fa-donate" />
                </v-btn>
            </template>
        </v-tooltip>

        <!-- Language menu with search -->
        <v-menu v-model="languageMenuOpen" location="top start" origin="bottom start"
            :close-on-content-click="false" class="p3xr-language-menu"
            @update:model-value="(v: boolean) => { if (v) onLanguageMenuOpen(); else onLanguageMenuClose() }">
            <template #activator="{ props: menuProps }">
                <v-btn v-if="isGtSm" v-bind="menuProps" variant="text">
                    <v-icon size="small">mdi-web</v-icon><span>{{ strings?.intention?.language }}</span>
                </v-btn>
                <v-tooltip v-else :text="strings?.intention?.language" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="{ ...menuProps, ...tp }" variant="text" icon>
                            <v-icon size="small">mdi-web</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
            <v-card style="min-width: 320px; max-width: 90vw; max-height: 400px; overflow: hidden;">
                <!-- Search input -->
                <div style="position: sticky; top: 0; z-index: 1; padding: 8px;" @click.stop @keydown="onLanguageKeyDown">
                    <input ref="languageInputRef" :placeholder="strings?.label?.searchLanguage"
                        :value="languageSearch" @input="(e: any) => { languageSearch = e.target.value; highlightedLangIdx = 0 }"
                        autocomplete="off"
                        style="display: block; width: 100%; padding: 8px; border: 2px solid rgba(255,255,255,0.25); border-radius: 4px; font-size: 14px; background: transparent; color: inherit; outline: none; box-sizing: border-box; cursor: text;" />
                </div>
                <v-list ref="languageListRef" density="compact" style="overflow: auto; max-height: 340px; padding-top: 0;">
                    <v-list-item :active="i18n.isAuto"
                        @click="i18n.setLanguage('auto'); languageMenuOpen = false">
                        {{ strings?.label?.languageAuto }}
                    </v-list-item>
                    <v-divider />
                    <v-list-item v-for="(key, idx) in filteredLanguages" :key="key"
                        :active="!i18n.isAuto && i18n.currentLang === key"
                        :class="{ 'p3xr-lang-highlighted': idx === highlightedLangIdx }"
                        @click="i18n.setLanguage(key); languageMenuOpen = false">
                        {{ languageLabel(key) }}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-menu>

        <!-- Theme menu -->
        <v-menu v-model="themeMenuOpen" location="top start" origin="bottom start">
            <template #activator="{ props: menuProps }">
                <v-btn v-if="isGtXs" v-bind="menuProps" variant="text">
                    <v-icon size="small">mdi-palette</v-icon><span>{{ strings?.intention?.theme }}</span>
                </v-btn>
                <v-tooltip v-else :text="strings?.intention?.theme" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="{ ...menuProps, ...tp }" variant="text" icon>
                            <v-icon size="small">mdi-palette</v-icon>
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
            <v-list density="compact">
                <v-list-item :active="isThemeAuto" @click="themeStore.setTheme('auto'); themeMenuOpen = false">
                    {{ strings?.label?.themeAuto }}
                </v-list-item>
                <v-divider />
                <v-list-item v-for="key in ALL_THEME_KEYS" :key="key"
                    :active="!isThemeAuto && themeKey === key"
                    @click="themeStore.setTheme(key); themeMenuOpen = false">
                    {{ strings?.label?.theme?.[key] ?? key }}
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- GitHub menu -->
        <v-menu v-model="githubMenuOpen" location="top start" origin="bottom start">
            <template #activator="{ props: menuProps }">
                <v-btn v-if="isGtSm" v-bind="menuProps" variant="text">
                    <i class="fab fa-github" /><span>{{ strings?.intention?.github }}</span>
                </v-btn>
                <v-tooltip v-else :text="strings?.intention?.github" location="top">
                    <template #activator="{ props: tp }">
                        <v-btn v-bind="{ ...menuProps, ...tp }" variant="text" icon>
                            <i class="fab fa-github" />
                        </v-btn>
                    </template>
                </v-tooltip>
            </template>
            <v-list density="compact">
                <v-list-item @click="openLink('github'); githubMenuOpen = false">{{ strings?.intention?.githubRepo }}</v-list-item>
                <v-list-item @click="openLink('githubRelease'); githubMenuOpen = false">{{ strings?.intention?.githubRelease }}</v-list-item>
                <v-list-item @click="openLink('githubChangelog'); githubMenuOpen = false">{{ strings?.intention?.githubChangelog }}</v-list-item>
            </v-list>
        </v-menu>

    </v-toolbar>
    </div>
</template>
