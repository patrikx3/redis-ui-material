const { test, expect } = require('@playwright/test');

const BASE_HOST = process.env.PLAYWRIGHT_BASE_HOST || 'http://localhost:7843';
const ALL_GUIS = [
    { name: 'Angular', base: process.env.PLAYWRIGHT_BASE_HOST ? `${BASE_HOST}/ng` : 'http://localhost:8080/ng' },
    { name: 'React', base: process.env.PLAYWRIGHT_BASE_HOST ? `${BASE_HOST}/react` : 'http://localhost:8082/react' },
    { name: 'Vue', base: process.env.PLAYWRIGHT_BASE_HOST ? `${BASE_HOST}/vue` : 'http://localhost:8083/vue' },
];
// In publish mode (PLAYWRIGHT_BASE_HOST set), only test Angular — sufficient for validation
const GUIS = process.env.PLAYWRIGHT_BASE_HOST ? ALL_GUIS.filter(g => g.name === 'Angular') : ALL_GUIS;

async function connectToFirstConnection(page, base) {
    await page.goto(`${base}/settings`);
    await page.waitForFunction(() => document.body.innerText.includes('Connections'), { timeout: 15000 });

    // Angular/React: footer Connect menu — click first item
    const footerConnect = page.locator('#p3xr-layout-footer-container button').filter({ hasText: /connect/i }).first();
    if (await footerConnect.count() > 0) {
        await footerConnect.click();
        await page.waitForTimeout(500);
        const menuItem = page.locator('[role="menuitem"]').first();
        await expect(menuItem).toBeVisible({ timeout: 5000 });
        await menuItem.click();
    } else {
        // Vue path — click first Connect button
        const connectBtn = page.locator('button').filter({ hasText: /connect/i }).first();
        await connectBtn.click();
    }

    // Wait for connection to establish
    await page.waitForTimeout(2000);
}

for (const gui of GUIS) {
    test.describe(`${gui.name} — New Features`, () => {
        test.describe.configure({ mode: 'serial' });

        let connectedPage;

        test.beforeAll(async ({ browser }) => {
            connectedPage = await browser.newPage();
            await connectToFirstConnection(connectedPage, gui.base);
        });

        test.afterAll(async () => {
            await connectedPage?.close();
        });

        // Feature 1: Memory Doctor
        test('Memory Doctor accordion on Analysis page', async () => {
            await connectedPage.goto(`${gui.base}/monitoring/analysis`);
            await connectedPage.waitForFunction(
                () => document.body.innerText.includes('Memory Doctor'),
                { timeout: 15000 },
            );
            const text = await connectedPage.evaluate(() => document.body.innerText);
            expect(text).toContain('Memory Doctor');
        });

        // Feature 2: Slow Log always visible
        test('Slow Log accordion always visible on Pulse', async () => {
            await connectedPage.goto(`${gui.base}/monitoring`);
            await connectedPage.waitForFunction(
                () => document.body.innerText.includes('Slow Log'),
                { timeout: 15000 },
            );
            const text = await connectedPage.evaluate(() => document.body.innerText);
            expect(text).toContain('Slow Log');
        });

        // Feature 3: ACL Users (only visible when connected to Redis 6+)
        test('ACL Users accordion on Settings page', async () => {
            await connectedPage.goto(`${gui.base}/settings`);
            await connectedPage.waitForFunction(
                () => document.body.innerText.includes('ACL Users'),
                { timeout: 15000 },
            );
            const text = await connectedPage.evaluate(() => document.body.innerText);
            expect(text).toContain('ACL Users');
        });
    });
}
