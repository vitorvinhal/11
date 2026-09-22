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
export type RiskLevel = "SAFE" | "REVERSIBLE" | "DESTRUCTIVE";
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
/**
 * Classifica uma ação pelo nível de risco.
 * Regra: ação desconhecida = DESTRUCTIVE (default deny).
 */
export declare function classifyAction(action: string): ActionClassification;
/**
 * Retorna o nível de risco de uma ação (atalho para classificar).
 */
export declare function getRisk(action: string): RiskLevel;
/**
 * Determina se uma ação requer aprovação humana.
 */
export declare function requiresApproval(action: string): boolean;
export declare function addCustomRule(rule: RiskRule): () => void;
/**
 * Obtém todas as regras ativas (built-in + custom).
 */
export declare function getAllRules(): RiskRule[];
