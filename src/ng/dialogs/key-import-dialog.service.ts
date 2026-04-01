import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

@Injectable({ providedIn: 'root' })
export class KeyImportDialogService {
    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options: { data: any }): Promise<any> {
        const { KeyImportDialogComponent } = await import(
            /* webpackChunkName: "dialog-key-import" */
            './key-import-dialog.component'
        );

        const dialogRef = this.dialog.open(KeyImportDialogComponent, createDialogPopupSettings({
            data: options.data,
            disableClose: true,
            width: '700px',
            maxWidth: '95vw',
            maxHeight: '90vh',
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
