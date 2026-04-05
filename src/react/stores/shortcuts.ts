/**
 * Keyboard shortcuts service — exact port of Angular ShortcutsService.
 * Only active in Electron (detected via navigator.userAgent).
 */

import { useI18nStore } from './i18n.store'
import { useRedisStateStore } from './redis-state.store'
import { useCommonStore } from './common.store'
import { useMainCommandStore, emitCommand } from './main-command.store'
import { navigateTo } from './navigation.store'

export interface ShortcutDef {
    key: string
    ctrlKey?: boolean
    shiftKey?: boolean
    altKey?: boolean
    label: string
    descriptionKey: string
    action: () => void
}

const isElectron = /electron/i.test(navigator.userAgent)

function isConnected(): boolean {
    return !!useRedisStateStore.getState().connection
}

function requireConnection(action: () => void) {
    if (isConnected()) {
        action()
    } else {
        const strings = useI18nStore.getState().strings
        useCommonStore.getState().toast(strings?.label?.connectFirst)
    }
}

function requireConnectionAndHome(action: () => void) {
    if (!isConnected()) {
        const strings = useI18nStore.getState().strings
        useCommonStore.getState().toast(strings?.label?.connectFirst)
        return
    }
    if (!location.pathname.startsWith('/database') && !location.pathname.startsWith('/react/database')) {
        navigateTo('database.statistics')
        setTimeout(() => action(), 300)
    } else {
        action()
    }
}

const shortcuts: ShortcutDef[] = isElectron ? [
    {
        key: 'r', ctrlKey: true, label: 'Ctrl+R',
        descriptionKey: 'shortcutRefresh',
        action: () => requireConnection(() => {
            import('./main-command.store').then(m => m.onCommandEvent)
            useMainCommandStore.getState().refresh()
        }),
    },
    {
        key: 'F5', label: 'F5',
        descriptionKey: 'shortcutRefresh',
        action: () => requireConnection(() => useMainCommandStore.getState().refresh()),
    },
    {
        key: 'f', ctrlKey: true, label: 'Ctrl+F',
        descriptionKey: 'shortcutSearch',
        action: () => requireConnectionAndHome(() => {
            const el = document.querySelector<HTMLInputElement>('.p3xr-database-treecontrol-controls-search input')
            el?.focus()
        }),
    },
    {
        key: 'n', ctrlKey: true, label: 'Ctrl+N',
        descriptionKey: 'shortcutNewKey',
        action: () => requireConnectionAndHome(() => {
            emitCommand('key-new', {})
        }),
    },
    {
        key: 'k', ctrlKey: true, label: 'Ctrl+K',
        descriptionKey: 'shortcutCommandPalette',
        action: () => {
            useCommonStore.getState().setCommandPaletteOpen(true)
        },
    },
    {
        key: 'd', ctrlKey: true, label: 'Ctrl+D',
        descriptionKey: 'shortcutDisconnect',
        action: () => requireConnection(() => useMainCommandStore.getState().disconnect()),
    },
] : []

export function isShortcutsEnabled(): boolean {
    return isElectron
}

export function getShortcuts(): ShortcutDef[] {
    return shortcuts
}

export function getShortcutsWithDescriptions(): Array<{ key: string; description: string }> {
    const strings = useI18nStore.getState().strings
    return shortcuts
        .filter((s, i, arr) => arr.findIndex(x => x.descriptionKey === s.descriptionKey) === i)
        .map(s => ({
            key: s.label,
            description: strings?.label?.[s.descriptionKey] || s.descriptionKey,
        }))
}

export function handleKeydown(event: KeyboardEvent): boolean {
    if (!isElectron) return false

    const target = event.target as HTMLElement
    const tag = target?.tagName?.toLowerCase()
    if (tag === 'input' || tag === 'textarea' || target?.closest('.cm-editor')) return false

    for (const shortcut of shortcuts) {
        const ctrlMatch = shortcut.ctrlKey ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey
        const shiftMatch = shortcut.shiftKey ? event.shiftKey : !event.shiftKey
        const altMatch = shortcut.altKey ? event.altKey : !event.altKey
        const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase() || event.key === shortcut.key

        if (ctrlMatch && shiftMatch && altMatch && keyMatch) {
            event.preventDefault()
            event.stopPropagation()
            shortcut.action()
            return true
        }
    }
    return false
}

// Install global keydown listener
if (isElectron) {
    document.addEventListener('keydown', handleKeydown)
}
