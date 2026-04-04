import {
    Toolbar, Box, Select, MenuItem, Button, IconButton, Tooltip,
    useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material'
import { Save, ShowChart, Refresh, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { useMainCommandStore } from '../../stores/main-command.store'

export default function DatabaseHeader() {
    const strings = useI18nStore(s => s.strings)
    const connection = useRedisStateStore(s => s.connection)
    const currentDatabase = useRedisStateStore(s => s.currentDatabase)
    const databaseIndexes = useRedisStateStore(s => s.databaseIndexes)
    const info = useRedisStateStore(s => s.info)
    const { selectDatabase, save, statistics, refresh } = useMainCommandStore()
    const muiTheme = useTheme()

    const isXs = useMediaQuery('(max-width: 599px)')
    const isWide = useMediaQuery('(min-width: 720px)')
    const isReadonly = connection?.readonly === true
    const isCluster = connection?.cluster === true
    const hasConnection = !!connection

    const keyspaceDatabases = info?.keyspaceDatabases || {}
    const hasKeys = (dbIndex: number) => !!keyspaceDatabases[dbIndex]

    if (!hasConnection) return null

    return (
        <Toolbar
            variant="dense"
            disableGutters
            sx={{
                minHeight: '48px !important', height: 48, maxHeight: 48,
                px: '8px', pl: '16px',
                bgcolor: muiTheme.p3xr.accordionBg,
                color: muiTheme.p3xr.accordionColor,
                borderRadius: '4px 4px 0 0',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: 48 }}>
                {/* Title - hidden on xs */}
                {!isXs && (
                    <Box
                        component="h2"
                        onClick={() => statistics()}
                        sx={{
                            flex: 1, fontSize: 20, fontWeight: 400, m: 0,
                            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                            cursor: 'pointer', textDecoration: 'none', color: 'inherit',
                        }}
                    >
                        {strings?.intention?.main}
                    </Box>
                )}

                {/* DB selector */}
                {!isCluster && databaseIndexes.length > 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                        <Box component="span" sx={{ fontSize: 14, fontWeight: 'bold', mr: '2px' }}>DB:</Box>
                        <Select
                            size="small"
                            value={currentDatabase ?? 0}
                            onChange={e => selectDatabase(Number(e.target.value))}
                            variant="standard"
                            disableUnderline
                            sx={{
                                width: 80, fontSize: 14, color: 'inherit',
                                '& .MuiSelect-select': {
                                    display: 'flex', alignItems: 'center', gap: '4px',
                                    py: 0, background: 'transparent',
                                },
                                '& .MuiSelect-icon': { color: 'inherit' },
                            }}
                            renderValue={(val) => (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {hasKeys(val as number)
                                        ? <RadioButtonChecked sx={{ fontSize: 18 }} />
                                        : <RadioButtonUnchecked sx={{ fontSize: 18 }} />
                                    }
                                    {val as number}
                                </Box>
                            )}
                        >
                            {databaseIndexes.map(idx => (
                                <MenuItem key={idx} value={idx} sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    {hasKeys(idx)
                                        ? <RadioButtonChecked sx={{ fontSize: 18 }} />
                                        : <RadioButtonUnchecked sx={{ fontSize: 18 }} />
                                    }
                                    {idx}
                                </MenuItem>
                            ))}
                        </Select>
                    </Box>
                )}

                {/* Save (non-readonly only) */}
                {!isReadonly && (
                    isWide ? (
                        <Button sx={{ color: 'inherit' }} onClick={() => save()}>
                            <Save sx={{ mr: '4px' }} fontSize="small" />
                            <span>{strings?.intention?.save}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.save} placement="below">
                            <IconButton sx={{ color: 'inherit' }} onClick={() => save()}>
                                <Save fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    )
                )}

                {/* Statistics */}
                {isWide ? (
                    <Button sx={{ color: 'inherit' }} onClick={() => statistics()}>
                        <ShowChart sx={{ mr: '4px' }} fontSize="small" />
                        <span>{strings?.intention?.statistics}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.statistics} placement="below">
                        <IconButton sx={{ color: 'inherit' }} onClick={() => statistics()}>
                            <ShowChart fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}

                {/* Refresh */}
                {isWide ? (
                    <Button sx={{ color: 'inherit' }} onClick={() => refresh()}>
                        <Refresh sx={{ mr: '4px' }} fontSize="small" />
                        <span>{strings?.intention?.refresh}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.refresh} placement="below">
                        <IconButton sx={{ color: 'inherit' }} onClick={() => refresh()}>
                            <Refresh fontSize="small" />
                        </IconButton>
                    </Tooltip>
                )}
            </Box>
        </Toolbar>
    )
}
