import { a as ORCA_UPDATER_QUIT_AND_INSTALL_ABORTED_EVENT, d as consumeShutdownCheckpointFailureReason, i as ORCA_APP_RESTART_STARTED_EVENT, o as ORCA_UPDATER_QUIT_AND_INSTALL_STARTED_EVENT, r as ORCA_APP_RESTART_ABORTED_EVENT, s as ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT } from "./lazy-with-retry--hTe1cP7.js";
import { i as translate } from "./i18n-CakWKPtl.js";
import { n as toast } from "./dist-E3opdjfr.js";
var intentionalAppRestartInProgress = !1;
function isIntentionalAppRestartInProgress() {
	return intentionalAppRestartInProgress;
}
function registerUpdaterBeforeUnloadBypass() {
	let b = () => {
		intentionalAppRestartInProgress = !0;
	}, x = () => {
		intentionalAppRestartInProgress = !1;
	};
	return window.addEventListener(ORCA_UPDATER_QUIT_AND_INSTALL_STARTED_EVENT, b), window.addEventListener(ORCA_UPDATER_QUIT_AND_INSTALL_ABORTED_EVENT, x), window.addEventListener(ORCA_APP_RESTART_STARTED_EVENT, b), window.addEventListener(ORCA_APP_RESTART_ABORTED_EVENT, x), window.addEventListener(ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT, x), () => {
		window.removeEventListener(ORCA_UPDATER_QUIT_AND_INSTALL_STARTED_EVENT, b), window.removeEventListener(ORCA_UPDATER_QUIT_AND_INSTALL_ABORTED_EVENT, x), window.removeEventListener(ORCA_APP_RESTART_STARTED_EVENT, b), window.removeEventListener(ORCA_APP_RESTART_ABORTED_EVENT, x), window.removeEventListener(ORCA_RENDERER_SHUTDOWN_CHECKPOINT_ABORTED_EVENT, x), intentionalAppRestartInProgress = !1;
	};
}
function showShutdownCheckpointFailureToast() {
	let e = consumeShutdownCheckpointFailureReason();
	e && toast.error(translate("auto.components.Terminal.quitSnapshotSaveFailed", "Quit canceled: the session snapshot could not be saved ({{value0}}).", { value0: e }));
}
var activeHandler = null, windowCloseCheckpointInProgress = !1;
function isWindowCloseCheckpointInProgress() {
	return windowCloseCheckpointInProgress;
}
function runWithWindowCloseCheckpointScope(e) {
	windowCloseCheckpointInProgress = !0;
	try {
		return e();
	} finally {
		windowCloseCheckpointInProgress = !1;
	}
}
var closeGuards = /* @__PURE__ */ new Set(), closeInFlight = !1;
function setWindowCloseRequestHandler(e) {
	activeHandler = e;
}
function registerWindowCloseGuard(e) {
	return closeGuards.add(e), () => {
		closeGuards.delete(e);
	};
}
async function runWindowCloseGuards() {
	for (let e of closeGuards) if (!await e()) return !1;
	return !0;
}
async function dispatchWindowCloseRequest(e) {
	if (!closeInFlight) {
		closeInFlight = !0;
		try {
			if (!await runWindowCloseGuards()) return;
		} finally {
			closeInFlight = !1;
		}
		if (activeHandler) {
			activeHandler(e);
			return;
		}
		if (runWithWindowCloseCheckpointScope(() => window.dispatchEvent(new Event("beforeunload", { cancelable: !0 })))) {
			window.api.ui.confirmWindowClose();
			return;
		}
		showShutdownCheckpointFailureToast();
	}
}
export { setWindowCloseRequestHandler as a, registerUpdaterBeforeUnloadBypass as c, runWithWindowCloseCheckpointScope as i, isWindowCloseCheckpointInProgress as n, showShutdownCheckpointFailureToast as o, registerWindowCloseGuard as r, isIntentionalAppRestartInProgress as s, dispatchWindowCloseRequest as t };
