import { Input, Directive, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { MainCommandService } from '../../../services/main-command.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';
import { RedisStateService } from '../../../services/redis-state.service';
import { SettingsService } from '../../../services/settings.service';

/**
 * Shared base for all key type renderers.
 * Provides common inputs, dialog calls, clipboard, download, event broadcasting,
 * and responsive breakpoint (isGtSm for button text visibility).
 */
@Directive()
export abstract class KeyTypeBase {
    @Input() p3xrResponse: any;
    @Input() p3xrValue: any;
    @Input() p3xrValueBuffer: any;
    @Input() p3xrKey: string = '';

    /** >960px — show button text labels (matching AngularJS hide-xs hide-sm) */
    isGtSm = window.innerWidth >= 960;

    /** Value display format */
    @Input() valueFormat: 'raw' | 'json' | 'hex' | 'base64' = 'raw';

    protected readonly unsubFns: Array<() => void> = [];

    constructor(
        protected readonly i18n: I18nService,
        protected readonly socket: SocketService,
        protected readonly common: CommonService,
        protected readonly jsonViewDialog: JsonViewDialogService,
        protected readonly keyNewOrSetDialog: KeyNewOrSetDialogService,
        protected readonly breakpointObserver: BreakpointObserver,
        protected readonly cmd: MainCommandService,
        protected readonly cdr: ChangeDetectorRef,
        protected readonly redisState: RedisStateService,
        protected readonly settingsService: SettingsService,
    ) {
        const sub = this.breakpointObserver.observe('(min-width: 960px)').subscribe(r => {
            this.isGtSm = r.matches;
            this.cdr.markForCheck();
        });
        this.unsubFns.push(() => sub.unsubscribe());
    }

    destroyBase(): void {
        this.unsubFns.forEach(fn => fn());
    }

    get strings() { return this.i18n.strings(); }
    get isReadonly(): boolean { return this.redisState.connection()?.readonly === true; }
    get maxValueDisplay(): number { return this.settingsService.maxValueDisplay() ?? 1024; }
    get maxValueAsBuffer(): number { return this.settingsService.maxValueAsBuffer; }

    async copy(value: any): Promise<void> {
        await this.settingsService.clipboard(value);
        this.common.toast(this.strings?.status?.dataCopied || 'Copied');
    }

    downloadBuffer(buffer: any, filename?: string): void {
        const blob = new Blob([buffer]);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || `${this.p3xrKey}.bin`;
        a.click();
        URL.revokeObjectURL(url);
    }

    async showJson(value: any, event?: Event): Promise<void> {
        try {
            await this.jsonViewDialog.show({ value, $event: event });
        } catch { /* cancelled */ }
    }

    protected refreshKey(): void {
        this.cmd.refreshKey$.next();
    }

    protected gtag(page: string): void {
        try {
            if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('config', this.settingsService.googleAnalytics, { page_path: page });
            }
        } catch { /* noop */ }
    }

    protected truncateDisplay(value: any): string {
        if (value == null) return '';
        const str = String(value);
        if (this.maxValueDisplay <= 0) return str;
        if (str.length > this.maxValueDisplay) {
            return str.substring(0, this.maxValueDisplay);
        }
        return str;
    }

    protected isTruncated(value: any): boolean {
        if (value == null || this.maxValueDisplay <= 0) return false;
        return String(value).length > this.maxValueDisplay;
    }

    formatValue(value: any): string {
        if (value == null) return '';
        const str = String(value);
        switch (this.valueFormat) {
            case 'json':
                try {
                    return JSON.stringify(JSON.parse(str), null, 2);
                } catch {
                    return str;
                }
            case 'base64': {
                const raw = new TextEncoder().encode(str);
                let binary = '';
                for (let i = 0; i < raw.length; i++) {
                    binary += String.fromCharCode(raw[i]);
                }
                return btoa(binary);
            }
            default:
                return str;
        }
    }


    protected isBufferValue(value: any): boolean {
        return typeof value === 'object' && value !== null && value.byteLength !== undefined;
    }

    protected prettyBytes(length: number): string {
        return this.settingsService.prettyBytes(length) ?? `${length} bytes`;
    }
}
