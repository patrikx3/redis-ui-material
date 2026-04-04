import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Box, Toolbar, Tooltip, Popper, Paper, ClickAwayListener } from '@mui/material'
import { CheckBox, CheckBoxOutlineBlank, Terminal, Backspace } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import P3xrButton from '../../components/P3xrButton'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useCommonStore } from '../../stores/common.store'
import { useMainCommandStore } from '../../stores/main-command.store'
import { request } from '../../stores/socket.service'
import { consoleParse } from '../../stores/redis-parser'

function htmlEncode(str: string): string {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
}

const CONSOLE_OUTPUT_KEY = 'p3xr-console-output-v1'
const CONSOLE_OUTPUT_MAX = 10 * 1024 * 1024
let actionHistoryPosition = -1

interface ConsoleProps {
    embedded?: boolean
    collapsed?: boolean
}

export default function ConsoleComponent({ embedded = false, collapsed = false }: ConsoleProps) {
    const strings = useI18nStore(s => s.strings)
    const cfg = useRedisStateStore(s => s.cfg)
    const commands = useRedisStateStore(s => s.commands)
    const commandsMeta = useRedisStateStore(s => s.commandsMeta)
    const muiTheme = useTheme()
    const { toast } = useCommonStore()

    const [searchText, setSearchText] = useState('')
    const [currentHint, setCurrentHint] = useState('')
    const [aiLoading, setAiLoading] = useState(false)
    const [aiAutoDetect, setAiAutoDetect] = useState(() => {
        try { return localStorage.getItem('p3xr-ai-auto-detect') !== 'false' } catch { return true }
    })

    const outputRef = useRef<HTMLDivElement>(null)
    const scrollerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLTextAreaElement>(null)
    const indexRef = useRef(0)
    const singleLineHeightRef = useRef(0)
    const aiCommandPendingRef = useRef(false)

    const aiEnabled = cfg?.aiEnabled !== false
    const [autocompleteHighlight, setAutocompleteHighlight] = useState(0)
    const [autocompleteDismissed, setAutocompleteDismissed] = useState(false)
    const [autocompleteNavigated, setAutocompleteNavigated] = useState(false)

    // --- Autocomplete: grouped commands matching Angular mat-autocomplete ---
    const filteredCommands = useMemo(() => {
        if (!searchText || searchText.length === 0 || !commands?.length) return []
        const text = searchText.toUpperCase()
        const matched = commands
            .filter((cmd: string) => cmd.toUpperCase().includes(text))
            .slice(0, 20)
        const groups = new Map<string, { name: string; syntax: string }[]>()
        for (const cmd of matched) {
            const info = commandsMeta[cmd.toUpperCase()]
            const group = info?.group || 'Other'
            const syntax = info?.syntax || ''
            if (!groups.has(group)) groups.set(group, [])
            groups.get(group)!.push({ name: cmd, syntax })
        }
        return Array.from(groups.entries()).map(([group, cmds]) => ({ group, commands: cmds }))
    }, [searchText, commands, commandsMeta])

    const flatOptions = useMemo(() => {
        const result: { name: string; syntax: string }[] = []
        for (const g of filteredCommands) result.push(...g.commands)
        return result
    }, [filteredCommands])

    // --- AI toggle ---
    const toggleAiAutoDetect = useCallback(() => {
        const next = !aiAutoDetect
        setAiAutoDetect(next)
        try { localStorage.setItem('p3xr-ai-auto-detect', String(next)) } catch {}
    }, [aiAutoDetect])

    // --- Output (direct DOM matching Angular) ---
    const getByteSize = (v: string) => { try { return new Blob([v || '']).size } catch { return (v || '').length } }

    const dropOldest = useCallback(() => {
        const el = outputRef.current
        if (!el) return false
        const items = el.querySelectorAll('.p3xr-console-content-output-item')
        if (items.length < 1) return false
        const count = Math.max(Math.floor(items.length * 0.1), 1)
        for (let i = 0; i < count; i++) items[i].remove()
        return true
    }, [])

    const trimOutput = useCallback(() => {
        const el = outputRef.current
        if (!el) return
        while (getByteSize(el.innerHTML) > CONSOLE_OUTPUT_MAX) {
            if (!dropOldest()) break
        }
    }, [dropOldest])

    const persistNow = useCallback(() => {
        const el = outputRef.current
        if (!el) return
        trimOutput()
        try { localStorage.setItem(CONSOLE_OUTPUT_KEY, el.innerHTML || '') }
        catch { try { localStorage.removeItem(CONSOLE_OUTPUT_KEY) } catch {} }
    }, [trimOutput])

    const persistTimerRef = useRef<any>(null)
    const persistDebounced = useCallback(() => {
        clearTimeout(persistTimerRef.current)
        persistTimerRef.current = setTimeout(persistNow, 100)
    }, [persistNow])

    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            const s = scrollerRef.current
            if (!s) return
            if (s.scrollHeight - s.scrollTop - s.clientHeight < 100) {
                s.scrollTop = s.scrollHeight
            }
        }, 0)
    }, [])

    const forceScrollToBottom = useCallback(() => {
        setTimeout(() => {
            const s = scrollerRef.current
            if (s) s.scrollTop = s.scrollHeight
        }, 0)
    }, [])

    const outputAppend = useCallback((message: string) => {
        const el = outputRef.current
        if (!el) return
        const stripped = message.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, '').trim()
        if (!stripped) return
        el.insertAdjacentHTML('beforeend',
            `<span data-index="${indexRef.current++}" class="p3xr-console-content-output-item">${message}<br/></span>`)
        trimOutput()
        persistDebounced()
        scrollToBottom()
    }, [trimOutput, persistDebounced, scrollToBottom])

    // --- Init: restore output ---
    useEffect(() => {
        const el = outputRef.current
        if (!el) return
        let stored = ''
        try { stored = localStorage.getItem(CONSOLE_OUTPUT_KEY) || '' } catch {}
        if (stored) {
            el.innerHTML = stored
            trimOutput()
            persistNow()
            const items = el.querySelectorAll('.p3xr-console-content-output-item')
            const last = items.length > 0 ? items[items.length - 1] : null
            if (last) {
                const idx = Number(last.getAttribute('data-index'))
                if (Number.isFinite(idx)) indexRef.current = idx + 1
            }
            forceScrollToBottom()
        } else {
            // Welcome message
            el.innerHTML = ''
            const welcome = strings?.label?.welcomeConsole ?? 'Welcome to the Redis Console'
            const info = strings?.label?.welcomeConsoleInfo ?? 'Shift + Cursor UP or DOWN for history'
            el.insertAdjacentHTML('beforeend',
                `<span data-index="${indexRef.current++}" class="p3xr-console-content-output-item"><strong>${welcome}</strong><br/></span>`)
            el.insertAdjacentHTML('beforeend',
                `<span data-index="${indexRef.current++}" class="p3xr-console-content-output-item">${info}<br/><br/></span>`)
            persistNow()
        }
    }, [])

    // --- Clear ---
    const clearConsole = useCallback(() => {
        const el = outputRef.current
        if (!el) return
        el.innerHTML = ''
        const welcome = strings?.label?.welcomeConsole ?? 'Welcome to the Redis Console'
        const info = strings?.label?.welcomeConsoleInfo ?? 'Shift + Cursor UP or DOWN for history'
        outputAppend(`<strong>${welcome}</strong>`)
        outputAppend(`${info}<br/>`)
        persistNow()
        forceScrollToBottom()
        inputRef.current?.focus()
    }, [strings, outputAppend, persistNow, forceScrollToBottom])

    // --- History ---
    const getHistory = (): string[] => {
        try { return JSON.parse(localStorage.getItem('console-history') || '[]') } catch { return [] }
    }
    const updateHistory = (entry: string) => {
        let h = getHistory()
        const idx = h.indexOf(entry)
        if (idx > -1) h.splice(idx, 1)
        h.unshift(entry)
        if (h.length > 20) h = h.slice(0, 20)
        localStorage.setItem('console-history', JSON.stringify(h))
        actionHistoryPosition = -1
    }

    // --- Auto-resize ---
    const autoResize = useCallback(() => {
        const el = inputRef.current
        if (!el) return
        if (!singleLineHeightRef.current) singleLineHeightRef.current = el.offsetHeight
        const focused = document.activeElement === el
        if (!focused && (el.value || '').includes('\n')) {
            el.style.height = singleLineHeightRef.current + 'px'
            el.style.overflowY = 'hidden'
            return
        }
        el.style.height = singleLineHeightRef.current + 'px'
        el.style.overflowY = 'hidden'
        if ((el.value || '').includes('\n') && el.scrollHeight > el.clientHeight) {
            const max = singleLineHeightRef.current * 3
            const border = el.offsetHeight - el.clientHeight
            const needed = el.scrollHeight + border
            if (needed > max) {
                el.style.height = max + 'px'
                el.style.overflowY = 'auto'
            } else {
                el.style.height = needed + 'px'
            }
        }
    }, [])

    const autocompleteListRef = useRef<HTMLDivElement>(null)

    useEffect(() => { setAutocompleteHighlight(0) }, [flatOptions.length])

    // Scroll highlighted autocomplete item into view
    useEffect(() => {
        const list = autocompleteListRef.current
        if (!list) return
        const item = list.querySelector(`[data-ac-idx="${autocompleteHighlight}"]`) as HTMLElement
        if (item) item.scrollIntoView({ block: 'nearest' })
    }, [autocompleteHighlight])

    const selectAutocomplete = useCallback((cmdName: string) => {
        setSearchText(cmdName)
        setAutocompleteDismissed(true)
        setTimeout(() => { inputRef.current?.focus(); autoResize() }, 0)
    }, [autoResize])

    const dismissAutocomplete = useCallback(() => {
        setAutocompleteDismissed(true)
    }, [])

    // --- Natural language detection ---
    const looksLikeNaturalLanguage = useCallback((input: string, errorMsg: string): boolean => {
        if (!/unknown command|wrong number of arguments|ERR unknown/i.test(errorMsg)) return false
        const firstWord = input.trim().split(/\s+/)[0].toUpperCase()
        if (commands?.includes(firstWord)) return false
        return true
    }, [commands])

    // --- AI query ---
    const handleAiQuery = useCallback(async (prompt: string, originalInput: string): Promise<boolean> => {
        setAiLoading(true)
        inputRef.current?.focus()
        try {
            let indexes: string[] = []
            try { const r = await request({ action: 'search-list', payload: {} }); indexes = r.data || [] } catch {}
            const info = useRedisStateStore.getState().info || {}
            const ctx: any = { indexes }
            if (info.redis_version) ctx.redisVersion = info.redis_version
            if (info.redis_mode) ctx.redisMode = info.redis_mode
            if (info.os) ctx.os = info.os
            if (info.connected_clients) ctx.connectedClients = info.connected_clients
            if (info.used_memory_human) ctx.usedMemory = info.used_memory_human
            ctx.uiLanguage = useI18nStore.getState().currentLang

            const response = await request({ action: 'ai-redis-query', payload: { prompt, context: ctx } })
            const command = response.command || ''
            const explanation = response.explanation || ''
            outputAppend(htmlEncode(originalInput))
            updateHistory(originalInput)
            if (command) {
                let line = `<strong style="color: ${muiTheme.p3xr.matSysPrimary};">AI &rarr;</strong> <code>${htmlEncode(command)}</code>`
                if (explanation) line += `<br/><span style="opacity: 0.7; font-size: 0.9em;">${htmlEncode(explanation)}</span>`
                outputAppend(line + '<br/>')
                setSearchText(command)
                setCurrentHint('')
                aiCommandPendingRef.current = true
                setTimeout(() => autoResize(), 0)
            }
            return true
        } catch (e: any) {
            const msg = e.message || String(e)
            if (msg.includes('429') || msg.includes('rate_limit')) toast(strings?.page?.key?.label?.aiRateLimited)
            else toast((strings?.page?.key?.label?.aiError || 'AI query failed') + ': ' + msg)
            return false
        } finally {
            setAiLoading(false)
            forceScrollToBottom()
            inputRef.current?.focus()
        }
    }, [muiTheme, strings, outputAppend, forceScrollToBottom, toast, autoResize])

    // --- Execute ---
    const executeSingleLine = useCallback(async (command: string) => {
        const enter = command.trim()
        if (!enter) return
        if (aiEnabled && /^ai:\s*/i.test(enter)) {
            const prompt = enter.replace(/^ai:\s*/i, '').trim()
            if (prompt) await handleAiQuery(prompt, enter)
            return
        }
        try {
            const response = await request({ action: 'console', payload: { command: enter } })
            const result = htmlEncode(String(consoleParse(response.result)))
            outputAppend(`${htmlEncode(enter)}<br/><pre>${result}</pre>`)
            if (response.hasOwnProperty('database')) {
                useRedisStateStore.setState({ currentDatabase: response.database, redisChanged: true })
            }
        } catch (e: any) {
            const errorMsg = e.message || ''
            if (aiEnabled && aiAutoDetect && looksLikeNaturalLanguage(enter, errorMsg)) {
                if (await handleAiQuery(enter, enter)) return
            }
            const strs = useI18nStore.getState().strings
            outputAppend(`${htmlEncode(enter)}<br/><pre>${strs?.code?.[errorMsg] || errorMsg}</pre>`)
        }
    }, [aiEnabled, aiAutoDetect, looksLikeNaturalLanguage, handleAiQuery, outputAppend])

    const actionEnter = useCallback(async () => {
        const full = searchText.trim()
        if (!full || aiLoading) return
        try {
            const lines = full.split('\n').map(l => l.trim()).filter(l => l.length > 0)
            if (!lines.length) return
            const first = lines[0].split(/\s+/)[0].toUpperCase()
            const single = lines.length === 1 || first === 'EVAL' || first === 'EVALSHA'
            if (single) await executeSingleLine(full)
            else for (const line of lines) await executeSingleLine(line)
        } finally {
            updateHistory(full)
            setCurrentHint('')
            if (aiCommandPendingRef.current) aiCommandPendingRef.current = false
            else { setSearchText(''); setTimeout(() => autoResize(), 0) }
            forceScrollToBottom()
            if (embedded) useMainCommandStore.getState().refresh({ withoutParent: true, force: true })
            inputRef.current?.focus()
        }
    }, [searchText, aiLoading, executeSingleLine, autoResize, forceScrollToBottom, embedded])

    // --- Input change ---
    const onInputChange = useCallback((value: string) => {
        setSearchText(value)
        setAutocompleteDismissed(false)
        setAutocompleteNavigated(false)
        const first = value.trim().split(/\s+/)[0]?.toUpperCase()
        if (first && commandsMeta[first]?.syntax) setCurrentHint(first + ' ' + commandsMeta[first].syntax)
        else setCurrentHint('')
        setTimeout(() => autoResize(), 0)
    }, [commandsMeta, autoResize])

    // --- Key handler ---
    const autocompleteOpen = flatOptions.length > 0 && !autocompleteDismissed

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        // Tab — select highlighted autocomplete item
        if (e.key === 'Tab' && autocompleteOpen) {
            e.preventDefault()
            const opt = flatOptions[autocompleteHighlight]
            if (opt) selectAutocomplete(opt.name)
            return
        }
        if (e.key === 'Enter') {
            if (e.shiftKey) { setTimeout(() => autoResize(), 0); return }
            e.preventDefault()
            // If user navigated autocomplete, Enter selects the item
            if (autocompleteOpen && autocompleteNavigated) {
                const opt = flatOptions[autocompleteHighlight]
                if (opt) { selectAutocomplete(opt.name); return }
            }
            setAutocompleteDismissed(true)
            actionEnter()
            return
        }
        // Arrow keys — autocomplete navigation (without Shift)
        if (autocompleteOpen && !e.shiftKey && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
            e.preventDefault()
            setAutocompleteNavigated(true)
            setAutocompleteHighlight(prev => {
                if (e.key === 'ArrowDown') return (prev + 1) % flatOptions.length
                return (prev - 1 + flatOptions.length) % flatOptions.length
            })
            return
        }
        if (e.key === 'Escape') {
            setAutocompleteDismissed(true)
            return
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') { actionHistoryPosition = -1; return }
        if (!e.shiftKey) return
        const history = getHistory()
        if (history.length < 1) return
        e.preventDefault(); e.stopPropagation()
        if (e.key === 'ArrowDown') {
            if (actionHistoryPosition === -1) actionHistoryPosition = history.length
            actionHistoryPosition--
            if (actionHistoryPosition < 0) actionHistoryPosition = history.length - 1
        } else {
            actionHistoryPosition++
            if (actionHistoryPosition >= history.length) actionHistoryPosition = 0
        }
        const value = history[actionHistoryPosition] ?? ''
        setSearchText(value)
        setTimeout(() => { const el = inputRef.current; if (el) { el.blur(); el.focus() }; autoResize() }, 0)
    }, [actionEnter, autoResize, flatOptions, autocompleteHighlight, selectAutocomplete, autocompleteDismissed, autocompleteNavigated, autocompleteOpen])

    // --- Auto-resize when searchText changes (AI, history, etc.) ---
    useEffect(() => {
        requestAnimationFrame(() => autoResize())
    }, [searchText, autoResize])

    // --- Paste ---
    useEffect(() => {
        const el = inputRef.current
        if (!el) return
        const handler = () => setTimeout(() => autoResize(), 0)
        el.addEventListener('paste', handler)
        return () => el.removeEventListener('paste', handler)
    }, [autoResize])

    // --- Cleanup ---
    useEffect(() => {
        return () => {
            clearTimeout(persistTimerRef.current)
            persistNow()
        }
    }, [persistNow])

    return (
        <Box className="p3xr-console-root" sx={{
            display: 'flex', flexDirection: 'column',
            width: '100%', height: '100%', overflow: 'hidden',
        }}>
            {/* Header toolbar — strongBg, 48px */}
            <Toolbar id="p3xr-console-header" variant="dense" disableGutters sx={{
                backgroundColor: `${muiTheme.p3xr.strongBg} !important`,
                backgroundImage: 'none !important',
                color: 'rgba(255,255,255,0.87) !important',
                minHeight: '48px !important', height: 48, maxHeight: 48,
                px: 1, flexShrink: 0, zIndex: 2,
                '& *': { color: 'inherit' },
                '& .MuiButton-root': {
                    color: 'inherit !important', textTransform: 'uppercase',
                    height: 36, minHeight: 36, minWidth: 'auto', px: 1, mx: 1,
                    letterSpacing: '0.1px', display: 'inline-flex', alignItems: 'center',
                    gap: '3px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15) !important' },
                },
                '& .MuiIconButton-root': {
                    color: 'inherit !important', borderRadius: '4px',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15) !important' },
                },
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', px: 1 }}>
                    <Box className="p3xr-console-title" sx={{
                        fontSize: 20, fontWeight: 500,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                        {strings?.label?.console}
                    </Box>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Box className="p3xr-console-toolbar-actions" sx={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, whiteSpace: 'nowrap' }}>
                        {aiEnabled && (
                            <Tooltip title="Auto AI" placement="top" enterDelay={300}>
                                <Box className="p3xr-console-ai-toggle" onClick={toggleAiAutoDetect} sx={{
                                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                                    mx: 1, px: 1, height: 36, cursor: 'pointer',
                                    fontSize: 13, textTransform: 'uppercase', borderRadius: '4px',
                                    userSelect: 'none', whiteSpace: 'nowrap', flexShrink: 0,
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                                }}>
                                    {aiAutoDetect
                                        ? <CheckBox sx={{ fontSize: 20, width: 20, height: 20 }} />
                                        : <CheckBoxOutlineBlank sx={{ fontSize: 20, width: 20, height: 20 }} />}
                                    <span>Auto AI</span>
                                </Box>
                            </Tooltip>
                        )}
                        <P3xrButton label={strings?.label?.redisCommandsReference ?? 'Redis Commands'}
                            icon={<Terminal fontSize="small" />}
                            onClick={() => window.open('https://redis.io/docs/latest/commands/', '_blank')} />
                        <P3xrButton label={strings?.intention?.clear ?? 'Clear'}
                            icon={<Backspace fontSize="small" />}
                            onClick={clearConsole} />
                    </Box>
                </Box>
            </Toolbar>

            {/* Output area — hidden when collapsed */}
            <Box ref={scrollerRef} id="p3xr-console-content" sx={{
                flex: collapsed ? '0 0 0px' : '1 1 auto',
                minHeight: 0,
                overflow: collapsed ? 'hidden' : 'auto',
                display: collapsed ? 'none' : 'block',
                fontFamily: "'Roboto Mono', monospace",
                textAlign: 'center',
                '& pre': {
                    fontFamily: "'Roboto Mono', monospace",
                    whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'anywhere',
                },
            }}>
                <Box ref={outputRef} id="p3xr-console-content-output" sx={{
                    textAlign: 'left', overflow: 'auto', flexGrow: 1, minWidth: 'calc(100% - 20px)',
                }} />
            </Box>

            {/* Autocomplete dropdown — opens ABOVE input via Popper */}
            {autocompleteOpen && inputRef.current && (
                <ClickAwayListener onClickAway={dismissAutocomplete}>
                    <Popper open anchorEl={inputRef.current} placement="top-start"
                        sx={{ zIndex: 1300, width: inputRef.current?.offsetWidth || '100%' }}>
                        <Paper ref={autocompleteListRef} sx={{
                            maxHeight: 350, overflow: 'auto',
                            fontFamily: "'Roboto Mono', monospace", fontSize: 13,
                            bgcolor: 'background.paper', backgroundImage: 'none',
                        }}>
                            {filteredCommands.map(group => (
                                <Box key={group.group}>
                                    <Box sx={{
                                        fontSize: 11, fontWeight: 'bold', textTransform: 'uppercase',
                                        letterSpacing: '0.5px', minHeight: 28, lineHeight: '28px',
                                        opacity: 0.7, px: 2,
                                    }}>
                                        {group.group}
                                    </Box>
                                    {group.commands.map(cmd => {
                                        const idx = flatOptions.indexOf(cmd)
                                        return (
                                            <Box key={cmd.name}
                                                data-ac-idx={idx}
                                                onClick={() => selectAutocomplete(cmd.name)}
                                                sx={{
                                                    minHeight: 32, lineHeight: '32px', px: 2,
                                                    cursor: 'pointer', fontSize: 13,
                                                    fontFamily: "'Roboto Mono', monospace",
                                                    bgcolor: idx === autocompleteHighlight ? 'action.hover' : 'transparent',
                                                    '&:hover': { bgcolor: 'action.hover' },
                                                }}>
                                                <Box component="span" sx={{ fontWeight: 'bold', mr: 1 }}>{cmd.name}</Box>
                                                {cmd.syntax && <Box component="span" sx={{ opacity: 0.5, fontSize: 11 }}>{cmd.syntax}</Box>}
                                            </Box>
                                        )
                                    })}
                                </Box>
                            ))}
                        </Paper>
                    </Popper>
                </ClickAwayListener>
            )}

            {/* Input area */}
            <Box id="p3xr-console-autocomplete" sx={{
                position: 'relative', width: '100%', flexShrink: 0,
                minWidth: 0,
            }}>
                {currentHint && (
                    <Box className="p3xr-console-hint" sx={{
                        fontFamily: "'Roboto Mono', monospace", fontSize: 12,
                        px: '6px', py: '2px', opacity: 0.6,
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                        {currentHint}
                    </Box>
                )}
                <textarea
                    ref={inputRef}
                    id="p3xr-console-input"
                    rows={1}
                    value={searchText}
                    onChange={e => onInputChange(e.target.value)}
                    onKeyDown={onKeyDown}
                    onFocus={() => autoResize()}
                    onBlur={() => setTimeout(() => autoResize(), 0)}
                    autoComplete="off"
                    placeholder={aiLoading ? (strings?.label?.aiTranslating ?? 'Translating...') : ''}
                    style={{
                        display: 'block',
                        width: collapsed ? 'calc(100% - 1px)' : '100%',
                        minWidth: collapsed ? 'calc(100% - 1px)' : '100%',
                        boxSizing: 'border-box',
                        padding: 3,
                        borderStyle: 'solid',
                        borderWidth: 3,
                        margin: 0,
                        fontFamily: "'Roboto Mono', monospace",
                        resize: 'none',
                        overflowY: 'hidden',
                        outline: 'none',
                        maxHeight: 90,
                        position: 'relative',
                        backgroundColor: muiTheme.p3xr.inputBg,
                        color: muiTheme.p3xr.inputColor,
                        borderColor: aiLoading ? muiTheme.p3xr.matSysPrimary : muiTheme.p3xr.inputBorderColor,
                    }}
                />
            </Box>
        </Box>
    )
}
