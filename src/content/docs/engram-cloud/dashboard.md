---
title: Dashboard
description: Server-rendered browser UI for stats, activity, project browser, contributors, and admin controls.
sidebar:
  order: 5
---

Engram Cloud includes a browser dashboard served from the cloud runtime at `/dashboard/*`.

The dashboard is server-rendered with [templ](https://templ.guide/) and [HTMX](https://htmx.org/). No separate frontend build step.

## Accessing the dashboard

In smoke mode (insecure): open `http://your-cloud-host:18080/dashboard` directly — no login required.

In authenticated mode: visit `/dashboard/login`, enter your bearer token, and receive a signed session cookie. Direct bearer headers do not serve as browser sessions.

## Dashboard sections

| Section | Path | Purpose |
|---------|------|---------|
| Overview | `/dashboard` | Summary stats |
| Stats | `/dashboard/stats` | Storage and activity metrics |
| Activity | `/dashboard/activity` | Recent saves and sessions |
| Browser | `/dashboard/browser` | Observations, sessions, and prompts |
| Projects | `/dashboard/projects` | Project list with sync status |
| Project detail | `/dashboard/projects/{name}` | Per-project observations, sessions, prompts |
| Contributors | `/dashboard/contributors` | Activity by contributor |
| Admin | `/dashboard/admin` | Project sync controls, user management, health |

## Admin controls

The admin section is gated by `ENGRAM_CLOUD_ADMIN` token in authenticated mode.

Key admin actions:
- **Per-project sync pause** — `POST /dashboard/admin/projects/{name}/sync` toggles the pause state. A paused project returns HTTP 409 on push attempts but continues to serve reads.
- **User list** — `/dashboard/admin/users` shows all contributors with admin-level detail.
- **Health** — `/dashboard/admin/health` shows runtime and database state.

## Public routes

These routes do not require authentication in either mode:

- `GET /dashboard/health`
- `GET /dashboard/login` / `POST /dashboard/login`
- `POST /dashboard/logout`
- `GET /dashboard/static/*`
