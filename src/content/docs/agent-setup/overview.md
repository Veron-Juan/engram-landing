---
title: Agent Setup Overview
description: Understand the difference between full plugins, bare MCP, and which setup path fits your agent.
sidebar:
  order: 1
---

Every integration starts from the same core fact: your agent needs a way to call `engram mcp`.

## Two setup depths

### Full plugin path

Choose this when the client supports lifecycle hooks or richer system instructions.

You get features like:

- session start orchestration
- auto-import of synced memories
- compaction recovery guidance
- a built-in memory protocol

### Bare MCP path

Choose this when you want the smallest setup surface.

You get:

- memory tools over stdio
- no plugin lifecycle automation
- more responsibility on the agent prompt to save and recover memory well

## How to choose

- use full plugin support when available and trusted
- use bare MCP when you want portability, minimalism, or native platform simplicity

The next pages split by agent so the setup details stay concrete.