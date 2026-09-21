import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { Ey as hasFeatureInteraction, t as useAppStore } from "./store-C9f8FDJV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), TOUR_SOURCES = {
	"workspace-board": "workspace_board_visible",
	"workspace-agent-sessions": "workspace_agent_sessions_visible",
	browser: "browser_visible",
	"client-hosted-browser": "client_hosted_browser_visible",
	tasks: "tasks_open",
	automations: "automations_open",
	"floating-workspace": "floating_workspace_visible",
	"workspace-creation": "workspace_creation_visible"
};
function createContextualTourInteractionSnapshot(e) {
	return {
		wasPreviouslyInteracted: e.wasFeaturePreviouslyInteracted ?? hasFeatureInteraction(e.featureInteractions, e.id),
		persisted: e.recordFeatureInteractionForTour ? e.recordFeatureInteraction(e.id) : e.featureInteractionPersisted ?? Promise.resolve()
	};
}
async function shouldRequestContextualTourAfterInteraction(e) {
	return await e.persisted, !e.isCancelled() && !e.getContextualToursSeenIds().includes(e.id);
}
function useContextualTour(e, r, c = TOUR_SOURCES[e], l = {}) {
	let { recordFeatureInteraction: u = !0, featureInteractionPersisted: d, wasFeaturePreviouslyInteracted: f } = l, p = useAppStore((e) => e.requestContextualTour), m = useAppStore((e) => e.suppressContextualTour), h = useAppStore((e) => e.recordFeatureInteraction), g = useAppStore((e) => e.persistedUIReady), _ = useAppStore((e) => e.activeModal), v = useAppStore((e) => e.activeContextualTourId), y = useAppStore((e) => e.activeContextualTourSource), b = useAppStore((e) => e.activeContextualTourSourceDetached), x = useAppStore((e) => e.contextualToursSeenIds), S = useAppStore((e) => e.contextualToursAutoEligible), C = useAppStore((e) => e.contextualTourShownThisSession), w = useAppStore((e) => e.contextualToursOnboardingVisible), T = useAppStore((e) => e.contextualToursBlockingSurfaceVisible), E = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!r || !g) {
			E.current = null;
			return;
		}
		if (E.current?.id === e && E.current.source === c) return;
		let i = createContextualTourInteractionSnapshot({
			id: e,
			featureInteractions: useAppStore.getState().featureInteractions,
			recordFeatureInteraction: h,
			recordFeatureInteractionForTour: u,
			featureInteractionPersisted: d,
			wasFeaturePreviouslyInteracted: f
		});
		E.current = {
			id: e,
			source: c,
			wasPreviouslyInteracted: i.wasPreviouslyInteracted,
			persisted: i.persisted
		};
	}, [
		r,
		d,
		e,
		g,
		h,
		u,
		c,
		f
	]), (0, import_react.useEffect)(() => {
		!r && v === e && y === c && !b && m(e, c);
	}, [
		v,
		y,
		b,
		r,
		e,
		c,
		m
	]), (0, import_react.useEffect)(() => () => {
		let r = useAppStore.getState();
		r.activeContextualTourId === e && r.activeContextualTourSource === c && !r.activeContextualTourSourceDetached && r.suppressContextualTour(e, c);
	}, [e, c]), (0, import_react.useEffect)(() => {
		if (!r || typeof window > "u" || typeof document > "u" || !g || S !== !0 || w || T || v !== null || C || x.includes(e)) return;
		let a = null, o = 0, s = !1, l = !1, u = () => {
			if (a !== null || s) return;
			s = !0;
			let r = E.current;
			shouldRequestContextualTourAfterInteraction({
				id: e,
				persisted: r?.id === e && r.source === c ? r.persisted : Promise.resolve(),
				isCancelled: () => l,
				getContextualToursSeenIds: () => useAppStore.getState().contextualToursSeenIds
			}).then((r) => {
				s = !1, r && (o += 1, a = window.requestAnimationFrame(() => {
					a = null;
					let r = E.current;
					useAppStore.getState().contextualToursSeenIds.includes(e) || p(e, c, r?.id === e && r.source === c ? r.wasPreviouslyInteracted : hasFeatureInteraction(useAppStore.getState().featureInteractions, e));
				}));
			});
		};
		u();
		let d = window.setTimeout(u, 250), f = typeof MutationObserver > "u" || !document.body ? null : new MutationObserver(u);
		f?.observe(document.body, {
			subtree: !0,
			childList: !0,
			attributes: !0,
			attributeFilter: [
				"aria-hidden",
				"class",
				"data-contextual-tour-target",
				"hidden",
				"style"
			]
		});
		let m = window.setInterval(() => {
			if (o >= 20) {
				window.clearInterval(m);
				return;
			}
			u();
		}, 500);
		return () => {
			l = !0, a !== null && window.cancelAnimationFrame(a), window.clearTimeout(d), window.clearInterval(m), f?.disconnect();
		};
	}, [
		v,
		T,
		_,
		S,
		C,
		w,
		x,
		r,
		e,
		g,
		p,
		c
	]);
}
export { useContextualTour as t };
