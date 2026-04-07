---
title: Claude Code Setup
description: Install the Engram plugin for Claude Code or configure the MCP server manually.
sidebar:
  order: 2
---

## Recommended path: marketplace plugin

```bash
claude plugin marketplace add Gentleman-Programming/engram
claude plugin install engram
```

This gives you more than raw MCP:

- session tracking
- auto-import of git-synced memories
- compaction recovery guidance
- an embedded memory protocol skill

## Alternative: setup via Engram

```bash
engram setup claude-code
```

## Bare MCP path

Add the server to `.claude/settings.json` or `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "engram": {
      "command": "engram",
      "args": ["mcp"]
    }
  }
}
```

## Windows note

Claude Code plugin hooks rely on `bash`. If hooks are unreliable on Windows, use bare MCP instead.