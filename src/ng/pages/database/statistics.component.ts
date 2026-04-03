import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, effect } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BreakpointObserver } from '@angular/cdk/layout';

import { I18nService } from '../../services/i18n.service';
import { MainCommandService } from '../../services/main-command.service';
import { RedisStateService } from '../../services/redis-state.service';

require('./statistics.component.scss');

@Component({
    selector: 'p3xr-database-statistics',
    standalone: true,
    imports: [MatTabsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './statistics.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatisticsComponent implements OnInit, OnDestroy {

    maxHeight: number | string = 'auto';
    hasDatabases = false;
    isCluster = false;

    // Parsed from state.info() (snapshot taken in ngOnInit)
    keyspaceDatabaseEntries: Array<{ key: string; value: any }> = [];
    keyspaceItems: Record<string, Array<{ key: string; value: any }>> = {};
    infoSections: Array<{ key: string; items: Array<{ key: string; value: any }> }> = [];

    private readonly unsubFns: Array<() => void> = [];

    private static readonly EXCLUDE = ['in', 'run', 'per'];
    private static readonly INCLUDE = ['sha1'];
    private static readonly REPLACE: Record<string, string> = { perc: 'percent', sec: 'seconds' };

    constructor(
        @Inject(BreakpointObserver) private readonly breakpointObserver: BreakpointObserver,
        @Inject(I18nService) readonly i18n: I18nService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Inject(RedisStateService) private readonly state: RedisStateService,
    ) {
        effect(() => {
            this.i18n.currentLang();
            this.cdr.markForCheck();
        });
    }

    ngOnInit(): void {
        const info = this.state.info();

        // Check if tree needs refresh
        if (this.state.redisChanged()) {
            this.state.redisChanged.set(false);
            this.broadcastRefresh();
        }

        // Parse info data
        const connection = this.state.connection();
        this.isCluster = connection?.cluster === true;

        if (info) {
            const ksDbs = info.keyspaceDatabases ?? {};
            this.hasDatabases = Object.keys(ksDbs).length > 0;
            this.keyspaceDatabaseEntries = Object.keys(ksDbs).map(k => ({ key: k, value: ksDbs[k] }));

            // Snapshot keyspace items per DB so the template doesn't read live data
            for (const dbEntry of this.keyspaceDatabaseEntries) {
                const ks = info?.keyspace?.['db' + dbEntry.key];
                this.keyspaceItems[dbEntry.key] = ks
                    ? Object.keys(ks).map(k => ({ key: k, value: ks[k] }))
                    : [];
            }

            this.infoSections = Object.keys(info)
                .filter(k => k !== 'keyspace' && k !== 'keyspaceDatabases')
                .map(k => ({
                    key: k,
                    items: Object.keys(info[k]).map(ik => ({ key: ik, value: info[k][ik] })),
                }));

            // Replace or add Modules section with full MODULE LIST data
            const modules = Array.isArray(this.state.modules()) ? this.state.modules() : [];
            if (modules.length > 0) {
                const moduleItems = modules.map((m: any) => ({
                    key: m.name,
                    value: `v${m.ver}`,
                }));
                const existingIdx = this.infoSections.findIndex(s => s.key.toLowerCase() === 'modules');
                if (existingIdx >= 0) {
                    this.infoSections[existingIdx].items = moduleItems;
                } else {
                    this.infoSections.push({ key: 'modules', items: moduleItems });
                }
            }
        }

        // Responsive height
        const sub = this.breakpointObserver.observe('(max-width: 599px)').subscribe(r => {
            this.recalcHeight(r.matches);
            this.cdr.markForCheck();
        });
        this.unsubFns.push(() => sub.unsubscribe());
    }

    ngOnDestroy(): void {
        this.unsubFns.forEach(fn => fn());
    }

    getKeyspaceItems(dbKey: string): Array<{ key: string; value: any }> {
        return this.keyspaceItems[dbKey] ?? [];
    }

    formatValue(value: any): string {
        if (value === null || value === undefined) return '';
        if (typeof value === 'object') return JSON.stringify(value);
        return String(value);
    }

    generateKey(key: string): string {
        const strings = this.i18n.strings();
        if (strings?.title?.hasOwnProperty(key)) {
            return strings.title[key];
        }
        return key.split('_').map((instance, index) => {
            if (StatisticsComponent.REPLACE.hasOwnProperty(instance)) {
                instance = StatisticsComponent.REPLACE[instance];
            }
            if (StatisticsComponent.INCLUDE.includes(instance) ||
                (instance.length < 4 && !StatisticsComponent.EXCLUDE.includes(instance))) {
                return instance.toUpperCase();
            } else if (index === 0) {
                return instance[0].toUpperCase() + instance.substring(1);
            }
            return instance;
        }).join(' ');
    }

    private recalcHeight(isXSmall: boolean): void {
        if (isXSmall) {
            this.maxHeight = 'auto';
        } else {
            const container = document.getElementById('p3xr-database-content-container');
            this.maxHeight = container ? container.offsetHeight - 50 : 'auto';
        }
    }

    private broadcastRefresh(): void {
        this.cmd.treeRefresh$.next();
    }
}
