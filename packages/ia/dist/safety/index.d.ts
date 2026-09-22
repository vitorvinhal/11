/**
 * Safety Engine — FASE 4
 *
 * Módulo de segurança para ações do agente.
 * Expõe: Risk Engine, Dry-Run, Checkpoint, Rollback.
 */
export { classifyAction, getRisk, requiresApproval, addCustomRule, getAllRules, } from './risk-engine';
export type { RiskLevel, ActionClassification, RiskRule, } from './risk-engine';
export { dryRun } from './dry-run';
export type { DryRunResult, DryRunContext, SimulationStatus, } from './dry-run';
export { createCheckpoint, restoreCheckpoint, createPendingAction, approveAction, rejectAction, markExecuted, } from './checkpoint';
export type { Checkpoint, PendingAction, CreateCheckpointInput, CheckpointStatus, PendingActionStatus, } from './checkpoint';
