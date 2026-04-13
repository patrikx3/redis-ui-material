import { create } from 'zustand'

const AUTH_TOKEN_KEY = 'p3xr-auth-token'

interface AuthState {
    authRequired: boolean
    isAuthenticated: boolean
    authChecked: boolean
    loginError: string
    checkAuthStatus: () => Promise<void>
    login: (username: string, password: string) => Promise<boolean>
    getToken: () => string | null
    logout: () => void
}

export const useAuthStore = create<AuthState>((set, get) => ({
    authRequired: false,
    isAuthenticated: false,
    authChecked: false,
    loginError: '',

    checkAuthStatus: async () => {
        try {
            const res = await fetch('/api/auth-status')
            const data = await res.json()

            if (!data.enabled) {
                set({ authRequired: false, isAuthenticated: true })
            } else {
                set({ authRequired: true })
                const token = get().getToken()
                if (token) {
                    const verifyRes = await fetch('/api/verify-token', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token }),
                    })
                    const verifyData = await verifyRes.json()
                    set({ isAuthenticated: verifyData.valid })
                    if (!verifyData.valid) {
                        localStorage.removeItem(AUTH_TOKEN_KEY)
                    }
                }
            }
        } catch {
            set({ isAuthenticated: true })
        }
        set({ authChecked: true })
    },

    login: async (username: string, password: string) => {
        set({ loginError: '' })
        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
            const data = await res.json()

            if (data.status === 'ok' && data.token) {
                localStorage.setItem(AUTH_TOKEN_KEY, data.token)
                set({ isAuthenticated: true })
                return true
            }

            set({ loginError: data.error })
            return false
        } catch {
            set({ loginError: 'network_error' })
            return false
        }
    },

    getToken: () => {
        try {
            return localStorage.getItem(AUTH_TOKEN_KEY)
        } catch {
            return null
        }
    },

    logout: () => {
        try {
            localStorage.removeItem(AUTH_TOKEN_KEY)
        } catch {}
        location.reload()
    },
}))
