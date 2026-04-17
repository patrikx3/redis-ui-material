/**
 * PubSub page — exact port of Angular pubsub.component.
 * Uses direct DOM manipulation for fast entry rendering.
 */
import { useEffect, useRef, useCallback } from 'react'
import { Box, TextField, useTheme } from '@mui/material'
import { Backspace, Download } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import {
    useMonitoringDataStore, clearPubSub, onPubsubEntry, PubsubEntry,
} from '../../stores/monitoring-data.store'
import P3xrAccordion from '../../components/P3xrAccordion'
import P3xrButton from '../../components/P3xrButton'

const MAX_DOM_ENTRIES = 66
const TOOLBAR_HEIGHT = 48

function escapeHtml(str: string): string {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function downloadText(content: string, filename: string): void {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = filename; a.click()
    URL.revokeObjectURL(url)
}

export default function PubSubPage() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const pubsubPattern = useMonitoringDataStore(s => s.pubsubPattern)
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'

    const outputRef = useRef<HTMLDivElement>(null)
    const entryIndexRef = useRef(0)

    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'

    const renderEntry = useCallback((entry: PubsubEntry) => {
        const el = outputRef.current
        if (!el) return
        const odd = entryIndexRef.current++ % 2 === 1
        const div = document.createElement('div')
        div.style.padding = '6px 16px'
        div.style.wordBreak = 'break-all'
        div.style.whiteSpace = 'normal'
        if (odd) div.style.backgroundColor = oddBg
        div.innerHTML = `<span style="opacity:0.5">${escapeHtml(entry.displayTime)}</span> <strong>${escapeHtml(entry.channel)}</strong> ${escapeHtml(entry.message)}`
        el.appendChild(div)
        while (el.children.length > MAX_DOM_ENTRIES) el.removeChild(el.firstChild!)
        requestAnimationFrame(() => { el.scrollTop = el.scrollHeight })
    }, [oddBg])

    const recalcHeight = useCallback(() => {
        const el = outputRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const drawerCssValue = getComputedStyle(document.documentElement)
            .getPropertyValue('--p3xr-console-drawer-height-active').trim()
        let drawerHeight = 0
        if (drawerCssValue.endsWith('vh')) drawerHeight = Math.round((parseFloat(drawerCssValue) / 100) * window.innerHeight)
        else if (drawerCssValue.endsWith('px')) drawerHeight = parseFloat(drawerCssValue)
        const available = window.innerHeight - rect.top - TOOLBAR_HEIGHT - drawerHeight - 8
        el.style.height = Math.max(available, 100) + 'px'
    }, [])

    // Re-run height calculation when the global console drawer opens/closes
    const drawerOpen = useRedisStateStore(s => s.consoleDrawerOpen)
    useEffect(() => {
        const t = setTimeout(() => recalcHeight(), 160) // after the 150ms drawer transition
        return () => clearTimeout(t)
    }, [drawerOpen, recalcHeight])

    useEffect(() => {
        document.body.classList.add('p3xr-no-main-scroll')

        // Set height before rendering entries so scroll works immediately
        recalcHeight()

        const el = outputRef.current
        if (el) el.innerHTML = ''
        const entries = useMonitoringDataStore.getState().pubsubEntries
        const start = Math.max(0, entries.length - MAX_DOM_ENTRIES)
        entryIndexRef.current = start
        for (let i = start; i < entries.length; i++) renderEntry(entries[i])
        if (el) requestAnimationFrame(() => { el.scrollTop = el.scrollHeight })

        const unsub = onPubsubEntry(renderEntry)

        const onResize = () => recalcHeight()
        window.addEventListener('resize', onResize)

        return () => {
            document.body.classList.remove('p3xr-no-main-scroll')
            unsub()
            window.removeEventListener('resize', onResize)
        }
    }, [renderEntry, recalcHeight])

    const handleClear = useCallback(() => {
        clearPubSub()
        entryIndexRef.current = 0
        if (outputRef.current) outputRef.current.innerHTML = ''
    }, [])

    const handleExport = useCallback(() => {
        const connName = connection?.name || 'redis'
        const entries = useMonitoringDataStore.getState().pubsubEntries
        const lines = entries.map(e => `${e.fullTimestamp} ${e.channel} ${e.message}`)
        downloadText(lines.join('\n'), `${connName}-pubsub-export.txt`)
    }, [connection])

    const handlePatternChange = (v: string) => {
        useMonitoringDataStore.setState({ pubsubPattern: v })
    }

    return (
        <Box>
            <P3xrAccordion title="" accordionKey="profiler-pubsub" collapsible={false}
                actions={<>
                    <P3xrButton icon={<Backspace sx={{ fontSize: 18 }} />} label={strings?.intention?.clear}
                        color="inherit" onClick={(e) => { e.stopPropagation(); handleClear() }} />
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export}
                        color="inherit" onClick={(e) => { e.stopPropagation(); handleExport() }} />
                </>}
            >
                <Box sx={{ px: 2, py: 1 }}>
                    <TextField fullWidth size="small" label="Pattern" placeholder="*"
                        value={pubsubPattern} onChange={e => handlePatternChange(e.target.value)} />
                </Box>
                <Box ref={outputRef} sx={{
                    fontFamily: "'Roboto Mono', monospace", fontSize: 13,
                    overflowY: 'auto', wordBreak: 'break-all', whiteSpace: 'normal',
                }} />
            </P3xrAccordion>
        </Box>
    )
}
