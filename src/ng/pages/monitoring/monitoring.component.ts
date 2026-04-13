import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, ViewChild, AfterViewInit, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
const formatTime = (ms: number) => timeFormatter.format(new Date(ms));
import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { P3xrAccordionComponent } from '../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../components/p3xr-button.component';
import { RedisStateService } from '../../services/redis-state.service';
import { MonitoringDataService } from './monitoring-data.service';

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
        CommonModule, FormsModule,
        MatIconModule, MatButtonModule,
        MatTooltipModule, MatDividerModule, MatListModule,
        MatFormFieldModule, MatInputModule,
        P3xrAccordionComponent,
        P3xrButtonComponent,
    ],
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.scss'],
    encapsulation: ViewEncapsulation.None,
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
    slotStats: Array<{ slot: number; 'key-count'?: number; 'cpu-usec'?: number; 'memory-bytes'?: number }> = [];
    slotStatsMetric = 'KEY-COUNT';
    slotStatsLoaded = false;
    isCluster = false;
    clusterShards: any[] | null = null;
    autoRefreshShards = localStorage.getItem('p3xr-monitor-auto-shards') === 'true';
    private shardsInterval: any = null;

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
        @Inject(MonitoringDataService) private monitorData: MonitoringDataService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.isReadonly = this.state.connection()?.readonly === true;
        this.isCluster = this.state.connection()?.cluster === true;
        this.fetchData();
        this.loadClientList();
        this.loadTopKeys();
        if (this.isCluster && this.state.redisVersion().isAtLeast(8, 2)) {
            this.loadSlotStats();
        }

        // Reload all data when connection changes
        const sub = this.socket.stateChanged$.subscribe(() => {
            this.isReadonly = this.state.connection()?.readonly === true;
            this.isCluster = this.state.connection()?.cluster === true;
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
        // Delay chart init to ensure DOM has layout
        setTimeout(() => this.loadUPlot(), 500);
    }

    ngOnDestroy(): void {
        if (this.intervalId) clearInterval(this.intervalId);
        if (this.shardsInterval) clearInterval(this.shardsInterval);
        this.unsubFns.forEach(fn => fn());
        this.themeObserver?.disconnect();
        this.resizeObserver?.disconnect();
        this.memoryPlot?.destroy();
        this.opsPlot?.destroy();
        this.clientsPlot?.destroy();
        this.networkPlot?.destroy();
    }

    serverInfoLabel(): string {
        if (!this.current) return '';
        const s = this.current.server;
        const pause = this.paused ? (this.strings().intention?.resume) : (this.strings().intention?.pause);
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
            const response = await this.socket.request({ action: 'client/list', payload: {} });
            this.clientList = response.data;
            this.clientListLoaded = true;
            this.safeDetectChanges();
        } catch { this.clientListLoaded = true; }
    }

    async killClient(id: string, event: Event): Promise<void> {
        event.stopPropagation();
        try {
            await this.common.confirm({
                message: this.strings().page?.monitor?.confirmKillClient,
            });
            await this.socket.request({ action: 'client/kill', payload: { id } });
            this.common.toast({ message: this.strings().page?.monitor?.clientKilled });
            await this.loadClientList();
        } catch (e) {
            if (e !== undefined) this.common.generalHandleError(e);
        }
    }

    async loadSlotStats(): Promise<void> {
        try {
            const response = await this.socket.request({
                action: 'cluster/slot-stats',
                payload: { metric: this.slotStatsMetric, limit: 20 },
            });
            this.slotStats = response.slots || [];
            this.slotStatsLoaded = true;
            this.safeDetectChanges();
        } catch { this.slotStatsLoaded = true; this.slotStats = []; }
    }

    async loadTopKeys(): Promise<void> {
        try {
            const response = await this.socket.request({ action: 'memory/top-keys', payload: { topN: 20 } });
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

    // --- Dashboard computed properties ---

    get serverInfo(): { os: string; port: string; pid: string; configFile: string; cpuSys: string; cpuUser: string } | null {
        const info = this.state.info();
        if (!info) return null;
        const s = info.server || {};
        const c = info.cpu || {};
        return {
            os: s.os || '',
            port: s.tcp_port || '',
            pid: s.process_id || '',
            configFile: s.config_file || '',
            cpuSys: c.used_cpu_sys || '0',
            cpuUser: c.used_cpu_user || '0',
        };
    }

    get persistenceInfo(): { rdbLastSave: string; rdbStatus: string; rdbChanges: string; aofEnabled: string; aofSize: string } | null {
        const info = this.state.info();
        if (!info?.persistence) return null;
        const p = info.persistence;
        const lastSaveTs = parseInt(p.rdb_last_save_time, 10);
        const lastSave = lastSaveTs ? new Date(lastSaveTs * 1000).toLocaleString() : 'N/A';
        return {
            rdbLastSave: lastSave,
            rdbStatus: p.rdb_last_bgsave_status || 'N/A',
            rdbChanges: p.rdb_changes_since_last_save ?? 'N/A',
            aofEnabled: p.aof_enabled === '1' ? 'Yes' : 'No',
            aofSize: p.aof_enabled === '1' ? this.formatBytes(parseInt(p.aof_current_size, 10) || 0) : '',
        };
    }

    get replicationInfo(): { role: string; replicas?: string; masterHost?: string; masterPort?: string; linkStatus?: string } | null {
        const info = this.state.info();
        if (!info?.replication) return null;
        const r = info.replication;
        const result: any = { role: r.role || 'unknown' };
        if (r.role === 'master') {
            result.replicas = r.connected_slaves ?? '0';
        } else if (r.role === 'slave') {
            result.masterHost = r.master_host;
            result.masterPort = r.master_port;
            result.linkStatus = r.master_link_status;
        }
        return result;
    }

    get keyspaceEntries(): Array<{ db: string; keys: string; expires: string }> {
        const info = this.state.info();
        if (!info?.keyspace) return [];
        return Object.keys(info.keyspace)
            .filter(k => k.startsWith('db'))
            .sort((a, b) => parseInt(a.slice(2), 10) - parseInt(b.slice(2), 10))
            .map(db => {
                const entry = info.keyspace[db];
                return {
                    db,
                    keys: typeof entry === 'object' ? (entry.keys || '0') : '0',
                    expires: typeof entry === 'object' ? (entry.expires || '0') : '0',
                };
            });
    }

    get modulesList(): Array<{ name: string; ver: string }> {
        return (this.state.modules() || []).map((m: any) => ({
            name: m.name || 'unknown',
            ver: String(m.ver ?? m.version ?? ''),
        }));
    }

    // --- Dashboard export methods ---

    exportServerInfo(): void {
        const s = this.serverInfo;
        if (!s) return;
        const mon = this.strings().page?.monitor || {};
        const lines = [
            `${mon.os}: ${s.os}`,
            `${mon.port}: ${s.port}`,
            `${mon.pid}: ${s.pid}`,
            `${mon.configFile}: ${s.configFile}`,
            `${mon.cpuSys} CPU: ${s.cpuSys}`,
            `${mon.cpuUser} CPU: ${s.cpuUser}`,
        ];
        this.downloadText(lines.join('\n'), `${this.connName}-server-info.txt`);
    }

    exportPersistence(): void {
        const p = this.persistenceInfo;
        if (!p) return;
        const mon = this.strings().page?.monitor || {};
        const lines = [
            `${mon.rdbLastSave}: ${p.rdbLastSave}`,
            `${mon.rdbStatus}: ${p.rdbStatus}`,
            `${mon.rdbChanges}: ${p.rdbChanges}`,
            `${mon.aofEnabled}: ${p.aofEnabled}`,
        ];
        if (p.aofSize) lines.push(`${mon.aofSize}: ${p.aofSize}`);
        this.downloadText(lines.join('\n'), `${this.connName}-persistence.txt`);
    }

    exportReplication(): void {
        const r = this.replicationInfo;
        if (!r) return;
        const mon = this.strings().page?.monitor || {};
        const lines = [`${mon.role}: ${r.role}`];
        if (r.replicas !== undefined) lines.push(`${mon.replicas}: ${r.replicas}`);
        if (r.masterHost) lines.push(`${mon.masterHost}: ${r.masterHost}:${r.masterPort}`);
        if (r.linkStatus) lines.push(`${mon.linkStatus}: ${r.linkStatus}`);
        this.downloadText(lines.join('\n'), `${this.connName}-replication.txt`);
    }

    exportKeyspace(): void {
        const entries = this.keyspaceEntries;
        if (entries.length === 0) return;
        const mon = this.strings().page?.monitor || {};
        const lines = entries.map(e => `${e.db}: ${mon.keys}: ${e.keys}, ${mon.expires}: ${e.expires}`);
        this.downloadText(lines.join('\n'), `${this.connName}-keyspace.txt`);
    }

    exportModules(): void {
        const mods = this.modulesList;
        const mon = this.strings().page?.monitor || {};
        if (mods.length === 0) {
            this.downloadText(mon.noModules, `${this.connName}-modules.txt`);
            return;
        }
        const lines = mods.map(m => `${m.name} v${m.ver}`);
        this.downloadText(lines.join('\n'), `${this.connName}-modules.txt`);
    }

    private get connName(): string {
        return this.state.connection()?.name || 'redis';
    }

    exportOverview(): void {
        if (!this.current) return;
        const c = this.current;
        const mon = this.strings().page?.monitor || {};
        const lines = [
            `${mon.memory}: ${c.memory.usedHuman}`,
            `${mon.rss}: ${c.memory.rssHuman}`,
            `${mon.peak}: ${c.memory.peakHuman}`,
            `${mon.fragmentation}: ${c.memory.fragRatio}x`,
            `${mon.opsPerSec}: ${c.stats.opsPerSec}`,
            `${mon.totalCommands}: ${c.stats.totalCommands}`,
            `${mon.clients}: ${c.clients.connected}`,
            `${mon.blocked}: ${c.clients.blocked}`,
            `${mon.hitsMisses}: ${c.stats.hitRate}%`,
            `${mon.hitsAndMisses}: ${c.stats.hits} / ${c.stats.misses}`,
            `${mon.networkIo}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
            `${mon.expired}: ${c.stats.expiredKeys}`,
            `${mon.evicted}: ${c.stats.evictedKeys}`,
        ];
        this.downloadText(lines.join('\n'), `${this.connName}-overview.txt`);
    }

    exportChart(chartRef: ElementRef<HTMLDivElement> | undefined, name: string): void {
        const canvas = chartRef?.nativeElement?.querySelector('canvas') as HTMLCanvasElement;
        if (!canvas) return;
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

    async resetSlowLog(): Promise<void> {
        try {
            await this.common.confirm({ message: this.strings().page?.monitor?.confirmSlowLogReset });
            await this.socket.request({ action: 'monitor/slowlog-reset' });
            this.common.toast({ message: this.strings().page?.monitor?.slowLogResetDone });
        } catch {}
    }

    exportSlowLog(): void {
        if (!this.current) return;
        const lines = this.current.slowlog.map(e => `${e.duration}µs ${e.command}`);
        this.downloadText(lines.join('\n'), `${this.connName}-slowlog.txt`);
    }

    async loadClusterShards(): Promise<void> {
        try {
            const resp = await this.socket.request({ action: 'cluster/shards' });
            this.clusterShards = resp.data.shards;
            this.safeDetectChanges();
        } catch (e) { this.common.generalHandleError(e); }
    }

    toggleAutoRefreshShards(): void {
        this.autoRefreshShards = !this.autoRefreshShards;
        localStorage.setItem('p3xr-monitor-auto-shards', String(this.autoRefreshShards));
        if (this.autoRefreshShards) {
            this.loadClusterShards();
            this.shardsInterval = setInterval(() => this.loadClusterShards(), 2000);
        } else {
            clearInterval(this.shardsInterval);
            this.shardsInterval = null;
        }
    }

    getSlotCount(shard: any): number {
        return shard.slotRanges.reduce((sum: number, [a, b]: [number, number]) => sum + (b - a + 1), 0);
    }

    formatSlotRanges(shard: any): string {
        return shard.slotRanges.map(([a, b]: [number, number]) => `${a}-${b}`).join(', ');
    }

    formatReplicas(shard: any): string {
        return shard.replicas.map((r: any) => `${r.host}:${r.port}`).join(', ');
    }

    exportClusterSlots(): void {
        if (!this.clusterShards) return;
        const lines = this.clusterShards.map(s => {
            const slots = s.slotRanges.map(([a, b]: [number, number]) => `${a}-${b}`).join(', ');
            const count = this.getSlotCount(s);
            const replicas = s.replicas.map((r: any) => `${r.host}:${r.port}`).join(', ');
            return `${s.master.host}:${s.master.port} | ${slots} | ${count} slots | replicas: ${replicas || 'none'}`;
        });
        this.downloadText(lines.join('\n'), `${this.connName}-cluster-slots.txt`);
    }

    exportClientList(): void {
        const lines = this.clientList.map(c => `${c.addr} ${c.name || ''} db${c.db} ${c.cmd} idle:${c.idle}s`);
        this.downloadText(lines.join('\n'), `${this.connName}-clients.txt`);
    }

    exportTopKeys(): void {
        const lines = this.topKeys.map((e, i) => `#${i + 1} ${e.key} ${this.formatBytes(e.bytes)}`);
        this.downloadText(lines.join('\n'), `${this.connName}-topkeys.txt`);
    }

    async exportAll(): Promise<void> {
        if (!this.current) return;
        try {
            const JSZip = (await import('jszip')).default;
            const zip = new JSZip();
            const c = this.current;
            const sections: string[] = [];

            // === PULSE ===
            const mon = this.strings().page?.monitor || {};
            const a = this.strings().page?.analysis || {};
            sections.push(
                `============================`,
                `  PULSE`,
                `============================`,
                ``,
                `--- ${mon.title} ---`,
                `Redis ${c.server.version} · ${c.server.mode} · Uptime: ${this.uptimeFormatted}`,
                `${mon.memory}: ${c.memory.usedHuman}`,
                `${mon.rss}: ${c.memory.rssHuman}`,
                `${mon.peak}: ${c.memory.peakHuman}`,
                `${mon.fragmentation}: ${c.memory.fragRatio}x`,
                `${mon.opsPerSec}: ${c.stats.opsPerSec}`,
                `${mon.totalCommands}: ${c.stats.totalCommands}`,
                `${mon.clients}: ${c.clients.connected}`,
                `${mon.blocked}: ${c.clients.blocked}`,
                `${mon.hitsMisses}: ${c.stats.hitRate}%`,
                `${mon.hitsAndMisses}: ${c.stats.hits} / ${c.stats.misses}`,
                `${mon.networkIo}: ${c.stats.inputKbps.toFixed(1)} / ${c.stats.outputKbps.toFixed(1)} KB/s`,
                `${mon.expired}: ${c.stats.expiredKeys}`,
                `${mon.evicted}: ${c.stats.evictedKeys}`,
            );

            // Dashboard sections
            const si = this.serverInfo;
            if (si) {
                sections.push(``, `--- ${mon.serverInfo} ---`);
                sections.push(`${mon.os}: ${si.os}`, `${mon.port}: ${si.port}`, `${mon.pid}: ${si.pid}`);
                if (si.configFile) sections.push(`${mon.configFile}: ${si.configFile}`);
                sections.push(`${mon.cpuSys} CPU: ${si.cpuSys}`, `${mon.cpuUser} CPU: ${si.cpuUser}`);
            }
            const pi = this.persistenceInfo;
            if (pi) {
                sections.push(``, `--- ${mon.persistence} ---`);
                sections.push(`${mon.rdbLastSave}: ${pi.rdbLastSave}`, `${mon.rdbStatus}: ${pi.rdbStatus}`);
                sections.push(`${mon.rdbChanges}: ${pi.rdbChanges}`, `${mon.aofEnabled}: ${pi.aofEnabled}`);
                if (pi.aofSize) sections.push(`${mon.aofSize}: ${pi.aofSize}`);
            }
            const ri = this.replicationInfo;
            if (ri) {
                sections.push(``, `--- ${mon.replication} ---`);
                sections.push(`${mon.role}: ${ri.role}`);
                if (ri.replicas !== undefined) sections.push(`${mon.replicas}: ${ri.replicas}`);
                if (ri.masterHost) sections.push(`${mon.masterHost}: ${ri.masterHost}:${ri.masterPort}`);
                if (ri.linkStatus) sections.push(`${mon.linkStatus}: ${ri.linkStatus}`);
            }
            const ks = this.keyspaceEntries;
            if (ks.length > 0) {
                sections.push(``, `--- ${mon.keyspace} ---`);
                sections.push(...ks.map(e => `${e.db}: ${mon.keys}: ${e.keys}, ${mon.expires}: ${e.expires}`));
            }
            const mods = this.modulesList;
            if (mods.length > 0) {
                sections.push(``, `--- ${mon.modules} ---`);
                sections.push(...mods.map(m => `${m.name} v${m.ver}`));
            } else {
                sections.push(``, `--- ${mon.modules} ---`, mon.noModules);
            }

            if (c.slowlog.length > 0) {
                sections.push(``, `--- ${mon.slowLog} ---`);
                sections.push(...c.slowlog.map(e => `${e.duration}µs ${e.command}`));
            }

            if (this.clientList.length > 0) {
                sections.push(``, `--- ${mon.clientList} ---`);
                sections.push(...this.clientList.map(cl => `${cl.addr} ${cl.name || ''} db${cl.db} ${cl.cmd} idle:${cl.idle}s`));
            }

            if (this.topKeys.length > 0) {
                sections.push(``, `--- ${mon.topKeys} ---`);
                sections.push(...this.topKeys.map((e, i) => `#${i + 1} ${e.key} ${this.formatBytes(e.bytes)}`));
            }

            // === ANALYSIS ===
            let analysisChartItems: Array<{ name: string; items: Array<{ label: string; value: number }> }> = [];
            try {
                const resp = await this.socket.request({ action: 'memory/analysis', payload: { topN: 20, maxScanKeys: 5000 } });
                const d = resp.data;
                if (d) {
                    const m = d.memoryInfo;
                    const exp = d.expirationOverview;
                    const typeEntries = Object.keys(d.typeDistribution || {}).map((t: string) => ({
                        type: t, count: d.typeDistribution[t], bytes: d.typeMemory?.[t] || 0,
                    })).sort((a: any, b: any) => b.bytes - a.bytes);

                    sections.push(``, ``, `============================`, `  ANALYSIS`, `============================`);

                    sections.push(``, `--- ${a.keysScanned} ---`, `${a.keysScanned}: ${d.totalScanned} / ${d.dbSize}`);

                    sections.push(``, `--- ${a.memoryBreakdown} ---`);
                    sections.push(`${a.totalMemory}: ${m.usedHuman}`, `${a.rssMemory}: ${m.rssHuman}`, `${a.peakMemory}: ${m.peakHuman}`);
                    sections.push(`${a.overheadMemory}: ${this.formatBytes(m.overhead)}`, `${a.datasetMemory}: ${this.formatBytes(m.dataset)}`);
                    sections.push(`${a.luaMemory}: ${this.formatBytes(m.lua)}`, `${a.fragmentation}: ${m.fragRatio}x`, `${a.allocator}: ${m.allocator}`);

                    sections.push(``, `--- ${a.typeDistribution} ---`);
                    sections.push(...typeEntries.map((t: any) => `${t.type}: ${t.count} ${a.keyCount}, ${this.formatBytes(t.bytes)}`));

                    if (d.prefixMemory?.length > 0) {
                        sections.push(``, `--- ${a.prefixMemory} ---`);
                        sections.push(...d.prefixMemory.map((p: any, i: number) => `#${i + 1} ${p.prefix} \u2014 ${p.keyCount} ${a.keyCount}, ${this.formatBytes(p.totalBytes)}`));
                    }

                    sections.push(``, `--- ${a.expirationOverview} ---`);
                    sections.push(`${a.withTTL}: ${exp.withTTL}`, `${a.persistent}: ${exp.persistent}`, `${a.avgTTL}: ${exp.avgTTL}s`);

                    analysisChartItems = [
                        { name: a.typeDistribution, items: typeEntries.map((t: any) => ({ label: t.type, value: t.bytes })) },
                        { name: a.prefixMemory, items: (d.prefixMemory || []).slice(0, 20).map((p: any) => ({ label: p.prefix, value: p.totalBytes })) },
                    ];
                }
            } catch { /* analysis optional */ }

            // Profiler + PubSub tail sections (long, go last in txt and PDF)
            // Sanitize: strip null bytes and non-printable control chars from raw Redis data
            const sanitize = (s: string) => s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
            const tailSections: string[] = [];

            if (this.monitorData.profilerEntries.length > 0) {
                tailSections.push(``, ``, `============================`, `  PROFILER`, `============================`, ``);
                tailSections.push(...this.monitorData.profilerEntries.map(
                    e => sanitize(`${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`)
                ));
            }

            if (this.monitorData.pubsubEntries.length > 0) {
                tailSections.push(``, ``, `============================`, `  PUBSUB`, `============================`, ``);
                tailSections.push(...this.monitorData.pubsubEntries.map(
                    e => sanitize(`${e.fullTimestamp} ${e.channel} ${e.message}`)
                ));
            }

            // Write the single text file: sections + tail (UTF-8 with BOM)
            const textContent = [...sections, ...tailSections].join('\n');
            const textBytes = new TextEncoder().encode(textContent);
            const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
            const txtWithBom = new Uint8Array(bom.length + textBytes.length);
            txtWithBom.set(bom);
            txtWithBom.set(textBytes, bom.length);
            zip.file('monitoring.txt', txtWithBom);

            // Collect all chart canvases and stitch into 1 tall PNG
            const allCanvases: Array<{ label: string; canvas: HTMLCanvasElement }> = [];

            // Pulse charts (render offscreen so they work even with collapsed accordions)
            allCanvases.push(...this.renderPulseChartsForExport());

            // Analysis charts (render offscreen)
            for (const ci of analysisChartItems) {
                if (ci.items.length === 0) continue;
                const canvas = this.renderBarChart(ci.items);
                if (canvas) allCanvases.push({ label: ci.name, canvas });
            }

            // Stitch all canvases into 1 tall image
            if (allCanvases.length > 0) {
                const blob = await this.stitchCharts(allCanvases);
                if (blob) zip.file('charts.png', blob);
            }

            // Generate PDF with text + charts
            try {
                const pdfBlob = await this.generatePdf(sections, allCanvases, tailSections);
                if (pdfBlob) zip.file('monitoring.pdf', pdfBlob);
            } catch { /* pdf optional */ }

            const content = await zip.generateAsync({ type: 'blob' });
            const url = URL.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${this.connName}-monitoring.zip`;
            link.click();
            URL.revokeObjectURL(url);
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    private async stitchCharts(items: Array<{ label: string; canvas: HTMLCanvasElement }>): Promise<Blob | null> {
        const padding = 32;
        const labelHeight = 60;
        const chartSpacing = 40;
        // Use full native pixel width of the widest chart, minimum 2400px
        const width = Math.max(2400, ...items.map(i => i.canvas.width));

        // Calculate total height at native pixel resolution
        let totalHeight = padding;
        for (const item of items) {
            const scaledH = item.canvas.height * (width / item.canvas.width);
            totalHeight += labelHeight + scaledH + chartSpacing;
        }
        totalHeight += padding;

        const stitched = document.createElement('canvas');
        stitched.width = width;
        stitched.height = totalHeight;
        const ctx = stitched.getContext('2d')!;

        const bgColor = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || '#ffffff';
        const colors = this.getChartColors();
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, totalHeight);

        let y = padding;
        for (const item of items) {
            // Label
            ctx.fillStyle = colors.text;
            ctx.font = 'bold 28px Roboto, sans-serif';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'top';
            ctx.fillText(item.label, padding, y);
            y += labelHeight;

            // Draw chart at full width
            const drawW = width - padding * 2;
            const drawH = item.canvas.height * (drawW / item.canvas.width);
            ctx.drawImage(item.canvas, padding, y, drawW, drawH);
            y += drawH + chartSpacing;
        }

        return new Promise(resolve => stitched.toBlob(b => resolve(b), 'image/png'));
    }

    private renderPulseChartsForExport(): Array<{ label: string; canvas: HTMLCanvasElement }> {
        // Use history if available, otherwise build a minimal dataset from the current snapshot
        let data: ReturnType<typeof this.buildChartData>;
        if (this.history.length >= 2) {
            data = this.buildChartData();
        } else if (this.current) {
            const c = this.current;
            const now = Date.now() / 1000;
            data = {
                timestamps: [now - 1, now],
                memUsed: [c.memory.used / (1024 * 1024), c.memory.used / (1024 * 1024)],
                memRss: [c.memory.rss / (1024 * 1024), c.memory.rss / (1024 * 1024)],
                ops: [c.stats.opsPerSec, c.stats.opsPerSec],
                connected: [c.clients.connected, c.clients.connected],
                blocked: [c.clients.blocked, c.clients.blocked],
                netIn: [c.stats.inputKbps, c.stats.inputKbps],
                netOut: [c.stats.outputKbps, c.stats.outputKbps],
            };
        } else {
            return [];
        }
        const colors = this.getChartColors();
        const s = this.strings().page?.monitor || {};

        const chartConfigs: Array<{
            label: string;
            series: Array<{ label: string; color: string; values: number[]; fill?: boolean }>;
        }> = [
            {
                label: (s.memory) + ' (MB)',
                series: [
                    { label: s.memory, color: colors.primary, values: data.memUsed, fill: true },
                    { label: 'RSS', color: colors.accent, values: data.memRss },
                ],
            },
            {
                label: s.opsPerSec,
                series: [
                    { label: s.opsPerSec, color: colors.primary, values: data.ops, fill: true },
                ],
            },
            {
                label: s.clients,
                series: [
                    { label: s.clients, color: colors.primary, values: data.connected },
                    { label: s.blocked, color: colors.warn, values: data.blocked },
                ],
            },
            {
                label: (s.networkIo) + ' (KB/s)',
                series: [
                    { label: '\u2193 In', color: colors.primary, values: data.netIn, fill: true },
                    { label: '\u2191 Out', color: colors.accent, values: data.netOut },
                ],
            },
        ];

        return chartConfigs.map(config =>
            ({ label: config.label, canvas: this.renderLineChart(data.timestamps, config.series, colors) })
        );
    }

    private renderLineChart(
        timestamps: number[],
        series: Array<{ label: string; color: string; values: number[]; fill?: boolean }>,
        colors: ReturnType<typeof this.getChartColors>,
    ): HTMLCanvasElement {
        const dpr = 2;
        const width = 900;
        const height = 260;
        const padTop = 32;
        const padBottom = 40;
        const padLeft = 60;
        const padRight = 16;
        const legendH = 20;
        const chartW = width - padLeft - padRight;
        const chartH = height - padTop - padBottom - legendH;

        const canvas = document.createElement('canvas');
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        const ctx = canvas.getContext('2d')!;
        ctx.scale(dpr, dpr);

        // Background
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || '#ffffff';
        ctx.fillRect(0, 0, width, height);

        const n = timestamps.length;
        if (n < 2) return canvas;

        // Compute Y scale across all series
        let yMin = Infinity, yMax = -Infinity;
        for (const s of series) {
            for (const v of s.values) {
                if (v < yMin) yMin = v;
                if (v > yMax) yMax = v;
            }
        }
        if (yMin === yMax) { yMin -= 1; yMax += 1; }
        const yRange = yMax - yMin;
        const tMin = timestamps[0], tMax = timestamps[n - 1];
        const tRange = tMax - tMin || 1;

        const toX = (t: number) => padLeft + ((t - tMin) / tRange) * chartW;
        const toY = (v: number) => padTop + chartH - ((v - yMin) / yRange) * chartH;

        // Grid lines
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;
        const ySteps = 5;
        for (let i = 0; i <= ySteps; i++) {
            const gy = padTop + (chartH / ySteps) * i;
            ctx.beginPath(); ctx.moveTo(padLeft, gy); ctx.lineTo(padLeft + chartW, gy); ctx.stroke();
            const val = yMax - (yRange / ySteps) * i;
            ctx.fillStyle = colors.text;
            ctx.font = '10px Roboto Mono, monospace';
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            ctx.fillText(val >= 1000 ? (val / 1000).toFixed(1) + 'k' : val.toFixed(1), padLeft - 6, gy);
        }

        // Time labels
        const labelCount = Math.min(6, n);
        ctx.font = '10px Roboto, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = colors.text;
        for (let i = 0; i < labelCount; i++) {
            const idx = Math.round((i / (labelCount - 1)) * (n - 1));
            const t = timestamps[idx];
            const d = new Date(t * 1000);
            const label = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')}`;
            ctx.fillText(label, toX(t), padTop + chartH + 6);
        }

        // Draw series
        for (const s of series) {
            ctx.strokeStyle = s.color;
            ctx.lineWidth = 2;
            ctx.lineJoin = 'round';
            ctx.beginPath();
            for (let i = 0; i < n; i++) {
                const x = toX(timestamps[i]);
                const y = toY(s.values[i]);
                if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();

            if (s.fill) {
                ctx.fillStyle = s.color + '20';
                ctx.beginPath();
                ctx.moveTo(toX(timestamps[0]), toY(s.values[0]));
                for (let i = 1; i < n; i++) ctx.lineTo(toX(timestamps[i]), toY(s.values[i]));
                ctx.lineTo(toX(timestamps[n - 1]), padTop + chartH);
                ctx.lineTo(toX(timestamps[0]), padTop + chartH);
                ctx.closePath();
                ctx.fill();
            }
        }

        // Legend
        let lx = padLeft;
        const ly = height - legendH + 4;
        ctx.font = '11px Roboto, sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        for (const s of series) {
            ctx.fillStyle = s.color;
            ctx.fillRect(lx, ly - 4, 12, 8);
            ctx.fillStyle = colors.text;
            ctx.fillText(s.label, lx + 16, ly);
            lx += ctx.measureText(s.label).width + 32;
        }

        return canvas;
    }

    private renderBarChart(items: Array<{ label: string; value: number }>): HTMLCanvasElement | null {
        if (items.length === 0) return null;
        const colors = this.getChartColors();
        const isDark = colors.text.includes('255');
        const barColors = [
            colors.primary, colors.accent, colors.warn,
            isDark ? '#ffb74d' : '#ff9800', isDark ? '#81c784' : '#4caf50',
            isDark ? '#4dd0e1' : '#00bcd4', isDark ? '#a1887f' : '#795548', isDark ? '#90a4ae' : '#607d8b',
        ];
        const dpr = 2;
        const width = 800;
        const barHeight = 24;
        const labelWidth = 120;
        const valueWidth = 80;
        const chartLeft = labelWidth + 8;
        const chartRight = width - valueWidth - 8;
        const chartWidth = chartRight - chartLeft;
        const topPad = 8;
        const height = topPad + items.length * (barHeight + 4) + 8;
        const canvas = document.createElement('canvas');
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        const ctx = canvas.getContext('2d')!;
        ctx.scale(dpr, dpr);
        ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || '#ffffff';
        ctx.fillRect(0, 0, width, height);
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
            ctx.fillStyle = barColors[i % barColors.length];
            ctx.fillRect(chartLeft, y, (item.value / maxVal) * chartWidth, barHeight);
            ctx.fillStyle = colors.text;
            ctx.font = '11px Roboto Mono, monospace';
            ctx.textAlign = 'left';
            ctx.fillText(this.formatBytes(item.value), chartRight + 8, y + barHeight / 2);
        });
        return canvas;
    }

    private async generatePdf(sections: string[], charts: Array<{ label: string; canvas: HTMLCanvasElement }>, tailSections: string[] = []): Promise<Blob | null> {
        const { jsPDF } = await import('jspdf');
        const isDark = document.body.classList.contains('p3xr-theme-dark');
        const bgColor = getComputedStyle(document.body).getPropertyValue('--p3xr-body-bg').trim() || '#ffffff';
        const textColor = isDark ? '#e0e0e0' : '#212121';
        const headerColor = isDark ? '#90caf9' : '#1565c0';

        const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const pageW = pdf.internal.pageSize.getWidth();
        const pageH = pdf.internal.pageSize.getHeight();
        const margin = 12;
        const contentW = pageW - margin * 2;
        let y = margin;

        const fillBg = () => {
            pdf.setFillColor(bgColor);
            pdf.rect(0, 0, pageW, pageH, 'F');
        };
        fillBg();

        const checkPage = (needed: number) => {
            if (y + needed > pageH - margin) {
                pdf.addPage();
                fillBg();
                y = margin;
            }
        };

        // Text sections
        for (const line of sections) {
            if (line.startsWith('====')) {
                continue;
            }
            const isSectionTitle = line.trim() === 'PULSE' || line.trim() === 'PROFILER' || line.trim() === 'PUBSUB' || line.trim() === 'ANALYSIS';
            if (isSectionTitle) {
                checkPage(14);
                y += 4;
                pdf.setFontSize(14);
                pdf.setTextColor(headerColor);
                pdf.text(line.trim(), margin, y);
                y += 8;
                continue;
            }
            if (line.startsWith('---') && line.endsWith('---')) {
                checkPage(8);
                const title = line.replace(/^-+\s*/, '').replace(/\s*-+$/, '');
                y += 2;
                pdf.setFontSize(10);
                pdf.setTextColor(headerColor);
                pdf.text(title, margin, y);
                y += 5;
                continue;
            }
            if (line === '') {
                y += 2;
                continue;
            }
            checkPage(4);
            pdf.setTextColor(textColor);
            pdf.setFontSize(8);
            const wrapped = pdf.splitTextToSize(line, contentW);
            for (const wl of wrapped) {
                checkPage(4);
                pdf.text(wl, margin, y);
                y += 3.5;
            }
        }

        // Charts — each on its own page
        for (const chart of charts) {
            pdf.addPage();
            fillBg();
            y = margin;

            pdf.setFontSize(12);
            pdf.setTextColor(headerColor);
            pdf.text(chart.label, margin, y);
            y += 8;

            const imgData = chart.canvas.toDataURL('image/png');
            const ratio = chart.canvas.height / chart.canvas.width;
            const availH = pageH - y - margin;
            const imgW = contentW;
            const imgH = imgW * ratio;

            if (imgH > availH) {
                // Scale to fit available height, keep full width
                const drawH = availH;
                const drawW = drawH / ratio;
                pdf.addImage(imgData, 'PNG', margin, y, drawW, drawH);
                y += drawH;
            } else {
                pdf.addImage(imgData, 'PNG', margin, y, imgW, imgH);
                y += imgH;
            }
        }

        // Tail sections (Profiler / PubSub — after charts, start new page)
        if (tailSections.length > 0 && charts.length > 0) {
            pdf.addPage();
            fillBg();
            y = margin;
        }
        for (const line of tailSections) {
            if (line.startsWith('====')) {
                continue;
            }
            const isSectionTitle = line.trim() === 'PROFILER' || line.trim() === 'PUBSUB';
            if (isSectionTitle) {
                checkPage(14);
                y += 4;
                pdf.setFontSize(14);
                pdf.setTextColor(headerColor);
                pdf.text(line.trim(), margin, y);
                y += 8;
                continue;
            }
            if (line === '') {
                y += 2;
                continue;
            }
            checkPage(4);
            pdf.setTextColor(textColor);
            pdf.setFontSize(8);
            const wrapped = pdf.splitTextToSize(line, contentW);
            for (const wl of wrapped) {
                checkPage(4);
                pdf.text(wl, margin, y);
                y += 3.5;
            }
        }

        return pdf.output('blob') as unknown as Blob;
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
                action: 'monitor/info',
                payload: {},
            });
            const data: MonitorSnapshot = response.data;
            this.current = data;
            this.isCluster = this.state.connection()?.cluster === true;
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

        // uPlot CSS is loaded globally via angular.json styles[]

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
                    values: (_: any, ticks: number[]) => ticks.map(t => formatTime(t * 1000)),
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
                { label: this.strings().label?.time, value: (_: any, rawValue: number) => rawValue ? formatTime(rawValue * 1000) : '' },
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
                { label: s.memory, stroke: colors.primary, width: 2, fill: colors.primary + '15' },
                { label: 'RSS', stroke: colors.accent, width: 2 },
            ]),
            [data.timestamps, data.memUsed, data.memRss],
            memEl,
        );

        this.opsPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(opsEl), [
                { label: s.opsPerSec, stroke: colors.primary, width: 2, fill: colors.primary + '20' },
            ]),
            [data.timestamps, data.ops],
            opsEl,
        );

        this.clientsPlot = new this.uPlot(
            this.createOpts(this.getChartWidth(cliEl), [
                { label: s.clients, stroke: colors.primary, width: 2 },
                { label: s.blocked, stroke: colors.warn, width: 2 },
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
