---
title: Surviving Compaction
description: Use Engram’s memory protocol so state survives when the model context is summarized or reset.
sidebar:
  order: 4
---

Compaction is not a rare edge case. It is a routine failure mode if your memory strategy is weak.

## Recovery pattern

1. persist the compacted summary
2. retrieve recent context
3. continue from recovered state instead of guessing

## Why plugins matter here

Some clients can inject protocol guidance or compaction prompts automatically. Bare MCP clients need stronger system instructions to achieve the same resilience.