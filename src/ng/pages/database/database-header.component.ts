import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreakpointObserver } from '@angular/cdk/layout';

import { I18nService } from '../../services/i18n.service';
import { MainCommandService } from '../../services/main-command.service';
import { SocketService } from '../../services/socket.service';

declare const p3xr: any;

@Component({
    selector: 'p3xr-database-header',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    template: `
        <mat-toolbar class="p3xr-accordion-toolbar p3xr-database-header-toolbar" id="p3xr-database-header">
            <div class="p3xr-database-header-tools">
                @if (!isXs) {
                    <h2 class="p3xr-database-header-title">
                        <a (click)="goStatistics()" class="p3xr-database-header-link">
                            {{ strings().intention?.main || 'P3X Redis UI' }}
                        </a>
                    </h2>
                }
                @if (hasConnection) {
                    @if (!isCluster) {
                        <div class="p3xr-database-header-db-selector">
                            <span class="p3xr-database-header-db-label">DB:</span>
                            <mat-form-field class="p3xr-database-header-db-field" subscriptSizing="dynamic">
                                <mat-select [value]="currentDatabase" (selectionChange)="selectDatabase($event.value)"
                                    [attr.aria-label]="strings().form?.main?.label?.database || 'Database'"
                                    panelClass="p3xr-database-db-select-container">
                                    <mat-select-trigger>
                                        <mat-icon class="p3xr-db-indicator">{{ hasKeys(currentDatabase) ? 'radio_button_checked' : 'radio_button_unchecked' }}</mat-icon>
                                        {{ currentDatabase }}
                                    </mat-select-trigger>
                                    @for (dbIndex of databaseIndexes; track dbIndex) {
                                        <mat-option [value]="dbIndex">
                                            <mat-icon class="p3xr-db-indicator">{{ hasKeys(dbIndex) ? 'radio_button_checked' : 'radio_button_unchecked' }}</mat-icon>
                                            {{ dbIndex }}
                                        </mat-option>
                                    }
                                </mat-select>
                            </mat-form-field>
                        </div>
                    }

                    @if (!isReadonly) {
                        @if (isWide) {
                            <button mat-button (click)="save()">
                                <mat-icon>save</mat-icon>
                                <span>{{ strings().intention?.save || 'Save' }}</span>
                            </button>
                        } @else {
                            <button mat-icon-button (click)="save()"
                                [matTooltip]="strings().intention?.save || 'Save'"
                                matTooltipPosition="below">
                                <mat-icon>save</mat-icon>
                            </button>
                        }
                    }

                    @if (isWide) {
                        <button mat-button (click)="goStatistics()">
                            <mat-icon>show_chart</mat-icon>
                            <span>{{ strings().intention?.statistics || 'Statistics' }}</span>
                        </button>
                    } @else {
                        <button mat-icon-button (click)="goStatistics()"
                            [matTooltip]="strings().intention?.statistics || 'Statistics'"
                            matTooltipPosition="below">
                            <mat-icon>show_chart</mat-icon>
                        </button>
                    }

                    @if (isWide) {
                        <button mat-button (click)="refresh()">
                            <mat-icon>refresh</mat-icon>
                            <span>{{ strings().intention?.refresh || 'Refresh' }}</span>
                        </button>
                    } @else {
                        <button mat-icon-button (click)="refresh()"
                            [matTooltip]="strings().intention?.refresh || 'Refresh'"
                            matTooltipPosition="below">
                            <mat-icon>refresh</mat-icon>
                        </button>
                    }
                }
            </div>
        </mat-toolbar>
    `,
    styles: [`
        :host { display: block; }
        .p3xr-database-header-toolbar {
            height: 48px;
            min-height: 48px;
            max-height: 48px;
            padding: 0 8px 0 16px;
            border-radius: 4px 4px 0 0;
        }
        .p3xr-database-header-tools {
            display: flex;
            align-items: center;
            width: 100%;
            height: 48px;
        }
        .p3xr-database-header-title {
            flex: 1;
            font-size: 20px;
            font-weight: 400;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .p3xr-database-header-link {
            cursor: pointer;
            text-decoration: none;
            color: inherit;
        }
        .p3xr-database-header-db-selector {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
        }
        .p3xr-database-header-db-label {
            font-size: 14px;
            font-weight: bold;
            margin-right: 2px;
        }
        .p3xr-database-header-db-field {
            width: 80px;
            position: relative;
            top: 1px;
        }
        .p3xr-database-header-db-field ::ng-deep .mdc-text-field {
            background: transparent !important;
            padding: 0 8px !important;
        }
        .p3xr-database-header-db-field ::ng-deep .mat-mdc-form-field-subscript-wrapper {
            display: none;
        }
        .p3xr-database-header-db-field ::ng-deep .mdc-line-ripple {
            display: none;
        }
        .p3xr-database-header-db-field ::ng-deep .mat-mdc-select-arrow-wrapper {
            padding-left: 0;
        }
        .p3xr-database-header-db-field ::ng-deep .mat-mdc-select-trigger {
            display: flex;
            align-items: center;
        }
        .p3xr-database-header-db-field ::ng-deep .mat-mdc-select-value {
            display: flex;
            align-items: center;
        }
        .p3xr-database-header-db-field ::ng-deep .mat-mdc-select-value-text {
            display: flex;
            align-items: center;
        }
        .p3xr-database-header-db-field ::ng-deep mat-select-trigger {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .p3xr-database-header-db-field ::ng-deep mat-select-trigger .p3xr-db-indicator {
            font-size: 18px !important;
            width: 18px !important;
            height: 18px !important;
            line-height: 18px !important;
            overflow: hidden;
            flex-shrink: 0;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatabaseHeaderComponent implements OnInit, OnDestroy {

    readonly strings;

    isXs = false;
    isWide = true;
    hasConnection = false;
    isCluster = false;
    isReadonly = false;
    currentDatabase: number = 0;
    databaseIndexes: number[] = [];
    private keyspaceDatabases: Record<number, boolean> = {};

    private readonly unsubs: Array<() => void> = [];

    constructor(
        @Inject(BreakpointObserver) private readonly breakpointObserver: BreakpointObserver,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.syncFromGlobal();

        // Subscribe to socket events for reactive state updates
        const sub1 = this.socket.connections$.subscribe(() => this.syncFromGlobal());
        const sub2 = this.socket.redisDisconnected$.subscribe(() => this.syncFromGlobal());
        const sub3 = this.socket.licenseUpdate$.subscribe(() => this.syncFromGlobal());
        const sub4 = this.socket.stateChanged$.subscribe(() => this.syncFromGlobal());
        this.unsubs.push(() => { sub1.unsubscribe(); sub2.unsubscribe(); sub3.unsubscribe(); sub4.unsubscribe(); });

        const xsSub = this.breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
            this.isXs = result.matches;
            this.cdr.markForCheck();
        });
        this.unsubs.push(() => xsSub.unsubscribe());

        const wideSub = this.breakpointObserver.observe('(min-width: 720px)').subscribe(result => {
            this.isWide = result.matches;
            this.cdr.markForCheck();
        });
        this.unsubs.push(() => wideSub.unsubscribe());
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }

    hasKeys(dbIndex: number): boolean {
        return !!this.keyspaceDatabases[dbIndex];
    }

    selectDatabase(dbIndex: number): void {
        this.currentDatabase = dbIndex;
        this.cmd.selectDatabase(dbIndex).then(() => {
            this.syncFromGlobal();
        });
        // Force re-render after mat-select closes
        setTimeout(() => this.cdr.detectChanges());
    }

    save(): void {
        this.cmd.save();
    }

    goStatistics(): void {
        this.cmd.statistics();
    }

    refresh(): void {
        this.cmd.refresh({ withoutParent: false });
    }

    private syncFromGlobal(): void {
        const state = p3xr?.state;
        this.hasConnection = state?.connection !== undefined;
        this.isCluster = state?.connection?.cluster === true;
        this.isReadonly = state?.connection?.readonly === true;
        this.databaseIndexes = state?.databaseIndexes ?? [];
        this.keyspaceDatabases = state?.info?.keyspaceDatabases ?? {};
        this.currentDatabase = this.cmd.currentDatabase;
        this.cdr.detectChanges();
    }

}
