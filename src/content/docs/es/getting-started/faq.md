---
title: Preguntas Frecuentes
description: Respuestas rápidas a las dudas que suelen bloquear un rollout de Engram en la primera hora.
sidebar:
  order: 5
---

## ¿Engram requiere un proceso servidor separado?

No siempre. MCP puede correr sobre stdio directamente. Algunos flujos con plugins también usan la API HTTP para orquestación de sesiones.

## ¿Funciona solo con Claude Code?

No. Engram es agnóstico al agente y funciona con cualquier cliente compatible con MCP.

## ¿Guarda tool calls crudos?

No por defecto. El modelo es memoria curada: observaciones, prompts, resúmenes y recuperación de contexto.

## ¿Qué hace buena a la búsqueda?

La señal viene del contenido estructurado. Si el agente escribe títulos y resúmenes precisos, FTS5 sigue siendo útil.

## ¿Qué debería guardar primero?

Guarda una decisión real o un bugfix real. Si tu primera prueba es una nota de ejemplo sin sentido, no aprendes nada sobre la calidad de recuperación.