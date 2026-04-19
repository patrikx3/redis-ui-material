import {
    Component, Inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA,
    ViewEncapsulation, ChangeDetectorRef, computed, signal, AfterViewInit, OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { I18nService } from '../services/i18n.service';
import { RedisStateService } from '../services/redis-state.service';
import { ConsoleComponent } from '../pages/console/console.component';

/**
 * Global bottom console drawer.
 *
 * Mounts once at the app-shell level (LayoutComponent), sibling of <router-outlet>.
 * Visibility driven by state.consoleDrawerOpen signal.
 *
 * No wrapper chrome — the ConsoleComponent's own toolbar serves as the header,
 * with the close button emitted back via (closeRequest).
 *
 * When connectionState === 'none' | 'connecting', renders a limited-mode empty
 * state banner instead of the full console.
 */
@Component({
    selector: 'p3xr-console-drawer',
    standalone: true,
    imports: [
        CommonModule,
        ConsoleComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './console-drawer.component.html',
    styleUrls: ['./console-drawer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsoleDrawerComponent implements AfterViewInit, OnDestroy {

    private static readonly HEIGHT_KEY = 'p3xr-console-drawer-height';
    private static readonly MIN_VH = 15;
    private static readonly MAX_VH = 66;
    private static readonly FOOTER_HEIGHT = 48;

    readonly strings;

    readonly isOpen = computed(() => this.state.consoleDrawerOpen());
    readonly isConnected = computed(() => this.state.connectionState() === 'connected');
    readonly isConnecting = computed(() => this.state.connectionState() === 'connecting');
    readonly connectionName = computed(() => this.state.connection()?.name ?? '');

    readonly resizeClicked = signal(false);
    private drawerResizeObserver: ResizeObserver | undefined;

    constructor(
        @Inject(I18nService) readonly i18n: I18nService,
        @Inject(RedisStateService) readonly state: RedisStateService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
    }

    ngAfterViewInit(): void {
        // Saved height is applied at bootstrap (src/core/console-drawer-height.ts)
        // so it's in place before this component mounts.
        document.addEventListener('mousedown', this.boundResizeClick);
        document.addEventListener('mouseup', this.boundResizeClick);
        document.addEventListener('mousemove', this.boundDocumentMousemove);
        // Observe the drawer element itself — fires on every size change frame,
        // covering the open/close height transition as well as live drag.
        // Listeners (database tree, console rawResize) pick it up via window.resize.
        const drawerEl = document.getElementById('p3xr-console-drawer');
        if (drawerEl && typeof ResizeObserver !== 'undefined') {
            this.drawerResizeObserver = new ResizeObserver(() => {
                window.dispatchEvent(new Event('resize'));
            });
            this.drawerResizeObserver.observe(drawerEl);
        }
    }

    ngOnDestroy(): void {
        document.removeEventListener('mousedown', this.boundResizeClick);
        document.removeEventListener('mouseup', this.boundResizeClick);
        document.removeEventListener('mousemove', this.boundDocumentMousemove);
        this.drawerResizeObserver?.disconnect();
    }

    close(): void {
        this.state.setConsoleDrawerOpen(false);
        this.cdr.markForCheck();
    }

    private computeBounds(): { minPx: number; maxPx: number } {
        return {
            minPx: (ConsoleDrawerComponent.MIN_VH / 100) * window.innerHeight,
            maxPx: (ConsoleDrawerComponent.MAX_VH / 100) * window.innerHeight,
        };
    }

    private readonly boundResizeClick = (event: MouseEvent) => this.resizeClick(event);
    private readonly boundDocumentMousemove = (event: MouseEvent) => this.documentMousemove(event);

    private resizeClick(event: MouseEvent): void {
        const target = event.target as HTMLElement | null;
        if (event.type === 'mousedown') {
            if (!target || target.id !== 'p3xr-console-drawer-sizer') return;
            this.resizeClicked.set(true);
            this.applyBoundCursor(false);
            document.body.classList.add('p3xr-not-selectable');
            document.documentElement.classList.add('p3xr-console-drawer-resizing');
            event.stopPropagation();
            event.preventDefault();
        } else if (event.type === 'mouseup') {
            if (!this.resizeClicked()) return;
            this.resizeClicked.set(false);
            this.clearBoundCursor();
            document.body.classList.remove('p3xr-not-selectable');
            document.documentElement.classList.remove('p3xr-console-drawer-resizing');
            const current = document.documentElement.style.getPropertyValue('--p3xr-console-drawer-height');
            if (current && current.endsWith('px')) {
                localStorage.setItem(ConsoleDrawerComponent.HEIGHT_KEY, current);
            }
            event.stopPropagation();
        }
    }

    private documentMousemove(event: MouseEvent): void {
        if (!this.resizeClicked()) return;
        const { minPx, maxPx } = this.computeBounds();
        let newHeight = window.innerHeight - event.clientY - ConsoleDrawerComponent.FOOTER_HEIGHT;
        const outOfBounds = newHeight < minPx || newHeight > maxPx;
        if (newHeight < minPx) newHeight = minPx;
        if (newHeight > maxPx) newHeight = maxPx;
        this.applyBoundCursor(outOfBounds);
        document.documentElement.style.setProperty('--p3xr-console-drawer-height', `${Math.round(newHeight)}px`);
    }

    /** Force cursor inline with `!important` on html/body/sizer — beats any CSS rule. */
    private applyBoundCursor(outOfBounds: boolean): void {
        const sizerEl = document.getElementById('p3xr-console-drawer-sizer');
        if (outOfBounds) {
            document.documentElement.style.setProperty('cursor', 'not-allowed', 'important');
            document.body.style.setProperty('cursor', 'not-allowed', 'important');
            sizerEl?.style.setProperty('cursor', 'not-allowed', 'important');
        } else {
            document.documentElement.style.setProperty('cursor', 'ns-resize', 'important');
            document.body.style.setProperty('cursor', 'ns-resize', 'important');
            sizerEl?.style.removeProperty('cursor');
        }
    }

    private clearBoundCursor(): void {
        const sizerEl = document.getElementById('p3xr-console-drawer-sizer');
        document.documentElement.style.removeProperty('cursor');
        document.body.style.removeProperty('cursor');
        sizerEl?.style.removeProperty('cursor');
    }
}
