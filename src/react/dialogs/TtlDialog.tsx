import { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material'
import { Timer, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useSettingsStore } from '../stores/settings.store'
import P3xrDialog from '../components/P3xrDialog'
import humanizeDuration from 'humanize-duration'
import timestring from 'timestring'

interface Props {
    open: boolean
    ttl: number | string
    onClose: (result?: { model: { ttl: number } }) => void
}

export default function TtlDialog({ open, ttl: initialTtl, onClose }: Props) {
    const strings = useI18nStore(s => s.strings)
    const [ttl, setTtl] = useState<number | string>(-1)
    const [textTime, setTextTime] = useState('')

    useEffect(() => {
        if (!open) return
        const t = initialTtl ?? -1
        setTtl(t)
        if (typeof t === 'number' && t > 0) {
            try {
                const hdOpts = useSettingsStore.getState().getHumanizeDurationOptions()
                setTextTime(humanizeDuration(t * 1000, { ...hdOpts, delimiter: ' ' }))
            } catch { setTextTime('') }
        } else {
            setTextTime('')
        }
    }, [open, initialTtl])

    const onTextTimeChange = (value: string) => {
        setTextTime(value)
        try { setTtl(timestring(String(value), 's')) }
        catch { /* parse error */ }
    }

    const submit = () => {
        let t = Number(ttl)
        if (isNaN(t)) t = Math.round(t)
        onClose({ model: { ttl: t } })
    }

    if (!open) return null

    return (
        <P3xrDialog open onClose={() => onClose()} width="600px"
            title={strings?.confirm?.ttl?.title}
            actions={
                <>
                    <Button variant="contained" color="error" size="small" onClick={() => onClose()}>
                        <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                    </Button>
                    <Button variant="contained" color="primary" size="small" onClick={submit}>
                        <Timer fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.ttl}</span>
                    </Button>
                </>
            }>
            <Box sx={{ mb: 2 }}>{strings?.confirm?.ttl?.textContent}</Box>

            <TextField fullWidth margin="dense" type="number"
                label={strings?.confirm?.ttl?.placeholder}
                value={ttl}
                onChange={e => setTtl(e.target.value === '' ? '' : Number(e.target.value))}
                placeholder={strings?.confirm?.ttl?.placeholderPlaceholder ?? '-1'}
                slotProps={{ htmlInput: { min: -1 } }}
            />

            <TextField fullWidth margin="dense"
                label={strings?.confirm?.ttl?.convertTextToTime}
                value={textTime}
                onChange={e => onTextTimeChange(e.target.value)}
                placeholder={strings?.confirm?.ttl?.convertTextToTimePlaceholder ?? '1h 30m'}
            />

            <Button variant="text" color="secondary" size="small" sx={{ mt: 1, textTransform: 'none' }}
                onClick={() => window.open('https://www.npmjs.com/package/timestring#keywords', '_blank')}>
                https://www.npmjs.com/package/timestring
            </Button>
        </P3xrDialog>
    )
}
