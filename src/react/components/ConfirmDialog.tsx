import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useCommonStore } from '../stores/common.store'
import P3xrDialog from './P3xrDialog'

export default function ConfirmDialog() {
    const strings = useI18nStore(s => s.strings)
    const { confirmOpen, confirmOptions, resolveConfirm } = useCommonStore()
    const isWide = useMediaQuery('(min-width: 600px)')

    if (!confirmOpen || !confirmOptions) return null

    const isAlert = confirmOptions.disableCancel === true
    const okLabel = isAlert ? strings?.intention?.ok : strings?.intention?.sure
    const cancelLabel = strings?.intention?.cancel

    return (
        <P3xrDialog
            open
            onClose={() => resolveConfirm?.(false)}
            title={confirmOptions.title}
            width="600px"
            actions={
                <>
                    {!isAlert && (
                        isWide ? (
                            <Button variant="contained" color="error" onClick={() => resolveConfirm?.(false)}>
                                <Cancel fontSize="small" /><span>{cancelLabel}</span>
                            </Button>
                        ) : (
                            <Tooltip title={cancelLabel} placement="top">
                                <IconButton color="error" onClick={() => resolveConfirm?.(false)} sx={{ borderRadius: '4px' }}>
                                    <Cancel fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )
                    )}
                    {isWide ? (
                        <Button variant="contained" color="primary" onClick={() => resolveConfirm?.(true)}>
                            <Done fontSize="small" /><span>{okLabel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={okLabel} placement="top">
                            <IconButton color="primary" onClick={() => resolveConfirm?.(true)} sx={{ borderRadius: '4px' }}>
                                <Done fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                </>
            }
        >
            <div dangerouslySetInnerHTML={{ __html: confirmOptions.message }} />
        </P3xrDialog>
    )
}
