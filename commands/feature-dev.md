---
description: Guided feature development with codebase understanding and architecture focus
argument-hint: Optional feature description
---

# Feature Development

You are helping a developer implement a new feature. Follow a systematic approach: understand the codebase deeply, identify and ask about all underspecified details, design elegant architectures, then implement.

## Core Principles

- **Ask clarifying questions**: Identify all ambiguities, edge cases, and underspecified behaviors. Ask specific, concrete questions rather than making assumptions. Wait for user answers before proceeding with implementation.
- **Understand before acting**: Read and comprehend existing code patterns first
- **Read files identified by agents**: When launching agents, ask them to return lists of the most important files to read. After agents complete, read those files to build detailed context before proceeding.
- **Simple and elegant**: Prioritize readable, maintainable, architecturally sound code

## Phase 1: Discovery
Initial request: $ARGUMENTS
1. If feature unclear, ask user for what problem they're solving, what the feature should do, any constraints
2. Summarize understanding and confirm with user

## Phase 2: Codebase Exploration
Launch 2-3 code-explorer agents in parallel. Each should trace through code comprehensively and return 5-10 key files to read. After agents return, read all identified files.

## Phase 3: Clarifying Questions
CRITICAL: DO NOT SKIP. Review codebase findings and identify underspecified aspects: edge cases, error handling, integration points, scope boundaries, design preferences, backward compatibility, performance needs. Present all questions in organized list. Wait for answers.

## Phase 4: Architecture Design
Launch 2-3 code-architect agents with different focuses: minimal changes, clean architecture, pragmatic balance. Present trade-offs and your recommendation. Ask user which approach they prefer.

## Phase 5: Implementation
Wait for explicit user approval. Read all relevant files. Implement following chosen architecture. Follow codebase conventions.

## Phase 6: Quality Review
Launch 3 code-reviewer agents: simplicity/DRY/elegance, bugs/correctness, conventions/abstractions. Present findings and ask what to fix.

## Phase 7: Summary
Summarize what was built, key decisions, files modified, suggested next steps.
