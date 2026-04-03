import { Injectable } from '@angular/core';

/**
 * Loading overlay service — shows/hides a full-screen spinner overlay.
 */
@Injectable({ providedIn: 'root' })
export class OverlayService {

    private isShown = false;

    show(options: { message?: string } = {}): void {
        this.hide();
        document.body.classList.add('p3xr-overlay-visible');
        const html = `
<div id="p3xr-overlay">
    <div id="p3xr-overlay-info">
        <i class="fas fa-cog fa-spin" style="font-size: 500% !important;"></i>
        ${options.message ? '<br/><br/>' + options.message : ''}
    </div>
</div>`;
        document.body.insertAdjacentHTML('beforeend', html);
        this.isShown = true;
    }

    hide(): void {
        this.isShown = false;
        document.body.classList.remove('p3xr-overlay-visible');
        const el = document.getElementById('p3xr-overlay');
        if (el) el.remove();
    }
}
