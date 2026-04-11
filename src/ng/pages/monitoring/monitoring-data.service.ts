import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { decode as msgpackDecode } from '@msgpack/msgpack';

export interface ProfilerEntry {
    displayTime: string;
    fullTimestamp: string;
    database: string;
    source: string;
    command: string;
}

export interface PubsubEntry {
    displayTime: string;
    fullTimestamp: string;
    channel: string;
    message: string;
}

const PROFILER_STORAGE_KEY = 'p3xr-profiler-entries';
const PUBSUB_STORAGE_KEY = 'p3xr-pubsub-entries';
const MAX_ENTRIES = 10000;
const MAX_STORAGE_ENTRIES = 100;
const SAVE_DEBOUNCE = 2000;

@Injectable({ providedIn: 'root' })
export class MonitoringDataService {
    profilerEntries: ProfilerEntry[] = [];
    pubsubEntries: PubsubEntry[] = [];

    readonly profilerEntry$ = new Subject<ProfilerEntry>();
    readonly pubsubEntry$ = new Subject<PubsubEntry>();

    profilerStarted = false;
    pubsubStarted = false;
    pubsubPattern = '*';

    private socket: any;
    private langFn: () => string = () => 'en';
    private profilerSaveTimeout: any = null;
    private pubsubSaveTimeout: any = null;
    private initialized = false;

    init(socket: any, langFn: () => string): void {
        this.socket = socket;
        this.langFn = langFn;
        if (!this.initialized) {
            this.restoreFromStorage();
            this.initialized = true;
        }
    }

    destroy(): void {
        this.saveProfilerNow();
        this.savePubSubNow();
    }

    async startProfiler(): Promise<void> {
        if (this.profilerStarted) return;
        await this.socket.request({ action: 'monitor/set', payload: { enabled: true } });
        this.profilerStarted = true;
        this.socket.getClient()?.on?.('monitor-data', this.onMonitorData);
    }

    stopProfiler(): void {
        if (!this.profilerStarted) return;
        this.socket.request({ action: 'monitor/set', payload: { enabled: false } }).catch(() => {});
        this.socket.getClient()?.removeListener?.('monitor-data', this.onMonitorData);
        this.profilerStarted = false;
        this.saveProfilerNow();
    }

    async startPubSub(): Promise<void> {
        if (this.pubsubStarted) return;
        await this.socket.request({
            action: 'settings/subscription',
            payload: { subscription: true, subscriberPattern: this.pubsubPattern },
        });
        this.pubsubStarted = true;
        this.socket.getClient()?.on?.('pubsub-message', this.onPubSubMessage);
    }

    stopPubSub(): void {
        if (!this.pubsubStarted) return;
        this.socket.request({ action: 'settings/subscription', payload: { subscription: false, subscriberPattern: '*' } }).catch(() => {});
        this.socket.getClient()?.removeListener?.('pubsub-message', this.onPubSubMessage);
        this.pubsubStarted = false;
        this.savePubSubNow();
    }

    async restartPubSub(): Promise<void> {
        this.stopPubSub();
        await this.startPubSub();
    }

    clearProfiler(): void {
        this.profilerEntries = [];
        try { localStorage.removeItem(PROFILER_STORAGE_KEY); } catch {}
    }

    clearPubSub(): void {
        this.pubsubEntries = [];
        try { localStorage.removeItem(PUBSUB_STORAGE_KEY); } catch {}
    }

    private onMonitorData = (data: any) => {
        const lang = this.langFn() || 'en';
        const date = new Date(parseFloat(data.time) * 1000);
        const displayTime = date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, fractionalSecondDigits: 3 } as any);
        const entry: ProfilerEntry = {
            displayTime,
            fullTimestamp: date.toISOString(),
            database: data.database,
            source: data.source,
            command: (data.args || []).join(' '),
        };
        this.profilerEntries.push(entry);
        if (this.profilerEntries.length > MAX_ENTRIES) {
            this.profilerEntries = this.profilerEntries.slice(-MAX_ENTRIES);
        }
        this.profilerEntry$.next(entry);
        this.debounceSaveProfiler();
    };

    private decodePubsubMessage(message: any): string {
        if (message instanceof ArrayBuffer) {
            try {
                const decoded = msgpackDecode(new Uint8Array(message));
                return JSON.stringify(decoded, null, 2);
            } catch {
                return new TextDecoder().decode(message);
            }
        }
        return String(message);
    }

    private onPubSubMessage = (data: any) => {
        const lang = this.langFn() || 'en';
        const date = new Date();
        const displayTime = date.toLocaleTimeString(lang, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
        const entry: PubsubEntry = {
            displayTime,
            fullTimestamp: date.toISOString(),
            channel: data.channel,
            message: this.decodePubsubMessage(data.message),
        };
        this.pubsubEntries.push(entry);
        if (this.pubsubEntries.length > MAX_ENTRIES) {
            this.pubsubEntries = this.pubsubEntries.slice(-MAX_ENTRIES);
        }
        this.pubsubEntry$.next(entry);
        this.debounceSavePubSub();
    };

    private debounceSaveProfiler(): void {
        if (this.profilerSaveTimeout) return;
        this.profilerSaveTimeout = setTimeout(() => {
            this.profilerSaveTimeout = null;
            this.saveProfilerNow();
        }, SAVE_DEBOUNCE);
    }

    private debounceSavePubSub(): void {
        if (this.pubsubSaveTimeout) return;
        this.pubsubSaveTimeout = setTimeout(() => {
            this.pubsubSaveTimeout = null;
            this.savePubSubNow();
        }, SAVE_DEBOUNCE);
    }

    private saveProfilerNow(): void {
        if (this.profilerSaveTimeout) {
            clearTimeout(this.profilerSaveTimeout);
            this.profilerSaveTimeout = null;
        }
        this.saveToStorage(PROFILER_STORAGE_KEY, this.profilerEntries);
    }

    private savePubSubNow(): void {
        if (this.pubsubSaveTimeout) {
            clearTimeout(this.pubsubSaveTimeout);
            this.pubsubSaveTimeout = null;
        }
        this.saveToStorage(PUBSUB_STORAGE_KEY, this.pubsubEntries);
    }

    private saveToStorage(key: string, entries: any[]): void {
        const toSave = entries.slice(-MAX_STORAGE_ENTRIES);
        try {
            localStorage.setItem(key, JSON.stringify(toSave));
        } catch {
            try { localStorage.removeItem(key); } catch {}
        }
    }

    private restoreFromStorage(): void {
        try {
            const profilerJson = localStorage.getItem(PROFILER_STORAGE_KEY);
            if (profilerJson) {
                this.profilerEntries = JSON.parse(profilerJson);
            }
        } catch {}
        try {
            const pubsubJson = localStorage.getItem(PUBSUB_STORAGE_KEY);
            if (pubsubJson) {
                this.pubsubEntries = JSON.parse(pubsubJson);
            }
        } catch {}
    }
}
