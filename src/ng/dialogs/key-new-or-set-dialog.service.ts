import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the Key New/Edit dialog.
 * Uses dynamic import() for lazy loading.
 */
@Injectable({ providedIn: 'root' })
export class KeyNewOrSetDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options: {
        type: 'add' | 'edit' | 'append';
        $event?: any;
        node?: any;
        model?: any;
    }): Promise<any> {
        const { KeyNewOrSetDialogComponent } = await import(
            /* webpackChunkName: "dialog-key-new-or-set" */
            './key-new-or-set-dialog.component'
        );

        const dialogRef = this.dialog.open(KeyNewOrSetDialogComponent, createDialogPopupSettings({
            data: options,
            disableClose: true,
            width: '75%',
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
