import { useState, useEffect, useCallback, useRef } from 'react'
import { useParams } from 'react-router-dom'
import {
    Box, Button, Tooltip, CircularProgress,
    ToggleButtonGroup, ToggleButton, useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { Add, Delete, Timer, Fingerprint, Refresh } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useSettingsStore } from '../../stores/settings.store'
import { useCommonStore } from '../../stores/common.store'
import { useMainCommandStore, onCommandEvent } from '../../stores/main-command.store'
import { useThemeStore } from '../../stores/theme.store'
import { request } from '../../stores/socket.service'
import { navigateTo } from '../../stores/navigation.store'
import { trackPage } from '../../stores/analytics'
import { isDarkTheme } from '../../themes'
import humanizeDuration from 'humanize-duration'
import KeyString from './key/KeyString'
import KeyList from './key/KeyList'
import KeyHash from './key/KeyHash'
import KeySet from './key/KeySet'
import KeyZset from './key/KeyZset'
import KeyStream from './key/KeyStream'
import KeyJson from './key/KeyJson'
import KeyTimeseries from './key/KeyTimeseries'
import KeyProbabilistic from './key/KeyProbabilistic'
import KeyVectorset from './key/KeyVectorset'
import TtlDialog from '../../dialogs/TtlDialog'

const TextDecoder_ = typeof TextDecoder !== 'undefined' ? TextDecoder : class { decode(b: any) { return String(b) } }

function toBytes(buf: any): any {
    if (buf instanceof Uint8Array || buf instanceof ArrayBuffer) return buf instanceof ArrayBuffer ? new Uint8Array(buf) : buf
    if (buf && buf.type === 'Buffer' && Array.isArray(buf.data)) return new Uint8Array(buf.data)
    if (ArrayBuffer.isView(buf)) return new Uint8Array((buf as any).buffer, (buf as any).byteOffset, (buf as any).byteLength)
    return buf
}

function decodeValueBuffer(response: any, jsonFormat: number): void {
    const td = new TextDecoder_()
    const { type, valueBuffer } = response
    switch (type) {
        case 'string':
            response.value = td.decode(toBytes(valueBuffer))
            break
        case 'list':
        case 'set':
            response.value = valueBuffer.map((buf: any) => td.decode(toBytes(buf)))
            break
        case 'hash':
            response.value = {}
            Object.entries(valueBuffer).forEach(([key, buf]: [string, any]) => {
                response.value[key] = td.decode(toBytes(buf))
            })
            break
        case 'zset':
            response.value = []
            for (let i = 0; i < valueBuffer.length; i += 2) {
                response.value.push(td.decode(toBytes(valueBuffer[i])))
                response.value.push(td.decode(valueBuffer[i + 1]))
            }
            break
        case 'json': {
            const rawJson = td.decode(toBytes(valueBuffer))
            try {
                const parsed = JSON.parse(rawJson)
                const unwrapped = Array.isArray(parsed) ? parsed[0] : parsed
                response.value = JSON.stringify(unwrapped, null, jsonFormat ?? 2)
            } catch {
                response.value = rawJson
            }
            break
        }
        case 'stream': {
            const decodeEntry = (entry: any): any => {
                return entry.map((item: any) => {
                    if (Array.isArray(item)) return decodeEntry(item)
                    if (ArrayBuffer.isView(item) || item instanceof ArrayBuffer) return td.decode(toBytes(item))
                    return item
                })
            }
            response.value = valueBuffer.map((entry: any) => decodeEntry(entry))
            break
        }
        case 'timeseries':
        case 'bloom':
        case 'cuckoo':
        case 'topk':
        case 'cms':
        case 'tdigest':
        case 'vectorset':
            try { response.value = JSON.parse(td.decode(toBytes(valueBuffer))) }
            catch { response.value = {} }
            break
        default:
            try { response.value = JSON.parse(td.decode(toBytes(valueBuffer))) }
            catch { response.value = td.decode(toBytes(valueBuffer)) }
            break
    }
}

function calculateSize(response: any): void {
    response.size = 0
    if (response.type !== 'stream') {
        if (typeof response.valueBuffer === 'object' && !Array.isArray(response.valueBuffer) && response.length > 0) {
            for (const k of Object.keys(response.valueBuffer)) response.size += response.valueBuffer[k]?.byteLength ?? 0
        } else if (Array.isArray(response.valueBuffer)) {
            for (const buf of response.valueBuffer) response.size += buf?.byteLength ?? 0
        } else if (response.valueBuffer) {
            response.size = response.valueBuffer.byteLength ?? 0
        }
    } else {
        const sumBytes = (arr: any[]): number => {
            let total = 0
            const process = (el: any) => {
                if (ArrayBuffer.isView(el) || el instanceof ArrayBuffer) total += el.byteLength
                else if (Array.isArray(el)) el.forEach(process)
            }
            arr.forEach(process)
            return total
        }
        response.size = sumBytes(response.valueBuffer ?? [])
    }
}

export default function DatabaseKeyPage() {
    const { key: rawKey } = useParams()
    const key = decodeURIComponent(rawKey ?? '')
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const themeKey = useThemeStore(s => s.themeKey)
    const jsonFormat = useSettingsStore(s => s.jsonFormat)
    const muiTheme = useTheme()
    const { confirm, toast, generalHandleError } = useCommonStore()
    const isGtSm = useMediaQuery('(min-width: 960px)')
    const isReadonly = connection?.readonly === true
    const isDark = muiTheme.palette.mode === 'dark'

    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState<any>(null)
    const [valueFormat, setValueFormat] = useState<'raw' | 'json' | 'hex' | 'base64'>('raw')
    const [ttlDialogOpen, setTtlDialogOpen] = useState(false)
    const ttlIntervalRef = useRef<any>(null)
    const wasExpiringRef = useRef(false)

    // Border color matching Angular SCSS
    const borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'
    const hoverBg = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'

    // Highlight the selected key in the tree
    useEffect(() => {
        const dark = isDarkTheme(themeKey)
        const bg = dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
        const color = dark ? 'white' : 'black'
        const style = document.createElement('style')
        style.id = 'p3xr-theme-styles-tree-key'
        style.textContent = `[data-p3xr-tree-key="${key.replace(/"/g, '\\"')}"] .p3xr-database-tree-node-label {
            background-color: ${bg} !important; color: ${color} !important; padding: 2px;
        }`
        document.getElementById('p3xr-theme-styles-tree-key')?.remove()
        document.head.appendChild(style)
        return () => { document.getElementById('p3xr-theme-styles-tree-key')?.remove() }
    }, [key, themeKey])

    // Load key data
    const loadKey = useCallback(async () => {
        clearInterval(ttlIntervalRef.current)
        setLoading(true)
        try {
            const resp = await request({ action: 'key/get', payload: { key } })
            if (resp.ttl === -2) {
                toast(strings?.status?.keyIsNotExisting)
                navigateTo('database.statistics')
                return
            }
            resp.size = 0
            decodeValueBuffer(resp, jsonFormat ? 2 : 0)
            calculateSize(resp)
            if (resp.ttl > -1) wasExpiringRef.current = true
            setResponse(resp)

            if (resp.ttl > -1) {
                ttlIntervalRef.current = setInterval(() => {
                    setResponse((prev: any) => {
                        if (!prev) return prev
                        const newTtl = prev.ttl - 1
                        if (newTtl < -1 || (wasExpiringRef.current && newTtl < 1)) {
                            clearInterval(ttlIntervalRef.current)
                            toast(strings?.status?.keyIsNotExisting)
                            useRedisStateStore.setState({ redisChanged: true })
                            navigateTo('database.statistics')
                            return prev
                        }
                        return { ...prev, ttl: newTtl }
                    })
                }, 1000)
            }
        } catch (e: any) {
            console.error(e)
            if (e?.message === 'Connection is closed.') {
                useRedisStateStore.setState({ connection: undefined })
                useCommonStore.getState().confirm({ message: e.message, disableCancel: true }).catch(() => {})
            } else {
                const fn = strings?.label?.unableToLoadKey
                const msg = typeof fn === 'function' ? fn({ key }) : String(e)
                useCommonStore.getState().confirm({ message: msg, disableCancel: true }).catch(() => {})
            }
            navigateTo('database.statistics')
        } finally {
            setLoading(false)
        }
    }, [key, strings, jsonFormat, toast])

    useEffect(() => { loadKey(); return () => clearInterval(ttlIntervalRef.current) }, [key])

    useEffect(() => { return onCommandEvent('refresh-key', () => loadKey()) }, [loadKey])

    // --- Actions ---
    const addKey = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        useMainCommandStore.getState().addKey({ event: e.nativeEvent, node: { key } })
    }, [key])

    const deleteKey = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation()
        try {
            await confirm({ message: strings?.confirm?.deleteKey })
            await request({ action: 'key/delete', payload: { key } })
            trackPage('/delete')
            navigateTo('database.statistics')
            toast(typeof strings?.status?.deletedKey === 'function' ? strings.status.deletedKey({ key }) : '')
            await useMainCommandStore.getState().refresh({ withoutParent: false, force: true })
        } catch (err) { generalHandleError(err) }
    }, [key, strings, confirm, toast, generalHandleError])

    const renameKey = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation()
        try {
            const newKey = await useCommonStore.getState().prompt({
                title: strings?.confirm?.rename?.title,
                placeholder: strings?.confirm?.rename?.placeholder,
                initialValue: key,
                okLabel: strings?.intention?.rename,
                cancelLabel: strings?.intention?.cancel,
            })
            await request({ action: 'key/rename', payload: { key, keyNew: newKey } })
            trackPage('/rename')
            navigateTo('database.key', { key: newKey })
            toast(strings?.status?.renamedKey)
            await useMainCommandStore.getState().refresh({ withoutParent: false, force: true })
        } catch (err) { generalHandleError(err) }
    }, [key, strings, toast, generalHandleError])

    const setTtl = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        setTtlDialogOpen(true)
    }, [])

    const handleTtlClose = useCallback(async (result?: { model: { ttl: number } }) => {
        setTtlDialogOpen(false)
        if (!result) return
        try {
            const ttlVal = result.model.ttl
            const ttlStr = String(ttlVal).trim()
            if (ttlStr === '' || ttlVal == null) {
                await request({ action: 'key/persist', payload: { key } })
                trackPage('/persist')
                await useMainCommandStore.getState().refresh({ withoutParent: true, force: true })
                await loadKey()
                toast(strings?.status?.persisted)
            } else if (!/^-?\d+$/.test(ttlStr)) {
                toast(strings?.status?.notInteger)
                return
            } else {
                await request({ action: 'key/expire', payload: { key, ttl: parseInt(ttlStr) } })
                trackPage('/expire')
                await useMainCommandStore.getState().refresh({ withoutParent: true, force: true })
                await loadKey()
                toast(strings?.status?.ttlChanged)
            }
        } catch (err) { generalHandleError(err) }
    }, [key, strings, toast, loadKey, generalHandleError])

    const refreshKey = useCallback(async () => {
        trackPage('/refresh')
        try {
            const resp = await request({ action: 'key/get', payload: { key } })
            if (resp.ttl === -2) return
            resp.size = 0
            decodeValueBuffer(resp, jsonFormat ? 2 : 0)
            calculateSize(resp)
            if (resp.ttl > -1) wasExpiringRef.current = true
            setResponse(resp)
        } catch {}
    }, [key, jsonFormat])

    // --- Responsive button ---
    const ActionBtn = ({ icon, label, color, onClick }: {
        icon: React.ReactNode; label: string; color: 'primary' | 'secondary' | 'error'; onClick: (e: React.MouseEvent) => void
    }) => isGtSm ? (
        <Button variant="contained" color={color} onClick={onClick}>
            {icon}<span>{label}</span>
        </Button>
    ) : (
        <Tooltip title={label} placement="top">
            <Button variant="contained" color={color} onClick={onClick}
                sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                {icon}
            </Button>
        </Tooltip>
    )

    // --- Render ---
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100%', p: 4 }}>
                <CircularProgress size={40} />
            </Box>
        )
    }

    if (!response) return null

    const hdOpts = useSettingsStore.getState().getHumanizeDurationOptions()

    return (
        <Box>
            {/* Action buttons — right-aligned, matching .p3xr-database-key-actions */}
            <Box sx={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end',
                alignItems: 'center', gap: 1, px: 1, py: '4px',
            }}>
                {!isReadonly && (
                    <>
                        <ActionBtn icon={<Add fontSize="small" />} label={strings?.intention?.addKey} color="secondary" onClick={addKey} />
                        <ActionBtn icon={<Delete fontSize="small" />} label={strings?.intention?.delete} color="error" onClick={deleteKey} />
                        <ActionBtn icon={<Timer fontSize="small" />} label={strings?.intention?.ttl} color="primary" onClick={setTtl} />
                        <ActionBtn icon={<Fingerprint fontSize="small" />} label={strings?.intention?.rename} color="primary" onClick={renameKey} />
                    </>
                )}
                <ActionBtn icon={<Refresh fontSize="small" />} label={strings?.intention?.reloadKey} color="secondary" onClick={refreshKey} />
            </Box>

            {/* Key info — matching .p3xr-database-key-info */}
            <Box sx={{ borderTop: `1px solid ${borderColor}` }}>
                {/* Key name — clickable */}
                <Box onClick={renameKey} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                    cursor: 'pointer', '&:hover': { bgcolor: hoverBg },
                }}>
                    <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.key}:</strong>
                    <Box component="span" sx={{ textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', userSelect: 'text' }} title={key}>{key}</Box>
                </Box>

                {/* TTL — clickable */}
                <Box onClick={setTtl} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                    cursor: 'pointer', '&:hover': { bgcolor: hoverBg },
                }}>
                    <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.ttl}:</strong>
                    {response.ttl === -1 ? (
                        <span>{strings?.page?.key?.label?.ttlNotExpire}</span>
                    ) : (
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span>{response.ttl}</span>
                            <Box component="span" sx={{ opacity: 0.5, fontSize: '0.85em', fontWeight: 'normal' }}>
                                {humanizeDuration(response.ttl * 1000, { ...hdOpts, delimiter: ' ' })}
                            </Box>
                        </Box>
                    )}
                </Box>

                {/* Type */}
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                }}>
                    <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.type}:</strong>
                    <span>{strings?.redisTypes?.[response.type]}</span>
                </Box>

                {/* Encoding */}
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                }}>
                    <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.encoding}:</strong>
                    <span>{response.encoding}</span>
                </Box>

                {/* Compression */}
                {response.compression && (
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                        px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                    }}>
                        <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.compression}:</strong>
                        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                            <Box component="span" sx={{
                                bgcolor: 'secondary.main', color: 'secondary.contrastText',
                                px: '6px', py: '2px', borderRadius: '4px', fontSize: 11, fontWeight: 'bold', letterSpacing: '0.5px',
                            }}>
                                {response.compression.algorithm.toUpperCase()}
                            </Box>
                            <Box component="span" sx={{
                                px: '6px', py: '2px', borderRadius: '4px', fontSize: 11, fontWeight: 'bold',
                                bgcolor: response.compression.ratio >= 0 ? 'success.main' : 'error.main',
                                color: response.compression.ratio >= 0 ? 'success.contrastText' : 'error.contrastText',
                            }}>
                                {response.compression.ratio >= 0 ? '' : '-'}{Math.abs(response.compression.ratio)}%
                            </Box>
                        </Box>
                    </Box>
                )}

                {/* Length/Size */}
                <Box sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                    px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                }}>
                    <strong style={{ whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.page?.key?.label?.length}:</strong>
                    <span>
                        <span style={{ opacity: 0.5 }}>{response.size >= 1024 ? `(${useSettingsStore.getState().prettyBytes(response.size)})` : ''}&nbsp;</span>
                        {response.size}&nbsp;{strings?.page?.key?.label?.lengthString}
                        {response.length ? <span>, {response.length} {strings?.page?.key?.label?.lengthItem}</span> : null}
                    </span>
                </Box>

                {/* Format toggle */}
                {response.type !== 'timeseries' && response.type !== 'json' && !['bloom', 'cuckoo', 'topk', 'cms', 'tdigest', 'vectorset'].includes(response.type) && (
                    <Box sx={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        px: 2, py: 1.5, borderBottom: `1px solid ${borderColor}`,
                    }}>
                        <strong style={{ flex: 1, whiteSpace: 'nowrap', marginRight: 16 }}>{strings?.label?.format}:</strong>
                        <ToggleButtonGroup size="small" exclusive value={valueFormat}
                            onChange={(_, v) => v && setValueFormat(v)}
                            sx={{
                                borderRadius: '4px', overflow: 'hidden',
                                border: `thin solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                                '& .MuiToggleButton-root': {
                                    height: 32, fontSize: 13, px: 1.5, borderRadius: '0 !important',
                                    textTransform: 'none',
                                    bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                },
                                '& .MuiToggleButton-root.Mui-selected': {
                                    bgcolor: `${muiTheme.p3xr.matSysPrimary}40 !important`,
                                    color: muiTheme.p3xr.matSysPrimary,
                                },
                                '& .MuiToggleButton-root:first-of-type': { borderRadius: '4px 0 0 4px !important' },
                                '& .MuiToggleButton-root:last-of-type': { borderRadius: '0 4px 4px 0 !important' },
                            }}>
                            <ToggleButton value="raw">Raw</ToggleButton>
                            <ToggleButton value="json">JSON</ToggleButton>
                            <ToggleButton value="hex">Hex</ToggleButton>
                            <ToggleButton value="base64">Base64</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                )}
            </Box>

            {/* Type-specific renderer */}
                {response.type === 'string' && (
                    <KeyString response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'hash' && (
                    <KeyHash response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'zset' && (
                    <KeyZset response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'set' && (
                    <KeySet response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'list' && (
                    <KeyList response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'stream' && (
                    <KeyStream response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'json' && (
                <KeyJson response={response} value={response.value} valueBuffer={response.valueBuffer}
                    keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
            )}

                {response.type === 'timeseries' && (
                    <KeyTimeseries response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {['bloom', 'cuckoo', 'topk', 'cms', 'tdigest'].includes(response.type) && (
                    <KeyProbabilistic response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}
                {response.type === 'vectorset' && (
                    <KeyVectorset response={response} value={response.value} valueBuffer={response.valueBuffer}
                        keyName={key} valueFormat={valueFormat} onRefresh={refreshKey} />
                )}

            {response.type !== 'string' && response.type !== 'hash' && response.type !== 'set' && response.type !== 'zset' && response.type !== 'list' && response.type !== 'stream' && response.type !== 'json' && response.type !== 'timeseries' && !['bloom', 'cuckoo', 'topk', 'cms', 'tdigest'].includes(response.type) && response.type !== 'vectorset' && (
                    <Box sx={{ mt: 2, p: 2, opacity: 0.7 }}>
                        {strings?.page?.key?.probabilistic?.noItems || 'This key type is not fully supported in the GUI. Use the console for commands.'}
                    </Box>
                )}

            <TtlDialog open={ttlDialogOpen} ttl={response?.ttl === -1 ? '' : response?.ttl} onClose={handleTtlClose} />
        </Box>
    )
}
