import { Injectable } from '@angular/core';

const STORAGE_KEY = 'p3xr-desktop-notifications';
const isElectron = /electron/i.test(navigator.userAgent);

/**
 * Desktop notification service — works in Electron (native) and web (Notification API).
 * Default: disabled. User opts in via Settings toggle.
 * Only fires when the app/tab is not focused.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {

    isEnabled(): boolean {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored === null) return isElectron; // default: on in Electron, off in web
            return stored === 'true';
        } catch { return false; }
    }

    setEnabled(enabled: boolean): void {
        try { localStorage.setItem(STORAGE_KEY, String(enabled)); } catch {}
        if (enabled && !isElectron) this.requestWebPermission();
    }

    private requestWebPermission(): void {
        if (typeof Notification === 'undefined') return;
        if (Notification.permission !== 'granted' && Notification.permission !== 'denied') {
            Notification.requestPermission();
        }
    }

    notify(title: string, body: string): void {
        if (!this.isEnabled()) return;
        if (!document.hidden && document.hasFocus()) return;

        if (isElectron) {
            try {
                window.parent?.postMessage({ type: 'p3x-notify', title, body }, '*');
            } catch {}
            return;
        }

        if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            try {
                const n = new Notification(title, { body, icon: '/images/redis.svg' });
                n.onclick = () => { window.focus(); n.close(); };
            } catch {}
        }
    }
}
