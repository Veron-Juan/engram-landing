---
title: Sync
description: Comparte memorias entre máquinas usando exportación e importación por chunks comprimidos en lugar de un servicio central.
sidebar:
  order: 6
---

Sync es intencionalmente simple.

Engram exporta nuevos datos como chunks comprimidos, registra importaciones para evitar duplicados y deja que Git maneje la distribución.

Eso mantiene la colaboración portátil y ligera en infraestructura.