import { useMemo, useRef, useEffect, useState, useCallback, CSSProperties } from 'react'

interface HexLine {
    addr: string
    hexReal: string
    hexPad: string
    asciiReal: string
    asciiPad: string
}

function parseHexLines(str: string): HexLine[] {
    if (!str) return []
    const encoded = new TextEncoder().encode(str)
    const lines: HexLine[] = []
    for (let i = 0; i < encoded.length; i += 16) {
        const chunk = encoded.slice(i, i + 16)
        const n = chunk.length
        const addr = i.toString(16).padStart(8, '0')
        const padded = new Uint8Array(16)
        padded.set(chunk)
        const left = Array.from(padded.slice(0, 8)).map(b => b.toString(16).padStart(2, '0')).join(' ')
        const right = Array.from(padded.slice(8)).map(b => b.toString(16).padStart(2, '0')).join(' ')
        const full = left + '  ' + right
        const asciiAll = Array.from(padded).map(b => b >= 0x20 && b <= 0x7e ? String.fromCharCode(b) : '.').join('')

        if (n === 16) {
            lines.push({ addr, hexReal: full, hexPad: '', asciiReal: asciiAll, asciiPad: '' })
        } else {
            const splitPos = n <= 8 ? 3 * n - 1 : 25 + 3 * (n - 8) - 1
            lines.push({
                addr,
                hexReal: full.substring(0, splitPos),
                hexPad: full.substring(splitPos),
                asciiReal: asciiAll.substring(0, n),
                asciiPad: asciiAll.substring(n),
            })
        }
    }
    return lines
}

const monitorStyle: CSSProperties = {
    fontFamily: "'Roboto Mono', monospace",
    fontSize: 16,
    lineHeight: '22px',
}

const contentStyle: CSSProperties = {
    overflow: 'hidden',
}

const lineStyle: CSSProperties = {
    display: 'flex',
    whiteSpace: 'nowrap',
}

const addrStyle: CSSProperties = {
    opacity: 0.5,
    paddingRight: 12,
    flexShrink: 0,
}

const bytesStyle: CSSProperties = {
    paddingRight: 12,
    flexShrink: 0,
    whiteSpace: 'pre',
}

const asciiStyle: CSSProperties = {
    borderLeft: '1px solid var(--p3xr-fieldset-border, rgba(255,255,255,0.25))',
    paddingLeft: 12,
    flexShrink: 0,
}

const dimStyle: CSSProperties = { opacity: 0.5 }

const scrollbarStyle: CSSProperties = {
    overflowX: 'auto',
    overflowY: 'hidden',
    position: 'sticky',
    bottom: 0,
}

export default function HexMonitor({ value, truncated, style }: { value: string, truncated?: boolean, style?: CSSProperties }) {
    const lines = useMemo(() => parseHexLines(value), [value])
    const contentRef = useRef<HTMLDivElement>(null)
    const scrollbarRef = useRef<HTMLDivElement>(null)
    const [scrollWidth, setScrollWidth] = useState(0)

    const measure = useCallback(() => {
        const el = contentRef.current
        if (el) setScrollWidth(el.scrollWidth)
    }, [])

    useEffect(() => {
        measure()
        const el = contentRef.current
        if (!el) return
        const obs = new ResizeObserver(() => measure())
        obs.observe(el)
        return () => obs.disconnect()
    }, [value, measure])

    const syncScroll = useCallback(() => {
        if (contentRef.current && scrollbarRef.current) {
            contentRef.current.scrollLeft = scrollbarRef.current.scrollLeft
        }
    }, [])

    const merged = style ? { ...monitorStyle, ...style } : monitorStyle
    return (
        <div style={merged}>
            <div ref={contentRef} style={contentStyle}>
                {lines.map(line => (
                    <div key={line.addr} style={lineStyle}>
                        <span style={addrStyle}>{line.addr}</span>
                        <span style={bytesStyle}>{line.hexReal}<span style={dimStyle}>{line.hexPad}</span></span>
                        <span style={asciiStyle}>{line.asciiReal}<span style={dimStyle}>{line.asciiPad}</span></span>
                    </div>
                ))}
            </div>
            <div ref={scrollbarRef} style={scrollbarStyle} onScroll={syncScroll}>
                <div style={{ height: 1, width: scrollWidth }} />
            </div>
        </div>
    )
}
