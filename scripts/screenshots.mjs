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

async function waitLoaded(page) {
    await page.waitForFunction(() => !document.getElementById('p3xr-loading'), { timeout: 15000 }).catch(() => {})
    await page.waitForTimeout(3000)
}

async function waitConnected(page) {
    await page.waitForFunction(() => /CONNECTED|DISCONNECT/i.test(document.body?.innerText || ''), { timeout: 20000 }).catch(() => {})
    await page.waitForTimeout(3000)
}

async function run() {
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT } })
    const page = await context.newPage()

    // Step 1: Go to settings and connect
    console.log('Step 1: Connect...')
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 30000 })
    await waitLoaded(page)

    // Click first connection CONNECT button
    const allBtns = page.locator('button')
    const count = await allBtns.count()
    for (let i = 0; i < count; i++) {
        const text = await allBtns.nth(i).innerText().catch(() => '')
        if (/Connect/i.test(text)) {
            const hasSiblings = await allBtns.nth(i).evaluate(el =>
                el.parentElement?.querySelectorAll('button').length >= 3
            )
            if (hasSiblings) {
                console.log(`  Clicking CONNECT button ${i}`)
                await allBtns.nth(i).click({ force: true })
                break
            }
        }
    }
    await page.waitForTimeout(5000)
    await waitConnected(page)
    console.log('  Connected!\n')

    // Step 2: Navigate to database via Angular router (no full page reload)
    console.log('1. Angular Database + Key (Dark)')
    await page.evaluate(() => {
        const router = document.querySelector('p3xr-layout')?.__ng_context__
        if (router) {
            // Use location.href but with hash to avoid full reload
        }
    })
    // Use click navigation instead — click DATABASE in the nav bar
    const dbNav = page.locator('a:has-text("DATABASE"), [routerlink*="database"]').first()
    if (await dbNav.isVisible({ timeout: 3000 }).catch(() => false)) {
        await dbNav.click()
    } else {
        // Fallback: navigate via URL but stay connected
        await page.goto(`${BASE}/ng/database`, { waitUntil: 'networkidle', timeout: 30000 })
        await waitConnected(page)
    }
    await page.waitForTimeout(5000)
    const treeNode = page.locator('.p3xr-tree-node-label').first()
    if (await treeNode.isVisible({ timeout: 8000 }).catch(() => false)) {
        await treeNode.click()
        await page.waitForTimeout(3000)
    }
    await shot(page, 0, 'Angular Database + Key (Dark)')

    // Step 3: Navigate to monitoring via nav bar
    console.log('2. Angular Monitoring Pulse (Matrix)')
    // Switch theme via THEME menu
    const themeBtn = page.locator('button').filter({ hasText: 'THEME' }).first()
    if (await themeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await themeBtn.click({ force: true })
        await page.waitForTimeout(1000)
        const matrixItem = page.locator('[role="menuitem"]').filter({ hasText: 'Matrix' }).first()
        if (await matrixItem.isVisible({ timeout: 3000 }).catch(() => false)) {
            await matrixItem.click({ force: true })
            await page.waitForTimeout(2000)
        }
    }
    const monNav = page.locator('a:has-text("MONITORING"), [routerlink*="monitoring"]').first()
    if (await monNav.isVisible({ timeout: 3000 }).catch(() => false)) {
        await monNav.click()
    } else {
        await page.goto(`${BASE}/ng/monitoring`, { waitUntil: 'networkidle', timeout: 30000 })
        await waitConnected(page)
    }
    await page.waitForTimeout(10000)
    await shot(page, 1, 'Angular Monitoring Pulse (Matrix)')

    // Step 4: Switch to Enterprise theme, go to database for console
    console.log('3. Angular Console (Enterprise)')
    const themeBtn2 = page.locator('button').filter({ hasText: 'THEME' }).first()
    if (await themeBtn2.isVisible({ timeout: 3000 }).catch(() => false)) {
        await themeBtn2.click({ force: true })
        await page.waitForTimeout(1000)
        const entItem = page.locator('[role="menuitem"]').filter({ hasText: 'Enterprise' }).first()
        if (await entItem.isVisible({ timeout: 3000 }).catch(() => false)) {
            await entItem.click({ force: true })
            await page.waitForTimeout(2000)
        }
    }
    const dbNav2 = page.locator('a:has-text("DATABASE"), [routerlink*="database"]').first()
    if (await dbNav2.isVisible({ timeout: 3000 }).catch(() => false)) {
        await dbNav2.click()
    }
    await page.waitForTimeout(5000)
    const input = page.locator('#p3xr-console-input')
    if (await input.isVisible({ timeout: 3000 }).catch(() => false)) {
        await input.fill('PING')
        await input.press('Enter')
        await page.waitForTimeout(1500)
        await input.fill('INFO server')
        await input.press('Enter')
        await page.waitForTimeout(2000)
    }
    await shot(page, 2, 'Angular Console (Enterprise)')

    // Step 5: Switch to DarkNeu, go to settings
    console.log('4. Angular Settings (Dark Neu)')
    const themeBtn3 = page.locator('button').filter({ hasText: 'THEME' }).first()
    if (await themeBtn3.isVisible({ timeout: 3000 }).catch(() => false)) {
        await themeBtn3.click({ force: true })
        await page.waitForTimeout(1000)
        const neuItem = page.locator('[role="menuitem"]').filter({ hasText: 'DarkNeu' }).first()
        if (await neuItem.isVisible({ timeout: 3000 }).catch(() => false)) {
            await neuItem.click({ force: true })
            await page.waitForTimeout(2000)
        }
    }
    const settNav = page.locator('a:has-text("SETTINGS"), [routerlink*="settings"]').first()
    if (await settNav.isVisible({ timeout: 3000 }).catch(() => false)) {
        await settNav.click()
    }
    await page.waitForTimeout(4000)
    await shot(page, 3, 'Angular Settings (Dark Neu)')

    // Step 6: Switch to React via GUI toggle, then navigate
    console.log('5. React Database (DarkoBluo)')
    // Switch to DarkoBluo theme first
    const themeBtn4 = page.locator('button').filter({ hasText: 'THEME' }).first()
    if (await themeBtn4.isVisible({ timeout: 3000 }).catch(() => false)) {
        await themeBtn4.click({ force: true })
        await page.waitForTimeout(1000)
        const bluoItem = page.locator('[role="menuitem"]').filter({ hasText: 'DarkoBluo' }).first()
        if (await bluoItem.isVisible({ timeout: 3000 }).catch(() => false)) {
            await bluoItem.click({ force: true })
            await page.waitForTimeout(2000)
        }
    }
    // Navigate to React database
    await page.goto(`${BASE}/react/database`, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(8000)
    await shot(page, 4, 'React Database (DarkoBluo)')

    // Step 7: React monitoring with Redis theme
    console.log('6. React Monitoring (Redis)')
    await page.evaluate(() => localStorage.setItem('p3xr-theme', 'p3xrThemeRedis'))
    await page.goto(`${BASE}/react/monitoring`, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForTimeout(8000)
    await shot(page, 5, 'React Monitoring (Redis)')

    await page.close()
    await context.close()
    await browser.close()
    console.log(`\nDone! 6 screenshots saved to: ${outDir}`)
}

run().catch(e => { console.error(e); process.exit(1) })
