// tests/ai.nav.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Navigation to Test configuration", () => {
  test("should navigate to Test configuration docs", async ({ page }) => {
    test.setTimeout(60_000);

    // Open the Playwright homepage
    await page.goto("https://playwright.dev/");

    // Click the "Docs" menu (role-based locators)
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Docs" })
      .click();

    // Click the "Test configuration" link
    await page.getByRole("link", { name: /^Test configuration$/ }).click();

    // Assert the H1 "Test configuration" is visible
    await expect(
      page.getByRole("heading", { level: 1, name: /^Test configuration$/ })
    ).toBeVisible();

    // Check the URL contains "/test-configuration"
    await expect(page).toHaveURL(/\/test-configuration/);
  });
});
