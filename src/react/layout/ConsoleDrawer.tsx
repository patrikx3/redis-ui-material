import { useEffect, useRef, useState, useCallback } from 'react'
import { Box, useTheme } from '@mui/material'
import { useRedisStateStore } from '../stores/redis-state.store'
import ConsoleComponent from '../pages/console/ConsoleComponent'

const HEIGHT_KEY = 'p3xr-console-drawer-height'
const MIN_VH = 15
const MAX_VH = 66
const FOOTER_HEIGHT = 48

/**
 * Global bottom console drawer — always renders the full ConsoleComponent.
 * The welcome banner inside the console adapts to connectionState (connected
 * vs limited-AI). This keeps the toolbar, input, Clear / Commands always
 * usable — disconnected users can still type `ai: what is ZADD?` or eventually
 * `connect <name>` without losing the chrome.
 *
 * Top 5px grab strip resizes the drawer between MIN_VH and MAX_VH, persisted
 * to localStorage. A ResizeObserver dispatches window.resize on every frame
 * the drawer's height changes so pages that read --p3xr-console-drawer-height-active
 * re-layout live during drag and during open/close transition.
 */
export default function ConsoleDrawer() {
    const isOpen = useRedisStateStore(s => s.consoleDrawerOpen)
    const setConsoleDrawerOpen = useRedisStateStore(s => s.setConsoleDrawerOpen)
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'

    const [resizeClicked, setResizeClicked] = useState(false)
    const [sizerHover, setSizerHover] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)
    const sizerRef = useRef<HTMLDivElement>(null)
    const dragStyleElRef = useRef<HTMLStyleElement | null>(null)

    const applyDragCursor = useCallback((cursor: 'ns-resize' | 'not-allowed') => {
        let el = dragStyleElRef.current
        if (!el) {
            el = document.createElement('style')
            el.setAttribute('data-p3xr-console-drawer-drag', '')
            document.head.appendChild(el)
            dragStyleElRef.current = el
        }
        el.textContent = `*, *::before, *::after { cursor: ${cursor} !important; }`
    }, [])

    const clearDragCursor = useCallback(() => {
        dragStyleElRef.current?.remove()
        dragStyleElRef.current = null
    }, [])

    // Saved height is applied at bootstrap (src/core/console-drawer-height.ts)
    // so it's in place before this component mounts.

    // Observe the drawer element — fires on every size change frame
    // (open/close height transition + live drag). Listeners on window.resize
    // (profiler/pubsub page height calc) pick it up.
    useEffect(() => {
        if (!drawerRef.current || typeof ResizeObserver === 'undefined') return
        const obs = new ResizeObserver(() => {
            window.dispatchEvent(new Event('resize'))
        })
        obs.observe(drawerRef.current)
        return () => obs.disconnect()
    }, [])

    // Drag handlers — document-level so the drag continues outside the sizer
    useEffect(() => {
        if (!resizeClicked) return

        const handleMouseMove = (e: MouseEvent) => {
            const minPx = (MIN_VH / 100) * window.innerHeight
            const maxPx = (MAX_VH / 100) * window.innerHeight
            let newHeight = window.innerHeight - e.clientY - FOOTER_HEIGHT
            const outOfBounds = newHeight < minPx || newHeight > maxPx
            if (newHeight < minPx) newHeight = minPx
            if (newHeight > maxPx) newHeight = maxPx
            applyDragCursor(outOfBounds ? 'not-allowed' : 'ns-resize')
            document.documentElement.style.setProperty('--p3xr-console-drawer-height', `${Math.round(newHeight)}px`)
        }

        const handleMouseUp = () => {
            setResizeClicked(false)
            clearDragCursor()
            document.body.classList.remove('p3xr-not-selectable')
            document.documentElement.classList.remove('p3xr-console-drawer-resizing')
            const current = document.documentElement.style.getPropertyValue('--p3xr-console-drawer-height')
            if (current && current.endsWith('px')) {
                localStorage.setItem(HEIGHT_KEY, current)
            }
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }
    }, [resizeClicked, applyDragCursor, clearDragCursor])

    const handleSizerMouseDown = useCallback((e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setResizeClicked(true)
        applyDragCursor('ns-resize')
        document.body.classList.add('p3xr-not-selectable')
        document.documentElement.classList.add('p3xr-console-drawer-resizing')
    }, [applyDragCursor])

    const sizerFilter = resizeClicked
        ? (isDark ? 'brightness(2)' : 'brightness(0.5)')
        : sizerHover
            ? (isDark ? 'brightness(1.5)' : 'brightness(0.75)')
            : 'none'

    return (
        <Box
            ref={drawerRef}
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
                transition: resizeClicked ? 'none' : 'height 150ms ease-out',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                ref={sizerRef}
                id="p3xr-console-drawer-sizer"
                role="separator"
                aria-orientation="horizontal"
                aria-label="Resize console drawer"
                onMouseDown={handleSizerMouseDown}
                onMouseEnter={() => setSizerHover(true)}
                onMouseLeave={() => setSizerHover(false)}
                sx={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '5px',
                    cursor: 'ns-resize',
                    zIndex: 3,
                    bgcolor: (sizerHover || resizeClicked) ? (muiTheme as any).p3xr?.accordionBg : 'transparent',
                    filter: sizerFilter,
                    transition: 'background-color 0.15s ease, filter 0.15s ease',
                }}
            />
            <Box id="p3xr-console-drawer-body" sx={{
                flex: '1 1 auto', minHeight: 0, overflow: 'hidden', position: 'relative',
            }}>
                <ConsoleComponent embedded showCloseButton
                                  onCloseRequest={() => setConsoleDrawerOpen(false)} />
            </Box>
        </Box>
    )
}
