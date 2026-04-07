---
title: Configurar Codex
description: Conecta Engram a Codex con MCP más instrucciones y compact prompts que protegen la continuidad de la memoria.
sidebar:
  order: 5
---

## Ruta recomendada

```bash
engram setup codex
```

El setup escribe tres cosas:

- configuración del servidor MCP en `~/.codex/config.toml`
- model instructions con el Memory Protocol
- un archivo de compaction prompt para que las instrucciones de guardado sobrevivan la resumición

## Ruta manual

Usa un bloque `mcp_servers.engram` en tu config de Codex y apunta Codex a los archivos de instrucciones de Engram si gestionas la config a mano.

## Por qué importa

Codex puede usar MCP sin mucha ceremonia, pero el protocolo y el compact prompt son lo que mantienen fuerte la continuidad entre sesiones.