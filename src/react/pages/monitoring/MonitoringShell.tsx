/**
 * Monitoring shell — exact port of Angular monitoring-shell.component.
 * Tab container with 4 tabs: Pulse, Profiler, PubSub, Analysis.
 * Starts/stops profiler & pubsub services on mount/unmount.
 */
import { useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Tabs, Tab, Box } from '@mui/material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useCommonStore } from '../../stores/common.store'
import {
    initMonitoringData, startProfiler, stopProfiler,
    startPubSub, stopPubSub, destroyMonitoringData,
} from '../../stores/monitoring-data.store'

const routes = ['/monitoring', '/monitoring/profiler', '/monitoring/pubsub', '/monitoring/analysis']

function syncTab(pathname: string): number {
    if (pathname.startsWith('/monitoring/profiler')) return 1
    if (pathname.startsWith('/monitoring/pubsub')) return 2
    if (pathname.startsWith('/monitoring/analysis')) return 3
    return 0
}

export default function MonitoringShell() {
    const strings = useI18nStore(s => s.strings)
    const currentLang = useI18nStore(s => s.currentLang)
    const connection = useRedisStateStore(s => s.connection)
    const { generalHandleError } = useCommonStore()
    const location = useLocation()
    const navigate = useNavigate()

    const [selectedTab, setSelectedTab] = useState(() => syncTab(location.pathname))

    useEffect(() => {
        setSelectedTab(syncTab(location.pathname))
    }, [location.pathname])

    // Init services when connection is available
    useEffect(() => {
        if (!connection) return

        initMonitoringData(() => useI18nStore.getState().currentLang)

        const initServices = async () => {
            try { await startProfiler() } catch (e) { generalHandleError(e) }
            try { await startPubSub() } catch (e) { generalHandleError(e) }
        }
        initServices()

        return () => {
            stopProfiler()
            stopPubSub()
            destroyMonitoringData()
        }
    }, [connection]) // eslint-disable-line react-hooks/exhaustive-deps

    const onTabChange = (_: any, index: number) => {
        if (index >= 0 && index < routes.length) {
            setSelectedTab(index)
            navigate(routes[index])
        }
    }

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column',
            flex: 1, minHeight: 0,
            // Fill the absolute-positioned layout content area
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        }}>
            <Tabs value={selectedTab} onChange={onTabChange}
                variant="fullWidth"
                sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', flexShrink: 0 }}>
                <Tab label={strings?.intention?.pulse} />
                <Tab label={strings?.intention?.profiler} />
                <Tab label={strings?.intention?.pubsubMonitor} />
                <Tab label={strings?.intention?.memoryAnalysis} />
            </Tabs>
            <Box id="p3xr-monitoring-content" className="p3xr-monitoring-shell-content" sx={{ flex: 1, minHeight: 0, overflow: 'auto', p: '5px' }}>
                <Outlet />
            </Box>
        </Box>
    )
}
