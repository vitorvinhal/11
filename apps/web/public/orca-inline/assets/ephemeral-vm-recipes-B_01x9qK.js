import { A as discriminatedUnion, D as _null, F as object, I as record, L as string, M as lazy, N as literal, O as array, P as number, R as union, k as boolean } from "./stale-document-visibility-rSdoU229.js";
import { i as MIN_SSH_RELAY_GRACE_PERIOD_SECONDS, r as MAX_SSH_RELAY_GRACE_PERIOD_SECONDS } from "./ssh-types-B1wsSHlf.js";
var JsonValueSchema = lazy(() => union([
	string(),
	number(),
	boolean(),
	_null(),
	array(JsonValueSchema),
	record(string(), JsonValueSchema)
])), SavedPortForwardSchema = object({
	localPort: number().int().min(1).max(65535),
	remoteHost: string().min(1),
	remotePort: number().int().min(1).max(65535),
	label: string().min(1).optional()
}).strict();
const EphemeralVmRecipeSshTargetSchema = object({
	label: string().min(1),
	configHost: string().min(1).optional(),
	host: string().min(1),
	port: number().int().min(1).max(65535),
	username: string(),
	identityFile: string().min(1).optional(),
	identityAgent: string().min(1).optional(),
	identitiesOnly: boolean().optional(),
	proxyCommand: string().min(1).optional(),
	jumpHost: string().min(1).optional(),
	relayGracePeriodSeconds: number().int().refine((e) => e === 0 || e >= 60 && e <= 604800, `Relay grace period must be 0 or between 60 and ${MAX_SSH_RELAY_GRACE_PERIOD_SECONDS} seconds.`).optional(),
	portForwards: array(SavedPortForwardSchema).optional()
}).strict(), EphemeralVmRecipeConnectionSchema = discriminatedUnion("type", [object({
	type: literal("orca-server"),
	pairingCode: string().min(1),
	projectRoot: string().min(1)
}).strict(), object({
	type: literal("ssh"),
	target: EphemeralVmRecipeSshTargetSchema,
	projectRoot: string().min(1)
}).strict()]);
union([
	object({
		schemaVersion: literal(1),
		pairingCode: string().min(1),
		projectRoot: string().min(1),
		userData: record(string(), JsonValueSchema).optional()
	}).strict(),
	object({
		schemaVersion: literal(1),
		connection: EphemeralVmRecipeConnectionSchema,
		userData: record(string(), JsonValueSchema).optional()
	}).strict(),
	object({
		schemaVersion: literal(2),
		checkoutMode: literal("provisioned-root"),
		pairingCode: string().min(1),
		projectRoot: string().min(1),
		userData: record(string(), JsonValueSchema).optional()
	}).strict(),
	object({
		schemaVersion: literal(2),
		checkoutMode: literal("provisioned-root"),
		connection: EphemeralVmRecipeConnectionSchema,
		userData: record(string(), JsonValueSchema).optional()
	}).strict()
]);
function getEphemeralVmRecipeResultConnection(e) {
	return "connection" in e ? e.connection : {
		type: "orca-server",
		pairingCode: e.pairingCode,
		projectRoot: e.projectRoot
	};
}
function getEphemeralVmRecipeResultProjectRoot(e) {
	return getEphemeralVmRecipeResultConnection(e).projectRoot;
}
function getEphemeralVmRecipeResultCheckoutMode(e) {
	return e.schemaVersion === 2 ? "provisioned-root" : "orca-worktree";
}
export { getEphemeralVmRecipeResultProjectRoot as n, getEphemeralVmRecipeResultCheckoutMode as t };
