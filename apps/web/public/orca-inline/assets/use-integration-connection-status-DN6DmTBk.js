import { Ul as localPreflightContextKey, l_ as getProviderRuntimeContextKey, t as useAppStore, zl as getLocalPreflightContext } from "./store-C9f8FDJV.js";
function deriveIntegrationStepStates(e) {
	let t = e.reviewConnected ? "done" : "active", n = e.trackerConnected || e.reviewConnected && e.codeHostTaskConnected;
	return {
		review: t,
		task: n ? "done" : e.reviewConnected ? "active" : "upcoming",
		complete: e.reviewConnected && n
	};
}
function deriveIntegrationFlowState(e) {
	let t = e.trackerProviderName !== null, n = e.codeHostTaskProviderName !== null && !e.trackerChecking, r = deriveIntegrationStepStates({
		reviewConnected: e.reviewConnected,
		trackerConnected: t,
		codeHostTaskConnected: n
	});
	return {
		...r,
		taskResolved: r.task === "done"
	};
}
function isBitbucketReviewConnected(e) {
	return e?.configured === !0 && e.authenticated === !0;
}
function isAzureDevOpsReviewConfigured(e) {
	return !(e?.configured !== !0 || e.tokenConfigured === !0 && e.baseUrl && e.authenticated !== !0);
}
function isGiteaReviewConfigured(e) {
	return !(e?.configured !== !0 || e.tokenConfigured === !0 && e.authenticated !== !0);
}
function deriveIntegrationConnectionStatus(e) {
	let t = e.preflightStatusContextKey === e.expectedPreflightContextKey, n = e.preflightStatusLoading || !e.preflightStatusChecked || !t, r = !n && e.preflightStatusError === null, i = r && e.preflightStatus?.gh?.installed === !0 && e.preflightStatus.gh.authenticated === !0, a = r && e.preflightStatus?.glab?.installed === !0 && e.preflightStatus.glab.authenticated === !0, l = r && isBitbucketReviewConnected(e.preflightStatus?.bitbucket), u = r && isAzureDevOpsReviewConfigured(e.preflightStatus?.azureDevOps), d = r && isGiteaReviewConfigured(e.preflightStatus?.gitea), f = e.linearStatusContextKey === e.providerRuntimeContextKey, p = e.jiraStatusContextKey === e.providerRuntimeContextKey, m = !f || !e.linearStatusChecked, h = !p || !e.jiraStatusChecked, g = !m && f && e.linearStatus.connected === !0, _ = !h && p && e.jiraStatus.connected === !0, v = i ? "GitHub" : a ? "GitLab" : l ? "Bitbucket" : u ? "Azure DevOps" : d ? "Gitea" : null, y = i ? "GitHub" : a ? "GitLab" : null, b = g ? "Linear" : _ ? "Jira" : null, x = [
		...g ? ["Linear"] : [],
		..._ ? ["Jira"] : [],
		...i ? ["GitHub"] : [],
		...a ? ["GitLab"] : []
	], S = x.length > 0, C = b === null && (m || h);
	return {
		reviewConnected: i || a || l || u || d,
		reviewProviderName: v,
		codeHostTaskProviderName: y,
		trackerConnected: S,
		trackerProviderName: b,
		taskSourceNames: x,
		reviewChecking: n,
		trackerChecking: C,
		checking: !S && (n || C)
	};
}
function useIntegrationConnectionStatus() {
	let i = useAppStore((e) => e.preflightStatus), a = useAppStore((e) => e.preflightStatusChecked), o = useAppStore((e) => e.preflightStatusContextKey), s = useAppStore((e) => e.preflightStatusError), c = useAppStore((e) => e.preflightStatusLoading), u = useAppStore((e) => e.linearStatus), d = useAppStore((e) => e.linearStatusChecked), f = useAppStore((e) => e.linearStatusContextKey), p = useAppStore((e) => e.jiraStatus), m = useAppStore((e) => e.jiraStatusChecked), h = useAppStore((e) => e.jiraStatusContextKey), g = useAppStore((e) => e.settings);
	return deriveIntegrationConnectionStatus({
		preflightStatus: i,
		preflightStatusChecked: a,
		preflightStatusContextKey: o,
		preflightStatusError: s,
		preflightStatusLoading: c,
		expectedPreflightContextKey: useAppStore((t) => localPreflightContextKey(getLocalPreflightContext(t))),
		linearStatus: u,
		linearStatusChecked: d,
		linearStatusContextKey: f,
		jiraStatus: p,
		jiraStatusChecked: m,
		jiraStatusContextKey: h,
		providerRuntimeContextKey: getProviderRuntimeContextKey(g)
	});
}
export { deriveIntegrationFlowState as n, useIntegrationConnectionStatus as r, deriveIntegrationConnectionStatus as t };
