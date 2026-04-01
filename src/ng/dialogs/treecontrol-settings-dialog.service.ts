import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

/**
 * Service to open the Tree Control Settings dialog.
 * Uses dynamic import() for lazy loading.
 */
@Injectable({ providedIn: 'root' })
export class TreecontrolSettingsDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(options?: { $event?: any }): Promise<void> {
        const { TreecontrolSettingsDialogComponent } = await import(
            /* webpackChunkName: "dialog-treecontrol-settings" */
            './treecontrol-settings-dialog.component'
        );

        const dialogRef = this.dialog.open(TreecontrolSettingsDialogComponent, createDialogPopupSettings({
            width: '75vw',
            maxWidth: '75vw',
            panelClass: ['fullscreen-dialog', 'p3xr-tree-settings-dialog-panel'],
        }));

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe(() => resolve());
        });
    }
}
