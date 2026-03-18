---
globs: "*.ts,*.tsx,*.js,*.jsx,*.py"
---
# Error Handling Rules

## Error Types
- Use custom error classes with `cause` chain for context propagation
- Distinguish operational errors (expected, handle gracefully) from programmer errors (bugs, crash fast)
- Include correlation IDs in all error logs for tracing

## User-Facing Messages
- Clear, non-technical language
- Explain what went wrong AND what user can do
- Never expose stack traces, internal paths, or DB errors to users

## Structured Logging
- Use structured JSON logging (not console.log in production)
- Include: timestamp, level, message, correlationId, context
- Log levels: ERROR (production issues), WARN (degraded), INFO (business events), DEBUG (development)

## Recovery Patterns
- Exponential backoff for retries (base 1s, max 30s, jitter)
- Circuit breaker for external service calls (fail fast after threshold)
- Timeouts on ALL external calls (default 10s, configurable)
- Graceful degradation: serve cached/stale data when upstream fails

## Anti-Patterns (NEVER DO)
- Empty catch blocks
- catch-log-rethrow (either handle or propagate, not both)
- Using exceptions for control flow
- Swallowing errors silently (returning null/undefined on failure without logging)
- Generic "Something went wrong" without context

## API Error Response Format
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Email format is invalid",
    "details": [{"field": "email", "issue": "Must be valid email"}]
  }
}
```
