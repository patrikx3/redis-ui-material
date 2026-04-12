import { createTheme, ThemeOptions } from '@mui/material'

// Extend MUI theme with custom p3xr properties
declare module '@mui/material/styles' {
    interface Theme {
        p3xr: {
            accordionBg: string
            accordionColor: string
            strongBg: string
            strongColor: string
            inputBorderColor: string
            inputBg: string
            inputColor: string
            treeBranchColor: string
            commonWarnColor: string
            treecontrolIconColor: string
            matSysPrimary: string
        }
    }
    interface ThemeOptions {
        p3xr?: {
            accordionBg?: string
            accordionColor?: string
            strongBg?: string
            strongColor?: string
            inputBorderColor?: string
            inputBg?: string
            inputColor?: string
            treeBranchColor?: string
            commonWarnColor?: string
            treecontrolIconColor?: string
            matSysPrimary?: string
        }
    }
}

const TOOLBAR_HEIGHT = 48

// FontAwesome icon sizing
const faIconBase = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 24, height: 24, fontSize: 20, lineHeight: '24px', verticalAlign: 'middle',
}
const faIconSmaller = { ...faIconBase, fontSize: 18 }

function makeShared(toolbarBg: string, toolbarColor: string): ThemeOptions['components'] {
    // Matrix has dark text on bright toolbar — use black overlays; all others use white
    const isDarkText = toolbarColor.includes('0,0,0')
    const ov = isDarkText ? '0, 0, 0' : '255, 255, 255'

    const toolbarButtonStyles = {
        color: 'inherit !important', letterSpacing: '0.1px !important',
        textTransform: 'uppercase' as const, height: 36, minHeight: 36, minWidth: 'auto',
        padding: '0 4px', margin: '0 4px', display: 'inline-flex', alignItems: 'center',
        justifyContent: 'center', whiteSpace: 'nowrap' as const, gap: 0, borderRadius: '4px',
        '&:hover': { backgroundColor: `rgba(${ov}, 0.15) !important` },
        '&.Mui-focusVisible': { backgroundColor: `rgba(${ov}, 0.15) !important` },
        '&:active': { backgroundColor: `rgba(${ov}, 0.25) !important` },
        '& .MuiTouchRipple-child': { backgroundColor: `rgba(${ov}, 0.3) !important` },
        '& .MuiSvgIcon-root, & i.fa, & i.fas, & i.far, & i.fab': { marginRight: 4, marginLeft: 0 },
        '& .MuiSvgIcon-root:only-child, & i:only-child': { marginRight: 0 },
    }
    const toolbarIconButtonStyles = {
        borderRadius: '4px !important', color: 'inherit !important', margin: '0 2px',
        '&:hover': { backgroundColor: `rgba(${ov}, 0.15) !important`, borderRadius: '4px !important' },
        '&.Mui-focusVisible': { backgroundColor: `rgba(${ov}, 0.15) !important`, borderRadius: '4px !important' },
        '&:active': { backgroundColor: `rgba(${ov}, 0.25) !important`, borderRadius: '4px !important' },
        '& .MuiTouchRipple-root': { borderRadius: '4px !important' },
        '& .MuiTouchRipple-child': { borderRadius: '4px !important', backgroundColor: `rgba(${ov}, 0.3) !important` },
    }
    return {
        MuiCssBaseline: { styleOverrides: `
            body.p3xr-no-main-scroll { overflow: hidden; }
            body.p3xr-no-main-scroll #p3xr-layout-content { overflow: hidden; }
            body.p3xr-no-main-scroll #p3xr-monitoring-content { overflow: hidden; }
            body.p3xr-theme-dark { color-scheme: dark; }
            body.p3xr-theme-light { color-scheme: light; }
            [data-color-scheme="dark"] { color-scheme: dark; }
            [data-color-scheme="light"] { color-scheme: light; }
            body.p3xr-theme-dark ::selection { color: white; background: black; }
            body.p3xr-theme-light fieldset { border-color: rgba(0, 0, 0, 0.5); }
            body.p3xr-theme-dark fieldset { border-color: rgba(255, 255, 255, 0.25); }
            body.p3xr-no-animation *,
            body.p3xr-no-animation *::before,
            body.p3xr-no-animation *::after {
                animation-duration: 0ms !important;
                transition-duration: 0ms !important;
                transition-delay: 0ms !important;
            }
            body.p3xr-no-animation .fa-spin {
                animation-duration: 2s !important;
            }
            .p3xr-console-content-output-item:before {
                content: "> ";
                opacity: 0.5;
            }
            .p3xr-console-ai-result {
                display: block;
            }
            #p3xr-console-content {
                font-family: 'Roboto Mono', monospace;
                font-size: 13px;
                text-align: center;
            }
            #p3xr-console-content-output {
                min-width: calc(100% - 20px);
                text-align: left;
                overflow: auto;
            }
            #p3xr-console-content-output pre {
                font-family: 'Roboto Mono', monospace;
                white-space: pre-wrap;
                word-break: break-word;
                overflow-wrap: anywhere;
                margin: 0;
            }
            #p3xr-console-input {
                display: block;
                width: 100%;
                box-sizing: border-box;
                font-family: 'Roboto Mono', monospace;
                resize: none;
                overflow-y: hidden;
                outline: none;
                max-height: 90px;
            }
            .p3xr-key-type-actions {
                display: flex; flex-wrap: wrap; justify-content: flex-end;
                align-items: center; gap: 8px; padding: 4px 8px;
            }
            .p3xr-key-type-content { padding: 8px 16px 24px; }
            .p3xr-key-type-display { padding: 8px; }
            .p3xr-key-type-editor { width: 100%; }
            .p3xr-key-type-editor textarea { font-family: 'Roboto Mono', monospace; font-size: 13px; }
            .p3xr-key-type-buffer-info { padding: 8px; opacity: 0.7; font-style: italic; }
            .p3xr-json-tree-key { color: var(--p3xr-json-key-color, inherit); }
            .p3xr-json-tree-value-string { color: var(--p3xr-json-value-string, #0b7500); }
            .p3xr-json-tree-value-number { color: var(--p3xr-json-value-number, #1a01cc); }
            .p3xr-json-tree-value-boolean { color: var(--p3xr-json-value-boolean, #c41a16); }
            .p3xr-json-tree-value-null { color: var(--p3xr-json-value-null, #808080); font-style: italic; }
            .p3xr-console-hint {
                font-family: 'Roboto Mono', monospace;
                font-size: 12px;
                padding: 2px 6px;
                opacity: 0.6;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .p3xr-pager-input::-webkit-outer-spin-button,
            .p3xr-pager-input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        `},
        // Global button sizing — match Angular mat-raised-button (36px, 14px, uppercase)
        MuiButton: { styleOverrides: { root: {
            height: 36,
            minHeight: 36,
            fontSize: '14px',
            padding: '0 6px',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.1px',
            borderRadius: '4px',
            gap: '3px',
            '& .MuiSvgIcon-root': { marginRight: '4px' },
            '& .MuiSvgIcon-root:only-child': { marginRight: 0 },
        }}},
        MuiToolbar: { styleOverrides: { root: {
            minHeight: `${TOOLBAR_HEIGHT}px !important`, height: TOOLBAR_HEIGHT,
            '& i.fa, & i.fas, & i.far, & i.fab': faIconBase,
            '& i.fa-power-off': faIconSmaller, '& i.fa-donate': faIconSmaller,
        }}},
        MuiAppBar: { styleOverrides: { root: {
            backgroundColor: toolbarBg, color: toolbarColor,
            '& .MuiButton-root': toolbarButtonStyles,
            '& .MuiIconButton-root': toolbarIconButtonStyles,
        }}},
    }
}

// Helper to build a theme from exact SCSS hex values
interface ThemeColors {
    mode: 'light' | 'dark'
    toolbarBg: string
    toolbarColor: string
    strongBg: string
    accordionBg: string
    accordionColor: string
    primary: string
    primaryText: string
    accent: string       // → secondary
    accentText: string
    warn: string         // → error
    warnText: string
    success: string
    successText: string
    bodyBg: string
    contentBg: string
    dialogBg: string
    borderColor: string
    hoverBg: string
    selectedBg: string
    linkColor: string
    inputBorderColor: string
    inputBg: string
    inputColor: string
    treeBranchColor: string
    commonWarnColor: string
    treecontrolIconColor: string
    matSysPrimary: string  // M3 system primary from main sub-theme (used for tab indicators)
}

function buildTheme(c: ThemeColors) {
    return createTheme({
        typography: {
            fontFamily: "Roboto, 'Helvetica Neue', sans-serif",
            // Reset letter-spacing to normal (matches Angular's --mat-*-tracking: normal)
            h1: { letterSpacing: 'normal' },
            h2: { letterSpacing: 'normal' },
            h3: { letterSpacing: 'normal' },
            h4: { letterSpacing: 'normal' },
            h5: { letterSpacing: 'normal' },
            h6: { letterSpacing: 'normal' },
            subtitle1: { letterSpacing: 'normal' },
            subtitle2: { letterSpacing: 'normal' },
            body1: { letterSpacing: 'normal' },
            body2: { letterSpacing: 'normal' },
            button: { letterSpacing: 'normal' },
            caption: { letterSpacing: 'normal' },
            overline: { letterSpacing: 'normal' },
        },
        p3xr: {
            accordionBg: c.accordionBg,
            accordionColor: c.accordionColor,
            strongBg: c.strongBg,
            strongColor: 'rgba(255,255,255,0.87)',
            inputBorderColor: c.inputBorderColor,
            inputBg: c.inputBg,
            inputColor: c.inputColor,
            treeBranchColor: c.treeBranchColor,
            commonWarnColor: c.commonWarnColor,
            treecontrolIconColor: c.treecontrolIconColor,
            matSysPrimary: c.matSysPrimary,
        },
        palette: {
            mode: c.mode,
            primary: { main: c.primary, contrastText: c.primaryText },
            secondary: { main: c.accent, contrastText: c.accentText },
            error: { main: c.warn, contrastText: c.warnText },
            success: { main: c.success, contrastText: c.successText },
            warning: { main: c.warn, contrastText: c.warnText },
            background: { default: c.bodyBg, paper: c.contentBg },
            divider: c.mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
            action: { hover: c.hoverBg, selected: c.selectedBg },
        },
        components: {
            ...makeShared(c.toolbarBg, c.toolbarColor),
            MuiDialog: { styleOverrides: { paper: { backgroundColor: c.dialogBg, backgroundImage: 'none' } } },
        },
    })
}

// ============================================================
// All 7 themes with exact colors from _theme-custom.scss
// ============================================================

export const themes: Record<string, ReturnType<typeof createTheme>> = {
    // Enterprise (light) — Layout=grey, Main=indigo/blue/red
    enterprise: buildTheme({
        mode: 'light',
        toolbarBg: '#424242', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#212121', accordionBg: '#9e9e9e', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#3f51b5', primaryText: '#fff',
        accent: '#1976d2', accentText: '#fff',
        warn: '#d32f2f', warnText: '#fff',
        success: '#4caf50', successText: '#fff',
        bodyBg: '#e0e0e0', contentBg: '#fafafa', dialogBg: '#ffffff',
        borderColor: '#424242', hoverBg: 'rgba(0,0,0,0.1)', selectedBg: 'rgba(0,0,0,0.1)',
        linkColor: '#1a73e8',
        inputBorderColor: '#9e9e9e', inputBg: 'white', inputColor: 'black',
        treeBranchColor: '#343dff', commonWarnColor: '#03a9f4',
        treecontrolIconColor: 'rgba(0,0,0,0.87)',
        matSysPrimary: '#005faf',  // azure tone 40
    }),

    // Light — Layout=blue-grey, Main=deep-purple/purple/red
    light: buildTheme({
        mode: 'light',
        toolbarBg: '#37474f', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#263238', accordionBg: '#b0bec5', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#673ab7', primaryText: '#fff',
        accent: '#9c27b0', accentText: '#fff',
        warn: '#d32f2f', warnText: '#fff',
        success: '#4caf50', successText: '#fff',
        bodyBg: '#cfd8dc', contentBg: '#eceff1', dialogBg: '#cfd8dc',
        borderColor: '#37474f', hoverBg: 'rgba(0,0,0,0.1)', selectedBg: 'rgba(0,0,0,0.1)',
        linkColor: '#1a73e8',
        inputBorderColor: '#b0bec5', inputBg: 'white', inputColor: 'black',
        treeBranchColor: '#a900a9', commonWarnColor: '#607d8b',
        treecontrolIconColor: 'rgba(0,0,0,0.87)',
        matSysPrimary: '#6750a4',  // violet tone 40
    }),

    // Redis (light) — Layout=red, Main=grey/amber
    redis: buildTheme({
        mode: 'light',
        toolbarBg: '#c62828', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#b71c1c', accordionBg: '#ef9a9a', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#212121', primaryText: 'rgba(255,255,255,0.87)',
        accent: '#757575', accentText: '#fff',
        warn: '#ffc107', warnText: '#fff',
        success: '#4caf50', successText: '#fff',
        bodyBg: '#ffcdd2', contentBg: '#fafafa', dialogBg: '#ffffff',
        borderColor: '#c62828', hoverBg: 'rgba(0,0,0,0.1)', selectedBg: 'rgba(0,0,0,0.1)',
        linkColor: '#1a73e8',
        inputBorderColor: '#ef9a9a', inputBg: 'white', inputColor: 'black',
        treeBranchColor: '#964900', commonWarnColor: '#f44336',
        treecontrolIconColor: 'rgba(0,0,0,0.87)',
        matSysPrimary: '#b0294b',  // rose tone 40
    }),

    // Dark — Layout=grey, Main=indigo-300/blue/orange
    dark: buildTheme({
        mode: 'dark',
        toolbarBg: '#424242', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#212121', accordionBg: '#9e9e9e', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#7986cb', primaryText: 'rgba(0,0,0,0.87)',
        accent: '#2196f3', accentText: 'rgba(0,0,0,0.87)',
        warn: '#ff9800', warnText: 'rgba(0,0,0,0.87)',
        success: '#4caf50', successText: 'rgba(0,0,0,0.87)',
        bodyBg: '#212121', contentBg: '#303030', dialogBg: '#424242',
        borderColor: '#424242', hoverBg: 'rgba(255,255,255,0.1)', selectedBg: 'rgba(255,255,255,0.1)',
        linkColor: '#82b1ff',
        inputBorderColor: '#9e9e9e', inputBg: 'rgba(64,64,64,1)', inputColor: 'white',
        treeBranchColor: '#bec2ff', commonWarnColor: '#9fa8da',
        treecontrolIconColor: 'rgba(255,255,255,0.7)',
        matSysPrimary: '#9ecaff',  // azure tone 80
    }),

    // DarkNeu — Layout=blue-grey, Main=cyan/blue/yellow
    darkNeu: buildTheme({
        mode: 'dark',
        toolbarBg: '#37474f', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#263238', accordionBg: '#90a4ae', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#00bcd4', primaryText: 'rgba(0,0,0,0.87)',
        accent: '#2196f3', accentText: 'rgba(0,0,0,0.87)',
        warn: '#ffeb3b', warnText: 'rgba(0,0,0,0.87)',
        success: '#4caf50', successText: 'rgba(0,0,0,0.87)',
        bodyBg: '#263238', contentBg: '#303030', dialogBg: '#424242',
        borderColor: '#37474f', hoverBg: 'rgba(255,255,255,0.1)', selectedBg: 'rgba(255,255,255,0.1)',
        linkColor: '#82b1ff',
        inputBorderColor: '#90a4ae', inputBg: 'rgba(64,64,64,1)', inputColor: 'white',
        treeBranchColor: '#bec2ff', commonWarnColor: '#2196f3',
        treecontrolIconColor: 'rgba(255,255,255,0.7)',
        matSysPrimary: '#54d7eb',  // cyan tone 80
    }),

    // DarkoBluo — Layout=indigo, Main=indigo-300/blue/orange
    darkoBluo: buildTheme({
        mode: 'dark',
        toolbarBg: '#1a237e', toolbarColor: 'rgba(255,255,255,0.87)',
        strongBg: '#1a237e', accordionBg: '#3f51b5', accordionColor: '#fff',
        primary: '#7986cb', primaryText: 'rgba(0,0,0,0.87)',
        accent: '#2196f3', accentText: 'rgba(0,0,0,0.87)',
        warn: '#ff9800', warnText: 'rgba(0,0,0,0.87)',
        success: '#4caf50', successText: 'rgba(0,0,0,0.87)',
        bodyBg: '#283593', contentBg: '#303030', dialogBg: '#424242',
        borderColor: '#1a237e', hoverBg: 'rgba(255,255,255,0.1)', selectedBg: 'rgba(255,255,255,0.1)',
        linkColor: '#82b1ff',
        inputBorderColor: '#3f51b5', inputBg: 'rgba(64,64,64,1)', inputColor: 'white',
        treeBranchColor: '#bec2ff', commonWarnColor: '#03a9f4',
        treecontrolIconColor: 'rgba(255,255,255,0.7)',
        matSysPrimary: '#cfbcff',  // violet tone 80
    }),

    // Matrix — Layout=light-green, Main=light-green/lime/green
    matrix: buildTheme({
        mode: 'dark',
        toolbarBg: '#76ff03', toolbarColor: 'rgba(0,0,0,0.87)',
        strongBg: '#33691e', accordionBg: '#76ff03', accordionColor: 'rgba(0,0,0,0.87)',
        primary: '#76ff03', primaryText: 'rgba(0,0,0,0.87)',
        accent: '#c6ff00', accentText: 'rgba(0,0,0,0.87)',
        warn: '#00c853', warnText: 'rgba(0,0,0,0.87)',
        success: '#76ff03', successText: 'rgba(0,0,0,0.87)',
        bodyBg: '#1b5e20', contentBg: '#303030', dialogBg: '#424242',
        borderColor: '#76ff03', hoverBg: 'rgba(255,255,255,0.1)', selectedBg: 'rgba(255,255,255,0.1)',
        linkColor: '#82b1ff',
        inputBorderColor: '#76ff03', inputBg: 'rgba(64,64,64,1)', inputColor: 'white',
        treeBranchColor: '#76ff03', commonWarnColor: '#4caf50',  // override: #76ff03
        treecontrolIconColor: 'rgba(255,255,255,0.7)',
        matSysPrimary: '#a1d45b',  // chartreuse tone 80
    }),
}

// Dark theme keys for classification
export const DARK_THEMES = ['dark', 'darkNeu', 'darkoBluo', 'matrix']
export const LIGHT_THEMES = ['light', 'enterprise', 'redis']
export const ALL_THEME_KEYS = ['light', 'enterprise', 'dark', 'darkNeu', 'darkoBluo', 'matrix', 'redis']

export function isDarkTheme(key: string): boolean {
    return DARK_THEMES.includes(key)
}

// For backward compat
export const enterpriseTheme = themes.enterprise
export const darkTheme = themes.dark
