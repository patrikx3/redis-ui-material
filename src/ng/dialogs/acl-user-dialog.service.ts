import { Injectable, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import type { AclUserDialogData, AclUserDialogResult } from './acl-user-dialog.component';
import { createDialogPopupSettings } from './dialog-popup';

@Injectable({ providedIn: 'root' })
export class AclUserDialogService {

    constructor(@Inject(MatDialog) private dialog: MatDialog) {}

    async show(data: AclUserDialogData): Promise<AclUserDialogResult | undefined> {
        const { AclUserDialogComponent } = await import(
            /* webpackChunkName: "dialog-acl-user" */
            './acl-user-dialog.component'
        );

        const dialogRef = this.dialog.open(AclUserDialogComponent, createDialogPopupSettings({
            data,
            width: '600px',
        }));

        return new Promise((resolve) => {
            dialogRef.afterClosed().subscribe(result => resolve(result));
        });
    }
}
