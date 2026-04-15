import { useMemo, useState, useEffect, useCallback } from 'react'
import {
    Button, IconButton, Tooltip, Divider, List, ListItemButton, ListItem,
    Switch, Box, useMediaQuery,
} from '@mui/material'
import {
    Power, PowerOff, DeleteForever, Edit, ModeComment, AddBox,
    CheckBox, CheckBoxOutlineBlank,
    ChevronRight, ExpandMore, Favorite, People, Delete, PersonAdd, Refresh, Warning,
    TravelExplore,
} from '@mui/icons-material'
import {
    DndContext, closestCenter, PointerSensor, useSensor, useSensors,
    DragEndEvent,
} from '@dnd-kit/core'
import {
    SortableContext, verticalListSortingStrategy, useSortable, arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import P3xrAccordion from '../../components/P3xrAccordion'
import P3xrButton from '../../components/P3xrButton'
import ConnectionDialog from '../../dialogs/ConnectionDialog'
import AiSettingsDialog from '../../dialogs/AiSettingsDialog'
import AclUserDialog from '../../dialogs/AclUserDialog'
import TreeSettingsDialog from '../../dialogs/TreeSettingsDialog'
import { switchGui } from '../../../core/gui-switch'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useSettingsStore } from '../../stores/settings.store'
import { useCommonStore } from '../../stores/common.store'
import { useOverlayStore } from '../../stores/overlay.store'
import { useMainCommandStore } from '../../stores/main-command.store'
import { request, onSocketEvent } from '../../stores/socket.service'
import { getPersistentItem, setPersistentItem } from '../../stores/electron-bridge'
import { isNotificationsEnabled, setNotificationsEnabled } from '../../stores/notification'

// --- Sortable connection row (whole row is draggable) ---
function SortableConnectionItem({ conn, isLast, children }: {
    conn: any, isLast: boolean, children: React.ReactNode
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: conn.id })
    return (
        <>
            <Box
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                sx={{
                    display: 'flex', alignItems: 'center', gap: 0.5,
                    px: 1, pl: 2, py: 1, minHeight: 56, boxSizing: 'border-box',
                    cursor: 'grab',
                    transform: CSS.Transform.toString(transform),
                    transition,
                    opacity: isDragging ? 0.4 : 1,
                    bgcolor: isDragging ? 'action.hover' : undefined,
                    borderRadius: isDragging ? '4px' : undefined,
                }}
            >
                {children}
            </Box>
            {!isLast && !isDragging && <Divider />}
        </>
    )
}

// --- Sortable group block (group header is drag handle, whole block moves) ---
function SortableGroupBlock({ group, children }: {
    group: { name: string; connections: any[] }, children: React.ReactNode
}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: `group-${group.name}` })
    return (
        <Box
            ref={setNodeRef}
            {...attributes}
            sx={{
                transform: CSS.Transform.toString(transform),
                transition,
                opacity: isDragging ? 0.4 : 1,
                bgcolor: isDragging ? 'action.hover' : undefined,
                borderRadius: isDragging ? '4px' : undefined,
            }}
        >
            {/* Group header is the drag handle */}
            <Box {...listeners} sx={{ cursor: 'grab' }}>
                {children}
            </Box>
        </Box>
    )
}

export default function SettingsPage() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const connections = useRedisStateStore(s => s.connections)
    const cfg = useRedisStateStore(s => s.cfg)
    const redisConnections = useRedisStateStore(s => s.redisConnections)
    const settings = useSettingsStore()
    const { toast, confirm, generalHandleError } = useCommonStore()
    const { connect: storeConnect, disconnect } = useMainCommandStore()

    const isXs = useMediaQuery('(max-width: 599px)')
    const connectionsList = connections?.list ?? []
    const readonlyConnections = cfg?.readonlyConnections === true
    const currentConnectionId = connection?.id

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
    )

    // Group mode
    const [groupModeEnabled, setGroupModeEnabled] = useState(() => {
        return getPersistentItem('p3xr-connection-group-mode') === 'true'
    })
    const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(() => {
        try {
            const stored = getPersistentItem('p3xr-collapsed-connection-groups')
            return stored ? new Set(JSON.parse(stored)) : new Set()
        } catch { return new Set() }
    })

    // Force re-render on socket events
    const [, setTick] = useState(0)
    useEffect(() => {
        const unsubs = [
            onSocketEvent('connections', () => setTick(t => t + 1)),
            onSocketEvent('configuration', () => setTick(t => t + 1)),
            onSocketEvent('redis-status', () => setTick(t => t + 1)),
        ]
        return () => unsubs.forEach(fn => fn())
    }, [])

    const toggleGroupMode = () => {
        const next = !groupModeEnabled
        setGroupModeEnabled(next)
        setPersistentItem('p3xr-connection-group-mode', String(next))
    }

    const toggleGroup = (name: string) => {
        setCollapsedGroups(prev => {
            const next = new Set(prev)
            next.has(name) ? next.delete(name) : next.add(name)
            setPersistentItem('p3xr-collapsed-connection-groups', JSON.stringify([...next]))
            return next
        })
    }

    // Grouped connections
    const groupedConnections = useMemo(() => {
        const groups = new Map<string, any[]>()
        for (const conn of connectionsList) {
            const name = conn.group?.trim() || ''
            if (!groups.has(name)) groups.set(name, [])
            groups.get(name)!.push(conn)
        }
        return Array.from(groups, ([name, conns]) => ({ name, connections: conns }))
    }, [connectionsList])

    const getConnectionClients = useCallback((conn: any) => {
        const results: { key: string; clients: number }[] = []
        for (const key of Object.keys(redisConnections || {})) {
            if (redisConnections[key]?.connection?.name === conn.name) {
                results.push({ key, clients: redisConnections[key].clients?.length || 0 })
            }
        }
        return results
    }, [redisConnections])

    // --- Drag & drop handlers ---
    const handleDragEndFlat = async (event: DragEndEvent) => {
        const { active, over } = event
        if (!over || active.id === over.id) return
        const oldIndex = connectionsList.findIndex((c: any) => c.id === active.id)
        const newIndex = connectionsList.findIndex((c: any) => c.id === over.id)
        if (oldIndex === -1 || newIndex === -1) return
        const reordered = arrayMove(connectionsList, oldIndex, newIndex)
        try {
            await request({ action: 'connection/reorder', payload: { ids: reordered.map((c: any) => c.id) } })
        } catch (e) { generalHandleError(e) }
    }

    // Reorder groups themselves
    const handleDragEndGroupReorder = async (event: DragEndEvent) => {
        const { active, over } = event
        if (!over || active.id === over.id) return
        const oldIndex = groupedConnections.findIndex(g => `group-${g.name}` === active.id)
        const newIndex = groupedConnections.findIndex(g => `group-${g.name}` === over.id)
        if (oldIndex === -1 || newIndex === -1) return
        const reordered = arrayMove(groupedConnections, oldIndex, newIndex)
        // Flatten all connections in new group order and persist
        const allIds: string[] = []
        for (const group of reordered) {
            for (const conn of group.connections) {
                allIds.push(conn.id)
            }
        }
        try {
            await request({ action: 'connection/reorder', payload: { ids: allIds } })
        } catch (e) { generalHandleError(e) }
    }

    // Reorder connections within a group
    const handleDragEndGroup = async (event: DragEndEvent, groupName: string) => {
        const { active, over } = event
        if (!over || active.id === over.id) return
        const group = groupedConnections.find(g => g.name === groupName)
        if (!group) return
        const oldIndex = group.connections.findIndex((c: any) => c.id === active.id)
        const newIndex = group.connections.findIndex((c: any) => c.id === over.id)
        if (oldIndex === -1 || newIndex === -1) return
        const reordered = arrayMove(group.connections, oldIndex, newIndex)
        try {
            await request({ action: 'connection/reorder', payload: { group: groupName || undefined, ids: reordered.map((c: any) => c.id) } })
        } catch (e) { generalHandleError(e) }
    }

    // Dialog states
    const [dialogOpen, setDialogOpen] = useState(false)
    const [dialogType, setDialogType] = useState<'new' | 'edit'>('new')
    const [dialogModel, setDialogModel] = useState<any>(undefined)
    const [aiDialogOpen, setAiDialogOpen] = useState(false)
    const [treeDialogOpen, setTreeDialogOpen] = useState(false)
    const [notifToggle, setNotifToggle] = useState(isNotificationsEnabled)
    const [aclUsers, setAclUsers] = useState<any[] | null>(null)
    const [aclCurrentUser, setAclCurrentUser] = useState('')
    const [aclLoading, setAclLoading] = useState(false)
    const [aclEditOpen, setAclEditOpen] = useState(false)
    const [aclEditUsername, setAclEditUsername] = useState('')
    const [aclEditRules, setAclEditRules] = useState('')
    const [aclEditIsNew, setAclEditIsNew] = useState(false)
    const currentConnectionName = useMemo(() => connectionsList.find((c: any) => c.id === currentConnectionId)?.name || '', [connectionsList, currentConnectionId])

    const loadAclUsers = useCallback(async () => {
        setAclLoading(true)
        try {
            const resp = await request({ action: 'acl/list' })
            setAclUsers(resp.data.users)
            setAclCurrentUser(resp.data.currentUser)
        } catch { setAclUsers(null) }
        setAclLoading(false)
    }, [])

    useEffect(() => {
        if (currentConnectionId) { loadAclUsers() }
        else { setAclUsers(null); setAclCurrentUser('') }
    }, [currentConnectionId, loadAclUsers])

    const handleConnect = (conn: any) => storeConnect(conn)

    const handleDelete = async (conn: any) => {
        try {
            await confirm({ message: strings?.confirm?.deleteConnectionText })
            await request({ action: 'connection/delete', payload: { id: conn.id } })
            toast(strings?.status?.deleted)
        } catch (e: any) {
            if (e !== undefined) generalHandleError(e)
        }
    }

    const handleConnectionForm = (formType: 'new' | 'edit', formModel?: any) => {
        setDialogType(formType)
        setDialogModel(formModel)
        setDialogOpen(true)
    }

    // AI settings
    const isAiEnabled = cfg?.aiEnabled !== false
    const hasGroqApiKey = cfg?.hasGroqApiKey === true
    const isUseOwnKey = cfg?.aiUseOwnKey === true && hasGroqApiKey
    const isAiReadonly = readonlyConnections || cfg?.groqApiKeyReadonly === true

    const toggleAiEnabled = async (enabled: boolean) => {
        try {
            await request({ action: 'ai/set-groq-api-key', payload: { aiEnabled: enabled } })
            useRedisStateStore.setState({ cfg: { ...cfg, aiEnabled: enabled } })
        } catch (e) { generalHandleError(e) }
    }

    const toggleUseOwnKey = async (useOwn: boolean) => {
        if (useOwn && !hasGroqApiKey) return
        try {
            await request({ action: 'ai/set-groq-api-key', payload: { aiEnabled: isAiEnabled, aiUseOwnKey: useOwn } })
            useRedisStateStore.setState({ cfg: { ...cfg, aiUseOwnKey: useOwn } })
        } catch (e) { generalHandleError(e) }
    }

    // --- Responsive action button (filled/contained, tooltip only when icon-only) ---
    const ActionBtn = ({ icon, label, color, onClick }: {
        icon: React.ReactNode, label: string, color: 'primary' | 'secondary' | 'error', onClick: () => void
    }) => isXs ? (
        <Tooltip title={label} placement="top">
            <Button variant="contained" color={color} onClick={onClick}
                sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}
                aria-label={label}>
                {icon}
            </Button>
        </Tooltip>
    ) : (
        <Button variant="contained" color={color} size="small" onClick={onClick}
            sx={{ minWidth: 'auto', px: 1, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
            {icon}<span style={{ marginLeft: 3 }}>{label}</span>
        </Button>
    )

    // --- Connection info + buttons (shared between flat and grouped) ---
    const ConnectionButtons = ({ conn }: { conn: any }) => (
        <>
            <Box sx={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                <Box sx={{ fontWeight: 700 }}>{conn.name}</Box>
                <Box sx={{ fontSize: 13, opacity: 0.7 }}>{conn.host}:{conn.port}</Box>
                <Box sx={{ fontSize: 13, opacity: 0.7 }}>
                    {getConnectionClients(conn).map(entry => {
                        const fn = strings?.page?.overview?.connectedCount
                        return typeof fn === 'function' ? fn({ length: entry.clients }) : ''
                    }).join(' ')}&nbsp;
                </Box>
            </Box>
            {currentConnectionId !== conn.id ? (
                <ActionBtn icon={<Power fontSize="small" />} label={strings?.intention?.connect} color="secondary" onClick={() => handleConnect(conn)} />
            ) : (
                <ActionBtn icon={<i className="fa fa-power-off" />} label={strings?.intention?.disconnect} color="secondary" onClick={() => disconnect()} />
            )}
            {!readonlyConnections && (
                <>
                    <ActionBtn icon={<DeleteForever fontSize="small" />} label={strings?.intention?.delete} color="error" onClick={() => handleDelete(conn)} />
                    <ActionBtn icon={<Edit fontSize="small" />} label={strings?.intention?.edit} color="primary" onClick={() => handleConnectionForm('edit', conn)} />
                </>
            )}
            {readonlyConnections && (
                <ActionBtn icon={<ModeComment fontSize="small" />} label={strings?.intention?.view} color="primary" onClick={() => handleConnectionForm('edit', conn)} />
            )}
        </>
    )

    return (
        <>
            {/* === Donate === */}
            <P3xrAccordion title={strings?.title?.donateTitle} accordionKey="donate" collapsible={false}
                actions={
                    <P3xrButton
                        label={`${strings?.title?.donate} — PayPal`}
                        icon={<Favorite fontSize="small" />}
                        onClick={() => window.open('https://www.paypal.me/patrikx3', '_blank')}
                    />
                }
            >
                <Box sx={{ p: '12px 16px', fontSize: 13, opacity: 0.85, lineHeight: 1.6 }}>
                    {strings?.title?.donateDescription}
                </Box>
            </P3xrAccordion>

            {window.location.hostname === 'p3x.redis.patrikx3.com' && (
                <>
                    <br />

                    {/* === Promo: AI Network Assistant (demo site only) === */}
                    <P3xrAccordion title={strings?.promo?.title} accordionKey="promo-network" collapsible={false}
                        actions={
                            <P3xrButton
                                label={strings?.promo?.visit}
                                icon={<TravelExplore fontSize="small" />}
                                onClick={() => window.open('https://network.corifeus.com', '_blank')}
                            />
                        }
                    >
                        <Box sx={{ p: '12px 16px', fontSize: 13, opacity: 0.85, lineHeight: 1.6 }}>
                            {strings?.promo?.description}
                        </Box>
                        <Box sx={{ p: '0 16px 12px', fontSize: 11, opacity: 0.5, lineHeight: 1.4 }}>
                            {strings?.promo?.disclaimer}
                        </Box>
                    </P3xrAccordion>
                </>
            )}

            <br />

            {/* === Connections === */}
            <P3xrAccordion title={strings?.label?.connections} accordionKey="settings"
                actions={
                    <>
                        <P3xrButton
                            label={strings?.label?.grouped}
                            icon={groupModeEnabled ? <CheckBox fontSize="small" /> : <CheckBoxOutlineBlank fontSize="small" />}
                            onClick={toggleGroupMode}
                        />
                        {!readonlyConnections && (
                            <P3xrButton
                                label={strings?.intention?.connectionAdd}
                                icon={<AddBox fontSize="small" />}
                                onClick={() => handleConnectionForm('new')}
                            />
                        )}
                    </>
                }>
                {connectionsList.length === 0 && (
                    <Box sx={{ p: 2 }}>{strings?.intention?.noConnectionsInSettings}</Box>
                )}

                {/* Grouped mode: groups are draggable + connections within each group are draggable */}
                {connectionsList.length > 0 && groupModeEnabled && (
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEndGroupReorder}>
                        <SortableContext items={groupedConnections.map(g => `group-${g.name}`)} strategy={verticalListSortingStrategy}>
                            {groupedConnections.map(group => (
                                <SortableGroupBlock key={group.name} group={group}>
                                    <Box
                                        onClick={() => toggleGroup(group.name)}
                                        sx={(theme) => ({
                                            display: 'flex', alignItems: 'center', gap: 1,
                                            px: 2, py: 1, cursor: 'grab', fontWeight: 700,
                                            fontSize: 13, userSelect: 'none', opacity: 0.8,
                                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                                            borderBottom: 1,
                                            borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)',
                                            '&:hover': {
                                                opacity: 1,
                                                bgcolor: 'action.hover',
                                            },
                                        })}
                                    >
                                        {collapsedGroups.has(group.name) ? <ChevronRight sx={{ fontSize: 18 }} /> : <ExpandMore sx={{ fontSize: 18 }} />}
                                        <span>{group.name || strings?.label?.ungrouped}</span>
                                        <span style={{ opacity: 0.5, fontWeight: 400, fontSize: 12 }}>({group.connections.length})</span>
                                    </Box>
                                    {!collapsedGroups.has(group.name) && (
                                        <DndContext sensors={sensors} collisionDetection={closestCenter}
                                            onDragEnd={e => handleDragEndGroup(e, group.name)}>
                                            <SortableContext items={group.connections.map((c: any) => c.id)} strategy={verticalListSortingStrategy}>
                                                {group.connections.map((conn: any, i: number) => (
                                                    <SortableConnectionItem key={conn.id} conn={conn} isLast={i === group.connections.length - 1}>
                                                        <ConnectionButtons conn={conn} />
                                                    </SortableConnectionItem>
                                                ))}
                                            </SortableContext>
                                        </DndContext>
                                    )}
                                </SortableGroupBlock>
                            ))}
                        </SortableContext>
                    </DndContext>
                )}

                {/* Flat mode with drag & drop */}
                {connectionsList.length > 0 && !groupModeEnabled && (
                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEndFlat}>
                        <SortableContext items={connectionsList.map((c: any) => c.id)} strategy={verticalListSortingStrategy}>
                            {connectionsList.map((conn: any, i: number) => (
                                <SortableConnectionItem key={conn.id} conn={conn} isLast={i === connectionsList.length - 1}>
                                    <ConnectionButtons conn={conn} />
                                </SortableConnectionItem>
                            ))}
                        </SortableContext>
                    </DndContext>
                )}
            </P3xrAccordion>
            {currentConnectionId && <>
                <br />
                {/* === ACL Users === */}
                <P3xrAccordion title={`${strings?.page?.acl?.title} — ${currentConnectionName}`} accordionKey="acl-users"
                    actions={<>
                        <P3xrButton icon={<Refresh fontSize="small" />}
                            label={strings?.intention?.refresh} color="inherit"
                            onClick={(e) => { e.stopPropagation(); loadAclUsers() }} />
                        {!readonlyConnections && <P3xrButton icon={<PersonAdd fontSize="small" />}
                            label={strings?.page?.acl?.createUser} color="inherit"
                            onClick={(e) => {
                                e.stopPropagation()
                                setAclEditIsNew(true); setAclEditUsername(''); setAclEditRules('on >password +@all ~* &*'); setAclEditOpen(true)
                            }} />}
                    </>}>
                    {aclLoading
                        ? <Box sx={{ p: 2, opacity: 0.6 }}>{strings?.page?.acl?.loading}</Box>
                        : !aclUsers
                            ? <Box sx={{ p: 2, opacity: 0.6 }}>{strings?.page?.acl?.noUsers}</Box>
                            : <Box>
                                {aclUsers.map((user, idx) => (
                                    <Box key={user.name}>
                                        <Box sx={{
                                            display: 'flex', alignItems: 'center', gap: 0.5,
                                            px: 1, pl: 2, py: 1, minHeight: 56,
                                            ...(!readonlyConnections ? { cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } } : {}),
                                        }} onClick={!readonlyConnections ? () => {
                                            setAclEditIsNew(false); setAclEditUsername(user.name)
                                            setAclEditRules(user.raw.split(' ').slice(2).join(' ')); setAclEditOpen(true)
                                        } : undefined}>
                                            <Box sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center' }}>
                                                <Box component="span" sx={{ fontWeight: 700 }}>{user.name}</Box>
                                                {user.name === aclCurrentUser && <Box component="span" sx={{ opacity: 0.5, ml: 0.5, fontSize: 11, lineHeight: 1 }}>({strings?.page?.acl?.currentUser})</Box>}
                                            </Box>
                                            {!user.enabled && (
                                                <Tooltip title={strings?.page?.acl?.disabled} placement="top">
                                                    <Warning sx={{ fontSize: 20, color: 'warning.main' }} />
                                                </Tooltip>
                                            )}
                                            {!readonlyConnections && (
                                                <Box onClick={e => e.stopPropagation()} sx={{ display: 'flex', gap: 0.5 }}>
                                                    {user.name !== 'default' && user.name !== aclCurrentUser && (
                                                        <ActionBtn icon={<Delete fontSize="small" />}
                                                            label={strings?.page?.acl?.deleteUser} color="error"
                                                            onClick={async () => {
                                                                try {
                                                                    await confirm({ message: `${strings?.page?.acl?.confirmDelete} "${user.name}"?` })
                                                                    await request({ action: 'acl/del-user', payload: { username: user.name } })
                                                                    toast(strings?.page?.acl?.userDeleted)
                                                                    loadAclUsers()
                                                                } catch {}
                                                            }} />
                                                    )}
                                                    <ActionBtn icon={<Edit fontSize="small" />}
                                                        label={strings?.page?.acl?.editUser} color="primary"
                                                        onClick={() => {
                                                            setAclEditIsNew(false); setAclEditUsername(user.name)
                                                            setAclEditRules(user.raw.split(' ').slice(2).join(' ')); setAclEditOpen(true)
                                                        }} />
                                                </Box>
                                            )}
                                        </Box>
                                        {idx < aclUsers.length - 1 && <Divider />}
                                    </Box>
                                ))}
                            </Box>
                    }
                </P3xrAccordion>
                <AclUserDialog
                    open={aclEditOpen}
                    username={aclEditUsername}
                    rules={aclEditRules}
                    isNew={aclEditIsNew}
                    onClose={async (result) => {
                        setAclEditOpen(false)
                        if (result) {
                            try {
                                await request({ action: 'acl/set-user', payload: { username: result.username, rules: result.rules } })
                                toast(strings?.page?.acl?.userSaved)
                                loadAclUsers()
                            } catch (err) { generalHandleError(err) }
                        }
                    }}
                />
            </>}
            <br />
            {/* === GUI Framework === */}
            <P3xrAccordion title="GUI" accordionKey="gui-framework">
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                    <Box sx={{
                        display: 'inline-flex', alignItems: 'stretch', borderRadius: '4px', overflow: 'hidden',
                        border: 1, borderColor: 'divider',
                    }}>
                        <Box component="span"
                            onClick={() => switchGui('ng')}
                            sx={{
                                px: 1.5, py: 1, cursor: 'pointer', fontWeight: 500,
                                fontSize: 14, userSelect: 'none',
                                display: 'inline-flex', alignItems: 'center',
                                color: 'text.primary',
                                '&:hover': { bgcolor: 'action.hover' },
                            }}>
                            <i className="fab fa-angular" style={{ color: '#dd0031', marginRight: 6, fontSize: 22 }} />Angular
                        </Box>
                        <Box component="span"
                            sx={{
                                px: 1.5, py: 1, fontWeight: 700,
                                fontSize: 14, userSelect: 'none',
                                display: 'inline-flex', alignItems: 'center',
                                bgcolor: 'primary.main', color: 'primary.contrastText',
                            }}>
                            <i className="fab fa-react" style={{ color: '#61dafb', marginRight: 6, fontSize: 20, textShadow: '0 0 3px rgba(0,0,0,0.6), 0 0 8px rgba(0,0,0,0.3)' }} />React
                        </Box>
                        <Box component="span"
                            onClick={() => switchGui('vue')}
                            sx={{
                                px: 1.5, py: 1, cursor: 'pointer', fontWeight: 500,
                                fontSize: 14, userSelect: 'none',
                                display: 'inline-flex', alignItems: 'center',
                                color: 'text.primary',
                                '&:hover': { bgcolor: 'action.hover' },
                            }}>
                            <i className="fab fa-vuejs" style={{ color: '#42b883', marginRight: 6, fontSize: 26 }} />Vue
                        </Box>
                    </Box>
                </Box>
            </P3xrAccordion>
            <br />
            {/* === AI Settings === */}
            <P3xrAccordion title={strings?.label?.aiSettings} accordionKey="ai-settings"
                actions={
                    !readonlyConnections && !cfg?.groqApiKeyReadonly ? (
                        <P3xrButton
                            label={strings?.intention?.edit}
                            icon={<Edit fontSize="small" />}
                            onClick={() => setAiDialogOpen(true)}
                        />
                    ) : undefined
                }>
                <List disablePadding>
                    <ListItem>
                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, fontWeight: 500 }}>{strings?.label?.aiEnabled}</Box>
                            <Switch checked={isAiEnabled} disabled={isAiReadonly} onChange={(_, checked) => toggleAiEnabled(checked)} />
                        </Box>
                    </ListItem>
                    {isAiEnabled && hasGroqApiKey && (
                        <>
                            <Divider />
                            <ListItem>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Box sx={{ flex: 1, fontWeight: 500 }}>{strings?.label?.aiRouteViaNetwork}</Box>
                                        <Switch checked={!isUseOwnKey} disabled={isAiReadonly} onChange={(_, checked) => toggleUseOwnKey(!checked)} />
                                    </Box>
                                    <Box sx={{ fontSize: 12, opacity: 0.7 }}>
                                        {isUseOwnKey ? strings?.label?.aiRoutingDirect : strings?.label?.aiRoutingNetwork}
                                        {!isUseOwnKey && (
                                            <> <a href="https://console.groq.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>console.groq.com</a></>
                                        )}
                                    </Box>
                                </Box>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <Box sx={{ display: 'flex', width: '100%' }}>
                                    <Box sx={{ flex: 1, fontWeight: 500 }}>{strings?.label?.aiGroqApiKey}</Box>
                                    <Box sx={{ fontFamily: 'monospace' }}>{cfg?.groqApiKeyMasked}</Box>
                                </Box>
                            </ListItem>
                        </>
                    )}
                </List>
            </P3xrAccordion>
            <br />
            {/* === Notifications === */}
            <P3xrAccordion title={strings?.label?.desktopNotifications} accordionKey="desktop-notifications">
                <List disablePadding>
                    <ListItem>
                        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center' }}>
                            <Box sx={{ flex: 1, fontWeight: 500 }}>{strings?.label?.desktopNotificationsEnabled}</Box>
                            <Switch checked={isNotificationsEnabled()} onChange={(_, checked) => { setNotificationsEnabled(checked); setNotifToggle(checked) }} />
                        </Box>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Box sx={{ fontSize: 12, opacity: 0.7 }}>{strings?.label?.desktopNotificationsInfo}</Box>
                    </ListItem>
                </List>
            </P3xrAccordion>
            <br />
            {/* === Tree/Redis Settings === */}
            <P3xrAccordion title={strings?.form?.treeSettings?.label?.formName} accordionKey="tree-settings"
                actions={
                    <P3xrButton
                        label={strings?.intention?.edit}
                        icon={<Edit fontSize="small" />}
                        onClick={() => setTreeDialogOpen(true)}
                    />
                }>
                <List disablePadding>
                    {[
                        { label: strings?.form?.treeSettings?.field?.treeSeparator, value: settings.redisTreeDivider || strings?.label?.treeSeparatorEmptyNote },
                        { label: strings?.form?.treeSettings?.field?.page, value: settings.pageCount, hint: strings?.form?.treeSettings?.error?.page },
                        { label: strings?.form?.treeSettings?.field?.keyPageCount, value: settings.keyPageCount, hint: strings?.form?.treeSettings?.error?.keyPageCount },
                        { label: strings?.form?.treeSettings?.maxValueDisplay, value: settings.maxValueDisplay, hint: strings?.form?.treeSettings?.maxValueDisplayInfo },
                        { label: strings?.form?.treeSettings?.maxKeys, value: settings.maxKeys, hint: strings?.form?.treeSettings?.maxKeysInfo },
                        { label: strings?.form?.treeSettings?.field?.keysSort, value: settings.keysSort ? strings?.label?.keysSort?.on : strings?.label?.keysSort?.off },
                        { label: strings?.form?.treeSettings?.field?.searchMode, value: settings.searchClientSide ? strings?.form?.treeSettings?.label?.searchModeClient : strings?.form?.treeSettings?.label?.searchModeServer },
                        { label: strings?.form?.treeSettings?.field?.searchModeStartsWith, value: settings.searchStartsWith ? strings?.form?.treeSettings?.label?.searchModeStartsWith : strings?.form?.treeSettings?.label?.searchModeIncludes },
                        { label: null, value: settings.jsonFormat === 2 ? strings?.form?.treeSettings?.label?.jsonFormatTwoSpace : strings?.form?.treeSettings?.label?.jsonFormatFourSpace },
                        { label: null, value: settings.animation ? strings?.form?.treeSettings?.label?.animation : strings?.form?.treeSettings?.label?.noAnimation },
                        { label: null, value: settings.undoEnabled ? (strings?.form?.treeSettings?.label?.undoEnabled) : (strings?.form?.treeSettings?.label?.undoDisabled), hint: strings?.form?.treeSettings?.undoHint },
                        { label: null, value: settings.showDiffBeforeSave ? (strings?.form?.treeSettings?.label?.diffEnabled) : (strings?.form?.treeSettings?.label?.diffDisabled) },
                    ].map((item, i, arr) => (
                        <Box key={i}>
                            <ListItemButton onClick={() => setTreeDialogOpen(true)} sx={{ px: 2, py: 1 }}>
                                <Box sx={{ width: '100%' }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        {item.label && <Box sx={{ flex: 1, fontWeight: 500 }}>{item.label}</Box>}
                                        <Box sx={{ fontWeight: item.label ? 400 : 500, opacity: item.label ? 0.8 : 1 }}>{String(item.value)}</Box>
                                    </Box>
                                    {item.hint && <Box sx={{ fontSize: 12, opacity: 0.7 }}>{item.hint}</Box>}
                                </Box>
                            </ListItemButton>
                            {i < arr.length - 1 && <Divider />}
                        </Box>
                    ))}
                </List>
            </P3xrAccordion>

            <Box sx={{ height: 8 }} />

            {/* Dialogs */}
            <ConnectionDialog
                open={dialogOpen}
                type={dialogType}
                model={dialogModel}
                onClose={() => setDialogOpen(false)}
            />
            <AiSettingsDialog
                open={aiDialogOpen}
                onClose={() => setAiDialogOpen(false)}
            />
            <TreeSettingsDialog
                open={treeDialogOpen}
                onClose={() => setTreeDialogOpen(false)}
            />
        </>
    )
}
