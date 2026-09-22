"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
describe('shared store', () => {
    test('store has app reducer', () => {
        const state = store_1.store.getState();
        expect(state).toHaveProperty('app');
        expect(state.app.ready).toBe(true);
    });
});
