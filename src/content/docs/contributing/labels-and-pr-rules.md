---
title: Labels and PR Rules
description: Understand the type, status, priority, and effort labels, plus the checks every PR must satisfy.
sidebar:
  order: 3
---

Every PR needs exactly one `type:*` label.

Checks verify:

- issue reference exists
- issue is approved
- PR has exactly one type label
- unit and e2e tests pass