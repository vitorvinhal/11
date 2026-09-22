import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Br as nextRepoSlugFailureRetryDelay, Gr as slugByRepoId, Gv as callRuntimeRpc, Hr as rememberRepoSlug, Kr as slugCacheKey, Rr as deleteRepoSlugCacheKey, Ur as repoUpstreamIdentityKey, Vr as readRepoSlugCache, Wr as settingsForRepoOwner, Yv as getActiveRuntimeTarget, jv as githubRepoIdentityKey, t as useAppStore } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), slugResolutionInFlight = /* @__PURE__ */ new Map(), slugResolutionGeneration = /* @__PURE__ */ new Map();
function invalidateSlugResolution(e) {
	slugResolutionInFlight.delete(e), slugResolutionGeneration.set(e, (slugResolutionGeneration.get(e) ?? 0) + 1);
}
function clearRepoSlugCacheEntry(e) {
	let u = `:${e}`, d = /* @__PURE__ */ new Set();
	for (let e of slugByRepoId.keys()) e.endsWith(u) && d.add(e);
	for (let e of slugResolutionInFlight.keys()) e.endsWith(u) && d.add(e);
	for (let e of d) deleteRepoSlugCacheKey(e), invalidateSlugResolution(e);
}
async function resolveRepoSlug(e, u) {
	let d = slugCacheKey(e.id, u), f = readRepoSlugCache(d);
	if (f.hit) return f.value;
	let g = slugResolutionInFlight.get(d);
	if (g) return g;
	let _ = slugResolutionGeneration.get(d) ?? 0, y = (async () => {
		let f = (e) => ((slugResolutionGeneration.get(d) ?? 0) === _ && rememberRepoSlug(d, e), e);
		try {
			let d = getActiveRuntimeTarget(u), m = d.kind === "environment" ? await callRuntimeRpc(d, "github.repoSlug", { repo: e.id }, { timeoutMs: 3e4 }) : await window.api.gh.repoSlug({
				repoPath: e.path,
				repoId: e.id
			});
			return f(m ? githubRepoIdentityKey(m) : null);
		} catch {
			return f(null);
		}
	})();
	slugResolutionInFlight.set(d, y);
	try {
		return await y;
	} finally {
		slugResolutionInFlight.get(d) === y && slugResolutionInFlight.delete(d);
	}
}
async function buildIndex(e, u) {
	let p = new Set(e.map((e) => slugCacheKey(e.id, settingsForRepoOwner(e, u))));
	for (let e of slugByRepoId.keys()) p.has(e) || (deleteRepoSlugCacheKey(e), invalidateSlugResolution(e));
	let m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), b = await Promise.all(e.map(async (e) => ({
		repo: e,
		slug: await resolveRepoSlug(e, settingsForRepoOwner(e, u))
	})));
	for (let { repo: e, slug: u } of b) {
		u && m.set(u, [...m.get(u) ?? [], e]);
		let d = repoUpstreamIdentityKey(e, u);
		d && d !== u && v.set(d, [...v.get(d) ?? [], e]);
	}
	return {
		index: m,
		upstreamIndex: v,
		retryDelayMs: nextRepoSlugFailureRetryDelay(p)
	};
}
function useRepoSlugIndex() {
	let e = useAppStore((e) => e.repos), u = useAppStore((e) => e.settings), [d, f] = (0, import_react.useState)(() => /* @__PURE__ */ new Map()), [p, m] = (0, import_react.useState)(() => /* @__PURE__ */ new Map()), [h, g] = (0, import_react.useState)(!1), [_, v] = (0, import_react.useState)(0), [y, b] = (0, import_react.useState)(null), x = (0, import_react.useRef)(0);
	return (0, import_react.useEffect)(() => {
		let d = ++x.current;
		return g(!1), b(null), buildIndex(e, u).then(({ index: e, upstreamIndex: u, retryDelayMs: p }) => {
			d === x.current && (f(e), m(u), g(!0), b(p));
		}), () => {
			x.current += 1;
		};
	}, [
		e,
		_,
		u
	]), (0, import_react.useEffect)(() => {
		if (y === null) return;
		let e = setTimeout(() => v((e) => e + 1), y);
		return () => {
			clearTimeout(e);
		};
	}, [y]), (0, import_react.useMemo)(() => {
		let e = (e, u) => {
			let [f, m] = e?.split("/") ?? [];
			if (!f || !m) return {
				origin: [],
				upstream: []
			};
			let h = githubRepoIdentityKey({
				owner: f,
				repo: m,
				host: u
			});
			return {
				origin: d.get(h) ?? [],
				upstream: p.get(h) ?? []
			};
		};
		return {
			lookupSlugMatches: e,
			lookupSlug: (u, d) => {
				let { origin: f, upstream: p } = e(u, d);
				return f.length > 0 ? f : p;
			},
			ready: h
		};
	}, [
		d,
		p,
		h
	]);
}
export { useRepoSlugIndex as n, clearRepoSlugCacheEntry as t };
