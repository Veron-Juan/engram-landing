---
title: Git Sync
description: Export new memory chunks, commit them, and import them on another machine without merge-conflict pain.
sidebar:
  order: 5
---

Engram sync uses compressed chunks to keep history shareable.

## Typical flow

```bash
engram sync
git add .engram/
git commit -m "sync engram memories"
```

On another machine:

```bash
engram sync --import
```

Use `engram sync --status` to inspect what still needs import or export.