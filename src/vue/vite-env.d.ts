/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare const globalThis: {
    p3xrDevMode?: boolean
    p3xrApiPort?: string
} & typeof global
