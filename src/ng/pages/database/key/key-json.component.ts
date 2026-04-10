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
import { RedisStateService } from '../../../services/redis-state.service';
import { SettingsService } from '../../../services/settings.service';
import { JsonTreeComponent } from '../../../components/json-tree.component';
import { KeyTypeBase } from './key-type-base';
import { OverlayService } from '../../../services/overlay.service';
import { DiffDialogService } from '../../../dialogs/diff-dialog.service';

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
        @Inject(RedisStateService) redisState: RedisStateService,
        @Inject(SettingsService) settingsService: SettingsService,
        @Inject(OverlayService) private overlay: OverlayService,
        @Inject(DiffDialogService) private diffDialog: DiffDialogService,
    ) {
        super(i18n, socket, common, jsonViewDialog, keyNewOrSetDialog, breakpointObserver, cmd, cdr, redisState, settingsService);
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
            const oldValue = this.p3xrValue;
            const result = await this.jsonEditorDialog.show({ value: this.p3xrValue, hideFormatSave: true });
            const value = typeof result.obj === 'string' ? result.obj : JSON.stringify(result.obj);

            this.overlay.show();
            await this.socket.request({
                action: 'key-json-set',
                payload: { key: this.p3xrKey, path: '$', value },
            });
            this.gtag('/key-json-set');
            this.refreshKey();
            this.overlay.hide();

            if (this.settingsService.undoEnabled() && oldValue !== undefined && oldValue !== value) {
                const undoClicked = await this.common.toastWithUndo(this.strings?.status?.set || 'Saved');
                if (undoClicked) {
                    this.overlay.show({ message: 'Undo...' });
                    await this.socket.request({
                        action: 'key-json-set',
                        payload: { key: this.p3xrKey, path: '$', value: oldValue },
                    });
                    this.refreshKey();
                    this.overlay.hide();
                    this.common.toast(this.strings?.status?.reverted || 'Reverted');
                }
            }
        } catch (e) {
            if (e) this.common.generalHandleError(e);
            this.overlay.hide();
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
