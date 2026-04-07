---
title: Configurar Gemini CLI
description: Configura Gemini CLI con MCP de Engram y el Memory Protocol necesario para recuperarte después de compaction.
sidebar:
  order: 4
---

## Ruta recomendada

```bash
engram setup gemini-cli
```

Ese setup registra el servidor MCP, escribe el Memory Protocol en `~/.gemini/system.md` y se asegura de que Gemini realmente cargue ese archivo.

## Ruta manual

Añade el servidor MCP a `~/.gemini/settings.json`:

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

Usa el setup automático salvo que tengas una razón fuerte para no hacerlo. El archivo de protocolo es parte de lo que hace robusta la memoria después de compaction.