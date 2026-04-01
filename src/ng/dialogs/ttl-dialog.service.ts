import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the TTL dialog.
 * Uses dynamic import() for lazy loading — the dialog component code
 * is only downloaded when the dialog is first opened.
 */
@Injectable({ providedIn: 'root' })
export class TtlDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options: { $event?: any; model: { ttl: number } }): Promise<{ model: { ttl: number } }> {
        const { TtlDialogComponent } = await import(
            /* webpackChunkName: "dialog-ttl" */
            './ttl-dialog.component'
        );

        const dialogRef = this.dialog.open(TtlDialogComponent, createDialogPopupSettings({
            data: { model: options.model },
        }));

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
