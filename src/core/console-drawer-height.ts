// Framework-agnostic bootstrap for the console drawer's saved height.
//
// Reads the px value saved in localStorage and writes it as an inline
// `--p3xr-console-drawer-height` custom property on <html>. Called from each
// GUI's entry point (main.ts / main.tsx / the Angular bootstrap) BEFORE any
// component renders, so the drawer — which reads this var via CSS — is never
// seen at the default 30vh fallback after a reload.
//
// The value is saved by each GUI's ConsoleDrawer on mouseup of the resize
// drag (format: "500px"). Out-of-bounds values are ignored.

const HEIGHT_KEY = 'p3xr-console-drawer-height';
const MIN_VH = 15;
const MAX_VH = 66;

let bootstrapStyleEl: HTMLStyleElement | null = null;

function applyDrawerHeight(px: number): void {
    if (!bootstrapStyleEl) {
        bootstrapStyleEl = document.createElement('style');
        bootstrapStyleEl.setAttribute('data-p3xr-console-drawer-height-bootstrap', '');
        document.head.appendChild(bootstrapStyleEl);
    }
    bootstrapStyleEl.textContent = `:root { --p3xr-console-drawer-height: ${px}px; }`;
    document.documentElement.style.setProperty('--p3xr-console-drawer-height', `${px}px`);
}

function currentBoundsPx(): { minPx: number; maxPx: number } {
    return {
        minPx: (MIN_VH / 100) * window.innerHeight,
        maxPx: (MAX_VH / 100) * window.innerHeight,
    };
}

function readSavedPx(): number | null {
    const saved = localStorage.getItem(HEIGHT_KEY);
    if (!saved) return null;
    const px = parseInt(saved, 10);
    return Number.isFinite(px) ? px : null;
}

export function loadSavedConsoleDrawerHeight(): void {
    const px = readSavedPx();
    if (px === null) return;
    const { minPx, maxPx } = currentBoundsPx();
    // Clamp to the current viewport's bounds — a saved 500px height is still
    // useful when the window shrinks, it just needs to be pinned to maxPx (66vh
    // of new viewport) for this session.
    applyDrawerHeight(Math.max(minPx, Math.min(maxPx, px)));
    // On window resize re-clamp to current viewport bounds. Read the CURRENT
    // inline var (which reflects any live drag) rather than localStorage, so
    // we don't overwrite an in-progress drag — the ConsoleDrawer's ResizeObserver
    // fires window.resize every mousemove frame, and if we read localStorage
    // here we'd fight the drag.
    window.addEventListener('resize', () => {
        const current = document.documentElement.style.getPropertyValue('--p3xr-console-drawer-height');
        if (!current || !current.endsWith('px')) return;
        const currentPx = parseInt(current, 10);
        if (!Number.isFinite(currentPx)) return;
        const { minPx: mn, maxPx: mx } = currentBoundsPx();
        const clamped = Math.max(mn, Math.min(mx, currentPx));
        if (clamped !== currentPx) applyDrawerHeight(clamped);
    });
}
