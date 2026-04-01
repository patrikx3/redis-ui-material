import { Input, Directive, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { MainCommandService } from '../../../services/main-command.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';

declare const p3xr: any;

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
    get isReadonly(): boolean { return p3xr?.state?.connection?.readonly === true; }
    get hasProOrEnterprise(): boolean { return p3xr?.state?.hasProOrEnterpriseJsonBinary === true; }
    get maxValueDisplay(): number { return p3xr?.settings?.maxValueDisplay ?? 1024; }
    get maxValueAsBuffer(): number { return p3xr?.settings?.maxValueAsBuffer ?? 1024; }

    async copy(value: any): Promise<void> {
        await p3xr.clipboard({ value });
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
                (window as any).gtag('config', p3xr?.settings?.googleAnalytics, { page_path: page });
            }
        } catch { /* noop */ }
    }

    protected truncateDisplay(value: any): string {
        if (value == null) return '';
        const str = String(value);
        // maxValueDisplay: -1 or 0 means show all, >0 means truncate at that length
        if (this.maxValueDisplay > 0 && str.length > this.maxValueDisplay) {
            return str.substring(0, this.maxValueDisplay) + '...';
        }
        return str;
    }

    protected isBufferValue(value: any): boolean {
        return typeof value === 'object' && value !== null && value.byteLength !== undefined;
    }

    protected prettyBytes(length: number): string {
        return p3xr?.settings?.prettyBytes?.(length) ?? `${length} bytes`;
    }
}
