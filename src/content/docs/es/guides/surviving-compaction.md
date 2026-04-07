---
title: Sobrevivir a Compaction
description: Usa el memory protocol de Engram para que el estado sobreviva cuando el contexto del modelo se resume o se reinicia.
sidebar:
  order: 4
---

Compaction no es un caso raro. Es un modo de fallo rutinario si tu estrategia de memoria es débil.

## Patrón de recuperación

1. persistir el resumen compactado
2. recuperar el contexto reciente
3. continuar desde el estado recuperado en lugar de adivinar

## Por qué importan los plugins aquí

Algunos clientes pueden inyectar automáticamente guía del protocolo o compaction prompts. Los clientes con MCP puro necesitan instrucciones de sistema más fuertes para lograr la misma resiliencia.