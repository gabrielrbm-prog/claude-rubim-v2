---
globs: "**/*"
---
# Security Rules

## Secrets Management
- NEVER hardcode secrets, API keys, passwords, tokens in source code
- Use environment variables or secret managers (Vault, AWS SSM, 1Password)
- Ensure .env files are in .gitignore
- Rotate secrets on exposure

## Input Validation
- Validate ALL external input at system boundaries (user input, API requests, file uploads)
- Use schema validation (Zod, Joi, Pydantic) — not manual checks
- Sanitize before DB queries, HTML output, shell commands
- Reject unexpected input types early

## Authentication & Authorization
- Hash passwords with bcrypt (cost 12+) or argon2
- Access tokens: max 15min expiry
- Refresh tokens: max 7 days, rotated on use
- Implement RBAC or ABAC — never trust client-side auth checks

## HTTP Security
- Set CSP, HSTS, X-Content-Type-Options, X-Frame-Options headers
- Cookies: HttpOnly, Secure, SameSite=Strict
- CORS: explicit allowed origins only — never wildcard in production
- Rate limit all public endpoints

## Dependencies
- Run `npm audit` / `pip audit` regularly
- Fix critical vulnerabilities within 48 hours
- Pin dependency versions in production
- Review new dependencies before adding (size, maintenance, security)

## Dangerous Patterns to BLOCK
- eval(), new Function() with dynamic input
- dangerouslySetInnerHTML without DOMPurify
- document.write(), .innerHTML with untrusted content
- child_process.exec() — use execFile() instead
- pickle.loads() with untrusted data
- os.system() with user input
- SQL string concatenation — use parameterized queries
