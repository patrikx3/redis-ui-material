/**
 * JSON (ReJSON) key type renderer — exact port of Angular key-json.component.
 * Inline JSON tree view with expand/collapse, wrap toggle, copy, download, edit.
 */
import { useState, useEffect, useCallback, useRef } from 'react'
import { Box, Button, Tooltip, useMediaQuery, useTheme as useMuiTheme } from '@mui/material'
import {
    ContentCopy, Download, UnfoldMore, UnfoldLess, WrapText, Notes, Edit,
    ExpandMore, ChevronRight,
} from '@mui/icons-material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { useSettingsStore } from '../../../stores/settings.store'
import { useOverlayStore } from '../../../stores/overlay.store'
import { request } from '../../../stores/socket.service'
import { trackPage } from '../../../stores/analytics'
import { KeyTypeProps, truncateDisplay, copyValue } from './key-type-base'
import JsonEditorDialog from '../../../dialogs/JsonEditorDialog'
import DiffDialog from '../../../dialogs/DiffDialog'

// --- Inline JSON Tree (reused from JsonViewDialog pattern) ---

interface JsonNode {
    key: string; value: any; type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null'
    children?: JsonNode[]; childCount?: number
}

function jsonToNode(key: string, value: any): JsonNode {
    if (value === null) return { key, value: null, type: 'null' }
    if (Array.isArray(value)) {
        const children = value.map((item, i) => jsonToNode(String(i), item))
        return { key, value, type: 'array', children, childCount: children.length }
    }
    if (typeof value === 'object') {
        const children = Object.keys(value).map(k => jsonToNode(k, value[k]))
        return { key, value, type: 'object', children, childCount: children.length }
    }
    return { key, value, type: typeof value as any }
}

function formatDisplay(node: JsonNode): string {
    if (node.type === 'null') return 'null'
    if (node.type === 'string') return `"${node.value}"`
    return String(node.value)
}

function useJsonColors() {
    const { palette } = useMuiTheme()
    const isDark = palette.mode === 'dark'
    return {
        key: isDark ? 'white' : 'black',
        string: palette.secondary.main,
        number: palette.primary.main,
        boolean: palette.error.main,
        null: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    }
}

function TreeNode({ node, level, expandedKeys, toggleExpand, wrap }: {
    node: JsonNode; level: number; expandedKeys: Set<string>; toggleExpand: (p: string) => void; wrap: boolean
}) {
    const colors = useJsonColors()
    const path = `${level}-${node.key}`
    const isExpandable = node.type === 'object' || node.type === 'array'
    const isExpanded = expandedKeys.has(path)
    const valueColor = isExpandable ? undefined : (colors as any)[node.type] ?? 'inherit'

    return (
        <>
            <Box sx={{
                display: 'flex', alignItems: 'flex-start', minHeight: 24, lineHeight: 1.6,
                pl: `${level * 20}px`, fontFamily: "'Roboto Mono', monospace", fontSize: 13,
            }}>
                {isExpandable ? (
                    <Box component="span" onClick={() => toggleExpand(path)} sx={{
                        width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', flexShrink: 0, opacity: 0.6,
                    }}>
                        {isExpanded ? <ExpandMore sx={{ fontSize: 18 }} /> : <ChevronRight sx={{ fontSize: 18 }} />}
                    </Box>
                ) : (
                    <Box sx={{ width: 24, height: 24, flexShrink: 0 }} />
                )}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '6px', flex: 1, minWidth: 0, flexWrap: 'nowrap' }}>
                    <Box component="span" sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
                        <Box component="span" sx={{ fontWeight: 'bold', color: colors.key }}>{node.key}</Box>
                        <Box component="span" sx={{ opacity: 0.6 }}>:</Box>
                    </Box>
                    {isExpandable ? (
                        !isExpanded ? (
                            <>
                                <Box component="span" sx={{ opacity: 0.5 }}>{node.type === 'array' ? '[' : '{'}</Box>
                                <Box component="span" sx={{ opacity: 0.4 }}>...</Box>
                                <Box component="span" sx={{ opacity: 0.5 }}>{node.type === 'array' ? ']' : '}'}</Box>
                                <Box component="span" sx={{ opacity: 0.4, fontSize: 11, ml: '4px' }}>({node.childCount})</Box>
                            </>
                        ) : null
                    ) : (
                        <Box component="span" sx={{
                            wordBreak: wrap ? 'break-word' : 'normal',
                            whiteSpace: wrap ? 'normal' : 'nowrap',
                            minWidth: 0, color: valueColor,
                            fontStyle: node.type === 'null' ? 'italic' : 'normal',
                        }}>
                            {formatDisplay(node)}
                        </Box>
                    )}
                </Box>
            </Box>
            {isExpandable && isExpanded && node.children?.map((child, i) => (
                <TreeNode key={`${child.key}-${i}`} node={child} level={level + 1}
                    expandedKeys={expandedKeys} toggleExpand={toggleExpand} wrap={wrap} />
            ))}
        </>
    )
}

// --- Main component ---

export default function KeyJson({ response, value, valueBuffer, keyName, valueFormat, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const isGtSm = useMediaQuery('(min-width: 960px)')
    const isReadonly = connection?.readonly === true

    const [jsonObj, setJsonObj] = useState<any>(undefined)
    const [treeWrap, setTreeWrap] = useState(true)
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set())
    const [editorOpen, setEditorOpen] = useState(false)
    const [diffOpen, setDiffOpen] = useState(false)
    const [diffData, setDiffData] = useState({ oldValue: '', newValue: '' })
    const diffResolveRef = useRef<((v: boolean) => void) | null>(null)

    const rootLabel = strings?.label?.tree ?? 'root'

    useEffect(() => {
        try {
            const obj = JSON.parse(value)
            setJsonObj(obj)
            setExpandedKeys(new Set([`0-${rootLabel}`]))
        } catch {
            setJsonObj(undefined)
        }
    }, [value, rootLabel])

    const toggleExpand = useCallback((path: string) => {
        setExpandedKeys(prev => {
            const next = new Set(prev)
            if (next.has(path)) next.delete(path); else next.add(path)
            return next
        })
    }, [])

    const expandAll = useCallback(() => {
        if (jsonObj === undefined) return
        const tree = jsonToNode(rootLabel, jsonObj)
        const keys = new Set<string>()
        const collect = (node: JsonNode, level: number) => {
            const path = `${level}-${node.key}`
            if (node.type === 'object' || node.type === 'array') {
                keys.add(path)
                node.children?.forEach(c => collect(c, level + 1))
            }
        }
        collect(tree, 0)
        setExpandedKeys(keys)
    }, [jsonObj, rootLabel])

    const collapseAll = useCallback(() => {
        setExpandedKeys(new Set([`0-${rootLabel}`]))
    }, [rootLabel])

    const copyVal = useCallback(() => copyValue(value), [value])

    const downloadJsonFile = useCallback(() => {
        const blob = new Blob([value], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = `${keyName}.json`; a.click()
        URL.revokeObjectURL(url)
    }, [value, keyName])

    const showDiff = useCallback((oldValue: string, newValue: string): Promise<boolean> => {
        if (!useSettingsStore.getState().showDiffBeforeSave) return Promise.resolve(true)
        if (oldValue === newValue) return Promise.resolve(true)
        setDiffData({ oldValue, newValue })
        setDiffOpen(true)
        return new Promise(resolve => { diffResolveRef.current = resolve })
    }, [])

    const handleEditorClose = useCallback(async (result?: { obj: string } | null) => {
        setEditorOpen(false)
        if (!result?.obj) return
        const oldVal = value
        try {
            const val = typeof result.obj === 'string' ? result.obj : JSON.stringify(result.obj)
            overlay.show()
            await request({ action: 'key/json-set', payload: { key: keyName, path: '$', value: val } })
            trackPage('/key-json-set')
            onRefresh()
            overlay.hide()

            const settings = useSettingsStore.getState()
            if (settings.undoEnabled && oldVal !== undefined && oldVal !== val) {
                const undoClicked = await useCommonStore.getState().toastWithUndo(strings?.status?.set || 'Saved')
                if (undoClicked) {
                    overlay.show({ message: 'Undo...' })
                    await request({ action: 'key/json-set', payload: { key: keyName, path: '$', value: oldVal } })
                    onRefresh()
                    overlay.hide()
                    useCommonStore.getState().toast(strings?.status?.reverted || 'Reverted')
                }
            }
        } catch (e) { if (e) generalHandleError(e); overlay.hide() }
    }, [keyName, strings, value, onRefresh, generalHandleError])

    const Btn = ({ icon, label, color = 'secondary' as const, onClick }: {
        icon: React.ReactNode; label: string; color?: 'primary' | 'secondary'; onClick: () => void
    }) => isGtSm ? (
        <Button variant="contained" color={color} size="small" onClick={onClick} sx={{ gap: '3px' }}>
            {icon}<span>{label}</span>
        </Button>
    ) : (
        <Tooltip title={label} placement="top">
            <Button variant="contained" color={color} onClick={onClick}
                sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                {icon}
            </Button>
        </Tooltip>
    )

    const tree = jsonObj !== undefined ? jsonToNode(rootLabel, jsonObj) : null

    return (
        <Box>
            <Box className="p3xr-key-type-actions">
                <Btn icon={<ContentCopy fontSize="small" />} label={strings?.intention?.copy} onClick={copyVal} />
                <Btn icon={<Download fontSize="small" />} label={strings?.intention?.downloadJson ?? 'Download JSON'} onClick={downloadJsonFile} />
                <Btn icon={<UnfoldMore fontSize="small" />} label={strings?.page?.treeControls?.expandAll} onClick={expandAll} />
                <Btn icon={<UnfoldLess fontSize="small" />} label={strings?.page?.treeControls?.collapseAll} onClick={collapseAll} />
                <Btn icon={treeWrap ? <WrapText fontSize="small" /> : <Notes fontSize="small" />}
                    label={treeWrap ? (strings?.intention?.unwrap ?? 'Unwrap') : (strings?.intention?.wrap ?? 'Wrap')}
                    onClick={() => setTreeWrap(w => !w)} />
                {!isReadonly && (
                    <Btn icon={<Edit fontSize="small" />} label={strings?.intention?.jsonViewEditor} color="primary" onClick={() => setEditorOpen(true)} />
                )}
            </Box>

            <Box className="p3xr-key-type-content" sx={{ overflow: 'auto' }}>
                {tree ? (
                    <TreeNode node={tree} level={0} expandedKeys={expandedKeys} toggleExpand={toggleExpand} wrap={treeWrap} />
                ) : (
                    <Box className="p3xr-pre">{truncateDisplay(value)}</Box>
                )}
            </Box>

            <JsonEditorDialog open={editorOpen} value={String(value ?? '')} hideFormatSave onClose={handleEditorClose} />

            <DiffDialog open={diffOpen} keyName={keyName}
                oldValue={diffData.oldValue} newValue={diffData.newValue}
                onConfirm={() => { setDiffOpen(false); diffResolveRef.current?.(true) }}
                onCancel={() => { setDiffOpen(false); diffResolveRef.current?.(false) }} />
        </Box>
    )
}
