import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    testMatch: '**/*.spec.js',
    timeout: 30000,
    retries: 0,
    workers: 1,
    use: {
        baseURL: process.env.P3XR_URL || `http://localhost:${process.env.P3XR_TEST_FRONTEND_PORT || '28080'}`,
        headless: process.env.P3XR_HEADLESS !== 'false',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        { name: 'chromium', use: { browserName: 'chromium' } },
    ],
    reporter: [['list'], ['html', { open: 'never', outputFolder: 'test-results' }]],
    // Tests expect both redis-ui-server (port 7843) and webpack-dev-server (port 8080) running.
    // Start them manually before running tests:
    //   Terminal 1: cd ../redis-ui-server && node src/lib/boot.mjs
    //   Terminal 2: cd ../redis-ui-material && yarn dev
});
