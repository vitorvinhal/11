import { i as translate } from "./i18n-CakWKPtl.js";
import { n as toast } from "./dist-E3opdjfr.js";
async function copyArtifactLink(n, r = {}) {
	try {
		return await window.api.ui.writeClipboardText(n), r.showSuccessToast !== !1 && toast.success(translate("auto.components.artifacts.copySuccess", "Artifact link copied")), !0;
	} catch {
		return toast.error(translate("auto.components.artifacts.copyFailed", "Could not copy artifact link")), !1;
	}
}
function openArtifactInBrowser(e) {
	window.api.shell.openUrl(e);
}
export { openArtifactInBrowser as n, copyArtifactLink as t };
