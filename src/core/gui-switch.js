/**
 * Switch GUI framework.
 * Assets already prefetched by layout on load.
 * @view-transition CSS handles smooth crossfade.
 */
export function switchGui(gui) {
    const target = gui === 'react' ? '/react/' : gui === 'vue' ? '/vue/' : '/ng/'
    try { localStorage.setItem('p3xr-frontend', gui) } catch {}
    location.href = target
}
