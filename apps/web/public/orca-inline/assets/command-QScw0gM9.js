import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { r as cn, s as composeRefs } from "./useMountedRef-De7bTfqf.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as Primitive } from "./dist-qqbILKL5.js";
import { t as useId } from "./dist-CxjmhSN9.js";
import { a as DialogOverlay, i as DialogDescription, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "./dist-DryAQYfi.js";
var U = 1, Y$1 = .9, H = .8, J = .17, p = .1, u = .999, $ = .9999, k$1 = .99, m = /[\\\/_+.#"@\[\(\{&]/, B$1 = /[\\\/_+.#"@\[\(\{&]/g, K$1 = /[\s-]/, X = /[\s-]/g;
function G(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? U : k$1;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), d = 0, f, h, g, j; l >= 0;) f = G(e, t, n, r, l + 1, a + 1, o), f > d && (l === i ? f *= U : m.test(e.charAt(l - 1)) ? (f *= H, g = e.slice(i, l - 1).match(B$1), g && i > 0 && (f *= u ** +g.length)) : K$1.test(e.charAt(l - 1)) ? (f *= Y$1, j = e.slice(i, l - 1).match(X), j && i > 0 && (f *= u ** +j.length)) : (f *= J, i > 0 && (f *= u ** +(l - i))), e.charAt(l) !== t.charAt(a) && (f *= $)), (f < p && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (h = G(e, t, n, r, l + 1, a + 2, o), h * p > f && (f = h * p)), f > d && (d = f), l = n.indexOf(c, l + 1);
	return o[s] = d, d;
}
function D(e) {
	return e.toLowerCase().replace(X, " ");
}
function W(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, G(e, t, D(e), D(t), 0, 0, {});
}
var import_react = /* @__PURE__ */ __toESM(require_react(), 1), N = "[cmdk-group=\"\"]", Y = "[cmdk-group-items=\"\"]", be = "[cmdk-group-heading=\"\"]", le = "[cmdk-item=\"\"]", ce = `${le}:not([aria-disabled="true"])`, Z = "cmdk-item-select", T = "data-value", Re = (e, t, n) => W(e, t, n), ue = import_react.createContext(void 0), K = () => import_react.useContext(ue), de = import_react.createContext(void 0), ee = () => import_react.useContext(de), fe = import_react.createContext(void 0), me = import_react.forwardRef((e, t) => {
	let n = L(() => ({
		search: "",
		value: e.value ?? e.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), r = L(() => /* @__PURE__ */ new Set()), i = L(() => /* @__PURE__ */ new Map()), a = L(() => /* @__PURE__ */ new Map()), c = L(() => /* @__PURE__ */ new Set()), l = pe(e), { label: d, children: f, value: h, onValueChange: g, filter: _, shouldFilter: v, loop: y, disablePointerSelection: b = !1, vimBindings: x = !0, ...S } = e, it = useId(), at = useId(), C = useId(), w = import_react.useRef(null), E = ke();
	k(() => {
		if (h !== void 0) {
			let e = h.trim();
			n.current.value = e, O.emit();
		}
	}, [h]), k(() => {
		E(6, ot);
	}, []);
	let O = import_react.useMemo(() => ({
		subscribe: (e) => (c.current.add(e), () => c.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, t, r) => {
			var i, a, o;
			if (!Object.is(n.current[e], t)) {
				if (n.current[e] = t, e === "search") I(), M(), E(1, F);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(C);
						e ? e.focus() : (i = document.getElementById(it)) == null || i.focus();
					}
					if (E(7, () => {
						n.current.selectedItemId = R()?.id, O.emit();
					}), r || E(5, ot), l.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = l.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				O.emit();
			}
		},
		emit: () => {
			c.current.forEach((e) => e());
		}
	}), []), A = import_react.useMemo(() => ({
		value: (e, t, r) => {
			t !== a.current.get(e)?.value && (a.current.set(e, {
				value: t,
				keywords: r
			}), n.current.filtered.items.set(e, j(t, r)), E(2, () => {
				M(), O.emit();
			}));
		},
		item: (e, t) => (r.current.add(e), t && (i.current.has(t) ? i.current.get(t).add(e) : i.current.set(t, new Set([e]))), E(3, () => {
			I(), M(), n.current.value || F(), O.emit();
		}), () => {
			a.current.delete(e), r.current.delete(e), n.current.filtered.items.delete(e);
			let t = R();
			E(4, () => {
				I(), t?.getAttribute("id") === e && F(), O.emit();
			});
		}),
		group: (e) => (i.current.has(e) || i.current.set(e, /* @__PURE__ */ new Set()), () => {
			a.current.delete(e), i.current.delete(e);
		}),
		filter: () => l.current.shouldFilter,
		label: d || e["aria-label"],
		getDisablePointerSelection: () => l.current.disablePointerSelection,
		listId: it,
		inputId: C,
		labelId: at,
		listInnerRef: w
	}), []);
	function j(e, t) {
		let r = l.current?.filter ?? Re;
		return e ? r(e, n.current.search, t) : 0;
	}
	function M() {
		if (!n.current.search || l.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, t = [];
		n.current.filtered.groups.forEach((n) => {
			let r = i.current.get(n), a = 0;
			r.forEach((t) => {
				let n = e.get(t);
				a = Math.max(n, a);
			}), t.push([n, a]);
		});
		let r = w.current;
		z().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(Y);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${Y} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${Y} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = w.current?.querySelector(`${N}[${T}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function F() {
		let e = z().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(T);
		O.setState("value", e || void 0);
	}
	function I() {
		if (!n.current.search || l.current.shouldFilter === !1) {
			n.current.filtered.count = r.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of r.current) {
			let r = j(a.current.get(t)?.value ?? "", a.current.get(t)?.keywords ?? []);
			n.current.filtered.items.set(t, r), r > 0 && e++;
		}
		for (let [e, t] of i.current) for (let r of t) if (n.current.filtered.items.get(r) > 0) {
			n.current.filtered.groups.add(e);
			break;
		}
		n.current.filtered.count = e;
	}
	function ot() {
		var e;
		let t = R();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(N)?.querySelector(be)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function R() {
		return w.current?.querySelector(`${le}[aria-selected="true"]`);
	}
	function z() {
		return Array.from(w.current?.querySelectorAll(ce) || []);
	}
	function V(e) {
		let t = z()[e];
		t && O.setState("value", t.getAttribute(T));
	}
	function q(e) {
		var t;
		let n = R(), r = z(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = l.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && O.setState("value", a.getAttribute(T));
	}
	function Q(e) {
		let t = R()?.closest(N), n;
		for (; t && !n;) t = e > 0 ? we(t, N) : De(t, N), n = t?.querySelector(ce);
		n ? O.setState("value", n.getAttribute(T)) : q(e);
	}
	let st = () => V(z().length - 1), ct = (e) => {
		e.preventDefault(), e.metaKey ? st() : e.altKey ? Q(1) : q(1);
	}, lt = (e) => {
		e.preventDefault(), e.metaKey ? V(0) : e.altKey ? Q(-1) : q(-1);
	};
	return import_react.createElement(Primitive.div, {
		ref: t,
		tabIndex: -1,
		...S,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = S.onKeyDown) == null || t.call(S, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					x && e.ctrlKey && ct(e);
					break;
				case "ArrowDown":
					ct(e);
					break;
				case "p":
				case "k":
					x && e.ctrlKey && lt(e);
					break;
				case "ArrowUp":
					lt(e);
					break;
				case "Home":
					e.preventDefault(), V(0);
					break;
				case "End":
					e.preventDefault(), st();
					break;
				case "Enter": {
					e.preventDefault();
					let t = R();
					if (t) {
						let e = new Event(Z);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, import_react.createElement("label", {
		"cmdk-label": "",
		htmlFor: A.inputId,
		id: A.labelId,
		style: Te
	}, d), B(e, (e) => import_react.createElement(de.Provider, { value: O }, import_react.createElement(ue.Provider, { value: A }, e))));
}), he = import_react.forwardRef((e, t) => {
	let n = useId(), i = import_react.useRef(null), a = import_react.useContext(fe), c = K(), l = pe(e), d = l.current?.forceMount ?? a?.forceMount;
	k(() => {
		if (!d) return c.item(n, a?.id);
	}, [d]);
	let f = ve(n, i, [
		e.value,
		e.children,
		i
	], e.keywords), h = ee(), g = P((e) => e.value && e.value === f.current), _ = P((e) => d || c.filter() === !1 ? !0 : e.search ? e.filtered.items.get(n) > 0 : !0);
	import_react.useEffect(() => {
		let t = i.current;
		if (!(!t || e.disabled)) return t.addEventListener(Z, v), () => t.removeEventListener(Z, v);
	}, [
		_,
		e.onSelect,
		e.disabled
	]);
	function v() {
		var e, t;
		y(), (t = (e = l.current).onSelect) == null || t.call(e, f.current);
	}
	function y() {
		h.setState("value", f.current, !0);
	}
	if (!_) return null;
	let { disabled: b, value: x, onSelect: S, forceMount: it, keywords: at, ...C } = e;
	return import_react.createElement(Primitive.div, {
		ref: composeRefs(i, t),
		...C,
		id: n,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!b,
		"aria-selected": !!g,
		"data-disabled": !!b,
		"data-selected": !!g,
		onPointerMove: b || c.getDisablePointerSelection() ? void 0 : y,
		onClick: b ? void 0 : v
	}, e.children);
}), Ee = import_react.forwardRef((e, t) => {
	let { heading: n, children: i, forceMount: a, ...c } = e, l = useId(), d = import_react.useRef(null), f = import_react.useRef(null), h = useId(), g = K(), _ = P((e) => a || g.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(l) : !0);
	k(() => g.group(l), []), ve(l, d, [
		e.value,
		e.heading,
		f
	]);
	let v = import_react.useMemo(() => ({
		id: l,
		forceMount: a
	}), [a]);
	return import_react.createElement(Primitive.div, {
		ref: composeRefs(d, t),
		...c,
		"cmdk-group": "",
		role: "presentation",
		hidden: _ ? void 0 : !0
	}, n && import_react.createElement("div", {
		ref: f,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: h
	}, n), B(e, (e) => import_react.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": n ? h : void 0
	}, import_react.createElement(fe.Provider, { value: v }, e))));
}), ye = import_react.forwardRef((e, t) => {
	let { alwaysRender: n, ...i } = e, a = import_react.useRef(null), s = P((e) => !e.search);
	return !n && !s ? null : import_react.createElement(Primitive.div, {
		ref: composeRefs(a, t),
		...i,
		"cmdk-separator": "",
		role: "separator"
	});
}), Se = import_react.forwardRef((e, t) => {
	let { onValueChange: n, ...r } = e, i = e.value != null, a = ee(), s = P((e) => e.search), c = P((e) => e.selectedItemId), l = K();
	return import_react.useEffect(() => {
		e.value != null && a.setState("search", e.value);
	}, [e.value]), import_react.createElement(Primitive.input, {
		ref: t,
		...r,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": l.listId,
		"aria-labelledby": l.labelId,
		"aria-activedescendant": c,
		id: l.inputId,
		type: "text",
		value: i ? e.value : s,
		onChange: (e) => {
			i || a.setState("search", e.target.value), n?.(e.target.value);
		}
	});
}), Ce = import_react.forwardRef((e, t) => {
	let { children: n, label: i = "Suggestions", ...a } = e, s = import_react.useRef(null), c = import_react.useRef(null), l = P((e) => e.selectedItemId), d = K();
	return import_react.useEffect(() => {
		if (c.current && s.current) {
			let e = c.current, t = s.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), import_react.createElement(Primitive.div, {
		ref: composeRefs(s, t),
		...a,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": l,
		"aria-label": i,
		id: d.listId
	}, B(e, (e) => import_react.createElement("div", {
		ref: composeRefs(c, d.listInnerRef),
		"cmdk-list-sizer": ""
	}, e)));
}), xe = import_react.forwardRef((e, t) => {
	let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e;
	return import_react.createElement(Dialog, {
		open: n,
		onOpenChange: r
	}, import_react.createElement(DialogPortal, { container: o }, import_react.createElement(DialogOverlay, {
		"cmdk-overlay": "",
		className: i
	}), import_react.createElement(DialogContent, {
		"aria-label": e.label,
		"cmdk-dialog": "",
		className: a
	}, import_react.createElement(me, {
		ref: t,
		...s
	}))));
}), Ie = import_react.forwardRef((e, t) => P((e) => e.filtered.count === 0) ? import_react.createElement(Primitive.div, {
	ref: t,
	...e,
	"cmdk-empty": "",
	role: "presentation"
}) : null), Pe = import_react.forwardRef((e, t) => {
	let { progress: n, children: r, label: i = "Loading...", ...a } = e;
	return import_react.createElement(Primitive.div, {
		ref: t,
		...a,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i
	}, B(e, (e) => import_react.createElement("div", { "aria-hidden": !0 }, e)));
}), _e = Object.assign(me, {
	List: Ce,
	Item: he,
	Input: Se,
	Group: Ee,
	Separator: ye,
	Dialog: xe,
	Empty: Ie,
	Loading: Pe
});
function we(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function De(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function pe(e) {
	let t = import_react.useRef(e);
	return k(() => {
		t.current = e;
	}), t;
}
var k = typeof window > "u" ? import_react.useEffect : import_react.useLayoutEffect;
function L(e) {
	let t = import_react.useRef();
	return t.current === void 0 && (t.current = e()), t;
}
function P(e) {
	let t = ee(), n = () => e(t.snapshot());
	return import_react.useSyncExternalStore(t.subscribe, n, n);
}
function ve(e, t, n, r = []) {
	let i = import_react.useRef(), a = K();
	return k(() => {
		var o;
		let s = (() => {
			for (let e of n) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : i.current;
			}
		})(), c = r.map((e) => e.trim());
		a.value(e, s, c), (o = t.current) == null || o.setAttribute(T, s), i.current = s;
	}), i;
}
var ke = () => {
	let [e, t] = import_react.useState(), n = L(() => /* @__PURE__ */ new Map());
	return k(() => {
		n.current.forEach((e) => e()), n.current = /* @__PURE__ */ new Map();
	}, [e]), (e, r) => {
		n.current.set(e, r), t({});
	};
};
function Me(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function B({ asChild: e, children: t }, n) {
	return e && import_react.isValidElement(t) ? import_react.cloneElement(Me(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var Te = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
}, import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function Command({ className: e, ...t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e, {
		"data-slot": "command",
		className: cn("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
		...t
	});
}
function CommandDialog({ children: e, title: t = "Command Palette", description: r = "Search for a command to run...", shouldFilter: i, onOpenAutoFocus: a, onCloseAutoFocus: o, contentClassName: s, overlayClassName: _, commandProps: v, ...y }) {
	let { className: b, ...x } = v ?? {};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		...y,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: cn("fixed inset-0 z-50 bg-black/55 backdrop-blur-[2px] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0", _) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: cn("fixed top-[20%] left-[50%] z-50 w-[660px] max-w-[90vw] translate-x-[-50%] rounded-lg border border-black/14 bg-background/96 text-foreground shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl outline-none dark:border-white/14 dark:bg-[rgba(23,23,23,0.96)] dark:shadow-[0_24px_72px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95", s),
			onOpenAutoFocus: a,
			onCloseAutoFocus: o,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: t
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "sr-only",
					children: r
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, {
					shouldFilter: i,
					className: cn("[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3", b),
					...x,
					children: e
				})
			]
		})] })
	});
}
function CommandInput({ className: e, wrapperClassName: t, iconClassName: r, trailing: a, ref: o, ...s }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center border-b border-border bg-muted/30 px-3 py-1", t),
		"data-cmdk-input-wrapper": "",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: cn("mr-2 h-4 w-4 shrink-0 opacity-50", r) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
				ref: o,
				"data-slot": "command-input",
				className: cn("flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
				...s
			}),
			a
		]
	});
}
function CommandList({ className: e, ref: t, ...r }) {
	let i = import_react.useRef(null);
	import_react.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let t = (t) => {
			e.scrollHeight <= e.clientHeight || (t.preventDefault(), e.scrollTop += t.deltaY);
		};
		return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
	}, []);
	let a = import_react.useCallback((e) => {
		i.current = e, typeof t == "function" ? t(e) : t && (t.current = e);
	}, [t]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.List, {
		ref: a,
		"data-slot": "command-list",
		className: cn("max-h-[min(400px,60vh)] overflow-y-auto overflow-x-hidden scrollbar-sleek scroll-pb-4 scroll-pt-4", e),
		...r
	});
}
function CommandEmpty({ className: e, ...t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
		"data-slot": "command-empty",
		className: cn("py-6 text-center text-sm text-muted-foreground", e),
		...t
	});
}
function CommandGroup({ className: e, ...t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
		"data-slot": "command-group",
		className: cn("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
		...t
	});
}
function CommandItem({ className: e, ref: t, ...r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Item, {
		ref: t,
		"data-slot": "command-item",
		className: cn("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\"size-\"])]:size-4", e),
		...r
	});
}
function CommandSeparator({ className: e, ...t }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Separator, {
		"data-slot": "command-separator",
		className: cn("-mx-1 h-px bg-border", e),
		...t
	});
}
export { CommandInput as a, CommandSeparator as c, CommandGroup as i, Re as l, CommandDialog as n, CommandItem as o, CommandEmpty as r, CommandList as s, Command as t };
