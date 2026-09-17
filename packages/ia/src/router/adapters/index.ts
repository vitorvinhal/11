import { ProviderAdapter } from '../types';
import { nineRouterAdapter } from './9router';
import { anthropicAdapter } from './anthropic';
import { geminiAdapter } from './gemini';
import { minimaxAdapter } from './minimax';

/**
 * Registry de adapters por provedor.
 * Ordem de preferência default no Modo Auto:
 *   9Router (free) → Gemini (free) → Anthropic (pago) → MiniMax (pago)
 */
export class AdapterRegistry {
  private readonly adapters = new Map<string, ProviderAdapter>();

  constructor() {
    this.register(nineRouterAdapter());
    this.register(geminiAdapter());
    this.register(anthropicAdapter());
    this.register(minimaxAdapter());
  }

  register(adapter: ProviderAdapter): void {
    this.adapters.set(adapter.id, adapter);
  }

  get(id: string): ProviderAdapter | undefined {
    return this.adapters.get(id);
  }

  /** Ordem de fallback no Modo Auto. */
  fallbackOrder(): ProviderAdapter[] {
    return [nineRouterAdapter(), geminiAdapter()];
  }
}

export const defaultRegistry = new AdapterRegistry();