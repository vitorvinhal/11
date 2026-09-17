'use client';

import { useEffect } from 'react';
import { useAuth } from './auth';

/**
 * ThemeSync — aplica a preferência de aparência (dark/light/system) salva em
 * /api/settings assim que o usuário estiver autenticado, sem precisar abrir
 * o dialog de configurações.
 */
export function ThemeSync() {
  const { user, getAccessToken } = useAuth();

  useEffect(() => {
    const apply = (appearance: 'dark' | 'light' | 'system') => {
      const root = document.documentElement;
      root.classList.remove('dark', 'light');
      if (appearance === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.add(prefersDark ? 'dark' : 'light');
      } else {
        root.classList.add(appearance);
      }
    };

    if (!user) {
      // Deslogado: usa preferência local se existir, senão dark.
      try {
        const local = JSON.parse(localStorage.getItem('eleven_appearance') ?? 'null');
        apply(local === 'light' || local === 'system' ? local : 'dark');
      } catch { apply('dark'); }
      return;
    }

    (async () => {
      try {
        const token = await getAccessToken();
        const res = await fetch(`/api/settings?userId=${user.id}`, { headers: { Authorization: `Bearer ${token}` } });
        const data = await res.json();
        const appearance = (data.appearance === 'light' || data.appearance === 'system') ? data.appearance : 'dark';
        apply(appearance);
        localStorage.setItem('eleven_appearance', appearance);
      } catch {
        apply('dark');
      }
    })();
  }, [user, getAccessToken]);

  return null;
}