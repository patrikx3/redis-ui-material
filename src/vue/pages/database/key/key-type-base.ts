/**
 * Shared composable for all key type renderers.
 * Port of React key-type-base.ts + Angular key-type-base.ts
 */
import { detectFileType } from '../../../../core/detect-file-type'
import { useI18nStore } from '../../../stores/i18n'
import { useSettingsStore } from '../../../stores/settings'
import { useCommonStore } from '../../../stores/common'
import { emitCommand } from '../../../stores/main-command'

// --- Paging ---

export interface Paging {
    page: number
    pages: number
    pageCount: number
    startIndex: number
    endIndex: number
}

export function createPaging(valueLength: number, zsetMode = false): Paging {
    const settings = useSettingsStore()
    const pageCount = settings.keyPageCount || 5
    const itemCount = zsetMode ? Math.ceil(valueLength / 2) : valueLength
    const pages = Math.max(1, Math.ceil(itemCount / pageCount))
    return {
        page: 1,
        pages,
        pageCount,
        startIndex: 0,
        endIndex: pageCount,
    }
}

export function rePaging(paging: Paging, valueLength: number, zsetMode = false): Paging {
    const itemCount = zsetMode ? Math.ceil(valueLength / 2) : valueLength
    const pages = Math.max(1, Math.ceil(itemCount / paging.pageCount))
    let page = paging.page
    if (page > pages) page = pages
    if (page < 1) page = 1
    const startIndex = (page - 1) * paging.pageCount
    const endIndex = page * paging.pageCount
    return { ...paging, page, pages, startIndex, endIndex }
}

export function pagerAction(paging: Paging, action: 'first' | 'prev' | 'next' | 'last'): Paging {
    let page = paging.page
    if (action === 'first') page = 1
    else if (action === 'prev') page = Math.max(1, page - 1)
    else if (action === 'next') page = Math.min(paging.pages, page + 1)
    else if (action === 'last') page = paging.pages
    const startIndex = (page - 1) * paging.pageCount
    const endIndex = page * paging.pageCount
    return { ...paging, page, startIndex, endIndex }
}

export function pageChange(paging: Paging, newPage: number): Paging {
    let page = newPage
    if (page < 1) page = 1
    if (page > paging.pages) page = paging.pages
    const startIndex = (page - 1) * paging.pageCount
    const endIndex = page * paging.pageCount
    return { ...paging, page, startIndex, endIndex }
}

// --- Buffer decode ---

export function toBytes(buf: any): Uint8Array {
    if (!buf) return new Uint8Array(0)
    if (buf instanceof Uint8Array) return buf
    if (buf instanceof ArrayBuffer) return new Uint8Array(buf)
    if (ArrayBuffer.isView(buf)) return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength)
    if (buf.type === 'Buffer' && Array.isArray(buf.data)) return new Uint8Array(buf.data)
    return new TextEncoder().encode(String(buf))
}

const td = new TextDecoder('utf-8', { fatal: false })

export function decodeBuffer(buf: any): string {
    if (!buf) return ''
    return td.decode(toBytes(buf))
}

export function decodeValue(value: any, valueBuffer: any, type: string): { value: any; valueBuffer: any } {
    if (!valueBuffer) return { value, valueBuffer }

    if (type === 'string') {
        return { value: decodeBuffer(valueBuffer), valueBuffer }
    }
    if (type === 'list' || type === 'set') {
        const decoded = Array.isArray(valueBuffer)
            ? valueBuffer.map((b: any) => decodeBuffer(b))
            : value
        return { value: decoded, valueBuffer }
    }
    if (type === 'hash') {
        if (valueBuffer && typeof valueBuffer === 'object' && !Array.isArray(valueBuffer)) {
            const decoded: Record<string, string> = {}
            for (const [k, v] of Object.entries(valueBuffer)) {
                decoded[k] = decodeBuffer(v)
            }
            return { value: decoded, valueBuffer }
        }
        return { value, valueBuffer }
    }
    if (type === 'zset') {
        if (Array.isArray(valueBuffer)) {
            const decoded: string[] = []
            // Both member (even) and score (odd) must be decoded through decodeBuffer
            // because Socket.IO may send scores as Buffer objects too
            for (let i = 0; i < valueBuffer.length; i += 2) {
                decoded.push(decodeBuffer(valueBuffer[i]))       // member
                decoded.push(decodeBuffer(valueBuffer[i + 1]))   // score
            }
            return { value: decoded, valueBuffer }
        }
        return { value, valueBuffer }
    }
    if (type === 'ReJSON-RL' || type === 'json') {
        const raw = decodeBuffer(valueBuffer)
        try {
            let parsed = JSON.parse(raw)
            if (Array.isArray(parsed) && parsed.length === 1) parsed = parsed[0]
            return { value: parsed, valueBuffer }
        } catch {
            return { value: raw, valueBuffer }
        }
    }
    if (type === 'stream') {
        // Recursively decode ALL non-array items through decodeBuffer
        // (handles ArrayBuffer, ArrayBufferView, {type:'Buffer'}, strings, numbers)
        const decodeStream = (arr: any): any => {
            if (!arr) return arr
            if (Array.isArray(arr)) return arr.map(decodeStream)
            return decodeBuffer(arr)
        }
        return { value: decodeStream(valueBuffer), valueBuffer }
    }
    // timeseries, bloom, etc — JSON parse
    try {
        const raw = decodeBuffer(valueBuffer)
        return { value: JSON.parse(raw), valueBuffer }
    } catch {
        return { value, valueBuffer }
    }
}

// --- Size calculation (from buffer byte lengths, matching React calculateSize) ---

function bufSize(buf: any): number {
    if (!buf) return 0
    if (buf instanceof Uint8Array || buf instanceof ArrayBuffer) return buf.byteLength
    if (ArrayBuffer.isView(buf)) return buf.byteLength
    if (buf.type === 'Buffer' && Array.isArray(buf.data)) return buf.data.length
    if (typeof buf === 'string') return new TextEncoder().encode(buf).byteLength
    return 0
}

export function calculateSize(response: any): number {
    const { type, valueBuffer } = response
    if (!valueBuffer) return 0
    if (type !== 'stream') {
        // Single buffer (string type): Uint8Array, ArrayBuffer, or {type:'Buffer', data:[...]}
        const single = bufSize(valueBuffer)
        if (single > 0) return single
        // Hash type: object with field→buffer entries
        if (typeof valueBuffer === 'object' && !Array.isArray(valueBuffer)) {
            let total = 0
            for (const k of Object.keys(valueBuffer)) total += bufSize(valueBuffer[k])
            return total
        }
        // List/Set/ZSet: array of buffers
        if (Array.isArray(valueBuffer)) {
            let total = 0
            for (const buf of valueBuffer) total += bufSize(buf)
            return total
        }
        return 0
    }
    // Stream: recursive
    let total = 0
    const sumBytes = (el: any) => {
        const s = bufSize(el)
        if (s > 0) { total += s; return }
        if (Array.isArray(el)) el.forEach(sumBytes)
    }
    ;(valueBuffer ?? []).forEach(sumBytes)
    return total
}

// --- Value formatting ---

export function formatValue(value: any, format: string): string {
    if (format === 'json') {
        try {
            const parsed = typeof value === 'string' ? JSON.parse(value) : value
            return JSON.stringify(parsed, null, 2)
        } catch {
            return String(value ?? '')
        }
    }
    if (format === 'base64') {
        try {
            const bytes = new TextEncoder().encode(String(value ?? ''))
            let binary = ''
            for (const b of bytes) binary += String.fromCharCode(b)
            return btoa(binary)
        } catch {
            return String(value ?? '')
        }
    }
    return String(value ?? '')
}

export function truncateDisplay(value: any): string {
    const settings = useSettingsStore()
    const max = settings.maxValueDisplay
    const str = String(value ?? '')
    if (max <= 0) return str
    if (max === -1) return ''
    return str.length > max ? str.substring(0, max) : str
}

export function isTruncated(value: any): boolean {
    const settings = useSettingsStore()
    const max = settings.maxValueDisplay
    if (max <= 0 || max === -1) return false
    return String(value ?? '').length > max
}

// --- Clipboard & Download ---

export function copyToClipboard(value: string) {
    const i18n = useI18nStore()
    const common = useCommonStore()
    navigator.clipboard.writeText(value).then(() => {
        const fn = i18n.strings?.status?.dataCopied
        common.toast(typeof fn === 'function' ? fn() : (fn || 'Copied'))
    }).catch(() => {})
}

export function downloadBuffer(buffer: any, keyName: string, filename?: string) {
    const bytes = toBytes(buffer)
    const { ext, mime } = detectFileType(bytes)
    const blob = new Blob([bytes], { type: mime })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${filename || keyName}.${ext}`
    a.click()
    URL.revokeObjectURL(url)
}

export function downloadText(content: string, filename: string) {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

// --- Translation helper ---

export function str(val: any, opts?: any): string {
    if (typeof val === 'function') return val(opts)
    return val || ''
}

// --- Refresh ---

export function refreshKey() {
    emitCommand('refresh-key')
}
