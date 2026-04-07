---
title: Labels y Reglas de PR
description: Entiende los labels de tipo, estado, prioridad y esfuerzo, además de las verificaciones que debe cumplir cada PR.
sidebar:
  order: 3
---

Todo PR necesita exactamente un label `type:*`.

Las comprobaciones verifican:

- que exista referencia a issue
- que el issue esté aprobado
- que el PR tenga exactamente un type label
- que pasen los tests unitarios y e2e