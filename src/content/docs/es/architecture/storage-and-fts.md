---
title: Storage y FTS
description: SQLite, tablas principales, indexación FTS5 y por qué la calidad de búsqueda depende de observaciones estructuradas.
sidebar:
  order: 3
---

Las tablas centrales rastrean sesiones, observaciones, prompts y metadatos de sync.

Las tablas virtuales FTS5 indexan el contenido para que la recuperación siga siendo rápida y local.

## Por qué la estructura importa

La calidad de búsqueda no viene de embeddings aquí. Viene de títulos precisos, contenido bien escrito y metadatos de proyecto correctos.