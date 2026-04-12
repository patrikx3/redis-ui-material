/**
 * String key type renderer — exact port of Angular key-string.component.
 *
 * View mode: Upload, Download, JSON View, Copy, Format JSON, JSON Editor, Edit
 * Edit mode: Validate JSON toggle, Cancel, Upload, Save
 * Display: truncated value with format toggle, click to edit
 */
import { useState, useCallback, useRef } from 'react'
import { Box, Button, Tooltip, TextField, Switch, FormControlLabel, useMediaQuery } from '@mui/material'
import {
    Upload, Download, AccountTree, ContentCopy, FormatLineSpacing,
    Description, Edit, Cancel, Save, Numbers,
} from '@mui/icons-material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { trackPage } from '../../../stores/analytics'
import { useSettingsStore } from '../../../stores/settings.store'
import { useCommonStore } from '../../../stores/common.store'
import { useOverlayStore } from '../../../stores/overlay.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, formatValue, truncateDisplay, isTruncated, copyValue, downloadBuffer } from './key-type-base'
import HexMonitor from './HexMonitor'
import { parseRedisVersion } from '../../../../core/redis-version'
import JsonViewDialog from '../../../dialogs/JsonViewDialog'
import JsonEditorDialog from '../../../dialogs/JsonEditorDialog'
import DiffDialog from '../../../dialogs/DiffDialog'

export default function KeyString({ response, value: initValue, valueBuffer: initBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const settings = useSettingsStore()
    const { toast, generalHandleError, confirm } = useCommonStore()
    const overlay = useOverlayStore()
    const isGtSm = useMediaQuery('(min-width: 960px)')
    const isReadonly = connection?.readonly === true

    const [editable, setEditable] = useState(false)
    const [buffer, setBuffer] = useState(false)
    const [validateJson, setValidateJson] = useState(false)
    const [value, setValue] = useState(initValue)
    const [valueBuffer, setValueBuffer] = useState(initBuffer)
    const [originalValue, setOriginalValue] = useState<any>(null)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonEditorOpen, setJsonEditorOpen] = useState(false)
    const [diffOpen, setDiffOpen] = useState(false)
    const [diffData, setDiffData] = useState({ oldValue: '', newValue: '' })
    const diffResolveRef = useRef<((v: boolean) => void) | null>(null)

    // --- Actions matching Angular exactly ---

    const edit = useCallback(() => {
        if (typeof value === 'string' && value.length >= settings.maxValueAsBuffer) {
            setBuffer(true)
            setOriginalValue(structuredClone(valueBuffer))
        } else {
            setBuffer(false)
            setOriginalValue(structuredClone(value))
        }
        setEditable(true)
    }, [value, valueBuffer, settings.maxValueAsBuffer])

    const cancelEdit = useCallback(() => {
        if (buffer) setValueBuffer(originalValue)
        else setValue(originalValue)
        setEditable(false)
        setBuffer(false)
    }, [buffer, originalValue])

    const showDiff = useCallback((oldValue: string, newValue: string): Promise<boolean> => {
        if (!useSettingsStore.getState().showDiffBeforeSave) return Promise.resolve(true)
        if (oldValue === newValue) return Promise.resolve(true)
        setDiffData({ oldValue, newValue })
        setDiffOpen(true)
        return new Promise(resolve => { diffResolveRef.current = resolve })
    }, [])

    const save = useCallback(async () => {
        const v = buffer ? valueBuffer : value
        const oldVal = originalValue
        try {
            if (validateJson) JSON.parse(v)
            if (oldVal != null) {
                const confirmed = await showDiff(oldVal, v)
                if (!confirmed) return
            }
            overlay.show({ message: strings?.intention?.save })
            await request({ action: 'key/set', payload: { type: response?.type, key: keyName, value: v } })
            trackPage('/key-set')
            setEditable(false)
            setBuffer(false)
            onRefresh()
            overlay.hide()

            // Undo support
            if (settings.undoEnabled && oldVal !== undefined && oldVal !== v) {
                const undoClicked = await useCommonStore.getState().toastWithUndo(strings?.status?.saved || 'Saved')
                if (undoClicked) {
                    try {
                        overlay.show({ message: 'Undo...' })
                        await request({ action: 'key/set', payload: { type: response?.type, key: keyName, value: oldVal } })
                        setValue(oldVal)
                        setOriginalValue(oldVal)
                        onRefresh()
                        overlay.hide()
                        useCommonStore.getState().toast(strings?.status?.reverted || 'Reverted')
                    } catch(e) {
                        useCommonStore.getState().generalHandleError(e)
                        overlay.hide()
                    }
                }
            }
        } catch (e) { generalHandleError(e); overlay.hide() }
    }, [buffer, value, valueBuffer, validateJson, response, keyName, strings, onRefresh, generalHandleError, originalValue, settings.undoEnabled])

    const setBufferUpload = useCallback(() => {
        const input = document.createElement('input')
        input.type = 'file'
        input.onchange = async () => {
            const file = input.files?.[0]
            if (!file) return
            const reader = new FileReader()
            reader.onerror = (err) => generalHandleError(err)
            reader.onload = async (e: any) => {
                const arrayBuffer = e.target.result
                try {
                    if (editable) {
                        await confirm({ message: strings?.confirm?.uploadBuffer })
                        if (buffer) setValueBuffer(arrayBuffer)
                        else setValue(arrayBuffer)
                        toast(strings?.confirm?.uploadBufferDone)
                        return
                    }
                    await confirm({ message: strings?.confirm?.uploadBuffer })
                    overlay.show()
                    await request({ action: 'key/set', payload: { type: response?.type, value: arrayBuffer, key: keyName } })
                    trackPage('/key-set')
                    toast(strings?.confirm?.uploadBufferDoneAndSave)
                    onRefresh()
                } catch (e) { generalHandleError(e) }
                finally { overlay.hide() }
            }
            reader.readAsArrayBuffer(file)
        }
        input.click()
    }, [editable, buffer, response, keyName, strings, confirm, toast, generalHandleError, onRefresh])

    const jsonViewer = useCallback(() => setJsonViewOpen(true), [])

    const jsonEditor = useCallback(() => setJsonEditorOpen(true), [])

    const formatJson = useCallback(async () => {
        try {
            const formatted = JSON.stringify(JSON.parse(value), null, settings.jsonFormat || 2)
            setValue(formatted)
            overlay.show({ message: strings?.intention?.save })
            await request({ action: 'key/set', payload: { type: response?.type, key: keyName, value: formatted } })
            trackPage('/key-set')
            onRefresh()
        } catch { toast(strings?.label?.jsonViewNotParsable) }
        finally { overlay.hide() }
    }, [value, settings.jsonFormat, response, keyName, strings, onRefresh])

    const showDigest = useCallback(async () => {
        try {
            const res = await request({ action: 'key/string-digest', payload: { key: keyName } })
            toast(res.digest || 'No digest')
        } catch (e) { generalHandleError(e) }
    }, [keyName, toast, generalHandleError])

    const copyVal = useCallback(() => copyValue(value), [value])

    const downloadBufferFile = useCallback(() => downloadBuffer(valueBuffer, keyName), [valueBuffer, keyName])

    const bufferDisplay = (): string => {
        if (valueBuffer?.byteLength !== undefined) {
            return '(' + (settings.prettyBytes?.(valueBuffer.byteLength) ?? `${valueBuffer.byteLength} bytes`) + ')'
        }
        return ''
    }

    // --- Responsive button (matches Angular @if(isGtSm) pattern) ---
    const Btn = ({ icon, label, color = 'primary' as const, onClick }: {
        icon: React.ReactNode; label: string; color?: 'primary' | 'secondary' | 'error'; onClick: () => void
    }) => isGtSm ? (
        <Button variant="contained" color={color} size="small" onClick={onClick} sx={{ gap: '3px' }}>
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

    return (
        <Box>
            {/* View mode actions — matches Angular template lines 1-88 */}
            {!editable && (
                <Box className="p3xr-key-type-actions">
                    {!isReadonly && (
                        <Btn icon={<Upload fontSize="small" />} label={strings?.intention?.setBuffer} onClick={setBufferUpload} />
                    )}
                    <Btn icon={<Download fontSize="small" />} label={strings?.intention?.downloadBuffer} color="secondary" onClick={downloadBufferFile} />
                    <Btn icon={<AccountTree fontSize="small" />} label={strings?.intention?.jsonViewShow} color="secondary" onClick={jsonViewer} />
                    <Btn icon={<ContentCopy fontSize="small" />} label={strings?.intention?.copy} color="secondary" onClick={copyVal} />
                    {!isReadonly && (
                        <Btn icon={<FormatLineSpacing fontSize="small" />} label={strings?.intention?.formatJson} onClick={formatJson} />
                    )}
                    <Btn icon={<Description fontSize="small" />} label={strings?.intention?.jsonViewEditor} onClick={jsonEditor} />
                    {parseRedisVersion(useRedisStateStore.getState().info?.server?.redis_version).isAtLeast(8, 4) && (
                        <Btn icon={<Numbers fontSize="small" />} label="Digest" color="secondary" onClick={showDigest} />
                    )}
                    {!isReadonly && (
                        <Btn icon={<Edit fontSize="small" />} label={strings?.intention?.edit} onClick={edit} />
                    )}
                </Box>
            )}

            {/* Edit mode actions — matches Angular template lines 90-136 */}
            {editable && (
                <Box className="p3xr-key-type-actions">
                    {!isReadonly && (
                        <FormControlLabel sx={{ mr: 1 }}
                            control={<Switch checked={validateJson} onChange={(_, v) => setValidateJson(v)} color="secondary" />}
                            label={strings?.label?.validateJson} />
                    )}
                    <Btn icon={<Cancel fontSize="small" />} label={strings?.intention?.cancel} color="error" onClick={cancelEdit} />
                    {!isReadonly && (
                        <>
                            <Btn icon={<Upload fontSize="small" />} label={strings?.intention?.setBuffer} onClick={setBufferUpload} />
                            <Btn icon={<Save fontSize="small" />} label={strings?.intention?.save} onClick={save} />
                        </>
                    )}
                </Box>
            )}

            {/* Value display / editor — matches Angular template lines 138-164 */}
            <Box className="p3xr-key-type-content">
                {editable ? (
                    <Box className="p3xr-key-type-editor">
                        {/* Buffer info — shown when value is ArrayBuffer or in buffer mode */}
                        {(String(value) === '[object ArrayBuffer]') && (
                            <Box className="p3xr-key-type-buffer-info">
                                {typeof strings?.label?.isBuffer === 'function'
                                    ? strings.label.isBuffer({ maxValueAsBuffer: settings.prettyBytes(settings.maxValueAsBuffer) })
                                    : ''}
                                {' '}{bufferDisplay()}
                            </Box>
                        )}
                        {buffer && (
                            <Box className="p3xr-key-type-buffer-info">
                                {typeof strings?.label?.isBuffer === 'function'
                                    ? strings.label.isBuffer({ maxValueAsBuffer: settings.prettyBytes(settings.maxValueAsBuffer) })
                                    : ''}
                                {' '}{bufferDisplay()}
                            </Box>
                        )}
                        {buffer ? (
                            <TextField fullWidth multiline minRows={4}
                                value={String(valueBuffer ?? '')}
                                onChange={e => setValueBuffer(e.target.value)}
                                slotProps={{ input: { sx: { fontFamily: "'Roboto Mono', monospace", fontSize: 13 } } }}
                            />
                        ) : (
                            <TextField fullWidth multiline minRows={4}
                                value={typeof value === 'string' ? value : String(value ?? '')}
                                onChange={e => setValue(e.target.value)}
                                slotProps={{ input: { sx: { fontFamily: "'Roboto Mono', monospace", fontSize: 13 } } }}
                            />
                        )}
                    </Box>
                ) : (
                    <Box className="p3xr-key-type-display" onClick={isReadonly ? undefined : edit}
                        sx={{ cursor: isReadonly ? 'default' : 'pointer', maxWidth: '100%', overflow: valueFormat === 'hex' ? 'visible' : 'auto' }}>
                        {settings.maxValueDisplay === -1 ? (
                            <Box sx={{ opacity: 0.5, fontStyle: 'italic' }}>
                                {strings?.label?.hiddenUntilEdit}
                            </Box>
                        ) : (
                            valueFormat === 'hex' ? (
                                <HexMonitor value={truncateDisplay(typeof value === 'string' ? value : '')} truncated={isTruncated(value)} />
                            ) : (
                                <Box component="span" className="p3xr-pre" sx={{
                                    wordBreak: 'break-all', whiteSpace: 'pre-wrap',
                                    fontFamily: "'Roboto Mono', monospace", fontSize: 16, lineHeight: '18px',
                                }}>
                                    {truncateDisplay(formatValue(typeof value === 'string' ? value : '', valueFormat))}
                                    {isTruncated(value) && <Box component="span" sx={{ opacity: 0.5 }}>...</Box>}
                                </Box>
                            )
                        )}
                    </Box>
                )}
            </Box>

            {/* Dialogs */}
            <JsonViewDialog open={jsonViewOpen} value={String(value ?? '')} onClose={() => setJsonViewOpen(false)} />
            <JsonEditorDialog open={jsonEditorOpen} value={String(value ?? '')}
                onClose={async (result) => {
                    setJsonEditorOpen(false)
                    if (result?.obj) {
                        const oldVal = String(value ?? '')
                        setOriginalValue(null)
                        setEditable(false)
                        setBuffer(false)
                        setValue(result.obj)
                        overlay.show({ message: strings?.intention?.save })
                        try {
                            await request({ action: 'key/set', payload: { type: response?.type, key: keyName, value: result.obj } })
                            trackPage('/key-set')
                            onRefresh()
                            overlay.hide()
                            if (settings.undoEnabled && oldVal !== result.obj) {
                                const undoClicked = await useCommonStore.getState().toastWithUndo(strings?.status?.saved || 'Saved')
                                if (undoClicked) {
                                    overlay.show({ message: 'Undo...' })
                                    await request({ action: 'key/set', payload: { type: response?.type, key: keyName, value: oldVal } })
                                    onRefresh()
                                    overlay.hide()
                                    useCommonStore.getState().toast(strings?.status?.reverted || 'Reverted')
                                }
                            }
                        } catch (e) { generalHandleError(e); overlay.hide() }
                    }
                }} />

            <DiffDialog open={diffOpen} keyName={keyName}
                oldValue={diffData.oldValue} newValue={diffData.newValue}
                onConfirm={() => { setDiffOpen(false); diffResolveRef.current?.(true) }}
                onCancel={() => { setDiffOpen(false); diffResolveRef.current?.(false) }} />
        </Box>
    )
}
