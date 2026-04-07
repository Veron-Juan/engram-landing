---
title: VS Code Setup
description: Register Engram as an MCP server in VS Code so Copilot agent mode or other chat providers can use persistent memory.
sidebar:
  order: 6
---

VS Code supports MCP servers natively in chat.

## Quick command

```bash
code --add-mcp '{"name":"engram","command":"engram","args":["mcp"]}'
```

## Team-friendly workspace option

Use a `.vscode/mcp.json` file in the project so the setup lives alongside the repository.

## When to prefer VS Code workspace config

- shared team projects
- onboarding where you want less manual setup
- mixed-agent environments inside the same editor

## What to verify

- the chat provider can see the `engram` tools
- the correct binary is on `PATH`
- project detection resolves to the expected repository name