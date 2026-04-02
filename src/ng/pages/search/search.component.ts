import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, NgZone, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';

import { I18nService } from '../../services/i18n.service';
import { SocketService } from '../../services/socket.service';
import { CommonService } from '../../services/common.service';
import { P3xrAccordionComponent } from '../../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../../components/p3xr-button.component';

declare const p3xr: any;

require('./search.component.scss');

@Component({
    selector: 'p3xr-search',
    standalone: true,
    imports: [
        CommonModule, FormsModule,
        MatIconModule, MatButtonModule, MatTooltipModule,
        MatDividerModule, MatListModule, MatSelectModule,
        MatFormFieldModule, MatInputModule,
        P3xrAccordionComponent, P3xrButtonComponent,
    ],
    templateUrl: './search.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
    strings;
    indexes: string[] = [];
    selectedIndex = '';
    query = '*';
    offset = 0;
    limit = 20;
    total = 0;
    results: any[] = [];
    indexInfo: any = null;
    searching = false;
    searchDone = false;
    isReadonly = false;
    isGtSm = true;

    aiLoading = false;

    // Index creation
    newIndexName = '';
    newIndexPrefix = '';
    newIndexFields: Array<{ name: string; type: string; sortable: boolean }> = [
        { name: '', type: 'TEXT', sortable: false },
    ];

    private unsubs: Array<() => void> = [];

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
        @Inject(NgZone) private ngZone: NgZone,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.isReadonly = p3xr?.state?.connection?.readonly === true;
        const sub960 = this.breakpointObserver.observe('(min-width: 960px)').subscribe(r => {
            this.isGtSm = r.matches;
            this.cdr.markForCheck();
        });
        this.unsubs.push(() => sub960.unsubscribe());
        this.loadIndexes();

        const sub = this.socket.stateChanged$.subscribe(() => {
            this.isReadonly = p3xr?.state?.connection?.readonly === true;
            this.loadIndexes();
        });
        this.unsubs.push(() => sub.unsubscribe());
    }

    async searchAndRefreshInfo(): Promise<void> {
        await Promise.all([
            this.search(),
            this.loadIndexInfo(),
        ]);
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }

    get pages(): number {
        return Math.ceil(this.total / this.limit);
    }

    get currentPage(): number {
        return Math.floor(this.offset / this.limit) + 1;
    }

    async loadIndexes(): Promise<void> {
        try {
            const response = await this.socket.request({ action: 'search-list', payload: {} });
            this.indexes = response.data;
            if (this.indexes.length > 0 && !this.selectedIndex) {
                this.selectedIndex = this.indexes[0];
                this.loadIndexInfo();
            }
            this.cdr.markForCheck();
        } catch { /* ignore */ }
    }

    async search(): Promise<void> {
        if (!this.selectedIndex || !this.query) return;
        this.searching = true;
        this.cdr.markForCheck();
        try {
            const response = await this.socket.request({
                action: 'search-query',
                payload: {
                    index: this.selectedIndex,
                    query: this.query,
                    offset: this.offset,
                    limit: this.limit,
                },
            });
            this.total = response.data.total;
            this.results = response.data.docs;
        } catch (e) {
            this.common.generalHandleError(e);
            this.results = [];
            this.total = 0;
        } finally {
            this.searching = false;
            this.searchDone = true;
            this.cdr.markForCheck();
        }
    }

    pageAction(action: string): void {
        switch (action) {
            case 'first': this.offset = 0; break;
            case 'prev': this.offset = Math.max(0, this.offset - this.limit); break;
            case 'next': this.offset = Math.min((this.pages - 1) * this.limit, this.offset + this.limit); break;
            case 'last': this.offset = (this.pages - 1) * this.limit; break;
        }
        this.search();
    }

    async loadIndexInfo(): Promise<void> {
        if (!this.selectedIndex) return;
        try {
            const response = await this.socket.request({
                action: 'search-index-info',
                payload: { index: this.selectedIndex },
            });
            this.indexInfo = response.data;
            this.cdr.markForCheck();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async dropIndex(): Promise<void> {
        if (!this.selectedIndex) return;
        try {
            await this.common.confirm({
                message: this.strings().confirm?.dropIndex || 'Are you sure to drop this index?',
            });
            await this.socket.request({
                action: 'search-index-drop',
                payload: { index: this.selectedIndex },
            });
            this.common.toast({ message: this.strings().status?.indexDropped || 'Index dropped' });
            this.selectedIndex = '';
            this.results = [];
            this.total = 0;
            this.searchDone = false;
            this.indexInfo = null;
            await this.loadIndexes();
        } catch (e) {
            if (e !== undefined) this.common.generalHandleError(e);
        }
    }

    addField(): void {
        this.newIndexFields.push({ name: '', type: 'TEXT', sortable: false });
    }

    async confirmRemoveField(index: number): Promise<void> {
        try {
            const label = this.strings().intention?.delete || 'Delete';
            await this.common.confirm({ message: label + '?' });
            this.newIndexFields.splice(index, 1);
            this.newIndexFields = [...this.newIndexFields];
            this.cdr.markForCheck();
        } catch (e) {
            if (e !== undefined) this.common.generalHandleError(e);
        }
    }

    async createIndex(): Promise<void> {
        if (!this.newIndexName.trim()) return;
        const schema = this.newIndexFields.filter(f => f.name.trim());
        if (schema.length === 0) return;
        try {
            await this.socket.request({
                action: 'search-index-create',
                payload: {
                    name: this.newIndexName.trim(),
                    prefix: this.newIndexPrefix.trim() || undefined,
                    schema,
                },
            });
            this.common.toast({ message: this.strings().status?.indexCreated || 'Index created' });
            this.newIndexName = '';
            this.newIndexPrefix = '';
            this.newIndexFields = [{ name: '', type: 'TEXT', sortable: false }];
            await this.loadIndexes();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    async handleSearchEnter(): Promise<void> {
        const q = (this.query || '').trim();

        // Explicit ai: prefix
        if (/^ai:\s*/i.test(q)) {
            await this.handleAiQuery(q.replace(/^ai:\s*/i, '').trim());
            return;
        }

        // Try normal search first
        try {
            await this.searchAndRefreshInfo();
        } catch (e: any) {
            // If search failed and query looks like natural language, try AI
            if (q.length > 2 && q !== '*' && /\s/.test(q)) {
                p3xr.ui.overlay.show();
                try {
                    await this.handleAiQuery(q);
                } finally {
                    p3xr.ui.overlay.hide();
                }
            }
        }
    }

    private async handleAiQuery(prompt: string): Promise<void> {
        if (!prompt) return;

        this.aiLoading = true;
        this.cdr.markForCheck();
        try {
            let indexSchema: any = undefined;
            if (this.selectedIndex && this.indexInfo) {
                indexSchema = this.indexInfo;
            }

            const response = await this.socket.request({
                action: 'ai-redis-query',
                payload: {
                    prompt,
                    context: {
                        indexes: this.indexes,
                        schema: indexSchema,
                    },
                },
            });

            this.query = response.command || '*';
            if (response.explanation) {
                this.common.toast({ message: response.explanation });
            }
            this.offset = 0;
            await this.searchAndRefreshInfo();
        } catch (e: any) {
            this.common.generalHandleError(e);
        } finally {
            this.aiLoading = false;
            this.cdr.markForCheck();
        }
    }

    getDocKeys(doc: any): string[] {
        return Object.keys(doc).filter(k => k !== '_key');
    }
}
