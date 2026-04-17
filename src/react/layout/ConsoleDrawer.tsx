import { Box, useTheme } from '@mui/material'
import { useRedisStateStore } from '../stores/redis-state.store'
import ConsoleComponent from '../pages/console/ConsoleComponent'

/**
 * Global bottom console drawer — always renders the full ConsoleComponent.
 * The welcome banner inside the console adapts to connectionState (connected
 * vs limited-AI). This keeps the toolbar, input, Clear / Commands always
 * usable — disconnected users can still type `ai: what is ZADD?` or eventually
 * `connect <name>` without losing the chrome.
 */
export default function ConsoleDrawer() {
    const isOpen = useRedisStateStore(s => s.consoleDrawerOpen)
    const setConsoleDrawerOpen = useRedisStateStore(s => s.setConsoleDrawerOpen)
    const muiTheme = useTheme()

    return (
        <Box
            id="p3xr-console-drawer"
            className={isOpen ? 'p3xr-drawer-open' : ''}
            sx={{
                position: 'fixed',
                left: '5px',
                right: 'calc(5px + var(--p3xr-scroll-gutter, 0px))',
                bottom: '48px',
                height: isOpen ? 'var(--p3xr-console-drawer-height, 30vh)' : 0,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                color: 'text.primary',
                border: isOpen ? '1px solid' : '0 solid',
                borderColor: (muiTheme as any).p3xr?.accordionBg,
                borderRadius: '4px 4px 0 0',
                zIndex: 8,
                transition: 'height 150ms ease-out',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box id="p3xr-console-drawer-body" sx={{
                flex: '1 1 auto', minHeight: 0, overflow: 'hidden', position: 'relative',
            }}>
                <ConsoleComponent embedded showCloseButton
                                  onCloseRequest={() => setConsoleDrawerOpen(false)} />
            </Box>
        </Box>
    )
}
