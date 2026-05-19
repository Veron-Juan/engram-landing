---
title: MCP Reference
description: Tool-level reference for Engram’s MCP server.
sidebar:
  order: 3
---

Engram exposes 19 MCP tools organized into functional families.

## Observations

- `mem_save` — save a structured observation; attaches user prompt by default
- `mem_update` — update an existing observation by ID
- `mem_delete` — soft-delete (default) or hard-delete an observation
- `mem_get_observation` — full untruncated content of a specific observation

## Search and context

- `mem_search` — full-text search across observations
- `mem_context` — recent context from previous sessions for a project
- `mem_timeline` — chronological observations before and after a given ID

## Session control

- `mem_session_start` — register the start of a coding session
- `mem_session_end` — mark a session as completed
- `mem_session_summary` — save an end-of-session summary (goal, discoveries, accomplished, files)

## Prompts and capture

- `mem_save_prompt` — save a user prompt for historical context
- `mem_capture_passive` — extract and save structured learnings from text output

## Project management

- `mem_current_project` — detect current project from cwd; never errors, returns full diagnostic
- `mem_merge_projects` — merge project name variants into one canonical name
- `mem_stats` — storage statistics for the project

## Conflict resolution

- `mem_judge` — record a verdict on a pending conflict candidate returned by `mem_save`
- `mem_compare` — proactively create a semantic relation between two existing observations

## Suggest

- `mem_suggest_topic_key` — suggest a stable `topic_key` for an evolving subject

## Notes

**Breaking change (v1.14+):** `mem_save`, `mem_update`, `mem_session_start`, `mem_session_end`,
`mem_session_summary`, `mem_capture_passive`, and `mem_save_prompt` no longer accept a `project`
field. Project is auto-detected from cwd. Use `mem_current_project` to confirm which project
will receive writes before starting.