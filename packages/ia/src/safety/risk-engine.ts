/**
 * FASE 4A — Risk Engine
 *
 * Classifica ações por nível de risco e determina se requer aprovação humana.
 * Regra fundamental: ação desconhecida = DESTRUCTIVE (default deny).
 *
 * Níveis:
 *   SAFE       — somente leitura, sem efeito colateral
 *   REVERSIBLE — modifica estado mas pode ser desfeito (checkpoint/rollback)
 *   DESTRUCTIVE — modifica estado permanentemente ou é potencialmente perigoso
 */

// ─── Tipos ──────────────────────────────────────────────────────────────────

export type RiskLevel = 'SAFE' | 'REVERSIBLE' | 'DESTRUCTIVE';

export interface ActionClassification {
  /** Nome da ação (ex: 'filesystem.read', 'sql.select') */
  action: string;
  /** Nível de risco classificado */
  risk: RiskLevel;
  /** Se requer aprovação humana antes de executar */
  requiresApproval: boolean;
  /** Razão da classificação (para audit log) */
  reason: string;
  /** Se a ação é conhecida pelo sistema */
  known: boolean;
}

export interface RiskRule {
  /** Padrão regex ou string exata para match no nome da ação */
  pattern: RegExp | string;
  /** Nível de risco */
  risk: RiskLevel;
  /** Descrição da regra */
  description: string;
}

// ─── Regras de Classificação ────────────────────────────────────────────────

/**
 * Regras ordenadas — primeira match vence.
 * Padrão: `categoria.ação` (ex: filesystem.read, sql.delete, git.push)
 */
const RISK_RULES: RiskRule[] = [
  // ── Filesystem: leitura ──
  { pattern: /^filesystem\.read$/i, risk: 'SAFE', description: 'Leitura de arquivo' },
  { pattern: /^filesystem\.exists$/i, risk: 'SAFE', description: 'Verificação de existência' },
  { pattern: /^filesystem\.list$/i, risk: 'SAFE', description: 'Listagem de diretório' },
  { pattern: /^filesystem\.stat$/i, risk: 'SAFE', description: 'Metadata de arquivo' },

  // ── Filesystem: escrita ──
  { pattern: /^filesystem\.write$/i, risk: 'REVERSIBLE', description: 'Escrita de arquivo (checkpoint possível)' },
  { pattern: /^filesystem\.mkdir$/i, risk: 'REVERSIBLE', description: 'Criação de diretório' },
  { pattern: /^filesystem\.delete$/i, risk: 'DESTRUCTIVE', description: 'Exclusão de arquivo' },
  { pattern: /^filesystem\.move$/i, risk: 'DESTRUCTIVE', description: 'Movimentação de arquivo' },
  { pattern: /^filesystem\.chmod$/i, risk: 'DESTRUCTIVE', description: 'Alteração de permissões' },

  // ── Terminal / Shell ──
  { pattern: /^terminal\.exec$/i, risk: 'DESTRUCTIVE', description: 'Execução de comando shell' },
  { pattern: /^terminal\.spawn$/i, risk: 'DESTRUCTIVE', description: 'Spawning de processo' },

  // ── Git ──
  { pattern: /^git\.status$/i, risk: 'SAFE', description: 'Status do repositório' },
  { pattern: /^git\.log$/i, risk: 'SAFE', description: 'Histórico de commits' },
  { pattern: /^git\.diff$/i, risk: 'SAFE', description: 'Diferença entre versões' },
  { pattern: /^git\.branch$/i, risk: 'SAFE', description: 'Listagem de branches' },
  { pattern: /^git\.stash$/i, risk: 'REVERSIBLE', description: 'Stash de mudanças' },
  { pattern: /^git\.commit$/i, risk: 'REVERSIBLE', description: 'Commit de mudanças' },
  { pattern: /^git\.push$/i, risk: 'DESTRUCTIVE', description: 'Push para remoto' },
  { pattern: /^git\.pull$/i, risk: 'DESTRUCTIVE', description: 'Pull do remoto (pode causar conflito)' },
  { pattern: /^git\.reset$/i, risk: 'DESTRUCTIVE', description: 'Reset de commits' },
  { pattern: /^git\.checkout$/i, risk: 'DESTRUCTIVE', description: 'Troca de branch' },
  { pattern: /^git\.merge$/i, risk: 'DESTRUCTIVE', description: 'Merge de branches' },
  { pattern: /^git\.rebase$/i, risk: 'DESTRUCTIVE', description: 'Rebase de branches' },
  { pattern: /^git\.forcePush$/i, risk: 'DESTRUCTIVE', description: 'Force push (perde histórico)' },
  { pattern: /^git\.clean$/i, risk: 'DESTRUCTIVE', description: 'Limpeza de arquivos não rastreados' },

  // ── SQL ──
  { pattern: /^sql\.select$/i, risk: 'SAFE', description: 'Consulta SELECT' },
  { pattern: /^sql\.insert$/i, risk: 'REVERSIBLE', description: 'Inserção de dados' },
  { pattern: /^sql\.update$/i, risk: 'REVERSIBLE', description: 'Atualização de dados' },
  { pattern: /^sql\.delete$/i, risk: 'DESTRUCTIVE', description: 'Exclusão de dados' },
  { pattern: /^sql\.drop$/i, risk: 'DESTRUCTIVE', description: 'Exclusão de tabela' },
  { pattern: /^sql\.alter$/i, risk: 'DESTRUCTIVE', description: 'Alteração de schema' },
  { pattern: /^sql\.truncate$/i, risk: 'DESTRUCTIVE', description: 'Truncamento de tabela' },
  { pattern: /^sql\.exec$/i, risk: 'DESTRUCTIVE', description: 'Execução de SQL arbitrário' },

  // ── Network ──
  { pattern: /^network\.fetch$/i, risk: 'SAFE', description: 'Requisição HTTP (leitura)' },
  { pattern: /^network\.post$/i, risk: 'REVERSIBLE', description: 'Requisição HTTP POST' },
  { pattern: /^network\.delete$/i, risk: 'DESTRUCTIVE', description: 'Requisição HTTP DELETE' },

  // ── Deploy ──
  { pattern: /^deploy\.preview$/i, risk: 'SAFE', description: 'Preview de deploy' },
  { pattern: /^deploy\.production$/i, risk: 'DESTRUCTIVE', description: 'Deploy para produção' },
  { pattern: /^deploy\.rollback$/i, risk: 'REVERSIBLE', description: 'Rollback de deploy' },

  // ── AI / Model ──
  { pattern: /^ai\.complete$/i, risk: 'SAFE', description: 'Completion de modelo' },
  { pattern: /^ai\.embed$/i, risk: 'SAFE', description: 'Geração de embedding' },
  { pattern: /^ai\.classify$/i, risk: 'SAFE', description: 'Classificação de texto' },

  // ── Memory ──
  { pattern: /^memory\.read$/i, risk: 'SAFE', description: 'Leitura de memória' },
  { pattern: /^memory\.write$/i, risk: 'REVERSIBLE', description: 'Escrita de memória' },
  { pattern: /^memory\.delete$/i, risk: 'DESTRUCTIVE', description: 'Exclusão de memória' },

  // ── User / Auth ──
  { pattern: /^user\.read$/i, risk: 'SAFE', description: 'Leitura de perfil' },
  { pattern: /^user\.update$/i, risk: 'REVERSIBLE', description: 'Atualização de perfil' },
  { pattern: /^user\.delete$/i, risk: 'DESTRUCTIVE', description: 'Exclusão de conta' },

  // ── Plugin / Skill ──
  { pattern: /^plugin\.install$/i, risk: 'DESTRUCTIVE', description: 'Instalação de plugin' },
  { pattern: /^plugin\.uninstall$/i, risk: 'DESTRUCTIVE', description: 'Desinstalação de plugin' },
  { pattern: /^plugin\.enable$/i, risk: 'REVERSIBLE', description: 'Ativação de plugin' },
  { pattern: /^plugin\.disable$/i, risk: 'REVERSIBLE', description: 'Desativação de plugin' },
  { pattern: /^skill\.install$/i, risk: 'DESTRUCTIVE', description: 'Instalação de skill' },
  { pattern: /^skill\.uninstall$/i, risk: 'DESTRUCTIVE', description: 'Desinstalação de skill' },
];

// ─── Funções Principais ─────────────────────────────────────────────────────

/**
 * Classifica uma ação pelo nível de risco.
 * Regra: ação desconhecida = DESTRUCTIVE (default deny).
 */
export function classifyAction(action: string): ActionClassification {
  // Verificar regras customizadas primeiro (permite override)
  for (const rule of customRules) {
    const matches =
      rule.pattern instanceof RegExp
        ? rule.pattern.test(action)
        : rule.pattern === action;

    if (matches) {
      return {
        action,
        risk: rule.risk,
        requiresApproval: rule.risk !== 'SAFE',
        reason: rule.description,
        known: true,
      };
    }
  }

  // Depois regras built-in
  for (const rule of RISK_RULES) {
    const matches =
      rule.pattern instanceof RegExp
        ? rule.pattern.test(action)
        : rule.pattern === action;

    if (matches) {
      return {
        action,
        risk: rule.risk,
        requiresApproval: rule.risk !== 'SAFE',
        reason: rule.description,
        known: true,
      };
    }
  }

  // Default deny: ação desconhecida = DESTRUCTIVE
  return {
    action,
    risk: 'DESTRUCTIVE',
    requiresApproval: true,
    reason: 'Ação desconhecida — classificada como destrutiva (default deny)',
    known: false,
  };
}

/**
 * Retorna o nível de risco de uma ação (atalho para classificar).
 */
export function getRisk(action: string): RiskLevel {
  return classifyAction(action).risk;
}

/**
 * Determina se uma ação requer aprovação humana.
 */
export function requiresApproval(action: string): boolean {
  return classifyAction(action).requiresApproval;
}

/**
 * Registra uma nova regra de risco customizada (para plugins/skills).
 * Retorna a função para remover a regra.
 */
const customRules: RiskRule[] = [];

export function addCustomRule(rule: RiskRule): () => void {
  customRules.push(rule);
  return () => {
    const idx = customRules.indexOf(rule);
    if (idx >= 0) customRules.splice(idx, 1);
  };
}

/**
 * Obtém todas as regras ativas (built-in + custom).
 */
export function getAllRules(): RiskRule[] {
  return [...RISK_RULES, ...customRules];
}
