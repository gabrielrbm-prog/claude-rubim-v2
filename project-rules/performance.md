---
globs: "*.ts,*.tsx,*.js,*.jsx,*.py"
---
# Performance Rules

## Frontend
- Lazy load routes and heavy components
- Code split at route boundaries minimum
- Images: use next/image or srcset with responsive sizes
- Bundle budget: <200KB JS initial load (gzipped)
- Prefer CSS animations over JS (GPU-accelerated)
- Debounce search/filter inputs (300ms)

## Caching
- Cache expensive computations (useMemo/useCallback with correct deps)
- HTTP cache headers: immutable for hashed assets, stale-while-revalidate for API
- Invalidate on write, not on timer

## Database
- Index columns used in WHERE, JOIN, ORDER BY
- Detect and fix N+1 queries (use eager loading / dataloaders)
- Cursor-based pagination for large datasets (not OFFSET)
- Connection pooling (min 5, max 20 per service)
- Keep transactions short — no external calls inside transactions

## API
- Enable gzip/brotli compression
- Use streaming for large responses
- Batch related requests where possible
- Implement pagination for list endpoints (max 100 items default)

## Anti-Patterns
- Fetching data you don't use (SELECT * in production)
- Synchronous operations that could be async
- Unbounded queries without LIMIT
- Recomputing values that could be memoized
- Loading entire datasets when only aggregates needed
