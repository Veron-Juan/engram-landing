---
title: Getting Started FAQ
description: Quick answers to the questions that usually block an Engram rollout in the first hour.
sidebar:
  order: 5
---

## Does Engram require a separate server process?

Not always. MCP can run over stdio directly. Some plugin flows also use the HTTP server for session orchestration.

## Does it work only with Claude Code?

No. Engram is agent-agnostic and works with any MCP-compatible client.

## Does it store raw tool calls?

No by default. The model is curated memory: observations, prompts, summaries, and context retrieval.

## What makes search good?

The signal comes from structured content. If the agent writes precise titles and summaries, FTS5 stays useful.

## What should I save first?

Save one real decision or bug fix. If your first test is a meaningless sample note, you learn nothing about the quality of retrieval.