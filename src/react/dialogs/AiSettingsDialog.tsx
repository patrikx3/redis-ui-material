import { useState, useEffect } from 'react'
import { TextField, Button, Tooltip, Box, useMediaQuery } from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { request } from '../stores/socket.service'
import P3xrDialog from '../components/P3xrDialog'

interface AiSettingsDialogProps {
    open: boolean
    onClose: () => void
}

export default function AiSettingsDialog({ open, onClose }: AiSettingsDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const cfg = useRedisStateStore(s => s.cfg)
    const { toast, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const isWide = useMediaQuery('(min-width: 600px)')

    const [apiKey, setApiKey] = useState('')

    useEffect(() => {
        if (open) setApiKey('')
    }, [open])

    const submit = async () => {
        try {
            const trimmedKey = apiKey.trim()
            if (trimmedKey) {
                overlay.show({ message: strings?.title?.connectingRedis })
                let validation: any
                try {
                    validation = await request({ action: 'ai/validate-groq-api-key', payload: { apiKey: trimmedKey } })
                } catch (e) { generalHandleError(e); return }
                finally { overlay.hide() }
                if (!validation.valid) {
                    toast(strings?.label?.aiGroqApiKeyInvalid)
                    return
                }
            }
            await request({
                action: 'ai/set-groq-api-key',
                payload: { apiKey: trimmedKey, aiEnabled: cfg?.aiEnabled !== false, aiUseOwnKey: cfg?.aiUseOwnKey === true },
            })
            useRedisStateStore.setState({ cfg: { ...cfg, groqApiKey: trimmedKey } })
            toast(strings?.status?.saved)
            onClose()
        } catch (e) { generalHandleError(e) }
    }

    if (!open) return null

    return (
        <P3xrDialog open onClose={onClose} title={strings?.label?.aiSettings}
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
                    <Button variant="contained" color="primary" size="small" onClick={submit}>
                        <Done fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.save}</span>
                    </Button>
                </>
            }>
            <Box sx={{ mb: 2, fontSize: 14, opacity: 0.8 }}>
                {strings?.label?.aiGroqApiKeyInfo}{' '}
                <a href="https://console.groq.com" target="_blank" rel="noreferrer"
                    style={{ color: 'inherit', textDecoration: 'underline' }}>
                    console.groq.com
                </a>
            </Box>
            <TextField fullWidth margin="dense" label={strings?.label?.aiGroqApiKey}
                placeholder="gsk_..." type="password" value={apiKey}
                onChange={e => setApiKey(e.target.value)} autoComplete="off" />
        </P3xrDialog>
    )
}
