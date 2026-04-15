import { create } from 'zustand'
import { useI18nStore } from './i18n.store'
import { useRedisStateStore } from './redis-state.store'
import { useSettingsStore } from './settings.store'
import { parseRedisInfo } from './redis-parser'

// --- Event bus for tree commands ---
type VoidCallback = () => void
const treeListeners: Record<string, Set<VoidCallback>> = {}

export function onTreeEvent(event: string, cb: VoidCallback): VoidCallback {
    if (!treeListeners[event]) treeListeners[event] = new Set()
    treeListeners[event].add(cb)
    return () => { treeListeners[event].delete(cb) }
}

export function emitTreeEvent(event: string) {
    treeListeners[event]?.forEach(cb => cb())
}

// --- Dialog state ---
interface ConfirmOptions {
    title?: string
    message: string
    disableCancel?: boolean
    onOk?: () => void
    onCancel?: () => void
}

interface PromptOptions {
    title: string
    placeholder: string
    initialValue?: string
    okLabel: string
    cancelLabel: string
    onOk?: (value: string) => void
    onCancel?: () => void
}

interface CommonState {
    // Toast
    toastMessage: string
    toastOpen: boolean
    toastDuration: number
    toast: (message: string, hideDelay?: number) => void
    closeToast: () => void
    toastUndoAction: string | null
    toastWithUndo: (message: string) => Promise<boolean>
    resolveToastUndo: ((clicked: boolean) => void) | null
    handleToastUndoClick: () => void

    // Confirm dialog
    confirmOpen: boolean
    confirmOptions: ConfirmOptions | null
    confirm: (options: ConfirmOptions) => Promise<void>
    resolveConfirm: ((ok: boolean) => void) | null

    // Prompt dialog
    promptOpen: boolean
    promptOptions: PromptOptions | null
    prompt: (options: PromptOptions) => Promise<string>
    resolvePrompt: ((value: string | null) => void) | null

    // Ask Authorization dialog
    askAuthOpen: boolean
    resolveAskAuth: ((result: { username: string; password: string } | null) => void) | null
    askAuth: () => Promise<{ username: string; password: string }>

    // Command palette
    commandPaletteOpen: boolean
    setCommandPaletteOpen: (open: boolean) => void

    // Error handling
    generalHandleError: (dataOrError: any) => boolean

    // Redis info loading
    loadRedisInfoResponse: (options: { response?: any }) => void
}

let lastResponse: any = null

export const useCommonStore = create<CommonState>((set, get) => ({
    toastMessage: '',
    toastOpen: false,
    toastDuration: 5000,
    toast: (message: string, hideDelay?: number) => {
        set({ toastMessage: message, toastOpen: true, toastDuration: hideDelay || 5000 })
    },
    closeToast: () => {
        const resolve = get().resolveToastUndo
        if (resolve) {
            resolve(false)
            set({ resolveToastUndo: null, toastUndoAction: null })
        }
        set({ toastOpen: false })
    },
    toastUndoAction: null,
    resolveToastUndo: null,
    toastWithUndo: (message: string) => {
        return new Promise<boolean>((resolve) => {
            set({ toastMessage: message, toastOpen: true, toastUndoAction: 'Undo', resolveToastUndo: resolve })
        })
    },
    handleToastUndoClick: () => {
        const resolve = get().resolveToastUndo
        if (resolve) {
            resolve(true)
            set({ resolveToastUndo: null, toastUndoAction: null, toastOpen: false })
        }
    },

    confirmOpen: false,
    confirmOptions: null,
    resolveConfirm: null,
    confirm: (options: ConfirmOptions) => {
        return new Promise<void>((resolve, reject) => {
            const strings = useI18nStore.getState().strings
            const isAlert = options.disableCancel === true
            set({
                confirmOpen: true,
                confirmOptions: {
                    title: options.title || (isAlert ? strings?.confirm?.info : strings?.confirm?.title),
                    message: options.message,
                    disableCancel: isAlert,
                },
                resolveConfirm: (ok: boolean) => {
                    set({ confirmOpen: false, confirmOptions: null, resolveConfirm: null })
                    ok ? resolve() : reject()
                },
            })
        })
    },

    promptOpen: false,
    promptOptions: null,
    resolvePrompt: null,
    prompt: (options: PromptOptions) => {
        return new Promise<string>((resolve, reject) => {
            set({
                promptOpen: true,
                promptOptions: options,
                resolvePrompt: (value: string | null) => {
                    set({ promptOpen: false, promptOptions: null, resolvePrompt: null })
                    value !== null ? resolve(value) : reject()
                },
            })
        })
    },

    askAuthOpen: false,
    resolveAskAuth: null,
    askAuth: () => {
        return new Promise<{ username: string; password: string }>((resolve, reject) => {
            set({
                askAuthOpen: true,
                resolveAskAuth: (result: { username: string; password: string } | null) => {
                    set({ askAuthOpen: false, resolveAskAuth: null })
                    result !== null ? resolve(result) : reject()
                },
            })
        })
    },

    commandPaletteOpen: false,
    setCommandPaletteOpen: (open: boolean) => set({ commandPaletteOpen: open }),

    generalHandleError: (dataOrError: any): boolean => {
        if (dataOrError === undefined) return true

        if (!(dataOrError instanceof Error || dataOrError instanceof Object)) {
            dataOrError = new Error(String(dataOrError))
        }

        if (dataOrError instanceof Error || dataOrError.status === 'error') {
            let error: any = dataOrError instanceof Error ? dataOrError : dataOrError.error
            console.warn('generalHandleError')
            console.error(error)

            const strings = useI18nStore.getState().strings
            const codes = strings?.code || {}
            if (typeof error === 'string' && codes.hasOwnProperty(error)) {
                error = new Error(codes[error])
            } else if (error?.code && codes.hasOwnProperty(error.code)) {
                error.message = codes[error.code]
            } else if (error?.message && codes.hasOwnProperty(error.message)) {
                error.message = codes[error.message]
            }

            if (error?.message === 'Connection is closed.') {
                useRedisStateStore.setState({ connection: undefined })
            }

            // Show as alert
            get().confirm({
                title: strings?.title?.error,
                message: error?.message || String(error),
                disableCancel: true,
            }).catch(() => {})

            return false
        }
        return true
    },

    loadRedisInfoResponse: (options: { response?: any } = {}) => {
        let response = options.response || lastResponse
        lastResponse = response
        if (!response) return

        const settings = useSettingsStore.getState()
        const info = parseRedisInfo(response.info)

        const keys = settings.keysSort && response.keys.length <= settings.maxLightKeysCount
            ? [...response.keys].sort()
            : response.keys

        useRedisStateStore.setState({
            info,
            keysRaw: keys,
            keysInfo: response.keysInfo,
            keysInfoFetchedAt: Date.now(),
        })
    },
}))
