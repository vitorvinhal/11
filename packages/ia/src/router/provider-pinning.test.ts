import { providerPinning } from './provider-pinning';

describe('ProviderPinning utilities', () => {
  test('pin stores provider in memory', async () => {
    await providerPinning.pin('sess1', 'kr/glm-5', 'test');
    const stored = (providerPinning as any).pinMemory.get('sess1');
    expect(stored?.provider).toBe('kr/glm-5');
  });

  test('currentProvider falls back to 9router', async () => {
    const prov = providerPinning.currentProvider('unknown');
    expect(prov).toBe('9router');
  });

  test('hydrate no record stays undefined', async () => {
    await providerPinning.hydrate('none');
    expect((providerPinning as any).pinMemory.has('none')).toBe(false);
  });
});


