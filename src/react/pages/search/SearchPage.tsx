/**
 * Search page — exact port of Angular search.component.
 * RediSearch: index selection, query with AI fallback, results with paging,
 * index info, create/drop index.
 */
import { useState, useEffect, useCallback } from 'react'
import {
    Box, TextField, MenuItem, Select, FormControl, InputLabel, Button, Tooltip,
    List, ListItem, Divider, useMediaQuery, useTheme, FormControlLabel, Switch,
} from '@mui/material'
import { Search, Delete, Add, Remove, SkipPrevious, SkipNext, KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { parseRedisVersion } from '../../../core/redis-version'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useCommonStore } from '../../stores/common.store'
import { useOverlayStore } from '../../stores/overlay.store'
import { request } from '../../stores/socket.service'
import P3xrAccordion from '../../components/P3xrAccordion'
import P3xrButton from '../../components/P3xrButton'

interface SchemaField { name: string; type: string; sortable: boolean }

export default function SearchPage() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm, generalHandleError } = useCommonStore()
    const overlay = useOverlayStore()
    const isGtSm = useMediaQuery('(min-width: 960px)')
    const isReadonly = connection?.readonly === true

    const [indexes, setIndexes] = useState<string[]>([])
    const [selectedIndex, setSelectedIndex] = useState('')
    const [query, setQuery] = useState('*')
    const [offset, setOffset] = useState(0)
    const limit = 20
    const [total, setTotal] = useState(0)
    const [results, setResults] = useState<any[]>([])
    const [indexInfo, setIndexInfo] = useState<any>(null)
    const [searchDone, setSearchDone] = useState(false)
    const [aiLoading, setAiLoading] = useState(false)

    // Hybrid search (FT.HYBRID, Redis 8.4+)
    const [hybridMode, setHybridMode] = useState(false)
    const [vectorField, setVectorField] = useState('')
    const [vectorValues, setVectorValues] = useState('')
    const [vectorCount, setVectorCount] = useState(10)

    // Create index
    const [newIndexName, setNewIndexName] = useState('')
    const [newIndexPrefix, setNewIndexPrefix] = useState('')
    const [newIndexFields, setNewIndexFields] = useState<SchemaField[]>([{ name: '', type: 'TEXT', sortable: false }])

    const pages = Math.ceil(total / limit)
    const currentPage = Math.floor(offset / limit) + 1

    const getDocKeys = (doc: any) => Object.keys(doc).filter(k => k !== '_key')

    // --- Load indexes ---
    const loadIndexes = useCallback(async () => {
        try {
            const resp = await request({ action: 'search/list', payload: {} })
            setIndexes(resp.data)
            return resp.data as string[]
        } catch { return [] }
    }, [])

    const loadIndexInfo = useCallback(async (idx?: string) => {
        const index = idx || selectedIndex
        if (!index) return
        try {
            const resp = await request({ action: 'search/index-info', payload: { index } })
            setIndexInfo(resp.data)
        } catch (e) { generalHandleError(e) }
    }, [selectedIndex, generalHandleError])

    const doSearch = useCallback(async (off?: number) => {
        if (!selectedIndex || !query) return
        try {
            let resp: any
            if (hybridMode && vectorField && vectorValues) {
                const values = vectorValues.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v))
                resp = await request({
                    action: 'search/hybrid',
                    payload: { index: selectedIndex, query, vectorField, vectorValues: values, count: vectorCount, offset: off ?? offset, limit },
                })
            } else {
                resp = await request({
                    action: 'search/query',
                    payload: { index: selectedIndex, query, offset: off ?? offset, limit },
                })
            }
            setTotal(resp.data.total)
            setResults(resp.data.docs)
        } catch (e) {
            generalHandleError(e)
            setResults([]); setTotal(0)
        } finally { setSearchDone(true) }
    }, [selectedIndex, query, offset, generalHandleError])

    const handleAiQuery = useCallback(async (prompt: string) => {
        if (!prompt) return
        setAiLoading(true)
        try {
            const resp = await request({
                action: 'ai/redis-query',
                payload: { prompt, context: { indexes, schema: indexInfo } },
            })
            setQuery(resp.command)
            if (resp.explanation) toast(resp.explanation)
            setOffset(0)
            // Search with new query
            const sr = await request({ action: 'search/query', payload: { index: selectedIndex, query: resp.command, offset: 0, limit } })
            setTotal(sr.data.total); setResults(sr.data.docs); setSearchDone(true)
            await loadIndexInfo()
        } catch (e) { generalHandleError(e) }
        finally { setAiLoading(false) }
    }, [indexes, indexInfo, selectedIndex, toast, loadIndexInfo, generalHandleError])

    const handleSearchEnter = useCallback(async () => {
        const q = (query || '').trim()
        if (/^ai:\s*/i.test(q)) { await handleAiQuery(q.replace(/^ai:\s*/i, '').trim()); return }
        try {
            await Promise.all([doSearch(0), loadIndexInfo()])
        } catch {
            if (q.length > 2 && q !== '*' && /\s/.test(q)) {
                overlay.show()
                try { await handleAiQuery(q) } finally { overlay.hide() }
            }
        }
    }, [query, doSearch, loadIndexInfo, handleAiQuery, overlay])

    const pageAction = useCallback((action: string) => {
        let newOffset = offset
        switch (action) {
            case 'first': newOffset = 0; break
            case 'prev': newOffset = Math.max(0, offset - limit); break
            case 'next': newOffset = Math.min((pages - 1) * limit, offset + limit); break
            case 'last': newOffset = (pages - 1) * limit; break
        }
        setOffset(newOffset)
        doSearch(newOffset)
    }, [offset, pages, doSearch])

    const dropIndex = useCallback(async () => {
        if (!selectedIndex) return
        try {
            await confirm({ message: strings?.confirm?.dropIndex })
            await request({ action: 'search/index-drop', payload: { index: selectedIndex } })
            toast(strings?.status?.indexDropped)
            setSelectedIndex(''); setResults([]); setTotal(0); setSearchDone(false); setIndexInfo(null)
            await loadIndexes()
        } catch (e: any) { if (e !== undefined) generalHandleError(e) }
    }, [selectedIndex, strings, confirm, toast, loadIndexes, generalHandleError])

    const addField = () => setNewIndexFields(f => [...f, { name: '', type: 'TEXT', sortable: false }])

    const confirmRemoveField = useCallback(async (index: number) => {
        try {
            await confirm({ message: (strings?.intention?.delete) + '?' })
            setNewIndexFields(f => f.filter((_, i) => i !== index))
        } catch (e: any) { if (e !== undefined) generalHandleError(e) }
    }, [strings, confirm, generalHandleError])

    const createIndex = useCallback(async () => {
        if (!newIndexName.trim()) return
        const schema = newIndexFields.filter(f => f.name.trim())
        if (schema.length === 0) return
        try {
            await request({
                action: 'search/index-create',
                payload: { name: newIndexName.trim(), prefix: newIndexPrefix.trim() || undefined, schema },
            })
            toast(strings?.status?.indexCreated)
            setNewIndexName(''); setNewIndexPrefix('')
            setNewIndexFields([{ name: '', type: 'TEXT', sortable: false }])
            await loadIndexes()
        } catch (e) { generalHandleError(e) }
    }, [newIndexName, newIndexPrefix, newIndexFields, strings, toast, loadIndexes, generalHandleError])

    // --- Init + refresh on connection change ---
    const connectionId = connection?.id
    useEffect(() => {
        setSelectedIndex('')
        setResults([])
        setTotal(0)
        setSearchDone(false)
        setIndexInfo(null)
        loadIndexes().then(idxs => {
            if (idxs.length > 0) {
                setSelectedIndex(idxs[0])
                loadIndexInfo(idxs[0])
            }
        })
    }, [connectionId]) // eslint-disable-line react-hooks/exhaustive-deps

    const onIndexChange = (idx: string) => {
        setSelectedIndex(idx)
        setOffset(0); setIndexInfo(null)
        loadIndexInfo(idx)
    }

    // --- Render ---
    const s = strings?.page?.search || {} as any

    const ActionBtn = ({ icon, label, color = 'primary' as const, onClick, disabled }: {
        icon: React.ReactNode; label: string; color?: 'primary' | 'secondary'; onClick: () => void; disabled?: boolean
    }) => isGtSm ? (
        <Button variant="contained" color={color} size="small" onClick={onClick} disabled={disabled} sx={{ gap: '3px' }}>
            {icon}<span>{label}</span>
        </Button>
    ) : (
        <Tooltip title={label} placement="top">
            <span>
                <Button variant="contained" color={color} onClick={onClick} disabled={disabled}
                    sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                    {icon}
                </Button>
            </span>
        </Tooltip>
    )

    return (
        <Box>
            {/* Search Query */}
            <P3xrAccordion title={s.title} accordionKey="search-query">
                <Box sx={{ p: 2 }}>
                    {indexes.length === 0 && (
                        <Box sx={{ opacity: 0.5 }}>{s.noIndex}</Box>
                    )}
                    {indexes.length > 0 && (
                        <>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <FormControl fullWidth size="small">
                                    <InputLabel>{s.index}</InputLabel>
                                    <Select value={selectedIndex} label={s.index}
                                        onChange={e => onIndexChange(e.target.value)}>
                                        {indexes.map(idx => <MenuItem key={idx} value={idx}>{idx}</MenuItem>)}
                                    </Select>
                                </FormControl>
                                {!isReadonly && selectedIndex && (
                                    <Tooltip title={s.dropIndex}>
                                        <Button variant="contained" color="error" onClick={dropIndex}
                                            sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                                            <Delete fontSize="small" />
                                        </Button>
                                    </Tooltip>
                                )}
                            </Box>
                            <TextField fullWidth size="small" sx={{ mt: 1 }} label={s.query}
                                value={query} onChange={e => setQuery(e.target.value)} disabled={aiLoading}
                                onKeyDown={e => { if (e.key === 'Enter') { setOffset(0); handleSearchEnter() } }} />

                            {parseRedisVersion(useRedisStateStore.getState().info?.server?.redis_version).isAtLeast(8, 4) && (
                                <>
                                    <FormControlLabel sx={{ mt: 1 }}
                                        control={<Switch checked={hybridMode} onChange={(_, v) => setHybridMode(v)} color="primary" />}
                                        label={s.hybridMode} />
                                    {hybridMode && (
                                        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                                            <TextField size="small" sx={{ flex: 1, minWidth: 150 }}
                                                label={s.vectorField} placeholder="embedding"
                                                value={vectorField} onChange={e => setVectorField(e.target.value)} />
                                            <TextField size="small" sx={{ flex: 2, minWidth: 200 }}
                                                label={s.vectorValues} placeholder="0.1, 0.2, 0.3, ..."
                                                value={vectorValues} onChange={e => setVectorValues(e.target.value)} />
                                            <TextField size="small" sx={{ width: 80 }} type="number"
                                                label="Count"
                                                value={vectorCount} onChange={e => setVectorCount(parseInt(e.target.value) || 10)} />
                                        </Box>
                                    )}
                                </>
                            )}

                            <Box sx={{ mt: 1, textAlign: 'right' }}>
                                <ActionBtn icon={<Search fontSize="small" />}
                                    label={aiLoading ? (strings?.label?.aiTranslating) : (s.title)}
                                    onClick={() => { setOffset(0); handleSearchEnter() }} disabled={aiLoading} />
                            </Box>
                        </>
                    )}
                </Box>
            </P3xrAccordion>

            {/* Results - empty */}
            {searchDone && total === 0 && (
                <>
                    <Box sx={{ mt: 1 }} />
                    <P3xrAccordion title={`${s.results} (0)`} accordionKey="search-results">
                        <Box sx={{ p: 2, opacity: 0.5 }}>{strings?.label?.noResults}</Box>
                    </P3xrAccordion>
                </>
            )}

            {/* Results - with data */}
            {(results.length > 0 || total > 0) && (
                <>
                    <Box sx={{ mt: 1 }} />
                    <P3xrAccordion title={`${s.results} (${total})`} accordionKey="search-results"
                        actions={pages > 1 ? (<>
                            <P3xrButton icon={<SkipPrevious sx={{ fontSize: 18 }} />} label="" color="inherit"
                                onClick={(e) => { e.stopPropagation(); pageAction('first') }} />
                            <P3xrButton icon={<KeyboardArrowLeft sx={{ fontSize: 18 }} />} label="" color="inherit"
                                onClick={(e) => { e.stopPropagation(); pageAction('prev') }} />
                            <Box component="span" sx={{ fontSize: 12, opacity: 0.7 }}>{currentPage} / {pages}</Box>
                            <P3xrButton icon={<KeyboardArrowRight sx={{ fontSize: 18 }} />} label="" color="inherit"
                                onClick={(e) => { e.stopPropagation(); pageAction('next') }} />
                            <P3xrButton icon={<SkipNext sx={{ fontSize: 18 }} />} label="" color="inherit"
                                onClick={(e) => { e.stopPropagation(); pageAction('last') }} />
                        </>) : undefined}>
                        <List disablePadding>
                            {results.map((doc: any) => (
                                <Box key={doc._key}>
                                    <ListItem sx={{ px: 2, py: 1 }}>
                                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                                            <Box sx={{ flex: 1 }}>
                                                <Box component="kbd" sx={{
                                                    px: '6px', py: '2px', borderRadius: '4px', fontSize: 11,
                                                    bgcolor: 'action.hover', fontFamily: "'Roboto Mono', monospace",
                                                }}>{doc._key}</Box>
                                            </Box>
                                            <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12 }}>
                                                {getDocKeys(doc).map((field, i) => (
                                                    <span key={field}>
                                                        {field}: {doc[field]}
                                                        {i < getDocKeys(doc).length - 1 && ' \u00B7 '}
                                                    </span>
                                                ))}
                                            </Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </List>
                    </P3xrAccordion>
                </>
            )}

            {/* Index Info */}
            {selectedIndex && indexInfo && (
                <>
                    <Box sx={{ mt: 1 }} />
                    <P3xrAccordion title={`${s.indexInfo}: ${selectedIndex}`} accordionKey="search-index-info"
                        actions={!isReadonly ? (
                            <P3xrButton icon={<Delete sx={{ fontSize: 18 }} />} label={s.dropIndex} color="inherit"
                                onClick={(e) => { e.stopPropagation(); dropIndex() }} />
                        ) : undefined}>
                        <List disablePadding>
                            {getDocKeys(indexInfo).map(key => (
                                <Box key={key}>
                                    <ListItem sx={{ px: 2, py: 1 }}>
                                        <Box sx={{ display: 'flex', width: '100%' }}>
                                            <Box sx={{ flex: 1 }}>{key}</Box>
                                            <Box sx={{ fontFamily: "'Roboto Mono', monospace", fontSize: 12 }}>{JSON.stringify(indexInfo[key])}</Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </List>
                    </P3xrAccordion>
                </>
            )}

            {/* Create Index */}
            {!isReadonly && (
                <>
                    <Box sx={{ mt: 1 }} />
                    <P3xrAccordion title={s.createIndex} accordionKey="search-create-index">
                        <Box sx={{ p: 2 }}>
                            <TextField fullWidth size="small" label={s.indexName}
                                value={newIndexName} onChange={e => setNewIndexName(e.target.value)} />
                            <TextField fullWidth size="small" sx={{ mt: 1 }} label={s.prefix}
                                placeholder="e.g. doc:" value={newIndexPrefix} onChange={e => setNewIndexPrefix(e.target.value)} />

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1 }}>
                                <strong>Schema</strong>
                                <Tooltip title="Add">
                                    <Button variant="contained" color="primary" onClick={addField}
                                        sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                                        <Add fontSize="small" />
                                    </Button>
                                </Tooltip>
                            </Box>

                            {newIndexFields.map((field, i) => (
                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5, flexWrap: 'wrap' }}>
                                    <TextField size="small" sx={{ flex: 1, minWidth: 120 }} label={s.fieldName}
                                        value={field.name} onChange={e => {
                                            const f = [...newIndexFields]; f[i] = { ...f[i], name: e.target.value }; setNewIndexFields(f)
                                        }} />
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexShrink: 0 }}>
                                        <FormControl size="small" sx={{ width: 130 }}>
                                            <InputLabel>{strings?.label?.type}</InputLabel>
                                            <Select value={field.type} label={strings?.label?.type}
                                                onChange={e => {
                                                    const f = [...newIndexFields]; f[i] = { ...f[i], type: e.target.value }; setNewIndexFields(f)
                                                }}>
                                                {['TEXT', 'NUMERIC', 'TAG', 'GEO', 'VECTOR'].map(t =>
                                                    <MenuItem key={t} value={t}>{t}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                        <Tooltip title={strings?.intention?.delete}>
                                            <span>
                                                <Button variant="contained" color="error" onClick={() => confirmRemoveField(i)}
                                                    disabled={newIndexFields.length <= 1}
                                                    sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                                                    <Remove fontSize="small" />
                                                </Button>
                                            </span>
                                        </Tooltip>
                                    </Box>
                                </Box>
                            ))}

                            <Box sx={{ mt: 1, textAlign: 'right' }}>
                                <ActionBtn icon={<Add fontSize="small" />} label={s.createIndex}
                                    color="secondary" onClick={createIndex} disabled={!newIndexName.trim()} />
                            </Box>
                        </Box>
                    </P3xrAccordion>
                </>
            )}

            <Box sx={{ height: 64 }} />
        </Box>
    )
}
