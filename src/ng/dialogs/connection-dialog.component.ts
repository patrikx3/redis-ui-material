import { AfterViewInit, Component, Inject, NgZone, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { I18nService } from '../services/i18n.service';
import { SocketService } from '../services/socket.service';
import { CommonService } from '../services/common.service';
import { AskAuthorizationDialogService } from './ask-authorization-dialog.service';

declare const p3xr: any;

export interface ConnectionDialogData {
    type: 'new' | 'edit';
    model?: any;
}

/**
 * Connection dialog -- Angular replacement for p3xrDialogConnection.
 * Allows creating/editing Redis connections with support for SSH, TLS,
 * cluster, and sentinel modes.
 */
@Component({
    selector: 'p3xr-connection-dialog',
    standalone: true,
    imports: [
        CommonModule, FormsModule, TextFieldModule,
        MatDialogModule, MatFormFieldModule, MatInputModule, MatSelectModule,
        MatSlideToggleModule, MatButtonModule, MatIconModule, MatToolbarModule,
        MatTooltipModule,
        MatAutocompleteModule,
        DialogCancelButtonComponent,
    ],
    template: `
        <form novalidate #p3xrConnectionForm="ngForm" (ngSubmit)="submit()">
            <mat-toolbar class="p3xr-dialog-toolbar p3xr-connection-dialog-toolbar p3xr-mat-layout-strong">
                <span mat-dialog-title class="p3xr-dialog-title">
                    @if (readonlyConnections) {
                        {{ strings().label?.connectiondView }}
                    } @else if (options.type === 'new') {
                        {{ strings().label?.connectiondAdd }}
                    } @else {
                        {{ strings().label?.connectiondEdit }}
                    }
                </span>
                <button mat-icon-button type="button" (click)="cancel()">
                    <mat-icon>close</mat-icon>
                </button>
            </mat-toolbar>

            <mat-dialog-content class="p3xr-dialog-content p3xr-connection-dialog-content">
                <div class="p3xr-padding">

                    <!-- ID field (only for existing connections) -->
                    @if (model.id && options.type !== 'new') {
                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                            <mat-label>{{ strings().label?.id?.id }}</mat-label>
                            <input matInput name="id" [(ngModel)]="model.id" disabled />
                        </mat-form-field>
                        <div class="p3xr-md-input-container-bottom-info">
                            {{ strings().label?.id?.info }}
                        </div>
                    }

                    <!-- Name -->
                    <mat-form-field class="md-block">
                        <mat-label>{{ strings().form?.connection?.label?.name }}</mat-label>
                        <input matInput required name="name" [(ngModel)]="model.name"
                               [disabled]="readonlyConnections" />
                        @if (p3xrConnectionForm.controls['name']?.hasError('required') && p3xrConnectionForm.controls['name']?.touched) {
                            <mat-error>{{ strings().form?.error?.required }}</mat-error>
                        }
                    </mat-form-field>

                    <!-- Group (optional — blank = ungrouped) -->
                    <mat-form-field class="md-block">
                        <mat-label>{{ strings().form?.connection?.label?.group || 'Group' }}</mat-label>
                        <input matInput name="group" [(ngModel)]="model.group"
                               [matAutocomplete]="groupAuto"
                               [disabled]="readonlyConnections" />
                        <mat-autocomplete #groupAuto="matAutocomplete">
                            @for (g of existingGroups; track g) {
                                <mat-option [value]="g">{{ g }}</mat-option>
                            }
                        </mat-autocomplete>
                    </mat-form-field>

                    <!-- SSH toggle -->
                    <span>
                        <mat-slide-toggle name="ssh" [(ngModel)]="model.ssh"
                                          [disabled]="readonlyConnections"
                                          (change)="scheduleTextareaResize()"
                                          style="margin: 0;">
                            {{ model.ssh ? strings().label?.ssh?.on : strings().label?.ssh?.off }}
                        </mat-slide-toggle>

                        @if (model.ssh) {
                            <fieldset>
                                <legend>SSH</legend>

                                <mat-form-field class="md-block">
                                    <mat-label>{{ strings().label?.ssh?.sshHost }}</mat-label>
                                    <input matInput required name="sshHost" [(ngModel)]="model.sshHost"
                                           [disabled]="readonlyConnections" />
                                    @if (p3xrConnectionForm.controls['sshHost']?.hasError('required') && p3xrConnectionForm.controls['sshHost']?.touched) {
                                        <mat-error>{{ strings().form?.error?.required }}</mat-error>
                                    }
                                </mat-form-field>

                                <mat-form-field class="md-block">
                                    <mat-label>{{ strings().label?.ssh?.sshPort }}</mat-label>
                                    <input matInput required name="sshPort" type="number" min="1" max="65535"
                                           [(ngModel)]="model.sshPort" [disabled]="readonlyConnections" />
                                    @if (p3xrConnectionForm.controls['sshPort']?.hasError('required') && p3xrConnectionForm.controls['sshPort']?.touched) {
                                        <mat-error>{{ strings().form?.error?.required }}</mat-error>
                                    }
                                </mat-form-field>

                                <mat-form-field class="md-block">
                                    <mat-label>{{ strings().label?.ssh?.sshUsername }}</mat-label>
                                    <input matInput required name="sshUsername" [(ngModel)]="model.sshUsername"
                                           [disabled]="readonlyConnections" />
                                    @if (p3xrConnectionForm.controls['sshUsername']?.hasError('required') && p3xrConnectionForm.controls['sshUsername']?.touched) {
                                        <mat-error>{{ strings().form?.error?.required }}</mat-error>
                                    }
                                </mat-form-field>

                                <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                    <mat-label>{{ strings().label?.ssh?.sshPassword }}</mat-label>
                                    <input matInput name="sshPassword"
                                           [type]="sshPasswordVisible ? 'text' : 'password'"
                                           [(ngModel)]="model.sshPassword"
                                           [disabled]="readonlyConnections" autocomplete="off" />
                                    @if (!readonlyConnections) {
                                        <button mat-icon-button matSuffix type="button"
                                                (click)="sshPasswordVisible = !sshPasswordVisible">
                                            <mat-icon>{{ sshPasswordVisible ? 'visibility_off' : 'visibility' }}</mat-icon>
                                        </button>
                                    }
                                </mat-form-field>
                                <div class="p3xr-md-input-container-bottom-info">
                                    {{ strings().label?.passwordSecure }}
                                </div>

                                <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                    <mat-label>{{ strings().label?.ssh?.sshPrivateKey }}</mat-label>
                                    <textarea matInput name="sshPrivateKey" [(ngModel)]="model.sshPrivateKey"
                                              [disabled]="readonlyConnections" autocomplete="off"
                                              cdkTextareaAutosize cdkAutosizeMinRows="1" rows="1"></textarea>
                                </mat-form-field>
                                <div class="p3xr-md-input-container-bottom-info">
                                    {{ strings().label?.secureFeature }}
                                </div>
                                <br/>
                            </fieldset>
                        }
                    </span>

                    <br/>

                    <!-- Node 1 -->
                    <fieldset>
                        <legend>Node 1</legend>

                        <mat-form-field class="md-block">
                            <mat-label>{{ strings().form?.connection?.label?.host }}</mat-label>
                            <input matInput name="host" [(ngModel)]="model.host"
                                   [disabled]="readonlyConnections" />
                        </mat-form-field>

                        <mat-form-field class="md-block">
                            <mat-label>{{ strings().form?.connection?.label?.port }}</mat-label>
                            <input matInput name="port" type="number" min="1" max="65535"
                                   [(ngModel)]="model.port" [disabled]="readonlyConnections" />
                            @if (p3xrConnectionForm.controls['port']?.hasError('min') || p3xrConnectionForm.controls['port']?.hasError('max')) {
                                <mat-error>{{ strings().form?.error?.port }}</mat-error>
                            }
                        </mat-form-field>

                        <mat-slide-toggle name="askAuth" [(ngModel)]="model.askAuth"
                                          [disabled]="readonlyConnections">
                            {{ strings().label?.askAuth }}
                        </mat-slide-toggle>

                        <span>
                            <mat-form-field class="md-block">
                                <mat-label>{{ strings().form?.connection?.label?.username }}</mat-label>
                                <input matInput name="username" type="text" [(ngModel)]="model.username"
                                       [disabled]="readonlyConnections" autocomplete="off" />
                            </mat-form-field>

                            <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                <mat-label>{{ strings().form?.connection?.label?.password }}</mat-label>
                                <input matInput name="password"
                                       [type]="passwordVisible ? 'text' : 'password'"
                                       [(ngModel)]="model.password"
                                       [disabled]="readonlyConnections" autocomplete="off" />
                                @if (!readonlyConnections) {
                                    <button mat-icon-button matSuffix type="button"
                                            (click)="passwordVisible = !passwordVisible">
                                        <mat-icon>{{ passwordVisible ? 'visibility_off' : 'visibility' }}</mat-icon>
                                    </button>
                                }
                            </mat-form-field>
                            <div class="p3xr-md-input-container-bottom-info">
                                {{ strings().label?.passwordSecure }}
                            </div>
                            <br/>
                        </span>
                    </fieldset>

                    <br/>

                    <!-- Readonly toggle -->
                    <span>
                        <mat-slide-toggle name="readonly" [(ngModel)]="model.readonly"
                                          [disabled]="readonlyConnections"
                                          style="margin: 0;">
                            {{ model.readonly ? strings().label?.readonly?.on : strings().label?.readonly?.off }}
                        </mat-slide-toggle>
                    </span>

                    <br/>

                    <!-- Cluster / Sentinel toggles -->
                    <div style="display: flex; flex-direction: row; align-items: center;">
                        <div>
                            <mat-slide-toggle name="cluster" [(ngModel)]="model.cluster"
                                              [disabled]="readonlyConnections"
                                              (change)="onClusterChange()"
                                              style="margin: 0;">
                                {{ model.cluster ? strings().label?.cluster?.on : strings().label?.cluster?.off }}
                            </mat-slide-toggle>
                        </div>

                        <div style="margin-left: 15px;">
                            <mat-slide-toggle name="sentinel" [(ngModel)]="model.sentinel"
                                              [disabled]="readonlyConnections"
                                              (change)="onSentinelChange()"
                                              style="margin: 0;">
                                {{ model.sentinel ? strings().label?.sentinel?.on : strings().label?.sentinel?.off }}
                            </mat-slide-toggle>
                        </div>

                        <span style="flex: 1;"></span>

                        @if ((model.cluster === true || model.sentinel === true) && !readonlyConnections) {
                            <div class="p3xr-connection-node-add" (click)="addNode()">
                                {{ strings().label?.addNode }}
                                <button mat-mini-fab class="btn-primary" type="button">
                                    <mat-icon>add</mat-icon>
                                </button>
                            </div>
                        }
                    </div>

                    <!-- Sentinel name -->
                    @if (model.sentinel === true) {
                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                            <mat-label>{{ strings().label?.sentinel?.name }}</mat-label>
                            <input matInput required name="sentinelName" [(ngModel)]="model.sentinelName"
                                   [disabled]="readonlyConnections" />
                            @if (p3xrConnectionForm.controls['sentinelName']?.hasError('required') && p3xrConnectionForm.controls['sentinelName']?.touched) {
                                <mat-error>{{ strings().form?.error?.required }}</mat-error>
                            }
                        </mat-form-field>
                    }

                    <!-- Dynamic nodes -->
                    @if (model.cluster === true || model.sentinel === true) {
                        <div>
                            @for (node of model.nodes; track node.id; let idx = $index; let last = $last) {
                                <fieldset>
                                    <legend>Node {{ idx + 2 }}</legend>

                                    @if (!readonlyConnections) {
                                        <div class="p3xr-connection-node-actions" style="float: right;">
                                            <button mat-mini-fab class="btn-warn" type="button"
                                                    (click)="removeNode($event, idx)"
                                                    [matTooltip]="strings().confirm?.deleteConnectionText">
                                                <mat-icon>delete</mat-icon>
                                            </button>
                                            <button mat-mini-fab class="btn-primary" type="button"
                                                    (click)="addNode(idx)"
                                                    [matTooltip]="strings().label?.addNode">
                                                <mat-icon>add</mat-icon>
                                            </button>
                                        </div>
                                    }
                                    <br/>

                                    @if (node.id) {
                                        <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                            <mat-label>{{ strings().label?.id?.nodeId }}</mat-label>
                                            <input matInput [ngModel]="node.id" [name]="'nodeId' + idx" disabled />
                                        </mat-form-field>
                                        <div class="p3xr-md-input-container-bottom-info">
                                            {{ strings().label?.id?.info }}
                                        </div>
                                    }

                                    <mat-form-field class="md-block">
                                        <mat-label>{{ strings().form?.connection?.label?.host }}</mat-label>
                                        <input matInput [name]="'nodeHost' + idx" [(ngModel)]="node.host"
                                               [disabled]="readonlyConnections" />
                                    </mat-form-field>

                                    <mat-form-field class="md-block">
                                        <mat-label>{{ strings().form?.connection?.label?.port }}</mat-label>
                                        <input matInput required [name]="'nodePort' + idx" type="number"
                                               min="1" max="65535" [(ngModel)]="node.port"
                                               [disabled]="readonlyConnections" />
                                        @if (p3xrConnectionForm.controls['nodePort' + idx]?.hasError('min') || p3xrConnectionForm.controls['nodePort' + idx]?.hasError('max')) {
                                            <mat-error>{{ strings().form?.error?.port }}</mat-error>
                                        }
                                        @if (p3xrConnectionForm.controls['nodePort' + idx]?.hasError('required') && p3xrConnectionForm.controls['nodePort' + idx]?.touched) {
                                            <mat-error>{{ strings().form?.error?.required }}</mat-error>
                                        }
                                    </mat-form-field>

                                    <mat-form-field class="md-block">
                                        <mat-label>{{ strings().form?.connection?.label?.username }}</mat-label>
                                        <input matInput [name]="'nodeUsername' + idx" type="text"
                                               [(ngModel)]="node.username"
                                               [disabled]="readonlyConnections" autocomplete="off" />
                                    </mat-form-field>

                                    <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                        <mat-label>{{ strings().form?.connection?.label?.password }}</mat-label>
                                        <input matInput [name]="'nodePassword' + idx"
                                               [type]="nodePasswordVisible[idx] ? 'text' : 'password'"
                                               [(ngModel)]="node.password"
                                               [disabled]="readonlyConnections" autocomplete="off" />
                                        @if (!readonlyConnections) {
                                            <button mat-icon-button matSuffix type="button"
                                                    (click)="nodePasswordVisible[idx] = !nodePasswordVisible[idx]">
                                                <mat-icon>{{ nodePasswordVisible[idx] ? 'visibility_off' : 'visibility' }}</mat-icon>
                                            </button>
                                        }
                                    </mat-form-field>
                                    <div class="p3xr-md-input-container-bottom-info">
                                        {{ strings().label?.passwordSecure }}
                                    </div>
                                </fieldset>
                                @if (!last) {
                                    <div style="margin-bottom: 16px;">&nbsp;</div>
                                }
                                <div style="clear: both;"></div>
                            }
                        </div>
                    }

                    <div class="p3xr-connection-inline-toggles p3xr-connection-tls-toggles">
                        <!-- TLS without cert -->
                        <mat-slide-toggle name="tlsWithoutCert" [(ngModel)]="model.tlsWithoutCert"
                                          (change)="scheduleTextareaResize()"
                                          [disabled]="readonlyConnections">
                            {{ strings().label?.tlsWithoutCert }}
                        </mat-slide-toggle>

                        <!-- TLS reject unauthorized -->
                        <mat-slide-toggle name="tlsRejectUnauthorized" [(ngModel)]="model.tlsRejectUnauthorized"
                                          [disabled]="readonlyConnections">
                            {{ strings().label?.tlsRejectUnauthorized }}
                        </mat-slide-toggle>
                    </div>

                    <!-- TLS cert fields -->
                    @if (model.tlsWithoutCert !== true) {
                        <div class="p3xr-connection-tls-fields">
                            <fieldset>
                                <legend>TLS</legend>

                                <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                    <mat-label>TLS (redis.crt)</mat-label>
                                    <textarea matInput name="tlsCrt" [(ngModel)]="model.tlsCrt"
                                              [disabled]="readonlyConnections" autocomplete="off"
                                              cdkTextareaAutosize cdkAutosizeMinRows="1" rows="1"></textarea>
                                </mat-form-field>
                                <div class="p3xr-md-input-container-bottom-info">
                                    {{ strings().label?.tlsSecure }}
                                </div>
                                <br/>

                                <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                    <mat-label>TLS (redis.key)</mat-label>
                                    <textarea matInput name="tlsKey" [(ngModel)]="model.tlsKey"
                                              [disabled]="readonlyConnections" autocomplete="off"
                                              cdkTextareaAutosize cdkAutosizeMinRows="1" rows="1"></textarea>
                                </mat-form-field>
                                <div class="p3xr-md-input-container-bottom-info">
                                    {{ strings().label?.tlsSecure }}
                                </div>
                                <br/>

                                <mat-form-field class="md-block p3xr-md-input-container-no-bottom">
                                    <mat-label>TLS (ca.crt)</mat-label>
                                    <textarea matInput name="tlsCa" [(ngModel)]="model.tlsCa"
                                              [disabled]="readonlyConnections" autocomplete="off"
                                              cdkTextareaAutosize cdkAutosizeMinRows="1" rows="1"></textarea>
                                </mat-form-field>
                                <div class="p3xr-md-input-container-bottom-info">
                                    {{ strings().label?.tlsSecure }}
                                </div>
                                <br/>
                            </fieldset>
                        </div>
                    }

                </div>
            </mat-dialog-content>

            <mat-dialog-actions class="p3xr-dialog-actions p3xr-dialog-connection-actions">
                <p3xr-dialog-cancel (cancel)="cancel()"></p3xr-dialog-cancel>

                <span class="p3xr-mat-common">
                    <button mat-raised-button class="btn-primary" type="button" (click)="testConnection($event)">
                        <i class="fas fa-plug"></i>
                        {{ strings().intention?.testConnection }}
                    </button>
                </span>

                @if (!readonlyConnections) {
                    <button mat-raised-button class="btn-primary" type="submit">
                        <mat-icon style="font-size: 24px; width: 24px; height: 24px;">{{ options.type === 'new' ? 'add' : 'save' }}</mat-icon>
                        {{ options.type === 'new' ? strings().intention?.add : strings().intention?.save }}
                    </button>
                }
            </mat-dialog-actions>
        </form>
    `,
    styles: [`
        .md-block { width: 100%; }
        .p3xr-hide-xs { }
        .p3xr-show-xs { display: none; }
        @media (max-width: 699px) {
            .p3xr-hide-xs { display: none; }
            .p3xr-show-xs { display: inline; }
        }
    `],
})
export class ConnectionDialogComponent implements AfterViewInit {

    @ViewChild('p3xrConnectionForm') formRef!: NgForm;
    @ViewChildren(CdkTextareaAutosize) autosizeTextareas!: QueryList<CdkTextareaAutosize>;

    options: ConnectionDialogData;
    model: any;
    strings;
    existingGroups: string[] = [];
    groupEnabled = false;

    // Password visibility toggles
    passwordVisible = false;
    sshPasswordVisible = false;
    nodePasswordVisible: Record<number, boolean> = {};

    // Readonly connections mode from global state
    get readonlyConnections(): boolean {
        return !!p3xr?.state?.cfg?.readonlyConnections;
    }

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<ConnectionDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: ConnectionDialogData,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(SocketService) private socketService: SocketService,
        @Inject(CommonService) private commonService: CommonService,
        @Inject(AskAuthorizationDialogService) private askAuthDialogService: AskAuthorizationDialogService,
        @Inject(NgZone) private ngZone: NgZone,
    ) {
        this.strings = this.i18n.strings;
        this.options = data;
        this.model = this.initModel(data);

        // Collect existing group names for autocomplete
        const connections = p3xr?.state?.connections?.list || [];
        const groups = new Set<string>();
        for (const conn of connections) {
            if (conn.group && typeof conn.group === 'string' && conn.group.trim()) {
                groups.add(conn.group.trim());
            }
        }
        this.existingGroups = [...groups].sort();
        this.groupEnabled = !!this.model.group?.trim();
    }

    onGroupToggle(): void {
        if (!this.groupEnabled) {
            this.model.group = undefined;
        }
    }

    ngAfterViewInit(): void {
        this.scheduleTextareaResize();
        this.autosizeTextareas.changes.subscribe(() => this.scheduleTextareaResize());
    }

    scheduleTextareaResize(): void {
        this.ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    this.autosizeTextareas?.forEach((textarea) => textarea.resizeToFitContent(true));
                });
            });
        });
    }

    private initModel(data: ConnectionDialogData): any {
        let model: any;

        if (data.model !== undefined) {
            model = p3xr.clone(data.model);
            // For existing connections, set sensitive fields to the model id
            // (server-side resolves these by id)
            model.password = data.model.id;
            model.tlsCrt = data.model.id;
            model.tlsKey = data.model.id;
            model.tlsCa = data.model.id;
            model.sshPassword = data.model.id;
            model.sshPrivateKey = data.model.id;
        } else {
            model = {
                name: undefined,
                host: undefined,
                port: 6379,
                askAuth: false,
                password: undefined,
                username: undefined,
                id: undefined,
                group: undefined,
                readonly: undefined,
                tlsWithoutCert: false,
                tlsRejectUnauthorized: false,
                tlsCrt: undefined,
                tlsKey: undefined,
                tlsCa: undefined,
            };
        }

        // Ensure SSH fields exist
        if (!model.hasOwnProperty('ssh')) {
            model = {
                ...model,
                ssh: false,
                sshHost: undefined,
                sshPort: 22,
                sshUsername: undefined,
                sshPassword: data.model?.id,
                sshPrivateKey: data.model?.id,
            };
        }

        if (!model.hasOwnProperty('cluster')) {
            model.cluster = false;
        }
        if (!model.hasOwnProperty('sentinel')) {
            model.sentinel = false;
        }
        if (!model.hasOwnProperty('nodes')) {
            model.nodes = [];
        }

        // For existing nodes, set password to node id (server-side resolves)
        for (const node of model.nodes) {
            node.password = node.id;
        }

        return model;
    }

    // --- Cluster/Sentinel mutual exclusion ---

    onClusterChange(): void {
        if (this.model.cluster === true) {
            this.model.sentinel = false;
        }
    }

    onSentinelChange(): void {
        if (this.model.sentinel === true) {
            this.model.cluster = false;
        }
    }

    // --- Node management ---

    addNode(index?: number): void {
        const newNode = {
            host: undefined,
            port: undefined,
            password: undefined,
            username: undefined,
            id: p3xr.nextId(),
        };
        if (index === undefined) {
            this.model.nodes.push(newNode);
        } else {
            this.model.nodes.splice(index + 1, 0, newNode);
        }
    }

    async removeNode(ev: Event, index: number): Promise<void> {
        try {
            await this.commonService.confirm({
                event: ev,
                message: this.strings().confirm?.deleteConnectionText,
            });
            this.model.nodes.splice(index, 1);
            this.commonService.toast({
                message: this.strings().status?.nodeRemoved,
            });
        } catch (e) {
            if (e === undefined) {
                return;
            }
            this.commonService.generalHandleError(e);
        }
    }

    // --- Form validation ---

    private handleInvalidForm(): boolean {
        if (this.formRef && this.formRef.invalid) {
            this.commonService.toast({
                message: this.strings().form?.error?.invalid,
            });
            return false;
        }
        return true;
    }

    // --- Test connection ---

    async testConnection($event: Event): Promise<void> {
        // Mark form as submitted to trigger validation display
        if (this.formRef) {
            Object.keys(this.formRef.controls).forEach(key => {
                this.formRef.controls[key].markAsTouched();
            });
        }

        if (!this.handleInvalidForm()) {
            return;
        }

        try {
            const authModel = p3xr.clone(this.model);

            if (this.model.askAuth === true) {
                const auth = await this.askAuthDialogService.show({
                    $event: $event,
                });
                authModel.username = undefined;
                authModel.password = undefined;
                if (auth.username) {
                    authModel.username = auth.username;
                }
                if (auth.password) {
                    authModel.password = auth.password;
                }
            }

            p3xr.ui.overlay.show({
                message: this.strings().title?.connectingRedis,
            });

            const response = await this.socketService.request({
                action: 'redis-test-connection',
                payload: {
                    model: authModel,
                },
            });
            console.warn('response', response);
            this.commonService.toast({
                message: this.strings().status?.redisConnected,
            });
        } catch (e) {
            this.commonService.generalHandleError(e);
        } finally {
            p3xr.ui.overlay.hide();
        }
    }

    // --- Save ---

    async submit(): Promise<void> {
        if (!this.handleInvalidForm()) {
            return;
        }

        if (this.model.host === undefined) {
            this.model.host = 'localhost';
        }
        if (this.model.port === undefined) {
            this.model.port = 6379;
        }
        if (this.options.type === 'new') {
            this.model.id = p3xr.nextId();
        }
        for (const node of this.model.nodes) {
            if (node.host === undefined) {
                node.host = 'localhost';
            }
            if (node.id === undefined) {
                node.id = p3xr.nextId();
            }
        }

        try {
            const saveModel = p3xr.clone(this.model);

            // Trim group name to avoid inconsistencies
            if (typeof saveModel.group === 'string') {
                saveModel.group = saveModel.group.trim() || undefined;
            }

            await this.socketService.request({
                action: 'connection-save',
                payload: {
                    model: saveModel,
                },
            });
            this.commonService.toast({
                message: this.options.type === 'new'
                    ? this.strings().status?.added
                    : this.strings().status?.saved,
            });
            this.dialogRef.close(undefined);
        } catch (e) {
            this.commonService.generalHandleError(e);
        }
    }

    // --- Cancel ---

    cancel(): void {
        this.dialogRef.close(undefined);
    }
}
