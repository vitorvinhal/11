'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  WebGLRenderer, Points, BufferGeometry, Float32BufferAttribute, Color, AdditiveBlending,
  ShaderMaterial, Group, CanvasTexture,
} from 'three';

/* ══════════════════════════════════════════════════════
   Spiral Galaxy — inspiração GPT‑Astra
   Animação suave contínua, sem interação por enquanto.
   Braços pronunciados, glow central, estrelas twinkle.
   ══════════════════════════════════════════════════════ */

const ARM_COUNT = 24_000;
const CLUSTER_COUNT = 4_000;
const BULGE_COUNT = 6_000;
const DUST_COUNT = 5_000;
const BG_COUNT = 700;
const ARMS = 2;
const GALAXY_R = 3.7;
const BULGE_R = 0.42;
const ARM_SPREAD = 0.28;
const ARM_WIND = 2.1;
const INCLINATION = 0.42;
const ROT_SPEED = 0.01;
const DPR: [number, number] = typeof navigator !== 'undefined' && 'standalone' in navigator ? [1, 1.5] : [1, 2];

/* ── Shaders com twinkle individual ─────────────────── */
const StarVert = `
  attribute float size;
  attribute float aPhase;
  attribute float aSpeed;
  varying float vPhase;
  varying float vSpeed;
  uniform float uTime;
  void main(){
    vPhase = aPhase;
    vSpeed = aSpeed;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (200.0 / -mv.z) * (0.92 + 0.16 * sin(uTime * aSpeed + aPhase));
    gl_Position = projectionMatrix * mv;
  }
`;

const StarFrag = `
  uniform float uTime;
  varying float vPhase;
  varying float vSpeed;
  void main(){
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float tw = 0.72 + 0.28 * sin(uTime * (1.5 + vSpeed * 2.0) + vPhase * 6.2831);
    float core = exp(-d * d * 22.0);
    float halo = exp(-d * d * 4.5) * 0.22;
    float glow = (core + halo) * tw;
    float spi = 0.14 * pow(abs(sin(6.2831*c.y/0.5)) + abs(sin(6.2831*c.x/0.5)), 4.0) * (1.0 - d * 2.2);
    float a = clamp(glow + max(spi, 0.0), 0.0, 1.4);
    vec3 col = mix(vec3(1.0), vec3(0.62, 0.8, 1.0), vSpeed * 0.6);
    gl_FragColor = vec4(col, a);
  }
`;

function makeMat(): ShaderMaterial {
  return new ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: StarVert,
    fragmentShader: StarFrag,
    transparent: true, depthWrite: false, blending: AdditiveBlending,
  });
}

/* ── Utilitários ─────────────────────────────────────── */
function spiral(angle: number, r: number, arm: number): [number, number, number] {
  const theta = angle + ARM_WIND * r + arm * Math.PI;
  const spread = (Math.random() - 0.5) * ARM_SPREAD * Math.exp(-r * 0.8);
  return [
    Math.cos(theta) * (r + spread),
    (Math.random() - 0.5) * 0.06 * Math.exp(-r * 1.5),
    Math.sin(theta) * (r + spread),
  ];
}

function buf3(n: number, fn: (i: number) => [number, number, number]) {
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const v = fn(i); a[i*3]=v[0]; a[i*3+1]=v[1]; a[i*3+2]=v[2]; }
  return a;
}

function starColor(): Color {
  const r = Math.random();
  return r < 0.6 ? new Color(0xeaf2ff).lerp(new Color(0xffffff), Math.random())
    : r < 0.85 ? new Color(0x7fb8ff)
    : new Color(0xffb877).lerp(new Color(0xffd699), Math.random());
}

function makeGeo(
  len: number, pf: (i: number) => [number, number, number],
  cf: (i: number) => Color, szBase: number
): BufferGeometry {
  const pos = buf3(len, pf);
  const col = new Float32Array(len * 3);
  const sz = new Float32Array(len);
  const ph = new Float32Array(len);
  const sp = new Float32Array(len);
  for (let i = 0; i < len; i++) {
    const c = cf(i);
    col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
    const r = Math.random();
    sz[i] = szBase * (r < 0.06 ? 4 + Math.random() * 5 : r < 0.22 ? 2 + Math.random() * 2 : 0.7 + Math.random() * 1.2);
    ph[i] = Math.random();
    sp[i] = 0.5 + Math.random() * 2;
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new Float32BufferAttribute(col, 3));
  g.setAttribute('size', new Float32BufferAttribute(sz, 1));
  g.setAttribute('aPhase', new Float32BufferAttribute(ph, 1));
  g.setAttribute('aSpeed', new Float32BufferAttribute(sp, 1));
  return g;
}

/* ── Camadas ─────────────────────────────────────────── */
function Bulge() {
  const ref = useRef<Points>(null);
  const mat = useMemo(makeMat, []);
  const geo = useMemo(() => makeGeo(BULGE_COUNT,
    () => {
      const r = Math.pow(Math.random(), 2.8) * BULGE_R;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      return [r*Math.sin(ph)*Math.cos(th), r*Math.sin(ph)*Math.sin(th)*0.45, r*Math.cos(ph)];
    },
    () => new Color(0.93, 0.96, 1.0), 0.045
  ), []);
  useFrame(({ clock }) => {
    (mat.uniforms.uTime as any).value = clock.elapsedTime;
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.025;
  });
  return <points ref={ref} geometry={geo} material={mat} />;
}

function Arms() {
  const ref = useRef<Points>(null);
  const mat = useMemo(makeMat, []);
  const geo = useMemo(() => makeGeo(ARM_COUNT,
    (i) => spiral(Math.random() * Math.PI * 0.5, Math.pow(Math.random(), 0.42) * GALAXY_R, i % ARMS),
    () => starColor(), 0.05
  ), []);
  useFrame(({ clock }) => {
    (mat.uniforms.uTime as any).value = clock.elapsedTime;
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * ROT_SPEED;
  });
  return <points ref={ref} geometry={geo} material={mat} />;
}

function Clusters() {
  const ref = useRef<Points>(null);
  const mat = useMemo(makeMat, []);
  const geo = useMemo(() => makeGeo(CLUSTER_COUNT,
    (i) => {
      const arm = i % ARMS;
      const r = 0.5 + Math.pow(Math.random(), 0.5) * (GALAXY_R - 0.5);
      const [x, y, z] = spiral(Math.random() * Math.PI * 0.4, r, arm);
      return [x + (Math.random() - 0.5) * 0.12, y + (Math.random() - 0.5) * 0.03, z + (Math.random() - 0.5) * 0.12];
    },
    () => new Color(0xf0f8ff), 0.09
  ), []);
  useFrame(({ clock }) => {
    (mat.uniforms.uTime as any).value = clock.elapsedTime;
    if (ref.current) ref.current.rotation.z = clock.elapsedTime * ROT_SPEED;
  });
  return <points ref={ref} geometry={geo} material={mat} />;
}

function Dust() {
  const ref = useRef<Points>(null);
  const geo = useMemo(() => {
    const pos = buf3(DUST_COUNT, (i) => {
      const arm = i % ARMS;
      const r = Math.pow(Math.random(), 0.55) * GALAXY_R * 1.2;
      const [x, y, z] = spiral(Math.random() * Math.PI * 0.35, r, arm);
      return [x * 1.1, y * 0.5, z * 1.1];
    });
    const col = new Float32Array(DUST_COUNT * 3);
    for (let i = 0; i < DUST_COUNT; i++) {
      const v = 0.012 + Math.random() * 0.05;
      const c = new Color().setHSL(0.06, 0.15, v);
      col[i*3]=c.r; col[i*3+1]=c.g; col[i*3+2]=c.b;
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    g.setAttribute('color', new Float32BufferAttribute(col, 3));
    return g;
  }, []);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.z = clock.elapsedTime * 0.005; });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial vertexColors sizeAttenuation size={0.05} transparent opacity={0.16} depthWrite={false} />
    </points>
  );
}

function StaticStars() {
  const ref = useRef<Points>(null);
  const geo = useMemo(() => {
    const pos = buf3(BG_COUNT, () => {
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      const r = 16 + Math.random() * 28;
      return [r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th), r * Math.cos(ph)];
    });
    const g = new BufferGeometry();
    g.setAttribute('position', new Float32BufferAttribute(pos, 3));
    return g;
  }, []);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.003; });
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial color={0xaab6d0} size={0.012} sizeAttenuation transparent opacity={0.5} depthWrite={false} />
    </points>
  );
}

/* ── Núcleo galáctico (sprite glow) ────────────────── */
function CoreGlow() {
  const tex = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const ctx = c.getContext('2d')!;
    const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    g.addColorStop(0, 'rgba(255,255,255,0.95)');
    g.addColorStop(0.2, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.15)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 256, 256);
    return new CanvasTexture(c);
  }, []);
  return (
    <sprite scale={[1.0, 1.0, 1]}>
      <spriteMaterial map={tex} blending={AdditiveBlending} depthWrite={false} transparent />
    </sprite>
  );
}

/* ── Galáxia composta ────────────────────────────────── */
function Galaxy() {
  const g = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (g.current) {
      const t = clock.elapsedTime;
      g.current.rotation.y = t * 0.01 + Math.sin(t * 0.05) * 0.08;
      g.current.rotation.x = INCLINATION + Math.sin(t * 0.08) * 0.015;
    }
  });
  return (
    <group ref={g} rotation={[INCLINATION, 0, 0.1]}>
      <StaticStars />
      <CoreGlow />
      <Bulge />
      <Arms />
      <Clusters />
      <Dust />
    </group>
  );
}

/* ── Luzes ───────────────────────────────────────────── */
function Lights() {
  return (
    <>
      <pointLight position={[4, 4, 4]} intensity={0.8} color="#88ccff" />
      <pointLight position={[-4, -3, 3]} intensity={0.5} color="#ff55dd" />
    </>
  );
}

/* ══════════════════════════════════════════════════════
   Componente exportado — Galaxy animada sem interação
   ══════════════════════════════════════════════════════ */
export function AstroSphere() {
  const glRef = useRef<WebGLRenderer | null>(null);
  const [reconnecting, setReconnecting] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const onCreated = useCallback(({ gl }: { gl: WebGLRenderer }) => { glRef.current = gl; }, []);

  useEffect(() => {
    const canvas = glRef.current?.domElement;
    if (!canvas) return;
    const lost = (e: Event) => { e.preventDefault(); setReconnecting(true); };
    const restored = () => {
      // Re-cria geometrias/shaders/texturas → remontando o Canvas (key++)
      setReconnecting(false);
      setResetKey((k) => k + 1);
    };
    canvas.addEventListener('webglcontextlost', lost, false);
    canvas.addEventListener('webglcontextrestored', restored, false);
    return () => {
      canvas.removeEventListener('webglcontextlost', lost);
      canvas.removeEventListener('webglcontextrestored', restored);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        key={resetKey}
        camera={{ position: [0, 3.5, 6.2], fov: 48, near: 0.1, far: 200 }}
        dpr={DPR}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        onCreated={onCreated}
        style={{ background: '#000000' }}
      >
        <Lights />
        <Galaxy />
      </Canvas>
      {reconnecting && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 font-mono text-sm text-[#7dd3fc]">
          Reconectando ao WebGL…
        </div>
      )}
    </div>
  );
}