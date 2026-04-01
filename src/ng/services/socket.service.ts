import { Injectable, Inject, ApplicationRef } from '@angular/core';
import { Subject } from 'rxjs';

declare const p3xr: any;
declare const io: any;

/**
 * Angular Socket.IO service — standalone, no AngularJS dependency.
 * All callbacks run inside Angular's zone for automatic change detection.
 */
@Injectable({ providedIn: 'root' })
export class SocketService {

    private ioClient: any;
    private reconnect = false;
    private licenseRefreshInterval: any;
    private connectErrorWas = false;

    readonly connections$ = new Subject<any>();
    readonly redisDisconnected$ = new Subject<any>();
    readonly redisStatus$ = new Subject<any>();
    readonly configuration$ = new Subject<any>();
    readonly licenseUpdate$ = new Subject<any>();
    readonly socketError$ = new Subject<any>();
    readonly stateChanged$ = new Subject<void>();

    constructor(@Inject(ApplicationRef) private appRef: ApplicationRef) {
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
        };

        if ((globalThis as any).p3xrDevMode === true) {
            ioOptions.transports = ['websocket'];
        }

        this.ioClient = io.connect(p3xr.api.host, ioOptions);


        this.ioClient.on('connect', async () => {
            if (this.reconnect) {
                console.log('p3xr-socket RE-connected', this.ioClient.id);
            } else {
                console.log('p3xr-socket connected', this.ioClient.id);
            }
            this.reconnect = true;

            if (this.licenseRefreshInterval) {
                clearInterval(this.licenseRefreshInterval);
            }
            this.licenseRefreshInterval = setInterval(() => {
                this.refreshLicenseStatus();
            }, 1000 * 60 * 60);

            await this.refreshLicenseStatus();
        });

        this.ioClient.on('disconnect', () => {
            if (this.licenseRefreshInterval) {
                clearInterval(this.licenseRefreshInterval);
                this.licenseRefreshInterval = undefined;
            }
            location.reload();
        });

        this.ioClient.on('info-interval', (data: any) => {
            this.applyLicenseData(data);
            this.tick();
        });

        this.ioClient.on('error', (error: any) => {
            this.handleSocketError(error);
        });

        this.ioClient.on('connect_error', (error: any) => {
            this.handleSocketError(error);
        });

        this.ioClient.on('connections', (data: any) => {
            if (data.status === 'error') {
                p3xr.connectionsReset();
                this.tick();
                return;
            }
            p3xr.state.connections = data.connections;
            this.connections$.next(data);
            this.tick();
        });

        this.ioClient.on('redis-disconnected', (data: any) => {
            if (p3xr.state.connection !== undefined && p3xr.state.connection.id === data.connectionId) {
                p3xr.state.monitor = false;
                p3xr.state.connection = undefined;

                if (data.status === 'error') {
                    const msg = p3xr.strings?.status?.redisDisconnected?.(data) ?? 'Redis disconnected';
                    this.showToast(msg);
                } else if (data.status === 'code') {
                    const codes = p3xr.strings?.code ?? {};
                    const msg = codes[data.code] ?? `unknown redis disconnect code: ${data.code}`;
                    this.showToast(msg);
                }

                this.redisDisconnected$.next(data);
                this.tick();
                this.request({ action: 'trigger-redis-disconnect', enableResponse: false }).catch(() => {});
            }
        });

        this.ioClient.on('redis-status', (data: any) => {
            p3xr.state.redisConnections = data.redisConnections;
            this.redisStatus$.next(data);
            this.tick();
        });

        let receivedVersion = false;
        this.ioClient.on('configuration', (data: any) => {
            p3xr.state.cfg = data;
            if (data.snapshot === true) {
                p3xr.state.version = 'SNAPSHOT';
            } else {
                p3xr.state.version = 'v' + data.version;
                if (!receivedVersion) {
                    receivedVersion = true;
                    try {
                        (window as any).gtag?.('config', p3xr.settings.googleAnalytics, {
                            page_path: '/version/' + p3xr.state.version
                        });
                    } catch { /* noop */ }
                }
            }
            this.configuration$.next(data);
            this.tick();
        });
    }

    // --- License ---

    private applyLicenseData(data: any = {}): void {
        const nextLicense: any = Object.assign({
            licenseEditable: true,
            editableActive: true,
            disabled: false,
            hasLicenseKey: false,
            licenseKeyMasked: '',
            tier: 'free',
            valid: false,
            reason: 'LICENSE_MISSING',
            licenseStatus: 'inactive',
            maxDevices: null,
            activeDevices: null,
            deviceLease: null,
            daysLeft: null,
            features: [],
        }, (data.license && typeof data.license === 'object') ? data.license : {});

        if (typeof data.hasLicenseKey === 'boolean') {
            nextLicense.hasLicenseKey = data.hasLicenseKey;
        } else {
            nextLicense.hasLicenseKey = nextLicense.hasLicenseKey === true;
        }
        if (typeof data.licenseEditable === 'boolean') {
            nextLicense.licenseEditable = data.licenseEditable;
        } else if (typeof data.editableActive === 'boolean') {
            nextLicense.licenseEditable = data.editableActive;
        } else if (typeof data.disabled === 'boolean') {
            nextLicense.licenseEditable = !data.disabled;
        } else if (typeof nextLicense.licenseEditable !== 'boolean') {
            nextLicense.licenseEditable = true;
        }
        nextLicense.editableActive = nextLicense.licenseEditable;
        nextLicense.disabled = !nextLicense.licenseEditable;
        if (typeof data.licenseKeyMasked === 'string') {
            nextLicense.licenseKeyMasked = data.licenseKeyMasked;
        } else if (typeof nextLicense.licenseKeyMasked !== 'string') {
            nextLicense.licenseKeyMasked = '';
        }
        if (typeof data.tier === 'string' && data.tier.length > 0) {
            nextLicense.tier = data.tier;
        }
        if (!Array.isArray(nextLicense.features)) {
            nextLicense.features = [];
        }
        if (!nextLicense.deviceLease || typeof nextLicense.deviceLease !== 'object') {
            nextLicense.deviceLease = null;
        }
        if (typeof nextLicense.maxDevices !== 'number') {
            nextLicense.maxDevices = nextLicense.deviceLease?.maxDevices ?? null;
        }
        if (typeof nextLicense.activeDevices !== 'number') {
            nextLicense.activeDevices = nextLicense.deviceLease?.activeDevices ?? null;
        }

        const wasDonated = p3xr.state.donated === true;
        // All features are free — always enterprise
        const isDonated = true;
        const activeForFeatures = true;
        const hasProOrEnterpriseJsonBinary = true;

        p3xr.state.license = nextLicense;
        p3xr.state.donated = isDonated;
        // All features are free — always enterprise
        p3xr.state.hasProOrEnterpriseJsonBinary = true;
        // p3xr.state.hasProOrEnterpriseJsonBinary = hasProOrEnterpriseJsonBinary;
        if (p3xr.state.cfg && typeof data.readonlyConnections === 'boolean') {
            p3xr.state.cfg.readonlyConnections = data.readonlyConnections;
        }

        if (wasDonated !== isDonated) {
            try {
                if (!p3xr.isBot?.()) {
                    (window as any).gtag?.('config', p3xr.settings.googleAnalytics, {
                        page_path: isDonated ? '/donated' : '/free'
                    });
                }
            } catch { /* noop */ }
        }

        this.licenseUpdate$.next(nextLicense);
    }

    private async refreshLicenseStatus(): Promise<void> {
        try {
            const data = await this.request({ action: 'license-status' });
            this.applyLicenseData(data);
        } catch (e: any) {
            console.warn('license-status refresh failed', e.message);
        }
    }

    private handleSocketError(error: any): void {
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

        options.payload.maxKeys = parseInt(p3xr.settings?.maxKeys ?? '10000');

        const enableResponse = options.enableResponse !== false;

        if (!enableResponse) {
            this.ioClient.emit('p3xr-request', options);
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const requestId = p3xr.nextId();
            (options as any).requestId = requestId;
            const responseEvent = `p3xr-response-${requestId}`;

            let timeout: any;
            const response = (data: any) => {
                clearTimeout(timeout);
                this.ioClient.off(responseEvent);
                if (data?.status === 'ok') {
                    if (data.license || data.licenseKey || data.donated || options.action === 'license-status') {
                        this.applyLicenseData(data);
                    }
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
                const msg = p3xr.strings?.label?.socketIoTimeout?.({ timeout: p3xr.settings.socket.timeout })
                    ?? `Socket.IO request timeout (${p3xr.settings.socket.timeout}ms)`;
                reject(new Error(msg));
                this.tick();
            }, p3xr.settings.socket.timeout);

            this.ioClient.on(responseEvent, response);
            this.ioClient.emit('p3xr-request', options);
        });
    }

    getClient(): any {
        return this.ioClient;
    }
}
