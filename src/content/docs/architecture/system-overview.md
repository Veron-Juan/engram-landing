---
title: System Overview
description: One binary, one SQLite file, multiple interfaces, and a memory model built for agents that forget.
sidebar:
  order: 2
---

Engram is a single Go binary sitting in front of SQLite + FTS5.

```text
Agent or plugin -> Engram -> SQLite + FTS5
```

Interfaces:

- CLI
- MCP stdio server
- HTTP API
- TUI

This architecture keeps setup small while leaving multiple integration paths open.