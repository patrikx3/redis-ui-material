import { Component, Inject, OnInit, OnDestroy, NgZone, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

import { I18nService } from '../../services/i18n.service';
import { MainCommandService } from '../../services/main-command.service';
import { NavigationService } from '../../services/navigation.service';
import { SocketService } from '../../services/socket.service';
import { RedisStateService } from '../../services/redis-state.service';
import { SettingsService } from '../../services/settings.service';
import { DatabaseHeaderComponent } from './database-header.component';
import { DatabaseTreecontrolControlsComponent } from './database-treecontrol-controls.component';
import { DatabaseTreeComponent } from './database-tree.component';

import { debounce } from 'lodash-es';

@Component({
    selector: 'p3xr-database',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        DatabaseHeaderComponent,
        DatabaseTreecontrolControlsComponent,
        DatabaseTreeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './database.component.html',
    styleUrls: ['./database.component.scss'],
    styles: [`
        :host { display: block; }
    `],
    encapsulation: ViewEncapsulation.None,
})
export class DatabaseComponent implements OnInit, OnDestroy {

    readonly strings;

    isXs = false;
    hasConnection = false;
    hasConnections = false;
    resizerActive = false;

    resizeClicked = false;
    private resizerMouseoverOn = false;
    private resizeLeft: number | undefined = undefined;
    private static readonly PANEL_WIDTH_KEY = 'p3xr-database-panel-width';
    private screenSizeIsSmall = false;

    private containerEl!: HTMLElement;
    private headerEl!: HTMLElement;
    private footerEl!: HTMLElement;
    private consoleHeaderEl!: HTMLElement;
    private resizerEl: HTMLElement | undefined;
    private resizeObserver!: ResizeObserver;
    private observedElement: HTMLElement | null = null;
    private resizeTimeoutId: any;

    private readonly unsubs: Array<() => void> = [];

    private readonly resizeMinWidth: number;

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(BreakpointObserver) private readonly breakpointObserver: BreakpointObserver,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(NavigationService) private readonly nav: NavigationService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(RedisStateService) private readonly state: RedisStateService,
        @Inject(SettingsService) private readonly settings: SettingsService,
    ) {
        this.strings = this.i18n.strings;
        this.resizeMinWidth = this.settings.resizeMinWidth;

        // React to global console drawer open/close — re-run layout so tree + content
        // adjust for the newly-reserved vertical space. The drawer height is read as
        // a CSS custom property in rawResize() so one code path handles both states.
        effect(() => {
            this.state.consoleDrawerOpen();
            setTimeout(() => this.rawResize(), 160); // after drawer transition
        });
    }

    ngOnInit(): void {
        this.state.currentPage.set('database');
        this.syncFromGlobal();

        // Subscribe to socket events for reactive state updates
        const sub1 = this.socket.connections$.subscribe(() => this.syncFromGlobal());
        const sub2 = this.socket.redisDisconnected$.subscribe(() => {
            this.syncFromGlobal();
            this.nav.navigateTo('settings');
        });
        const sub3 = this.socket.configuration$.subscribe(() => this.syncFromGlobal());
        const sub4 = this.socket.stateChanged$.subscribe(() => {
            this.syncFromGlobal();
            setTimeout(() => this.rawResize(), 50);
        });
        this.unsubs.push(() => { sub1.unsubscribe(); sub2.unsubscribe(); sub3.unsubscribe(); sub4.unsubscribe(); });

        const xsSub = this.breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
            const wasSmall = this.isXs;
            this.isXs = result.matches;
            if (!this.isXs && wasSmall) {
                clearTimeout(this.resizeTimeoutId);
                this.resizeTimeoutId = setTimeout(() => this.rawResize(), 4 * this.settings.debounce);
            }
            this.screenSizeIsSmall = this.isXs;
            this.cdr.markForCheck();
        });
        this.unsubs.push(() => xsSub.unsubscribe());

        // Init DOM references
        this.ngZone.runOutsideAngular(() => {
            setTimeout(() => this.initDom(), 0);
        });
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
        window.removeEventListener('resize', this.boundRawResize);
        document.removeEventListener('mousedown', this.boundOnDocumentMouseDown);
        this.destroyResizer();
        this.resizeObserver?.disconnect();
    }

    // --- Template methods ---

    goSettings(): void {
        this.nav.navigateTo('settings');
    }

    // --- Resize engine (ported from AngularJS) ---

    readonly resize = debounce(() => {
        this.resizeLeft = undefined;
        this.rawResize();
    }, 100);

    private readonly boundRawResize = () => this.rawResize();
    private readonly boundOnDocumentMouseDown = (e: MouseEvent) => this.onDocumentMouseDown(e);

    private initDom(): void {
        this.containerEl = document.getElementById('p3xr-database-content')!;
        this.headerEl = document.getElementById('p3xr-layout-header-container')!;
        this.footerEl = document.getElementById('p3xr-layout-footer-container')!;
        this.consoleHeaderEl = document.querySelector('p3xr-database-header') as HTMLElement;

        // Load saved panel width and convert to absolute position
        const savedWidth = localStorage.getItem(DatabaseComponent.PANEL_WIDTH_KEY);
        if (savedWidth && this.containerEl) {
            const width = parseInt(savedWidth, 10);
            if (!isNaN(width) && width >= this.resizeMinWidth) {
                const containerLeft = this.containerEl.getBoundingClientRect().left;
                this.resizeLeft = containerLeft + width;
            }
        }

        this.rawResize();
        window.addEventListener('resize', this.boundRawResize);
        document.addEventListener('mousedown', this.boundOnDocumentMouseDown);

        // Navigate to statistics if on bare /database
        if (this.nav.currentUrl === '/database' || this.nav.currentUrl === '/database/') {
            this.nav.navigateTo('database.statistics');
        }

        if (this.state.redisChanged()) {
            this.state.redisChanged.set(false);
            if (this.state.connection()) {
                this.cmd.refresh();
            }
        }

        this.state.page.set(1);

        setTimeout(() => this.rawResize(), 250);

        // ResizeObserver for tree controls
        this.resizeObserver = new ResizeObserver(entries => {
            if (!this.resizeClicked) {
                window.requestAnimationFrame(() => {
                    if (!Array.isArray(entries) || !entries.length) return;
                    this.rawResize();
                });
            }
        });
        this.watchResizeObserver();

        // Bottom console is now a global drawer — LayoutComponent owns its state.
        // We still react to the drawer height changing so tree + content re-layout.
        const stateSub = this.socket.stateChanged$.subscribe(() => this.watchResizeObserver());
        this.unsubs.push(() => { stateSub.unsubscribe(); });
    }

    private rawResize(): void {
        if (!this.containerEl || !this.headerEl || !this.footerEl || !this.consoleHeaderEl) return;

        let minus = 0;
        for (const el of [this.headerEl, this.footerEl, this.consoleHeaderEl]) {
            minus += el.offsetHeight;
        }
        const windowHeight = window.innerHeight;
        const outputPositionMinus = 11;

        // Global console drawer consumes additional height when open — read CSS custom property
        // set by LayoutComponent (see console-drawer.component.scss).
        const drawerCssValue = getComputedStyle(document.documentElement)
            .getPropertyValue('--p3xr-console-drawer-height-active').trim();
        let drawerHeight = 0;
        if (drawerCssValue.endsWith('vh')) {
            drawerHeight = Math.round((parseFloat(drawerCssValue) / 100) * windowHeight);
        } else if (drawerCssValue.endsWith('px')) {
            drawerHeight = parseFloat(drawerCssValue);
        }

        const availableHeight = Math.max(windowHeight - minus - outputPositionMinus - drawerHeight, 100);
        const containerHeight = Math.max(availableHeight, 0);
        this.containerEl.style.height = containerHeight + 'px';
        this.containerEl.style.maxHeight = containerHeight + 'px';

        const containerPosition = this.containerEl.getBoundingClientRect();
        if (!containerPosition || !Number.isFinite(containerPosition.height) || !Number.isFinite(containerPosition.width)) {
            return;
        }
        const contentAreaHeight = Math.max(containerPosition.height, 0);

        // Tree control
        const treeControl = document.getElementById('p3xr-database-treecontrol-container');
        if (treeControl) {
            const treeControlControls = document.getElementById('p3xr-database-treecontrol-controls-container');
            if (!treeControlControls) {
                this.destroyResizer();
                return;
            }
            const treeControlControlsPosition = treeControlControls.getBoundingClientRect();

            treeControl.style.top = (containerPosition.top + treeControlControlsPosition.height) + 'px';
            treeControl.style.left = containerPosition.left + 'px';
            treeControl.style.height = (contentAreaHeight - treeControlControlsPosition.height) + 'px';
            treeControl.style.maxHeight = contentAreaHeight + 'px';

            if (this.resizeLeft !== undefined) {
                treeControl.style.width = (this.resizeLeft - containerPosition.left) + 'px';
            } else {
                treeControl.style.width = this.resizeMinWidth + 'px';
            }
            treeControl.style.minWidth = this.resizeMinWidth + 'px';

            const treeControlPosition = treeControl.getBoundingClientRect();

            if (!this.resizerEl) {
                this.decorateResizer();
            }
            const resizerWidth = 5;
            if (this.resizerEl) {
                this.resizerEl = document.getElementById('p3xr-database-content-sizer')!;
                if (this.resizerEl) {
                    this.resizerEl.addEventListener('mouseover', this.boundResizerMouseover);
                    this.resizerEl.addEventListener('mouseout', this.boundResizerMouseout);
                    this.resizerEl.style.top = containerPosition.top + 'px';
                    this.resizerEl.style.height = Math.max(contentAreaHeight, 0) + 'px';
                    this.resizerEl.style.left = (containerPosition.left + treeControlPosition.width) + 'px';
                    this.resizerEl.style.width = resizerWidth + 'px';

                    treeControlControls.style.width = (containerPosition.left + treeControlPosition.width) + 'px';
                }
            }

            const content = document.getElementById('p3xr-database-content-container');
            if (content) {
                content.style.top = containerPosition.top + 'px';
                content.style.height = contentAreaHeight + 'px';
                content.style.left = (containerPosition.left + treeControlPosition.width + resizerWidth) + 'px';
                content.style.width = (containerPosition.width - treeControlPosition.width - resizerWidth) + 'px';
            }

            treeControlControls.style.width = treeControlPosition.width + 'px';
        } else {
            this.destroyResizer();
        }
    }

    // --- Resizer drag ---

    private readonly boundResizerMouseover = () => {
        this.resizerMouseoverOn = true;
        this.updateResizerColor();
    };
    private readonly boundResizerMouseout = () => {
        this.resizerMouseoverOn = false;
        this.updateResizerColor();
    };
    private readonly boundResizeClick = (event: MouseEvent) => this.resizeClick(event);
    private readonly boundDocumentMousemove = (event: MouseEvent) => this.documentMousemove(event);

    private updateResizerColor(): void {
        this.resizerActive = this.resizeClicked || this.resizerMouseoverOn;
    }

    private resizeClick(event: MouseEvent): void {
        if (event.type === 'mousedown' && (event.target as HTMLElement).id !== 'p3xr-database-content-sizer') return;
        if (event.type === 'mousedown') {
            this.resizeClicked = true;
            document.documentElement.style.cursor = 'ew-resize';
            document.body.classList.add('p3xr-not-selectable');
        } else if (event.type === 'mouseup') {
            document.documentElement.style.cursor = 'auto';
            this.resizeClicked = false;
            document.body.classList.remove('p3xr-not-selectable');
            // Persist panel width
            if (this.resizeLeft !== undefined && this.containerEl) {
                const containerLeft = this.containerEl.getBoundingClientRect().left;
                const width = this.resizeLeft - containerLeft;
                if (width >= this.resizeMinWidth) {
                    localStorage.setItem(DatabaseComponent.PANEL_WIDTH_KEY, String(width));
                }
            }
        }
        if (!this.resizeClicked) {
            this.rawResize();
        }
        event.stopPropagation();
        this.updateResizerColor();
    }

    private documentMousemove(event: MouseEvent): void {
        if (!this.resizeClicked || !this.containerEl) return;
        const containerPosition = this.containerEl.getBoundingClientRect();
        if (event.clientX < containerPosition.left + this.resizeMinWidth || event.clientX > window.innerWidth - this.resizeMinWidth) {
            document.documentElement.style.cursor = 'not-allowed';
        } else {
            document.documentElement.style.cursor = 'ew-resize';
            if (this.resizerEl) {
                this.resizerEl.style.left = event.clientX + 'px';
            }
            this.resizeLeft = event.clientX;
            this.rawResize();
        }
    }

    private decorateResizer(): void {
        this.resizerEl = document.getElementById('p3xr-database-content-sizer') ?? undefined;
        if (!this.resizerEl) return;
        this.resizerEl.addEventListener('mouseover', this.boundResizerMouseover);
        this.resizerEl.addEventListener('mouseout', this.boundResizerMouseout);
        document.addEventListener('mousemove', this.boundDocumentMousemove);
        document.addEventListener('mousedown', this.boundResizeClick);
        document.addEventListener('mouseup', this.boundResizeClick);
    }

    private destroyResizer(): void {
        if (this.resizerEl) {
            this.resizerEl.removeEventListener('mouseover', this.boundResizerMouseover);
            this.resizerEl.removeEventListener('mouseout', this.boundResizerMouseout);
            this.resizerEl = undefined;
        }
        document.removeEventListener('mousedown', this.boundResizeClick);
        document.removeEventListener('mouseup', this.boundResizeClick);
        document.removeEventListener('mousemove', this.boundDocumentMousemove);
    }

    // Bottom console now lives in the global drawer (LayoutComponent). No page-level
    // mousedown handler is needed — the drawer manages its own open/close state.
    private onDocumentMouseDown(_event: MouseEvent): void {
        // kept for back-compat with existing listener registration — no-op
    }

    // --- ResizeObserver for tree controls ---

    private async watchResizeObserver(): Promise<void> {
        if (this.observedElement) {
            this.resizeObserver.unobserve(this.observedElement);
        }
        if (!this.state.connection()) return;
        if (this.isXs) {
            this.rawResize();
            return;
        }
        let elem: HTMLElement | null = null;
        while (elem === null) {
            elem = document.getElementById('p3xr-database-treecontrol-controls-container');
            if (!elem) {
                await new Promise(resolve => setTimeout(resolve));
            }
        }
        this.observedElement = elem;
        this.resizeObserver.observe(this.observedElement);
    }

    // --- State sync ---

    private syncFromGlobal(): void {
        this.hasConnection = this.state.connection() !== undefined;
        this.hasConnections = (this.state.connections()?.list?.length ?? 0) > 0;
    }

}
