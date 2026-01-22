import { test, expect } from '@playwright/test';

test.describe('Assets navigation experience', () => {
  test('logo is larger and aligned closer to the left edge', async ({ page }) => {
    await page.goto('/assets');

    const logo = page.getByTestId('brand-logo');
    const brand = page.getByTestId('brand');
    await expect(logo).toBeVisible();

    const logoBox = await logo.boundingBox();
    expect(logoBox).not.toBeNull();
    if (logoBox) {
      expect(logoBox.height).toBeGreaterThanOrEqual(28);
    }

    const brandBox = await brand.boundingBox();
    expect(brandBox).not.toBeNull();
    if (brandBox) {
      expect(brandBox.x).toBeLessThanOrEqual(32);
    }

    await expect(page.getByText('BidiinPost')).toBeVisible();
  });

  test('menu navigation updates active state', async ({ page }) => {
    await page.goto('/assets');

    await page.getByRole('link', { name: 'Pricing' }).click();
    await expect(page).toHaveURL('/pricing');

    await expect(page.getByRole('link', { name: 'Pricing' })).toHaveClass(/is-active/);
    await expect(page.getByRole('link', { name: 'Assets' })).not.toHaveClass(/is-active/);
  });

  test('register button uses gradient styling', async ({ page }) => {
    await page.goto('/assets');

    const registerButton = page.getByRole('link', { name: 'Register' });
    const backgroundImage = await registerButton.evaluate((node) =>
      window.getComputedStyle(node).backgroundImage
    );
    expect(backgroundImage).toContain('linear-gradient');
  });
});
