import { useState, useRef } from 'react'
import {
    Button, Radio, RadioGroup, FormControlLabel, Box,
    useMediaQuery, Tooltip,
} from '@mui/material'
import { Cancel, FileUpload } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useI18nStore } from '../stores/i18n.store'
import P3xrDialog from '../components/P3xrDialog'

interface KeyImportDialogProps {
    open: boolean
    data: { keys: any[] } | null
    onClose: (result: { pending: boolean; keys: any[]; conflictMode: string } | null) => void
}

function ImportPreviewList({ keys }: { keys: any[] }) {
    const strings = useI18nStore(s => s.strings)
    const muiTheme = useTheme()
    const parentRef = useRef<HTMLDivElement>(null)

    const virtualizer = useVirtualizer({
        count: keys.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 40,
        overscan: 10,
    })

    return (
        <Box ref={parentRef} sx={{ height: 300, overflow: 'auto' }}>
            <Box sx={{ height: virtualizer.getTotalSize(), width: '100%', position: 'relative' }}>
                {virtualizer.getVirtualItems().map(row => {
                    const entry = keys[row.index]
                    return (
                        <Box key={row.index} sx={{
                            position: 'absolute', top: 0, left: 0, width: '100%',
                            height: 40, transform: `translateY(${row.start}px)`,
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            gap: 1, px: 2, boxSizing: 'border-box',
                            borderBottom: '1px solid',
                            borderColor: muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.12)',
                        }}>
                            <Box sx={{
                                flex: 1, minWidth: 0, overflow: 'hidden',
                                textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                fontFamily: "'Roboto Mono', monospace", fontSize: 13,
                            }}>
                                {entry.key}
                            </Box>
                            <Box component="kbd" sx={{
                                fontFamily: "'Roboto Mono', monospace", fontSize: 11,
                                border: 1, borderColor: 'divider', borderRadius: '4px',
                                px: 1, py: 0.25, bgcolor: 'action.hover', display: 'inline-block',
                            }}>
                                {strings?.redisTypes?.[entry.type] ?? entry.type}
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

export default function KeyImportDialog({ open, data, onClose }: KeyImportDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const isWide = useMediaQuery('(min-width: 600px)')
    const [conflictMode, setConflictMode] = useState<'overwrite' | 'skip'>('overwrite')

    if (!open || !data) return null

    const keys = data.keys ?? []

    return (
        <P3xrDialog
            open
            onClose={() => onClose(null)}
            title={strings?.intention?.importKeys}
            actions={
                <>
                    {isWide ? (
                        <Button variant="contained" color="error" size="small" onClick={() => onClose(null)}>
                            <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.cancel} placement="top">
                            <Button variant="contained" color="error" size="small" onClick={() => onClose(null)}
                                sx={{ minWidth: 40, width: 40, height: 36, p: 0 }}>
                                <Cancel fontSize="small" />
                            </Button>
                        </Tooltip>
                    )}
                    <Button variant="contained" color="primary" size="small"
                        onClick={() => onClose({ pending: true, keys, conflictMode })}>
                        <FileUpload fontSize="small" />
                        <span style={{ marginLeft: 3 }}>{strings?.intention?.importKeys}</span>
                    </Button>
                </>
            }
        >
            <Box sx={{ mb: 2 }}>
                <strong>{strings?.label?.importPreview}</strong>
                <Box component="span" sx={{ opacity: 0.7, ml: 1 }}>({keys.length})</Box>
            </Box>

            <ImportPreviewList keys={keys} />

            <Box sx={{ mt: 2 }}>
                <Box sx={{ mb: 1, fontWeight: 500 }}>
                    {strings?.label?.importConflict}
                </Box>
                <RadioGroup row value={conflictMode} onChange={(_, v) => setConflictMode(v as any)}>
                    <FormControlLabel value="overwrite" control={<Radio />}
                        label={strings?.label?.importOverwrite} />
                    <FormControlLabel value="skip" control={<Radio />}
                        label={strings?.label?.importSkip} />
                </RadioGroup>
            </Box>
        </P3xrDialog>
    )
}
