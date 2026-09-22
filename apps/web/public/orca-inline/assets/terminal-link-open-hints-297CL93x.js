import { i as translate } from "./i18n-CakWKPtl.js";
import { $ as openHttpLink } from "./store-C9f8FDJV.js";
function canSourceOwnerOpenInOrca(e, d) {
	return e.kind === "local" || (e.kind === "runtime" || e.kind === "ssh") && d;
}
function httpLinkActionDestinationsFor(e, d, p) {
	return canSourceOwnerOpenInOrca(d, p) ? e?.openLinksInApp === !0 ? {
		primary: "orca",
		alternate: "system"
	} : {
		primary: "system",
		alternate: "orca"
	} : { primary: "system" };
}
function httpLinkDestinationLabel(d) {
	return d === "orca" ? translate("auto.components.terminal.pane.TerminalLinkActionPopover.orcaBrowser", "Orca Browser") : translate("auto.components.terminal.pane.TerminalLinkActionPopover.systemBrowser", "System Browser");
}
function buildHttpLinkActions(d, f) {
	let p = d?.primary, h = {
		external: p === "system",
		label: p ? httpLinkDestinationLabel(p) : translate("auto.components.terminal.pane.TerminalLinkActionPopover.openLink", "Open link"),
		run: () => f(p)
	}, g = d?.alternate;
	return g ? {
		primary: h,
		alternate: {
			external: g === "system",
			label: httpLinkDestinationLabel(g),
			run: () => f(g)
		}
	} : { primary: h };
}
function openRoutedHttpLink(e, f) {
	let p = f.sourceOwner ?? { kind: "local" };
	if (f.forceDestination) {
		openHttpLink(e, {
			allowRemoteInApp: !0,
			worktreeId: f.worktreeId,
			forceInApp: f.forceDestination === "orca",
			forceSystemBrowser: f.forceDestination === "system",
			sourceOwner: p
		});
		return;
	}
	if (f.modifierHeld) {
		openHttpLink(e, {
			allowRemoteInApp: !0,
			worktreeId: f.worktreeId,
			modifierHeld: !0,
			sourceOwner: p
		});
		return;
	}
	let m = p.kind === "local" ? f.requestOpenLinksInAppPreference?.(e) : null;
	if (m == null) {
		openHttpLink(e, {
			allowRemoteInApp: !0,
			worktreeId: f.worktreeId,
			sourceOwner: p
		});
		return;
	}
	Promise.resolve(m).then((m) => {
		openHttpLink(e, {
			allowRemoteInApp: !0,
			worktreeId: f.worktreeId,
			forceSystemBrowser: !m,
			sourceOwner: p
		});
	}).catch(() => {
		openHttpLink(e, {
			allowRemoteInApp: !0,
			worktreeId: f.worktreeId,
			forceSystemBrowser: !0,
			sourceOwner: p
		});
	});
}
function isMacPlatform() {
	return navigator.userAgent.includes("Mac");
}
function terminalLinkActionHintPrefix(e) {
	return e ? "Click for actions, " : "";
}
function getTerminalFileOpenHint(e = !0) {
	let d = terminalLinkActionHintPrefix(e);
	return isMacPlatform() ? `${d}⌘+click to open, or ⇧⌘+click for default app` : `${d}Ctrl+click to open, or Shift+Ctrl+click for default app`;
}
function getTerminalOrcaFileOpenHint(e = !0) {
	let d = e ? "Click for actions or " : "";
	return isMacPlatform() ? `${d}⌘+click to open in Orca` : `${d}Ctrl+click to open in Orca`;
}
function getTerminalHtmlFileOpenHint(e = !0) {
	let d = terminalLinkActionHintPrefix(e);
	return isMacPlatform() ? `${d}⌘+click to open, or ⇧⌘+click for default browser` : `${d}Ctrl+click to open, or Shift+Ctrl+click for default browser`;
}
function terminalUrlOpenHintOptionsFor(e, d, p = !1) {
	let m = d ? canSourceOwnerOpenInOrca(d, p) : !e?.activeRuntimeEnvironmentId?.trim();
	return {
		openLinksInApp: e?.openLinksInApp === !0,
		modifierInverts: e?.openLinksInAppModifierInverts === !0 && m
	};
}
function getTerminalUrlOpenHint(e = {}) {
	let d = e.modifierInverts === !0 && e.openLinksInApp !== !0, f = terminalLinkActionHintPrefix(e.showActions !== !1);
	return d ? isMacPlatform() ? `${f}⌘+click to open, or ⇧⌘+click to open in Orca` : `${f}Ctrl+click to open, or Shift+Ctrl+click to open in Orca` : isMacPlatform() ? `${f}⌘+click to open, or ⇧⌘+click for system browser` : `${f}Ctrl+click to open, or Shift+Ctrl+click for system browser`;
}
function getTerminalUrlSystemBrowserHint() {
	return isMacPlatform() ? "⇧⌘+click for system browser" : "Shift+Ctrl+click for system browser";
}
function getTerminalUrlOrcaBrowserHint() {
	return isMacPlatform() ? "⇧⌘+click to open in Orca" : "Shift+Ctrl+click to open in Orca";
}
function getTerminalWorktreePathOpenHint(e, d = !0) {
	let f = terminalLinkActionHintPrefix(d);
	if (!e) {
		let e = d ? "Click for actions or " : "";
		return isMacPlatform() ? `${e}⌘+click to switch workspace` : `${e}Ctrl+click to switch workspace`;
	}
	return isMacPlatform() ? `${f}⌘+click to switch workspace, or ⇧⌘+click to open in Finder` : `${f}Ctrl+click to switch workspace, or Shift+Ctrl+click to open folder`;
}
export { getTerminalUrlOrcaBrowserHint as a, isMacPlatform as c, httpLinkActionDestinationsFor as d, openRoutedHttpLink as f, getTerminalUrlOpenHint as i, terminalUrlOpenHintOptionsFor as l, getTerminalHtmlFileOpenHint as n, getTerminalUrlSystemBrowserHint as o, getTerminalOrcaFileOpenHint as r, getTerminalWorktreePathOpenHint as s, getTerminalFileOpenHint as t, buildHttpLinkActions as u };
