> Segue também as regras de `destructive-operations-safety` (dry-run, backup, Git, distinção restaurado/recriado, hash antes de chamar de duplicata) — não repita essa lógica aqui, só aplique.

# Git Repo Hygiene

Mantém repositórios Git limpos, organizados e livres de lixo que não deveria estar versionado.

## Trigger

Use quando o usuário pedir para "limpar o repositório", "organizar o Git", "remover arquivos do histórico", ou "higiene do repo" em qualquer projeto com Git inicializado.

## Cobertura

### .gitignore adequado
- Dependências (`node_modules/`, `venv/`, `__pycache__/`)
- Build outputs (`dist/`, `build/`, `.next/`)
- Secrets e config local (`.env`, `.env.local`, `*.pem`)
- IDE config (`.vscode/`, `.idea/`, `*.swp`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Logs e temporários (`*.log`, `tmp/`, `tmp_*`)

### Arquivos que não devem ser commitados
- Binários grandes (`*.apk`, `*.ipa`, `*.zip` — usar release artifacts)
- Dados sensíveis (chaves, tokens, senhas)
- Cache e temp files
- Output de testes/coverage

### Branches
- Deletar branches mergeadas
- Manter `main`/`master` sempre funcional
- Branch naming conventions (`feat/`, `fix/`, `chore/`)

### Commits
- Mensagens descritivas e concisas
- Um commit por mudança lógica
- Nunca commitar secrets ou dados sensíveis
- Verificar `git diff` antes de commitar

## Convenções

- Nunca force-push em branches compartilhadas
- Usar `git rm --cached` para remover arquivos que não devem ser versionados
- Para remover do histórico: `git filter-branch` ou `git filter-repo` (com cuidado)
- Commits devem ser atômicos e revertíveis
