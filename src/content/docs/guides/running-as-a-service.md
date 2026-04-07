---
title: Running as a Service
description: Keep Engram’s HTTP server running as a user service when your workflow benefits from a stable API process.
sidebar:
  order: 7
---

The HTTP API can run as a user-scoped service when plugin flows need it continuously.

## systemd pattern

- place the binary on your `PATH`
- create `~/.config/systemd/user/engram.service`
- enable and start the service

Use `journalctl --user -u engram -f` for logs.