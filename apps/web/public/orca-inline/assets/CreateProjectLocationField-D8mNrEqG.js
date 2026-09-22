import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ArrowUp } from "./arrow-up-6Uj9YtPL.js";
import { t as ChevronRight } from "./chevron-right-BGFSRGtc.js";
import { t as getFileTypeIcon } from "./file-type-icons-CLi9yo0S.js";
import { t as FolderOpen } from "./folder-open-D9SSjK-6.js";
import { t as Folder } from "./folder-CMlHGMNi.js";
import { t as House } from "./house-CZtdX0MK.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as Pencil } from "./pencil-EMomP5i_.js";
import { t as Search } from "./search-CF4JLrDD.js";
import { Gt as sortDirEntries, Gv as callRuntimeRpc } from "./store-C9f8FDJV.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { i as TooltipTrigger, n as TooltipContent, t as Tooltip } from "./tooltip-BWXjmmf0.js";
import { t as Input } from "./input-BrXOv9Kv.js";
import { p as isClipboardTextByteLengthOverLimit } from "./renderer-app-platform--nJ6HYmL.js";
import { i as DialogDescription, o as DialogHeader, s as DialogTitle } from "./dialog-s0g51002.js";
import { i as shouldHandleTextControlPaste } from "./text-control-paste-Bg1FpWOl.js";
var DRIVE_ANCHOR_RE = /^[A-Za-z]:([\\/]|$)/;
function isDrivePath(e) {
	return DRIVE_ANCHOR_RE.test(e);
}
function isDriveRoot(e) {
	return /^[A-Za-z]:[\\/]?$/.test(e);
}
function driveRootOf(e) {
	return `${e[0].toUpperCase()}:\\`;
}
function splitBrowsePath(e, n = "posix") {
	return n === "win32" && isDrivePath(e) ? {
		kind: "drive",
		driveRoot: driveRootOf(e),
		segments: e.slice(2).split(/[\\/]/).filter(Boolean)
	} : {
		kind: "posix",
		segments: e.split("/").filter(Boolean)
	};
}
function joinDrivePath(e, n) {
	return `${e.replace(/[\\/]+$/, "")}\\${n}`;
}
function parentOfDrivePath(e) {
	if (isDriveRoot(e)) return "/";
	let n = splitBrowsePath(e, "win32");
	if (n.kind !== "drive") return e;
	let r = n.segments.slice(0, -1);
	return r.length === 0 ? n.driveRoot : `${n.driveRoot}${r.join("\\")}`;
}
function driveBreadcrumbPath(e, n, r) {
	let i = n.slice(0, r + 1);
	return i.length === 0 ? e : `${e}${i.join("\\")}`;
}
function isRemoteFileBrowserFilterQueryTooLarge(e, n = 2048) {
	return isClipboardTextByteLengthOverLimit(e, n);
}
function filterEntries(e, n) {
	if (isRemoteFileBrowserFilterQueryTooLarge(n)) return [];
	let r = n.trim();
	if (!r) return e;
	let i = r.toLowerCase();
	return e.filter((e) => e.name.toLowerCase().includes(i));
}
function decideEnterAction(e) {
	let n = e.filter((e) => e.isDirectory);
	return n.length === 1 ? {
		type: "navigate",
		name: n[0].name
	} : n.length === 0 && e.length > 0 ? { type: "fileHint" } : { type: "noop" };
}
function decideEscAction(e) {
	return e.length > 0 ? { type: "clearFilter" } : { type: "cancel" };
}
function joinPath(e, n, r = "posix") {
	return r === "win32" && e === "/" && isDrivePath(n) ? driveRootOf(n) : r === "win32" && isDrivePath(e) ? joinDrivePath(e, n) : e === "/" ? `/${n}` : `${e}/${n}`;
}
function parentPath(e, n = "posix") {
	return n === "win32" && isDrivePath(e) ? parentOfDrivePath(e) : e === "/" || e === "" ? "/" : e.replace(/\/[^/]+\/?$/, "") || "/";
}
function isPathMode(e, n = "posix") {
	return e.includes("/") || n === "win32" && isDrivePath(e) ? !0 : e === "~" || e === "." || e === "..";
}
function isRemoteFileBrowserPathResolveTextTooLarge(e) {
	return shouldHandleTextControlPaste(e);
}
function shouldDeferRemoteFileBrowserPasteResolve(e) {
	return isRemoteFileBrowserPathResolveTextTooLarge(e);
}
function parsePathInput(e, n = "posix") {
	if (!isPathMode(e, n)) return {
		mode: "filter",
		filter: e
	};
	if (e === "~") return {
		mode: "path",
		base: "home",
		committedSegments: [],
		trailingFilter: ""
	};
	if (e === ".") return {
		mode: "path",
		base: "cwd",
		committedSegments: [],
		trailingFilter: ""
	};
	if (e === "..") return {
		mode: "path",
		base: "cwd",
		committedSegments: [".."],
		trailingFilter: ""
	};
	let r, i, a;
	if (n === "win32" && isDrivePath(e) ? (r = "drive", i = driveRootOf(e), a = e.slice(2).replace(/^[\\/]/, "")) : e.startsWith("/") ? (r = "root", a = e.slice(1)) : e.startsWith("~/") ? (r = "home", a = e.slice(2)) : (r = "cwd", a = e), r === "drive" ? /[\\/]{2,}/.test(a) : a.includes("//")) return {
		mode: "path",
		base: r,
		driveRoot: i,
		committedSegments: [],
		trailingFilter: "",
		invalid: "Invalid path: repeated separators"
	};
	if (/[\x00-\x1F]/.test(a)) return {
		mode: "path",
		base: r,
		driveRoot: i,
		committedSegments: [],
		trailingFilter: "",
		invalid: "Invalid path: control characters are not allowed"
	};
	let o = a === "" ? [""] : r === "drive" ? a.split(/[\\/]/) : a.split("/"), s = o.at(-1) ?? "", c = o.slice(0, -1);
	return {
		mode: "path",
		base: r,
		driveRoot: i,
		committedSegments: c,
		trailingFilter: s
	};
}
function resolveSegmentStep(e, n, i) {
	if (e === "." || e === "..") return { type: "stay" };
	let a = i.find((n) => n.name === e);
	if (a) return a.isDirectory ? {
		type: "descend",
		name: a.name
	} : {
		type: "error",
		message: translate("auto.components.sidebar.remote.file.browser.helpers.4dbd72a7d7", "{{value0}} isn't a directory in {{value1}}", {
			value0: e,
			value1: n
		})
	};
	let o = e.toLowerCase(), s = i.find((e) => e.name.toLowerCase() === o);
	if (s) return s.isDirectory ? {
		type: "descend",
		name: s.name
	} : {
		type: "error",
		message: translate("auto.components.sidebar.remote.file.browser.helpers.4dbd72a7d7", "{{value0}} isn't a directory in {{value1}}", {
			value0: e,
			value1: n
		})
	};
	let c = i.filter((e) => e.isDirectory && e.name.toLowerCase().startsWith(o));
	return c.length === 1 ? {
		type: "descend",
		name: c[0].name
	} : c.length > 1 ? {
		type: "error",
		message: translate("auto.components.sidebar.remote.file.browser.helpers.be266af66c", "{{value0}} matches multiple directories in {{value1}}", {
			value0: e,
			value1: n
		})
	} : {
		type: "error",
		message: translate("auto.components.sidebar.remote.file.browser.helpers.4dbd72a7d7", "{{value0}} isn't a directory in {{value1}}", {
			value0: e,
			value1: n
		})
	};
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function RemoteFileBrowserBreadcrumbs({ resolvedPath: e, pathFlavor: n, loading: r, navigate: i, navigateUp: c }) {
	let l = splitBrowsePath(e, n), u = l.segments, f = (0, import_react.useCallback)((e) => l.kind === "drive" ? driveBreadcrumbPath(l.driveRoot, l.segments, e) : `/${l.segments.slice(0, e + 1).join("/")}`, [l]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-0.5 min-h-[28px] overflow-x-auto scrollbar-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: c,
				disabled: e === "/" || r,
				className: "shrink-0 p-1 rounded hover:bg-accent disabled:opacity-30 transition-colors cursor-pointer disabled:cursor-default",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => i("~"),
				disabled: r,
				className: "shrink-0 p-1 rounded hover:bg-accent transition-colors cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-3.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-0 text-[11px] text-muted-foreground ml-1 min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => i("/"),
						className: "shrink-0 hover:text-foreground transition-colors cursor-pointer px-0.5",
						children: "/"
					}),
					l.kind === "drive" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-2.5 shrink-0 text-muted-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => i(l.driveRoot),
						className: cn("truncate max-w-[120px] hover:text-foreground transition-colors cursor-pointer px-0.5", u.length === 0 && "text-foreground font-medium"),
						children: l.driveRoot.slice(0, 2)
					})] }),
					u.map((e, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-2.5 shrink-0 text-muted-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => i(f(n)),
						className: cn("truncate max-w-[120px] hover:text-foreground transition-colors cursor-pointer px-0.5", n === u.length - 1 && "text-foreground font-medium"),
						children: e
					})] }, f(n)))
				]
			})
		]
	});
}
function RemoteFileBrowserEntryList({ loading: e, error: n, entries: i, filteredEntries: o, filter: l, preview: d, isPreviewActive: p, inputRef: m, handleRowClick: h, handleRowDoubleClick: g }) {
	let _ = (0, import_react.useMemo)(() => d ? filterEntries(d.entries, d.filter) : [], [d]), v = p ? _ : o, y = p ? `${d.resolvedPath} is empty` : "Empty directory", b = p ? d.filter : l, x = isRemoteFileBrowserPathResolveTextTooLarge(b) ? translate("auto.components.sidebar.RemoteFileBrowser.largeInputNoMatches", "No matches for this long input") : translate("auto.components.sidebar.RemoteFileBrowser.00c4235c10", "No matches for '{{value0}}'", { value0: b });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border border-border rounded-md overflow-hidden bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[240px] overflow-y-auto scrollbar-sleek",
			children: e ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-5 animate-spin text-muted-foreground" })
			}) : n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center h-full px-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-destructive text-center",
					children: n
				})
			}) : p && d.entries.length === 0 && !d.error && !d.loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: y
				})
			}) : !p && i.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: translate("auto.components.sidebar.RemoteFileBrowser.51001182e3", "Empty directory")
				})
			}) : v.length === 0 && !d?.error ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-center h-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: x
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: x
				})]
			}) : v.map((e) => {
				let n = getFileTypeIcon(e.name);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => h(e),
					onDoubleClick: () => g(e),
					onMouseDown: (e) => {
						e.preventDefault(), m.current?.focus();
					},
					className: cn("w-full flex items-center gap-2 px-3 py-1.5 text-xs text-left transition-colors cursor-pointer", "hover:bg-accent/60"),
					children: [
						e.isDirectory ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5 text-muted-foreground shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { className: "size-3.5 text-muted-foreground/60 shrink-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate flex-1 min-w-0",
							children: e.name
						}),
						e.isDirectory && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 text-muted-foreground/60 shrink-0" })
					]
				}, e.name);
			})
		})
	});
}
function useRemoteFileBrowserFilterKeyCommands({ filter: e, setFilter: n, filteredEntries: r, preview: i, discardPreview: a, resolvedPath: o, pathFlavor: s, navigate: c, navigateInto: l, navigateUp: u, triggerFileHint: d, clearFileHint: f, onCancel: p }) {
	return (0, import_react.useCallback)((m) => {
		if (m.key === "Enter") {
			if (i) {
				if (i.error || i.loading) {
					m.preventDefault();
					return;
				}
				let n = parsePathInput(e, s);
				if (n.mode === "path" && n.trailingFilter === "") {
					m.preventDefault(), c(i.resolvedPath);
					return;
				}
				let r = decideEnterAction(filterEntries(i.entries, i.filter));
				r.type === "navigate" ? (m.preventDefault(), c(joinPath(i.resolvedPath, r.name, s))) : r.type === "fileHint" ? (m.preventDefault(), d()) : m.preventDefault();
				return;
			}
			let n = decideEnterAction(r);
			n.type === "navigate" ? (m.preventDefault(), l(n.name)) : n.type === "fileHint" && (m.preventDefault(), d());
			return;
		}
		m.key === "Escape" && (decideEscAction(e).type === "clearFilter" ? (m.stopPropagation(), m.preventDefault(), n(""), a(), f()) : p()), m.key === "Backspace" && e === "" && !i && o !== "/" && (m.preventDefault(), u());
	}, [
		e,
		r,
		i,
		c,
		l,
		u,
		o,
		d,
		f,
		p,
		s,
		n,
		a
	]);
}
async function browseRuntimeServerDirectory(e, n) {
	let r = await callRuntimeRpc({
		kind: "environment",
		environmentId: e
	}, "files.browseServerDir", { path: n }, { timeoutMs: 15e3 });
	return {
		...r,
		entries: sortDirEntries(r.entries)
	};
}
function useRemoteFileBrowserListing(e, n) {
	let r = (0, import_react.useRef)(/* @__PURE__ */ new Map()), i = (0, import_react.useRef)(null);
	return {
		fetchListing: (0, import_react.useCallback)(async (i) => {
			let a = r.current.get(i);
			if (a) return a;
			let o = e ? await window.api.ssh.browseDir({
				targetId: e,
				dirPath: i
			}) : await browseRuntimeServerDirectory(requireRuntimeEnvironmentId(n), i);
			return r.current.set(o.resolvedPath, o), i !== o.resolvedPath && r.current.set(i, o), o;
		}, [n, e]),
		homePathRef: i
	};
}
function requireRuntimeEnvironmentId(e) {
	if (!e) throw Error("Runtime environment is required");
	return e;
}
async function resolvePathInput({ raw: e, resolvedPath: n, pathFlavor: r, fetchListing: i, homePathRef: a, previewGenRef: o, lastCommittedPrefixRef: s, setPreview: c }) {
	let l = parsePathInput(e, r);
	if (l.mode !== "path") return;
	let u = ++o.current;
	if (l.invalid) {
		c({
			resolvedPath: n,
			entries: [],
			filter: "",
			error: l.invalid,
			loading: !1
		});
		return;
	}
	let d;
	if (l.base === "root") d = "/";
	else if (l.base === "drive") d = l.driveRoot ?? "/";
	else if (l.base === "home") {
		if (!a.current) {
			c({
				resolvedPath: n,
				entries: [],
				filter: "",
				error: null,
				loading: !0
			});
			try {
				let e = await i("~");
				if (u !== o.current) return;
				a.current = e.resolvedPath;
			} catch (e) {
				if (u !== o.current) return;
				c({
					resolvedPath: n,
					entries: [],
					filter: "",
					error: e instanceof Error ? e.message : String(e),
					loading: !1
				});
				return;
			}
		}
		d = a.current;
	} else d = n;
	c((e) => ({
		resolvedPath: e?.resolvedPath ?? d,
		entries: e?.entries ?? [],
		filter: e?.filter ?? "",
		error: null,
		loading: !0
	}));
	let f = d;
	try {
		for (let e of l.committedSegments) {
			let n = await i(f);
			if (u !== o.current) return;
			let r = resolveSegmentStep(e, f, n.entries);
			if (r.type === "error") {
				c({
					resolvedPath: f,
					entries: n.entries,
					filter: "",
					error: r.message,
					loading: !1
				});
				return;
			}
			if (r.type === "stay") {
				e === ".." && (f = parentPath(f, n.pathFlavor));
				continue;
			}
			f = joinPath(f, r.name, n.pathFlavor);
		}
		let n = await i(f);
		if (u !== o.current) return;
		s.current = committedPrefix(e), c({
			resolvedPath: n.resolvedPath,
			entries: n.entries,
			filter: l.trailingFilter,
			error: null,
			loading: !1
		});
	} catch (e) {
		if (u !== o.current) return;
		c({
			resolvedPath: f,
			entries: [],
			filter: "",
			error: e instanceof Error ? e.message : String(e),
			loading: !1
		});
	}
}
function committedPrefix(e) {
	let n = Math.max(e.lastIndexOf("/"), e.lastIndexOf("\\"));
	return n === -1 ? "" : e.slice(0, n + 1);
}
var PATH_DEBOUNCE_MS = 300;
function useRemoteFileBrowserPathPreview({ resolvedPath: e, pathFlavor: n, fetchListing: r, homePathRef: i, inputRef: a, clearFileHint: o, setFilter: s }) {
	let [c, l] = (0, import_react.useState)(null), u = (0, import_react.useRef)(0), d = (0, import_react.useRef)(null), f = (0, import_react.useRef)(null), p = (0, import_react.useRef)(""), m = (0, import_react.useCallback)(() => {
		l(null), u.current++, p.current = "", d.current &&= (clearTimeout(d.current), null);
	}, []), h = (0, import_react.useCallback)(() => {
		l(null), u.current++, d.current &&= (clearTimeout(d.current), null);
	}, []), g = (0, import_react.useCallback)(() => {
		u.current++;
		for (let e of [d, f]) e.current &&= (clearTimeout(e.current), null);
	}, []), _ = (0, import_react.useCallback)(async (a) => {
		await resolvePathInput({
			raw: a,
			resolvedPath: e,
			pathFlavor: n,
			fetchListing: r,
			homePathRef: i,
			previewGenRef: u,
			lastCommittedPrefixRef: p,
			setPreview: l
		});
	}, [
		e,
		r,
		n,
		i
	]);
	return {
		preview: c,
		handleInputChange: (0, import_react.useCallback)((e) => {
			if (o(), s(e), isRemoteFileBrowserPathResolveTextTooLarge(e)) {
				c && (l(null), u.current++), d.current &&= (clearTimeout(d.current), null), f.current &&= (clearTimeout(f.current), null);
				return;
			}
			if (!isPathMode(e, n)) {
				c && (l(null), u.current++), d.current &&= (clearTimeout(d.current), null);
				return;
			}
			let r = parsePathInput(e, n);
			if (r.mode === "path" && c && !c.error && !r.invalid && committedPrefix(e) === p.current) {
				l({
					...c,
					filter: r.trailingFilter
				});
				return;
			}
			d.current && clearTimeout(d.current), d.current = setTimeout(() => {
				d.current = null, _(e);
			}, PATH_DEBOUNCE_MS);
		}, [
			o,
			c,
			_,
			n,
			s
		]),
		handleInputPaste: (0, import_react.useCallback)((e) => {
			e.defaultPrevented || shouldDeferRemoteFileBrowserPasteResolve(e.clipboardData.getData("text/plain")) || (f.current && clearTimeout(f.current), f.current = setTimeout(() => {
				f.current = null, d.current &&= (clearTimeout(d.current), null);
				let e = a.current?.value ?? "";
				!isRemoteFileBrowserPathResolveTextTooLarge(e) && isPathMode(e, n) && _(e);
			}, 0));
		}, [
			_,
			n,
			a
		]),
		discardPreview: h,
		resetPreviewForNavigation: m,
		cancelPreviewWork: g
	};
}
var FILE_HINT_MS = 2e3, FILE_HINT_TEXT = "Files can't be opened as a project";
function RemoteFileBrowser({ targetId: e, runtimeEnvironmentId: n, initialPath: o = "~", onSelect: s, onCancel: c }) {
	let [l, u] = (0, import_react.useState)(""), [d, p] = (0, import_react.useState)([]), [h, g] = (0, import_react.useState)("posix"), [_, v] = (0, import_react.useState)(!0), [y, b] = (0, import_react.useState)(null), [x, S] = (0, import_react.useState)(""), [C, w] = (0, import_react.useState)(!1), T = (0, import_react.useRef)(0), E = (0, import_react.useRef)(null), D = (0, import_react.useRef)(null), O = (0, import_react.useRef)(null), { fetchListing: k, homePathRef: A } = useRemoteFileBrowserListing(e, n), j = (0, import_react.useCallback)(() => {
		D.current &&= (clearTimeout(D.current), null), w(!1);
	}, []), { preview: M, handleInputChange: N, handleInputPaste: P, discardPreview: F, resetPreviewForNavigation: I, cancelPreviewWork: L } = useRemoteFileBrowserPathPreview({
		resolvedPath: l,
		pathFlavor: h,
		fetchListing: k,
		homePathRef: A,
		inputRef: E,
		clearFileHint: j,
		setFilter: S
	}), R = (0, import_react.useCallback)(() => {
		T.current++;
	}, []), z = (0, import_react.useCallback)((e) => {
		if (e === null) {
			R(), L();
			for (let e of [D, O]) e.current &&= (clearTimeout(e.current), null);
		}
	}, [R, L]), B = (0, import_react.useCallback)(async (e) => {
		let n = ++T.current;
		v(!0), b(null);
		try {
			let r = await k(e);
			if (n !== T.current) return;
			u(r.resolvedPath), p(r.entries), g(r.pathFlavor), e === "~" && (A.current = r.resolvedPath);
		} catch (e) {
			if (n !== T.current) return;
			b(e instanceof Error ? e.message : String(e)), p([]);
		} finally {
			n === T.current && v(!1);
		}
	}, [k, A]), V = (0, import_react.useCallback)((e) => {
		S(""), I(), j(), B(e);
	}, [
		B,
		j,
		I
	]);
	(0, import_react.useEffect)(() => {
		B(o);
	}, [B, o]);
	let H = (0, import_react.useCallback)((e) => {
		V(joinPath(l, e, h));
	}, [
		l,
		V,
		h
	]), U = (0, import_react.useCallback)(() => {
		l !== "/" && V(parentPath(l, h));
	}, [
		l,
		V,
		h
	]), W = (0, import_react.useMemo)(() => filterEntries(d, x), [d, x]), G = (0, import_react.useCallback)(() => {
		D.current && clearTimeout(D.current), w(!0), D.current = setTimeout(() => {
			w(!1), D.current = null;
		}, FILE_HINT_MS);
	}, []), K = (0, import_react.useCallback)(() => {
		s(l);
	}, [l, s]), q = M?.resolvedPath ?? l, J = (0, import_react.useCallback)((e) => {
		M?.loading || (O.current && clearTimeout(O.current), O.current = setTimeout(() => {
			O.current = null, e.isDirectory ? V(joinPath(q, e.name, h)) : G();
		}, 220));
	}, [
		V,
		G,
		q,
		M?.loading,
		h
	]), Y = (0, import_react.useCallback)((e) => {
		!e.isDirectory || M?.loading || (O.current &&= (clearTimeout(O.current), null), s(joinPath(q, e.name, h)));
	}, [
		q,
		s,
		M?.loading,
		h
	]), X = useRemoteFileBrowserFilterKeyCommands({
		filter: x,
		setFilter: S,
		filteredEntries: W,
		preview: M,
		discardPreview: F,
		resolvedPath: l,
		pathFlavor: h,
		navigate: V,
		navigateInto: H,
		navigateUp: U,
		triggerFileHint: G,
		clearFileHint: j,
		onCancel: c
	}), Z = M !== null, Q = Z && M.loading, $ = _ || Z && x !== "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: z,
		className: "flex flex-col gap-2 min-w-0 w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowserBreadcrumbs, {
				resolvedPath: l,
				pathFlavor: h,
				loading: _,
				navigate: V,
				navigateUp: U
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-3.5 text-muted-foreground absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: E,
						type: "text",
						autoFocus: !0,
						value: x,
						onChange: (e) => N(e.target.value),
						onPaste: P,
						onKeyDown: X,
						placeholder: translate("auto.components.sidebar.RemoteFileBrowser.2300612806", "Type to filter or enter a path…"),
						"aria-invalid": !!M?.error,
						"aria-describedby": M?.error ? "remote-file-browser-path-error" : void 0,
						className: cn("w-full h-7 pl-7 pr-7 text-xs rounded-md bg-background", "border border-border focus:outline-none focus:ring-1 focus:ring-ring", M?.error && "border-destructive/60 focus:ring-destructive/60")
					}),
					Q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-3.5 absolute right-2 top-1/2 -translate-y-1/2 animate-spin text-muted-foreground" })
				]
			}),
			M?.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "remote-file-browser-path-error",
				role: "alert",
				className: "text-[11px] text-destructive px-0.5 -mt-1",
				children: M.error
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowserEntryList, {
				loading: _,
				error: y,
				entries: d,
				filteredEntries: W,
				filter: x,
				preview: M,
				isPreviewActive: Z,
				inputRef: E,
				handleRowClick: J,
				handleRowDoubleClick: Y
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "block text-[10px] text-muted-foreground truncate w-full",
				title: C ? void 0 : l,
				children: C ? FILE_HINT_TEXT : translate("auto.components.sidebar.RemoteFileBrowser.971d85cc84", "Opens as a project on this host · {{value0}}", { value0: l })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					className: "h-7 text-xs",
					onClick: c,
					children: translate("auto.components.sidebar.RemoteFileBrowser.f8b1deb1a4", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					className: "h-7 text-xs",
					onClick: K,
					disabled: $,
					title: l,
					children: translate("auto.components.sidebar.RemoteFileBrowser.9e060f5815", "Select folder")
				})]
			})
		]
	});
}
function CreateProjectParentBrowser({ runtimeEnvironmentId: e, sshTargetId: n, createParent: i, onParentChange: a, onClose: o }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: translate("auto.components.sidebar.CreateProjectLocationField.f520f83a97", "Browse host filesystem") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: translate("auto.components.sidebar.CreateProjectLocationField.b589b77997", "Navigate to a directory and click Select to choose it.") })] }), n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		targetId: n,
		initialPath: i || "~",
		onSelect: (e) => {
			a(e), o();
		},
		onCancel: o
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RemoteFileBrowser, {
		runtimeEnvironmentId: e,
		initialPath: i || "~",
		onSelect: (e) => {
			a(e), o();
		},
		onCancel: o
	})] });
}
function CreateProjectLocationField({ createParent: e, isCreating: n, manualParentEntry: a, runtimeEnvironmentId: o, sshTargetId: s, onParentChange: c, onPickParent: d, onBrowseServer: f }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-medium text-muted-foreground block",
			children: translate("auto.components.sidebar.CreateProjectLocationField.134e37f711", "Location")
		}), a ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				value: e,
				onChange: (e) => c(e.target.value),
				placeholder: translate("auto.components.sidebar.CreateProjectLocationField.2a20a603a3", "/home/user/projects"),
				className: "h-11 min-w-0 flex-1 text-sm font-mono",
				disabled: n,
				spellCheck: !1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: !0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: "outline",
					size: "icon",
					className: "h-11 w-11 shrink-0",
					onClick: f,
					disabled: n || !o && !s,
					"aria-label": translate("auto.components.sidebar.CreateProjectLocationField.f520f83a97", "Browse host filesystem"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, { className: "size-4" })
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, {
				side: "top",
				sideOffset: 4,
				children: translate("auto.components.sidebar.CreateProjectLocationField.f520f83a97", "Browse host filesystem")
			})] })]
		}) : e ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "group flex items-center gap-2.5 rounded-md border border-border bg-background/40 h-11 min-w-0 px-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 min-w-0 truncate font-mono text-[12px]",
				title: e,
				children: e
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: d,
				disabled: n,
				className: "shrink-0 inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer disabled:cursor-not-allowed",
				"aria-label": translate("auto.components.sidebar.CreateProjectLocationField.afaf54f245", "Change parent folder"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" }), translate("auto.components.sidebar.CreateProjectLocationField.632b456b1b", "Change")]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			type: "button",
			variant: "outline",
			onClick: d,
			disabled: n,
			className: "w-full h-11 justify-start text-sm text-muted-foreground font-normal gap-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 inline-flex items-center justify-center size-7 rounded-md border border-border/70 bg-background/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5" })
			}), translate("auto.components.sidebar.CreateProjectLocationField.95548e33bf", "Choose parent folder...")]
		})]
	});
}
export { browseRuntimeServerDirectory as i, CreateProjectParentBrowser as n, RemoteFileBrowser as r, CreateProjectLocationField as t };
