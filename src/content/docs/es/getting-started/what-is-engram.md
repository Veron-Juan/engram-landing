---
title: Qué Es Engram
description: Engram es un sistema de memoria persistente para agentes de programación basado en observaciones curadas en lugar de captura ruidosa.
sidebar:
  order: 2
---

Engram es una capa de memoria persistente para agentes de programación con IA.

En el centro hay un binario en Go respaldado por SQLite y FTS5. Ese binario expone varias superficies para que distintas herramientas hablen con el mismo almacén de memoria:

- CLI para uso directo desde terminal
- servidor MCP para integraciones con agentes
- API HTTP para plugins y automatización
- TUI para inspección interactiva

## Qué problema resuelve

La mayoría de los agentes pierden contexto cuando termina la sesión o cuando el contexto se compacta. Engram preserva lo importante para que la siguiente sesión pueda recuperar decisiones, bugs, convenciones y progreso.

## Qué se guarda

Engram está optimizado para memoria curada por el agente, no para logging indiscriminado.

- observaciones como bugfixes, decisiones de diseño, descubrimientos y convenciones
- resúmenes de sesión que capturan objetivos, trabajo completado y archivos relevantes
- prompts del usuario cuando la intención misma es contexto histórico valioso

## Por qué importa el modelo

Este diseño mantiene alta la calidad de búsqueda. En lugar de volcar salida cruda de herramientas y esperar que una compresión posterior la limpie, el agente guarda resúmenes estructurados cuando el significado ya es claro.

## Cómo se ve el stack

```text
Agente -> MCP stdio o plugin -> Binario de Engram -> SQLite + FTS5
```

Eso mantiene simple la instalación, evita bases de datos externas y funciona con múltiples agentes.