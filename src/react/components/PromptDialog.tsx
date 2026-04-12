import { useState, useEffect } from 'react'
import { Button, Tooltip, TextField, useMediaQuery } from '@mui/material'
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
                    <Tooltip title={isWide ? '' : promptOptions.cancelLabel} placement="top">
                        <Button variant="contained" color="warning" onClick={() => resolvePrompt?.(null)}>
                            <Cancel sx={isWide ? { mr: 0.5 } : undefined} />
                            {isWide && <span>{promptOptions.cancelLabel}</span>}
                        </Button>
                    </Tooltip>
                    <Tooltip title={isWide ? '' : promptOptions.okLabel} placement="top">
                        <Button variant="contained" color="primary" disabled={!value.trim()} onClick={handleOk}>
                            <Done sx={isWide ? { mr: 0.5 } : undefined} />
                            {isWide && <span>{promptOptions.okLabel}</span>}
                        </Button>
                    </Tooltip>
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
