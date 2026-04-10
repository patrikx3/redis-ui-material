/**
 * List key type renderer — exact port of Angular key-list.component.
 * Table with index + value, paging, add/delete/edit/copy/json/download per row.
 */
import { useState, useEffect, useCallback } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, TableChart, ContentCopy, Download, Edit, Add } from '@mui/icons-material'
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

export default function KeyList({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [paging, setPaging] = useState<Paging>(() => createPaging(value?.length ?? 0))
    const [pagedItems, setPagedItems] = useState<Array<{ index: number; value: any }>>([])
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [editDialogData, setEditDialogData] = useState<any>(null)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonViewValue, setJsonViewValue] = useState('')

    // Update paging when value changes
    useEffect(() => {
        if (!value) return
        const p = rePaging(paging, value.length)
        setPaging(p)
        setPagedItems(value.slice(p.startIndex, p.endIndex)
            .map((v: any, i: number) => ({ index: p.startIndex + i, value: v })))
    }, [value])

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        if (!value) { setPagedItems([]); return }
        setPagedItems(value.slice(p.startIndex, p.endIndex)
            .map((v: any, i: number) => ({ index: p.startIndex + i, value: v })))
    }, [value])

    // --- Actions ---
    const appendValue = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'list', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteListElement = useCallback(async (index: number) => {
        try {
            await confirm({ message: strings?.confirm?.deleteListItem ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key-list-delete-index', payload: { key: keyName, index } })
            toast(strings?.status?.deletedListElement)
            onRefresh()
        } catch (e) { generalHandleError(e) }
    }, [keyName, strings, confirm, toast, onRefresh, generalHandleError])

    const editValue = useCallback((index: number, val: any) => {
        const editVal = typeof val === 'string' && val.length >= (useRedisStateStore.getState() as any).maxValueAsBuffer
            ? valueBuffer?.[index] : val
        setEditDialogData({ type: 'edit', model: { type: 'list', key: keyName, index, value: editVal } })
        setEditDialogOpen(true)
    }, [keyName, valueBuffer])

    const handleEditClose = useCallback((result?: any) => {
        setEditDialogOpen(false)
        setEditDialogData(null)
        if (result) onRefresh()
    }, [onRefresh])

    // Row colors
    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
    const listBorder = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'

    return (
        <Box>
            <KeyPagerInline paging={paging} onPageChange={updatePagedItems} />

            <Box className="p3xr-key-type-table">
                {/* Header */}
                <Box sx={{
                    display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1,
                    fontWeight: 'bold',
                    bgcolor: muiTheme.palette.primary.main, color: muiTheme.palette.primary.contrastText,
                    borderBottom: `2px solid ${listBorder}`,
                }}>
                    <Box component="span" sx={{ flex: '20%' }}>{strings?.page?.key?.list?.table?.index ?? 'Index'}</Box>
                    <Box component="span" sx={{ flex: '60%' }}>{strings?.page?.key?.list?.table?.value ?? 'Value'}</Box>
                    <Box component="span" sx={{ flex: '20%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {!isReadonly && (
                            <Tooltip title={strings?.intention?.add}>
                                <Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={appendValue} />
                            </Tooltip>
                        )}
                    </Box>
                </Box>

                {/* Rows */}
                {pagedItems.map((item, i) => (
                    <Box key={item.index} sx={{
                        display: 'flex', alignItems: 'flex-start', gap: 1, px: 2, py: '6px',
                        borderBottom: `1px solid ${listBorder}`,
                        bgcolor: i % 2 === 0 ? oddBg : 'transparent',
                        '&:hover': { bgcolor: `${hoverBg} !important` },
                    }}>
                        <Box component="span" sx={{
                            flex: '20%', cursor: 'pointer', overflow: 'hidden',
                            textOverflow: 'ellipsis', whiteSpace: 'nowrap', userSelect: 'text',
                        }} onClick={() => editValue(item.index, item.value)}>
                            {item.index}
                        </Box>
                        <Box component="span" sx={{
                            flex: '60%', cursor: 'pointer', overflow: 'auto', maxHeight: 200,
                            ...(valueFormat !== 'hex' ? { whiteSpace: 'pre-wrap', wordBreak: 'break-all', fontFamily: "'Roboto Mono', monospace" } : {}),
                            userSelect: 'text',
                        }} onClick={() => editValue(item.index, item.value)}>
                            {valueFormat === 'hex'
                                ? <HexMonitor value={truncateDisplay(item.value)} truncated={isTruncated(item.value)} />
                                : <>{formatValue(truncateDisplay(item.value), valueFormat)}{isTruncated(item.value) && <span style={{ opacity: 0.5 }}>...</span>}</>}
                        </Box>
                        <Box component="span" sx={{ flex: '20%', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            {!isReadonly && (
                                <Tooltip title={strings?.intention?.delete}>
                                    <Delete sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'error.main', '&:hover': { opacity: 1 } }}
                                        onClick={() => deleteListElement(item.index)} />
                                </Tooltip>
                            )}
                            <Tooltip title={strings?.intention?.jsonViewShow}>
                                <TableChart sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'secondary.main', '&:hover': { opacity: 1 } }}
                                    onClick={() => { setJsonViewValue(String(item.value ?? '')); setJsonViewOpen(true) }} />
                            </Tooltip>
                            <Tooltip title={strings?.intention?.copy}>
                                <ContentCopy sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'secondary.main', '&:hover': { opacity: 1 } }}
                                    onClick={() => copyValue(item.value)} />
                            </Tooltip>
                            <Tooltip title={strings?.intention?.downloadBuffer}>
                                <Download sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'secondary.main', '&:hover': { opacity: 1 } }}
                                    onClick={() => downloadBuffer(valueBuffer?.[item.index], keyName)} />
                            </Tooltip>
                            {!isReadonly && (
                                <Tooltip title={strings?.intention?.edit}>
                                    <Edit sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'primary.main', '&:hover': { opacity: 1 } }}
                                        onClick={() => editValue(item.index, item.value)} />
                                </Tooltip>
                            )}
                        </Box>
                    </Box>
                ))}
            </Box>

            <KeyNewOrSetDialog open={editDialogOpen} data={editDialogData} onClose={handleEditClose} />
            <JsonViewDialog open={jsonViewOpen} value={jsonViewValue} onClose={() => setJsonViewOpen(false)} />
        </Box>
    )
}
