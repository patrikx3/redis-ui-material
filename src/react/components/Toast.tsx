import { Snackbar, IconButton, Button } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useCommonStore } from '../stores/common.store'

export default function Toast() {
    const { toastOpen, toastMessage, closeToast, toastUndoAction, handleToastUndoClick } = useCommonStore()

    return (
        <Snackbar
            open={toastOpen}
            autoHideDuration={5000}
            onClose={closeToast}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            message={toastMessage}
            action={
                <>
                    {toastUndoAction && (
                        <Button color="primary" size="small" onClick={handleToastUndoClick}>
                            {toastUndoAction}
                        </Button>
                    )}
                    <IconButton size="small" color="inherit" onClick={closeToast}>
                        <Close fontSize="small" />
                    </IconButton>
                </>
            }
            sx={{
                '& .MuiSnackbarContent-root': {
                    flexWrap: 'nowrap',
                },
            }}
        />
    )
}
