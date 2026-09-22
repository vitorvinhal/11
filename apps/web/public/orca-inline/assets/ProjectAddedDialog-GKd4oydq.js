import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import "./i18n-CakWKPtl.js";
import "./useMountedRef-De7bTfqf.js";
import { r as activateAndRevealWorktree } from "./worktree-activation-u-wSAPlP.js";
import { kg as isFolderRepo, t as useAppStore } from "./store-C9f8FDJV.js";
import "./jsx-runtime-CVy3GVGV.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import { t as finishProjectAddWithDefaultCheckout } from "./project-added-default-checkout-BsdXXdXX.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function ProjectAddedDialog() {
	let e = useAppStore((e) => e.activeModal), a = useAppStore((e) => e.modalData), s = useAppStore((e) => e.closeModal), c = useAppStore((e) => e.repos), l = useAppStore((e) => e.fetchRepos), u = useAppStore((e) => e.fetchWorktrees), d = useAppStore((e) => e.setHideDefaultBranchWorkspace), f = (0, import_react.useRef)(0), p = (0, import_react.useRef)(null), m = typeof a?.repoId == "string" ? a.repoId : typeof a?.projectId == "string" ? a.projectId : "", h = c.find((e) => e.id === m) ?? null;
	return (0, import_react.useEffect)(() => {
		if (e !== "project-added") {
			f.current++, p.current = null;
			return;
		}
		if (!m) {
			s();
			return;
		}
		if (!h) {
			if (p.current === m) return;
			p.current = m;
			let e = !1;
			return (async () => {
				await l(), !e && (useAppStore.getState().repos.find((e) => e.id === m) || s(), p.current = null);
			})(), () => {
				e = !0, p.current = null;
			};
		}
		p.current = null;
		let a = ++f.current, o = !1;
		return isFolderRepo(h) ? ((async () => {
			try {
				await u(m);
			} catch {}
			if (o) return;
			let e = useAppStore.getState().worktreesByRepo[m]?.[0];
			e && activateAndRevealWorktree(e.id, { sidebarRevealBehavior: "auto" }), s();
		})(), () => {
			o = !0;
		}) : ((async () => {
			try {
				await u(m);
			} catch {}
			!o && f.current === a && await finishProjectAddWithDefaultCheckout({
				repoId: m,
				source: "project_added_compat",
				closeModal: s,
				setHideDefaultBranchWorkspace: d
			});
		})(), () => {
			o = !0;
		});
	}, [
		e,
		s,
		l,
		u,
		h,
		m,
		d
	]), null;
}
export { ProjectAddedDialog as default };
