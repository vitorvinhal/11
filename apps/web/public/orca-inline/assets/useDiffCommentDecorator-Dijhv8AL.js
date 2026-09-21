import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_client } from "./client-KaZE_emc.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useAppStore } from "./store-C9f8FDJV.js";
import { t as getDiffCommentLineLabel } from "./diff-comment-compat-OnNoNTL8.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { r as TooltipProvider } from "./tooltip-BWXjmmf0.js";
import { c as Range, p as editor } from "./editor.api2-B26FOp3A.js";
import { n as installEditorAddReviewNoteShortcut } from "./editor-shortcuts-B2Tpd-Q8.js";
import { i as getCommentBodyLayoutLineCount, r as getDiffCommentPopoverTop } from "./DiffCommentPopover-BAlGhDzG.js";
import { n as formatDiffComments } from "./diff-comments-format-CFMduuOR.js";
import { t as DiffCommentCard } from "./DiffCommentCard-DQztuCo3.js";
import { t as NotesSendMenu } from "./NotesSendMenu-CbK3gK3-.js";
function orderLineRange(t, u) {
	return {
		startLine: Math.min(t, u),
		endLine: Math.max(t, u)
	};
}
function areLineRangesEqual(t, u) {
	return t === null || u === null ? t === u : t.startLine === u.startLine && t.endLine === u.endLine;
}
function toDiffCommentLineTarget(t) {
	return {
		lineNumber: t.endLine,
		startLine: t.startLine === t.endLine ? void 0 : t.startLine
	};
}
function clampFocusLineToCommentable(t, u, d) {
	if (d === null || u === t) return u;
	let f = u > t ? 1 : -1, p = t;
	for (let m = t + f; (f > 0 ? m <= u : m >= u) && d.has(m); m += f) p = m;
	return p;
}
function getSelectionEndLine(t) {
	return t.endColumn === 1 && t.endLineNumber > t.startLineNumber ? t.endLineNumber - 1 : t.endLineNumber;
}
function getSelectionAnchorFocus(t) {
	let u = getSelectionEndLine(t);
	return t.positionLineNumber < t.selectionStartLineNumber ? {
		anchorLine: u,
		focusLine: t.positionLineNumber
	} : {
		anchorLine: t.selectionStartLineNumber,
		focusLine: u
	};
}
var AUTO_SCROLL_EDGE_PX = 24, AUTO_SCROLL_MIN_PX = 4, AUTO_SCROLL_MAX_PX = 32, AUTO_SCROLL_ACCELERATION = .6, REFERENCE_FRAME_MS = 1e3 / 60, MAX_FRAME_DELTA_MS = 50;
function getDragAutoScrollStepPx({ editorTop: t, editorBottom: u, clientY: d, frameDeltaMs: f }) {
	let p = t + AUTO_SCROLL_EDGE_PX, m = u - AUTO_SCROLL_EDGE_PX, h = d < p ? d - p : d > m ? d - m : 0;
	if (h === 0) return 0;
	let g = Math.min(AUTO_SCROLL_MAX_PX, AUTO_SCROLL_MIN_PX + Math.abs(h) * AUTO_SCROLL_ACCELERATION);
	return Math.sign(h) * g * (Math.min(MAX_FRAME_DELTA_MS, f) / REFERENCE_FRAME_MS);
}
var GUTTER_PRESS_TARGET_TYPES = new Set([editor.MouseTargetType.GUTTER_LINE_NUMBERS]), CONTENT_PROBE_INSET_PX = 4;
function getGutterPressLine(t, u) {
	let d = t.getTargetAtClientPoint(u.clientX, u.clientY);
	return !d || !GUTTER_PRESS_TARGET_TYPES.has(d.type) ? null : d.position?.lineNumber ?? null;
}
function installDiffCommentRangeDrag({ editor: t, editorDomNode: u, commentableLineSet: d, resolvePressLine: f, onDragChange: p, onCommit: m }) {
	let h = t.createDecorationsCollection(), g = null, v = null, y = !1, b = null, x = (t) => {
		if (!areLineRangesEqual(t, v)) {
			if (v = t, !t) {
				h.clear();
				return;
			}
			h.set([{
				range: new Range(t.startLine, 1, t.endLine, 1),
				options: {
					isWholeLine: !0,
					className: "orca-diff-comment-range-highlight",
					marginClassName: "orca-diff-comment-range-margin"
				}
			}]);
		}
	}, S = () => {
		if (y) {
			x(null);
			return;
		}
		x(b ? orderLineRange(b.anchorLine, b.focusLine) : g);
	}, C = () => {
		b?.frame != null && (cancelAnimationFrame(b.frame), b.frame = null);
	}, w = (u, d) => {
		let f = t.getModel();
		if (!f) return null;
		let p = u + t.getLayoutInfo().contentLeft + CONTENT_PROBE_INSET_PX, m = t.getTargetAtClientPoint(p, d)?.position?.lineNumber;
		return m == null ? null : Math.max(1, Math.min(f.getLineCount(), m));
	}, D = (u, d, f) => {
		let p = getDragAutoScrollStepPx({
			editorTop: u.top,
			editorBottom: u.bottom,
			clientY: d,
			frameDeltaMs: f
		});
		if (p === 0) return !1;
		let m = Math.max(0, t.getScrollHeight() - t.getLayoutInfo().height), h = t.getScrollTop(), g = Math.max(0, Math.min(m, h + p));
		return g === h ? !1 : (t.setScrollTop(g), !0);
	}, k = (t, u) => {
		let f = Math.max(u.top + 1, Math.min(u.bottom - 1, t.clientY)), m = w(u.left, f);
		if (m !== null) {
			let u = clampFocusLineToCommentable(t.anchorLine, m, d);
			u !== t.focusLine && (t.focusLine = u, p?.({
				dragging: !0,
				focusLine: u
			}));
		}
	}, A = (t) => {
		if (!b || y) return;
		b.frame = null;
		let d = b.lastFrameMs === null ? REFERENCE_FRAME_MS : t - b.lastFrameMs;
		b.lastFrameMs = t;
		let f = u.getBoundingClientRect(), p = D(f, b.clientY, d);
		k(b, f), S(), p && j();
	}, j = () => {
		!b || b.frame != null || y || (b.frame = requestAnimationFrame(A));
	}, M = () => {
		C();
		let t = b;
		b = null, t && (G(), releasePointerCapture(u, t.pointerId), p?.({
			dragging: !1,
			focusLine: null
		})), S();
	}, N = (t) => {
		if (!b || t.pointerId !== b.pointerId) return;
		b.clientY = t.clientY, C(), k(b, u.getBoundingClientRect());
		let d = orderLineRange(b.anchorLine, b.focusLine);
		M(), m(d);
	}, P = (t) => {
		!b || t.pointerId !== b.pointerId || M();
	}, I = (t) => {
		!b || t.pointerId !== b.pointerId || (b.clientY = t.clientY, j());
	}, R = (t) => {
		b && t.key === "Escape" && (t.preventDefault(), t.stopPropagation(), M());
	}, B = (t) => {
		if (b || g || y || t.button !== 0 || t.pointerType === "touch" || t.ctrlKey) return;
		let m = f(t);
		m !== null && (d !== null && !d.has(m) || (t.preventDefault(), t.stopPropagation(), capturePointer(u, t.pointerId), W(), b = {
			pointerId: t.pointerId,
			anchorLine: m,
			focusLine: m,
			clientY: t.clientY,
			frame: null,
			lastFrameMs: null
		}, p?.({
			dragging: !0,
			focusLine: m
		}), S()));
	}, V = (t) => {
		b && (t.preventDefault(), t.stopPropagation());
	};
	function W() {
		document.addEventListener("pointermove", I), document.addEventListener("pointerup", N), document.addEventListener("pointercancel", P), document.addEventListener("lostpointercapture", P), document.addEventListener("keydown", R, !0);
	}
	function G() {
		document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", N), document.removeEventListener("pointercancel", P), document.removeEventListener("lostpointercapture", P), document.removeEventListener("keydown", R, !0);
	}
	u.addEventListener("pointerdown", B, !0), u.addEventListener("mousedown", V, !0);
	let K = t.onDidDispose(() => {
		y = !0, M();
	});
	return {
		dispose: () => {
			y = !0, M(), u.removeEventListener("pointerdown", B, !0), u.removeEventListener("mousedown", V, !0), K.dispose(), h.clear(), v = null;
		},
		setPendingRange: (t) => {
			areLineRangesEqual(t, g) || (g = t, S());
		},
		isDragging: () => b !== null
	};
}
function capturePointer(t, u) {
	if (typeof t.setPointerCapture == "function") try {
		t.setPointerCapture(u);
	} catch {}
}
function releasePointerCapture(t, u) {
	if (typeof t.releasePointerCapture == "function") try {
		t.releasePointerCapture(u);
	} catch {}
}
function installDiffCommentAddButtonOverlay({ editor: t, editorDomNode: u, addButtonLabel: d, commentableLineSet: f, hoverLineRef: p, onAddCommentClickRef: m }) {
	let h = document.createElement("button");
	h.type = "button", h.className = "orca-diff-comment-add-btn", h.title = d, h.setAttribute("aria-label", d), h.innerHTML = "<svg viewBox=\"0 0 16 16\" width=\"12\" height=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M8 3v10M3 8h10\"/></svg>", h.style.display = "none", u.appendChild(h);
	let g = () => {
		let u = t.getOption(editor.EditorOption.lineHeight);
		return typeof u == "number" && u > 0 ? u : 19;
	}, _ = null, y = null, b = !1, S = (t) => {
		y !== t && (h.style.display = t, y = t);
	}, C = (t) => f === null || f.has(t), w = (u) => {
		let d = t.getTopForLineNumber(u) - t.getScrollTop(), f = Math.round(d + (g() - 18) / 2);
		f !== _ && (h.style.top = `${f}px`, _ = f), S("flex");
	}, T = installDiffCommentRangeDrag({
		editor: t,
		editorDomNode: u,
		commentableLineSet: f,
		resolvePressLine: (u) => u.target instanceof Node && h.contains(u.target) ? p.current : getGutterPressLine(t, u),
		onDragChange: ({ dragging: t, focusLine: d }) => {
			b = t, h.style.pointerEvents = t ? "none" : "", u.classList.toggle("orca-diff-comment-range-dragging", t), t && d !== null && (p.current = d, w(d));
		},
		onCommit: (u) => {
			let d = getDiffCommentPopoverTop(t, u.endLine, g());
			d != null && m.current({
				...toDiffCommentLineTarget(u),
				top: d
			});
		}
	}), E = [
		t.onMouseMove((t) => {
			if (b) return;
			let u = t.event?.browserEvent;
			if (u && h.contains(u.target)) return;
			let d = t.target.position?.lineNumber ?? null;
			if (d == null || !C(d)) {
				p.current = null, S("none");
				return;
			}
			p.current = d, w(d);
		}),
		t.onMouseLeave(() => {
			b || S("none");
		}),
		t.onDidScrollChange(() => {
			!b && p.current != null && w(p.current);
		})
	];
	return {
		dispose: () => {
			for (let t of E) t.dispose();
			T.dispose(), u.classList.remove("orca-diff-comment-range-dragging"), h.remove();
		},
		setPendingRange: T.setPendingRange,
		isDragging: T.isDragging
	};
}
function resolveDiffCommentShortcutTarget(t, u) {
	if (!t) return null;
	let { anchorLine: d, focusLine: f } = getSelectionAnchorFocus(t);
	return u !== null && !u.has(d) ? null : toDiffCommentLineTarget(orderLineRange(d, clampFocusLineToCommentable(d, f, u)));
}
function installDiffCommentAddNoteShortcut({ editor: t, commentableLineSet: u, isComposerOpen: d, onOpenComposer: f }) {
	return installEditorAddReviewNoteShortcut(t.getContainerDomNode(), () => {
		if (d()) return !0;
		let p = resolveDiffCommentShortcutTarget(t.getSelection(), u);
		if (!p) return !1;
		let m = t.getOption(editor.EditorOption.lineHeight), h = getDiffCommentPopoverTop(t, p.lineNumber, m);
		return h == null ? !1 : (f({
			...p,
			top: h
		}), !0);
	});
}
function installDiffCommentZoneMouseDownStopper(t) {
	let u = (t) => t.stopPropagation();
	return t.addEventListener("mousedown", u), () => t.removeEventListener("mousedown", u);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function getRenderSignature(t, u) {
	return JSON.stringify({
		body: t.body,
		sentAt: t.sentAt ?? null,
		author: t.author ?? null,
		authorAvatarUrl: t.authorAvatarUrl ?? null,
		createdAtLabel: t.createdAtLabel ?? null,
		url: t.url ?? null,
		canDelete: t.canDelete ?? null,
		canEdit: t.canEdit ?? null,
		sendPrompt: u ? u(t) : null
	});
}
function getSingleCommentSendScopes(t, u) {
	return [{
		id: "note",
		label: translate("auto.components.diff.comments.useDiffCommentDecorator.995fa28b50", "This note"),
		notes: t.sentAt ? [] : [t],
		prompt: u ? u(t) : formatDiffComments([t])
	}];
}
function renderDiffCommentZoneCard(t, u, { worktreeId: d, filePath: f, activeGroupId: p, formatCommentPrompt: h, resizeZone: _, onDeleteCommentRef: v, onUpdateCommentRef: y, clearDeliveredDiffComments: b }) {
	t.render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 400,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffCommentCard, {
			lineNumber: u.lineNumber,
			startLine: u.startLine,
			label: u.author ? getDiffCommentLineLabel(u).toLowerCase() : void 0,
			body: u.body,
			sentAt: u.sentAt,
			author: u.author,
			createdAtLabel: u.createdAtLabel,
			url: u.url,
			onDelete: u.canDelete === !1 ? void 0 : () => v.current(u.id),
			onSubmitEdit: y.current && u.canEdit !== !1 ? async (t) => {
				let d = y.current;
				return d ? d(u.id, t) : !1;
			} : void 0,
			onContentResize: () => _(u.id),
			observeRenderedSize: !0,
			headerActions: d && u.author === void 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotesSendMenu, {
				worktreeId: d,
				groupId: p,
				modeIdParts: [
					"diff-comment-note",
					d,
					f,
					u.id
				],
				scopes: getSingleCommentSendScopes(u, h),
				targetModeLabel: "This note",
				triggerClassName: "orca-diff-comment-edit",
				disabledTooltip: "Note already sent",
				onDelivered: (t) => void b(d, t)
			}) : null
		})
	}));
}
function resizeDiffCommentZone(t, u) {
	let d = u.domNode.firstElementChild, f = window.getComputedStyle(u.domNode), p = Number.parseFloat(f.paddingTop) + Number.parseFloat(f.paddingBottom), m = d?.getBoundingClientRect().height ?? 0;
	if (m <= 0) return;
	let h = Math.ceil(m + p);
	u.delegate.heightInPx !== h && (u.delegate.heightInPx = h, t.changeViewZones((t) => {
		t.layoutZone(u.zoneId);
	}));
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_client = require_client();
function useDiffCommentDecorator({ editor: t, monacoModelIdentity: u, filePath: d, worktreeId: f, comments: m, commentableLineNumbers: h, addButtonLabel: g = "Add note for the AI", pendingCommentTarget: _ = null, addNoteShortcutEnabled: v = !1, onAddCommentClick: y, onDeleteComment: x, onUpdateComment: S, formatCommentPrompt: C, pendingScrollCommentId: w, onPendingScrollConsumed: T }) {
	let E = useAppStore((t) => t.clearDeliveredDiffComments), D = useAppStore((t) => f && (t.activeGroupIdByWorktree[f] ?? f)), O = (0, import_react.useRef)(null), k = (0, import_react.useRef)(null), A = (0, import_react.useRef)(null), j = (0, import_react.useCallback)((t) => {
		A.current = t, k.current?.setPendingRange(t);
	}, []), M = (0, import_react.useRef)(/* @__PURE__ */ new Map()), N = (0, import_react.useRef)(null), P = (0, import_react.useRef)(null), F = (0, import_react.useRef)(null), I = (0, import_react.useRef)(y), L = (0, import_react.useRef)(x), R = (0, import_react.useRef)(S), z = (0, import_react.useRef)(T);
	I.current = y, L.current = x, R.current = S, z.current = T;
	let B = (0, import_react.useCallback)(() => {
		F.current !== null && (cancelAnimationFrame(F.current), F.current = null);
	}, []), V = (0, import_react.useMemo)(() => h ? new Set(h) : null, [(0, import_react.useMemo)(() => h?.join(","), [h])]);
	(0, import_react.useEffect)(() => {
		if (!t) return;
		let u = t.getDomNode();
		if (!u) return;
		let d = installDiffCommentAddButtonOverlay({
			editor: t,
			editorDomNode: u,
			addButtonLabel: g,
			commentableLineSet: V,
			hoverLineRef: O,
			onAddCommentClickRef: I
		});
		return k.current = d, d.setPendingRange(A.current), () => {
			k.current = null, d.dispose();
		};
	}, [
		g,
		V,
		t,
		u
	]);
	let H = _?.lineNumber ?? null, U = _?.startLine ?? null;
	(0, import_react.useEffect)(() => {
		j(H === null ? null : {
			startLine: U ?? H,
			endLine: H
		});
	}, [
		H,
		U,
		j
	]), (0, import_react.useEffect)(() => {
		if (!(!t || !v)) return installDiffCommentAddNoteShortcut({
			editor: t,
			commentableLineSet: V,
			isComposerOpen: () => A.current !== null || k.current?.isDragging() === !0,
			onOpenComposer: (t) => {
				j({
					startLine: t.startLine ?? t.lineNumber,
					endLine: t.lineNumber
				}), I.current(t);
			}
		});
	}, [
		v,
		V,
		t,
		u,
		j
	]), (0, import_react.useEffect)(() => {
		if (!t) return;
		let u = M.current;
		return () => {
			let d = Array.from(u.values(), (t) => (t.disposeMouseDownStopper(), t.root));
			if (u.size > 0) {
				let d = Array.from(u.values(), (t) => t.zoneId);
				t.changeViewZones((t) => {
					for (let u of d) t.removeZone(u);
				});
			}
			u.clear(), d.length > 0 && queueMicrotask(() => {
				for (let t of d) t.unmount();
			}), B(), N.current = null, P.current = null;
		};
	}, [
		B,
		t,
		u
	]), (0, import_react.useEffect)(() => {
		if (!t) return;
		let u = m.filter((t) => t.filePath === d && t.worktreeId === f), p = new Map(u.map((t) => [t.id, t])), h = M.current, g = [], _ = (u) => {
			let d = h.get(u);
			d && resizeDiffCommentZone(t, d);
		}, v = (u) => {
			B(), F.current = requestAnimationFrame(() => {
				F.current = null;
				let d = h.get(u);
				if (!d || !t.getModel() || N.current !== u) return;
				let f = t.getTopForLineNumber(d.delegate.afterLineNumber, !0), p = t.getLayoutInfo().height;
				t.setScrollTop(Math.max(0, f - p / 2)), N.current = null, z.current?.();
			});
		};
		P.current = v;
		let y = (t, u) => {
			renderDiffCommentZoneCard(t, u, {
				worktreeId: f,
				filePath: d,
				activeGroupId: D,
				formatCommentPrompt: C,
				resizeZone: _,
				onDeleteCommentRef: L,
				onUpdateCommentRef: R,
				clearDeliveredDiffComments: E
			});
		};
		t.changeViewZones((t) => {
			for (let [u, d] of h) p.has(u) || (t.removeZone(d.zoneId), d.disposeMouseDownStopper(), g.push(d.root), h.delete(u), N.current === u && (N.current = null));
			for (let d of u) {
				if (h.has(d.id)) continue;
				let u = document.createElement("div");
				u.className = "orca-diff-comment-inline";
				let f = installDiffCommentZoneMouseDownStopper(u), p = (0, import_client.createRoot)(u), m = getCommentBodyLayoutLineCount(d.body), g = Math.max(88, 68 + m * 20), _ = d.id, x = {
					afterLineNumber: d.lineNumber,
					heightInPx: g,
					domNode: u,
					suppressMouseDown: !1,
					onDomNodeTop: () => {
						let t = h.get(_);
						if (!t) return;
						let u = t.laidOut;
						t.laidOut = !0, !u && N.current === _ && v(_);
					}
				}, S = t.addZone(x);
				h.set(d.id, {
					zoneId: S,
					domNode: u,
					delegate: x,
					root: p,
					disposeMouseDownStopper: f,
					lastRenderSignature: getRenderSignature(d, C),
					laidOut: !1
				}), y(p, d);
			}
			for (let t of u) {
				let u = h.get(t.id);
				if (!u) continue;
				let d = getRenderSignature(t, C);
				u.lastRenderSignature !== d && (u.lastRenderSignature = d, y(u.root, t));
			}
		}), g.length > 0 && queueMicrotask(() => {
			for (let t of g) t.unmount();
		});
	}, [
		D,
		B,
		E,
		t,
		d,
		C,
		u,
		f,
		m
	]), (0, import_react.useEffect)(() => {
		if (t) {
			if (!w) {
				B(), N.current = null;
				return;
			}
			if (!m.find((t) => t.id === w && t.filePath === d && t.worktreeId === f)) {
				B(), N.current = null;
				return;
			}
			N.current = w, M.current.get(w)?.laidOut && P.current?.(w);
		}
	}, [
		B,
		t,
		m,
		w,
		d,
		u,
		f
	]);
}
export { getSelectionEndLine as n, useDiffCommentDecorator as t };
