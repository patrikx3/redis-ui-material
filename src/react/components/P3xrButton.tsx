import { ReactNode } from 'react'
import { Button, IconButton, Tooltip, useMediaQuery } from '@mui/material'

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
                sx={{ m: 0, gap: '3px' }}
            >
                {icon}
                <span>{label}</span>
            </Button>
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
                        width: raised ? 40 : undefined,
                        height: raised ? 40 : undefined,
                        m: 0,
                    }}
                >
                    {icon}
                </IconButton>
            </span>
        </Tooltip>
    )
}
