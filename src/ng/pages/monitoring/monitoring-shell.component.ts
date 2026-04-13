import { Component, Inject, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { MonitoringDataService } from './monitoring-data.service';
import { RedisStateService } from '../../services/redis-state.service';

@Component({
    selector: 'p3xr-monitoring-shell',
    standalone: true,
    imports: [RouterOutlet, MatTabsModule],
    styleUrls: ['./monitoring-shell.component.scss'],
    template: `
        <div class="p3xr-monitoring-shell-container">
            <mat-tab-group class="p3xr-monitoring-tabs" [selectedIndex]="selectedTab" (selectedIndexChange)="onTabChange($event)">
                <mat-tab [label]="strings().intention?.pulse"></mat-tab>
                <mat-tab [label]="strings().intention?.profiler"></mat-tab>
                <mat-tab [label]="strings().intention?.pubsubMonitor"></mat-tab>
                <mat-tab [label]="strings().intention?.memoryAnalysis"></mat-tab>
            </mat-tab-group>
            <div class="p3xr-monitoring-shell-content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class MonitoringShellComponent implements OnInit, OnDestroy {
    strings;
    selectedTab = 0;

    private readonly routes = ['/monitoring', '/monitoring/profiler', '/monitoring/pubsub', '/monitoring/analysis'];
    private routerSub?: Subscription;
    private subs: Subscription[] = [];
    private servicesStarted = false;

    constructor(
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(Router) private readonly router: Router,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(MonitoringDataService) private readonly data: MonitoringDataService,
        @Inject(RedisStateService) private readonly state: RedisStateService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.syncTab(this.router.url);
        this.routerSub = this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e: NavigationEnd) => this.syncTab(e.urlAfterRedirects));

        // Redirect to settings on Redis disconnect
        this.subs.push(this.socket.redisDisconnected$.subscribe(() => {
            this.router.navigate(['/settings']);
        }));

        // If connected, start immediately; otherwise wait for connection
        if (this.state.connection()) {
            this.initServices();
        } else {
            this.subs.push(this.socket.stateChanged$.subscribe(() => {
                if (this.state.connection() && !this.servicesStarted) {
                    this.initServices();
                }
            }));
        }
    }

    ngOnDestroy(): void {
        this.data.stopProfiler();
        this.data.stopPubSub();
        this.data.destroy();
        this.routerSub?.unsubscribe();
        this.subs.forEach(s => s.unsubscribe());
    }

    private initServices(): void {
        this.servicesStarted = true;
        this.data.init(this.socket, () => this.i18n.currentLang());
        this.startServices();
    }

    private async startServices(): Promise<void> {
        try {
            await this.data.startProfiler();
        } catch (e) {
            this.common.generalHandleError(e);
        }
        try {
            await this.data.startPubSub();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    onTabChange(index: number): void {
        if (index >= 0 && index < this.routes.length) {
            this.router.navigate([this.routes[index]]);
        }
    }

    private syncTab(url: string): void {
        if (url.startsWith('/monitoring/profiler')) {
            this.selectedTab = 1;
        } else if (url.startsWith('/monitoring/pubsub')) {
            this.selectedTab = 2;
        } else if (url.startsWith('/monitoring/analysis')) {
            this.selectedTab = 3;
        } else {
            this.selectedTab = 0;
        }
    }
}
