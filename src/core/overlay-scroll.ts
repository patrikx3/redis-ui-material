// Framework-agnostic overlay scrollbar — macOS-style thin thumb that overlays
// content with no gutter, fades in on mousemove/scroll within the viewport,
// fades out after an idle timeout. Pure vanilla DOM, no dependencies.
//
// Usage:
//   const instance = attachOverlayScroll(viewportElement)
//   ...later, when component unmounts:
//   instance.destroy()
//
// The thumb is a <div> appended to document.body with `position: fixed`,
// synced to the viewport's bounding rect via ResizeObserver + scroll listener.
// This avoids wrapping the viewport's children, so React/Vue/Angular
// reconciliation never fights with our DOM manipulation.

export interface OverlayScrollInstance {
    destroy(): void;
    update(): void;
}

let webkitStyleInjected = false;
function ensureGlobalStyles(): void {
    if (webkitStyleInjected) return;
    webkitStyleInjected = true;
    const s = document.createElement('style');
    s.setAttribute('data-p3xr-overlay-scroll', '');
    s.textContent = `
        /* Hide native scrollbars globally — overlay scroll is the only visible
           scrollbar. Third-party widgets (CodeMirror / Monaco / xterm) ship
           their own scrollbar UIs that are excluded from overlay attach, but
           we still want their native scrollbars hidden (they scroll internally
           via wheel/keyboard). */
        html, body, * { scrollbar-width: none; -ms-overflow-style: none; }
        *::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .p3xr-os-viewport { scrollbar-width: none; -ms-overflow-style: none; }
        .p3xr-os-viewport::-webkit-scrollbar { width: 0; height: 0; display: none; }
        .p3xr-os-thumb {
            position: fixed;
            width: 8px;
            border-radius: 4px;
            background-color: rgba(128, 128, 128, 0.5);
            opacity: 0;
            transition: opacity 0.25s ease, background-color 0.15s ease;
            pointer-events: auto;
            z-index: 9999;
            will-change: transform, opacity, height;
        }
        .p3xr-os-thumb:hover { background-color: rgba(128, 128, 128, 0.75); }
        body.p3xr-theme-dark .p3xr-os-thumb { background-color: rgba(255, 255, 255, 0.35); }
        body.p3xr-theme-dark .p3xr-os-thumb:hover { background-color: rgba(255, 255, 255, 0.6); }
        body.p3xr-theme-light .p3xr-os-thumb { background-color: rgba(0, 0, 0, 0.35); }
        body.p3xr-theme-light .p3xr-os-thumb:hover { background-color: rgba(0, 0, 0, 0.6); }
    `;
    document.head.appendChild(s);
}

export function attachOverlayScroll(viewport: HTMLElement): OverlayScrollInstance {
    ensureGlobalStyles();
    viewport.classList.add('p3xr-os-viewport');

    const thumb = document.createElement('div');
    thumb.className = 'p3xr-os-thumb';
    document.body.appendChild(thumb);

    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let isDragging = false;
    let dragStartY = 0;
    let dragStartScrollTop = 0;
    let thumbHeight = 30;

    const show = (): void => {
        thumb.style.opacity = '1';
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => { if (!isDragging) thumb.style.opacity = '0'; }, 1200);
    };

    // 4px breathing room at top and bottom of the track so the thumb never
    // feels like it's touching the content's edge (or the header/footer).
    const EDGE_PAD = 4;

    const update = (): void => {
        const rect = viewport.getBoundingClientRect();
        const { scrollTop, scrollHeight, clientHeight } = viewport;
        if (scrollHeight <= clientHeight + 1) {
            thumb.style.display = 'none';
            return;
        }
        thumb.style.display = 'block';
        thumbHeight = Math.max(30, (clientHeight / scrollHeight) * clientHeight);
        const maxScroll = scrollHeight - clientHeight;
        const trackTravel = clientHeight - thumbHeight - EDGE_PAD * 2;
        const thumbY = maxScroll > 0 ? (scrollTop / maxScroll) * trackTravel : 0;
        thumb.style.left = `${rect.right - 10}px`;
        thumb.style.top = `${rect.top + EDGE_PAD + thumbY}px`;
        thumb.style.height = `${thumbHeight}px`;
    };

    const onScroll = (): void => { update(); show(); };
    const onViewportMove = (): void => show();
    const onThumbDown = (e: MouseEvent): void => {
        e.preventDefault();
        isDragging = true;
        dragStartY = e.clientY;
        dragStartScrollTop = viewport.scrollTop;
        document.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', onUp);
    };
    const onDrag = (e: MouseEvent): void => {
        if (!isDragging) return;
        const { scrollHeight, clientHeight } = viewport;
        const maxScroll = scrollHeight - clientHeight;
        const trackH = clientHeight - thumbHeight;
        const deltaY = e.clientY - dragStartY;
        viewport.scrollTop = dragStartScrollTop + (trackH > 0 ? deltaY / trackH : 0) * maxScroll;
        show();
    };
    const onUp = (): void => {
        isDragging = false;
        document.removeEventListener('mousemove', onDrag);
        document.removeEventListener('mouseup', onUp);
        show();
    };

    viewport.addEventListener('scroll', onScroll, { passive: true });
    viewport.addEventListener('mousemove', onViewportMove);
    thumb.addEventListener('mousedown', onThumbDown);

    const ro = new ResizeObserver(update);
    ro.observe(viewport);
    const mo = new MutationObserver(update);
    mo.observe(viewport, { childList: true, subtree: true, characterData: true });
    window.addEventListener('resize', update);

    // Keep the thumb aligned during CSS transitions (e.g. console drawer open/close
    // animates `bottom` on the layout-content for 150ms). ResizeObserver alone can
    // skip frames — run rAF for the transition window.
    let rafActive = false;
    let rafStop = 0;
    const startRafFor = (ms: number) => {
        rafStop = Date.now() + ms;
        if (rafActive) return;
        rafActive = true;
        const tick = () => {
            update();
            if (Date.now() < rafStop) {
                requestAnimationFrame(tick);
            } else {
                rafActive = false;
            }
        };
        requestAnimationFrame(tick);
    };
    const onTransition = (e: TransitionEvent) => {
        if (e.target === viewport || e.target === viewport.parentElement) startRafFor(250);
    };
    window.addEventListener('transitionrun', onTransition);

    update();

    return {
        destroy(): void {
            viewport.removeEventListener('scroll', onScroll);
            viewport.removeEventListener('mousemove', onViewportMove);
            thumb.removeEventListener('mousedown', onThumbDown);
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', onUp);
            window.removeEventListener('resize', update);
            window.removeEventListener('transitionrun', onTransition);
            ro.disconnect();
            mo.disconnect();
            if (hideTimer) clearTimeout(hideTimer);
            thumb.remove();
            viewport.classList.remove('p3xr-os-viewport');
        },
        update,
    };
}

// Exclude third-party widgets that ship their own scrollbar behaviour — replacing
// their native scrollbar with ours tends to fight with their internal viewport
// sizing and focus management.
const EXCLUDE_SELECTORS = [
    '.cm-scroller',             // CodeMirror
    '.xterm-viewport',          // xterm.js (in case added later)
    '.monaco-scrollable-element', // Monaco
];

function isScrollableEl(el: HTMLElement): boolean {
    const style = getComputedStyle(el);
    const oy = style.overflowY;
    const ox = style.overflowX;
    if (!(oy === 'auto' || oy === 'scroll' || ox === 'auto' || ox === 'scroll')) return false;
    // Skip zero-sized elements (not yet laid out — will be caught on next scan)
    if (el.clientHeight === 0 && el.clientWidth === 0) return false;
    return true;
}

function shouldSkip(el: HTMLElement): boolean {
    if (el.classList.contains('p3xr-os-viewport')) return true;
    for (const sel of EXCLUDE_SELECTORS) {
        if (el.matches(sel) || el.closest(sel)) return true;
    }
    return false;
}

/**
 * Auto-attach the overlay scrollbar to every scrollable element in the document.
 * Watches for DOM mutations and attaches to new scrollable elements as they appear
 * (dialogs, menus, route changes). Prunes orphaned instances whose viewport has
 * been removed from the DOM. Call the returned function to uninstall.
 */
export function installOverlayScrolls(): () => void {
    const instances = new Map<HTMLElement, OverlayScrollInstance>();

    const tryAttach = (el: HTMLElement) => {
        if (instances.has(el)) return;
        if (shouldSkip(el)) return;
        if (!isScrollableEl(el)) return;
        instances.set(el, attachOverlayScroll(el));
    };

    const scanSubtree = (root: HTMLElement) => {
        tryAttach(root);
        root.querySelectorAll<HTMLElement>('*').forEach(tryAttach);
    };

    const prune = () => {
        for (const [el, inst] of instances) {
            if (!el.isConnected) {
                inst.destroy();
                instances.delete(el);
            }
        }
    };

    scanSubtree(document.body);

    const mo = new MutationObserver((mutations) => {
        let hadRemovals = false;
        for (const m of mutations) {
            m.addedNodes.forEach((n) => {
                if (n.nodeType === 1) scanSubtree(n as HTMLElement);
            });
            if (m.removedNodes.length > 0) hadRemovals = true;
            // Re-check the target too — overflow style may have changed.
            if (m.type === 'attributes' && m.target.nodeType === 1) {
                tryAttach(m.target as HTMLElement);
            }
        }
        if (hadRemovals) prune();
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

    // Periodic safety net in case a node is detached without firing a mutation
    // record we saw (some legacy libs manipulate documentFragment).
    const pruneInterval = setInterval(prune, 5000);

    return () => {
        mo.disconnect();
        clearInterval(pruneInterval);
        for (const inst of instances.values()) inst.destroy();
        instances.clear();
    };
}
