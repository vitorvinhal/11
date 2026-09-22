"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.noop = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_1 = require("@reduxjs/toolkit/query/react");
// Slice placeholder — mantém o store válido (evita "Store does not have a valid
// reducer"). Adicione slices reais aqui conforme o app crescer.
const appSlice = (0, toolkit_1.createSlice)({
    name: 'app',
    initialState: { ready: true },
    reducers: {
        noop: (state) => state,
    },
});
exports.noop = appSlice.actions.noop;
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        app: appSlice.reducer,
    },
});
(0, react_1.setupListeners)(exports.store.dispatch);
