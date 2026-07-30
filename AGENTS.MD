# KICKS Agent Instructions

## Learning Project Rules (STRICT & MANDATORY)

- **THIS IS A LEARNING PROJECT.** The primary goal is for the user to learn and understand every change in the codebase.
- **NEVER MAKE UNPROMPTED CHANGES:** Do NOT modify, refactor, or optimize any file, middleware, controller, service, or schema that the user did not explicitly ask to change in the current prompt.
- **STRICT SCOPE BOUNDARY:** Make ONLY the exact minimal changes requested. Do NOT add unrequested fallback logic, extra helper functions, defensive checks, or "proactive improvements".
- **SUGGESTIONS & IMPROVEMENTS:** If you notice potential improvements, bugs, or better architectural approaches:
  1. Explain them clearly in educational terms in the chat response.
  2. **STOP AND WAIT.** Do NOT modify any code or run modifying tools for the suggestion until the user explicitly approves it.
- **NO SILENT FIXING:** Never fix an issue, rewrite code, or modify files silently without explicitly discussing it with the user first.

## Overview

- Monorepo with frontend and backend.
- Use npm workspaces.

## Architecture

- `/apps/backend` - Express backend API
- `/apps/frontend` - Frontend application
- `/packages` - Shared packages (e.g., DTOs and types)
- `/docs` - Documentation

## Change Policy

- Understand the project structure and existing patterns before making changes.
- Make ONLY changes that are explicitly requested by the user.
- Do NOT refactor, rename, reorganize, or improve existing code unless specifically asked.
- Prefer the smallest possible change that solves the requested task.
- Preserve existing architecture and conventions.
