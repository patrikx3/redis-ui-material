import { useState, useEffect } from 'react'
import { Button, TextField, Switch, Checkbox, FormControlLabel, useMediaQuery, Tooltip, Box, Chip, Autocomplete, useTheme, Alert } from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useCommonStore } from '../stores/common.store'
import P3xrDialog from '../components/P3xrDialog'

interface AclUserDialogProps {
    open: boolean
    onClose: (result?: { username: string; rules: string[] }) => void
    username?: string
    rules?: string
    isNew: boolean
}

function parseRules(rules: string) {
    const tokens = rules.trim().split(/\s+/).filter(Boolean)
    let enabled = true, nopass = false
    const cmds: string[] = [], keys: string[] = [], channels: string[] = []

    for (const t of tokens) {
        if (t === 'on') enabled = true
        else if (t === 'off') enabled = false
        else if (t === 'nopass') nopass = true
        else if (t.startsWith('>') || t.startsWith('<') || t.startsWith('#') || t === 'resetpass' || t === 'sanitize-payload' || t === 'skip-sanitize-payload') continue
        else if (t.startsWith('+') || t.startsWith('-') || t === 'allcommands' || t === 'nocommands') cmds.push(t)
        else if (t.startsWith('~') || t.startsWith('%') || t === 'allkeys' || t === 'resetkeys') keys.push(t)
        else if (t.startsWith('&') || t === 'allchannels' || t === 'resetchannels') channels.push(t)
    }

    return { enabled, nopass, cmds, keys, channels }
}

function chipColor(rule: string): 'primary' | 'error' {
    return rule.startsWith('-') ? 'error' : 'primary'
}

interface AclOption { label: string; groupKey: string }

const CMD_DEFS: AclOption[] = [
    '+@all', '-@all', '+@read', '-@read', '+@write', '-@write', '+@admin', '-@admin', '+@dangerous', '-@dangerous',
].map(label => ({ label, groupKey: 'groupCommon' })).concat([
    '+@string', '+@hash', '+@list', '+@set', '+@sortedset', '+@stream', '+@geo', '+@bitmap', '+@hyperloglog',
].map(label => ({ label, groupKey: 'groupDataTypes' }))).concat([
    '+@keyspace', '+@pubsub', '+@connection', '+@transaction', '+@scripting', '+@fast', '+@slow', '+@blocking',
].map(label => ({ label, groupKey: 'groupOperations' })))

const KEY_OPTIONS = ['~*', '%R~*', '%W~*', 'resetkeys']
const CHANNEL_OPTIONS = ['&*', 'resetchannels']

export default function AclUserDialog({ open, onClose, username: initUsername = '', rules: initRules = '', isNew }: AclUserDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const confirm = useCommonStore(s => s.confirm)
    const isWide = useMediaQuery('(min-width: 600px)')
    const muiTheme = useTheme()

    const [username, setUsername] = useState('')
    const [enabled, setEnabled] = useState(true)
    const [nopass, setNopass] = useState(false)
    const [password, setPassword] = useState('')
    const [commandsList, setCommandsList] = useState<string[]>([])
    const [keysList, setKeysList] = useState<string[]>([])
    const [channelsList, setChannelsList] = useState<string[]>([])

    useEffect(() => {
        if (open) {
            setUsername(initUsername)
            setPassword('')
            const parsed = parseRules(initRules)
            setEnabled(parsed.enabled)
            setNopass(parsed.nopass)
            setCommandsList(parsed.cmds)
            setKeysList(parsed.keys)
            setChannelsList(parsed.channels)
        }
    }, [open, initUsername, initRules])

    if (!open) return null

    const handleSave = async () => {
        const u = username.trim()
        if (!u) return
        try { await confirm({ message: strings?.intention?.areYouSure }) }
        catch { return }
        const rules: string[] = [enabled ? 'on' : 'off']
        if (!isNew) {
            // Reset permissions first so removals take effect
            rules.push('nocommands', 'resetkeys', 'resetchannels')
            if (nopass) rules.push('resetpass', 'nopass')
            else if (password.trim()) rules.push('resetpass', '>' + password.trim())
        } else {
            if (nopass) rules.push('nopass')
            else if (password.trim()) rules.push('>' + password.trim())
        }
        rules.push(...commandsList, ...keysList, ...channelsList)
        onClose({ username: u, rules })
    }

    const handleCancel = () => onClose()

    const title = isNew
        ? strings?.page?.acl?.createUser
        : strings?.page?.acl?.editUser

    const primaryBg = muiTheme.palette.primary.main
    const primaryFg = muiTheme.palette.primary.contrastText
    const warnBg = muiTheme.palette.warning.main
    const warnFg = muiTheme.palette.warning.contrastText

    const chipInput = (label: string, hint: string, placeholder: string, value: string[], onChange: (v: string[]) => void, options: string[]) => (
        <Autocomplete
            multiple freeSolo
            options={options.filter(o => !value.includes(o))}
            value={value}
            onChange={(_, newValue) => onChange(newValue as string[])}
            renderValue={(val, getItemProps) =>
                (val as string[]).map((option, index) => {
                    const { key, ...rest } = getItemProps({ index })
                    return <Chip key={key} label={String(option)} {...rest} size="small"
                        style={{ backgroundColor: primaryBg, color: primaryFg }} />
                })
            }
            renderInput={(params) => (
                <TextField {...params} label={label} helperText={hint}
                    placeholder={placeholder} margin="dense" />
            )}
        />
    )

    return (
        <P3xrDialog
            open onClose={handleCancel} title={title} width="600px"
            actions={<>
                {isWide ? (
                    <Button variant="contained" color="warning" size="small" onClick={handleCancel}
                        sx={{ minWidth: 'auto', px: 1, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                        <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.cancel} placement="top">
                        <Button variant="contained" color="warning" onClick={handleCancel}
                            sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                            <Cancel fontSize="small" />
                        </Button>
                    </Tooltip>
                )}
                {isWide ? (
                    <Button variant="contained" color="primary" size="small" onClick={handleSave}
                        disabled={!username.trim()}
                        sx={{ minWidth: 'auto', px: 1, textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                        <Done fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.save}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.save} placement="top">
                        <span>
                            <Button variant="contained" color="primary" onClick={handleSave}
                                disabled={!username.trim()}
                                sx={{ minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '4px' }}>
                                <Done fontSize="small" />
                            </Button>
                        </span>
                    </Tooltip>
                )}
            </>}
        >
            <TextField fullWidth margin="dense"
                label={strings?.page?.acl?.username}
                value={username} onChange={e => setUsername(e.target.value)}
                disabled={!isNew} />

            {username === 'default' && (
                <Alert severity="warning" sx={{ my: 1, fontSize: 13 }}>
                    {strings?.page?.acl?.defaultUserWarning}
                </Alert>
            )}

            <Box sx={{ mb: 1 }}>
                <FormControlLabel
                    control={<Switch checked={enabled} onChange={(_, v) => setEnabled(v)} />}
                    label={strings?.page?.acl?.enabled} />
            </Box>

            <Box sx={{ mb: 1 }}>
                <FormControlLabel
                    control={<Checkbox checked={nopass} onChange={(_, v) => setNopass(v)} />}
                    label={strings?.page?.acl?.noPassword} />
            </Box>

            {!nopass && (
                <TextField fullWidth margin="dense" type="password" autoComplete="new-password"
                    label={strings?.page?.acl?.password}
                    value={password} onChange={e => setPassword(e.target.value)}
                    helperText={!isNew ? strings?.page?.acl?.passwordHint : undefined} />
            )}

            <Autocomplete
                multiple freeSolo
                options={CMD_DEFS.filter(o => !commandsList.includes(o.label))}
                groupBy={(o) => typeof o === 'string' ? '' : (strings?.page?.acl as any)?.[o.groupKey] || o.groupKey}
                getOptionLabel={(o) => typeof o === 'string' ? o : o.label}
                value={commandsList}
                onChange={(_, v) => setCommandsList(v.map((x: any) => typeof x === 'string' ? x : x.label))}
                renderValue={(val, getItemProps) =>
                    (val as string[]).map((option, index) => {
                        const { key, ...rest } = getItemProps({ index })
                        const s = String(option)
                        const deny = s.charAt(0) === '-'
                        return <Chip key={key} label={s} {...rest} size="small"
                            style={{
                                backgroundColor: deny ? warnBg : primaryBg,
                                color: deny ? warnFg : primaryFg,
                            }} />
                    })
                }
                renderInput={(params) => (
                    <TextField {...params} label={strings?.page?.acl?.commands}
                        helperText={strings?.page?.acl?.commandsHint}
                        placeholder="+@all, -@dangerous ..." margin="dense" />
                )}
            />

            {chipInput(
                strings?.page?.acl?.keys,
                strings?.page?.acl?.keysHint,
                '~*, ~user:* ...',
                keysList, setKeysList, KEY_OPTIONS
            )}

            {chipInput(
                strings?.page?.acl?.channels,
                strings?.page?.acl?.channelsHint,
                '&*, &notifications:* ...',
                channelsList, setChannelsList, CHANNEL_OPTIONS
            )}
        </P3xrDialog>
    )
}
