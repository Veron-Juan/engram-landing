---
title: Instalación
description: Instala Engram en macOS, Linux o Windows y entiende los pocos detalles de entorno que realmente importan.
sidebar:
  order: 3
---

Engram se distribuye como un único binario.

## Homebrew en macOS y Linux

```bash
brew install gentleman-programming/tap/engram
```

Para actualizar luego:

```bash
brew update && brew upgrade engram
```

## Windows

Opciones recomendadas para usuarios técnicos:

1. `go install github.com/Gentleman-Programming/engram/cmd/engram@latest`
2. Compilar desde source
3. Descargar el zip desde GitHub Releases

Si el antivirus marca un binario precompilado, trátalo como un problema de confianza en la distribución, no como evidencia de comportamiento malicioso. Compilar localmente es la salida más limpia.

## Compilar desde source

```bash
git clone https://github.com/Gentleman-Programming/engram.git
cd engram
go install ./cmd/engram
```

## Requisitos

- Go 1.25+ solo si compilas desde source
- sin stack de dependencias en runtime
- sin Docker, Node.js o Python requeridos para el binario

## Rutas importantes

- directorio de datos por defecto: `~/.engram`
- base de datos por defecto: `~/.engram/engram.db`
- directorio de datos por defecto en Windows: `%USERPROFILE%\\.engram`

## Variables de entorno que importan al principio

- `ENGRAM_DATA_DIR` para cambiar el directorio de datos
- `ENGRAM_PORT` para cambiar el puerto de la API HTTP
- `ENGRAM_PROJECT` para sobrescribir detección de proyecto en modo MCP

Para la lista completa y detalles por plataforma, ve a la sección de referencia.