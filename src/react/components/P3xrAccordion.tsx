import { useState, useEffect, ReactNode } from 'react'
import { Toolbar, IconButton, Tooltip, Box, useTheme } from '@mui/material'
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'

let counter = 0

interface P3xrAccordionProps {
    title: string
    accordionKey?: string
    collapsible?: boolean
    actions?: ReactNode
    children: ReactNode
}

export default function P3xrAccordion({
    title,
    accordionKey,
    collapsible = true,
    actions,
    children,
}: P3xrAccordionProps) {
    const strings = useI18nStore(s => s.strings)
    const theme = useTheme()

    const [key] = useState(() => accordionKey || String(++counter))
    const storageKey = `p3xr-accordion-extended-${key}`

    const [extended, setExtended] = useState(() => {
        if (!collapsible) return true
        try {
            const v = localStorage.getItem(storageKey)
            return v === null ? true : v === 'true'
        } catch { return true }
    })

    useEffect(() => {
        if (!collapsible) {
            setExtended(true)
            return
        }
        try { localStorage.setItem(storageKey, String(extended)) } catch {}
    }, [extended, storageKey, collapsible])

    const toggle = () => setExtended(prev => !prev)

    return (
        <Box sx={{ mb: 0 }}>
            {/* Toolbar */}
            <Toolbar
                variant="dense"
                disableGutters
                sx={{
                    height: 48, minHeight: '48px !important', maxHeight: 48,
                    fontSize: 20, fontWeight: 400,
                    bgcolor: theme.p3xr.accordionBg,
                    color: theme.p3xr.accordionColor,
                    px: 0, py: 0,
                    borderRadius: extended ? '4px 4px 0 0' : '4px',
                    boxShadow: extended ? '0 1px 1px rgba(0,0,0,0.3)' : '0 1px 1px rgba(0,0,0,0.4)',
                }}
            >
                <Box sx={{
                    display: 'flex', alignItems: 'center', width: '100%',
                    height: 48, pr: '4px', pl: '16px', boxSizing: 'border-box',
                }}>
                    {/* Title */}
                    <Box
                        component="span"
                        onClick={collapsible ? toggle : undefined}
                        sx={{
                            flex: 1, cursor: collapsible ? 'pointer' : 'default',
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}
                    >
                        {title}
                    </Box>

                    {/* Action buttons slot */}
                    {actions && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {actions}
                        </Box>
                    )}

                    {/* Collapse toggle */}
                    {collapsible && (
                        <Tooltip title={extended ? (strings?.intention?.collapse) : (strings?.intention?.extend)} placement="top">
                            <IconButton
                                onClick={toggle}
                                sx={{ flexShrink: 0, width: 40, height: 40, p: 0, color: 'inherit' }}
                            >
                                {extended ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
            </Toolbar>

            {/* Content — hidden via CSS, not unmounted, to preserve uPlot chart DOM */}
            <Box sx={{
                border: 1, borderColor: theme.p3xr.accordionBg,
                borderRadius: '0 0 4px 4px',
                borderTop: 0,
                bgcolor: 'background.paper',
                display: extended ? 'block' : 'none',
            }}>
                {children}
            </Box>
        </Box>
    )
}
