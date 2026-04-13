import { useState, useEffect, useRef } from 'react'
import { Box, TextField, List, ListItem, Divider } from '@mui/material'
import { Add, Search, Delete, Refresh, BarChart, Undo, CheckBox, CheckBoxOutlineBlank } from '@mui/icons-material'
import { useI18nStore } from '../../../stores/i18n.store'
import { useRedisStateStore } from '../../../stores/redis-state.store'
import { useCommonStore } from '../../../stores/common.store'
import { request } from '../../../stores/socket.service'
import { KeyTypeProps } from './key-type-base'
import P3xrAccordion from '../../../components/P3xrAccordion'
import P3xrButton from '../../../components/P3xrButton'

export default function KeyProbabilistic({ response, value, keyName, onRefresh }: KeyTypeProps) {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const { toast, confirm } = useCommonStore()
    const readonly = connection?.readonly === true

    const type = response?.type || ''

    const [itemInput, setItemInput] = useState('')
    const [incrementInput, setIncrementInput] = useState(1)
    const [quantileInput, setQuantileInput] = useState(0.5)
    const [topkItems, setTopkItems] = useState<Array<{ item: string; count: number }>>([])
    const [autoRefresh, setAutoRefresh] = useState(false)
    const autoRefreshRef = useRef<any>(null)

    useEffect(() => {
        if (autoRefresh) {
            autoRefreshRef.current = setInterval(() => { onRefresh(); if (type === 'topk') loadTopkList() }, 10000)
        } else {
            clearInterval(autoRefreshRef.current)
        }
        return () => clearInterval(autoRefreshRef.current)
    }, [autoRefresh])

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
        if (type === 'topk') loadTopkList()
    }, [type])

    async function addItem() {
        if (!itemInput.trim()) return
        try {
            await request({
                action: 'probabilistic/add',
                payload: { key: keyName, type, item: itemInput.trim(), increment: incrementInput },
            })
            toast(strings?.page?.key?.probabilistic?.addedSuccessfully)
            setItemInput('')
            onRefresh()
            if (type === 'topk') loadTopkList()
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function checkItem() {
        if (!itemInput.trim()) return
        try {
            const resp: any = await request({
                action: 'probabilistic/check',
                payload: { key: keyName, type, item: itemInput.trim() },
            })
            const exists = resp.result === 1
            toast(`"${itemInput}" — ${exists
                ? (strings?.page?.key?.probabilistic?.exists)
                : (strings?.page?.key?.probabilistic?.doesNotExist)}`)
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function deleteItem() {
        if (!itemInput.trim()) return
        try {
            await confirm({ message: strings?.confirm?.delete })
            await request({
                action: 'probabilistic/delete',
                payload: { key: keyName, type, item: itemInput.trim() },
            })
            toast(strings?.page?.key?.probabilistic?.deletedSuccessfully)
            setItemInput('')
            onRefresh()
        } catch (e: any) {
            if (e?.message) toast(e.message)
        }
    }

    async function queryItem() {
        if (!itemInput.trim()) return
        try {
            const resp: any = await request({
                action: 'probabilistic/check',
                payload: { key: keyName, type, item: itemInput.trim() },
            })
            const count = Array.isArray(resp.result) ? resp.result[0] : resp.result
            toast(`"${itemInput}" — ${strings?.page?.key?.probabilistic?.topkCount}: ${count}`)
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function queryQuantile() {
        try {
            const resp: any = await request({
                action: 'probabilistic/check',
                payload: { key: keyName, type, quantile: quantileInput },
            })
            const result = Array.isArray(resp.result) ? resp.result[0] : resp.result
            toast(`${strings?.page?.key?.probabilistic?.quantile} ${quantileInput} = ${result}`)
        } catch (e: any) {
            toast(e.message || 'Error')
        }
    }

    async function resetTdigest() {
        try {
            await confirm({ message: strings?.page?.key?.probabilistic?.resetConfirm })
            await request({
                action: 'probabilistic/delete',
                payload: { key: keyName, type: 'tdigest' },
            })
            toast('Reset')
            onRefresh()
        } catch (e: any) {
            if (e?.message) toast(e.message)
        }
    }

    async function loadTopkList() {
        try {
            const resp: any = await request({
                action: 'probabilistic/check',
                payload: { key: keyName, type: 'topk' },
            })
            setTopkItems(resp.result || [])
        } catch {
            setTopkItems([])
        }
    }

    return (
        <Box className="p3xr-key-type-content">
            {/* INFO */}
            <br />
            <P3xrAccordion
                title={strings?.page?.key?.probabilistic?.info}
                accordionKey="prob-info"
                actions={<>
                    <P3xrButton
                        icon={autoRefresh ? <CheckBox sx={{ fontSize: 18 }} /> : <CheckBoxOutlineBlank sx={{ fontSize: 18 }} />}
                        label={strings?.label?.autoRefresh} breakpoint={1280}
                        onClick={(e) => { e.stopPropagation(); setAutoRefresh(v => !v) }} />
                    {!autoRefresh && (
                        <P3xrButton icon={<Refresh sx={{ fontSize: 18 }} />} label={strings?.intention?.refresh}
                            breakpoint={1280}
                            onClick={(e) => { e.stopPropagation(); onRefresh(); if (type === 'topk') loadTopkList() }} />
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

            {/* ACTIONS */}
            <br />
            <P3xrAccordion
                title={type === 'topk'
                    ? (strings?.page?.key?.probabilistic?.topkList)
                    : (strings?.page?.key?.probabilistic?.addItem)}
                accordionKey="prob-actions"
            >
                <Box>
                    <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 1.5, py: 1 }}>
                        {type === 'tdigest' ? (
                            <TextField size="small" type="number" margin="none"
                                className="p3xr-timeseries-field"
                                label={strings?.form?.key?.field?.value}
                                value={itemInput}
                                onChange={e => setItemInput(e.target.value)}
                                onKeyUp={e => e.key === 'Enter' && addItem()} />
                        ) : (
                            <TextField size="small" margin="none"
                                className="p3xr-timeseries-field"
                                sx={{ flex: 1, minWidth: 200 }}
                                label={strings?.page?.key?.probabilistic?.item}
                                value={itemInput}
                                onChange={e => setItemInput(e.target.value)}
                                onKeyUp={e => e.key === 'Enter' && addItem()} />
                        )}

                        {type === 'cms' && (
                            <TextField size="small" type="number" margin="none"
                                className="p3xr-timeseries-field"
                                sx={{ maxWidth: 120 }}
                                label={strings?.form?.key?.field?.increment}
                                value={incrementInput}
                                onChange={e => setIncrementInput(parseInt(e.target.value) || 1)} />
                        )}

                        {type === 'tdigest' && (
                            <TextField size="small" type="number" margin="none"
                                slotProps={{ htmlInput: { step: 0.1 } }}
                                className="p3xr-timeseries-field"
                                sx={{ maxWidth: 120 }}
                                label={strings?.page?.key?.probabilistic?.quantile}
                                value={quantileInput}
                                onChange={e => setQuantileInput(parseFloat(e.target.value) || 0.5)}
                                onKeyUp={e => e.key === 'Enter' && queryQuantile()} />
                        )}

                        {!readonly && (
                            <P3xrButton icon={<Add fontSize="small" />} label={strings?.intention?.add}
                                raised color="primary" onClick={addItem} />
                        )}

                        {(type === 'bloom' || type === 'cuckoo') && (
                            <P3xrButton icon={<Search fontSize="small" />} label={strings?.page?.key?.probabilistic?.checkItem}
                                raised color="primary" onClick={checkItem} />
                        )}

                        {type === 'cuckoo' && !readonly && (
                            <P3xrButton icon={<Delete fontSize="small" />} label={strings?.intention?.delete}
                                raised color="primary" onClick={deleteItem} />
                        )}

                        {type === 'cms' && (
                            <P3xrButton icon={<Search fontSize="small" />} label={strings?.page?.key?.probabilistic?.queryCount}
                                raised color="primary" onClick={queryItem} />
                        )}

                        {type === 'tdigest' && (
                            <P3xrButton icon={<BarChart fontSize="small" />} label={strings?.page?.key?.probabilistic?.quantile}
                                raised color="primary" onClick={queryQuantile} />
                        )}

                        {type === 'tdigest' && !readonly && (
                            <P3xrButton icon={<Undo fontSize="small" />} label="Reset"
                                raised color="warning" onClick={resetTdigest} />
                        )}
                    </Box>

                    </Box>
                    {/* TOPK ITEMS LIST */}
                    {type === 'topk' && topkItems.length > 0 && (
                        <>
                        <Divider />
                        <List disablePadding>
                            {topkItems.map((entry, i) => (
                                <Box key={i}>
                                    <ListItem>
                                        <Box sx={{ display: 'flex', width: '100%' }}>
                                            <span className="p3xr-settings-label" style={{ flex: 1 }}>{entry.item}</span>
                                            <span className="p3xr-settings-value">{entry.count}</span>
                                        </Box>
                                    </ListItem>
                                    {i < topkItems.length - 1 && <Divider />}
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
