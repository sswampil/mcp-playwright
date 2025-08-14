# Playwright MCP Demo — AI-Assisted Browser Tests

A minimal portfolio project showing how to **generate tests with an MCP-enabled AI agent** and **run/debug them with Playwright Test UI**.

## What’s inside
- **Playwright core** (`playwright`) — browsers & automation APIs
- **Playwright Test** (`@playwright/test`) — runner, assertions, UI mode, traces
- **Playwright MCP server** (`@playwright/mcp`) — exposes Playwright as a tool to IDE AI clients via the Model Context Protocol (MCP)

## Setup
```bash
npm i
npx playwright install

![Run demo](assets/run.gif)

## Why this is cool

- **Agent + Runner:** An MCP-enabled IDE agent generates Playwright tests; I run/debug them with **Playwright Test UI**.
- **Human-in-the-loop:** Prompts live in `/prompts`, generated specs in `/tests`. I review and refine AI output.
- **Real debugging:** Traces, console, network, DOM snapshots make failures explainable.

## Run it yourself

```bash
git clone https://github.com/sswampil/mcp-playwright.git
cd mcp-playwright
npm i
npx playwright install
npm run test:ui


## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
