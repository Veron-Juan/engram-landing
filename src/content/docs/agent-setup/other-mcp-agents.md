---
title: Other MCP Agents
description: Use Engram with Cursor, Windsurf, Antigravity, or any client that can launch a local MCP server.
sidebar:
  order: 7
---

If the client can launch a local MCP server, you can usually integrate Engram with the same core command:

```bash
engram mcp
```

## What you need

- a local command entry for the MCP server
- the `engram` binary available on `PATH`
- a prompt or system instruction telling the agent when to save and recover memory

## What you lose without a plugin

- no lifecycle hooks
- no automatic session orchestration
- no automatic compaction recovery unless you instruct it explicitly

For those agents, the MCP setup is easy. The hard part is getting the memory discipline right.