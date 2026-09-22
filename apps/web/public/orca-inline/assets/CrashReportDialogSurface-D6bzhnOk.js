import { a as __toESM } from "./chunk-BKjlJnyO.js";
import { t as require_react } from "./react-BWRHcv7t.js";
import "./react-dom-Cm0_4y6Q.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as Button, t as useMountedRef } from "./useMountedRef-De7bTfqf.js";
import { t as Clipboard } from "./clipboard-BnsKNId-.js";
import { t as Send } from "./send-CdtXXwAK.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
import { t as require_jsx_runtime } from "./jsx-runtime-CVy3GVGV.js";
import "./es2015-D9zZpuOq.js";
import { t as Checkbox } from "./checkbox-Daq-_tqE.js";
import { t as Label } from "./label-CA70r2No.js";
import { i as UNRELIABLE_BOUNDARY_ATTRIBUTION, n as CRASH_REPORT_ATTRIBUTION_NOTE_DETAIL_KEY, t as CRASH_REPORT_ATTRIBUTION_DETAIL_KEY } from "./react-update-depth-attribution-CrQCUNSQ.js";
import { n as toast } from "./dist-E3opdjfr.js";
import { a as DialogFooter, i as DialogDescription, o as DialogHeader, r as DialogContent, s as DialogTitle, t as Dialog } from "./dialog-s0g51002.js";
var import_react = /* @__PURE__ */ __toESM(require_react());
function appendDiagnosticBundleLines(e, E, D) {
	if (E) {
		if (e.push("", "Diagnostic log:"), E.status === "attached") {
			e.push("- Status: attached", `- Bundle submission ID: ${D(E.bundleSubmissionId)}`, `- Spans: ${E.spanCount}`, `- Bytes: ${E.bytes}`);
			return;
		}
		if (E.status === "uploaded") {
			e.push("- Status: uploaded", `- Ticket ID: ${D(E.ticketId)}`, `- Bundle submission ID: ${D(E.bundleSubmissionId)}`, `- Spans: ${E.spanCount}`, `- Bytes: ${E.bytes}`);
			return;
		}
		e.push("- Status: not uploaded", `- Reason: ${D(E.reason)}`), E.bundleSubmissionId && e.push(`- Bundle submission ID: ${D(E.bundleSubmissionId)}`), typeof E.spanCount == "number" && e.push(`- Spans: ${E.spanCount}`), typeof E.bytes == "number" && e.push(`- Bytes: ${E.bytes}`);
	}
}
function appendMinidumpSignatureLines(e, E) {
	if (typeof E.minidumpCheckMessage == "string" && e.push(`Check failure: ${E.minidumpCheckMessage}`), typeof E.minidumpFaultingModule == "string") {
		let D = E.minidumpFaultingModuleOffset, O = typeof D == "string" ? `+${D}` : "";
		e.push(`Faulting module: ${E.minidumpFaultingModule}${O}`);
	}
}
var POSIX_INVARIANT_SIGNAL_NAMES = {
	1: "SIGHUP",
	2: "SIGINT",
	3: "SIGQUIT",
	4: "SIGILL",
	5: "SIGTRAP",
	6: "SIGABRT",
	8: "SIGFPE",
	9: "SIGKILL",
	11: "SIGSEGV",
	13: "SIGPIPE",
	14: "SIGALRM",
	15: "SIGTERM"
}, WAIT_STATUS_SIGNAL_MASK = 127, WAIT_STATUS_CORE_DUMP_FLAG = 128, WAIT_STATUS_STOPPED_MARKER = 127;
function decodePosixWaitStatus(e) {
	if (!Number.isInteger(e) || e < 0 || e > 65535) return null;
	let E = e & WAIT_STATUS_SIGNAL_MASK;
	return E === WAIT_STATUS_STOPPED_MARKER ? null : E === 0 ? {
		kind: "exited",
		exitStatus: e >> 8 & 255
	} : {
		kind: "signaled",
		signal: E,
		signalName: POSIX_INVARIANT_SIGNAL_NAMES[E] ?? null,
		coreDumped: (e & WAIT_STATUS_CORE_DUMP_FLAG) !== 0
	};
}
function describePosixWaitStatus(e) {
	if (e.kind === "exited") return `exit status ${e.exitStatus}`;
	let E = e.signalName ?? `signal ${e.signal}`;
	return e.coreDumped ? `${E}, core dumped` : E;
}
function formatCrashReportExitCode(e) {
	if (e.exitCode === null || e.exitCode === void 0) return "unknown";
	let E = e.platform === "win32" || e.reason === "launch-failed" ? null : decodePosixWaitStatus(e.exitCode);
	return !E || E.kind === "exited" && e.exitCode === 0 ? String(e.exitCode) : `${e.exitCode} (${describePosixWaitStatus(E)})`;
}
function appendBoundaryAttributionLines(e, E) {
	if (E.attribution !== "unreliable") return;
	let D = E[CRASH_REPORT_ATTRIBUTION_NOTE_DETAIL_KEY];
	e.push("", `Attribution: ${UNRELIABLE_BOUNDARY_ATTRIBUTION}`), typeof D == "string" && D && e.push(D);
}
var MAX_STRING_DETAIL_LENGTH = 240, SECRET_PATTERNS = [
	/\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g,
	/\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
	/\bglpat-[A-Za-z0-9_-]{20,}\b/g,
	/\bsk-[A-Za-z0-9_-]{20,}\b/g,
	/\bxox[baprs]-[A-Za-z0-9-]{10,}/g,
	/\bAKIA[0-9A-Z]{16}\b/g,
	/\bBearer\s+[A-Za-z0-9._~+/-]{20,}/gi,
	/-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?(?:-----END [A-Z ]*PRIVATE KEY-----|$)/g
], CREDENTIAL_URL_PATTERN = /\b[A-Za-z0-9._%+-]+:[A-Za-z0-9._%+-]+@(?=[^/\s]+)/g, SECRET_ASSIGNMENT_PATTERN = /\b(token|access[_-]?token|refresh[_-]?token|api[_-]?key|client[_-]?secret|secret|password|account[_-]?key)\s*[:=]\s*(?:"[^"\r\n]*"|'[^'\r\n]*'|[^&\s,;]+)/gi, PATH_PATTERNS = [
	/(["'`])\/[A-Za-z0-9._-]+\/(?:(?!\1)[^<>\n\r])+\1/g,
	/(["'`])[A-Za-z]:\\(?:(?!\1)[^<>\n\r])+\1/gi,
	/(["'`])\\\\[^\\\s"'`<>\n\r)]+\\(?:(?!\1)[^<>\n\r])+\1/gi,
	RegExp("(?<![A-Za-z0-9./])\\/[A-Za-z0-9._-]+\\/(?:\\\\ |[^\\s\"'`<>)]*)", "g"),
	RegExp("(?<![A-Za-z0-9])[A-Za-z]:\\\\(?:\\\\ |[^\\s\"'`<>\\n\\r)]*)", "gi"),
	/\\\\[^\\\s"'`<>\n\r)]+\\(?:\\ |[^\s"'`<>\n\r)]*)/gi,
	/%(?:USERPROFILE|APPDATA|LOCALAPPDATA|HOMEDRIVE|HOMEPATH)%[^\s"'`<>)]*/gi
];
function sanitizeCrashReportString(e, E = MAX_STRING_DETAIL_LENGTH) {
	let D = e;
	for (let e of PATH_PATTERNS) D = D.replace(e, "[redacted-path]");
	D = D.replace(CREDENTIAL_URL_PATTERN, "[redacted-credential]@"), D = D.replace(SECRET_ASSIGNMENT_PATTERN, (e, E) => `${E}=[redacted]`);
	for (let e of SECRET_PATTERNS) D = D.replace(e, "[redacted-secret]");
	return D.length > E ? `${D.slice(0, E)}...` : D;
}
const MAX_USER_NOTES_LENGTH = 8e3;
var MAX_USER_NOTES_SANITIZE_LENGTH = MAX_USER_NOTES_LENGTH * 2, USER_NOTES_TRUNCATION_SUFFIX = "...", MAX_FORMATTED_REPORT_LENGTH = 64e3, FORMATTED_REPORT_TRUNCATION_SUFFIX = "\n\n[Crash report truncated to fit feedback endpoint limits.]";
function isReactErrorBoundaryReport(e) {
	return e.source === "renderer" && e.processType === "react-render" && e.reason === "react-error-boundary";
}
var USER_NOTES_BEGIN = "--- begin user notes ---", USER_NOTES_END = "--- end user notes ---";
function appendUserNotesLines(e, E) {
	if (!E) return;
	let D = E.length > MAX_USER_NOTES_SANITIZE_LENGTH, O = E.slice(0, MAX_USER_NOTES_SANITIZE_LENGTH).trim();
	if (!O) return;
	let k = sanitizeCrashReportString(O, MAX_USER_NOTES_SANITIZE_LENGTH), A = D || k.length > 8e3 ? `${k.slice(0, MAX_USER_NOTES_LENGTH - 3).trimEnd()}${USER_NOTES_TRUNCATION_SUFFIX}` : k;
	e.push("", "User notes:", USER_NOTES_BEGIN, ...A.split("\n").map((e) => `  ${e}`), USER_NOTES_END);
}
function formatCrashReportText(e, E, D) {
	let O = [
		"[Crash Report]",
		"",
		`Report ID: ${e.id}`,
		`Created: ${e.createdAt}`,
		`Status: ${e.status}`,
		`Source: ${e.source}`,
		`Process: ${e.processType}`,
		`Reason: ${e.reason}`,
		`Exit code: ${formatCrashReportExitCode(e)}`,
		`App version: ${e.appVersion}`,
		`Platform: ${e.platform} ${e.osRelease} ${e.arch}`,
		`Electron: ${e.electronVersion}`,
		`Chrome: ${e.chromeVersion}`
	];
	appendUserNotesLines(O, E), appendMinidumpSignatureLines(O, e.details), appendBoundaryAttributionLines(O, e.details), appendDiagnosticBundleLines(O, D, sanitizeCrashReportString);
	let k = Object.entries(e.details);
	if (k.length > 0) {
		O.push("", "Details:");
		for (let [e, E] of k) O.push(`- ${e}: ${String(E)}`);
	}
	if (e.breadcrumbs && e.breadcrumbs.length > 0) {
		O.push("", "Recent activity:");
		for (let E of e.breadcrumbs) {
			let e = E.data ? Object.entries(E.data) : [], D = e.length > 0 ? ` (${e.map(([e, E]) => `${e}=${String(E)}`).join(", ")})` : "";
			O.push(`- ${E.createdAt}: ${E.name}${D}`);
		}
	}
	return truncateFormattedCrashReport(O.join("\n"));
}
function truncateFormattedCrashReport(e) {
	if (e.length <= MAX_FORMATTED_REPORT_LENGTH) return e;
	let E = MAX_FORMATTED_REPORT_LENGTH - 59;
	return `${e.slice(0, Math.max(0, E)).trimEnd()}${FORMATTED_REPORT_TRUNCATION_SUFFIX}`;
}
const CRASH_REPORT_SUBMIT_FAILURE_TOAST_ID = "crash-report-submit-failure";
function normalizedFailureMessage(e) {
	return sanitizeCrashReportString(e instanceof Error ? e.message : typeof e == "string" ? e : "").trim() || translate("auto.components.crash.report.submit.notice.unknownError", "The crash report request failed before it returned a reason.");
}
function asSentence(e) {
	return /[.!?]$/.test(e) ? e : `${e}.`;
}
function getCrashReportCopySubmissionFailure(e) {
	let E = e.diagnosticBundle?.status === "uploaded" ? {
		status: "uploaded",
		ticketId: sanitizeCrashReportString(e.diagnosticBundle.ticketId)
	} : e.diagnosticBundle?.status === "not_uploaded" ? {
		status: "not_uploaded",
		reason: normalizedFailureMessage(e.diagnosticBundle.reason)
	} : void 0;
	return {
		error: normalizedFailureMessage(e.error),
		...E ? { diagnosticContext: E } : {}
	};
}
function getCrashReportSubmitFailureNotice(e, E) {
	let O = e.diagnosticBundle?.status === "uploaded" ? translate("auto.components.crash.report.submit.notice.ticketUploaded", "Diagnostic ticket {{value0}} was uploaded but not linked.", { value0: sanitizeCrashReportString(e.diagnosticBundle.ticketId) }) : null, k = e.diagnosticBundle?.status === "not_uploaded" ? asSentence(translate("auto.components.crash.report.submit.notice.diagnosticsReason", "Diagnostic logs were not attached: {{value0}}", { value0: normalizedFailureMessage(e.diagnosticBundle.reason) })) : null, A = e.diagnosticBundle?.status === "not_uploaded", j = E && !A ? translate("auto.components.crash.report.submit.notice.uncheckDiagnostics", "Uncheck \"Attach recent diagnostic logs\" and try again, or copy the details.") : translate("auto.components.crash.report.submit.notice.checkConnection", "Check your connection and try again, or copy the details.");
	return {
		title: translate("auto.components.crash.report.submit.notice.notSent", "Crash report wasn't sent"),
		description: [
			asSentence(normalizedFailureMessage(e.error)),
			O,
			k,
			j
		].filter((e) => !!e).join(" "),
		actionLabel: translate("auto.components.crash.report.submit.notice.copyDetails", "Copy Details")
	};
}
function getCrashReportSubmitWarningNotice(e, E) {
	return !E || e.diagnosticBundle?.status !== "not_uploaded" ? null : {
		title: translate("auto.components.crash.report.submit.notice.sentWithoutDiagnostics", "Crash report sent without diagnostic logs"),
		description: translate("auto.components.crash.report.submit.notice.diagnosticsReason", "Diagnostic logs were not attached: {{value0}}", { value0: normalizedFailureMessage(e.diagnosticBundle.reason) })
	};
}
const CRASH_REPORT_COPY_FAILURE_TOAST_ID = "crash-report-copy-failure";
function showCopyFailure(e) {
	toast.error(translate("auto.components.crash.report.copy.copyFailed", "Crash report details could not be copied."), {
		id: CRASH_REPORT_COPY_FAILURE_TOAST_ID,
		...e ? { description: e } : {},
		duration: Infinity,
		dismissible: !0
	});
}
function useCrashReportCopy(e, E) {
	let O = e?.id ?? null, k = (0, import_react.useRef)({
		reportId: O,
		value: E
	});
	k.current.reportId === O ? k.current.value = E : k.current = {
		reportId: O,
		value: E
	};
	let A = k.current;
	return (0, import_react.useCallback)(async (E) => {
		try {
			let O = await window.api.crashReports.copyLatestDiagnostics({
				...e ? { reportId: e.id } : {},
				notes: A.value,
				...E ? { submissionFailure: E } : {}
			});
			if (!O.ok) {
				showCopyFailure(O.error);
				return;
			}
			toast.dismiss(CRASH_REPORT_COPY_FAILURE_TOAST_ID), toast.success(translate("auto.components.crash.report.CrashReportDialog.8b8473c544", "Crash report copied."));
		} catch (e) {
			console.error("Failed to copy crash report details:", e), showCopyFailure();
		}
	}, [e, A]);
}
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function formatSummary(e) {
	if (isReactErrorBoundaryReport(e)) {
		let E = typeof e.details.surface == "string" ? e.details.surface : null;
		return E ? `React render error in ${E}` : "React render error";
	}
	return `${e.processType} ${e.reason}${e.exitCode === null ? "" : ` (exit ${e.exitCode})`}`;
}
function getDialogTitle(e) {
	return e ? e && isReactErrorBoundaryReport(e) ? "Orca hit a recoverable UI error" : "Orca closed unexpectedly" : "Report a crash";
}
function getDialogDescription(e) {
	return e ? e && isReactErrorBoundaryReport(e) ? "Send a privacy-safe diagnostic report to help us understand the failed UI surface." : "Send a privacy-safe diagnostic report to help us understand what happened." : "Send a privacy-safe crash report. Recent redacted diagnostic logs are included when available.";
}
function getNotesPlaceholder(e) {
	return e ? e && isReactErrorBoundaryReport(e) ? "Optional: what were you doing before this UI error?" : "Optional: what were you doing before Orca closed?" : "Optional: what happened?";
}
function CrashReportDialogSurface({ open: e, report: E, loading: M, onOpenChange: N, onReportChange: P }) {
	let F = useMountedRef(), [I, L] = (0, import_react.useState)(""), [R, z] = (0, import_react.useState)(!0), [B, V] = (0, import_react.useState)(!1), [H, U] = (0, import_react.useState)(null), W = (0, import_react.useRef)(0), G = (0, import_react.useDeferredValue)(I), K = (0, import_react.useMemo)(() => E ? formatCrashReportText(E, G) : "", [G, E]), q = useCrashReportCopy(E, I), J = (0, import_react.useCallback)(() => {
		W.current += 1, U(null);
	}, []), Y = (0, import_react.useCallback)(() => {
		let e = ++W.current;
		U(null), window.api.gh.viewer().then((E) => {
			F.current && e === W.current && U(E);
		}).catch((E) => {
			F.current && e === W.current && (U(null), console.error("Failed to load GitHub viewer for crash report:", E));
		});
	}, [F]);
	(0, import_react.useEffect)(() => {
		if (!e) {
			J();
			return;
		}
		z(!0), Y();
	}, [
		J,
		Y,
		e
	]);
	let X = (e, E) => {
		let D = {
			error: e,
			...E ? { diagnosticBundle: E } : {}
		}, O = getCrashReportSubmitFailureNotice(D, R), k = getCrashReportCopySubmissionFailure(D);
		toast.error(O.title, {
			id: CRASH_REPORT_SUBMIT_FAILURE_TOAST_ID,
			description: O.description,
			duration: Infinity,
			dismissible: !0,
			action: {
				label: O.actionLabel,
				onClick: () => {
					q(k);
				}
			}
		});
	}, Z = async () => {
		E?.status === "pending" && (await window.api.crashReports.dismiss({ reportId: E.id }), F.current && P({
			...E,
			status: "dismissed"
		}));
	}, Q = async () => {
		await Z(), F.current && N(!1);
	}, $ = async () => {
		V(!0);
		try {
			let e = await window.api.crashReports.submit({
				...E ? { reportId: E.id } : {},
				notes: I,
				includeDiagnosticLogs: R,
				submitAnonymously: !H,
				githubLogin: H?.login ?? null,
				githubEmail: null
			});
			if (!e.ok) {
				X(e.error, e.diagnosticBundle), console.error("Failed to submit crash report:", e.error);
				return;
			}
			if (!F.current) return;
			P(e.report), L(""), toast.dismiss(CRASH_REPORT_SUBMIT_FAILURE_TOAST_ID);
			let O = getCrashReportSubmitWarningNotice(e, R);
			O ? toast.warning(O.title, { description: O.description }) : toast.success(translate("auto.components.crash.report.CrashReportDialog.8e24fe4f75", "Crash report sent.")), N(!1);
		} catch (e) {
			X(e), console.error("Failed to submit crash report:", e);
		} finally {
			F.current && V(!1);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: e,
		onOpenChange: (e) => {
			if (!(B && !e)) {
				if (!e) {
					J(), Z().finally(() => {
						F.current && N(!1);
					});
					return;
				}
				N(!0);
			}
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
					className: "flex items-center gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-destructive" }), getDialogTitle(E)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "text-xs",
					children: getDialogDescription(E)
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 space-y-3",
					children: [
						E ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-border/70 bg-muted/30 p-3 text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-foreground",
								children: formatSummary(E)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-1 text-muted-foreground",
								children: [
									new Date(E.createdAt).toLocaleString(),
									" · ",
									E.platform,
									" ",
									E.arch,
									" ·",
									translate("auto.components.crash.report.CrashReportDialog.835037edc9", "Orca"),
									" ",
									E.appVersion
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] font-medium text-muted-foreground",
								children: translate("auto.components.crash.report.CrashReportDialog.6d3ebe216a", "Diagnostic text")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "max-h-44 overflow-auto whitespace-pre-wrap [overflow-wrap:anywhere] rounded-md border border-border bg-muted/20 p-3 font-mono text-[11px] leading-5 text-muted-foreground scrollbar-sleek",
								children: K
							})]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md border border-border/70 bg-muted/30 p-3 text-xs text-muted-foreground",
							children: M ? translate("auto.components.crash.report.CrashReportDialog.765591798d", "Checking for crash reports...") : translate("auto.components.crash.report.CrashReportDialog.ead6fc0510", "No automatic crash report was captured. You can still send details and include recent diagnostic logs when available.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: I,
								onChange: (e) => L(e.target.value),
								rows: 4,
								maxLength: MAX_USER_NOTES_LENGTH,
								placeholder: getNotesPlaceholder(E),
								className: "min-h-24 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								"aria-hidden": "true",
								className: "text-right text-[11px] tabular-nums text-muted-foreground",
								children: [
									I.length.toLocaleString(),
									" / ",
									MAX_USER_NOTES_LENGTH.toLocaleString()
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2 rounded-md border border-border/70 bg-muted/20 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
								id: "crash-report-attach-diagnostics",
								checked: R,
								onCheckedChange: (e) => z(e === !0),
								disabled: B,
								className: "mt-0.5"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "crash-report-attach-diagnostics",
									className: "text-xs",
									children: translate("auto.components.crash.report.CrashReportDialog.b082f27490", "Attach recent diagnostic logs")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs leading-5 text-muted-foreground",
									children: translate("auto.components.crash.report.CrashReportDialog.e59f0b9427", "Sends a capped redacted log bundle with the report.")
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, {
					className: "gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							variant: "outline",
							size: "sm",
							onClick: () => void q(),
							disabled: M,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clipboard, { className: "size-3.5" }), translate("auto.components.crash.report.CrashReportDialog.50b00dc327", "Copy Details")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "ghost",
							size: "sm",
							onClick: Q,
							disabled: B,
							children: translate("auto.components.crash.report.CrashReportDialog.88fea8e84e", "Don't Send")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "button",
							size: "sm",
							onClick: $,
							disabled: M || B,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "size-3.5" }), translate("auto.components.crash.report.CrashReportDialog.b4951cd27c", "Send Report")]
						})
					]
				})
			]
		})
	});
}
export { CrashReportDialogSurface };
