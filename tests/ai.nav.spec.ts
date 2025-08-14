import { test, expect } from "@playwright/test";

test("Navigate to Docs → Test configuration", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the Docs link in the navbar
  await page.getByRole("link", { name: "Docs" }).click();

  // Click "Test configuration" in the sidebar
  await page.getByRole("link", { name: "Test configuration" }).click();

  // Assert the H1 is visible
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Test configuration/
  );

  // Verify a specific code block exists
  await expect(page.locator("pre")).toContainText("projects:");

  // Verify deep link works
  await expect(page).toHaveURL(/#projects/);
});
