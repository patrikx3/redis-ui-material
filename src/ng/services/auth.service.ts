import { Injectable, signal } from '@angular/core';

declare const P3XR_API_PORT: number;
declare const P3XR_DEV_MODE: boolean;

const AUTH_TOKEN_KEY = 'p3xr-auth-token';

function getApiBase(): string {
    if (typeof P3XR_DEV_MODE !== 'undefined' && P3XR_DEV_MODE) {
        const url = new URL(location.toString());
        const apiPort = typeof P3XR_API_PORT !== 'undefined' ? P3XR_API_PORT : 7843;
        return `http://${url.hostname}:${apiPort}`;
    }
    return '';
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    readonly authRequired = signal(false);
    readonly isAuthenticated = signal(false);
    readonly authChecked = signal(false);
    readonly loginError = signal('');

    private readonly apiBase = getApiBase();

    async checkAuthStatus(): Promise<void> {
        try {
            const res = await fetch(`${this.apiBase}/api/auth-status`);
            const data = await res.json();
            this.authRequired.set(data.enabled);

            if (!data.enabled) {
                this.isAuthenticated.set(true);
            } else {
                const token = this.getToken();
                if (token) {
                    const verifyRes = await fetch(`${this.apiBase}/api/verify-token`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ token }),
                    });
                    const verifyData = await verifyRes.json();
                    this.isAuthenticated.set(verifyData.valid);
                    if (!verifyData.valid) {
                        localStorage.removeItem(AUTH_TOKEN_KEY);
                    }
                }
            }
        } catch {
            // Network error — assume no auth required so app isn't blocked
            this.isAuthenticated.set(true);
        }
        this.authChecked.set(true);
    }

    async login(username: string, password: string): Promise<boolean> {
        this.loginError.set('');
        try {
            const res = await fetch(`${this.apiBase}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if (data.status === 'ok' && data.token) {
                localStorage.setItem(AUTH_TOKEN_KEY, data.token);
                this.isAuthenticated.set(true);
                return true;
            }

            this.loginError.set(data.error || 'login_failed');
            return false;
        } catch {
            this.loginError.set('network_error');
            return false;
        }
    }

    getToken(): string | null {
        try {
            return localStorage.getItem(AUTH_TOKEN_KEY);
        } catch {
            return null;
        }
    }

    logout(): void {
        try {
            localStorage.removeItem(AUTH_TOKEN_KEY);
        } catch {}
        location.reload();
    }
}
