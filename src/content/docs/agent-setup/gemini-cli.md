---
title: Gemini CLI Setup
description: Set up Gemini CLI with Engram MCP and the Memory Protocol instructions required for recovery after compaction.
sidebar:
  order: 4
---

## Recommended path

```bash
engram setup gemini-cli
```

That setup registers the MCP server, writes the Memory Protocol to `~/.gemini/system.md`, and ensures Gemini actually loads that file.

## Manual path

Add the MCP server to `~/.gemini/settings.json`:

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

Use the automated setup unless you have a strong reason not to. The protocol file is part of what makes memory resilient after compaction.