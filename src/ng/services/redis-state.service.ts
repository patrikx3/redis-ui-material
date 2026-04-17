import { Injectable, Inject, signal, computed } from '@angular/core';
import { SettingsService } from './settings.service';
import { parseRedisVersion, RedisVersion } from '../../core/redis-version';

declare const P3XR_API_PORT: number;
declare const P3XR_DEV_MODE: boolean;

/**
 * Runtime state service using Angular signals.
 *
 * Single source of truth for all Redis UI runtime state. No global object dependency.
 */
@Injectable({ providedIn: 'root' })
export class RedisStateService {

    // --- Writable signals for runtime state ---

    readonly theme = signal<string | undefined>(undefined);
    readonly connection = signal<any>(undefined);
    readonly currentDatabase = signal<number | undefined>(undefined);
    readonly databaseIndexes = signal<number[]>([0]);
    readonly connections = signal<any>({ list: [] });
    readonly redisConnections = signal<Record<string, any>>({});
    readonly keysRaw = signal<string[]>([]);
    readonly keysInfo = signal<any>(undefined);
    readonly search = signal<string>(this.getStoredSearch());
    readonly page = signal<number>(1);
    readonly info = signal<any>(undefined);
    readonly dbsize = signal<number | undefined>(undefined);
    readonly redisChanged = signal<boolean>(false);
    readonly failed = signal<boolean>(false);
    readonly monitor = signal<boolean>(false);
    readonly monitorPattern = signal<string>('*');
    readonly commands = signal<string[]>([]);
    readonly commandsMeta = signal<Record<string, { syntax: string; group: string }>>({});
    readonly cfg = signal<any>(undefined);
    readonly version = signal<string | undefined>(undefined);
    readonly modules = signal<any[]>([]);
    readonly hasRediSearch = signal<boolean>(false);
    readonly hasReJSON = signal<boolean>(false);
    readonly hasTimeSeries = signal<boolean>(false);
    readonly hasBloom = signal<boolean>(false);
    readonly reducedFunctions = signal<boolean>(false);
    readonly keysInfoFetchedAt = signal<number>(Date.now());

    // --- Console drawer + connection-state awareness ---

    /** 'none' = no connection, 'connecting' = connect in flight, 'connected' = alive */
    readonly connectionState = signal<'none' | 'connecting' | 'connected'>('none');

    /** Route-level page identifier, set by each page on mount. Used by AI context + console cheatsheet filtering. */
    readonly currentPage = signal<
        'connections' | 'database' | 'pulse' | 'profiler' | 'pubsub' | 'analysis' |
        'search' | 'timeseries' | 'info' | 'settings' | 'unknown'
    >('unknown');

    /** Is the global bottom console drawer open? Persisted to localStorage. */
    readonly consoleDrawerOpen = signal<boolean>(this.getStoredDrawerOpen());

    setConsoleDrawerOpen(open: boolean): void {
        this.consoleDrawerOpen.set(open);
        try { localStorage.setItem('p3xr-console-drawer-open', String(open)); } catch {}
    }

    toggleConsoleDrawer(): void {
        this.setConsoleDrawerOpen(!this.consoleDrawerOpen());
    }

    private getStoredDrawerOpen(): boolean {
        try { return localStorage.getItem('p3xr-console-drawer-open') === 'true'; } catch { return false; }
    }

    // --- Computed values ---

    /** Parsed Redis server version for feature gating (e.g. redisVersion().isAtLeast(8, 2)) */
    readonly redisVersion = computed<RedisVersion>(() =>
        parseRedisVersion(this.info()?.server?.redis_version)
    );

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

    // --- API host (computed once at startup) ---
    readonly apiHost: string = (() => {
        const apiUrl = new URL(location.toString());
        if (typeof P3XR_DEV_MODE !== 'undefined' && P3XR_DEV_MODE) {
            const apiPort = typeof P3XR_API_PORT !== 'undefined' ? P3XR_API_PORT : 7843;
            return `http://${apiUrl.hostname}:${apiPort}`;
        }
        return `${apiUrl.protocol}//${apiUrl.host}`;
    })();

    constructor(@Inject(SettingsService) private settings: SettingsService) {}

    /**
     * Resets connections to default state.
     */
    resetConnections(): void {
        this.connections.set({ list: [] });
    }

    private getStoredSearch(): string {
        try {
            return localStorage.getItem('p3xr-state-search') ?? '';
        } catch {
            return '';
        }
    }
}
