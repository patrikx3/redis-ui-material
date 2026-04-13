import { defineStore } from 'pinia'
import { ref } from 'vue'

const AUTH_TOKEN_KEY = 'p3xr-auth-token'

export const useAuthStore = defineStore('auth', () => {
    const authRequired = ref(false)
    const isAuthenticated = ref(false)
    const authChecked = ref(false)
    const loginError = ref('')

    async function checkAuthStatus() {
        try {
            const res = await fetch('/api/auth-status')
            const data = await res.json()

            if (!data.enabled) {
                authRequired.value = false
                isAuthenticated.value = true
            } else {
                authRequired.value = true
                const token = getToken()
                if (token) {
                    const verifyRes = await fetch('/api/verify-token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token }),
                    })
                    const verifyData = await verifyRes.json()
                    isAuthenticated.value = verifyData.valid
                    if (!verifyData.valid) {
                        localStorage.removeItem(AUTH_TOKEN_KEY)
                    }
                }
            }
        } catch {
            isAuthenticated.value = true
        }
        authChecked.value = true
    }

    async function login(username: string, password: string): Promise<boolean> {
        loginError.value = ''
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
            const data = await res.json()

            if (data.status === 'ok' && data.token) {
                localStorage.setItem(AUTH_TOKEN_KEY, data.token)
                isAuthenticated.value = true
                return true
            }

            loginError.value = data.error
            return false
        } catch {
            loginError.value = 'network_error'
            return false
        }
    }

    function getToken(): string | null {
        try {
            return localStorage.getItem(AUTH_TOKEN_KEY)
        } catch {
            return null
        }
    }

    function logout() {
        try {
            localStorage.removeItem(AUTH_TOKEN_KEY)
        } catch {}
        location.reload()
    }

    return {
        authRequired,
        isAuthenticated,
        authChecked,
        loginError,
        checkAuthStatus,
        login,
        getToken,
        logout,
    }
})
