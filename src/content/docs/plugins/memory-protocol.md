---
title: Memory Protocol
description: The operational rules that tell an agent when to save, when to search, and how to close a session cleanly.
sidebar:
  order: 5
---

The memory protocol is the difference between having a database and having usable memory.

## Mandatory moments

- save after decisions, bug fixes, discoveries, conventions, and config changes
- search when the user asks to remember something or when prior work likely exists
- close with a session summary

Without that discipline, even a strong backend produces weak continuity.