import { Button, Tooltip, useMediaQuery } from '@mui/material'
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
                        <Tooltip title={isWide ? '' : cancelLabel} placement="top">
                            <Button variant="contained" color="warning" onClick={() => resolveConfirm?.(false)}>
                                <Cancel sx={isWide ? { mr: 0.5 } : undefined} />
                                {isWide && <span>{cancelLabel}</span>}
                            </Button>
                        </Tooltip>
                    )}
                    <Button variant="contained" color="primary" onClick={() => resolveConfirm?.(true)}>
                        <Done sx={{ mr: 0.5 }} /><span>{okLabel}</span>
                    </Button>
                </>
            }
        >
            <div dangerouslySetInnerHTML={{ __html: confirmOptions.message }} />
        </P3xrDialog>
    )
}
