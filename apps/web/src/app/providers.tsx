'use client';

import { Provider } from 'react-redux';
import { store } from '@11/shared';
import { ReactNode } from 'react';
import { AuthProvider } from '../lib/auth';
import { ThemeSync } from '../lib/theme-sync';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <ThemeSync />
      <Provider store={store}>{children}</Provider>
    </AuthProvider>
  );
}