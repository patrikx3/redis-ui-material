import '@fontsource/roboto/latin-300.css'
import '@fontsource/roboto/latin-400.css'
import '@fontsource/roboto/latin-500.css'
import '@fontsource/roboto/latin-700.css'
import '@fontsource/roboto/latin-ext-300.css'
import '@fontsource/roboto/latin-ext-400.css'
import '@fontsource/roboto/latin-ext-500.css'
import '@fontsource/roboto/latin-ext-700.css'
import '@fontsource/roboto/cyrillic-300.css'
import '@fontsource/roboto/cyrillic-400.css'
import '@fontsource/roboto/cyrillic-500.css'
import '@fontsource/roboto/cyrillic-700.css'
import '@fontsource/roboto/cyrillic-ext-300.css'
import '@fontsource/roboto/cyrillic-ext-400.css'
import '@fontsource/roboto/cyrillic-ext-500.css'
import '@fontsource/roboto/cyrillic-ext-700.css'
import '@fontsource/roboto/greek-300.css'
import '@fontsource/roboto/greek-400.css'
import '@fontsource/roboto/greek-500.css'
import '@fontsource/roboto/greek-700.css'
import '@fontsource/roboto/vietnamese-300.css'
import '@fontsource/roboto/vietnamese-400.css'
import '@fontsource/roboto/vietnamese-500.css'
import '@fontsource/roboto/vietnamese-700.css'
import '@fontsource/roboto-mono/latin-400.css'
import '@fontsource/roboto-mono/latin-ext-400.css'
import '@fontsource/roboto-mono/cyrillic-400.css'
import '@fontsource/roboto-mono/cyrillic-ext-400.css'
import '@fontsource/roboto-mono/greek-400.css'
import '@fontsource/roboto-mono/vietnamese-400.css'
import '@fortawesome/fontawesome-free/css/all.css'

// Redirect to Angular if preference is not React (production only, not dev server)
if (!globalThis.p3xrDevMode && window.parent === window && location.pathname.startsWith('/react')) {
    try {
        if (localStorage.getItem('p3xr-frontend') !== 'react') {
            location.replace('/ng/' + location.search)
        }
    } catch {}
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { useRedisStateStore } from './stores/redis-state.store'
import { useSettingsStore } from './stores/settings.store'
// Initialize Socket.IO connection on app load
import './stores/socket.service'
// Initialize keyboard shortcuts (Electron only)
import './stores/shortcuts'

// Expose E2E test interface matching Angular's window.__p3xr_test
;(globalThis as any).__p3xr_test = {
    state: new Proxy({}, {
        get(_, prop: string) {
            return () => (useRedisStateStore.getState() as any)[prop]
        }
    }),
    settings: new Proxy({}, {
        get(_, prop: string) {
            return () => (useSettingsStore.getState() as any)[prop]
        }
    }),
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
