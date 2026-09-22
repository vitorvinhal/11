import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { r as cn } from "./useMountedRef-De7bTfqf.js";
import { t as ChevronDown } from "./chevron-down-DiY4JawN.js";
import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as Workflow } from "./workflow-C5z_2wJq.js";
import { t as Wrench } from "./wrench-BzRaaN5J.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import { t as installWindowVisibilityInterval } from "./window-visibility-interval-BxcyZyE8.js";
import { a as OpenAIIcon, t as ClaudeIcon } from "./icons-CAdlcsWl.js";
import { n as getAgentCatalog, t as AgentIcon } from "./agent-catalog-Cgr0_vcs.js";
import { t as AgentStateDot } from "./AgentStateDot-CrLFCeoH.js";
var import_react = /* @__PURE__ */ __toESM(require_react()), import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime()), CLAUDE_ACTIVITIES = [
	{
		kind: "tool",
		tool: "Edit",
		arg: "auth/withSession.ts"
	},
	{
		kind: "msg",
		text: "Looking at the session middleware now…"
	},
	{
		kind: "tool",
		tool: "Bash",
		arg: "pnpm run typecheck:node"
	},
	{
		kind: "msg",
		text: "Typecheck passes. Pulling on the login route next."
	},
	{
		kind: "tool",
		tool: "Read",
		arg: "routes/login.ts"
	},
	{
		kind: "tool",
		tool: "Edit",
		arg: "middleware/session.ts"
	},
	{
		kind: "msg",
		text: "Adding tests for the redirect path."
	},
	{
		kind: "tool",
		tool: "Bash",
		arg: "pnpm test auth"
	},
	{
		kind: "tool",
		tool: "Edit",
		arg: "auth.test.ts"
	}
];
function StatusesPage(e) {
	let { active: C, reducedMotion: E } = e, [D, O] = (0, import_react.useState)({
		claude: !1,
		opencode: !1,
		codex: !1
	}), [k, A] = (0, import_react.useState)(0), [P, I] = (0, import_react.useState)(!1);
	return (0, import_react.useEffect)(() => {
		if (!C) {
			O({
				claude: !1,
				opencode: !1,
				codex: !1
			}), A(0), I(!1);
			return;
		}
		if (E) {
			O({
				claude: !0,
				opencode: !0,
				codex: !0
			});
			return;
		}
		let e = [], w = (C, w) => {
			e.push(window.setTimeout(C, w));
		};
		w(() => O((e) => ({
			...e,
			claude: !0
		})), 700), w(() => O((e) => ({
			...e,
			opencode: !0
		})), 1200), w(() => O((e) => ({
			...e,
			codex: !0
		})), 1900);
		let T = 0, D = installWindowVisibilityInterval({
			run: () => {
				I(!0);
				let C = window.setTimeout(() => {
					T = (T + 1) % CLAUDE_ACTIVITIES.length, A(T), I(!1);
				}, 280);
				e.push(C);
			},
			runOnVisible: () => {},
			intervalMs: 2400
		});
		return () => {
			e.forEach((e) => window.clearTimeout(e)), D();
		};
	}, [C, E]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportedAgentsMarquee, { reducedMotion: E }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[10px] bg-foreground/[0.05] px-2 py-2.5 shadow-[inset_0_0_0_1px_rgba(24,24,27,0.06)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[14px_minmax(0,1fr)] items-center gap-3 px-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block size-[9px] rounded-full bg-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate text-[15.5px] font-semibold leading-[1.2]",
					children: translate("auto.components.feature.wall.agents.orchestration.StatusesPage.79971d1539", "redesign auth flow")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 pl-[30px] pr-2 pt-2.5 pb-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow$1, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenAIIcon, { size: 18 }),
						name: "Codex",
						state: D.codex ? "permission" : "working",
						permission: D.codex,
						children: D.codex ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [translate("auto.components.feature.wall.agents.orchestration.StatusesPage.78f0318ac1", "Wants to run"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeChip, { children: translate("auto.components.feature.wall.agents.orchestration.StatusesPage.7b26349cb2", "pnpm migrate latest") })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skel, { widthPct: 64 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow$1, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeIcon, { size: 18 }),
						name: "Claude",
						state: "working",
						children: D.claude ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("block transition-opacity duration-[280ms]", P ? "opacity-0" : "opacity-100"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeActivityLine, { activity: CLAUDE_ACTIVITIES[k] })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skel, { widthPct: 78 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow$1, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
							agent: "opencode",
							size: 18
						}),
						name: "OpenCode",
						state: "done",
						children: D.opencode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [translate("auto.components.feature.wall.agents.orchestration.StatusesPage.139e3d7458", "Updated"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeChip, { children: translate("auto.components.feature.wall.agents.orchestration.StatusesPage.2f549fc0ba", "src/auth/session.test.ts") })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skel, { widthPct: 56 })
					})
				]
			})]
		})]
	});
}
function AgentRow$1(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[18px_20px_minmax(0,1fr)] items-center gap-3",
		"aria-label": e.name,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex size-[18px] items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
					state: e.state,
					size: "md"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex size-5 items-center justify-center",
				children: e.icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("truncate text-[13px] leading-[1.3]", e.permission ? "text-red-700 dark:text-red-300" : "text-muted-foreground"),
				children: e.children
			})
		]
	});
}
function ClaudeActivityLine(e) {
	let C = e.activity;
	return C.kind === "msg" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: C.text }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex max-w-full items-center gap-1.5 truncate",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1 font-semibold text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, {
				className: "size-2.5",
				"aria-hidden": !0
			}), C.tool]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeChip, { children: C.arg })]
	});
}
function CodeChip(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
		className: "rounded-[3px] bg-foreground/[0.06] px-1 py-px font-mono text-[12px] text-foreground",
		children: e.children
	});
}
function Skel(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-block h-2 rounded-[5px] bg-foreground/[0.16] align-[-1px]",
		style: { width: `${e.widthPct}%` }
	});
}
function SupportedAgentsMarquee(e) {
	let C = (0, import_react.useRef)(null), w = getAgentCatalog();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative -mx-1 mb-1 border-b border-border pb-2 pt-1 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			style: {
				WebkitMaskImage: "linear-gradient(to right, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%)",
				maskImage: "linear-gradient(to right, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: C,
				className: cn("inline-flex gap-2 whitespace-nowrap", e.reducedMotion ? "" : "feature-wall-marquee-track"),
				children: [w.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueePill, {
					agentId: e.id,
					label: e.label
				}, `a-${e.id}`)), w.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarqueePill, {
					agentId: e.id,
					label: e.label
				}, `b-${e.id}`))]
			})
		})
	});
}
function MarqueePill(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-foreground/[0.05] px-2.5 py-1 text-[11px] leading-none shadow-[inset_0_0_0_1px_rgba(24,24,27,0.06)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentIcon, {
				agent: e.agentId,
				size: 14
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.label })]
	});
}
var EXPAND_DELAY = 2200, TARGET_DELAY = 3400, SWAP_DELAY = 4400, LOOP_DELAY = 7800;
function UsagePage(e) {
	let { active: C, reducedMotion: w } = e, [T, E] = (0, import_react.useState)("reset"), [D, O] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!C) {
			E("reset");
			return;
		}
		if (w) {
			E("swapped");
			return;
		}
		let e = !1, T = [], D = (C, w) => {
			T.push(window.setTimeout(() => {
				e || w();
			}, C));
		}, k = () => {
			E("reset"), D(EXPAND_DELAY, () => E("expanded")), D(TARGET_DELAY, () => E("targeted")), D(SWAP_DELAY, () => {
				E("swapped"), O((e) => e + 1);
			}), D(LOOP_DELAY, () => {
				e || k();
			});
		};
		return k(), () => {
			e = !0, T.forEach((e) => window.clearTimeout(e));
		};
	}, [C, w]);
	let k = T === "swapped";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
			expanded: T === "expanded" || T === "targeted" || T === "swapped",
			targeted: T === "targeted" || T === "swapped",
			swapped: k,
			pulseKey: D
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomBar, { swapped: k })]
	});
}
function Popover(e) {
	let { expanded: C, targeted: E, swapped: D, pulseKey: O } = e, k = D ? "0% used" : "96% used", A = D ? "Resets in 5h" : "Resets in 47m", j = D ? "0%" : "96%";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("absolute z-10 flex flex-col gap-[7px] rounded-[10px] border bg-card px-3 py-2.5 not-italic", "border-border text-foreground", "shadow-[0_16px_38px_rgba(24,24,27,0.18),0_2px_6px_rgba(24,24,27,0.08)]"),
		style: {
			left: 40,
			bottom: 70,
			width: 320
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[24px_minmax(0,1fr)] items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex size-6 items-center justify-center rounded-[5px] bg-foreground/[0.06] text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex",
						style: { color: "#111" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenAIIcon, { size: 14 })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13.5px] font-bold leading-[1.1]",
					children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.6a4b1d3c38", "Codex")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground",
					children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.5e45fb1238", "Updated 1m ago")
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsageBar, {
				title: translate("auto.components.feature.wall.agents.orchestration.UsagePage.f421abf962", "Session"),
				fillWidth: j,
				warn: !D,
				metaLeft: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-semibold", D ? "feature-wall-meta-pulse" : "text-[rgb(220_38_38)]"),
					children: k
				}, `pct-${O}-${D ? "on" : "off"}`),
				metaRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: A })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsageBar, {
				title: translate("auto.components.feature.wall.agents.orchestration.UsagePage.0470aaed99", "Weekly"),
				fillWidth: "38%",
				warn: !1,
				metaLeft: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.05ce4ecdd3", "38% used") }),
				metaRight: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.4dce5ca3aa", "Resets in 4d 3h") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-semibold",
				children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.277a9c65a9", "Codex Account")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between text-[11px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountNameSkeleton, { widthClassName: D ? "w-24" : "w-28" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("inline-flex items-center justify-center text-muted-foreground transition-transform duration-[240ms] ease-[cubic-bezier(.2,.8,.2,1)]", C ? "rotate-90" : "rotate-0"),
					"aria-hidden": !0,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						width: "10",
						height: "10",
						viewBox: "0 0 10 10",
						fill: "none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M3 2 L7 5 L3 8",
							stroke: "currentColor",
							strokeWidth: "1.4",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("-mt-px grid transition-[grid-template-rows] duration-[280ms] ease-[cubic-bezier(.2,.8,.2,1)]", C ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden min-h-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-muted-foreground",
						children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.be5a165875", "Switch to")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-0.5 rounded-lg border border-border bg-foreground/[0.025] p-[3px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchAccount, {
							accountWidthClassName: "w-24",
							tag: "Team",
							fillPct: 0,
							metaText: "0%",
							highlighted: E
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchAccount, {
							accountWidthClassName: "w-32",
							tag: null,
							fillPct: 22,
							metaText: "22%",
							highlighted: !1
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-[-5px] left-1/2 size-[10px] -ml-[5px] rotate-45 border-b border-r border-border bg-card",
				"aria-hidden": !0
			})
		]
	});
}
function AccountNameSkeleton(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-2.5 rounded-full bg-foreground/[0.14]", e.widthClassName) });
}
function UsageBar(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[12px] font-semibold",
				children: e.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-1.5 w-full overflow-hidden rounded-full bg-foreground/[0.08]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("block h-full rounded-full transition-[width,background] duration-[800ms] ease-[cubic-bezier(.2,.8,.2,1)]", e.warn ? "bg-[rgb(239_68_68)]" : "bg-[rgb(34_197_94)]"),
					style: { width: e.fillWidth }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between font-mono text-[11px] text-muted-foreground",
				children: [e.metaLeft, e.metaRight]
			})
		]
	});
}
function SwitchAccount(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center justify-between gap-2.5 rounded-md px-1.5 py-1 text-[11.5px] transition-colors duration-[160ms]", e.highlighted ? "bg-emerald-500/10" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountNameSkeleton, { widthClassName: e.accountWidthClassName }), e.tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 rounded-full bg-foreground/[0.06] px-1.5 py-px text-[9.5px] font-semibold uppercase tracking-[0.06em] text-muted-foreground",
				children: e.tag
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block h-1 w-11 overflow-hidden rounded-full bg-foreground/[0.10]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-full rounded-full bg-emerald-500",
					style: { width: `${e.fillPct}%` }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-7 text-right font-mono text-[10px] text-muted-foreground",
				children: e.metaText
			})]
		})]
	});
}
function BottomBar(e) {
	let C = e.swapped ? "0%" : "96%", T = e.swapped ? "rgb(34 197 94)" : "rgb(239 68 68)", E = e.swapped ? "0% used 5h · 4% used wk" : "96% used 47m";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute bottom-[22px] left-1/2 flex -translate-x-1/2 items-center gap-3.5 rounded-lg border border-border bg-muted/60 px-3.5 py-1.5 text-[11px] shadow-[0_1px_2px_rgba(24,24,27,0.04)]",
		style: { width: 340 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "inline-flex items-center gap-1.5 font-mono text-[10.5px] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeIcon, { size: 12 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-1 w-9 overflow-hidden rounded-full bg-foreground/[0.12]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block h-full rounded-full bg-emerald-500",
						style: { width: "29%" }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: translate("auto.components.feature.wall.agents.orchestration.UsagePage.64265cb295", "29% used 5h") })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "-my-0.5 inline-flex items-center gap-1.5 rounded-md bg-foreground/[0.06] px-1.5 py-0.5 font-mono text-[10.5px] text-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "#111" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenAIIcon, { size: 12 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block h-1 w-9 overflow-hidden rounded-full bg-foreground/[0.12]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block h-full rounded-full transition-[width,background] duration-[600ms] ease-out",
						style: {
							width: C,
							background: T
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: E })
			]
		})]
	});
}
const BUBBLE_FLIGHT_MS = 1600;
BUBBLE_FLIGHT_MS + 360;
const BUBBLE_GAP_MS = 3400, ORCHESTRATION_CLI_COMMAND_TIMINGS_MS = [
	250,
	2500,
	5200,
	8600
], ORCHESTRATION_CLI_COMMAND_LOOP_MS = 12800, PHASE1_BEATS = [
	{
		from: "coord-claude",
		to: "child-codex",
		recipientMsg: "Adding the email_verified column…"
	},
	{
		from: "coord-claude",
		to: "child-claude",
		recipientMsg: "Wiring withSession middleware…"
	},
	{
		from: "child-codex",
		to: "coord-claude",
		coordMsg: "PR 1/2 ready",
		senderFinishes: !0
	},
	{
		from: "child-claude",
		to: "coord-claude",
		coordMsg: "PR 2/2 ready",
		senderFinishes: !0
	}
], INITIAL_ROW_STATE = {
	"coord-claude": "working",
	"child-codex": "working",
	"child-claude": "working"
}, INITIAL_ROW_MESSAGES = {
	"coord-claude": "Splitting auth rewrite into 2 PRs…",
	"child-codex": "Writing the users table migration…",
	"child-claude": "Sketching withSession middleware…"
};
function rectIn(e, C) {
	let w = e.getBoundingClientRect();
	return {
		left: w.left - C.left,
		right: w.right - C.left,
		top: w.top - C.top,
		bottom: w.bottom - C.top,
		cx: w.left - C.left + w.width / 2,
		cy: w.top - C.top + w.height / 2
	};
}
function arrowPathFromCoordTo(e, C, w) {
	let T = rectIn(e, w), E = rectIn(C, w);
	if (E.top >= T.bottom - 4) {
		let e = T.right + 4, C = T.cy, D = E.right + 4, O = E.cy, k = Math.min(Math.max(e, D) + 36, w.width - 8);
		return `M${e} ${C} C${k} ${C}, ${k} ${O}, ${D} ${O}`;
	}
	let D = T.right + 4, O = T.cy, k = E.left - 8, A = E.cy, j = (k - D) * .55;
	return `M${D} ${O} C${D + j} ${O}, ${k - j} ${A}, ${k} ${A}`;
}
function bubblePathBetweenRows(e, C, w) {
	let T = e.getBoundingClientRect(), E = C.closest("[data-feature-wall-card]"), D = w.closest("[data-feature-wall-card]"), O = rectIn(C, T), k = rectIn(w, T), A = E instanceof HTMLElement ? rectIn(E, T) : O, j = D instanceof HTMLElement ? rectIn(D, T) : k;
	if (j.top >= A.bottom - 4 || A.top >= j.bottom - 4) {
		let e = A.right + 4, C = O.cy, w = j.right + 4, E = k.cy, D = Math.min(Math.max(e, w) + 36, T.width - 8);
		return `M ${e} ${C} C ${D} ${C}, ${D} ${E}, ${w} ${E}`;
	}
	let M = A.right + 4, N = O.cy, P = j.left - 8, F = k.cy, I = (P - M) * .55;
	return `M ${M} ${N} C ${M + I} ${N}, ${P - I} ${F}, ${P} ${F}`;
}
function WorkspaceCard(e) {
	let { variant: C, name: w, dataCard: E, rows: D, childPadding: O, dimName: k, amberDot: A } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-feature-wall-card": E,
		className: cn("relative flex flex-col gap-[7px] rounded-[9px] px-[13px] py-[11px]", C === "coordinator" ? "bg-foreground/[0.04] shadow-[inset_0_0_0_1px_rgba(24,24,27,0.14)]" : "bg-card shadow-[inset_0_0_0_1px_rgba(24,24,27,0.10),0_1px_2px_rgba(24,24,27,0.03)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[12px_minmax(0,1fr)] items-center gap-[9px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block size-[9px] rounded-full",
				style: {
					background: A ? "rgb(245 158 11)" : "rgb(16 185 129)",
					margin: "0 auto"
				},
				"aria-hidden": !0
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("truncate font-semibold leading-[1.2] text-foreground", k && "opacity-55"),
				style: {
					fontSize: "var(--feature-wall-workspace-title-size, 14.5px)",
					...k ? { opacity: .55 } : {}
				},
				children: w
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("flex flex-col gap-[6px]", O && "pl-0.5"),
			children: D
		})]
	});
}
function AgentRow(e) {
	let { icon: C, state: w, message: E, flashKey: O, pending: k, spawnRow: A, registerRef: j } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: j,
		className: cn("feature-wall-agent-row grid items-center pl-1", A && "feature-wall-spawn-row"),
		style: {
			columnGap: "var(--feature-wall-agent-row-gap, 9px)",
			gridTemplateColumns: "var(--feature-wall-agent-status-col, 16px) var(--feature-wall-agent-icon-col, 16px) minmax(0, 1fr)"
		},
		"data-pending": k ? "true" : void 0,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "feature-wall-agent-status inline-flex items-center justify-center",
				style: {
					height: "var(--feature-wall-agent-status-box, 16px)",
					width: "var(--feature-wall-agent-status-box, 16px)"
				},
				children: w === "working" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentStateDot, {
					state: "working",
					size: "md"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "inline-flex items-center justify-center text-emerald-500",
					style: {
						height: "var(--feature-wall-agent-status-icon, 12px)",
						width: "var(--feature-wall-agent-status-icon, 12px)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
						"aria-hidden": !0,
						style: {
							height: "var(--feature-wall-agent-status-icon, 12px)",
							width: "var(--feature-wall-agent-status-icon, 12px)"
						}
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "feature-wall-agent-icon inline-flex items-center justify-center",
				style: {
					height: "var(--feature-wall-agent-icon-box, 16px)",
					width: "var(--feature-wall-agent-icon-box, 16px)"
				},
				children: C
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("truncate leading-[1.3] text-foreground", O > 0 && "feature-wall-msg-received"),
				style: { fontSize: "var(--feature-wall-agent-message-size, 13px)" },
				children: E
			}, O)
		]
	});
}
var INITIAL_CHILD_PENDING = {
	"child-codex": !0,
	"child-claude": !0
}, CHILD_ONE_CREATE_MS = ORCHESTRATION_CLI_COMMAND_TIMINGS_MS[0], CHILD_TWO_CREATE_MS = ORCHESTRATION_CLI_COMMAND_TIMINGS_MS[1], FIRST_DISPATCH_MS = ORCHESTRATION_CLI_COMMAND_TIMINGS_MS[2];
function OrchestrationPage(e) {
	let { active: C, reducedMotion: T, onCycleComplete: D, controlledCreatedChildCount: k, loopMs: A, showResponseBeats: j = !0 } = e, P = (0, import_react.useRef)(null), F = (0, import_react.useRef)(null), I = (0, import_react.useRef)(null), z = (0, import_react.useRef)({}), B = (0, import_react.useRef)(k !== void 0), [V, H] = (0, import_react.useState)(INITIAL_ROW_STATE), [U, W] = (0, import_react.useState)(INITIAL_ROW_MESSAGES), [G, K] = (0, import_react.useState)({}), [q, J] = (0, import_react.useState)(INITIAL_CHILD_PENDING), [Y, X] = (0, import_react.useState)(0), Z = k ?? Y, Q = (0, import_react.useRef)({ ...INITIAL_CHILD_PENDING });
	B.current = k !== void 0;
	let $ = (0, import_react.useCallback)(() => {
		let e = F.current, C = P.current;
		if (!e || !C) return;
		e.removeAttribute("data-fading");
		let w = C.getBoundingClientRect();
		e.setAttribute("viewBox", `0 0 ${w.width} ${w.height}`), e.setAttribute("width", String(w.width)), e.setAttribute("height", String(w.height));
		let T = C.querySelector("[data-feature-wall-card=\"coord\"]");
		if (!(T instanceof HTMLElement)) {
			e.innerHTML = "";
			return;
		}
		let E = C.querySelector("[data-feature-wall-card=\"child\"]"), D = C.querySelector("[data-feature-wall-card=\"child-claude\"]"), O = [];
		E instanceof HTMLElement && O.push(arrowPathFromCoordTo(T, E, w)), D instanceof HTMLElement && O.push(arrowPathFromCoordTo(T, D, w)), e.innerHTML = O.map((e) => `<path d="${e}"/>`).join("");
	}, []);
	return (0, import_react.useEffect)(() => {
		if (C && Z >= 2) {
			let e = requestAnimationFrame(() => $());
			return () => cancelAnimationFrame(e);
		}
	}, [
		C,
		Z,
		$
	]), (0, import_react.useEffect)(() => {
		if (!C) {
			H(INITIAL_ROW_STATE), W(INITIAL_ROW_MESSAGES), K({}), J(INITIAL_CHILD_PENDING), X(0), Q.current = { ...INITIAL_CHILD_PENDING };
			let e = F.current;
			e && (e.innerHTML = "");
			let C = I.current;
			C && (C.innerHTML = "");
			return;
		}
		if (T) {
			H(INITIAL_ROW_STATE), W(INITIAL_ROW_MESSAGES), J({}), X(2), Q.current = {};
			let e = requestAnimationFrame(() => $());
			return () => cancelAnimationFrame(e);
		}
		let e = !1, w = [], E = /* @__PURE__ */ new Set(), O = (C, T) => {
			w.push(window.setTimeout(() => !e && C(), T));
		}, k = (C) => {
			let w = requestAnimationFrame(() => {
				E.delete(w), e || C();
			});
			E.add(w);
		}, M = () => {
			let e = F.current;
			e && (e.innerHTML = "");
		}, N = (e) => {
			let C = z.current[e.from], w = z.current[e.to], T = P.current, E = I.current;
			if (!C || !w || !T || !E) return;
			e.senderFinishes && H((C) => ({
				...C,
				[e.from]: "done"
			}));
			let D = Q.current[e.to] === !0, A = bubblePathBetweenRows(T, C, D ? w.closest("[data-feature-wall-card]") ?? w : w), j = document.createElement("div");
			j.className = "feature-wall-bubble", j.style.offsetPath = `path("${A}")`, j.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><path d=\"M3 7l9 6 9-6\"/></svg>", E.appendChild(j), j.offsetWidth, k(() => j.classList.add("in-flight")), O(() => {
				D && (Q.current = {
					...Q.current,
					[e.to]: !1
				}, J((C) => ({
					...C,
					[e.to]: !1
				})));
				let C = e.to === "coord-claude" && e.coordMsg ? e.coordMsg : e.recipientMsg ?? "";
				C && (W((w) => ({
					...w,
					[e.to]: C
				})), K((C) => ({
					...C,
					[e.to]: (C[e.to] ?? 0) + 1
				}))), j.classList.remove("in-flight"), j.classList.add("landed");
			}, BUBBLE_FLIGHT_MS), O(() => j.remove(), 1960);
		}, L = (e) => {
			M(), H(INITIAL_ROW_STATE), W(INITIAL_ROW_MESSAGES), J(INITIAL_CHILD_PENDING), X(0), Q.current = { ...INITIAL_CHILD_PENDING }, B.current || (O(() => {
				X(1);
			}, CHILD_ONE_CREATE_MS), O(() => {
				X(2), O(() => $(), 360);
			}, CHILD_TWO_CREATE_MS));
			let C = j ? PHASE1_BEATS : PHASE1_BEATS.slice(0, 2), w = 0, T = () => {
				if (w >= C.length) {
					O(e, 800);
					return;
				}
				N(C[w]), w += 1, O(T, BUBBLE_GAP_MS);
			};
			O(T, FIRST_DISPATCH_MS);
		}, R = () => {
			L(() => {
				D?.();
				let e = FIRST_DISPATCH_MS + (j ? PHASE1_BEATS.length : 2) * BUBBLE_GAP_MS + 800;
				O(R, A ? Math.max(0, A - e) : 1400);
			});
		};
		R();
		let V = () => $();
		window.addEventListener("resize", V);
		let U = I.current;
		return () => {
			e = !0, w.forEach((e) => window.clearTimeout(e)), E.forEach((e) => cancelAnimationFrame(e)), E.clear(), window.removeEventListener("resize", V), U && (U.innerHTML = "");
		};
	}, [
		C,
		D,
		T,
		$,
		A,
		j
	]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: P,
		className: "feature-wall-orch-stage relative grid",
		style: {
			gridTemplateColumns: "minmax(0, 1fr)",
			gridAutoRows: "min-content",
			rowGap: 28,
			paddingRight: 56,
			alignItems: "start",
			alignContent: "center",
			height: "100%"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex min-w-0 flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceCard, {
						variant: "coordinator",
						name: translate("auto.components.feature.wall.agents.orchestration.OrchestrationPage.coordinatorName", "redesign auth flow"),
						dataCard: "coord",
						rows: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow, {
							agentKey: "coord-claude",
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeIcon, { size: 13 }),
							state: V["coord-claude"],
							message: U["coord-claude"],
							flashKey: G["coord-claude"] ?? 0,
							registerRef: (e) => {
								z.current["coord-claude"] = e;
							}
						}, "coord-claude")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-start",
						style: {
							marginLeft: "var(--feature-wall-child-indent, 28px)",
							marginTop: 0,
							marginBottom: 0
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-md border border-border bg-card px-1.5 text-muted-foreground",
							style: {
								height: 18,
								fontSize: 10,
								fontWeight: 500
							},
							"aria-label": translate("auto.components.feature.wall.agents.orchestration.OrchestrationPage.862605d066", "2 child workspaces"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Workflow, {
									className: "size-2.5",
									"aria-hidden": !0
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: translate("auto.components.feature.wall.agents.orchestration.OrchestrationPage.30b509a467", "2 children")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
									className: "size-2.5",
									"aria-hidden": !0
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "feature-wall-children-wrapper",
						"data-visible": Z > 0 ? "true" : void 0,
						style: {
							width: "calc(100% - var(--feature-wall-child-indent, 28px))",
							marginLeft: "auto",
							display: "flex",
							flexDirection: "column",
							gap: 8
						},
						children: [Z >= 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "feature-wall-child-card-shell",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceCard, {
								variant: "default",
								name: translate("auto.components.feature.wall.agents.orchestration.OrchestrationPage.childPr1Name", "PR 1/2: migrate users.sql"),
								dataCard: "child",
								childPadding: !0,
								rows: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow, {
									agentKey: "child-codex",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenAIIcon, { size: 13 }),
									state: V["child-codex"],
									message: U["child-codex"],
									flashKey: G["child-codex"] ?? 0,
									pending: q["child-codex"],
									spawnRow: !0,
									registerRef: (e) => {
										z.current["child-codex"] = e;
									}
								}, "child-codex")]
							})
						}) : null, Z >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "feature-wall-child-card-shell",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkspaceCard, {
								variant: "default",
								name: translate("auto.components.feature.wall.agents.orchestration.OrchestrationPage.childPr2Name", "PR 2/2: withSession middleware"),
								dataCard: "child-claude",
								childPadding: !0,
								rows: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgentRow, {
									agentKey: "child-claude",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClaudeIcon, { size: 13 }),
									state: V["child-claude"],
									message: U["child-claude"],
									flashKey: G["child-claude"] ?? 0,
									pending: q["child-claude"],
									spawnRow: !0,
									registerRef: (e) => {
										z.current["child-claude"] = e;
									}
								}, "child-claude")]
							})
						}) : null]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				ref: F,
				className: "feature-wall-orch-arrows",
				"aria-hidden": !0,
				preserveAspectRatio: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: I,
				"aria-hidden": !0,
				style: {
					position: "absolute",
					inset: 0,
					pointerEvents: "none",
					zIndex: 3
				}
			})
		]
	});
}
var PANEL_HEIGHT_PX = 392, PANEL_WIDTH_PX = 520;
function AgentsOrchestrationVisual(e) {
	let { reducedMotion: C, activeStepId: w, widthPx: T, heightPx: E, onCycleComplete: D, orchestrationCreatedChildCount: O, orchestrationLoopMs: k, orchestrationShowResponseBeats: A } = e;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col text-foreground",
		style: {
			width: T ?? PANEL_WIDTH_PX,
			height: E ?? PANEL_HEIGHT_PX
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
				active: w === "statuses",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusesPage, {
					active: w === "statuses",
					reducedMotion: C
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
				active: w === "usage",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsagePage, {
					active: w === "usage",
					reducedMotion: C
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Page, {
				active: w === "orchestration",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrchestrationPage, {
					active: w === "orchestration",
					reducedMotion: C,
					onCycleComplete: D,
					controlledCreatedChildCount: O,
					loopMs: k,
					showResponseBeats: A
				})
			})
		]
	});
}
function Page(e) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": !e.active,
		className: cn("absolute inset-0 overflow-hidden transition-[opacity,transform] duration-[360ms] ease-out", e.active ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"),
		children: e.children
	});
}
function getFeatureWallOpenSource(e) {
	let C = e.source;
	return C === "help_menu" || C === "popup" || C === "onboarding" ? C : "unknown";
}
export { ORCHESTRATION_CLI_COMMAND_TIMINGS_MS as i, AgentsOrchestrationVisual as n, ORCHESTRATION_CLI_COMMAND_LOOP_MS as r, getFeatureWallOpenSource as t };
