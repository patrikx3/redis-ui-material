import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';
import { MainCommandService } from '../services/main-command.service';

/**
 * Service to open the JSON Editor dialog.
 * Uses dynamic import() for lazy loading.
 * Returns { obj: string } (JSON string) on save, or rejects on cancel.
 */
@Injectable({ providedIn: 'root' })
export class JsonEditorDialogService {

    constructor(
        @Inject(MatDialog) private dialog: MatDialog,
        @Inject(MainCommandService) private cmd: MainCommandService,
    ) {}

    async show(options: { value: string; event?: any; $event?: any; hideFormatSave?: boolean }): Promise<{ obj: string }> {
        const { JsonEditorDialogComponent } = await import(
            /* webpackChunkName: "dialog-json-editor" */
            './json-editor-dialog.component'
        );

        // Pause resizer during dialog
        this.cmd.mainResizer$.next({ drag: false });

        const dialogRef = this.dialog.open(JsonEditorDialogComponent, createDialogPopupSettings({
            data: { value: options.value, hideFormatSave: options.hideFormatSave },
            disableClose: true,
            width: '75%',
            maxHeight: '90vh',
        }));

        return new Promise((resolve, reject) => {
            dialogRef.afterClosed().subscribe((result) => {
                // Resume resizer
                this.cmd.mainResizer$.next({ drag: true });

                if (result) {
                    resolve(result);
                } else {
                    reject();
                }
            });
        });
    }
}
