/**
 * Detect file type from magic bytes (file signature).
 * Returns the appropriate file extension based on the binary content.
 */

interface FileType {
    ext: string
    mime: string
}

export function detectFileType(buffer: Uint8Array | number[]): FileType {
    const b = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
    if (b.length < 4) return { ext: 'bin', mime: 'application/octet-stream' }

    // PNG: 89 50 4E 47
    if (b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4E && b[3] === 0x47) {
        return { ext: 'png', mime: 'image/png' }
    }

    // JPEG: FF D8 FF
    if (b[0] === 0xFF && b[1] === 0xD8 && b[2] === 0xFF) {
        return { ext: 'jpg', mime: 'image/jpeg' }
    }

    // GIF: 47 49 46 38
    if (b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38) {
        return { ext: 'gif', mime: 'image/gif' }
    }

    // BMP: 42 4D
    if (b[0] === 0x42 && b[1] === 0x4D) {
        return { ext: 'bmp', mime: 'image/bmp' }
    }

    // WEBP: 52 49 46 46 ... 57 45 42 50
    if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
        b.length >= 12 && b[8] === 0x57 && b[9] === 0x45 && b[10] === 0x42 && b[11] === 0x50) {
        return { ext: 'webp', mime: 'image/webp' }
    }

    // TIFF: 49 49 2A 00 (little-endian) or 4D 4D 00 2A (big-endian)
    if ((b[0] === 0x49 && b[1] === 0x49 && b[2] === 0x2A && b[3] === 0x00) ||
        (b[0] === 0x4D && b[1] === 0x4D && b[2] === 0x00 && b[3] === 0x2A)) {
        return { ext: 'tiff', mime: 'image/tiff' }
    }

    // ICO: 00 00 01 00
    if (b[0] === 0x00 && b[1] === 0x00 && b[2] === 0x01 && b[3] === 0x00) {
        return { ext: 'ico', mime: 'image/x-icon' }
    }

    // PDF: 25 50 44 46 (%PDF)
    if (b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46) {
        return { ext: 'pdf', mime: 'application/pdf' }
    }

    // ZIP: 50 4B 03 04
    if (b[0] === 0x50 && b[1] === 0x4B && b[2] === 0x03 && b[3] === 0x04) {
        return { ext: 'zip', mime: 'application/zip' }
    }

    // GZIP: 1F 8B
    if (b[0] === 0x1F && b[1] === 0x8B) {
        return { ext: 'gz', mime: 'application/gzip' }
    }

    // BZ2: 42 5A 68 (BZh)
    if (b[0] === 0x42 && b[1] === 0x5A && b[2] === 0x68) {
        return { ext: 'bz2', mime: 'application/x-bzip2' }
    }

    // XZ: FD 37 7A 58 5A 00
    if (b[0] === 0xFD && b[1] === 0x37 && b[2] === 0x7A && b[3] === 0x58 && b.length >= 6 && b[4] === 0x5A && b[5] === 0x00) {
        return { ext: 'xz', mime: 'application/x-xz' }
    }

    // ZSTD: 28 B5 2F FD
    if (b[0] === 0x28 && b[1] === 0xB5 && b[2] === 0x2F && b[3] === 0xFD) {
        return { ext: 'zst', mime: 'application/zstd' }
    }

    // LZ4: 04 22 4D 18
    if (b[0] === 0x04 && b[1] === 0x22 && b[2] === 0x4D && b[3] === 0x18) {
        return { ext: 'lz4', mime: 'application/x-lz4' }
    }

    // 7Z: 37 7A BC AF 27 1C
    if (b[0] === 0x37 && b[1] === 0x7A && b[2] === 0xBC && b[3] === 0xAF && b.length >= 6 && b[4] === 0x27 && b[5] === 0x1C) {
        return { ext: '7z', mime: 'application/x-7z-compressed' }
    }

    // RAR: 52 61 72 21 (Rar!)
    if (b[0] === 0x52 && b[1] === 0x61 && b[2] === 0x72 && b[3] === 0x21) {
        return { ext: 'rar', mime: 'application/x-rar-compressed' }
    }

    // WAV: 52 49 46 46 ... 57 41 56 45
    if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
        b.length >= 12 && b[8] === 0x57 && b[9] === 0x41 && b[10] === 0x56 && b[11] === 0x45) {
        return { ext: 'wav', mime: 'audio/wav' }
    }

    // AVI: 52 49 46 46 ... 41 56 49 20
    if (b[0] === 0x52 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x46 &&
        b.length >= 12 && b[8] === 0x41 && b[9] === 0x56 && b[10] === 0x49 && b[11] === 0x20) {
        return { ext: 'avi', mime: 'video/x-msvideo' }
    }

    // MP3: FF FB / FF F3 / FF F2 or ID3
    if ((b[0] === 0xFF && (b[1] === 0xFB || b[1] === 0xF3 || b[1] === 0xF2)) ||
        (b[0] === 0x49 && b[1] === 0x44 && b[2] === 0x33)) {
        return { ext: 'mp3', mime: 'audio/mpeg' }
    }

    // FLAC: 66 4C 61 43
    if (b[0] === 0x66 && b[1] === 0x4C && b[2] === 0x61 && b[3] === 0x43) {
        return { ext: 'flac', mime: 'audio/flac' }
    }

    // OGG: 4F 67 67 53
    if (b[0] === 0x4F && b[1] === 0x67 && b[2] === 0x67 && b[3] === 0x53) {
        return { ext: 'ogg', mime: 'audio/ogg' }
    }

    // WEBM/MKV: 1A 45 DF A3
    if (b[0] === 0x1A && b[1] === 0x45 && b[2] === 0xDF && b[3] === 0xA3) {
        return { ext: 'webm', mime: 'video/webm' }
    }

    // MP4/M4A: ftyp at offset 4
    if (b.length >= 8 && b[4] === 0x66 && b[5] === 0x74 && b[6] === 0x79 && b[7] === 0x70) {
        return { ext: 'mp4', mime: 'video/mp4' }
    }

    // WASM: 00 61 73 6D
    if (b[0] === 0x00 && b[1] === 0x61 && b[2] === 0x73 && b[3] === 0x6D) {
        return { ext: 'wasm', mime: 'application/wasm' }
    }

    // ELF: 7F 45 4C 46
    if (b[0] === 0x7F && b[1] === 0x45 && b[2] === 0x4C && b[3] === 0x46) {
        return { ext: 'elf', mime: 'application/x-elf' }
    }

    // SQLite: 53 51 4C 69 74 65
    if (b.length >= 6 && b[0] === 0x53 && b[1] === 0x51 && b[2] === 0x4C && b[3] === 0x69 && b[4] === 0x74 && b[5] === 0x65) {
        return { ext: 'sqlite', mime: 'application/x-sqlite3' }
    }

    // PSD: 38 42 50 53
    if (b[0] === 0x38 && b[1] === 0x42 && b[2] === 0x50 && b[3] === 0x53) {
        return { ext: 'psd', mime: 'image/vnd.adobe.photoshop' }
    }

    // Try text-based detection (JSON, XML, SVG, HTML)
    const textType = detectTextType(b)
    if (textType) return textType

    return { ext: 'bin', mime: 'application/octet-stream' }
}

function detectTextType(b: Uint8Array): FileType | null {
    // Check if it looks like UTF-8 text by examining first bytes
    // Look for common text starts: {, [, <
    const first = b[0]

    // JSON object or array
    if (first === 0x7B || first === 0x5B) { // { or [
        return { ext: 'json', mime: 'application/json' }
    }

    // XML/SVG/HTML: starts with <
    if (first === 0x3C) { // <
        const head = new TextDecoder('utf-8', { fatal: false }).decode(b.slice(0, Math.min(b.length, 256))).toLowerCase()
        if (head.includes('<svg')) return { ext: 'svg', mime: 'image/svg+xml' }
        if (head.includes('<!doctype html') || head.includes('<html')) return { ext: 'html', mime: 'text/html' }
        if (head.includes('<?xml')) return { ext: 'xml', mime: 'application/xml' }
    }

    // BOM: EF BB BF (UTF-8 BOM) — likely text
    if (b[0] === 0xEF && b[1] === 0xBB && b[2] === 0xBF) {
        if (b.length > 3) {
            if (b[3] === 0x7B || b[3] === 0x5B) return { ext: 'json', mime: 'application/json' }
            if (b[3] === 0x3C) return { ext: 'xml', mime: 'application/xml' }
        }
        return { ext: 'txt', mime: 'text/plain' }
    }

    return null
}
