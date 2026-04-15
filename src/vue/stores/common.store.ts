import { defineStore } from 'pinia'
import { ref } from 'vue'
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

// --- Dialog option interfaces ---
export interface ConfirmOptions {
    title?: string
    message: string
    disableCancel?: boolean
    onOk?: () => void
    onCancel?: () => void
}

export interface PromptOptions {
    title: string
    placeholder: string
    initialValue?: string
    okLabel: string
    cancelLabel: string
    onOk?: (value: string) => void
    onCancel?: () => void
}

let lastResponse: any = null

export const useCommonStore = defineStore('common', () => {
    // Toast
    const toastMessage = ref('')
    const toastOpen = ref(false)
    const toastDuration = ref(5000)
    const toastUndoAction = ref<string | null>(null)
    const resolveToastUndo = ref<((clicked: boolean) => void) | null>(null)

    function toast(message: string, hideDelay?: number) {
        toastDuration.value = hideDelay || 5000
        toastMessage.value = message
        toastOpen.value = true
    }

    function closeToast() {
        const resolve = resolveToastUndo.value
        if (resolve) {
            resolve(false)
            resolveToastUndo.value = null
            toastUndoAction.value = null
        }
        toastOpen.value = false
    }

    function toastWithUndo(message: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            toastMessage.value = message
            toastOpen.value = true
            toastUndoAction.value = 'Undo'
            resolveToastUndo.value = resolve
        })
    }

    function handleToastUndoClick() {
        const resolve = resolveToastUndo.value
        if (resolve) {
            resolve(true)
            resolveToastUndo.value = null
            toastUndoAction.value = null
            toastOpen.value = false
        }
    }

    // Confirm dialog
    const confirmOpen = ref(false)
    const confirmOptions = ref<ConfirmOptions | null>(null)
    const resolveConfirm = ref<((ok: boolean) => void) | null>(null)

    function confirm(options: ConfirmOptions): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const i18n = useI18nStore()
            const s = i18n.strings
            const isAlert = options.disableCancel === true
            confirmOpen.value = true
            confirmOptions.value = {
                title: options.title || (isAlert ? s?.confirm?.info : s?.confirm?.title),
                message: options.message,
                disableCancel: isAlert,
            }
            resolveConfirm.value = (ok: boolean) => {
                confirmOpen.value = false
                confirmOptions.value = null
                resolveConfirm.value = null
                ok ? resolve() : reject()
            }
        })
    }

    // Prompt dialog
    const promptOpen = ref(false)
    const promptOptions = ref<PromptOptions | null>(null)
    const resolvePrompt = ref<((value: string | null) => void) | null>(null)

    function prompt(options: PromptOptions): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            promptOpen.value = true
            promptOptions.value = options
            resolvePrompt.value = (value: string | null) => {
                promptOpen.value = false
                promptOptions.value = null
                resolvePrompt.value = null
                value !== null ? resolve(value) : reject()
            }
        })
    }

    // Ask Authorization dialog
    const askAuthOpen = ref(false)
    const resolveAskAuth = ref<((result: { username: string; password: string } | null) => void) | null>(null)

    function askAuth(): Promise<{ username: string; password: string }> {
        return new Promise<{ username: string; password: string }>((resolve, reject) => {
            askAuthOpen.value = true
            resolveAskAuth.value = (result: { username: string; password: string } | null) => {
                askAuthOpen.value = false
                resolveAskAuth.value = null
                result !== null ? resolve(result) : reject()
            }
        })
    }

    // Command palette
    const commandPaletteOpen = ref(false)

    function setCommandPaletteOpen(open: boolean) {
        commandPaletteOpen.value = open
    }

    // Error handling
    function generalHandleError(dataOrError: any): boolean {
        if (dataOrError === undefined) return true

        if (!(dataOrError instanceof Error || dataOrError instanceof Object)) {
            dataOrError = new Error(String(dataOrError))
        }

        if (dataOrError instanceof Error || dataOrError.status === 'error') {
            let error: any = dataOrError instanceof Error ? dataOrError : dataOrError.error
            console.warn('generalHandleError')
            console.error(error)

            const i18n = useI18nStore()
            const s = i18n.strings
            const codes = s?.code || {}
            if (typeof error === 'string' && codes.hasOwnProperty(error)) {
                error = new Error(codes[error])
            } else if (error?.code && codes.hasOwnProperty(error.code)) {
                error.message = codes[error.code]
            } else if (error?.message && codes.hasOwnProperty(error.message)) {
                error.message = codes[error.message]
            }

            if (error?.message === 'Connection is closed.') {
                const redisState = useRedisStateStore()
                redisState.connection = undefined
            }

            // Show as alert
            confirm({
                title: s?.title?.error,
                message: error?.message || String(error),
                disableCancel: true,
            }).catch(() => {})

            return false
        }
        return true
    }

    // Redis info loading
    function loadRedisInfoResponse(options: { response?: any } = {}) {
        let response = options.response || lastResponse
        lastResponse = response
        if (!response) return

        const settings = useSettingsStore()
        const infoResult = parseRedisInfo(response.info)

        const keys = settings.keysSort && response.keys.length <= settings.maxLightKeysCount
            ? [...response.keys].sort()
            : response.keys

        const redisState = useRedisStateStore()
        redisState.info = infoResult
        redisState.keysRaw = keys
        redisState.keysInfo = response.keysInfo
        redisState.keysInfoFetchedAt = Date.now()
    }

    return {
        // Toast
        toastMessage,
        toastOpen,
        toastDuration,
        toastUndoAction,
        resolveToastUndo,
        toast,
        closeToast,
        toastWithUndo,
        handleToastUndoClick,
        // Confirm
        confirmOpen,
        confirmOptions,
        resolveConfirm,
        confirm,
        // Prompt
        promptOpen,
        promptOptions,
        resolvePrompt,
        prompt,
        // Ask Auth
        askAuthOpen,
        resolveAskAuth,
        askAuth,
        // Command palette
        commandPaletteOpen,
        setCommandPaletteOpen,
        // Error handling
        generalHandleError,
        // Redis info
        loadRedisInfoResponse,
    }
})
