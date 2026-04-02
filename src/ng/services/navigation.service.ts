import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Centralized navigation service — replaces AngularJS UI-Router $state.go().
 *
 * Maps the old UI-Router state names to Angular Router paths:
 * - 'settings'              → /settings
 * - 'database.statistics'   → /database/statistics
 * - 'database.key'          → /database/key/:key
 *
 * Legacy 'main.*' names are supported for backward compatibility.
 */
@Injectable({ providedIn: 'root' })
export class NavigationService {

    constructor(@Inject(Router) private readonly router: Router) {}

    /**
     * Navigate using state name.
     */
    navigateTo(state: string, params?: any): void {
        switch (state) {
            case 'info':
                this.router.navigate(['/info']);
                break;
            case 'settings':
                this.router.navigate(['/settings']);
                break;
            case 'monitoring':
                this.router.navigate(['/monitoring']);
                break;
            case 'search':
                this.router.navigate(['/search']);
                break;
            case 'database.statistics':
            case 'main.statistics':
                this.router.navigate(['/database/statistics']);
                break;
            case 'database.key':
            case 'main.key':
                this.router.navigate(['/database/key', params?.key ?? '']);
                break;
            default:
                console.warn(`[NavigationService] Unknown state: ${state}`);
                this.router.navigate(['/settings']);
        }
    }

    /**
     * Get the current route URL.
     */
    get currentUrl(): string {
        return this.router.url;
    }

    /**
     * Get a route parameter (for key viewer).
     */
    getParam(name: string): string | null {
        const url = this.router.url;
        if (name === 'key' && url.startsWith('/database/key/')) {
            return decodeURIComponent(url.substring('/database/key/'.length));
        }
        return null;
    }
}
