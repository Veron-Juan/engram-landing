---
title: What Is Engram Cloud
description: The mental model behind Engram Cloud — what it adds, how it fits the local-first architecture, and when to use it.
sidebar:
  order: 2
---

Engram Cloud is an opt-in, self-hosted replication and browser visibility layer on top of the core Engram binary.

## The mental model

Local SQLite is always the source of truth. Engram Cloud receives pushed replicas — it never owns the primary store.

```text
Agent (any MCP-compatible)
  ↓ MCP stdio
Engram binary (local)
  ↓ SQLite + FTS5 (~/.engram/engram.db)   ← SOURCE OF TRUTH
  ↓ [opt-in]
engram cloud serve
  ↓ Postgres + /dashboard/*
```

## Two distinct runtimes

Engram Cloud introduces a second runtime alongside the local one. They run on separate ports and serve different purposes.

| Runtime | Command | What it exposes |
|---------|---------|-----------------|
| Local | `engram serve` | Memory API (port 7437), `GET /sync/status` |
| Cloud | `engram cloud serve` | `/health`, `/sync/pull`, `/sync/push`, `/dashboard/*` (port 18080) |

You run both. The local binary handles agent calls. The cloud runtime handles replication and browser access.

## What cloud adds

- **Project-scoped replication** — each sync call is tied to one explicit `--project`
- **Mutation-based autosync** — background push/pull goroutine when `ENGRAM_CLOUD_AUTOSYNC=1`
- **Browser dashboard** — server-rendered UI for stats, activity, project browser, contributors, and admin controls
- **Per-project sync pause** — admin toggle to pause a project without shutting down the runtime
- **Deterministic failure codes** — `blocked_unenrolled`, `auth_required`, `cloud_config_error`, `policy_forbidden`, `paused`, `transport_failed` — no silent drift
- **Upgrade workflow** — `doctor → repair → bootstrap → status` for existing local databases enrolling into cloud for the first time

## What cloud does not change

- Agent workflow stays identical — agents call `mem_save`, `mem_search`, and the rest through the same MCP tools
- Local binary stores everything first — cloud sync is always a second step, not a proxy
- Offline work is fully supported — the local binary continues normally if cloud is unreachable

## When to use it

Use Engram Cloud when:
- You need shared memory across multiple machines without manual Git commits
- Your team wants browser visibility into observations, sessions, and contributor activity
- You operate Engram as a service and want a dashboard for monitoring

Use Git sync when:
- You work solo or in a small team that already uses Git for everything
- You want the simplest possible setup with no additional infrastructure
