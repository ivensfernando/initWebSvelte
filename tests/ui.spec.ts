import { test, expect } from '@playwright/test';

test.describe('Visual styling expectations', () => {
  test('hero colors and sizes match the design system', async ({ page }) => {
    await page.goto('/');

    const heroHeading = page.locator('.hero-content h1');
    await expect(heroHeading).toHaveCSS('color', 'rgb(255, 255, 255)');

    const heroFontSize = await heroHeading.evaluate((node) =>
      window.getComputedStyle(node).fontSize
    );
    const heroFontSizeValue = Number.parseFloat(heroFontSize);
    expect(heroFontSizeValue).toBeGreaterThanOrEqual(30);
    expect(heroFontSizeValue).toBeLessThanOrEqual(52);

    const videoPreview = page.locator('.video-preview');
    await expect(videoPreview).toHaveCSS('background-color', 'rgb(27, 45, 34)');

    const playButton = page.locator('.play-button');
    await expect(playButton).toHaveCSS('width', '64px');
    await expect(playButton).toHaveCSS('height', '64px');
  });

  test('header logo sizing stays consistent', async ({ page }) => {
    await page.goto('/');

    const logoMark = page.locator('.logo-mark').first();
    await expect(logoMark).toHaveCSS('width', '140px');
    await expect(logoMark).toHaveCSS('height', '140px');
  });

  test('navigation height and font sizes are compact', async ({ page }) => {
    await page.goto('/');

    const navContainer = page.locator('header .nav');
    await expect(navContainer).toHaveCSS('height', '120px');

    const navLink = page.locator('.nav-links a').first();
    const navFontSize = await navLink.evaluate((node) =>
      window.getComputedStyle(node).fontSize
    );
    const navFontSizeValue = Number.parseFloat(navFontSize);
    expect(navFontSizeValue).toBeGreaterThan(12);
    expect(navFontSizeValue).toBeLessThan(16);
  });

  test('mobile menu uses smaller link typography', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 720 });
    await page.goto('/');

    await page.getByRole('button', { name: 'Toggle navigation' }).click();
    const mobileLink = page.locator('nav[aria-label="Mobile"] a').first();
    const mobileFontSize = await mobileLink.evaluate((node) =>
      window.getComputedStyle(node).fontSize
    );
    const mobileFontSizeValue = Number.parseFloat(mobileFontSize);
    expect(mobileFontSizeValue).toBeGreaterThan(12);
    expect(mobileFontSizeValue).toBeLessThan(16);
  });
});

test.describe('Link validation', () => {
  test('all visible links resolve without a 404', async ({ page, request }) => {
    await page.goto('/');

    const hrefs = await page.$$eval('a[href]', (anchors) =>
      anchors
        .map((anchor) => anchor.getAttribute('href'))
        .filter((href): href is string => Boolean(href))
    );

    const uniqueHrefs = Array.from(new Set(hrefs));
    expect(uniqueHrefs.length).toBeGreaterThan(0);

    for (const href of uniqueHrefs) {
      const url = href.startsWith('http')
        ? href
        : new URL(href, 'http://localhost:4173').toString();

      const response = await request.get(url);
      expect(response.ok()).toBeTruthy();
    }
  });
});
