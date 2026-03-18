---
globs: "*.py"
---
# Regras para Python

- Use type hints em todas as funções
- Docstrings em português para funções públicas
- Imports organizados: stdlib → third-party → local
- Use `pathlib.Path` ao invés de `os.path`
- Async por padrão para I/O (FastAPI, HTTP calls)
- Pydantic para validação de dados
- pytest para testes (não unittest)
