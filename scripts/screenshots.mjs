import { chromium } from 'playwright'
import { mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = resolve(__dirname, '../../redis-ui/artifacts/preview-images')
mkdirSync(outDir, { recursive: true })

const BASE = process.env.SCREENSHOT_URL || 'https://p3x.redis.patrikx3.com'
const WIDTH = 1280
const HEIGHT = 800
let counter = 0

async function shot(page, label) {
    const name = counter === 0 ? 'preview' : `preview-${counter + 1}`
    counter++
    await page.screenshot({ path: resolve(outDir, `${name}.png`), fullPage: false })
    console.log(`  ${name}.png — ${label}`)
}

async function run() {
    const browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({ viewport: { width: WIDTH, height: HEIGHT } })

    // 1. Angular Settings Dark
    let page = await context.newPage()
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(3000)
    await shot(page, 'Angular Settings Dark')

    // Connect
    const connectBtn = page.locator('button:has-text("CONNECT")').first()
    if (await connectBtn.isVisible({ timeout: 3000 })) {
        await connectBtn.click()
        await page.waitForTimeout(3000)
    }

    // 2. Angular Database Dark
    await page.goto(`${BASE}/ng/database`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(4000)
    await shot(page, 'Angular Database Dark')

    // 3. Angular Console Dark
    const input = page.locator('#p3xr-console-input')
    if (await input.isVisible({ timeout: 3000 })) {
        await input.fill('PING')
        await input.press('Enter')
        await page.waitForTimeout(1000)
        await input.fill('INFO server')
        await input.press('Enter')
        await page.waitForTimeout(1500)
    }
    await shot(page, 'Angular Console Dark')

    // 4. Angular Key View Dark
    const treeNode = page.locator('.p3xr-tree-node-label').first()
    if (await treeNode.isVisible({ timeout: 3000 })) {
        await treeNode.click()
        await page.waitForTimeout(2000)
    }
    await shot(page, 'Angular Key View Dark')

    // 5. Angular Monitoring Pulse
    await page.goto(`${BASE}/ng/monitoring`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(5000)
    await shot(page, 'Angular Monitoring Pulse Dark')

    // 6. Angular Light theme
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(2000)
    let themeBtn = page.locator('text=THEME').first()
    if (await themeBtn.isVisible({ timeout: 3000 })) {
        await themeBtn.click()
        await page.waitForTimeout(500)
        const lightBtn = page.locator('text=Light').first()
        if (await lightBtn.isVisible({ timeout: 2000 })) {
            await lightBtn.click()
            await page.waitForTimeout(1500)
        }
    }
    await page.goto(`${BASE}/ng/database`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(3000)
    await shot(page, 'Angular Database Light')

    // 7. Angular Matrix theme
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(2000)
    themeBtn = page.locator('text=THEME').first()
    if (await themeBtn.isVisible({ timeout: 3000 })) {
        await themeBtn.click()
        await page.waitForTimeout(500)
        const matrixBtn = page.locator('text=Matrix').first()
        if (await matrixBtn.isVisible({ timeout: 2000 })) {
            await matrixBtn.click()
            await page.waitForTimeout(1500)
        }
    }
    await page.goto(`${BASE}/ng/database`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(3000)
    await shot(page, 'Angular Database Matrix')

    // Switch back to dark
    await page.goto(`${BASE}/ng/settings`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(2000)
    themeBtn = page.locator('text=THEME').first()
    if (await themeBtn.isVisible({ timeout: 3000 })) {
        await themeBtn.click()
        await page.waitForTimeout(500)
        const darkBtn = page.locator('text=Dark').first()
        if (await darkBtn.isVisible({ timeout: 2000 })) {
            await darkBtn.click()
            await page.waitForTimeout(1000)
        }
    }

    // 8. Language menu
    const langBtn = page.locator('text=LANGUAGE').first()
    if (await langBtn.isVisible({ timeout: 3000 })) {
        await langBtn.click()
        await page.waitForTimeout(1000)
    }
    await shot(page, 'Language Menu')
    await page.close()

    // 9. React Settings Dark
    page = await context.newPage()
    await page.goto(`${BASE}/react/settings`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(3000)
    await shot(page, 'React Settings Dark')

    // Connect React
    const connectBtnR = page.locator('button:has-text("CONNECT")').first()
    if (await connectBtnR.isVisible({ timeout: 3000 })) {
        await connectBtnR.click()
        await page.waitForTimeout(3000)
    }

    // 10. React Database Dark
    await page.goto(`${BASE}/react/database`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(4000)
    await shot(page, 'React Database Dark')

    // 11. React Monitoring
    await page.goto(`${BASE}/react/monitoring`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(5000)
    await shot(page, 'React Monitoring Dark')

    // 12. React Info
    await page.goto(`${BASE}/react/info`, { waitUntil: 'networkidle', timeout: 15000 })
    await page.waitForTimeout(2000)
    await shot(page, 'React Info Dark')

    await page.close()
    await browser.close()
    console.log(`\nAll ${counter} screenshots saved to: ${outDir}`)
}

run().catch(e => { console.error(e); process.exit(1) })
