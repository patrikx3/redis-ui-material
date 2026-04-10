/**
 * Stream key type renderer — exact port of Angular key-stream.component.
 * Block layout with timestamp ID header + field/value pairs.
 */
import { useState, useEffect, useCallback } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, TableChart, ContentCopy, Download, Add } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, rePaging, Paging, formatValue, truncateDisplay, isTruncated, copyValue } from './key-type-base'
import HexMonitor from './HexMonitor'
import KeyPagerInline from './KeyPagerInline'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'

const intlLocaleMap: Record<string, string> = { 'zn': 'zh-CN', 'no': 'nb', 'fil': 'tl' }

interface StreamEntry {
    id: string
    fields: Array<[string, string]>
    data: any
    hasDuplicateFields: boolean
}

function parseFieldValue(value: string): any {
    try { return JSON.parse(value) } catch { return value }
}

function hasDuplicateFields(fields: Array<[string, string]>): boolean {
    const seen = new Set<string>()
    for (const [key] of fields) { if (seen.has(key)) return true; seen.add(key) }
    return false
}

function fieldsToObject(fields: Array<[string, string]>): any {
    const obj: any = {}
    for (const [key, value] of fields) obj[key] = parseFieldValue(value)
    return obj
}

function fieldsToArray(fields: Array<[string, string]>): Array<{ field: string; value: any }> {
    return fields.map(([field, value]) => ({ field, value: parseFieldValue(value) }))
}

function buildEntries(value: any[]): StreamEntry[] {
    if (!value) return []
    return value.map((entry: any) => {
        const id = entry[0]
        const rawData = entry[1]
        const fields: Array<[string, string]> = []
        for (let i = 0; i < rawData.length; i += 2) fields.push([rawData[i], rawData[i + 1]])
        const hasDup = hasDuplicateFields(fields)
        const data = hasDup ? fieldsToArray(fields) : fieldsToObject(fields)
        return { id, fields, data, hasDuplicateFields: hasDup }
    })
}

function entryToExport(entry: StreamEntry): any {
    if (entry.hasDuplicateFields) return { id: entry.id, fields: entry.data }
    return { id: entry.id, ...entry.data }
}

export default function KeyStream({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [allEntries, setAllEntries] = useState<StreamEntry[]>([])
    const [paging, setPaging] = useState<Paging>(() => createPaging(0))
    const [pagedEntries, setPagedEntries] = useState<StreamEntry[]>([])
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [editDialogData, setEditDialogData] = useState<any>(null)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonViewValue, setJsonViewValue] = useState('')

    useEffect(() => {
        const entries = buildEntries(value)
        setAllEntries(entries)
        const p = rePaging(paging, entries.length)
        setPaging(p)
        setPagedEntries(entries.slice(p.startIndex, p.endIndex))
    }, [value])

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        setPagedEntries(allEntries.slice(p.startIndex, p.endIndex))
    }, [allEntries])

    const showTimestamp = useCallback((id: string): string => {
        try {
            const ms = parseInt(id.slice(0, id.indexOf('-')))
            const lang = currentLang || 'en'
            const locale = intlLocaleMap[lang] || lang
            return new Date(ms).toLocaleString(locale, {
                year: 'numeric', month: 'numeric', day: 'numeric',
                hour: '2-digit', minute: '2-digit', second: '2-digit',
            })
        } catch { return id }
    }, [currentLang])

    const addStream = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'stream', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteStreamTimestamp = useCallback(async (id: string) => {
        try {
            await confirm({ message: strings?.confirm?.deleteStreamTimestamp ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key-stream-delete-timestamp', payload: { key: keyName, streamTimestamp: id } })
            toast(strings?.status?.deletedStreamTimestamp ?? strings?.status?.deletedKey)
            onRefresh()
        } catch (e) { if (e) generalHandleError(e) }
    }, [keyName, strings, confirm, toast, onRefresh, generalHandleError])

    const copyEntry = useCallback((entry: StreamEntry) => {
        copyValue(JSON.stringify(entryToExport(entry), null, 2))
    }, [])

    const downloadEntry = useCallback((entry: StreamEntry) => {
        const lines = [entry.id]
        for (const [field, val] of entry.fields) { lines.push(field); lines.push(val) }
        const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = `${keyName}-${entry.id}.txt`; a.click()
        URL.revokeObjectURL(url)
    }, [keyName])

    const viewEntryJson = useCallback((entry: StreamEntry) => {
        setJsonViewValue(JSON.stringify(entryToExport(entry)))
        setJsonViewOpen(true)
    }, [])

    const handleEditClose = useCallback((result?: any) => {
        setEditDialogOpen(false); setEditDialogData(null)
        if (result) onRefresh()
    }, [onRefresh])

    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    const listBorder = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    const iconSx = (color: string) => ({ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color, '&:hover': { opacity: 1 } })

    return (
        <Box>
            <KeyPagerInline paging={paging} onPageChange={updatePagedItems} />
            <Box>
                {/* Header */}
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, fontWeight: 'bold',
                    bgcolor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.contrastText,
                    borderBottom: `2px solid ${listBorder}`,
                }}>
                    <Box component="span" sx={{ flex: 1 }}>{strings?.page?.key?.stream?.table?.timestamp ?? 'Timestamp ID'}</Box>
                    <Box component="span" sx={{ textAlign: 'right' }}>
                        {!isReadonly && (
                            <Tooltip title={strings?.intention?.add}><Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={addStream} /></Tooltip>
                        )}
                    </Box>
                </Box>

                {/* Entries */}
                {pagedEntries.map((entry, i) => (
                    <Box key={entry.id} sx={{
                        borderBottom: `1px solid ${listBorder}`,
                        bgcolor: i % 2 === 0 ? oddBg : 'transparent',
                        '&:hover': { bgcolor: `${hoverBg} !important` },
                    }}>
                        {/* Entry header */}
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 2, py: '6px', fontSize: 13 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                <strong>{entry.id}</strong>
                                <Box component="span" sx={{ opacity: 0.5, fontSize: 12 }}>{showTimestamp(entry.id)}</Box>
                            </Box>
                            <Box sx={{ whiteSpace: 'nowrap' }}>
                                <Tooltip title={strings?.intention?.copy}><ContentCopy sx={iconSx('secondary.main')} onClick={() => copyEntry(entry)} /></Tooltip>
                                <Tooltip title={strings?.intention?.downloadBuffer}><Download sx={iconSx('secondary.main')} onClick={() => downloadEntry(entry)} /></Tooltip>
                                <Tooltip title={strings?.intention?.jsonViewShow}><TableChart sx={iconSx('secondary.main')} onClick={() => viewEntryJson(entry)} /></Tooltip>
                                {!isReadonly && (
                                    <Tooltip title={strings?.intention?.delete}><Delete sx={iconSx('error.main')} onClick={() => deleteStreamTimestamp(entry.id)} /></Tooltip>
                                )}
                            </Box>
                        </Box>

                        {/* Entry fields */}
                        <Box sx={{ px: 2, pb: 1, overflow: 'auto', maxHeight: 300 }}>
                            {entry.fields.map(([field, val], fi) => (
                                <Box key={`${field}-${fi}`} sx={{ display: 'flex', gap: 1, py: '2px' }}>
                                    <Box component="span" sx={{ minWidth: 120, opacity: 0.7 }}>{field}</Box>
                                    <Box component="span" sx={{
                                        flex: 1, maxHeight: 200, overflow: 'auto',
                                        ...(valueFormat !== 'hex' ? { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: "'Roboto Mono', monospace" } : {}),
                                    }}>
                                        {valueFormat === 'hex'
                                            ? <HexMonitor value={truncateDisplay(val)} truncated={isTruncated(val)} />
                                            : <>{truncateDisplay(formatValue(val, valueFormat))}{isTruncated(val) && <span style={{ opacity: 0.5 }}>...</span>}</>}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>

            <KeyNewOrSetDialog open={editDialogOpen} data={editDialogData} onClose={handleEditClose} />
            <JsonViewDialog open={jsonViewOpen} value={jsonViewValue} onClose={() => setJsonViewOpen(false)} />
        </Box>
    )
}
