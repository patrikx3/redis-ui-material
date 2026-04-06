import { Component, Inject, OnInit, OnDestroy, HostListener, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { filter } from 'rxjs/operators';

import { ThemeService } from '../services/theme.service';
import { I18nService } from '../services/i18n.service';
import { RedisStateService } from '../services/redis-state.service';
import { SocketService } from '../services/socket.service';
import { CommonService } from '../services/common.service';
import { NavigationService } from '../services/navigation.service';
import { AskAuthorizationDialogService } from '../dialogs/ask-authorization-dialog.service';
import { MainCommandService } from '../services/main-command.service';
import { ShortcutsService } from '../services/shortcuts.service';
import { OverlayService } from '../services/overlay.service';
import { SettingsService } from '../services/settings.service';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from '../components/login.component';

// Side-effect: webpack processes the SCSS through sass-loader → css-loader → MiniCssExtractPlugin
require('./layout.component.scss');

/**
 * Angular layout component — replaces the AngularJS p3xrLayout component.
 *
 * Renders the fixed header toolbar (app name, home, settings) and fixed footer
 * toolbar (connection menu, disconnect, donate, language, theme, github).
 *
 * Electron bridge:
 *   global.p3xrSetLanguage(key) — called by webview inject script to set language
 *   global.p3xrSetMenu(route)   — called by webview inject script to navigate
 *
 * Both globals are preserved exactly as they were in the AngularJS controller
 * so existing Electron integration continues to work without any changes.
 */
@Component({
    selector: 'p3xr-layout',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatTooltipModule,
        LoginComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './layout.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {

    // Header buttons: text hidden below 720px (matches AngularJS p3xr-button component)
    isWide = true;
    // Footer buttons: different AngularJS breakpoints per button
    isGtXs = true;   // >600px — Theme button text (AngularJS: hide-xs)
    isGtSm = true;   // >960px — Disconnect/Language/GitHub text (AngularJS: hide-xs hide-sm)
    isElectron = false;
    isElectronInitialized = false;

    private readonly unsubFns: Array<() => void> = [];

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(BreakpointObserver) private readonly breakpointObserver: BreakpointObserver,
        @Inject(ThemeService) readonly theme: ThemeService,
        @Inject(I18nService) readonly i18n: I18nService,
        @Inject(RedisStateService) readonly state: RedisStateService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(AskAuthorizationDialogService) private readonly authDialog: AskAuthorizationDialogService,
        @Inject(NavigationService) private readonly nav: NavigationService,
        @Inject(Router) private readonly router: Router,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(ShortcutsService) readonly shortcuts: ShortcutsService,
        @Inject(OverlayService) private readonly overlay: OverlayService,
        @Inject(SettingsService) private readonly settings: SettingsService,
        @Inject(AuthService) readonly auth: AuthService,
    ) {}

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent): void {
        this.shortcuts.handleKeydown(event);
    }

    ngOnInit(): void {
        // Remove the loading splash shown before Angular bootstraps
        document.getElementById('p3xr-loading')?.remove();

        // Check auth status — only proceed with app init when authenticated
        this.auth.checkAuthStatus().then(() => {
            this.cdr.markForCheck();

            if (this.auth.isAuthenticated()) {
                // Auto-connect from localStorage on startup
                const savedConnection = this.readConnectionFromStorage();
                if (savedConnection) {
                    this.connect(savedConnection);
                }
            }
        });

        // Initialize filtered languages list
        this.filterLanguages();

        // Header: 720px (matches AngularJS p3xr-button component threshold)
        const sub720 = this.breakpointObserver.observe('(min-width: 720px)').subscribe(r => {
            this.isWide = r.matches;
            this.cdr.markForCheck();
        });
        // Footer: 600px (AngularJS hide-xs — Theme button)
        const sub600 = this.breakpointObserver.observe('(min-width: 600px)').subscribe(r => {
            this.isGtXs = r.matches;
            this.cdr.markForCheck();
        });
        // Footer: 960px (AngularJS hide-xs hide-sm — Disconnect/Language/GitHub)
        const sub960 = this.breakpointObserver.observe('(min-width: 960px)').subscribe(r => {
            this.isGtSm = r.matches;
            this.cdr.markForCheck();
        });
        this.unsubFns.push(() => { sub720.unsubscribe(); sub600.unsubscribe(); sub960.unsubscribe(); });

        this.isElectron = /electron/i.test(navigator.userAgent);

        // Subscribe to socket events
        this.subscribeSocketEvents();

        // Google Analytics route tracking
        this.setupRouteTracking();

        // Subscribe to connect/disconnect requests from other components
        const subConnect = this.cmd.connectRequest$.subscribe((req) => {
            this.connect(req.connection);
        });
        const subDisconnect = this.cmd.disconnectRequest$.subscribe(() => {
            this.disconnect();
        });
        this.unsubFns.push(() => { subConnect.unsubscribe(); subDisconnect.unsubscribe(); });

        // Expose Electron bridge globals with a delay so the app is fully ready.
        setTimeout(() => this.setupElectronBridge(), 3000);
    }

    ngOnDestroy(): void {
        this.unsubFns.forEach(fn => fn());
    }

    // --- Computed properties (read by template) ---

    get connectionName(): string {
        const conn = this.state.connection();
        const strings = this.i18n.strings();
        if (conn) {
            const fn = strings?.label?.connected;
            return typeof fn === 'function' ? fn({ name: conn.name }) : (conn.name ?? '');
        }
        return strings?.intention?.connect ?? 'Connect';
    }

    readonly sortedThemeKeys = [
        'light',
        'enterprise',
        'dark',
        'darkNeu',
        'darkoBluo',
        'matrix',
        'redis',
    ];

    get themeSelectedKey(): string {
        const theme = this.theme.currentTheme();
        if (!theme.startsWith('p3xrTheme')) return '';
        const raw = theme.slice('p3xrTheme'.length);
        return raw.charAt(0).toLowerCase() + raw.slice(1);
    }

    get showLogin(): boolean {
        return this.auth.authChecked() && this.auth.authRequired() && !this.auth.isAuthenticated();
    }

    get hasRediSearch(): boolean {
        return !!this.state.hasRediSearch();
    }

    get reducedFunctions(): boolean {
        return !!this.state.reducedFunctions();
    }

    get currentVersion(): string | undefined {
        return this.state.version();
    }

    get connectionsList(): any[] {
        return this.state.connections()?.list ?? [];
    }

    get groupedConnectionsList(): Array<{ name: string; connections: any[] }> {
        const list = this.connectionsList;
        let groupMode = false;
        try {
            groupMode = localStorage.getItem('p3xr-connection-group-mode') === 'true';
        } catch { /* ignore */ }
        if (!groupMode) {
            return [{ name: '', connections: list }];
        }
        const groups = new Map<string, any[]>();
        for (const conn of list) {
            const groupName = conn.group?.trim() || '';
            if (!groups.has(groupName)) {
                groups.set(groupName, []);
            }
            groups.get(groupName)!.push(conn);
        }
        const result: Array<{ name: string; connections: any[] }> = [];
        for (const [name, connections] of groups) {
            result.push({ name, connections });
        }
        return result;
    }

    get currentConnection(): any {
        return this.state.connection();
    }

    @ViewChild('languageSearchInput') languageSearchInput!: ElementRef<HTMLInputElement>;
    @ViewChild('languageMenuTrigger') languageMenuTrigger!: MatMenuTrigger;

    languageSearch = '';
    filteredLanguages: string[] = [];
    highlightedLanguageIndex = 0;

    get availableLanguages(): string[] {
        return Object.keys(this.i18n.strings()?.language ?? {});
    }

    onLanguageSearchInput(value: string): void {
        this.languageSearch = value;
        this.filterLanguages();
        this.highlightedLanguageIndex = this.findCurrentLanguageIndex();
        this.cdr.markForCheck();
    }

    onLanguageMenuOpened(): void {
        this.highlightedLanguageIndex = this.findCurrentLanguageIndex();
        setTimeout(() => {
            this.languageSearchInput?.nativeElement?.focus();
            this.scrollHighlightedLanguageIntoView();
        });
    }

    private findCurrentLanguageIndex(): number {
        const idx = this.filteredLanguages.indexOf(this.i18n.currentLang());
        return idx >= 0 ? idx : 0;
    }

    onLanguageMenuClosed(): void {
        this.languageSearch = '';
        this.filterLanguages();
    }

    onLanguageSearchKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape') {
            this.languageMenuTrigger.closeMenu();
            return;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            this.onLanguageSearchEnter();
            return;
        }
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault();
            const len = this.filteredLanguages.length;
            if (len === 0) return;
            if (event.key === 'ArrowDown') {
                this.highlightedLanguageIndex = (this.highlightedLanguageIndex + 1) % len;
            } else {
                this.highlightedLanguageIndex = (this.highlightedLanguageIndex - 1 + len) % len;
            }
            this.scrollHighlightedLanguageIntoView();
            this.cdr.markForCheck();
            return;
        }
        event.stopPropagation();
    }

    onLanguageSearchEnter(): void {
        if (this.filteredLanguages.length > 0) {
            this.setLanguage(this.filteredLanguages[this.highlightedLanguageIndex]);
            this.languageMenuTrigger.closeMenu();
        }
    }

    private scrollHighlightedLanguageIntoView(): void {
        setTimeout(() => {
            const menu = document.querySelector('.p3xr-language-menu .mat-mdc-menu-content');
            if (!menu) return;
            const items = menu.querySelectorAll('.mat-mdc-menu-item');
            const target = items[this.highlightedLanguageIndex];
            target?.scrollIntoView({ block: 'nearest' });
        });
    }

    private filterLanguages(): void {
        const all = this.availableLanguages;
        const search = this.languageSearch.trim().toLowerCase();
        if (!search) {
            this.filteredLanguages = all;
            return;
        }
        this.filteredLanguages = all.filter(key => {
            const label = this.languageLabel(key).toLowerCase();
            return label.includes(search) || key.toLowerCase().includes(search);
        });
    }

    themeLabel(key: string): string {
        return this.i18n.strings()?.label?.theme?.[key] ?? key;
    }

    languageLabel(key: string): string {
        return this.i18n.strings()?.language?.[key] ?? key;
    }

    // --- Actions ---

    isActivePage(page: string): boolean {
        const url = this.nav.currentUrl;
        switch (page) {
            case 'database': return url.startsWith('/database');
            case 'search': return url === '/search';
            case 'monitoring': return url.startsWith('/monitoring');
            case 'info': return url === '/info';
            case 'settings': return url === '/settings';
            default: return false;
        }
    }

    navigateTo(stateName: string, params?: any): void {
        this.nav.navigateTo(stateName, params);
    }

    reloadPage(): void {
        location.href = '/ng/';
    }

    async logout(): Promise<void> {
        try {
            await this.common.confirm({
                message: this.i18n.strings()?.intention?.logout || 'Logout',
            });
            this.auth.logout();
        } catch {
            // cancelled
        }
    }

    setTheme(key: string): void {
        this.theme.setTheme(this.theme.generateThemeName(key));
    }

    setThemeAuto(): void {
        this.theme.setTheme('auto');
    }

    async setLanguage(key: string): Promise<void> {
        try {
            this.i18n.setLanguage(key);
            if (this.isElectron) {
                await this.socket.request({ action: 'set-language', payload: { key } });
                this.isElectronInitialized = true;
            }
            this.filterLanguages();
            this.cdr.markForCheck();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async connect(connection: any): Promise<void> {
        console.time('connect');
        connection = this.cloneConnection(connection);
        try {

            const dbStorageKey = this.settings.getStorageKeyCurrentDatabase(connection.id);
            const db = this.getStorageString(dbStorageKey);

            if (connection.askAuth === true) {
                const auth = await this.authDialog.show();
                connection.username = auth.username || undefined;
                connection.password = auth.password || undefined;
            }

            const strings = this.i18n.strings();
            this.overlay.show({
                message: strings?.title?.connectingRedis ?? 'Connecting...',
            });

            const response = await this.socket.request({
                action: 'connection-connect',
                payload: { connection, db },
            });

            // Update state signals directly
            this.state.page.set(1);
            this.state.monitor.set(false);
            this.state.dbsize.set(response.dbsize);
            const databaseIndexes: number[] = [];
            let i = 0;
            while (i < response.databases) databaseIndexes.push(i++);
            this.state.databaseIndexes.set(databaseIndexes);
            this.state.connection.set(connection);

            const commands: string[] = [];
            Object.keys(response.commands ?? {}).forEach(k => {
                commands.push(response.commands[k][0]);
            });
            commands.sort();
            this.state.commands.set(commands);
            this.state.commandsMeta.set(response.commandsMeta ?? {});

            // Detect loaded Redis modules
            const modules = Array.isArray(response.modules) ? response.modules : [];
            this.state.modules.set(modules);
            this.state.hasReJSON.set(modules.some((m: any) => m.name === 'ReJSON'));
            this.state.hasRediSearch.set(modules.some((m: any) => m.name === 'search'));
            this.state.hasTimeSeries.set(modules.some((m: any) => m.name === 'timeseries' || m.name === 'Timeseries'));

            await this.common.loadRedisInfoResponse({ response });
            this.socket.stateChanged$.next();

            this.setStorageObject(
                this.settings.connectInfoStorageKey,
                connection,
            );

            // No navigation — just refresh the current view in place
        } catch (error) {
            this.removeStorageItem(this.settings.connectInfoStorageKey);
            this.state.connection.set(undefined);
            this.common.generalHandleError(error);
        } finally {
            this.overlay.hide();
            this.cdr.markForCheck();
        }
        console.timeEnd('connect');
    }

    async disconnect(): Promise<void> {
        await this.cmd.disconnect();
        this.cdr.markForCheck();
    }

    reducedFunctionality(): void {
        const strings = this.i18n.strings();
        const fn = strings?.label?.tooManyKeys;
        const message = typeof fn === 'function'
            ? fn({
                count: this.state.keysRaw()?.length ?? 0,
                maxLightKeysCount: this.settings.maxLightKeysCount,
            })
            : '';
        this.common.confirm({ disableCancel: true, message }).catch(() => {});
    }

    openLink(target: 'github' | 'githubRelease' | 'githubChangelog' | 'donate'): void {
        const urls: Record<string, string> = {
            github: 'https://github.com/patrikx3/redis-ui',
            githubRelease: 'https://github.com/patrikx3/redis-ui/releases',
            githubChangelog: 'https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log',
            donate: 'https://www.paypal.me/patrikx3',
        };
        window.open(urls[target], '_blank');
    }

    // --- Private helpers ---

    private cloneConnection(connection: any): any {
        return structuredClone(connection);
    }

    private readConnectionFromStorage(): any {
        return this.getStorageObject(
            this.settings.connectInfoStorageKey,
        );
    }

    private getStorageString(name: string | undefined): string | undefined {
        if (!name) return undefined;
        try { return localStorage.getItem(name) ?? undefined; } catch { return undefined; }
    }

    private getStorageObject(name: string | undefined): any {
        const raw = this.getStorageString(name);
        if (!raw) return undefined;
        try { return JSON.parse(raw); } catch { return undefined; }
    }

    private setStorageObject(name: string | undefined, value: any): void {
        if (!name) return;
        try { localStorage.setItem(name, JSON.stringify(value)); } catch {}
    }

    private removeStorageItem(name: string | undefined): void {
        if (!name) return;
        try { localStorage.removeItem(name); } catch {}
    }

    private subscribeSocketEvents(): void {
        const sub1 = this.socket.redisDisconnected$.subscribe(() => {
            this.state.connection.set(undefined);
            this.nav.navigateTo('settings');
            this.cdr.markForCheck();
        });
        const sub2 = this.socket.socketError$.subscribe(() => {
            this.cdr.markForCheck();
        });
        const sub3 = this.socket.connections$.subscribe(() => {
            this.cdr.markForCheck();
        });
        const sub4 = this.socket.configuration$.subscribe(() => {
            this.cdr.markForCheck();
        });
        this.unsubFns.push(
            () => { sub1.unsubscribe(); sub2.unsubscribe(); sub3.unsubscribe(); sub4.unsubscribe(); }
        );
    }

    private setupRouteTracking(): void {
        if (/spider|bot|yahoo|bing|google|yandex|crawl|slurp|curl/i.test(navigator.userAgent)) return;

        const sub = this.router.events.pipe(
            filter((event): event is NavigationEnd => event instanceof NavigationEnd)
        ).subscribe((event) => {
            try {
                const path = event.urlAfterRedirects.toLowerCase().startsWith('/database/key/')
                    ? '/database/key'
                    : event.urlAfterRedirects;
                (globalThis as any).gtag?.('config',
                    this.settings.googleAnalytics,
                    { page_path: path },
                );
            } catch { /* noop */ }
        });
        this.unsubFns.push(() => sub.unsubscribe());
    }

    /**
     * Expose the Electron bridge globals.
     *
     * Electron injects a script into the webview that calls:
     *   global.p3xrSetLanguage(key)  — sets the UI language
     *   global.p3xrSetMenu(route)    — navigates to a route
     *
     * These are the SAME globals as the AngularJS controller exposed.
     * Keeping them with the same names and behaviour ensures no changes are
     * needed in the Electron host application.
     */
    private setupElectronBridge(): void {
        if (!this.isElectron) return;

        // Listen for postMessage from the Electron shell (iframe parent).
        window.addEventListener('message', (event: MessageEvent) => {
            const data = event.data;
            if (!data || typeof data.type !== 'string') return;
            if (data.type === 'p3x-set-language' && typeof data.translation === 'string') {
                this.ngZone.run(async () => {
                    try {
                        await this.setLanguage(data.translation);
                    } catch (e) {
                        console.warn('[LayoutComponent] p3x-set-language failed', e);
                    }
                });
            } else if (data.type === 'p3x-menu' && typeof data.action === 'string') {
                this.ngZone.run(() => {
                    try {
                        this.nav.navigateTo(data.action);
                    } catch (e) {
                        console.warn('[LayoutComponent] p3x-menu failed', e);
                    }
                });
            }
        });
    }
}
