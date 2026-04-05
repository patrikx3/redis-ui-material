/**
 * Google Analytics helper — exact port of Angular gtag calls.
 * Sends page_path events via gtag('config', ...).
 */
import { useSettingsStore } from './settings.store'

const isBot = /spider|bot|yahoo|bing|google|yandex|crawl|slurp|curl/i.test(navigator.userAgent)

export function trackPage(pagePath: string): void {
    if (isBot) return
    try {
        const ga = useSettingsStore.getState().googleAnalytics
        ;(window as any).gtag?.('config', ga, { page_path: pagePath })
    } catch { /* noop */ }
}
