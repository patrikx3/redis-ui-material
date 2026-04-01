import { Injectable, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class CommandPaletteDialogService {
    private openRef: MatDialogRef<any> | null = null;

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(): Promise<void> {
        if (this.openRef) return;
        const { CommandPaletteDialogComponent } = await import(
            /* webpackChunkName: "dialog-command-palette" */
            './command-palette-dialog.component'
        );
        this.openRef = this.dialog.open(CommandPaletteDialogComponent, {
            width: '500px', maxWidth: '90vw', position: { top: '100px' },
            panelClass: 'p3xr-command-palette-panel', autoFocus: false,
        });
        this.openRef.afterClosed().subscribe(() => { this.openRef = null; });
    }
}
