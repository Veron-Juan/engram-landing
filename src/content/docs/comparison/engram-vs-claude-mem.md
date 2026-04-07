---
title: Engram vs claude-mem
description: Compare Engram’s curated-memory approach to claude-mem’s raw-capture and compression pipeline.
sidebar:
  order: 2
---

Key differences:

- Go single binary vs multi-runtime stack
- agent-agnostic MCP model vs Claude-specific workflow
- SQLite FTS5 vs ChromaDB-heavy pipeline
- curated observations vs raw tool-call capture

The tradeoff is deliberate: Engram optimizes for simpler deployment and cleaner retrieval.