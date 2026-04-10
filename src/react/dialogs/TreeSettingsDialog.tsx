import { useState, useEffect } from 'react'
import {
    TextField, Button, Switch, FormControlLabel, Tooltip,
    Box, useMediaQuery,
} from '@mui/material'
import { Done, Cancel } from '@mui/icons-material'
import { useI18nStore } from '../stores/i18n.store'
import { useRedisStateStore } from '../stores/redis-state.store'
import { useSettingsStore } from '../stores/settings.store'
import { useCommonStore } from '../stores/common.store'
import { useMainCommandStore } from '../stores/main-command.store'
import P3xrDialog from '../components/P3xrDialog'

interface TreeSettingsDialogProps {
    open: boolean
    onClose: () => void
}

interface FormModel {
    treeSeparator: string
    pageCount: number
    keyPageCount: number
    maxValueDisplay: number
    maxKeys: number
    keysSort: boolean
    searchClientSide: boolean
    searchStartsWith: boolean
    jsonFormat: boolean
    animation: boolean
    undoEnabled: boolean
    showDiffBeforeSave: boolean
}

interface FieldRange {
    min: number
    max: number
    required: boolean
}

const FIELD_RANGES: Record<string, FieldRange> = {
    pageCount: { min: 10, max: 5000, required: true },
    keyPageCount: { min: 5, max: 100, required: true },
    maxValueDisplay: { min: -1, max: 32768, required: true },
    maxKeys: { min: 5, max: 100000, required: true },
}

export default function TreeSettingsDialog({ open, onClose }: TreeSettingsDialogProps) {
    const strings = useI18nStore(s => s.strings)
    const settings = useSettingsStore()
    const state = useRedisStateStore()
    const { toast, generalHandleError } = useCommonStore()
    const { refresh } = useMainCommandStore()
    const isWide = useMediaQuery('(min-width: 600px)')

    const reducedFunctions = state.reducedFunctions
    const keysRawLength = state.keysRaw?.length ?? 0
    const dbsize = state.dbsize ?? 0

    const [model, setModel] = useState<FormModel>({
        treeSeparator: '', pageCount: 250, keyPageCount: 5,
        maxValueDisplay: 1024, maxKeys: 1000, keysSort: true,
        searchClientSide: false, searchStartsWith: false,
        jsonFormat: true, animation: true, undoEnabled: true, showDiffBeforeSave: true,
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    useEffect(() => {
        if (open) {
            setModel({
                treeSeparator: settings.redisTreeDivider,
                pageCount: settings.pageCount,
                keyPageCount: settings.keyPageCount,
                maxValueDisplay: settings.maxValueDisplay,
                maxKeys: settings.maxKeys,
                keysSort: settings.keysSort,
                searchClientSide: settings.searchClientSide,
                searchStartsWith: settings.searchStartsWith,
                jsonFormat: Number(settings.jsonFormat) !== 2,
                animation: settings.animation,
                undoEnabled: settings.undoEnabled,
                showDiffBeforeSave: settings.showDiffBeforeSave,
            })
            setErrors({})
        }
    }, [open, settings])

    const set = (field: keyof FormModel, value: any) => {
        setModel(m => ({ ...m, [field]: value }))
        const range = FIELD_RANGES[field]
        if (range) {
            const num = Number(value)
            if (isNaN(num) || !Number.isInteger(num)) {
                setErrors(e => ({ ...e, [field]: strings?.form?.error?.integer }))
            } else if (num < range.min || num > range.max) {
                setErrors(e => ({ ...e, [field]: `${range.min} - ${range.max}` }))
            } else {
                setErrors(e => { const n = { ...e }; delete n[field]; return n })
            }
        }
    }

    const validateAll = (): boolean => {
        const newErrors: Record<string, string> = {}
        for (const [field, range] of Object.entries(FIELD_RANGES)) {
            const value = (model as any)[field]
            const num = Number(value)
            if (range.required && (value === '' || value === undefined || value === null)) {
                newErrors[field] = strings?.form?.error?.required
            } else if (isNaN(num) || !Number.isInteger(num)) {
                newErrors[field] = strings?.form?.error?.integer
            } else if (num < range.min || num > range.max) {
                newErrors[field] = `${range.min} - ${range.max}`
            }
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const submit = async () => {
        if (!validateAll()) {
            toast(strings?.form?.error?.invalid)
            return
        }
        try {
            const s = useSettingsStore.getState()
            s.setSetting('p3xr-main-treecontrol-divider', model.treeSeparator)
            s.setSetting('p3xr-main-treecontrol-page-size', model.pageCount)
            s.setSetting('p3xr-main-key-page-size', model.keyPageCount)
            s.setSetting('p3xr-main-treecontrol-max-value-display', model.maxValueDisplay)
            s.setSetting('p3xr-max-keys', model.maxKeys)
            s.setSetting('p3xr-main-treecontrol-key-sort', model.keysSort)
            s.setSetting('p3xr-main-treecontrol-search-client-mode', model.searchClientSide)
            s.setSetting('p3xr-main-treecontrol-search-starts-with', model.searchStartsWith)
            s.setSetting('p3xr-json-format', model.jsonFormat ? 4 : 2)
            s.setSetting('p3xr-animation-settings', model.animation ? '1' : '0')
            s.setSetting('p3xr-undo-enabled', model.undoEnabled)
            s.setSetting('p3xr-show-diff-before-save', model.showDiffBeforeSave)
            useRedisStateStore.setState({ page: 1, redisChanged: true })
            if (state.connection) await refresh()
            toast(strings?.status?.saved)
            onClose()
        } catch (e) {
            generalHandleError(e)
        }
    }

    return (
        <P3xrDialog
            open={open}
            onClose={onClose}
            title={strings?.form?.treeSettings?.label?.formName}
            actions={
                <>
                    {isWide ? (
                        <Button variant="contained" color="error" size="small" onClick={onClose}>
                            <Cancel fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.cancel}</span>
                        </Button>
                    ) : (
                        <Tooltip title={strings?.intention?.cancel} placement="top">
                            <Button variant="contained" color="error" size="small" onClick={onClose}
                                sx={{ minWidth: 40, width: 40, height: 36, p: 0 }}>
                                <Cancel fontSize="small" />
                            </Button>
                        </Tooltip>
                    )}
                    <Button variant="contained" color="primary" size="small" onClick={submit}>
                        <Done fontSize="small" /><span style={{ marginLeft: 3 }}>{strings?.intention?.save}</span>
                    </Button>
                </>
            }
        >
            <TextField fullWidth margin="dense"
                label={strings?.form?.treeSettings?.field?.treeSeparator}
                value={model.treeSeparator} onChange={e => set('treeSeparator', e.target.value)} />
            <TextField fullWidth margin="dense" type="number"
                label={strings?.form?.treeSettings?.field?.page}
                value={model.pageCount} onChange={e => set('pageCount', e.target.value === '' ? '' : Number(e.target.value))}
                error={!!errors.pageCount} helperText={errors.pageCount || strings?.form?.treeSettings?.error?.page}
                slotProps={{ htmlInput: { min: 10, max: 5000 } }} />
            <TextField fullWidth margin="dense" type="number"
                label={strings?.form?.treeSettings?.field?.keyPageCount}
                value={model.keyPageCount} onChange={e => set('keyPageCount', e.target.value === '' ? '' : Number(e.target.value))}
                error={!!errors.keyPageCount} helperText={errors.keyPageCount || strings?.form?.treeSettings?.error?.keyPageCount}
                slotProps={{ htmlInput: { min: 5, max: 100 } }} />
            <TextField fullWidth margin="dense" type="number"
                label={strings?.form?.treeSettings?.maxValueDisplay}
                value={model.maxValueDisplay} onChange={e => set('maxValueDisplay', e.target.value === '' ? '' : Number(e.target.value))}
                error={!!errors.maxValueDisplay} helperText={errors.maxValueDisplay || strings?.form?.treeSettings?.maxValueDisplayInfo}
                slotProps={{ htmlInput: { min: -1, max: 32768 } }} />
            <TextField fullWidth margin="dense" type="number"
                label={strings?.form?.treeSettings?.maxKeys}
                value={model.maxKeys} onChange={e => set('maxKeys', e.target.value === '' ? '' : Number(e.target.value))}
                error={!!errors.maxKeys} helperText={errors.maxKeys || strings?.form?.treeSettings?.maxKeysInfo}
                slotProps={{ htmlInput: { min: 5, max: 100000 } }} />
            {!reducedFunctions && (
                <FormControlLabel sx={{ display: 'block', mt: 1 }}
                    control={<Switch checked={model.keysSort} onChange={(_, v) => set('keysSort', v)} />}
                    label={model.keysSort ? strings?.label?.keysSort?.on : strings?.label?.keysSort?.off} />
            )}
            {!reducedFunctions && (
                <FormControlLabel sx={{ display: 'block' }}
                    control={<Switch checked={model.searchClientSide}
                        onChange={(_, v) => set('searchClientSide', v)}
                        disabled={dbsize > settings.maxLightKeysCount} />}
                    label={model.searchClientSide
                        ? strings?.form?.treeSettings?.label?.searchModeClient
                        : strings?.form?.treeSettings?.label?.searchModeServer} />
            )}
            {reducedFunctions && (
                <Box sx={{ mt: 1, p: 1.5, bgcolor: 'action.hover', borderRadius: 1, fontSize: 13, opacity: 0.8 }}>
                    {(() => {
                        const fn = strings?.label?.tooManyKeys
                        return typeof fn === 'function' ? fn({ count: keysRawLength, maxLightKeysCount: settings.maxLightKeysCount }) : ''
                    })()}
                </Box>
            )}
            <FormControlLabel sx={{ display: 'block' }}
                control={<Switch checked={model.searchStartsWith} onChange={(_, v) => set('searchStartsWith', v)} />}
                label={model.searchStartsWith
                    ? strings?.form?.treeSettings?.label?.searchModeStartsWith
                    : strings?.form?.treeSettings?.label?.searchModeIncludes} />
            <FormControlLabel sx={{ display: 'block' }}
                control={<Switch checked={model.jsonFormat} onChange={(_, v) => set('jsonFormat', v)} />}
                label={model.jsonFormat
                    ? strings?.form?.treeSettings?.label?.jsonFormatFourSpace
                    : strings?.form?.treeSettings?.label?.jsonFormatTwoSpace} />
            <FormControlLabel sx={{ display: 'block' }}
                control={<Switch checked={model.animation} onChange={(_, v) => set('animation', v)} />}
                label={model.animation
                    ? strings?.form?.treeSettings?.label?.animation
                    : strings?.form?.treeSettings?.label?.noAnimation} />
            <FormControlLabel sx={{ display: 'block' }}
                control={<Switch checked={model.undoEnabled} onChange={(_, v) => set('undoEnabled', v)} />}
                label={model.undoEnabled
                    ? (strings?.form?.treeSettings?.label?.undoEnabled || 'Undo enabled')
                    : (strings?.form?.treeSettings?.label?.undoDisabled || 'Undo disabled')} />
            <Box sx={{ fontSize: 12, opacity: 0.7, ml: '50px', mt: -0.5 }}>{strings?.form?.treeSettings?.undoHint || 'Undo is available for string and JSON key types only'}</Box>
            <FormControlLabel sx={{ display: 'block' }}
                control={<Switch checked={model.showDiffBeforeSave} onChange={(_, v) => set('showDiffBeforeSave', v)} />}
                label={model.showDiffBeforeSave
                    ? (strings?.form?.treeSettings?.label?.diffEnabled || 'Show diff before saving')
                    : (strings?.form?.treeSettings?.label?.diffDisabled || 'Diff before save disabled')} />
        </P3xrDialog>
    )
}
