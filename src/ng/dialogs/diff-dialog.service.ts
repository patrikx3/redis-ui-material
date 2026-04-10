import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createDialogPopupSettings } from './dialog-popup';
import { SettingsService } from '../services/settings.service';

export interface DiffDialogOptions {
    keyName: string;
    fieldName?: string;
    oldValue: string;
    newValue: string;
}

@Injectable({ providedIn: 'root' })
export class DiffDialogService {

    constructor(
        @Inject(MatDialog) private dialog: MatDialog,
        @Inject(SettingsService) private settings: SettingsService,
    ) {}

    async show(options: DiffDialogOptions): Promise<boolean> {
        if (!this.settings.showDiffBeforeSave()) return true;
        options.oldValue = String(options.oldValue ?? '');
        options.newValue = String(options.newValue ?? '');
        if (options.oldValue === options.newValue) return true;

        const { DiffDialogComponent } = await import(
            /* webpackChunkName: "dialog-diff" */
            './diff-dialog.component'
        );

        const dialogRef = this.dialog.open(DiffDialogComponent, createDialogPopupSettings({
            data: options,
            width: '800px',
            maxHeight: '90vh',
        }));

        return new Promise<boolean>((resolve) => {
            dialogRef.afterClosed().subscribe((result) => resolve(result === true));
        });
    }
}
