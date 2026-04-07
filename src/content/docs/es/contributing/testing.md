---
title: Expectativas de Testing
description: Los comandos de validación por defecto que un contributor debería correr antes de abrir o actualizar un PR.
sidebar:
  order: 4
---

Comandos principales:

- `go test ./...`
- `go test -tags e2e ./internal/server/...`

Los cambios de documentación también deben mantenerse alineados con endpoints, scripts y flujos de setup reales.