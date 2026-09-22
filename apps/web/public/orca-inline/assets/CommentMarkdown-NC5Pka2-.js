import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, r as cn } from "./useMountedRef-De7bTfqf.js";
import { J as fileUriToFilesystemPath, Qy as isWindowsAbsolutePathLike, t as useAppStore } from "./store-C9f8FDJV.js";
import { t as X } from "./x-BiewlTnM.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { c as DialogTrigger, n as DialogClose, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
import { n as extractTerminalFileLinks, u as parseFileLinkLocation } from "./terminal-links-B9lD7wbL.js";
import { t as remarkGfm } from "./lib-DEDsinTP.js";
import { c as defaultUrlTransform, n as defaultSchema, r as rehypeRaw, s as Markdown, t as rehypeSanitize } from "./lib-CCrOeqzl.js";
import { t as remarkBreaks } from "./lib-8KbGCveb.js";
import { t as MermaidBlock } from "./MermaidBlock-DUCPG0_k.js";
var WEB_SCHEME_PATTERN = /^(?:https?|mailto):/i, SCHEME_PATTERN = /^[A-Za-z][A-Za-z0-9+.-]*:/, MAX_NATIVE_CHAT_FILE_HREF_DECODES = 4;
function createNativeChatFileHref(d) {
	return `#orca-native-chat-file=${encodeURIComponent(d)}`;
}
function decodeNativeChatFileHref(d) {
	if (!d.startsWith("#orca-native-chat-file=")) return null;
	try {
		let z = decodeURIComponent(d.slice(23));
		return z && !z.startsWith("#orca-native-chat-file=") ? z : null;
	} catch {
		return null;
	}
}
function parseLineFragment(d) {
	if (!d) return null;
	let z = d;
	try {
		z = decodeURIComponent(d);
	} catch {}
	let B = /^(?:L|line-?)([1-9]\d*)\b/i.exec(z);
	return B ? Number.parseInt(B[1], 10) : null;
}
function stripQueryAndHash(d) {
	let z = d.indexOf("#"), B = d.indexOf("?"), V = z === -1 ? B : B === -1 ? z : Math.min(z, B);
	return {
		pathText: V === -1 ? d : d.slice(0, V),
		line: parseLineFragment(z === -1 ? "" : d.slice(z + 1, B > z ? B : void 0))
	};
}
function maybeDecodeHrefPath(d) {
	try {
		return decodeURIComponent(d);
	} catch {
		return d;
	}
}
function routeNativeChatHref(d) {
	let z = d?.trim();
	if (!z) return { kind: "none" };
	for (let d = 0; d < MAX_NATIVE_CHAT_FILE_HREF_DECODES; d += 1) {
		let d = decodeNativeChatFileHref(z);
		if (!d) break;
		z = d.trim();
	}
	if (!z || z.startsWith("#orca-native-chat-file=") || z.startsWith("#")) return { kind: "none" };
	if (WEB_SCHEME_PATTERN.test(z)) return {
		kind: "web",
		url: z
	};
	if (/^file:/i.test(z)) {
		let d;
		try {
			d = new URL(z);
		} catch {
			return { kind: "none" };
		}
		let B = fileUriToFilesystemPath(d);
		return B ? {
			kind: "file",
			pathText: B,
			line: parseLineFragment(d.hash.slice(1))
		} : { kind: "none" };
	}
	if (!isWindowsAbsolutePathLike(z) && SCHEME_PATTERN.test(z)) return { kind: "none" };
	let { pathText: B, line: V } = stripQueryAndHash(z), H = maybeDecodeHrefPath(B);
	return H ? {
		kind: "file",
		pathText: H,
		line: V
	} : { kind: "none" };
}
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function CommentMermaidBlock({ content: d, className: z }) {
	let B = useAppStore((d) => d.settings), V = B?.theme === "dark" || B?.theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(z),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MermaidBlock, {
			content: d,
			isDark: V,
			htmlLabels: !1
		})
	});
}
function isMermaidFence(d) {
	return /\blanguage-mermaid\b/.test(d ?? "");
}
function renderMermaidFence(d, z) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentMermaidBlock, {
		content: String(d).trimEnd(),
		className: z
	});
}
function isMermaidPre(d) {
	let z = import_react.Children.toArray(d)[0];
	if (!import_react.isValidElement(z)) return !1;
	let B = z.props?.className;
	return isMermaidFence(B);
}
function isGitHubUserAttachmentUrl(d) {
	if (!d) return !1;
	try {
		let z = new URL(d);
		return z.protocol === "https:" && z.hostname === "github.com" && z.pathname.startsWith("/user-attachments/assets/");
	} catch {
		return !1;
	}
}
function isBareAutolink(d, z) {
	return import_react.Children.toArray(d).join("").trim() === z;
}
function isGitHubUserAttachmentVideoLink(d, z) {
	return isGitHubUserAttachmentUrl(d) && isBareAutolink(z, d);
}
function AttachmentFallbackLink({ href: d, children: z }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: d,
		target: "_blank",
		rel: "noreferrer",
		className: "break-all text-primary underline underline-offset-2 hover:text-primary/80",
		onClick: (d) => d.stopPropagation(),
		children: z
	});
}
function GitHubUserAttachmentVideo({ href: d, children: z }) {
	let [B, V] = import_react.useState(!1);
	return B ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentFallbackLink, {
		href: d,
		children: z
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
		src: d,
		controls: !0,
		preload: "metadata",
		playsInline: !0,
		className: "my-3 max-h-[28rem] max-w-full rounded-md bg-black/80 outline outline-1 outline-black/10 dark:outline-white/10",
		onClick: (d) => d.stopPropagation(),
		onError: () => V(!0),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: d,
			target: "_blank",
			rel: "noreferrer",
			children: z
		})
	});
}
function GitHubUserAttachmentImage({ src: d, alt: z }) {
	let [B, V] = import_react.useState(!1), H = z?.trim() || d;
	return B ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentFallbackLink, {
		href: d,
		children: H
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: d,
		target: "_blank",
		rel: "noreferrer",
		className: "inline-block max-w-full",
		onClick: (d) => d.stopPropagation(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: d,
			alt: z ?? "",
			className: "my-3 max-h-96 max-w-full rounded-md object-contain outline outline-1 outline-black/10 dark:outline-white/10",
			onError: () => V(!0)
		})
	});
}
function ExpandableMarkdownImage({ src: d, alt: z, className: U, triggerClassName: W }) {
	let [G, q] = import_react.useState(!1), $ = z?.trim() || translate("auto.components.sidebar.MarkdownImageLightbox.image", "Image");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open: G,
		onOpenChange: q,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: !0,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("my-3 block max-w-full cursor-zoom-in border-0 bg-transparent p-0 text-left", W),
				onClick: (d) => {
					d.stopPropagation();
				},
				"aria-label": translate("auto.components.sidebar.MarkdownImageLightbox.expand", "Expand image"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: d,
					alt: z ?? "",
					className: cn(U, "pointer-events-none")
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			"aria-describedby": void 0,
			showCloseButton: !1,
			className: "flex h-[90dvh] w-[90vw] max-w-[90vw] flex-col gap-0 overflow-hidden p-0 sm:max-w-[90vw]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: $
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 items-center justify-between border-b border-border px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 truncate text-sm font-medium text-foreground",
						children: $
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: !0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "icon-sm",
							"aria-label": translate("auto.components.sidebar.MarkdownImageLightbox.close", "Close"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-h-0 flex-1 items-center justify-center overflow-auto bg-muted/20 p-4 scrollbar-editor",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d,
						alt: $,
						className: "max-h-full max-w-full rounded-md object-contain"
					})
				})
			]
		})]
	});
}
function extractCodeFenceLanguage(d) {
	let z = import_react.Children.toArray(d)[0];
	if (import_react.isValidElement(z)) return z.props.className?.match(/(?:^|\s)language-([^\s]+)/)?.[1];
}
function isTrustedCompactImageSrc(d) {
	if (!d) return !1;
	let z = d.trim().toLowerCase();
	return z.startsWith("blob:") || /^data:image\/(?:png|jpe?g|gif|webp);base64,/.test(z);
}
function handleMarkdownAnchorClick(d, z, B) {
	d.stopPropagation();
	let V = z?.trim();
	(V?.toLowerCase().startsWith("file:") || V?.startsWith("#orca-native-chat-file=")) && d.preventDefault(), B?.(d, z);
}
function handleMarkdownAnchorAuxClick(d, z, B) {
	d.button === 1 && handleMarkdownAnchorClick(d, z, B);
}
function handleMarkdownImageClick(d, z, B) {
	B && (d.stopPropagation(), B(d, z));
}
function createCompactCommentMarkdownComponents(d, z = !1) {
	return {
		p: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-p",
			children: d
		}),
		a: ({ href: z, children: B }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: z || void 0,
			target: "_blank",
			rel: "noreferrer",
			className: "underline underline-offset-2 text-foreground/80 hover:text-foreground",
			onClick: (B) => handleMarkdownAnchorClick(B, z, d),
			onAuxClick: (B) => handleMarkdownAnchorAuxClick(B, z, d),
			children: B
		}),
		code: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded bg-accent px-1 py-px text-[10px] font-mono [overflow-wrap:anywhere]",
			children: d
		}),
		pre: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "my-1 max-h-32 max-w-full overflow-x-auto rounded bg-accent p-1.5 text-[10px] font-mono",
			children: d
		}),
		ul: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "my-0.5 ml-3 list-disc space-y-0",
			children: d
		}),
		ol: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "my-0.5 ml-3 list-decimal space-y-0",
			children: d
		}),
		li: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "leading-normal [&>input]:pointer-events-none",
			children: d
		}),
		h1: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h comment-md-h1 font-bold",
			role: "heading",
			"aria-level": 1,
			children: d
		}),
		h2: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h comment-md-h2 font-bold",
			role: "heading",
			"aria-level": 2,
			children: d
		}),
		h3: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h comment-md-h3 font-semibold",
			role: "heading",
			"aria-level": 3,
			children: d
		}),
		h4: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h font-semibold",
			role: "heading",
			"aria-level": 4,
			children: d
		}),
		h5: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h font-semibold",
			role: "heading",
			"aria-level": 5,
			children: d
		}),
		h6: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "comment-md-h font-semibold",
			role: "heading",
			"aria-level": 6,
			children: d
		}),
		hr: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-1 border-border/50" }),
		blockquote: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			className: "my-0.5 border-l-2 border-border/60 pl-2 text-muted-foreground/80",
			children: d
		}),
		img: ({ alt: B, src: V }) => {
			if (!isTrustedCompactImageSrc(V)) return V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: V || void 0,
				target: "_blank",
				rel: "noreferrer",
				className: "underline underline-offset-2 text-foreground/80 hover:text-foreground",
				onClick: (z) => handleMarkdownAnchorClick(z, V, d),
				onAuxClick: (z) => handleMarkdownAnchorAuxClick(z, V, d),
				children: B || V
			}) : B ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: B }) : null;
			if (z) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandableMarkdownImage, {
				src: V,
				alt: B,
				triggerClassName: "my-1",
				className: "max-h-32 max-w-full rounded-sm object-contain outline outline-1 outline-border/70"
			});
			let H = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: V,
				alt: B ?? "",
				className: "my-1 max-h-32 max-w-full rounded-sm object-contain outline outline-1 outline-border/70"
			});
			return V ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: V || void 0,
				target: "_blank",
				rel: "noreferrer",
				onClick: (z) => handleMarkdownAnchorClick(z, V, d),
				onAuxClick: (z) => handleMarkdownAnchorAuxClick(z, V, d),
				children: H
			}) : H;
		},
		table: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-1 max-w-full overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				className: "text-[10px] border-collapse [&_td]:border [&_td]:border-border/40 [&_td]:px-1 [&_td]:py-0.5 [&_th]:border [&_th]:border-border/40 [&_th]:px-1 [&_th]:py-0.5 [&_th]:font-semibold [&_th]:text-left",
				children: d
			})
		})
	};
}
function createDocumentCommentMarkdownComponents(d, z) {
	return {
		p: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "my-2 first:mt-0 last:mb-0",
			children: d
		}),
		a: ({ href: z, children: B }) => isGitHubUserAttachmentVideoLink(z, B) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubUserAttachmentVideo, {
			href: z,
			children: B
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: z || void 0,
			target: "_blank",
			rel: "noreferrer",
			className: "break-all text-primary underline underline-offset-2 hover:text-primary/80",
			onClick: (B) => handleMarkdownAnchorClick(B, z, d),
			onAuxClick: (B) => handleMarkdownAnchorAuxClick(B, z, d),
			children: B
		}),
		code: ({ className: d, children: z }) => isMermaidFence(d) ? renderMermaidFence(z, "my-3 min-w-0 max-w-full overflow-x-auto rounded-md border border-border/60 p-3 [&_.mermaid-block]:min-w-0 [&_.mermaid-block_pre]:my-0 [&_.mermaid-block_pre]:max-h-80 [&_.mermaid-block_pre]:max-w-full [&_.mermaid-block_pre]:overflow-x-auto [&_.mermaid-block_pre]:rounded-md [&_.mermaid-block_pre]:bg-accent [&_.mermaid-block_pre]:p-3 [&_.mermaid-block_pre]:font-mono [&_.mermaid-block_pre]:text-[12px]") : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
			className: "rounded bg-accent px-1.5 py-0.5 font-mono text-[0.92em] [overflow-wrap:anywhere]",
			children: z
		}),
		pre: ({ children: d }) => isMermaidPre(d) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: d }) : z ? z({
			children: d,
			language: extractCodeFenceLanguage(d)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
			className: "my-3 max-h-80 max-w-full overflow-x-auto rounded-md bg-accent p-3 font-mono text-[12px]",
			children: d
		}),
		ul: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "my-2 ml-5 list-disc space-y-1",
			children: d
		}),
		ol: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "my-2 ml-5 list-decimal space-y-1",
			children: d
		}),
		li: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "leading-relaxed [&>input]:pointer-events-none",
			children: d
		}),
		h1: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mb-2 mt-4 text-[18px] font-semibold leading-tight first:mt-0",
			children: d
		}),
		h2: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mb-2 mt-4 text-[16px] font-semibold leading-tight first:mt-0",
			children: d
		}),
		h3: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mb-2 mt-3 text-[15px] font-semibold leading-tight first:mt-0",
			children: d
		}),
		h4: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
			className: "mb-1 mt-3 font-semibold first:mt-0",
			children: d
		}),
		h5: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
			className: "mb-1 mt-3 font-semibold first:mt-0",
			children: d
		}),
		h6: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
			className: "mb-1 mt-3 font-semibold first:mt-0",
			children: d
		}),
		hr: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-4 border-border/60" }),
		blockquote: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
			className: "my-3 border-l-2 border-border/70 pl-3 text-muted-foreground",
			children: d
		}),
		img: ({ alt: z, src: B }) => {
			if (isGitHubUserAttachmentUrl(B)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitHubUserAttachmentImage, {
				src: B,
				alt: z
			});
			if (!B) return z ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: z }) : null;
			if (d) {
				let V = [
					"my-3 max-h-96 max-w-full rounded-md object-contain",
					"outline outline-1 outline-black/10 dark:outline-white/10",
					"cursor-pointer"
				].join(" ");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: B,
					alt: z ?? "",
					className: V,
					onClick: (z) => handleMarkdownImageClick(z, B, d)
				});
			}
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandableMarkdownImage, {
				src: B,
				alt: z,
				className: "max-h-96 max-w-full rounded-md object-contain outline outline-1 outline-black/10 dark:outline-white/10"
			});
		},
		table: ({ children: d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "my-3 max-w-full overflow-x-auto rounded-md border border-border/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", {
				className: "min-w-full border-collapse text-[13px] [&_td]:border [&_td]:border-border/50 [&_td]:px-2 [&_td]:py-1.5 [&_th]:border [&_th]:border-border/50 [&_th]:bg-muted/60 [&_th]:px-2 [&_th]:py-1.5 [&_th]:text-left [&_th]:font-semibold",
				children: d
			})
		})
	};
}
const compactCommentMarkdownComponents = createCompactCommentMarkdownComponents(), documentCommentMarkdownComponents = createDocumentCommentMarkdownComponents();
var ROOTED_PATH_PREFIX_PATTERN = /^(?:~[\\/]|\.{1,2}[\\/]|[\\/]|[A-Za-z]:[\\/])/;
function isLinkifiableFile(d, z) {
	let B = ROOTED_PATH_PREFIX_PATTERN.test(d.pathText), V = d.line !== null || d.column !== null, H = /\.[\p{L}][\p{L}\p{N}\p{M}_+-]*$/u.test(d.pathText), U = /\.[\p{L}\p{N}][\p{L}\p{N}\p{M}_+-]*$/u.test(d.pathText);
	return (!z || /[\\/]/.test(d.pathText)) && (B || V || (z ? U : H)) && routeNativeChatHref(d.displayText).kind === "file";
}
var SAFE_LEADING_BOUNDARY_PATTERN = /[\s([{'",;=]/, SAFE_TRAILING_BOUNDARY_PATTERN = /[\s)\]}>'",;.:。！？，、；：]/, SENTENCE_PATH_PUNCTUATION_PATTERN = /\.[\p{L}\p{N}][\p{L}\p{N}\p{M}_+-]*([!?—。！？，、；：])/gu, QUOTED_TEXT_PATTERN = /"([^"\r\n]+)"|'([^"'\r\n]+)'/gu, MAX_DASHED_PROSE_WORD_LENGTH = 32;
function hasBoundedProseAfterDash(d, z) {
	let B = Math.min(d.length, z + MAX_DASHED_PROSE_WORD_LENGTH);
	for (let V = z; V < B; V += 1) {
		let z = d[V];
		if (!z || SAFE_TRAILING_BOUNDARY_PATTERN.test(z)) return !0;
		if (z === "/" || z === "\\") return !1;
	}
	return B === d.length;
}
function isSafeTrailingBoundary(d, z) {
	let B = d[z];
	if (B === void 0 || SAFE_TRAILING_BOUNDARY_PATTERN.test(B)) return !0;
	if (B === "!" || B === "?") {
		let B = d[z + 1];
		return B === void 0 || SAFE_TRAILING_BOUNDARY_PATTERN.test(B);
	}
	return B === "—" ? hasBoundedProseAfterDash(d, z + 1) : !1;
}
function hasPartialPathBoundary(d, z) {
	let B = d[z.startIndex - 1];
	return B !== void 0 && !SAFE_LEADING_BOUNDARY_PATTERN.test(B) || !isSafeTrailingBoundary(d, z.endIndex);
}
function createFileLinkNode(d, z) {
	return {
		type: "link",
		url: createNativeChatFileHref(d),
		children: [z]
	};
}
function splitProseJoinedLinks(d) {
	if (ROOTED_PATH_PREFIX_PATTERN.test(d.pathText)) return [d];
	let z = Array.from(d.displayText.matchAll(/\S+/g)), B = [];
	for (let V of z) {
		let z = V[0], H = extractTerminalFileLinks(z).find((d) => d.startIndex === 0 && d.endIndex === z.length);
		if (H && isLinkifiableFile(H, !0)) {
			let U = d.startIndex + (V.index ?? 0);
			B.push({
				...H,
				startIndex: U,
				endIndex: U + z.length
			});
		}
	}
	return z.some((d) => !/[\\/.]/.test(d[0])) || B.length > 1 ? B : [d];
}
function splitTextSegment(d) {
	let z = extractTerminalFileLinks(d).filter((z) => !hasPartialPathBoundary(d, z)).filter((d) => isLinkifiableFile(d, !0)).flatMap(splitProseJoinedLinks);
	if (z.length === 0) return [{
		type: "text",
		value: d
	}];
	let B = [], V = 0;
	for (let H of z) H.startIndex < V || (H.startIndex > V && B.push({
		type: "text",
		value: d.slice(V, H.startIndex)
	}), B.push(createFileLinkNode(H.displayText, {
		type: "text",
		value: H.displayText
	})), V = H.endIndex);
	return V < d.length && B.push({
		type: "text",
		value: d.slice(V)
	}), B;
}
function splitUnquotedText(d) {
	let z = [], B = 0;
	for (let V of d.matchAll(SENTENCE_PATH_PUNCTUATION_PATTERN)) {
		let H = (V.index ?? 0) + V[0].length - 1;
		isSafeTrailingBoundary(d, H) && (z.push(...splitTextSegment(d.slice(B, H))), z.push({
			type: "text",
			value: d[H]
		}), B = H + 1);
	}
	return B === 0 ? splitTextSegment(d) : (z.push(...splitTextSegment(d.slice(B))), z);
}
function exactFileLink(d, z) {
	let B = extractTerminalFileLinks(d).find((z) => z.startIndex === 0 && z.endIndex === d.length);
	if (B && isLinkifiableFile(B, !1)) return B;
	if (!z || !/\s/.test(d)) return null;
	let V = parseFileLinkLocation(d);
	if (!V || !(ROOTED_PATH_PREFIX_PATTERN.test(V.pathText) || /[\\/]/.test(V.pathText) || /\.[\p{L}][\p{L}\p{N}\p{M}_+-]*$/u.test(V.pathText))) return null;
	let H = {
		...V,
		startIndex: 0,
		endIndex: d.length,
		displayText: d
	};
	return isLinkifiableFile(H, !1) ? H : null;
}
function splitTextNode(d) {
	let z = [], B = 0;
	for (let V of d.matchAll(QUOTED_TEXT_PATTERN)) {
		let H = V[1] ?? V[2];
		if (!H || !exactFileLink(H, !0)) continue;
		let U = V.index ?? 0, W = V[0][0];
		z.push(...splitUnquotedText(d.slice(B, U))), z.push({
			type: "text",
			value: W
		}), z.push(createFileLinkNode(H, {
			type: "text",
			value: H
		})), z.push({
			type: "text",
			value: W
		}), B = U + V[0].length;
	}
	return B === 0 ? splitUnquotedText(d) : (z.push(...splitUnquotedText(d.slice(B))), z);
}
function inlineCodeFileLink(d) {
	let z = d.value?.trim();
	return z && exactFileLink(z, !0) ? createFileLinkNode(z, d) : null;
}
function transformFileLinks(d) {
	if (d.type === "link") {
		d.url && routeNativeChatHref(d.url).kind === "file" && (d.url = createNativeChatFileHref(d.url));
		return;
	}
	if (!d.children || d.type === "image") return;
	let z = [];
	for (let B of d.children) {
		if (B.type === "text" && B.value !== void 0) {
			z.push(...splitTextNode(B.value));
			continue;
		}
		if (B.type === "inlineCode") {
			z.push(inlineCodeFileLink(B) ?? B);
			continue;
		}
		transformFileLinks(B), z.push(B);
	}
	d.children = z;
}
function remarkNativeChatFileLinks() {
	return (d) => transformFileLinks(d);
}
var commentMarkdownUrlTransform = (d, z, B) => z === "src" && B?.tagName === "img" && isTrustedCompactImageSrc(d) ? d : defaultUrlTransform(d), commentMarkdownFileUriUrlTransform = (d, z, B) => z === "href" && B?.tagName === "a" && d.trim().toLowerCase().startsWith("file:") ? d : commentMarkdownUrlTransform(d, z, B), remarkPlugins = [remarkGfm, remarkBreaks], GITHUB_REFERENCE_PATTERN = /(?:\b([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+))?#([1-9][0-9]*)\b/g;
function createGitHubIssueUrl(d, z, B) {
	return `https://github.com/${encodeURIComponent(d)}/${encodeURIComponent(z)}/issues/${B}`;
}
function isEmbeddedGitHubReference(d, z) {
	return z === 0 ? !1 : /[A-Za-z0-9_./-]/.test(d[z - 1] ?? "");
}
function createGitHubReferenceLinkNode(d, z, B, V) {
	return {
		type: "link",
		url: createGitHubIssueUrl(z, B, V),
		title: null,
		children: [{
			type: "text",
			value: d
		}]
	};
}
function splitGitHubReferenceText(d, z) {
	let B = [], V = 0;
	for (let H of d.matchAll(GITHUB_REFERENCE_PATTERN)) {
		let U = H[0], W = H.index ?? 0;
		if (isEmbeddedGitHubReference(d, W)) continue;
		let G = H[1] ?? z.owner, K = H[2] ?? z.repo, q = H[3];
		q && (W > V && B.push({
			type: "text",
			value: d.slice(V, W)
		}), B.push(createGitHubReferenceLinkNode(U, G, K, q)), V = W + U.length);
	}
	return V === 0 ? [{
		type: "text",
		value: d
	}] : (V < d.length && B.push({
		type: "text",
		value: d.slice(V)
	}), B);
}
function transformGitHubReferenceChildren(d, z) {
	if (!d.children || d.type === "link" || d.type === "image") return;
	let B = [];
	for (let V of d.children) if (V.type === "text" && V.value !== void 0) for (let d of splitGitHubReferenceText(V.value, z)) B.push(d);
	else transformGitHubReferenceChildren(V, z), B.push(V);
	d.children = B;
}
function remarkGitHubReferences(d) {
	return () => (z) => transformGitHubReferenceChildren(z, d);
}
var rehypePlugins = [rehypeRaw, [rehypeSanitize, {
	...defaultSchema,
	tagNames: [
		...defaultSchema.tagNames ?? [],
		"details",
		"summary",
		"sub",
		"sup",
		"ins",
		"kbd"
	],
	attributes: {
		...defaultSchema.attributes,
		a: [
			...defaultSchema.attributes?.a ?? [],
			"href",
			"title"
		],
		details: [...defaultSchema.attributes?.details ?? [], "open"],
		img: [
			...defaultSchema.attributes?.img ?? [],
			"src",
			"alt",
			"title",
			"width",
			"height"
		],
		input: [
			...defaultSchema.attributes?.input ?? [],
			"type",
			"checked",
			"disabled"
		],
		td: [...defaultSchema.attributes?.td ?? [], "align"],
		th: [...defaultSchema.attributes?.th ?? [], "align"]
	},
	protocols: {
		...defaultSchema.protocols,
		href: [...defaultSchema.protocols?.href ?? [], "file"],
		src: [
			...defaultSchema.protocols?.src ?? [],
			"data",
			"blob"
		]
	}
}]], CommentMarkdown_default = import_react.memo(import_react.forwardRef(function({ content: d, className: z, variant: B = "compact", githubRepo: V, onLinkClick: U, allowFileUriLinks: W = !1, linkifyFilePaths: G = !1, expandImages: K = !1, renderCodeBlock: q, ...J }, Y) {
	let Z = import_react.useMemo(() => U ? B === "document" ? createDocumentCommentMarkdownComponents(U, q) : createCompactCommentMarkdownComponents(U, K) : B === "document" ? q ? createDocumentCommentMarkdownComponents(void 0, q) : documentCommentMarkdownComponents : K ? createCompactCommentMarkdownComponents(void 0, !0) : compactCommentMarkdownComponents, [
		K,
		q,
		B,
		U
	]), Q = import_react.useMemo(() => {
		let d = G ? [...remarkPlugins, remarkNativeChatFileLinks] : remarkPlugins;
		return V ? [...d, remarkGitHubReferences(V)] : d;
	}, [V, G]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: Y,
		className: cn("[&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:rounded-none", "min-w-0 max-w-full [overflow-wrap:anywhere]", z),
		...J,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Markdown, {
			remarkPlugins: Q,
			rehypePlugins,
			components: Z,
			urlTransform: W ? commentMarkdownFileUriUrlTransform : commentMarkdownUrlTransform,
			children: d
		})
	});
}));
export { remarkGitHubReferences as n, routeNativeChatHref as r, CommentMarkdown_default as t };
