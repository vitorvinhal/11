import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const VERSION_DATA = {
  version: '0.8.1-alpha',
  versionCode: 8,
  name: '11 — Inteligência Autônoma',
  channel: 'alpha',
  changelog: [
    'Settings route migrada para requireUser() - padrão único de auth em todas as rotas',
    '@inferencesh/sdk removido (não era importado em nenhum lugar)',
    'Deploy fix: removido routes do vercel.json que bloqueava atualização',
    'CostBreaker: contabilização real com parse de tokens 9Router',
    'Auditoria completa do checklist: 15 itens verificados',
    'Migrations SQL completas em infra/supabase/migrations/',
  ],
  apkUrl: 'https://github.com/vitorvinhal/11/releases/download/v0.4.0-alpha/app-release.apk',
  desktopUrl: 'https://github.com/vitorvinhal/11/releases/download/v0.4.0-alpha/11-desktop_0.4.0_x64-setup.exe',
};

export async function GET() {
  // Tenta ler do filesystem; se falhar, retorna hardcoded
  const candidates = [
    join(process.cwd(), 'public', 'version.json'),
    join(process.cwd(), 'apps', 'web', 'public', 'version.json'),
  ];
  for (const file of candidates) {
    try {
      if (existsSync(file)) {
        const data = JSON.parse(readFileSync(file, 'utf8'));
        return NextResponse.json(data, {
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });
      }
    } catch { /* continue */ }
  }
  return NextResponse.json(VERSION_DATA, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
