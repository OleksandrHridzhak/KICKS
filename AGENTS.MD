# KICKS Agent Instructions

## Overview

- Monorepo with frontend and backend.
- Use npm workspaces.

## Architecture

/apps/backend
/apps/frontend
/package - shared things like types or s
/docs - documentation

## Change policy

- Understand the project structure and existing patterns before making changes.
- Make only changes that are explicitly requested by the user.
- Do not refactor, rename, reorganize, or improve existing code unless specifically asked
- Prefer the small change that solves the requested task.
- Preserve existing architecture and conventions.

## Suggestions

- If you notice potential improvements, bugs, security issues, or better approaches:
  - mention them to the user;
  - explain the reason;
  - do not implement them automatically.
