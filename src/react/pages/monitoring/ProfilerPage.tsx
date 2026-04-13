/**
 * Profiler page — exact port of Angular profiler.component.
 * Uses direct DOM manipulation for fast entry rendering (not React state).
 */
import { useEffect, useRef, useCallback } from 'react'
import { Box, useTheme } from '@mui/material'
import { Backspace, Download } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import {
    useMonitoringDataStore, clearProfiler, onProfilerEntry, ProfilerEntry,
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

export default function ProfilerPage() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'

    const outputRef = useRef<HTMLDivElement>(null)
    const entryIndexRef = useRef(0)

    const oddBg = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'

    const renderEntry = useCallback((entry: ProfilerEntry) => {
        const el = outputRef.current
        if (!el) return
        const odd = entryIndexRef.current++ % 2 === 1
        const div = document.createElement('div')
        if (odd) div.style.backgroundColor = oddBg
        div.style.padding = '6px 16px'
        div.style.wordBreak = 'break-all'
        div.style.whiteSpace = 'normal'
        div.innerHTML = `<span style="opacity:0.5">${escapeHtml(entry.displayTime)}</span> <span style="opacity:0.7">[${escapeHtml(entry.database)} ${escapeHtml(entry.source)}]</span> ${escapeHtml(entry.command)}`
        el.appendChild(div)
        while (el.children.length > MAX_DOM_ENTRIES) el.removeChild(el.firstChild!)
        requestAnimationFrame(() => { el.scrollTop = el.scrollHeight })
    }, [oddBg])

    const recalcHeight = useCallback(() => {
        const el = outputRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const available = window.innerHeight - rect.top - TOOLBAR_HEIGHT - 8
        el.style.height = Math.max(available, 100) + 'px'
    }, [])

    useEffect(() => {
        document.body.classList.add('p3xr-no-main-scroll')

        // Set height before rendering entries so scroll works immediately
        recalcHeight()

        // Render existing entries
        const el = outputRef.current
        if (el) el.innerHTML = ''
        const entries = useMonitoringDataStore.getState().profilerEntries
        const start = Math.max(0, entries.length - MAX_DOM_ENTRIES)
        entryIndexRef.current = start
        for (let i = start; i < entries.length; i++) renderEntry(entries[i])
        if (el) requestAnimationFrame(() => { el.scrollTop = el.scrollHeight })

        // Subscribe to new entries
        const unsub = onProfilerEntry(renderEntry)

        // Resize handling
        const onResize = () => recalcHeight()
        window.addEventListener('resize', onResize)

        return () => {
            document.body.classList.remove('p3xr-no-main-scroll')
            unsub()
            window.removeEventListener('resize', onResize)
        }
    }, [renderEntry, recalcHeight])

    const handleClear = useCallback(() => {
        clearProfiler()
        entryIndexRef.current = 0
        if (outputRef.current) outputRef.current.innerHTML = ''
    }, [])

    const handleExport = useCallback(() => {
        const connName = connection?.name || 'redis'
        const entries = useMonitoringDataStore.getState().profilerEntries
        const lines = entries.map(e => `${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`)
        downloadText(lines.join('\n'), `${connName}-profiler-export.txt`)
    }, [connection])

    return (
        <Box>
            <P3xrAccordion title="" accordionKey="profiler-monitor" collapsible={false}
                actions={<>
                    <P3xrButton icon={<Backspace sx={{ fontSize: 18 }} />} label={strings?.intention?.clear}
                        color="inherit" onClick={(e) => { e.stopPropagation(); handleClear() }} />
                    <P3xrButton icon={<Download sx={{ fontSize: 18 }} />} label={strings?.intention?.export}
                        color="inherit" onClick={(e) => { e.stopPropagation(); handleExport() }} />
                </>}
            >
                <Box ref={outputRef} sx={{
                    fontFamily: "'Roboto Mono', monospace", fontSize: 13,
                    overflowY: 'auto', wordBreak: 'break-all', whiteSpace: 'normal',
                }} />
            </P3xrAccordion>
        </Box>
    )
}
