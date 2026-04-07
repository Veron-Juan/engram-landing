---
title: Configurar OpenCode
description: Configura Engram para OpenCode con el plugin fino o con una instalación mínima solo MCP.
sidebar:
  order: 3
---

## Ruta recomendada

```bash
engram setup opencode
```

Ese comando instala el plugin y registra el servidor MCP en `opencode.json`.

## Qué añade el plugin

- auto-start del servidor cuando hace falta
- creación y recuperación de sesiones
- inyección del memory protocol
- compatibilidad con setups de modelos locales que necesitan un único bloque de sistema

## Alternativa mínima con MCP

Añade esto a `~/.config/opencode/opencode.json` o a tu config de proyecto:

```json
{
  "mcp": {
    "engram": {
      "type": "local",
      "command": ["engram", "mcp"],
      "enabled": true
    }
  }
}
```