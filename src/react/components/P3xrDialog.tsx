import { ReactNode } from 'react'
import {
    Dialog, DialogContent, DialogActions, AppBar, Toolbar,
    IconButton, Box, useMediaQuery,
} from '@mui/material'
import { Close } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useThemeStore } from '../stores/theme.store'

/**
 * Shared dialog helper — matches Angular p3xr-dialog-toolbar / p3xr-dialog-content / p3xr-dialog-actions exactly.
 *
 * Header: strongBg, 48px, padding 0 8px
 * Content: contentBg (background.paper), padding 16px, scrollable
 * Footer: accordionBg, padding 8px, gap 8px, right-aligned (Matrix: #0a2e0d)
 */
interface P3xrDialogProps {
    open: boolean
    onClose: () => void
    title: ReactNode
    children: ReactNode
    actions?: ReactNode
    headerActions?: ReactNode
    fullScreenOnMobile?: boolean
    width?: string
    maxWidth?: string | false
    scroll?: 'paper' | 'body'
    contentPadding?: boolean
    height?: string
}

export default function P3xrDialog({
    open, onClose, title, children, actions, headerActions, contentPadding = true, height,
    fullScreenOnMobile = true,
    width = '75vw',
    maxWidth,
    scroll = 'paper',
}: P3xrDialogProps) {
    const muiTheme = useTheme()
    const themeKey = useThemeStore(s => s.themeKey)
    const isSmall = useMediaQuery('(max-width: 599px)')
    const fullScreen = fullScreenOnMobile && isSmall

    // Matrix theme: dialog footer uses dark green instead of bright green accordionBg
    const footerBg = themeKey === 'matrix' ? '#0a2e0d' : muiTheme.p3xr.accordionBg

    return (
        <Dialog
            open={open}
            onClose={onClose}
            scroll={scroll}
            fullScreen={fullScreen}
            maxWidth={maxWidth ?? false}
            slotProps={{ paper: { sx: {
                ...(!fullScreen && { width, maxWidth: width }),
                ...(height && !fullScreen && { height }),
                maxHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}}}
        >
            {/* Header — strongBg, 48px, matches .p3xr-dialog-toolbar */}
            <AppBar position="static" sx={{
                backgroundColor: `${muiTheme.p3xr.strongBg} !important`,
                backgroundImage: 'none !important',
                color: 'rgba(255,255,255,0.87) !important',
                flexShrink: 0,
                boxShadow: 'none',
            }}>
                <Toolbar variant="dense" disableGutters sx={{
                    minHeight: '48px !important', height: 48, maxHeight: 48,
                    px: 1,
                }}>
                    <Box sx={{
                        flex: '1 1 auto', height: '100%',
                        display: 'flex', alignItems: 'center',
                        lineHeight: '28px', fontSize: 16, fontWeight: 500,
                        pl: 1,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                        {title}
                    </Box>
                    {headerActions}
                    <IconButton color="inherit" onClick={onClose} size="small" sx={{ m: 0 }}>
                        <Close />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Content — contentBg, padding 16px, matches .p3xr-dialog-content */}
            <DialogContent sx={{
                flex: '1 1 auto',
                minHeight: 0,
                overflow: 'auto',
                p: contentPadding ? 2 : 0,
                bgcolor: muiTheme.palette.background.paper,
                backgroundImage: 'none',
                color: muiTheme.palette.text.primary,
            }}>
                {children}
            </DialogContent>

            {/* Footer — accordionBg, matches .p3xr-dialog-actions */}
            {actions && (
                <DialogActions sx={{
                    flexShrink: 0,
                    bgcolor: footerBg,
                    gap: 1,
                    px: 1,
                    py: 1,
                    justifyContent: 'flex-end',
                    '& .MuiButton-root': {
                        m: 0, minWidth: 0, whiteSpace: 'nowrap',
                        pl: '10px', pr: '8px',
                        letterSpacing: '0.01em',
                    },
                }}>
                    {actions}
                </DialogActions>
            )}
        </Dialog>
    )
}
