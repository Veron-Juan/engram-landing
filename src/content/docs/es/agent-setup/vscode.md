---
title: Configurar VS Code
description: Registra Engram como servidor MCP en VS Code para que Copilot agent mode u otros proveedores de chat puedan usar memoria persistente.
sidebar:
  order: 6
---

VS Code soporta servidores MCP nativamente en el chat.

## Comando rápido

```bash
code --add-mcp '{"name":"engram","command":"engram","args":["mcp"]}'
```

## Opción de workspace para equipos

Usa un archivo `.vscode/mcp.json` en el proyecto para que el setup viaje con el repositorio.

## Cuándo preferir configuración de workspace

- proyectos de equipo
- onboarding donde quieres menos pasos manuales
- entornos mixtos con varios agentes dentro del mismo editor

## Qué verificar

- el proveedor de chat puede ver las herramientas `engram`
- el binario correcto está en `PATH`
- la detección de proyecto resuelve al nombre esperado del repositorio