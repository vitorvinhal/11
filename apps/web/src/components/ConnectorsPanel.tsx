'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Link2, Unlink, Mail, Calendar, FolderOpen, CheckCircle2, XCircle, Loader2, Plus, Zap, Star, TestTube2, User } from 'lucide-react';
import { PROVIDERS } from '@/lib/connectors-config';

type ConnectorRow = {
  id: string;
  user_id: string;
  provider: string;
  access_token?: string;
  metadata?: Record<string, any>;
  created_at?: string;
};

type Tab = 'your' | 'discover';

export default function ConnectorsPanel({ userId }: { userId: string }) {
  const { getAccessToken } = useAuth();
  const [tab, setTab] = useState<Tab>('your');
  const [connectors, setConnectors] = useState<ConnectorRow[]>([]);
  const [testing, setTesting] = useState<string | null>(null);
  const [testResult, setTestResult] = useState<{ provider: string; ok: boolean; data?: any } | null>(null);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('Todos');

  const categories = ['Todos', 'Google', 'Comunicação', 'Codificação', 'Notas', 'CRM', 'Vendas', 'Legal', 'Finanças', 'Automatização'];

  const loadConnectors = useCallback(async () => {
    if (!userId) return;
    try {
      const token = await getAccessToken();
      const res = await fetch(`/api/connectors?userId=${userId}`, { headers: { Authorization: `Bearer ${token}` } });
      const data = await res.json();
      setConnectors(Array.isArray(data) ? data : []);
    } catch { setConnectors([]); }
  }, [userId, getAccessToken]);

  useEffect(() => { loadConnectors(); }, [loadConnectors]);

  const isConnected = (id: string) => connectors.some(c => c.provider === id);
  const getConnector = (id: string) => connectors.find(c => c.provider === id);

  const handleConnect = (provider: { id: string; authType: string }) => {
    if (provider.authType === 'oauth') {
      window.location.href = `/api/connectors/${provider.id}?userId=${userId}`;
    }
  };

  const handleDisconnect = async (providerId: string) => {
    const conn = getConnector(providerId);
    if (!conn) return;
    const token = await getAccessToken();
    await fetch(`/api/connectors?id=${conn.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    loadConnectors();
  };

  const handleTest = async (providerId: string, action?: string) => {
    setTesting(providerId);
    setTestResult(null);
    try {
      const token = await getAccessToken();
      const res = await fetch('/api/connectors/test', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, provider: providerId, action }),
      });
      const data = await res.json();
      setTestResult({ provider: providerId, ok: data.ok, data: data.data });
    } catch {
      setTestResult({ provider: providerId, ok: false });
    }
    setTesting(null);
  };

  const filteredProviders = PROVIDERS.filter(p => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase()) && !p.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (catFilter !== 'Todos' && p.category !== catFilter) return false;
    return true;
  });

  const yourConnectors = PROVIDERS.filter(p => isConnected(p.id));

  const connectorActions: Record<string, { label: string; action: string; icon: any }[]> = {
    google: [
      { label: 'Drive', action: 'drive', icon: FolderOpen },
      { label: 'Gmail', action: 'gmail', icon: Mail },
      { label: 'Calendar', action: 'calendar', icon: Calendar },
    ],
    slack: [{ label: 'Testar Conexão', action: 'test', icon: Zap }],
    github: [{ label: 'Perfil', action: 'profile', icon: User }],
    notion: [{ label: 'Buscar Páginas', action: 'search', icon: Search }],
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-4 pb-3 border-b border-border">
        <div className="flex gap-1 mb-3 bg-muted rounded-lg p-1">
          {([
            ['your', 'Suas Conexões'],
            ['discover', 'Descobrir'],
          ] as [Tab, string][]).map(([t, label]) => (
            <button key={t} onClick={() => setTab(t)}
              className={`flex-1 py-1.5 px-3 rounded-md text-sm font-medium transition-colors ${tab === t ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {tab === 'your' ? (
          <>
            {yourConnectors.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <Link2 className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">Nenhuma conexão ainda</h3>
                <p className="text-sm text-muted-foreground mb-4">Conecte serviços externos para usar seus dados no chat</p>
                <Button variant="outline" onClick={() => setTab('discover')}>
                  <Plus className="w-4 h-4 mr-2" /> Descobrir Conexões
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {yourConnectors.map(p => {
                  const conn = getConnector(p.id);
                  const Icon = p.icon;
                  const actions = connectorActions[p.id] ?? [];
                  return (
                    <div key={p.id} className="bg-card rounded-xl border border-border p-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                          <Icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{p.name}</span>
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          </div>
                          <p className="text-xs text-muted-foreground truncate">
                            {conn?.metadata?.email || conn?.metadata?.team_name || conn?.metadata?.workspace_name || conn?.metadata?.login || 'Conectado'}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={() => handleDisconnect(p.id)}>
                            <Unlink className="w-3.5 h-3.5 text-red-500" />
                          </Button>
                        </div>
                      </div>
                      {actions.length > 0 && (
                        <div className="flex gap-1.5 flex-wrap">
                          {actions.map(a => {
                            const AIcon = a.icon;
                            return (
                              <Button key={a.action} variant="outline" size="sm" className="h-7 text-xs"
                                onClick={() => handleTest(p.id, a.action)}
                                disabled={testing === p.id}>
                                {testing === p.id ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <AIcon className="w-3 h-3 mr-1" />}
                                {a.label}
                              </Button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {testResult && (
                  <div className={`rounded-xl border p-4 ${testResult.ok ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {testResult.ok ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                      <span className="text-sm font-medium">{testResult.ok ? 'Conexão OK' : 'Falha na Conexão'}</span>
                    </div>
                    {testResult.data && (
                      <pre className="text-xs text-muted-foreground overflow-auto max-h-48 mt-2 bg-background/50 rounded-lg p-2">
                        {JSON.stringify(testResult.data, null, 2)}
                      </pre>
                    )}
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Buscar conexões..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
            </div>
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
              {categories.map(c => (
                <button key={c} onClick={() => setCatFilter(c)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${catFilter === c ? 'bg-foreground text-background' : 'bg-muted text-muted-foreground hover:text-foreground'}`}>
                  {c}
                </button>
              ))}
            </div>
            <div className="space-y-2">
              {filteredProviders.map(p => {
                const connected = isConnected(p.id);
                const Icon = p.icon;
                return (
                  <div key={p.id} className="bg-card rounded-xl border border-border p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">{p.name}</span>
                          {connected && <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
                          {p.popular && <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{p.description}</p>
                      </div>
                      {connected ? (
                        <div className="flex gap-1">
                          <Button variant="outline" size="sm" className="h-7 text-xs" onClick={() => handleTest(p.id)}>
                            {testing === p.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <TestTube2 className="w-3 h-3" />}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 text-xs text-red-500" onClick={() => handleDisconnect(p.id)}>
                            <Unlink className="w-3 h-3" />
                          </Button>
                        </div>
                      ) : (
                        <Button variant="default" size="sm" className="h-7 text-xs shrink-0" onClick={() => handleConnect(p)}>
                          <Link2 className="w-3 h-3 mr-1" /> Conectar
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}