import { i as translate } from "./i18n-CakWKPtl.js";
var DIGEST = "a".repeat(64);
function file(e, n = {}) {
	return {
		path: e,
		size: n.size ?? 1024,
		executable: n.executable ?? !1,
		classification: n.classification ?? "text",
		sha256: DIGEST,
		identitySha256: DIGEST
	};
}
function skillWarningPreviewVersion() {
	let r = translate("auto.components.skills.skillWarningPreview.bundleDescription", "A preview bundle covering every warning level."), i = (e, n, r, i) => ({
		id: e,
		name: n,
		description: r,
		digest: DIGEST,
		files: i
	});
	return {
		packageId: "pkg_warning_preview",
		versionId: "ver_warning_preview",
		name: "team-skill-starter-kit",
		description: r,
		packageDigest: DIGEST,
		archiveSha256: DIGEST,
		compressedBytes: 48e3,
		createdAt: "2026-08-16T00:00:00.000Z",
		releaseNotes: "",
		manifest: {
			schemaVersion: 1,
			packageId: "pkg_warning_preview",
			versionId: "ver_warning_preview",
			bundleName: "team-skill-starter-kit",
			description: r,
			createdAt: "2026-08-16T00:00:00.000Z",
			skills: [
				i("instructions-only", "writing-guidelines", translate("auto.components.skills.skillWarningPreview.instructionsOnlyDescription", "Instructions contained entirely in SKILL.md."), [file("SKILL.md")]),
				i("supporting-files", "design-references", translate("auto.components.skills.skillWarningPreview.supportingFilesDescription", "Includes readable reference files beyond the main instructions."), [
					file("SKILL.md"),
					file("references/checklist.md"),
					file("references/examples.json")
				]),
				i("runnable-files", "release-automation", translate("auto.components.skills.skillWarningPreview.runnableFilesDescription", "Includes scripts that an agent may run with your access."), [
					file("SKILL.md"),
					file("release.py"),
					file("scripts/setup.sh", { executable: !0 })
				]),
				i("binary-files", "asset-toolkit", translate("auto.components.skills.skillWarningPreview.binaryFilesDescription", "Includes opaque assets and an executable binary."), [
					file("SKILL.md"),
					file("assets/logo.png", {
						classification: "binary",
						size: 18400
					}),
					file("bin/asset-tool", {
						classification: "binary",
						executable: !0,
						size: 27e3
					})
				])
			],
			bundleDigest: DIGEST
		}
	};
}
export { skillWarningPreviewVersion };
