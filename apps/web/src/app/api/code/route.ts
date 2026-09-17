import { NextRequest, NextResponse } from 'next/server';
import { createSession, getSession, getUserSessions, updateSession, deleteSession, approveAndExecuteSession } from './services/session-manager';
import { verifyToken, checkRateLimit, sanitizeCommand, sanitizeArgs } from './services/security';
import { CreateCodeSessionDTO, ApproveSessionDTO } from './types';
import { loadRootEnv } from '../../../lib/server-env';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // Verify authentication
    const user = await verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Rate limiting
    if (!checkRateLimit(user.userId)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('id');

    if (sessionId) {
      // Get specific session
      const session = getSession(sessionId);
      if (!session) {
        return NextResponse.json({ error: 'Session not found' }, { status: 404 });
      }

      // Check ownership
      if (session.userId !== user.userId) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }

      return NextResponse.json(session);
    }

    // List user sessions
    const sessions = getUserSessions(user.userId);
    return NextResponse.json(sessions);
  } catch (error) {
    console.error('GET /api/code error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Verify authentication
    const user = await verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Rate limiting
    if (!checkRateLimit(user.userId)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body: CreateCodeSessionDTO = await req.json();
    const { command, args } = body;

    if (!command) {
      return NextResponse.json({ error: 'Command is required' }, { status: 400 });
    }

    // Sanitize input
    const sanitizedCommand = sanitizeCommand(command);
    const sanitizedArgs = sanitizeArgs(args || []);

    const session = createSession(
      {
        command: sanitizedCommand,
        args: sanitizedArgs,
        workingDir: body.workingDir,
        env: body.env,
      },
      user.userId
    );

    return NextResponse.json(session, { status: 201 });
  } catch (error) {
    console.error('POST /api/code error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const user = await verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!checkRateLimit(user.userId)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body: ApproveSessionDTO & { id: string } = await req.json();
    const { id, approved, reason } = body;

    if (!id) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const session = await approveAndExecuteSession(id, { approved, reason }, user.userId);
    if (!session) {
      return NextResponse.json({ error: 'Session not found or not in pending state' }, { status: 404 });
    }

    return NextResponse.json(session);
  } catch (error) {
    console.error('PUT /api/code error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const user = await verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    const session = getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    if (session.userId !== user.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (session.status === 'running') {
      return NextResponse.json({ error: 'Cannot delete running session' }, { status: 400 });
    }

    const deleted = deleteSession(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Failed to delete session' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DELETE /api/code error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const user = await verifyToken(req);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!checkRateLimit(user.userId)) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }

    const body = await req.json();
    const { id, action } = body;

    if (!id || !action) {
      return NextResponse.json({ error: 'Session ID and action are required' }, { status: 400 });
    }

    const session = getSession(id);
    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    if (session.userId !== user.userId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    let updated: typeof session | undefined;

    switch (action) {
      case 'cancel':
        if (session.status !== 'running' && session.status !== 'pending') {
          return NextResponse.json({ error: 'Cannot cancel session in current state' }, { status: 400 });
        }
        // For now, just mark as cancelled
        updated = updateSession(id, {
          status: 'cancelled',
          completedAt: new Date().toISOString(),
        });
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    if (!updated) {
      return NextResponse.json({ error: 'Failed to update session' }, { status: 500 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/code error:', error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}