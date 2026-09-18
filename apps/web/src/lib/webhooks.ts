/**
 * FASE 28 — Webhook System
 *
 * Sistema de webhooks para notificar serviços externos sobre eventos.
 * Suporta retry, assinatura HMAC e filtros por evento.
 */

import { logger } from "./logger";

export interface Webhook {
  id: string;
  userId: string;
  url: string;
  events: string[];
  secret: string;
  active: boolean;
  createdAt: string;
  lastTriggeredAt?: string;
  failCount: number;
}

export interface WebhookEvent {
  event: string;
  timestamp: string;
  data: unknown;
}

export interface WebhookDelivery {
  id: string;
  webhookId: string;
  event: string;
  url: string;
  status: "pending" | "success" | "failed";
  statusCode?: number;
  attempts: number;
  maxAttempts: number;
  nextRetryAt?: string;
  createdAt: string;
  completedAt?: string;
  error?: string;
}

// Storage in-memory (em produção, usar Supabase)
const webhooks: Map<string, Webhook> = new Map();
const deliveries: WebhookDelivery[] = [];
const MAX_DELIVERIES_HISTORY = 1000;

/**
 * Reseta estado (para testes).
 */
export function resetWebhooks(): void {
  webhooks.clear();
  deliveries.length = 0;
}

/**
 * Gera um ID único.
 */
function generateId(): string {
  return `wh_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/**
 * Gera um secret para assinatura HMAC.
 */
function generateSecret(): string {
  return `whsec_${Math.random().toString(36).slice(2)}`;
}

/**
 * Calcula assinatura HMAC-SHA256.
 */
async function computeSignature(
  payload: string,
  secret: string,
): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(payload),
  );
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
 * Cria um novo webhook.
 */
export function createWebhook(
  userId: string,
  url: string,
  events: string[],
): Webhook {
  const webhook: Webhook = {
    id: generateId(),
    userId,
    url,
    events,
    secret: generateSecret(),
    active: true,
    createdAt: new Date().toISOString(),
    failCount: 0,
  };

  webhooks.set(webhook.id, webhook);
  logger.info(`Webhook criado: ${webhook.id}`, { userId, url, events });
  return webhook;
}

/**
 * Remove um webhook.
 */
export function deleteWebhook(id: string, userId: string): boolean {
  const webhook = webhooks.get(id);
  if (!webhook || webhook.userId !== userId) return false;
  webhooks.delete(id);
  logger.info(`Webhook removido: ${id}`);
  return true;
}

/**
 * Lista webhooks de um usuário.
 */
export function listWebhooks(userId: string): Webhook[] {
  return Array.from(webhooks.values()).filter((w) => w.userId === userId);
}

/**
 * Envia delivery HTTP para um webhook.
 */
async function deliverWebhook(
  webhook: Webhook,
  event: WebhookEvent,
): Promise<WebhookDelivery> {
  const delivery: WebhookDelivery = {
    id: generateId(),
    webhookId: webhook.id,
    event: event.event,
    url: webhook.url,
    status: "pending",
    attempts: 0,
    maxAttempts: 3,
    createdAt: new Date().toISOString(),
  };

  const payload = JSON.stringify({
    event: event.event,
    timestamp: event.timestamp,
    data: event.data,
    webhookId: webhook.id,
  });

  const signature = await computeSignature(payload, webhook.secret);

  for (let attempt = 1; attempt <= delivery.maxAttempts; attempt++) {
    delivery.attempts = attempt;

    try {
      const response = await fetch(webhook.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Signature": signature,
          "X-Webhook-Event": event.event,
          "X-Webhook-Delivery": delivery.id,
          "User-Agent": "11-Webhook/1.0",
        },
        body: payload,
        signal: AbortSignal.timeout(10000),
      });

      delivery.statusCode = response.status;

      if (response.ok) {
        delivery.status = "success";
        delivery.completedAt = new Date().toISOString();
        webhook.lastTriggeredAt = new Date().toISOString();
        webhook.failCount = 0;

        logger.info(`Webhook delivery OK: ${delivery.id}`, {
          webhookId: webhook.id,
          statusCode: response.status,
          attempt,
        });
        break;
      }

      delivery.error = `HTTP ${response.status}`;
    } catch (error) {
      delivery.error = error instanceof Error ? error.message : String(error);
    }

    if (attempt < delivery.maxAttempts) {
      delivery.nextRetryAt = new Date(
        Date.now() + Math.pow(2, attempt) * 1000,
      ).toISOString();
      logger.warn(`Webhook delivery retry: ${delivery.id}`, {
        attempt,
        nextRetryAt: delivery.nextRetryAt,
      });
    }
  }

  if (delivery.status !== "success") {
    delivery.status = "failed";
    delivery.completedAt = new Date().toISOString();
    webhook.failCount++;

    // Desativar webhook após 10 falhas consecutivas
    if (webhook.failCount >= 10) {
      webhook.active = false;
      logger.warn(`Webhook desativado por falhas: ${webhook.id}`, {
        failCount: webhook.failCount,
      });
    }
  }

  deliveries.push(delivery);
  if (deliveries.length > MAX_DELIVERIES_HISTORY) {
    deliveries.splice(0, deliveries.length - MAX_DELIVERIES_HISTORY);
  }

  return delivery;
}

/**
 * Dispara um evento para todos os webhooks inscritos.
 */
export async function triggerEvent(
  event: string,
  data: unknown,
): Promise<WebhookDelivery[]> {
  const eventObj: WebhookEvent = {
    event,
    timestamp: new Date().toISOString(),
    data,
  };

  const activeWebhooks = Array.from(webhooks.values()).filter(
    (w) => w.active && w.events.includes(event),
  );

  if (activeWebhooks.length === 0) return [];

  logger.info(
    `Triggering event "${event}" para ${activeWebhooks.length} webhooks`,
  );

  const results = await Promise.allSettled(
    activeWebhooks.map((wh) => deliverWebhook(wh, eventObj)),
  );

  return results
    .filter(
      (r): r is PromiseFulfilledResult<WebhookDelivery> =>
        r.status === "fulfilled",
    )
    .map((r) => r.value);
}

/**
 * Retorna histórico de deliveries.
 */
export function getDeliveryHistory(
  webhookId?: string,
  limit = 50,
): WebhookDelivery[] {
  let filtered = deliveries;
  if (webhookId) {
    filtered = filtered.filter((d) => d.webhookId === webhookId);
  }
  return filtered.slice(-limit);
}

/**
 * Eventos disponíveis para webhooks.
 */
export const WEBHOOK_EVENTS = [
  "agent:status",
  "agent:message",
  "health:update",
  "plugin:installed",
  "plugin:uninstalled",
  "skill:enabled",
  "skill:disabled",
  "memory:created",
  "memory:deleted",
  "backup:completed",
  "backup:failed",
] as const;
