import { Injectable, signal, computed, effect } from '@angular/core';

declare const p3xr: any;

/**
 * Theme management service using Angular signals.
 *
 * Manages theme selection, persistence (localStorage), dark/light classification,
 * and body class toggling. During hybrid mode, the AngularJS p3xrTheme provider
 * handles the AngularJS Material-specific parts ($mdThemingProvider, $mdColors,
 * dynamic CSS injection via jQuery). This service handles the framework-agnostic
 * parts that both Angular and AngularJS components need.
 *
 * After full migration (Phase 6), this service will also manage Angular Material
 * theming via Sass-compiled CSS class switching.
 *
 * Theme architecture:
 * - Each theme has 3 sub-themes: {Name}, {Name}Layout, {Name}Common
 * - Themes are classified as dark or light
 * - Current theme is persisted to localStorage key 'p3xr-theme'
 * - Body gets class 'p3xr-theme-dark' or 'p3xr-theme-light'
 * - document.documentElement gets data-color-scheme="dark"/"light" (for scrollbar styling)
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {

    private static readonly STORAGE_KEY = 'p3xr-theme';
    private static readonly AUTO_THEME = 'auto';

    /** Theme classification: which themes are dark, which are light */
    private static readonly DARK_THEMES = [
        'p3xrThemeDarkNeu',
        'p3xrThemeDark',
        'p3xrThemeDarkoBluo',
        'p3xrThemeMatrix',
    ];

    private static readonly LIGHT_THEMES = [
        'p3xrThemeLight',
        'p3xrThemeEnterprise',
        'p3xrThemeRedis',
    ];

    /** All available theme names */
    static readonly ALL_THEMES = [...ThemeService.DARK_THEMES, ...ThemeService.LIGHT_THEMES];

    /**
     * Maps AngularJS theme names to Angular Material CSS class suffixes.
     * AngularJS: 'p3xrThemeDark' → Angular Material: 'p3xr-mat-theme-dark'
     */
    private static readonly THEME_CSS_CLASS_MAP: Record<string, string> = {
        'p3xrThemeDark': 'p3xr-mat-theme-dark',
        'p3xrThemeDarkNeu': 'p3xr-mat-theme-dark-neu',
        'p3xrThemeDarkoBluo': 'p3xr-mat-theme-darko-bluo',
        'p3xrThemeMatrix': 'p3xr-mat-theme-matrix',
        'p3xrThemeLight': 'p3xr-mat-theme-light',
        'p3xrThemeEnterprise': 'p3xr-mat-theme-enterprise',
        'p3xrThemeRedis': 'p3xr-mat-theme-redis',
    };

    /** Default theme based on system preference */
    private static readonly DEFAULT_THEME =
        (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches)
            ? 'p3xrThemeDark'
            : 'p3xrThemeEnterprise';

    // --- Signals ---

    /** Current theme name signal, persisted to localStorage */
    readonly currentTheme: ReturnType<typeof signal<string>>;

    /** Whether the current theme is a dark theme */
    readonly isDark = computed(() => ThemeService.DARK_THEMES.includes(this.currentTheme()));

    /** Layout sub-theme name (e.g. 'p3xrThemeDarkLayout') */
    readonly themeLayout = computed(() => this.currentTheme() + 'Layout');

    /** Common sub-theme name (e.g. 'p3xrThemeDarkCommon') */
    readonly themeCommon = computed(() => this.currentTheme() + 'Common');

    /** Whether the current mode is auto (follows system) */
    readonly isAuto: ReturnType<typeof signal<boolean>>;

    constructor() {
        const initial = this.getInitialTheme();
        const isAutoMode = initial === ThemeService.AUTO_THEME;
        this.isAuto = signal<boolean>(isAutoMode);

        // If auto, resolve to system preference
        const resolvedTheme = isAutoMode ? ThemeService.getSystemTheme() : initial;
        this.currentTheme = signal<string>(resolvedTheme);

        // Apply body classes and persist to localStorage on theme change
        effect(() => {
            const theme = this.currentTheme();
            this.applyTheme(theme);
        });

        // Listen for system dark/light mode changes
        if (typeof window !== 'undefined' && window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                if (this.isAuto()) {
                    this.currentTheme.set(e.matches ? 'p3xrThemeDark' : 'p3xrThemeEnterprise');
                }
            });
        }
    }

    private static getSystemTheme(): string {
        return (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches)
            ? 'p3xrThemeDark'
            : 'p3xrThemeEnterprise';
    }

    /**
     * Switch to a different theme.
     */
    setTheme(themeName: string): void {
        if (themeName === ThemeService.AUTO_THEME) {
            this.isAuto.set(true);
            const resolved = ThemeService.getSystemTheme();
            this.currentTheme.set(resolved);
            return;
        }
        if (!ThemeService.ALL_THEMES.includes(themeName)) {
            console.warn(`[ThemeService] Unknown theme: ${themeName}`);
            return;
        }
        this.isAuto.set(false);
        this.currentTheme.set(themeName);
    }

    /**
     * Get theme display name from internal name.
     * e.g. 'p3xrThemeDark' → 'Dark'
     */
    getDisplayName(themeName: string): string {
        return themeName.replace('p3xrTheme', '');
    }

    /**
     * Generate the internal theme name from a raw display name.
     * e.g. 'Dark' → 'p3xrThemeDark'
     */
    generateThemeName(rawName: string): string {
        return 'p3xrTheme' + rawName[0].toUpperCase() + rawName.substring(1);
    }

    // --- Private helpers ---

    private getInitialTheme(): string {
        const stored = this.readStorageItem(ThemeService.STORAGE_KEY);
        if (!stored) return ThemeService.AUTO_THEME;
        return stored;
    }

    private applyTheme(themeName: string): void {
        const dark = ThemeService.DARK_THEMES.includes(themeName);

        this.setStorageItem(ThemeService.STORAGE_KEY, this.isAuto() ? ThemeService.AUTO_THEME : themeName);

        if (typeof document !== 'undefined') {
            document.body.classList.remove('p3xr-theme-light', 'p3xr-theme-dark');
            document.body.classList.add(dark ? 'p3xr-theme-dark' : 'p3xr-theme-light');

            const allMatClasses = Object.values(ThemeService.THEME_CSS_CLASS_MAP);
            document.body.classList.remove(...allMatClasses);
            const matClass = ThemeService.THEME_CSS_CLASS_MAP[themeName];
            if (matClass) {
                document.body.classList.add(matClass);
            }

            document.documentElement.style.display = 'none';
            document.documentElement.setAttribute('data-color-scheme', dark ? 'dark' : 'light');
            document.body.clientWidth;
            document.documentElement.style.display = '';

            // Notify Electron shell (iframe parent) about theme change for scrollbar styling
            try {
                window.parent?.postMessage({ type: 'p3x-theme-change', dark: dark }, '*');
            } catch (e) { /* not in iframe or cross-origin */ }
        }

        if (p3xr?.state) {
            p3xr.state.theme = themeName;
        }
    }

    private readStorageItem(name: string): string | null {
        try { return localStorage.getItem(name); } catch { return null; }
    }

    private setStorageItem(name: string, value: string): void {
        try { localStorage.setItem(name, value); } catch {}
    }
}
