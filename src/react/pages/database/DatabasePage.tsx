import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, Button, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { navigateTo } from '../../stores/navigation.store'
import DatabaseHeader from './DatabaseHeader'
import DatabaseTreeControls from './DatabaseTreeControls'
import DatabaseTree from './DatabaseTree'
import ConsoleComponent from '../console/ConsoleComponent'

const RESIZE_MIN_WIDTH = 315
const CONSOLE_COLLAPSED_HEIGHT = 80

export default function DatabasePage() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const connections = useRedisStateStore(s => s.connections)
    const navigate = useNavigate()
    const muiTheme = useTheme()
    const isXs = useMediaQuery('(max-width: 599px)')

    const hasConnection = !!connection
    const hasConnections = (connections?.list?.length ?? 0) > 0

    // Resize state
    const [leftWidth, setLeftWidth] = useState(RESIZE_MIN_WIDTH)
    const [isDragging, setIsDragging] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Console expand/collapse state
    const [consoleExpanded, setConsoleExpanded] = useState(false)
    const consolePanelRef = useRef<HTMLDivElement>(null)

    // Redirect to statistics on bare /database
    useEffect(() => {
        if (!connection) return
        const path = location.pathname.replace(/^\/react/, '')
        if (path === '/database' || path === '/database/') {
            navigateTo('database.statistics')
        }
    }, [connection])

    // --- Console click-outside-to-collapse (matches Angular onDocumentMouseDown) ---
    useEffect(() => {
        if (isXs || !hasConnection) return
        const handler = (event: MouseEvent) => {
            const panel = consolePanelRef.current
            if (!panel) return

            if (panel.contains(event.target as Node)) {
                const actions = panel.querySelector('.p3xr-console-toolbar-actions')
                if (actions && actions.contains(event.target as Node)) return
                if (!consoleExpanded) {
                    setConsoleExpanded(true)
                    setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
                }
                return
            }
            if (consoleExpanded) {
                setConsoleExpanded(false)
                setTimeout(() => window.dispatchEvent(new Event('resize')), 50)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [isXs, hasConnection, consoleExpanded])

    // --- Drag resize handler ---
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
        document.documentElement.style.cursor = 'ew-resize'
        document.body.classList.add('p3xr-not-selectable')
    }, [])

    useEffect(() => {
        if (!isDragging) return
        const handleMouseMove = (e: MouseEvent) => {
            const container = containerRef.current
            if (!container) return
            const rect = container.getBoundingClientRect()
            const newWidth = e.clientX - rect.left
            if (newWidth < RESIZE_MIN_WIDTH || newWidth > rect.width - RESIZE_MIN_WIDTH) {
                document.documentElement.style.cursor = 'not-allowed'
                return
            }
            document.documentElement.style.cursor = 'ew-resize'
            setLeftWidth(newWidth)
        }
        const handleMouseUp = () => {
            setIsDragging(false)
            document.documentElement.style.cursor = 'auto'
            document.body.classList.remove('p3xr-not-selectable')
        }
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging])

    const isDark = muiTheme.palette.mode === 'dark'
    const resizerFilter = isDragging
        ? (isDark ? 'brightness(1.6)' : 'brightness(0.7)')
        : isHovering
            ? (isDark ? 'brightness(1.3)' : 'brightness(0.85)')
            : 'none'

    // Console height: collapsed = just header+input, expanded = 33% min 220px
    const consoleHeight = consoleExpanded ? '33%' : `${CONSOLE_COLLAPSED_HEIGHT}px`
    const consoleMinHeight = consoleExpanded ? 220 : CONSOLE_COLLAPSED_HEIGHT

    return (
        <Box sx={{ borderRadius: '4px 4px 0 0', overflow: 'hidden', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
            <DatabaseHeader />

            <Box sx={{
                flex: 1, minHeight: 0,
                bgcolor: 'background.paper',
                color: 'text.primary',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {/* No connections message */}
                {!hasConnections && !hasConnection && (
                    <Box sx={{ p: 2 }}>
                        <Button variant="text" onClick={() => navigateTo('settings')}
                            sx={{ textDecoration: 'underline', textTransform: 'none', color: 'inherit' }}>
                            {strings?.intention?.noConnections}
                        </Button>
                    </Box>
                )}

                {/* Has connections but not connected */}
                {hasConnections && !hasConnection && (
                    <Box sx={{ p: 2, fontSize: 20, fontWeight: 400 }}>
                        {strings?.title?.main}
                    </Box>
                )}

                {/* Connected */}
                {hasConnection && (
                    isXs ? (
                        /* Mobile: matches Angular exactly
                           - flex column, min-height 100%
                           - tree controls: flex 1 (natural height)
                           - tree: flex 1, viewport 20vh
                           - outlet: flex 1 (remaining)
                           - console: 33vh separate
                        */
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            minHeight: '100%', overflowX: 'hidden',
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <DatabaseTreeControls />
                            </Box>
                            <Box sx={{
                                flex: '1 1 auto', minHeight: 0,
                                height: '20vh',
                                minHeight: 100,
                                overflowY: 'auto', overflowX: 'auto',
                            }}>
                                <DatabaseTree />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Outlet />
                            </Box>
                            <Box sx={{
                                height: '33vh', minHeight: 220,
                                marginTop: 'auto',
                                borderTop: '1px solid rgba(255,255,255,0.16)',
                                overflowX: 'hidden',
                            }}>
                                <ConsoleComponent embedded />
                            </Box>
                        </Box>
                    ) : (
                        /* Desktop: split pane + bottom console */
                        <Box ref={containerRef} sx={{
                            display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0,
                            userSelect: isDragging ? 'none' : undefined,
                        }}>
                            {/* Main content area (tree + resizer + outlet) */}
                            <Box sx={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
                                {/* Left: tree controls + tree */}
                                <Box sx={{
                                    width: leftWidth, minWidth: RESIZE_MIN_WIDTH,
                                    flexShrink: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden',
                                }}>
                                    <DatabaseTreeControls />
                                    <Box sx={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
                                        <DatabaseTree resizeSignal={consoleExpanded} />
                                    </Box>
                                </Box>

                                {/* Resizer */}
                                <Box
                                    onMouseDown={handleMouseDown}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    sx={{
                                        width: 5, flexShrink: 0, cursor: 'ew-resize',
                                        bgcolor: muiTheme.p3xr.accordionBg,
                                        filter: resizerFilter,
                                        transition: 'filter 0.15s ease',
                                        zIndex: 8,
                                    }}
                                />

                                {/* Right: key viewer / statistics */}
                                <Box sx={{ flex: 1, overflow: 'auto' }}>
                                    <Outlet />
                                </Box>
                            </Box>

                            {/* Bottom console panel */}
                            <Box ref={consolePanelRef} id="p3xr-database-bottom-console-panel" sx={{
                                height: consoleHeight,
                                minHeight: consoleMinHeight,
                                maxHeight: consoleExpanded ? '50%' : CONSOLE_COLLAPSED_HEIGHT,
                                flexShrink: 0,
                                borderTop: '1px solid rgba(255,255,255,0.16)',
                                overflow: 'hidden',
                                boxSizing: 'border-box',
                                zIndex: 9,
                            }}>
                                <ConsoleComponent embedded collapsed={!consoleExpanded} />
                            </Box>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    )
}
