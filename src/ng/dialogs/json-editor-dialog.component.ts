import { Component, Inject, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BreakpointObserver } from '@angular/cdk/layout';
import { I18nService } from '../services/i18n.service';
import { ThemeService } from '../services/theme.service';
import { CommonService } from '../services/common.service';
import { DialogCancelButtonComponent } from '../components/dialog-cancel-button.component';
import { RedisStateService } from '../services/redis-state.service';
import { SettingsService } from '../services/settings.service';

export interface JsonEditorDialogData {
    value: string;
    hideFormatSave?: boolean;
}

@Component({
    selector: 'p3xr-json-editor-dialog',
    standalone: true,
    imports: [
        CommonModule, MatDialogModule, MatButtonModule, MatIconModule,
        MatToolbarModule, MatTooltipModule, DialogCancelButtonComponent,
    ],
    template: `
        <mat-toolbar class="p3xr-dialog-toolbar p3xr-mat-layout-strong">
            <span mat-dialog-title class="p3xr-dialog-title p3xr-dialog-title-with-icon">
                <mat-icon>edit</mat-icon>
                <span>{{ strings().intention?.jsonViewEditor || 'JSON Editor' }}</span>
            </span>
            <button mat-icon-button (click)="close()">
                <mat-icon>close</mat-icon>
            </button>
        </mat-toolbar>

        @if (isJson) {
            <mat-dialog-content
                class="p3xr-dialog-content p3xr-dialog-content-mono p3xr-dialog-content-editor"
                [style.height]="minHeight">
                <div #editorContainer class="p3xr-codemirror-host"></div>
            </mat-dialog-content>
        } @else {
            <mat-dialog-content class="p3xr-dialog-content p3xr-dialog-content-mono p3xr-dialog-content-message">
                {{ strings().label?.jsonViewNotParsable || 'Not valid JSON' }}
            </mat-dialog-content>
        }

        <mat-dialog-actions class="p3xr-dialog-actions">
            <button mat-raised-button class="btn-accent" type="button" (click)="toggleWrap()">
                <mat-icon>{{ lineWrap ? 'wrap_text' : 'notes' }}</mat-icon>
                <span class="hide-sm">{{ lineWrap ? (strings().intention?.unwrap || 'Unwrap') : (strings().intention?.wrap || 'Wrap') }}</span>
            </button>
            <span style="flex: 1"></span>
            <p3xr-dialog-cancel (cancel)="close()"></p3xr-dialog-cancel>

            @if (isJson && !isReadonly) {
                <button mat-raised-button class="btn-primary" type="button" (click)="save(false)"
                    [matTooltip]="strings().intention?.save || 'Save'">
                    <mat-icon>save</mat-icon>
                    <span class="hide-sm">{{ strings().intention?.save || 'Save' }}</span>
                </button>
                @if (!hideFormatSave) {
                    <button mat-raised-button class="btn-primary" type="button" (click)="save(true)"
                        [matTooltip]="strings().intention?.saveWithFormatJson || 'Save Formatted'">
                        <mat-icon>save</mat-icon>
                        <mat-icon>format_line_spacing</mat-icon>
                        <span class="hide-sm">{{ strings().intention?.saveWithFormatJson || 'Save Formatted' }}</span>
                    </button>
                }
            }
        </mat-dialog-actions>
    `,
    styles: [`
        .hide-sm { display: inline; }
        .p3xr-dialog-content-editor { padding: 0 !important; overflow: hidden !important; }
        .p3xr-dialog-content-message { min-height: 320px; }
        .p3xr-codemirror-host { height: 100%; min-height: inherit; }
        .p3xr-codemirror-host .cm-editor { height: 100%; }
        @media (max-width: 959px) { .hide-sm { display: none; } }
    `],
})
export class JsonEditorDialogComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('editorContainer') editorContainer!: ElementRef;

    isJson = false;
    isReadonly = false;
    hideFormatSave = false;
    lineWrap = true;
    minHeight = '400px';
    strings;

    private editorView: any;
    private wrapCompartment: any;
    private EditorViewClass: any;
    private obj: any;
    private resizeHandler: any;

    constructor(
        @Inject(MatDialogRef) private dialogRef: MatDialogRef<JsonEditorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: JsonEditorDialogData,
        @Inject(I18nService) private i18n: I18nService,
        @Inject(ThemeService) private theme: ThemeService,
        @Inject(CommonService) private common: CommonService,
        @Inject(BreakpointObserver) private breakpointObserver: BreakpointObserver,
        @Inject(RedisStateService) private state: RedisStateService,
        @Inject(SettingsService) private settings: SettingsService,
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

        this.isReadonly = this.state.connection()?.readonly === true;
        this.hideFormatSave = this.data.hideFormatSave === true;
        this.updateMinHeight();
    }

    async ngAfterViewInit(): Promise<void> {
        if (!this.isJson || !this.editorContainer) return;

        const { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars,
            drawSelection, highlightActiveLine, rectangularSelection, crosshairCursor } = await import(
            /* webpackChunkName: "codemirror-view" */
            '@codemirror/view'
        );
        const { EditorState, Compartment } = await import(
            /* webpackChunkName: "codemirror-state" */
            '@codemirror/state'
        );
        this.wrapCompartment = new Compartment();
        const { json } = await import(
            /* webpackChunkName: "codemirror-lang-json" */
            '@codemirror/lang-json'
        );
        const { defaultKeymap, history, historyKeymap } = await import(
            /* webpackChunkName: "codemirror-commands" */
            '@codemirror/commands'
        );
        const { bracketMatching, foldGutter, foldKeymap, indentOnInput, syntaxHighlighting, defaultHighlightStyle } = await import(
            /* webpackChunkName: "codemirror-language" */
            '@codemirror/language'
        );
        const { closeBrackets, closeBracketsKeymap } = await import(
            /* webpackChunkName: "codemirror-autocomplete" */
            '@codemirror/autocomplete'
        );
        const { searchKeymap, highlightSelectionMatches } = await import(
            /* webpackChunkName: "codemirror-search" */
            '@codemirror/search'
        );
        const { lintKeymap } = await import(
            /* webpackChunkName: "codemirror-lint" */
            '@codemirror/lint'
        );

        let themeExtension;
        if (this.theme.isDark()) {
            const { oneDark } = await import(
                /* webpackChunkName: "codemirror-theme-dark" */
                '@codemirror/theme-one-dark'
            );
            themeExtension = oneDark;
        } else {
            const { githubLight } = await import(
                /* webpackChunkName: "codemirror-theme-light" */
                '@uiw/codemirror-theme-github'
            );
            themeExtension = githubLight;
        }

        const doc = JSON.stringify(this.obj, null, this.settings.jsonFormat() ?? 2);

        this.EditorViewClass = EditorView;
        this.editorView = new EditorView({
            state: EditorState.create({
                doc: doc,
                extensions: [
                    lineNumbers(),
                    highlightActiveLineGutter(),
                    highlightSpecialChars(),
                    history(),
                    foldGutter(),
                    drawSelection(),
                    indentOnInput(),
                    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
                    bracketMatching(),
                    closeBrackets(),
                    rectangularSelection(),
                    crosshairCursor(),
                    highlightActiveLine(),
                    highlightSelectionMatches(),
                    keymap.of([
                        ...closeBracketsKeymap,
                        ...defaultKeymap,
                        ...searchKeymap,
                        ...historyKeymap,
                        ...foldKeymap,
                        ...lintKeymap,
                    ]),
                    json(),
                    themeExtension,
                    EditorView.theme({
                        '.cm-scroller': {
                            'overflow-x': 'scroll',
                            'scrollbar-width': 'auto',
                        },
                        '.cm-scroller::-webkit-scrollbar': {
                            'height': '12px',
                            'display': 'block',
                        },
                        '.cm-scroller::-webkit-scrollbar-track': {
                            'background': 'rgba(128, 128, 128, 0.1)',
                        },
                        '.cm-scroller::-webkit-scrollbar-thumb': {
                            'background': 'rgba(128, 128, 128, 0.4)',
                            'border-radius': '6px',
                        },
                        '.cm-scroller::-webkit-scrollbar-thumb:hover': {
                            'background': 'rgba(128, 128, 128, 0.6)',
                        },
                    }),
                    this.wrapCompartment.of(this.lineWrap ? EditorView.lineWrapping : []),
                    EditorState.readOnly.of(this.isReadonly),
                ],
            }),
            parent: this.editorContainer.nativeElement,
        });

        // Resize handler
        this.resizeHandler = () => {
            this.updateMinHeight();
        };
        window.addEventListener('resize', this.resizeHandler);
    }

    ngOnDestroy(): void {
        if (this.resizeHandler) {
            window.removeEventListener('resize', this.resizeHandler);
        }
        if (this.editorView) {
            this.editorView.destroy();
            this.editorView = undefined;
        }
    }

    toggleWrap(): void {
        this.lineWrap = !this.lineWrap;
        if (this.editorView && this.wrapCompartment && this.EditorViewClass) {
            this.editorView.dispatch({
                effects: this.wrapCompartment.reconfigure(this.lineWrap ? this.EditorViewClass.lineWrapping : []),
            });
        }
    }

    save(format: boolean): void {
        try {
            const text = this.editorView.state.doc.toString();
            const parsed = JSON.parse(text);
            const result = JSON.stringify(parsed, null, format ? (this.settings.jsonFormat() ?? 2) : 0);
            this.dialogRef.close({ obj: result });
        } catch (e) {
            this.common.generalHandleError(e);
        }
    }

    close(): void {
        this.dialogRef.close(undefined);
    }

    private updateMinHeight(): void {
        const isMobile = this.breakpointObserver.isMatched('(max-width: 959px)');
        this.minHeight = isMobile ? '100%' : `${Math.max(10, window.innerHeight - 100)}px`;
    }
}
