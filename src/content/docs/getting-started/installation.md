---
title: Installation
description: Install Engram on macOS, Linux, or Windows, and understand the few environment details that matter.
sidebar:
  order: 3
---

Engram is distributed as a single binary.

## Homebrew on macOS and Linux

```bash
brew install gentleman-programming/tap/engram
```

Upgrade later with:

```bash
brew update && brew upgrade engram
```

## Windows

Recommended options for technical users:

1. `go install github.com/Gentleman-Programming/engram/cmd/engram@latest`
2. Build from source
3. Download the release zip from GitHub Releases

If antivirus flags a prebuilt binary, treat that as a distribution-trust issue, not evidence of malicious behavior. Building locally is the cleanest workaround.

## Build from source

```bash
git clone https://github.com/Gentleman-Programming/engram.git
cd engram
go install ./cmd/engram
```

## Requirements

- Go 1.25+ only if you build from source
- no runtime dependency stack
- no Docker, no Node.js, no Python requirement for the binary itself

## Important paths

- default data directory: `~/.engram`
- default database: `~/.engram/engram.db`
- Windows default data directory: `%USERPROFILE%\.engram`

## Environment variables you will care about first

- `ENGRAM_DATA_DIR` to override the data directory
- `ENGRAM_PORT` to override the HTTP server port
- `ENGRAM_PROJECT` to override project detection in MCP mode

For the full variable list and platform-specific path details, see the reference section.