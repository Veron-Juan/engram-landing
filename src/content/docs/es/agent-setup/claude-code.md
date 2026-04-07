---
title: Configurar Claude Code
description: Instala el plugin de Engram para Claude Code o configura el servidor MCP manualmente.
sidebar:
  order: 2
---

## Ruta recomendada: plugin de marketplace

```bash
claude plugin marketplace add Gentleman-Programming/engram
claude plugin install engram
```

Esto te da más que MCP crudo:

- seguimiento de sesiones
- auto-import de memorias sincronizadas por Git
- guía de recuperación ante compaction
- una skill embebida con el memory protocol

## Alternativa: setup vía Engram

```bash
engram setup claude-code
```

## Ruta con MCP puro

Añade el servidor a `.claude/settings.json` o `~/.claude/settings.json`:

```json
{
  "mcpServers": {
    "engram": {
      "command": "engram",
      "args": ["mcp"]
    }
  }
}
```

## Nota para Windows

Los hooks del plugin de Claude Code dependen de `bash`. Si los hooks no son confiables en Windows, usa MCP puro.