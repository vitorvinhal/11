import { configureStore, createSlice } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

// Slice placeholder — mantém o store válido (evita "Store does not have a valid
// reducer"). Adicione slices reais aqui conforme o app crescer.
const appSlice = createSlice({
  name: 'app',
  initialState: { ready: true },
  reducers: {
    noop: (state) => state,
  },
});

export const { noop } = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
});

setupListeners(store.dispatch);
