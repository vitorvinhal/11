import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { t as OpenInApplicationIcon } from "./open-in-app-catalog-D2IDnDpO.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { Q as showLocalPathOpenBlockedToast, Z as isLocalPathOpenBlocked, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { d as DropdownMenuSub, f as DropdownMenuSubContent, i as DropdownMenuItem, l as DropdownMenuSeparator, p as DropdownMenuSubTrigger } from "./dropdown-menu-DRu_J4_e.js";
import { n as toast } from "./dist-E3opdjfr.js";
function getLocalFileManagerLabel(c) {
	let E = c ?? (typeof navigator > "u" ? "" : navigator.userAgent);
	return E.includes("Mac") ? "Finder" : E.includes("Windows") ? "File Explorer" : "File Manager";
}
var VSCODE_LAUNCHER_NAMES = new Set([
	"code",
	"code-insiders",
	"code - insiders"
]), WINDOWS_ABSOLUTE_PATH = /^(?:[a-z]:[\\/]|\\\\)/i;
function stripMatchingQuotes(c) {
	let E = c.trim(), D = E[0];
	return (D === "\"" || D === "'") && E.endsWith(D) ? E.slice(1, -1) : E;
}
function isVsCodeLauncherExecutable(c) {
	let E = (stripMatchingQuotes(c).split(/[\\/]/).at(-1) ?? "").replace(/\.(?:cmd|exe|bat)$/i, "").toLowerCase();
	return VSCODE_LAUNCHER_NAMES.has(E);
}
function isVsCodeRemoteSshCommand(c) {
	let E = stripMatchingQuotes(c?.trim() || "code");
	return /\s/.test(E) ? (E.startsWith("/") || WINDOWS_ABSOLUTE_PATH.test(E)) && isVsCodeLauncherExecutable(E) : isVsCodeLauncherExecutable(E);
}
function getExternalEditorOpenCapability(c, E) {
	return c?.activeRuntimeEnvironmentId?.trim() ? {
		allowed: !1,
		reason: "remote-runtime"
	} : E.connectionId?.trim() ? isVsCodeRemoteSshCommand(E.command) ? {
		allowed: !0,
		remote: !0
	} : {
		allowed: !1,
		reason: "local-only-editor"
	} : {
		allowed: !0,
		remote: !1
	};
}
const NO_OPEN_IN_APPLICATIONS = [];
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function getWorktreeOpenInEntries(c, E) {
	return [...c.map((c) => ({
		id: c.id,
		label: c.label,
		target: "external-editor",
		command: c.command
	})), {
		id: "file-manager",
		label: E,
		target: "file-manager"
	}];
}
function getOpenInEntryAvailability(c, E, O) {
	if (c.target === "file-manager") return isLocalPathOpenBlocked(E, { connectionId: O }) ? {
		disabled: !0,
		metadata: translate("auto.components.sidebar.WorktreeOpenInMenu.localOnly", "Local only")
	} : { disabled: !1 };
	let k = getExternalEditorOpenCapability(E, {
		connectionId: O,
		command: c.command
	});
	return k.allowed ? k.remote ? {
		disabled: !1,
		metadata: translate("auto.components.sidebar.WorktreeOpenInMenu.remoteSsh", "Remote SSH")
	} : { disabled: !1 } : {
		disabled: !0,
		metadata: translate("auto.components.sidebar.WorktreeOpenInMenu.localOnly", "Local only")
	};
}
function showOpenFailureToast(c, E) {
	if (c.reason === "remote-runtime-unsupported") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.remoteRuntimeUnsupported", "Opening this path in a local app is not available."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.remoteRuntimeUnsupportedDetail", "Switch to a local or SSH workspace, then try again.") });
		return;
	}
	if (c.reason === "ssh-target-not-found") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.sshTargetNotFound", "SSH host is no longer available."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.sshTargetNotFoundDetail", "Refresh workspaces or reconnect the host, then try again.") });
		return;
	}
	if (c.reason === "ssh-target-invalid") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.sshTargetInvalid", "SSH host configuration is incomplete."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.sshTargetInvalidDetail", "Edit or reconnect the SSH host, then try again.") });
		return;
	}
	if (c.reason === "ssh-alias-required") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.sshAliasRequired", "VS Code needs an SSH config alias for this host."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.sshAliasRequiredDetail", "Add a Host alias for {{host}}:{{port}} to your local SSH config, reconnect the workspace, then try again.", {
			host: c.host,
			port: c.port
		}) });
		return;
	}
	if (c.reason === "remote-editor-unsupported") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.remoteEditorUnsupported", "This app cannot open SSH workspaces."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.remoteEditorUnsupportedDetail", "Choose VS Code or use the app locally.") });
		return;
	}
	if (c.reason === "not-absolute") {
		toast.error(E ? translate("auto.components.sidebar.WorktreeOpenInMenu.remotePathInvalid", "Path is not valid for the SSH host.") : translate("auto.components.sidebar.WorktreeOpenInMenu.f387af445b", "Workspace path is not a valid local path."), E ? { description: translate("auto.components.sidebar.WorktreeOpenInMenu.remotePathInvalidDetail", "Refresh the workspace before trying again.") } : void 0);
		return;
	}
	if (c.reason === "not-found") {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.3921d3d9a5", "Workspace folder was not found."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.0bed8727db", "It may have been moved or deleted. Refresh workspaces or remove it from Orca.") });
		return;
	}
	if (E) {
		toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.remoteLaunchFailed", "Could not open the path in VS Code."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.remoteLaunchFailedDetail", "Check the VS Code command configured on this machine.") });
		return;
	}
	toast.error(translate("auto.components.sidebar.WorktreeOpenInMenu.9a5381eb09", "Could not open workspace folder."), { description: translate("auto.components.sidebar.WorktreeOpenInMenu.bd0e8159f8", "Check the editor command or file manager configuration on this machine.") });
}
function stopMenuPropagation(c) {
	c.stopPropagation();
}
function openOpenInAppsSettings() {
	let c = useAppStore.getState();
	c.openSettingsTarget({
		pane: "general",
		repoId: null,
		sectionId: "general-open-in-apps"
	}), c.openSettingsPage();
}
async function openWorktreePath(c) {
	let E = useAppStore.getState().settings;
	if (c.target === "file-manager") {
		if (isLocalPathOpenBlocked(E, { connectionId: c.connectionId ?? null })) {
			showLocalPathOpenBlockedToast();
			return;
		}
	} else {
		let D = getExternalEditorOpenCapability(E, {
			connectionId: c.connectionId,
			command: c.command
		});
		if (!D.allowed) {
			D.reason === "remote-runtime" ? showOpenFailureToast({
				ok: !1,
				reason: "remote-runtime-unsupported"
			}, !1) : showOpenFailureToast({
				ok: !1,
				reason: "remote-editor-unsupported"
			}, !0);
			return;
		}
	}
	let D = c.target === "file-manager" ? await window.api.shell.openInFileManager(c.worktreePath) : await window.api.shell.openInExternalEditor({
		path: c.worktreePath,
		command: c.command,
		connectionId: c.connectionId
	});
	D.ok || showOpenFailureToast(D, !!c.connectionId?.trim());
}
function useOpenInWorktreePath({ worktreePath: c, connectionId: E }) {
	return (0, import_react.useCallback)(async (D, O) => {
		await openWorktreePath({
			target: D,
			worktreePath: c,
			connectionId: E,
			command: O
		});
	}, [E, c]);
}
function WorktreeOpenInMenuItems({ worktreePath: c, connectionId: E, disabled: D, labelPrefix: A = "" }) {
	let j = useOpenInWorktreePath({
		worktreePath: c,
		connectionId: E
	}), N = useAppStore((c) => c.settings?.openInApplications ?? NO_OPEN_IN_APPLICATIONS), P = useAppStore((c) => c.settings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: getWorktreeOpenInEntries(N, getLocalFileManagerLabel()).map((c) => {
		let M = getOpenInEntryAvailability(c, P, E);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
			onClick: stopMenuPropagation,
			onSelect: () => {
				j(c.target, c.command);
			},
			disabled: D || M.disabled,
			children: [
				c.target === "file-manager" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3.5" }) : c.command ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenInApplicationIcon, {
					application: { command: c.command },
					size: 14
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 truncate",
					children: [A, c.label]
				}),
				M.metadata ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto shrink-0 text-[11px] text-muted-foreground",
					children: M.metadata
				}) : null
			]
		}, c.id);
	}) });
}
function WorktreeOpenInSubMenu({ worktreePath: c, connectionId: E, disabled: O }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSub, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubTrigger, {
		disabled: O,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3.5" }), translate("auto.components.sidebar.WorktreeOpenInMenu.8009ab69a6", "Open in")]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuSubContent, {
		className: "w-52",
		onClick: stopMenuPropagation,
		onPointerDown: stopMenuPropagation,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorktreeOpenInMenuItems, {
				worktreePath: c,
				connectionId: E,
				disabled: O
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
				onClick: stopMenuPropagation,
				onSelect: openOpenInAppsSettings,
				disabled: O,
				children: translate("auto.components.sidebar.WorktreeOpenInMenu.1417fd8380", "Customize apps...")
			})
		]
	})] });
}
export { openOpenInAppsSettings as a, getLocalFileManagerLabel as c, getWorktreeOpenInEntries as i, WorktreeOpenInSubMenu as n, openWorktreePath as o, getOpenInEntryAvailability as r, NO_OPEN_IN_APPLICATIONS as s, WorktreeOpenInMenuItems as t };
