import { t as CircleCheck } from "./circle-check-f8jEo_jQ.js";
import { t as CircleDashed } from "./circle-dashed-PoJjEZvD.js";
import { t as CircleMinus } from "./circle-minus-wPSA00CG.js";
import { t as CircleX } from "./circle-x-B4rQismt.js";
import { t as GitPullRequest } from "./git-pull-request-BNWXjRrD.js";
import { t as LoaderCircle } from "./loader-circle-BA3hVfs6.js";
import { t as TriangleAlert } from "./triangle-alert-DthglTJA.js";
const PullRequestIcon = GitPullRequest, CHECK_ICON = {
	success: CircleCheck,
	failure: CircleX,
	pending: LoaderCircle,
	cancelled: CircleX,
	skipped: CircleMinus,
	neutral: CircleDashed,
	timed_out: CircleX,
	action_required: TriangleAlert,
	stale: CircleDashed
}, CHECK_COLOR = {
	success: "text-emerald-500",
	failure: "text-rose-500",
	pending: "text-amber-500",
	cancelled: "text-muted-foreground/60",
	skipped: "text-muted-foreground/60",
	neutral: "text-muted-foreground",
	timed_out: "text-rose-500",
	action_required: "text-amber-500",
	stale: "text-muted-foreground"
};
function prStateColor(e) {
	switch (e) {
		case "merged": return "bg-purple-500/15 text-purple-500 border-purple-500/20";
		case "closed": return "bg-destructive/10 text-destructive border-destructive/20";
		case "draft": return "bg-muted text-muted-foreground/70 border-border";
		case "open": return "bg-emerald-500/15 text-emerald-500 border-emerald-500/20";
	}
}
export { prStateColor as i, CHECK_ICON as n, PullRequestIcon as r, CHECK_COLOR as t };
