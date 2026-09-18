import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * GET /api/version — Retorna versão atual do sistema
 */
export async function GET() {
  try {
    const versionPath = resolve(process.cwd(), 'public/version.json');
    const versionData = JSON.parse(readFileSync(versionPath, 'utf8'));

    return NextResponse.json({
      ok: true,
      data: versionData,
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: (e as Error).message },
      { status: 500 }
    );
  }
}
