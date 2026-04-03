import { SettingsService } from '../../../services/settings.service';

/**
 * Shared pagination logic for key type renderers.
 * Replaces AngularJS p3xrKeyPaging factory.
 */

export class KeyPaging {
    page = 1;
    pages = 1;
    private zsetMode: boolean;
    private settingsService?: SettingsService;

    constructor(options?: { zsetMode?: boolean; settingsService?: SettingsService }) {
        this.zsetMode = options?.zsetMode ?? false;
        this.settingsService = options?.settingsService;
    }

    figurePaging(valueLength: number): void {
        const pageCount = this.settingsService?.keyPageCount() ?? 50;
        const itemCount = this.zsetMode ? Math.ceil(valueLength / 2) : valueLength;
        this.pages = Math.max(Math.ceil(itemCount / pageCount), 1);
        this.page = 1;
    }

    get pageCount(): number {
        return this.settingsService?.keyPageCount() ?? 50;
    }

    get startIndex(): number {
        return this.pageCount * (this.page - 1);
    }

    get endIndex(): number {
        return this.startIndex + this.pageCount;
    }

    pager(action: string): void {
        switch (action) {
            case 'first': this.page = 1; break;
            case 'prev': if (this.page > 1) this.page--; break;
            case 'next': if (this.page < this.pages) this.page++; break;
            case 'last': this.page = this.pages; break;
        }
    }

    pageChange(): void {
        if (this.page < 1) this.page = 1;
        if (this.page > this.pages) this.page = this.pages;
    }
}
