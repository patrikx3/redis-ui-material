import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import dayjs from 'dayjs';
import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { P3xrAccordionComponent } from '../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../components/p3xr-button.component';
import { RedisStateService } from '../../services/redis-state.service';

declare const p3xr: any;

require('./monitoring.component.scss');

interface MonitorSnapshot {
    timestamp: number;
    memory: { used: number; rss: number; peak: number; usedHuman: string; rssHuman: string; peakHuman: string; fragRatio: number };
    stats: { opsPerSec: number; hits: number; misses: number; hitRate: number; inputKbps: number; outputKbps: number; totalCommands: number; expiredKeys: number; evictedKeys: number };
    clients: { connected: number; blocked: number };
    server: { version: string; uptime: number; mode: string };
    keyspace: Record<string, string>;
    slowlog: Array<{ id: number; timestamp: number; duration: number; command: string }>;
}

const MAX_HISTORY = 120;

@Component({
    selector: 'p3xr-monitoring',
    standalone: true,
    imports: [
        CommonModule, MatIconModule, MatButtonModule,
        MatTooltipModule, MatDividerModule, MatListModule,
        P3xrAccordionComponent,
        P3xrButtonComponent,
    ],
    templateUrl: './monitoring.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonitoringComponent implements OnInit, OnDestroy, AfterViewInit {
    strings;
    current: MonitorSnapshot | null = null;
    history: MonitorSnapshot[] = [];
    paused = false;
    clientList: any[] = [];
    topKeys: any[] = [];
    isReadonly = false;
    autoRefreshClients = localStorage.getItem('p3xr-monitor-auto-clients') === 'true';
    autoRefreshTopKeys = localStorage.getItem('p3xr-monitor-auto-topkeys') === 'true';
    clientListLoaded = false;
    topKeysLoaded = false;

    @ViewChild('memoryChart') memoryChartRef!: ElementRef<HTMLDivElement>;
    @ViewChild('opsChart') opsChartRef!: ElementRef<HTMLDivElement>;
    @ViewChild('clientsChart') clientsChartRef!: ElementRef<HTMLDivElement>;
    @ViewChild('networkChart') networkChartRef!: ElementRef<HTMLDivElement>;

    private intervalId: any;
    private uPlot: any;
    private memoryPlot: any;
    private opsPlot: any;
    private clientsPlot: any;
    private networkPlot: any;
    private chartsInitialized = false;
    private resizeObserver: ResizeObserver | null = null;
    private themeObserver: MutationObserver | null = null;
    private unsubFns: Array<() => void> = [];
    private boundRecalcHost: (() => void) | null = null;

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef,
        @Inject(RedisStateService) private state: RedisStateService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.isReadonly = p3xr?.state?.connection?.readonly === true;
        this.fetchData();
        this.loadClientList();
        this.loadTopKeys();

        // Reload all data when connection changes
        const sub = this.socket.stateChanged$.subscribe(() => {
            this.isReadonly = p3xr?.state?.connection?.readonly === true;
            this.history = [];
            this.chartsInitialized = false;
            this.memoryPlot?.destroy();
            this.opsPlot?.destroy();
            this.clientsPlot?.destroy();
            this.networkPlot?.destroy();
            this.fetchData();
            this.loadClientList();
            this.loadTopKeys();
        });
        this.unsubFns.push(() => sub.unsubscribe());
        this.ngZone.runOutsideAngular(() => {
            this.intervalId = setInterval(() => {
                if (!this.paused) {
                    this.fetchData();
                    if (this.autoRefreshClients) this.loadClientList();
                    if (this.autoRefreshTopKeys) this.loadTopKeys();
                }
            }, 2000);

            // Reinit charts on theme or language change
            this.themeObserver = new MutationObserver(() => {
                if (this.chartsInitialized) {
                    setTimeout(() => this.reinitCharts(), 100);
                }
            });
            this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

            // Watch for language changes via i18n signal
            let prevLang = this.i18n.currentLang();
            const langCheckInterval = setInterval(() => {
                const currentLang = this.i18n.currentLang();
                if (currentLang !== prevLang) {
                    prevLang = currentLang;
                    if (this.chartsInitialized) {
                        setTimeout(() => this.reinitCharts(), 100);
                    }
                }
            }, 500);
            this.unsubFns.push(() => clearInterval(langCheckInterval));
        });
    }

    ngAfterViewInit(): void {
        document.body.classList.add('p3xr-no-main-scroll');
        this.recalcHostHeight();
        this.ngZone.runOutsideAngular(() => {
            this.boundRecalcHost = () => this.recalcHostHeight();
            window.addEventListener('resize', this.boundRecalcHost);
        });
        // Delay chart init to ensure DOM has layout
        setTimeout(() => this.loadUPlot(), 500);
    }

    ngOnDestroy(): void {
        document.body.classList.remove('p3xr-no-main-scroll');
        if (this.boundRecalcHost) {
            window.removeEventListener('resize', this.boundRecalcHost);
        }
        if (this.intervalId) clearInterval(this.intervalId);
        this.unsubFns.forEach(fn => fn());
        this.themeObserver?.disconnect();
        this.resizeObserver?.disconnect();
        this.memoryPlot?.destroy();
        this.opsPlot?.destroy();
        this.clientsPlot?.destroy();
        this.networkPlot?.destroy();
    }

    private recalcHostHeight(): void {
        const el = this.elementRef.nativeElement as HTMLElement;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const footerHeight = document.getElementById('p3xr-layout-footer-container')?.offsetHeight || 48;
        const available = window.innerHeight - rect.top - footerHeight;
        el.style.height = Math.max(available, 100) + 'px';
        el.style.overflowY = 'auto';
    }

    serverInfoLabel(): string {
        if (!this.current) return '';
        const s = this.current.server;
        const pause = this.paused ? (this.strings().intention?.resume || 'Resume') : (this.strings().intention?.pause || 'Pause');
        return `Redis ${s.version} · ${s.mode} · ${this.uptimeFormatted} · ${pause}`;
    }

    toggleAutoRefreshClients(): void {
        this.autoRefreshClients = !this.autoRefreshClients;
        try { localStorage.setItem('p3xr-monitor-auto-clients', String(this.autoRefreshClients)); } catch {}
    }

    toggleAutoRefreshTopKeys(): void {
        this.autoRefreshTopKeys = !this.autoRefreshTopKeys;
        try { localStorage.setItem('p3xr-monitor-auto-topkeys', String(this.autoRefreshTopKeys)); } catch {}
    }

    async loadClientList(): Promise<void> {
        try {
            const response = await this.socket.request({ action: 'client-list', payload: {} });
            this.clientList = response.data;
            this.clientListLoaded = true;
            this.safeDetectChanges();
        } catch { this.clientListLoaded = true; }
    }

    async killClient(id: string, event: Event): Promise<void> {
        event.stopPropagation();
        try {
            await this.common.confirm({
                message: this.strings().page?.monitor?.confirmKillClient || 'Are you sure to kill this client?',
            });
            await this.socket.request({ action: 'client-kill', payload: { id } });
            this.common.toast({ message: this.strings().page?.monitor?.clientKilled || 'Client killed' });
            await this.loadClientList();
        } catch (e) {
            if (e !== undefined) this.common.generalHandleError(e);
        }
    }

    async loadTopKeys(): Promise<void> {
        try {
            const response = await this.socket.request({ action: 'memory-top-keys', payload: { topN: 20 } });
            this.topKeys = response.data;
            this.topKeysLoaded = true;
            this.safeDetectChanges();
        } catch { this.topKeysLoaded = true; }
    }

    private safeDetectChanges(): void {
        this.ngZone.run(() => {
            const scrollContainer = document.getElementById('p3xr-database-content-container')
                || document.querySelector('.p3xr-layout-content');
            const scrollTop = scrollContainer?.scrollTop ?? window.scrollY;
            try {
                this.cdr.detectChanges();
            } catch { /* ignore late teardown */ }
            requestAnimationFrame(() => {
                if (scrollContainer) {
                    scrollContainer.scrollTop = scrollTop;
                } else {
                    window.scrollTo(0, scrollTop);
                }
            });
        });
    }

    formatBytes(bytes: number): string {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    }

    togglePause(): void {
        this.paused = !this.paused;
    }

    private get connName(): string {
        return this.state.connection()?.name || 'redis';
    }

    exportOverview(): void {
        if (!this.current) return;
        const c = this.current;
        const lines = [
            `Memory: ${c.memory.usedHuman}`,
            `RSS: ${c.memory.rssHuman}`,
            `Peak: ${c.memory.peakHuman}`,
            `Fragmentation: ${c.memory.fragRatio}x`,
            `Ops/sec: ${c.stats.opsPerSec}`,
            `Total Commands: ${c.stats.totalCommands}`,
            `Clients: ${c.clients.connected}`,
            `Blocked: ${c.clients.blocked}`,
            `Hit Rate: ${c.stats.hitRate}%`,
            `Hits / Misses: ${c.stats.hits} / ${c.stats.misses}`,
            `Network I/O: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
            `Expired: ${c.stats.expiredKeys}`,
            `Evicted: ${c.stats.evictedKeys}`,
        ];
        this.downloadText(lines.join('\n'), `${this.connName}-overview.txt`);
    }

    exportChart(chartRef: ElementRef<HTMLDivElement> | undefined, name: string): void {
        const canvas = chartRef?.nativeElement?.querySelector('canvas') as HTMLCanvasElement;
        if (!canvas) return;
        const url = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.connName}-${name}.png`;
        a.click();
    }

    exportSlowLog(): void {
        if (!this.current) return;
        const lines = this.current.slowlog.map(e => `${e.duration}µs ${e.command}`);
        this.downloadText(lines.join('\n'), `${this.connName}-slowlog.txt`);
    }

    exportClientList(): void {
        const lines = this.clientList.map(c => `${c.addr} ${c.name || ''} db${c.db} ${c.cmd} idle:${c.idle}s`);
        this.downloadText(lines.join('\n'), `${this.connName}-clients.txt`);
    }

    exportTopKeys(): void {
        const lines = this.topKeys.map((e, i) => `#${i + 1} ${e.key} ${this.formatBytes(e.bytes)}`);
        this.downloadText(lines.join('\n'), `${this.connName}-topkeys.txt`);
    }

    private downloadText(content: string, filename: string): void {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    get uptimeFormatted(): string {
        if (!this.current) return '-';
        const s = this.current.server.uptime;
        const d = Math.floor(s / 86400);
        const h = Math.floor((s % 86400) / 3600);
        const m = Math.floor((s % 3600) / 60);
        return d > 0 ? `${d}d ${h}h ${m}m` : h > 0 ? `${h}h ${m}m` : `${m}m`;
    }

    private async fetchData(): Promise<void> {
        try {
            const response = await this.socket.request({
                action: 'monitor-info',
                payload: {},
            });
            const data: MonitorSnapshot = response.data;
            this.current = data;
            this.history.push(data);
            if (this.history.length > MAX_HISTORY) {
                this.history.shift();
            }
            if (this.chartsInitialized) {
                this.updateCharts();
            } else if (this.uPlot && this.history.length >= 2) {
                this.initCharts();
            }
            this.safeDetectChanges();
        } catch { /* next tick will retry */ }
    }

    private async loadUPlot(): Promise<void> {
        const uPlotModule = await import('uplot');
        this.uPlot = uPlotModule.default;

        // Import uPlot CSS inline
        if (!document.getElementById('uplot-css')) {
            const style = document.createElement('style');
            style.id = 'uplot-css';
            try {
                const cssModule = require('uplot/dist/uPlot.min.css');
                style.textContent = typeof cssModule === 'string' ? cssModule : '';
            } catch {
                // Fallback: minimal uPlot styles
                style.textContent = '.uplot { font-family: inherit; } .u-legend { display: flex; gap: 12px; padding: 4px 0; font-size: 12px; }';
            }
            document.head.appendChild(style);
        }

        if (this.history.length >= 2) {
            this.initCharts();
        }
    }

    private getChartColors() {
        const isDark = document.body.classList.contains('p3xr-theme-dark');
        const style = getComputedStyle(document.body);
        const primary = style.getPropertyValue('--p3xr-btn-primary-bg').trim();
        const accent = style.getPropertyValue('--p3xr-btn-accent-bg').trim();
        const warn = style.getPropertyValue('--p3xr-btn-warn-bg').trim();
        return {
            primary: primary || (isDark ? '#90caf9' : '#1976d2'),
            accent: accent || (isDark ? '#ce93d8' : '#9c27b0'),
            warn: warn || (isDark ? '#ef9a9a' : '#f44336'),
            text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
            grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        };
    }

    private reinitCharts(): void {
        this.memoryPlot?.destroy();
        this.opsPlot?.destroy();
        this.clientsPlot?.destroy();
        this.networkPlot?.destroy();
        this.chartsInitialized = false;
        if (this.history.length >= 2) {
            this.initCharts();
        }
    }

    private getChartWidth(el: HTMLDivElement | undefined): number {
        return el?.offsetWidth || 500;
    }

    private createOpts(width: number, seriesConfig: any[]): any {
        const colors = this.getChartColors();
        return {
            width,
            height: 180,
            cursor: { show: true, drag: { x: false, y: false } },
            legend: { show: true, live: false },
            scales: {
                x: { time: true },
            },
            axes: [
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto',
                    values: (_: any, ticks: number[]) => ticks.map(t => dayjs(t * 1000).format('HH:mm:ss')),
                },
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto Mono',
                    size: 55,
                },
            ],
            series: [
                { label: this.strings().label?.time || 'Time', value: (_: any, rawValue: number) => rawValue ? dayjs(rawValue * 1000).format('HH:mm:ss') : '' },
                ...seriesConfig,
            ],
        };
    }

    private initCharts(): void {
        if (!this.uPlot || this.chartsInitialized) return;

        const colors = this.getChartColors();
        const data = this.buildChartData();

        const memEl = this.memoryChartRef?.nativeElement;
        const opsEl = this.opsChartRef?.nativeElement;
        const cliEl = this.clientsChartRef?.nativeElement;
        const netEl = this.networkChartRef?.nativeElement;

        if (!memEl || !opsEl || !cliEl || !netEl) return;

        const s = this.strings().page?.monitor || {};

        this.memoryPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(memEl), [
                { label: s.memory || 'Memory', stroke: colors.primary, width: 2, fill: colors.primary + '15' },
                { label: 'RSS', stroke: colors.accent, width: 2 },
            ]),
            [data.timestamps, data.memUsed, data.memRss],
            memEl,
        );

        this.opsPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(opsEl), [
                { label: s.opsPerSec || 'Ops/s', stroke: colors.primary, width: 2, fill: colors.primary + '20' },
            ]),
            [data.timestamps, data.ops],
            opsEl,
        );

        this.clientsPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(cliEl), [
                { label: s.clients || 'Connected', stroke: colors.primary, width: 2 },
                { label: s.blocked || 'Blocked', stroke: colors.warn, width: 2 },
            ]),
            [data.timestamps, data.connected, data.blocked],
            cliEl,
        );

        this.networkPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(netEl), [
                { label: '↓ In', stroke: colors.primary, width: 2, fill: colors.primary + '15' },
                { label: '↑ Out', stroke: colors.accent, width: 2 },
            ]),
            [data.timestamps, data.netIn, data.netOut],
            netEl,
        );

        this.chartsInitialized = true;

        // Auto-resize charts on container resize (window resize, accordion toggle)
        let resizeTimer: any;
        this.resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const mw = this.getChartWidth(memEl);
                const ow = this.getChartWidth(opsEl);
                const cw = this.getChartWidth(cliEl);
                const nw = this.getChartWidth(netEl);
                if (mw > 0) this.memoryPlot?.setSize({ width: mw, height: 180 });
                if (ow > 0) this.opsPlot?.setSize({ width: ow, height: 180 });
                if (cw > 0) this.clientsPlot?.setSize({ width: cw, height: 180 });
                if (nw > 0) this.networkPlot?.setSize({ width: nw, height: 180 });
            }, 50);
        });
        this.resizeObserver.observe(memEl);
        this.resizeObserver.observe(opsEl);
        this.resizeObserver.observe(cliEl);
        this.resizeObserver.observe(netEl);
    }

    private buildChartData() {
        return {
            timestamps: this.history.map(h => h.timestamp / 1000),
            memUsed: this.history.map(h => h.memory.used / (1024 * 1024)),
            memRss: this.history.map(h => h.memory.rss / (1024 * 1024)),
            ops: this.history.map(h => h.stats.opsPerSec),
            connected: this.history.map(h => h.clients.connected),
            blocked: this.history.map(h => h.clients.blocked),
            netIn: this.history.map(h => h.stats.inputKbps),
            netOut: this.history.map(h => h.stats.outputKbps),
        };
    }

    private updateCharts(): void {
        if (!this.chartsInitialized) return;
        const data = this.buildChartData();
        this.memoryPlot?.setData([data.timestamps, data.memUsed, data.memRss]);
        this.opsPlot?.setData([data.timestamps, data.ops]);
        this.clientsPlot?.setData([data.timestamps, data.connected, data.blocked]);
        this.networkPlot?.setData([data.timestamps, data.netIn, data.netOut]);
    }
}
