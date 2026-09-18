/**
 * Structured Logger — FASE 16A
 *
 * Logger com formatação JSON para produção e formatação legível para desenvolvimento.
 * Suporta contextos, métricas de performance e rastreamento de erros.
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogContext {
  [key: string]: unknown;
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  duration?: number;
  error?: {
    name: string;
    message: string;
    stack?: string;
  };
}

class Logger {
  private minLevel: LogLevel;
  private isProduction: boolean;

  constructor() {
    this.isProduction = process.env.NODE_ENV === "production";
    this.minLevel = (process.env.LOG_LEVEL as LogLevel) || "info";
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ["debug", "info", "warn", "error"];
    return levels.indexOf(level) >= levels.indexOf(this.minLevel);
  }

  private formatEntry(entry: LogEntry): string {
    if (this.isProduction) {
      return JSON.stringify(entry);
    }

    // Dev format: readable
    const ts = entry.timestamp.slice(11, 23);
    const level = entry.level.toUpperCase().padEnd(5);
    const ctx = entry.context ? ` ${JSON.stringify(entry.context)}` : "";
    const dur = entry.duration !== undefined ? ` [${entry.duration}ms]` : "";
    const err = entry.error
      ? `\n  ${entry.error.name}: ${entry.error.message}`
      : "";

    return `${ts} ${level} ${entry.message}${ctx}${dur}${err}`;
  }

  private log(
    level: LogLevel,
    message: string,
    context?: LogContext,
    duration?: number,
    error?: Error,
  ) {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      duration,
    };

    if (error) {
      entry.error = {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    }

    const formatted = this.formatEntry(entry);

    switch (level) {
      case "error":
        console.error(formatted);
        break;
      case "warn":
        console.warn(formatted);
        break;
      default:
        console.log(formatted);
    }
  }

  debug(message: string, context?: LogContext) {
    this.log("debug", message, context);
  }

  info(message: string, context?: LogContext) {
    this.log("info", message, context);
  }

  warn(message: string, context?: LogContext) {
    this.log("warn", message, context);
  }

  error(message: string, context?: LogContext, error?: Error) {
    this.log("error", message, context, undefined, error);
  }

  /**
   * Log com métricas de timing.
   */
  timer(label: string): () => number {
    const start = performance.now();
    return () => {
      const duration = Math.round(performance.now() - start);
      this.info(`${label} completed`, { duration });
      return duration;
    };
  }

  /**
   * Criar sub-logger com contexto fixo.
   */
  child(context: LogContext): Logger {
    const childLogger = new Logger();
    const originalLog = childLogger.log.bind(childLogger);

    childLogger.log = (
      level: LogLevel,
      message: string,
      ctx?: LogContext,
      duration?: number,
      error?: Error,
    ) => {
      originalLog(level, message, { ...context, ...ctx }, duration, error);
    };

    return childLogger;
  }
}

// Singleton
export const logger = new Logger();
