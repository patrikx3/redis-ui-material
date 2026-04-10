import { Component, Input, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

interface HexLine {
    addr: string;
    hexReal: string;
    hexPad: string;
    asciiReal: string;
    asciiPad: string;
}

@Component({
    selector: 'p3xr-hex-monitor',
    standalone: true,
    template: `
        <div style="font-family: 'Roboto Mono', monospace; font-size: 16px; line-height: 22px;">
            <div style="overflow: hidden;" #hexContent>
                @for (line of lines; track line.addr) {
                    <div style="display: flex; white-space: nowrap;">
                        <span style="opacity: 0.5; padding-right: 12px; flex-shrink: 0;">{{ line.addr }}</span>
                        <span style="padding-right: 12px; flex-shrink: 0; white-space: pre;">{{ line.hexReal }}<span style="opacity: 0.5">{{ line.hexPad }}</span></span>
                        <span style="border-left: 1px solid var(--p3xr-fieldset-border, rgba(255,255,255,0.25)); padding-left: 12px; flex-shrink: 0;">{{ line.asciiReal }}<span style="opacity: 0.5">{{ line.asciiPad }}</span></span>
                    </div>
                }
            </div>
            <div style="overflow-x: auto; overflow-y: hidden; position: sticky; bottom: 0;" #hexScrollbar (scroll)="syncScroll()">
                <div [style.width.px]="contentScrollWidth" style="height: 1px;"></div>
            </div>
        </div>
    `,
    encapsulation: ViewEncapsulation.None,
    styles: [`:host { display: block; }`],
})
export class HexMonitorComponent implements AfterViewInit, OnDestroy {
    lines: HexLine[] = [];
    contentScrollWidth = 0;

    @Input() truncated: boolean = false;

    @ViewChild('hexContent') contentRef!: ElementRef<HTMLDivElement>;
    @ViewChild('hexScrollbar') scrollbarRef!: ElementRef<HTMLDivElement>;

    private _value = '';
    private resizeObs: ResizeObserver | null = null;
    private viewReady = false;

    constructor(private cdr: ChangeDetectorRef) {}

    @Input()
    set value(val: string) {
        this._value = val ?? '';
        this.lines = HexMonitorComponent.parseHexLines(this._value);
        if (this.viewReady) {
            requestAnimationFrame(() => this.measure());
        }
    }

    get value(): string { return this._value; }

    ngAfterViewInit(): void {
        this.viewReady = true;
        this.measure();
        this.resizeObs = new ResizeObserver(() => {
            this.measure();
            this.cdr.detectChanges();
        });
        if (this.contentRef?.nativeElement) {
            this.resizeObs.observe(this.contentRef.nativeElement);
        }
    }

    ngOnDestroy(): void {
        this.resizeObs?.disconnect();
    }

    syncScroll(): void {
        if (this.contentRef?.nativeElement && this.scrollbarRef?.nativeElement) {
            this.contentRef.nativeElement.scrollLeft = this.scrollbarRef.nativeElement.scrollLeft;
        }
    }

    private measure(): void {
        const el = this.contentRef?.nativeElement;
        if (!el) return;
        this.contentScrollWidth = el.scrollWidth;
    }

    static parseHexLines(str: string): HexLine[] {
        if (!str) return [];
        const encoded = new TextEncoder().encode(str);
        const lines: HexLine[] = [];
        for (let i = 0; i < encoded.length; i += 16) {
            const chunk = encoded.slice(i, i + 16);
            const n = chunk.length;
            const addr = i.toString(16).padStart(8, '0');
            const padded = new Uint8Array(16);
            padded.set(chunk);
            const left = Array.from(padded.slice(0, 8)).map(b => b.toString(16).padStart(2, '0')).join(' ');
            const right = Array.from(padded.slice(8)).map(b => b.toString(16).padStart(2, '0')).join(' ');
            const full = left + '  ' + right;

            if (n === 16) {
                const ascii = Array.from(padded).map(b => b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : '.').join('');
                lines.push({ addr, hexReal: full, hexPad: '', asciiReal: ascii, asciiPad: '' });
            } else {
                const splitPos = n <= 8 ? 3 * n - 1 : 25 + 3 * (n - 8) - 1;
                const asciiAll = Array.from(padded).map(b => b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : '.').join('');
                lines.push({
                    addr,
                    hexReal: full.substring(0, splitPos),
                    hexPad: full.substring(splitPos),
                    asciiReal: asciiAll.substring(0, n),
                    asciiPad: asciiAll.substring(n),
                });
            }
        }
        return lines;
    }
}
