import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import type { ConnectionDialogData } from './connection-dialog.component';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the Connection dialog.
 * Uses dynamic import() for lazy loading -- the dialog component code
 * is only downloaded when the dialog is first opened.
 */
@Injectable({ providedIn: 'root' })
export class ConnectionDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    /**
     * Opens the connection dialog.
     * Matches the AngularJS p3xrDialogConnection.show() API.
     *
     * @param options.type - 'new' for creating a new connection, 'edit' for editing existing
     * @param options.model - existing connection model (for edit mode)
     * @param options.$event - the triggering DOM event (unused in Angular Material but kept for API compat)
     */
    async show(options: { type: 'new' | 'edit'; model?: any; $event?: any }): Promise<void> {
        const { ConnectionDialogComponent } = await import(
            /* webpackChunkName: "dialog-connection" */
            './connection-dialog.component'
        );

        const data: ConnectionDialogData = {
            type: options.type,
            model: options.model,
        };

        const dialogRef = this.dialog.open(ConnectionDialogComponent, createDialogPopupSettings({
            data,
            panelClass: ['fullscreen-dialog', 'p3xr-connection-dialog-panel'],
        }));

        return new Promise<void>((resolve, reject) => {
            dialogRef.afterClosed().subscribe(() => {
                resolve();
            });
        });
    }
}
