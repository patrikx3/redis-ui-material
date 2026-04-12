/**
 * Navigation helper -- maps Angular state names to Vue Router paths.
 * Used by stores/services that need to navigate without Vue composables.
 */

let navigateFn: ((path: string) => void) | null = null

export function setNavigate(fn: (path: string) => void) {
    navigateFn = fn
}

export function navigateTo(state: string, params?: any) {
    const routes: Record<string, string> = {
        'info': '/info',
        'settings': '/settings',
        'monitoring': '/monitoring',
        'search': '/search',
        'database.statistics': '/database/statistics',
        'main.statistics': '/database/statistics',
        'database': '/database',
    }

    let path: string
    if (state === 'database.key' || state === 'main.key') {
        path = `/database/key/${encodeURIComponent(params?.key ?? '')}`
    } else {
        path = routes[state]
        if (!path) {
            console.warn(`[navigation] Unknown state: ${state}`)
            path = '/settings'
        }
    }

    if (navigateFn) {
        navigateFn(path)
    }
}
