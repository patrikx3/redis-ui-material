import { Component, Input, Inject, OnInit, OnDestroy, AfterViewInit, NgZone, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
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
import { RedisStateService } from '../../services/redis-state.service';

require('./console.component.scss');

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
    filteredCommands: { group: string; commands: { name: string; syntax: string }[] }[] = [];
    currentHint = '';


    aiLoading = false;

    get aiAutoDetect(): boolean {
        try { return localStorage.getItem('p3xr-ai-auto-detect') !== 'false'; } catch { return true; }
    }
    set aiAutoDetect(value: boolean) {
        try { localStorage.setItem('p3xr-ai-auto-detect', String(value)); } catch {}
    }

    readonly strings;

    private contentClicked = false;
    private readonly unsubs: Array<() => void> = [];
    private index = 0;
    private singleLineHeight = 0;
    private aiCommandPending = false;

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
    private inputResizeHandler: any;
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
        @Inject(RedisStateService) private readonly state: RedisStateService,
    ) {
        this.strings = this.i18n.strings;
    }

    ngOnInit(): void {
        // Filter commands as user types, grouped by category with syntax hints
        this.searchControl.valueChanges.subscribe((value: string | null) => {
            this.searchText = value || '';
            this.autoResizeTextarea();
            const commands = this.state.commands();
            const meta = this.state.commandsMeta();

            // Show argument hint for a fully typed command
            const firstWord = (value || '').trim().split(/\s+/)[0]?.toUpperCase();
            if (firstWord && meta[firstWord]?.syntax) {
                this.currentHint = firstWord + ' ' + meta[firstWord].syntax;
            } else {
                this.currentHint = '';
            }

            if (value && value.length > 0 && commands?.length > 0) {
                const text = value.toUpperCase();
                const matched = commands
                    .filter((cmd: string) => cmd.toUpperCase().includes(text))
                    .slice(0, 20);

                // Group by category
                const groups = new Map<string, { name: string; syntax: string }[]>();
                for (const cmd of matched) {
                    const info = meta[cmd.toUpperCase()];
                    const group = info?.group || 'Other';
                    const syntax = info?.syntax || '';
                    if (!groups.has(group)) groups.set(group, []);
                    groups.get(group)!.push({ name: cmd, syntax });
                }
                this.filteredCommands = Array.from(groups.entries()).map(([group, cmds]) => ({ group, commands: cmds }));
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
            if (this.inputResizeHandler) {
                this.inputEl.removeEventListener('focus', this.inputResizeHandler);
                this.inputEl.removeEventListener('blur', this.inputResizeHandler);
            }
        }

        window.removeEventListener('resize', this.resizeFn);

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


    isAiGloballyEnabled(): boolean {
        return this.state.cfg()?.aiEnabled !== false;
    }

    // --- Actions ---

    activate(): void {
        if (this.embedded) {
            this.emitToAngularJS('p3xr-console-activate');
            this.forceScrollToBottom();
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
        const fullInput = (this.searchText || '').trim();
        if (!fullInput) return;
        if (this.aiLoading) return;

        try {
            // Split into lines for multi-line execution
            const lines = fullInput.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            if (lines.length === 0) return;

            // EVAL/EVALSHA commands may span multiple lines — execute as single command
            const firstWord = lines[0].split(/\s+/)[0].toUpperCase();
            const isSingleCommand = lines.length === 1 || firstWord === 'EVAL' || firstWord === 'EVALSHA';

            if (isSingleCommand) {
                await this.executeSingleLine(fullInput);
            } else {
                for (const line of lines) {
                    await this.executeSingleLine(line);
                }
            }
        } finally {
            this.updateCommandHistory(fullInput);
            // Don't clear input if AI placed a command for the user to review/execute
            this.currentHint = '';
            if (this.aiCommandPending) {
                this.aiCommandPending = false;
            } else {
                this.searchText = '';
                this.searchControl.setValue('');
                setTimeout(() => this.autoResizeTextarea(), 0);
            }
            this.forceScrollToBottom();

            if (this.type === 'quick' || this.embedded) {
                this.cmd.refresh({ withoutParent: true });
            }
            (this.inputEl as HTMLElement)?.focus();
        }
    }

    private async executeSingleLine(command: string): Promise<void> {
        const enter = command.trim();
        if (!enter) return;

        // Explicit ai: prefix — works when AI is globally enabled in settings
        if (this.state.cfg()?.aiEnabled !== false && /^ai:\s*/i.test(enter)) {
            const prompt = enter.replace(/^ai:\s*/i, '').trim();
            if (prompt) {
                await this.handleAiQuery(prompt, enter);
            }
            return;
        }

        try {
            const response = await this.socket.request({
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
                this.state.currentDatabase.set(response.database);
                this.state.redisChanged.set(true);
                this.socket.stateChanged$.next();
            }
        } catch (e: any) {
            console.error(e);
            const errorMsg = e.message || '';

            // Auto-detect: only when AI is globally enabled AND console toggle is on
            if (this.state.cfg()?.aiEnabled !== false && this.aiAutoDetect && this.looksLikeNaturalLanguage(enter, errorMsg)) {
                const aiSuccess = await this.handleAiQuery(enter, enter);
                if (aiSuccess) return;
                this.outputAppend(`${htmlEncode(enter)}<br/><pre>${this.i18n.strings().code?.[errorMsg] || errorMsg}</pre>`);
                return;
            }

            this.outputAppend(`${htmlEncode(enter)}<br/><pre>${this.i18n.strings().code?.[errorMsg] || errorMsg}</pre>`);
        }
    }

    private looksLikeNaturalLanguage(input: string, errorMsg: string): boolean {
        // Only try AI if Redis returned an unknown/wrong command error
        const isUnknownCmd = /unknown command|wrong number of arguments|ERR unknown/i.test(errorMsg);
        if (!isUnknownCmd) return false;

        // If the first word is a known Redis command, it's probably a syntax error, not natural language
        const firstWord = input.trim().split(/\s+/)[0].toUpperCase();
        if (this.state.commands()?.includes(firstWord)) return false;

        return true;
    }

    private async handleAiQuery(prompt: string, originalInput: string): Promise<boolean> {
        this.aiLoading = true;
        (this.inputEl as HTMLElement)?.focus();

        try {
            // Gather RediSearch indexes for context
            let indexes: string[] = [];
            try {
                const indexResponse = await this.socket.request({ action: 'search-list', payload: {} });
                indexes = indexResponse.data || [];
            } catch { /* no search module, ignore */ }

            // Gather Redis server info for context
            const info = this.state.info() || {};
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
            this.updateCommandHistory(originalInput);

            if (command) {
                let aiLine = `<strong style="color: var(--mat-sys-primary);">AI &rarr;</strong> <code>${htmlEncode(command)}</code>`;
                if (explanation) {
                    aiLine += `<br/><span style="opacity: 0.7; font-size: 0.9em;">${htmlEncode(explanation)}</span>`;
                }
                this.outputAppend(aiLine + '<br/>');
                this.searchText = command;
                this.searchControl.setValue(command, { emitEvent: false });
                this.filteredCommands = [];
                this.aiCommandPending = true;
                setTimeout(() => this.autoResizeTextarea(), 0);
            }
            return true;
        } catch (e: any) {
            console.error('ai-redis-query failed', e);
            const errMsg = e.message || String(e);
            // Show user-friendly error for rate limits
            if (errMsg.includes('429') || errMsg.includes('rate_limit') || errMsg.includes('Rate limit')) {
                this.common.toast(this.i18n.strings().page?.key?.label?.aiRateLimited || 'AI rate limit reached. Try again later or use your own Groq API key in Settings.');
            } else {
                this.common.toast((this.i18n.strings().page?.key?.label?.aiError || 'AI query failed') + ': ' + errMsg);
            }
            return false;
        } finally {
            this.aiLoading = false;
            this.forceScrollToBottom();
            (this.inputEl as HTMLElement)?.focus();
        }
    }

    onKeyDown(event: KeyboardEvent): void {
        // Enter handling: Enter = execute, Shift+Enter = newline
        if (event.key === 'Enter') {
            if (event.shiftKey) {
                // Shift+Enter inserts newline, auto-resize after DOM update
                setTimeout(() => this.autoResizeTextarea(), 0);
                return;
            }
            event.preventDefault();
            this.actionEnter();
            return;
        }

        // Let mat-autocomplete handle ArrowDown/ArrowUp when panel is open
        if (this.filteredCommands.length > 0 && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            return;
        }

        // Plain ArrowUp/Down = scroll textarea; Shift+ArrowUp/Down = command history
        if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
            actionHistoryPosition = -1;
            return;
        }

        if (!event.shiftKey) {
            // Let textarea handle natural cursor/scroll movement
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
        setTimeout(() => this.autoResizeTextarea(), 0);
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
        this.forceScrollToBottom();
        (this.inputEl as HTMLElement)?.focus();
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

        this.resizeFn = debounce(() => this.rawResize(), 100);
        window.addEventListener('resize', this.resizeFn);
        this.rawResize();

        this.persistOutputDebounced = debounce(() => this.persistConsoleOutputNow(), 100);

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
                this.forceScrollToBottom();
            }
            this.rawResize();

            // Paste needs a deferred resize (browser hasn't finished layout when valueChanges fires)
            this.inputEl?.addEventListener('paste', () => {
                setTimeout(() => this.autoResizeTextarea(), 0);
            });

            // Textarea resize on focus/blur
            this.inputResizeHandler = () => setTimeout(() => this.autoResizeTextarea(), 0);
            this.inputEl?.addEventListener('focus', this.inputResizeHandler);
            this.inputEl?.addEventListener('blur', this.inputResizeHandler);

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

        // Non-embedded resize — measure available space directly from DOM positions
        const containerTop = this.containerEl.getBoundingClientRect().top;
        const footerTop = this.footerEl?.getBoundingClientRect().top ?? window.innerHeight;
        const autocompleteHeight = this.autocompleteEl?.offsetHeight || 28;
        const outputHeight = Math.max(footerTop - containerTop - autocompleteHeight, 0);
        this.containerEl.style.height = outputHeight + 'px';
        this.containerEl.style.maxHeight = outputHeight + 'px';
    }

    private autoResizeTextarea(): void {
        const el = this.inputEl as HTMLTextAreaElement;
        if (!el) return;
        if (!this.singleLineHeight) {
            this.singleLineHeight = el.offsetHeight;
        }
        const isFocused = document.activeElement === el;
        // Blurred with multi-line: collapse to single line
        if (!isFocused && (el.value || '').includes('\n')) {
            el.style.height = this.singleLineHeight + 'px';
            el.style.overflowY = 'hidden';
            this.rawResize();
            return;
        }
        el.style.height = this.singleLineHeight + 'px';
        el.style.overflowY = 'hidden';
        // Only grow when focused and there are actual newlines (max 3 lines)
        if ((el.value || '').includes('\n') && el.scrollHeight > el.clientHeight) {
            const maxHeight = this.singleLineHeight * 3;
            const borderHeight = el.offsetHeight - el.clientHeight;
            const needed = el.scrollHeight + borderHeight;
            if (needed > maxHeight) {
                el.style.height = maxHeight + 'px';
                el.style.overflowY = 'auto';
            } else {
                el.style.height = needed + 'px';
            }
        }
        this.rawResize();
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
            // Only auto-scroll if user is near the bottom (within 100px)
            const threshold = 100;
            const isNearBottom = this.scrollers.scrollHeight - this.scrollers.scrollTop - this.scrollers.clientHeight < threshold;
            if (isNearBottom) {
                this.scrollers.scrollTop = this.scrollers.scrollHeight;
                if (this.outputEl) this.outputEl.scrollTop = this.outputEl.scrollHeight;
            }
        }, 0);
    }

    private forceScrollToBottom(): void {
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
