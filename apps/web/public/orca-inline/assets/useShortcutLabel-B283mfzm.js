import { t as useAppStore } from "./store-C9f8FDJV.js";
import { _ as isDoubleTapBinding, a as formatKeybindingList, i as formatKeybinding, u as getEffectiveKeybindingsForAction } from "./keybindings-1v53ESY9.js";
import { t as getShortcutPlatform } from "./shortcut-platform-yj_laTMg.js";
var cachesByOverrides = /* @__PURE__ */ new WeakMap(), defaultOverridesCache = /* @__PURE__ */ new Map();
function labelCache(e) {
	if (!e) return defaultOverridesCache;
	let f = cachesByOverrides.get(e);
	return f || (f = /* @__PURE__ */ new Map(), cachesByOverrides.set(e, f)), f;
}
function memoizeShortcut(e, f, p, m, h) {
	let g = labelCache(m), _ = `${p}\u0000${e}\u0000${f}`;
	if (g.has(_)) return g.get(_);
	let v = h();
	return g.set(_, v), v;
}
function formatShortcutLabel(e, f) {
	let m = getShortcutPlatform();
	return memoizeShortcut("label", e, m, f, () => formatKeybindingList(getEffectiveKeybindingsForAction(e, m, f), m));
}
function formatPrimaryShortcutLabel(e, f) {
	let m = getShortcutPlatform();
	return memoizeShortcut("primary", e, m, f, () => {
		let [g] = getEffectiveKeybindingsForAction(e, m, f);
		return g ? formatKeybindingList([g], m) : "Unassigned";
	});
}
function useShortcutLabel(f) {
	return formatShortcutLabel(f, useAppStore((e) => e.keybindings));
}
function formatOptionalShortcutLabel(e, f) {
	let m = getShortcutPlatform();
	return memoizeShortcut("optional", e, m, f, () => {
		let g = getEffectiveKeybindingsForAction(e, m, f);
		return g.length === 0 ? null : formatKeybindingList(g, m);
	});
}
function formatOptionalPrimaryShortcutLabel(e, f) {
	let m = getShortcutPlatform();
	return memoizeShortcut("optionalPrimary", e, m, f, () => {
		let [g] = getEffectiveKeybindingsForAction(e, m, f);
		return g ? formatKeybindingList([g], m) : null;
	});
}
function useOptionalShortcutLabel(f) {
	return formatOptionalShortcutLabel(f, useAppStore((e) => e.keybindings));
}
function formatShortcutKeyComboDetails(e, p) {
	let _ = getShortcutPlatform();
	return memoizeShortcut("combo", e, _, p, () => getEffectiveKeybindingsForAction(e, _, p).map((e) => ({
		keys: formatKeybinding(e, _),
		doubleTap: isDoubleTapBinding(e)
	})));
}
function useShortcutKeyComboDetails(f) {
	return formatShortcutKeyComboDetails(f, useAppStore((e) => e.keybindings));
}
function useShortcutKeyDetails(e) {
	return useShortcutKeyComboDetails(e)[0] ?? {
		keys: [],
		doubleTap: !1
	};
}
export { useOptionalShortcutLabel as a, useShortcutLabel as c, formatShortcutLabel as i, formatPrimaryShortcutLabel as n, useShortcutKeyComboDetails as o, formatShortcutKeyComboDetails as r, useShortcutKeyDetails as s, formatOptionalPrimaryShortcutLabel as t };
