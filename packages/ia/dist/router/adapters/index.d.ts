import { ProviderAdapter } from '../types';
/**
 * Registry de adapters por provedor.
 * Ordem de preferência default no Modo Auto:
 *   9Router (free) → Gemini (free) → Anthropic (pago) → MiniMax (pago)
 */
export declare class AdapterRegistry {
    private readonly adapters;
    constructor();
    register(adapter: ProviderAdapter): void;
    get(id: string): ProviderAdapter | undefined;
    /** Ordem de fallback no Modo Auto. */
    fallbackOrder(): ProviderAdapter[];
}
export declare const defaultRegistry: AdapterRegistry;
