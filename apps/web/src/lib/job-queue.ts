/**
 * FASE 29 — Job Queue
 *
 * Fila de jobs in-memory para tarefas longas/assíncronas.
 * Suporta prioridade, retry com backoff, timeout e concorrência configurável.
 */

import { logger } from "./logger";

export interface Job<T = unknown> {
  id: string;
  type: string;
  payload: T;
  status: "pending" | "running" | "completed" | "failed" | "cancelled";
  priority: number;
  attempts: number;
  maxAttempts: number;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  result?: unknown;
  error?: string;
  timeoutMs?: number;
}

export type JobHandler<T = unknown> = (
  payload: T,
  job: Job<T>,
) => Promise<unknown>;

export interface QueueConfig {
  /** Número máximo de jobs concorrentes */
  concurrency: number;
  /** Intervalo de polling em ms */
  pollIntervalMs: number;
  /** Timeout padrão dos jobs em ms */
  defaultTimeoutMs: number;
  /** Máximo de tentativas antes de falhar */
  maxAttempts: number;
}

const defaultConfig: QueueConfig = {
  concurrency: parseInt(process.env.QUEUE_CONCURRENCY ?? "3", 10),
  pollIntervalMs: parseInt(process.env.QUEUE_POLL_INTERVAL_MS ?? "1000", 10),
  defaultTimeoutMs: parseInt(
    process.env.QUEUE_DEFAULT_TIMEOUT_MS ?? "30000",
    10,
  ),
  maxAttempts: parseInt(process.env.QUEUE_MAX_ATTEMPTS ?? "3", 10),
};

export class JobQueue {
  private jobs: Map<string, Job> = new Map();
  private handlers: Map<string, JobHandler> = new Map();
  private config: QueueConfig;
  private processing = false;
  private pollTimer: ReturnType<typeof setInterval> | null = null;
  private runningJobs = 0;
  private jobCounter = 0;

  constructor(config: QueueConfig = defaultConfig) {
    this.config = config;
  }

  /**
   * Registra um handler para um tipo de job.
   */
  registerHandler<T>(type: string, handler: JobHandler<T>): void {
    this.handlers.set(type, handler as JobHandler);
    logger.debug(`Handler registrado para tipo: ${type}`);
  }

  /**
   * Adiciona um job à fila.
   */
  addJob<T>(
    type: string,
    payload: T,
    options: {
      priority?: number;
      maxAttempts?: number;
      timeoutMs?: number;
    } = {},
  ): Job<T> {
    this.jobCounter++;
    const job: Job<T> = {
      id: `job_${Date.now()}_${this.jobCounter}`,
      type,
      payload,
      status: "pending",
      priority: options.priority ?? 0,
      attempts: 0,
      maxAttempts: options.maxAttempts ?? this.config.maxAttempts,
      createdAt: new Date().toISOString(),
      timeoutMs: options.timeoutMs ?? this.config.defaultTimeoutMs,
    };

    this.jobs.set(job.id, job as Job);
    logger.debug(`Job adicionado: ${job.id} (${type})`, {
      priority: job.priority,
    });
    return job;
  }

  /**
   * Obtém o próximo job para processar (por prioridade).
   */
  private getNextJob(): Job | null {
    let next: Job | null = null;

    for (const job of Array.from(this.jobs.values())) {
      if (job.status !== "pending") continue;
      if (!next || job.priority > next.priority) {
        next = job;
      }
    }

    return next;
  }

  /**
   * Processa um job individual.
   */
  private async processJob(job: Job): Promise<void> {
    const handler = this.handlers.get(job.type);
    if (!handler) {
      job.status = "failed";
      job.error = `Handler não registrado para tipo: ${job.type}`;
      job.completedAt = new Date().toISOString();
      logger.error(`Job sem handler: ${job.id}`, { type: job.type });
      return;
    }

    job.status = "running";
    job.startedAt = new Date().toISOString();
    job.attempts++;
    this.runningJobs++;

    logger.debug(`Processando job: ${job.id} (tentativa ${job.attempts})`);

    try {
      let timeoutId: ReturnType<typeof setTimeout> | undefined;
      const result = await Promise.race([
        handler(job.payload, job),
        new Promise<never>((_, reject) => {
          timeoutId = setTimeout(
            () => reject(new Error(`Job timeout após ${job.timeoutMs}ms`)),
            job.timeoutMs,
          );
        }),
      ]);

      if (timeoutId) clearTimeout(timeoutId);

      job.status = "completed";
      job.result = result;
      job.completedAt = new Date().toISOString();
      logger.debug(`Job concluído: ${job.id}`);
    } catch (error) {
      job.error = error instanceof Error ? error.message : String(error);

      if (job.attempts < job.maxAttempts) {
        job.status = "pending";
        const backoff = Math.pow(2, job.attempts) * 1000;
        logger.warn(`Job falhou, retry em ${backoff}ms: ${job.id}`, {
          error: job.error,
          attempt: job.attempts,
        });
        setTimeout(() => {
          this.jobs.set(job.id, job);
        }, backoff);
      } else {
        job.status = "failed";
        job.completedAt = new Date().toISOString();
        logger.error(`Job falhou definitivamente: ${job.id}`, {
          error: job.error,
          attempts: job.attempts,
        });
      }
    } finally {
      this.runningJobs--;
    }
  }

  /**
   * Loop principal de processamento.
   */
  private async drain(): Promise<void> {
    if (this.processing) return;
    this.processing = true;

    while (this.runningJobs < this.config.concurrency) {
      const job = this.getNextJob();
      if (!job) break;

      this.jobs.delete(job.id);
      this.processJob(job).catch((err) => {
        logger.error(`Erro inesperado ao processar job: ${err}`);
      });
    }

    this.processing = false;
  }

  /**
   * Inicia a fila.
   */
  start(): void {
    if (this.pollTimer) return;

    logger.info("Job queue iniciada", {
      concurrency: this.config.concurrency,
      pollInterval: this.config.pollIntervalMs,
    });

    this.pollTimer = setInterval(() => {
      this.drain().catch((err) => {
        logger.error(`Erro no drain da queue: ${err}`);
      });
    }, this.config.pollIntervalMs);
  }

  /**
   * Para a fila.
   */
  stop(): void {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
      logger.info("Job queue parada");
    }
  }

  /**
   * Cancela um job.
   */
  cancelJob(jobId: string): boolean {
    const job = this.jobs.get(jobId);
    if (!job || job.status !== "pending") return false;
    job.status = "cancelled";
    job.completedAt = new Date().toISOString();
    this.jobs.delete(jobId);
    return true;
  }

  /**
   * Retorna status de um job.
   */
  getJob(jobId: string): Job | undefined {
    return this.jobs.get(jobId);
  }

  /**
   * Retorna estatísticas da fila.
   */
  get stats() {
    const jobs = Array.from(this.jobs.values());
    return {
      pending: jobs.filter((j) => j.status === "pending").length,
      running: this.runningJobs,
      completed: jobs.filter((j) => j.status === "completed").length,
      failed: jobs.filter((j) => j.status === "failed").length,
      total: jobs.length,
    };
  }
}

// Singleton global
export const jobQueue = new JobQueue();

/**
 * Handlers pré-registrados para jobs comuns.
 */
export function registerBuiltinHandlers(): void {
  jobQueue.registerHandler("backup", async (payload: { tables: string[] }) => {
    const { runBackup } = await import("./backup");
    return runBackup({ ...defaultConfig, tables: payload.tables } as never);
  });

  jobQueue.registerHandler(
    "send-email",
    async (payload: { to: string; subject: string; body: string }) => {
      logger.info(`Email enviado (simulado)`, {
        to: payload.to,
        subject: payload.subject,
      });
      return { sent: true };
    },
  );

  jobQueue.registerHandler(
    "webhook-delivery",
    async (payload: { webhookId: string; event: string; data: unknown }) => {
      const { triggerEvent } = await import("./webhooks");
      return triggerEvent(payload.event, payload.data);
    },
  );
}
