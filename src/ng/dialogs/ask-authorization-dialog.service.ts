import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the Ask Authorization dialog.
 * Uses dynamic import() for lazy loading — the dialog component code
 * is only downloaded when the dialog is first opened.
 */
@Injectable({ providedIn: 'root' })
export class AskAuthorizationDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options?: { $event?: any }): Promise<{ username: string; password: string }> {
        const { AskAuthorizationDialogComponent } = await import(
            /* webpackChunkName: "dialog-ask-auth" */
            './ask-authorization-dialog.component'
        );

        const dialogRef = this.dialog.open(AskAuthorizationDialogComponent, createDialogPopupSettings());

        return new Promise((resolve, reject) => {
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject();
                }
            });
        });
    }
}
