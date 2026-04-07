---
title: Arquitectura de Plugins
description: Adaptadores finos por cliente añaden comportamiento de ciclo de vida mientras Engram sigue siendo el backend único de memoria.
sidebar:
  order: 5
---

Los plugins deben seguir siendo finos.

Su trabajo es:

- cablear lifecycle hooks
- inyectar guía del memory protocol
- orquestar inicio de sesión y recuperación

La lógica de backend debe quedarse en Engram, no repartida en cada integración cliente.