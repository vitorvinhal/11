import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { t as require_react_dom } from "./react-dom-Cm0_4y6Q.js";
import { a as createSlot, c as useComposedRefs, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronUp } from "./chevron-up-BRgQYNjk.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { n as VISUALLY_HIDDEN_STYLES } from "./dist-D-i0AoUO.js";
import { t as createContextScope } from "./dist-fJBGlGS2.js";
import { t as createCollection } from "./dist-BmoCFUG3.js";
import { n as useLayoutEffect2, r as composeEventHandlers, t as useControllableState } from "./dist-DDM3IpIH.js";
import { n as Presence, t as useId } from "./dist-CxjmhSN9.js";
import { t as useDirection } from "./dist-DqysERl8.js";
import { i as useCallbackRef, n as DismissableLayer, t as Portal } from "./dist-BZKlajuP.js";
import { i as FocusScope, n as Combination_default, r as useFocusGuards, t as hideOthers } from "./es2015-D9zZpuOq.js";
import { t as usePrevious } from "./dist-DKfCV6tt.js";
import { a as createPopperScope, i as Root2, n as Arrow, r as Content, t as Anchor } from "./dist-CJIJTNCs.js";
import { t as clamp } from "./dist-P-hJgGS4.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1), OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope = createPopperScope(), [SelectProviderImpl, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), PROVIDER_NAME = "SelectProvider";
function SelectProvider(e) {
	let { __scopeSelect: r, children: i, open: a, defaultOpen: o, onOpenChange: s, value: c, defaultValue: l, onValueChange: u, dir: d, name: f, autoComplete: p, disabled: m, required: h, form: g, internal_do_not_use_render: _ } = e, y = usePopperScope(r), [S, C] = import_react.useState(null), [w, T] = import_react.useState(null), [E, D] = import_react.useState(!1), O = useDirection(d), [k, A] = useControllableState({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: SELECT_NAME
	}), [M, N] = useControllableState({
		prop: c,
		defaultProp: l,
		onChange: u,
		caller: SELECT_NAME
	}), P = import_react.useRef(null), F = import_react.useRef(M);
	import_react.useEffect(() => {
		let e = g ? S?.ownerDocument.getElementById(g) : S?.form;
		if (e instanceof HTMLFormElement) {
			let r = () => N(F.current);
			return e.addEventListener("reset", r), () => e.removeEventListener("reset", r);
		}
	}, [
		g,
		S,
		N
	]);
	let I = S ? !!g || !!S.closest("form") : !0, [L, R] = import_react.useState(/* @__PURE__ */ new Set()), V = useId(), H = Array.from(L).map((e) => e.props.value).join(";"), U = import_react.useCallback((e) => {
		R((r) => new Set(r).add(e));
	}, []), W = import_react.useCallback((e) => {
		R((r) => {
			let i = new Set(r);
			return i.delete(e), i;
		});
	}, []), q = {
		required: h,
		trigger: S,
		onTriggerChange: C,
		valueNode: w,
		onValueNodeChange: T,
		valueNodeHasChildren: E,
		onValueNodeHasChildrenChange: D,
		contentId: V,
		value: M,
		onValueChange: N,
		open: k,
		onOpenChange: A,
		dir: O,
		triggerPointerDownPosRef: P,
		disabled: m,
		name: f,
		autoComplete: p,
		form: g,
		nativeOptions: L,
		nativeSelectKey: H,
		isFormControl: I
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
		...y,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProviderImpl, {
			scope: r,
			...q,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Provider, {
				scope: r,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectNativeOptionsProvider, {
					scope: r,
					onNativeOptionAdd: U,
					onNativeOptionRemove: W,
					children: isFunction(_) ? _(q) : i
				})
			})
		})
	});
}
SelectProvider.displayName = PROVIDER_NAME;
var Select$1 = (e) => {
	let { __scopeSelect: r, children: i, ...a } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectProvider, {
		__scopeSelect: r,
		...a,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [i, e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectBubbleInput, { __scopeSelect: r }) : null] })
	});
};
Select$1.displayName = SELECT_NAME;
var TRIGGER_NAME = "SelectTrigger", SelectTrigger$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, disabled: a = !1, ...s } = e, c = usePopperScope(i), l = useSelectContext(TRIGGER_NAME, i), u = l.disabled || a, d = useComposedRefs(r, l.onTriggerChange), p = useCollection(i), m = import_react.useRef("touch"), [h, g, v] = useTypeaheadSearch((e) => {
		let r = p().filter((e) => !e.disabled), i = findNextItem(r, e, r.find((e) => e.value === l.value));
		i !== void 0 && l.onValueChange(i.value);
	}), y = (e) => {
		u || (l.onOpenChange(!0), v()), e && (l.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Anchor, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": l.open ? l.contentId : void 0,
			"aria-expanded": l.open,
			"aria-required": l.required,
			"aria-autocomplete": "none",
			dir: l.dir,
			"data-state": l.open ? "open" : "closed",
			disabled: u,
			"data-disabled": u ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(l.value) ? "" : void 0,
			...s,
			ref: d,
			onClick: composeEventHandlers(s.onClick, (e) => {
				e.currentTarget.focus(), m.current !== "mouse" && y(e);
			}),
			onPointerDown: composeEventHandlers(s.onPointerDown, (e) => {
				m.current = e.pointerType;
				let r = e.target;
				r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (y(e), e.preventDefault());
			}),
			onKeyDown: composeEventHandlers(s.onKeyDown, (e) => {
				let r = h.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && g(e.key), !(r && e.key === " ") && OPEN_KEYS.includes(e.key) && (y(), e.preventDefault());
			})
		})
	});
});
SelectTrigger$1.displayName = TRIGGER_NAME;
var VALUE_NAME = "SelectValue", SelectValue$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, className: a, style: s, children: c, placeholder: l = "", ...u } = e, d = useSelectContext(VALUE_NAME, i), { onValueNodeHasChildrenChange: p } = d, m = c !== void 0, h = useComposedRefs(r, d.onValueNodeChange);
	useLayoutEffect2(() => {
		p(m);
	}, [p, m]);
	let _ = shouldShowPlaceholder(d.value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		...u,
		asChild: _ ? !1 : u.asChild,
		ref: h,
		style: { pointerEvents: "none" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: _ ? l : c }, _ ? "placeholder" : "value")
	});
});
SelectValue$1.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, children: a, ...o } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": !0,
		...o,
		ref: r,
		children: a || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME = "SelectPortal", [PortalProvider, usePortalContext] = createSelectContext(PORTAL_NAME, { forceMount: void 0 }), SelectPortal = (e) => {
	let { __scopeSelect: r, forceMount: i, ...a } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
		scope: e.__scopeSelect,
		forceMount: i,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
			asChild: !0,
			...a
		})
	});
};
SelectPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "SelectContent", SelectContent$1 = import_react.forwardRef((e, r) => {
	let i = usePortalContext(CONTENT_NAME, e.__scopeSelect), { forceMount: a = i.forceMount, ...o } = e, s = useSelectContext(CONTENT_NAME, e.__scopeSelect), [c, l] = import_react.useState();
	return useLayoutEffect2(() => {
		l(new DocumentFragment());
	}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
		present: a || s.open,
		children: ({ present: e }) => e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentImpl, {
			...o,
			ref: r
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentFragment, {
			...o,
			fragment: c
		})
	});
});
SelectContent$1.displayName = CONTENT_NAME;
var SelectContentFragment = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, children: a, fragment: o } = e;
	return o ? import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: i,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
			scope: i,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: r,
				children: a
			})
		})
	}), o) : null;
});
SelectContentFragment.displayName = "SelectContentFragment";
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = createSlot("SelectContent.RemoveScroll"), SelectContentImpl = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i } = e, { position: a = "item-aligned", onCloseAutoFocus: s, onEscapeKeyDown: c, onPointerDownOutside: l, side: u, sideOffset: d, align: f, alignOffset: p, arrowPadding: m, collisionBoundary: h, collisionPadding: g, sticky: v, hideWhenDetached: y, avoidCollisions: b, ...x } = e, S = useSelectContext(CONTENT_NAME, i), [w, k] = import_react.useState(null), [A, j] = import_react.useState(null), M = useComposedRefs(r, k), [N, P] = import_react.useState(null), [F, I] = import_react.useState(null), L = useCollection(i), [R, z] = import_react.useState(!1), B = import_react.useRef(!1);
	import_react.useEffect(() => {
		if (w) return hideOthers(w);
	}, [w]), useFocusGuards();
	let H = import_react.useCallback((e) => {
		let [r, ...i] = L().map((e) => e.ref.current), [a] = i.slice(-1), o = document.activeElement;
		for (let i of e) if (i === o || (i?.scrollIntoView({ block: "nearest" }), i === r && A && (A.scrollTop = 0), i === a && A && (A.scrollTop = A.scrollHeight), i?.focus(), document.activeElement !== o)) return;
	}, [L, A]), U = import_react.useCallback(() => H([N, w]), [
		H,
		N,
		w
	]);
	import_react.useEffect(() => {
		R && U();
	}, [R, U]);
	let { onOpenChange: W, triggerPointerDownPosRef: G } = S;
	import_react.useEffect(() => {
		if (w) {
			let e = {
				x: 0,
				y: 0
			}, r = (r) => {
				e = {
					x: Math.abs(Math.round(r.pageX) - (G.current?.x ?? 0)),
					y: Math.abs(Math.round(r.pageY) - (G.current?.y ?? 0))
				};
			}, i = (i) => {
				e.x <= 10 && e.y <= 10 ? i.preventDefault() : i.composedPath().includes(w) || W(!1), document.removeEventListener("pointermove", r), G.current = null;
			};
			return G.current !== null && (document.addEventListener("pointermove", r), document.addEventListener("pointerup", i, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", r), document.removeEventListener("pointerup", i, { capture: !0 });
			};
		}
	}, [
		w,
		W,
		G
	]), import_react.useEffect(() => {
		let e = () => W(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [W]);
	let [K, J] = useTypeaheadSearch((e) => {
		let r = L().filter((e) => !e.disabled), i = findNextItem(r, e, r.find((e) => e.ref.current === document.activeElement));
		i && setTimeout(() => i.ref.current?.focus());
	}), Y = import_react.useCallback((e, r, i) => {
		let a = !B.current && !i;
		(S.value !== void 0 && S.value === r || a) && (P(e), a && (B.current = !0));
	}, [S.value]), X = import_react.useCallback(() => w?.focus(), [w]), Z = import_react.useCallback((e, r, i) => {
		let a = !B.current && !i;
		(S.value !== void 0 && S.value === r || a) && I(e);
	}, [S.value]), Q = a === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, $ = Q === SelectPopperPosition ? {
		side: u,
		sideOffset: d,
		align: f,
		alignOffset: p,
		arrowPadding: m,
		collisionBoundary: h,
		collisionPadding: g,
		sticky: v,
		hideWhenDetached: y,
		avoidCollisions: b
	} : {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContentProvider, {
		scope: i,
		content: w,
		viewport: A,
		onViewportChange: j,
		itemRefCallback: Y,
		selectedItem: N,
		onItemLeave: X,
		itemTextRefCallback: Z,
		focusSelectedItem: U,
		selectedItemText: F,
		position: a,
		isPositioned: R,
		searchRef: K,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusScope, {
				asChild: !0,
				trapped: S.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(s, (e) => {
					S.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: c,
					onPointerDownOutside: l,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => S.onOpenChange(!1),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Q, {
						role: "listbox",
						id: S.contentId,
						"data-state": S.open ? "open" : "closed",
						dir: S.dir,
						onContextMenu: (e) => e.preventDefault(),
						...x,
						...$,
						onPlaced: () => z(!0),
						ref: M,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...x.style
						},
						onKeyDown: composeEventHandlers(x.onKeyDown, (e) => {
							let r = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !r && e.key.length === 1 && J(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let r = L().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let i = e.target, a = r.indexOf(i);
									r = r.slice(a + 1);
								}
								setTimeout(() => H(r)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, onPlaced: a, ...s } = e, c = useSelectContext(CONTENT_NAME, i), l = useSelectContentContext(CONTENT_NAME, i), [u, d] = import_react.useState(null), [p, m] = import_react.useState(null), h = useComposedRefs(r, m), _ = useCollection(i), v = import_react.useRef(!1), y = import_react.useRef(!0), { viewport: b, selectedItem: x, selectedItemText: S, focusSelectedItem: C } = l, w = import_react.useCallback(() => {
		if (c.trigger && c.valueNode && u && p && b && x && S) {
			let e = c.trigger.getBoundingClientRect(), r = p.getBoundingClientRect(), i = c.valueNode.getBoundingClientRect(), o = S.getBoundingClientRect();
			if (c.dir !== "rtl") {
				let a = o.left - r.left, s = i.left - a, c = e.left - s, l = e.width + c, d = Math.max(l, r.width), f = window.innerWidth - CONTENT_MARGIN, p = clamp(s, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, f - d)]);
				u.style.minWidth = l + "px", u.style.left = p + "px";
			} else {
				let a = r.right - o.right, s = window.innerWidth - i.right - a, c = window.innerWidth - e.right - s, l = e.width + c, d = Math.max(l, r.width), f = window.innerWidth - CONTENT_MARGIN, p = clamp(s, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, f - d)]);
				u.style.minWidth = l + "px", u.style.right = p + "px";
			}
			let s = _(), l = window.innerHeight - CONTENT_MARGIN * 2, d = b.scrollHeight, f = window.getComputedStyle(p), m = parseInt(f.borderTopWidth, 10), h = parseInt(f.paddingTop, 10), g = parseInt(f.borderBottomWidth, 10), y = parseInt(f.paddingBottom, 10), C = m + h + d + y + g, w = Math.min(x.offsetHeight * 5, C), T = window.getComputedStyle(b), E = parseInt(T.paddingTop, 10), D = parseInt(T.paddingBottom, 10), O = e.top + e.height / 2 - CONTENT_MARGIN, k = l - O, A = x.offsetHeight / 2, j = x.offsetTop + A, M = m + h + j, N = C - M;
			if (M <= O) {
				let e = s.length > 0 && x === s[s.length - 1].ref.current;
				u.style.bottom = "0px";
				let r = p.clientHeight - b.offsetTop - b.offsetHeight, i = M + Math.max(k, A + (e ? D : 0) + r + g);
				u.style.height = i + "px";
			} else {
				let e = s.length > 0 && x === s[0].ref.current;
				u.style.top = "0px";
				let r = Math.max(O, m + b.offsetTop + (e ? E : 0) + A) + N;
				u.style.height = r + "px", b.scrollTop = M - O + b.offsetTop;
			}
			u.style.margin = `${CONTENT_MARGIN}px 0`, u.style.minHeight = w + "px", u.style.maxHeight = l + "px", a?.(), requestAnimationFrame(() => v.current = !0);
		}
	}, [
		_,
		c.trigger,
		c.valueNode,
		u,
		p,
		b,
		x,
		S,
		c.dir,
		a
	]);
	useLayoutEffect2(() => w(), [w]);
	let [T, E] = import_react.useState();
	return useLayoutEffect2(() => {
		p && E(window.getComputedStyle(p).zIndex);
	}, [p]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewportProvider, {
		scope: i,
		contentWrapper: u,
		shouldExpandOnScrollRef: v,
		onScrollButtonChange: import_react.useCallback((e) => {
			e && y.current === !0 && (w(), C?.(), y.current = !1);
		}, [w, C]),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: d,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: T
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...s,
				ref: h,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...s.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, align: a = "start", collisionPadding: o = CONTENT_MARGIN, ...s } = e, c = usePopperScope(i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		...c,
		...s,
		ref: r,
		align: a,
		collisionPadding: o,
		style: {
			boxSizing: "border-box",
			...s.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, nonce: a, ...s } = e, c = useSelectContentContext(VIEWPORT_NAME, i), l = useSelectViewportContext(VIEWPORT_NAME, i), u = useComposedRefs(r, c.onViewportChange), d = import_react.useRef(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: a
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.Slot, {
		scope: i,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...s,
			ref: u,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...s.style
			},
			onScroll: composeEventHandlers(s.onScroll, (e) => {
				let r = e.currentTarget, { contentWrapper: i, shouldExpandOnScrollRef: a } = l;
				if (a?.current && i) {
					let e = Math.abs(d.current - r.scrollTop);
					if (e > 0) {
						let a = window.innerHeight - CONTENT_MARGIN * 2, o = parseFloat(i.style.minHeight), s = parseFloat(i.style.height), c = Math.max(o, s);
						if (c < a) {
							let o = c + e, s = Math.min(a, o), l = o - s;
							i.style.height = s + "px", i.style.bottom === "0px" && (r.scrollTop = l > 0 ? l : 0, i.style.justifyContent = "flex-end");
						}
					}
				}
				d.current = r.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, ...a } = e, o = useId();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroupContextProvider, {
		scope: i,
		id: o,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			role: "group",
			"aria-labelledby": o,
			...a,
			ref: r
		})
	});
});
SelectGroup$1.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel", SelectLabel$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, ...a } = e, o = useSelectGroupContext(LABEL_NAME, i);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		id: o.id,
		...a,
		ref: r
	});
});
SelectLabel$1.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, value: a, disabled: s = !1, textValue: c, ...l } = e, u = useSelectContext(ITEM_NAME, i), d = useSelectContentContext(ITEM_NAME, i), p = u.value === a, [m, h] = import_react.useState(c ?? ""), [g, v] = import_react.useState(!1), y = useComposedRefs(r, useCallbackRef((e) => d.itemRefCallback?.(e, a, s))), x = useId(), C = import_react.useRef("touch"), w = () => {
		s || (u.onValueChange(a), u.onOpenChange(!1));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemContextProvider, {
		scope: i,
		value: a,
		disabled: s,
		textId: x,
		isSelected: p,
		onItemTextChange: import_react.useCallback((e) => {
			h((r) => r || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collection.ItemSlot, {
			scope: i,
			value: a,
			disabled: s,
			textValue: m,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				role: "option",
				"aria-labelledby": x,
				"data-highlighted": g ? "" : void 0,
				"aria-selected": p && g,
				"data-state": p ? "checked" : "unchecked",
				"aria-disabled": s || void 0,
				"data-disabled": s ? "" : void 0,
				tabIndex: s ? void 0 : -1,
				...l,
				ref: y,
				onFocus: composeEventHandlers(l.onFocus, () => v(!0)),
				onBlur: composeEventHandlers(l.onBlur, () => v(!1)),
				onClick: composeEventHandlers(l.onClick, () => {
					C.current !== "mouse" && w();
				}),
				onPointerUp: composeEventHandlers(l.onPointerUp, () => {
					C.current === "mouse" && w();
				}),
				onPointerDown: composeEventHandlers(l.onPointerDown, (e) => {
					C.current = e.pointerType;
				}),
				onPointerMove: composeEventHandlers(l.onPointerMove, (e) => {
					C.current = e.pointerType, s ? d.onItemLeave?.() : C.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(l.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && d.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(l.onKeyDown, (e) => {
					s || e.target !== e.currentTarget || d.searchRef?.current !== "" && e.key === " " || (SELECTION_KEYS.includes(e.key) && w(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
SelectItem$1.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, className: a, style: s, ...c } = e, l = useSelectContext(ITEM_TEXT_NAME, i), u = useSelectContentContext(ITEM_TEXT_NAME, i), d = useSelectItemContext(ITEM_TEXT_NAME, i), p = useSelectNativeOptionsContext(ITEM_TEXT_NAME, i), [m, h] = import_react.useState(null), _ = useCallbackRef((e) => u.itemTextRefCallback?.(e, d.value, d.disabled)), v = useComposedRefs(r, h, d.onItemTextChange, _), y = m?.textContent, b = import_react.useMemo(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
		value: d.value,
		disabled: d.disabled,
		children: y
	}, d.value), [
		d.disabled,
		d.value,
		y
	]), { onNativeOptionAdd: x, onNativeOptionRemove: C } = p;
	return useLayoutEffect2(() => (x(b), () => C(b)), [
		x,
		C,
		b
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		id: d.textId,
		...c,
		ref: v
	}), d.isSelected && l.valueNode && !l.valueNodeHasChildren && !shouldShowPlaceholder(l.value) ? import_react_dom.createPortal(c.children, l.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, ...a } = e;
	return useSelectItemContext(ITEM_INDICATOR_NAME, i).isSelected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"aria-hidden": !0,
		...a,
		ref: r
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton$1 = import_react.forwardRef((e, r) => {
	let i = useSelectContentContext(SCROLL_UP_BUTTON_NAME, e.__scopeSelect), a = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, e.__scopeSelect), [s, c] = import_react.useState(!1), l = useComposedRefs(r, a.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (i.viewport && i.isPositioned) {
			let e = function() {
				c(r.scrollTop > 0);
			}, r = i.viewport;
			return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e);
		}
	}, [i.viewport, i.isPositioned]), s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...e,
		ref: l,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: r } = i;
			e && r && (e.scrollTop -= r.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton$1.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton$1 = import_react.forwardRef((e, r) => {
	let i = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, e.__scopeSelect), a = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, e.__scopeSelect), [s, c] = import_react.useState(!1), l = useComposedRefs(r, a.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (i.viewport && i.isPositioned) {
			let e = function() {
				let e = r.scrollHeight - r.clientHeight;
				c(Math.ceil(r.scrollTop) < e);
			}, r = i.viewport;
			return e(), r.addEventListener("scroll", e), () => r.removeEventListener("scroll", e);
		}
	}, [i.viewport, i.isPositioned]), s ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollButtonImpl, {
		...e,
		ref: l,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: r } = i;
			e && r && (e.scrollTop += r.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton$1.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, onAutoScroll: a, ...o } = e, s = useSelectContentContext("SelectScrollButton", i), c = import_react.useRef(null), l = useCollection(i), u = import_react.useCallback(() => {
		c.current !== null && (window.clearInterval(c.current), c.current = null);
	}, []);
	return import_react.useEffect(() => () => u(), [u]), useLayoutEffect2(() => {
		l().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [l]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": !0,
		...o,
		ref: r,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: composeEventHandlers(o.onPointerDown, () => {
			c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerMove: composeEventHandlers(o.onPointerMove, () => {
			s.onItemLeave?.(), c.current === null && (c.current = window.setInterval(a, 50));
		}),
		onPointerLeave: composeEventHandlers(o.onPointerLeave, () => {
			u();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator$1 = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, ...a } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
		"aria-hidden": !0,
		...a,
		ref: r
	});
});
SelectSeparator$1.displayName = SEPARATOR_NAME;
var ARROW_NAME = "SelectArrow", SelectArrow = import_react.forwardRef((e, r) => {
	let { __scopeSelect: i, ...a } = e, o = usePopperScope(i);
	return useSelectContentContext(ARROW_NAME, i).position === "popper" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
		...o,
		...a,
		ref: r
	}) : null;
});
SelectArrow.displayName = ARROW_NAME;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = import_react.forwardRef(({ __scopeSelect: e, ...r }, i) => {
	let a = useSelectContext(BUBBLE_INPUT_NAME, e), { value: s, onValueChange: c, required: l, disabled: u, name: d, autoComplete: m, form: h } = a, { nativeOptions: g, nativeSelectKey: _ } = a, v = import_react.useRef(null), y = useComposedRefs(i, v), b = s ?? "", x = usePrevious(b), S = Array.from(g).some((e) => (e.props.value ?? "") === "");
	return import_react.useEffect(() => {
		let e = v.current;
		if (!e) return;
		let r = window.HTMLSelectElement.prototype, i = Object.getOwnPropertyDescriptor(r, "value").set;
		if (x !== b && i) {
			let r = new Event("change", { bubbles: !0 });
			i.call(e, b), e.dispatchEvent(r);
		}
	}, [x, b]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Primitive.select, {
		"aria-hidden": !0,
		required: l,
		tabIndex: -1,
		name: d,
		autoComplete: m,
		disabled: u,
		form: h,
		onChange: (e) => c(e.target.value),
		...r,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...r.style
		},
		ref: y,
		defaultValue: b,
		children: [shouldShowPlaceholder(s) && !S ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "" }) : null, Array.from(g)]
	}, _);
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function isFunction(e) {
	return typeof e == "function";
}
function shouldShowPlaceholder(e) {
	return e === "" || e === void 0;
}
function useTypeaheadSearch(e) {
	let r = useCallbackRef(e), i = import_react.useRef(""), a = import_react.useRef(0), o = import_react.useCallback((e) => {
		let o = i.current + e;
		r(o), (function e(r) {
			i.current = r, window.clearTimeout(a.current), r !== "" && (a.current = window.setTimeout(() => e(""), 1e3));
		})(o);
	}, [r]), s = import_react.useCallback(() => {
		i.current = "", window.clearTimeout(a.current);
	}, []);
	return import_react.useEffect(() => () => window.clearTimeout(a.current), []), [
		i,
		o,
		s
	];
}
function findNextItem(e, r, i) {
	let a = r.length > 1 && Array.from(r).every((e) => e === r[0]) ? r[0] : r, o = i ? e.indexOf(i) : -1, s = wrapArray(e, Math.max(o, 0));
	a.length === 1 && (s = s.filter((e) => e !== i));
	let c = s.find((e) => e.textValue.toLowerCase().startsWith(a.toLowerCase()));
	return c === i ? void 0 : c;
}
function wrapArray(e, r) {
	return e.map((i, a) => e[(r + a) % e.length]);
}
function Select({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select$1, {
		"data-slot": "select",
		...e
	});
}
function SelectValue({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue$1, {
		"data-slot": "select-value",
		...e
	});
}
function SelectGroup({ ...e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectGroup$1, {
		"data-slot": "select-group",
		...e
	});
}
function SelectLabel({ className: e, ...r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
		"data-slot": "select-label",
		className: cn("px-2 py-1.5 text-xs text-muted-foreground", e),
		...r
	});
}
function SelectTrigger({ className: e, size: r = "default", children: i, ...a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
		"data-slot": "select-trigger",
		"data-size": r,
		className: cn("flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground", e),
		...a,
		children: [i, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4 opacity-50" })
		})]
	});
}
function SelectContent({ className: e, children: r, position: i = "item-aligned", align: a = "center", portalContainer: o, ...c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, {
		container: o ?? void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
			"data-slot": "select-content",
			className: cn("relative z-[70] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto scrollbar-sleek rounded-md border border-black/14 bg-[rgba(255,255,255,0.82)] text-popover-foreground shadow-[0_16px_36px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl dark:border-white/14 dark:bg-[rgba(0,0,0,0.72)] dark:shadow-[0_20px_44px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.04)] data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", i === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
			position: i,
			align: a,
			...c,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
					className: cn("p-1", i === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
					children: r
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
			]
		})
	});
}
function SelectItem({ className: e, children: r, ...i }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
		"data-slot": "select-item",
		className: cn("relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...i,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"data-slot": "select-item-indicator",
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children: r })]
	});
}
function SelectSeparator({ className: e, ...r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
		"data-slot": "select-separator",
		className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", e),
		...r
	});
}
function SelectScrollUpButton({ className: e, ...r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
		"data-slot": "select-scroll-up-button",
		className: cn("flex cursor-default items-center justify-center py-1", e),
		...r,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
	});
}
function SelectScrollDownButton({ className: e, ...r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
		"data-slot": "select-scroll-down-button",
		className: cn("flex cursor-default items-center justify-center py-1", e),
		...r,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
	});
}
export { SelectLabel as a, SelectValue as c, SelectItem as i, SelectContent as n, SelectSeparator as o, SelectGroup as r, SelectTrigger as s, Select as t };
