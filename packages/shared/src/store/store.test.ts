import { store } from './store';

describe('shared store', () => {
  test('store has app reducer', () => {
    const state = store.getState();
    expect(state).toHaveProperty('app');
    expect(state.app.ready).toBe(true);
  });
});
