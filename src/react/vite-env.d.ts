/// <reference types="vite/client" />

declare const globalThis: {
    p3xrDevMode?: boolean
    p3xrApiPort?: string
} & typeof global
