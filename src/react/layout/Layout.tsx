import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import {
    AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem,
    Divider, Tooltip, Box, useMediaQuery,
} from '@mui/material'
import {
    Storage, MonitorHeart, Search, Info, Settings,
    Power, PowerOff, Language, Logout,
} from '@mui/icons-material'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ColorLens } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useThemeStore } from '../stores/theme.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useSettingsStore } from '../stores/settings.store'
import { useCommonStore } from '../stores/common.store'
import { useOverlayStore } from '../stores/overlay.store'
import { useMainCommandStore } from '../stores/main-command.store'
import { request, onSocketEvent } from '../stores/socket.service'
import { useAuthStore } from '../stores/auth.store'
import LoginPage from '../pages/login/LoginPage'
import { trackPage } from '../stores/analytics'
import { ALL_THEME_KEYS } from '../themes'

const TOOLBAR_HEIGHT = 48
const LAYOUT_PADDING = 5

export default function Layout() {
    const navigate = useNavigate()
    const location = useLocation()

    // Stores
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const isLangAuto = useI18nStore(s => s.isAuto)
    const setLanguage = useI18nStore(s => s.setLanguage)
    const { themeKey, isAuto, setTheme } = useThemeStore()
    const connection = useRedisStateStore(s => s.connection)
    const connections = useRedisStateStore(s => s.connections)
    const version = useRedisStateStore(s => s.version)
    const hasRediSearch = useRedisStateStore(s => s.hasRediSearch)
    const settings = useSettingsStore()
    const { generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const { disconnect } = useMainCommandStore()

    const { askAuth } = useCommonStore()

    const { authChecked, authRequired, isAuthenticated, checkAuthStatus } = useAuthStore()
    const showLogin = authChecked && authRequired && !isAuthenticated

    useEffect(() => {
        checkAuthStatus().then(() => {
            const state = useAuthStore.getState()
            if (state.authRequired && !state.isAuthenticated) {
                overlay.hide()
            }
        })
    }, [checkAuthStatus])

    // Connect to a Redis connection (exact port of Angular LayoutComponent.connect)
    const connect = async (conn: any) => {
        const cloned = structuredClone(conn)
        try {
            const dbStorageKey = settings.getStorageKeyCurrentDatabase(cloned.id)
            let db: string | undefined
            try { db = localStorage.getItem(dbStorageKey) ?? undefined } catch {}

            if (cloned.askAuth === true) {
                try {
                    const auth = await askAuth()
                    cloned.username = auth.username || undefined
                    cloned.password = auth.password || undefined
                } catch {
                    return // user cancelled
                }
            }

            overlay.show({ message: strings?.title?.connectingRedis })

            const response = await request({
                action: 'connection/connect',
                payload: { connection: cloned, db },
            })

            // Update state
            const databaseIndexes: number[] = []
            let i = 0
            while (i < response.databases) databaseIndexes.push(i++)

            const commands: string[] = []
            Object.keys(response.commands ?? {}).forEach(k => {
                commands.push(response.commands[k][0])
            })
            commands.sort()

            const modules = Array.isArray(response.modules) ? response.modules : []

            useRedisStateStore.setState({
                page: 1,
                monitor: false,
                dbsize: response.dbsize,
                databaseIndexes,
                connection: cloned,
                commands,
                commandsMeta: response.commandsMeta ?? {},
                modules,
                hasReJSON: modules.some((m: any) => m.name === 'ReJSON'),
                hasRediSearch: modules.some((m: any) => m.name === 'search'),
                hasTimeSeries: modules.some((m: any) => m.name === 'timeseries' || m.name === 'Timeseries'),
                hasBloom: modules.some((m: any) => m.name === 'bf'),
            })

            useCommonStore.getState().loadRedisInfoResponse({ response })

            // Save last connection to localStorage
            try { localStorage.setItem(settings.connectInfoStorageKey, JSON.stringify(cloned)) } catch {}
        } catch (error) {
            try { localStorage.removeItem(settings.connectInfoStorageKey) } catch {}
            useRedisStateStore.setState({ connection: undefined })
            generalHandleError(error)
        } finally {
            overlay.hide()
        }
    }

    // Responsive breakpoints matching Angular layout
    const isWide = useMediaQuery('(min-width: 720px)')
    const isGtXs = useMediaQuery('(min-width: 600px)')
    const isGtSm = useMediaQuery('(min-width: 960px)')

    const isElectron = useMemo(() => /electron/i.test(navigator.userAgent), [])
    const connectionsList = connections?.list ?? []

    // Connection name (computed, matches Angular)
    const connectionName = useMemo(() => {
        if (connection) {
            const fn = strings?.label?.connected
            return typeof fn === 'function' ? fn({ name: connection.name }) : connection.name
        }
        return strings?.intention?.connect
    }, [connection, strings])

    // Track group mode reactively (Settings page toggles this in localStorage)
    const [groupMode, setGroupMode] = useState(() => {
        try { return localStorage.getItem('p3xr-connection-group-mode') === 'true' } catch { return false }
    })
    useEffect(() => {
        const check = () => {
            try { setGroupMode(localStorage.getItem('p3xr-connection-group-mode') === 'true') } catch {}
        }
        window.addEventListener('storage', check)
        // Also poll since same-tab localStorage changes don't fire 'storage'
        const interval = setInterval(check, 1000)
        return () => { window.removeEventListener('storage', check); clearInterval(interval) }
    }, [])

    // Grouped connections
    const groupedConnectionsList = useMemo(() => {
        if (!groupMode) return [{ name: '', connections: connectionsList }]
        const groups = new Map<string, any[]>()
        for (const conn of connectionsList) {
            const name = conn.group?.trim() || ''
            if (!groups.has(name)) groups.set(name, [])
            groups.get(name)!.push(conn)
        }
        return Array.from(groups, ([name, conns]) => ({ name, connections: conns }))
    }, [connectionsList, groupMode])

    const isActivePage = (page: string) => {
        const url = location.pathname
        switch (page) {
            case 'database': return url.startsWith('/database')
            case 'search': return url === '/search'
            case 'monitoring': return url.startsWith('/monitoring')
            case 'info': return url === '/info'
            case 'settings': return url === '/settings'
            default: return false
        }
    }

    const navigateTo = (stateName: string) => {
        const routes: Record<string, string> = {
            'database.statistics': '/database/statistics',
            'database': '/database',
            'monitoring': '/monitoring',
            'search': '/search',
            'info': '/info',
            'settings': '/settings',
        }
        navigate(routes[stateName] || `/${stateName}`)
    }

    const openLink = (target: string) => {
        const urls: Record<string, string> = {
            github: 'https://github.com/patrikx3/redis-ui',
            githubRelease: 'https://github.com/patrikx3/redis-ui/releases',
            githubChangelog: 'https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log',
            donate: 'https://www.paypal.me/patrikx3',
        }
        window.open(urls[target], '_blank')
    }

    // --- Menu anchors ---
    const [connectionAnchor, setConnectionAnchor] = useState<null | HTMLElement>(null)
    const [themeAnchor, setThemeAnchor] = useState<null | HTMLElement>(null)
    const [githubAnchor, setGithubAnchor] = useState<null | HTMLElement>(null)
    const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null)

    // --- Language menu with search ---
    const [languageSearch, setLanguageSearch] = useState('')
    const [highlightedLangIdx, setHighlightedLangIdx] = useState(0)
    const languageInputRef = useRef<HTMLInputElement>(null)

    const availableLanguages = useMemo(() =>
        Object.keys(strings?.language ?? {}), [strings])

    const filteredLanguages = useMemo(() => {
        const search = languageSearch.trim().toLowerCase()
        if (!search) return availableLanguages
        return availableLanguages.filter(key => {
            const label = (strings?.language?.[key] ?? key).toLowerCase()
            return label.includes(search) || key.toLowerCase().includes(search)
        })
    }, [availableLanguages, languageSearch, strings])

    const languageLabel = useCallback((key: string): string =>
        strings?.language?.[key] ?? key, [strings])

    const onLanguageMenuOpen = () => {
        const idx = filteredLanguages.indexOf(currentLang)
        setHighlightedLangIdx(idx >= 0 ? idx : 0)
        // MUI Menu needs time to render before we can focus the input and scroll
        setTimeout(() => {
            languageInputRef.current?.focus()
            // Scroll current language into view
            const menu = document.querySelector('.p3xr-language-menu .MuiList-root')
            if (menu) {
                const items = menu.querySelectorAll('.MuiMenuItem-root')
                const target = items[idx >= 0 ? idx : 0]
                target?.scrollIntoView({ block: 'nearest' })
            }
        }, 150)
    }

    const onLanguageMenuClose = () => {
        setLanguageSearch('')
    }

    const onLanguageKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            setLanguageAnchor(null)
            return
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            if (filteredLanguages.length > 0) {
                setLanguage(filteredLanguages[highlightedLangIdx])
                setLanguageAnchor(null)
            }
            return
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault()
            const len = filteredLanguages.length
            if (!len) return
            setHighlightedLangIdx(prev =>
                e.key === 'ArrowDown' ? (prev + 1) % len : (prev - 1 + len) % len
            )
            return
        }
        e.stopPropagation()
    }

    // Scroll highlighted language into view
    useEffect(() => {
        if (!languageAnchor) return
        setTimeout(() => {
            const menu = document.querySelector('.p3xr-language-menu .MuiList-root')
            if (!menu) return
            const items = menu.querySelectorAll('.MuiMenuItem-root')
            items[highlightedLangIdx]?.scrollIntoView({ block: 'nearest' })
        })
    }, [highlightedLangIdx, languageAnchor])

    // --- Electron bridge ---
    useEffect(() => {
        if (!isElectron) return
        const handler = (event: MessageEvent) => {
            const data = event.data
            if (!data || typeof data.type !== 'string') return
            if (data.type === 'p3x-set-language' && typeof data.translation === 'string') {
                setLanguage(data.translation)
            } else if (data.type === 'p3x-menu' && typeof data.action === 'string') {
                navigateTo(data.action)
            }
        }
        window.addEventListener('message', handler)
        return () => { window.removeEventListener('message', handler) }
    }, [isElectron])

   
    // Auto-connect from localStorage on startup (only when authenticated)
    useEffect(() => {
        if (!isAuthenticated) return
        try {
            const saved = localStorage.getItem(settings.connectInfoStorageKey)
            if (saved) {
                const conn = JSON.parse(saved)
                if (conn?.id) connect(conn)
            }
        } catch {}
    }, [isAuthenticated])

    // Subscribe to redis disconnect → navigate to settings
    useEffect(() => {
        const unsub = onSocketEvent('redis-disconnected', () => {
            navigateTo('settings')
        })
        return unsub
    }, [])

    // Track route changes for analytics (matches Angular setupRouteTracking)
    useEffect(() => {
        const path = location.pathname.toLowerCase().startsWith('/database/key/')
            ? '/database/key'
            : location.pathname
        trackPage(path)
    }, [location.pathname])

    // Show overlay on raw socket disconnect/error (matches Angular behavior, skip during login)
    useEffect(() => {
        const unsubDisconnect = onSocketEvent('disconnect', () => {
            if (showLogin) return
            overlay.show({ message: strings?.status?.socketDisconnected || 'Disconnected' })
        })
        const unsubError = onSocketEvent('socket-error', () => {
            if (showLogin) return
            overlay.show({ message: strings?.status?.socketError || 'Connection error' })
        })
        return () => { unsubDisconnect(); unsubError() }
    }, [strings, showLogin])

    // --- Responsive button helpers ---
    const isMatrixTheme = themeKey === 'matrix'
    const activeSx = { bgcolor: isMatrixTheme ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.1)' }

    const NavBtn = ({ icon, label, tooltip, page, onClick }: {
        icon: React.ReactNode, label: string, tooltip?: string, page?: string, onClick: () => void
    }) => {
        const active = page ? isActivePage(page) : false
        return isWide ? (
            <Button color="inherit" onClick={onClick} sx={active ? activeSx : undefined}>
                {icon}<span>{label}</span>
            </Button>
        ) : (
            <Tooltip title={tooltip || label} placement="bottom">
                <IconButton color="inherit" onClick={onClick} sx={active ? activeSx : undefined}>
                    {icon}
                </IconButton>
            </Tooltip>
        )
    }

    const FooterBtn = ({ icon, label, onClick, bp = 'wide' }: {
        icon: React.ReactNode, label: string, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
        bp?: 'wide' | 'gtXs' | 'gtSm'
    }) => {
        const show = bp === 'gtXs' ? isGtXs : bp === 'gtSm' ? isGtSm : isWide
        return show ? (
            <Button color="inherit" onClick={onClick}>
                {icon}<span>{label}</span>
            </Button>
        ) : (
            <Tooltip title={label} placement="top">
                <IconButton color="inherit" onClick={onClick}>
                    {icon}
                </IconButton>
            </Tooltip>
        )
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* ===== HEADER ===== */}
            <AppBar position="fixed" sx={{ height: TOOLBAR_HEIGHT, zIndex: 2 }}>
                <Toolbar variant="dense" sx={{ minHeight: TOOLBAR_HEIGHT, height: TOOLBAR_HEIGHT, overflow: 'hidden' }}>
                    <NavBtn icon={<i className="fas fa-database" />}
                        label={strings?.title?.name}
                        tooltip={`${strings?.title?.name || ''}${version ? ' ' + version : ''}`}
                        onClick={() => navigateTo(connection ? 'database.statistics' : 'settings')} />

                    {version && isWide && (
                        <Typography variant="caption" sx={{
                            fontSize: 10, opacity: 0.7, pointerEvents: 'none',
                            position: 'absolute', top: 31, left: 20, width: 120, textAlign: 'right',
                            color: 'inherit',
                        }}>
                            {version}
                        </Typography>
                    )}

                    {connection && (
                        <NavBtn icon={<Storage fontSize="small" />}
                            label={strings?.intention?.main}
                            page="database" onClick={() => navigateTo('database.statistics')} />
                    )}

                    {connection && (
                        <NavBtn icon={<MonitorHeart fontSize="small" />}
                            label={strings?.page?.monitor?.title}
                            page="monitoring" onClick={() => navigateTo('monitoring')} />
                    )}

                    {connection && hasRediSearch && (
                        <NavBtn icon={<Search fontSize="small" />}
                            label={strings?.page?.search?.title}
                            page="search" onClick={() => navigateTo('search')} />
                    )}

                    <Box sx={{ flex: 1, minWidth: 8 }} />

                    {!showLogin && (
                        <NavBtn icon={<Info fontSize="small" />}
                            label={strings?.intention?.info}
                            page="info" onClick={() => navigateTo('info')} />
                    )}

                    {!showLogin && (
                        <NavBtn icon={<Settings fontSize="small" />}
                            label={strings?.intention?.settings}
                            page="settings" onClick={() => navigateTo('settings')} />
                    )}

                    {/* Logout button — rightmost in header */}
                    {authRequired && isAuthenticated && (
                        <Tooltip title={strings?.intention?.logout || 'Logout'} placement="bottom">
                            <IconButton color="inherit" onClick={async () => {
                                try {
                                    await useCommonStore.getState().confirm({
                                        message: strings?.intention?.logout || 'Logout',
                                    })
                                    useAuthStore.getState().logout()
                                } catch {}
                            }}>
                                <Logout fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                </Toolbar>
            </AppBar>

            {/* Version overlay — inside AppBar so it inherits toolbar text color */}

            {/* ===== CONTENT ===== */}
            <Box id="p3xr-layout-content" sx={{
                position: 'absolute', left: 0, right: 0,
                top: TOOLBAR_HEIGHT,
                bottom: TOOLBAR_HEIGHT,
                padding: `${LAYOUT_PADDING}px`,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}>
                {showLogin ? <LoginPage /> : <Outlet />}
            </Box>

            {/* ===== FOOTER ===== */}
            <AppBar id="p3xr-layout-footer-container" position="fixed" sx={{ top: 'auto', bottom: 0, height: TOOLBAR_HEIGHT, zIndex: 2 }}>
                <Toolbar variant="dense" sx={{ minHeight: TOOLBAR_HEIGHT, height: TOOLBAR_HEIGHT }}>

                    {/* Connection menu — hidden during login */}
                    {!showLogin && connectionsList.length > 0 && (
                        <>
                            {isWide ? (
                                <Button color="inherit" onClick={e => setConnectionAnchor(e.currentTarget)}>
                                    <Power fontSize="small" /><span>{connectionName}</span>
                                </Button>
                            ) : (
                                <Tooltip title={connectionName} placement="top">
                                    <IconButton color="inherit" onClick={e => setConnectionAnchor(e.currentTarget)}>
                                        <Power fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                            )}
                            <Menu anchorEl={connectionAnchor} open={Boolean(connectionAnchor)}
                                onClose={() => setConnectionAnchor(null)}
                                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                                {groupedConnectionsList.map((group, gi) => [
                                    groupedConnectionsList.length > 1 && (
                                        <Box key={`g-${gi}`} sx={{
                                            px: 2, pt: 0.75, pb: 0.25, fontSize: 11, fontWeight: 600,
                                            textTransform: 'uppercase', letterSpacing: 0.5, opacity: 0.6,
                                            pointerEvents: 'none',
                                        }}>
                                            {group.name || strings?.label?.ungrouped}
                                        </Box>
                                    ),
                                    ...group.connections.map((conn: any) => (
                                        <MenuItem key={conn.id}
                                            selected={connection?.id === conn.id}
                                            onClick={() => { setConnectionAnchor(null); connect(conn) }}>
                                            {conn.name}
                                        </MenuItem>
                                    )),
                                    gi < groupedConnectionsList.length - 1 && groupedConnectionsList.length > 1 && (
                                        <Divider key={`d-${gi}`} />
                                    ),
                                ])}
                            </Menu>
                        </>
                    )}

                    {/* Disconnect — hidden during login */}
                    {!showLogin && connection && (
                        <FooterBtn icon={<i className="fa fa-power-off" />}
                            label={strings?.intention?.disconnect}
                            bp="gtSm" onClick={() => disconnect()} />
                    )}

                    <Box sx={{ flex: 1 }} />

                    {/* Donate */}
                    <FooterBtn icon={<i className="fas fa-donate" />}
                        label={strings?.title?.donate}
                        onClick={() => openLink('donate')} />

                    {/* Language menu with search */}
                    {isGtSm ? (
                        <Button color="inherit" onClick={e => { setLanguageAnchor(e.currentTarget); onLanguageMenuOpen() }}>
                            <Language fontSize="small" /><span>{strings?.intention?.language}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.language} placement="top">
                            <IconButton color="inherit" onClick={e => { setLanguageAnchor(e.currentTarget); onLanguageMenuOpen() }}>
                                <Language fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Menu anchorEl={languageAnchor} open={Boolean(languageAnchor)}
                        onClose={() => { setLanguageAnchor(null); onLanguageMenuClose() }}
                        className="p3xr-language-menu"
                        disableAutoFocus
                        disableEnforceFocus
                        disableRestoreFocus
                        autoFocus={false}
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        slotProps={{
                            paper: { sx: { minWidth: 320, maxWidth: '90vw', maxHeight: 400, overflow: 'hidden' } },
                            list: { autoFocus: false, autoFocusItem: false, sx: { pt: 0, overflow: 'auto', maxHeight: 400 } },
                        }}>
                        <Box
                            sx={(theme) => ({
                                position: 'sticky', top: 0, zIndex: 1,
                                bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.paper : 'background.paper',
                                backgroundImage: theme.palette.mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))' : 'none',
                                px: 1, py: 1,
                                overflow: 'hidden',
                            })}
                            onClick={e => e.stopPropagation()}
                            onKeyDown={onLanguageKeyDown}
                        >
                            <Box
                                component="input"
                                ref={languageInputRef}
                                placeholder={strings?.label?.searchLanguage}
                                value={languageSearch}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setLanguageSearch(e.target.value)
                                    setHighlightedLangIdx(0)
                                }}
                                autoComplete="off"
                                sx={{
                                    display: 'block', width: '100%', mx: 'auto',
                                    px: 1, py: 1, borderStyle: 'solid', borderWidth: 2,
                                    borderColor: 'rgba(255,255,255,0.25)',
                                    borderRadius: '4px', fontSize: 14,
                                    bgcolor: 'transparent',
                                    color: 'text.primary',
                                    outline: 'none', boxSizing: 'border-box',
                                    overflow: 'hidden', textOverflow: 'ellipsis',
                                    '&:focus': {
                                        borderWidth: 3,
                                        borderColor: 'primary.main',
                                    },
                                    '&::placeholder': {
                                        color: 'text.secondary',
                                        opacity: 0.5,
                                    },
                                }}
                            />
                        </Box>
                        <MenuItem selected={isLangAuto}
                            sx={{ borderRadius: 0, '&:hover': { borderRadius: 0 }, '&.Mui-selected': { borderRadius: 0 } }}
                            onClick={() => { setLanguage('auto'); setLanguageAnchor(null) }}>
                            {strings?.label?.languageAuto || 'Auto (system)'}
                        </MenuItem>
                        <Divider />
                        {filteredLanguages.map((key, i) => (
                            <MenuItem key={key}
                                selected={!isLangAuto && currentLang === key}
                                sx={{
                                    borderRadius: 0,
                                    ...(!isLangAuto && currentLang === key && { bgcolor: 'action.selected' }),
                                    ...(i === highlightedLangIdx && { bgcolor: 'action.hover' }),
                                    '&:hover': { borderRadius: 0 },
                                    '&.Mui-selected': { borderRadius: 0 },
                                }}
                                onClick={() => { setLanguage(key); setLanguageAnchor(null) }}>
                                {languageLabel(key)}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* Theme menu — exact port of Angular theme menu */}
                    {isGtXs ? (
                        <Button color="inherit" onClick={e => setThemeAnchor(e.currentTarget)}>
                            <ColorLens fontSize="small" /><span>{strings?.intention?.theme}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.theme} placement="top">
                            <IconButton color="inherit" onClick={e => setThemeAnchor(e.currentTarget)}>
                                <ColorLens fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Menu anchorEl={themeAnchor} open={Boolean(themeAnchor)}
                        onClose={() => setThemeAnchor(null)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                        <MenuItem selected={isAuto}
                            onClick={() => { setTheme('auto'); setThemeAnchor(null) }}>
                            {strings?.label?.themeAuto}
                        </MenuItem>
                        <Divider />
                        {ALL_THEME_KEYS.map(key => (
                            <MenuItem key={key}
                                selected={!isAuto && themeKey === key}
                                onClick={() => { setTheme(key); setThemeAnchor(null) }}>
                                {strings?.label?.theme?.[key] ?? key}
                            </MenuItem>
                        ))}
                    </Menu>

                    {/* GitHub menu */}
                    {isGtSm ? (
                        <Button color="inherit" onClick={e => setGithubAnchor(e.currentTarget)}>
                            <i className="fab fa-github" /><span>{strings?.intention?.github}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.github} placement="top">
                            <IconButton color="inherit" onClick={e => setGithubAnchor(e.currentTarget)}>
                                <i className="fab fa-github" />
                            </IconButton>
                        </Tooltip>
                    )}
                    <Menu anchorEl={githubAnchor} open={Boolean(githubAnchor)}
                        onClose={() => setGithubAnchor(null)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                        transformOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                        <MenuItem onClick={() => { openLink('github'); setGithubAnchor(null) }}>
                            {strings?.intention?.githubRepo}
                        </MenuItem>
                        <MenuItem onClick={() => { openLink('githubRelease'); setGithubAnchor(null) }}>
                            {strings?.intention?.githubRelease}
                        </MenuItem>
                        <MenuItem onClick={() => { openLink('githubChangelog'); setGithubAnchor(null) }}>
                            {strings?.intention?.githubChangelog}
                        </MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
        </Box>
    )
}
