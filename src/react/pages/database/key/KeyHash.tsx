/**
 * Hash key type renderer — exact port of Angular key-hash.component.
 * Table with hashkey + value, paging, add/delete/edit/copy/json/download per row.
 */
import { useState, useEffect, useCallback, useRef } from 'react'
import { Box, Tooltip } from '@mui/material'
import { Delete, AccountTree, ContentCopy, Download, Edit, Add, Schedule as ScheduleIcon } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { parseRedisVersion } from '../../../../core/redis-version'
import { useCommonStore } from '../../../stores/common.store'
import { useSettingsStore } from '../../../stores/settings.store'
import humanizeDuration from 'humanize-duration'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, rePaging, Paging, formatValue, truncateDisplay, isTruncated, copyValue, downloadBuffer } from './key-type-base'
import HexMonitor from './HexMonitor'
import KeyPagerInline from './KeyPagerInline'
import KeyNewOrSetDialog from '../../../dialogs/KeyNewOrSetDialog'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'
import TtlDialog from '../../../dialogs/TtlDialog'

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
    const [ttlDialogOpen, setTtlDialogOpen] = useState(false)
    const [ttlDialogField, setTtlDialogField] = useState('')
    const [ttlDialogValue, setTtlDialogValue] = useState(-1)
    const [fieldTtls, setFieldTtls] = useState<Record<string, number>>({})
    const fieldTtlsFetchedAtRef = useRef(0)
    const [tick, setTick] = useState(0)
    const onRefreshRef = useRef(onRefresh)
    onRefreshRef.current = onRefresh

    const loadFieldTtls = useCallback(async (items?: Array<{ key: string; value: any }>) => {
        if (!value || !parseRedisVersion(useRedisStateStore.getState().info?.server?.redis_version).isAtLeast(8, 0)) return
        try {
            const fields = (items || pagedItems).map(item => item.key)
            if (fields.length === 0) return
            const res = await request({ action: 'hash-field/ttls', payload: { key: keyName, fields } })
            setFieldTtls(res.fieldTtls || {})
            fieldTtlsFetchedAtRef.current = Date.now()
        } catch { setFieldTtls({}) }
    }, [value, keyName, pagedItems])

    // Inject pulse keyframes once
    useEffect(() => {
        if (document.getElementById('p3xr-hash-ttl-pulse-css')) return
        const style = document.createElement('style')
        style.id = 'p3xr-hash-ttl-pulse-css'
        style.textContent = '@keyframes p3xr-hash-ttl-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }'
        document.head.appendChild(style)
    }, [])

    // 1-second tick for live countdown
    useEffect(() => {
        if (!Object.values(fieldTtls).some(t => t > 0)) return
        const id = setInterval(() => {
            // Check for expired fields
            const elapsed = Math.floor((Date.now() - fieldTtlsFetchedAtRef.current) / 1000)
            const anyExpired = Object.values(fieldTtls).some(t => t > 0 && t - elapsed <= 0)
            if (anyExpired) { clearInterval(id); onRefreshRef.current(); return }
            setTick(t => t + 1)
        }, 1000)
        return () => clearInterval(id)
    }, [fieldTtls])

    useEffect(() => {
        if (!value) return
        const keys = Object.keys(value)
        const p = rePaging(paging, keys.length)
        setPaging(p)
        const items = keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] }))
        setPagedItems(items)
        loadFieldTtls(items)
    }, [value])

    const updatePagedItems = useCallback((p: Paging) => {
        setPaging(p)
        if (!value) { setPagedItems([]); return }
        const keys = Object.keys(value)
        const items = keys.slice(p.startIndex, p.endIndex).map(k => ({ key: k, value: value[k] }))
        setPagedItems(items)
        loadFieldTtls(items)
    }, [value, loadFieldTtls])

    const addHash = useCallback(() => {
        setEditDialogData({ type: 'append', model: { type: 'hash', key: keyName } })
        setEditDialogOpen(true)
    }, [keyName])

    const deleteHashKey = useCallback(async (hashKey: string) => {
        try {
            await confirm({ message: strings?.confirm?.deleteHashKey ?? strings?.confirm?.areYouSure ?? 'Are you sure?' })
            await request({ action: 'key/hash-delete-field', payload: { key: keyName, hashKey } })
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

    const setFieldTtl = useCallback(async (hashKey: string) => {
        try {
            const res = await request({ action: 'hash-field/ttl-get', payload: { key: keyName, field: hashKey } })
            setTtlDialogField(hashKey)
            setTtlDialogValue(res.ttl ?? -1)
            setTtlDialogOpen(true)
        } catch (e) { generalHandleError(e) }
    }, [keyName, generalHandleError])

    const handleTtlClose = useCallback(async (result?: { model: { ttl: number } }) => {
        setTtlDialogOpen(false)
        if (!result) return
        try {
            await request({ action: 'hash-field/ttl', payload: { key: keyName, field: ttlDialogField, ttl: result.model.ttl } })
            toast(`${ttlDialogField}: TTL ${result.model.ttl === -1 ? 'removed' : result.model.ttl + 's'}`)
            loadFieldTtls()
        } catch (e) { generalHandleError(e) }
    }, [keyName, ttlDialogField, toast, generalHandleError, loadFieldTtls])

    const getRemaining = (field: string): number => {
        void tick
        const ttl = fieldTtls[field]
        if (!ttl || ttl <= 0) return -1
        const elapsed = Math.floor((Date.now() - fieldTtlsFetchedAtRef.current) / 1000)
        const r = ttl - elapsed
        return r > 0 ? r : -1
    }

    const getFieldTtlColor = (field: string): string => {
        const r = getRemaining(field)
        if (r <= 0) return ''
        if (r < 300) return '#f44336'
        if (r < 3600) return '#ff9800'
        return '#4caf50'
    }

    const isFieldTtlPulsing = (field: string): boolean => getRemaining(field) > 0 && getRemaining(field) < 30

    const hasFieldTtl = (field: string): boolean => getRemaining(field) > 0

    const formatFieldTtl = (field: string): string => {
        const remaining = getRemaining(field)
        if (remaining <= 0) return ''
        const hdOpts = useSettingsStore.getState().getHumanizeDurationOptions()
        return humanizeDuration(remaining * 1000, { ...hdOpts, largest: 2, round: true, delimiter: ' ' })
    }

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
                            {!isReadonly && parseRedisVersion(useRedisStateStore.getState().info?.server?.redis_version).isAtLeast(8, 0) && (
                                <Tooltip title={hasFieldTtl(item.key) ? `TTL: ${formatFieldTtl(item.key)}` : (strings?.intention?.ttl)}>
                                    <ScheduleIcon
                                        style={{
                                            fontSize: 24, cursor: 'pointer', marginLeft: 2, marginRight: 2,
                                            color: getFieldTtlColor(item.key) || undefined,
                                            opacity: hasFieldTtl(item.key) ? 0.7 : 0.3,
                                            animation: isFieldTtlPulsing(item.key) ? 'p3xr-hash-ttl-pulse 1s infinite' : 'none',
                                        }}
                                        onClick={() => setFieldTtl(item.key)} />
                                </Tooltip>
                            )}
                            {!isReadonly && <Tooltip title={strings?.intention?.delete}><Delete sx={iconSx('error.main')} onClick={() => deleteHashKey(item.key)} /></Tooltip>}
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
            <TtlDialog open={ttlDialogOpen} ttl={ttlDialogValue} onClose={handleTtlClose} />
        </Box>
    )
}
