---
title: Git Sync
description: Exporta nuevos chunks de memoria, haz commit y luego impórtalos en otra máquina sin dolor por merge conflicts.
sidebar:
  order: 5
---

Engram sync usa chunks comprimidos para mantener el historial compartible.

## Flujo típico

```bash
engram sync
git add .engram/
git commit -m "sync engram memories"
```

En otra máquina:

```bash
engram sync --import
```

Usa `engram sync --status` para inspeccionar qué queda por importar o exportar.