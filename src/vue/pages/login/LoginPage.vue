<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18n'
import { useAuthStore } from '../../stores/auth'
import { useThemeStore } from '../../stores/theme'

const i18n = useI18nStore()
const strings = computed(() => i18n.strings)
const auth = useAuthStore()
const themeStore = useThemeStore()
const { themeKey } = storeToRefs(themeStore)

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
const footerBg = computed(() => themeKey.value === 'matrix' ? '#0a2e0d' : (ACCORDION_BG[themeKey.value] || '#9e9e9e'))

const username = ref('')
const password = ref('')
const pwVisible = ref(false)
const loading = ref(false)
const guiMenu = ref(false)

const currentGui = (() => {
    try { return localStorage.getItem('p3xr-frontend') || 'ng' } catch { return 'ng' }
})()

async function handleLogin() {
    if (loading.value || !username.value || !password.value) return
    loading.value = true
    const success = await auth.login(username.value, password.value)
    if (success) location.reload()
    loading.value = false
}

// @ts-ignore
import { switchGui } from '../../../core/gui-switch'
</script>

<template>
    <div class="p3xr-login-wrapper">
        <div class="p3xr-login-card">
            <!-- Header -->
            <v-toolbar density="compact" :style="{ backgroundColor: headerBg, color: 'rgba(255,255,255,0.87)' }" class="p3xr-login-toolbar">
                <v-spacer />
                <v-menu v-model="guiMenu" location="bottom end">
                    <template #activator="{ props: mp }">
                        <v-btn v-bind="mp" variant="text" size="small" style="color: inherit;">
                            <v-icon size="18" class="mr-1">mdi-monitor</v-icon>
                            GUI
                        </v-btn>
                    </template>
                    <v-list density="compact">
                        <v-list-item :class="{ 'v-list-item--active': currentGui === 'ng' }" @click="switchGui('ng')">
                            <template #prepend><i class="fab fa-angular" style="font-size:18px;width:24px;text-align:center;margin-right:8px;color:#dd0031;"></i></template>
                            <v-list-item-title>Angular</v-list-item-title>
                        </v-list-item>
                        <v-list-item :class="{ 'v-list-item--active': currentGui === 'react' }" @click="switchGui('react')">
                            <template #prepend><i class="fab fa-react" style="font-size:18px;width:24px;text-align:center;margin-right:8px;color:#61dafb;"></i></template>
                            <v-list-item-title>React</v-list-item-title>
                        </v-list-item>
                        <v-list-item :class="{ 'v-list-item--active': currentGui === 'vue' }" @click="switchGui('vue')">
                            <template #prepend><i class="fab fa-vuejs" style="font-size:18px;width:24px;text-align:center;margin-right:8px;color:#42b883;"></i></template>
                            <v-list-item-title>Vue</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar>

            <!-- Content -->
            <div class="p3xr-login-content">
                <v-text-field
                    v-model="username" autofocus
                    :label="str(strings?.form?.connection?.label?.username) || 'Username'"
                    autocomplete="username" density="comfortable" variant="outlined" hide-details class="mb-3"
                    @keydown.enter="handleLogin"
                >
                    <template #prepend-inner>
                        <v-icon size="20">mdi-account</v-icon>
                    </template>
                </v-text-field>
                <v-text-field
                    v-model="password"
                    :label="str(strings?.form?.connection?.label?.password) || 'Password'"
                    :type="pwVisible ? 'text' : 'password'"
                    autocomplete="current-password" density="comfortable" variant="outlined" hide-details class="mb-3"
                    @keydown.enter="handleLogin"
                >
                    <template #prepend-inner>
                        <v-icon size="20">mdi-lock</v-icon>
                    </template>
                    <template #append-inner>
                        <v-icon size="20" style="cursor:pointer;" @click="pwVisible = !pwVisible">
                            {{ pwVisible ? 'mdi-eye-off' : 'mdi-eye' }}
                        </v-icon>
                    </template>
                </v-text-field>
                <div v-if="auth.loginError" class="p3xr-login-error">
                    {{ strings?.confirm?.invalidCredentials || 'Invalid username or password.' }}
                </div>
            </div>

            <!-- Footer -->
            <div class="p3xr-login-footer" :style="{ backgroundColor: footerBg }">
                <v-btn color="primary" variant="flat" :disabled="loading || !username || !password" @click="handleLogin">
                    <v-icon size="20" class="mr-1">mdi-login</v-icon>
                    {{ strings?.intention?.ok || 'Login' }}
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
function str(val: any, opts?: any): string {
    if (typeof val === 'function') return val(opts)
    return val ?? ''
}
</script>

<style scoped>
.p3xr-login-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 96px);
}
.p3xr-login-card {
    width: 400px;
    max-width: calc(100vw - 32px);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
}
.p3xr-login-toolbar {
    box-shadow: none !important;
}
.p3xr-login-content {
    padding: 16px;
    background-color: rgb(var(--v-theme-surface));
    color: rgb(var(--v-theme-on-surface));
}
.p3xr-login-footer {
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    gap: 8px;
}
.p3xr-login-error {
    color: rgb(var(--v-theme-error));
    font-size: 13px;
    margin-top: 4px;
}
</style>
