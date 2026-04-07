---
title: Storage and FTS
description: SQLite tables, FTS5 indexing, and why text search quality depends on structured observations.
sidebar:
  order: 3
---

The core tables track sessions, observations, prompts, and sync metadata.

FTS5 virtual tables index memory content so retrieval stays fast and local.

## Why structure matters

Search quality does not come from embeddings here. It comes from precise titles, content, and project metadata.