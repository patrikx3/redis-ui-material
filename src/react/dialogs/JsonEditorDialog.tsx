import { useState, useEffect, useRef } from 'react'
import { Box, Button, useMediaQuery } from '@mui/material'
import { Save, FormatLineSpacing, Cancel, WrapText, Notes } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useCommonStore } from '../stores/common.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useSettingsStore } from '../stores/settings.store'
import { useThemeStore } from '../stores/theme.store'
import { isDarkTheme } from '../themes'
import P3xrDialog from '../components/P3xrDialog'
import DiffDialog from './DiffDialog'

interface Props {
    open: boolean
    value: string
    hideFormatSave?: boolean
    onClose: (result?: { obj: string } | null) => void
}

export default function JsonEditorDialog({ open, value, hideFormatSave, onClose }: Props) {
    const strings = useI18nStore(s => s.strings)
    const { generalHandleError } = useCommonStore()
    const isReadonly = useRedisStateStore(s => s.connection)?.readonly === true
    const jsonFormat = useSettingsStore(s => s.jsonFormat)
    const themeKey = useThemeStore(s => s.themeKey)
    const isWide = useMediaQuery('(min-width: 960px)')

    const [isJson, setIsJson] = useState(false)
    const [lineWrap, setLineWrap] = useState(true)
    const editorRef = useRef<HTMLDivElement>(null)
    const viewRef = useRef<any>(null)
    const wrapRef = useRef<any>(null)
    const EditorViewRef = useRef<any>(null)

    // Init CodeMirror when dialog opens — delay to ensure DOM is ready
    useEffect(() => {
        if (!open) return

        let obj: any
        try { obj = JSON.parse(value); setIsJson(true) }
        catch { setIsJson(false); return }

        const doc = JSON.stringify(obj, null, jsonFormat || 2)
        let view: any
        let cancelled = false

        const initEditor = async () => {
            // Wait for DOM to be ready
            while (!editorRef.current && !cancelled) {
                await new Promise(r => setTimeout(r, 50))
            }
            if (cancelled || !editorRef.current) return
            const { EditorView, keymap, lineNumbers, highlightActiveLineGutter,
                highlightSpecialChars, drawSelection, highlightActiveLine,
                rectangularSelection, crosshairCursor } = await import('@codemirror/view')
            const { EditorState, Compartment } = await import('@codemirror/state')
            const { json } = await import('@codemirror/lang-json')
            const { defaultKeymap, history, historyKeymap } = await import('@codemirror/commands')
            const { bracketMatching, foldGutter, foldKeymap, indentOnInput,
                syntaxHighlighting, defaultHighlightStyle } = await import('@codemirror/language')
            const { closeBrackets, closeBracketsKeymap } = await import('@codemirror/autocomplete')
            const { searchKeymap, highlightSelectionMatches } = await import('@codemirror/search')
            const { lintKeymap } = await import('@codemirror/lint')

            let themeExt: any
            if (isDarkTheme(themeKey)) {
                const { oneDark } = await import('@codemirror/theme-one-dark')
                themeExt = oneDark
            } else {
                const { githubLight } = await import('@uiw/codemirror-theme-github')
                themeExt = githubLight
            }

            const wrapCompartment = new Compartment()
            wrapRef.current = wrapCompartment
            EditorViewRef.current = EditorView

            view = new EditorView({
                state: EditorState.create({
                    doc,
                    extensions: [
                        lineNumbers(),
                        highlightActiveLineGutter(),
                        highlightSpecialChars(),
                        history(),
                        foldGutter(),
                        drawSelection(),
                        indentOnInput(),
                        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
                        bracketMatching(),
                        closeBrackets(),
                        rectangularSelection(),
                        crosshairCursor(),
                        highlightActiveLine(),
                        highlightSelectionMatches(),
                        keymap.of([
                            ...closeBracketsKeymap, ...defaultKeymap,
                            ...searchKeymap, ...historyKeymap,
                            ...foldKeymap, ...lintKeymap,
                        ]),
                        json(),
                        themeExt,
                        EditorView.theme({
                            '.cm-scroller': { 'overflow-x': 'scroll', 'scrollbar-width': 'auto' },
                            '.cm-scroller::-webkit-scrollbar': { height: '12px', display: 'block' },
                            '.cm-scroller::-webkit-scrollbar-track': { background: 'rgba(128,128,128,0.1)' },
                            '.cm-scroller::-webkit-scrollbar-thumb': { background: 'rgba(128,128,128,0.4)', 'border-radius': '6px' },
                            '.cm-scroller::-webkit-scrollbar-thumb:hover': { background: 'rgba(128,128,128,0.6)' },
                        }),
                        wrapCompartment.of(EditorView.lineWrapping),
                        EditorState.readOnly.of(isReadonly),
                    ],
                }),
                parent: editorRef.current!,
            })
            viewRef.current = view
        }

        initEditor()

        return () => {
            cancelled = true
            if (viewRef.current) { viewRef.current.destroy(); viewRef.current = null }
        }
    }, [open, value, themeKey])

    const toggleWrap = () => {
        setLineWrap(prev => {
            const next = !prev
            if (viewRef.current && wrapRef.current && EditorViewRef.current) {
                viewRef.current.dispatch({
                    effects: wrapRef.current.reconfigure(next ? EditorViewRef.current.lineWrapping : []),
                })
            }
            return next
        })
    }

    const [diffOpen, setDiffOpen] = useState(false)
    const [diffNewValue, setDiffNewValue] = useState('')
    const diffResolveRef = useRef<((v: boolean) => void) | null>(null)

    const save = async (format: boolean) => {
        try {
            const text = viewRef.current.state.doc.toString()
            const parsed = JSON.parse(text)
            const result = JSON.stringify(parsed, null, format ? (jsonFormat || 2) : 0)
            const settings = useSettingsStore.getState()
            if (settings.showDiffBeforeSave && value !== result) {
                setDiffNewValue(result)
                setDiffOpen(true)
                const confirmed = await new Promise<boolean>(resolve => { diffResolveRef.current = resolve })
                if (!confirmed) return
            }
            onClose({ obj: result })
        } catch (e) { generalHandleError(e) }
    }

    if (!open) return null

    const minHeight = isWide ? `${Math.max(10, window.innerHeight - 100)}px` : '100%'

    return (
        <>
        <P3xrDialog open onClose={() => onClose(null)} contentPadding={!isJson}
            width="90vw" height="90vh"
            title={
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                    <span>{strings?.intention?.jsonViewEditor}</span>
                </Box>
            }
            actions={
                <>
                    <Button variant="contained" color="secondary" size="small" onClick={toggleWrap}>
                        {lineWrap ? <WrapText fontSize="small" /> : <Notes fontSize="small" />}
                        {isWide && <span style={{ marginLeft: 3 }}>{lineWrap ? strings?.intention?.unwrap : strings?.intention?.wrap}</span>}
                    </Button>
                    <Box sx={{ flex: 1 }} />
                    <Button variant="contained" color="error" size="small" onClick={() => onClose(null)}>
                        <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                    </Button>
                    {isJson && !isReadonly && (
                        <>
                            <Button variant="contained" color="primary" size="small" onClick={() => save(false)}>
                                <Save fontSize="small" />
                                {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.save}</span>}
                            </Button>
                            {!hideFormatSave && (
                                <Button variant="contained" color="primary" size="small" onClick={() => save(true)}>
                                    <Save fontSize="small" /><FormatLineSpacing fontSize="small" />
                                    {isWide && <span style={{ marginLeft: 3 }}>{strings?.intention?.saveWithFormatJson}</span>}
                                </Button>
                            )}
                        </>
                    )}
                </>
            }>
            {isJson ? (
                <Box ref={editorRef} sx={{
                    height: '100%',
                    '& .cm-editor': { height: '100%' },
                    '& .cm-scroller': { overflow: 'auto !important' },
                }} />
            ) : (
                <Box sx={{ minHeight: 320 }}>{strings?.label?.jsonViewNotParsable}</Box>
            )}
        </P3xrDialog>
        <DiffDialog open={diffOpen} keyName="JSON"
            oldValue={value} newValue={diffNewValue}
            onConfirm={() => { setDiffOpen(false); diffResolveRef.current?.(true) }}
            onCancel={() => { setDiffOpen(false); diffResolveRef.current?.(false) }} />
        </>
    )
}
