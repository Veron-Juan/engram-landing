---
title: Codex Setup
description: Connect Engram to Codex with MCP plus compact-prompt instructions that protect memory continuity.
sidebar:
  order: 5
---

## Recommended path

```bash
engram setup codex
```

The setup writes three things:

- MCP server config in `~/.codex/config.toml`
- model instructions with the Memory Protocol
- a compaction prompt file so memory-save instructions survive summarization

## Manual path

Use an `mcp_servers.engram` block in your Codex config and point Codex to the Engram instruction files if you manage config yourself.

## Why this matters

Codex can use MCP without extra ceremony, but the protocol and compact prompt are what keep continuity strong between sessions.