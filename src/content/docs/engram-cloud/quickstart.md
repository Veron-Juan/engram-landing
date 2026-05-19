---
title: Quickstart
description: Run a local smoke setup, verify the browser dashboard, then move to authenticated production mode.
sidebar:
  order: 3
---

## Recommended path: local smoke

The fastest way to verify the full cloud loop is a local Docker Compose setup with no authentication. Use this before deploying to a VPS.

### 1. Start cloud runtime and Postgres

```bash
docker compose -f docker-compose.cloud.yml up -d
```

Defaults on this profile:
- `ENGRAM_CLOUD_INSECURE_NO_AUTH=1` (no auth required for smoke)
- `ENGRAM_CLOUD_ALLOWED_PROJECTS=smoke-project`
- Cloud endpoint at `http://127.0.0.1:18080`

### 2. Configure the CLI cloud endpoint

```bash
engram cloud config --server http://127.0.0.1:18080
```

### 3. Enroll a project

```bash
engram cloud enroll smoke-project
```

### 4. Sync explicitly

```bash
engram sync --cloud --project smoke-project
engram sync --cloud --status --project smoke-project
```

### 5. Verify the dashboard

Open `http://127.0.0.1:18080/dashboard` in your browser.

In smoke mode, `/dashboard/login` redirects to `/dashboard/` directly — no token needed.

---

## Upgrade path for existing local projects

If you already have local memories you want to enroll in cloud:

```bash
engram cloud upgrade doctor   --project my-project        # read-only check
engram cloud upgrade repair   --project my-project --dry-run
engram cloud upgrade repair   --project my-project --apply
engram cloud upgrade bootstrap --project my-project       # resumable enroll + push + verify
engram cloud upgrade status   --project my-project
```

`rollback` is available before `bootstrap_verified` is reached.

---

## Move to authenticated mode

Once smoke works, switch to a production config by adding authentication tokens.

```bash
engram cloud config --server https://your-cloud-host
export ENGRAM_CLOUD_TOKEN=replace-with-long-random-bearer-token
engram cloud enroll my-project
engram sync --cloud --project my-project
```

See [Self-Hosting](/engram-cloud/self-hosting/) for full environment variable requirements and the official container image.

---

## Common failure codes

| Code | Meaning |
|------|---------|
| `blocked_unenrolled` | Project is not enrolled — run `engram cloud enroll` |
| `auth_required` | Server expects a token — set `ENGRAM_CLOUD_TOKEN` |
| `cloud_config_error` | No server URL configured — run `engram cloud config --server` |
| `policy_forbidden` | Project not in server's `ENGRAM_CLOUD_ALLOWED_PROJECTS` |
| `paused` | Project sync paused via dashboard admin toggle |
| `transport_failed` | Network error reaching the cloud runtime |
