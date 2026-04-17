import { Box } from '@mui/material'
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

    return (
        <Box
            id="p3xr-console-drawer"
            className={isOpen ? 'p3xr-drawer-open' : ''}
            sx={{
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: '48px',
                height: isOpen ? 'var(--p3xr-console-drawer-height, 30vh)' : 0,
                overflow: 'hidden',
                bgcolor: 'background.paper',
                color: 'text.primary',
                borderTop: '1px solid rgba(255,255,255,0.16)',
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
