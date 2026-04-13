import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JsonTreeComponent } from '../components/json-tree.component';
import { I18nService } from '../services/i18n.service';

export interface JsonViewDialogData {
    value: string;
}

/**
 * JSON View dialog — Angular replacement for p3xrDialogJsonView.
 * Displays a JSON string as an expandable tree. Replaces angular-json-tree.
 */
@Component({
    selector: 'p3xr-json-view-dialog',
    standalone: true,
    imports: [
        CommonModule, MatDialogModule, MatButtonModule, MatIconModule,
        MatToolbarModule, MatTooltipModule, JsonTreeComponent,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title p3xr-dialog-title-with-icon">
                <mat-icon>account_tree</mat-icon>
                <span>{{ strings().intention?.jsonViewShow }}</span>
            </span>

            @if (isJson) {
                <button mat-icon-button (click)="expandAll()"
                    [matTooltip]="strings().page?.treeControls?.expandAll">
                    <mat-icon>keyboard_arrow_down</mat-icon>
                </button>
                <button mat-icon-button (click)="collapseAll()"
                    [matTooltip]="strings().page?.treeControls?.collapseAll">
                    <mat-icon>keyboard_arrow_up</mat-icon>
                </button>
            }

            <button mat-icon-button (click)="close()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>

        <mat-dialog-content class="p3xr-dialog-content p3xr-dialog-content-mono p3xr-json-view-content">
            @if (isJson) {
                <p3xr-json-tree
                    [data]="obj"
                    [label]="strings().label?.tree"
                    [expanded]="treeExpanded">
                </p3xr-json-tree>
            } @else {
                <div>{{ strings().label?.jsonViewNotParsable }}</div>
            }
        </mat-dialog-content>

        <mat-dialog-actions class="p3xr-dialog-actions">
            <button mat-raised-button class="btn-accent" type="button" (click)="close()">
                <mat-icon>close</mat-icon>
                {{ strings().intention?.close }}
            </button>
        </mat-dialog-actions>
    `,
    styles: [`
        .p3xr-json-view-content { min-height: 200px; max-height: 70vh; overflow: auto; }
    `],
})
export class JsonViewDialogComponent implements OnInit {
    @ViewChild(JsonTreeComponent) jsonTree?: JsonTreeComponent;
    obj: any;
    isJson = false;
    treeExpanded: boolean | 'recursive' = true;
    strings;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<JsonViewDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: JsonViewDialogData,
        @Inject(I18nService) private i18n: I18nService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        try {
            this.obj = JSON.parse(this.data.value);
            this.isJson = true;
        } catch (e) {
            this.obj = undefined;
            this.isJson = false;
        }
    }

    expandAll(): void {
        this.jsonTree?.treeControl.expandAll();
    }

    collapseAll(): void {
        this.jsonTree?.treeControl.collapseAll();
        // Keep root expanded
        const root = this.jsonTree?.treeControl.dataNodes?.[0];
        if (root) {
            this.jsonTree!.treeControl.expand(root);
        }
    }

    close(): void {
        this.dialogRef.close();
    }
}
