# Documentation Generation System

## Goal

Generate a complete developer documentation site from a GitHub repository.

The output must be compatible with Astro Starlight.

---

## Output Structure

All documentation must be generated as Markdown files inside:

src/content/docs/

---

## Documentation Principles

- Explain WHY, not just WHAT
- Avoid repeating code
- Be concise but clear
- Focus on developer onboarding

---

## Page Template

Each page must follow:

# Title

## Overview

## Responsibilities

## How it works

## Key Concepts

## Important Files

## Usage (if applicable)

---

## Navigation Structure

Docs must be organized in:

- Getting Started
- Architecture
- Core Modules
- API / Reference (optional)

---

## Constraints

- No generic explanations
- No unnecessary code dumps
- Always infer architecture