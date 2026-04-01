import { Pipe, PipeTransform, Inject } from '@angular/core';
import { I18nService } from '../services/i18n.service';
declare const p3xr: any;

/**
 * Locale-aware date pipe backed by dayjs.
 *
 * Named presets:
 *   {{ value | date:'date' }}        — date only        (ll)
 *   {{ value | date:'datetime' }}    — date + time      (lll) ← default
 *   {{ value | date:'timestamp' }}   — date + time + s
 *
 * Raw dayjs format tokens also accepted (L, LL, LLL, LLLL, LT, LTS, …).
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

        const dayjs = (globalThis as any).dayjs || require('dayjs');
        const localeMap = p3xr?.settings?.language?.momentDateMap || {};
        dayjs.locale(localeMap[lang] || lang);

        const d = dayjs(value);
        if (!d.isValid()) return '-';

        switch (format) {
            case 'date':      return d.format('ll');
            case 'datetime':  return d.format('lll');
            case 'timestamp': return d.format('ll') + ' ' + d.format('LTS');
            default:          return d.format(format);
        }
    }
}
