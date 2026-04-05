import { Component, Inject, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { I18nService } from '../services/i18n.service';
import { NotificationService } from '../services/notification.service';
import { SettingsService } from '../services/settings.service';
import { RedisStateService } from '../services/redis-state.service';
import { CommonService } from '../services/common.service';
import { SocketService } from '../services/socket.service';
import { MainCommandService } from '../services/main-command.service';
import { ConnectionDialogService } from '../dialogs/connection-dialog.service';
import { TreecontrolSettingsDialogService } from '../dialogs/treecontrol-settings-dialog.service';
import { AiSettingsDialogService } from '../dialogs/ai-settings-dialog.service';
import { P3xrAccordionComponent } from '../components/p3xr-accordion.component';
import { P3xrButtonComponent } from '../components/p3xr-button.component';

/**
 * Settings page — Angular replacement for AngularJS p3xrSettings.
 * First complete Angular page migration.
 *
 * Contains:
 * - Connections list (add/edit/delete/connect/disconnect)
 * - License info panel
 * - Tree settings panel
 */
@Component({
    selector: 'p3xr-ng-settings',
    standalone: true,
    imports: [
        MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatSlideToggleModule,
        MatTooltipModule, MatDividerModule, DragDropModule,
        P3xrAccordionComponent, P3xrButtonComponent,
    ],
    template: `
        <!-- Connections -->
        <p3xr-ng-accordion [title]="strings().label?.connections || 'Connections'" accordionKey="settings">
            <div actions>
                <p3xr-ng-button
                    (click)="toggleGroupMode()"
                    [label]="strings().label?.grouped || 'Grouped'"
                    [mdIcon]="groupModeEnabled ? 'check_box' : 'check_box_outline_blank'">
                </p3xr-ng-button>
                @if (!readonlyConnections) {
                    <p3xr-ng-button
                        (click)="connectionForm('new')"
                        [label]="strings().intention?.connectionAdd || 'Add'"
                        mdIcon="add_box">
                    </p3xr-ng-button>
                }
            </div>
            <div content>
                @if (connectionsList.length === 0) {
                    <div style="padding: 16px;">
                        {{ strings().intention?.noConnectionsInSettings || 'No connections' }}
                    </div>
                }

                @if (connectionsList.length > 0) {
                    <div>
                        @if (groupModeEnabled) {
                        <div cdkDropList
                             [cdkDropListData]="groupedConnections"
                             (cdkDropListDropped)="dropGroup($event)"
                             [cdkDropListEnterPredicate]="groupDropPredicate"
                             class="p3xr-group-drop-list">
                        @for (group of groupedConnections; track group.name) {
                            <div cdkDrag class="p3xr-connection-group-block" [cdkDragData]="group">
                            <div class="p3xr-connection-group-header" cdkDragHandle (click)="toggleGroup(group.name)">
                                <mat-icon style="font-size: 18px; width: 18px; height: 18px;">{{ collapsedGroups.has(group.name) ? 'chevron_right' : 'expand_more' }}</mat-icon>
                                <span>{{ getGroupDisplayName(group.name) }}</span>
                                <span style="opacity: 0.5; font-weight: 400; font-size: 12px;">({{ group.connections.length }})</span>
                            </div>
                            @if (!collapsedGroups.has(group.name)) {
                                <div cdkDropList
                                     [cdkDropListData]="group.connections"
                                     (cdkDropListDropped)="dropConnection($event, group.name)"
                                     [cdkDropListEnterPredicate]="connectionDropPredicate">
                                @for (connection of group.connections; track connection.id; let last = $last) {
                                <div class="p3xr-connection-item" cdkDrag [cdkDragData]="connection">
                                    <div class="p3xr-connection-info">
                                        <div style="font-weight: 700;">{{ connection.name }}</div>
                                        <div style="font-size: 13px; opacity: 0.7;">{{ connection.host }}:{{ connection.port }}</div>
                                        <div style="font-size: 13px; opacity: 0.7;">
                                            @for (entry of getConnectionClients(connection); track entry.key) {
                                                {{ strings().page?.overview?.connectedCount?.({ length: entry.clients }) }}
                                            }
                                            &nbsp;
                                        </div>
                                    </div>

                                    @if (currentConnectionId !== connection.id) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-accent" (click)="connect(connection)"
                                                [matTooltip]="strings().intention?.connect || 'Connect'"
                                                [attr.aria-label]="strings().intention?.connect || 'Connect'">
                                                <mat-icon>power</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-accent" (click)="connect(connection)">
                                                <mat-icon>power</mat-icon>
                                                <span>{{ strings().intention?.connect || 'Connect' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (currentConnectionId === connection.id) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-accent" (click)="disconnect()"
                                                [matTooltip]="strings().intention?.disconnect || 'Disconnect'"
                                                matTooltipPosition="above"
                                                [attr.aria-label]="strings().intention?.disconnect || 'Disconnect'">
                                                <i class="fa fa-power-off"></i>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-accent" (click)="disconnect()">
                                                <i class="fa fa-power-off"></i>
                                                <span>{{ strings().intention?.disconnect || 'Disconnect' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (!readonlyConnections) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-warn" (click)="deleteConnection(connection, $event)"
                                                [matTooltip]="strings().intention?.delete || 'Delete'"
                                                [attr.aria-label]="strings().intention?.delete || 'Delete'">
                                                <mat-icon>delete_forever</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-warn" (click)="deleteConnection(connection, $event)">
                                                <mat-icon>delete_forever</mat-icon>
                                                <span>{{ strings().intention?.delete || 'Delete' }}</span>
                                            </button>
                                        }
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-primary" (click)="connectionForm('edit', connection)"
                                                [matTooltip]="strings().intention?.edit || 'Edit'"
                                                [attr.aria-label]="strings().intention?.edit || 'Edit'">
                                                <mat-icon>edit</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-primary" (click)="connectionForm('edit', connection)">
                                                <mat-icon>edit</mat-icon>
                                                <span>{{ strings().intention?.edit || 'Edit' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (readonlyConnections) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-primary" (click)="connectionForm('edit', connection)"
                                                [matTooltip]="strings().intention?.view || 'View'"
                                                [attr.aria-label]="strings().intention?.view || 'View'">
                                                <mat-icon>mode_comment</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-primary" (click)="connectionForm('edit', connection)">
                                                <mat-icon>mode_comment</mat-icon>
                                                <span>{{ strings().intention?.view || 'View' }}</span>
                                            </button>
                                        }
                                    }
                                </div>
                                @if (!last) { <mat-divider></mat-divider> }
                                }
                                </div>
                            }
                            </div>
                        }
                        </div>
                        }
                        @if (!groupModeEnabled) {
                            @for (connection of connectionsList; track connection.id; let last = $last) {
                                <div class="p3xr-connection-item">
                                    <div class="p3xr-connection-info">
                                        <div style="font-weight: 700;">{{ connection.name }}</div>
                                        <div style="font-size: 13px; opacity: 0.7;">{{ connection.host }}:{{ connection.port }}</div>
                                        <div style="font-size: 13px; opacity: 0.7;">
                                            @for (entry of getConnectionClients(connection); track entry.key) {
                                                {{ strings().page?.overview?.connectedCount?.({ length: entry.clients }) }}
                                            }
                                            &nbsp;
                                        </div>
                                    </div>

                                    @if (currentConnectionId !== connection.id) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-accent" (click)="connect(connection)"
                                                [matTooltip]="strings().intention?.connect || 'Connect'"
                                                [attr.aria-label]="strings().intention?.connect || 'Connect'">
                                                <mat-icon>power</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-accent" (click)="connect(connection)">
                                                <mat-icon>power</mat-icon>
                                                <span>{{ strings().intention?.connect || 'Connect' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (currentConnectionId === connection.id) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-accent" (click)="disconnect()"
                                                [matTooltip]="strings().intention?.disconnect || 'Disconnect'"
                                                matTooltipPosition="above"
                                                [attr.aria-label]="strings().intention?.disconnect || 'Disconnect'">
                                                <i class="fa fa-power-off"></i>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-accent" (click)="disconnect()">
                                                <i class="fa fa-power-off"></i>
                                                <span>{{ strings().intention?.disconnect || 'Disconnect' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (!readonlyConnections) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-warn" (click)="deleteConnection(connection, $event)"
                                                [matTooltip]="strings().intention?.delete || 'Delete'"
                                                [attr.aria-label]="strings().intention?.delete || 'Delete'">
                                                <mat-icon>delete_forever</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-warn" (click)="deleteConnection(connection, $event)">
                                                <mat-icon>delete_forever</mat-icon>
                                                <span>{{ strings().intention?.delete || 'Delete' }}</span>
                                            </button>
                                        }
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-primary" (click)="connectionForm('edit', connection)"
                                                [matTooltip]="strings().intention?.edit || 'Edit'"
                                                [attr.aria-label]="strings().intention?.edit || 'Edit'">
                                                <mat-icon>edit</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-primary" (click)="connectionForm('edit', connection)">
                                                <mat-icon>edit</mat-icon>
                                                <span>{{ strings().intention?.edit || 'Edit' }}</span>
                                            </button>
                                        }
                                    }

                                    @if (readonlyConnections) {
                                        @if (isXs) {
                                            <button mat-mini-fab class="btn-primary" (click)="connectionForm('edit', connection)"
                                                [matTooltip]="strings().intention?.view || 'View'"
                                                [attr.aria-label]="strings().intention?.view || 'View'">
                                                <mat-icon>mode_comment</mat-icon>
                                            </button>
                                        } @else {
                                            <button mat-flat-button class="btn-primary" (click)="connectionForm('edit', connection)">
                                                <mat-icon>mode_comment</mat-icon>
                                                <span>{{ strings().intention?.view || 'View' }}</span>
                                            </button>
                                        }
                                    }
                                </div>
                                @if (!last) { <mat-divider></mat-divider> }
                            }
                        }
                    </div>
                }
            </div>
        </p3xr-ng-accordion>

        <br />

        <!-- GUI Framework -->
        <p3xr-ng-accordion title="GUI" accordionKey="gui-framework">
            <div content>
                <div style="display: flex; justify-content: flex-end; padding: 16px;">
                    <div class="p3xr-gui-toggle">
                        <span class="p3xr-gui-toggle-active">Angular</span>
                        <span class="p3xr-gui-toggle-item" (click)="switchToReact()">React</span>
                    </div>
                </div>
            </div>
        </p3xr-ng-accordion>

        <br />

        <!-- AI Settings -->
        <p3xr-ng-accordion [title]="strings().label?.aiSettings || 'AI Settings'" accordionKey="ai-settings">
            <div actions>
                @if (!readonlyConnections && !isGroqApiKeyReadonly()) {
                    <p3xr-ng-button
                        (click)="openAiSettings($event)"
                        [label]="strings().intention?.edit || 'Edit'"
                        mdIcon="edit">
                    </p3xr-ng-button>
                }
            </div>
            <div content>
                <mat-list>
                    <mat-list-item (click)="$event.stopPropagation()">
                        <div class="p3xr-settings-pair-row">
                            <div class="p3xr-settings-row-label">{{ strings().label?.aiEnabled || 'AI Enabled' }}</div>
                            <div class="p3xr-settings-row-value">
                                <mat-slide-toggle [checked]="isAiEnabled()" [disabled]="isAiReadonly()" (change)="toggleAiEnabled($event.checked)"></mat-slide-toggle>
                            </div>
                        </div>
                    </mat-list-item>
                    @if (isAiEnabled() && hasGroqApiKey()) {
                        <mat-divider></mat-divider>
                        <mat-list-item (click)="$event.stopPropagation()">
                            <div style="width: 100%;">
                                <div class="p3xr-settings-pair-row">
                                    <div class="p3xr-settings-row-label">{{ strings().label?.aiRouteViaNetwork || 'Route via network.corifeus.com' }}</div>
                                    <div class="p3xr-settings-row-value">
                                        <mat-slide-toggle [checked]="!isUseOwnKey()" [disabled]="isAiReadonly()" (change)="toggleUseOwnKey(!$event.checked)"></mat-slide-toggle>
                                    </div>
                                </div>
                                <div class="p3xr-settings-hint">
                                    {{ isUseOwnKey() ? (strings().label?.aiRoutingDirect || 'Queries go directly to Groq using your own API key, bypassing network.corifeus.com.') : (strings().label?.aiRoutingNetwork || 'AI queries are routed through network.corifeus.com. If you have your own free Groq API key, you can turn off this switch to route directly to Groq without network.corifeus.com.') }}
                                    @if (!isUseOwnKey()) {
                                        <a href="https://console.groq.com" target="_blank" style="color: inherit; text-decoration: underline;">console.groq.com</a>
                                    }
                                </div>
                            </div>
                        </mat-list-item>
                        <mat-divider></mat-divider>
                        <mat-list-item>
                            <div class="p3xr-settings-pair-row">
                                <div class="p3xr-settings-row-label">{{ strings().label?.aiGroqApiKey || 'Groq API Key' }}</div>
                                <div class="p3xr-settings-row-value" [style.font-family]="hasGroqApiKey() ? 'monospace' : 'inherit'">{{ getGroqApiKeyDisplay() }}</div>
                            </div>
                        </mat-list-item>
                    }
                </mat-list>
            </div>
        </p3xr-ng-accordion>

        <br />

        <!-- Desktop Notifications -->
        <p3xr-ng-accordion [title]="strings().label?.desktopNotifications || 'Desktop Notifications'" accordionKey="desktop-notifications">
            <div content>
                <mat-list>
                    <mat-list-item>
                        <div style="display: flex; width: 100%; align-items: center;">
                            <span class="p3xr-settings-label" style="flex: 1;">{{ strings().label?.desktopNotificationsEnabled || 'Enable desktop notifications' }}</span>
                            <mat-slide-toggle [checked]="notificationService.isEnabled()" (change)="notificationService.setEnabled($event.checked)"></mat-slide-toggle>
                        </div>
                    </mat-list-item>
                    <mat-divider></mat-divider>
                    <mat-list-item>
                        <div style="font-size: 12px; opacity: 0.7;">{{ strings().label?.desktopNotificationsInfo || 'Receive OS notifications for Redis disconnections and reconnections when the app is not focused.' }}</div>
                    </mat-list-item>
                </mat-list>
            </div>
        </p3xr-ng-accordion>

        <br />

        <!-- Tree Settings -->
        <p3xr-ng-accordion [title]="strings().form?.treeSettings?.label?.formName || 'Redis Settings'" accordionKey="tree-settings">
            <div actions>
                <p3xr-ng-button
                    (click)="openTreeSettings($event)"
                    [label]="strings().intention?.edit || 'Edit'"
                    mdIcon="edit">
                </p3xr-ng-button>
            </div>
            <div content>
                <mat-list class="p3xr-tree-settings-list">
                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.treeSeparator }}</span>
                        <span>{{ settings.redisTreeDivider() || strings().label?.treeSeparatorEmptyNote }}</span></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div><div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.page }}</span><span class="p3xr-settings-value">{{ settings.pageCount() }}</span></div>
                        <div class="p3xr-settings-hint">{{ strings().form?.treeSettings?.error?.page }}</div></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div><div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.keyPageCount }}</span><span class="p3xr-settings-value">{{ settings.keyPageCount() }}</span></div>
                        <div class="p3xr-settings-hint">{{ strings().form?.treeSettings?.error?.keyPageCount }}</div></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div><div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.maxValueDisplay }}</span><span class="p3xr-settings-value">{{ settings.maxValueDisplay() }}</span></div>
                        <div class="p3xr-settings-hint">{{ strings().form?.treeSettings?.maxValueDisplayInfo }}</div></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div><div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.maxKeys }}</span><span class="p3xr-settings-value">{{ settings.maxKeys() }}</span></div>
                        <div class="p3xr-settings-hint">{{ strings().form?.treeSettings?.maxKeysInfo }}</div></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.keysSort }}</span>
                        <span>{{ settings.keysSort() ? strings().label?.keysSort?.on : strings().label?.keysSort?.off }}</span></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.searchMode }}</span>
                        <span>{{ settings.searchClientSide() ? strings().form?.treeSettings?.label?.searchModeClient : strings().form?.treeSettings?.label?.searchModeServer }}</span></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;"><span class="p3xr-settings-label" style="flex: 1;">{{ strings().form?.treeSettings?.field?.searchModeStartsWith }}</span>
                        <span>{{ settings.searchStartsWith() ? strings().form?.treeSettings?.label?.searchModeStartsWith : strings().form?.treeSettings?.label?.searchModeIncludes }}</span></div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;">{{ settings.jsonFormat() === 2 ? strings().form?.treeSettings?.label?.jsonFormatTwoSpace : strings().form?.treeSettings?.label?.jsonFormatFourSpace }}</div>
                    </mat-list-item>
                    <mat-divider></mat-divider>

                    <mat-list-item (click)="openTreeSettings($event)">
                        <div style="display: flex; width: 100%;">{{ settings.animation() ? strings().form?.treeSettings?.label?.animation : strings().form?.treeSettings?.label?.noAnimation }}</div>
                    </mat-list-item>
                </mat-list>
            </div>
        </p3xr-ng-accordion>

        <!-- Bottom spacing to prevent overlap with fixed footer bar -->
        <div style="height: 60px;"></div>
    `,
    styles: [`
        :host { display: block; color: var(--mat-app-text-color, inherit); }
        .p3xr-settings-hint {
            font-size: 12px;
            color: var(--mat-app-text-color, rgba(0, 0, 0, 0.54));
            opacity: 0.7;
        }
        /* GUI toggle */
        .p3xr-gui-toggle {
            display: inline-flex;
            border-radius: 4px;
            overflow: hidden;
            border: 1px solid var(--p3xr-border-color, rgba(0,0,0,0.12));
        }
        .p3xr-gui-toggle-active {
            padding: 8px 24px;
            font-weight: 700;
            font-size: 14px;
            user-select: none;
            background-color: var(--p3xr-btn-primary-bg);
            color: var(--p3xr-btn-primary-color);
        }
        .p3xr-gui-toggle-item {
            padding: 8px 24px;
            font-weight: 500;
            font-size: 14px;
            user-select: none;
            cursor: pointer;
        }
        .p3xr-gui-toggle-item:hover {
            background-color: var(--p3xr-hover-bg);
        }
        /* Wide screens: show button text, hide tooltip */
        .hide-xs { display: inline; }
        .show-xs-tooltip { display: none; }
        /* Small screens: hide text, show icon-only square buttons */
        @media (max-width: 599px) {
            .hide-xs { display: none !important; }
            /* Buttons become square icon buttons on mobile */
            .p3xr-connection-item button {
                min-width: 40px !important;
                width: 40px !important;
                height: 40px !important;
                padding: 0 !important;
                margin: 2px !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
            .p3xr-connection-item button mat-icon,
            .p3xr-connection-item button i {
                margin: 0 !important;
            }
        }
        /* Connection items: match production md-list-item */
        .p3xr-connection-item {
            display: flex;
            align-items: center;
            gap: 4px;
            padding: 8px 8px 8px 16px;
            min-height: 56px;
            box-sizing: border-box;
        }
        .p3xr-connection-info { flex: 1; min-width: 0; overflow: hidden; }
        .p3xr-connection-item button { flex-shrink: 0; }
        /* Drag and drop */
        .p3xr-connection-item.cdk-drag-preview {
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
            background: var(--mat-app-background-color, #fff);
        }
        .p3xr-connection-item.cdk-drag-placeholder { opacity: 0.3; }
        .cdk-drop-list-dragging .p3xr-connection-item:not(.cdk-drag-placeholder) {
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
        }
        .p3xr-connection-group-block.cdk-drag-preview {
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);
            background: var(--mat-app-background-color, #fff);
        }
        .p3xr-connection-group-block.cdk-drag-placeholder { opacity: 0.3; }
        .p3xr-group-drop-list.cdk-drop-list-dragging .p3xr-connection-group-block:not(.cdk-drag-placeholder) {
            transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
        }
        .p3xr-connection-group-header[cdkDragHandle] { cursor: grab; }
        /* Only tree settings rows are clickable/hoverable. License rows stay static like AngularJS. */
        .p3xr-tree-settings-list mat-list-item { cursor: pointer; }
        .p3xr-tree-settings-list mat-list-item:hover { background-color: var(--p3xr-hover-bg); }
        /* Settings list: bold label (left), normal value (right) */
        ::ng-deep .p3xr-tree-settings-list .mdc-list-item__primary-text {
            width: 100%;
        }
        ::ng-deep .p3xr-settings-label {
            font-weight: 500;
        }
        ::ng-deep .p3xr-settings-value {
            font-weight: 400;
            opacity: 0.8;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit, OnDestroy {
    private static readonly UNGROUPED_GROUP_KEY = '';
    strings;
    connectionsList: any[] = [];
    groupedConnections: Array<{ name: string; connections: any[] }> = [];
    collapsedGroups: Set<string>;
    groupModeEnabled = false;

    private static readonly COLLAPSED_GROUPS_KEY = 'p3xr-collapsed-connection-groups';
    private static readonly GROUP_MODE_KEY = 'p3xr-connection-group-mode';
    isElectron = /electron/i.test(navigator.userAgent);
    readonlyConnections = false;
    currentConnectionId: string | undefined;
    isXs = false;
    private electronUiStorage: Record<string, string> | null = null;

    private readonly unsubs: Array<() => void> = [];

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SettingsService) public settings: SettingsService,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(CommonService) private common: CommonService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(MainCommandService) private cmd: MainCommandService,
        @Inject(ConnectionDialogService) private connectionDialog: ConnectionDialogService,
        @Inject(TreecontrolSettingsDialogService) private treeSettingsDialog: TreecontrolSettingsDialogService,
        @Inject(AiSettingsDialogService) private aiSettingsDialog: AiSettingsDialogService,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(ChangeDetectorRef) private cdr: ChangeDetectorRef,
        @Inject(NotificationService) public notificationService: NotificationService,
    ) {
        this.strings = this.i18n.strings;

        this.restoreGroupingState();

        this.breakpointObserver.observe('(max-width: 599px)').subscribe(result => {
            this.isXs = result.matches;
            this.cdr.markForCheck();
        });
    }

    ngOnInit(): void {
        this.refreshState();

        // Subscribe to socket events for reactive updates
        const sub1 = this.socket.connections$.subscribe(() => this.refreshState());
        const sub2 = this.socket.configuration$.subscribe(() => this.refreshState());
        const sub3 = this.socket.stateChanged$.subscribe(() => this.refreshState());
        const sub4 = this.socket.redisStatus$.subscribe(() => this.refreshState());
        this.unsubs.push(() => { sub1.unsubscribe(); sub2.unsubscribe(); sub3.unsubscribe(); sub4.unsubscribe(); });
    }

    ngOnDestroy(): void {
        this.unsubs.forEach(fn => fn());
    }

    private refreshState(): void {
        this.connectionsList = this.state.connections()?.list || [];
        this.readonlyConnections = this.state.cfg()?.readonlyConnections === true;
        this.currentConnectionId = this.state.connection()?.id;
        this.buildGroupedConnections();
        this.cdr.detectChanges();
    }

    toggleGroupMode(): void {
        this.groupModeEnabled = !this.groupModeEnabled;
        this.setPersistentItem(SettingsComponent.GROUP_MODE_KEY, String(this.groupModeEnabled));
    }

    toggleGroup(name: string): void {
        if (this.collapsedGroups.has(name)) {
            this.collapsedGroups.delete(name);
        } else {
            this.collapsedGroups.add(name);
        }
        this.setPersistentItem(SettingsComponent.COLLAPSED_GROUPS_KEY, JSON.stringify([...this.collapsedGroups]));
    }

    private restoreGroupingState(): void {
        this.groupModeEnabled = this.getPersistentItem(SettingsComponent.GROUP_MODE_KEY) === 'true';
        // Sync bootstrap value to localStorage so React can read it (shared origin in Electron)
        this.setPersistentItem(SettingsComponent.GROUP_MODE_KEY, String(this.groupModeEnabled));
        try {
            const stored = this.getPersistentItem(SettingsComponent.COLLAPSED_GROUPS_KEY);
            this.collapsedGroups = stored
                ? new Set(JSON.parse(stored).map((name: string) => this.normalizeCollapsedGroupName(name)))
                : new Set();
        } catch {
            this.collapsedGroups = new Set();
        }
    }

    private getPersistentItem(key: string): string | null {
        const value = this.getElectronUiStorage()[key];
        if (typeof value === 'string') {
            return value;
        }

        try {
            return localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    private setPersistentItem(key: string, value: string): void {
        try {
            localStorage.setItem(key, value);
        } catch { /* ignore */ }

        const storage = this.getElectronUiStorage();
        storage[key] = value;
        this.electronUiStorage = storage;

        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'p3x-ui-storage-set', key, value }, '*');
            }
        } catch { /* ignore */ }
    }

    private getElectronUiStorage(): Record<string, string> {
        if (this.electronUiStorage !== null) {
            return this.electronUiStorage;
        }

        // Read from __p3xr_electron_bootstrap which was captured in main.js
        // BEFORE Angular's router stripped the query params.
        let storage: Record<string, string> = {};
        try {
            const bootstrap = (globalThis as any).__p3xr_electron_bootstrap;
            if (bootstrap && typeof bootstrap === 'object' && !Array.isArray(bootstrap)) {
                storage = this.normalizeElectronUiStorage(bootstrap);
            }
        } catch {
            storage = {};
        }

        this.electronUiStorage = storage;
        return storage;
    }

    private normalizeElectronUiStorage(value: unknown): Record<string, string> {
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
            return {};
        }

        return Object.entries(value).reduce((result: Record<string, string>, [key, entryValue]) => {
            if (typeof entryValue === 'string') {
                result[key] = entryValue;
            }
            return result;
        }, {});
    }

    getGroupDisplayName(name: string): string {
        return name === SettingsComponent.UNGROUPED_GROUP_KEY
            ? this.getUngroupedLabel()
            : name;
    }

    private getUngroupedLabel(): string {
        return this.strings().label?.ungrouped || 'Ungrouped';
    }

    private normalizeCollapsedGroupName(name: unknown): string {
        if (typeof name !== 'string') {
            return '';
        }

        return this.isLegacyUngroupedGroupName(name)
            ? SettingsComponent.UNGROUPED_GROUP_KEY
            : name;
    }

    private isLegacyUngroupedGroupName(name: string): boolean {
        return name === 'Ungrouped' || name === this.getUngroupedLabel();
    }

    private buildGroupedConnections(): void {
        // Use a Map to preserve the order groups first appear in the connections list.
        // This respects the server-persisted order (including after drag reorder).
        const groups = new Map<string, any[]>();
        for (const conn of this.connectionsList) {
            const groupName = conn.group?.trim() || SettingsComponent.UNGROUPED_GROUP_KEY;
            if (!groups.has(groupName)) {
                groups.set(groupName, []);
            }
            groups.get(groupName)!.push(conn);
        }
        const result: Array<{ name: string; connections: any[] }> = [];
        for (const [name, connections] of groups) {
            result.push({ name, connections });
        }
        this.groupedConnections = result;
    }

    // Predicates prevent items from entering the wrong drop list level
    groupDropPredicate = (drag: any) => drag.data && 'connections' in drag.data;
    connectionDropPredicate = (drag: any) => drag.data && !('connections' in drag.data);

    async dropGroup(event: CdkDragDrop<any[]>): Promise<void> {
        if (event.previousIndex === event.currentIndex) return;
        moveItemInArray(this.groupedConnections, event.previousIndex, event.currentIndex);
        // Rebuild flat list in new group order and persist
        const allIds: string[] = [];
        for (const group of this.groupedConnections) {
            for (const conn of group.connections) {
                allIds.push(conn.id);
            }
        }
        try {
            await this.socket.request({
                action: 'connections-reorder',
                payload: { ids: allIds },
            });
        } catch (e) {
            this.common.generalHandleError(e);
            this.refreshState();
        }
    }

    async dropConnection(event: CdkDragDrop<any[]>, groupName: string): Promise<void> {
        if (event.previousIndex === event.currentIndex) return;
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        // Persist the new order to the server
        try {
            const reorderedIds = event.container.data.map((c: any) => c.id);
            await this.socket.request({
                action: 'connections-reorder',
                payload: { group: groupName || undefined, ids: reorderedIds },
            });
        } catch (e) {
            this.common.generalHandleError(e);
            this.refreshState();
        }
    }

    // --- Connections ---

    connectionForm(type: string, model?: any): void {
        this.connectionDialog.show({ type: type as any, model, $event: undefined });
    }

    async connect(connection: any): Promise<void> {
        this.cmd.connectRequest$.next({ connection, disableState: true });
    }

    async disconnect(): Promise<void> {
        await this.cmd.disconnect();
        this.refreshState();
    }

    async deleteConnection(connection: any, $event: any): Promise<void> {
        try {
            await this.common.confirm({
                event: $event,
                message: this.strings().confirm?.deleteConnectionText || 'Delete this connection?',
            });
            await this.socket.request({
                action: 'connection-delete',
                payload: { id: connection.id },
            });
            this.common.toast(this.strings().status?.deleted || 'Deleted');
        } catch (e) {
            if (e !== undefined) {
                this.common.generalHandleError(e);
            }
        }
    }

    getConnectionClients(connection: any): { key: string; clients: number }[] {
        const redisConnections = this.state.redisConnections() || {};
        const results: { key: string; clients: number }[] = [];
        for (const key of Object.keys(redisConnections)) {
            if (redisConnections[key].connection?.name === connection.name) {
                results.push({ key, clients: redisConnections[key].clients?.length || 0 });
            }
        }
        return results;
    }

    // --- AI Settings ---

    isAiEnabled(): boolean {
        return this.state.cfg()?.aiEnabled !== false;
    }

    async toggleAiEnabled(enabled: boolean): Promise<void> {
        try {
            await this.socket.request({
                action: 'set-groq-api-key',
                payload: {
                    apiKey: this.state.cfg()?.groqApiKey || '',
                    aiEnabled: enabled,
                },
            });
            const cfg = { ...this.state.cfg(), aiEnabled: enabled };
            this.state.cfg.set(cfg);
            this.cdr.markForCheck();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    hasGroqApiKey(): boolean {
        const key = this.state.cfg()?.groqApiKey || '';
        return key.startsWith('gsk_') && key.length > 20;
    }

    isUseOwnKey(): boolean {
        // Can only use own key if one is actually set
        return this.state.cfg()?.aiUseOwnKey === true && this.hasGroqApiKey();
    }

    async toggleUseOwnKey(useOwn: boolean): Promise<void> {
        // Can't use own key if no key is set
        if (useOwn && !this.hasGroqApiKey()) {
            return;
        }
        try {
            await this.socket.request({
                action: 'set-groq-api-key',
                payload: {
                    apiKey: this.state.cfg()?.groqApiKey || '',
                    aiEnabled: this.state.cfg()?.aiEnabled !== false,
                    aiUseOwnKey: useOwn,
                },
            });
            const cfg = { ...this.state.cfg(), aiUseOwnKey: useOwn };
            this.state.cfg.set(cfg);
            this.cdr.markForCheck();
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    isAiReadonly(): boolean {
        return this.readonlyConnections || this.state.cfg()?.groqApiKeyReadonly === true;
    }

    isGroqApiKeyReadonly(): boolean {
        return this.state.cfg()?.groqApiKeyReadonly === true;
    }

    async openAiSettings($event: any): Promise<void> {
        await this.aiSettingsDialog.show();
        this.cdr.markForCheck();
    }

    getGroqApiKeyDisplay(): string {
        const key = this.state.cfg()?.groqApiKey || '';
        if (!key) return this.strings().label?.aiGroqApiKeyNotSet || 'Not set';
        if (key.length <= 8) return '****';
        return `${key.slice(0, 4)}...${key.slice(-4)}`;
    }

    // --- Tree Settings ---

    openTreeSettings($event: any): void {
        this.treeSettingsDialog.show({ $event });
    }

    // --- GUI Framework Switch ---

    switchToReact(): void {
        try { localStorage.setItem('p3xr-frontend', 'react'); } catch {}
        try {
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ type: 'p3x-ui-storage-set', key: 'p3xr-frontend', value: 'react' }, '*');
            }
        } catch {}
        location.href = '/react/settings';
    }
}
