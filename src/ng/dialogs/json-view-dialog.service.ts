import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the JSON View dialog.
 * Uses dynamic import() for lazy loading.
 */
@Injectable({ providedIn: 'root' })
export class JsonViewDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options: { value: string; event?: any; $event?: any }): Promise<void> {
        const { JsonViewDialogComponent } = await import(
            /* webpackChunkName: "dialog-json-view" */
            './json-view-dialog.component'
        );

        const dialogRef = this.dialog.open(JsonViewDialogComponent, createDialogPopupSettings({
            data: { value: options.value },
            width: '75%',
            maxHeight: '90vh',
        }));

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe(() => resolve());
        });
    }
}
