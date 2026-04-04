/**
 * Shared utilities for all key type renderers.
 * Exact port of Angular KeyTypeBase + KeyPaging.
 */

import { useSettingsStore } from '../../../stores/settings.store'
import { useCommonStore } from '../../../stores/common.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useMainCommandStore } from '../../../stores/main-command.store'

// --- Paging (port of KeyPaging class) ---

export interface Paging {
    page: number
    pages: number
    pageCount: number
    startIndex: number
    endIndex: number
}

export function createPaging(valueLength: number, zsetMode = false): Paging {
    const pageCount = useSettingsStore.getState().keyPageCount ?? 5
    const itemCount = zsetMode ? Math.ceil(valueLength / 2) : valueLength
    const pages = Math.max(Math.ceil(itemCount / pageCount), 1)
    return { page: 1, pages, pageCount, startIndex: 0, endIndex: pageCount }
}

export function pagerAction(paging: Paging, action: string): Paging {
    let { page, pages, pageCount } = paging
    switch (action) {
        case 'first': page = 1; break
        case 'prev': if (page > 1) page--; break
        case 'next': if (page < pages) page++; break
        case 'last': page = pages; break
    }
    if (page < 1) page = 1
    if (page > pages) page = pages
    const startIndex = pageCount * (page - 1)
    const endIndex = startIndex + pageCount
    return { ...paging, page, startIndex, endIndex }
}

export function pageChange(paging: Paging, newPage: number): Paging {
    let page = newPage
    if (page < 1) page = 1
    if (page > paging.pages) page = paging.pages
    const startIndex = paging.pageCount * (page - 1)
    const endIndex = startIndex + paging.pageCount
    return { ...paging, page, startIndex, endIndex }
}

// --- Format value (port of KeyTypeBase.formatValue) ---

export function formatValue(value: any, format: string): string {
    if (value == null) return ''
    const str = String(value)
    switch (format) {
        case 'json':
            try { return JSON.stringify(JSON.parse(str), null, 2) }
            catch { return str }
        case 'hex': {
            const encoded = new TextEncoder().encode(str)
            const lines: string[] = []
            for (let i = 0; i < encoded.length; i += 16) {
                const chunk = encoded.slice(i, i + 16)
                const addr = i.toString(16).padStart(8, '0')
                const hex = Array.from(chunk).map(b => b.toString(16).padStart(2, '0')).join(' ')
                lines.push(`${addr}  ${hex}`)
            }
            return lines.join('\n')
        }
        case 'base64': {
            const raw = new TextEncoder().encode(str)
            let binary = ''
            for (let i = 0; i < raw.length; i++) binary += String.fromCharCode(raw[i])
            return btoa(binary)
        }
        default: return str
    }
}

// --- Truncate display (port of KeyTypeBase.truncateDisplay) ---

export function truncateDisplay(value: any): string {
    const maxValueDisplay = useSettingsStore.getState().maxValueDisplay ?? 1024
    if (value == null) return ''
    const str = String(value)
    if (maxValueDisplay <= 0) return str
    return str.length > maxValueDisplay ? str.substring(0, maxValueDisplay) : str
}

export function isTruncated(value: any): boolean {
    const maxValueDisplay = useSettingsStore.getState().maxValueDisplay ?? 1024
    if (value == null || maxValueDisplay <= 0) return false
    return String(value).length > maxValueDisplay
}

// --- Copy to clipboard ---

export async function copyToClipboard(value: any): Promise<void> {
    try { await navigator.clipboard.writeText(String(value ?? '')) } catch {}
    useCommonStore.getState().toast(useCommonStore.getState().toastMessage || 'Copied')
}

export async function copyValue(value: any): Promise<void> {
    try { await navigator.clipboard.writeText(String(value ?? '')) } catch {}
    const strings = (await import('../../../stores/i18n.store')).useI18nStore.getState().strings
    useCommonStore.getState().toast(strings?.status?.dataCopied)
}

// --- Download buffer ---

export function downloadBuffer(buffer: any, keyName: string, filename?: string): void {
    const blob = new Blob([buffer])
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || `${keyName}.bin`
    a.click()
    URL.revokeObjectURL(url)
}

// --- Buffer detection ---

export function isBufferValue(value: any): boolean {
    return typeof value === 'object' && value !== null && value.byteLength !== undefined
}

// --- Refresh key ---

export function refreshKey(): void {
    // Emit refresh-key event via main command store
    // The DatabaseKeyPage listens for this and reloads
    const emitCommand = (window as any).__p3xr_emitCommand
    if (emitCommand) emitCommand('refresh-key')
}

// --- Shared props interface for all key type renderers ---

export interface KeyTypeProps {
    response: any
    value: any
    valueBuffer: any
    keyName: string
    valueFormat: 'raw' | 'json' | 'hex' | 'base64'
    onRefresh: () => void
}
