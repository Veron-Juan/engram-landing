---
title: OpenCode Setup
description: Configure Engram for OpenCode with the thin plugin or a minimal MCP-only setup.
sidebar:
  order: 3
---

## Recommended path

```bash
engram setup opencode
```

That command installs the plugin and registers the MCP server in `opencode.json`.

## What the plugin adds

- auto-start of the server when needed
- session creation and recovery
- memory protocol injection
- compatibility with local-model setups that need a single system block

## Minimal MCP alternative

Add this to `~/.config/opencode/opencode.json` or your project-level config:

```json
{
  "mcp": {
    "engram": {
      "type": "local",
      "command": ["engram", "mcp"],
      "enabled": true
    }
  }
}
```