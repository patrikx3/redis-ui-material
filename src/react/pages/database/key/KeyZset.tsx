/**
 * Sorted Set key type renderer — exact port of Angular key-zset.component.
 * Table with score + member. Flat array [member, score, member, score, ...].
 * Uses zsetMode paging (pairs).
 */
import { useState, useEffect, useCallback } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, TableChart, ContentCopy, Download, Edit, Add } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, rePaging, Paging, pagerAction, pageChange, formatValue, truncateDisplay, isTruncated, copyValue, downloadBuffer } from './key-type-base'
import KeyPagerInline from './KeyPagerInline'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'

interface ZsetItem { score: string; member: string; index: number }

function buildItems(value: any[], paging: Paging): ZsetItem[] {
    if (!value) return []
    const items: ZsetItem[] = []
    for (let i = 0; i < value.length; i += 2) {
        items.push({ member: value[i], score: value[i + 1], index: i / 2 })
    }
    return items.slice(paging.startIndex, paging.endIndex)
}

export default function KeyZset({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const muiTheme = useTheme()
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [paging, setPaging] = useState<Paging>(() => createPaging(value?.length ?? 0, true))
    const [pagedItems, setPagedItems] = useState<ZsetItem[]>([])
    const [editDialogOpen, setEditDialogOpen] = useState(false)
    const [editDialogData, setEditDialogData] = useState<any>(null)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonViewValue, setJsonViewValue] = useState('')

    useEffect(() => {
        if (!value) return
        const p = rePaging(paging, value.length, true)
        setPaging(p)
        setPagedItems(buildItems(value, p))
    }, [value])

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        setPagedItems(buildItems(value, p))
    }, [value])

    const addZSet = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'zset', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteZSet = useCallback(async (item: ZsetItem) => {
        try {
            await confirm({ message: strings?.confirm?.deleteZSetMember ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key-zset-delete-member', payload: { key: keyName, value: valueBuffer?.[item.index * 2] } })
            toast(strings?.status?.deletedZSetMember)
            onRefresh()
        } catch (e) { generalHandleError(e) }
    }, [keyName, valueBuffer, strings, confirm, toast, onRefresh, generalHandleError])

    const editValue = useCallback((item: ZsetItem) => {
        const editVal = typeof item.member === 'string' && item.member.length >= (useRedisStateStore.getState() as any).maxValueAsBuffer
            ? valueBuffer?.[item.index * 2] : item.member
        setEditDialogData({ type: 'edit', model: { type: 'zset', key: keyName, value: editVal, score: item.score } })
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
                    <Box component="span" sx={{ flex: '20%' }}>{strings?.page?.key?.zset?.table?.score ?? 'Score'}</Box>
                    <Box component="span" sx={{ flex: '60%' }}>{strings?.page?.key?.zset?.table?.value ?? 'Member'}</Box>
                    <Box component="span" sx={{ flex: '20%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        {!isReadonly && (
                            <Tooltip title={strings?.intention?.add}><Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={addZSet} /></Tooltip>
                        )}
                    </Box>
                </Box>

                {pagedItems.map((item, i) => (
                    <Box key={item.index} sx={{
                        display: 'flex', alignItems: 'flex-start', gap: 1, px: 2, py: '6px',
                        borderBottom: `1px solid ${listBorder}`,
                        bgcolor: i % 2 === 0 ? oddBg : 'transparent',
                        '&:hover': { bgcolor: `${hoverBg} !important` },
                    }}>
                        <Box component="span" sx={{ flex: '20%', cursor: 'pointer', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', userSelect: 'text' }}
                            onClick={() => editValue(item)}>{item.score}</Box>
                        <Box component="span" sx={{ flex: '60%', cursor: 'pointer', overflow: 'auto', maxHeight: 200, whiteSpace: 'pre-wrap', wordBreak: 'break-all', userSelect: 'text', fontFamily: "'Roboto Mono', monospace" }}
                            onClick={() => editValue(item)}>
                            {formatValue(truncateDisplay(item.member), valueFormat)}
                            {isTruncated(item.member) && <span style={{ opacity: 0.5 }}>...</span>}
                        </Box>
                        <Box component="span" sx={{ flex: '20%', textAlign: 'right', whiteSpace: 'nowrap' }}>
                            {!isReadonly && <Tooltip title={strings?.intention?.delete}><Delete sx={iconSx('error.main')} onClick={() => deleteZSet(item)} /></Tooltip>}
                            <Tooltip title={strings?.intention?.jsonViewShow}><TableChart sx={iconSx('secondary.main')} onClick={() => { setJsonViewValue(String(item.member ?? '')); setJsonViewOpen(true) }} /></Tooltip>
                            <Tooltip title={strings?.intention?.copy}><ContentCopy sx={iconSx('secondary.main')} onClick={() => copyValue(item.member)} /></Tooltip>
                            <Tooltip title={strings?.intention?.downloadBuffer}><Download sx={iconSx('secondary.main')} onClick={() => downloadBuffer(valueBuffer?.[item.index * 2], keyName)} /></Tooltip>
                            {!isReadonly && <Tooltip title={strings?.intention?.edit}><Edit sx={iconSx('primary.main')} onClick={() => editValue(item)} /></Tooltip>}
                        </Box>
                    </Box>
                ))}
            </Box>

            <KeyNewOrSetDialog open={editDialogOpen} data={editDialogData} onClose={handleEditClose} />
            <JsonViewDialog open={jsonViewOpen} value={jsonViewValue} onClose={() => setJsonViewOpen(false)} />
        </Box>
    )
}
