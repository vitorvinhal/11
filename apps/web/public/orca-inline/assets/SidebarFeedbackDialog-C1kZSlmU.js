import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn, t as useMountedRef, u as createLucideIcon } from "./useMountedRef-De7bTfqf.js";
import { t as ExternalLink } from "./external-link-BvKpTN80.js";
import { t as Github } from "./github-C84XZpwh.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { D as createBrowserUuid, a as assertRasterImagePreviewWithinLimits, i as RASTER_IMAGE_PREVIEW_TOO_LARGE_ERROR, n as INVALID_RASTER_IMAGE_PREVIEW_ERROR } from "./renderer-app-platform--nJ6HYmL.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { i as hasNativeFileDragTypes } from "./native-file-drop-BKKZQway.js";
import { a as stripClientEnvironmentFooter, n as resolveClientEnvironmentInfo, r as appendClientEnvironmentFooter } from "./client-environment-info-kHqnRpB7.js";
var ImagePlus = createLucideIcon("image-plus", [
	["path", {
		d: "M16 5h6",
		key: "1vod17"
	}],
	["path", {
		d: "M19 2v6",
		key: "4bpg5p"
	}],
	["path", {
		d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
		key: "1ue2ih"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}]
]), import_react = /* @__PURE__ */ __toESM(require_react());
const SUPPORTED_FEEDBACK_IMAGE_TYPES = [
	"image/png",
	"image/jpeg",
	"image/webp",
	"image/gif"
], FEEDBACK_IMAGE_FILE_ACCEPT = SUPPORTED_FEEDBACK_IMAGE_TYPES.join(",");
var MAX_FEEDBACK_IMAGE_DETAIL_ERRORS = 4;
function isSupportedType(e) {
	return SUPPORTED_FEEDBACK_IMAGE_TYPES.includes(e);
}
function hasAttachableFeedbackImage(e, x = 0) {
	return x < 4 && e.some((e) => isSupportedType(e.type) && e.size > 0 && e.size <= 8388608);
}
function releaseFeedbackImageDraft(e) {
	URL.revokeObjectURL(e.previewUrl);
}
function formatFeedbackImageSize(e) {
	return e >= 1024 * 1024 ? `${(e / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(e / 1024))} KB`;
}
function feedbackImageDisplayName(e) {
	return e.name || translate("auto.lib.feedback.image.attachments.fallbackName", "Image attachment");
}
async function readFeedbackImageFiles(e, x) {
	let C = [], w = [], T = 4 - x, E = 0, D = (e) => {
		w.length < MAX_FEEDBACK_IMAGE_DETAIL_ERRORS ? w.push(e()) : E += 1;
	};
	try {
		for (let x of e) {
			let e = feedbackImageDisplayName(x);
			if (!isSupportedType(x.type)) {
				D(() => translate("auto.lib.feedback.image.attachments.unsupportedType", "{{fileName}} is not a supported image type.", { fileName: e }));
				continue;
			}
			if (x.size === 0) {
				D(() => translate("auto.lib.feedback.image.attachments.empty", "{{fileName}} is empty.", { fileName: e }));
				continue;
			}
			if (x.size > 8388608) {
				D(() => translate("auto.lib.feedback.image.attachments.tooLarge", "{{fileName}} is larger than {{maxSize}}.", {
					fileName: e,
					maxSize: formatFeedbackImageSize(8388608)
				}));
				continue;
			}
			if (T <= 0) {
				D(() => translate("auto.lib.feedback.image.attachments.tooMany", "You can attach up to {{maxCount}} images.", { maxCount: 4 }));
				break;
			}
			let w = new Uint8Array(await x.arrayBuffer());
			try {
				assertRasterImagePreviewWithinLimits(w, x.type);
			} catch (x) {
				if (x instanceof Error && x.message === "Image dimensions exceed the preview safety limit") {
					D(() => translate("auto.lib.feedback.image.attachments.dimensionsTooLarge", "{{fileName}} has dimensions that are too large to preview safely.", { fileName: e }));
					continue;
				}
				if (x instanceof Error && x.message === "Image preview has invalid or unsupported raster dimensions") {
					D(() => translate("auto.lib.feedback.image.attachments.invalidImage", "{{fileName}} is not a valid supported image.", { fileName: e }));
					continue;
				}
				throw x;
			}
			--T, C.push({
				id: `${x.name}-${x.size}-${createBrowserUuid()}`,
				name: e,
				contentType: x.type,
				bytes: x.size,
				data: w,
				previewUrl: URL.createObjectURL(x)
			});
		}
	} catch (e) {
		throw C.forEach(releaseFeedbackImageDraft), e;
	}
	return E > 0 && w.push(translate("auto.lib.feedback.image.attachments.additionalErrors", "{{count}} additional images could not be attached.", { count: E })), {
		images: C,
		errors: w
	};
}
function extractImageFilesFromDataTransfer(e) {
	return e ? Array.from(e.files).filter((e) => e.type.startsWith("image/")) : [];
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function SidebarFeedbackImageAttachments({ images: e, disabled: x, isDragActive: T, onAddFiles: E, onRemove: D }) {
	let O = import_react.useRef(null), A = e.length >= 4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("rounded-md border border-dashed border-border/70 px-3 py-2 transition-colors", T && "border-ring bg-accent/40"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: translate("auto.components.sidebar.SidebarFeedbackImageAttachments.screenshotsHint", "Attach up to {count} screenshots").replace("{count}", "4")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					size: "sm",
					className: "h-7 shrink-0 text-xs",
					disabled: x || A,
					onClick: () => O.current?.click(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlus, { className: "size-3.5" }), translate("auto.components.sidebar.SidebarFeedbackImageAttachments.attachImages", "Attach")]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: O,
				type: "file",
				accept: FEEDBACK_IMAGE_FILE_ACCEPT,
				multiple: !0,
				className: "hidden",
				onChange: (e) => {
					E(Array.from(e.target.files ?? [])), e.target.value = "";
				}
			}),
			e.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-2 flex flex-wrap gap-2",
				children: e.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group/attachment relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: e.previewUrl,
							alt: e.name,
							className: "size-14 rounded border border-border object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							size: "icon-xs",
							"aria-label": translate("auto.components.sidebar.SidebarFeedbackImageAttachments.removeImage", "Remove {{fileName}}", { fileName: e.name }),
							disabled: x,
							onClick: () => D(e.id),
							className: "absolute -right-2 -top-2 rounded-full text-muted-foreground opacity-80 hover:opacity-100 hover:text-foreground focus-visible:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-2.5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-center text-[10px] leading-none text-muted-foreground",
							children: formatFeedbackImageSize(e.bytes)
						})
					]
				}, e.id))
			})
		]
	});
}
function insertClientEnvironmentFooter(e) {
	let x = appendClientEnvironmentFooter({
		message: e.feedback,
		info: e.environmentInfo
	});
	return e.feedback.trim() === "" ? `\n\n${x}` : x;
}
function useSidebarFeedbackEnvironmentPrefill(e) {
	let { open: x, feedback: S, setFeedback: C, textareaRef: w, mountedRef: T } = e, E = (0, import_react.useRef)(null);
	(0, import_react.useLayoutEffect)(() => {
		let e = E.current;
		if (!e || (E.current = null, e.feedback !== S)) return;
		let x = w.current;
		x && document.activeElement === x && x.setSelectionRange(e.start, e.end, e.direction);
	}, [S, w]), (0, import_react.useEffect)(() => {
		if (!x) return;
		let e = !1;
		return resolveClientEnvironmentInfo().then((x) => {
			if (e || !T.current) return;
			let S = w.current;
			S && document.activeElement === S && (E.current = {
				feedback: insertClientEnvironmentFooter({
					feedback: S.value,
					environmentInfo: x
				}),
				start: S.selectionStart,
				end: S.selectionEnd,
				direction: S.selectionDirection
			}), C((e) => insertClientEnvironmentFooter({
				feedback: e,
				environmentInfo: x
			}));
		}), () => {
			e = !0;
		};
	}, [
		x,
		T,
		C,
		w
	]);
}
function useFeedbackImageDrop(e, x) {
	let [S, C] = (0, import_react.useState)(!1), w = (0, import_react.useRef)(null), T = (0, import_react.useRef)(0), E = (0, import_react.useCallback)(() => {
		T.current = 0, C(!1);
	}, []), D = (0, import_react.useCallback)((e) => {
		hasNativeFileDragTypes(e.dataTransfer.types) && (T.current += 1, C(!0));
	}, []), O = (0, import_react.useCallback)((e) => {
		hasNativeFileDragTypes(e.dataTransfer.types) && (e.preventDefault(), e.dataTransfer.dropEffect = "copy");
	}, []), k = (0, import_react.useCallback)((e) => {
		hasNativeFileDragTypes(e.dataTransfer.types) && (T.current = Math.max(0, T.current - 1), T.current === 0 && C(!1));
	}, []);
	return (0, import_react.useEffect)(() => {
		if (!e) return;
		let S = (e) => {
			let S = w.current?.contains(e.target) ?? !1;
			if (E(), !S || !hasNativeFileDragTypes(e.dataTransfer?.types)) return;
			e.preventDefault();
			let C = extractImageFilesFromDataTransfer(e.dataTransfer);
			C.length !== 0 && (e.stopPropagation(), x(C));
		};
		return window.addEventListener("drop", S, !0), window.addEventListener("dragend", E, !0), () => {
			window.removeEventListener("drop", S, !0), window.removeEventListener("dragend", E, !0), E();
		};
	}, [
		x,
		e,
		E
	]), {
		isDragActive: S,
		contentRef: w,
		dragHandlers: {
			onDragEnter: D,
			onDragOver: O,
			onDragLeave: k
		}
	};
}
function useSidebarFeedbackImages(e) {
	let [x, C] = (0, import_react.useState)([]), [w, T] = (0, import_react.useState)(0), E = (0, import_react.useRef)([]), D = (0, import_react.useRef)(0), O = x.length, k = (0, import_react.useCallback)(() => {
		E.current.forEach(releaseFeedbackImageDraft), E.current = [], C([]);
	}, []);
	(0, import_react.useEffect)(() => () => {
		E.current.forEach(releaseFeedbackImageDraft), E.current = [];
	}, []);
	let A = (0, import_react.useCallback)((x) => {
		if (x.length === 0) return;
		if (e.isSubmitting) {
			toast.warning(translate("auto.components.sidebar.SidebarFeedbackDialog.attachWhileSending", "Wait for the current feedback to finish sending before attaching more images."));
			return;
		}
		let w = O + D.current;
		D.current += x.length, T((e) => e + x.length), readFeedbackImageFiles(x, w).then(({ images: S, errors: w }) => {
			if (D.current -= x.length, !e.mountedRef.current) {
				S.forEach(releaseFeedbackImageDraft);
				return;
			}
			T((e) => Math.max(0, e - x.length)), S.length > 0 && (E.current = [...E.current, ...S], C((e) => [...e, ...S])), w.forEach((e) => toast.warning(e));
		}, (C) => {
			D.current -= x.length, console.error("Failed to read feedback image attachments:", C), e.mountedRef.current && (T((e) => Math.max(0, e - x.length)), toast.error(translate("auto.components.sidebar.SidebarFeedbackDialog.imageReadFailed", "Could not read the attached images. Try attaching them again.")));
		});
	}, [
		O,
		e.isSubmitting,
		e.mountedRef
	]), j = (0, import_react.useCallback)((e) => {
		let x = E.current.find((x) => x.id === e);
		x && (releaseFeedbackImageDraft(x), E.current = E.current.filter((x) => x.id !== e)), C((x) => x.filter((x) => x.id !== e));
	}, []), { isDragActive: M, contentRef: N, dragHandlers: P } = useFeedbackImageDrop(e.open, A);
	return {
		images: x,
		pendingImageReadCount: w,
		isDragActive: M,
		contentRef: N,
		dragHandlers: P,
		handleAddFiles: A,
		handleRemoveImage: j,
		clearImages: k,
		hasPendingImageReads: () => D.current > 0,
		getReservedImageSlots: () => E.current.length + D.current
	};
}
var GITHUB_ISSUES_URL = "https://github.com/stablyai/orca/issues/", DISCORD_URL = "https://discord.gg/fzjDKHxv8Q", X_URL = "https://x.com/orca_build";
function openExternalUrl(e) {
	window.api.shell.openUrl(e);
}
function getSubmitIdentity(e, x) {
	return x || !e ? {
		githubLogin: null,
		githubEmail: null
	} : {
		githubLogin: e.login,
		githubEmail: e.email
	};
}
function SidebarFeedbackDialog({ open: e, onOpenChange: x }) {
	let [E, k] = (0, import_react.useState)(""), [A, j] = (0, import_react.useState)(!1), [M, N] = (0, import_react.useState)(null), [P, F] = (0, import_react.useState)(!1), [I, L] = (0, import_react.useState)(!1), R = useMountedRef(), z = (0, import_react.useRef)(null), { images: B, pendingImageReadCount: V, isDragActive: H, contentRef: U, dragHandlers: W, handleAddFiles: G, handleRemoveImage: K, clearImages: q, hasPendingImageReads: J, getReservedImageSlots: Y } = useSidebarFeedbackImages({
		open: e,
		isSubmitting: A,
		mountedRef: R
	});
	useSidebarFeedbackEnvironmentPrefill({
		open: e,
		feedback: E,
		setFeedback: k,
		textareaRef: z,
		mountedRef: R
	}), import_react.useEffect(() => {
		if (!e) return;
		let x = !1;
		return F(!0), window.api.gh.viewer().then((e) => {
			x || N(e);
		}).catch((e) => {
			x || (N(null), console.error("Failed to load GitHub viewer:", e));
		}).finally(() => {
			x || F(!1);
		}), () => {
			x = !0;
		};
	}, [e]);
	let Z = async () => {
		if (A || J()) return;
		let e = E.trim(), C = stripClientEnvironmentFooter(E).trim();
		if (!e || !C) {
			toast.warning(translate("auto.components.sidebar.SidebarFeedbackDialog.a2fd890d9e", "Please enter feedback before submitting."));
			return;
		}
		j(!0);
		try {
			let C = getSubmitIdentity(M, I), w = await window.api.feedback.submit({
				feedback: e,
				submitAnonymously: I,
				githubLogin: C.githubLogin,
				githubEmail: C.githubEmail,
				images: B.map((e) => ({
					contentType: e.contentType,
					data: e.data
				}))
			});
			if (!w.ok) throw Error(`Feedback request failed: ${w.error}`);
			R.current && (w.imagesDelivered === !1 ? toast.warning(translate("auto.components.sidebar.SidebarFeedbackDialog.imagesNotDelivered", "Feedback sent, but image delivery could not be confirmed.")) : toast.success(translate("auto.components.sidebar.SidebarFeedbackDialog.7a46c228b8", "Thanks for the feedback.")), k(""), L(!1), q(), x(!1));
		} catch (e) {
			R.current && toast.error(translate("auto.components.sidebar.SidebarFeedbackDialog.60b721e857", "Failed to submit feedback. Please try again.")), console.error("Failed to submit feedback:", e);
		} finally {
			R.current && j(!1);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: x,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			ref: U,
			className: "max-h-[calc(100vh-3rem)] overflow-y-auto scrollbar-sleek sm:max-w-lg",
			onOpenAutoFocus: (e) => {
				e.preventDefault(), z.current?.focus();
			},
			onPaste: (e) => {
				let x = extractImageFilesFromDataTransfer(e.clipboardData);
				x.length !== 0 && (hasAttachableFeedbackImage(x, Y()) && e.preventDefault(), G(x));
			},
			...W,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "text-sm",
					children: translate("auto.components.sidebar.SidebarFeedbackDialog.0eb643f07f", "Send Feedback")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: translate("auto.components.sidebar.SidebarFeedbackDialog.a828fa4aee", "Share what's working, what's broken, or what Orca should do next.")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-md border border-border/70 bg-muted/30 p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-medium text-foreground",
						children: translate("auto.components.sidebar.SidebarFeedbackDialog.9b33530b3d", "Other ways to reach us")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-8 text-xs",
								onClick: () => openExternalUrl(GITHUB_ISSUES_URL),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3.5" }),
									translate("auto.components.sidebar.SidebarFeedbackDialog.d245c4ef6c", "GitHub issues"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-8 text-xs",
								onClick: () => openExternalUrl(DISCORD_URL),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										className: "size-3.5 fill-current",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.317 4.369A19.791 19.791 0 0 0 15.885 3c-.191.328-.403.77-.553 1.116a18.27 18.27 0 0 0-5.098 0A12.64 12.64 0 0 0 9.68 3a19.736 19.736 0 0 0-4.433 1.369C2.444 8.479 1.69 12.488 2.067 16.44a19.912 19.912 0 0 0 5.427 2.744c.438-.598.828-1.23 1.164-1.89a12.95 12.95 0 0 1-1.833-.877c.154-.113.305-.231.45-.352a14.294 14.294 0 0 0 12.45 0c.146.12.296.239.45.352-.585.34-1.2.634-1.835.878.337.659.727 1.29 1.165 1.888a19.84 19.84 0 0 0 5.43-2.744c.442-4.579-.755-8.551-3.932-12.07ZM9.955 14.005c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.176 1.095 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm4.09 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.176 1.095 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" })
									}),
									translate("auto.components.sidebar.SidebarFeedbackDialog.26108d3699", "Join Discord"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "button",
								variant: "outline",
								size: "sm",
								className: "h-8 text-xs",
								onClick: () => openExternalUrl(X_URL),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										viewBox: "0 0 24 24",
										"aria-hidden": "true",
										className: "size-3.5 fill-current",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.901 1.153h3.68l-8.041 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.493h2.04L6.486 3.24H4.298l13.313 17.406Z" })
									}),
									translate("auto.components.sidebar.SidebarFeedbackDialog.3460258a54", "Follow on X"),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					ref: z,
					value: E,
					onChange: (e) => k(e.target.value),
					placeholder: translate("auto.components.sidebar.SidebarFeedbackDialog.d46ddd66fc", "What could we improve?"),
					rows: 7,
					className: "min-h-32 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarFeedbackImageAttachments, {
					images: B,
					disabled: A,
					isDragActive: H,
					onAddFiles: G,
					onRemove: K
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-h-9 rounded-md border border-border/70 bg-muted/30 px-3 py-2",
					children: M ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							translate("auto.components.sidebar.SidebarFeedbackDialog.c9e5ea0791", "GitHub:"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-foreground",
								children: [M.login, M.email ? ` (${M.email})` : ""]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-2 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: I,
								onChange: (e) => L(e.target.checked),
								className: cn("size-3.5 rounded border border-border bg-background align-middle", "accent-foreground")
							}), translate("auto.components.sidebar.SidebarFeedbackDialog.5b120b9634", "Submit anonymously")]
						})]
					}) : P ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.sidebar.SidebarFeedbackDialog.d20439c560", "Checking GitHub identity…")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: translate("auto.components.sidebar.SidebarFeedbackDialog.8de03e23c5", "Submit with your typed feedback only, or connect `gh` to include GitHub identity.")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => x(!1),
					disabled: A,
					children: translate("auto.components.sidebar.SidebarFeedbackDialog.8bf619e4cf", "Cancel")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => void Z(),
					disabled: A || V > 0 || stripClientEnvironmentFooter(E).trim() === "",
					children: A ? translate("auto.components.sidebar.SidebarFeedbackDialog.69969ba364", "Sending…") : translate("auto.components.sidebar.SidebarFeedbackDialog.f2e42e1307", "Send")
				})] })
			]
		})
	});
}
export { SidebarFeedbackDialog };
