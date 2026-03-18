---
description: Comprehensive PR review using specialized agents (comments, tests, errors, types, code, simplify)
argument-hint: "[aspects: comments tests errors types code simplify all]"
---

# Comprehensive PR Review

Run a comprehensive pull request review using multiple specialized agents.

**Review Aspects:** $ARGUMENTS (default: all)

## Available Review Aspects:
- **comments** - Analyze code comment accuracy and maintainability
- **tests** - Review test coverage quality and completeness
- **errors** - Check error handling for silent failures
- **types** - Analyze type design and invariants
- **code** - General code review for project guidelines
- **simplify** - Simplify code for clarity and maintainability
- **all** - Run all applicable reviews (default)

## Workflow:
1. Check git status, identify changed files, determine applicable reviews
2. Launch review agents (sequential by default, parallel if requested)
3. Aggregate results into: Critical Issues, Important Issues, Suggestions, Positive Observations
4. Provide action plan with file:line references

## Usage:
- `/review-pr` -- full review
- `/review-pr tests errors` -- specific aspects
- `/review-pr all parallel` -- all agents in parallel
