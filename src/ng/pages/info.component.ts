import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { I18nService } from '../services/i18n.service';
import { ShortcutsService } from '../services/shortcuts.service';
import { SocketService } from '../services/socket.service';
import { P3xrAccordionComponent } from '../components/p3xr-accordion.component';
import { RedisStateService } from '../services/redis-state.service';

@Component({
    selector: 'p3xr-info',
    standalone: true,
    imports: [
        CommonModule, MatListModule, MatDividerModule, MatIconModule,
        P3xrAccordionComponent,
    ],
    template: `
        <!-- Keyboard Shortcuts (Electron only) -->
        @if (isElectron) {
            <p3xr-ng-accordion [title]="strings().label?.keyboardShortcuts" accordionKey="info-shortcuts">
                <div content>
                    <mat-list>
                        @for (shortcut of shortcutsList; track shortcut.key) {
                            <mat-list-item>
                                <div class="p3xr-settings-pair-row">
                                    <div class="p3xr-settings-row-label">
                                        <kbd class="p3xr-kbd">{{ shortcut.key }}</kbd>
                                    </div>
                                    <div class="p3xr-settings-row-value">{{ shortcut.description }}</div>
                                </div>
                            </mat-list-item>
                            <mat-divider></mat-divider>
                        }
                    </mat-list>
                </div>
            </p3xr-ng-accordion>

            <br />
        }

        <!-- About -->
        <p3xr-ng-accordion [title]="strings().label?.about" accordionKey="info-about">
            <div content>
                <mat-list>
                    <mat-list-item>
                        <div class="p3xr-settings-pair-row">
                            <div class="p3xr-settings-row-label">{{ strings().label?.version }}</div>
                            <div class="p3xr-settings-row-value">{{ version }}</div>
                        </div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                    @if (isConnected) {
                        <mat-list-item>
                            <div class="p3xr-settings-pair-row">
                                <div class="p3xr-settings-row-label">{{ strings().label?.redisVersion }}</div>
                                <div class="p3xr-settings-row-value">{{ redisVersion }}</div>
                            </div>
                        </mat-list-item>
                        <mat-divider></mat-divider>
                    }
                    @if (isConnected && modules.length > 0) {
                        <mat-list-item>
                            <div class="p3xr-settings-pair-row">
                                <div class="p3xr-settings-row-label">{{ strings().label?.modules }}</div>
                                <div class="p3xr-settings-row-value">{{ modules.join(', ') }}</div>
                            </div>
                        </mat-list-item>
                        <mat-divider></mat-divider>
                    }
                    <mat-list-item>
                        <div class="p3xr-settings-pair-row">
                            <div class="p3xr-settings-row-label">GitHub</div>
                            <div class="p3xr-settings-row-value">
                                <a href="https://github.com/patrikx3/redis-ui" target="_blank">patrikx3/redis-ui</a>
                            </div>
                        </div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                    <mat-list-item>
                        <div class="p3xr-settings-pair-row">
                            <div class="p3xr-settings-row-label">{{ strings().title?.donate }}</div>
                            <div class="p3xr-settings-row-value">
                                <a href="https://www.paypal.me/patrikx3" target="_blank">PayPal</a>
                            </div>
                        </div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                    <mat-list-item>
                        <div class="p3xr-settings-pair-row">
                            <div class="p3xr-settings-row-label">{{ strings().intention?.githubChangelog }}</div>
                            <div class="p3xr-settings-row-value">
                                <a href="https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log" target="_blank">change-log.md</a>
                            </div>
                        </div>
                    </mat-list-item>
                </mat-list>
            </div>
        </p3xr-ng-accordion>

        <br />

        <!-- Supported Languages -->
        <p3xr-ng-accordion [title]="strings().label?.supportedLanguages + languageList.length + ')'" accordionKey="info-languages">
            <div content>
                <mat-list>
                    @for (lang of languageList; track lang.code) {
                        <mat-list-item>
                            <div class="p3xr-settings-pair-row">
                                <div class="p3xr-settings-row-label">
                                    <kbd class="p3xr-kbd p3xr-kbd-small">{{ lang.code }}</kbd>
                                </div>
                                <div class="p3xr-settings-row-value">{{ lang.name }}</div>
                            </div>
                        </mat-list-item>
                        <mat-divider></mat-divider>
                    }
                </mat-list>
            </div>
        </p3xr-ng-accordion>
    `,
    styles: [`
        :host { display: block; padding-bottom: 64px; }
    `],
})
export class InfoComponent implements OnInit, OnDestroy {
    strings;
    isElectron: boolean;
    shortcutsList: Array<{ key: string; description: string }> = [];

    get version(): string { return this.state.version() || ''; }
    get isConnected(): boolean { return !!this.state.connection(); }
    get redisVersion(): string { return this.state.info()?.server?.redis_version || '-'; }
    get modules(): string[] { return (this.state.modules() || []).map((m: any) => m.name); }

    get languageList(): Array<{ code: string; name: string }> {
        const langObj = this.strings()?.language || {};
        return Object.keys(langObj)
            .sort()
            .map(code => ({ code, name: langObj[code] }));
    }

    private unsubs: Array<() => void> = [];

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(ShortcutsService) private shortcutsService: ShortcutsService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(RedisStateService) private state: RedisStateService,
    ) {
        this.strings = this.i18n.strings;
        this.isElectron = this.shortcutsService.isEnabled();
        this.shortcutsList = this.shortcutsService.getShortcutsWithDescriptions();
    }

    ngOnInit(): void {
        const sub = this.socket.redisDisconnected$.subscribe(() => {});
        this.unsubs.push(() => sub.unsubscribe());
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }
}
