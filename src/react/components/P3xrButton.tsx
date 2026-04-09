import { ReactNode } from 'react'
import { Button, IconButton, Fab, Tooltip, useMediaQuery } from '@mui/material'

/**
 * Responsive button — shows icon+text on wide screens, icon-only+tooltip on narrow.
 * Matches Angular p3xr-ng-button (720px breakpoint).
 *
 * raised=false: text button (Button variant="text") / icon button
 * raised=true:  contained button (Button variant="contained") / mini fab style
 */
interface P3xrButtonProps {
    label: string
    icon?: ReactNode
    raised?: boolean
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'
    disabled?: boolean
    tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right'
    breakpoint?: number
    onClick?: (e: React.MouseEvent) => void
}

export default function P3xrButton({
    label,
    icon,
    raised = false,
    color = 'inherit',
    disabled = false,
    tooltipPlacement = 'top',
    breakpoint = 720,
    onClick,
}: P3xrButtonProps) {
    const isWide = useMediaQuery(`(min-width: ${breakpoint}px)`)

    if (isWide) {
        return (
            <Button
                variant={raised ? 'contained' : 'text'}
                color={color}
                disabled={disabled}
                onClick={onClick}
                sx={{ gap: '3px' }}
            >
                {icon}
                <span>{label}</span>
            </Button>
        )
    }

    if (raised) {
        return (
            <Tooltip title={label} placement={tooltipPlacement}>
                <span>
                    <Fab
                        size="small"
                        color={color === 'inherit' ? 'primary' : color}
                        disabled={disabled}
                        onClick={onClick}
                        sx={{ borderRadius: '4px', boxShadow: 'none' }}
                    >
                        {icon}
                    </Fab>
                </span>
            </Tooltip>
        )
    }

    return (
        <Tooltip title={label} placement={tooltipPlacement}>
            <span>
                <IconButton
                    color={color}
                    disabled={disabled}
                    onClick={onClick}
                    sx={{
                        borderRadius: '4px',
                        m: 0,
                    }}
                >
                    {icon}
                </IconButton>
            </span>
        </Tooltip>
    )
}
