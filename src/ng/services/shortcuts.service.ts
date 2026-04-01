import { Injectable, Inject } from '@angular/core';
import { I18nService } from './i18n.service';
import { NavigationService } from './navigation.service';
import { MainCommandService } from './main-command.service';
import { SocketService } from './socket.service';
import { CommonService } from './common.service';
import { CommandPaletteDialogService } from '../dialogs/command-palette-dialog.service';

declare const p3xr: any;

export interface ShortcutDef {
    key: string;
    ctrlKey?: boolean;
    shiftKey?: boolean;
    altKey?: boolean;
    label: string;
    descriptionKey: string;
    action: () => void;
}

@Injectable({ providedIn: 'root' })
export class ShortcutsService {

    private shortcuts: ShortcutDef[] = [];
    private readonly isElectron: boolean;

    constructor(
        @Inject(I18nService) private i18n: I18nService,
        @Inject(NavigationService) private nav: NavigationService,
        @Inject(MainCommandService) private cmd: MainCommandService,
        @Inject(SocketService) private socket: SocketService,
        @Inject(CommonService) private common: CommonService,
        @Inject(CommandPaletteDialogService) private commandPalette: CommandPaletteDialogService,
    ) {
        this.isElectron = /electron/i.test(navigator.userAgent);
        if (this.isElectron) {
            this.initShortcuts();
        }
    }

    private get isConnected(): boolean {
        return !!p3xr?.state?.connection;
    }

    private requireConnection(action: () => void): void {
        if (this.isConnected) {
            action();
        } else {
            const strings = this.i18n.strings();
            this.common.toast(strings?.label?.connectFirst || 'Connect to a Redis server first');
        }
    }

    private requireConnectionAndHome(action: () => void): void {
        if (!this.isConnected) {
            const strings = this.i18n.strings();
            this.common.toast(strings?.label?.connectFirst || 'Connect to a Redis server first');
            return;
        }
        // Navigate to home if not already there
        if (!this.nav.currentUrl.startsWith('/database')) {
            this.nav.navigateTo('database.statistics');
            setTimeout(() => action(), 300);
        } else {
            action();
        }
    }

    private initShortcuts(): void {
        this.shortcuts = [
            {
                key: 'r',
                ctrlKey: true,
                label: 'Ctrl+R',
                descriptionKey: 'shortcutRefresh',
                action: () => this.requireConnection(() => this.cmd.treeRefresh$.next()),
            },
            {
                key: 'F5',
                label: 'F5',
                descriptionKey: 'shortcutRefresh',
                action: () => this.requireConnection(() => this.cmd.treeRefresh$.next()),
            },
            {
                key: 'f',
                ctrlKey: true,
                label: 'Ctrl+F',
                descriptionKey: 'shortcutSearch',
                action: () => this.requireConnectionAndHome(() => {
                    const el = document.querySelector<HTMLInputElement>('.p3xr-database-treecontrol-controls-search input');
                    if (el) {
                        el.focus();
                    }
                }),
            },
            {
                key: 'n',
                ctrlKey: true,
                label: 'Ctrl+N',
                descriptionKey: 'shortcutNewKey',
                action: () => this.requireConnectionAndHome(() => {
                    this.cmd.keyNew$.next({ event: new Event('shortcut') });
                }),
            },
            {
                key: 'k',
                ctrlKey: true,
                label: 'Ctrl+K',
                descriptionKey: 'shortcutCommandPalette',
                action: () => this.commandPalette.show(),
            },
            {
                key: 'd',
                ctrlKey: true,
                label: 'Ctrl+D',
                descriptionKey: 'shortcutDisconnect',
                action: () => this.requireConnection(() => this.cmd.disconnectRequest$.next()),
            },
        ];
    }

    isEnabled(): boolean {
        return this.isElectron;
    }

    getShortcuts(): ShortcutDef[] {
        return this.shortcuts;
    }

    getShortcutsWithDescriptions(): Array<{ key: string; description: string }> {
        const strings = this.i18n.strings();
        return this.shortcuts
            .filter((s, i, arr) => arr.findIndex(x => x.descriptionKey === s.descriptionKey) === i)
            .map(s => ({
                key: s.label,
                description: strings?.label?.[s.descriptionKey] || s.descriptionKey,
            }));
    }

    handleKeydown(event: KeyboardEvent): boolean {
        if (!this.isElectron) return false;

        const target = event.target as HTMLElement;
        const tag = target?.tagName?.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || target?.closest('.cm-editor')) {
            return false;
        }

        for (const shortcut of this.shortcuts) {
            const ctrlMatch = shortcut.ctrlKey ? event.ctrlKey || event.metaKey : !event.ctrlKey && !event.metaKey;
            const shiftMatch = shortcut.shiftKey ? event.shiftKey : !event.shiftKey;
            const altMatch = shortcut.altKey ? event.altKey : !event.altKey;
            const keyMatch = event.key.toLowerCase() === shortcut.key.toLowerCase() || event.key === shortcut.key;

            if (ctrlMatch && shiftMatch && altMatch && keyMatch) {
                event.preventDefault();
                event.stopPropagation();
                shortcut.action();
                return true;
            }
        }
        return false;
    }
}
