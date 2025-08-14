Use the "playwright" tool to create a test file at `tests/ai.nav.spec.ts` that:
- Visits https://playwright.dev
- Clicks Docs → “Test configuration”
- Asserts H1 “Test configuration” is visible
- Checks URL contains `/test-configuration`
- Uses role-based locators and `expect` with auto-wait
- Sets `test.setTimeout(60000)`
