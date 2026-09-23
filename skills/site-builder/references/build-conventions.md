# Build conventions

Concrete conventions for the HTML/CSS/JS this skill produces. These are
defaults, not laws — deviate when the brief calls for it, but deviate on
purpose.

## File structure

```
site/
├── index.html
├── style.css
├── script.js
├── favicon.svg
└── images/
    └── ...
```

One HTML/CSS/JS file each unless the page is long enough that splitting
genuinely helps (e.g. `sections/` partials for a very large multi-page site —
rare for a landing page). Don't inline CSS/JS into the HTML; keep them
separate so the user can hand `style.css` to someone else to tweak without
touching markup.

## CSS

- Define the token system from `frontend-design` as CSS custom properties on
  `:root` (`--bg-deep`, `--gold`, `--font-display`, etc.) — every color and
  font elsewhere references a variable, never a bare hex/font-family, so the
  palette can be revised in one place.
- Always include a `@media (prefers-reduced-motion: reduce)` block that
  neutralizes animation/transition durations and disables `scroll-behavior:
  smooth`.
- Always set a visible focus style (`:focus-visible`) — don't rely on the
  browser default, but don't remove it without replacing it either.
- Mobile breakpoint(s) via `@media (max-width: ...)`; test the plan mentally
  at ~375px width, not just at the desktop width you designed at. Nav
  collapses to a toggle/hamburger below the point where the link list stops
  fitting.

## JS

- Vanilla JS, no bundler, `<script src="script.js">` at the end of `<body>`.
- Use `IntersectionObserver` for scroll-reveal effects rather than a scroll
  listener recalculating on every frame.
- Any interactive calculator/builder should update a visible summary/total
  immediately on every input change (not on a submit click) and should
  degrade gracefully — real content still renders if JS fails to load.
- If you build a "send this as a message" flow (WhatsApp `wa.me` links, a
  `mailto:`, etc.), construct the message from live state and
  `encodeURIComponent` it — don't hardcode an example message.

## Accessibility baseline

- Every meaningful `<img>` has descriptive `alt` text; purely decorative
  images use `alt=""`.
- Interactive elements are real `<button>`/`<a>` tags, not `<div onclick>`.
- Color contrast: body text against the darkest/lightest background in the
  palette should read comfortably — check the token system for this during
  the design step, not after.

## Validation commands

Run these before packaging (see SKILL.md Step 4):

```bash
node -c script.js && echo "JS OK"

python3 -c "
import re
html = open('index.html', encoding='utf-8').read()
for tag in ['div','section','article','header','footer','nav','ul','li','a']:
    o = len(re.findall(r'<'+tag+r'(\s|>)', html))
    c = len(re.findall(r'</'+tag+r'>', html))
    print(tag, o, c, 'OK' if o==c else 'MISMATCH')
"
```

## Packaging for delivery

```bash
mkdir -p /mnt/user-data/outputs
cp -r /home/claude/site/* /mnt/user-data/outputs/
cd /home/claude/site && zip -r /mnt/user-data/outputs/<site-name>.zip . -x ".*"
```

Then `present_files` with both the loose `index.html` (for inline preview —
requires the sibling `style.css`/`script.js`/`images/` to also be in
`/mnt/user-data/outputs/` so relative paths resolve) and the `.zip` (for the
user to deploy elsewhere).
