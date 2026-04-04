import { useState, useCallback, useEffect } from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material'
import { Button } from '@mui/material'
import { Close, KeyboardArrowDown, KeyboardArrowUp, ChevronRight, ExpandMore } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import P3xrDialog from '../components/P3xrDialog'

interface JsonNode {
    key: string
    value: any
    type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null'
    children?: JsonNode[]
    childCount?: number
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

// Color map from Angular: string=accent, number=primary, boolean=warn, null=muted
function useJsonColors() {
    const muiTheme = useTheme()
    const isDark = muiTheme.palette.mode === 'dark'
    return {
        key: isDark ? 'white' : 'black',
        string: muiTheme.palette.secondary.main,   // --p3xr-btn-accent-bg
        number: muiTheme.palette.primary.main,      // --p3xr-btn-primary-bg
        boolean: muiTheme.palette.error.main,        // --p3xr-btn-warn-bg
        null: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
    }
}

function TreeNode({ node, level, expandedKeys, toggleExpand }: {
    node: JsonNode; level: number; expandedKeys: Set<string>; toggleExpand: (path: string) => void
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
                pl: `${level * 20}px`,
                fontFamily: "'Roboto Mono', monospace", fontSize: 13,
            }}>
                {isExpandable ? (
                    <IconButton size="small" onClick={() => toggleExpand(path)}
                        sx={{ width: 24, height: 24, p: 0, flexShrink: 0, opacity: 0.6 }}>
                        {isExpanded ? <ExpandMore sx={{ fontSize: 18 }} /> : <ChevronRight sx={{ fontSize: 18 }} />}
                    </IconButton>
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
                            wordBreak: 'break-word', minWidth: 0,
                            color: valueColor,
                            fontStyle: node.type === 'null' ? 'italic' : 'normal',
                        }}>
                            {formatDisplay(node)}
                        </Box>
                    )}
                </Box>
            </Box>
            {isExpandable && isExpanded && node.children?.map((child, i) => (
                <TreeNode key={`${child.key}-${i}`} node={child} level={level + 1}
                    expandedKeys={expandedKeys} toggleExpand={toggleExpand} />
            ))}
        </>
    )
}

interface Props {
    open: boolean
    value: string
    onClose: () => void
}

export default function JsonViewDialog({ open, value, onClose }: Props) {
    const strings = useI18nStore(s => s.strings)
    // Start with only root expanded (level 0) — matches Angular expanded=true (first level only)
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set())

    const rootLabel = strings?.label?.tree ?? 'root'
    let isJson = false
    let tree: JsonNode | null = null
    try {
        const obj = JSON.parse(value)
        isJson = true
        tree = jsonToNode(rootLabel, obj)
    } catch { /* not parsable */ }

    // Reset to root-only expanded when value changes
    useEffect(() => {
        if (open && isJson) setExpandedKeys(new Set([`0-${rootLabel}`]))
    }, [open, value])

    const toggleExpand = useCallback((path: string) => {
        setExpandedKeys(prev => {
            const next = new Set(prev)
            if (next.has(path)) next.delete(path)
            else next.add(path)
            return next
        })
    }, [])

    const expandAll = useCallback(() => {
        if (!tree) return
        const keys = new Set<string>()
        const collect = (node: JsonNode, level: number) => {
            const path = `${level}-${node.key}`
            if (node.type === 'object' || node.type === 'array') {
                keys.add(path)
                node.children?.forEach((c, i) => collect(c, level + 1))
            }
        }
        collect(tree, 0)
        setExpandedKeys(keys)
    }, [tree])

    const collapseAll = useCallback(() => {
        // Collapse to level 1: only root expanded
        const rootPath = `0-${strings?.label?.tree ?? 'root'}`
        setExpandedKeys(new Set([rootPath]))
    }, [strings])

    if (!open) return null

    return (
        <P3xrDialog open onClose={onClose}
            title={strings?.intention?.jsonViewShow}
            headerActions={isJson ? (
                <>
                    <Tooltip title={strings?.page?.treeControls?.expandAll} placement="top">
                        <IconButton color="inherit" size="small" onClick={expandAll}><KeyboardArrowDown fontSize="small" /></IconButton>
                    </Tooltip>
                    <Tooltip title={strings?.page?.treeControls?.collapseAll} placement="top">
                        <IconButton color="inherit" size="small" onClick={collapseAll}><KeyboardArrowUp fontSize="small" /></IconButton>
                    </Tooltip>
                </>
            ) : undefined}
            actions={
                <Button variant="contained" color="secondary" size="small" onClick={onClose}>
                    <Close fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.close}</span>
                </Button>
            }>
            <Box sx={{ minHeight: 200, maxHeight: '70vh', overflow: 'auto' }}>
                {isJson && tree ? (
                    <TreeNode node={tree} level={0} expandedKeys={expandedKeys} toggleExpand={toggleExpand} />
                ) : (
                    <Box>{strings?.label?.jsonViewNotParsable}</Box>
                )}
            </Box>
        </P3xrDialog>
    )
}
