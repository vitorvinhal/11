import { NextResponse } from 'next/server';
import { loadRootEnv } from '../../../../lib/server-env';
import { getAuthClient } from '../../../../lib/server-supabase';

loadRootEnv();

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function sb(req: Request) {
  return getAuthClient(req);
}

// Test connection - fetch sample data
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, provider, action } = body;
    const s = sb(req);

    const { data: connector } = await s.from('connectors')
      .select('access_token, metadata')
      .eq('user_id', userId)
      .eq('provider', provider)
      .single();

    if (!connector?.access_token) {
      return NextResponse.json({ error: 'Not connected' }, { status: 401 });
    }

    let result: any;

    switch (provider) {
      case 'google':
        if (action === 'drive') {
          const res = await fetch('https://www.googleapis.com/drive/v3/files?pageSize=5&fields=files(id,name,mimeType,modifiedTime)&orderBy=modifiedTime desc', {
            headers: { Authorization: `Bearer ${connector.access_token}` },
          });
          result = await res.json();
        } else if (action === 'gmail') {
          const res = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=5', {
            headers: { Authorization: `Bearer ${connector.access_token}` },
          });
          const list = await res.json();
          if (list.messages) {
            const msgs = await Promise.all(
              list.messages.map(async (m: any) => {
                const r = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From`, {
                  headers: { Authorization: `Bearer ${connector.access_token}` },
                });
                return r.json();
              })
            );
            result = { messages: msgs.map((m: any) => ({ subject: m.payload?.headers?.find((h: any) => h.name === 'Subject')?.value, from: m.payload?.headers?.find((h: any) => h.name === 'From')?.value })) };
          } else {
            result = { messages: [] };
          }
        } else if (action === 'calendar') {
          const now = new Date();
          const next = new Date(now.getTime() + 7 * 86400000);
          const res = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${now.toISOString()}&timeMax=${next.toISOString()}&maxResults=5&singleEvents=true&orderBy=startTime`, {
            headers: { Authorization: `Bearer ${connector.access_token}` },
          });
          result = await res.json();
        } else {
          result = { email: connector.metadata?.email, name: connector.metadata?.name };
        }
        break;

      case 'slack': {
        const slackRes = await fetch('https://slack.com/api/auth.test', {
          headers: { Authorization: `Bearer ${connector.access_token}` },
        });
        result = await slackRes.json();
        break;
      }

      case 'github': {
        const ghRes = await fetch('https://api.github.com/user', {
          headers: { Authorization: `Bearer ${connector.access_token}`, Accept: 'application/vnd.github+json' },
        });
        result = await ghRes.json();
        break;
      }

      case 'notion': {
        const notionRes = await fetch('https://api.notion.com/v1/search?page_size=5', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${connector.access_token}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}),
        });
        result = await notionRes.json();
        break;
      }

      default:
        return NextResponse.json({ error: 'Unknown provider' }, { status: 400 });
    }

    return NextResponse.json({ ok: true, provider, action, data: result });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}