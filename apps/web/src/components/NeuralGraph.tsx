'use client';

import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Loader2, Brain, RefreshCw } from 'lucide-react';
import { useAuth } from '../lib/auth';

interface GraphNode {
  id: string;
  label: string;
  kind: 'session' | 'memory' | 'skill' | 'project';
  color: string;
  size: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GraphEdge {
  source: string;
  target: string;
}

const KIND_COLORS: Record<string, string> = {
  session: '#7dd3fc',
  memory: '#e879f9',
  skill: '#34d399',
  project: '#fbbf24',
};

const KIND_LABELS: Record<string, string> = {
  session: 'Conversas',
  memory: 'Memórias',
  skill: 'Skills',
  project: 'Projetos',
};

function forceLayout(nodes: GraphNode[], edges: GraphEdge[], w: number, h: number): GraphNode[] {
  const ns = nodes.map((n) => ({ ...n }));
  const cx = w / 2, cy = h / 2;

  for (let iter = 0; iter < 200; iter++) {
    const alpha = 0.3 * (1 - iter / 200);

    // Edge spring force
    for (const e of edges) {
      const s = ns.find((n) => n.id === e.source);
      const t = ns.find((n) => n.id === e.target);
      if (!s || !t) continue;
      const dx = t.x - s.x, dy = t.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const ideal = 140;
      const f = (dist - ideal) * 0.004 * alpha;
      s.vx += (dx / dist) * f;
      s.vy += (dy / dist) * f;
      t.vx -= (dx / dist) * f;
      t.vy -= (dy / dist) * f;
    }

    // Node repulsion
    for (let i = 0; i < ns.length; i++) {
      for (let j = i + 1; j < ns.length; j++) {
        const a = ns[i], b = ns[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 100) {
          const f = (100 - dist) * 0.015 * alpha;
          a.vx -= (dx / dist) * f;
          a.vy -= (dy / dist) * f;
          b.vx += (dx / dist) * f;
          b.vy += (dy / dist) * f;
        }
      }
    }

    // Center gravity
    for (const n of ns) {
      n.vx += (cx - n.x) * 0.0008 * alpha;
      n.vy += (cy - n.y) * 0.0008 * alpha;
      n.x += n.vx;
      n.y += n.vy;
      n.vx *= 0.88;
      n.vy *= 0.88;
      n.x = Math.max(40, Math.min(w - 40, n.x));
      n.y = Math.max(40, Math.min(h - 40, n.y));
    }
  }
  return ns;
}

export function NeuralGraph() {
  const { user, getAccessToken } = useAuth();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const animRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ w: 600, h: 400 });

  const fetchData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const token = await getAccessToken();
      const auth = token ? { Authorization: `Bearer ${token}` } : {};
      const [sk, mem, proj] = await Promise.all([
        fetch(`/api/skills?userId=${user.id}`, { headers: auth }).then((r) => r.json()),
        fetch(`/api/memories?userId=${user.id}`, { headers: auth }).then((r) => r.json()),
        fetch(`/api/projects?userId=${user.id}`, { headers: auth }).then((r) => r.json()),
      ]);
      const skills = Array.isArray(sk) ? sk : [];
      const memories = Array.isArray(mem) ? mem : [];
      const projects = Array.isArray(proj) ? proj : [];

      const gNodes: GraphNode[] = [];
      const gEdges: GraphEdge[] = [];

      projects.forEach((p: any) => {
        gNodes.push({ id: `p-${p.id}`, label: p.name, kind: 'project', color: KIND_COLORS.project, size: 10, x: 0, y: 0, vx: 0, vy: 0 });
      });

      skills.forEach((s: any) => {
        gNodes.push({ id: `s-${s.id}`, label: s.name, kind: 'skill', color: KIND_COLORS.skill, size: 7, x: 0, y: 0, vx: 0, vy: 0 });
        if (projects[0]) gEdges.push({ source: `s-${s.id}`, target: `p-${projects[0].id}` });
      });

      memories.forEach((m: any, i: number) => {
        if (i < 30) {
          gNodes.push({ id: `m-${m.id}`, label: m.title ?? m.content?.slice(0, 25) ?? 'Memória', kind: 'memory', color: KIND_COLORS.memory, size: 5, x: 0, y: 0, vx: 0, vy: 0 });
          if (m.kind === 'skill_ref' && m.metadata?.skillId) gEdges.push({ source: `m-${m.id}`, target: `s-${m.metadata.skillId}` });
          if (m.kind === 'project_ref' && m.metadata?.projectId) gEdges.push({ source: `m-${m.id}`, target: `p-${m.metadata.projectId}` });
        }
      });

      setNodes(gNodes);
      setEdges(gEdges);
    } catch { /* ignore */ }
    setLoading(false);
  }, [user, getAccessToken]);

  useEffect(() => { void fetchData(); }, [fetchData]);

  // Responsive sizing
  useEffect(() => {
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = Math.floor(e.contentRect.width);
        if (w > 0) setDimensions({ w, h: Math.max(300, Math.min(500, w * 0.6)) });
      }
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const layoutNodes = useMemo(() => {
    if (!nodes.length) return [];
    return forceLayout(nodes, edges, dimensions.w, dimensions.h);
  }, [nodes, edges, dimensions]);

  // Canvas rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !layoutNodes.length) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.w * dpr;
    canvas.height = dimensions.h * dpr;
    ctx.scale(dpr, dpr);

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);

      // Draw edges with gradient
      for (const e of edges) {
        const s = layoutNodes.find((n) => n.id === e.source);
        const t = layoutNodes.find((n) => n.id === e.target);
        if (!s || !t) continue;
        const grad = ctx.createLinearGradient(s.x, s.y, t.x, t.y);
        grad.addColorStop(0, s.color + '40');
        grad.addColorStop(1, t.color + '40');
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Draw nodes
      for (const n of layoutNodes) {
        const isHovered = hoveredId === n.id;
        const isSelected = selected?.id === n.id;
        const pulse = Math.sin(frame * 0.03 + layoutNodes.indexOf(n) * 0.5) * 1.5;
        const baseR = n.size;
        const r = baseR + pulse + (isHovered ? 2 : 0);

        // Outer glow
        if (n.kind === 'project' || isHovered) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 8, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(n.x, n.y, r, n.x, n.y, r + 8);
          glow.addColorStop(0, n.color + '30');
          glow.addColorStop(1, n.color + '00');
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Node body
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, 0, n.x, n.y, r);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, n.color + 'aa');
        ctx.fillStyle = grad;
        ctx.fill();

        // Selection ring
        if (isSelected) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
          ctx.strokeStyle = '#ffffff80';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Label
        const label = n.label.length > 18 ? n.label.slice(0, 16) + '…' : n.label;
        ctx.fillStyle = isHovered || isSelected ? '#ffffff' : '#ffffffaa';
        ctx.font = `${isHovered ? '11' : '10'}px system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText(label, n.x, n.y + r + 14);
      }

      frame++;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [layoutNodes, edges, hoveredId, selected, dimensions]);

  const hitTest = useCallback((x: number, y: number) => {
    return layoutNodes.find((n) => {
      const dx = n.x - x, dy = n.y - y;
      return Math.sqrt(dx * dx + dy * dy) < n.size + 8;
    }) ?? null;
  }, [layoutNodes]);

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    setHoveredId(hit?.id ?? null);
  };

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    setSelected(hit);
  };

  return (
    <div ref={containerRef} className="flex flex-col h-full">
      <div className="px-4 pt-4 pb-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7dd3fc] to-[#e879f9] flex items-center justify-center">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Rede Neural</h3>
            <p className="text-[10px] text-muted-foreground">Memória visual do sistema</p>
          </div>
        </div>
        <button onClick={() => void fetchData()} className="h-7 w-7 grid place-items-center rounded-lg hover:bg-muted transition" disabled={loading}>
          <RefreshCw className={`h-3.5 w-3.5 text-muted-foreground ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="flex-1 relative p-2">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 rounded-lg">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={dimensions.w}
          height={dimensions.h}
          className="w-full rounded-lg cursor-crosshair"
          style={{ height: dimensions.h }}
          onClick={onClick}
          onMouseMove={onMove}
          onMouseLeave={() => { setHoveredId(null); }}
        />
      </div>

      <div className="px-4 pb-3 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
        {Object.entries(KIND_COLORS).map(([kind, color]) => (
          <span key={kind} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {KIND_LABELS[kind]}
          </span>
        ))}
      </div>

      {selected && (
        <div className="mx-4 mb-4 rounded-xl border border-border bg-card p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: selected.color + '20' }}>
              <span className="h-4 w-4 rounded-full" style={{ backgroundColor: selected.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">{selected.label}</div>
              <div className="text-[11px] text-muted-foreground capitalize">{KIND_LABELS[selected.kind]}</div>
            </div>
            <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground text-xs">✕</button>
          </div>
          <div className="flex gap-4 text-[11px] text-muted-foreground">
            <span>Conexões: {edges.filter((e) => e.source === selected.id || e.target === selected.id).length}</span>
            <span>Tamanho: {selected.size}px</span>
          </div>
          {edges.filter((e) => e.source === selected.id || e.target === selected.id).length > 0 && (
            <div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Vinculados</div>
              <div className="flex flex-wrap gap-1.5">
                {edges.filter((e) => e.source === selected.id || e.target === selected.id).map((e, i) => {
                  const linkedId = e.source === selected.id ? e.target : e.source;
                  const linked = layoutNodes.find((n) => n.id === linkedId);
                  if (!linked) return null;
                  return (
                    <button key={i} onClick={() => setSelected(linked)}
                      className="inline-flex items-center gap-1.5 rounded-md bg-muted/50 px-2 py-1 text-[10px] hover:bg-muted transition">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: linked.color }} />
                      {linked.label.length > 20 ? linked.label.slice(0, 18) + '…' : linked.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}