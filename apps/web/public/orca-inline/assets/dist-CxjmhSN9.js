import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { n as useLayoutEffect2 } from "./dist-DDM3IpIH.js";
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useStateMachine(e, r) {
	return import_react.useReducer((e, i) => r[e][i] ?? e, e);
}
var Presence = (e) => {
	let { present: r, children: i } = e, o = usePresence(r), s = typeof i == "function" ? i({ present: o.isPresent }) : import_react.Children.only(i), l = useStableComposedRefs(o.ref, getElementRef(s));
	return typeof i == "function" || o.isPresent ? import_react.cloneElement(s, { ref: l }) : null;
};
Presence.displayName = "Presence";
function usePresence(e) {
	let [r, s] = import_react.useState(), c = import_react.useRef(null), l = import_react.useRef(e), u = import_react.useRef("none"), d = import_react.useRef(void 0), [f, p] = useStateMachine(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return import_react.useEffect(() => {
		f === "mounted" ? (u.current = d.current ?? getAnimationName(c.current), d.current = void 0) : u.current = "none";
	}, [f]), useLayoutEffect2(() => {
		let r = c.current, i = l.current;
		if (i !== e) {
			let a = u.current, o = getAnimationName(r);
			e ? (d.current = o, p("MOUNT")) : o === "none" || r?.display === "none" ? p("UNMOUNT") : p(i && a !== o ? "ANIMATION_OUT" : "UNMOUNT"), l.current = e;
		}
	}, [e, p]), useLayoutEffect2(() => {
		if (r) {
			let e, i = r.ownerDocument.defaultView ?? window, a = (a) => {
				let o = getAnimationName(c.current).includes(CSS.escape(a.animationName));
				if (a.target === r && o && (p("ANIMATION_END"), !l.current)) {
					let a = r.style.animationFillMode;
					r.style.animationFillMode = "forwards", e = i.setTimeout(() => {
						r.style.animationFillMode === "forwards" && (r.style.animationFillMode = a);
					});
				}
			}, o = (e) => {
				e.target === r && (u.current = getAnimationName(c.current));
			};
			return r.addEventListener("animationstart", o), r.addEventListener("animationcancel", a), r.addEventListener("animationend", a), () => {
				i.clearTimeout(e), r.removeEventListener("animationstart", o), r.removeEventListener("animationcancel", a), r.removeEventListener("animationend", a);
			};
		} else p("ANIMATION_END");
	}, [r, p]), {
		isPresent: ["mounted", "unmountSuspended"].includes(f),
		ref: import_react.useCallback((e) => {
			if (e) {
				let r = getComputedStyle(e);
				c.current = r, d.current = getAnimationName(r);
			} else c.current = null;
			s(e);
		}, [])
	};
}
function setRef(e, r) {
	if (typeof e == "function") return e(r);
	e != null && (e.current = r);
}
function useStableComposedRefs(...e) {
	let r = import_react.useRef(e);
	return r.current = e, import_react.useCallback((e) => {
		let i = r.current, a = !1, o = i.map((r) => {
			let i = setRef(r, e);
			return !a && typeof i == "function" && (a = !0), i;
		});
		if (a) return () => {
			for (let e = 0; e < o.length; e++) {
				let r = o[e];
				typeof r == "function" ? r() : setRef(i[e], null);
			}
		};
	}, []);
}
function getAnimationName(e) {
	return e?.animationName || "none";
}
function getElementRef(e) {
	let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, i = r && "isReactWarning" in r && r.isReactWarning;
	return i ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, i = r && "isReactWarning" in r && r.isReactWarning, i ? e.props.ref : e.props.ref || e.ref);
}
var useReactId = import_react.useId || (() => void 0), count = 0;
function useId(e) {
	let [r, o] = import_react.useState(useReactId());
	return useLayoutEffect2(() => {
		e || o((e) => e ?? String(count++));
	}, [e]), e || (r ? `radix-${r}` : "");
}
export { Presence as n, useId as t };
