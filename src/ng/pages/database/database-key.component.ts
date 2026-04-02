import { Component, Inject, OnInit, OnDestroy, NgZone, ChangeDetectorRef, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';

import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { MainCommandService } from '../../services/main-command.service';
import { ThemeService } from '../../services/theme.service';
import { TtlDialogService } from '../../dialogs/ttl-dialog.service';
import { KeyStringComponent } from './key/key-string.component';
import { KeyHashComponent } from './key/key-hash.component';
import { KeyListComponent } from './key/key-list.component';
import { KeySetComponent } from './key/key-set.component';
import { KeyZsetComponent } from './key/key-zset.component';
import { KeyStreamComponent } from './key/key-stream.component';
import { KeyJsonComponent } from './key/key-json.component';
import { KeyTimeseriesComponent } from './key/key-timeseries.component';
import { NavigationService } from '../../services/navigation.service';

require('./database-key.component.scss');
require('./key/key-types.scss');

declare const p3xr: any;

@Component({
    selector: 'p3xr-database-key',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        KeyStringComponent,
        KeyHashComponent,
        KeyListComponent,
        KeySetComponent,
        KeyZsetComponent,
        KeyStreamComponent,
        KeyJsonComponent,
        KeyTimeseriesComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './database-key.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseKeyComponent implements OnInit, OnDestroy {

    loading = false;
    response: any = null;
    key = '';
    isReadonly = false;
    isGtSm = true;
    valueFormat: 'raw' | 'json' | 'hex' | 'base64' = 'raw';
    strings;

    private ttlInterval: any;
    private wasExpiring = false;
    private readonly unsubFns: Array<() => void> = [];

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(BreakpointObserver) private readonly breakpointObserver: BreakpointObserver,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(ThemeService) private readonly theme: ThemeService,
        @Inject(TtlDialogService) private readonly ttlDialog: TtlDialogService,
        @Inject(NavigationService) private readonly nav: NavigationService,
        @Inject(ActivatedRoute) private readonly route: ActivatedRoute,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;

        // Regenerate highlight when theme changes
        effect(() => {
            this.theme.currentTheme(); // track the signal
            if (this.key) {
                this.removeHighlight();
                this.generateHighlight();
            }
        });
    }

    ngOnInit(): void {
        this.key = this.getStateParam('key') || '';
        this.isReadonly = p3xr?.state?.connection?.readonly === true;

        const sub = this.breakpointObserver.observe('(min-width: 960px)').subscribe(r => {
            this.isGtSm = r.matches;
            this.cdr.markForCheck();
        });
        this.unsubFns.push(() => sub.unsubscribe());

        this.loadKey();
        this.generateHighlight();

        // Listen for refresh events via MainCommandService
        const refreshSub = this.cmd.refreshKey$.subscribe(() => {
            this.refresh({ withoutParent: true });
        });
        this.unsubFns.push(() => refreshSub.unsubscribe());

        // React to key-to-key navigation (Angular Router reuses the component)
        const paramSub = this.route.paramMap.subscribe(params => {
            const newKey = params.get('key') || '';
            if (newKey && newKey !== this.key) {
                this.key = newKey;
                this.loadKey();
                this.generateHighlight();
                this.cdr.markForCheck();
            }
        });
        this.unsubFns.push(() => paramSub.unsubscribe());
    }

    ngOnDestroy(): void {
        this.clearTtlInterval();
        this.removeHighlight();
        this.unsubFns.forEach(fn => fn());
    }

    // --- Actions ---

    addKey(event: Event): void {
        event.stopPropagation();
        this.cmd.keyNew$.next({ event, node: { key: this.key } });
    }

    deleteKey(event: Event): void {
        this.cmd.keyDelete$.next({ key: this.key, event });
    }

    rename(event: Event): void {
        this.cmd.keyRename$.next({ key: this.key, event });
    }

    async setTtl(event: Event): Promise<void> {
        try {
            const confirmResponse = await this.ttlDialog.show({
                $event: event,
                model: { ttl: this.response.ttl === -1 ? '' : this.response.ttl },
            });

            if (confirmResponse === undefined) return;

            const ttlStr = String(confirmResponse.model.ttl).trim();
            if (ttlStr === '' || confirmResponse.model.ttl == null) {
                await this.socket.request({ action: 'persist', payload: { key: this.key } });
                this.gtag('/persist');
                await this.refresh();
                this.common.toast(this.i18n.strings().status.persisted);
            } else if (!/^-?\d+$/.test(ttlStr)) {
                this.common.toast(this.i18n.strings().status.notInteger);
            } else {
                await this.socket.request({
                    action: 'expire',
                    payload: { key: this.key, ttl: parseInt(ttlStr) },
                });
                this.gtag('/expire');
                await this.refresh();
                this.common.toast(this.i18n.strings().status.ttlChanged);
            }
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async refresh(options: { withoutParent?: boolean } = {}): Promise<void> {
        this.gtag('/refresh');
        await this.loadKey(options);
    }

    charactersPrettyBytes(length: number): string {
        if (!length || length < 1024) return '';
        return '(' + (p3xr?.settings?.prettyBytes?.(length) ?? '') + ')';
    }

    // --- Private ---

    private async loadKey(options: { withoutParent?: boolean } = {}): Promise<void> {
        this.clearTtlInterval();
        let hadError: any;
        try {
            const response = await this.socket.request({
                action: 'key-get',
                payload: { key: this.key },
            });
            this.response = response;

            if (response.ttl === -2) {
                this.checkTtl();
                return;
            }
            response.size = 0;
            this.decodeValueBuffer(response);
            this.calculateSize(response);

            if (response.ttl > -1) this.wasExpiring = true;
            this.loadTtl();
        } catch (e) {
            hadError = e;
            console.error(e);
            if (!p3xr?.settings?.handleConnectionIsClosed?.(e)) {
                this.common.alert(this.i18n.strings().label.unableToLoadKey({ key: this.key }));
            } else {
                this.common.alert((e as any)?.message ?? String(e));
            }
        } finally {
            if (hadError) {
                this.navigateTo('database.statistics');
            } else if (!options.withoutParent) {
                const resize = this.getStateParam('resize');
                if (resize) resize();
            }
            this.loading = false;
            this.cdr.markForCheck();
        }
    }

    private decodeValueBuffer(response: any): void {
        const { type, valueBuffer } = response;
        const td = new TextDecoder();
        switch (type) {
            case 'string':
                response.value = td.decode(valueBuffer);
                break;
            case 'list':
            case 'set':
                response.value = valueBuffer.map((buf: any) => td.decode(buf));
                break;
            case 'hash':
                response.value = {};
                Object.entries(valueBuffer).forEach(([key, buf]: [string, any]) => {
                    response.value[key] = td.decode(buf);
                });
                break;
            case 'zset':
                response.value = [];
                for (let i = 0; i < valueBuffer.length; i += 2) {
                    response.value.push(td.decode(valueBuffer[i]));
                    response.value.push(td.decode(valueBuffer[i + 1]));
                }
                break;
            case 'json':
                // JSON.GET with $ returns a JSON string (always compact from Redis)
                const rawJson = td.decode(valueBuffer);
                try {
                    const parsed = JSON.parse(rawJson);
                    // JSONPath $ returns array wrapper, unwrap it
                    const unwrapped = Array.isArray(parsed) ? parsed[0] : parsed;
                    response.value = JSON.stringify(unwrapped, null, p3xr?.settings?.jsonFormat ?? 2);
                } catch {
                    response.value = rawJson;
                }
                break;
            case 'stream':
                const decodeEntry = (entry: any): any => {
                    return entry.map((item: any) => {
                        if (Array.isArray(item)) return decodeEntry(item);
                        if (ArrayBuffer.isView(item) || item instanceof ArrayBuffer) return td.decode(item);
                        return item;
                    });
                };
                response.value = valueBuffer.map((entry: any) => decodeEntry(entry));
                break;
            case 'timeseries':
                // valueBuffer is a JSON-encoded TS.INFO object
                try {
                    response.value = JSON.parse(td.decode(valueBuffer));
                } catch {
                    response.value = {};
                }
                break;
        }
    }

    private calculateSize(response: any): void {
        if (response.type !== 'stream') {
            if (typeof response.valueBuffer === 'object' && response.length > 0) {
                for (const k of Object.keys(response.valueBuffer)) {
                    response.size += response.valueBuffer[k].byteLength;
                }
            } else if (Array.isArray(response.valueBuffer)) {
                for (const buf of response.valueBuffer) response.size += buf.byteLength;
            } else {
                response.size = response.valueBuffer.byteLength;
            }
        } else {
            const sumBytes = (arr: any[]): number => {
                let total = 0;
                const process = (el: any) => {
                    if (ArrayBuffer.isView(el) || el instanceof ArrayBuffer) total += el.byteLength;
                    else if (Array.isArray(el)) el.forEach(process);
                };
                arr.forEach(process);
                return total;
            };
            response.size = sumBytes(response.valueBuffer);
        }
    }

    private loadTtl(): void {
        if (!this.response || this.response.ttl <= -1) return;

        const humanizeDuration = require('humanize-duration');
        const updateTtl = () => {
            if (!this.checkTtl()) { this.clearTtlInterval(); return; }
            const hdOpts = p3xr?.settings?.getHumanizeDurationOptions?.() ?? {};
            const parsed = ' ' + humanizeDuration(this.response.ttl * 1000, {
                ...hdOpts,
                delimiter: ' ',
            });
            const el = document.getElementById('p3xr-database-key-ttl-counter');
            if (el) el.innerText = parsed;
        };
        updateTtl();

        if (!p3xr?.state?.reducedFunctions) {
            this.clearTtlInterval();
            this.ttlInterval = setInterval(() => {
                this.response.ttl--;
                updateTtl();
            }, 1000);
        }
    }

    private checkTtl(): boolean {
        if (this.response.ttl < -1 || (this.wasExpiring && this.response.ttl < 1)) {
            this.common.toast(this.i18n.strings().status.keyIsNotExisting);
            this.clearTtlInterval();
            p3xr.state.redisChanged = true;
            this.navigateTo('database.statistics');
            return false;
        }
        return true;
    }

    private clearTtlInterval(): void {
        if (this.ttlInterval) { clearInterval(this.ttlInterval); this.ttlInterval = null; }
    }

    private generateHighlight(): void {
        this.removeHighlight();
        const isDark = p3xr?.state?.theme?.includes?.('Dark') || p3xr?.state?.theme?.includes?.('Matrix');
        const bg = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';
        const color = isDark ? 'white' : 'black';
        const style = document.createElement('style');
        style.id = 'p3xr-theme-styles-tree-key';
        style.textContent = `[data-p3xr-tree-key="${p3xr?.ui?.htmlEncode?.(this.key) ?? ''}"] .p3xr-database-tree-node-label {
            background-color: ${bg} !important;
            color: ${color} !important;
            padding: 2px;
        }`;
        document.head.appendChild(style);
    }

    private removeHighlight(): void {
        document.getElementById('p3xr-theme-styles-tree-key')?.remove();
    }

    // --- Helpers ---

    private getStateParam(name: string): any {
        return this.route.snapshot.paramMap.get(name);
    }

    private navigateTo(state: string, params?: any): void {
        this.nav.navigateTo(state, params);
    }

    private gtag(page: string): void {
        try {
            if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('config', p3xr?.settings?.googleAnalytics, { page_path: page });
            }
        } catch { /* noop */ }
    }
}
