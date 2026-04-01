import { Injectable, Inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';

declare const p3xr: any;

/**
 * Runtime state service using Angular signals.
 *
 * Reads from the global p3xr.state object and exposes it through signals
 * for reactive Angular components.
 */
@Injectable({ providedIn: 'root' })
export class RedisStateService {

    // --- Writable signals for runtime state ---

    readonly theme = signal<string | undefined>(this.p3xrState?.theme);
    readonly connection = signal<any>(this.p3xrState?.connection);
    readonly currentDatabase = signal<number | undefined>(this.p3xrState?.currentDatabase);
    readonly databaseIndexes = signal<number[]>(this.p3xrState?.databaseIndexes ?? [0]);
    readonly connections = signal<any>(this.p3xrState?.connections ?? { list: [] });
    readonly redisConnections = signal<Record<string, any>>(this.p3xrState?.redisConnections ?? {});
    readonly keysRaw = signal<string[]>(this.p3xrState?.keysRaw ?? []);
    readonly keysInfo = signal<any>(this.p3xrState?.keysInfo);
    readonly search = signal<string>(this.p3xrState?.search ?? '');
    readonly page = signal<number>(1);
    readonly info = signal<any>(this.p3xrState?.info);
    readonly dbsize = signal<number | undefined>(this.p3xrState?.dbsize);
    readonly redisChanged = signal<boolean>(false);
    readonly failed = signal<boolean>(false);
    readonly monitor = signal<boolean>(false);
    readonly monitorPattern = signal<string>('*');
    readonly commands = signal<string[]>([]);
    readonly cfg = signal<any>(this.p3xrState?.cfg);
    readonly version = signal<string | undefined>(this.p3xrState?.version);
    readonly donated = signal<boolean>(this.p3xrState?.donated ?? false);
    readonly hasProOrEnterpriseJsonBinary = signal<boolean>(this.p3xrState?.hasProOrEnterpriseJsonBinary ?? false);
    readonly license = signal<any>(this.p3xrState?.license ?? {
        tier: 'free',
        valid: false,
        reason: 'LICENSE_MISSING',
        features: [],
    });

    // --- Computed values ---

    readonly themeLayout = computed(() => {
        const t = this.theme();
        return t ? t + 'Layout' : undefined;
    });

    readonly themeCommon = computed(() => {
        const t = this.theme();
        return t ? t + 'Common' : undefined;
    });

    readonly filteredKeys = computed(() => {
        let keys = this.keysRaw().slice();
        const search = this.search();
        const settings = this.settings;

        // Apply client-side search filter
        if (settings.searchClientSide() && typeof search === 'string' && search.length > 0) {
            if (settings.searchStartsWith()) {
                keys = keys.filter((key) => key.startsWith(search));
            } else {
                keys = keys.filter((key) => key.includes(search));
            }
        }
        return keys;
    });

    readonly paginatedKeys = computed(() => {
        const keys = this.filteredKeys();
        const pageSize = this.settings.pageCount();
        if (keys.length <= pageSize) {
            return keys;
        }
        const start = (this.page() - 1) * pageSize;
        return keys.slice(start, start + pageSize);
    });

    readonly pages = computed(() => {
        return Math.ceil(this.filteredKeys().length / this.settings.pageCount());
    });

    constructor(@Inject(SettingsService) private settings: SettingsService) {}

    // --- Helper to access global p3xr.state during hybrid mode ---

    private get p3xrState(): any {
        return p3xr?.state;
    }

    /**
     * Syncs the signals from the global p3xr.state object.
     * Call this after AngularJS modifies p3xr.state (e.g. after a socket response)
     * to keep Angular components up-to-date during hybrid mode.
     */
    syncFromGlobal(): void {
        const state = this.p3xrState;
        if (!state) return;

        this.theme.set(state.theme);
        this.connection.set(state.connection);
        this.currentDatabase.set(state.currentDatabase);
        this.databaseIndexes.set(state.databaseIndexes ?? [0]);
        this.connections.set(state.connections);
        this.redisConnections.set(state.redisConnections ?? {});
        this.keysRaw.set(state.keysRaw ?? []);
        this.keysInfo.set(state.keysInfo);
        this.info.set(state.info);
        this.dbsize.set(state.dbsize);
        this.failed.set(state.failed ?? false);
        this.monitor.set(state.monitor ?? false);
        this.cfg.set(state.cfg);
        this.version.set(state.version);
        this.donated.set(state.donated ?? false);
        this.hasProOrEnterpriseJsonBinary.set(state.hasProOrEnterpriseJsonBinary ?? false);
        this.license.set(state.license);
    }

    /**
     * Resets connections to default state.
     */
    resetConnections(): void {
        this.connections.set({ list: [] });
    }
}
