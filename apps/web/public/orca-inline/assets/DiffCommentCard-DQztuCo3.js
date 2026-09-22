import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as CornerDownLeft } from "./corner-down-left-CT3Oh2xv.js";
import { t as Pencil } from "./pencil-EMomP5i_.js";
import { a as Trash, t as getDiffCommentLineLabel } from "./diff-comment-compat-OnNoNTL8.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function resizeDiffCommentTextarea(t) {
	let l = t.style.height;
	return t.style.height = "auto", t.style.height = `${Math.min(t.scrollHeight, 240)}px`, t.style.height !== l;
}
function DiffCommentCard({ lineNumber: t, startLine: l, label: f, quote: p, body: m, sentAt: h, author: g, createdAtLabel: _, url: v, onDelete: y, onContentResize: b, observeRenderedSize: x, onSubmitEdit: S, headerActions: C }) {
	let [w, T] = (0, import_react.useState)(!1), [E, D] = (0, import_react.useState)(m), [O, k] = (0, import_react.useState)(!1), A = useMountedRef(), j = (0, import_react.useRef)(null), M = (0, import_react.useRef)(null), N = (0, import_react.useRef)(!1), P = x === !0 && b !== void 0, F = (0, import_react.useRef)(b);
	F.current = b, (0, import_react.useLayoutEffect)(() => {
		let t = j.current;
		if (!t || !P) return;
		F.current?.();
		let l = null, u = () => {
			l === null && (l = requestAnimationFrame(() => {
				l = null, F.current?.();
			}));
		};
		if (typeof ResizeObserver > "u") return () => {
			l !== null && cancelAnimationFrame(l);
		};
		let d = new ResizeObserver(() => u());
		return d.observe(t), () => {
			d.disconnect(), l !== null && cancelAnimationFrame(l);
		};
	}, [P]), (0, import_react.useLayoutEffect)(() => {
		if (!w) {
			N.current && (N.current = !1, F.current?.());
			return;
		}
		let t = M.current;
		t && (resizeDiffCommentTextarea(t), t.focus(), t.setSelectionRange(t.value.length, t.value.length), F.current?.());
	}, [w]);
	let I = () => {
		N.current = !0;
	}, L = () => {
		D(m), T(!0);
	}, R = () => {
		I(), T(!1), D(m);
	}, z = E.trim(), B = !O && z.length > 0 && z !== m, V = f === void 0 ? getDiffCommentLineLabel({
		lineNumber: t,
		startLine: l
	}).toLowerCase() : f, H = [
		g || "Note",
		V,
		_ || (h ? "sent" : null)
	].filter(Boolean).join(" "), U = async () => {
		if (!(!B || !S)) {
			k(!0);
			try {
				await S(z) && A.current && (I(), T(!1));
			} catch (t) {
				console.error("Failed to submit diff comment edit:", t);
			} finally {
				A.current && k(!1);
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: j,
		className: "orca-diff-comment-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "orca-diff-comment-content-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "orca-diff-comment-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orca-diff-comment-meta-group",
						children: H
					}), !w && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "orca-diff-comment-actions-pill",
						onMouseDown: (t) => t.stopPropagation(),
						children: [
							C,
							C && (v || S || y) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orca-diff-comment-pill-divider" }),
							v && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "orca-diff-comment-pill-btn",
								title: translate("auto.components.diff.comments.DiffCommentCard.508ee678a5", "Open in browser"),
								"aria-label": translate("auto.components.diff.comments.DiffCommentCard.508ee678a5", "Open in browser"),
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), window.api.shell.openUrl(v);
								},
								children: translate("auto.components.diff.comments.DiffCommentCard.6978871a3d", "Open")
							}), (S || y) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orca-diff-comment-pill-divider" })] }),
							S && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "orca-diff-comment-pill-btn",
								title: translate("auto.components.diff.comments.DiffCommentCard.cad3384faa", "Edit note"),
								"aria-label": translate("auto.components.diff.comments.DiffCommentCard.cad3384faa", "Edit note"),
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), L();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" })
							}), y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "orca-diff-comment-pill-divider" })] }),
							y && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "orca-diff-comment-pill-btn orca-diff-comment-pill-btn-danger",
								title: translate("auto.components.diff.comments.DiffCommentCard.cce596969e", "Delete note"),
								"aria-label": translate("auto.components.diff.comments.DiffCommentCard.cce596969e", "Delete note"),
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), y();
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash, { className: "size-3" })
							})
						]
					})]
				}),
				p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "orca-diff-comment-quote",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "orca-diff-comment-quote-text",
						children: p
					})
				}) : null,
				w ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2 mt-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						ref: M,
						className: "orca-diff-comment-popover-textarea",
						value: E,
						onChange: (t) => {
							D(t.target.value), resizeDiffCommentTextarea(t.currentTarget) && F.current?.();
						},
						onKeyDown: (t) => {
							if (t.key === "Escape") {
								t.preventDefault(), R();
								return;
							}
							if (t.key === "Enter" && !t.nativeEvent.isComposing && !t.shiftKey) {
								if (t.preventDefault(), !B) return;
								U();
							}
						},
						rows: 3
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "orca-diff-comment-popover-footer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "sm",
							onClick: R,
							disabled: O,
							children: translate("auto.components.diff.comments.DiffCommentCard.0203bed775", "Cancel")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							onClick: () => void U(),
							disabled: !B,
							title: O ? translate("auto.components.diff.comments.DiffCommentCard.bb0a55f856", "Saving…") : void 0,
							children: [translate("auto.components.diff.comments.DiffCommentCard.109a791e7b", "Save"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CornerDownLeft, { className: "ml-1 size-3 opacity-70" })]
						})]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "orca-diff-comment-body",
					children: m
				})
			]
		})
	});
}
export { DiffCommentCard as t };
