import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    trace: "on", // record a trace for every run
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
