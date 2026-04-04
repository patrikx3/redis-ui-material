import { useState, useMemo, useEffect } from 'react'
import {
    TextField, IconButton, Button, Switch, FormControlLabel,
    Autocomplete, Box, Tooltip, useMediaQuery,
} from '@mui/material'
import {
    Done, Cancel, Add, Delete, Visibility, VisibilityOff, Save,
} from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useSettingsStore } from '../stores/settings.store'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { request } from '../stores/socket.service'
import P3xrDialog from '../components/P3xrDialog'

interface ConnectionDialogProps {
    open: boolean
    type: 'new' | 'edit'
    model?: any
    onClose: () => void
}

function initModel(type: string, source?: any): any {
    let model: any
    if (source) {
        model = structuredClone(source)
        model.password = source.id
        model.tlsCrt = source.id
        model.tlsKey = source.id
        model.tlsCa = source.id
        model.sshPassword = source.id
        model.sshPrivateKey = source.id
    } else {
        model = {
            name: '', host: '', port: 6379, askAuth: false,
            password: '', username: '', id: undefined, group: '',
            readonly: false, tlsWithoutCert: false, tlsRejectUnauthorized: false,
            tlsCrt: '', tlsKey: '', tlsCa: '',
        }
    }
    if (!model.ssh) {
        model.ssh = false; model.sshHost = model.sshHost || ''
        model.sshPort = model.sshPort || 22; model.sshUsername = model.sshUsername || ''
        model.sshPassword = model.sshPassword || source?.id || ''
        model.sshPrivateKey = model.sshPrivateKey || source?.id || ''
    }
    if (!model.cluster) model.cluster = false
    if (!model.sentinel) model.sentinel = false
    if (!model.nodes) model.nodes = []
    for (const node of model.nodes) { node.password = node.id }
    return model
}

export default function ConnectionDialog({ open, type, model: sourceModel, onClose }: ConnectionDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const cfg = useRedisStateStore(s => s.cfg)
    const connectionsList = useRedisStateStore(s => s.connections)?.list ?? []
    const { generateId } = useSettingsStore()
    const { toast, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const isWide = useMediaQuery('(min-width: 600px)')
    const readonlyConnections = cfg?.readonlyConnections === true

    const [model, setModel] = useState(() => initModel(type, sourceModel))
    const [pwVisible, setPwVisible] = useState(false)
    const [sshPwVisible, setSshPwVisible] = useState(false)
    const [nodePwVisible, setNodePwVisible] = useState<Record<number, boolean>>({})

    useEffect(() => {
        if (open) {
            setModel(initModel(type, sourceModel))
            setPwVisible(false); setSshPwVisible(false); setNodePwVisible({})
        }
    }, [open, type, sourceModel])

    const existingGroups = useMemo(() => {
        const groups = new Set<string>()
        for (const conn of connectionsList) {
            if (conn.group?.trim()) groups.add(conn.group.trim())
        }
        return [...groups].sort()
    }, [connectionsList])

    const set = (field: string, value: any) => setModel((m: any) => ({ ...m, [field]: value }))
    const setNode = (idx: number, field: string, value: any) => setModel((m: any) => {
        const nodes = [...m.nodes]
        nodes[idx] = { ...nodes[idx], [field]: value }
        return { ...m, nodes }
    })

    const addNode = (index?: number) => {
        const newNode = { host: '', port: undefined, password: '', username: '', id: generateId() }
        setModel((m: any) => {
            const nodes = [...m.nodes]
            if (index === undefined) nodes.push(newNode); else nodes.splice(index + 1, 0, newNode)
            return { ...m, nodes }
        })
    }

    const removeNode = async (idx: number) => {
        try {
            await useCommonStore.getState().confirm({ message: strings?.confirm?.deleteConnectionText })
            setModel((m: any) => ({ ...m, nodes: m.nodes.filter((_: any, i: number) => i !== idx) }))
            toast(strings?.status?.nodeRemoved)
        } catch {}
    }

    const testConnection = async () => {
        try {
            overlay.show({ message: strings?.title?.connectingRedis })
            await request({ action: 'redis-test-connection', payload: { model: structuredClone(model) } })
            toast(strings?.status?.redisConnected)
        } catch (e) { generalHandleError(e) }
        finally { overlay.hide() }
    }

    const submit = async () => {
        if (!model.name?.trim()) { toast(strings?.form?.error?.invalid); return }
        const saveModel = structuredClone(model)
        if (!saveModel.host) saveModel.host = 'localhost'
        if (!saveModel.port) saveModel.port = 6379
        if (type === 'new') saveModel.id = generateId()
        for (const node of saveModel.nodes) {
            if (!node.host) node.host = 'localhost'
            if (!node.id) node.id = generateId()
        }
        if (typeof saveModel.group === 'string') saveModel.group = saveModel.group.trim() || undefined
        try {
            await request({ action: 'connection-save', payload: { model: saveModel } })
            toast(type === 'new' ? strings?.status?.added : strings?.status?.saved)
            onClose()
        } catch (e) { generalHandleError(e) }
    }

    const title = readonlyConnections ? strings?.label?.connectiondView
        : type === 'new' ? strings?.label?.connectiondAdd : strings?.label?.connectiondEdit

    const PasswordField = ({ label, value, onChange, visible, onToggle, disabled }: any) => (
        <TextField fullWidth margin="dense" label={label}
            type={visible ? 'text' : 'password'} value={value || ''} onChange={(e: any) => onChange(e.target.value)}
            disabled={disabled} autoComplete="off"
            slotProps={{ input: { endAdornment: !disabled && (
                <IconButton onClick={onToggle} size="small">
                    {visible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                </IconButton>
            )}}}
        />
    )

    if (!open) return null

    return (
        <P3xrDialog open onClose={onClose} title={title}
            actions={
                <>
                    {isWide ? (
                        <Button variant="contained" color="error" size="small" onClick={onClose}>
                            <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.cancel} placement="top">
                            <Button variant="contained" color="error" size="small" onClick={onClose}
                                sx={{ minWidth: 40, width: 40, height: 36, p: 0 }}>
                                <Cancel fontSize="small" />
                            </Button>
                        </Tooltip>
                    )}
                    <Button variant="contained" color="success" size="small" onClick={testConnection}>
                        <i className="fas fa-plug" /><span style={{ marginLeft: 3 }}>{strings?.intention?.testConnection}</span>
                    </Button>
                    {!readonlyConnections && (
                        <Button variant="contained" color="primary" size="small" onClick={submit}>
                            {type === 'new' ? <Add fontSize="small" /> : <Save fontSize="small" />}
                            <span style={{ marginLeft: 3 }}>{type === 'new' ? strings?.intention?.add : strings?.intention?.save}</span>
                        </Button>
                    )}
                </>
            }>
            {model.id && type !== 'new' && (
                <>
                    <TextField fullWidth margin="dense" label={strings?.label?.id?.id} value={model.id} disabled />
                    <Box sx={{ fontSize: 12, opacity: 0.7, mb: 1 }}>{strings?.label?.id?.info}</Box>
                </>
            )}
            <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.name}
                required value={model.name || ''} onChange={e => set('name', e.target.value)} disabled={readonlyConnections} />
            <Autocomplete freeSolo options={existingGroups} value={model.group || ''}
                onInputChange={(_, v) => set('group', v)} disabled={readonlyConnections}
                renderInput={params => <TextField {...params} fullWidth margin="dense" label={strings?.form?.connection?.label?.group} />}
            />

            {/* SSH */}
            <FormControlLabel control={<Switch checked={!!model.ssh} onChange={(_, v) => set('ssh', v)} disabled={readonlyConnections} />}
                label={model.ssh ? strings?.label?.ssh?.on : strings?.label?.ssh?.off} />
            {model.ssh && (
                <Box component="fieldset" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2, mt: 1 }}>
                    <legend style={{ fontWeight: 700 }}>SSH</legend>
                    <TextField fullWidth margin="dense" label={strings?.label?.ssh?.sshHost} required value={model.sshHost || ''} onChange={e => set('sshHost', e.target.value)} disabled={readonlyConnections} />
                    <TextField fullWidth margin="dense" label={strings?.label?.ssh?.sshPort} required type="number" value={model.sshPort || ''} onChange={e => set('sshPort', Number(e.target.value))} disabled={readonlyConnections} slotProps={{ htmlInput: { min: 1, max: 65535 } }} />
                    <TextField fullWidth margin="dense" label={strings?.label?.ssh?.sshUsername} required value={model.sshUsername || ''} onChange={e => set('sshUsername', e.target.value)} disabled={readonlyConnections} />
                    <PasswordField label={strings?.label?.ssh?.sshPassword} value={model.sshPassword} onChange={(v: string) => set('sshPassword', v)} visible={sshPwVisible} onToggle={() => setSshPwVisible(!sshPwVisible)} disabled={readonlyConnections} />
                    <Box sx={{ fontSize: 12, opacity: 0.7 }}>{strings?.label?.passwordSecure}</Box>
                    <TextField fullWidth margin="dense" label={strings?.label?.ssh?.sshPrivateKey} multiline minRows={1} value={model.sshPrivateKey || ''} onChange={e => set('sshPrivateKey', e.target.value)} disabled={readonlyConnections} autoComplete="off" />
                    <Box sx={{ fontSize: 12, opacity: 0.7 }}>{strings?.label?.secureFeature}</Box>
                </Box>
            )}

            {/* Node 1 */}
            <Box component="fieldset" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2, mt: 2 }}>
                <legend style={{ fontWeight: 700 }}>Node 1</legend>
                <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.host} value={model.host || ''} onChange={e => set('host', e.target.value)} disabled={readonlyConnections} />
                <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.port} type="number" value={model.port || ''} onChange={e => set('port', Number(e.target.value))} disabled={readonlyConnections} slotProps={{ htmlInput: { min: 1, max: 65535 } }} />
                <FormControlLabel control={<Switch checked={!!model.askAuth} onChange={(_, v) => set('askAuth', v)} disabled={readonlyConnections} />} label={strings?.label?.askAuth} />
                <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.username} value={model.username || ''} onChange={e => set('username', e.target.value)} disabled={readonlyConnections} autoComplete="off" />
                <PasswordField label={strings?.form?.connection?.label?.password} value={model.password} onChange={(v: string) => set('password', v)} visible={pwVisible} onToggle={() => setPwVisible(!pwVisible)} disabled={readonlyConnections} />
                <Box sx={{ fontSize: 12, opacity: 0.7 }}>{strings?.label?.passwordSecure}</Box>
            </Box>

            {/* Readonly */}
            <FormControlLabel sx={{ mt: 1 }} control={<Switch checked={!!model.readonly} onChange={(_, v) => set('readonly', v)} disabled={readonlyConnections} />}
                label={model.readonly ? strings?.label?.readonly?.on : strings?.label?.readonly?.off} />

            {/* Cluster / Sentinel */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2, flexWrap: 'wrap' }}>
                <FormControlLabel control={<Switch checked={!!model.cluster} onChange={(_, v) => { set('cluster', v); if (v) set('sentinel', false) }} disabled={readonlyConnections} />}
                    label={model.cluster ? strings?.label?.cluster?.on : strings?.label?.cluster?.off} />
                <FormControlLabel control={<Switch checked={!!model.sentinel} onChange={(_, v) => { set('sentinel', v); if (v) set('cluster', false) }} disabled={readonlyConnections} />}
                    label={model.sentinel ? strings?.label?.sentinel?.on : strings?.label?.sentinel?.off} />
                <Box sx={{ flex: 1 }} />
                {(model.cluster || model.sentinel) && !readonlyConnections && (
                    <Button variant="contained" color="primary" size="small" onClick={() => addNode()}>
                        <Add fontSize="small" /><span>{strings?.label?.addNode}</span>
                    </Button>
                )}
            </Box>

            {model.sentinel && (
                <TextField fullWidth margin="dense" label={strings?.label?.sentinel?.name} required value={model.sentinelName || ''} onChange={e => set('sentinelName', e.target.value)} disabled={readonlyConnections} />
            )}

            {/* Dynamic nodes */}
            {(model.cluster || model.sentinel) && model.nodes.map((node: any, idx: number) => (
                <Box key={node.id || idx} component="fieldset" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2, mt: 2 }}>
                    <legend style={{ fontWeight: 700 }}>Node {idx + 2}</legend>
                    {!readonlyConnections && (
                        <Box sx={{ float: 'right', display: 'flex', gap: 0.5 }}>
                            <Tooltip title={strings?.confirm?.deleteConnectionText}><Button variant="contained" color="error" size="small" sx={{ minWidth: 40, p: 0.5 }} onClick={() => removeNode(idx)}><Delete fontSize="small" /></Button></Tooltip>
                            <Tooltip title={strings?.label?.addNode}><Button variant="contained" color="primary" size="small" sx={{ minWidth: 40, p: 0.5 }} onClick={() => addNode(idx)}><Add fontSize="small" /></Button></Tooltip>
                        </Box>
                    )}
                    {node.id && (<><TextField fullWidth margin="dense" label={strings?.label?.id?.nodeId} value={node.id} disabled /><Box sx={{ fontSize: 12, opacity: 0.7, mb: 1 }}>{strings?.label?.id?.info}</Box></>)}
                    <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.host} value={node.host || ''} onChange={e => setNode(idx, 'host', e.target.value)} disabled={readonlyConnections} />
                    <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.port} type="number" required value={node.port || ''} onChange={e => setNode(idx, 'port', Number(e.target.value))} disabled={readonlyConnections} slotProps={{ htmlInput: { min: 1, max: 65535 } }} />
                    <TextField fullWidth margin="dense" label={strings?.form?.connection?.label?.username} value={node.username || ''} onChange={e => setNode(idx, 'username', e.target.value)} disabled={readonlyConnections} autoComplete="off" />
                    <PasswordField label={strings?.form?.connection?.label?.password} value={node.password} onChange={(v: string) => setNode(idx, 'password', v)} visible={!!nodePwVisible[idx]} onToggle={() => setNodePwVisible(p => ({ ...p, [idx]: !p[idx] }))} disabled={readonlyConnections} />
                    <Box sx={{ fontSize: 12, opacity: 0.7 }}>{strings?.label?.passwordSecure}</Box>
                </Box>
            ))}

            {/* TLS */}
            <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                <FormControlLabel control={<Switch checked={!!model.tlsWithoutCert} onChange={(_, v) => set('tlsWithoutCert', v)} disabled={readonlyConnections} />} label={strings?.label?.tlsWithoutCert} />
                <FormControlLabel control={<Switch checked={!!model.tlsRejectUnauthorized} onChange={(_, v) => set('tlsRejectUnauthorized', v)} disabled={readonlyConnections} />} label={strings?.label?.tlsRejectUnauthorized} />
            </Box>
            {!model.tlsWithoutCert && (
                <Box component="fieldset" sx={{ border: 1, borderColor: 'divider', borderRadius: 1, p: 2, mt: 1 }}>
                    <legend style={{ fontWeight: 700 }}>TLS</legend>
                    {[{ label: 'TLS (redis.crt)', field: 'tlsCrt' }, { label: 'TLS (redis.key)', field: 'tlsKey' }, { label: 'TLS (ca.crt)', field: 'tlsCa' }].map(({ label, field }) => (
                        <Box key={field}><TextField fullWidth margin="dense" label={label} multiline minRows={1} value={(model as any)[field] || ''} onChange={e => set(field, e.target.value)} disabled={readonlyConnections} autoComplete="off" /><Box sx={{ fontSize: 12, opacity: 0.7, mb: 1 }}>{strings?.label?.tlsSecure}</Box></Box>
                    ))}
                </Box>
            )}
        </P3xrDialog>
    )
}
