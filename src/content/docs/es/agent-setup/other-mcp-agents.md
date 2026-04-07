---
title: Otros Agentes MCP
description: Usa Engram con Cursor, Windsurf, Antigravity o cualquier cliente que pueda lanzar un servidor MCP local.
sidebar:
  order: 7
---

Si el cliente puede lanzar un servidor MCP local, normalmente puedes integrar Engram con el mismo comando base:

```bash
engram mcp
```

## Qué necesitas

- una entrada de comando local para el servidor MCP
- el binario `engram` disponible en `PATH`
- un prompt o system instruction que diga al agente cuándo guardar y cómo recuperar memoria

## Qué pierdes sin plugin

- sin lifecycle hooks
- sin orquestación automática de sesiones
- sin recuperación automática tras compaction salvo que lo indiques explícitamente

Para esos agentes, el setup MCP es fácil. Lo difícil es conseguir disciplina de memoria.