import { useMemo, useState } from 'react'
import { Box, TextField, Button, InputAdornment } from '@mui/material'
import { Search, Close, MenuBook } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import P3xrDialog from '../components/P3xrDialog'

interface AiCheatsheetDialogProps {
    open: boolean
    onClose: () => void
    onPick: (prompt: string) => void
}

interface CheatGroup {
    key: string
    name: string
    description?: string
    prompts: string[]
}

export default function AiCheatsheetDialog({ open, onClose, onPick }: AiCheatsheetDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const modules = useRedisStateStore(s => s.modules) || []
    const info = useRedisStateStore(s => s.info)

    const [filter, setFilter] = useState('')

    const moduleNames = useMemo(() => modules.map((m: any) => (m?.name || '').toLowerCase()), [modules])
    const version = useMemo(() => {
        const v = info?.server?.redis_version || ''
        const match = /^(\d+)/.exec(v)
        return match ? parseInt(match[1], 10) : 0
    }, [info])
    const isCluster = info?.server?.redis_mode === 'cluster'

    const visibleGroups = useMemo<CheatGroup[]>(() => {
        const cs = strings?.label?.cheatsheet?.groups
        if (!cs) return []
        const result: CheatGroup[] = []
        const push = (key: string, g: any) => {
            if (!g || !Array.isArray(g.prompts) || g.prompts.length === 0) return
            result.push({ key, name: g.name, description: g.description, prompts: g.prompts })
        }
        push('diagnostics', cs.diagnostics)
        push('keys', cs.keys)
        push('dataTypes', cs.dataTypes)
        if (moduleNames.includes('rejson') || moduleNames.includes('rejson-rl') || moduleNames.includes('json')) push('json', cs.json)
        if (moduleNames.includes('search') || moduleNames.includes('searchlight')) push('search', cs.search)
        if (moduleNames.includes('timeseries')) push('timeseries', cs.timeseries)
        if (moduleNames.includes('bf')) push('bloom', cs.bloom)
        if (version >= 8) {
            push('vectorSet', cs.vectorSet)
            push('redis8', cs.redis8)
        }
        push('scripting', cs.scripting)
        if (isCluster) push('cluster', cs.cluster)
        if (version >= 6) push('acl', cs.acl)
        push('qna', cs.qna)
        push('translate', cs.translate)
        return result
    }, [strings, moduleNames, version, isCluster])

    const filterPrompts = (prompts: string[]) => {
        const q = filter.trim().toLowerCase()
        if (!q) return prompts
        return prompts.filter(p => p.toLowerCase().includes(q))
    }

    const emptyResults = visibleGroups.every(g => filterPrompts(g.prompts).length === 0)

    const cs = strings?.label?.cheatsheet

    if (!open) return null

    return (
        <P3xrDialog open onClose={onClose} title={cs?.title}
            width="720px"
            contentPadding={false}
            actions={
                <>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button variant="contained" color="primary" size="small"
                            onClick={() => window.open('https://redis.io/docs/latest/commands/', '_blank')}>
                        <MenuBook fontSize="small" />
                        <span style={{ marginLeft: 3 }}>{cs?.openOfficialDocs}</span>
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={onClose}>
                        <Close fontSize="small" />
                        <span style={{ marginLeft: 3 }}>{strings?.intention?.close}</span>
                    </Button>
                </>
            }>

            {/* Sticky header — P3xrDialog has contentPadding={false} so we own all
                internal padding. Sticky sits at the true top of the scroll container
                with its own consistent padding all around. */}
            <Box sx={{
                position: 'sticky',
                top: 0,
                zIndex: 2,
                bgcolor: 'background.paper',
                borderBottom: '1px solid rgba(127,127,127,0.2)',
                px: 2,
                py: 1.5,
            }}>
                {cs?.subtitle && (
                    <Box sx={{ fontSize: 13, opacity: 0.8, lineHeight: 1.4, pb: 0.5 }}>{cs.subtitle}</Box>
                )}
                {cs?.footerHint && (
                    <Box sx={{ fontSize: 13, opacity: 0.8, lineHeight: 1.4, pb: 0.75 }}>{cs.footerHint}</Box>
                )}
                <TextField fullWidth size="small"
                           variant="filled"
                           hiddenLabel
                           placeholder={cs?.searchPlaceholder || ''}
                           value={filter}
                           onChange={e => setFilter(e.target.value)}
                           onKeyDown={e => e.stopPropagation()}
                           sx={{
                               '& .MuiFormHelperText-root': { display: 'none' },
                               '& .MuiFilledInput-root': { mb: 0 },
                           }}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start"><Search fontSize="small" /></InputAdornment>
                               ),
                           }} />
            </Box>

            <Box sx={{ p: '12px 16px' }}>
                {visibleGroups.map(g => {
                    const prompts = filterPrompts(g.prompts)
                    if (prompts.length === 0) return null
                    return (
                        <Box key={g.key} sx={{ mb: 2.5 }}>
                            <Box sx={{ fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.85, mt: 1 }}>
                                {g.name}
                            </Box>
                            {g.description && (
                                <Box sx={{ fontSize: 12, opacity: 0.65, mt: 0.5, mb: 1 }}>{g.description}</Box>
                            )}
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mt: 0.5 }}>
                                {prompts.map((p, i) => (
                                    <Button key={i} variant="outlined" size="small"
                                            onClick={() => { onPick('ai: ' + p); onClose() }}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                textAlign: 'left',
                                                fontFamily: 'Roboto Mono, monospace',
                                                fontSize: 12,
                                                textTransform: 'none',
                                                letterSpacing: 'normal',
                                                lineHeight: 1.4,
                                                minHeight: 32,
                                                py: 0.75,
                                                px: 1.5,
                                                borderRadius: '4px',
                                                whiteSpace: 'normal',
                                            }}>
                                        {p}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    )
                })}
                {emptyResults && (
                    <Box sx={{ p: 3, textAlign: 'center', opacity: 0.6, fontSize: 13 }}>{cs?.empty}</Box>
                )}
            </Box>
        </P3xrDialog>
    )
}
