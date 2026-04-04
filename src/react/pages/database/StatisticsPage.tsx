import { useMemo, useState, useEffect } from 'react'
import { Box, Tabs, Tab, Typography, useTheme } from '@mui/material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useThemeStore } from '../../stores/theme.store'
import { useMainCommandStore, onCommandEvent } from '../../stores/main-command.store'

const EXCLUDE = ['in', 'run', 'per']
const INCLUDE = ['sha1']
const REPLACE: Record<string, string> = { perc: 'percent', sec: 'seconds' }

function generateKey(key: string, strings: any): string {
    if (strings?.title?.hasOwnProperty(key)) {
        return strings.title[key]
    }
    return key.split('_').map((instance, index) => {
        if (REPLACE.hasOwnProperty(instance)) {
            instance = REPLACE[instance]
        }
        if (INCLUDE.includes(instance) ||
            (instance.length < 4 && !EXCLUDE.includes(instance))) {
            return instance.toUpperCase()
        } else if (index === 0) {
            return instance[0].toUpperCase() + instance.substring(1)
        }
        return instance
    }).join(' ')
}

function formatValue(value: any): string {
    if (value === null || value === undefined) return ''
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
}

interface TabSection {
    key: string
    label: string
    items: Array<{ key: string; value: any }>
}

export default function StatisticsPage() {
    const strings = useI18nStore(s => s.strings)
    const info = useRedisStateStore(s => s.info)
    const modules = useRedisStateStore(s => s.modules)
    const connection = useRedisStateStore(s => s.connection)
    const redisChanged = useRedisStateStore(s => s.redisChanged)
    const muiTheme = useTheme()
    const themeKey = useThemeStore(s => s.themeKey)
    const [topTab, setTopTab] = useState(0)
    const [dbTab, setDbTab] = useState(0)
    const itemBorderColor = muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'

    // Broadcast tree refresh if state changed
    useEffect(() => {
        if (redisChanged) {
            useRedisStateStore.setState({ redisChanged: false })
        }
    }, [redisChanged])

    const isCluster = connection?.cluster === true

    // Parse keyspace databases
    const keyspaceDatabaseEntries = useMemo(() => {
        const ksDbs = info?.keyspaceDatabases ?? {}
        return Object.keys(ksDbs).map(k => ({ key: k, value: ksDbs[k] }))
    }, [info])

    const keyspaceItems = useMemo(() => {
        const result: Record<string, Array<{ key: string; value: any }>> = {}
        for (const dbEntry of keyspaceDatabaseEntries) {
            const ks = info?.keyspace?.['db' + dbEntry.key]
            result[dbEntry.key] = ks
                ? Object.keys(ks).map(k => ({ key: k, value: ks[k] }))
                : []
        }
        return result
    }, [info, keyspaceDatabaseEntries])

    const hasDatabases = keyspaceDatabaseEntries.length > 0

    // Parse info sections + modules
    const infoSections: TabSection[] = useMemo(() => {
        if (!info) return []
        const sections = Object.keys(info)
            .filter(k => k !== 'keyspace' && k !== 'keyspaceDatabases')
            .map(k => ({
                key: k,
                label: generateKey(k, strings),
                items: Object.keys(info[k]).map(ik => ({ key: ik, value: info[k][ik] })),
            }))

        // Replace or add modules section
        const mods = Array.isArray(modules) ? modules : []
        if (mods.length > 0) {
            const moduleItems = mods.map((m: any) => ({ key: m.name, value: `v${m.ver}` }))
            const existingIdx = sections.findIndex(s => s.key.toLowerCase() === 'modules')
            if (existingIdx >= 0) {
                sections[existingIdx].items = moduleItems
            } else {
                sections.push({ key: 'modules', label: generateKey('modules', strings), items: moduleItems })
            }
        }

        return sections
    }, [info, modules, strings])

    // All top-level tabs: DB (if applicable) + info sections
    const allTabs = useMemo(() => {
        const tabs: TabSection[] = []
        if (hasDatabases && !isCluster) {
            tabs.push({
                key: '__db__',
                label: strings?.title?.db ?? 'DB',
                items: [],
            })
        }
        tabs.push(...infoSections)
        return tabs
    }, [hasDatabases, isCluster, infoSections, strings])

    if (!connection) {
        return <Box sx={{ p: 2 }}><Typography>{strings?.title?.main}</Typography></Box>
    }

    const currentTab = allTabs[topTab]
    const isDbTab = currentTab?.key === '__db__'

    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Top-level tabs */}
            <Tabs
                value={Math.min(topTab, allTabs.length - 1)}
                onChange={(_, v) => setTopTab(v)}
                variant="scrollable"
                scrollButtons="auto"
                textColor="inherit"
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 2,
                    bgcolor: muiTheme.palette.background.paper,
                    backgroundImage: 'none',
                    flexShrink: 0,
                    '& .MuiTab-root': { color: muiTheme.p3xr.treecontrolIconColor, textTransform: 'none' },
                    '& .MuiTab-root.Mui-selected': { color: muiTheme.palette.text.primary },
                    '& .MuiTabs-indicator': { bgcolor: muiTheme.p3xr.matSysPrimary },
                }}
            >
                {allTabs.map(tab => (
                    <Tab key={tab.key} label={tab.label} />
                ))}
            </Tabs>

            {/* Tab content */}
            <Box sx={{ flex: 1, overflow: 'auto' }}>
                {isDbTab ? (
                    /* Nested DB keyspace tabs */
                    <Box>
                        <Tabs
                            value={Math.min(dbTab, keyspaceDatabaseEntries.length - 1)}
                            onChange={(_, v) => setDbTab(v)}
                            variant="scrollable"
                            scrollButtons="auto"
                            textColor="inherit"
                            sx={() => {
                                const isMatrix = themeKey === 'matrix'
                                const activeColor = isMatrix ? 'rgba(0,0,0,0.87)' : 'white'
                                const inactiveColor = isMatrix ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)'
                                return {
                                    bgcolor: 'primary.main',
                                    '& .MuiTab-root': { color: inactiveColor },
                                    '& .MuiTab-root.Mui-selected': { color: activeColor },
                                    '& .MuiTabs-indicator': { bgcolor: activeColor },
                                    '& .MuiTabScrollButton-root': { color: inactiveColor },
                                }
                            }}
                        >
                            {keyspaceDatabaseEntries.map(dbEntry => (
                                <Tab key={dbEntry.key} label={dbEntry.key} />
                            ))}
                        </Tabs>
                        {keyspaceDatabaseEntries.map((dbEntry, i) => (
                            dbTab === i && (
                                <Box key={dbEntry.key} sx={{ px: 2, py: 1 }}>
                                    {(keyspaceItems[dbEntry.key] ?? []).map(item => (
                                        <Box key={item.key} sx={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            justifyContent: 'space-between',
                                            py: '8px',
                                            borderBottom: '1px solid',
                                            borderColor: itemBorderColor,
                                        }}>
                                            <strong>{generateKey(item.key, strings)}</strong>
                                            <span style={{ textAlign: 'right' }}>{item.value}</span>
                                        </Box>
                                    ))}
                                </Box>
                            )
                        ))}
                    </Box>
                ) : currentTab ? (
                    /* Info section content */
                    <Box sx={{ px: 2, py: 1 }}>
                        {currentTab.items.map(item => (
                            <Box key={item.key} sx={{
                                display: 'flex',
                                alignItems: 'baseline',
                                justifyContent: 'space-between',
                                py: '8px',
                                borderBottom: '1px solid',
                                borderColor: itemBorderColor,
                            }}>
                                <strong>{generateKey(item.key, strings)}</strong>
                                <Box sx={{ textAlign: 'right', wordBreak: 'break-all', maxWidth: '60%' }}>
                                    {formatValue(item.value)}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : null}
            </Box>
        </Box>
    )
}
