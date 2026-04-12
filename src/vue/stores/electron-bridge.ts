const isElectron = /electron/i.test(navigator.userAgent)

let electronBootstrap: Record<string, string> | null = null

function getElectronBootstrap(): Record<string, string> {
    if (electronBootstrap !== null) return electronBootstrap

    let storage: Record<string, string> = {}
    try {
        const encoded = new URLSearchParams(window.location.search).get('p3xreUiStorage')
        if (encoded) {
            const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(encoded.length / 4) * 4, '=')
            const parsed = JSON.parse(atob(base64))
            if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                storage = normalizeStorage(parsed)
            }
        }
    } catch { /* ignore */ }

    if (Object.keys(storage).length === 0) {
        try {
            const fromName = window.name ? JSON.parse(window.name) : null
            if (fromName?.p3xreUiStorage && typeof fromName.p3xreUiStorage === 'object') {
                storage = normalizeStorage(fromName.p3xreUiStorage)
            }
        } catch { /* ignore */ }
    }

    electronBootstrap = storage
    return storage
}

function normalizeStorage(value: unknown): Record<string, string> {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
    return Object.entries(value).reduce((result: Record<string, string>, [key, v]) => {
        if (typeof v === 'string') result[key] = v
        return result
    }, {})
}

export function getPersistentItem(key: string): string | null {
    if (isElectron) {
        const value = getElectronBootstrap()[key]
        if (typeof value === 'string') return value
    }
    try {
        return localStorage.getItem(key)
    } catch {
        return null
    }
}

export function setPersistentItem(key: string, value: string): void {
    try {
        localStorage.setItem(key, value)
    } catch { /* ignore */ }

    if (isElectron) {
        const storage = getElectronBootstrap()
        storage[key] = value
    }

    try {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage({ type: 'p3x-ui-storage-set', key, value }, '*')
        }
    } catch { /* ignore */ }
}
