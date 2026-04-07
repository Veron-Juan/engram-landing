---
title: What Is Engram
description: Engram is a persistent memory system for coding agents built around curated observations instead of noisy raw capture.
sidebar:
  order: 2
---

Engram is a persistent memory layer for AI coding agents.

At its core, it is a Go binary backed by SQLite and FTS5. That binary exposes multiple surfaces so different tools can talk to the same memory store:

- CLI for direct terminal work
- MCP server for agent integrations
- HTTP API for plugins and automation
- TUI for interactive inspection

## What problem it solves

Most coding agents lose context when the session ends or when their context gets compacted. Engram preserves what matters so the next session can recover decisions, bugs, conventions, and progress.

## What gets stored

Engram is optimized for agent-curated memory, not indiscriminate logging.

- observations such as bug fixes, design decisions, discoveries, and conventions
- session summaries that capture goals, accomplishments, and relevant files
- user prompts when the agent wants stronger historical context

## Why the model matters

This design keeps search quality high. Instead of dumping raw tool output and hoping later compression cleans it up, the agent saves structured summaries at the moment meaning becomes clear.

## What the stack looks like

```text
Agent -> MCP stdio or plugin -> Engram binary -> SQLite + FTS5
```

That stack keeps installation simple, avoids external database services, and works across multiple agents.