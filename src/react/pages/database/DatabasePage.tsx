import { useState, useEffect, useRef, useCallback } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { navigateTo } from '../../stores/navigation.store'
import DatabaseHeader from './DatabaseHeader'
import DatabaseTreeControls from './DatabaseTreeControls'
import DatabaseTree from './DatabaseTree'

const RESIZE_MIN_WIDTH = 315
const PANEL_WIDTH_KEY = 'p3xr-database-panel-width'

export default function DatabasePage() {
    const connection = useRedisStateStore(s => s.connection)
    const setCurrentPage = useRedisStateStore(s => s.setCurrentPage)
    const muiTheme = useTheme()
    const isXs = useMediaQuery('(max-width: 599px)')

    const hasConnection = !!connection

    // Resize state — load saved width from localStorage
    const [leftWidth, setLeftWidth] = useState(() => {
        const saved = localStorage.getItem(PANEL_WIDTH_KEY)
        if (saved) {
            const width = parseInt(saved, 10)
            if (!isNaN(width) && width >= RESIZE_MIN_WIDTH) {
                return width
            }
        }
        return RESIZE_MIN_WIDTH
    })
    const [isDragging, setIsDragging] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Set page context — used by the global console drawer + AI prompt payload
    useEffect(() => {
        setCurrentPage('database')
    }, [setCurrentPage])

    // Redirect to statistics on bare /database
    useEffect(() => {
        if (!connection) return
        const path = location.pathname.replace(/^\/react/, '')
        if (path === '/database' || path === '/database/') {
            navigateTo('database.statistics')
        }
    }, [connection])

    // --- Drag resize handler ---
    const handleMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
        document.documentElement.style.cursor = 'ew-resize'
        document.body.classList.add('p3xr-not-selectable')
    }, [])

    useEffect(() => {
        if (!isDragging) return
        let lastWidth = RESIZE_MIN_WIDTH
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
            lastWidth = newWidth
            setLeftWidth(newWidth)
        }
        const handleMouseUp = () => {
            setIsDragging(false)
            document.documentElement.style.cursor = 'auto'
            document.body.classList.remove('p3xr-not-selectable')
            if (lastWidth >= RESIZE_MIN_WIDTH) {
                localStorage.setItem(PANEL_WIDTH_KEY, String(lastWidth))
            }
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
                {hasConnection && (
                    isXs ? (
                        /* Mobile: tree controls + tree + viewer — console lives globally in layout drawer */
                        <Box sx={{
                            display: 'flex', flexDirection: 'column',
                            minHeight: '100%', overflowX: 'hidden',
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <DatabaseTreeControls />
                            </Box>
                            <Box sx={{
                                flex: '1 1 auto', minHeight: 100,
                                height: '20vh',
                                overflowY: 'auto', overflowX: 'auto',
                            }}>
                                <DatabaseTree />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Outlet />
                            </Box>
                        </Box>
                    ) : (
                        /* Desktop: split pane tree ← → viewer. Global console drawer handles the bottom. */
                        <Box ref={containerRef} sx={{
                            display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0,
                            userSelect: isDragging ? 'none' : undefined,
                        }}>
                            <Box sx={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
                                <Box sx={{
                                    width: leftWidth, minWidth: RESIZE_MIN_WIDTH,
                                    flexShrink: 0, display: 'flex', flexDirection: 'column', overflow: 'hidden',
                                }}>
                                    <DatabaseTreeControls />
                                    <Box sx={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
                                        <DatabaseTree />
                                    </Box>
                                </Box>

                                <Box
                                    onMouseDown={handleMouseDown}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    sx={{
                                        width: 5, flexShrink: 0, cursor: 'ew-resize',
                                        bgcolor: (muiTheme as any).p3xr?.accordionBg,
                                        filter: resizerFilter,
                                        transition: 'filter 0.15s ease',
                                        zIndex: 8,
                                    }}
                                />

                                <Box sx={{ flex: 1, overflow: 'auto' }}>
                                    <Outlet />
                                </Box>
                            </Box>
                        </Box>
                    )
                )}
            </Box>
        </Box>
    )
}
