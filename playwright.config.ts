import { defineConfig } from '@playwright/test';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

// Auto-load secure/playwright.env if it exists (not committed to git)
const envFile = resolve(__dirname, 'secure/playwright.env');
if (existsSync(envFile)) {
    for (const line of readFileSync(envFile, 'utf8').split('\n')) {
        const m = line.match(/^([^#=]+)=(.*)$/);
        if (m) process.env[m[1].trim()] ??= m[2].trim();
    }
}

const productionSettingsUrl =
    process.env.PLAYWRIGHT_PROD_SETTINGS_URL || 'https://redis.patrikx3.com/ng/settings';
const productionHttpUsername = process.env.PLAYWRIGHT_PROD_HTTP_USERNAME;
const productionHttpPassword = process.env.PLAYWRIGHT_PROD_HTTP_PASSWORD;
const productionHttpCredentials = productionHttpUsername && productionHttpPassword
    ? {
        username: productionHttpUsername,
        password: productionHttpPassword,
        origin: new URL(productionSettingsUrl).origin,
    }
    : undefined;

const baseHost = process.env.PLAYWRIGHT_BASE_HOST || 'http://localhost:8080';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true,
        httpCredentials: productionHttpCredentials,
        viewport: { width: 1280, height: 900 },
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'angular',
            use: {
                browserName: 'chromium',
                baseURL: process.env.PLAYWRIGHT_BASE_URL || `${baseHost}/ng/`,
            },
        },
        {
            name: 'react',
            use: {
                browserName: 'chromium',
                baseURL: process.env.PLAYWRIGHT_BASE_URL_REACT || `${baseHost}/react/`,
            },
        },
    ],
});
