import { Snackbar, IconButton, Alert } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useCommonStore } from '../stores/common.store'

export default function Toast() {
    const { toastOpen, toastMessage, closeToast } = useCommonStore()

    return (
        <Snackbar
            open={toastOpen}
            autoHideDuration={5000}
            onClose={closeToast}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            message={toastMessage}
            action={
                <IconButton size="small" color="inherit" onClick={closeToast}>
                    <Close fontSize="small" />
                </IconButton>
            }
            sx={{
                // Stack above other snackbars if multiple
                '& .MuiSnackbarContent-root': {
                    flexWrap: 'nowrap',
                },
            }}
        />
    )
}
