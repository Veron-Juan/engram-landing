---
title: Plugin Architecture
description: Thin client-specific adapters add lifecycle behavior while Engram remains the single memory backend.
sidebar:
  order: 5
---

Plugins should stay thin.

Their job is to:

- wire lifecycle hooks
- inject memory protocol guidance
- orchestrate session start and recovery

The backend logic stays in Engram, not in every client integration.