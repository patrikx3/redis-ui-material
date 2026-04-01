import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from './socket.service';
import { CommonService } from './common.service';
import { RedisParserService } from './redis-parser.service';
import { RedisStateService } from './redis-state.service';
import { SettingsService } from './settings.service';
import { I18nService } from './i18n.service';
import { NavigationService } from './navigation.service';

declare const p3xr: any;

/**
 * Main command service — encapsulates Redis operations previously in AngularJS p3xrMain controller.
 *
 * Provides:
 * - selectDatabase(): switch Redis DB index
 * - save(): persist Redis data to disk
 * - refresh(): reload keys and info from server
 * - statistics(): navigate to statistics and refresh
 * - currentDatabase getter/setter with localStorage persistence
 * - addKey(): broadcast new key event
 *
 * Used by main-home-header, main-treecontrol-controls, and the main page component.
 */
@Injectable({ providedIn: 'root' })
export class MainCommandService {

    readonly refreshKey$ = new Subject<void>();
    readonly keyNew$ = new Subject<{ event: Event; node?: any }>();
    readonly keyDelete$ = new Subject<{ key: string; event: Event }>();
    readonly keyRename$ = new Subject<{ key: string; event: Event }>();
    readonly treeControlEnabled$ = new Subject<boolean>();
    readonly mainResizer$ = new Subject<{ drag: boolean }>();
    readonly treeRefresh$ = new Subject<void>();
    readonly consoleEmbeddedResize$ = new Subject<void>();
    readonly consoleActivate$ = new Subject<void>();
    readonly consoleDeactivate$ = new Subject<void>();
    readonly connectRequest$ = new Subject<{ connection: any; disableState?: boolean }>();
    readonly disconnectRequest$ = new Subject<void>();

    constructor(
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(RedisParserService) private readonly redisParser: RedisParserService,
        @Inject(RedisStateService) private readonly state: RedisStateService,
        @Inject(SettingsService) private readonly settings: SettingsService,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(NavigationService) private readonly nav: NavigationService,
    ) {}

    get currentDatabase(): number {
        let db = p3xr.state?.currentDatabase;
        if (db === undefined) {
            db = this.readStorageItem(this.getStorageKey());
        }
        if (db === undefined || db === null) {
            db = 0;
        }
        return Number(db);
    }

    set currentDatabase(value: number) {
        p3xr.state.currentDatabase = value;
        const storageKey = this.getStorageKey();
        if (storageKey) {
            try { localStorage.setItem(storageKey, String(value)); } catch {}
        }
    }

    async selectDatabase(dbIndex: number): Promise<void> {
        this.currentDatabase = dbIndex;
        this.socket.stateChanged$.next();
        try {
            p3xr.state.page = 1;
            await this.socket.request({
                action: 'console',
                payload: { command: `select ${dbIndex}` }
            });
            const strings = this.i18n.strings();
            this.common.toast({
                message: strings.status?.dbChanged?.({ db: dbIndex }) ?? `Database changed to ${dbIndex}`
            });
            await this.statistics();
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            this.socket.stateChanged$.next();
        }
    }

    async save(): Promise<void> {
        try {
            const response = await this.socket.request({ action: 'save' });
            const info = this.redisParser.info(response.info);
            p3xr.state.info = info;
            this.state.info.set(info);
            const strings = this.i18n.strings();
            this.common.toast({
                message: strings.status?.savedRedis ?? 'Redis saved'
            });
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async statistics(): Promise<void> {
        try {
            this.navigateTo('database.statistics');
            await this.refresh();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async refresh(options: { withoutParent?: boolean } = {}): Promise<void> {
        const { withoutParent = false } = options;

        console.time('refresh');

        try {
            const payload: any = {};

            if (!p3xr.settings?.searchClientSide &&
                typeof p3xr.state?.search === 'string' &&
                p3xr.state.search.length > 0) {
                if (p3xr.settings?.searchStartsWith) {
                    payload.match = p3xr.state.search + '*';
                } else {
                    payload.match = '*' + p3xr.state.search + '*';
                }
            }

            const response = await this.socket.request({
                action: 'refresh',
                payload
            });

            p3xr.state.dbsize = response.dbsize;
            p3xr.state.redisChanged = true;
            this.state.dbsize.set(response.dbsize);

            await this.common.loadRedisInfoResponse({ response });

            // Tell tree to rebuild with new keys
            this.treeRefresh$.next();

            if (!withoutParent) {
                this.refreshKey$.next();
            }
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            console.timeEnd('refresh');
            this.socket.stateChanged$.next();
        }
    }

    addKey(options: { event: Event; node?: any }): void {
        const { event, node } = options;
        event.stopPropagation();
        this.keyNew$.next({ event, node });
    }

    async disconnect(): Promise<void> {
        const conn = p3xr.state?.connection;
        const storageKey = p3xr.settings?.connectInfo?.storageKey;

        // Clear state + storage immediately for instant UI feedback
        if (storageKey) {
            try { localStorage.removeItem(storageKey); } catch {}
        }
        p3xr.state.connection = undefined;
        p3xr.state.redisConnections = {};
        p3xr.state.monitor = false;
        this.state.connection.set(undefined);
        this.state.redisConnections.set({});
        this.socket.stateChanged$.next();

        try {
            await this.socket.request({
                action: 'connection-disconnect',
                payload: { connectionId: conn?.id },
            });
        } catch {
            // Ignore — state already cleared
        } finally {
            this.nav.navigateTo('settings');
        }
    }

    navigateTo(state: string, params?: any): void {
        this.nav.navigateTo(state, params);
    }

    // --- Private helpers ---

    private getStorageKey(): string {
        try {
            return p3xr.settings?.connection?.getStorageKeyCurrentDatabase?.(p3xr.state?.connection?.id) ?? '';
        } catch {
            return '';
        }
    }

    private readStorageItem(name: string): string | null {
        if (!name) return null;
        try { return localStorage.getItem(name); } catch { return null; }
    }

}
