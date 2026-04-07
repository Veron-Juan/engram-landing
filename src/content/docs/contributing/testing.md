---
title: Testing Expectations
description: The default validation commands contributors should run before opening or updating a PR.
sidebar:
  order: 4
---

Primary commands:

- `go test ./...`
- `go test -tags e2e ./internal/server/...`

Documentation changes must also stay aligned with real endpoints, scripts, and setup flows.