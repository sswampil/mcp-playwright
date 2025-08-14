Use the "playwright" tool to create a test file at `tests/ai.smoke.spec.ts` that:
- Visits https://playwright.dev
- Clicks Docs in the top navigation
- Navigates to the "Locators" page from the sidebar
- Asserts the H1 "Locators" is visible
- Checks the URL contains `/locators`
- Uses role-based locators and `expect` with auto-wait
- Sets `test.setTimeout(60000)` for stability
