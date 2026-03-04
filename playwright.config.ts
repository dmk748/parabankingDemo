import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // ⏱ Global timeout for each test
  timeout: 30 * 1000,

  // 📁 Where your tests live
  testDir: './tests',

  // 🚀 Allow tests to run in parallel
  fullyParallel: true,

  // 🔁 Retry only once (good for flaky UI)
  retries: 1,

  // 👷 Number of parallel workers
  // Local: CPU-based | CI: fixed
  //CI → 1 worker, local → automatically based on the number of CPU cores(
  // 👉 IF the tests are running in CI
  // 👉 THEN use 1 worker
  // 👉 ELSE (local machine) don’t set workers)
   workers: process.env.CI ? 2 : undefined,

  // 📊 REPORTERS (ALLURE + HTML)
  reporter: [
    ['allure-playwright'],
    ['html', { open: process.env.CI ? 'never' : 'always'}]
  ],

  // 🌍 Shared test settings
  use: {
    //baseURL: 'https://parabank.parasoft.com/parabank',

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    headless: !!process.env.CI,

    viewport: { width: 1280, height: 720 },

    ignoreHTTPSErrors: true,
  },

  // 🌐 Browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment when needed
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
    */
  ],
});