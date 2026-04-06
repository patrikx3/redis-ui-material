import { Box, Typography } from '@mui/material'
import { useOverlayStore } from '../stores/overlay.store'
import { useAuthStore } from '../stores/auth.store'

/**
 * Full-screen loading overlay — exact port of Angular OverlayService.
 *
 * Angular: #p3xr-overlay { font-size: 125%; ... }
 *          i { font-size: 400% } overridden by inline style="font-size: 500%"
 *          global: .fa { transform: scale(1.5); margin: 0 5px; }
 */
export default function Overlay() {
    const { visible, message } = useOverlayStore()
    const { authRequired, isAuthenticated } = useAuthStore()

    // Don't show overlay when login page is displayed
    if (!visible || (authRequired && !isAuthenticated)) return null

    return (
        <Box id="p3xr-overlay" sx={{
            position: 'fixed',
            left: 0, top: 0,
            width: '100vw', height: '100vh',
            textAlign: 'center',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', alignContent: 'center', justifyContent: 'center',
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            zIndex: 99999,
            color: 'rgba(128, 128, 128, 0.5)',
            fontSize: '125%',
        }}>
            <Box id="p3xr-overlay-info">
                <i className="fas fa-cog fa-spin" style={{
                    fontSize: '500%',
                    transform: 'scale(1.5)',
                    margin: '0 5px',
                    display: 'inline-block',
                }} />
                {message && (
                    <>
                        <br /><br />
                        <span>{message}</span>
                    </>
                )}
            </Box>
        </Box>
    )
}
