import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as CornerDownLeft } from "./corner-down-left-CT3Oh2xv.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { o as installOpenDraftAddReviewNoteGuard } from "./editor-shortcuts-B2Tpd-Q8.js";
import { n as hasBoundedCommentBodyText, t as getCommentBodySubmitState } from "./comment-body-submit-state-DspNAZ7B.js";
function getCommentBodyLayoutLineCount(e) {
	if (e.length === 0) return 1;
	let l = 1, u = Math.min(e.length, 65536);
	for (let d = 0; d < u; d += 1) if (e.charCodeAt(d) === 10 && (l += 1, l >= 80)) return 80;
	return l;
}
var FALLBACK_LINE_HEIGHT_PX = 19;
function getDiffCommentPopoverTop(e, l, u) {
	let d = e.getModel();
	if (!d || l < 1 || l > d.getLineCount()) return null;
	let f = typeof u == "number" && u > 0 ? u : FALLBACK_LINE_HEIGHT_PX;
	return e.getTopForLineNumber(l) - e.getScrollTop() + f;
}
var POPOVER_VIEWPORT_MARGIN_PX = 8;
function resolveDiffCommentPopoverTop({ belowTop: e, lineHeight: l, popoverHeight: u, viewportHeight: d, margin: f = POPOVER_VIEWPORT_MARGIN_PX }) {
	if (u <= 0 || d <= 0 || e + u + f <= d) return e;
	let p = e - l - u;
	if (p >= f) return p;
	let m = d - u - f;
	return Math.max(f, Math.min(e, m));
}
function getDiffCommentPopoverLeft(e, l) {
	let u = e.getDomNode();
	if (!u || !l) return null;
	let d = u.getBoundingClientRect(), f = l.getBoundingClientRect();
	return Math.max(0, Math.round(d.left - f.left + e.getLayoutInfo().contentLeft));
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function hasDraftText(e) {
	return /\S/u.test(e);
}
function DiffCommentPopover({ lineNumber: e, startLine: l, top: m, left: h, lineHeight: g = 0, title: _, placeholder: v = "Add note for the AI", submitLabel: y = "Add note", submittingLabel: b = "Saving…", onCancel: x, onSubmit: S }) {
	let [C, w] = (0, import_react.useState)(""), T = (0, import_react.useRef)(C);
	T.current = C;
	let [E, D] = (0, import_react.useState)(!1), O = useMountedRef(), k = (0, import_react.useRef)(null), A = (0, import_react.useRef)(x);
	A.current = x;
	let j = (0, import_react.useId)(), [M, N] = (0, import_react.useState)(m), P = (0, import_react.useRef)(m);
	P.current = m;
	let F = (0, import_react.useRef)(g);
	F.current = g;
	let I = (0, import_react.useCallback)(() => {
		let e = k.current, l = e?.parentElement;
		if (!e || !l) {
			N(P.current);
			return;
		}
		N(resolveDiffCommentPopoverTop({
			belowTop: P.current,
			lineHeight: F.current,
			popoverHeight: e.offsetHeight,
			viewportHeight: l.clientHeight
		}));
	}, []);
	(0, import_react.useLayoutEffect)(() => {
		I();
	}, [
		m,
		g,
		I
	]), (0, import_react.useEffect)(() => {
		let e = k.current, l = e?.parentElement;
		if (!e || !l || typeof ResizeObserver > "u") return;
		let u = new ResizeObserver(() => I());
		return u.observe(e), u.observe(l), () => u.disconnect();
	}, [I]);
	let L = (0, import_react.useCallback)((e) => {
		e?.focus();
	}, []);
	(0, import_react.useEffect)(() => {
		let e = k.current;
		if (e) return installOpenDraftAddReviewNoteGuard(e);
	}, []), (0, import_react.useEffect)(() => {
		let e = (e) => {
			k.current && (k.current.contains(e.target) || hasDraftText(T.current) || A.current());
		};
		return document.addEventListener("mousedown", e), () => {
			document.removeEventListener("mousedown", e);
		};
	}, []);
	let R = (e) => {
		e.style.height = "auto", e.style.height = `${Math.min(e.scrollHeight, 240)}px`;
	}, z = async () => {
		if (E) return;
		let e = getCommentBodySubmitState(C);
		if (e.status !== "empty") {
			if (e.status === "too-large-leading-whitespace") {
				toast.error(translate("auto.components.diff.comments.DiffCommentPopover.commentTooLarge", "Comment is too large to submit safely."));
				return;
			}
			D(!0);
			try {
				await S(e.body);
			} finally {
				O.current && D(!1);
			}
		}
	}, B = hasBoundedCommentBodyText(C);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: k,
		className: "orca-diff-comment-popover",
		style: {
			top: `${M}px`,
			...h == null ? {} : { left: `${h}px` }
		},
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": j,
		onMouseDown: (e) => e.stopPropagation(),
		onClick: (e) => e.stopPropagation(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "orca-diff-comment-content-col",
			style: { gap: "8px" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					id: j,
					className: "orca-diff-comment-popover-label",
					children: _ ?? (l && l !== e ? translate("auto.components.diff.comments.DiffCommentPopover.c845170b3b", "Lines {{value0}}-{{value1}}", {
						value0: l,
						value1: e
					}) : translate("auto.components.diff.comments.DiffCommentPopover.e05063cfc1", "Line {{value0}}", { value0: e }))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: L,
					className: "orca-diff-comment-popover-textarea",
					placeholder: v,
					value: C,
					onChange: (e) => {
						w(e.target.value), R(e.currentTarget);
					},
					onKeyDown: (e) => {
						if (e.key === "Escape") {
							e.preventDefault(), x();
							return;
						}
						if (e.key === "Enter" && !e.nativeEvent.isComposing && !e.shiftKey) {
							if (e.preventDefault(), E) return;
							z();
						}
					},
					rows: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "orca-diff-comment-popover-footer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: x,
						children: translate("auto.components.diff.comments.DiffCommentPopover.2b3ce6d394", "Cancel")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: z,
						disabled: E || !B,
						children: [E ? b : y, !E && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "ml-1 size-3 opacity-70" })]
					})]
				})
			]
		})
	});
}
export { getCommentBodyLayoutLineCount as i, getDiffCommentPopoverLeft as n, getDiffCommentPopoverTop as r, DiffCommentPopover as t };
