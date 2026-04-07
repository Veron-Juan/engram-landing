---
title: Engram vs claude-mem
description: Compara el enfoque de memoria curada de Engram con el pipeline de captura cruda y compresión de claude-mem.
sidebar:
  order: 2
---

Diferencias clave:

- binario único en Go vs stack con múltiples runtimes
- modelo MCP agnóstico al agente vs workflow específico de Claude
- SQLite FTS5 vs pipeline más pesado con ChromaDB
- observaciones curadas vs captura de tool calls crudos

El tradeoff es deliberado: Engram optimiza despliegue simple y recuperación más limpia.