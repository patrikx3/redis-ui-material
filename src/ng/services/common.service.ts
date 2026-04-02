import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import type { ConfirmDialogData } from '../components/confirm-dialog.component';
import { createDialogPopupSettings } from '../dialogs/dialog-popup';
import { I18nService } from './i18n.service';
import { RedisParserService } from './redis-parser.service';
import { RedisStateService } from './redis-state.service';
import { SettingsService } from './settings.service';
import { TreeBuilderService } from './tree-builder.service';

declare const p3xr: any;

/**
 * Common service — Angular replacement for AngularJS p3xrCommon factory.
 *
 * Provides:
 * - toast(): notification via MatSnackBar (replaces $mdToast)
 * - confirm(): confirmation dialog via MatDialog (replaces $mdDialog.confirm())
 * - alert(): alert dialog via MatDialog (replaces $mdDialog.alert())
 * - generalHandleError(): centralized error handling with i18n code lookup
 * - loadRedisInfoResponse(): parses Redis info and populates state
 *
 * During hybrid mode, both this service and the AngularJS p3xrCommon factory coexist.
 * New Angular components use this service; existing AngularJS components keep using the factory.
 */
@Injectable({ providedIn: 'root' })
export class CommonService {

    readonly treeExpandAll$ = new Subject<void>();
    readonly treeCollapseAll$ = new Subject<void>();
    readonly treeExpandToLevel$ = new Subject<number>();

    private lastResponse: any;

    constructor(
        @Inject(MatSnackBar) private snackBar: MatSnackBar,
        @Inject(MatDialog) private dialog: MatDialog,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(RedisParserService) private redisParser: RedisParserService,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(SettingsService) private settings: SettingsService,
        @Inject(TreeBuilderService) private treeBuilder: TreeBuilderService,
    ) {}

    /**
     * Show a toast notification.
     * Replaces AngularJS $mdToast.
     */
    toast(options: string | { message: string; hideDelay?: number }): void {
        if (typeof options === 'string') {
            options = { message: options };
        }
        const ref = this.snackBar.open(options.message, 'x', {
            duration: options.hideDelay || 5000,
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
        });
        ref.onAction().subscribe(() => ref.dismiss());
    }

    /**
     * Show a confirmation dialog with OK and Cancel buttons.
     * Returns a Promise that resolves on OK and rejects on Cancel.
     * Replaces AngularJS $mdDialog.confirm().
     */
    async confirm(options: {
        message: string;
        title?: string;
        event?: any;
        disableCancel?: boolean;
        panelClass?: string | string[];
        autoFocus?: boolean;
    }): Promise<void> {
        const strings = this.i18n.strings();
        const isAlert = options.hasOwnProperty('disableCancel') && options.disableCancel;

        const data: ConfirmDialogData = {
            title: options.title || (isAlert ? (strings.confirm?.info || 'Info') : (strings.confirm?.title || 'Confirm')),
            message: options.message,
            disableCancel: isAlert,
            okButton: isAlert ? (strings.intention?.ok || 'OK') : (strings.intention?.sure || 'Sure'),
            cancelButton: strings.intention?.cancel || 'Cancel',
        };

        const { ConfirmDialogComponent } = await import(
            /* webpackChunkName: "dialog-confirm" */
            '../components/confirm-dialog.component'
        );
        const dialogRef = this.dialog.open(ConfirmDialogComponent, createDialogPopupSettings({
            data,
            autoFocus: options.autoFocus ?? true,
            panelClass: options.panelClass,
        }));

        return new Promise<void>((resolve, reject) => {
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    resolve();
                } else {
                    reject();
                }
            });
        });
    }

    /**
     * Show an alert dialog with only OK button.
     * Replaces AngularJS $mdDialog.alert().
     */
    async alert(options: string | {
        title?: string;
        message: string;
        panelClass?: string | string[];
        autoFocus?: boolean;
    }): Promise<void> {
        if (typeof options === 'string') {
            options = { message: options };
        }
        try {
            await this.confirm({
                title: options.title,
                message: options.message,
                disableCancel: true,
                panelClass: options.panelClass,
                autoFocus: options.autoFocus,
            });
        } catch {
            // Alert always resolves — user dismissed the dialog
        }
    }

    /**
     * Show a prompt dialog with text input.
     * Replaces AngularJS $mdDialog.prompt().
     * Returns the entered value, or throws if cancelled.
     */
    async prompt(options: {
        title: string;
        placeholder: string;
        initialValue?: string;
        ok: string;
        cancel: string;
    }): Promise<string> {
        const { PromptDialogComponent } = await import(
            /* webpackChunkName: "dialog-prompt" */
            '../dialogs/prompt-dialog.component'
        );
        const { createDialogPopupSettings } = await import('../dialogs/dialog-popup');
        const dialogRef = this.dialog.open(PromptDialogComponent, createDialogPopupSettings({
            data: {
                title: options.title,
                placeholder: options.placeholder,
                initialValue: options.initialValue ?? '',
                okButton: options.ok,
                cancelButton: options.cancel,
            },
        }));
        return new Promise<string>((resolve, reject) => {
            dialogRef.afterClosed().subscribe(result => {
                if (result !== undefined && result !== null) {
                    resolve(result);
                } else {
                    reject();
                }
            });
        });
    }

    /**
     * Centralized error handling with i18n code lookup.
     * Returns true if data is OK, false if it was an error.
     * Replaces AngularJS p3xrCommon.generalHandleError().
     */
    generalHandleError(dataOrError: any): boolean {
        if (dataOrError === undefined) {
            return true;
        }
        if (!(dataOrError instanceof Error || dataOrError instanceof Object)) {
            dataOrError = new Error(String(dataOrError));
        }
        if (dataOrError instanceof Error || dataOrError.status === 'error') {
            let error: any;
            if (dataOrError instanceof Error) {
                error = dataOrError;
            } else {
                error = dataOrError.error;
            }
            console.warn('generalHandleError');
            console.error(error);

            // i18n code lookup
            const strings = this.i18n.strings();
            const codes = strings.code || {};
            if (typeof error === 'string' && codes.hasOwnProperty(error)) {
                error = new Error(codes[error]);
            } else if (error?.code && codes.hasOwnProperty(error.code)) {
                error.message = codes[error.code];
            } else if (error?.message && codes.hasOwnProperty(error.message)) {
                error.message = codes[error.message];
            }

            // Handle connection closed
            if (error?.message === 'Connection is closed.') {
                p3xr.state.connection = undefined;
            }

            this.alert({
                title: strings.title?.error || 'Error',
                message: '<pre>' + (error?.message || error) + '</pre>',
            });
            return false;
        }
        return true;
    }

    /**
     * Parse Redis INFO response and populate state.
     * Replaces AngularJS p3xrCommon.loadRedisInfoResponse().
     */
    async loadRedisInfoResponse(options: { response?: any } = {}): Promise<void> {
        let response = options.response || this.lastResponse;
        this.lastResponse = response;
        if (!response) return;

        console.time('loadRedisInfoResponse');

        const info = this.redisParser.info(response.info);
        const shouldSort = this.settings.keysSort() && response.keys.length <= this.settings.maxLightKeysCount;

        // Sort in Web Worker if needed
        const keys = shouldSort
            ? await this.treeBuilder.sortKeys(response.keys)
            : response.keys;

        // Update global p3xr.state
        if (p3xr?.state) {
            p3xr.state.info = info;
            p3xr.state.keysRaw = keys;
            p3xr.state.keysInfo = response.keysInfo;
        }

        // Update Angular signals
        this.state.info.set(info);
        this.state.keysRaw.set(keys);
        this.state.keysInfo.set(response.keysInfo);

        console.timeEnd('loadRedisInfoResponse');
    }
}
