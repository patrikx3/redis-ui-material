/**
 * Inline pager for key type renderers — exact port of Angular key-pager-inline.component.
 */
import { Box, Tooltip } from '@mui/material'
import { SkipPrevious, KeyboardArrowLeft, KeyboardArrowRight, SkipNext } from '@mui/icons-material'
import { useTheme } from '@mui/material'
import { useI18nStore } from '../../../stores/i18n.store'
import { Paging, pagerAction, pageChange } from './key-type-base'

interface Props {
    paging: Paging
    onPageChange: (paging: Paging) => void
}

export default function KeyPagerInline({ paging, onPageChange }: Props) {
    const strings = useI18nStore(s => s.strings)
    const muiTheme = useTheme()

    if (paging.pages <= 1) return null

    const btnStyle: React.CSSProperties = {
        background: 'none', border: 'none', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: 28, width: 28, margin: 0, padding: 0,
        color: muiTheme.p3xr.inputBorderColor,
    }

    const action = (a: string) => onPageChange(pagerAction(paging, a))

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: '4px' }}>
            <Tooltip title={strings?.page?.treeControls?.pager?.first} placement="top">
                <button style={btnStyle} onClick={() => action('first')}>
                    <SkipPrevious sx={{ fontSize: 24 }} />
                </button>
            </Tooltip>
            <Tooltip title={strings?.page?.treeControls?.pager?.prev} placement="top">
                <button style={btnStyle} onClick={() => action('prev')}>
                    <KeyboardArrowLeft sx={{ fontSize: 24 }} />
                </button>
            </Tooltip>
            <input type="number" step={1} min={1} max={paging.pages}
                value={paging.page}
                onChange={e => {
                    const v = parseInt(e.target.value, 10)
                    if (!isNaN(v)) onPageChange(pageChange(paging, v))
                }}
                className="p3xr-pager-input"
                style={{
                    width: 64, margin: '0 4px', verticalAlign: 'middle',
                    textAlign: 'center', padding: 0,
                    boxSizing: 'border-box', borderStyle: 'solid', borderWidth: 2,
                    borderColor: muiTheme.p3xr.inputBorderColor,
                    background: muiTheme.p3xr.inputBg, color: muiTheme.p3xr.inputColor,
                    outline: 'none', fontFamily: "'Roboto Mono', monospace", fontSize: 12,
                    MozAppearance: 'textfield' as any,
                }}
            />
            <span style={{ margin: '0 4px', color: muiTheme.p3xr.inputColor }}>/ {paging.pages}</span>
            <Tooltip title={strings?.page?.treeControls?.pager?.next} placement="top">
                <button style={btnStyle} onClick={() => action('next')}>
                    <KeyboardArrowRight sx={{ fontSize: 24 }} />
                </button>
            </Tooltip>
            <Tooltip title={strings?.page?.treeControls?.pager?.last} placement="top">
                <button style={btnStyle} onClick={() => action('last')}>
                    <SkipNext sx={{ fontSize: 24 }} />
                </button>
            </Tooltip>
        </Box>
    )
}
