import { Component, Input, Inject, OnInit, OnDestroy, AfterViewInit, NgZone, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { P3xrButtonComponent } from '../../components/p3xr-button.component';
import { I18nService } from '../../services/i18n.service';
import { CommonService } from '../../services/common.service';
import { SocketService } from '../../services/socket.service';
import { RedisParserService } from '../../services/redis-parser.service';
import { MainCommandService } from '../../services/main-command.service';

require('./console.component.scss');

declare const p3xr: any;

const htmlEncode = (globalThis as any).htmlEncode;
const consoleOutputStorageKey = 'p3xr-console-output-v1';
const consoleOutputMaxBytes = 10 * 1024 * 1024;

let actionHistoryPosition = -1;

@Component({
    selector: 'p3xr-console',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        P3xrButtonComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './console.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsoleComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() type: string = '';
    @Input() embedded: boolean = false;

    searchText = '';
    searchControl = new FormControl('');
    monitorEnabled = false;
    monitorPattern = '*';
    showMonitorPopup = false;
    filteredCommands: string[] = [];

    aiLoading = false;

    readonly strings;

    private contentClicked = false;
    private readonly unsubs: Array<() => void> = [];
    private index = 0;
    private monitorPopupTimeout: any = null;
    private monitorPatternDebounce: any = null;

    // DOM references
    private containerEl: HTMLElement | null = null;
    private headerEl: HTMLElement | null = null;
    private footerEl: HTMLElement | null = null;
    private consoleHeaderEl: HTMLElement | null = null;
    private outputEl: HTMLElement | null = null;
    private autocompleteEl: HTMLElement | null = null;
    private inputEl: HTMLElement | null = null;
    private scrollers: HTMLElement | null = null;
    private persistOutputDebounced: any;
    private inputFocusHandler: any;
    private inputBlurHandler: any;
    private resizeFn: any;

    constructor(
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(I18nService) private readonly i18n: I18nService,
        @Inject(CommonService) private readonly common: CommonService,
        @Inject(SocketService) private readonly socket: SocketService,
        @Inject(RedisParserService) private readonly redisParser: RedisParserService,
        @Inject(MainCommandService) private readonly cmd: MainCommandService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        this.monitorEnabled = p3xr.state.monitor ?? false;
        this.monitorPattern = p3xr.state.monitorPattern ?? '*';

        // Filter commands as user types
        this.searchControl.valueChanges.subscribe((value: string | null) => {
            this.searchText = value || '';
            if (value && value.length > 0 && p3xr.state.commands?.length > 0) {
                const text = value.toUpperCase();
                this.filteredCommands = p3xr.state.commands
                    .filter((cmd: string) => cmd.toUpperCase().includes(text))
                    .slice(0, 15);
            } else {
                this.filteredCommands = [];
            }
        });
    }

    ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => this.initJQuery());
    }

    ngOnDestroy(): void {
        this.elementRef.nativeElement.classList.remove('p3xr-console-embedded-collapsed');

        if (this.persistOutputDebounced?.flush) {
            this.persistOutputDebounced.flush();
        } else {
            this.persistConsoleOutputNow();
        }

        if (this.inputEl) {
            if (this.inputFocusHandler) this.inputEl.removeEventListener('focus', this.inputFocusHandler);
            if (this.inputBlurHandler) this.inputEl.removeEventListener('blur', this.inputBlurHandler);
        }

        window.removeEventListener('resize', this.resizeFn);

        this.socket.getClient()?.removeListener?.('pubsub-message', this.onPubSubMessage);
        if (this.monitorPopupTimeout) clearTimeout(this.monitorPopupTimeout);
        if (this.monitorPatternDebounce) clearTimeout(this.monitorPatternDebounce);
        this.unsubs.forEach(fn => fn());
    }

    // --- Event emission via Angular services ---

    private emitToAngularJS(eventName: string, payload?: any): void {
        switch (eventName) {
            case 'p3xr-console-activate':
                this.cmd.consoleActivate$.next();
                break;
            case 'p3xr-console-deactivate':
                this.cmd.consoleDeactivate$.next();
                break;
            case 'p3xr-console-embedded-resize':
                this.cmd.consoleEmbeddedResize$.next();
                break;
            default:
                // Other events (p3xr-quick-console, p3xr-quick-console-quit) — noop for now
                break;
        }
    }


    // --- Actions ---

    activate(): void {
        if (this.embedded) {
            this.emitToAngularJS('p3xr-console-activate');
        }
    }

    onContentMouseDown(event: MouseEvent): void {
        // Flag that user clicked inside console content (for text selection/copy)
        // This prevents the blur handler from collapsing the console
        this.contentClicked = true;
        setTimeout(() => { this.contentClicked = false; }, 500);
    }

    private aiExecuting = false;

    async actionEnter(): Promise<void> {
        const enter = (this.searchText || '').trim();
        if (!enter || this.aiLoading) return;

        // Explicit ai: prefix — go straight to AI (if enabled)
        if (p3xr.state.cfg?.aiEnabled !== false && /^ai:\s*/i.test(enter)) {
            const prompt = enter.replace(/^ai:\s*/i, '').trim();
            if (prompt) {
                await this.handleAiQuery(prompt, enter);
            }
            return;
        }

        let response: any;
        try {
            response = await this.socket.request({
                action: 'console',
                payload: { command: enter },
            });

            const result = htmlEncode(String(this.redisParser.consoleParse(response.result)));
            if (this.aiExecuting) {
                const trimmed = result.replace(/&nbsp;/g, '').trim();
                if (trimmed.length > 0 && this.outputEl) {
                    this.outputEl.insertAdjacentHTML('beforeend', `<span data-index="${this.index++}" class="p3xr-console-ai-result"><pre>${result}</pre><br/></span>`);
                    this.persistOutputDebounced?.();
                }
            } else {
                this.outputAppend(`${htmlEncode(enter)}<br/><pre>${result}</pre>`);
            }

            if (response.hasOwnProperty('database')) {
                p3xr.state.currentDatabase = response.database;
                p3xr.state.redisChanged = true;
                this.socket.stateChanged$.next();
            }
            this.searchText = '';
            this.searchControl.setValue('');
        } catch (e: any) {
            console.error(e);
            const errorMsg = e.message || '';

            // If Redis doesn't recognize the command, silently try AI (if enabled)
            if (p3xr.state.cfg?.aiEnabled !== false && this.looksLikeNaturalLanguage(enter, errorMsg)) {
                const aiSuccess = await this.handleAiQuery(enter, enter);
                if (aiSuccess) return;
                // AI also failed — show the original Redis error
                this.outputAppend(`${htmlEncode(enter)}<br/><pre>${this.i18n.strings().code?.[errorMsg] || errorMsg}</pre>`);
                return;
            }

            this.outputAppend(`${htmlEncode(enter)}<br/><pre>${this.i18n.strings().code?.[errorMsg] || errorMsg}</pre>`);
        } finally {
            const history = response?.generatedCommand ?? enter;
            this.updateCommandHistory(history);
            this.scrollOutputToBottom();

            if (this.type === 'quick' || this.embedded) {
                this.cmd.refresh({ withoutParent: true });
            }
        }
    }

    private looksLikeNaturalLanguage(input: string, errorMsg: string): boolean {
        // Only try AI if Redis returned an unknown/wrong command error
        const isUnknownCmd = /unknown command|wrong number of arguments|ERR unknown/i.test(errorMsg);
        if (!isUnknownCmd) return false;

        // Check if input looks like natural language (contains spaces and isn't a known Redis pattern)
        const words = input.trim().split(/\s+/);
        if (words.length < 2) return false;

        // If the first word is a known Redis command, it's probably a syntax error, not natural language
        const firstWord = words[0].toUpperCase();
        if (p3xr.state.commands?.includes(firstWord)) return false;

        return true;
    }

    private async handleAiQuery(prompt: string, originalInput: string): Promise<boolean> {
        this.aiLoading = true;

        try {
            // Gather RediSearch indexes for context
            let indexes: string[] = [];
            try {
                const indexResponse = await this.socket.request({ action: 'search-list', payload: {} });
                indexes = indexResponse.data || [];
            } catch { /* no search module, ignore */ }

            // Gather Redis server info for context
            const info = p3xr.state.info || {};
            const redisContext: any = { indexes };
            if (info.redis_version) redisContext.redisVersion = info.redis_version;
            if (info.redis_mode) redisContext.redisMode = info.redis_mode;
            if (info.os) redisContext.os = info.os;
            if (info.connected_clients) redisContext.connectedClients = info.connected_clients;
            if (info.used_memory_human) redisContext.usedMemory = info.used_memory_human;
            if (info.db0 || info.db1) redisContext.databases = Object.keys(info).filter((k: string) => /^db\d+$/.test(k)).map((k: string) => `${k}: ${info[k]}`);
            if (info.modules) redisContext.modules = info.modules;
            redisContext.uiLanguage = this.i18n.currentLang();

            const response = await this.socket.request({
                action: 'ai-redis-query',
                payload: {
                    prompt,
                    context: redisContext,
                },
            });

            const command = response.command || '';
            const explanation = response.explanation || '';

            this.outputAppend(htmlEncode(originalInput));
            if (command) {
                let aiLine = `<strong style="color: var(--mat-sys-primary);">AI &rarr;</strong> <code>${htmlEncode(command)}</code>`;
                if (explanation) {
                    aiLine += `<br/><span style="opacity: 0.7; font-size: 0.9em;">${htmlEncode(explanation)}</span>`;
                }
                this.outputAppend(aiLine);
            }
            this.updateCommandHistory(originalInput);

            // Auto-execute the generated command
            if (command) {
                this.searchText = command;
                this.searchControl.setValue(command);
                this.aiLoading = false;
                this.aiExecuting = true;
                try {
                    await this.actionEnter();
                } finally {
                    this.aiExecuting = false;
                }
            }
            return true;
        } catch (e: any) {
            console.error('ai-redis-query failed', e);
            return false;
        } finally {
            this.aiLoading = false;
            this.scrollOutputToBottom();
            (this.inputEl as HTMLElement)?.focus();
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        // Let mat-autocomplete handle ArrowDown/ArrowUp when panel is open
        if (this.filteredCommands.length > 0 && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            return;
        }

        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
            actionHistoryPosition = -1;
            return;
        }

        const actionHistory = this.getActionHistory();
        if (actionHistory.length < 1) return;

        event.preventDefault();
        event.stopPropagation();

        if (event.key === 'ArrowDown') {
            if (actionHistoryPosition === -1) actionHistoryPosition = actionHistory.length;
            actionHistoryPosition--;
            if (actionHistoryPosition < 0) actionHistoryPosition = actionHistory.length - 1;
        } else {
            actionHistoryPosition++;
            if (actionHistoryPosition >= actionHistory.length) actionHistoryPosition = 0;
        }

        const value = actionHistory[actionHistoryPosition] ?? '';
        this.searchText = value;
        this.searchControl.setValue(value, { emitEvent: false });
    }

    onAutocompleteSelected(event: any): void {
        this.searchText = event.option.value;
    }

    clearConsole(): void {
        if (!this.outputEl) return;
        this.outputEl.innerHTML = '';
        this.outputAppend('<strong>' + (this.i18n.strings().label?.welcomeConsole ?? 'Welcome to the Redis Console') + '</strong>');
        this.outputAppend((this.i18n.strings().label?.welcomeConsoleInfo ?? 'Cursor UP or DOWN history is enabled') + '<br/>');
        this.persistConsoleOutputNow();
        this.scrollOutputToBottom();
        (this.inputEl as HTMLElement)?.focus();
    }

    async setMonitorState(): Promise<void> {
        try {
            p3xr.state.monitor = this.monitorEnabled;
            await this.socket.request({
                action: 'set-subscription',
                payload: {
                    subscription: this.monitorEnabled,
                    subscriberPattern: p3xr.state.monitorPattern,
                },
            });
        } catch (e) {
            this.common.generalHandleError(e);
            this.monitorEnabled = false;
            p3xr.state.monitor = false;
        }
    }

    toggleMonitor(): void {
        // checkbox ngModelChange handles the state
    }

    onMonitorMouseEnter(): void {
        if (this.embedded && this.elementRef.nativeElement.classList.contains('p3xr-console-embedded-collapsed')) {
            return;
        }
        if (this.monitorPopupTimeout) {
            clearTimeout(this.monitorPopupTimeout);
            this.monitorPopupTimeout = null;
        }
        this.showMonitorPopup = true;
    }

    onMonitorMouseLeave(): void {
        if (this.monitorPopupTimeout) {
            clearTimeout(this.monitorPopupTimeout);
        }
        this.monitorPopupTimeout = setTimeout(() => {
            this.showMonitorPopup = false;
            this.monitorPopupTimeout = null;
        }, 1000);
    }

    onMonitorPatternChange(value: string): void {
        this.monitorPattern = value;
        p3xr.state.monitorPattern = value;
        if (this.monitorPatternDebounce) {
            clearTimeout(this.monitorPatternDebounce);
        }
        this.monitorPatternDebounce = setTimeout(() => {
            this.setMonitorState();
            this.monitorPatternDebounce = null;
        }, 1000);
    }

    openCommands(event: Event): void {
        window.open('https://redis.io/docs/latest/commands/', '_blank');
    }

    closeConsole(): void {
        this.emitToAngularJS('p3xr-quick-console-quit');
    }

    dragStart(): void {
        if (this.embedded) return;
        this.emitToAngularJS('p3xr-quick-console', { start: true });
    }

    dragEnd(): void {
        if (this.embedded) return;
        this.emitToAngularJS('p3xr-quick-console', { start: false });
    }

    // --- DOM init ---

    private initJQuery(): void {
        const debounce = require('lodash/debounce');
        const rootEl = this.elementRef.nativeElement;

        this.containerEl = rootEl.querySelector('#p3xr-console-content');
        this.headerEl = document.getElementById('p3xr-layout-header-container');
        this.footerEl = document.getElementById('p3xr-layout-footer-container');
        this.consoleHeaderEl = rootEl.querySelector('#p3xr-console-header');
        this.outputEl = rootEl.querySelector('#p3xr-console-content-output');
        this.autocompleteEl = rootEl.querySelector('#p3xr-console-autocomplete');
        this.scrollers = this.containerEl;

        this.resizeFn = debounce(() => this.rawResize(), p3xr.settings.debounce);
        window.addEventListener('resize', this.resizeFn);
        this.rawResize();

        this.persistOutputDebounced = debounce(() => this.persistConsoleOutputNow(), p3xr.settings.debounce);

        // PubSub listener
        this.socket.getClient()?.on?.('pubsub-message', this.onPubSubMessage);

        // Listen for resize events from main component
        const resizeSub = this.cmd.consoleEmbeddedResize$.subscribe(() => {
            if (this.embedded) this.rawResize();
        });
        this.unsubs.push(() => resizeSub.unsubscribe());

        // Setup input after a tick
        setTimeout(() => {
            this.inputEl = rootEl.querySelector('#p3xr-console-input');
            this.setInputTheme();

            if (!this.restoreConsoleOutput()) {
                this.clearConsole();
            } else {
                this.scrollOutputToBottom();
            }
            this.rawResize();

            // Embedded focus/blur handlers
            if (this.embedded) {
                this.inputFocusHandler = () => {
                    this.emitToAngularJS('p3xr-console-activate');
                };
                this.inputBlurHandler = () => {
                    setTimeout(() => {
                        // Don't collapse if user clicked inside console content
                        if (this.contentClicked) return;
                        const active = document.activeElement;
                        if (active?.id === 'p3xr-console-input') return;
                        const root = this.elementRef.nativeElement;
                        if (root && active && root.contains(active)) return;
                        // Don't deactivate if user is selecting text in the console output
                        const selection = window.getSelection();
                        if (selection && selection.toString().length > 0) {
                            const range = selection.getRangeAt?.(0);
                            if (range && root?.contains(range.commonAncestorContainer)) return;
                        }
                        this.emitToAngularJS('p3xr-console-deactivate');
                    }, 0);
                };
                this.inputEl?.addEventListener('focus', this.inputFocusHandler);
                this.inputEl?.addEventListener('blur', this.inputBlurHandler);
            }
        });
    }

    private onPubSubMessage = (data: any): void => {
        if (p3xr.state.monitor === false) return;
        const message = htmlEncode(String(data.message));
        this.outputAppend(`<strong>PubSub channel:</strong> ${data.channel}<br/><pre>${message}</pre>`);
        if (this.scrollers) this.scrollers.scrollTop = this.scrollers.scrollHeight;
    };

    private setInputTheme(): void {
        if (!this.inputEl) return;
        this.inputEl.style.borderColor = 'var(--p3xr-input-border-color, var(--p3xr-border-color))';
        this.inputEl.style.backgroundColor = 'var(--p3xr-input-bg)';
        this.inputEl.style.color = 'var(--p3xr-input-color)';
    }

    private rawResize(): void {
        if (!this.containerEl) return;

        if (this.embedded) {
            const hostElement = this.elementRef.nativeElement;
            const hostRect = hostElement?.getBoundingClientRect();
            const hostHeight = hostRect?.height || Math.floor(window.innerHeight * 0.33);
            const headerHeight = this.consoleHeaderEl?.offsetHeight || 0;
            const autocompleteHeight = this.autocompleteEl?.offsetHeight || 44;
            const collapsed = hostHeight <= 120;

            hostElement.classList.toggle('p3xr-console-embedded-collapsed', collapsed);

            const outputHeight = collapsed ? 0 : Math.max(hostHeight - headerHeight - autocompleteHeight, 0);
            this.containerEl.style.height = outputHeight + 'px';
            this.containerEl.style.maxHeight = outputHeight + 'px';
            this.containerEl.style.overflow = collapsed ? 'hidden' : 'auto';
            this.containerEl.style.display = collapsed ? 'none' : 'block';
            if (this.outputEl) {
                this.outputEl.style.display = collapsed ? 'none' : 'block';
            }
            return;
        }

        // Non-embedded resize
        let minus = 0;
        for (const el of [this.headerEl, this.footerEl, this.consoleHeaderEl]) {
            if (el) minus += el.offsetHeight;
        }

        const windowHeight = window.innerHeight;
        const adjustments = this.type === 'quick' ? 105 : 70;
        const outputHeight = Math.max(windowHeight - minus - adjustments, 0);
        this.containerEl.style.height = outputHeight + 'px';
        this.containerEl.style.maxHeight = outputHeight + 'px';
    }

    // --- Output management ---

    private outputAppend(message: string): void {
        if (!this.outputEl) return;
        const stripped = (message || '').replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, '').trim();
        if (!stripped) return;
        this.outputEl.insertAdjacentHTML('beforeend', `<span data-index="${this.index++}" class="p3xr-console-content-output-item">${message}<br/></span>`);
        this.trimOutputToLimit(consoleOutputMaxBytes);
        this.persistOutputDebounced?.();
        this.scrollOutputToBottom();
    }

    private scrollOutputToBottom(): void {
        setTimeout(() => {
            if (!this.scrollers) return;
            this.scrollers.scrollTop = this.scrollers.scrollHeight;
            if (this.outputEl) this.outputEl.scrollTop = this.outputEl.scrollHeight;
        }, 0);
    }

    private trimOutputToLimit(maxBytes: number): void {
        if (!this.outputEl) return;
        let html = this.outputEl.innerHTML || '';
        while (this.getByteSize(html) > maxBytes) {
            if (!this.dropOldestOutputChunk()) break;
            html = this.outputEl.innerHTML || '';
        }
    }

    private dropOldestOutputChunk(): boolean {
        if (!this.outputEl) return false;
        const items = this.outputEl.querySelectorAll('.p3xr-console-content-output-item');
        if (items.length < 1) return false;
        const removeCount = Math.max(Math.floor(items.length * 0.1), 1);
        for (let i = 0; i < removeCount; i++) items[i].remove();
        return true;
    }

    private getByteSize(value: string): number {
        try { return new Blob([value || '']).size; }
        catch { return (value || '').length; }
    }

    private persistConsoleOutputNow(): void {
        if (!this.outputEl) return;
        this.trimOutputToLimit(consoleOutputMaxBytes);
        while (true) {
            const html = this.outputEl.innerHTML || '';
            try { localStorage.setItem(consoleOutputStorageKey, html); return; }
            catch {
                if (!this.dropOldestOutputChunk()) {
                    try { localStorage.removeItem(consoleOutputStorageKey); } catch { /* ignore */ }
                    return;
                }
            }
        }
    }

    private restoreConsoleOutput(): boolean {
        if (!this.outputEl) return false;
        let stored = '';
        try { stored = localStorage.getItem(consoleOutputStorageKey) || ''; } catch { stored = ''; }
        if (!stored) return false;

        this.outputEl.innerHTML = stored;
        this.trimOutputToLimit(consoleOutputMaxBytes);
        this.persistConsoleOutputNow();

        const items = this.outputEl.querySelectorAll('.p3xr-console-content-output-item');
        const lastItem = items.length > 0 ? items[items.length - 1] : null;
        if (lastItem) {
            const lastIndex = Number(lastItem.getAttribute('data-index'));
            if (Number.isFinite(lastIndex)) this.index = lastIndex + 1;
        }
        return true;
    }

    // --- Command history ---

    private getActionHistory(): string[] {
        try { return JSON.parse(localStorage.getItem('console-history') || '[]'); }
        catch { return []; }
    }

    private updateCommandHistory(entry: string): void {
        let history = this.getActionHistory();
        const idx = history.indexOf(entry);
        if (idx > -1) history.splice(idx, 1);
        history.unshift(entry);
        if (history.length > 20) history = history.slice(0, 20);
        localStorage.setItem('console-history', JSON.stringify(history));
        actionHistoryPosition = -1;
    }
}
