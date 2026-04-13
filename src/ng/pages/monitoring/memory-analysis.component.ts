import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { SettingsService } from '../../services/settings.service';
import { P3xrAccordionComponent } from '../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../components/p3xr-button.component';
import { P3xrInputComponent } from '../../components/p3xr-input.component';
import { RedisStateService } from '../../services/redis-state.service';
import humanizeDuration from 'humanize-duration';

@Component({
    selector: 'p3xr-memory-analysis',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatIconModule, MatButtonModule, MatTooltipModule,
        MatDividerModule, MatListModule,
        P3xrAccordionComponent, P3xrButtonComponent, P3xrInputComponent,
    ],
    templateUrl: './memory-analysis.component.html',
    styleUrls: ['./memory-analysis.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryAnalysisComponent implements OnInit, OnDestroy, AfterViewInit {
    strings;
    data: any = null;
    loading = false;
    topN = 20;
    maxScanKeys = 5000;
    typeEntries: Array<{ type: string; count: number; bytes: number }> = [];

    doctorText: string | null = null;
    doctorLoading = false;
    autoRefreshDoctor = false;
    private doctorInterval: any = null;

    @ViewChild('typeChart') typeChartRef!: ElementRef<HTMLDivElement>;
    @ViewChild('prefixChart') prefixChartRef!: ElementRef<HTMLDivElement>;

    private unsubFns: Array<() => void> = [];
    private resizeObserver: ResizeObserver | null = null;
    private themeObserver: MutationObserver | null = null;
    private resizeTimer: any;

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(ElementRef) private elementRef: ElementRef,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(SettingsService) private settings: SettingsService,
    ) {
        this.strings = this.i18n.strings;
    }

    s() {
        return this.strings().page?.analysis || {};
    }

    get connName(): string {
        return this.state.connection()?.name || 'redis';
    }

    ngOnInit(): void {
        this.autoRefreshDoctor = localStorage.getItem('p3xr-monitor-auto-doctor') === 'true';
        if (this.autoRefreshDoctor) this.startDoctorInterval();
        if (this.state.connection()) this.runAnalysis();
        const sub = this.socket.stateChanged$.subscribe(() => {
            this.data = null;
            if (this.state.connection()) this.runAnalysis();
        });
        this.unsubFns.push(() => sub.unsubscribe());
    }

    ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.resizeObserver = new ResizeObserver(() => {
                clearTimeout(this.resizeTimer);
                this.resizeTimer = setTimeout(() => { if (this.data) this.drawCharts(); }, 150);
            });
            this.resizeObserver.observe(this.elementRef.nativeElement);
        });

        this.ngZone.runOutsideAngular(() => {
            this.themeObserver = new MutationObserver(() => {
                if (this.data) setTimeout(() => this.drawCharts(), 100);
            });
            this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        });
    }

    ngOnDestroy(): void {
        this.stopDoctorInterval();
        this.themeObserver?.disconnect();
        this.resizeObserver?.disconnect();
        this.unsubFns.forEach(fn => fn());
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

    async runAnalysis(): Promise<void> {
        if (this.loading) return;
        this.loading = true;
        this.safeDetectChanges();
        try {
            const response = await this.socket.request({
                action: 'memory/analysis',
                payload: { topN: this.topN, maxScanKeys: this.maxScanKeys },
            });
            this.data = response.data;
            this.typeEntries = Object.keys(this.data.typeDistribution).map(type => ({
                type,
                count: this.data.typeDistribution[type],
                bytes: this.data.typeMemory[type] || 0,
            })).sort((a, b) => b.bytes - a.bytes);
            this.loading = false;
            this.safeDetectChanges();
            setTimeout(() => this.drawCharts(), 100);
        } catch (e) {
            this.loading = false;
            this.safeDetectChanges();
            this.common.generalHandleError(e);
        }
    }

    async runDoctor(): Promise<void> {
        this.doctorLoading = true;
        this.safeDetectChanges();
        try {
            const resp = await this.socket.request({ action: 'memory/doctor' });
            this.doctorText = resp.data.text;
        } catch (e) {
            this.common.generalHandleError(e);
        } finally {
            this.doctorLoading = false;
            this.safeDetectChanges();
        }
    }

    toggleAutoDoctor(): void {
        this.autoRefreshDoctor = !this.autoRefreshDoctor;
        localStorage.setItem('p3xr-monitor-auto-doctor', String(this.autoRefreshDoctor));
        if (this.autoRefreshDoctor) {
            this.runDoctor();
            this.startDoctorInterval();
        } else {
            this.stopDoctorInterval();
        }
    }

    private startDoctorInterval(): void {
        this.stopDoctorInterval();
        this.doctorInterval = setInterval(() => this.runDoctor(), 2000);
    }

    private stopDoctorInterval(): void {
        if (this.doctorInterval) {
            clearInterval(this.doctorInterval);
            this.doctorInterval = null;
        }
    }

    exportDoctor(): void {
        if (!this.doctorText) return;
        this.downloadText(this.doctorText, `${this.connName}-memory-doctor.txt`);
    }

    formatBytes(bytes: number): string {
        if (bytes == null || isNaN(bytes)) return '-';
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
        return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
    }

    formatTTL(seconds: number): string {
        if (!seconds || seconds <= 0) return '-';
        try {
            const hdOpts = this.settings.getHumanizeDurationOptions();
            return humanizeDuration(seconds * 1000, { ...hdOpts, delimiter: ' ' });
        } catch {
            if (seconds < 60) return seconds + 's';
            if (seconds < 3600) return Math.floor(seconds / 60) + 'm ' + (seconds % 60) + 's';
            if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ' + Math.floor((seconds % 3600) / 60) + 'm';
            return Math.floor(seconds / 86400) + 'd ' + Math.floor((seconds % 86400) / 3600) + 'h';
        }
    }

    private formatUptime(s: number): string {
        const d = Math.floor(s / 86400);
        const h = Math.floor((s % 86400) / 3600);
        const m = Math.floor((s % 3600) / 60);
        return d > 0 ? `${d}d ${h}h ${m}m` : h > 0 ? `${h}h ${m}m` : `${m}m`;
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

    exportOverview(): void {
        if (!this.data) return;
        const t = this.s();
        this.downloadText([
            `${t.keysScanned}: ${this.data.totalScanned} / ${this.data.dbSize}`,
            `${t.topN}: ${this.topN}`,
            `${t.maxScanKeys}: ${this.maxScanKeys}`,
        ].join('\n'), `${this.connName}-analysis-overview.txt`);
    }

    exportMemoryBreakdown(): void {
        if (!this.data) return;
        const t = this.s();
        const m = this.data.memoryInfo;
        this.downloadText([
            `${t.totalMemory}: ${m.usedHuman}`,
            `${t.rssMemory}: ${m.rssHuman}`,
            `${t.peakMemory}: ${m.peakHuman}`,
            `${t.overheadMemory}: ${this.formatBytes(m.overhead)}`,
            `${t.datasetMemory}: ${this.formatBytes(m.dataset)}`,
            `${t.luaMemory}: ${this.formatBytes(m.lua)}`,
            `${t.fragmentation}: ${m.fragRatio}x`,
            `${t.allocator}: ${m.allocator}`,
        ].join('\n'), `${this.connName}-memory-breakdown.txt`);
    }

    exportExpiration(): void {
        if (!this.data) return;
        const t = this.s();
        const e = this.data.expirationOverview;
        this.downloadText([
            `${t.withTTL}: ${e.withTTL}`,
            `${t.persistent}: ${e.persistent}`,
            `${t.avgTTL}: ${this.formatTTL(e.avgTTL)}`,
        ].join('\n'), `${this.connName}-expiration.txt`);
    }

    exportChart(chartRef: ElementRef<HTMLDivElement> | undefined, name: string): void {
        const canvas = chartRef?.nativeElement?.querySelector('canvas') as HTMLCanvasElement;
        if (!canvas) return;
        // Create a copy with solid background
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = canvas.width;
        exportCanvas.height = canvas.height;
        const ctx = exportCanvas.getContext('2d')!;
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || '#ffffff';
        ctx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
        ctx.drawImage(canvas, 0, 0);
        const url = exportCanvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.connName}-${name}.png`;
        a.click();
    }

    private safeDetectChanges(): void {
        this.ngZone.run(() => {
            try { this.cdr.detectChanges(); } catch { /* teardown */ }
        });
    }

    drawCharts(): void {
        this.drawBarChart(this.typeChartRef?.nativeElement, this.typeEntries.map(t => ({
            label: t.type,
            value: t.bytes,
        })));
        this.drawBarChart(this.prefixChartRef?.nativeElement, (this.data?.prefixMemory || []).slice(0, 20).map((p: any) => ({
            label: p.prefix,
            value: p.totalBytes,
        })));
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
            isDark,
        };
    }

    private getBarColors(colors: ReturnType<typeof this.getChartColors>): string[] {
        const isDark = colors.isDark;
        return [
            colors.primary,
            colors.accent,
            colors.warn,
            isDark ? '#ffb74d' : '#ff9800',
            isDark ? '#81c784' : '#4caf50',
            isDark ? '#4dd0e1' : '#00bcd4',
            isDark ? '#a1887f' : '#795548',
            isDark ? '#90a4ae' : '#607d8b',
        ];
    }

    private drawBarChart(container: HTMLDivElement | undefined, items: Array<{ label: string; value: number }>): void {
        if (!container || items.length === 0 || container.offsetWidth <= 0) return;
        container.innerHTML = '';

        const colors = this.getChartColors();
        const barColors = this.getBarColors(colors);

        const canvas = document.createElement('canvas');
        const dpr = window.devicePixelRatio || 1;
        const width = container.offsetWidth || 500;
        const barHeight = 24;
        const labelWidth = 120;
        const valueWidth = 80;
        const chartLeft = labelWidth + 8;
        const chartRight = width - valueWidth - 8;
        const chartWidth = chartRight - chartLeft;
        const topPad = 8;
        const height = topPad + items.length * (barHeight + 4) + 8;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';

        const ctx = canvas.getContext('2d')!;
        ctx.scale(dpr, dpr);

        const maxVal = Math.max(...items.map(i => i.value), 1);

        items.forEach((item, i) => {
            const y = topPad + i * (barHeight + 4);

            ctx.fillStyle = colors.text;
            ctx.font = '12px Roboto, sans-serif';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(item.label.length > 15 ? item.label.substring(0, 14) + '…' : item.label, labelWidth, y + barHeight / 2);

            ctx.fillStyle = colors.grid;
            ctx.fillRect(chartLeft, y, chartWidth, barHeight);

            const barWidth = (item.value / maxVal) * chartWidth;
            ctx.fillStyle = barColors[i % barColors.length];
            ctx.fillRect(chartLeft, y, barWidth, barHeight);

            ctx.fillStyle = colors.text;
            ctx.font = '11px Roboto Mono, monospace';
            ctx.textAlign = 'left';
            ctx.fillText(this.formatBytes(item.value), chartRight + 8, y + barHeight / 2);
        });

        container.appendChild(canvas);
    }
}
