---
title: Self-Hosting
description: Deploy Engram Cloud with the official GHCR image on Dokploy, Coolify, Portainer, or any Linux VPS.
sidebar:
  order: 4
---

Engram Cloud publishes an official image at `ghcr.io/gentleman-programming/engram`.

Supported platforms: `linux/amd64`, `linux/arm64`.

## Docker Compose (GHCR image)

Use `docker-compose.ghcr.yml` from the repository as the starting point for any platform-based deploy:

```yaml
services:
  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    env_file: .env
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - engram-cloud-pg:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U engram -d engram_cloud"]
      interval: 10s
      timeout: 5s
      retries: 10

  cloud:
    image: ghcr.io/gentleman-programming/engram:latest
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    env_file: .env
    ports:
      - "18080:18080"

volumes:
  engram-cloud-pg:
```

## Required environment variables

| Variable | Purpose |
|----------|---------|
| `ENGRAM_DATABASE_URL` | Postgres connection string |
| `ENGRAM_CLOUD_TOKEN` | Bearer token for client sync requests |
| `ENGRAM_CLOUD_ADMIN` | Separate admin token (must differ from `CLOUD_TOKEN`) |
| `ENGRAM_JWT_SECRET` | 32+ byte random secret for signed dashboard sessions |
| `ENGRAM_CLOUD_ALLOWED_PROJECTS` | Comma-separated project allowlist (required always) |
| `ENGRAM_CLOUD_HOST` | Bind address — set to `0.0.0.0` for container deployments |
| `ENGRAM_PORT` | Port (18080 is the standard for cloud runtime) |

## VPS `.env` example

```dotenv
POSTGRES_USER=engram
POSTGRES_PASSWORD=replace-with-strong-postgres-password
POSTGRES_DB=engram_cloud

ENGRAM_DATABASE_URL=postgres://engram:replace-with-strong-postgres-password@postgres:5432/engram_cloud?sslmode=disable
ENGRAM_CLOUD_TOKEN=replace-with-long-random-bearer-token
ENGRAM_CLOUD_ADMIN=replace-with-separate-admin-token
ENGRAM_JWT_SECRET=replace-with-32+-byte-random-secret
ENGRAM_CLOUD_ALLOWED_PROJECTS=my-project,another-project
ENGRAM_CLOUD_HOST=0.0.0.0
ENGRAM_PORT=18080
```

## Configuration rules

- `ENGRAM_CLOUD_INSECURE_NO_AUTH=1` cannot be combined with `ENGRAM_CLOUD_TOKEN` — insecure mode is local dev only, never production
- `ENGRAM_CLOUD_ALLOWED_PROJECTS` is required in both insecure and authenticated modes
- Authenticated mode requires an explicit non-default `ENGRAM_JWT_SECRET`
- `ENGRAM_CLOUD_ADMIN` must be a different value from `ENGRAM_CLOUD_TOKEN`

## Client-side setup (after deploy)

```bash
engram cloud config --server https://your-cloud-host
export ENGRAM_CLOUD_TOKEN=replace-with-long-random-bearer-token
engram cloud enroll my-project
engram sync --cloud --project my-project
```

## Autosync (background replication)

To enable background push/pull without manual `engram sync` calls:

```bash
export ENGRAM_CLOUD_AUTOSYNC=1
```

Autosync runs a lease-guarded background goroutine with 500ms debounce. Failures use exponential backoff (base 1s, max 5 min). The goroutine never holds SQLite write locks.
