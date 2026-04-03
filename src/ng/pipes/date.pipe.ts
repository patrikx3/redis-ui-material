import { Pipe, PipeTransform, Inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';

/**
 * Locale-aware date pipe using native Intl.DateTimeFormat.
 *
 * Named presets:
 *   {{ value | date:'date' }}        — date only
 *   {{ value | date:'datetime' }}    — date + time (default)
 *   {{ value | date:'timestamp' }}   — date + time + seconds
 *   {{ value | date:'time' }}        — time only (HH:mm:ss)
 *
 * Returns '-' for falsy or invalid values.
 * Impure so Angular re-evaluates on language changes.
 */
@Pipe({
    name: 'date',
    pure: false,
    standalone: true,
})
export class DatePipe implements PipeTransform {

    constructor(@Inject(I18nService) private i18n: I18nService) {}

    transform(value: any, format: string = 'datetime'): string {
        const lang = this.i18n.currentLang();
        if (!value) return '-';

        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '-';

        const locale = localeMap[lang] || lang;

        switch (format) {
            case 'date':
                return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
            case 'datetime':
                return date.toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            case 'timestamp':
                return date.toLocaleString(locale, { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
            case 'time':
                return date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
            default:
                return date.toLocaleString(locale);
        }
    }
}

/**
 * Map app language codes to Intl-compatible locale tags
 * where they differ from the app's internal code.
 */
const localeMap: Record<string, string> = {
    'zn': 'zh-CN',
    'no': 'nb',
    'fil': 'tl',
};
