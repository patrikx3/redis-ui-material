import { useState, useEffect, useRef } from 'react'
import { Box, TextField, List, ListItem, Divider, IconButton, Tooltip } from '@mui/material'
import { Search, Delete, Add, Refresh, CheckBox, CheckBoxOutlineBlank, Info, Person, DataArray } from '@mui/icons-material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { parseRedisVersion } from '../../../../core/redis-version'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps, createPaging, rePaging, Paging } from './key-type-base'
import KeyPagerInline from './KeyPagerInline'
import P3xrAccordion from '../../../components/P3xrAccordion'
import P3xrButton from '../../../components/P3xrButton'

export default function KeyVectorset({ response, value, keyName, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm } = useCommonStore()
    const readonly = connection?.readonly === true

    const [elements, setElements] = useState<any[]>([])
    const [paging, setPaging] = useState<Paging>(() => createPaging(0))
    const [simResults, setSimResults] = useState<Array<{ element: string; score: number }>>([])
    const [autoRefresh, setAutoRefresh] = useState(false)
    const [elementInput, setElementInput] = useState('')
    const [vectorInput, setVectorInput] = useState('')
    const [simCountInput, setSimCountInput] = useState(10)
    const [simFilterInput, setSimFilterInput] = useState('')
    const [simSearchInput, setSimSearchInput] = useState('')
    const [showAddForm, setShowAddForm] = useState(false)
    const autoRefreshRef = useRef<any>(null)

    // Parse info directly from value — no effect needed, computed on render
    const infoItems = (() => {
        try {
            let info: any
            if (typeof value === 'object' && value !== null && !ArrayBuffer.isView(value)) {
                info = value
            } else if (typeof value === 'string') {
                info = JSON.parse(value)
            } else if (ArrayBuffer.isView(value)) {
                info = JSON.parse(new TextDecoder().decode(value))
            }
            if (info && typeof info === 'object') {
                return Object.entries(info).map(([key, value]) => ({ key, value }))
            }
        } catch {}
        return []
    })()

    useEffect(() => {
        if (autoRefresh) {
            autoRefreshRef.current = setInterval(() => { onRefresh(); loadElements() }, 10000)
        } else {
            clearInterval(autoRefreshRef.current)
        }
        return () => clearInterval(autoRefreshRef.current)
    }, [autoRefresh])

    useEffect(() => {
        loadElements()
    }, [keyName])

    async function loadElements() {
        try {
            const resp: any = await request({
                action: 'vectorset-elements',
                payload: { key: keyName },
            })
            const elems = resp.elements || []
            setElements(elems)
            const p = rePaging(paging, elems.length)
            setPaging(p)
        } catch {
            setElements([])
        }
    }

    async function searchByElement() {
        if (!simSearchInput.trim()) return
        try {
            const resp: any = await request({
                action: 'vectorset-sim',
                payload: { key: keyName, mode: 'element', element: simSearchInput.trim(), count: simCountInput, filter: simFilterInput.trim() || undefined },
            })
            setSimResults(resp.results || [])
            toast(strings?.page?.key?.vectorset?.searchComplete || 'Search complete')
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function searchByVector() {
        if (!simSearchInput.trim()) return
        try {
            const values = simSearchInput.split(',').map(Number)
            const resp: any = await request({
                action: 'vectorset-sim',
                payload: { key: keyName, mode: 'vector', values, count: simCountInput, filter: simFilterInput.trim() || undefined },
            })
            setSimResults(resp.results || [])
            toast(strings?.page?.key?.vectorset?.searchComplete || 'Search complete')
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function getAttributes(element: string) {
        try {
            const resp: any = await request({
                action: 'vectorset-getattr',
                payload: { key: keyName, element },
            })
            const attrs = resp.attributes
            if (attrs && Object.keys(attrs).length > 0) {
                toast(`${element}: ${JSON.stringify(attrs)}`)
            } else {
                toast(`${element}: ${strings?.page?.key?.vectorset?.noAttributes || 'No attributes'}`)
            }
        } catch (e: any) {
            if (e?.message) toast(e.message)
        }
    }

    async function addElement() {
        if (!elementInput.trim() || !vectorInput.trim()) return
        try {
            await request({
                action: 'vectorset-add',
                payload: { key: keyName, element: elementInput.trim(), values: vectorInput.split(',').map(Number) },
            })
            toast(strings?.page?.key?.vectorset?.addedSuccessfully || 'Element added successfully')
            setElementInput('')
            setVectorInput('')
            onRefresh()
            loadElements()
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function removeElement(element: string) {
        try {
            await confirm({ message: strings?.confirm?.delete || 'Delete?' })
            await request({
                action: 'vectorset-remove',
                payload: { key: keyName, element },
            })
            toast(strings?.page?.key?.vectorset?.deletedSuccessfully || 'Element deleted successfully')
            onRefresh()
            loadElements()
        } catch (e: any) {
            if (e?.message) toast(e.message)
        }
    }

    async function searchByElementDirect(element: string) {
        try {
            const resp: any = await request({
                action: 'vectorset-sim',
                payload: { key: keyName, mode: 'element', element, count: simCountInput },
            })
            setSimResults(resp.results || [])
            toast(strings?.page?.key?.vectorset?.searchComplete || 'Search complete')
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    return (
        <Box className="p3xr-key-type-content">
            {/* INFO */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.vectorset?.info || 'Info'}
                accordionKey="vs-info"
                actions={<>
                    <P3xrButton
                        icon={autoRefresh ? <CheckBox sx={{ fontSize: 18 }} /> : <CheckBoxOutlineBlank sx={{ fontSize: 18 }} />}
                        label={strings?.label?.autoRefresh || 'Auto'} breakpoint={1280}
                        onClick={(e) => { e.stopPropagation(); setAutoRefresh(v => !v) }} />
                    {!autoRefresh && (
                        <P3xrButton icon={<Refresh sx={{ fontSize: 18 }} />} label={strings?.intention?.refresh || 'Refresh'}
                            breakpoint={1280}
                            onClick={(e) => { e.stopPropagation(); onRefresh(); loadElements() }} />
                    )}
                </>}
            >
                <List disablePadding>
                    {infoItems.map((item, i) => (
                        <Box key={item.key}>
                            <ListItem>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <span className="p3xr-settings-label" style={{ flex: 1 }}>{item.key}</span>
                                    <span className="p3xr-settings-value">{String(item.value)}</span>
                                </Box>
                            </ListItem>
                            {i < infoItems.length - 1 && <Divider />}
                        </Box>
                    ))}
                </List>
            </P3xrAccordion>

            {/* ELEMENTS */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.vectorset?.elements || 'Elements'}
                accordionKey="vs-elements"
            >
                <Box>
                    <KeyPagerInline paging={paging} onPageChange={(p: Paging) => setPaging(p)} />
                    <Box sx={{
                        display: 'flex', alignItems: 'center', gap: 1, px: 2, py: 1, fontWeight: 'bold',
                        bgcolor: 'primary.main', color: 'primary.contrastText',
                        borderBottom: `2px solid rgba(255,255,255,0.05)`,
                    }}>
                        <Box component="span" sx={{ flex: '50%' }}>{strings?.page?.key?.vectorset?.element || 'Element'}</Box>
                        <Box component="span" sx={{ flex: '20%' }}>{strings?.page?.key?.vectorset?.score || 'Score'}</Box>
                        <Box component="span" sx={{ flex: '30%', textAlign: 'right', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            {!readonly && (
                                <Tooltip title={strings?.intention?.add || 'Add'}><Add sx={{ cursor: 'pointer', color: 'inherit' }} onClick={() => setShowAddForm(v => !v)} /></Tooltip>
                            )}
                        </Box>
                    </Box>
                    {elements.slice(paging.startIndex, paging.startIndex + paging.pageCount).map((elem: any, i: number) => (
                        <Box key={elem.element} sx={{
                            display: 'flex', alignItems: 'center', gap: 1, px: 2, py: '6px',
                            borderBottom: '1px solid rgba(255,255,255,0.05)',
                            bgcolor: i % 2 === 0 ? 'rgba(255,255,255,0.05)' : 'transparent',
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.1) !important' },
                        }}>
                            <Box component="span" sx={{ flex: '50%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{elem.element}</Box>
                            <Box component="span" sx={{ flex: '20%', fontFamily: "'Roboto Mono', monospace" }}>{elem.score?.toFixed(4)}</Box>
                            <Box component="span" sx={{ flex: '30%', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                <Tooltip title="Find similar"><Search sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'secondary.main', '&:hover': { opacity: 1 } }} onClick={() => {
                                    setSimSearchInput(elem.element)
                                    searchByElementDirect(elem.element)
                                }} /></Tooltip>
                                <Tooltip title={strings?.page?.key?.vectorset?.attributes || 'Attributes'}><Info sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'secondary.main', '&:hover': { opacity: 1 } }} onClick={() => getAttributes(elem.element)} /></Tooltip>
                                {!readonly && (
                                    <Tooltip title={strings?.intention?.delete || 'Delete'}><Delete sx={{ fontSize: 18, cursor: 'pointer', mx: '2px', opacity: 0.7, color: 'error.main', '&:hover': { opacity: 1 } }} onClick={() => removeElement(elem.element)} /></Tooltip>
                                )}
                            </Box>
                        </Box>
                    ))}
                    {!readonly && showAddForm && (
                        <Box sx={{ p: 2 }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1.5, py: 1 }}>
                                <TextField size="small" margin="none"
                                    sx={{ flex: 1, minWidth: 200 }}
                                    label={strings?.page?.key?.vectorset?.elementName || 'Element name'}
                                    value={elementInput}
                                    onChange={e => setElementInput(e.target.value)}
                                    onKeyUp={e => e.key === 'Enter' && addElement()} />
                                <TextField size="small" margin="none"
                                    sx={{ flex: 1, minWidth: 200 }}
                                    label={strings?.page?.key?.vectorset?.vectorValues || 'Vector values'}
                                    placeholder="0.1, 0.2, 0.3"
                                    value={vectorInput}
                                    onChange={e => setVectorInput(e.target.value)}
                                    onKeyUp={e => e.key === 'Enter' && addElement()} />
                                <P3xrButton icon={<Add fontSize="small" />} label={strings?.intention?.add || 'Add'}
                                    raised color="primary" onClick={addElement} />
                            </Box>
                        </Box>
                    )}
                </Box>
            </P3xrAccordion>

            {/* SIMILARITY SEARCH */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.vectorset?.similaritySearch || 'Similarity Search'}
                accordionKey="vs-sim"
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1.5, py: 1 }}>
                        <TextField size="small" margin="none"
                            sx={{ flex: 1, minWidth: 200 }}
                            label={strings?.page?.key?.vectorset?.searchTerm || 'Search term'}
                            value={simSearchInput}
                            onChange={e => setSimSearchInput(e.target.value)}
                            onKeyUp={e => e.key === 'Enter' && searchByElement()} />
                        <TextField size="small" margin="none" type="number"
                            sx={{ width: 80 }}
                            label={strings?.page?.key?.vectorset?.count || 'Count'}
                            value={simCountInput}
                            onChange={e => setSimCountInput(parseInt(e.target.value) || 10)} />
                        {parseRedisVersion(useRedisStateStore.getState().info?.server?.redis_version).isAtLeast(8, 2) && (
                            <TextField size="small" margin="none"
                                sx={{ flex: 1, minWidth: 150 }}
                                label={strings?.page?.key?.vectorset?.filter || 'Filter'}
                                placeholder="attr == 'value'"
                                value={simFilterInput}
                                onChange={e => setSimFilterInput(e.target.value)}
                                onKeyUp={e => e.key === 'Enter' && searchByElement()} />
                        )}
                        <P3xrButton icon={<Person fontSize="small" />}
                            label={strings?.page?.key?.vectorset?.byElement || 'By Element'}
                            raised color="primary" onClick={searchByElement} />
                        <P3xrButton icon={<DataArray fontSize="small" />}
                            label={strings?.page?.key?.vectorset?.byVector || 'By Vector'}
                            raised color="primary" onClick={searchByVector} />
                    </Box>
                    {simResults.length > 0 && (
                        <>
                            <Divider sx={{ my: 1 }} />
                            <List disablePadding>
                                {simResults.map((entry, i) => (
                                    <Box key={i}>
                                        <ListItem>
                                            <Box sx={{ display: 'flex', width: '100%' }}>
                                                <span className="p3xr-settings-label" style={{ flex: 1 }}>{entry.element}</span>
                                                <span className="p3xr-settings-value">{entry.score}</span>
                                            </Box>
                                        </ListItem>
                                        {i < simResults.length - 1 && <Divider />}
                                    </Box>
                                ))}
                            </List>
                        </>
                    )}
                </Box>
            </P3xrAccordion>
        </Box>
    )
}
