import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as isLazyChunkLoadError } from "./lazy-with-retry--hTe1cP7.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as RotateCw } from "./rotate-cw-CYY-qFyR.js";
import { dy as EMPTY_RETIRED_NAME_REGISTRY, fy as clampExhaustedTiers } from "./store-C9f8FDJV.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as reportReactErrorBoundaryCrash } from "./react-error-boundary-reporting-DBcqyoKP.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), RecoverableRenderErrorBoundary = class extends import_react.Component {
	state = {
		error: null,
		resetKey: this.props.resetKey
	};
	static getDerivedStateFromProps(e, h) {
		return e.resetKey === h.resetKey ? null : {
			error: null,
			resetKey: e.resetKey
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, h) {
		console.error(`[${this.props.boundaryId}] render crash contained by boundary`, e, h), this.props.reportAsCrash !== !1 && (isLazyChunkLoadError(e) || reportReactErrorBoundaryCrash({
			boundaryId: this.props.boundaryId,
			surface: this.props.surface,
			error: e,
			errorInfo: h
		}));
	}
	handleReset = () => {
		this.setState({ error: null });
	};
	render() {
		return this.state.error ? this.props.fallback ? this.props.fallback({
			error: this.state.error,
			reset: this.handleReset
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("flex flex-col items-center justify-center gap-3 px-6 text-center text-sm text-muted-foreground", this.props.compact ? "min-h-9 py-2" : "h-full min-h-0 py-8", this.props.className),
			role: "alert",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-8 items-center justify-center rounded-full border border-destructive/25 bg-destructive/10 text-destructive",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-foreground",
						children: this.props.title ?? translate("auto.components.error.boundaries.RecoverableRenderErrorBoundary.ab855c11f4", "This part of Orca hit an error.")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "max-w-md text-xs",
						children: this.props.description ?? translate("auto.components.error.boundaries.RecoverableRenderErrorBoundary.34a189ae0f", "The rest of the app is still running. Retry this surface or switch away and come back.")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					onClick: this.handleReset,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "size-3.5" }), translate("auto.components.error.boundaries.RecoverableRenderErrorBoundary.55001880db", "Retry")]
				})
			]
		}) : this.props.children;
	}
};
function readRetiredNameRegistryForRepo(e, h) {
	let g = e, _ = g?.retiredNamesByRepo?.[h];
	return {
		exhaustedTiers: clampExhaustedTiers(g?.retiredNameTiersByRepo?.[h]),
		names: Array.isArray(_) ? _.filter((e) => typeof e == "string") : []
	};
}
function retiredNamesAfterRefresh(e, h, g) {
	return {
		repoId: h,
		registry: g ?? (e?.repoId === h ? e.registry : EMPTY_RETIRED_NAME_REGISTRY)
	};
}
function selectRetiredNameRegistry(e, h) {
	return e && e.repoId === h ? e.registry : EMPTY_RETIRED_NAME_REGISTRY;
}
export { RecoverableRenderErrorBoundary as i, retiredNamesAfterRefresh as n, selectRetiredNameRegistry as r, readRetiredNameRegistryForRepo as t };
