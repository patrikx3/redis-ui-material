import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { Box, Tooltip, useTheme } from '@mui/material'
import { Schedule, Delete, Add } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore, getPaginatedKeys } from '../../stores/redis-state.store'
import { useSettingsStore } from '../../stores/settings.store'
import { useCommonStore, onTreeEvent, emitTreeEvent } from '../../stores/common.store'
import { useMainCommandStore, onCommandEvent } from '../../stores/main-command.store'
import { request } from '../../stores/socket.service'
import { navigateTo } from '../../stores/navigation.store'
import { keysToTreeControl } from '../../stores/tree-builder'
import KeyNewOrSetDialog from '../../dialogs/KeyNewOrSetDialog'

import humanizeDuration from 'humanize-duration'

const ROW_HEIGHT = 28
const INDENT_PX = 20

export interface FlatTreeNode {
    label: string
    key: string
    level: number
    expandable: boolean
    type: 'folder' | 'element'
    childCount: number
    keysInfo?: { type: string; length: number; ttl?: number }
    _sourceNode?: any
}

// Type icon map
const typeIcons: Record<string, string> = {
    hash: 'fas fa-hashtag',
    list: 'fas fa-list-ol',
    set: 'fas fa-list',
    string: 'fas fa-ellipsis-h',
    zset: 'fas fa-chart-line',
    stream: 'fas fa-stream',
    json: 'fas fa-code',
    timeseries: 'fas fa-chart-area',
    bloom: 'fas fa-filter',
    cuckoo: 'fas fa-filter',
    topk: 'fas fa-trophy',
    cms: 'fas fa-chart-simple',
    tdigest: 'fas fa-chart-bar',
    vectorset: 'fas fa-brain',
}

export default function DatabaseTree({ resizeSignal }: { resizeSignal?: any }) {
    const strings = useI18nStore(s => s.strings)
    const keysRaw = useRedisStateStore(s => s.keysRaw)
    const keysInfo = useRedisStateStore(s => s.keysInfo)
    const page = useRedisStateStore(s => s.page)
    const search = useRedisStateStore(s => s.search)
    const connection = useRedisStateStore(s => s.connection)
    const redisTreeDivider = useSettingsStore(s => s.redisTreeDivider)
    const muiTheme = useTheme()
    const { confirm, toast, generalHandleError } = useCommonStore()
    const { refresh } = useMainCommandStore()

    const isReadonly = connection?.readonly === true
    const divider = redisTreeDivider || ':'

    const getExpansionKey = () => `p3xr-tree-expanded-${connection?.id || 'none'}-${useRedisStateStore.getState().currentDatabase ?? 0}`

    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(() => {
        try {
            const raw = sessionStorage.getItem(getExpansionKey())
            return raw ? new Set(JSON.parse(raw)) : new Set()
        } catch { return new Set() }
    })
    const [keyNewDialogOpen, setKeyNewDialogOpen] = useState(false)
    const [keyNewDialogData, setKeyNewDialogData] = useState<any>(null)
    const [hierarchicalNodes, setHierarchicalNodes] = useState<any[]>([])
    const [, setTick] = useState(0) // for TTL repaints
    const parentRef = useRef<HTMLDivElement>(null)

    // Persist expansion state to sessionStorage
    useEffect(() => {
        try { sessionStorage.setItem(getExpansionKey(), JSON.stringify([...expandedKeys])) } catch {}
    }, [expandedKeys]) // eslint-disable-line react-hooks/exhaustive-deps

    // Restore expansion state on connection/db change
    const currentDb = useRedisStateStore(s => s.currentDatabase)
    useEffect(() => {
        try {
            const raw = sessionStorage.getItem(getExpansionKey())
            setExpandedKeys(raw ? new Set(JSON.parse(raw)) : new Set())
        } catch { setExpandedKeys(new Set()) }
    }, [connection?.id, currentDb]) // eslint-disable-line react-hooks/exhaustive-deps

    // Build tree when keys, divider, or page change
    useEffect(() => {
        const paginatedKeys = getPaginatedKeys()
        keysToTreeControl({
            keys: paginatedKeys,
            divider,
            keysInfo: keysInfo ?? {},
        }).then(({ nodes }) => {
            setHierarchicalNodes(nodes)
        })
    }, [keysRaw, keysInfo, divider, page, search])

    // Flatten visible nodes
    const dataSource = useMemo(() => {
        const result: FlatTreeNode[] = []
        const flatten = (nodes: any[], level: number) => {
            for (const node of nodes) {
                result.push({
                    label: node.label,
                    key: node.key,
                    level,
                    expandable: node.type === 'folder',
                    type: node.type,
                    childCount: node.childCount ?? 0,
                    keysInfo: node.keysInfo,
                    _sourceNode: node,
                })
                if (node.type === 'folder' && expandedKeys.has(node.key) && node.children?.length > 0) {
                    flatten(node.children, level + 1)
                }
            }
        }
        flatten(hierarchicalNodes, 0)
        return result
    }, [hierarchicalNodes, expandedKeys])

    // Virtual scrolling
    const virtualizer = useVirtualizer({
        count: dataSource.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ROW_HEIGHT,
        overscan: 10,
    })

    // Re-measure when container resizes (console expand/collapse)
    useEffect(() => {
        virtualizer.measure()
    }, [resizeSignal])

    // Toggle expand/collapse
    const toggleExpand = useCallback((key: string) => {
        setExpandedKeys(prev => {
            const next = new Set(prev)
            if (next.has(key)) next.delete(key)
            else next.add(key)
            return next
        })
    }, [])

    // Select a key node
    const selectNode = useCallback((node: FlatTreeNode) => {
        navigateTo('database.key', { key: node.key })
    }, [])

    // Listen for key-new events from add buttons
    useEffect(() => {
        return onCommandEvent('key-new', (data: any) => {
            setKeyNewDialogData({ type: 'add', node: data?.node })
            setKeyNewDialogOpen(true)
        })
    }, [])

    const handleKeyNewClose = useCallback(async (result?: any) => {
        setKeyNewDialogOpen(false)
        setKeyNewDialogData(null)
        if (result?.key) {
            await useMainCommandStore.getState().refresh({ withoutParent: false, force: true })
            navigateTo('database.key', { key: result.key })
        }
    }, [])

    // Tree command event subscriptions
    useEffect(() => {
        const unsubs = [
            onTreeEvent('expand-all', () => {
                const allKeys = new Set<string>()
                const collect = (nodes: any[]) => {
                    for (const node of nodes) {
                        if (node.type === 'folder') {
                            allKeys.add(node.key)
                            collect(node.children ?? [])
                        }
                    }
                }
                collect(hierarchicalNodes)
                setExpandedKeys(allKeys)
            }),
            onTreeEvent('collapse-all', () => {
                setExpandedKeys(new Set())
            }),
            ...[1, 2, 3, 4, 5].map(level =>
                onTreeEvent(`expand-level-${level}`, () => {
                    const keys = new Set<string>()
                    const collect = (nodes: any[], depth: number) => {
                        for (const node of nodes) {
                            if (node.type === 'folder') {
                                if (depth < level) keys.add(node.key)
                                collect(node.children ?? [], depth + 1)
                            }
                        }
                    }
                    collect(hierarchicalNodes, 0)
                    setExpandedKeys(keys)
                })
            ),
        ]
        return () => unsubs.forEach(fn => fn())
    }, [hierarchicalNodes])

    // TTL adaptive repaint
    useEffect(() => {
        let timer: any
        const tick = () => {
            let minTtl = Infinity
            let hasExpired = false
            const fetchedAt = useRedisStateStore.getState().keysInfoFetchedAt ?? Date.now()
            const now = Date.now()

            for (const node of dataSource) {
                if (node.type === 'folder') continue
                const serverTtl = node.keysInfo?.ttl
                if (!serverTtl || serverTtl <= 0) continue
                const elapsed = Math.floor((now - fetchedAt) / 1000)
                const remaining = serverTtl - elapsed
                if (remaining <= 0) hasExpired = true
                else if (remaining < minTtl) minTtl = remaining
            }

            if (hasExpired) {
                refresh()
                timer = setTimeout(tick, 3000)
                return
            }

            setTick(t => t + 1)

            let interval: number
            if (minTtl <= 30) interval = 1000
            else if (minTtl <= 300) interval = 5000
            else interval = 30000

            timer = setTimeout(tick, interval)
        }
        timer = setTimeout(tick, 1000)
        return () => clearTimeout(timer)
    }, [dataSource])

    // --- TTL helpers ---
    const getRemainingTtl = useCallback((node: FlatTreeNode): number => {
        const ttl = node.keysInfo?.ttl
        if (!ttl || ttl <= 0) return -1
        const fetchedAt = useRedisStateStore.getState().keysInfoFetchedAt ?? Date.now()
        const elapsed = Math.floor((Date.now() - fetchedAt) / 1000)
        const remaining = ttl - elapsed
        return remaining > 0 ? remaining : -1
    }, [])

    const formatTtl = useCallback((remaining: number): string => {
        if (remaining <= 0) return ''
        const hdOpts = useSettingsStore.getState().getHumanizeDurationOptions()
        return humanizeDuration(remaining * 1000, {
            ...hdOpts,
            largest: 2,
            round: true,
            delimiter: ' ',
        })
    }, [])

    const getTtlColor = useCallback((remaining: number): string => {
        if (remaining <= 0) return ''
        if (remaining < 300) return '#f44336'
        if (remaining < 3600) return '#ff9800'
        return '#4caf50'
    }, [])

    const isTtlPulsing = useCallback((remaining: number): boolean => {
        return remaining > 0 && remaining < 30
    }, [])

    // --- Node actions ---
    const deleteKey = useCallback(async (e: React.MouseEvent, key: string) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            await confirm({ message: strings?.confirm?.deleteKey })
            await request({ action: 'key/delete', payload: { key } })
            navigateTo('database.statistics')
            toast(typeof strings?.status?.deletedKey === 'function' ? strings.status.deletedKey({ key }) : '')
            await refresh()
        } catch (err) {
            generalHandleError(err)
        }
    }, [strings, confirm, toast, refresh, generalHandleError])

    const deleteTree = useCallback(async (e: React.MouseEvent, node: FlatTreeNode) => {
        e.stopPropagation()
        try {
            const msg = typeof strings?.confirm?.deleteAllKeys === 'function'
                ? strings.confirm.deleteAllKeys({ key: node.key }) : ''
            await confirm({ message: msg })
            await request({
                action: 'key/del-tree',
                payload: { key: node.key, redisTreeDivider: divider },
            })
            const toastMsg = typeof strings?.status?.treeDeleted === 'function'
                ? strings.status.treeDeleted({ key: node.key }) : ''
            toast(toastMsg)
            await refresh()
        } catch (err) {
            generalHandleError(err)
        }
    }, [strings, divider, confirm, toast, refresh, generalHandleError])

    const addKey = useCallback((e: React.MouseEvent, node: FlatTreeNode) => {
        e.stopPropagation()
        useMainCommandStore.getState().addKey({ event: e.nativeEvent, node: node._sourceNode ?? { key: node.key } })
    }, [])

    // --- Tooltip helpers ---
    const nodeTooltip = useCallback((node: FlatTreeNode): string => {
        if (node.type !== 'folder' && node.keysInfo) {
            const typeName = strings?.redisTypes?.[node.keysInfo.type] ?? node.keysInfo.type
            return typeName + ' - ' + node.key
        }
        return node.key
    }, [strings])

    const dialogEl = <KeyNewOrSetDialog open={keyNewDialogOpen} data={keyNewDialogData} onClose={handleKeyNewClose} />

    if (dataSource.length === 0) {
        return (
            <Box sx={{ p: 1, opacity: 0.5, fontSize: 13 }}>
                {strings?.label?.noKeys}
                {dialogEl}
            </Box>
        )
    }

    return (
        <Box ref={parentRef} sx={{ height: '100%', width: '100%', overflow: 'auto' }}>
            <Box sx={{ height: virtualizer.getTotalSize(), width: '100%', position: 'relative' }}>
                {virtualizer.getVirtualItems().map(virtualRow => {
                    const node = dataSource[virtualRow.index]
                    const remaining = getRemainingTtl(node)
                    const ttlColor = getTtlColor(remaining)
                    const pulsing = isTtlPulsing(remaining)

                    return (
                        <Box
                            key={`${node.type}-${node.key}`}
                            data-p3xr-tree-key={node.type === 'folder' ? '' : node.key}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: ROW_HEIGHT,
                                transform: `translateY(${virtualRow.start}px)`,
                                display: 'flex',
                                alignItems: 'center',
                                whiteSpace: 'nowrap',
                                cursor: 'default',
                                pl: `${node.level * INDENT_PX + 4}px`,
                                '&:hover .tree-actions': { visibility: 'visible' },
                                '&:hover .p3xr-database-tree-node-label': { backgroundColor: 'action.hover' },
                            }}
                        >
                            {/* Folder icon (no spacer for elements — matches Angular) */}
                            {node.expandable && (
                                <Box
                                    component="span"
                                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); toggleExpand(node.key) }}
                                    sx={{
                                        display: 'inline-block',
                                        fontFamily: "'Font Awesome 5 Free'",
                                        fontWeight: 900,
                                        fontSize: 24,
                                        lineHeight: '28px',
                                        width: 28,
                                        textAlign: 'center',
                                        mr: '4px',
                                        cursor: 'pointer',
                                        color: muiTheme.p3xr.treeBranchColor,
                                        '&::before': {
                                            content: expandedKeys.has(node.key) ? '"\\f07c"' : '"\\f07b"',
                                        },
                                    }}
                                />
                            )}

                            {/* Node label area */}
                            <Tooltip title={nodeTooltip(node)} placement="right" enterDelay={500}
                                slotProps={{ popper: { sx: { ml: '36px !important' } } }}>
                                <Box
                                    component="label"
                                    className="p3xr-database-tree-node"
                                    onClick={() => node.expandable ? toggleExpand(node.key) : selectNode(node)}
                                    sx={{
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        height: ROW_HEIGHT,
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {/* Type icon — same box size as folder icon for alignment */}
                                    {node.type !== 'folder' && node.keysInfo && typeIcons[node.keysInfo.type] && (
                                        <i
                                            className={typeIcons[node.keysInfo.type]}
                                            aria-hidden="true"
                                            style={{ display: 'inline-block', width: 28, textAlign: 'center', marginRight: 4, fontSize: 14 }}
                                        />
                                    )}

                                    <span className="p3xr-database-tree-node-label">{node.label}</span>

                                    {/* Folder child count */}
                                    {node.type === 'folder' && (
                                        <span style={{ opacity: 0.5, marginLeft: 4 }}>
                                            {divider}* <span>({node.childCount})</span>
                                        </span>
                                    )}

                                    {/* Element length (non-string/json) */}
                                    {node.type !== 'folder' && node.keysInfo?.type !== 'string' && node.keysInfo?.type !== 'json' && node.keysInfo && (
                                        <span style={{ opacity: 0.5, marginLeft: 4 }}>({node.keysInfo.length})</span>
                                    )}
                                </Box>
                            </Tooltip>

                            {/* TTL badge */}
                            {node.type !== 'folder' && remaining > 0 && (
                                <Tooltip title={`TTL: ${formatTtl(remaining)}`} placement="right" enterDelay={300}
                                    slotProps={{ popper: { sx: { ml: '36px !important' } } }}>
                                    <Box component="span" sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        ml: '4px',
                                        animation: pulsing ? 'p3xr-ttl-pulse 1s infinite' : 'none',
                                        '@keyframes p3xr-ttl-pulse': {
                                            '0%, 100%': { opacity: 0.7 },
                                            '50%': { opacity: 1 },
                                        },
                                    }}>
                                        <Schedule sx={{ fontSize: 16, color: ttlColor }} />
                                    </Box>
                                </Tooltip>
                            )}

                            {/* Action buttons (hover) — height matches row for continuous hover */}
                            {!isReadonly && (
                                <Box component="span" className="tree-actions" sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    visibility: 'hidden',
                                    height: ROW_HEIGHT,
                                    position: 'relative',
                                    top: -1,
                                }}>
                                    {node.type === 'folder' ? (
                                        <Tooltip title={typeof strings?.confirm?.deleteAllKeys === 'function' ? strings.confirm.deleteAllKeys({ key: node.key }) : ''} placement="right" enterDelay={300}
                                            slotProps={{ popper: { sx: { ml: '36px !important' } } }}>
                                            <Delete
                                                onClick={(e) => deleteTree(e, node)}
                                                sx={{ fontSize: '18px !important', width: 18, height: 18, cursor: 'pointer', color: 'error.main' }}
                                            />
                                        </Tooltip>
                                    ) : (
                                        <Tooltip title={strings?.intention?.delete} placement="right" enterDelay={300}
                                            slotProps={{ popper: { sx: { ml: '36px !important' } } }}>
                                            <Delete
                                                onClick={(e) => deleteKey(e, node.key)}
                                                sx={{ fontSize: '18px !important', width: 18, height: 18, cursor: 'pointer', color: 'error.main' }}
                                            />
                                        </Tooltip>
                                    )}
                                    <Tooltip title={strings?.intention?.addKey} placement="right" enterDelay={300}
                                        slotProps={{ popper: { sx: { ml: '36px !important' } } }}>
                                        <Add
                                            onClick={(e) => addKey(e, node)}
                                            sx={{ fontSize: '18px !important', width: 18, height: 18, cursor: 'pointer', color: muiTheme.p3xr.commonWarnColor }}
                                        />
                                    </Tooltip>
                                </Box>
                            )}
                        </Box>
                    )
                })}
            </Box>
            {dialogEl}
        </Box>
    )
}
