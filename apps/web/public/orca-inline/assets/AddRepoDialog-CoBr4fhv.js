import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowLeft } from "./arrow-left-DVNzwFVN.js";
import { G as getSidebarHostHealthLabel, nt as getRepoDisplayLabelKey, q as shouldShowHostScopeControls, r as activateAndRevealWorktree, rt as getRepoDisplayLabelsByPath } from "./worktree-activation-u-wSAPlP.js";
import { t as Check } from "./check-yd87qcyx.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as ChevronsUpDown } from "./chevrons-up-down-d3SoqcUm.js";
import { t as CircleQuestionMark } from "./circle-question-mark-Wq5PWCoc.js";
import { t as CircleStop } from "./circle-stop-DiWyM5Ap.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { t as Folder } from "./folder-CMlHGMNi.js";
import { t as GitBranch } from "./git-branch-CuLRr9n5.js";
import { t as Globe } from "./globe-BQRxNG57.js";
import { n as Lightbulb, t as AddRemoteHostDialog } from "./AddRemoteHostDialog-Dndc-2qa.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Monitor } from "./monitor-RmS4zo_s.js";
import { t as Plus } from "./plus-DZ00_r0s.js";
import { t as Server } from "./server-BmPwXRCG.js";
import { t as Settings } from "./settings-D0EstZRB.js";
import { $S as getSettingsFocusedExecutionHostId, $p as extractIpcErrorMessage, Ag as isGitRepoKind, Eg as markOnboardingProjectAdded, Gv as callRuntimeRpc, JS as LOCAL_EXECUTION_HOST_ID, Jy as getRuntimePathBasename, Yv as getActiveRuntimeTarget, hy as describeRuntimeCompatBlock, iC as parseExecutionHostId, n as isEphemeralVmRuntimeEnvironment, t as useAppStore, wl as isWebClientLocation } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./collapsible-L_K9-Scr.js";
import "./es2015-D9zZpuOq.js";
import "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import { a as PopoverTrigger, i as PopoverContent, t as Popover } from "./popover-DHL-338i.js";
import "./scroll-area-_VXJFT4y.js";
import "./switch-iHg-WoiR.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as getDefaultCreateProjectParent, r as joinCreateProjectPath, t as formatCreateProjectParentSummary } from "./create-project-defaults-xqxL2BRP.js";
import "./remote-pairing-copy-DKFvujw5.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as track } from "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./badge-D7sahA2a.js";
import { t as ShortcutKeyCombo } from "./ShortcutKeyCombo-CaaV52rL.js";
import "./window-park-visibility-BBcurIcE.js";
import "./selectors-Cdg4hUQI.js";
import "./web-runtime-session-CeAC5QPx.js";
import "./agent-paste-draft-Ddp-k6QZ.js";
import "./agent-process-recognition-BUFJTuDF.js";
import "./native-chat-session-option-cache-DOY0fjiI.js";
import "./gitlab-links-Di3ozbga.js";
import "./agent-status-worktree-attribution-0Thqf3S9.js";
import "./localized-catalog-Dsz6wk5E.js";
import "./connection-context-2sxF2wah.js";
import "./web-session-tabs-sync-BfOF1RHT.js";
import "./pane-agent-owner-Ci26i0GA.js";
import "./ssh-types-B1wsSHlf.js";
import "./SshHostAdvancedFields-bK7pmZlt.js";
import "./SettingsFormControls-Btf2QMz3.js";
import { a as useSshConnectInFlight, n as endSshConnect, r as isSshConnectInFlight, t as beginSshConnect } from "./ssh-connect-in-flight-BpLvUVkJ.js";
import { o as CommandItem, s as CommandList, t as Command } from "./command-QScw0gM9.js";
import "./text-control-paste-Bg1FpWOl.js";
import { t as compareWorktreeDisplayName } from "./worktree-display-name-order-FBS0HgDD.js";
import { n as isConnectingSshStatus } from "./ssh-connection-recoverability-C7czeQrl.js";
import { t as useSidebarHostScopeOptions } from "./use-sidebar-host-scope-options-Cgolua5p.js";
import { i as browseRuntimeServerDirectory, n as CreateProjectParentBrowser, r as RemoteFileBrowser, t as CreateProjectLocationField } from "./CreateProjectLocationField-D8mNrEqG.js";
import { t as finishProjectAddWithDefaultCheckout } from "./project-added-default-checkout-BsdXXdXX.js";
import { n as upsertAddedRepoWithProjectHostSetup, t as worktreeRefreshOptions } from "./add-repo-runtime-owner-kPGNrqS9.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function capNestedRepoTelemetryCount(e) {
	return Number.isFinite(e) ? Math.max(0, Math.min(500, Math.floor(e))) : 0;
}
function normalizeNestedRepoTelemetryCount(e) {
	return Number.isFinite(e) ? Math.max(0, Math.floor(e)) : 0;
}
function bucketNestedRepoTelemetryCount(e) {
	let t = capNestedRepoTelemetryCount(e);
	return t === 0 ? "0" : t === 1 ? "1" : t <= 3 ? "2-3" : t <= 7 ? "4-7" : t <= 15 ? "8-15" : "16+";
}
function shouldEmitNestedRepoImportSubmitTelemetry(e) {
	return !!(e.attemptId && e.selectedCount > 0 && !e.isBusy);
}
function createNestedRepoTelemetryAttemptId() {
	let e = globalThis.crypto;
	if (typeof e?.randomUUID == "function") return e.randomUUID();
	let t = new Uint8Array(16);
	if (typeof e?.getRandomValues == "function") e.getRandomValues(t);
	else for (let e = 0; e < t.length; e++) t[e] = Math.floor(Math.random() * 256);
	t[6] = t[6] & 15 | 64, t[8] = t[8] & 63 | 128;
	let n = Array.from(t, (e) => e.toString(16).padStart(2, "0"));
	return `${n.slice(0, 4).join("")}-${n.slice(4, 6).join("")}-${n.slice(6, 8).join("")}-${n.slice(8, 10).join("")}-${n.slice(10, 16).join("")}`;
}
function buildNestedRepoScanTelemetry(e) {
	let t = capNestedRepoTelemetryCount(e.scan?.repos.length ?? 0), n = e.scan === null ? "scan_failed" : e.scan.selectedPathKind === "git_repo" ? "git_repo" : t > 0 ? "review_shown" : "no_nested_repos";
	return {
		attempt_id: e.attemptId,
		surface: e.surface,
		runtime_kind: e.runtimeKind,
		result: n,
		...e.scan ? { selected_path_kind: e.scan.selectedPathKind } : {},
		found_count: t,
		found_count_bucket: bucketNestedRepoTelemetryCount(t),
		truncated: e.scan?.truncated ?? !1,
		timed_out: e.scan?.timedOut ?? !1
	};
}
function buildNestedRepoImportActionTelemetry(e) {
	let t = normalizeNestedRepoTelemetryCount(e.foundCount), n = normalizeNestedRepoTelemetryCount(e.selectedCount), r = capNestedRepoTelemetryCount(e.foundCount), i = capNestedRepoTelemetryCount(e.selectedCount);
	return {
		attempt_id: e.attemptId,
		surface: e.surface,
		runtime_kind: e.runtimeKind,
		action: e.action,
		found_count: r,
		found_count_bucket: bucketNestedRepoTelemetryCount(r),
		selected_count: i,
		selected_count_bucket: bucketNestedRepoTelemetryCount(i),
		all_selected: t > 0 && n === t
	};
}
function buildNestedRepoImportResultTelemetry(e) {
	let t = normalizeNestedRepoTelemetryCount(e.foundCount), n = normalizeNestedRepoTelemetryCount(e.selectedCount), r = capNestedRepoTelemetryCount(e.foundCount), i = capNestedRepoTelemetryCount(e.selectedCount), a = capNestedRepoTelemetryCount(e.result?.importedCount ?? 0), o = capNestedRepoTelemetryCount(e.result?.alreadyKnownCount ?? 0), s = capNestedRepoTelemetryCount(e.result?.failedCount ?? i), c = a + o === 0 ? "failed" : s > 0 ? "partial_failure" : "success";
	return {
		attempt_id: e.attemptId,
		surface: e.surface,
		runtime_kind: e.runtimeKind,
		mode: e.mode,
		outcome: c,
		found_count: r,
		found_count_bucket: bucketNestedRepoTelemetryCount(r),
		selected_count: i,
		selected_count_bucket: bucketNestedRepoTelemetryCount(i),
		imported_count: a,
		imported_count_bucket: bucketNestedRepoTelemetryCount(a),
		already_known_count: o,
		already_known_count_bucket: bucketNestedRepoTelemetryCount(o),
		failed_count: s,
		failed_count_bucket: bucketNestedRepoTelemetryCount(s),
		all_selected: t > 0 && n === t
	};
}
function useRemoteRepo(e, t, r, i, o, s, c) {
	let [l, u] = (0, import_react.useState)([]), [d, f] = (0, import_react.useState)(null), [p, m] = (0, import_react.useState)("~/"), [h, g] = (0, import_react.useState)(null), [_, v] = (0, import_react.useState)(!1), [y, b] = (0, import_react.useState)(null), x = (0, import_react.useRef)(0), S = useMountedRef(), C = useAppStore((e) => e.cancelNestedRepoScan), w = (0, import_react.useCallback)(() => {
		x.current++, u([]), f(null), m("~/"), g(null), v(!1), y && C(y, { runtimeEnvironmentId: null }), b(null);
	}, [C, y]), T = (0, import_react.useCallback)(() => {
		y && C(y, { runtimeEnvironmentId: null });
	}, [C, y]), E = (0, import_react.useCallback)(async (e) => {
		let n = ++x.current;
		t("remote");
		try {
			let t = await window.api.ssh.listTargets();
			if (n !== x.current) return;
			let r = await Promise.all(t.map(async (e) => {
				let t = await window.api.ssh.getState({ targetId: e.id });
				return {
					...e,
					state: t ?? void 0
				};
			}));
			if (n !== x.current) return;
			u(r);
			let i = e ? r.find((t) => t.id === e) : void 0, a = r.find((e) => e.state?.status === "connected");
			if (i) {
				f(i.id);
				return;
			}
			a && f(a.id);
		} catch {
			if (n !== x.current) return;
			u([]);
		}
	}, [t]);
	(0, import_react.useEffect)(() => window.api.ssh.onStateChanged(({ targetId: e, state: t }) => {
		u((n) => n.map((n) => n.id === e ? {
			...n,
			state: t
		} : n)), t.status === "connected" && f((t) => t ?? e);
	}), []);
	let D = (0, import_react.useCallback)(async (e) => {
		try {
			await window.api.ssh.connect({ targetId: e });
		} catch (e) {
			toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.AddRepoSteps.3e64e8a70d", "Connection failed"));
		}
	}, []), O = (0, import_react.useCallback)(async () => {
		if (!d || !p.trim()) return;
		let t = p.trim(), a = ++x.current;
		v(!0), g(null);
		try {
			let r = createNestedRepoTelemetryAttemptId(), l = `nested-repo-scan-${Date.now()}-${Math.random().toString(36).slice(2)}`;
			b(l);
			let u = await o?.(t, d, {
				scanId: l,
				runtimeEnvironmentId: null,
				onProgress: (e) => {
					a !== x.current || !S.current || e.selectedPathKind !== "non_git_folder" || e.repos.length === 0 || s?.(e, t, d, r, !0, l);
				}
			});
			if (!S.current || a !== x.current) return;
			if (c?.(u ?? null, r), u?.selectedPathKind === "non_git_folder" && u.repos.length > 0) {
				s?.(u, t, d, r, !1, l), b(null);
				return;
			}
			b(null);
			let f = await window.api.repos.addRemote({
				connectionId: d,
				remotePath: t
			});
			if ("error" in f) throw Error(f.error);
			let { alreadyPresent: p, repo: m } = upsertAddedRepoWithProjectHostSetup(f.repo, { sshConnectionId: d });
			if (p && useAppStore.getState().clearOrcaHookTrustForRepo(m.id), !S.current || a !== x.current) return;
			toast.success(translate("auto.components.sidebar.AddRepoSteps.df8b0e6c22", "Project added on SSH host"), { description: m.displayName });
			let h = worktreeRefreshOptions(void 0, d);
			if (await e(m.id, h), !S.current || a !== x.current) return;
			await i?.(m.id, h.executionHostId);
		} catch (e) {
			let n = extractIpcErrorMessage(e, String(e));
			if (n.includes("Not a valid git repository")) {
				r(), useAppStore.getState().openModal("confirm-non-git-folder", {
					folderPath: t,
					connectionId: d
				});
				return;
			}
			S.current && a === x.current && g(n);
		} finally {
			S.current && a === x.current && (v(!1), b(null));
		}
	}, [
		d,
		p,
		o,
		s,
		c,
		e,
		S,
		r,
		i
	]);
	return {
		sshTargets: l,
		selectedTargetId: d,
		remotePath: p,
		remoteError: h,
		isAddingRemote: _,
		isScanningNested: !!y,
		setSelectedTargetId: f,
		setRemotePath: m,
		setRemoteError: g,
		resetRemoteState: w,
		handleOpenRemoteStep: E,
		handleAddRemoteRepo: O,
		handleConnectTarget: D,
		stopRemoteNestedScan: T
	};
}
function useCreateRepo(e, t, r, i = {}) {
	let [o, s] = (0, import_react.useState)(""), [c, l] = (0, import_react.useState)(""), [d, f] = (0, import_react.useState)(null), [p, m] = (0, import_react.useState)(!1), h = useMountedRef(), g = i.hostId ?? i.sshTargetId ?? "", _ = (0, import_react.useRef)(g);
	_.current = g;
	let v = (0, import_react.useRef)(0);
	return {
		createName: o,
		createParent: c,
		createError: d,
		isCreating: p,
		setCreateName: s,
		setCreateParent: l,
		setCreateError: f,
		resetCreateState: (0, import_react.useCallback)(() => {
			v.current++, s(""), l(""), f(null), m(!1);
		}, []),
		handlePickParent: (0, import_react.useCallback)(async () => {
			if (i.sshTargetId) return toast.error(translate("auto.components.sidebar.AddRepoCreateStep.ssh_parent_manual", "Enter an SSH parent path.")), null;
			if (i.runtimeEnvironmentId?.trim()) return toast.error(translate("auto.components.sidebar.AddRepoCreateStep.875dda0995", "Enter a host parent path.")), null;
			let e = v.current, t = await window.api.repos.pickDirectory();
			return t && e === v.current && h.current ? (l(t), f(null), t) : null;
		}, [
			h,
			i.runtimeEnvironmentId,
			i.sshTargetId
		]),
		handleCreate: (0, import_react.useCallback)(async () => {
			let a = o.trim(), s = c.trim();
			if (!a || !s) return;
			let l = _.current, d = ++v.current;
			m(!0), f(null);
			try {
				let o = i.runtimeEnvironmentId?.trim() ? {
					kind: "environment",
					environmentId: i.runtimeEnvironmentId.trim()
				} : getActiveRuntimeTarget({
					...useAppStore.getState().settings,
					activeRuntimeEnvironmentId: null
				}), c = i.sshTargetId ? await window.api.repos.createRemote({
					connectionId: i.sshTargetId,
					parentPath: s,
					name: a,
					kind: "git"
				}) : o.kind === "environment" ? await callRuntimeRpc(o, "repo.create", {
					parentPath: s,
					name: a,
					kind: "git"
				}, { timeoutMs: 6e4 }) : await window.api.repos.create({
					parentPath: s,
					name: a,
					kind: "git"
				});
				if (d !== v.current || l !== _.current || !h.current) return;
				if ("error" in c) {
					f(c.error);
					return;
				}
				let { alreadyPresent: p, repo: m } = upsertAddedRepoWithProjectHostSetup(c.repo, {
					runtimeEnvironmentId: i.runtimeEnvironmentId,
					sshConnectionId: i.sshTargetId
				});
				if (p ? toast.info(translate("auto.components.sidebar.AddRepoCreateStep.2c12db1511", "Project already added"), { description: m.displayName }) : toast.success(translate("auto.components.sidebar.AddRepoCreateStep.5e97f0c4b9", "Project created"), { description: m.displayName }), isGitRepoKind(m)) {
					let t = worktreeRefreshOptions(i.runtimeEnvironmentId, i.sshTargetId);
					if (await e(m.id, t), d !== v.current || l !== _.current || !h.current) return;
					await (t.executionHostId ? r?.(m.id, t.executionHostId) : r?.(m.id));
				} else {
					let n = worktreeRefreshOptions(i.runtimeEnvironmentId, i.sshTargetId);
					if (await (n.executionHostId ? e(m.id, { executionHostId: n.executionHostId }) : e(m.id)), d !== v.current || l !== _.current || !h.current) return;
					let r = useAppStore.getState().worktreesByRepo[m.id]?.find((e) => n.executionHostId === void 0 || e.hostId === n.executionHostId);
					r && activateAndRevealWorktree(r.id, {
						sidebarRevealBehavior: "auto",
						...n.executionHostId ? { executionHostId: n.executionHostId } : {}
					}), await markOnboardingProjectAdded("addedFolder"), t();
				}
			} catch (e) {
				if (d !== v.current || l !== _.current || !h.current) return;
				f(extractIpcErrorMessage(e, String(e)));
			} finally {
				d === v.current && l === _.current && h.current && m(!1);
			}
		}, [
			o,
			c,
			e,
			h,
			t,
			r,
			i.runtimeEnvironmentId,
			i.sshTargetId
		])
	};
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function CloneStep({ cloneUrl: e, cloneDestination: t, cloneError: i, cloneProgress: a, isCloning: o, disableDestinationPicker: s = !1, runtimeEnvironmentId: c, sshTargetId: l, cloneTargetLabel: u, onUrlChange: d, onDestChange: f, onPickDestination: p, onClone: m }) {
	let [h, g] = (0, import_react.useState)(!1), _ = !!(c || l), v = _, b = !!e.trim() && !!t.trim() && !o, x = (e) => {
		e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), b && m());
	};
	return h && (c || l) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoSteps.a93ef169b5", "Browse host filesystem") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoSteps.fe8e629fe3", "Navigate to a directory and click Select to choose it.") })] }), l ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		targetId: l,
		initialPath: t || "~",
		onSelect: (e) => {
			f(e), g(!1);
		},
		onCancel: () => g(!1)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		runtimeEnvironmentId: c,
		initialPath: t || "~",
		onSelect: (e) => {
			f(e), g(!1);
		},
		onCancel: () => g(!1)
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoSteps.c05f88a31f", "Clone from URL") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: u ? translate("auto.components.sidebar.AddRepoSteps.cloneOnHostDescription", "Enter the Git URL and choose where to clone it on {{value0}}.", { value0: u }) : translate("auto.components.sidebar.AddRepoSteps.5b2ea674b1", "Enter the Git URL and choose where to clone it.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-medium text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoSteps.3d4acbe693", "Git URL")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: e,
					onChange: (e) => d(e.target.value),
					onKeyDown: x,
					placeholder: translate("auto.components.sidebar.AddRepoSteps.b698a4a29d", "https://github.com/user/repo.git"),
					className: "h-8 text-xs",
					disabled: o,
					autoFocus: !0
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-medium text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoSteps.cloneParentFolder", "Parent folder")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: t,
						onChange: (e) => f(e.target.value),
						onKeyDown: x,
						placeholder: _ ? translate("auto.components.sidebar.AddRepoSteps.remoteCloneParentPlaceholder", "/home/user/projects") : translate("auto.components.sidebar.AddRepoSteps.2ce3f6edf8", "/path/to/destination"),
						className: "h-8 text-xs flex-1",
						disabled: o
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 px-2 shrink-0",
						onClick: () => {
							if (v) {
								g(!0);
								return;
							}
							p();
						},
						disabled: o || s && !v,
						title: v ? translate("auto.components.sidebar.AddRepoSteps.a93ef169b5", "Browse host filesystem") : translate("auto.components.sidebar.AddRepoSteps.569326d9cc", "Choose folder"),
						"aria-label": v ? translate("auto.components.sidebar.AddRepoSteps.a93ef169b5", "Browse host filesystem") : translate("auto.components.sidebar.AddRepoSteps.569326d9cc", "Choose folder"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5" })
					})]
				})]
			}),
			i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-destructive",
				children: i
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: m,
				disabled: !e.trim() || !t.trim() || o,
				className: "w-full",
				children: o ? translate("auto.components.sidebar.AddRepoSteps.69f5b5380d", "Cloning...") : translate("auto.components.sidebar.AddRepoSteps.32a7256d85", "Clone")
			}),
			o && a && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a.phase }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [a.percent, "%"] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1.5 w-full rounded-full bg-secondary overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-foreground transition-[width] duration-300 ease-out",
						style: { width: `${a.percent}%` }
					})
				})]
			})
		]
	})] });
}
function SshTargetRow({ target: e, isSelected: t, onSelect: r, onConnect: i }) {
	let a = useSshConnectInFlight(e.id), o = e.state?.status ?? "disconnected", s = o === "connected", c = a || isConnectingSshStatus(o), l = s ? "bg-green-500" : c ? "bg-yellow-500" : "bg-muted-foreground/30";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: s ? "button" : void 0,
		tabIndex: s ? 0 : void 0,
		className: `w-full flex items-center gap-2 px-3 py-2 rounded-md border text-xs transition-colors ${t ? "border-foreground/30 bg-accent" : "border-border hover:bg-accent/50"} ${s ? "cursor-pointer" : ""}`,
		onClick: () => {
			s && r(e.id);
		},
		onKeyDown: (t) => {
			s && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), r(e.id));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full shrink-0 ${l}` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `font-medium truncate ${s ? "" : "text-muted-foreground"}`,
				children: e.label || `${e.username}@${e.host}`
			}),
			!s && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "ml-auto shrink-0 rounded px-1.5 py-0.5 text-[11px] font-medium text-foreground hover:bg-accent/70 disabled:opacity-50 disabled:cursor-default flex items-center gap-1",
				onClick: (t) => {
					t.stopPropagation(), !(c || isSshConnectInFlight(e.id)) && (beginSshConnect(e.id), i(e.id).finally(() => {
						endSshConnect(e.id);
					}));
				},
				disabled: c,
				children: c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }), translate("auto.components.sidebar.SshTargetRow.4677394048", "Connecting…")] }) : translate("auto.components.sidebar.SshTargetRow.75ad429b5d", "Connect")
			})
		]
	});
}
function RemoteStep({ sshTargets: e, selectedTargetId: t, lockSshTargetSelection: i = !1, remotePath: a, remoteError: o, isAddingRemote: s, isScanningNested: c, onSelectTarget: l, onRemotePathChange: u, onAdd: d, onOpenSshSettings: f, onConnectTarget: p, onStopNestedScan: m }) {
	let [h, g] = (0, import_react.useState)(!1), y = t ? e.find((e) => e.id === t) : null, b = y?.label || (y ? `${y.username}@${y.host}` : t), x = (y?.state?.status ?? "disconnected") === "connected";
	return h && t ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoRemoteStep.dd3ff65486", "Browse remote filesystem") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoRemoteStep.007651bdf9", "Navigate to a directory and click Select to choose it.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		targetId: t,
		initialPath: a || "~",
		onSelect: (e) => {
			u(e), g(!1);
		},
		onCancel: () => g(!1)
	})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoRemoteStep.91b93a90a4", "Open project on SSH host") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: i ? translate("auto.components.sidebar.AddRepoRemoteStep.lockedDescription", "Enter the path to a Git repository on {{value0}}.", { value0: b ?? "this SSH target" }) : translate("auto.components.sidebar.AddRepoRemoteStep.80557be85a", "Choose a connected SSH target and enter the path to a Git repository.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pt-1",
		children: [
			i ? y && !x ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3 rounded-md border border-border bg-muted/30 px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "min-w-0 text-xs text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoRemoteStep.lockedDisconnected", "{{value0}} is disconnected.", { value0: b ?? "This SSH host" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "xs",
					className: "shrink-0",
					onClick: () => p(y.id),
					children: translate("auto.components.sidebar.AddRepoRemoteStep.93e0221434", "Connect")
				})]
			}) : null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-medium text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoRemoteStep.44637f43bd", "SSH target")
				}), e.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1.5 py-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.sidebar.AddRepoRemoteStep.df6fbcf880", "No SSH targets configured.")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-7 text-xs",
						onClick: f,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-3.5" }), translate("auto.components.sidebar.AddRepoRemoteStep.0416bde073", "Add in Settings")]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-1.5 max-h-64 overflow-y-auto pr-1 scrollbar-sleek",
					children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SshTargetRow, {
						target: e,
						isSelected: t === e.id,
						onSelect: l,
						onConnect: p
					}, e.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "text-[11px] font-medium text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoRemoteStep.ef410aa881", "Host path")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						value: a,
						onChange: (e) => u(e.target.value),
						onKeyDown: (e) => {
							e.key === "Enter" && !e.nativeEvent.isComposing && (e.preventDefault(), t && a.trim() && !s && d());
						},
						placeholder: translate("auto.components.sidebar.AddRepoRemoteStep.6680289908", "/home/user/project"),
						className: "h-8 text-xs flex-1",
						disabled: s || !t || !x
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-8 px-2 shrink-0",
						onClick: () => g(!0),
						disabled: !t || !x || s,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-3.5" })
					})]
				})]
			}),
			o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-destructive",
				children: o
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: d,
				disabled: !t || !x || !a.trim() || s,
				className: "w-full",
				children: s ? translate("auto.components.sidebar.AddRepoRemoteStep.35831a7312", "Adding...") : translate("auto.components.sidebar.AddRepoRemoteStep.36d427bb66", "Add project on SSH host")
			}),
			c ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "outline",
				className: "w-full",
				onClick: m,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleStop, { className: "size-3.5" }), translate("auto.components.sidebar.AddRepoRemoteStep.5b205b5281", "Stop scan")]
			}) : null
		]
	})] });
}
var CREATE_PROJECT_NAME_PLACEHOLDER = "project-name";
function CreateStep({ createName: e, createParent: t, createError: a, isCreating: o, defaultParent: s = "", gitAvailability: c = "unknown", runtimeParentStatus: l = "idle", parentDefaultPending: u = !1, manualParentEntry: d = !1, runtimeEnvironmentId: f, sshTargetId: m, onNameChange: h, onParentChange: g, onPickParent: _, onCreate: v }) {
	let [y, x] = (0, import_react.useState)(!1), [S, C] = (0, import_react.useState)(d), T = e.trim().length > 0 && t.trim().length > 0 && c !== "checking" && c !== "unavailable" && !u && !o, E = translate("auto.components.sidebar.AddRepoCreateStep.3a13f6e88b", "location not selected"), D = translate("auto.components.sidebar.AddRepoCreateStep.6ed14c0281", "host folder not selected"), O = !!(f || m), k = (0, import_react.useMemo)(() => formatCreateProjectParentSummary({
		parent: t,
		defaultParent: s,
		runtimeEnvironmentId: f,
		isRemoteHost: O,
		missingLocationLabel: E,
		missingServerLocationLabel: D
	}), [
		t,
		s,
		O,
		E,
		D,
		f
	]), A = (0, import_react.useMemo)(() => {
		let n = e.trim() || CREATE_PROJECT_NAME_PLACEHOLDER;
		return t.trim() ? joinCreateProjectPath(t, n) : "";
	}, [e, t]), j = translate("auto.components.sidebar.AddRepoCreateStep.11fd2a7db8", "Git repository"), M = c === "unavailable", N = c === "checking", P = f && !t.trim() && l !== "checking";
	return y && (f || m) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateProjectParentBrowser, {
		runtimeEnvironmentId: f,
		sshTargetId: m,
		createParent: t,
		onParentChange: g,
		onClose: () => x(!1)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoCreateStep.c7b9f94456", "Create a new project") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoCreateStep.b100311784", "Name it and Orca will create a real project with sensible defaults.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3.5 pt-1 min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "create-project-name",
					className: "text-[11px] font-medium text-muted-foreground block",
					children: translate("auto.components.sidebar.AddRepoCreateStep.a8149a3a5a", "Name")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "create-project-name",
					value: e,
					onChange: (e) => h(e.target.value),
					placeholder: translate("auto.components.sidebar.AddRepoCreateStep.0ae45b8238", "my-project"),
					className: "h-11 text-sm font-mono",
					disabled: o,
					autoFocus: !0,
					autoComplete: "off",
					spellCheck: !1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 rounded-md border border-border bg-muted/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => C((e) => !e),
					"aria-expanded": S,
					className: "flex w-full min-w-0 items-start gap-2.5 rounded-md px-3 py-2.5 text-left transition-colors cursor-pointer hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md border border-border bg-background/60 text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-medium",
								children: translate("auto.components.sidebar.AddRepoCreateStep.685b5eefe1", "{{kind}} in {{parent}}", {
									kind: j,
									parent: k
								})
							}), N ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }), translate("auto.components.sidebar.AddRepoCreateStep.2a762f3b19", "Checking Git on this host...")]
							}) : M ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] text-destructive",
								children: translate("auto.components.sidebar.AddRepoCreateStep.fe1e616c5b", "Git is required to create a project.")
							}) : P ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: translate("auto.components.sidebar.AddRepoCreateStep.c234df77f7", "Choose or enter a host parent folder before creating.")
							}) : A ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate font-mono text-[11px] text-muted-foreground",
								title: A,
								children: A
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 self-center text-muted-foreground transition-transform", S && "rotate-180") })
					]
				}), S && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 border-t border-border px-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateProjectLocationField, {
						createParent: t,
						isCreating: o,
						manualParentEntry: d,
						runtimeEnvironmentId: f,
						sshTargetId: m,
						onParentChange: g,
						onPickParent: _,
						onBrowseServer: () => x(!0)
					}), A && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "min-w-0 break-all rounded-md border border-border bg-background/40 px-2.5 py-2 font-mono text-[11px] text-muted-foreground",
						children: A
					})]
				})]
			}),
			a && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] text-destructive",
				role: "alert",
				children: a
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: v,
				disabled: !T,
				size: "lg",
				className: "w-full",
				children: o ? translate("auto.components.sidebar.AddRepoCreateStep.85085d74d2", "Creating…") : translate("auto.components.sidebar.AddRepoCreateStep.45b7c26034", "Create project")
			})
		]
	})] });
}
function getAddRepoLocalStartActions({ isSshLikely: e, onBrowse: t, onOpenCloneStep: r, onOpenRemoteStep: i, onOpenCreateStep: a, showRemoteAction: o = !0, canCreateProject: s = !0, browseHostKind: c = "local" }) {
	let l = {
		kind: "browse",
		icon: FolderOpen,
		title: c === "ssh" ? translate("auto.components.sidebar.add.repo.local.start.actions.sshBrowseTitle", "Open project on SSH host") : translate("auto.components.sidebar.add.repo.local.start.actions.2281fdc8c7", "Browse folder"),
		description: c === "ssh" ? translate("auto.components.sidebar.add.repo.local.start.actions.sshBrowseDescription", "Existing Git repository or folder on this SSH host") : c === "runtime" ? translate("auto.components.sidebar.add.repo.local.start.actions.runtimeBrowseDescription", "Existing Git repository or folder on this host") : translate("auto.components.sidebar.add.repo.local.start.actions.fb4fc5380e", "Local project, Git repo, or folder with many repos"),
		onClick: t
	}, u = {
		kind: "remote",
		icon: Monitor,
		title: translate("auto.components.sidebar.add.repo.local.start.actions.3d162cc76f", "Project on SSH host"),
		description: translate("auto.components.sidebar.add.repo.local.start.actions.a6c20dca96", "Open a project folder from an SSH host"),
		onClick: i
	}, d = {
		kind: "clone",
		icon: Globe,
		title: translate("auto.components.sidebar.add.repo.local.start.actions.7edb8ebe24", "Clone from URL"),
		description: translate("auto.components.sidebar.add.repo.local.start.actions.5f9ffac036", "Clone a remote Git repository"),
		onClick: r
	}, f = {
		kind: "create",
		icon: Plus,
		title: translate("auto.components.sidebar.add.repo.local.start.actions.c709860596", "Create new project"),
		description: s ? translate("auto.components.sidebar.add.repo.local.start.actions.d72789705e", "Start from an empty folder") : translate("auto.components.sidebar.add.repo.local.start.actions.sshCreateUnavailable", "Not available for SSH hosts yet"),
		disabled: !s,
		onClick: a
	};
	return {
		primaryAction: l,
		secondaryActions: o ? e ? [
			u,
			d,
			f
		] : [
			d,
			u,
			f
		] : [d, f]
	};
}
function AddRepoNestedScanProgressNotice({ busyLabel: e, nestedScanInProgress: t, nestedScanId: i, onStopNestedScan: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-xs text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 shrink-0 animate-spin" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1",
				children: e
			}),
			t && i ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					size: "icon-xs",
					className: "group text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:bg-destructive/10 focus-visible:text-destructive focus-visible:ring-destructive/40",
					"aria-label": translate("auto.components.sidebar.AddRepoStartSteps.9906cae183", "Stop scan"),
					title: translate("auto.components.sidebar.AddRepoStartSteps.69ea7f8dc4", "Stop scanning"),
					onClick: a,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin text-annotation-highlight group-hover:hidden group-focus-visible:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleStop, { className: "hidden size-3.5 group-hover:block group-focus-visible:block" })]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 4,
				children: translate("auto.components.sidebar.AddRepoStartSteps.d301db1c9a", "Scanning repositories. Click to stop.")
			})] }) : null
		]
	});
}
function AddRepoLocalStartStep({ repoCount: e, isSshLikely: t, isAdding: r, addProjectBusyLabel: a, nestedScanInProgress: o, nestedScanId: s, hostSelector: c, showRemoteAction: l = !0, canCreateProject: u = !0, actionsDisabled: d = !1, browseHostKind: f = "local", onBrowse: p, onOpenCloneStep: m, onOpenRemoteStep: h, onOpenCreateStep: g, onStopNestedScan: _ }) {
	let v = (0, import_react.useRef)(null), y = (0, import_react.useRef)(null), b = r || d, { primaryAction: x, secondaryActions: S } = getAddRepoLocalStartActions({
		isSshLikely: t,
		onBrowse: p,
		onOpenCloneStep: m,
		onOpenRemoteStep: h,
		onOpenCreateStep: g,
		showRemoteAction: l,
		canCreateProject: u,
		browseHostKind: f
	}), [C, w] = (0, import_react.useState)(x.kind), T = b ? null : C;
	return (0, import_react.useEffect)(() => {
		b || v.current?.focus();
	}, [b]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoStartSteps.d13757911c", "Add a project") }), e === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoStartSteps.acf895cb42", "Add a project to get started with Orca.") }) : null] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pt-2",
		ref: y,
		onBlur: (e) => {
			if (!(e.relatedTarget instanceof HTMLButtonElement)) {
				w(null);
				return;
			}
			e.relatedTarget.matches("button[data-add-repo-action]") || w(null);
		},
		onKeyDown: (e) => {
			if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
			let t = Array.from(y.current?.querySelectorAll("button[data-add-repo-action]") ?? []);
			if (t.length === 0) return;
			let n = (t.indexOf(document.activeElement) + (e.key === "ArrowDown" ? 1 : -1) + t.length) % t.length;
			e.preventDefault(), t[n]?.focus();
		},
		children: [
			c,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoPrimaryStartAction, {
				icon: x.icon,
				title: x.title,
				description: x.description,
				disabled: b,
				selected: T === x.kind,
				buttonRef: v,
				onClick: x.onClick,
				onFocus: () => w(x.kind)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoStartSteps.87596c1446", "Other ways to add")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-md border border-input bg-background",
					children: S.map((e, t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoSecondaryStartAction, {
						icon: e.icon,
						title: e.title,
						description: e.description,
						disabled: b || !!e.disabled,
						selected: T === e.kind,
						onClick: e.onClick,
						onFocus: () => w(e.kind),
						className: cn(t === 0 ? "rounded-t-md" : "border-t border-border/70", t === S.length - 1 && "rounded-b-md")
					}, e.kind))
				})]
			}),
			r && a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoNestedScanProgressNotice, {
				busyLabel: a,
				nestedScanInProgress: o,
				nestedScanId: s,
				onStopNestedScan: _
			}) : null
		]
	})] });
}
var AddRepoEnterChip = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
	"aria-hidden": "true",
	className: "shrink-0",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortcutKeyCombo, {
		keys: ["⏎"],
		keyCapClassName: "border-border/80 bg-background/70 text-muted-foreground"
	})
}), AddRepoPrimaryStartAction = ({ icon: e, title: t, description: n, disabled: a, selected: o, onClick: s, onFocus: c, buttonRef: l }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
	ref: l,
	type: "button",
	variant: "ghost",
	onClick: s,
	onFocus: c,
	disabled: a,
	"data-add-repo-action": !0,
	className: cn("h-auto min-h-[3.75rem] w-full justify-start gap-3 whitespace-normal px-3 py-2.5 text-left", o ? "border border-ring bg-foreground/10 text-foreground focus-visible:border-ring focus-visible:ring-0 dark:bg-accent dark:text-accent-foreground" : "border border-border bg-background shadow-none dark:bg-background"),
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-7 shrink-0 place-items-center rounded-md", o ? "bg-background/70 text-accent-foreground" : "text-foreground"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "size-4" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-medium leading-5",
				children: t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs font-normal leading-5 text-muted-foreground",
				children: n
			})]
		}),
		o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoEnterChip, {}) : null
	]
});
function AddRepoSecondaryStartAction({ icon: e, title: t, description: n, disabled: r, selected: a, onClick: o, onFocus: s, className: c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		"data-add-repo-action": !0,
		disabled: r,
		onClick: o,
		onFocus: s,
		className: cn("flex min-h-[3.25rem] w-full items-center gap-3 border border-transparent px-3 py-2.5 text-left transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:cursor-default disabled:opacity-40", c, a ? "border-ring bg-foreground/10 text-foreground focus-visible:ring-0 dark:bg-accent dark:text-accent-foreground" : "hover:bg-accent focus-visible:bg-accent focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-ring/50"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("grid size-7 shrink-0 place-items-center rounded-md", a ? "bg-background/70 text-accent-foreground" : "text-muted-foreground"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "size-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("block text-sm font-medium leading-5", a ? "text-accent-foreground" : "text-foreground"),
					children: t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs leading-4 text-muted-foreground",
					children: n
				})]
			}),
			a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoEnterChip, {}) : null
		]
	});
}
function AddRepoServerPathStartStep({ serverPath: e, runtimeEnvironmentId: t, isAddingServerPath: i, addProjectBusyLabel: a, hostSelector: o, initialBrowsing: s = !1, onServerPathChange: c, onAddServerPath: l, onOpenCloneStep: u, onOpenCreateStep: d }) {
	let [f, p] = (0, import_react.useState)(s), [m, h] = (0, import_react.useState)(s);
	if (f && t) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoServerStartStep.ac66a3ed2d", "Browse host filesystem") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoServerStartStep.0f8aba944c", "Navigate to a directory and click Select to choose it.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		runtimeEnvironmentId: t,
		initialPath: e || "~",
		onSelect: (e) => {
			c(e), p(!1), h(!0);
		},
		onCancel: () => p(!1)
	})] });
	if (!m) {
		let e = i || !t;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoServerStartStep.39bd249b3a", "Add a project") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoServerStartStep.8efa930eb5", "Add another project from the selected host.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 pt-2",
			children: [
				o,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoServerStartAction, {
							icon: FolderOpen,
							title: translate("auto.components.sidebar.AddRepoServerStartStep.0adf083af7", "Browse host"),
							description: translate("auto.components.sidebar.AddRepoServerStartStep.516187414c", "Existing project or folder"),
							disabled: e,
							onClick: () => p(!0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoServerStartAction, {
							icon: Globe,
							title: translate("auto.components.sidebar.AddRepoServerStartStep.47759c9491", "Clone from URL"),
							description: translate("auto.components.sidebar.AddRepoServerStartStep.a2ea37d549", "Remote Git repository"),
							disabled: e,
							onClick: u
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoServerStartAction, {
							icon: Server,
							title: translate("auto.components.sidebar.AddRepoServerStartStep.a81ffa0a99", "Create on host"),
							description: translate("auto.components.sidebar.AddRepoServerStartStep.d40d751517", "New repo or folder"),
							disabled: e,
							onClick: d
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 rounded-md border border-border bg-muted px-3 py-2.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-7 shrink-0 place-items-center rounded-md bg-background text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "size-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0",
						children: translate("auto.components.sidebar.AddRepoServerStartStep.6b9958492a", "Want to import many repos at once? Browse to the parent folder.")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => h(!0),
					disabled: e,
					className: "mx-auto block rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-default disabled:opacity-40",
					children: translate("auto.components.sidebar.AddRepoServerStartStep.438493f214", "Or enter a host path manually")
				})
			]
		})] });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoServerStartStep.3d0c035483", "Open host project") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.AddRepoServerStartStep.423b5d3d31", "Add a Git repository or folder that already exists on the selected host.") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 pt-2",
		children: [
			o,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					htmlFor: "server-project-path",
					className: "block text-[11px] font-medium text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoServerStartStep.867692f505", "Host path")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "server-project-path",
						value: e,
						onChange: (e) => c(e.target.value),
						placeholder: translate("auto.components.sidebar.AddRepoServerStartStep.92d25420a0", "/home/user/project"),
						className: "h-11 min-w-0 flex-1 font-mono text-sm",
						disabled: i,
						autoFocus: !0,
						spellCheck: !1
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "icon",
							className: "h-11 w-11 shrink-0",
							onClick: () => p(!0),
							disabled: i || !t,
							"aria-label": translate("auto.components.sidebar.AddRepoServerStartStep.ac66a3ed2d", "Browse host filesystem"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
						side: "top",
						sideOffset: 4,
						children: translate("auto.components.sidebar.AddRepoServerStartStep.ac66a3ed2d", "Browse host filesystem")
					})] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => l("git"),
					disabled: !e.trim() || i,
					className: "h-10",
					children: translate("auto.components.sidebar.AddRepoServerStartStep.8da4d1a5be", "Add Git Project")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => l("folder"),
					disabled: !e.trim() || i,
					variant: "outline",
					className: "h-10",
					children: translate("auto.components.sidebar.AddRepoServerStartStep.e1710bf831", "Open as Folder")
				})]
			}),
			i && a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 shrink-0 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => h(!1),
				disabled: i,
				className: "mx-auto block rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-default disabled:opacity-40",
				children: translate("auto.components.sidebar.AddRepoServerStartStep.ae990c86a0", "Back to add options")
			})
		]
	})] });
}
function AddRepoServerStartAction({ icon: e, title: t, description: n, disabled: i, onClick: a }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "outline",
		disabled: i,
		onClick: a,
		className: "h-32 min-w-0 flex-col gap-3 whitespace-normal border-border/80 bg-background px-3 py-4 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-9 shrink-0 place-items-center rounded-md text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "size-5" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-[13px] font-semibold leading-5 text-foreground",
				children: t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-[11px] font-normal leading-4 text-muted-foreground",
				children: n
			})]
		})]
	});
}
function NestedRepoSelectAllRow({ total: e, selectedCount: t, disabled: r, onToggle: i }) {
	let a = e > 0 && t === e, o = !a && t !== 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex min-w-0 cursor-pointer items-center gap-2.5 bg-muted/30 px-3 py-2 text-sm hover:bg-muted/50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: (0, import_react.useCallback)((e) => {
					e && (e.indeterminate = o);
				}, [o]),
				type: "checkbox",
				className: "size-3.5",
				checked: a,
				disabled: r,
				onChange: i,
				"aria-label": a ? translate("auto.components.repo.NestedRepoChecklist.929734aea5", "Deselect all") : translate("auto.components.repo.NestedRepoChecklist.91b5bcadb6", "Select all")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 truncate text-[12.5px] font-semibold text-foreground",
				children: a ? translate("auto.components.repo.NestedRepoChecklist.929734aea5", "Deselect all") : translate("auto.components.repo.NestedRepoChecklist.91b5bcadb6", "Select all")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "ml-auto shrink-0 text-[11px] text-muted-foreground",
				children: [
					t,
					" ",
					translate("auto.components.repo.NestedRepoChecklist.ea54c7bf8f", "of"),
					" ",
					e,
					" ",
					translate("auto.components.repo.NestedRepoChecklist.f7e1170567", "selected")
				]
			})
		]
	});
}
function NestedRepoChecklist({ scan: e, selectedPaths: t, onSelectedPathsChange: n, disabled: r = !1, className: a }) {
	let o = (0, import_react.useMemo)(() => getRepoDisplayLabelsByPath(e.repos), [e.repos]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex max-h-64 min-h-0 min-w-0 max-w-full flex-col overflow-hidden rounded-md border border-border bg-background/60", a),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NestedRepoSelectAllRow, {
			total: e.repos.length,
			selectedCount: t.size,
			disabled: r,
			onToggle: () => {
				n((t) => t.size === e.repos.length ? /* @__PURE__ */ new Set() : new Set(e.repos.map((e) => e.path)));
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "scrollbar-sleek min-h-0 flex-1 overflow-y-auto overflow-x-hidden",
			children: e.repos.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex min-w-0 max-w-full cursor-pointer items-center gap-2.5 overflow-hidden border-t border-border px-3 py-2 text-sm hover:bg-accent",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "checkbox",
						className: "size-3.5",
						checked: t.has(e.path),
						disabled: r,
						onChange: (t) => {
							n((n) => {
								let r = new Set(n);
								return t.target.checked ? r.add(e.path) : r.delete(e.path), r;
							});
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3.5 shrink-0 text-muted-foreground" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("min-w-0 flex-1 truncate text-[13px] font-medium", t.has(e.path) ? "text-foreground" : "text-muted-foreground"),
						children: o.get(getRepoDisplayLabelKey(e)) ?? e.displayName
					})
				]
			}) }, e.path))
		})]
	});
}
function formatTimeout(e) {
	return e >= 1e3 && e % 1e3 == 0 ? `${e / 1e3} seconds` : `${e} ms`;
}
function nestedRepoScanLimitText(e) {
	let t = [`${e.maxDepth} folder levels`, `${e.maxRepos} repositories`];
	return e.timeoutMs !== null && t.push(formatTimeout(e.timeoutMs)), `Scan stops after ${t.join(" or ")}. You can stop scanning early and import repositories found so far.`;
}
function NestedRepoScanLimitNotice({ scan: e }) {
	let [t, r] = (0, import_react.useState)(!1), i = nestedRepoScanLimitText(e);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex min-w-0 items-center gap-1.5 text-[11px] text-muted-foreground",
		onPointerEnter: () => r(!0),
		onPointerLeave: () => r(!1),
		onFocusCapture: () => r(!0),
		onBlurCapture: () => r(!1),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.stopped ? translate("auto.components.repo.NestedRepoScanLimitNotice.03e9beab7b", "Scan stopped early.") : translate("auto.components.repo.NestedRepoScanLimitNotice.574eb5408b", "Showing partial scan results.") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: t,
			onOpenChange: r,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": translate("auto.components.repo.NestedRepoScanLimitNotice.642a43c139", "Nested repository scan limits"),
					"aria-expanded": t,
					title: i,
					className: "inline-flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
					onClick: (e) => {
						e.stopPropagation(), r(!0);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleQuestionMark, { className: "size-3.5" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				side: "top",
				sideOffset: 4,
				className: "max-w-[260px] px-3 py-2 text-xs leading-5 text-pretty",
				onOpenAutoFocus: (e) => e.preventDefault(),
				children: i
			})]
		})]
	});
}
function AddRepoNestedImportStep({ scan: e, groupName: t, selectedPaths: i, isAdding: a, scanInProgress: o, onGroupNameChange: s, onSelectedPathsChange: c, onImport: l, onOpenAsFolder: u, onStopScan: d }) {
	let f = getRuntimePathBasename(e.selectedPath) || e.selectedPath, p = (0, import_react.useId)(), [m, h] = (0, import_react.useState)(null), g = i.size === 0, _ = a && m === "folder", v = a && m === "separate", y = a && m === "group";
	(0, import_react.useEffect)(() => {
		a || h(null);
	}, [a]);
	let b = (e) => {
		h(e), l(e);
	}, x = () => {
		h("folder"), u();
	}, S = translate("auto.components.sidebar.AddRepoNestedImportStep.b4263a2ac4", "Found {{value0}} in {{value1}}.", {
		value0: e.repos.length === 1 ? translate("auto.components.sidebar.AddRepoNestedImportStep.8401a7a0d0", "1 repository") : translate("auto.components.sidebar.AddRepoNestedImportStep.d4f1df62ef", "{{value0}} repositories", { value0: e.repos.length }),
		value1: e.selectedPath
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.AddRepoNestedImportStep.8db50afe1a", "Import repositories from folder") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-w-0 items-center gap-1.5",
		children: [o ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoNestedImportStopButton, { onStopScan: d }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
			className: "min-w-0 truncate",
			children: o ? translate("auto.components.sidebar.AddRepoNestedImportStep.24eda6c8b2", "Scanning... {{value0}}", { value0: S }) : S
		})]
	})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-0 min-w-0 max-w-full flex-col gap-3 overflow-hidden pt-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NestedRepoChecklist, {
				scan: e,
				selectedPaths: i,
				onSelectedPathsChange: c,
				disabled: a || o,
				className: "flex-1"
			}),
			o || e.truncated || e.timedOut || e.stopped ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NestedRepoScanLimitNotice, { scan: e }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 shrink-0 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-foreground",
					children: translate("auto.components.sidebar.AddRepoNestedImportStep.fb33359f69", "Group these repositories?")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: translate("auto.components.sidebar.AddRepoNestedImportStep.d75170194e", "Choose this if these projects belong together — a monorepo, or just a set of related repos. Orca will group them and let you work from the parent folder.")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 shrink-0 space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex shrink-0 items-center gap-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: p,
						className: "text-[11px] text-muted-foreground",
						children: translate("auto.components.sidebar.AddRepoNestedImportStep.39d51212cc", "Group name")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: p,
					"aria-label": translate("auto.components.sidebar.AddRepoNestedImportStep.39d51212cc", "Group name"),
					value: t,
					onChange: (e) => s(e.target.value),
					disabled: a || o,
					className: "h-9 min-w-0",
					placeholder: f
				})]
			}),
			g ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "shrink-0 text-xs text-muted-foreground",
				children: translate("auto.components.sidebar.AddRepoNestedImportStep.6149d5203f", "No repositories are selected. Open the parent folder instead to use editor, terminal, and search without Git features.")
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 flex-wrap justify-end gap-2",
				children: [
					g ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: x,
						disabled: a || o,
						variant: "secondary",
						children: [_ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.AddRepoNestedImportStep.e52454b7f6", "Open as Folder")]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => b("separate"),
						disabled: a || o || g,
						variant: "outline",
						children: [v ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.AddRepoNestedImportStep.aa0247680d", "No, import separately")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						onClick: () => b("group"),
						disabled: a || o || g,
						children: [y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, translate("auto.components.sidebar.AddRepoNestedImportStep.a0bc4d1f8e", "Yes, import as group")]
					})
				]
			})
		]
	})] });
}
function AddRepoNestedImportStopButton({ onStopScan: e }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
		asChild: !0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "ghost",
			size: "icon-xs",
			className: "group text-muted-foreground hover:bg-destructive/10 hover:text-destructive focus-visible:bg-destructive/10 focus-visible:text-destructive focus-visible:ring-destructive/40",
			"aria-label": translate("auto.components.sidebar.AddRepoNestedImportStep.2f8298f3c3", "Stop scan"),
			title: translate("auto.components.sidebar.AddRepoNestedImportStep.a32bef9516", "Stop scanning"),
			onClick: e,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin text-annotation-highlight group-hover:hidden group-focus-visible:hidden" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleStop, { className: "hidden size-3.5 group-hover:block group-focus-visible:block" })]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
		side: "top",
		sideOffset: 4,
		children: translate("auto.components.sidebar.AddRepoNestedImportStep.496f68cf8c", "Scanning repositories. Click to stop.")
	})] });
}
function AddRepoDialogStepContent({ step: e, isRuntimeEnvironmentActive: t, activeRuntimeEnvironmentId: n, isSshLikely: r, repoCount: i, isAdding: a, addProjectBusyLabel: o, nestedScanInProgress: s, nestedScanId: c, serverPath: l, isAddingServerPath: u, cloneUrl: d, cloneDestination: f, cloneError: p, cloneProgress: m, isCloning: h, sshTargets: g, selectedTargetId: _, selectedSshTargetId: v, selectedHostLabel: y, lockSshTargetSelection: b = !1, remotePath: x, remoteError: S, isAddingRemote: C, isScanningRemoteNested: w, nestedScan: T, nestedSelectedPaths: E, nestedGroupName: D, createName: O, createParent: k, createError: A, isCreating: j, hostSelector: M, showRemoteAction: N = !0, canCreateProject: P = !0, actionsDisabled: Qe = !1, manualCreateParentEntry: F = t, browseHostKind: $e = "local", createDefaultParent: et, createGitAvailability: tt, createRuntimeParentStatus: nt, createParentDefaultPending: rt, onBrowse: I, onOpenCloneStep: L, onOpenCreateStep: R, onOpenRemoteStep: it, onStopNestedScan: z, onServerPathChange: at, onAddServerPath: ot, onSelectTarget: st, onRemotePathChange: ct, onAddRemoteRepo: lt, onOpenSshSettings: B, onConnectTarget: V, onStopRemoteNestedScan: H, onCloneUrlChange: ut, onCloneDestinationChange: dt, onPickCloneDestination: ft, onClone: pt, onNestedGroupNameChange: U, onNestedSelectedPathsChange: mt, onImportNestedRepos: ht, onOpenNestedRootFolder: gt, onCreateNameChange: W, onCreateParentChange: G, onPickCreateParent: K, onCreate: _t }) {
	return e === "add" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoLocalStartStep, {
		repoCount: i,
		isSshLikely: r,
		isAdding: a,
		addProjectBusyLabel: o,
		nestedScanInProgress: s,
		nestedScanId: c,
		hostSelector: M,
		showRemoteAction: N,
		canCreateProject: P,
		actionsDisabled: Qe,
		browseHostKind: $e,
		onBrowse: I,
		onOpenCloneStep: L,
		onOpenRemoteStep: it,
		onOpenCreateStep: R,
		onStopNestedScan: z
	}) : e === "server-path" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoServerPathStartStep, {
		serverPath: l,
		runtimeEnvironmentId: n,
		isAddingServerPath: u,
		addProjectBusyLabel: o,
		hostSelector: M,
		initialBrowsing: !0,
		onServerPathChange: at,
		onAddServerPath: ot,
		onOpenCloneStep: L,
		onOpenCreateStep: R
	}) : e === "remote" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteStep, {
		sshTargets: g,
		selectedTargetId: _,
		lockSshTargetSelection: b,
		remotePath: x,
		remoteError: S,
		isAddingRemote: C,
		isScanningNested: w,
		onSelectTarget: st,
		onRemotePathChange: ct,
		onAdd: lt,
		onOpenSshSettings: B,
		onConnectTarget: V,
		onStopNestedScan: H
	}) : e === "clone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloneStep, {
		cloneUrl: d,
		cloneDestination: f,
		cloneError: p,
		cloneProgress: m,
		isCloning: h,
		disableDestinationPicker: t,
		runtimeEnvironmentId: n,
		sshTargetId: v,
		cloneTargetLabel: t || v ? y : null,
		onUrlChange: ut,
		onDestChange: dt,
		onPickDestination: ft,
		onClone: pt
	}) : e === "nested" && T ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoNestedImportStep, {
		scan: T,
		groupName: D,
		selectedPaths: E,
		isAdding: a,
		scanInProgress: s,
		onGroupNameChange: U,
		onSelectedPathsChange: mt,
		onImport: ht,
		onOpenAsFolder: gt,
		onStopScan: z
	}) : e === "create" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateStep, {
		createName: O,
		createParent: k,
		createError: A,
		isCreating: j,
		defaultParent: et,
		gitAvailability: tt,
		runtimeParentStatus: nt,
		parentDefaultPending: rt,
		manualParentEntry: F,
		runtimeEnvironmentId: n,
		sshTargetId: v,
		onNameChange: W,
		onParentChange: G,
		onPickParent: K,
		onCreate: _t
	}) : null;
}
function getDefaultCloneParent(e) {
	if (!e) return "";
	let t = e.replace(/[\\/]+$/, "");
	if (!t) return e;
	let n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
	if ((n === -1 ? t : t.slice(n + 1)) !== "workspaces") return e;
	let r = n === -1 ? "" : t.slice(0, n);
	return r === "" && t.startsWith("/") ? "/" : /^[A-Za-z]:$/.test(r) ? `${r}${t[n]}` : r;
}
function getCloneDestinationAutoFill({ step: e, cloneDestination: t, activeRuntimeEnvironmentId: n, sshTargetId: r, workspaceDir: i, cloneStepAutoFilled: a }) {
	return e !== "clone" || a || t || n?.trim() || r?.trim() || !i ? null : { destination: getDefaultCloneParent(i) };
}
function useAddRepoCloneFlow({ step: e, activeRuntimeEnvironmentId: t, sshTargetId: r, workspaceDir: i, fetchWorktrees: a, onGitRepoReady: o }) {
	let [s, c] = (0, import_react.useState)(""), [l, u] = (0, import_react.useState)(""), [d, f] = (0, import_react.useState)(!1), [p, m] = (0, import_react.useState)(null), [h, g] = (0, import_react.useState)(null), _ = `${t?.trim() ?? ""}:${r?.trim() ?? ""}`, v = (0, import_react.useRef)(_);
	v.current = _;
	let y = (0, import_react.useRef)(0), b = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => {
		if (d) return window.api.repos.onCloneProgress(g);
	}, [d]);
	let x = getCloneDestinationAutoFill({
		step: e,
		cloneDestination: l,
		activeRuntimeEnvironmentId: t,
		sshTargetId: r,
		workspaceDir: i,
		cloneStepAutoFilled: b.current
	});
	return e === "clone" ? x && (b.current = !0, u(x.destination)) : b.current = !1, {
		cloneUrl: s,
		cloneDestination: l,
		cloneError: p,
		cloneProgress: h,
		isCloning: d,
		setCloneUrl: c,
		setCloneDestination: u,
		setCloneError: m,
		resetCloneFlow: (0, import_react.useCallback)(() => {
			y.current++, c(""), u(""), f(!1), m(null), g(null);
		}, []),
		handlePickDestination: (0, import_react.useCallback)(async () => {
			if (t?.trim() || r?.trim()) {
				toast.error(translate("auto.components.sidebar.useAddRepoCloneFlow.0dc4d1b657", "Enter a host path for the clone destination."));
				return;
			}
			let e = y.current, i = await window.api.repos.pickDirectory();
			i && e === y.current && (u(i), m(null));
		}, [t, r]),
		handleClone: (0, import_react.useCallback)(async () => {
			let e = s.trim();
			if (!e || !l.trim()) return;
			let i = v.current, c = ++y.current;
			f(!0), m(null), g(null);
			try {
				let s = t?.trim() ? {
					kind: "environment",
					environmentId: t.trim()
				} : getActiveRuntimeTarget({
					...useAppStore.getState().settings,
					activeRuntimeEnvironmentId: null
				}), u = r?.trim() ? await window.api.repos.cloneRemote({
					connectionId: r.trim(),
					url: e,
					destination: l.trim()
				}) : s.kind === "environment" ? (await callRuntimeRpc(s, "repo.clone", {
					url: e,
					destination: l.trim()
				}, { timeoutMs: 10 * 6e4 })).repo : await window.api.repos.clone({
					url: e,
					destination: l.trim()
				});
				if (c !== y.current || i !== v.current) return;
				let { repo: d } = upsertAddedRepoWithProjectHostSetup(u, {
					runtimeEnvironmentId: t,
					sshConnectionId: r
				});
				toast.success(translate("auto.components.sidebar.useAddRepoCloneFlow.4d0013cc93", "Repository cloned"), { description: d.displayName });
				let f = worktreeRefreshOptions(t, r);
				if (await a(d.id, f), c !== y.current || i !== v.current) return;
				await o(d.id, "clone_url", f.executionHostId);
			} catch (e) {
				if (c !== y.current || i !== v.current) return;
				m(extractIpcErrorMessage(e, String(e)));
			} finally {
				c === y.current && i === v.current && f(!1);
			}
		}, [
			t,
			s,
			l,
			a,
			o,
			r
		])
	};
}
function defaultProjectGroupNameForPath(e) {
	return e.replace(/[\\/]+$/g, "").split(/[\\/]/).findLast(Boolean) ?? e;
}
function createNestedRepoScanId() {
	return `nested-repo-scan-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
function useAddRepoLocalFolderFlow({ isOpen: e, droppedLocalPath: t, activeRuntimeEnvironmentId: r, addRepoPath: i, closeModal: a, fetchWorktrees: o, scanNestedRepos: s, setActiveNestedScanId: c, setNestedScanInProgress: l, showNestedRepoReview: u, onGitRepoReady: d, setIsAdding: f, setAddProjectBusyLabel: p }) {
	let m = (0, import_react.useRef)(0), h = (0, import_react.useRef)(null), g = (0, import_react.useCallback)(() => {
		m.current++, h.current = null;
	}, []), _ = (0, import_react.useCallback)(() => {
		l(!1), c(null);
	}, [c, l]), v = (0, import_react.useCallback)(async (e, t, f, h = "single") => {
		if (r?.trim()) return toast.error(translate("auto.components.sidebar.useAddRepoLocalFolderFlow.7ab10e4974", "Use a host path to add projects from a remote host.")), a(), { status: "paused" };
		p("Scanning for repositories...");
		try {
			let n = createNestedRepoTelemetryAttemptId(), g = createNestedRepoScanId();
			c(g, r ?? null), l(!0);
			let v = await s(e, void 0, {
				scanId: g,
				runtimeEnvironmentId: r ?? null,
				onProgress: (t) => {
					f !== m.current || h === "batch" || t.selectedPathKind !== "non_git_folder" || t.repos.length === 0 || u({
						scan: t,
						selectedPath: e,
						connectionId: null,
						attemptId: n,
						runtimeKind: "local",
						inProgress: !0,
						scanId: g,
						runtimeEnvironmentId: r
					});
				}
			});
			if (f !== m.current) return { status: "cancelled" };
			if (_(), track("add_repo_nested_scan_result", buildNestedRepoScanTelemetry({
				attemptId: n,
				surface: "sidebar",
				runtimeKind: "local",
				scan: v
			})), v?.selectedPathKind === "non_git_folder" && h === "batch") return { status: "skipped" };
			if (v?.selectedPathKind === "non_git_folder" && v.repos.length > 0) return u({
				scan: v,
				selectedPath: e,
				connectionId: null,
				attemptId: n,
				runtimeKind: "local",
				inProgress: !1,
				scanId: g,
				runtimeEnvironmentId: r
			}), { status: "paused" };
			p("Opening project...");
			let y = await i(e, void 0, { runtimeEnvironmentId: r ?? null });
			if (f !== m.current) return { status: "cancelled" };
			if (!y) return { status: "paused" };
			if (isGitRepoKind(y)) {
				let e = worktreeRefreshOptions(r ?? null);
				if (await o(y.id, e), f !== m.current) return { status: "cancelled" };
				if (h === "batch") return {
					status: "completed",
					repo: y
				};
				await d(y.id, t, e.executionHostId);
			} else a();
			return {
				status: "completed",
				repo: y
			};
		} finally {
			f === m.current && _();
		}
	}, [
		r,
		i,
		_,
		a,
		o,
		d,
		s,
		c,
		p,
		l,
		u
	]), y = (0, import_react.useCallback)(async (e, t, n = "single") => {
		let r = ++m.current;
		f(!0);
		try {
			return await v(e, t, r, n);
		} finally {
			r === m.current && (_(), f(!1), p(null));
		}
	}, [
		v,
		_,
		p,
		f
	]), b = (0, import_react.useCallback)(async (e, t, i) => {
		let a = [], o = e.length > 1, s = 0;
		for (let n of e) {
			let e = await v(n, t, i, o ? "batch" : "single");
			if (e.status === "skipped") {
				s++;
				continue;
			}
			if (e.status !== "completed") return;
			isGitRepoKind(e.repo) && a.push(e.repo.id);
		}
		i === m.current && (s > 0 && toast.info(translate("auto.components.sidebar.useAddRepoLocalFolderFlow.skippedBatchFolders", "Some folders were skipped"), { description: translate("auto.components.sidebar.useAddRepoLocalFolderFlow.skippedBatchFoldersDescription", "Add skipped folders individually to review or confirm them.") }), o && a.length > 0 && await d(a[0], t, worktreeRefreshOptions(r ?? null).executionHostId));
	}, [
		r,
		v,
		d
	]);
	return (0, import_react.useEffect)(() => {
		!e || !t || h.current !== t && (h.current = t, y(t, "local_folder_picker"));
	}, [
		t,
		y,
		e
	]), {
		handleBrowse: (0, import_react.useCallback)(async () => {
			let e = ++m.current;
			f(!0), p("Choose a folder...");
			try {
				let t = await window.api.repos.pickFolders();
				if (t.length === 0 || e !== m.current) return;
				await b(t, "local_folder_picker", e);
			} finally {
				e === m.current && (_(), f(!1), p(null));
			}
		}, [
			_,
			b,
			p,
			f
		]),
		resetLocalFolderFlow: g
	};
}
function useAddRepoServerPathFlow({ addRepoPath: e, activeRuntimeEnvironmentId: t, closeModal: n, fetchWorktrees: r, getNestedRepoRuntimeKind: i, scanNestedRepos: a, setActiveNestedScanId: o, setNestedScanInProgress: s, showNestedRepoReview: c, onGitRepoReady: l, setAddProjectBusyLabel: u }) {
	let [d, f] = (0, import_react.useState)(""), [p, m] = (0, import_react.useState)(!1), h = (0, import_react.useRef)(0);
	return {
		serverPath: d,
		isAddingServerPath: p,
		setServerPath: f,
		resetServerPathFlow: (0, import_react.useCallback)(() => {
			h.current++, f(""), m(!1);
		}, []),
		handleAddServerPath: (0, import_react.useCallback)(async (f) => {
			let p = d.trim();
			if (!p) return;
			let g = ++h.current;
			m(!0), u(f === "git" ? "Scanning for repositories..." : "Opening folder...");
			try {
				if (f === "git") {
					let e = createNestedRepoTelemetryAttemptId(), n = i(null), r = n === "runtime" ? null : createNestedRepoScanId();
					r && (o(r, t), s(!0));
					let l = await a(p, void 0, {
						runtimeEnvironmentId: t,
						...r ? {
							scanId: r,
							onProgress: (i) => {
								g !== h.current || i.selectedPathKind !== "non_git_folder" || i.repos.length === 0 || c({
									scan: i,
									selectedPath: p,
									connectionId: null,
									attemptId: e,
									runtimeKind: n,
									inProgress: !0,
									scanId: r,
									runtimeEnvironmentId: t
								});
							}
						} : {}
					});
					if (g !== h.current) return;
					if (s(!1), o(null), track("add_repo_nested_scan_result", buildNestedRepoScanTelemetry({
						attemptId: e,
						surface: "sidebar",
						runtimeKind: n,
						scan: l
					})), l?.selectedPathKind === "non_git_folder" && l.repos.length > 0) {
						c({
							scan: l,
							selectedPath: p,
							connectionId: null,
							attemptId: e,
							runtimeKind: n,
							inProgress: !1,
							scanId: r,
							runtimeEnvironmentId: t
						});
						return;
					}
				}
				u(f === "git" ? "Opening project..." : "Opening folder...");
				let d = await e(p, f, { runtimeEnvironmentId: t });
				if (g !== h.current) return;
				if (d && isGitRepoKind(d)) {
					let e = worktreeRefreshOptions(t ?? null);
					if (await r(d.id, e), g !== h.current) return;
					await l(d.id, "runtime_server_path", e.executionHostId);
				} else d && (await markOnboardingProjectAdded("addedFolder"), n());
			} finally {
				g === h.current && (s(!1), o(null), m(!1), u(null));
			}
		}, [
			e,
			t,
			n,
			r,
			i,
			l,
			a,
			d,
			o,
			u,
			s,
			c
		])
	};
}
function canSelectAddRepoHost(e) {
	return e.health === "local" || e.health === "available";
}
function canConnectAddRepoHost(e) {
	return e.kind === "ssh" && (e.health === "disconnected" || e.health === "error" || e.health === "connecting");
}
function useAddRepoHostSelection({ isOpen: e, setStep: t }) {
	let r = useAppStore((e) => e.settings), i = useAppStore((e) => e.setSshConnectionState), a = useAppStore((e) => e.sshConnectionStates), o = useAppStore((e) => e.runtimeEnvironments), { hostOptions: s } = useSidebarHostScopeOptions(), c = isWebClientLocation(), l = (0, import_react.useMemo)(() => new Set(o.filter(isEphemeralVmRuntimeEnvironment).map((e) => e.id)), [o]), u = (0, import_react.useMemo)(() => s.filter((e) => {
		let t = parseExecutionHostId(e.id);
		return !(c && t?.kind === "local") && (t?.kind !== "runtime" || !l.has(t.environmentId));
	}), [
		l,
		s,
		c
	]), [d, f] = (0, import_react.useState)(LOCAL_EXECUTION_HOST_ID), [p, m] = (0, import_react.useState)(!1), h = (0, import_react.useRef)(!1), g = c ? u.find((e) => e.kind === "runtime" && canSelectAddRepoHost(e)) : void 0, _ = (u.find((e) => e.id === d && canSelectAddRepoHost(e)) ?? g ?? u.find((e) => e.id === "local" && canSelectAddRepoHost(e)) ?? u.find((e) => canSelectAddRepoHost(e)))?.id ?? (c ? null : "local"), v = parseExecutionHostId(_), y = v?.kind === "ssh" ? v.targetId : null;
	return (0, import_react.useEffect)(() => {
		if (e && !h.current) {
			let e = getSettingsFocusedExecutionHostId(r), t = u.some((t) => t.id === e && canSelectAddRepoHost(t)) ? e : g?.id ?? (c ? null : "local");
			t && f(t);
		}
		e || m(!1), h.current = e;
	}, [
		e,
		c,
		g?.id,
		u,
		r
	]), {
		hostOptions: u,
		selectedHostId: _,
		selectedParsedHost: v,
		selectedSshTargetId: y,
		hostSelectorOpen: p,
		setHostSelectorOpen: m,
		handleSelectAddProjectHost: (0, import_react.useCallback)(async (e) => {
			let n = u.find((t) => t.id === e);
			!n || !canSelectAddRepoHost(n) || (f(e), t("add"));
		}, [u, t]),
		handleConnectAddProjectHost: (0, import_react.useCallback)(async (e) => {
			let r = u.find((t) => t.id === e), o = parseExecutionHostId(e);
			if (!r || o?.kind !== "ssh") return;
			let s = a.get(o.targetId);
			i(o.targetId, {
				targetId: o.targetId,
				status: "connecting",
				error: null,
				reconnectAttempt: s?.reconnectAttempt ?? 0,
				remotePlatform: s?.remotePlatform
			});
			try {
				let n = await window.api.ssh.connect({ targetId: o.targetId }) ?? await window.api.ssh.getState({ targetId: o.targetId });
				if (n && i(o.targetId, n), n?.status !== "connected") return;
				f(e), t("add"), m(!1);
			} catch (e) {
				i(o.targetId, s ?? {
					targetId: o.targetId,
					status: "disconnected",
					error: e instanceof Error ? e.message : translate("auto.components.sidebar.useAddRepoHostSelection.connectionFailed", "SSH connection failed."),
					reconnectAttempt: 0
				}), toast.error(e instanceof Error ? e.message : translate("auto.components.sidebar.useAddRepoHostSelection.connectionFailed", "SSH connection failed."));
			}
		}, [
			u,
			i,
			t,
			a
		])
	};
}
var MAX_REPORTED_WORKSPACES = 50;
function countWorkspaces(e) {
	return Math.min(MAX_REPORTED_WORKSPACES, Math.max(0, e));
}
function branchDisplayName(e) {
	return e.branch.replace(/^refs\/heads\//, "");
}
function pathBasename(e) {
	return e.replace(/[\\/]+$/, "").split(/[\\/]/).findLast(Boolean) ?? "";
}
function isCustomDisplayName(e) {
	let t = branchDisplayName(e), n = pathBasename(e.path);
	return !!(e.displayName && e.displayName !== t && e.displayName !== n);
}
function buildAddRepoExistingWorkspacesTelemetry(e, t) {
	if (!e || t.length === 0) return null;
	let n = t.filter((e) => e.isMainWorktree).length, r = t.filter((e) => !!branchDisplayName(e)).length, i = t.filter((e) => e.isSparse === !0).length;
	return {
		source: e,
		existing_workspace_count: countWorkspaces(t.length),
		existing_linked_workspace_count: countWorkspaces(t.length - n),
		main_workspace_count: countWorkspaces(n),
		branch_named_workspace_count: countWorkspaces(r),
		detached_workspace_count: countWorkspaces(t.length - r),
		custom_named_workspace_count: countWorkspaces(t.filter(isCustomDisplayName).length),
		sparse_workspace_count: countWorkspaces(i)
	};
}
function shouldTrackAddRepoExistingWorkspacesDetected(e) {
	return !e || e.existing_linked_workspace_count === 0 ? !1 : e.source === "local_folder_picker" || e.source === "runtime_server_path" || e.source === "ssh_remote_path";
}
function useCompleteGitRepoAdd({ closeModal: e, setHideDefaultBranchWorkspace: t, finishProjectAdd: n }) {
	let r = (0, import_react.useRef)(/* @__PURE__ */ new Set());
	return (0, import_react.useCallback)(async (i, a, o) => {
		let s = buildAddRepoExistingWorkspacesTelemetry(a, [...(useAppStore.getState().worktreesByRepo[i] ?? []).filter((e) => o === void 0 || e.hostId === o || !e.hostId && o === "local")].sort((e, t) => e.lastActivityAt === t.lastActivityAt ? compareWorktreeDisplayName(e, t) : t.lastActivityAt - e.lastActivityAt));
		if (s && shouldTrackAddRepoExistingWorkspacesDetected(s) && !r.current.has(i) && (r.current.add(i), track("add_repo_existing_workspaces_detected", s)), n) {
			await n(i, a, o);
			return;
		}
		await finishProjectAddWithDefaultCheckout({
			repoId: i,
			source: a,
			executionHostId: o,
			closeModal: e,
			setHideDefaultBranchWorkspace: t
		});
	}, [
		e,
		n,
		t
	]);
}
var LOCAL_GIT_AVAILABILITY_TIMEOUT_MS = 1500, RUNTIME_GIT_AVAILABILITY_TIMEOUT_MS = 3e3;
function withTimeout(e, t) {
	let n = null;
	return new Promise((r, i) => {
		n = setTimeout(() => i(/* @__PURE__ */ Error("Timed out")), t), e.then((e) => {
			n && clearTimeout(n), r(e);
		}, (e) => {
			n && clearTimeout(n), i(e);
		});
	});
}
function useCreateProjectDefaults({ step: e, activeRuntimeEnvironmentId: t, sshTargetId: n, createParent: r, setCreateParent: i }) {
	let [a, o] = (0, import_react.useState)(""), [s, c] = (0, import_react.useState)("unknown"), [l, u] = (0, import_react.useState)("idle"), d = (0, import_react.useRef)(!1), f = (0, import_react.useRef)(null), p = (0, import_react.useRef)(null), m = (0, import_react.useRef)(!1), h = (0, import_react.useRef)(0), g = (0, import_react.useRef)(0), _ = t?.trim() || null, v = n?.trim() || null, y = _ ? `runtime:${_}` : v ? `ssh:${v}` : "local", b = (0, import_react.useCallback)((e) => {
		if (m.current) return !1;
		let t = e.trim();
		return !t || f.current?.parent === t;
	}, []), x = (0, import_react.useCallback)(() => {
		h.current++, g.current++, d.current = !1, f.current = null, p.current = null, m.current = !1, o(""), c("unknown"), u("idle");
	}, []), S = (0, import_react.useCallback)((e) => {
		f.current = null, p.current = {
			parent: (e ?? r).trim(),
			targetKey: y
		}, m.current = !0;
	}, [y, r]), C = e === "create" && !m.current && !!r.trim() && f.current?.parent === r.trim() && f.current.targetKey !== y, w = e === "create" && !!r.trim() && p.current?.parent === r.trim() && p.current.targetKey !== y, T = C || w;
	return (0, import_react.useEffect)(() => {
		if (e !== "create" || _ || v) return;
		let t = ++h.current;
		if (b(r)) {
			if (r.trim() && f.current?.targetKey !== "local" && f.current?.parent === r.trim()) {
				o(""), i("");
				return;
			}
			f.current?.targetKey === "local" && f.current.parent === r.trim() || (o(""), window.api.repos.getDefaultCreateProjectParent().then((e) => {
				t !== h.current || !b(r) || !e || (o(e), d.current = !0, f.current = {
					parent: e,
					targetKey: "local"
				}, p.current = {
					parent: e,
					targetKey: "local"
				}, i(e));
			}).catch(() => {}));
		}
	}, [
		t,
		_,
		v,
		b,
		r,
		i,
		e
	]), (0, import_react.useEffect)(() => {
		if (e !== "create") return;
		let t = _;
		if (!t || v) {
			u("idle");
			return;
		}
		if (!b(r)) {
			u("idle");
			return;
		}
		if (r.trim() && f.current?.targetKey !== `runtime:${t}` && f.current?.parent === r.trim()) {
			o(""), u("checking"), i("");
			return;
		}
		if (f.current?.targetKey === `runtime:${t}` && f.current.parent === r.trim()) {
			u("idle");
			return;
		}
		o("");
		let n = ++h.current;
		u("checking"), withTimeout(browseRuntimeServerDirectory(t, "~"), RUNTIME_GIT_AVAILABILITY_TIMEOUT_MS).then((e) => {
			if (n !== h.current || !b(r)) return;
			let a = getDefaultCreateProjectParent(e.resolvedPath);
			d.current = !0, f.current = {
				parent: a,
				targetKey: `runtime:${t}`
			}, p.current = {
				parent: a,
				targetKey: `runtime:${t}`
			}, o(a), i(a), u("idle");
		}).catch(() => {
			n === h.current && u("failed");
		});
	}, [
		t,
		_,
		v,
		b,
		r,
		i,
		e
	]), (0, import_react.useEffect)(() => {
		if (e !== "create") return;
		let n = t?.trim(), r = ++g.current;
		if (v) {
			c("unknown");
			return;
		}
		c("checking"), withTimeout(n ? callRuntimeRpc({
			kind: "environment",
			environmentId: n
		}, "repo.gitAvailable", void 0, { timeoutMs: RUNTIME_GIT_AVAILABILITY_TIMEOUT_MS }).then((e) => e.available) : window.api.repos.isGitAvailable(), n ? RUNTIME_GIT_AVAILABILITY_TIMEOUT_MS : LOCAL_GIT_AVAILABILITY_TIMEOUT_MS).then((e) => {
			r === g.current && c(e ? "available" : "unavailable");
		}).catch(() => {
			r === g.current && c("unknown");
		});
	}, [
		t,
		v,
		e
	]), {
		createDefaultParent: a,
		createGitAvailability: s,
		createRuntimeParentStatus: l,
		createParentDefaultPending: T,
		resetCreateDefaultState: x,
		markCreateParentTouched: S
	};
}
function useAddRepoHostChangeReset({ isOpen: e, selectedHostId: t, onResetClosed: n, onResetHostScopedState: r }) {
	let i = (0, import_react.useRef)(t);
	(0, import_react.useEffect)(() => {
		e || (i.current = t, n());
	}, [
		e,
		n,
		t
	]), (0, import_react.useEffect)(() => {
		!e || i.current === t || (i.current = t, r());
	}, [
		e,
		r,
		t
	]);
}
function AddRepoStepIndicator({ step: e, isAdding: t, onBack: r }) {
	return e === "clone" || e === "remote" || e === "server-path" || e === "create" || e === "nested" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "-mt-1 flex min-h-5 items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer disabled:cursor-default disabled:opacity-40",
			disabled: e === "nested" && t,
			onClick: r,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-3" }), translate("auto.components.sidebar.AddRepoStepIndicator.3bb655c117", "Back")]
		})
	}) : null;
}
function AddRepoDialogChrome({ children: e, isAdding: t, isOpen: n, onBack: r, onCloseAutoFocus: i, onOpenChange: a, step: o }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: n,
		onOpenChange: a,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			onCloseAutoFocus: i,
			className: `min-w-0 overflow-hidden sm:max-w-lg [&>*]:min-w-0 ${o === "nested" ? "max-h-[calc(100vh-2rem)] grid-rows-[auto_auto_minmax(0,1fr)]" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoStepIndicator, {
				step: o,
				isAdding: t,
				onBack: r
			}), e]
		})
	});
}
function getHostStatusDetail(e) {
	return e.compatibility?.kind === "blocked" ? describeRuntimeCompatBlock(e.compatibility) : `${getSidebarHostHealthLabel(e.health)}${e.detail ? ` - ${e.detail}` : ""}`;
}
function AddRepoHostSelector({ hosts: e, selectedHostId: t, open: a, onOpenChange: o, onSelectHost: c, onConnectHost: u, onAddSshHost: d, onAddRemoteServer: p }) {
	let [g, _] = (0, import_react.useState)(!1), v = !!(d || p);
	if (!shouldShowHostScopeControls(e) && !v) return null;
	let y = e.find((e) => e.id === t) ?? e[0];
	return y ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-xs",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-muted-foreground",
			children: translate("auto.components.sidebar.AddRepoHostSelector.host", "Host")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
			open: a,
			onOpenChange: o,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "ghost",
					role: "combobox",
					"aria-expanded": a,
					className: "h-7 min-w-0 max-w-[18rem] gap-1.5 rounded-md border border-border bg-muted/30 px-2 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 truncate",
							children: y.label
						}),
						y.health === "local" ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							title: getHostStatusDetail(y),
							className: "shrink-0 text-[11px] font-normal text-muted-foreground",
							children: getSidebarHostHealthLabel(y.health)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsUpDown, { className: "size-3.5 shrink-0 opacity-50" })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverContent, {
				align: "start",
				className: "w-[min(340px,calc(100vw-1rem))] min-w-[var(--radix-popover-trigger-width)] p-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Command, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandList, { children: [v ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
					open: g,
					onOpenChange: _,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
							value: "Add remote host SSH host Orca server",
							onSelect: () => _(!0),
							className: "items-start gap-2 px-3 py-2 text-xs text-muted-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mt-0.5 size-3 shrink-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex min-w-0 items-center gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate font-medium",
											children: translate("auto.components.sidebar.AddRepoHostSelector.addRemoteHost", "Add remote host")
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block truncate text-[11px] text-muted-foreground",
										children: translate("auto.components.sidebar.AddRepoHostSelector.addRemoteHostDetail", "SSH host or Orca server")
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "mt-0.5 size-3.5 shrink-0" })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
						align: "start",
						side: "right",
						className: "w-72 p-1",
						sideOffset: 8,
						children: [d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full flex-col rounded-sm px-2.5 py-2 text-left hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
							onClick: () => {
								_(!1), o(!1), d();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium",
								children: translate("auto.components.sidebar.AddRepoHostSelector.addSshHost", "Add SSH host")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: translate("auto.components.sidebar.AddRepoHostSelector.addSshHostDetail", "Use an existing machine over SSH.")
							})]
						}) : null, p ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full flex-col rounded-sm px-2.5 py-2 text-left hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
							onClick: () => {
								_(!1), o(!1), p();
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium",
								children: translate("auto.components.sidebar.AddRepoHostSelector.addRemoteServer", "Add remote server")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-[11px] text-muted-foreground",
								children: translate("auto.components.sidebar.AddRepoHostSelector.addRemoteServerDetail", "Pair with Orca running on another computer.")
							})]
						}) : null]
					})]
				}) : null, e.map((e) => {
					let a = e.id === t, s = !canSelectAddRepoHost(e), l = canConnectAddRepoHost(e), d = e.health === "connecting";
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CommandItem, {
						value: `${e.label} ${e.detail}`,
						disabled: s && !l,
						"aria-disabled": s,
						onSelect: () => {
							s || (c(e.id), o(!1));
						},
						className: cn("items-start gap-2 px-3 py-2 text-xs", s && !l && "cursor-not-allowed opacity-55"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: cn("mt-0.5 size-3 text-muted-foreground", a ? "opacity-70" : "opacity-0") }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex min-w-0 items-center gap-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-medium",
										children: e.label
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block truncate text-[11px] text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1 truncate",
										children: getHostStatusDetail(e)
									})
								})]
							}),
							l ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "link",
								size: "xs",
								className: "ml-2 h-auto w-[5.75rem] shrink-0 justify-end gap-1 self-center px-0 py-0 text-[11px] font-normal text-muted-foreground hover:text-foreground hover:no-underline",
								disabled: d,
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), u?.(e.id);
								},
								children: [d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3 animate-spin" }) : null, d ? translate("auto.components.sidebar.AddRepoHostSelector.connecting", "Connecting") : translate("auto.components.sidebar.AddRepoHostSelector.connect", "Connect")]
							}) : null
						]
					}, e.id);
				})] }) })
			})]
		})]
	}) : null;
}
function AddRepoHostSelectorSlot({ hostSelection: e }) {
	let [t, n] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoHostSelector, {
		hosts: e.hostOptions,
		selectedHostId: e.selectedHostId,
		open: e.hostSelectorOpen,
		onOpenChange: e.setHostSelectorOpen,
		onSelectHost: (t) => void e.handleSelectAddProjectHost(t),
		onConnectHost: (t) => void e.handleConnectAddProjectHost(t),
		onAddSshHost: () => n("ssh"),
		onAddRemoteServer: () => n("server")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRemoteHostDialog, {
		mode: t,
		onOpenChange: n
	})] });
}
function getSelectedNestedRepoPathsInScanOrder(e, t) {
	return e.repos.filter((e) => t.has(e.path)).map((e) => e.path);
}
function trackNestedFolderOpen(e) {
	e.attemptId && track("add_repo_nested_import_action", buildNestedRepoImportActionTelemetry({
		attemptId: e.attemptId,
		surface: "sidebar",
		runtimeKind: e.runtimeKind ?? e.getRuntimeKind(e.connectionId),
		action: "open_as_folder",
		foundCount: e.scan.repos.length,
		selectedCount: e.selectedCount
	}));
}
async function completeNestedFolderOpen(e) {
	trackNestedFolderOpen(e), e.setIsAdding(!0);
	try {
		let t = useAppStore.getState();
		if (e.connectionId) {
			e.closeModal(), t.openModal("confirm-non-git-folder", {
				folderPath: e.scan.selectedPath,
				connectionId: e.connectionId,
				runtimeEnvironmentId: e.owner,
				...e.displayName ? { displayName: e.displayName } : {}
			});
			return;
		}
		let n = await t.addNonGitFolder(e.scan.selectedPath, {
			runtimeEnvironmentId: e.owner ?? null,
			...e.displayName ? { displayName: e.displayName } : {}
		});
		if (e.generation !== e.currentGeneration()) return;
		n && e.closeModal();
	} catch (t) {
		e.generation === e.currentGeneration() && toast.error(t instanceof Error ? t.message : String(t));
	} finally {
		e.generation === e.currentGeneration() && e.setIsAdding(!1);
	}
}
function useAddRepoNestedImportFlow({ nestedAttemptId: e, nestedScan: t, nestedSelectedPaths: r, nestedRuntimeKind: i, nestedConnectionId: a, nestedGroupName: o, nestedImportScanId: s, nestedRuntimeEnvironmentId: c, activeRuntimeEnvironmentId: l, closeModal: u, fetchWorktrees: d, importNestedRepos: f, getNestedRepoRuntimeKind: p, onGitRepoReady: m, setIsAdding: h }) {
	let g = (0, import_react.useRef)(0), _ = (0, import_react.useCallback)(() => {
		g.current++;
	}, []), v = (0, import_react.useCallback)(() => {
		!t || !e || track("add_repo_nested_import_action", buildNestedRepoImportActionTelemetry({
			attemptId: e,
			surface: "sidebar",
			runtimeKind: i ?? p(a),
			action: "back",
			foundCount: t.repos.length,
			selectedCount: r.size
		}));
	}, [
		p,
		e,
		a,
		i,
		t,
		r.size
	]);
	return {
		handleImportNestedRepos: (0, import_react.useCallback)(async (u) => {
			let _ = e;
			if (!t || !_ || !shouldEmitNestedRepoImportSubmitTelemetry({
				attemptId: _,
				selectedCount: r.size
			})) return;
			let v = t.repos.length, y = r.size, b = getSelectedNestedRepoPathsInScanOrder(t, r), x = i ?? p(a), S = ++g.current;
			h(!0), track("add_repo_nested_import_action", buildNestedRepoImportActionTelemetry({
				attemptId: _,
				surface: "sidebar",
				runtimeKind: x,
				action: u === "group" ? "import_group" : "import_separate",
				foundCount: v,
				selectedCount: y
			}));
			let C = !1;
			try {
				let e = await f({
					parentPath: t.selectedPath,
					groupName: o,
					projectPaths: b,
					...a ? { connectionId: a } : {},
					...s ? { scanId: s } : {},
					runtimeEnvironmentId: c,
					mode: u
				});
				if (track("add_repo_nested_import_result", buildNestedRepoImportResultTelemetry({
					attemptId: _,
					surface: "sidebar",
					runtimeKind: x,
					mode: u,
					foundCount: v,
					selectedCount: y,
					result: e
				})), C = !0, !e) return;
				let r = e.projects.map((e) => e.projectId).filter((e) => typeof e == "string"), i = r[0];
				if (!i) {
					let t = e.projects.find((e) => e.status === "failed")?.error;
					S === g.current && toast.error(translate("auto.components.sidebar.useAddRepoNestedImportFlow.1b33c5f090", "No repositories imported"), { description: t ?? void 0 });
					return;
				}
				let p = worktreeRefreshOptions(a === null ? c : void 0, a);
				for (let e of r) await d(e, p);
				if (S !== g.current) return;
				e.failedCount > 0 && toast.warning(translate("auto.components.sidebar.useAddRepoNestedImportFlow.cbfbc7a797", "Some repositories could not be imported"), { description: translate("auto.components.sidebar.useAddRepoNestedImportFlow.680cac2c82", "{{value0}} failed", { value0: e.failedCount }) });
				let h = useAppStore.getState().repos.find((e) => e.id === i);
				if (h) {
					let e = a ? "ssh_remote_path" : l?.trim() ? "runtime_server_path" : "local_folder_picker";
					await m(h.id, e, p.executionHostId);
				}
			} catch (e) {
				S === g.current && toast.error(e instanceof Error ? e.message : String(e));
			} finally {
				C || track("add_repo_nested_import_result", buildNestedRepoImportResultTelemetry({
					attemptId: _,
					surface: "sidebar",
					runtimeKind: x,
					mode: u,
					foundCount: v,
					selectedCount: y,
					result: null
				})), S === g.current && h(!1);
			}
		}, [
			l,
			d,
			f,
			e,
			a,
			o,
			s,
			c,
			i,
			t,
			r,
			p,
			m,
			h
		]),
		handleOpenNestedRootFolder: (0, import_react.useCallback)(() => {
			if (!t) return Promise.resolve();
			let n = ++g.current, s = o.trim(), l = s && s !== defaultProjectGroupNameForPath(t.selectedPath) ? s : void 0;
			return completeNestedFolderOpen({
				scan: t,
				generation: n,
				currentGeneration: () => g.current,
				attemptId: e,
				runtimeKind: i,
				connectionId: a,
				selectedCount: r.size,
				getRuntimeKind: p,
				owner: c,
				...l ? { displayName: l } : {},
				closeModal: u,
				setIsAdding: h
			});
		}, [
			u,
			p,
			e,
			a,
			o,
			i,
			c,
			t,
			r.size,
			h
		]),
		resetNestedImportFlow: _,
		trackNestedBackAction: v
	};
}
function useAddRepoNestedReviewState({ activeRuntimeEnvironmentId: e, cancelNestedRepoScan: t, setStep: n }) {
	let [r, i] = (0, import_react.useState)(null), [a, o] = (0, import_react.useState)(/* @__PURE__ */ new Set()), [s, c] = (0, import_react.useState)(""), [l, u] = (0, import_react.useState)(null), [d, f] = (0, import_react.useState)(null), [p, m] = (0, import_react.useState)(null), [h, g] = (0, import_react.useState)(!1), [_, v] = (0, import_react.useState)(null), [y, b] = (0, import_react.useState)(null), [x, S] = (0, import_react.useState)(void 0), C = (0, import_react.useRef)(null), w = (0, import_react.useRef)(void 0), T = (0, import_react.useCallback)((t) => t ? "ssh" : e?.trim() ? "runtime" : "local", [e]), E = (0, import_react.useCallback)((e) => {
		i(e.scan), o(new Set(e.scan.repos.map((e) => e.path))), c(defaultProjectGroupNameForPath(e.scan.selectedPath || e.selectedPath)), u(e.connectionId), f(e.attemptId), m(e.runtimeKind), g(e.inProgress), b(e.scanId), S(e.runtimeEnvironmentId ?? null), n("nested");
	}, [n]), D = (0, import_react.useCallback)((e, t) => {
		C.current = e, w.current = e ? t : void 0, v(e);
	}, []);
	return {
		nestedScan: r,
		nestedSelectedPaths: a,
		nestedGroupName: s,
		nestedConnectionId: l,
		nestedAttemptId: d,
		nestedRuntimeKind: p,
		nestedScanInProgress: h,
		nestedScanId: _,
		nestedImportScanId: y,
		nestedRuntimeEnvironmentId: x,
		setNestedSelectedPaths: o,
		setNestedGroupName: c,
		setNestedScanInProgress: g,
		getNestedRepoRuntimeKind: T,
		showNestedRepoReview: E,
		setActiveNestedScanId: D,
		handleStopNestedScan: (0, import_react.useCallback)(() => {
			let e = C.current;
			e && t(e, { runtimeEnvironmentId: w.current });
		}, [t]),
		resetNestedRepoReviewState: (0, import_react.useCallback)(() => {
			let e = C.current;
			e && t(e, { runtimeEnvironmentId: w.current }), i(null), o(/* @__PURE__ */ new Set()), c(""), u(null), f(null), m(null), g(!1), b(null), S(null), D(null);
		}, [t, D])
	};
}
function useAddRepoRemoteNestedScan({ setActiveNestedScanId: e, showNestedRepoReview: t }) {
	return {
		showRemoteNestedRepoReview: (0, import_react.useCallback)((n, r, i, a, o, s) => {
			e(o ? s : null, null), t({
				scan: n,
				selectedPath: r,
				connectionId: i,
				attemptId: a,
				runtimeKind: "ssh",
				inProgress: o,
				scanId: s,
				runtimeEnvironmentId: null
			});
		}, [e, t]),
		trackRemoteNestedScanResult: (0, import_react.useCallback)((e, t) => {
			track("add_repo_nested_scan_result", buildNestedRepoScanTelemetry({
				attemptId: t,
				surface: "sidebar",
				runtimeKind: "ssh",
				scan: e
			}));
		}, [])
	};
}
function useAddRepoNestedReviewController({ activeRuntimeEnvironmentId: e, cancelNestedRepoScan: t, closeModal: n, fetchWorktrees: r, importNestedRepos: i, onGitRepoReady: a, setIsAdding: o, setStep: s, reviewRuntimeEnvironmentId: c }) {
	let l = useAddRepoNestedReviewState({
		activeRuntimeEnvironmentId: c,
		cancelNestedRepoScan: t,
		setStep: s
	}), u = useAddRepoRemoteNestedScan({
		setActiveNestedScanId: l.setActiveNestedScanId,
		showNestedRepoReview: l.showNestedRepoReview
	}), d = useAddRepoNestedImportFlow({
		activeRuntimeEnvironmentId: e,
		closeModal: n,
		fetchWorktrees: r,
		importNestedRepos: i,
		onGitRepoReady: a,
		setIsAdding: o,
		nestedAttemptId: l.nestedAttemptId,
		nestedScan: l.nestedScan,
		nestedSelectedPaths: l.nestedSelectedPaths,
		nestedRuntimeKind: l.nestedRuntimeKind,
		nestedConnectionId: l.nestedConnectionId,
		nestedGroupName: l.nestedGroupName,
		nestedImportScanId: l.nestedImportScanId,
		nestedRuntimeEnvironmentId: l.nestedRuntimeEnvironmentId,
		getNestedRepoRuntimeKind: l.getNestedRepoRuntimeKind
	});
	return {
		...l,
		...u,
		...d
	};
}
function useAddRepoHostedController(e) {
	let t = useAppStore((e) => e.closeModal), n = useAppStore((e) => e.openSettingsPage), r = useAppStore((e) => e.openSettingsTarget), i = e?.onOpenChange, a = e?.onProjectAdded, o = (0, import_react.useMemo)(() => i ? () => i(!1) : t, [i, t]), s = (0, import_react.useMemo)(() => i && a ? async (e) => {
		await markOnboardingProjectAdded("addedRepo"), i(!1), await a(e);
	} : void 0, [i, a]);
	return {
		closeModal: o,
		closeForFolderHandoff: (0, import_react.useMemo)(() => i ? () => {
			i(!1), t();
		} : t, [i, t]),
		finishProjectAdd: s,
		handleOpenSshSettings: (0, import_react.useCallback)(() => {
			o(), i && t(), r({
				pane: "ssh",
				repoId: null,
				sectionId: "ssh"
			}), n();
		}, [
			o,
			i,
			n,
			r,
			t
		])
	};
}
function routeAddRepoBrowse(e, t) {
	if (e?.kind === "runtime") {
		t.browseRuntime();
		return;
	}
	if (e?.kind === "ssh") {
		t.browseSsh(e.targetId);
		return;
	}
	e?.kind === "local" && t.browseLocal();
}
var AddRepoDialog_default = import_react.memo(function({ hosted: e }) {
	let t = useAppStore((t) => e ? e.open : t.activeModal === "add-repo"), n = useAppStore((t) => !e && typeof t.modalData.droppedLocalPath == "string" ? t.modalData.droppedLocalPath : ""), r = useAppStore((e) => e.addRepoPath), i = useAppStore((e) => e.scanNestedRepos), a = useAppStore((e) => e.cancelNestedRepoScan), o = useAppStore((e) => e.importNestedRepos), s = useAppStore((e) => e.repos), c = useAppStore((e) => e.fetchWorktrees), l = useAppStore((e) => e.setHideDefaultBranchWorkspace), u = useAppStore((e) => e.settings), { closeModal: d, closeForFolderHandoff: f, finishProjectAdd: p, handleOpenSshSettings: m } = useAddRepoHostedController(e), [h, g] = (0, import_react.useState)("add"), [_, v] = (0, import_react.useState)(!1), [y, b] = (0, import_react.useState)(null), x = useCompleteGitRepoAdd({
		closeModal: d,
		setHideDefaultBranchWorkspace: l,
		finishProjectAdd: p
	}), S = useAddRepoHostSelection({
		isOpen: t,
		setStep: g
	}), C = S.selectedParsedHost?.kind === "runtime" ? S.selectedParsedHost.environmentId : null, { nestedScan: w, nestedSelectedPaths: T, nestedGroupName: E, nestedScanInProgress: D, nestedScanId: O, setNestedSelectedPaths: k, setNestedGroupName: A, setNestedScanInProgress: j, getNestedRepoRuntimeKind: M, showNestedRepoReview: N, setActiveNestedScanId: P, handleStopNestedScan: Qe, resetNestedRepoReviewState: F, showRemoteNestedRepoReview: $e, trackRemoteNestedScanResult: et, handleImportNestedRepos: tt, handleOpenNestedRootFolder: rt, resetNestedImportFlow: I, trackNestedBackAction: L } = useAddRepoNestedReviewController({
		reviewRuntimeEnvironmentId: C,
		cancelNestedRepoScan: a,
		closeModal: f,
		fetchWorktrees: c,
		importNestedRepos: o,
		onGitRepoReady: x,
		setIsAdding: v,
		activeRuntimeEnvironmentId: C,
		setStep: g
	}), { sshTargets: R, selectedTargetId: it, remotePath: z, remoteError: at, isAddingRemote: ot, isScanningNested: st, setSelectedTargetId: ct, setRemotePath: lt, setRemoteError: B, resetRemoteState: V, handleOpenRemoteStep: H, handleAddRemoteRepo: ut, handleConnectTarget: dt, stopRemoteNestedScan: ft } = useRemoteRepo(c, g, f, (e, t) => x(e, "ssh_remote_path", t), i, $e, et), { createName: pt, createParent: U, createError: mt, isCreating: ht, setCreateName: gt, setCreateParent: W, setCreateError: G, resetCreateState: K, handlePickParent: _t, handleCreate: vt } = useCreateRepo(c, f, (e, t) => x(e, "create_project", t), {
		hostId: S.selectedHostId,
		runtimeEnvironmentId: C,
		sshTargetId: S.selectedSshTargetId
	}), { createDefaultParent: yt, createGitAvailability: bt, createRuntimeParentStatus: xt, createParentDefaultPending: St, resetCreateDefaultState: q, markCreateParentTouched: Ct } = useCreateProjectDefaults({
		step: h,
		activeRuntimeEnvironmentId: C,
		sshTargetId: S.selectedSshTargetId,
		createParent: U,
		setCreateParent: W
	}), { cloneUrl: wt, cloneDestination: Tt, cloneError: Et, cloneProgress: Dt, isCloning: Ot, setCloneUrl: kt, setCloneDestination: At, setCloneError: J, resetCloneFlow: Y, handlePickDestination: jt, handleClone: Mt } = useAddRepoCloneFlow({
		step: h,
		activeRuntimeEnvironmentId: C,
		sshTargetId: S.selectedSshTargetId,
		workspaceDir: u?.workspaceDir,
		fetchWorktrees: c,
		onGitRepoReady: x
	}), X = !!C, Nt = S.selectedParsedHost?.kind, { handleBrowse: Pt, resetLocalFolderFlow: Z } = useAddRepoLocalFolderFlow({
		isOpen: t,
		droppedLocalPath: n,
		activeRuntimeEnvironmentId: C,
		addRepoPath: r,
		closeModal: f,
		fetchWorktrees: c,
		scanNestedRepos: i,
		setActiveNestedScanId: P,
		setNestedScanInProgress: j,
		showNestedRepoReview: N,
		onGitRepoReady: x,
		setIsAdding: v,
		setAddProjectBusyLabel: b
	}), { serverPath: Ft, isAddingServerPath: It, setServerPath: Lt, resetServerPathFlow: Q, handleAddServerPath: Rt } = useAddRepoServerPathFlow({
		addRepoPath: r,
		activeRuntimeEnvironmentId: C,
		closeModal: f,
		fetchWorktrees: c,
		getNestedRepoRuntimeKind: M,
		scanNestedRepos: i,
		setActiveNestedScanId: P,
		setNestedScanInProgress: j,
		showNestedRepoReview: N,
		onGitRepoReady: x,
		setAddProjectBusyLabel: b
	}), $ = (0, import_react.useCallback)(() => {
		window.api.repos.cloneAbort(), Z(), g("add"), v(!1), b(null), Q(), Y(), I(), F(), q(), K(), V();
	}, [
		Y,
		Z,
		F,
		q,
		Q,
		I,
		V,
		K
	]), zt = (0, import_react.useCallback)(() => {
		v(!1), b(null), Z(), Q(), Y(), q(), K(), V();
	}, [
		Y,
		q,
		K,
		V,
		Z,
		Q
	]);
	useAddRepoHostChangeReset({
		isOpen: t,
		selectedHostId: S.selectedHostId,
		onResetClosed: $,
		onResetHostScopedState: zt
	});
	let Bt = (0, import_react.useCallback)(() => {
		h === "nested" && L(), $();
	}, [
		$,
		h,
		L
	]), Vt = (0, import_react.useCallback)((e) => {
		e || (h === "nested" && !_ && L(), d(), $());
	}, [
		d,
		_,
		$,
		h,
		L
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoDialogChrome, {
		isOpen: t,
		step: h,
		isAdding: _,
		onBack: Bt,
		onCloseAutoFocus: e?.onCloseAutoFocus,
		onOpenChange: Vt,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoDialogStepContent, {
			step: h,
			isRuntimeEnvironmentActive: X,
			activeRuntimeEnvironmentId: C,
			isSshLikely: !1,
			repoCount: s.length,
			isAdding: _,
			addProjectBusyLabel: y,
			nestedScanInProgress: D,
			nestedScanId: O,
			serverPath: Ft,
			isAddingServerPath: It,
			cloneUrl: wt,
			cloneDestination: Tt,
			cloneError: Et,
			cloneProgress: Dt,
			isCloning: Ot,
			sshTargets: R,
			selectedTargetId: it,
			selectedSshTargetId: S.selectedSshTargetId,
			selectedHostLabel: S.hostOptions.find((e) => e.id === S.selectedHostId)?.label ?? null,
			lockSshTargetSelection: S.selectedParsedHost?.kind === "ssh",
			remotePath: z,
			remoteError: at,
			isAddingRemote: ot,
			isScanningRemoteNested: st,
			nestedScan: w,
			nestedSelectedPaths: T,
			nestedGroupName: E,
			createName: pt,
			createParent: U,
			createError: mt,
			isCreating: ht,
			hostSelector: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddRepoHostSelectorSlot, { hostSelection: S }),
			showRemoteAction: !1,
			actionsDisabled: !S.selectedHostId,
			browseHostKind: Nt ?? "runtime",
			createDefaultParent: yt,
			createGitAvailability: bt,
			createRuntimeParentStatus: xt,
			createParentDefaultPending: St,
			manualCreateParentEntry: X || Nt === "ssh",
			onBrowse: () => routeAddRepoBrowse(S.selectedParsedHost, {
				browseLocal: () => void Pt(),
				browseRuntime: () => g("server-path"),
				browseSsh: (e) => void H(e)
			}),
			onOpenCloneStep: () => {
				S.selectedHostId && (J(null), g("clone"));
			},
			onOpenCreateStep: () => {
				S.selectedHostId && (G(null), g("create"));
			},
			onOpenRemoteStep: H,
			onStopNestedScan: Qe,
			onServerPathChange: Lt,
			onAddServerPath: (e) => void Rt(e),
			onSelectTarget: (e) => {
				ct(e), B(null);
			},
			onRemotePathChange: (e) => {
				lt(e), B(null);
			},
			onAddRemoteRepo: ut,
			onOpenSshSettings: m,
			onConnectTarget: dt,
			onStopRemoteNestedScan: ft,
			onCloneUrlChange: (e) => {
				kt(e), J(null);
			},
			onCloneDestinationChange: (e) => {
				At(e), J(null);
			},
			onPickCloneDestination: jt,
			onClone: Mt,
			onNestedGroupNameChange: A,
			onNestedSelectedPathsChange: k,
			onImportNestedRepos: (e) => void tt(e),
			onOpenNestedRootFolder: () => void rt(),
			onCreateNameChange: (e) => {
				gt(e), G(null);
			},
			onCreateParentChange: (e) => {
				Ct(e), W(e), G(null);
			},
			onPickCreateParent: () => {
				_t().then((e) => {
					e && Ct(e);
				});
			},
			onCreate: vt
		})
	});
});
export { AddRepoDialog_default as default };
