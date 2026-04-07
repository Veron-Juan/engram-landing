---
title: Ejecutar como Servicio
description: Mantén corriendo la API HTTP de Engram como servicio de usuario cuando tu workflow se beneficie de un proceso estable.
sidebar:
  order: 7
---

La API HTTP puede correr como servicio de usuario cuando los flujos con plugins la necesitan de manera continua.

## Patrón con systemd

- coloca el binario en tu `PATH`
- crea `~/.config/systemd/user/engram.service`
- habilita e inicia el servicio

Usa `journalctl --user -u engram -f` para ver logs.