import { useMemo } from 'react'
import { List, ListItem, Divider, Box } from '@mui/material'
import P3xrAccordion from '../../components/P3xrAccordion'
import { useI18nStore } from '../../stores/i18n.store'
import { useRedisStateStore } from '../../stores/redis-state.store'
import { isShortcutsEnabled, getShortcutsWithDescriptions } from '../../stores/shortcuts'

const pairRowSx = { display: 'flex', width: '100%', gap: 2, alignItems: 'center' }
const labelSx = { flex: '1 1 auto', minWidth: 0, fontWeight: 700 }
const valueSx = { flex: '0 1 60%', minWidth: 0, textAlign: 'right' }

const Row = ({ label, value }: { label: React.ReactNode, value: React.ReactNode }) => (
    <>
        <ListItem>
            <Box sx={pairRowSx}>
                <Box sx={labelSx}>{label}</Box>
                <Box sx={valueSx}>{value}</Box>
            </Box>
        </ListItem>
        <Divider />
    </>
)

export default function InfoPage() {
    const strings = useI18nStore(s => s.strings)
    const version = useRedisStateStore(s => s.version)
    const connection = useRedisStateStore(s => s.connection)
    const info = useRedisStateStore(s => s.info)
    const modules = useRedisStateStore(s => s.modules)

    const isElectron = isShortcutsEnabled()
    const shortcutsList = useMemo(() => getShortcutsWithDescriptions(), [strings])

    const isConnected = !!connection
    const redisVersion = info?.server?.redis_version || '-'
    const moduleNames = (modules || []).map((m: any) => m.name)

    const languageList = useMemo(() => {
        const langObj = strings?.language || {}
        return Object.keys(langObj).sort().map(code => ({ code, name: langObj[code] }))
    }, [strings])

    return (
        <Box sx={{ pb: 1 }}>
            {/* Keyboard Shortcuts (Electron only) */}
            {isElectron && (
                <>
                    <P3xrAccordion title={strings?.label?.keyboardShortcuts} accordionKey="info-shortcuts">
                        <List disablePadding>
                            {shortcutsList.map(s => (
                                <Box key={s.key}>
                                    <ListItem>
                                        <Box sx={pairRowSx}>
                                            <Box sx={labelSx}>
                                                <Box component="kbd" sx={{
                                                    fontFamily: "'Roboto Mono', monospace", fontSize: 12,
                                                    border: 1, borderColor: 'divider', borderRadius: '4px',
                                                    px: 1, py: 0.25, minWidth: 70, textAlign: 'center',
                                                    bgcolor: 'action.hover', display: 'inline-block',
                                                }}>
                                                    {s.key}
                                                </Box>
                                            </Box>
                                            <Box sx={valueSx}>{s.description}</Box>
                                        </Box>
                                    </ListItem>
                                    <Divider />
                                </Box>
                            ))}
                        </List>
                    </P3xrAccordion>
                    <br />
                        </>
            )}

            {/* About */}
            <P3xrAccordion title={strings?.label?.about} accordionKey="info-about">
                <List disablePadding>
                    <Row label={strings?.label?.version} value={version} />
                    {isConnected && <Row label={strings?.label?.redisVersion} value={redisVersion} />}
                    {isConnected && moduleNames.length > 0 && (
                        <Row label={strings?.label?.modules} value={moduleNames.join(', ')} />
                    )}
                    <Row label="GitHub"
                        value={<a href="https://github.com/patrikx3/redis-ui" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>patrikx3/redis-ui</a>} />
                    <Row label={strings?.title?.donate}
                        value={<a href="https://www.paypal.me/patrikx3" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>PayPal</a>} />
                    <Row label={strings?.intention?.githubChangelog}
                        value={<a href="https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>change-log.md</a>} />
                </List>
            </P3xrAccordion>
            <br />
            {/* Supported Languages */}
            <P3xrAccordion title={`${strings?.label?.supportedLanguages} (${languageList.length})`} accordionKey="info-languages">
                <List disablePadding>
                    {languageList.map(lang => (
                        <Box key={lang.code}>
                            <ListItem>
                                <Box sx={pairRowSx}>
                                    <Box sx={labelSx}>
                                        <Box component="kbd" sx={{
                                            fontFamily: "'Roboto Mono', monospace", fontSize: 11,
                                            border: 1, borderColor: 'divider', borderRadius: '4px',
                                            px: 1, py: 0.25, minWidth: 50, textAlign: 'center',
                                            bgcolor: 'action.hover', display: 'inline-block',
                                        }}>
                                            {lang.code}
                                        </Box>
                                    </Box>
                                    <Box sx={valueSx}>{lang.name}</Box>
                                </Box>
                            </ListItem>
                            <Divider />
                        </Box>
                    ))}
                </List>
            </P3xrAccordion>
        </Box>
    )
}
