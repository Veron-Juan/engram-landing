---
title: Primer Flujo de Memoria
description: "Ejecuta un workflow completo de Engram: inicia una sesión, guarda una memoria, búscala y recupera contexto en la sesión siguiente."
sidebar:
  order: 4
---

Esta es la forma más rápida de comprobar que Engram realmente es útil en tu entorno.

## 1. Empieza por una integración con agente

Elige una ruta de setup en la sección Agent Setup y asegúrate de que el agente pueda llamar a Engram vía MCP.

## 2. Guarda una observación estructurada

El patrón de alto valor no es “guardar todo”. Es “guardar lo que la siguiente sesión va a necesitar”.

Ejemplo de forma de observación:

- Qué: corregí un bug de inserción duplicada
- Por qué: los reintentos podían crear la misma observación dos veces
- Dónde: `internal/store/store.go`
- Aprendido: la deduplicación debe ocurrir antes de escribir, no después

## 3. Cierra la sesión con un resumen

El resumen de sesión es lo que le da a la siguiente ejecución un checkpoint usable:

- objetivo
- descubrimientos
- trabajo realizado
- archivos relevantes

## 4. Busca o pide contexto en la siguiente sesión

Rutas comunes de recuperación:

- contexto reciente para continuidad del proyecto
- búsqueda full-text cuando recuerdas una palabra clave
- consulta de observación cuando sabes exactamente qué estás buscando

## 5. Confirma que el ciclo cerró

El workflow está funcionando cuando la siguiente sesión puede responder cosas como:

- ¿qué decidimos la última vez?
- ¿dónde se corrigió el bug?
- ¿qué quedó pendiente?

Si Engram no puede responder eso, tu protocolo de memoria es débil, no solo la instalación.