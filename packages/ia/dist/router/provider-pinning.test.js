"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const provider_pinning_1 = require("./provider-pinning");
// Mock supabase client with minimal chainable methods used in hydrate
jest.mock('@supabase/supabase-js', () => ({
    createClient: () => ({
        from: () => ({
            select: () => ({
                eq: () => ({
                    single: async () => ({ data: null })
                })
            })
        })
    })
}));
describe('ProviderPinning utilities', () => {
    test('pin stores provider in memory', async () => {
        await provider_pinning_1.providerPinning.pin('sess1', 'kr/glm-5', 'test');
        const stored = provider_pinning_1.providerPinning.pinMemory.get('sess1');
        expect(stored?.provider).toBe('kr/glm-5');
    });
    test('currentProvider falls back to 9router', async () => {
        const prov = provider_pinning_1.providerPinning.currentProvider('unknown');
        expect(prov).toBe('9router');
    });
    test('hydrate no record stays undefined', async () => {
        await provider_pinning_1.providerPinning.hydrate('none');
        expect(provider_pinning_1.providerPinning.pinMemory.has('none')).toBe(false);
    });
});
