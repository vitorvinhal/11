import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowLeft } from "./arrow-left-DVNzwFVN.js";
import { t as Download } from "./download--oayFN4d.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { iC as parseExecutionHostId, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { c as SelectValue, i as SelectItem, n as SelectContent, s as SelectTrigger, t as Select } from "./select-X9Gmv_Pu.js";
import "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import "./renderer-app-platform--nJ6HYmL.js";
import "./stale-document-visibility-rSdoU229.js";
import { n as toast } from "./dist-E3opdjfr.js";
import "./telemetry-DdvWHaqb.js";
import "./pane-metric-options-deferral-Bz211kas.js";
import { i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import "./text-control-paste-Bg1FpWOl.js";
import { n as CreateProjectParentBrowser } from "./CreateProjectLocationField-D8mNrEqG.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
async function pickLocalProjectLocationFolder(e) {
	try {
		let d = await window.api.repos.pickFolder();
		d && e(d);
	} catch (e) {
		toast.error(e instanceof Error ? e.message : String(e));
	}
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function ExistingFolderForm({ setupPath: e, setupKind: d, isSubmitting: m, onBack: h, onPathChange: g, onKindChange: y, onBrowse: b, onSubmit: x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBackButton, {
				onBack: h,
				label: translate("auto.components.settings.RepositoryPane.existingFolder", "Existing folder")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: e,
					onChange: (e) => g(e.target.value),
					placeholder: translate("auto.components.settings.RepositoryPane.setupExistingFolderPathPlaceholder", "/path/to/project/on/host"),
					className: "h-9 min-w-0 flex-1 font-mono text-sm",
					spellCheck: !1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					className: "size-9 shrink-0",
					onClick: b,
					"aria-label": translate("auto.components.sidebar.CreateProjectLocationField.f520f83a97", "Browse host filesystem"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: d,
				onValueChange: (e) => y(e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
					className: "h-9 text-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "git",
					children: translate("auto.components.settings.RepositoryPane.setupKindGit", "Git repo")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					value: "folder",
					children: translate("auto.components.settings.RepositoryPane.setupKindFolder", "Folder")
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					disabled: !e.trim() || m,
					onClick: x,
					children: [m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, m ? translate("auto.components.settings.RepositoryPane.settingUpHost", "Importing...") : translate("auto.components.new.workspace.SetProjectLocationDialog.saveLocation", "Set location")]
				})
			})
		]
	});
}
function CloneForm({ cloneUrl: e, cloneDestination: d, isSubmitting: m, onBack: h, onCloneUrlChange: g, onCloneDestinationChange: y, onBrowse: b, onSubmit: x }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepBackButton, {
				onBack: h,
				label: translate("auto.components.settings.RepositoryPane.cloneFromUrl", "Clone from URL")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: e,
				onChange: (e) => g(e.target.value),
				placeholder: translate("auto.components.settings.RepositoryPane.cloneUrlPlaceholder", "Repository URL"),
				className: "h-9 min-w-0",
				spellCheck: !1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: d,
					onChange: (e) => y(e.target.value),
					placeholder: translate("auto.components.settings.RepositoryPane.cloneDestinationPlaceholder", "/destination/on/host"),
					className: "h-9 min-w-0 flex-1 font-mono text-sm",
					spellCheck: !1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					className: "size-9 shrink-0",
					onClick: b,
					"aria-label": translate("auto.components.sidebar.CreateProjectLocationField.f520f83a97", "Browse host filesystem"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					size: "sm",
					disabled: !e.trim() || !d.trim() || m,
					onClick: x,
					children: [m ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 animate-spin" }) : null, m ? translate("auto.components.settings.RepositoryPane.cloningHost", "Cloning...") : translate("auto.components.settings.RepositoryPane.cloneHost", "Clone")]
				})
			})
		]
	});
}
function LocationActionButton({ icon: e, title: d, description: f, onClick: p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: p,
		className: cn("flex min-h-[3.25rem] w-full items-center gap-3 rounded-md border border-border/70 bg-muted/20 px-3 py-2.5 text-left transition-colors", "hover:bg-accent focus-visible:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-7 shrink-0 place-items-center rounded-md text-muted-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm font-medium leading-5",
				children: d
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block text-xs font-normal leading-4 text-muted-foreground",
				children: f
			})]
		})]
	});
}
function StepBackButton({ onBack: e, label: d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "ghost",
		size: "sm",
		className: "-ml-2 gap-2",
		onClick: e,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), d]
	});
}
function SetProjectLocationDialog({ option: e, projectName: d, projectKind: f, defaultCloneUrl: p, onClose: m, onReady: h }) {
	let g = e !== null, [_, v] = (0, import_react.useState)(e);
	e !== null && e !== _ && v(e);
	let y = e ?? _, b = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: g,
		onOpenChange: (e) => {
			e || m();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			"data-testid": "set-project-location-dialog",
			className: "sm:max-w-lg",
			onEscapeKeyDown: (e) => {
				b.current?.() && e.preventDefault();
			},
			children: y ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetProjectLocationDialogBody, {
				option: y,
				projectName: d,
				projectKind: f,
				defaultCloneUrl: p,
				exitHostBrowser: b,
				onReady: h
			}, y.id) : null
		})
	});
}
function SetProjectLocationDialogBody({ option: e, projectName: d, projectKind: p, defaultCloneUrl: m, exitHostBrowser: h, onReady: v }) {
	let x = useAppStore((e) => e.setupProjectExistingFolder), S = useAppStore((e) => e.setupProjectClone), [C, w] = (0, import_react.useState)("choose"), [T, E] = (0, import_react.useState)("existing"), [D, O] = (0, import_react.useState)(""), [k, A] = (0, import_react.useState)(p), [j, M] = (0, import_react.useState)(m), [N, P] = (0, import_react.useState)(""), [F, I] = (0, import_react.useState)(!1), L = (0, import_react.useRef)(!1);
	(0, import_react.useEffect)(() => (L.current = !1, () => {
		L.current = !0;
	}), []);
	let R = parseExecutionHostId(e.hostId), z = R?.kind === "ssh" || R?.kind === "runtime" ? R : null, B = p === "git", V = {
		existing: {
			value: D,
			set: O
		},
		clone: {
			value: N,
			set: P
		}
	}, H = C === "browse" && z !== null;
	(0, import_react.useEffect)(() => (h.current = H ? () => (w(T), !0) : null, () => {
		h.current = null;
	}), [
		T,
		H,
		h
	]);
	let U = (e) => {
		if (!z) {
			pickLocalProjectLocationFolder(V[e].set);
			return;
		}
		E(e), w("browse");
	}, W = async () => {
		if (D.trim()) {
			I(!0);
			try {
				let f = await x({
					projectId: e.projectId,
					hostId: e.hostId,
					path: D.trim(),
					kind: k,
					displayName: d
				});
				f && !L.current && v(f.setup.id);
			} finally {
				I(!1);
			}
		}
	}, G = async () => {
		if (!(!j.trim() || !N.trim())) {
			I(!0);
			try {
				let f = await S({
					projectId: e.projectId,
					hostId: e.hostId,
					url: j.trim(),
					destination: N.trim(),
					displayName: d
				});
				f && !L.current && v(f.setup.id);
			} finally {
				I(!1);
			}
		}
	};
	return H && z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateProjectParentBrowser, {
		sshTargetId: z.kind === "ssh" ? z.targetId : null,
		runtimeEnvironmentId: z.kind === "runtime" ? z.environmentId : null,
		createParent: V[T].value,
		onParentChange: V[T].set,
		onClose: () => w(T)
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.new.workspace.SetProjectLocationDialog.title", "Set project location") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.new.workspace.SetProjectLocationDialog.description", "Choose where {{project}} lives on {{host}}.", {
			project: d,
			host: e.label
		}) })] }),
		C === "choose" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationActionButton, {
				icon: FolderOpen,
				title: translate("auto.components.new.workspace.SetProjectLocationDialog.browseFolder", "Browse folder"),
				description: translate("auto.components.new.workspace.SetProjectLocationDialog.browseFolderHelp", "Use an existing checkout or folder on this host."),
				onClick: () => {
					w("existing"), !z && !D && pickLocalProjectLocationFolder(O);
				}
			}), B ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocationActionButton, {
				icon: Download,
				title: translate("auto.components.new.workspace.SetProjectLocationDialog.cloneFromUrl", "Clone from URL"),
				description: translate("auto.components.new.workspace.SetProjectLocationDialog.cloneFromUrlHelp", "Clone this repository onto {{host}}.", { host: e.label }),
				onClick: () => w("clone")
			}) : null]
		}) : null,
		C === "existing" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExistingFolderForm, {
			setupPath: D,
			setupKind: k,
			isSubmitting: F,
			onBack: () => w("choose"),
			onPathChange: O,
			onKindChange: A,
			onBrowse: () => U("existing"),
			onSubmit: () => void W()
		}) : null,
		C === "clone" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloneForm, {
			cloneUrl: j,
			cloneDestination: N,
			isSubmitting: F,
			onBack: () => w("choose"),
			onCloneUrlChange: M,
			onCloneDestinationChange: P,
			onBrowse: () => U("clone"),
			onSubmit: () => void G()
		}) : null
	] });
}
export { SetProjectLocationDialog };
