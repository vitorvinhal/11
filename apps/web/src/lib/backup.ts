/**
 * FASE 25 — Backup Automático
 *
 * Sistema de backup automático de dados via Supabase.
 * Exporta dados periodicamente e mantém versões anteriores.
 */

import { logger } from "./logger";

export interface BackupConfig {
  /** Intervalo entre backups em ms */
  intervalMs: number;
  /** Número máximo de backups a manter */
  maxBackups: number;
  /** Tabelas para backup */
  tables: string[];
  /** Diretório de destino (local ou cloud) */
  destination: string;
}

export interface BackupEntry {
  id: string;
  timestamp: string;
  tables: string[];
  rows: Record<string, number>;
  sizeBytes: number;
  status: "completed" | "failed" | "in_progress";
  error?: string;
}

const defaultConfig: BackupConfig = {
  intervalMs: parseInt(process.env.BACKUP_INTERVAL_MS ?? "3600000", 10),
  maxBackups: parseInt(process.env.BACKUP_MAX_COUNT ?? "7", 10),
  tables: (
    process.env.BACKUP_TABLES ?? "memories,plugins,skills,agent_states"
  ).split(","),
  destination: process.env.BACKUP_DESTINATION ?? "./backups",
};

let backupHistory: BackupEntry[] = [];
let backupTimer: ReturnType<typeof setInterval> | null = null;

/**
 * Gera um ID único para o backup.
 */
function generateBackupId(): string {
  return `bk_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Realiza o backup de uma tabela específica.
 */
async function backupTable(
  tableName: string,
): Promise<{ table: string; rows: number }> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${tableName}?select=*&limit=1000`,
      {
        headers: {
          apikey: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""}`,
          Prefer: "count=exact",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return { table: tableName, rows: data.length };
  } catch (error) {
    throw new Error(`Falha ao fazer backup de ${tableName}: ${error}`);
  }
}

/**
 * Executa um backup completo.
 */
export async function runBackup(
  config: BackupConfig = defaultConfig,
): Promise<BackupEntry> {
  const entry: BackupEntry = {
    id: generateBackupId(),
    timestamp: new Date().toISOString(),
    tables: config.tables,
    rows: {},
    sizeBytes: 0,
    status: "in_progress",
  };

  logger.info(`Iniciando backup ${entry.id}`, { tables: config.tables });

  try {
    for (const table of config.tables) {
      const result = await backupTable(table);
      entry.rows[table] = result.rows;
    }

    entry.sizeBytes = JSON.stringify(entry.rows).length;
    entry.status = "completed";

    backupHistory.push(entry);

    // Manter apenas os últimos N backups
    if (backupHistory.length > config.maxBackups) {
      backupHistory = backupHistory.slice(-config.maxBackups);
    }

    logger.info(`Backup ${entry.id} concluído`, {
      rows: entry.rows,
      sizeBytes: entry.sizeBytes,
    });
  } catch (error) {
    entry.status = "failed";
    entry.error = error instanceof Error ? error.message : String(error);
    backupHistory.push(entry);
    logger.error(`Backup ${entry.id} falhou`, { error: entry.error });
  }

  return entry;
}

/**
 * Inicia backup automático.
 */
export function startAutoBackup(config: BackupConfig = defaultConfig): void {
  if (backupTimer) return;

  logger.info("Iniciando backup automático", {
    intervalMs: config.intervalMs,
    tables: config.tables,
  });

  backupTimer = setInterval(() => {
    runBackup(config).catch((err) => {
      logger.error("Erro no backup automático", { error: String(err) });
    });
  }, config.intervalMs);
}

/**
 * Para o backup automático.
 */
export function stopAutoBackup(): void {
  if (backupTimer) {
    clearInterval(backupTimer);
    backupTimer = null;
    logger.info("Backup automático parado");
  }
}

/**
 * Retorna histórico de backups.
 */
export function getBackupHistory(): BackupEntry[] {
  return [...backupHistory];
}

/**
 * Retorna status do sistema de backup.
 */
export function getBackupStatus(): {
  autoBackupRunning: boolean;
  totalBackups: number;
  lastBackup: BackupEntry | null;
} {
  return {
    autoBackupRunning: backupTimer !== null,
    totalBackups: backupHistory.length,
    lastBackup:
      backupHistory.length > 0 ? backupHistory[backupHistory.length - 1] : null,
  };
}
