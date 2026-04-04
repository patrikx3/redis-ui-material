/**
 * Hash key type renderer — exact port of Angular key-hash.component.
 * Table with hashkey + value, paging, add/delete/edit/copy/json/download per row.
 */
import { useState, useEffect, useCallback } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, TableChart, ContentCopy, Download, Edit, Add } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, Paging, formatValue, truncateDisplay, isTruncated, copyValue, downloadBuffer } from './key-type-base'
import KeyPagerInline from './KeyPagerInline'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'

export default function KeyHash({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
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

    useEffect(() => {
        if (!value) return
        const keys = Object.keys(value)
        const p = createPaging(keys.length)
        setPaging(p)
        setPagedItems(keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] })))
    }, [value])

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        if (!value) { setPagedItems([]); return }
        const keys = Object.keys(value)
        setPagedItems(keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] })))
    }, [value])

    const addHash = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'hash', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteHashKey = useCallback(async (hashKey: string) => {
        try {
            await confirm({ message: strings?.confirm?.deleteHashKey ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key-hash-delete-field', payload: { key: keyName, hashKey } })
            toast(strings?.status?.deletedHashKey)
            onRefresh()
        } catch (e) { generalHandleError(e) }
    }, [keyName, strings, confirm, toast, onRefresh, generalHandleError])

    const editValue = useCallback((hashKey: string, val: any) => {
        const editVal = typeof val === 'string' && val.length >= (useRedisStateStore.getState() as any).maxValueAsBuffer
            ? valueBuffer?.[hashKey] : val
        setEditDialogData({ type: 'edit', model: { type: 'hash', key: keyName, hashKey, value: editVal } })
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
    const iconSx = (color: string) => ({ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color, '&:hover': { opacity: 1 } })

    return (
        <Box>
            <KeyPagerInline paging={paging} onPageChange={updatePagedItems} />
            <Box>
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, fontWeight: 'bold',
                    bgcolor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.contrastText,
                    borderBottom: `2px solid ${listBorder}`,
                }}>
                    <Box component="span" sx={{ flex: '20%' }}>{strings?.page?.key?.hash?.table?.hashkey ?? 'Hash Key'}</Box>
                    <Box component="span" sx={{ flex: '60%' }}>{strings?.page?.key?.hash?.table?.value ?? 'Value'}</Box>
                    <Box component="span" sx={{ flex: '20%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {!isReadonly && (
                            <Tooltip title={strings?.intention?.add}><Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={addHash} /></Tooltip>
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
                        <Box component="span" sx={{ flex: '60%', cursor: 'pointer', overflow: 'auto', maxHeight: 200, whiteSpace: 'pre-wrap', wordBreak: 'break-all', userSelect: 'text', fontFamily: "'Roboto Mono', monospace" }}
                            onClick={() => editValue(item.key, item.value)}>
                            {formatValue(truncateDisplay(item.value), valueFormat)}
                            {isTruncated(item.value) && <span style={{ opacity: 0.5 }}>...</span>}
                        </Box>
                        <Box component="span" sx={{ flex: '20%', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            {!isReadonly && <Tooltip title={strings?.intention?.delete}><Delete sx={iconSx('error.main')} onClick={() => deleteHashKey(item.key)} /></Tooltip>}
                            <Tooltip title={strings?.intention?.jsonViewShow}><TableChart sx={iconSx('secondary.main')} onClick={() => { setJsonViewValue(String(item.value ?? '')); setJsonViewOpen(true) }} /></Tooltip>
                            <Tooltip title={strings?.intention?.copy}><ContentCopy sx={iconSx('secondary.main')} onClick={() => copyValue(item.value)} /></Tooltip>
                            <Tooltip title={strings?.intention?.downloadBuffer}><Download sx={iconSx('secondary.main')} onClick={() => downloadBuffer(valueBuffer?.[item.key], keyName, `${keyName}-${item.key}.bin`)} /></Tooltip>
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
