import { useState, useEffect } from 'react'
import {
    Button, IconButton, Tooltip, TextField, useMediaQuery,
    InputAdornment, Box,
} from '@mui/material'
import { Done, Cancel, Visibility, VisibilityOff, Person, Lock, Shield } from '@mui/icons-material'
import { useCommonStore } from '../stores/common.store'
import { useI18nStore } from '../stores/i18n.store'
import P3xrDialog from '../components/P3xrDialog'

export default function AskAuthorizationDialog() {
    const { askAuthOpen, resolveAskAuth } = useCommonStore()
    const strings = useI18nStore(s => s.strings)
    const isWide = useMediaQuery('(min-width: 600px)')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwVisible, setPwVisible] = useState(false)

    useEffect(() => {
        if (askAuthOpen) {
            setUsername('')
            setPassword('')
            setPwVisible(false)
        }
    }, [askAuthOpen])

    if (!askAuthOpen) return null

    const handleOk = () => {
        resolveAskAuth?.({ username, password })
    }

    const handleCancel = () => {
        resolveAskAuth?.(null)
    }

    return (
        <P3xrDialog
            open
            onClose={handleCancel}
            title={<><Shield sx={{ mr: 1, verticalAlign: 'middle', fontSize: 20 }} />{strings?.label?.askAuth}</>}
            width="400px"
            actions={
                <>
                    {isWide ? (
                        <Button variant="contained" color="error" onClick={handleCancel}>
                            <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.cancel} placement="top">
                            <IconButton color="error" onClick={handleCancel} sx={{ borderRadius: '4px' }}>
                                <Cancel fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                    {isWide ? (
                        <Button variant="contained" color="primary" onClick={handleOk}>
                            <Done fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.ok}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.ok} placement="top">
                            <IconButton color="primary" onClick={handleOk} sx={{ borderRadius: '4px' }}>
                                <Done fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                </>
            }
        >
            <Box sx={{ fontSize: 12, opacity: 0.7, mb: 0.5 }}>{strings?.label?.aclAuthHint}</Box>
            <TextField
                autoFocus fullWidth margin="dense"
                label={strings?.form?.connection?.label?.username}
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="off"
                onKeyDown={e => e.key === 'Enter' && handleOk()}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start"><Person fontSize="small" /></InputAdornment>
                        ),
                    },
                }}
            />
            <TextField
                fullWidth margin="dense"
                label={strings?.form?.connection?.label?.password}
                type={pwVisible ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
                onKeyDown={e => e.key === 'Enter' && handleOk()}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start"><Lock fontSize="small" /></InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setPwVisible(!pwVisible)} size="small">
                                    {pwVisible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </P3xrDialog>
    )
}
