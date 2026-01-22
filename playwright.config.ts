import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: 'http://localhost:4173',
    viewport: { width: 1280, height: 720 }
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    stdout: 'pipe',
    stderr: 'pipe'
  }
});
