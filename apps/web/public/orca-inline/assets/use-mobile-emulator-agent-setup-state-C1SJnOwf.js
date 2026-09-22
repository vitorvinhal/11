import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as Info } from "./info-CS7SIWrO.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { Lg as isHandledWireDiscriminant, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { a as DropdownMenuLabel, l as DropdownMenuSeparator } from "./dropdown-menu-DRu_J4_e.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { y as ORCA_CLI_SKILL_NAME } from "./orchestration-setup-state-CE8DDbY6.js";
import { n as getWindowParkVisible, r as subscribeWindowParkVisibility, t as WINDOW_HIDE_PARK_GRACE_MS } from "./window-park-visibility-BBcurIcE.js";
import { i as useInstalledAgentSkill, t as GLOBAL_AGENT_SKILL_SOURCE_KINDS } from "./useInstalledAgentSkills-elga6kkz.js";
import { l as ensureOrcaCliAvailableForAgentSkillTerminal, u as isOrcaCliAvailableOnPath } from "./CliSkillRuntimeSetup-l01nqxEe.js";
var Import = createLucideIcon("import", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m8 11 4 4 4-4",
		key: "1dohi6"
	}],
	["path", {
		d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
		key: "1ywtjm"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react());
function useWindowStreamVisible(e = 500) {
	let g = (0, import_react.useSyncExternalStore)(subscribeWindowParkVisibility, getWindowParkVisible, getWindowParkVisible), [_, v] = (0, import_react.useState)(g);
	return (0, import_react.useEffect)(() => {
		if (g) {
			v(!0);
			return;
		}
		let _ = window.setTimeout(() => v(!1), e);
		return () => window.clearTimeout(_);
	}, [e, g]), _;
}
var HANDLED_WARNING_CODES = {
	"restart-fallback-unavailable": !0,
	"cookies-undecryptable": !0
}, HANDLED_UNDECRYPTABLE_REASONS = {
	"app-bound-encryption": !0,
	"linux-keyring-unavailable": !0,
	unknown: !0
};
function formatCookieImportWarning(e) {
	let g = e.code;
	if (!isHandledWireDiscriminant(g, HANDLED_WARNING_CODES)) return translate("auto.lib.browser.cookie.import.toast.unrecognizedWarning", "The cookie import finished with a warning this version of Orca does not recognize. Update Orca to see the details, then check this profile before relying on its cookies.");
	switch (e.code) {
		case "restart-fallback-unavailable": return e.loadedCookies === 0 ? translate("auto.lib.browser.cookie.import.toast.restartFallbackUnavailableNone", "None of the {{value0}} cookies could be loaded, and the restart fallback was unavailable. The previous cookies for this profile were replaced. Try the import again.", { value0: e.failedCookies }) : translate("auto.lib.browser.cookie.import.toast.restartFallbackUnavailablePartial", "Imported {{value0}} of {{value1}} cookies. The rest could not be loaded, and the restart fallback was unavailable. Try the import again.", {
			value0: e.loadedCookies,
			value1: e.loadedCookies + e.failedCookies
		});
		case "cookies-undecryptable": {
			let g = e.reason;
			if (!isHandledWireDiscriminant(g, HANDLED_UNDECRYPTABLE_REASONS)) return translate("auto.lib.browser.cookie.import.toast.undecryptableUnrecognizedReason", "{{value0}} cookies could not be decrypted and were skipped for a reason this version of Orca does not recognize. Update Orca to see the details, then try the import again.", { value0: e.failedCookies });
			switch (e.reason) {
				case "app-bound-encryption": return e.otherFailedCookies ? translate("auto.lib.browser.cookie.import.toast.undecryptableAppBoundMixed", "Orca cannot decrypt {{value0}} of this browser's cookies because they use app-bound encryption; {{value1}} more could not be decrypted for another reason. You can import cookies from a file using “From File…”.", {
					value0: e.failedCookies,
					value1: e.otherFailedCookies
				}) : translate("auto.lib.browser.cookie.import.toast.undecryptableAppBound", "Orca cannot decrypt {{value0}} of this browser's cookies because they use app-bound encryption. You can import cookies from a file using “From File…”.", { value0: e.failedCookies });
				case "linux-keyring-unavailable": return e.otherFailedCookies ? translate("auto.lib.browser.cookie.import.toast.undecryptableKeyringMixed", "{{value0}} cookies could not be decrypted because the system keyring was unavailable; {{value1}} more could not be decrypted for another reason. Unlock your login keyring (or install a Secret Service provider such as gnome-keyring) and import again.", {
					value0: e.failedCookies,
					value1: e.otherFailedCookies
				}) : translate("auto.lib.browser.cookie.import.toast.undecryptableKeyring", "{{value0}} cookies could not be decrypted because the system keyring was unavailable. Unlock your login keyring (or install a Secret Service provider such as gnome-keyring) and import again.", { value0: e.failedCookies });
				case "unknown": return translate("auto.lib.browser.cookie.import.toast.undecryptableUnknown", "{{value0}} cookies could not be decrypted and were skipped. Close the source browser completely and try the import again.", { value0: e.failedCookies });
			}
		}
	}
}
function cookieImportLocationDescription(e) {
	return e.executionRemoteEnvironment ? e.executionMachine === "client" ? translate("auto.lib.browser.cookie.import.toast.locationClientHosted", "Read from this device and stored here for the {{value0}} workspace.", { value0: e.executionHostLabel }) : translate("auto.lib.browser.cookie.import.toast.locationRemoteHost", "Read from browsers on {{value0}} and stored there.", { value0: e.executionHostLabel }) : null;
}
function emitGoogleCookieImportWarning(e, g) {
	if (!e.googleCookiesSkipped) return;
	let v = g.executionRemoteEnvironment ? g.executionMachine === "client" ? translate("auto.lib.browser.cookie.import.toast.googleCookiesSkippedClientHosted", "Google cookies were not imported. Open a browser tab in the {{value0}} workspace with this profile — it opens on this device — then sign into Google.", { value0: g.executionHostLabel }) : translate("auto.lib.browser.cookie.import.toast.googleCookiesSkippedRemoteWorkspace", "Google cookies were not imported. Open a browser tab in the {{value0}} workspace with this profile, then sign into Google.", { value0: g.executionHostLabel }) : translate("auto.lib.browser.cookie.import.toast.googleCookiesSkippedLocal", "Google cookies were not imported. Open a browser in Orca with this profile, then sign into Google.");
	toast.warning(v, { duration: 12e3 });
}
function emitPartitionSkippedImportWarning(e) {
	e.partitionSkippedCookies && toast.warning(translate("auto.lib.browser.cookie.import.toast.partitionSkipped", "{{value0}} cookies were not imported because their site-partition could not be read. Sign in to those sites again in Orca.", { value0: e.partitionSkippedCookies }), { duration: 12e3 });
}
function emitBrowserCookieImportToast(e, g, _) {
	let v = e.warning;
	if (v) toast.warning(formatCookieImportWarning(v));
	else {
		let e = cookieImportLocationDescription(_);
		e ? toast.success(g, { description: e }) : toast.success(g);
	}
	emitGoogleCookieImportWarning(e, _), emitPartitionSkippedImportWarning(e);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function BrowserCookieImportDisclosure() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuLabel, {
		className: "flex max-w-64 items-start gap-2 whitespace-normal py-2 font-normal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, {
			"aria-hidden": !0,
			className: "mt-0.5 size-3.5 shrink-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-medium leading-4 text-foreground",
				children: translate("auto.components.BrowserCookieImportDisclosure.title", "Google logins aren't imported")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block leading-4 text-muted-foreground",
				children: translate("auto.components.BrowserCookieImportDisclosure.description", "Sign in to Google directly in Orca.")
			})]
		})]
	})] });
}
function BrowserCookieImportMachineNotice() {
	let e = useAppStore((e) => e.detectedBrowsersHost);
	if (!e) return null;
	let g = e.machine === "client", v = e.hostLabel;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: g ? translate("auto.components.BrowserCookieImportMachineNotice.clientLabel", "Browsers on this device") : translate("auto.components.BrowserCookieImportMachineNotice.remoteLabel", "Browsers on {{value0}}", { value0: v }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "max-w-60 px-2 pb-1.5 text-[11px] leading-4 text-muted-foreground",
		children: g ? translate("auto.components.BrowserCookieImportMachineNotice.clientNoteLocalStorage", "Imports read this device’s browsers. Cookies are stored locally.") : translate("auto.components.BrowserCookieImportMachineNotice.remoteNoteRemoteStorage", "Imports read browsers on {{value0}}. Cookies are stored on that machine, and a permission prompt may appear on its screen.", { value0: v })
	})] });
}
function StepBadge({ index: e, state: g }) {
	return g === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" })
	}) : g === "in-progress" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex size-6 shrink-0 items-center justify-center rounded-full border border-border/70 text-xs font-medium text-muted-foreground",
		children: e
	});
}
function getMobileEmulatorCliPathNeedsAttention(e) {
	return e?.state === "installed" && e.pathConfigured === !1;
}
function getMobileEmulatorCliStepBadgeState(e) {
	return e.cliEnabled ? "done" : e.cliBusy || e.cliPathNeedsAttention ? "in-progress" : "pending";
}
function shouldShowMobileEmulatorSkillPreInstallNotice(e) {
	return !e.cliSkillInstalled && !e.cliEnabled;
}
function getCliActionLabel(e, g) {
	return g ? translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.fdcca1ec75", "Registering...") : isOrcaCliAvailableOnPath(e) ? translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.69fb2c2289", "Enabled") : e?.state === "installed" ? translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.c6705092ba", "Fix PATH") : translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.7c1b6bdb1e", "Enable");
}
function useMobileEmulatorAgentSetupState(e = !0) {
	let [g, y] = (0, import_react.useState)(null), [b, x] = (0, import_react.useState)(!0), [S, C] = (0, import_react.useState)(!1), [w, T] = (0, import_react.useState)(!1), E = useMountedRef(), { installed: D, loading: O, error: k, refresh: A } = useInstalledAgentSkill(ORCA_CLI_SKILL_NAME, {
		enabled: e,
		sourceKinds: GLOBAL_AGENT_SKILL_SOURCE_KINDS
	}), j = (0, import_react.useCallback)(async () => {
		x(!0);
		try {
			let e = await window.api.cli.getInstallStatus();
			E.current && y(e);
		} catch (e) {
			E.current && (toast.error(e instanceof Error ? e.message : translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.51074ccb05", "Failed to load CLI status.")), y(null));
		} finally {
			E.current && x(!1);
		}
	}, [E]);
	(0, import_react.useEffect)(() => {
		e && j();
	}, [e, j]), (0, import_react.useEffect)(() => {
		if (!e) return;
		let g = () => {
			j(), A();
		};
		return window.addEventListener("focus", g), () => window.removeEventListener("focus", g);
	}, [
		e,
		A,
		j
	]);
	let M = isOrcaCliAvailableOnPath(g), N = getMobileEmulatorCliPathNeedsAttention(g), P = g?.supported ?? !1, F = [M, D].filter(Boolean).length, I = !M && !D, L = M && D, R = !b && !O, z = (0, import_react.useCallback)(async () => {
		if (!w) {
			T(!0);
			try {
				let [e, g] = await Promise.all([window.api.cli.getInstallStatus(), A()]);
				E.current && y(e);
				let v = isOrcaCliAvailableOnPath(e);
				if (!E.current) return;
				if (v && g) {
					toast.success(translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.35dea1ae12", "Agent control is ready."));
					return;
				}
				if (g) {
					toast.message(translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.9dff3a6338", "Skill is installed. Enable the Orca CLI to finish setup."));
					return;
				}
				if (v) {
					toast.message(translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.15986a1080", "Orca CLI is ready. Install the skill to finish setup."));
					return;
				}
				toast.message(translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.4c26913def", "Still not set up. Complete both steps to enable agent control."));
			} catch (e) {
				E.current && toast.error(e instanceof Error ? e.message : translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.c94ff11e91", "Could not re-check setup status."));
			} finally {
				E.current && T(!1);
			}
		}
	}, [
		E,
		A,
		w
	]), B = (0, import_react.useCallback)(async () => {
		C(!0);
		try {
			let e = await ensureOrcaCliAvailableForAgentSkillTerminal({ onStatusChange: y });
			E.current && isOrcaCliAvailableOnPath(e) && toast.success(translate("auto.components.emulator.pane.use.mobile.emulator.agent.setup.state.2b519eed94", "Registered the Orca CLI in PATH."));
		} finally {
			E.current && C(!1);
		}
	}, [E]);
	return {
		cliActionLabel: getCliActionLabel(g, S),
		cliBusy: S,
		cliEnabled: M,
		cliInstallStatus: g,
		cliPathNeedsAttention: N,
		cliLoading: b,
		cliSkillError: k,
		cliSkillInstalled: D,
		cliSkillLoading: O,
		cliSupported: P,
		completedCount: F,
		handleEnableCli: B,
		recheckSetup: z,
		refreshCliSkill: A,
		setupComplete: L,
		setupRechecking: w,
		statusReady: R,
		step2Blocked: I
	};
}
export { BrowserCookieImportMachineNotice as a, useWindowStreamVisible as c, StepBadge as i, Import as l, getMobileEmulatorCliStepBadgeState as n, BrowserCookieImportDisclosure as o, shouldShowMobileEmulatorSkillPreInstallNotice as r, emitBrowserCookieImportToast as s, useMobileEmulatorAgentSetupState as t };
