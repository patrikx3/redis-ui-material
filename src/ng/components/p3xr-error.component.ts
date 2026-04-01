import { Component, Input, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { P3xrButtonComponent } from './p3xr-button.component';
import { I18nService } from '../services/i18n.service';
import { RedisStateService } from '../services/redis-state.service';

/**
 * Error page component — Angular standalone replacement for AngularJS p3xrError.
 *
 * Displays Socket.IO connection error with a reload button.
 * During hybrid mode, receives $stateParams.error via the downgraded binding.
 *
 * AngularJS usage:  <p3xr-error> (routed via UI-Router)
 * Downgraded usage: <p3xr-ng-error [error]="$stateParams.error">
 */
@Component({
    selector: 'p3xr-ng-error',
    standalone: true,
    imports: [CommonModule, MatToolbarModule, P3xrButtonComponent],
    template: `
        <mat-toolbar class="p3xr-mat-layout">
            <span style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                {{ strings().title?.socketioConnectError || 'Connection Error' }}
            </span>
        </mat-toolbar>
        <div style="padding: 16px;">
            <p3xr-ng-button
                (click)="reload()"
                [label]="strings().intention?.reload || 'Reload'"
                faIcon="fas fa-redo">
            </p3xr-ng-button>
            <br /><br />
            {{ error?.message }}
            <br /><br />
            <div id="web-development" style="text-align: center;">
                <a href="https://corifeus.hu/hu" style="opacity: 0.5; text-decoration: none;"><span lang="hu">Webfejlesztés</span></a><br />
                <a href="https://corifeus.hu/en" style="opacity: 0.5; text-decoration: none;"><span lang="en">Web Development</span></a><br />
                <a href="https://corifeus.hu/de" style="opacity: 0.5; text-decoration: none;"><span lang="de">Webentwicklung</span></a><br />
                <a href="https://corifeus.hu/es" style="opacity: 0.5; text-decoration: none;"><span lang="es">Desarrollo Web</span></a><br />
                <a href="https://corifeus.hu/fr" style="opacity: 0.5; text-decoration: none;"><span lang="fr">Développement Web</span></a><br />
                <a href="https://corifeus.hu/ja" style="opacity: 0.5; text-decoration: none;"><span lang="jp">ウェブ開発</span></a><br />
                <a href="https://corifeus.hu/it" style="opacity: 0.5; text-decoration: none;"><span lang="it">Sviluppo Web</span></a><br />
                <a href="https://corifeus.hu/ru" style="opacity: 0.5; text-decoration: none;"><span lang="ru">Веб-разработка</span></a><br />
                <a href="https://corifeus.hu/zn" style="opacity: 0.5; text-decoration: none;"><span lang="zh">网页开发</span></a>
            </div>
        </div>
    `,
})
export class P3xrErrorComponent implements OnInit {
    @Input() error: any;

    strings;

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(RedisStateService) private state: RedisStateService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.state.failed.set(true);
    }

    reload(): void {
        location.href = '/';
    }
}
