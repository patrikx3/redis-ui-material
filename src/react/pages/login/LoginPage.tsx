import { useState } from 'react'
import {
    Box, TextField, Button, IconButton, Tooltip, Menu, MenuItem,
    InputAdornment, AppBar, Toolbar, useMediaQuery,
} from '@mui/material'
import { Done, Visibility, VisibilityOff, Close, Person, Lock, Login } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../stores/i18n.store'
import { useAuthStore } from '../../stores/auth.store'
import { useThemeStore } from '../../stores/theme.store'
import { switchGui as doSwitchGui } from '../../../core/gui-switch'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [pwVisible, setPwVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [guiAnchor, setGuiAnchor] = useState<null | HTMLElement>(null)

    const strings = useI18nStore(s => s.strings)
    const isWide = useMediaQuery('(min-width: 600px)')
    const { login, loginError } = useAuthStore()
    const muiTheme = useTheme()
    const themeKey = useThemeStore(s => s.themeKey)

    const footerBg = themeKey === 'matrix' ? '#0a2e0d' : muiTheme.p3xr.accordionBg

    const currentGui = (() => {
        try { return localStorage.getItem('p3xr-frontend') } catch { return 'ng' }
    })()

    const handleLogin = async () => {
        if (loading || !username || !password) return
        setLoading(true)
        const success = await login(username, password)
        if (success) {
            location.reload()
        }
        setLoading(false)
    }

    const switchGui = (gui: string) => doSwitchGui(gui)

    const getErrorMessage = (error: string) => {
        return strings?.confirm?.invalidCredentials
    }

    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: 'calc(100vh - 96px)',
        }}>
            <Box sx={{
                width: 400, maxWidth: 'calc(100vw - 32px)',
                borderRadius: '4px', overflow: 'hidden',
                boxShadow: '0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)',
            }}>
                {/* Header — matches P3xrDialog toolbar */}
                <AppBar position="static" sx={{
                    backgroundColor: `${muiTheme.p3xr.strongBg} !important`,
                    backgroundImage: 'none !important',
                    color: 'rgba(255,255,255,0.87) !important',
                    boxShadow: 'none',
                }}>
                    <Toolbar variant="dense" disableGutters sx={{
                        minHeight: '48px !important', height: 48, px: 1,
                    }}>
                        <Box sx={{ flex: 1 }} />
                        <Button color="inherit" size="small" onClick={e => setGuiAnchor(e.currentTarget)}
                            startIcon={<i className="fas fa-desktop" style={{ fontSize: 14 }} />}>
                            GUI
                        </Button>
                        <Menu anchorEl={guiAnchor} open={!!guiAnchor} onClose={() => setGuiAnchor(null)}>
                            <MenuItem selected={currentGui === 'ng'} onClick={() => switchGui('ng')}>
                                <i className="fab fa-angular" style={{ fontSize: 18, width: 24, textAlign: 'center', marginRight: 8, color: '#dd0031' }} />
                                Angular
                            </MenuItem>
                            <MenuItem selected={currentGui === 'react'} onClick={() => switchGui('react')}>
                                <i className="fab fa-react" style={{ fontSize: 18, width: 24, textAlign: 'center', marginRight: 8, color: '#61dafb' }} />
                                React
                            </MenuItem>
                            <MenuItem selected={currentGui === 'vue'} onClick={() => switchGui('vue')}>
                                <i className="fab fa-vuejs" style={{ fontSize: 18, width: 24, textAlign: 'center', marginRight: 8, color: '#42b883' }} />
                                Vue
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                {/* Content — matches P3xrDialog content */}
                <Box sx={{
                    p: 2,
                    bgcolor: muiTheme.palette.background.paper,
                    color: muiTheme.palette.text.primary,
                }}>
                    <TextField
                        autoFocus fullWidth margin="dense"
                        label={strings?.form?.connection?.label?.username}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        autoComplete="username"
                        onKeyDown={e => e.key === 'Enter' && handleLogin()}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person fontSize="small" />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    <TextField
                        fullWidth margin="dense"
                        label={strings?.form?.connection?.label?.password}
                        type={pwVisible ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                        onKeyDown={e => e.key === 'Enter' && handleLogin()}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock fontSize="small" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setPwVisible(!pwVisible)} size="small">
                                            {pwVisible ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                    {loginError && (
                        <Box sx={{ color: '#f44336', fontSize: 13, mt: 1 }}>
                            {getErrorMessage(loginError)}
                        </Box>
                    )}
                </Box>

                {/* Footer — matches P3xrDialog actions */}
                <Box sx={{
                    bgcolor: footerBg,
                    gap: 1, px: 1, py: 1,
                    display: 'flex', justifyContent: 'flex-end',
                }}>
                    {isWide ? (
                        <Button variant="contained" color="primary" onClick={handleLogin}
                                disabled={loading || !username || !password}>
                            <Login fontSize="small" />
                            <span style={{ marginLeft: 3 }}>{strings?.intention?.ok}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.ok} placement="top">
                            <span>
                                <IconButton color="primary" onClick={handleLogin}
                                            disabled={loading || !username || !password}
                                            sx={{ borderRadius: '4px' }}>
                                    <Done fontSize="small" />
                                </IconButton>
                            </span>
                        </Tooltip>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
