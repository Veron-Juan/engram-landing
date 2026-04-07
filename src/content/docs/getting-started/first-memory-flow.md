---
title: First Memory Flow
description: "Run one complete Engram workflow: start a session, save a memory, search it, and recover context in the next session."
sidebar:
  order: 4
---

This is the fastest way to verify that Engram is actually useful in your environment.

## 1. Start with an agent integration

Pick one setup path from the Agent Setup section and ensure the agent can call Engram through MCP.

## 2. Save a structured observation

The high-value pattern is not “save everything.” It is “save what the next session will need.”

Example observation shape:

- What: fixed a duplicate insert bug
- Why: retries could create the same observation twice
- Where: `internal/store/store.go`
- Learned: deduping must happen before write, not after

## 3. End the session with a summary

The session summary is what gives the next run a usable checkpoint:

- goal
- discoveries
- accomplished work
- relevant files

## 4. Search or request context in the next session

Common retrieval paths:

- recent context for project continuity
- full-text search when you remember a keyword
- observation lookup when you know the exact thing you are chasing

## 5. Confirm the loop closed

The workflow is working when the next session can answer questions like:

- what did we decide last time?
- where was the bug fixed?
- what is still pending?

If Engram cannot answer those, your memory protocol is too weak, not just your installation.