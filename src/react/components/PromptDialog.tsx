import { useState, useEffect } from 'react'
import { Button, IconButton, Tooltip, TextField, useMediaQuery } from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useCommonStore } from '../stores/common.store'
import P3xrDialog from './P3xrDialog'

export default function PromptDialog() {
    const { promptOpen, promptOptions, resolvePrompt } = useCommonStore()
    const isWide = useMediaQuery('(min-width: 600px)')
    const [value, setValue] = useState('')

    useEffect(() => {
        if (promptOpen && promptOptions) {
            setValue(promptOptions.initialValue ?? '')
        }
    }, [promptOpen, promptOptions])

    if (!promptOpen || !promptOptions) return null

    const handleOk = () => {
        if (!value.trim()) return
        resolvePrompt?.(value)
    }

    return (
        <P3xrDialog
            open
            onClose={() => resolvePrompt?.(null)}
            title={promptOptions.title}
            width="600px"
            actions={
                <>
                    {isWide ? (
                        <Button variant="contained" color="error" onClick={() => resolvePrompt?.(null)}>
                            <Cancel fontSize="small" /><span>{promptOptions.cancelLabel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={promptOptions.cancelLabel} placement="top">
                            <IconButton color="error" onClick={() => resolvePrompt?.(null)} sx={{ borderRadius: '4px' }}>
                                <Cancel fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                    {isWide ? (
                        <Button variant="contained" color="primary" disabled={!value.trim()} onClick={handleOk}>
                            <Done fontSize="small" /><span>{promptOptions.okLabel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={promptOptions.okLabel} placement="top">
                            <IconButton color="primary" disabled={!value.trim()} onClick={handleOk} sx={{ borderRadius: '4px' }}>
                                <Done fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                </>
            }
        >
            <TextField
                autoFocus fullWidth
                label={promptOptions.placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleOk()}
            />
        </P3xrDialog>
    )
}
