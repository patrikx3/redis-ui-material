import { Component, Inject, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, NgZone, ViewEncapsulation, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { P3xrAccordionComponent } from '../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../components/p3xr-button.component';
import { I18nService } from '../../services/i18n.service';
import { MonitoringDataService, ProfilerEntry } from '../monitoring/monitoring-data.service';
import { RedisStateService } from '../../services/redis-state.service';

@Component({
    selector: 'p3xr-profiler',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, P3xrAccordionComponent, P3xrButtonComponent],
    templateUrl: './profiler.component.html',
    encapsulation: ViewEncapsulation.None,
    styles: [`
        p3xr-profiler {
            display: block;
            color: var(--mat-app-text-color, inherit);
        }
        .p3xr-profiler-output {
            font-family: 'Roboto Mono', monospace;
            font-size: 13px;
            overflow-y: auto;
            word-break: break-all;
            white-space: normal;
        }
        .p3xr-profiler-entry {
            padding: 6px 16px;
            word-break: break-all;
            white-space: normal;
        }
        .p3xr-profiler-entry-odd {
            background-color: var(--p3xr-list-odd-bg);
        }
    `],
})
export class ProfilerComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('profilerOutput') profilerOutputRef?: ElementRef<HTMLDivElement>;

    strings;

    private readonly maxDomEntries = 66;
    private entryIndex = 0;
    private sub?: Subscription;
    private resizeFn: (() => void) | null = null;

    constructor(
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(MonitoringDataService) private readonly data: MonitoringDataService,
        @Inject(RedisStateService) private readonly state: RedisStateService,
        @Inject(NgZone) private readonly ngZone: NgZone,
    ) {
        this.strings = this.i18n.strings;

        // Re-run height calculation when the global console drawer opens/closes
        effect(() => {
            this.state.consoleDrawerOpen();
            setTimeout(() => this.recalcHeight(), 160); // after the 150ms drawer animation
        });
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.renderExistingEntries();
            this.sub = this.data.profilerEntry$.subscribe(entry => this.renderEntry(entry));
        });
    }

    ngAfterViewInit(): void {
        document.body.classList.add('p3xr-no-main-scroll');
        this.ngZone.runOutsideAngular(() => {
            this.resizeFn = () => this.recalcHeight();
            window.addEventListener('resize', this.resizeFn);
            setTimeout(() => {
                this.recalcHeight();
                const el = this.profilerOutputRef?.nativeElement;
                if (el) el.scrollTop = el.scrollHeight;
            }, 50);
        });
    }

    ngOnDestroy(): void {
        document.body.classList.remove('p3xr-no-main-scroll');
        this.sub?.unsubscribe();
        if (this.resizeFn) window.removeEventListener('resize', this.resizeFn);
    }

    clearProfiler(): void {
        this.data.clearProfiler();
        this.entryIndex = 0;
        if (this.profilerOutputRef?.nativeElement) {
            this.profilerOutputRef.nativeElement.innerHTML = '';
        }
    }

    exportProfiler(): void {
        const connName = this.state.connection()?.name || 'redis';
        const lines = this.data.profilerEntries.map(e => `${e.fullTimestamp} [${e.database} ${e.source}] ${e.command}`);
        this.downloadText(lines.join('\n'), `${connName}-profiler-export.txt`);
    }

    private renderExistingEntries(): void {
        const el = this.profilerOutputRef?.nativeElement;
        if (!el) return;
        const entries = this.data.profilerEntries;
        const start = Math.max(0, entries.length - this.maxDomEntries);
        this.entryIndex = start;
        for (let i = start; i < entries.length; i++) {
            this.renderEntry(entries[i]);
        }
        el.scrollTop = el.scrollHeight;
    }

    private renderEntry(entry: ProfilerEntry): void {
        const el = this.profilerOutputRef?.nativeElement;
        if (!el) return;
        const odd = this.entryIndex++ % 2 === 1 ? ' p3xr-profiler-entry-odd' : '';
        el.insertAdjacentHTML('beforeend', `<div class="p3xr-profiler-entry${odd}"><span style="opacity:0.5">${this.escapeHtml(entry.displayTime)}</span> <span style="opacity:0.7">[${this.escapeHtml(entry.database)} ${this.escapeHtml(entry.source)}]</span> ${this.escapeHtml(entry.command)}</div>`);
        while (el.children.length > this.maxDomEntries) {
            el.removeChild(el.firstChild!);
        }
        el.scrollTop = el.scrollHeight;
    }

    private recalcHeight(): void {
        const el = this.profilerOutputRef?.nativeElement;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const footerHeight = document.getElementById('p3xr-layout-footer-container')?.offsetHeight || 48;
        const drawerHeight = this.getDrawerHeight();
        const available = window.innerHeight - rect.top - footerHeight - drawerHeight - 8;
        el.style.height = Math.max(available, 100) + 'px';
    }

    private getDrawerHeight(): number {
        const v = getComputedStyle(document.documentElement)
            .getPropertyValue('--p3xr-console-drawer-height-active').trim();
        if (v.endsWith('vh')) return Math.round((parseFloat(v) / 100) * window.innerHeight);
        if (v.endsWith('px')) return parseFloat(v);
        return 0;
    }

    private escapeHtml(str: string): string {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
}
