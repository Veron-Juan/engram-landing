---
title: Environment Variables
description: Variables that control Engram's data path, port, project resolution, and cloud sync.
sidebar:
  order: 5
---

## Local runtime

- `ENGRAM_DATA_DIR` — override the data directory (default: `~/.engram`)
- `ENGRAM_PORT` — override the HTTP API port (default: `7437`)
- `ENGRAM_PROJECT` — override project detection for MCP mode

## Cloud sync (client-side)

- `ENGRAM_CLOUD_TOKEN` — bearer token for authenticating with a cloud runtime
- `ENGRAM_CLOUD_AUTOSYNC` — set to `1` to enable background push/pull (500ms debounce)

## Cloud runtime (`engram cloud serve`)

- `ENGRAM_DATABASE_URL` — Postgres connection string
- `ENGRAM_CLOUD_TOKEN` — bearer token expected from clients
- `ENGRAM_CLOUD_ADMIN` — separate admin token (must differ from `CLOUD_TOKEN`)
- `ENGRAM_JWT_SECRET` — 32+ byte random secret for signed dashboard sessions
- `ENGRAM_CLOUD_ALLOWED_PROJECTS` — comma-separated project allowlist (required)
- `ENGRAM_CLOUD_HOST` — bind address (set to `0.0.0.0` for containers)
- `ENGRAM_CLOUD_INSECURE_NO_AUTH` — set to `1` for local dev/smoke only; cannot combine with `CLOUD_TOKEN`