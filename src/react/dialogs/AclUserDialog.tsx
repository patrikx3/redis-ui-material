import { useState, useEffect } from 'react'
import { Button, TextField, Switch, Checkbox, FormControlLabel, useMediaQuery, Tooltip, Box, Chip, Autocomplete } from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
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

function chipColor(rule: string): 'primary' | 'error' | 'default' {
    if (rule.startsWith('-')) return 'error'
    if (rule.startsWith('+')) return 'primary'
    return 'default'
}

export default function AclUserDialog({ open, onClose, username: initUsername = '', rules: initRules = '', isNew }: AclUserDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const isWide = useMediaQuery('(min-width: 600px)')

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

    const handleSave = () => {
        const u = username.trim()
        if (!u) return
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
        ? (strings?.page?.acl?.createUser || 'Create User')
        : (strings?.page?.acl?.editUser || 'Edit User')

    const chipInput = (label: string, hint: string, placeholder: string, value: string[], onChange: (v: string[]) => void, colored?: boolean) => (
        <Autocomplete
            multiple freeSolo options={[]} value={value}
            onChange={(_, newValue) => onChange(newValue as string[])}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => {
                    const { key, ...rest } = getTagProps({ index })
                    return <Chip key={key} label={option} {...rest} size="small"
                        color={colored ? chipColor(option) : 'primary'}
                        variant="filled" />
                })
            }
            renderInput={(params) => (
                <TextField {...params} label={label} helperText={hint}
                    placeholder={value.length === 0 ? placeholder : ''} margin="dense" />
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
                        <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel || 'Cancel'}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.cancel || 'Cancel'} placement="top">
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
                        <Done fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.save || 'Save'}</span>
                    </Button>
                ) : (
                    <Tooltip title={strings?.intention?.save || 'Save'} placement="top">
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
                label={strings?.page?.acl?.username || 'Username'}
                value={username} onChange={e => setUsername(e.target.value)}
                disabled={!isNew} />

            <Box sx={{ my: 1 }}>
                <FormControlLabel
                    control={<Switch checked={enabled} onChange={(_, v) => setEnabled(v)} />}
                    label={strings?.page?.acl?.enabled || 'Enabled'} />
            </Box>

            <Box sx={{ mb: 1 }}>
                <FormControlLabel
                    control={<Checkbox checked={nopass} onChange={(_, v) => setNopass(v)} />}
                    label={strings?.page?.acl?.noPassword || 'No password (nopass)'} />
            </Box>

            {!nopass && (
                <TextField fullWidth margin="dense" type="password" autoComplete="new-password"
                    label={strings?.page?.acl?.password || 'Password'}
                    value={password} onChange={e => setPassword(e.target.value)}
                    helperText={!isNew ? (strings?.page?.acl?.passwordHint || 'Leave empty to keep current password') : undefined} />
            )}

            {chipInput(
                strings?.page?.acl?.commands || 'Commands',
                strings?.page?.acl?.commandsHint || 'e.g., +@all or +@read -@dangerous',
                '+@all, -@dangerous ...',
                commandsList, setCommandsList, true
            )}

            {chipInput(
                strings?.page?.acl?.keys || 'Key Patterns',
                strings?.page?.acl?.keysHint || 'e.g., ~* or ~user:*',
                '~*, ~user:* ...',
                keysList, setKeysList
            )}

            {chipInput(
                strings?.page?.acl?.channels || 'Pub/Sub Channels',
                strings?.page?.acl?.channelsHint || 'e.g., &* or &notifications:*',
                '&*, &notifications:* ...',
                channelsList, setChannelsList
            )}
        </P3xrDialog>
    )
}
