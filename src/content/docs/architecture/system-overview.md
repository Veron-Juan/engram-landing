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

## Optional cloud layer

Engram Cloud is an opt-in replication and browser visibility layer that sits on top of the local binary:

```text
Agent -> Engram (local) -> SQLite + FTS5   <- source of truth
                        -> [opt-in] engram cloud serve -> Postgres + dashboard
```

The local runtime and the cloud runtime are separate processes with distinct commands and ports.
Local SQLite is always authoritative. The cloud receives pushed replicas, not the primary store.

See the [Engram Cloud](/engram-cloud/) section for setup, self-hosting, and autosync details.