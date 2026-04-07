---
title: Visión General de Integraciones
description: Entiende la diferencia entre plugins completos, MCP puro y qué ruta encaja mejor con tu agente.
sidebar:
  order: 1
---

Toda integración parte del mismo hecho: tu agente necesita una forma de invocar `engram mcp`.

## Dos niveles de setup

### Ruta con plugin completo

Elígela cuando el cliente soporte hooks de ciclo de vida o instrucciones de sistema más ricas.

Te da funciones como:

- orquestación al inicio de sesión
- auto-import de memorias sincronizadas
- guía de recuperación ante compaction
- un memory protocol embebido

### Ruta con MCP puro

Elígela cuando quieres la superficie de setup más pequeña posible.

Obtienes:

- herramientas de memoria sobre stdio
- sin automatización de ciclo de vida por plugin
- más responsabilidad en el prompt del agente para guardar y recuperar bien la memoria

## Cómo elegir

- usa soporte completo por plugin cuando esté disponible y sea confiable
- usa MCP puro cuando importen más la portabilidad, el minimalismo o la simplicidad nativa de plataforma

Las siguientes páginas separan los detalles por agente para que el setup sea concreto.