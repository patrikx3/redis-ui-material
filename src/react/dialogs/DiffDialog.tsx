import { useState, useMemo } from 'react'
import {
    Button, Box, ToggleButtonGroup, ToggleButton,
    useMediaQuery, Tooltip,
} from '@mui/material'
import { Save, Cancel } from '@mui/icons-material'
import { diffLines, Change } from 'diff'
import { useI18nStore } from '../stores/i18n.store'
import P3xrDialog from '../components/P3xrDialog'

interface DiffBlock {
    type: 'added' | 'removed' | 'unchanged' | 'collapse'
    lines: string[]
    collapsedCount?: number
}

const CONTEXT_LINES = 3

function buildBlocks(changes: Change[]): DiffBlock[] {
    const blocks: DiffBlock[] = []
    for (const change of changes) {
        const lines = change.value.replace(/\n$/, '').split('\n')
        if (change.added) {
            blocks.push({ type: 'added', lines })
        } else if (change.removed) {
            blocks.push({ type: 'removed', lines })
        } else {
            if (lines.length <= CONTEXT_LINES * 2 + 1) {
                blocks.push({ type: 'unchanged', lines })
            } else {
                blocks.push({ type: 'unchanged', lines: lines.slice(0, CONTEXT_LINES) })
                const collapsed = lines.slice(CONTEXT_LINES, -CONTEXT_LINES)
                blocks.push({ type: 'collapse', lines: collapsed, collapsedCount: collapsed.length })
                blocks.push({ type: 'unchanged', lines: lines.slice(-CONTEXT_LINES) })
            }
        }
    }
    return blocks
}

interface DiffDialogProps {
    open: boolean
    keyName: string
    fieldName?: string
    oldValue: string
    newValue: string
    onConfirm: () => void
    onCancel: () => void
}

export default function DiffDialog({ open, keyName, fieldName, oldValue, newValue, onConfirm, onCancel }: DiffDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const d = strings?.diff || {} as any
    const isWide = useMediaQuery('(min-width: 600px)')
    const [mode, setMode] = useState<'inline' | 'side-by-side'>('inline')
    const [expanded, setExpanded] = useState<Set<number>>(new Set())

    const changes = useMemo(() => diffLines(String(oldValue ?? ''), String(newValue ?? '')), [oldValue, newValue])
    const blocks = useMemo(() => buildBlocks(changes), [changes])
    const additions = useMemo(() => changes.filter(c => c.added).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0), [changes])
    const deletions = useMemo(() => changes.filter(c => c.removed).reduce((n, c) => n + (c.value.split('\n').length - 1 || 1), 0), [changes])

    const toggleExpand = (i: number) => setExpanded(prev => { const s = new Set(prev); s.has(i) ? s.delete(i) : s.add(i); return s })

    const lineSx = (type: string) => ({
        px: 1, py: '1px', whiteSpace: 'pre-wrap', wordBreak: 'break-all',
        fontFamily: "'Roboto Mono', monospace", fontSize: 13,
        ...(type === 'added' ? { bgcolor: 'rgba(76,175,80,0.12)' } : {}),
        ...(type === 'removed' ? { bgcolor: 'rgba(244,67,54,0.12)' } : {}),
        ...(type === 'unchanged' || type === 'collapse' ? { opacity: 0.6 } : {}),
    })

    const collapseSx = {
        px: 1, py: '4px', opacity: 0.4, fontStyle: 'italic', cursor: 'pointer',
        fontFamily: "'Roboto Mono', monospace", fontSize: 13,
        '&:hover': { opacity: 0.7 },
    }

    const renderInline = () => blocks.map((block, i) => {
        if (block.type === 'collapse' && !expanded.has(i)) {
            return <Box key={i} sx={collapseSx} onClick={() => toggleExpand(i)}>... {block.collapsedCount} {d.unchangedLines} ...</Box>
        }
        return block.lines.map((line, j) => (
            <Box key={`${i}-${j}`} sx={lineSx(block.type)}>
                <Box component="span" sx={{ display: 'inline-block', width: 16, fontWeight: 700, userSelect: 'none' }}>
                    {block.type === 'added' ? '+' : block.type === 'removed' ? '-' : ' '}
                </Box>{line}
            </Box>
        ))
    })

    const renderSide = (side: 'before' | 'after') => {
        const skipType = side === 'before' ? 'added' : 'removed'
        return (<>
            <Box sx={{ px: 1, py: '4px', fontWeight: 500, borderBottom: 1, borderColor: 'divider', position: 'sticky', top: 0, zIndex: 1, bgcolor: 'background.paper' }}>
                {side === 'before' ? d.before : d.after}
            </Box>
            {blocks.map((block, i) => {
                if (block.type === 'collapse' && !expanded.has(i)) {
                    return <Box key={i} sx={collapseSx} onClick={() => toggleExpand(i)}>... {block.collapsedCount} {d.unchangedLines} ...</Box>
                }
                if (block.type === skipType) return null
                return block.lines.map((line, j) => <Box key={`${i}-${j}`} sx={lineSx(block.type)}>{line}</Box>)
            })}
        </>)
    }

    const title = `${d.reviewChanges} — ${fieldName ? `${fieldName} @ ` : ''}${keyName}`

    return (
        <P3xrDialog
            open={open}
            onClose={onCancel}
            title={title}
            width="800px"
            contentPadding={false}
            headerActions={<>
                <ToggleButtonGroup size="small" exclusive value={mode} onChange={(_, v) => v && setMode(v)}
                    sx={{ mr: 0.5, '& .MuiToggleButton-root': { py: '2px', px: 1.5, fontSize: 12, borderRadius: '4px', textTransform: 'none', color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.3)' } }}>
                    <ToggleButton value="inline">{d.inline}</ToggleButton>
                    <ToggleButton value="side-by-side">{d.sideBySide}</ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{ fontSize: 12, opacity: 0.8, mr: 0.5, whiteSpace: 'nowrap' }}>
                    <Box component="span" sx={{ color: '#81c784', fontWeight: 700 }}>+{additions}</Box>{' '}{d.additions},{' '}
                    <Box component="span" sx={{ color: '#ef9a9a', fontWeight: 700 }}>-{deletions}</Box>{' '}{d.deletions}
                </Box>
            </>}
            actions={<>
                <Tooltip title={strings?.intention?.cancel} disableHoverListener={isWide}>
                    <Button variant="contained" color="warning" onClick={onCancel}>
                        <Cancel sx={{ fontSize: 18, mr: isWide ? 0.5 : 0 }} />
                        {isWide && <span>{strings?.intention?.cancel}</span>}
                    </Button>
                </Tooltip>
                <Tooltip title={strings?.intention?.save} disableHoverListener={isWide}>
                    <Button variant="contained" color="primary" onClick={onConfirm}>
                        <Save sx={{ fontSize: 18, mr: isWide ? 0.5 : 0 }} />
                        {isWide && <span>{strings?.intention?.save}</span>}
                    </Button>
                </Tooltip>
            </>}
        >
            <Box sx={{ minHeight: 200, maxHeight: '60vh', overflow: 'auto', ...(mode === 'side-by-side' ? { display: 'grid', gridTemplateColumns: '1fr 1fr' } : {}) }}>
                {mode === 'inline' ? (
                    <Box>{renderInline()}</Box>
                ) : (<>
                    <Box sx={{ borderRight: 1, borderColor: 'divider', overflow: 'auto' }}>{renderSide('before')}</Box>
                    <Box sx={{ overflow: 'auto' }}>{renderSide('after')}</Box>
                </>)}
            </Box>
        </P3xrDialog>
    )
}
