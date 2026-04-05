import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Box, Dialog, InputAdornment, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useCommonStore } from '../stores/common.store'
import { useI18nStore } from '../stores/i18n.store'
import { getShortcuts, ShortcutDef } from '../stores/shortcuts'

interface PaletteItem {
    label: string
    description: string
    shortcut: ShortcutDef
}

export default function CommandPaletteDialog() {
    const open = useCommonStore(s => s.commandPaletteOpen)
    const setOpen = useCommonStore(s => s.setCommandPaletteOpen)
    const strings = useI18nStore(s => s.strings)
    const theme = useTheme()
    const isDark = theme.palette.mode === 'dark'

    const [search, setSearch] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef<HTMLInputElement>(null)
    const listRef = useRef<HTMLDivElement>(null)

    const allItems = useMemo((): PaletteItem[] => {
        const seen = new Set<string>()
        const items: PaletteItem[] = []
        for (const s of getShortcuts()) {
            if (seen.has(s.descriptionKey)) continue
            seen.add(s.descriptionKey)
            items.push({
                label: s.label,
                description: strings?.label?.[s.descriptionKey] || s.descriptionKey,
                shortcut: s,
            })
        }
        return items
    }, [strings])

    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim()
        if (!q) return allItems
        return allItems.filter(i =>
            i.description.toLowerCase().includes(q) || i.label.toLowerCase().includes(q)
        )
    }, [search, allItems])

    useEffect(() => {
        if (open) {
            setSearch('')
            setSelectedIndex(0)
            setTimeout(() => inputRef.current?.focus(), 50)
        }
    }, [open])

    // Scroll selected item into view
    useEffect(() => {
        if (!open || !listRef.current) return
        const items = listRef.current.querySelectorAll('.p3xr-cmd-palette-item')
        items[selectedIndex]?.scrollIntoView({ block: 'nearest' })
    }, [selectedIndex, open])

    const execute = useCallback((item: PaletteItem) => {
        setOpen(false)
        item.shortcut.action()
    }, [setOpen])

    const onKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelectedIndex(prev => Math.min(prev + 1, filtered.length - 1))
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelectedIndex(prev => Math.max(prev - 1, 0))
        } else if (e.key === 'Enter') {
            e.preventDefault()
            if (filtered[selectedIndex]) execute(filtered[selectedIndex])
        } else if (e.key === 'Escape') {
            setOpen(false)
        }
    }, [filtered, selectedIndex, execute, setOpen])

    if (!open) return null

    const hoverBg = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)'
    const activeBg = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'

    return (
        <Dialog open onClose={() => setOpen(false)}
            slotProps={{
                paper: {
                    sx: {
                        width: '100%', maxWidth: 500, minWidth: 360,
                        borderRadius: 2, overflow: 'hidden',
                    },
                },
            }}>
            <Box sx={{
                display: 'flex', alignItems: 'center', gap: 1,
                px: 2, py: 1.5,
                borderBottom: 1, borderColor: 'divider',
            }}>
                <Search sx={{ opacity: 0.5 }} />
                <Box
                    component="input"
                    ref={inputRef}
                    value={search}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setSearch(e.target.value)
                        setSelectedIndex(0)
                    }}
                    onKeyDown={onKeyDown}
                    placeholder={strings?.label?.commandPalette || 'Command Palette'}
                    autoComplete="off"
                    sx={{
                        flex: 1, border: 'none', outline: 'none',
                        background: 'transparent', color: 'text.primary',
                        fontSize: 16, fontFamily: 'inherit',
                        '&::placeholder': { color: 'text.secondary', opacity: 0.5 },
                    }}
                />
            </Box>
            <Box ref={listRef} sx={{ maxHeight: 300, overflowY: 'auto' }}>
                {filtered.map((item, i) => (
                    <Box
                        key={item.label}
                        className="p3xr-cmd-palette-item"
                        onClick={() => execute(item)}
                        sx={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            px: 2, py: 1.25, cursor: 'pointer',
                            bgcolor: i === selectedIndex ? activeBg : 'transparent',
                            '&:hover': { bgcolor: hoverBg },
                        }}
                    >
                        <Box component="span" sx={{ fontSize: 14 }}>{item.description}</Box>
                        <Box component="kbd" sx={{
                            px: 1, py: 0.25, borderRadius: '4px', fontSize: 12,
                            bgcolor: 'action.hover', fontFamily: "'Roboto Mono', monospace",
                            whiteSpace: 'nowrap',
                        }}>{item.label}</Box>
                    </Box>
                ))}
                {filtered.length === 0 && (
                    <Box sx={{ p: 2, textAlign: 'center', opacity: 0.5 }}>
                        {strings?.label?.noResults || 'No results'}
                    </Box>
                )}
            </Box>
        </Dialog>
    )
}
