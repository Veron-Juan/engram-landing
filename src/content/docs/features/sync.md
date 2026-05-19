---
title: Sync
description: Share memories across machines using Git-based chunk export or opt-in cloud replication.
sidebar:
  order: 6
---

Engram has two sync paths: Git-based and cloud.

## Git sync

Engram exports new data as compressed chunks, records imports to avoid duplication, and lets Git handle distribution. That keeps collaboration portable and infrastructure-light.

```bash
engram sync        # export chunks to .engram/
engram sync --all  # sync all projects
```

Commit `.engram/` to your repo and pull it on the next machine.

## Cloud sync

Cloud sync replicates directly to a self-hosted Engram Cloud backend, without the Git step.

```bash
engram sync --cloud --project <name>
engram sync --cloud --status --project <name>
```

Cloud sync is opt-in, project-scoped, and requires an enrolled project. Local SQLite remains the source of truth.

See the [Engram Cloud](/engram-cloud/) section for setup and self-hosting details.