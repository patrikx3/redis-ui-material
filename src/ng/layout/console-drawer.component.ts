import {
    Component, Inject, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA,
    ViewEncapsulation, ChangeDetectorRef, computed,
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
export class ConsoleDrawerComponent {

    readonly strings;

    readonly isOpen = computed(() => this.state.consoleDrawerOpen());
    readonly isConnected = computed(() => this.state.connectionState() === 'connected');
    readonly isConnecting = computed(() => this.state.connectionState() === 'connecting');
    readonly connectionName = computed(() => this.state.connection()?.name ?? '');

    constructor(
        @Inject(I18nService) readonly i18n: I18nService,
        @Inject(RedisStateService) readonly state: RedisStateService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
    }

    close(): void {
        this.state.setConsoleDrawerOpen(false);
        this.cdr.markForCheck();
    }
}
