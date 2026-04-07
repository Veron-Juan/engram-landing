---
title: Memory Protocol
description: Las reglas operativas que le dicen a un agente cuándo guardar, cuándo buscar y cómo cerrar una sesión limpiamente.
sidebar:
  order: 5
---

El memory protocol es la diferencia entre tener una base de datos y tener memoria utilizable.

## Momentos obligatorios

- guardar tras decisiones, bugfixes, descubrimientos, convenciones y cambios de configuración
- buscar cuando el usuario pide recordar algo o cuando probablemente exista trabajo previo
- cerrar con un resumen de sesión

Sin esa disciplina, incluso un backend sólido produce continuidad débil.