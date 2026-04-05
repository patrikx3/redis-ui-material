import { useMemo, useEffect, lazy, Suspense } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useThemeStore } from './stores/theme.store'
import { useI18nStore } from './stores/i18n.store'
import { setNavigate } from './stores/navigation.store'
import { themes } from './themes'
import Layout from './layout/Layout'
import ConfirmDialog from './components/ConfirmDialog'
import PromptDialog from './components/PromptDialog'
import Toast from './components/Toast'
import Overlay from './components/Overlay'
import AskAuthorizationDialog from './dialogs/AskAuthorizationDialog'
import CommandPaletteDialog from './dialogs/CommandPaletteDialog'

const SettingsPage = lazy(() => import('./pages/settings/SettingsPage'))
const InfoPage = lazy(() => import('./pages/info/InfoPage'))
const DatabasePage = lazy(() => import('./pages/database/DatabasePage'))
const StatisticsPage = lazy(() => import('./pages/database/StatisticsPage'))
const DatabaseKeyPage = lazy(() => import('./pages/database/DatabaseKeyPage'))
const SearchPage = lazy(() => import('./pages/search/SearchPage'))
const MonitoringShell = lazy(() => import('./pages/monitoring/MonitoringShell'))
const PulsePage = lazy(() => import('./pages/monitoring/PulsePage'))
const ProfilerPage = lazy(() => import('./pages/monitoring/ProfilerPage'))
const PubSubPage = lazy(() => import('./pages/monitoring/PubSubPage'))
const MemoryAnalysisPage = lazy(() => import('./pages/monitoring/MemoryAnalysisPage'))

function NavigationBridge() {
    const navigate = useNavigate()
    useEffect(() => { setNavigate(navigate) }, [navigate])
    return null
}

function App() {
    const themeKey = useThemeStore(s => s.themeKey)
    const i18nReady = useI18nStore(s => s.ready)

    const theme = useMemo(() =>
        themes[themeKey] || themes.enterprise
    , [themeKey])

    if (!i18nReady) return null

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter basename="/react">
                <NavigationBridge />
                <Suspense fallback={null}>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Navigate to="/settings" replace />} />
                            <Route path="/settings" element={<SettingsPage />} />
                            <Route path="/info" element={<InfoPage />} />
                            <Route path="/database" element={<DatabasePage />}>
                                <Route path="statistics" element={<StatisticsPage />} />
                                <Route path="key/:key" element={<DatabaseKeyPage />} />
                            </Route>
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/monitoring" element={<MonitoringShell />}>
                                <Route index element={<PulsePage />} />
                                <Route path="profiler" element={<ProfilerPage />} />
                                <Route path="pubsub" element={<PubSubPage />} />
                                <Route path="analysis" element={<MemoryAnalysisPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <ConfirmDialog />
            <PromptDialog />
            <AskAuthorizationDialog />
            <CommandPaletteDialog />
            <Toast />
            <Overlay />
        </ThemeProvider>
    )
}

export default App
