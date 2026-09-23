# 📋 PLANO DE EXECUÇÃO - TAREFA PAIR-ORCA-001

**Status:** 🟡 PLANO CRIADO (PRÉ-ALTERAÇÃO)

---

## Objetivo Geral

Fazer o pareamento do Orca funcionar ponta a ponta: subir o servidor Orca local (`orca serve`), capturar a Pairing URL (`orca://pair?code=...`) e conectá-lo à UI "Eleven Code" em produção para validar o fluxo completo.

## Metas Esperadas

- [ ] Servidor Orca local sobe com `orca serve --port <porta> --pairing-address <host> --json`
- [ ] Pairing URL (`orca://pair?code=...`) capturada do stdout/JSON de readiness
- [ ] A URL colada na UI de produção não retorna erro de parse/pairing
- [ ] Conexão estabelecida (runtime visível/pareado no cliente web)

## Roteiro passo a passo

### O que fazer

1. Verificar se o CLI Orca está instalado e acessível (`orca --version`, `orca serve --help`).
2. Executar `orca serve --port 6768 --pairing-address <IP_alcançável> --json` em processo de background, capturando stdout em arquivo temporário.
3. Extrair a linha `orca_server_ready` e o campo `pairing.url` (formato `orca://pair?code=...`).
4. Abrir produção (Eleven Code → Connect to Orca) e colar a URL.
5. Registrar diário de execução (erros/avisos em tempo real) e status final no relatório.

### Como fazer

- Usar `Start-Process` com redirect de stdout para arquivo; aguardar JSON parseável (uma linha compacta).
- `--pairing-address` deve ser host alcançável pelo browser (IP local ou hostname; usar `localhost` apenas se o browser estiver na mesma máquina).
- Flags documentadas em `vendor/.orca-src/docs/reference/headless-linux-server.md` (linhas 108–167).
- Porta padrão 6768 (evitar conflito com serviços existentes).

### Arquivos afetados

- Nenhum arquivo de código do projeto será alterado (apenas runtime local do servidor Orca + este relatório/`.task_state.md`).

---

**Criado em:** 2026-09-22
