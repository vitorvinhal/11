"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import {
  Brain,
  RefreshCw,
  Search,
  X,
  Zap,
  Database,
  Code,
  Layers,
  MessageCircle,
} from "lucide-react";
import { useAuth } from "../lib/auth";

const OLED_BG = "#05050A";
const CYAN = "#00e5ff";
const MAGENTA = "#e040fb";
const VIOLET = "#b388ff";
const WHITE_DIM = "#ffffffaa";
const WHITE_BRIGHT = "#ffffff";
const FONT = "JetBrains Mono, ui-monospace, SFMono-Regular, monospace";

interface GraphNode {
  id: string;
  label: string;
  kind: "core" | "memory" | "skill" | "project" | "code" | "session";
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulsePhase: number;
  opacity: number;
  targetX: number;
  targetY: number;
  cluster: number;
}

interface GraphEdge {
  source: string;
  target: string;
  strength: number;
  pulseOffset: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const KIND_CONFIG: Record<
  string,
  { color: string; label: string; icon: typeof Brain; cluster: number }
> = {
  core: { color: CYAN, label: "Nucleo", icon: Zap, cluster: 0 },
  memory: { color: CYAN, label: "Memoria", icon: Database, cluster: 1 },
  skill: { color: MAGENTA, label: "Skill", icon: Layers, cluster: 2 },
  project: { color: VIOLET, label: "Projeto", icon: Code, cluster: 3 },
  code: { color: "#69f0ae", label: "Codigo", icon: Code, cluster: 4 },
  session: {
    color: "#80d8ff",
    label: "Conversa",
    icon: MessageCircle,
    cluster: 5,
  },
};

function simulatePhysics(
  nodes: GraphNode[],
  edges: GraphEdge[],
  w: number,
  h: number,
  iterations: number,
): GraphNode[] {
  const ns = nodes.map((n) => ({ ...n }));
  const cx = w / 2,
    cy = h / 2;
  const clusterRadius = Math.min(w, h) * 0.28;
  const clusterCenters: Record<number, { x: number; y: number }> = {};
  for (let i = 1; i <= 5; i++) {
    const angle = (i - 1) * ((Math.PI * 2) / 5) - Math.PI / 2;
    clusterCenters[i] = {
      x: cx + Math.cos(angle) * clusterRadius,
      y: cy + Math.sin(angle) * clusterRadius,
    };
  }
  clusterCenters[0] = { x: cx, y: cy };

  for (let iter = 0; iter < iterations; iter++) {
    const alpha = 0.4 * (1 - iter / iterations);
    for (const e of edges) {
      const s = ns.find((n) => n.id === e.source);
      const t = ns.find((n) => n.id === e.target);
      if (!s || !t) continue;
      const dx = t.x - s.x,
        dy = t.y - s.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const ideal = 80 + e.strength * 40;
      const f = (dist - ideal) * 0.006 * alpha * e.strength;
      s.vx += (dx / dist) * f;
      s.vy += (dy / dist) * f;
      t.vx -= (dx / dist) * f;
      t.vy -= (dy / dist) * f;
    }
    for (const n of ns) {
      if (n.kind === "core") continue;
      const cc = clusterCenters[n.cluster] ?? clusterCenters[0];
      const dx = cc.x - n.x,
        dy = cc.y - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const f = dist * 0.002 * alpha;
      n.vx += (dx / dist) * f;
      n.vy += (dy / dist) * f;
    }
    for (let i = 0; i < ns.length; i++) {
      for (let j = i + 1; j < ns.length; j++) {
        const a = ns[i],
          b = ns[j];
        const dx = b.x - a.x,
          dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const minDist = (a.radius + b.radius) * 2.5;
        if (dist < minDist) {
          const f = (minDist - dist) * 0.02 * alpha;
          a.vx -= (dx / dist) * f;
          a.vy -= (dy / dist) * f;
          b.vx += (dx / dist) * f;
          b.vy += (dy / dist) * f;
        }
      }
    }
    for (const n of ns) {
      if (n.kind === "core") {
        n.vx += (cx - n.x) * 0.05;
        n.vy += (cy - n.y) * 0.05;
      } else {
        n.vx += (cx - n.x) * 0.0003 * alpha;
        n.vy += (cy - n.y) * 0.0003 * alpha;
      }
      n.x += n.vx;
      n.y += n.vy;
      n.vx *= 0.85;
      n.vy *= 0.85;
      n.x = Math.max(30, Math.min(w - 30, n.x));
      n.y = Math.max(30, Math.min(h - 30, n.y));
    }
  }
  return ns;
}

function hexAlpha(hex: string, alpha: number): string {
  const a = Math.max(0, Math.min(255, Math.floor(alpha * 255)));
  return hex + a.toString(16).padStart(2, "0");
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
  const [searchQuery, setSearchQuery] = useState("");
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const frameRef = useRef(0);

  const fetchData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const token = await getAccessToken();
      const auth = token ? { Authorization: `Bearer ${token}` } : {};
      const [skResult, memResult, projResult] = await Promise.allSettled([
        fetch(`/api/skills?userId=${user.id}`, { headers: auth }).then((r) =>
          r.json(),
        ),
        fetch(`/api/memories?userId=${user.id}`, { headers: auth }).then((r) =>
          r.json(),
        ),
        fetch(`/api/projects?userId=${user.id}`, { headers: auth }).then((r) =>
          r.json(),
        ),
      ]);
      const sk =
        skResult.status === "fulfilled" ? skResult.value : { skills: [] };
      const mem = memResult.status === "fulfilled" ? memResult.value : [];
      const proj = projResult.status === "fulfilled" ? projResult.value : [];
      const skills = sk?.skills ?? (Array.isArray(sk) ? sk : []);
      const memories = Array.isArray(mem) ? mem : [];
      const projects = Array.isArray(proj) ? proj : [];
      const gNodes: GraphNode[] = [];
      const gEdges: GraphEdge[] = [];

      gNodes.push({
        id: "core-11",
        label: "11",
        kind: "core",
        x: dimensions.w / 2,
        y: dimensions.h / 2,
        vx: 0,
        vy: 0,
        radius: 22,
        baseRadius: 22,
        pulsePhase: 0,
        opacity: 1,
        targetX: dimensions.w / 2,
        targetY: dimensions.h / 2,
        cluster: 0,
      });

      projects.forEach((p: any, i: number) => {
        const id = `p-${p.id}`;
        gNodes.push({
          id,
          label: p.name,
          kind: "project",
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 10,
          baseRadius: 10,
          pulsePhase: i * 0.7,
          opacity: 1,
          targetX: 0,
          targetY: 0,
          cluster: 3,
        });
        gEdges.push({
          source: id,
          target: "core-11",
          strength: 1,
          pulseOffset: i * 0.3,
        });
      });

      skills.forEach((s: any, i: number) => {
        const id = `s-${s.id}`;
        gNodes.push({
          id,
          label: s.name,
          kind: "skill",
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          radius: 7,
          baseRadius: 7,
          pulsePhase: i * 0.5,
          opacity: 1,
          targetX: 0,
          targetY: 0,
          cluster: 2,
        });
        gEdges.push({
          source: id,
          target: "core-11",
          strength: 0.7,
          pulseOffset: i * 0.4,
        });
        if (projects[0])
          gEdges.push({
            source: id,
            target: `p-${projects[0].id}`,
            strength: 0.4,
            pulseOffset: i * 0.2,
          });
      });

      memories.forEach((m: any, i: number) => {
        if (i < 40) {
          const id = `m-${m.id}`;
          gNodes.push({
            id,
            label: m.title ?? m.content?.slice(0, 20) ?? "Memoria",
            kind: "memory",
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            radius: 4,
            baseRadius: 4,
            pulsePhase: i * 0.3,
            opacity: 1,
            targetX: 0,
            targetY: 0,
            cluster: 1,
          });
          gEdges.push({
            source: id,
            target: "core-11",
            strength: 0.3,
            pulseOffset: i * 0.15,
          });
        }
      });

      setNodes(gNodes);
      setEdges(gEdges);
    } catch (err) {
      console.error("[NeuralGraph] fetchData error:", err);
    }
    setLoading(false);
  }, [user, getAccessToken, dimensions.w, dimensions.h]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  useEffect(() => {
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        const w = Math.floor(e.contentRect.width);
        const h = Math.floor(e.contentRect.height);
        if (w > 0 && h > 0) setDimensions({ w, h });
      }
    });
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  const layoutNodes = useMemo(() => {
    if (!nodes.length) return [];
    return simulatePhysics(nodes, edges, dimensions.w, dimensions.h, 250);
  }, [nodes, edges, dimensions]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !layoutNodes.length) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.w * dpr;
    canvas.height = dimensions.h * dpr;
    ctx.scale(dpr, dpr);

    if (particlesRef.current.length === 0) {
      for (let i = 0; i < 60; i++) {
        particlesRef.current.push({
          x: Math.random() * dimensions.w,
          y: Math.random() * dimensions.h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          life: Math.random() * 200,
          maxLife: 200 + Math.random() * 200,
          color: [CYAN, MAGENTA, VIOLET][Math.floor(Math.random() * 3)],
          size: 0.5 + Math.random() * 1.5,
        });
      }
    }

    const draw = () => {
      const frame = frameRef.current;
      const w = dimensions.w,
        h = dimensions.h;

      ctx.fillStyle = OLED_BG;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "#ffffff06";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        if (p.life > p.maxLife) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.life = 0;
        }
        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = hexAlpha(p.color, alpha);
        ctx.fill();
      }

      for (const e of edges) {
        const s = layoutNodes.find((n) => n.id === e.source);
        const t = layoutNodes.find((n) => n.id === e.target);
        if (!s || !t) continue;
        const edgeColor =
          s.kind === "core"
            ? KIND_CONFIG[t.kind].color
            : KIND_CONFIG[s.kind].color;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        const grad = ctx.createLinearGradient(s.x, s.y, t.x, t.y);
        grad.addColorStop(0, hexAlpha(edgeColor, 0.35));
        grad.addColorStop(0.5, hexAlpha(edgeColor, 0.2));
        grad.addColorStop(1, hexAlpha(edgeColor, 0.35));
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(t.x, t.y);
        ctx.strokeStyle = hexAlpha(edgeColor, 0.08);
        ctx.lineWidth = 5;
        ctx.stroke();

        const pulsePos = (frame * 0.008 + e.pulseOffset) % 1;
        const px = s.x + (t.x - s.x) * pulsePos;
        const py = s.y + (t.y - s.y) * pulsePos;
        const pulseGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        pulseGrad.addColorStop(0, hexAlpha(edgeColor, 0.8));
        pulseGrad.addColorStop(0.5, hexAlpha(edgeColor, 0.25));
        pulseGrad.addColorStop(1, hexAlpha(edgeColor, 0));
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fillStyle = pulseGrad;
        ctx.fill();
      }

      for (const n of layoutNodes) {
        const conf = KIND_CONFIG[n.kind];
        const isHovered = hoveredId === n.id;
        const isSelected = selected?.id === n.id;
        const isCore = n.kind === "core";
        const pulse =
          Math.sin(frame * 0.025 + n.pulsePhase) * (isCore ? 3 : 1.5);
        const r = n.baseRadius + pulse + (isHovered ? 3 : 0);
        const matchesSearch =
          !searchQuery ||
          n.label.toLowerCase().includes(searchQuery.toLowerCase());
        const dim = matchesSearch ? 1 : 0.15;

        if (isCore) {
          const fieldR = r + 30 + Math.sin(frame * 0.015) * 10;
          const fieldGrad = ctx.createRadialGradient(
            n.x,
            n.y,
            r,
            n.x,
            n.y,
            fieldR,
          );
          fieldGrad.addColorStop(0, hexAlpha(CYAN, 0.09));
          fieldGrad.addColorStop(0.5, hexAlpha(MAGENTA, 0.04));
          fieldGrad.addColorStop(1, hexAlpha(CYAN, 0));
          ctx.beginPath();
          ctx.arc(n.x, n.y, fieldR, 0, Math.PI * 2);
          ctx.fillStyle = fieldGrad;
          ctx.fill();

          for (let ring = 0; ring < 3; ring++) {
            const ringR = r + 12 + ring * 8;
            const rot = frame * 0.008 * (ring % 2 === 0 ? 1 : -1);
            ctx.beginPath();
            ctx.arc(n.x, n.y, ringR, rot, rot + Math.PI * 1.5);
            ctx.strokeStyle = hexAlpha(ring % 2 === 0 ? CYAN : MAGENTA, 0.19);
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }

        const glowR = r + (isCore ? 20 : 10);
        const glowGrad = ctx.createRadialGradient(
          n.x,
          n.y,
          r * 0.5,
          n.x,
          n.y,
          glowR,
        );
        glowGrad.addColorStop(0, hexAlpha(conf.color, 0.16 * dim));
        glowGrad.addColorStop(1, hexAlpha(conf.color, 0));
        ctx.beginPath();
        ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        const bodyGrad = ctx.createRadialGradient(
          n.x - r * 0.3,
          n.y - r * 0.3,
          0,
          n.x,
          n.y,
          r,
        );
        bodyGrad.addColorStop(0, hexAlpha(conf.color, 0.86 * dim));
        bodyGrad.addColorStop(0.7, hexAlpha(conf.color, 0.55 * dim));
        bodyGrad.addColorStop(1, hexAlpha(conf.color, 0.31 * dim));
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = bodyGrad;
        ctx.fill();

        const hlGrad = ctx.createRadialGradient(
          n.x - r * 0.2,
          n.y - r * 0.4,
          0,
          n.x,
          n.y,
          r,
        );
        hlGrad.addColorStop(0, hexAlpha("#ffffff", 0.12 * dim));
        hlGrad.addColorStop(1, hexAlpha("#ffffff", 0));
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = hlGrad;
        ctx.fill();

        if (isSelected) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = hexAlpha(WHITE_BRIGHT, 0.38);
          ctx.lineWidth = 2;
          ctx.setLineDash([4, 4]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
        if (isHovered && !isSelected) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 3, 0, Math.PI * 2);
          ctx.strokeStyle = hexAlpha(conf.color, 0.31);
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        if (r > 5 || isHovered || isSelected || isCore) {
          const label =
            n.label.length > 16 ? n.label.slice(0, 14) + "..." : n.label;
          ctx.fillStyle = isCore
            ? WHITE_BRIGHT
            : isHovered || isSelected
              ? WHITE_BRIGHT
              : WHITE_DIM;
          ctx.font = `${isCore ? "bold 13px" : isHovered ? "11px" : "10px"} ${FONT}`;
          ctx.textAlign = "center";
          ctx.fillText(label, n.x, n.y + r + 14);
        }
      }

      frameRef.current++;
      animRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, [layoutNodes, edges, hoveredId, selected, dimensions, searchQuery]);

  const hitTest = useCallback(
    (x: number, y: number) => {
      const core = layoutNodes.find((n) => n.kind === "core");
      if (core) {
        const dx = core.x - x,
          dy = core.y - y;
        if (Math.sqrt(dx * dx + dy * dy) < core.radius + 15) return core;
      }
      return (
        layoutNodes.find((n) => {
          if (n.kind === "core") return false;
          const dx = n.x - x,
            dy = n.y - y;
          return Math.sqrt(dx * dx + dy * dy) < n.radius + 10;
        }) ?? null
      );
    },
    [layoutNodes],
  );

  const onMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    setHoveredId(hit?.id ?? null);
    if (canvasRef.current)
      canvasRef.current.style.cursor = hit ? "pointer" : "crosshair";
  };

  const onClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const hit = hitTest(e.clientX - rect.left, e.clientY - rect.top);
    setSelected(hit);
  };

  const stats = useMemo(() => {
    const byKind: Record<string, number> = {};
    for (const n of layoutNodes) {
      if (n.kind !== "core") byKind[n.kind] = (byKind[n.kind] || 0) + 1;
    }
    return byKind;
  }, [layoutNodes]);

  const connectedNodes = useMemo(() => {
    if (!selected) return [];
    return edges
      .filter((e) => e.source === selected.id || e.target === selected.id)
      .map((e) => (e.source === selected.id ? e.target : e.source))
      .map((id) => layoutNodes.find((n) => n.id === id))
      .filter(Boolean) as GraphNode[];
  }, [selected, edges, layoutNodes]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-full"
      style={{ background: OLED_BG }}
    >
      {/* HUD Header */}
      <div
        className="px-4 pt-4 pb-3 border-b flex items-center justify-between"
        style={{ borderColor: "#ffffff10" }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="h-8 w-8 rounded-lg flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #00e5ff20, #e040fb20)",
            }}
          >
            <Brain className="h-4 w-4" style={{ color: CYAN }} />
          </div>
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: WHITE_BRIGHT, fontFamily: FONT }}
            >
              Rede Neural
            </h3>
            <p
              className="text-[10px]"
              style={{ color: "#8f8f8f", fontFamily: FONT }}
            >
              Memoria visual do sistema
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search
              className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3"
              style={{ color: "#8f8f8f" }}
            />
            <input
              type="text"
              placeholder="Filtrar nos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-7 pl-7 pr-7 rounded-lg text-xs border-0 outline-none"
              style={{
                background: "#ffffff08",
                color: WHITE_BRIGHT,
                fontFamily: FONT,
                width: 160,
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2"
                style={{ color: "#8f8f8f" }}
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
          <button
            onClick={() => void fetchData()}
            className="h-7 w-7 grid place-items-center rounded-lg transition"
            style={{ background: "#ffffff08" }}
            disabled={loading}
          >
            <RefreshCw
              className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`}
              style={{ color: "#8f8f8f" }}
            />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        {loading && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ background: OLED_BG + "cc" }}
          >
            <div className="flex flex-col items-center gap-3">
              <div
                className="h-10 w-10 rounded-full border-2 animate-spin"
                style={{ borderColor: CYAN, borderTopColor: "transparent" }}
              />
              <span
                className="text-xs"
                style={{ color: "#8f8f8f", fontFamily: FONT }}
              >
                Mapeando neurons...
              </span>
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          width={dimensions.w}
          height={dimensions.h}
          className="w-full h-full"
          style={{ cursor: "crosshair" }}
          onClick={onClick}
          onMouseMove={onMove}
          onMouseLeave={() => setHoveredId(null)}
        />
      </div>

      {/* HUD Bottom Bar */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderTop: "1px solid #ffffff10" }}
      >
        <div
          className="flex flex-wrap gap-3 text-[10px]"
          style={{ fontFamily: FONT }}
        >
          {Object.entries(KIND_CONFIG)
            .filter(([k]) => k !== "core")
            .map(([kind, conf]) => (
              <span
                key={kind}
                className="flex items-center gap-1.5"
                style={{ color: conf.color + "cc" }}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: conf.color,
                    boxShadow: `0 0 6px ${conf.color}40`,
                  }}
                />
                {conf.label} {stats[kind] ? `(${stats[kind]})` : ""}
              </span>
            ))}
        </div>
        <div
          className="text-[10px]"
          style={{ color: "#8f8f8f", fontFamily: FONT }}
        >
          {layoutNodes.length - 1} nos | {edges.length} conexoes
        </div>
      </div>

      {/* Selected Node Detail Panel */}
      {selected && (
        <div
          className="mx-4 mb-4 rounded-xl p-4 space-y-3"
          style={{
            background: "#ffffff08",
            border: "1px solid #ffffff10",
            backdropFilter: "blur(20px)",
            fontFamily: FONT,
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center"
              style={{
                background: hexAlpha(KIND_CONFIG[selected.kind].color, 0.12),
              }}
            >
              {(() => {
                const Icon = KIND_CONFIG[selected.kind].icon;
                return (
                  <Icon
                    className="h-5 w-5"
                    style={{ color: KIND_CONFIG[selected.kind].color }}
                  />
                );
              })()}
            </div>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-semibold truncate"
                style={{ color: WHITE_BRIGHT }}
              >
                {selected.label}
              </div>
              <div
                className="text-[11px] capitalize"
                style={{ color: "#8f8f8f" }}
              >
                {KIND_CONFIG[selected.kind].label}
              </div>
            </div>
            <button
              onClick={() => setSelected(null)}
              style={{ color: "#8f8f8f" }}
              className="hover:text-white text-xs"
            >
              X
            </button>
          </div>
          <div className="flex gap-4 text-[11px]" style={{ color: "#8f8f8f" }}>
            <span>Conexoes: {connectedNodes.length}</span>
            <span>Tamanho: {selected.baseRadius}px</span>
            <span>Cluster: {selected.cluster}</span>
          </div>
          {connectedNodes.length > 0 && (
            <div>
              <div
                className="text-[10px] uppercase tracking-wider mb-1.5"
                style={{ color: "#8f8f8f" }}
              >
                Vinculados
              </div>
              <div className="flex flex-wrap gap-1.5">
                {connectedNodes.map((linked) => (
                  <button
                    key={linked.id}
                    onClick={() => setSelected(linked)}
                    className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[10px] transition"
                    style={{
                      background: "#ffffff08",
                      color: KIND_CONFIG[linked.kind].color,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: KIND_CONFIG[linked.kind].color,
                      }}
                    />
                    {linked.label.length > 20
                      ? linked.label.slice(0, 18) + "..."
                      : linked.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
