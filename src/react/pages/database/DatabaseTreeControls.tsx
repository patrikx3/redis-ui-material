import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { Box, Tooltip, Menu, MenuItem, Divider, IconButton, useTheme } from '@mui/material'
import {
    KeyboardArrowDown, KeyboardArrowUp, Refresh, Settings,
    ArrowDropDown, SkipPrevious, KeyboardArrowLeft, KeyboardArrowRight,
    SkipNext, Search, Clear, Add, MoreVert, FileDownload, FileUpload, DeleteSweep,
} from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore, getPages, getFilteredKeys } from '../../stores/redis-state.store'
import { useSettingsStore } from '../../stores/settings.store'
import { useCommonStore, emitTreeEvent } from '../../stores/common.store'
import { useMainCommandStore } from '../../stores/main-command.store'
import { request } from '../../stores/socket.service'
import { useOverlayStore } from '../../stores/overlay.store'
import TreeSettingsDialog from '../../dialogs/TreeSettingsDialog'
import KeyImportDialog from '../../dialogs/KeyImportDialog'

// Icon button styles — will be set per-instance using theme colors
const iconBtnBase = {
    p: 0, width: 24, height: 24, minWidth: 24, minHeight: 24,
    borderRadius: '50%',
}

export default function DatabaseTreeControls() {
    const strings = useI18nStore(s => s.strings)
    const keysRaw = useRedisStateStore(s => s.keysRaw)
    const search = useRedisStateStore(s => s.search)
    const page = useRedisStateStore(s => s.page)
    const cfg = useRedisStateStore(s => s.cfg)
    const connection = useRedisStateStore(s => s.connection)
    const redisTreeDivider = useSettingsStore(s => s.redisTreeDivider)
    const searchClientSide = useSettingsStore(s => s.searchClientSide)
    const pageCount = useSettingsStore(s => s.pageCount)
    const { toast, generalHandleError } = useCommonStore()
    const { refresh, addKey: cmdAddKey } = useMainCommandStore()
    const overlay = useOverlayStore()
    const muiTheme = useTheme()

    const iconBtnSx = { ...iconBtnBase, color: muiTheme.p3xr.treecontrolIconColor }
    const primaryIconBtnSx = { ...iconBtnBase, color: muiTheme.palette.primary.main }

    // p3xr-input base style
    const inputBase: React.CSSProperties = {
        boxSizing: 'border-box',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 1,
        borderColor: muiTheme.p3xr.inputBorderColor,
        background: muiTheme.p3xr.inputBg,
        color: muiTheme.p3xr.inputColor,
        outline: 'none',
        fontFamily: "'Roboto Mono', monospace",
        fontSize: 12,
    }
    // Compact: pager + divider (no padding)
    const inputCompact: React.CSSProperties = { ...inputBase, padding: 0 }
    // Normal: search (with padding)
    const inputStyle: React.CSSProperties = { ...inputBase, padding: 3 }

    const isReadonly = connection?.readonly === true
    const keyCount = Array.isArray(keysRaw) ? keysRaw.length : 0
    const treeDividers: string[] = Array.isArray(cfg?.treeDividers) ? cfg.treeDividers : []
    const pages = getPages()

    const [localSearch, setLocalSearch] = useState(search || '')
    const [localDivider, setLocalDivider] = useState(redisTreeDivider || ':')
    const [localPage, setLocalPage] = useState(page || 1)
    const dividerTimerRef = useRef<any>(null)

    // Sync from store
    useEffect(() => { setLocalSearch(search || '') }, [search])
    useEffect(() => { setLocalDivider(redisTreeDivider || ':') }, [redisTreeDivider])
    useEffect(() => { setLocalPage(page || 1) }, [page])

    // --- Expand menu ---
    const [expandAnchor, setExpandAnchor] = useState<null | HTMLElement>(null)

    // --- Divider menu ---
    const [dividerAnchor, setDividerAnchor] = useState<null | HTMLElement>(null)

    // --- Actions menu ---
    const [actionsAnchor, setActionsAnchor] = useState<null | HTMLElement>(null)

    // --- Tree settings dialog ---
    const [treeSettingsOpen, setTreeSettingsOpen] = useState(false)

    // --- Import dialog ---
    const [importDialogOpen, setImportDialogOpen] = useState(false)
    const [importDialogData, setImportDialogData] = useState<any>(null)

    // --- Key count text ---
    const keyCountText = useMemo(() => {
        const fn = strings?.status?.keyCount
        return typeof fn === 'function' ? fn({ keyCount }) : String(keyCount)
    }, [strings, keyCount])

    // --- Search ---
    const searchPlaceholder = useMemo(() => {
        const s = strings?.page?.treeControls?.search
        return searchClientSide
            ? (s?.placeholderClient || 'Search keys')
            : (s?.placeholderServer || 'Search keys on server')
    }, [strings, searchClientSide])

    const onSearchChange = useCallback(async () => {
        useRedisStateStore.setState({ search: localSearch, page: 1 })
        if (searchClientSide) useRedisStateStore.setState({ redisChanged: true })
        await refresh()
    }, [localSearch, searchClientSide, refresh])

    const clearSearch = useCallback(async () => {
        setLocalSearch('')
        useRedisStateStore.setState({ search: '', page: 1 })
        if (searchClientSide) useRedisStateStore.setState({ redisChanged: true })
        await refresh()
    }, [searchClientSide, refresh])

    // --- Divider ---
    const onDividerInputChange = useCallback((value: string) => {
        setLocalDivider(value)
        useSettingsStore.getState().setSetting('p3xr-main-treecontrol-divider', value)
        clearTimeout(dividerTimerRef.current)
        dividerTimerRef.current = setTimeout(() => {
            useRedisStateStore.setState({ redisChanged: true })
        }, 666)
    }, [])

    const setDivider = useCallback((value: string) => {
        setLocalDivider(value)
        useSettingsStore.getState().setSetting('p3xr-main-treecontrol-divider', value)
        useRedisStateStore.setState({ redisChanged: true })
        setDividerAnchor(null)
    }, [])

    // --- Pagination ---
    const pageAction = useCallback((action: 'first' | 'prev' | 'next' | 'last') => {
        const currentPage = useRedisStateStore.getState().page ?? 1
        const totalPages = getPages()
        let newPage = currentPage
        switch (action) {
            case 'first': newPage = 1; break
            case 'prev': newPage = Math.max(1, currentPage - 1); break
            case 'next': newPage = Math.min(totalPages, currentPage + 1); break
            case 'last': newPage = totalPages; break
        }
        setLocalPage(newPage)
        useRedisStateStore.setState({ page: newPage, redisChanged: true })
    }, [])

    const onPageInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = parseInt(e.target.value, 10)
        const totalPages = getPages()
        const clamped = isNaN(parsed) ? 1 : Math.max(1, Math.min(totalPages, parsed))
        setLocalPage(clamped)
        useRedisStateStore.setState({ page: clamped, redisChanged: true })
    }, [])

    // --- Expand/Collapse ---
    const treeExpandToLevel = useCallback((level: number) => {
        setExpandAnchor(null)
        setTimeout(() => emitTreeEvent('expand-level-' + level))
    }, [])

    const treeExpandAll = useCallback(() => {
        emitTreeEvent('expand-all')
        setExpandAnchor(null)
    }, [])

    const treeCollapseAll = useCallback(() => {
        emitTreeEvent('collapse-all')
    }, [])

    // --- Export ---
    const exportKeys = useCallback(async () => {
        setActionsAnchor(null)
        if (!Array.isArray(keysRaw) || keysRaw.length === 0) {
            toast(strings?.label?.noKeysToExport)
            return
        }
        try {
            overlay.show({ message: strings?.label?.exportProgress })
            const response = await request({ action: 'key/export', payload: { keys: keysRaw } })
            const json = JSON.stringify(response.data, null, 2)
            const blob = new Blob([json], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            const connName = connection?.name || 'redis'
            const db = useRedisStateStore.getState().currentDatabase ?? 0
            a.download = `${connName}-db${db}-export.json`
            a.click()
            URL.revokeObjectURL(url)
            toast(strings?.status?.exportDone)
        } catch (e) {
            generalHandleError(e)
        } finally {
            overlay.hide()
        }
    }, [keysRaw, connection, strings, toast, generalHandleError, overlay])

    // --- Import ---
    const importKeys = useCallback(() => {
        setActionsAnchor(null)
        const input = document.createElement('input')
        input.type = 'file'
        input.accept = '.json'
        input.onchange = () => {
            const file = input.files?.[0]
            if (!file) return
            const reader = new FileReader()
            reader.onload = (e: any) => {
                try {
                    const parsed = JSON.parse(e.target.result)
                    if (!parsed?.keys || !Array.isArray(parsed.keys) || parsed.keys.length === 0) {
                        toast(strings?.label?.importNoKeys)
                        return
                    }
                    setImportDialogData(parsed)
                    setImportDialogOpen(true)
                } catch (err: any) {
                    if (err !== undefined && err !== null) generalHandleError(err)
                }
            }
            reader.readAsText(file)
        }
        input.click()
    }, [strings, toast, generalHandleError])

    const handleImportDialogClose = useCallback(async (result: any) => {
        setImportDialogOpen(false)
        setImportDialogData(null)
        if (!result?.pending) return
        try {
            overlay.show({ message: strings?.label?.importProgress })
            const response = await request({
                action: 'key/import',
                payload: { keys: result.keys, conflictMode: result.conflictMode },
            })
            const data = response.data
            const statusFn = strings?.status?.importDone
            const message = typeof statusFn === 'function'
                ? statusFn(data)
                : `Import complete: ${data.created} created, ${data.skipped} skipped, ${data.errors} errors`
            toast(message)
            await refresh()
        } catch (e: any) {
            if (e !== undefined && e !== null) generalHandleError(e)
        } finally {
            overlay.hide()
        }
    }, [strings, toast, refresh, generalHandleError, overlay])

    // --- Delete search keys ---
    const deleteSearchLabel = useMemo(() => {
        if (localSearch.length > 0) {
            const fn = strings?.intention?.deleteSearchKeys
            return typeof fn === 'function' ? fn({ count: keyCount }) : `Delete ${keyCount} matching keys`
        }
        const fn = strings?.intention?.deleteAllKeysMenu
        return typeof fn === 'function' ? fn({ count: keyCount }) : `Delete all ${keyCount} keys`
    }, [strings, localSearch, keyCount])

    const exportLabel = useMemo(() => {
        if (localSearch.length > 0) {
            const fn = strings?.intention?.exportSearchResults
            return typeof fn === 'function' ? fn({ count: keyCount }) : `Export ${keyCount} results`
        }
        const fn = strings?.intention?.exportAllKeys
        return typeof fn === 'function' ? fn({ count: keyCount }) : `Export all ${keyCount} keys`
    }, [strings, localSearch, keyCount])

    const deleteSearchKeys = useCallback(async () => {
        setActionsAnchor(null)
        const searchStartsWith = useSettingsStore.getState().searchStartsWith
        let match: string
        if (localSearch.length > 0) {
            match = searchStartsWith ? localSearch + '*' : '*' + localSearch + '*'
        } else {
            match = '*'
        }
        try {
            const confirmFn = strings?.confirm?.deleteSearchKeys
            const confirmMsg = typeof confirmFn === 'function'
                ? confirmFn({ count: keyCount, pattern: match })
                : `Are you sure to delete all keys matching "${match}"? Found ${keyCount} keys.`
            await useCommonStore.getState().confirm({ message: confirmMsg })
            overlay.show({ message: strings?.label?.deletingSearchKeys })
            const response = await request({ action: 'key/delete-search-keys', payload: { match } })
            const deletedCount = response.deletedCount || 0
            const statusFn = strings?.status?.deletedSearchKeys
            const message = typeof statusFn === 'function'
                ? statusFn({ count: deletedCount })
                : `Deleted ${deletedCount} keys`
            toast(message)
            await refresh()
        } catch (e: any) {
            if (e !== undefined && e !== null) generalHandleError(e)
        } finally {
            overlay.hide()
        }
    }, [localSearch, keyCount, strings, toast, refresh, generalHandleError, overlay])

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider', minHeight: 24 }}>
            {/* Leading row: controls + pager, single line */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', minHeight: 31 }}>
                <Tooltip title={strings?.intention?.extend} placement="top" enterDelay={300}>
                    <IconButton size="small" sx={primaryIconBtnSx} onClick={e => setExpandAnchor(e.currentTarget)}>
                        <KeyboardArrowDown fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Menu anchorEl={expandAnchor} open={!!expandAnchor} onClose={() => setExpandAnchor(null)}>
                    {[1,2,3,4,5].map(n => (
                        <MenuItem key={n} onClick={() => treeExpandToLevel(n)}>
                            {strings?.page?.treeControls?.level} {n}
                        </MenuItem>
                    ))}
                    <Divider />
                    <MenuItem onClick={treeExpandAll}>{strings?.page?.treeControls?.expandAll}</MenuItem>
                </Menu>

                <Tooltip title={strings?.page?.treeControls?.collapseAll} placement="top" enterDelay={300}>
                    <IconButton size="small" sx={iconBtnSx} onClick={treeCollapseAll}>
                        <KeyboardArrowUp fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title={strings?.intention?.refresh} placement="top" enterDelay={300}>
                    <IconButton size="small" sx={iconBtnSx} onClick={() => refresh()}>
                        <Refresh fontSize="small" />
                    </IconButton>
                </Tooltip>

                <Tooltip title={strings?.form?.treeSettings?.label?.formName} placement="top" enterDelay={300}>
                    <IconButton size="small" sx={iconBtnSx} onClick={() => setTreeSettingsOpen(true)}>
                        <Settings fontSize="small" />
                    </IconButton>
                </Tooltip>
                <TreeSettingsDialog open={treeSettingsOpen} onClose={() => setTreeSettingsOpen(false)} />
                <KeyImportDialog open={importDialogOpen} data={importDialogData} onClose={handleImportDialogClose} />

                {/* Divider input */}
                <Tooltip title={strings?.form?.treeSettings?.field?.treeSeparator} placement="top" enterDelay={300}>
                    <input
                        value={localDivider}
                        onChange={e => onDividerInputChange(e.target.value)}
                        style={{
                            ...inputCompact,
                            width: 23, fontFamily: "'Roboto Mono', monospace", fontSize: 14,
                            fontWeight: 500, textAlign: 'center', verticalAlign: 'middle',
                        }}
                    />
                </Tooltip>

                {treeDividers.length > 0 && (
                    <>
                        <Tooltip title={strings?.form?.treeSettings?.field?.treeSeparatorSelector} placement="top" enterDelay={300}>
                            <IconButton size="small" sx={{ ...iconBtnSx, width: 14 }} onClick={e => setDividerAnchor(e.currentTarget)}>
                                <ArrowDropDown sx={{ fontSize: 18 }} />
                            </IconButton>
                        </Tooltip>
                        <Menu anchorEl={dividerAnchor} open={!!dividerAnchor} onClose={() => setDividerAnchor(null)}
                            slotProps={{ paper: { sx: {
                                minWidth: '20px !important', maxWidth: '40px !important',
                                transform: 'translateX(-23px) !important',
                                marginTop: '4px',
                            } }, list: { sx: { p: 0 } } }}>
                            {treeDividers.map(d => (
                                <MenuItem key={d} onClick={() => setDivider(d)}
                                    sx={{
                                        minHeight: 28, height: 28, p: '0 !important', minWidth: 0,
                                        textAlign: 'center', justifyContent: 'center',
                                        fontFamily: "'Roboto Mono', monospace", fontWeight: 500, fontSize: 14,
                                    }}>
                                    {d === '' ? '(empty)' : d}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                )}

                {/* Pager or key count — same flex row */}
                {pages > 1 ? (
                    <Tooltip title={keyCountText} placement="top" enterDelay={300}>
                    <Box component="span" sx={{
                        display: 'inline-flex', alignItems: 'center',
                        whiteSpace: 'nowrap', ml: '2px',
                    }}>
                    <Tooltip title={strings?.page?.treeControls?.pager?.first} enterDelay={300}>
                        <IconButton size="small" sx={primaryIconBtnSx} onClick={() => pageAction('first')}>
                            <SkipPrevious sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={strings?.page?.treeControls?.pager?.prev} enterDelay={300}>
                        <IconButton size="small" sx={iconBtnSx} onClick={() => pageAction('prev')}>
                            <KeyboardArrowLeft sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Tooltip>
                    <input
                        type="number" step={1} min={1} max={pages} value={localPage}
                        onChange={onPageInputChange}
                        className="p3xr-pager-input"
                        style={{
                            ...inputCompact,
                            width: 32,
                            height: 20,
                            textAlign: 'center',
                            MozAppearance: 'textfield',
                        }}
                    /><span style={{ fontSize: 12, fontFamily: "'Roboto Mono', monospace" }}>/ {pages}</span>
                    <Tooltip title={strings?.page?.treeControls?.pager?.next} enterDelay={300}>
                        <IconButton size="small" sx={iconBtnSx} onClick={() => pageAction('next')}>
                            <KeyboardArrowRight sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={strings?.page?.treeControls?.pager?.last} enterDelay={300}>
                        <IconButton size="small" sx={primaryIconBtnSx} onClick={() => pageAction('last')}>
                            <SkipNext sx={{ fontSize: 18 }} />
                        </IconButton>
                    </Tooltip>
                </Box>
                </Tooltip>
                ) : (
                    <Box component="span" sx={{ ml: 'auto', opacity: 0.5, fontSize: 12 }}>
                        {keyCountText}&nbsp;
                    </Box>
                )}
            </Box>

            {/* Search row */}
            <Box sx={{ clear: 'both', p: '5px', textAlign: 'left', lineHeight: '24px', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <input
                    placeholder={searchPlaceholder}
                    value={localSearch}
                    onChange={e => setLocalSearch(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') onSearchChange() }}
                    style={{
                        ...inputStyle,
                        flex: 1, minWidth: 0,
                        verticalAlign: 'middle',
                    }}
                />

                <Tooltip title={strings?.page?.treeControls?.search?.search} placement="top" enterDelay={300}>
                    <IconButton size="small" sx={primaryIconBtnSx} onClick={onSearchChange}>
                        <Search fontSize="small" />
                    </IconButton>
                </Tooltip>

                {localSearch.length > 0 && (
                    <Tooltip title={strings?.page?.treeControls?.search?.clear} placement="top" enterDelay={300}>
                        <IconButton size="small" sx={primaryIconBtnSx} onClick={clearSearch}>
                            <Clear fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}

                {!isReadonly && (
                    <Tooltip title={strings?.intention?.addKeyRoot} placement="top" enterDelay={300}>
                        <Add
                            onClick={e => cmdAddKey({ event: e.nativeEvent })}
                            sx={{ fontSize: 24, cursor: 'pointer', color: muiTheme.p3xr.commonWarnColor }}
                        />
                    </Tooltip>
                )}

                <IconButton size="small" sx={iconBtnSx} onClick={e => setActionsAnchor(e.currentTarget)}>
                    <MoreVert fontSize="small" />
                </IconButton>

                <Menu anchorEl={actionsAnchor} open={!!actionsAnchor} onClose={() => setActionsAnchor(null)}>
                    <MenuItem onClick={exportKeys}>
                        <FileDownload sx={{ mr: 1 }} fontSize="small" />
                        {exportLabel}
                    </MenuItem>
                    {localSearch.length > 0 && (
                        <Box sx={{ px: 2, pb: 1, fontSize: 11, opacity: 0.5, fontStyle: 'italic', pointerEvents: 'none', lineHeight: 1.3 }}>
                            {strings?.label?.exportSearchHint}
                        </Box>
                    )}
                    {!isReadonly && (
                        <MenuItem onClick={importKeys}>
                            <FileUpload sx={{ mr: 1 }} fontSize="small" />
                            {strings?.intention?.importKeys}
                        </MenuItem>
                    )}
                    {!isReadonly && localSearch.length > 0 && (
                        <Box sx={{ px: 2, pb: 1, fontSize: 11, opacity: 0.5, fontStyle: 'italic', pointerEvents: 'none', lineHeight: 1.3 }}>
                            {strings?.label?.importSearchHint}
                        </Box>
                    )}
                    {!isReadonly && <Divider />}
                    {!isReadonly && (
                        <MenuItem onClick={deleteSearchKeys}>
                            <DeleteSweep sx={{ mr: 1 }} fontSize="small" />
                            {deleteSearchLabel}
                        </MenuItem>
                    )}
                    {!isReadonly && localSearch.length > 0 && (
                        <Box sx={{ px: 2, pb: 1, fontSize: 11, opacity: 0.5, fontStyle: 'italic', pointerEvents: 'none', lineHeight: 1.3 }}>
                            {strings?.label?.deleteSearchHint}
                        </Box>
                    )}
                </Menu>
            </Box>
        </Box>
    )
}
