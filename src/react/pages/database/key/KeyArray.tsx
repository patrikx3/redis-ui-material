/**
 * Array key type renderer — exact port of Angular key-array.component.
 * Sparse integer-index → value structure, rendered like a hash (index → value table).
 * Indices are sorted numerically ascending. Arrays have NO per-element TTL.
 */
import { useState, useEffect, useCallback } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, AccountTree, ContentCopy, Download, Edit, Add } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, rePaging, Paging, formatValue, truncateDisplay, isTruncated, copyValue, downloadBuffer } from './key-type-base'
import HexMonitor from './HexMonitor'
import KeyPagerInline from './KeyPagerInline'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'

export default function KeyArray({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [paging, setPaging] = useState<Paging>(() => createPaging(value ? Object.keys(value).length : 0))
    const [pagedItems, setPagedItems] = useState<Array<{ key: string; value: any }>>([])
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [editDialogData, setEditDialogData] = useState<any>(null)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonViewValue, setJsonViewValue] = useState('')

    // Array indices are numeric — keep them in ascending numeric order (sparse-friendly)
    const sortedKeys = useCallback((): string[] => {
        if (!value) return []
        return Object.keys(value).sort((a, b) => Number(a) - Number(b))
    }, [value])

    useEffect(() => {
        if (!value) return
        const keys = sortedKeys()
        const p = rePaging(paging, keys.length)
        setPaging(p)
        setPagedItems(keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] })))
    }, [value]) // eslint-disable-line react-hooks/exhaustive-deps

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        if (!value) { setPagedItems([]); return }
        const keys = sortedKeys()
        setPagedItems(keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] })))
    }, [value, sortedKeys])

    const addArray = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'array', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteArrayIndex = useCallback(async (index: string) => {
        try {
            await confirm({ message: strings?.confirm?.deleteArrayIndex ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key/array-delete-index', payload: { key: keyName, index } })
            toast(strings?.status?.deletedArrayIndex)
            onRefresh()
        } catch (e) { generalHandleError(e) }
    }, [keyName, strings, confirm, toast, onRefresh, generalHandleError])

    const editValue = useCallback((index: string, val: any) => {
        const editVal = typeof val === 'string' && val.length >= (useRedisStateStore.getState() as any).maxValueAsBuffer
            ? valueBuffer?.[index] : val
        setEditDialogData({ type: 'edit', model: { type: 'array', key: keyName, index, value: editVal } })
        setEditDialogOpen(true)
    }, [keyName, valueBuffer])

    const handleEditClose = useCallback((result?: any) => {
        setEditDialogOpen(false)
        setEditDialogData(null)
        if (result) onRefresh()
    }, [onRefresh])

    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
    const listBorder = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'
    const iconSx = (color: string) => ({ fontSize: 24, cursor: 'pointer', mx: '2px', opacity: 0.7, color, '&:hover': { opacity: 1 } })

    return (
        <Box>
            <KeyPagerInline paging={paging} onPageChange={updatePagedItems} />
            <Box>
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, fontWeight: 'bold',
                    bgcolor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.contrastText,
                    borderBottom: `2px solid ${listBorder}`,
                }}>
                    <Box component="span" sx={{ flex: '20%' }}>{strings?.page?.key?.array?.table?.index ?? 'Index'}</Box>
                    <Box component="span" sx={{ flex: '60%' }}>{strings?.page?.key?.array?.table?.value ?? 'Value'}</Box>
                    <Box component="span" sx={{ flex: '20%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {!isReadonly && (
                            <Tooltip title={strings?.intention?.add}><Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={addArray} /></Tooltip>
                        )}
                    </Box>
                </Box>

                {pagedItems.map((item, i) => (
                    <Box key={item.key} sx={{
                        display: 'flex', alignItems: 'flex-start', gap: 1, px: 2, py: '6px',
                        borderBottom: `1px solid ${listBorder}`,
                        bgcolor: i % 2 === 0 ? oddBg : 'transparent',
                        '&:hover': { bgcolor: `${hoverBg} !important` },
                    }}>
                        <Box component="span" sx={{ flex: '20%', cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', userSelect: 'text' }}
                            onClick={() => editValue(item.key, item.value)}>{item.key}</Box>
                        <Box component="span" sx={{
                            flex: '60%', cursor: 'pointer', overflow: 'auto', maxHeight: 200,
                            ...(valueFormat !== 'hex' ? { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: "'Roboto Mono', monospace" } : {}),
                            userSelect: 'text',
                        }} onClick={() => editValue(item.key, item.value)}>
                            {valueFormat === 'hex'
                                ? <HexMonitor value={truncateDisplay(item.value)} truncated={isTruncated(item.value)} />
                                : <>{truncateDisplay(formatValue(item.value, valueFormat))}{isTruncated(item.value) && <span style={{ opacity: 0.5 }}>...</span>}</>}
                        </Box>
                        <Box component="span" sx={{ flex: '20%', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            {!isReadonly && <Tooltip title={strings?.intention?.delete}><Delete sx={iconSx('error.main')} onClick={() => deleteArrayIndex(item.key)} /></Tooltip>}
                            <Tooltip title={strings?.intention?.jsonViewShow}><AccountTree sx={iconSx('secondary.main')} onClick={() => { setJsonViewValue(String(item.value ?? '')); setJsonViewOpen(true) }} /></Tooltip>
                            <Tooltip title={strings?.intention?.copy}><ContentCopy sx={iconSx('secondary.main')} onClick={() => copyValue(item.value)} /></Tooltip>
                            <Tooltip title={strings?.intention?.downloadBuffer}><Download sx={iconSx('secondary.main')} onClick={() => downloadBuffer(valueBuffer?.[item.key], keyName, `${keyName}-${item.key}`)} /></Tooltip>
                            {!isReadonly && <Tooltip title={strings?.intention?.edit}><Edit sx={iconSx('primary.main')} onClick={() => editValue(item.key, item.value)} /></Tooltip>}
                        </Box>
                    </Box>
                ))}
            </Box>

            <KeyNewOrSetDialog open={editDialogOpen} data={editDialogData} onClose={handleEditClose} />
            <JsonViewDialog open={jsonViewOpen} value={jsonViewValue} onClose={() => setJsonViewOpen(false)} />
        </Box>
    )
}
