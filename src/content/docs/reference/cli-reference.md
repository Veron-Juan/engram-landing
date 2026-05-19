---
title: CLI Reference
description: Command-level reference for the Engram binary.
sidebar:
  order: 2
---

## Core commands

- `engram setup [agent]` — install agent plugin (claude-code, opencode, gemini-cli, codex, vscode)
- `engram serve [port]` — start local HTTP API (default port 7437)
- `engram mcp` — start MCP server over stdio
- `engram tui` — open terminal UI
- `engram search <query>` — full-text search
- `engram save <title> <msg>` — save observation from terminal
- `engram timeline <obs_id>` — observations before and after a given ID
- `engram context [project]` — recent context for the project
- `engram stats` — storage statistics
- `engram export [file]` — export compressed chunks
- `engram import <file>` — import compressed chunks
- `engram version`

## Sync

- `engram sync` — Git-based sync (export chunks to `.engram/`)
- `engram sync --all` — sync all projects
- `engram sync --cloud --project <name>` — explicit cloud sync for one project
- `engram sync --cloud --status --project <name>` — inspect last cloud sync status
- `engram obsidian-export` — export observations to Obsidian-compatible markdown

## Projects

- `engram projects list` — list all known projects
- `engram projects consolidate` — merge duplicate project name variants
- `engram projects prune` — remove empty or stale projects

## Cloud

- `engram cloud config --server <url>` — set cloud endpoint URL
- `engram cloud status` — show cloud configuration and auth state
- `engram cloud enroll <project>` — enroll a project for cloud replication
- `engram cloud serve` — start cloud runtime (Postgres-backed, dashboard, sync API)
- `engram cloud upgrade doctor --project <name>` — read-only readiness check
- `engram cloud upgrade repair --project <name> [--dry-run|--apply]` — fix local metadata
- `engram cloud upgrade bootstrap --project <name>` — resumable enroll + push + verify
- `engram cloud upgrade status --project <name>` — current upgrade stage
- `engram cloud upgrade rollback --project <name>` — revert (only before bootstrap_verified)