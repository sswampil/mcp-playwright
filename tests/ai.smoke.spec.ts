import { test, expect } from "@playwright/test";

test("Docs → Locators page loads with heading", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);

  await page.getByRole("link", { name: "Docs" }).click();

  // Open the Locators page from the left nav
  await page
    .getByRole("link", { name: /^Locators$/ })
    .first()
    .click();

  // Assert via URL (deterministic)
  await expect(page).toHaveURL(/\/docs\/locators/);

  // Assert the main H1 heading specifically
  await expect(
    page.getByRole("heading", { level: 1, name: /^Locators$/ })
  ).toBeVisible();
});
