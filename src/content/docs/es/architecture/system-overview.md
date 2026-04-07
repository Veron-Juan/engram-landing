---
title: Visión General del Sistema
description: Un binario, un archivo SQLite, múltiples interfaces y un modelo de memoria pensado para agentes que olvidan.
sidebar:
  order: 2
---

Engram es un único binario en Go delante de SQLite + FTS5.

```text
Agente o plugin -> Engram -> SQLite + FTS5
```

Interfaces:

- CLI
- servidor MCP sobre stdio
- API HTTP
- TUI

Esta arquitectura mantiene el setup pequeño mientras deja abiertas varias rutas de integración.