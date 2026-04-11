import { Injectable, Inject, ApplicationRef } from '@angular/core';
import { Subject } from 'rxjs';
import { RedisStateService } from './redis-state.service';
import { SettingsService } from './settings.service';
import { OverlayService } from './overlay.service';
import { I18nService } from './i18n.service';
import { NotificationService } from './notification.service';

import { io } from 'socket.io-client';
declare const P3XR_DEV_MODE: boolean;

/**
 * Angular Socket.IO service — standalone, no AngularJS dependency.
 * All callbacks run inside Angular's zone for automatic change detection.
 */
@Injectable({ providedIn: 'root' })
export class SocketService {

    private ioClient: any;
    private reconnect = false;
    private connectErrorWas = false;
    private disconnected = false;
    private authBlocked = false;

    readonly connections$ = new Subject<any>();
    readonly redisDisconnected$ = new Subject<any>();
    readonly redisStatus$ = new Subject<any>();
    readonly configuration$ = new Subject<any>();
    readonly socketError$ = new Subject<any>();
    readonly stateChanged$ = new Subject<void>();

    constructor(
        @Inject(ApplicationRef) private appRef: ApplicationRef,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(SettingsService) private settings: SettingsService,
        @Inject(OverlayService) private overlay: OverlayService,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(NotificationService) private notificationService: NotificationService,
    ) {
        this.initConnection();
    }

    tick(): void {
        setTimeout(() => {
            this.appRef.tick();
        });
    }

    private initConnection(): void {
        const ioOptions: any = {
            rejectUnauthorized: false,
            path: '/socket.io',
            secure: true,
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 1000,
            reconnectionDelayMax: 5000,
        };

        if (typeof P3XR_DEV_MODE !== 'undefined' && P3XR_DEV_MODE) {
            ioOptions.transports = ['websocket'];
        }

        // Include auth token if stored (JWT login)
        const authToken = localStorage.getItem('p3xr-auth-token');
        if (authToken) {
            ioOptions.auth = { token: authToken };
        }

        this.ioClient = io(this.state.apiHost, ioOptions);


        this.ioClient.on('connect', async () => {
            if (this.disconnected || this.connectErrorWas) {
                console.log('p3xr-socket RE-connected', this.ioClient.id);
                const strings = this.i18n.strings();
                this.notificationService.notify(strings?.title?.name || 'P3X Redis UI', strings?.status?.connectionRestored || 'Connection restored');
                this.disconnected = false;
                this.connectErrorWas = false;
                location.reload();
                return;
            }

            if (this.reconnect) {
                console.log('p3xr-socket RE-connected', this.ioClient.id);
            } else {
                console.log('p3xr-socket connected', this.ioClient.id);
            }
            this.reconnect = true;
        });

        this.ioClient.on('disconnect', () => {
            if (this.authBlocked) return;
            this.disconnected = true;
            try { this.overlay.show(); } catch {}
        });

        this.ioClient.on('error', (error: any) => {
            this.handleSocketError(error);
        });

        this.ioClient.on('connect_error', (error: any) => {
            if (error?.message === 'auth_required') {
                // Auth required but no valid token — stop reconnecting, no overlay
                this.authBlocked = true;
                this.ioClient.disconnect();
                return;
            }
            this.handleSocketError(error);
        });

        this.ioClient.on('connections', (data: any) => {
            if (data.status === 'error') {
                this.state.resetConnections();
                this.tick();
                return;
            }
            this.state.connections.set(data.connections);
            this.connections$.next(data);
            this.tick();
        });

        this.ioClient.on('redis-disconnected', (data: any) => {
            if (this.state.connection() !== undefined && this.state.connection().id === data.connectionId) {
                this.state.monitor.set(false);
                this.state.connection.set(undefined);

                if (data.status === 'error') {
                    const strings = this.i18n.strings();
                    const msg = strings?.status?.redisDisconnected?.(data) ?? 'Redis disconnected';
                    this.showToast(msg);
                    this.notificationService.notify(strings?.title?.name || 'P3X Redis UI', msg);
                } else if (data.status === 'code') {
                    const strings = this.i18n.strings();
                    const codes = strings?.code ?? {};
                    const msg = codes[data.code] ?? `unknown redis disconnect code: ${data.code}`;
                    this.showToast(msg);
                    this.notificationService.notify(strings?.title?.name || 'P3X Redis UI', msg);
                }

                this.redisDisconnected$.next(data);
                this.tick();
                this.request({ action: 'connection/trigger-disconnect', enableResponse: false }).catch(() => {});
            }
        });

        this.ioClient.on('redis-status', (data: any) => {
            this.state.redisConnections.set(data.redisConnections);
            this.redisStatus$.next(data);
            this.tick();
        });

        let receivedVersion = false;
        this.ioClient.on('configuration', (data: any) => {
            this.state.cfg.set(data);
            if (data.snapshot === true) {
                this.state.version.set('SNAPSHOT');
            } else {
                this.state.version.set('v' + data.version);
                if (!receivedVersion) {
                    receivedVersion = true;
                    try {
                        (window as any).gtag?.('config', this.settings.googleAnalytics, {
                            page_path: '/version/' + this.state.version()
                        });
                    } catch { /* noop */ }
                }
            }
            this.configuration$.next(data);
            this.tick();
        });
    }

    private handleSocketError(error: any): void {
        try { this.overlay.show(); } catch {}
        if (!this.connectErrorWas) {
            this.connectErrorWas = true;
            this.socketError$.next(error);
        }
    }

    private showToast(message: string): void {
        try {
            const snackBar = (globalThis as any).__p3xr_snackbar;
            if (snackBar) {
                const ref = snackBar.open(message, 'x', {
                    duration: 5000,
                    horizontalPosition: 'right',
                    verticalPosition: 'bottom',
                });
                ref.onAction().subscribe(() => ref.dismiss());
            }
        } catch { /* noop */ }
    }

    // --- Request API ---

    request(options: {
        action: string;
        payload?: any;
        enableResponse?: boolean;
    }): Promise<any> {
        if (!this.ioClient) {
            return Promise.reject(new Error('Socket.IO client unavailable'));
        }

        if (!options.payload) {
            options.payload = {};
        }

        options.payload.maxKeys = parseInt(String(this.settings.maxKeys() ?? '10000'));

        const enableResponse = options.enableResponse !== false;

        if (!enableResponse) {
            this.ioClient.emit('p3xr-request', options);
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const requestId = this.settings.generateId();
            (options as any).requestId = requestId;
            const responseEvent = `p3xr-response-${requestId}`;

            let timeout: any;
            const response = (data: any) => {
                clearTimeout(timeout);
                this.ioClient.off(responseEvent);
                if (data?.status === 'ok') {
                    resolve(data);
                } else {
                    let errMsg = 'Unknown error';
                    try {
                        const err = data?.error;
                        if (typeof err === 'string') {
                            errMsg = err;
                        } else if (err?.message) {
                            errMsg = err.message;
                        } else if (err !== undefined && err !== null) {
                            errMsg = String(err);
                        }
                    } catch { /* noop */ }
                    reject(new Error(errMsg));
                }
                // Tick after await continuations settle (avoids NG0100 in dev mode)
                this.tick();
            };

            timeout = setTimeout(() => {
                this.ioClient.off(responseEvent, response);
                const strings = this.i18n.strings();
                const msg = strings?.label?.socketIoTimeout?.({ timeout: this.settings.socketTimeout })
                    ?? `Socket.IO request timeout (${this.settings.socketTimeout}ms)`;
                reject(new Error(msg));
                this.tick();
            }, this.settings.socketTimeout);

            this.ioClient.on(responseEvent, response);
            this.ioClient.emit('p3xr-request', options);
        });
    }

    getClient(): any {
        return this.ioClient;
    }
}
