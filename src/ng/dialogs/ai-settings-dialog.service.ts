import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

@Injectable({ providedIn: 'root' })
export class AiSettingsDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(): Promise<void> {
        const { AiSettingsDialogComponent } = await import(
            /* webpackChunkName: "dialog-ai-settings" */
            './ai-settings-dialog.component'
        );

        const dialogRef = this.dialog.open(AiSettingsDialogComponent, createDialogPopupSettings({
            width: '75vw',
            maxWidth: '75vw',
        }));

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe(() => resolve());
        });
    }
}
