import { chromium } from 'playwright'
import { mkdirSync, rmSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../../redis-ui/artifacts/preview-images')

for (let i = 0; i <= 20; i++) {
    try { rmSync(resolve(outDir, i === 0 ? 'preview.png' : `preview-${i + 1}.png`)) } catch {}
}
mkdirSync(outDir, { recursive: true })

const BASE = process.env.SCREENSHOT_URL || 'https://p3x.redis.patrikx3.com'
const WIDTH = 1280
const HEIGHT = 800

async function shot(page, index, label) {
    const name = index === 0 ? 'preview' : `preview-${index + 1}`
    await page.screenshot({ path: resolve(outDir, `${name}.png`), fullPage: false })
    console.log(`  ${name}.png — ${label}`)
}

async function switchTheme(page, themeName) {
    const themeBtn = page.locator('button').filter({ hasText: 'THEME' }).first()
    await themeBtn.click({ force: true })
    await page.waitForTimeout(1000)
    const item = page.locator('[role="menuitem"]').filter({ hasText: themeName }).first()
    await item.click({ force: true })
    await page.waitForTimeout(1500)
    await page.keyboard.press('Escape')
    await page.waitForTimeout(500)
}

async function clickNav(page, label) {
    await page.locator(`a, button`).filter({ hasText: label }).first().click({ force: true })
    await page.waitForTimeout(5000)
}

async function run() {
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT } })
    const page = await context.newPage()

    // Connect
    console.log('Connecting...')
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForFunction(() => !document.getElementById('p3xr-loading'), { timeout: 15000 }).catch(() => {})
    await page.waitForTimeout(5000)
    await page.locator('button').nth(10).click({ force: true })
    await page.waitForTimeout(8000)
    console.log('Connected!\n')

    // 1. Database + tree + key click (Dark)
    console.log('1. Database + Key (Dark)')
    await clickNav(page, 'DATABASE')
    await page.waitForTimeout(5000)
    const node = page.locator('.p3xr-tree-node-label').first()
    if (await node.isVisible({ timeout: 8000 }).catch(() => false)) {
        await node.click()
        await page.waitForTimeout(3000)
    }
    await shot(page, 0, 'Database + Key (Dark)')

    // 2. Monitoring Pulse (Matrix)
    console.log('2. Monitoring Pulse (Matrix)')
    await switchTheme(page, 'Matrix')
    await clickNav(page, 'MONITORING')
    await page.waitForTimeout(10000)
    await shot(page, 1, 'Monitoring Pulse (Matrix)')

    // 3. Console with commands (Enterprise)
    console.log('3. Console (Enterprise)')
    await switchTheme(page, 'Enterprise')
    await clickNav(page, 'DATABASE')
    await page.waitForTimeout(4000)
    const input = page.locator('#p3xr-console-input')
    if (await input.isVisible({ timeout: 5000 }).catch(() => false)) {
        await input.fill('PING')
        await input.press('Enter')
        await page.waitForTimeout(1500)
        await input.fill('INFO server')
        await input.press('Enter')
        await page.waitForTimeout(2000)
    }
    await shot(page, 2, 'Console (Enterprise)')

    // 4. Settings (Dark enterprise)
    console.log('4. Settings (Dark enterprise)')
    await switchTheme(page, 'Dark enterprise')
    await clickNav(page, 'SETTINGS')
    await page.waitForTimeout(4000)
    await shot(page, 3, 'Settings (Dark enterprise)')

    // 5. Info page (Darko bluo)
    console.log('5. Info (Darko bluo)')
    await switchTheme(page, 'Darko bluo')
    await clickNav(page, 'INFO')
    await page.waitForTimeout(4000)
    await shot(page, 4, 'Info (Darko bluo)')

    // 6. Database + Statistics tab (Redis theme)
    console.log('6. Statistics (Redis)')
    await switchTheme(page, 'Redis')
    await clickNav(page, 'DATABASE')
    await page.waitForTimeout(4000)
    const statsBtn = page.locator('button').filter({ hasText: 'STATISTICS' }).first()
    if (await statsBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await statsBtn.click({ force: true })
        await page.waitForTimeout(3000)
    }
    await shot(page, 5, 'Statistics (Redis)')

    await page.close()
    await context.close()
    await browser.close()
    console.log(`\nDone! 6 screenshots saved to: ${outDir}`)
}

run().catch(e => { console.error(e); process.exit(1) })
