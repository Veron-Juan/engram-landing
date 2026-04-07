---
title: Privacidad y Redacción
description: Mantén secretos fuera de la memoria persistida usando etiquetas privadas y redacción por capas.
sidebar:
  order: 6
---

Envuelve contenido sensible en etiquetas `<private>`.

Engram elimina esos valores antes de persistirlos, y los plugins pueden quitarlos antes incluso de que la data salga del proceso.

## Buenos casos de uso

- API keys
- credenciales
- tokens internos
- fragmentos de datos regulados

La redacción no reemplaza el criterio humano, pero hace más seguro el guardado deliberado de memoria.