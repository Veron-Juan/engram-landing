---
title: Privacy and Redaction
description: Keep secrets out of persisted memory with private tags and layered redaction.
sidebar:
  order: 6
---

Wrap sensitive content in `<private>` tags.

Engram strips those values before persistence, and plugins can remove them before data ever leaves the process.

## Good use cases

- API keys
- credentials
- internal tokens
- fragments of regulated data

Redaction is not a substitute for judgment, but it makes deliberate memory capture safer.