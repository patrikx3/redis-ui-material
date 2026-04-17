import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';

@Injectable({ providedIn: 'root' })
export class AiCheatsheetDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    /** Returns the picked prompt (with "ai: " prefix) or undefined if closed without picking. */
    async show(): Promise<string | undefined> {
        const { AiCheatsheetDialogComponent } = await import(
            /* webpackChunkName: "dialog-ai-cheatsheet" */
            './ai-cheatsheet-dialog.component'
        );

        const dialogRef = this.dialog.open(AiCheatsheetDialogComponent, createDialogPopupSettings({
            width: '720px',
            maxWidth: '95vw',
            maxHeight: '90vh',
        }));

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe((picked: string | undefined) => resolve(picked));
        });
    }
}
