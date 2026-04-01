import { Component, Inject, OnInit, OnDestroy, OnChanges, SimpleChanges, ChangeDetectorRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MainCommandService } from '../../../services/main-command.service';

import { I18nService } from '../../../services/i18n.service';
import { SocketService } from '../../../services/socket.service';
import { CommonService } from '../../../services/common.service';
import { JsonViewDialogService } from '../../../dialogs/json-view-dialog.service';
import { JsonEditorDialogService } from '../../../dialogs/json-editor-dialog.service';
import { KeyNewOrSetDialogService } from '../../../dialogs/key-new-or-set-dialog.service';
import { JsonTreeComponent } from '../../../components/json-tree.component';
import { KeyTypeBase } from './key-type-base';

declare const p3xr: any;

@Component({
    selector: 'p3xr-key-json',
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule, JsonTreeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './key-json.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class KeyJsonComponent extends KeyTypeBase implements OnInit, OnDestroy, OnChanges {
    @ViewChild(JsonTreeComponent) jsonTree?: JsonTreeComponent;
    jsonObj: any;
    treeExpanded: boolean | 'recursive' = true;
    treeWrap = true;

    constructor(
        @Inject(I18nService) i18n: I18nService,
        @Inject(SocketService) socket: SocketService,
        @Inject(CommonService) common: CommonService,
        @Inject(JsonViewDialogService) jsonViewDialog: JsonViewDialogService,
        @Inject(KeyNewOrSetDialogService) keyNewOrSetDialog: KeyNewOrSetDialogService,
        @Inject(BreakpointObserver) breakpointObserver: BreakpointObserver,
        @Inject(JsonEditorDialogService) private jsonEditorDialog: JsonEditorDialogService,
        @Inject(MainCommandService) cmd: MainCommandService,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr);
    }

    ngOnInit(): void {
        this.parseJson();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['p3xrValue']) {
            this.parseJson();
        }
    }

    ngOnDestroy(): void {
        this.destroyBase();
    }

    private parseJson(): void {
        try {
            this.jsonObj = JSON.parse(this.p3xrValue);
        } catch {
            this.jsonObj = undefined;
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

    toggleWrap(): void {
        this.treeWrap = !this.treeWrap;
    }

    async copyValue(): Promise<void> {
        await this.copy(this.p3xrValue);
    }

    async jsonEditor(): Promise<void> {
        try {
            const result = await this.jsonEditorDialog.show({ value: this.p3xrValue, hideFormatSave: true });
            const value = typeof result.obj === 'string' ? result.obj : JSON.stringify(result.obj);

            p3xr.ui.overlay.show();
            await this.socket.request({
                action: 'key-json-set',
                payload: {
                    key: this.p3xrKey,
                    path: '$',
                    value: value,
                },
            });
            this.gtag('/key-json-set');
            this.common.toast(this.strings?.status?.set || 'Saved');
            this.refreshKey();
        } catch (e) {
            if (e) {
                this.common.generalHandleError(e);
            }
        } finally {
            p3xr.ui.overlay.hide();
        }
    }

    downloadJsonFile(): void {
        const blob = new Blob([this.p3xrValue], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.p3xrKey}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}
