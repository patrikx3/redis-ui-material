import { useState, useEffect, useRef } from 'react'
import {
    TextField, Select, MenuItem, FormControl, InputLabel,
    Button, Tooltip, Switch, FormControlLabel, Box,
    useMediaQuery,
} from '@mui/material'
import {
    Add, Edit, Upload, Description, FormatLineSpacing,
    TableChart, ContentCopy, AutoGraph,
} from '@mui/icons-material'
import { Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useSettingsStore } from '../stores/settings.store'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { request } from '../stores/socket.service'
import P3xrDialog from '../components/P3xrDialog'
import JsonViewDialog from './JsonViewDialog'
import JsonEditorDialog from './JsonEditorDialog'

export interface KeyNewOrSetData {
    type: 'add' | 'edit' | 'append'
    node?: any
    model?: any
}

interface KeyModel {
    type: string
    key: string
    value: any
    score: string
    streamTimestamp: string
    tsTimestamp: string
    tsRetention: number
    tsDuplicatePolicy: string
    tsLabels: string
    tsBulkMode: boolean
    tsSpread: number
    tsFormula: string
    tsFormulaPoints: number
    tsFormulaAmplitude: number
    tsFormulaOffset: number
    tsEditAll: boolean
    hashKey: string
    index: string
}

interface Props {
    open: boolean
    data: KeyNewOrSetData | null
    onClose: (result?: any) => void
}

export default function KeyNewOrSetDialog({ open, data, onClose }: Props) {
    const strings = useI18nStore(s => s.strings)
    const hasTimeSeries = useRedisStateStore(s => s.hasTimeSeries)
    const hasReJSON = useRedisStateStore(s => s.hasReJSON)
    const connection = useRedisStateStore(s => s.connection)
    const settings = useSettingsStore()
    const { toast, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const isWide = useMediaQuery('(min-width: 720px)')
    const fileInputRef = useRef<HTMLInputElement>(null)

    const isReadonly = connection?.readonly === true
    const [validateJson, setValidateJson] = useState(false)
    const [jsonViewOpen, setJsonViewOpen] = useState(false)
    const [jsonEditorOpen, setJsonEditorOpen] = useState(false)
    const [model, setModel] = useState<KeyModel>({
        type: 'string', key: '', value: '', score: '', streamTimestamp: '*',
        tsTimestamp: '*', tsRetention: 0, tsDuplicatePolicy: 'LAST', tsLabels: '',
        tsBulkMode: false, tsSpread: 60000, tsFormula: '', tsFormulaPoints: 25,
        tsFormulaAmplitude: 100, tsFormulaOffset: 0, tsEditAll: false,
        hashKey: '', index: '',
    })

    const types = (() => {
        const base = ['string', 'list', 'hash', 'set', 'zset', 'stream']
        if (hasTimeSeries) base.push('timeseries')
        if (hasReJSON) base.push('json')
        return base
    })()

    useEffect(() => {
        if (!open || !data) return
        const divider = settings.redisTreeDivider || ':'
        const m: KeyModel = {
            type: 'string', key: data.node?.key ? data.node.key + divider : '',
            value: '', score: '', streamTimestamp: '*', tsTimestamp: '*',
            tsRetention: 0, tsDuplicatePolicy: 'LAST', tsLabels: '',
            tsBulkMode: false, tsSpread: 60000, tsFormula: '', tsFormulaPoints: 25,
            tsFormulaAmplitude: 100, tsFormulaOffset: 0, tsEditAll: false,
            hashKey: '', index: '',
        }
        if (data.model) Object.assign(m, data.model)
        setModel(m)
        setValidateJson(false)
    }, [open, data])

    const set = (field: keyof KeyModel, value: any) => setModel(m => ({ ...m, [field]: value }))

    const getTitle = () => {
        if (data?.type === 'edit') return strings?.form?.key?.label?.formName?.edit
        if (data?.type === 'append') return strings?.form?.key?.label?.formName?.append
        return strings?.form?.key?.label?.formName?.add
    }

    const copy = async () => {
        let value = model.value
        if (model.type === 'timeseries') value = `TS.ADD ${model.key} ${model.tsTimestamp || '*'} ${model.value}`
        try { await navigator.clipboard.writeText(String(value)) } catch {}
        toast(strings?.status?.dataCopied)
    }

    const formatJson = () => {
        try { set('value', JSON.stringify(JSON.parse(model.value), null, settings.jsonFormat || 2)) }
        catch { toast(strings?.label?.jsonViewNotParsable) }
    }

    const onFileSelected = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return
        try {
            await useCommonStore.getState().confirm({ message: strings?.confirm?.uploadBuffer })
            const buf = await file.arrayBuffer()
            set('value', buf)
            toast(strings?.confirm?.uploadBufferDone)
        } catch {}
        event.target.value = ''
    }

    const generateFormula = () => {
        const points = Math.min(Math.max(parseInt(String(model.tsFormulaPoints)) || 25, 1), 10000)
        const amplitude = parseFloat(String(model.tsFormulaAmplitude)) || 100
        const offset = parseFloat(String(model.tsFormulaOffset)) || 0
        const formula = model.tsFormula
        const lines: string[] = []
        for (let i = 0; i < points; i++) {
            const x = i / points
            let v: number
            switch (formula) {
                case 'sin': v = Math.sin(x * Math.PI * 2) * amplitude + offset; break
                case 'cos': v = Math.cos(x * Math.PI * 2) * amplitude + offset; break
                case 'linear': v = x * amplitude + offset; break
                case 'random': v = Math.random() * amplitude + offset; break
                case 'sawtooth': v = (x % 0.25) * 4 * amplitude + offset; break
                default: v = offset
            }
            lines.push(`* ${parseFloat(v.toFixed(4))}`)
        }
        set('value', lines.join('\n'))
    }

    const submit = async () => {
        if (!model.key?.trim()) { toast(strings?.form?.key?.error?.key); return }
        if (validateJson) {
            try { JSON.parse(model.value) } catch { toast(strings?.label?.jsonViewNotParsable); return }
        }
        try {
            overlay.show({ message: strings?.label?.saving })
            const response = await request({
                action: 'key-new-or-set',
                payload: {
                    type: data?.type,
                    originalValue: data?.model?.value,
                    originalHashKey: data?.model?.hashKey,
                    model: structuredClone(model),
                },
            })
            toast(strings?.status?.set)
            onClose(response)
        } catch (e) { generalHandleError(e) }
        finally { overlay.hide() }
    }

    if (!open || !data) return null

    const isAdd = data.type === 'add'

    return (
        <P3xrDialog open onClose={() => onClose()} title={getTitle()}
            actions={
                <>
                    <Button variant="contained" color="error" size="small" onClick={() => onClose()}>
                        <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                    </Button>
                    {!isReadonly && (
                        <Button variant="contained" color="primary" size="small" onClick={submit}>
                            {data.type === 'edit' ? <Edit fontSize="small" /> : <Add fontSize="small" />}
                            <span style={{ marginLeft: 3 }}>{data.type === 'edit' ? strings?.intention?.save : strings?.intention?.add}</span>
                        </Button>
                    )}
                </>
            }>
            {/* Key */}
            <TextField fullWidth margin="dense" required label={strings?.form?.key?.field?.key}
                value={model.key} onChange={e => set('key', e.target.value)} disabled={!isAdd} />

            {/* Type */}
            <FormControl fullWidth margin="dense">
                <InputLabel>{strings?.form?.key?.field?.type}</InputLabel>
                <Select value={model.type} label={strings?.form?.key?.field?.type}
                    onChange={e => set('type', e.target.value)} disabled={!isAdd}>
                    {types.map(t => <MenuItem key={t} value={t}>{strings?.redisTypes?.[t] ?? t}</MenuItem>)}
                </Select>
            </FormControl>

            {/* Type-specific fields */}
            {model.type === 'list' && (
                <>
                    <TextField fullWidth margin="dense" type="number" label={strings?.form?.key?.field?.index}
                        value={model.index} onChange={e => set('index', e.target.value)} />
                    <Box sx={{ opacity: 0.5, fontSize: 12, mb: 1 }}>{strings?.label?.redisListIndexInfo}</Box>
                </>
            )}
            {model.type === 'hash' && (
                <TextField fullWidth margin="dense" required label={strings?.form?.key?.field?.hashKey}
                    value={model.hashKey} onChange={e => set('hashKey', e.target.value)} />
            )}
            {model.type === 'zset' && (
                <TextField fullWidth margin="dense" type="number" required label={strings?.form?.key?.field?.score}
                    value={model.score} onChange={e => set('score', e.target.value)} />
            )}
            {model.type === 'stream' && (
                <>
                    <TextField fullWidth margin="dense" required label={strings?.form?.key?.field?.streamTimestamp}
                        value={model.streamTimestamp} onChange={e => set('streamTimestamp', e.target.value)} />
                    <Box sx={{ opacity: 0.5, fontSize: 12, mb: 1 }}>{strings?.label?.streamTimestampId}</Box>
                </>
            )}
            {model.type === 'timeseries' && isAdd && (
                <>
                    <TextField fullWidth margin="dense" type="number"
                        label={`${strings?.page?.key?.timeseries?.retention} (ms)`}
                        value={model.tsRetention} onChange={e => set('tsRetention', e.target.value)}
                        helperText={strings?.page?.key?.timeseries?.retentionHint} />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>{strings?.page?.key?.timeseries?.duplicatePolicy}</InputLabel>
                        <Select value={model.tsDuplicatePolicy} label={strings?.page?.key?.timeseries?.duplicatePolicy}
                            onChange={e => set('tsDuplicatePolicy', e.target.value)}>
                            {['LAST', 'FIRST', 'MIN', 'MAX', 'SUM', 'BLOCK'].map(p =>
                                <MenuItem key={p} value={p}>{p}</MenuItem>)}
                        </Select>
                    </FormControl>
                </>
            )}
            {model.type === 'timeseries' && (
                <>
                    <TextField fullWidth margin="dense" label={strings?.page?.key?.timeseries?.labels}
                        value={model.tsLabels} onChange={e => set('tsLabels', e.target.value)}
                        helperText={strings?.page?.key?.timeseries?.labelsHint} />
                    {!model.tsBulkMode && (
                        <TextField fullWidth margin="dense" label={strings?.page?.key?.timeseries?.timestamp}
                            value={model.tsTimestamp} onChange={e => set('tsTimestamp', e.target.value)}
                            disabled={model.originalTimestamp !== undefined}
                            helperText={strings?.page?.key?.timeseries?.timestampHint} />
                    )}
                    {model.originalTimestamp === undefined && (
                        <FormControlLabel sx={{ display: 'block', my: 1 }}
                            control={<Switch checked={model.tsBulkMode} onChange={(_, v) => set('tsBulkMode', v)} />}
                            label={strings?.page?.key?.timeseries?.bulkMode} />
                    )}
                </>
            )}

            {/* Action buttons */}
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={onFileSelected} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, my: 1 }}>
                {model.type !== 'stream' && model.type !== 'timeseries' && (
                    <Button variant="contained" color="primary" size="small" onClick={() => fileInputRef.current?.click()}>
                        <Upload fontSize="small" />
                        {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.setBuffer}</span>}
                    </Button>
                )}
                {model.type !== 'timeseries' && (
                    <>
                        <Button variant="contained" color="primary" size="small" onClick={() => setJsonEditorOpen(true)}>
                            <Description fontSize="small" />
                            {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.jsonViewEditor}</span>}
                        </Button>
                        <Button variant="contained" color="primary" size="small" onClick={formatJson}>
                            <FormatLineSpacing fontSize="small" />
                            {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.formatJson}</span>}
                        </Button>
                        <Button variant="contained" color="secondary" size="small" onClick={() => setJsonViewOpen(true)}>
                            <TableChart fontSize="small" />
                            {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.jsonViewShow}</span>}
                        </Button>
                    </>
                )}
                <Button variant="contained" color="secondary" size="small" onClick={copy}>
                    <ContentCopy fontSize="small" />
                    {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.copy}</span>}
                </Button>
            </Box>

            {model.type !== 'timeseries' && (
                <FormControlLabel sx={{ display: 'block', my: 1 }}
                    control={<Switch checked={validateJson} onChange={(_, v) => setValidateJson(v)} />}
                    label={strings?.label?.validateJson} />
            )}

            {/* Timeseries formula generator */}
            {model.type === 'timeseries' && (model.tsEditAll || model.tsBulkMode) && (
                <>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center', mb: 1 }}>
                        <FormControl sx={{ minWidth: 140, flex: 1 }} size="small">
                            <InputLabel>{strings?.page?.key?.timeseries?.autoSpread}</InputLabel>
                            <Select value={model.tsSpread} label={strings?.page?.key?.timeseries?.autoSpread}
                                onChange={e => set('tsSpread', e.target.value)}>
                                <MenuItem value={1000}>1 {strings?.time?.second}</MenuItem>
                                <MenuItem value={30000}>30 {strings?.time?.seconds}</MenuItem>
                                <MenuItem value={60000}>1 {strings?.time?.minute}</MenuItem>
                                <MenuItem value={1800000}>30 {strings?.time?.minutes}</MenuItem>
                                <MenuItem value={3600000}>1 {strings?.time?.hour}</MenuItem>
                                <MenuItem value={86400000}>24 {strings?.time?.hours}</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ minWidth: 120, flex: 1 }} size="small">
                            <InputLabel>{strings?.page?.key?.timeseries?.formula}</InputLabel>
                            <Select value={model.tsFormula} label={strings?.page?.key?.timeseries?.formula}
                                onChange={e => set('tsFormula', e.target.value)}>
                                <MenuItem value="">{strings?.page?.key?.timeseries?.none}</MenuItem>
                                <MenuItem value="sin">sin</MenuItem>
                                <MenuItem value="cos">cos</MenuItem>
                                <MenuItem value="linear">{strings?.page?.key?.timeseries?.formulaLinear}</MenuItem>
                                <MenuItem value="random">{strings?.page?.key?.timeseries?.formulaRandom}</MenuItem>
                                <MenuItem value="sawtooth">{strings?.page?.key?.timeseries?.formulaSawtooth}</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    {model.tsFormula && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center', mb: 1 }}>
                            <TextField sx={{ minWidth: 80, flex: 1 }} size="small" type="number"
                                label={strings?.page?.key?.timeseries?.formulaPoints}
                                value={model.tsFormulaPoints} onChange={e => set('tsFormulaPoints', e.target.value)}
                                slotProps={{ htmlInput: { min: 1, max: 10000 } }} />
                            <TextField sx={{ minWidth: 80, flex: 1 }} size="small" type="number"
                                label={strings?.page?.key?.timeseries?.formulaAmplitude}
                                value={model.tsFormulaAmplitude} onChange={e => set('tsFormulaAmplitude', e.target.value)} />
                            <TextField sx={{ minWidth: 80, flex: 1 }} size="small" type="number"
                                label={strings?.page?.key?.timeseries?.formulaOffset}
                                value={model.tsFormulaOffset} onChange={e => set('tsFormulaOffset', e.target.value)} />
                            <Button variant="contained" color="secondary" size="small" onClick={generateFormula}>
                                <AutoGraph fontSize="small" />
                                {isWide && <span style={{ marginLeft: 3 }}>{strings?.page?.key?.timeseries?.generate}</span>}
                            </Button>
                        </Box>
                    )}
                </>
            )}

            {/* Value field */}
            {model.type === 'timeseries' && (model.tsEditAll || model.tsBulkMode) ? (
                <TextField fullWidth margin="dense" required multiline rows={10}
                    label={strings?.page?.key?.timeseries?.dataPoints}
                    value={model.value} onChange={e => set('value', e.target.value)}
                    helperText={strings?.page?.key?.timeseries?.editAllHint}
                    slotProps={{ input: { sx: { fontFamily: "'Roboto Mono', monospace", fontSize: 13 } } }} />
            ) : model.type === 'timeseries' && !model.tsBulkMode ? (
                <TextField fullWidth margin="dense" type="number" required
                    label={strings?.page?.key?.timeseries?.value}
                    value={model.value} onChange={e => set('value', e.target.value)} />
            ) : (
                <>
                    {model.type === 'stream' && (
                        <Box sx={{ opacity: 0.5, fontSize: 12, mb: 1 }}>{strings?.label?.streamValue}</Box>
                    )}
                    <TextField fullWidth margin="dense" required multiline rows={5}
                        label={strings?.form?.key?.field?.value}
                        value={model.value ?? ''} onChange={e => set('value', e.target.value)} />
                </>
            )}
            <JsonViewDialog open={jsonViewOpen} value={String(model.value ?? '')} onClose={() => setJsonViewOpen(false)} />
            <JsonEditorDialog open={jsonEditorOpen} value={String(model.value ?? '')}
                onClose={(result) => { setJsonEditorOpen(false); if (result?.obj) set('value', result.obj) }} />
        </P3xrDialog>
    )
}
