import { Component, Inject, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';
import { MainCommandService } from '../../../services/main-command.service';
import { RedisStateService } from '../../../services/redis-state.service';
import { SettingsService } from '../../../services/settings.service';
import { KeyTypeBase } from './key-type-base';
import { P3xrAccordionComponent } from '../../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../../components/p3xr-button.component';

@Component({
    selector: 'p3xr-key-timeseries',
    standalone: true,
    imports: [
        CommonModule, FormsModule, ScrollingModule,
        MatButtonModule, MatIconModule, MatTooltipModule,
        MatFormFieldModule, MatInputModule, MatSelectModule,
        MatListModule, MatDividerModule,
        P3xrAccordionComponent, P3xrButtonComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-timeseries.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyTimeseriesComponent extends KeyTypeBase implements OnInit, OnChanges, OnDestroy, AfterViewInit {

    @ViewChild('tsChart') chartRef!: ElementRef<HTMLDivElement>;
    @ViewChild('tsDataViewport') dataViewport?: CdkVirtualScrollViewport;

    tsInfo: any = {};
    rangeData: Array<{ timestamp: number; value: number }> = [];

    // Range controls
    rangeFrom = '';
    rangeTo = '';
    aggregationType = '';
    aggregationBucket = '';

    // Add data point
    addTimestamp = '*';
    addValue = '';

    autoRefresh = false;
    alterMode = false;
    alterRetention = 0;
    alterDuplicatePolicy = 'LAST';
    alterLabels = '';
    overlayKeysInput = '';
    mrangeFilter = '';
    overlaySeries: Array<{ key: string; data: Array<{ timestamp: number; value: number }> }> = [];

    readonly aggregationTypes = ['avg', 'min', 'max', 'sum', 'count', 'first', 'last', 'range', 'std.p', 'std.s', 'var.p', 'var.s'];

    private uPlot: any = null;
    private plot: any = null;
    private resizeObserver: ResizeObserver | null = null;
    private themeObserver: MutationObserver | null = null;
    private langCheckInterval: any = null;
    private autoRefreshInterval: any = null;
    private loadRangeDebounceTimer: any = null;

    constructor(
        @Inject(I18nService) i18n: I18nService,
        @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService,
        @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(RedisStateService) redisState: RedisStateService,
        @Inject(SettingsService) settingsService: SettingsService,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr, redisState, settingsService);
    }

    ngOnInit(): void {
        this.tsInfo = this.p3xrValue || {};
        this.ensureDefaultLabel();
        this.loadRange();

        // Re-render chart on theme change
        this.themeObserver = new MutationObserver(() => {
            setTimeout(() => this.reinitChart(), 100);
        });
        this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        // Re-render chart on language change
        let prevLang = this.i18n.currentLang();
        this.langCheckInterval = setInterval(() => {
            const currentLang = this.i18n.currentLang();
            if (currentLang !== prevLang) {
                prevLang = currentLang;
                setTimeout(() => this.reinitChart(), 100);
            }
        }, 500);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['p3xrValue'] && !changes['p3xrValue'].firstChange) {
            this.tsInfo = this.p3xrValue || {};
            this.loadRange();
        }
    }

    ngAfterViewInit(): void {
        this.loadUPlot();
    }

    ngOnDestroy(): void {
        this.destroyBase();
        this.destroyChart();
        this.stopAutoRefresh();
        this.themeObserver?.disconnect();
        if (this.langCheckInterval) clearInterval(this.langCheckInterval);
    }

    toggleAutoRefresh(): void {
        this.autoRefresh = !this.autoRefresh;
        if (this.autoRefresh) {
            this.startAutoRefresh();
        } else {
            this.stopAutoRefresh();
        }
        this.cdr.markForCheck();
    }

    private startAutoRefresh(): void {
        this.stopAutoRefresh();
        this.autoRefreshInterval = setInterval(() => {
            this.loadRange();
        }, 10000);
    }

    private stopAutoRefresh(): void {
        if (this.autoRefreshInterval) {
            clearInterval(this.autoRefreshInterval);
            this.autoRefreshInterval = null;
        }
    }

    get infoLabels(): Array<{ key: string; value: any }> {
        if (!this.tsInfo) return [];
        const skip = new Set(['labels', 'rules', 'sourceKey', 'chunks']);
        return Object.entries(this.tsInfo)
            .filter(([k]) => !skip.has(k))
            .map(([key, value]) => ({ key, value }));
    }

    get tsLabels(): Array<{ key: string; value: string }> {
        const labels = this.tsInfo?.labels;
        if (!labels || typeof labels !== 'object') return [];
        return Object.entries(labels).map(([key, value]) => ({ key, value: String(value) }));
    }

    get tsRules(): any[] {
        return Array.isArray(this.tsInfo?.rules) ? this.tsInfo.rules : [];
    }

    capitalize(str: string): string { return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''; }

    debouncedLoadRange(): void {
        clearTimeout(this.loadRangeDebounceTimer);
        this.loadRangeDebounceTimer = setTimeout(() => {
            this.loadRange();
        }, 500);
    }

    async loadRange(): Promise<void> {
        try {
            const payload: any = { key: this.p3xrKey };

            if (this.rangeFrom) payload.from = this.rangeFrom;
            if (this.rangeTo) payload.to = this.rangeTo;

            if (this.aggregationType && this.aggregationBucket) {
                payload.aggregation = {
                    type: this.aggregationType,
                    timeBucket: parseInt(this.aggregationBucket, 10),
                };
            }

            const response = await this.socket.request({
                action: 'timeseries-range',
                payload,
            });

            this.rangeData = response.data || [];

            // Load overlay keys
            this.overlaySeries = [];
            const overlayKeys = this.overlayKeysInput.split(',').map(k => k.trim()).filter(k => k.length > 0);
            for (const overlayKey of overlayKeys) {
                try {
                    const overlayPayload: any = { key: overlayKey };
                    if (this.rangeFrom) overlayPayload.from = this.rangeFrom;
                    if (this.rangeTo) overlayPayload.to = this.rangeTo;
                    if (this.aggregationType && this.aggregationBucket) {
                        overlayPayload.aggregation = { type: this.aggregationType, timeBucket: parseInt(this.aggregationBucket, 10) };
                    }
                    const overlayResponse = await this.socket.request({ action: 'timeseries-range', payload: overlayPayload });
                    this.overlaySeries.push({ key: overlayKey, data: overlayResponse.data || [] });
                } catch { /* skip invalid keys */ }
            }

            // Load MRANGE by label filter
            if (this.mrangeFilter.trim().length > 0) {
                try {
                    const mrangePayload: any = { filter: this.mrangeFilter.trim() };
                    if (this.rangeFrom) mrangePayload.from = this.rangeFrom;
                    if (this.rangeTo) mrangePayload.to = this.rangeTo;
                    if (this.aggregationType && this.aggregationBucket) {
                        mrangePayload.aggregation = { type: this.aggregationType, timeBucket: parseInt(this.aggregationBucket, 10) };
                    }
                    const mrangeResponse = await this.socket.request({ action: 'timeseries-mrange', payload: mrangePayload });
                    for (const entry of (mrangeResponse.data || [])) {
                        if (entry.key !== this.p3xrKey) {
                            this.overlaySeries.push({ key: entry.key, data: entry.data });
                        }
                    }
                } catch { /* skip mrange errors */ }
            }

            this.updateChart();
            this.cdr.markForCheck();
            // Keep checking viewport size until accordion is opened
            const checkInterval = setInterval(() => {
                if (this.dataViewport) {
                    this.dataViewport.checkViewportSize();
                    const el = this.dataViewport.elementRef.nativeElement;
                    if (el.clientHeight > 0) {
                        clearInterval(checkInterval);
                    }
                }
            }, 200);
            setTimeout(() => clearInterval(checkInterval), 30000);
        } catch (e: any) {
            this.common.generalHandleError(e);
        }
    }

    private async ensureDefaultLabel(): Promise<void> {
        if (this.isReadonly) return;
        const labels = this.tsInfo?.labels;
        const labelCount = labels && typeof labels === 'object' ? Object.keys(labels).length : 0;
        if (labelCount === 0) {
            try {
                await this.socket.request({
                    action: 'timeseries-alter',
                    payload: {
                        key: this.p3xrKey,
                        labels: `key ${this.p3xrKey}`,
                    },
                });
                this.tsInfo.labels = { key: this.p3xrKey };
                this.cdr.markForCheck();
            } catch { /* ignore errors */ }
        }
    }

    exportChartPng(): void {
        if (!this.plot) return;
        const el = this.chartRef?.nativeElement;
        if (!el) return;

        const chartCanvas = el.querySelector('canvas') as HTMLCanvasElement;
        if (!chartCanvas) return;

        const isDark = document.body.classList.contains('p3xr-theme-dark');
        const bgColor = isDark ? '#1e1e1e' : '#ffffff';
        const textColor = isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)';
        const padding = 20;
        const titleHeight = 30;
        const legendHeight = 30;
        const totalWidth = chartCanvas.width + padding * 2;
        const totalHeight = chartCanvas.height + padding * 2 + titleHeight + legendHeight;

        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = totalWidth;
        exportCanvas.height = totalHeight;
        const ctx = exportCanvas.getContext('2d')!;

        // Background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, totalWidth, totalHeight);

        // Title
        ctx.fillStyle = textColor;
        ctx.font = 'bold 14px Roboto, sans-serif';
        ctx.fillText(this.p3xrKey, padding, padding + 16);

        // Chart
        ctx.drawImage(chartCanvas, padding, padding + titleHeight);

        // Legend
        const series = [this.p3xrKey, ...this.overlaySeries.map(s => s.key)];
        const colors = [this.getChartColors().primary, ...this.overlaySeries.map((_, i) => this.seriesColors[(i + 1) % this.seriesColors.length])];
        let legendX = padding;
        const legendY = padding + titleHeight + chartCanvas.height + 16;
        ctx.font = '12px Roboto, sans-serif';
        for (let i = 0; i < series.length; i++) {
            ctx.fillStyle = colors[i];
            ctx.fillRect(legendX, legendY - 8, 12, 12);
            ctx.fillStyle = textColor;
            ctx.fillText(series[i], legendX + 16, legendY + 2);
            legendX += ctx.measureText(series[i]).width + 32;
        }

        // Download
        const url = exportCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.p3xrKey}-chart.png`;
        a.click();
    }

    toggleAlterMode(): void {
        this.alterMode = !this.alterMode;
        if (this.alterMode) {
            this.alterRetention = this.tsInfo?.retentionTime || 0;
            this.alterDuplicatePolicy = this.tsInfo?.duplicatePolicy || 'LAST';
            const labels = this.tsLabels.map(l => `${l.key} ${l.value}`).join(' ');
            this.alterLabels = labels || `key ${this.p3xrKey}`;
        }
        this.cdr.markForCheck();
    }

    async saveAlter(): Promise<void> {
        try {
            // Default label if empty: key <keyname>
            const labels = this.alterLabels.trim().length > 0 ? this.alterLabels : `key ${this.p3xrKey}`;
            await this.socket.request({
                action: 'timeseries-alter',
                payload: {
                    key: this.p3xrKey,
                    retention: this.alterRetention,
                    duplicatePolicy: this.alterDuplicatePolicy,
                    labels: labels,
                },
            });
            this.common.toast(this.strings?.status?.saved || 'Updated');
            this.alterMode = false;
            this.refreshKey();
        } catch (e: any) {
            this.common.generalHandleError(e);
        }
    }

    async editDataPoint(point: { timestamp: number; value: number }): Promise<void> {
        try {
            await this.keyNewOrSetDialog.show({
                type: 'edit',
                model: {
                    type: 'timeseries',
                    key: this.p3xrKey,
                    tsTimestamp: String(point.timestamp),
                    value: point.value,
                    originalTimestamp: point.timestamp,
                },
            });
            this.refreshKey();
            await this.loadRange();
        } catch (e: any) {
            if (e !== undefined && e !== null) {
                this.common.generalHandleError(e);
            }
        }
    }

    async editAllDataPoints(event: Event): Promise<void> {
        try {
            const allPoints = this.rangeData.map(p => `${p.timestamp} ${p.value}`).join('\n');
            const currentLabels = this.tsLabels.map(l => `${l.key} ${l.value}`).join(' ') || `key ${this.p3xrKey}`;
            await this.keyNewOrSetDialog.show({
                type: 'edit',
                $event: event,
                model: {
                    type: 'timeseries',
                    key: this.p3xrKey,
                    value: allPoints,
                    tsEditAll: true,
                    tsLabels: currentLabels,
                },
            });
            this.refreshKey();
            await this.loadRange();
        } catch (e: any) {
            if (e !== undefined && e !== null) {
                this.common.generalHandleError(e);
            }
        }
    }

    async deleteDataPoint(point: { timestamp: number; value: number }): Promise<void> {
        try {
            await this.common.confirm({
                message: this.i18n.strings().confirm?.delete || 'Delete?',
            });

            await this.socket.request({
                action: 'timeseries-del',
                payload: {
                    key: this.p3xrKey,
                    from: point.timestamp,
                    to: point.timestamp,
                },
            });

            this.common.toast(this.strings?.status?.deleted || 'Deleted');
            this.refreshKey();
        } catch (e: any) {
            if (e !== undefined && e !== null) {
                this.common.generalHandleError(e);
            }
        }
    }

    formatTimestamp(ts: number): string {
        const lang = this.i18n.currentLang() || 'en';
        return new Date(ts).toLocaleString(lang, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });
    }

    async addDataPoint(): Promise<void> {
        if (!this.addValue) return;

        try {
            await this.socket.request({
                action: 'timeseries-add',
                payload: {
                    key: this.p3xrKey,
                    timestamp: this.addTimestamp || '*',
                    value: parseFloat(this.addValue),
                },
            });

            this.common.toast(this.strings?.status?.added || 'Added');
            this.addValue = '';
            this.refreshKey();
        } catch (e: any) {
            this.common.generalHandleError(e);
        }
    }

    // --- uPlot chart ---

    private async loadUPlot(): Promise<void> {
        try {
            const mod = await import('uplot');
            this.uPlot = mod.default;
            this.initChart();
        } catch (e) {
            console.error('Failed to load uPlot', e);
        }
    }

    private readonly seriesColors = ['#1976d2', '#9c27b0', '#f44336', '#4caf50', '#ff9800', '#00bcd4', '#e91e63', '#8bc34a'];

    private getChartColors() {
        const isDark = document.body.classList.contains('p3xr-theme-dark');
        const style = getComputedStyle(document.body);
        const primary = style.getPropertyValue('--p3xr-btn-primary-bg').trim();
        return {
            primary: primary || (isDark ? '#90caf9' : '#1976d2'),
            text: isDark ? 'rgba(255,255,255,0.87)' : 'rgba(0,0,0,0.87)',
            grid: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
        };
    }

    private createOpts(width: number): any {
        const colors = this.getChartColors();
        const s = this.strings?.page?.key?.timeseries || {};

        const seriesConfig: any[] = [
            {
                label: this.strings?.label?.time || 'Time',
                value: (_: any, v: number) => {
                    if (!v) return '';
                    const lang = this.i18n.currentLang() || 'en';
                    return new Date(v * 1000).toLocaleString(lang, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' });
                },
            },
            {
                label: this.p3xrKey,
                stroke: colors.primary,
                width: 2,
                fill: colors.primary + '15',
            },
        ];

        // Add overlay series
        for (let i = 0; i < this.overlaySeries.length; i++) {
            const color = this.seriesColors[(i + 1) % this.seriesColors.length];
            seriesConfig.push({
                label: this.overlaySeries[i].key,
                stroke: color,
                width: 2,
            });
        }

        return {
            width,
            height: 400,
            cursor: { show: true, drag: { x: false, y: false } },
            legend: { show: true, live: true },
            scales: { x: { time: true } },
            axes: [
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto',
                    values: (_: any, ticks: number[]) => ticks.map(t => new Date(t * 1000).toLocaleTimeString(this.i18n.currentLang() || 'en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })),
                },
                {
                    stroke: colors.text,
                    grid: { stroke: colors.grid, width: 1 },
                    ticks: { stroke: colors.grid },
                    font: '11px Roboto Mono',
                    size: 65,
                },
            ],
            series: seriesConfig,
        };
    }

    private initChart(): void {
        if (!this.uPlot) return;
        const el = this.chartRef?.nativeElement;
        if (!el) return;

        this.destroyChart();

        const w = el.clientWidth || 400;
        const chartData = this.buildChartData();

        this.plot = new this.uPlot(this.createOpts(w), chartData, el);

        let resizeTimer: any;
        this.resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const nw = el.clientWidth;
                if (nw > 0) this.plot?.setSize({ width: nw, height: 400 });
            }, 50);
        });
        this.resizeObserver.observe(el);
    }

    private reinitChart(): void {
        this.destroyChart();
        this.initChart();
    }

    private updateChart(): void {
        // Reinit when series count changes (overlay added/removed)
        const expectedSeries = 2 + this.overlaySeries.length;
        if (!this.plot || (this.plot.series?.length !== expectedSeries)) {
            this.reinitChart();
            return;
        }
        const chartData = this.buildChartData();
        this.plot.setData(chartData, true);
        if (chartData[0].length > 0) {
            this.plot.setScale('x', { min: chartData[0][0], max: chartData[0][chartData[0].length - 1] });
        }
    }

    private buildChartData(): number[][] {
        if (this.overlaySeries.length === 0) {
            // Simple case: single series
            return [
                this.rangeData.map(d => d.timestamp / 1000),
                this.rangeData.map(d => d.value),
            ];
        }

        // Multiple series: merge all timestamps, align values with nulls for gaps
        const allSeries = [this.rangeData, ...this.overlaySeries.map(s => s.data)];
        const tsSet = new Set<number>();
        for (const series of allSeries) {
            for (const d of series) tsSet.add(d.timestamp);
        }
        const sortedTs = Array.from(tsSet).sort((a, b) => a - b);
        const timestamps = sortedTs.map(t => t / 1000);

        const result: number[][] = [timestamps];
        for (const series of allSeries) {
            const valueMap = new Map<number, number>();
            for (const d of series) valueMap.set(d.timestamp, d.value);
            result.push(sortedTs.map(t => valueMap.has(t) ? valueMap.get(t)! : null as any));
        }
        return result;
    }

    private destroyChart(): void {
        this.resizeObserver?.disconnect();
        this.resizeObserver = null;
        this.plot?.destroy();
        this.plot = null;
    }
}
