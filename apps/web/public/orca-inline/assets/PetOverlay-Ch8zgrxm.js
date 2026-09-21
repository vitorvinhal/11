import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { aa as BUNDLED_PET, ca as isBundledPetId, da as peekCustomPetBlobUrl, fa as readCustomPetBlobUrl, la as detectedSpriteCache, pa as retainCustomPetBlobCacheEntry, ru as isExplicitAgentStatusFresh, sa as findBundledPet, t as useAppStore, ua as loadCustomBlobUrl, vf as AGENT_STATUS_STALE_AFTER_MS } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { t as getAgentStatusEpochNow } from "./agent-status-epoch-clock-CNjEkuIm.js";
import { t as usePrefersReducedMotion } from "./usePrefersReducedMotion-fPzJ2Dl2.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
const CODEX_PET_FRAME = {
	width: 192,
	height: 208
};
function appStateDurations(e, w, T) {
	return Array.from({ length: e }, (E, D) => D === e - 1 ? T : w);
}
const CODEX_PET_ANIMATIONS = {
	idle: {
		row: 0,
		frames: 6,
		frameDurationsMs: [
			1680,
			660,
			660,
			840,
			840,
			1920
		]
	},
	"running-right": {
		row: 1,
		frames: 8,
		frameDurationsMs: appStateDurations(8, 120, 220)
	},
	"running-left": {
		row: 2,
		frames: 8,
		frameDurationsMs: appStateDurations(8, 120, 220)
	},
	waving: {
		row: 3,
		frames: 4,
		frameDurationsMs: appStateDurations(4, 140, 280)
	},
	jumping: {
		row: 4,
		frames: 5,
		frameDurationsMs: appStateDurations(5, 140, 280)
	},
	failed: {
		row: 5,
		frames: 8,
		frameDurationsMs: appStateDurations(8, 140, 240)
	},
	waiting: {
		row: 6,
		frames: 6,
		frameDurationsMs: appStateDurations(6, 150, 260)
	},
	running: {
		row: 7,
		frames: 6,
		frameDurationsMs: appStateDurations(6, 120, 220)
	},
	review: {
		row: 8,
		frames: 6,
		frameDurationsMs: appStateDurations(6, 150, 280)
	}
};
function isLegacyCodexSprite(e) {
	let w = e.animations;
	if (!w || e.fps !== 8 || e.frameWidth !== CODEX_PET_FRAME.width || e.frameHeight !== CODEX_PET_FRAME.height || e.columns !== 8 || e.defaultAnimation !== "idle") return !1;
	let T = Object.keys(w);
	return T.length === Object.keys(CODEX_PET_ANIMATIONS).length ? T.every((e) => {
		let T = w[e], E = CODEX_PET_ANIMATIONS[e];
		return !!E && !!T && T.row === E.row && T.frames === E.frames && T.frameDurationsMs === void 0;
	}) : !1;
}
function applyCodexSpriteTimingDefaults(e) {
	return isLegacyCodexSprite(e) ? {
		...e,
		animations: { ...CODEX_PET_ANIMATIONS }
	} : e;
}
function usePetUrl() {
	let e = useAppStore((e) => e.petId), w = useAppStore((e) => e.customPets), j = isBundledPetId(e), F = j ? null : w.find((w) => w.id === e), [I, L] = (0, import_react.useState)(() => F ? peekCustomPetBlobUrl(F.id) : null), R = (0, import_react.useRef)(null), z = F?.id ?? null, B = F?.fileName ?? null, V = F?.mimeType ?? "image/png", H = F?.kind ?? "image", W = F?.sprite?.fps ?? F?.spriteFps, G = !!F?.sprite && F.sprite.frameWidth > 0 && F.sprite.frameHeight > 0 && F.sprite.fps > 0;
	if ((0, import_react.useLayoutEffect)(() => {
		if (z) return retainCustomPetBlobCacheEntry(z);
	}, [z]), (0, import_react.useEffect)(() => {
		if (!z || !B) {
			L(null);
			return;
		}
		let e = readCustomPetBlobUrl(z);
		if (e) {
			L(e);
			return;
		}
		L(null), R.current = z;
		let w = !1;
		return loadCustomBlobUrl(z, B, V, H, W, G).then((e) => {
			w || R.current !== z || L(e);
		}), () => {
			w = !0;
		};
	}, [
		z,
		B,
		V,
		H,
		W,
		G
	]), j) return {
		url: (findBundledPet(e) ?? BUNDLED_PET).url,
		ready: !0,
		sprite: null,
		detected: null
	};
	if (F && I) {
		if (F.sprite && F.sprite.frameWidth > 0 && F.sprite.frameHeight > 0 && F.sprite.fps > 0) return {
			url: I,
			ready: !0,
			sprite: applyCodexSpriteTimingDefaults(F.sprite),
			detected: null
		};
		let e = detectedSpriteCache.get(F.id);
		return e ? {
			url: I,
			ready: !0,
			sprite: null,
			detected: e
		} : {
			url: I,
			ready: !0,
			sprite: null,
			detected: null
		};
	}
	return {
		url: BUNDLED_PET.url,
		ready: !1,
		sprite: null,
		detected: null
	};
}
function nextPetDragAnimation(e, w) {
	return w >= 4 ? {
		animation: "running-right",
		accepted: !0
	} : w <= -4 ? {
		animation: "running-left",
		accepted: !0
	} : {
		animation: e,
		accepted: !1
	};
}
function agentStateAnimation(e, w, T, E) {
	let D = !1, O = !1;
	for (let w of e) if (isExplicitAgentStatusFresh(w, T, E)) {
		if (w.state === "blocked" || w.state === "waiting") return "waiting";
		w.state === "working" && w.workingMode !== "monitoring" ? D = !0 : w.state === "done" && (O = !0);
	}
	return D ? "running" : O || w > 0 ? "review" : "idle";
}
function selectPetAnimationName({ entries: e, retainedCount: w, dragging: T, dragAnimation: E, hovering: D, now: O, staleAfterMs: k }) {
	let A = agentStateAnimation(e, w, O, k);
	return T ? E ?? A : D ? "jumping" : A;
}
function usePetPointerInteraction(e, w) {
	let [T, E] = (0, import_react.useState)(!1), [D, O] = (0, import_react.useState)(null), [k, A] = (0, import_react.useState)(!1), [j, M] = (0, import_react.useState)(0), N = (0, import_react.useRef)({
		x: 0,
		y: 0
	}), P = (0, import_react.useRef)(0), F = (0, import_react.useRef)(null), I = (0, import_react.useRef)(null), L = (w) => {
		w.button !== 0 || I.current !== null || (I.current = w.pointerId, N.current = {
			x: w.clientX - e.x,
			y: w.clientY - e.y
		}, P.current = w.clientX, F.current = null, w.currentTarget.setPointerCapture(w.pointerId), E(!0), O(null), M((e) => e + 1), w.preventDefault());
	}, R = (e) => {
		if (e.pointerId !== I.current) return;
		let T = nextPetDragAnimation(F.current, e.clientX - P.current);
		T.accepted && (P.current = e.clientX, T.animation !== F.current && (F.current = T.animation, O(T.animation))), w({
			x: e.clientX - N.current.x,
			y: e.clientY - N.current.y
		});
	}, z = (e) => {
		e.pointerId === I.current && (I.current = null, F.current = null, e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), E(!1), O(null));
	};
	return {
		dragging: T,
		dragAnimation: D,
		hovering: k,
		dragGeneration: j,
		handlers: {
			onPointerDown: L,
			onPointerMove: R,
			onPointerUp: z,
			onPointerCancel: z,
			onLostPointerCapture: z,
			onPointerEnter: () => A(!0),
			onPointerLeave: () => A(!1)
		}
	};
}
var MAX_FRAME_DURATION_MS = 6e4;
function buildSpriteAnimationCss({ keyframesId: e, frames: w, fps: T, frameWidth: E, scale: D, rowOffsetY: O, frameDurationsMs: k }) {
	let A = `pet-${e}`, j = validFrameDurations(k, w);
	if (j) {
		let e = j.reduce((e, w) => e + w, 0), w = stepEndStops(j, e, E, D, O);
		if (w) return {
			keyframesCss: `@keyframes ${A} { ${w.join(" ")} }`,
			animationCss: `${A} ${e / 1e3}s step-end infinite`
		};
	}
	let M = Math.max(.1, w / Math.max(.1, T));
	return {
		keyframesCss: `@keyframes ${A} { from { background-position: 0px ${O}px; } to { background-position: ${-(w * E * D)}px ${O}px; } }`,
		animationCss: `${A} ${M}s steps(${w}) infinite`
	};
}
function validFrameDurations(e, w) {
	return Array.isArray(e) && e.length === w && e.every((e) => Number.isFinite(e) && e > 0 && e <= MAX_FRAME_DURATION_MS) ? e : null;
}
function stepEndStops(e, w, T, E, D) {
	let O = [], k = 0, A = -1;
	for (let j = 0; j < e.length; j++) {
		let M = +(k / w * 100).toFixed(4);
		if (M <= A || M >= 100) return null;
		A = M;
		let N = -(j * T * E);
		O.push(`${M}% { background-position: ${N}px ${D}px; }`), k += e[j];
	}
	return O;
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function usePetAnimationName(e, w, T) {
	let E = useAppStore((e) => e.agentStatusByPaneKey), D = useAppStore((e) => e.agentStatusEpoch), O = useAppStore((e) => e.retainedAgentsByPaneKey), k = getAgentStatusEpochNow(D);
	return selectPetAnimationName({
		entries: Object.values(E),
		retainedCount: Object.keys(O).length,
		dragging: e,
		dragAnimation: w,
		hovering: T,
		now: k,
		staleAfterMs: AGENT_STATUS_STALE_AFTER_MS
	});
}
function SpriteFrame({ url: e, sprite: w, animate: T, maxSize: E, animationName: D, restartKey: O }) {
	let k = (0, import_react.useId)().replace(/[^a-zA-Z0-9_-]/g, ""), A = w.animations?.[D] || w.defaultAnimation && w.animations?.[w.defaultAnimation] || (w.animations ? Object.values(w.animations)[0] : void 0), j = A?.row ?? 0, M = Math.max(1, A?.frames ?? w.columns ?? 1), N = `${k}-${j}-${M}-${O}`, P = Math.min(E / w.frameWidth, E / w.frameHeight), F = w.frameWidth * P, I = w.frameHeight * P, L = w.sheetWidth * P, R = w.sheetHeight * P, z = -(j * w.frameHeight * P), { keyframesCss: B, animationCss: V } = buildSpriteAnimationCss({
		keyframesId: N,
		frames: M,
		fps: w.fps,
		frameWidth: w.frameWidth,
		scale: P,
		rowOffsetY: z,
		frameDurationsMs: A?.frameDurationsMs
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: B }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
		width: F,
		height: I,
		backgroundImage: `url(${e})`,
		backgroundRepeat: "no-repeat",
		backgroundSize: `${L}px ${R}px`,
		backgroundPosition: `0px ${z}px`,
		imageRendering: "pixelated",
		animation: V,
		animationPlayState: T ? "running" : "paused"
	} })] });
}
function DetectedSpriteFrame({ detected: e, animate: w, maxSize: T }) {
	let E = (0, import_react.useRef)(null), D = (0, import_react.useRef)(0), O = (0, import_react.useRef)(0), k = e.fps > 0 ? e.fps : 8, { footprintW: A, footprintH: j } = (0, import_react.useMemo)(() => {
		let w = 0, E = 0;
		for (let D of e.frames) {
			let e = Math.min(T / D.w, T / D.h);
			w = Math.max(w, D.w * e), E = Math.max(E, D.h * e);
		}
		return {
			footprintW: Math.max(1, Math.round(w)),
			footprintH: Math.max(1, Math.round(E))
		};
	}, [e, T]);
	return (0, import_react.useEffect)(() => {
		let M = E.current;
		if (!M) return;
		let N = M.getContext("2d");
		if (!N) return;
		if (M.width = A, M.height = j, D.current = 0, O.current = 0, e.frames.length === 0) {
			N.clearRect(0, 0, M.width, M.height);
			return;
		}
		let P = 0, F = () => {
			let w = e.frames[D.current % e.frames.length], E = e.bitmaps[D.current % e.bitmaps.length];
			if (!w || !E) return;
			N.imageSmoothingEnabled = !1, N.clearRect(0, 0, M.width, M.height);
			let O = Math.min(T / w.w, T / w.h), k = w.w * O, P = w.h * O;
			N.drawImage(E, (A - k) / 2, (j - P) / 2, k, P);
		}, I = (T) => {
			T - O.current >= 1e3 / k && (O.current = T, D.current = (D.current + 1) % e.frames.length, F()), w && (P = requestAnimationFrame(I));
		};
		return F(), w && (O.current = performance.now(), P = requestAnimationFrame(I)), () => {
			P && cancelAnimationFrame(P);
		};
	}, [
		e,
		w,
		A,
		j,
		T,
		k
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: E,
		style: {
			width: A,
			height: j,
			imageRendering: "pixelated"
		}
	});
}
function useDocumentVisible() {
	let [e, w] = (0, import_react.useState)(() => typeof document > "u" ? !0 : document.visibilityState === "visible");
	return (0, import_react.useEffect)(() => {
		let e = () => {
			w(document.visibilityState === "visible");
		};
		return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e);
	}, []), e;
}
var SIZE = 180, POSITION_STORAGE_KEY = "pet-overlay-position", LEGACY_POSITION_STORAGE_KEY = "sidekick-overlay-position";
function clampPositionToViewport(e, w, T) {
	let E = Math.max(0, T.width - w), D = Math.max(0, T.height - w);
	return {
		x: Math.min(Math.max(0, e.x), E),
		y: Math.min(Math.max(0, e.y), D)
	};
}
function clampToViewport(e, w = SIZE) {
	return typeof window > "u" ? e : clampPositionToViewport(e, w, {
		width: window.innerWidth,
		height: window.innerHeight
	});
}
function loadStoredPosition(e = SIZE) {
	if (typeof window > "u") return null;
	try {
		let w = window.localStorage.getItem(POSITION_STORAGE_KEY), T = !1;
		if (!w) {
			if (w = window.localStorage.getItem(LEGACY_POSITION_STORAGE_KEY), !w) return null;
			T = !0;
		}
		let E = JSON.parse(w);
		if (typeof E.x != "number" || typeof E.y != "number") return null;
		if (T) try {
			window.localStorage.setItem(POSITION_STORAGE_KEY, w);
		} catch {}
		return clampToViewport({
			x: E.x,
			y: E.y
		}, e);
	} catch {
		return null;
	}
}
function defaultPosition(e = SIZE) {
	return typeof window > "u" ? {
		x: 0,
		y: 0
	} : clampToViewport({
		x: window.innerWidth - e - 64,
		y: window.innerHeight - e - 16
	}, e);
}
var PET_BOB_KEYFRAMES_CSS = "@keyframes pet-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }";
function PetOverlay() {
	let e = useDocumentVisible(), w = usePrefersReducedMotion(), { url: T, sprite: E, detected: D } = usePetUrl(), O = useAppStore((e) => e.petSize), [k, A] = (0, import_react.useState)(() => {
		let e = useAppStore.getState().petSize ?? SIZE;
		return {
			size: e,
			position: loadStoredPosition(e) ?? defaultPosition(e)
		};
	}), j = k.position;
	k.size !== O && (j = clampToViewport(k.position, O), A({
		size: O,
		position: j
	}));
	let M = (0, import_react.useCallback)((e) => {
		A((w) => {
			let T = w.size === O ? w.position : clampToViewport(w.position, O);
			return {
				size: O,
				position: typeof e == "function" ? e(T) : e
			};
		});
	}, [O]), { dragging: P, dragAnimation: F, hovering: I, dragGeneration: L, handlers: z } = usePetPointerInteraction(j, (e) => M(clampToViewport(e, O)));
	(0, import_react.useEffect)(() => {
		let e = () => M((e) => clampToViewport(e, O));
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [M, O]), (0, import_react.useEffect)(() => {
		if (!P) try {
			window.localStorage.setItem(POSITION_STORAGE_KEY, JSON.stringify(j));
		} catch {}
	}, [P, j]);
	let B = e && !w, V = B && (!P || F !== null), H = B && !P, U = usePetAnimationName(P, F, I);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": !0,
		className: "pointer-events-none fixed z-40",
		style: {
			left: j.x,
			top: j.y,
			width: O,
			height: O
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none flex size-full items-center justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				...z,
				className: "pointer-events-auto flex h-fit w-fit select-none",
				style: {
					cursor: P ? "grabbing" : "grab",
					animation: "pet-bob 1.2s ease-in-out infinite",
					animationPlayState: H ? "running" : "paused",
					touchAction: "none",
					minWidth: 24,
					minHeight: 24
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: PET_BOB_KEYFRAMES_CSS }), E ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpriteFrame, {
					url: T,
					sprite: E,
					animate: V,
					maxSize: O,
					animationName: U,
					restartKey: L
				}, T) : D ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetectedSpriteFrame, {
					detected: D,
					animate: V,
					maxSize: O
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: T,
					alt: "",
					className: "max-h-full max-w-full object-contain",
					style: {
						maxWidth: O,
						maxHeight: O
					},
					draggable: !1
				})]
			})
		})
	});
}
var PetOverlay_default = PetOverlay;
export { PetOverlay, clampPositionToViewport, PetOverlay_default as default };
