# Greenfield briefs: what to ask, what to assume

When there's no existing site or upload to extract from, don't design blind
and don't interrogate the user with a long form either. Use `ask_user_input_v0`
for anything genuinely ambiguous, and default the rest.

## Ask (if not already stated in the conversation)

Keep this to what actually changes the design, ideally as a single
`ask_user_input_v0` call with 1–3 short-option questions:

1. **The one action the page should drive** — e.g. for a restaurant: order
   via delivery app, book a table, or just build awareness? For a service
   business: book a call, fill a form, or call directly? This decides what
   the primary CTA is and what section leads.
2. **Real content availability** — does the user have real prices/copy/photos
   to provide, or should you draft placeholder copy clearly marked as such
   for them to replace?
3. **Any existing brand constraints** — a logo, colors, or an existing site
   to stay consistent with, vs. a free hand on visual direction.

Don't ask about things you can reasonably default (see below) — every
question you skip by making a sensible default and stating it is better than
one more round trip.

## Default instead of asking

- **Tech stack**: plain HTML/CSS/JS unless they mention a framework or an
  existing codebase to integrate with.
- **Tone/voice**: match the register implied by the subject (a taqueria
  reads differently than a law firm) — state the assumption in one line
  rather than asking "what tone do you want?".
- **Number of sections**: a single-page site with hero, offering/menu,
  proof or story, contact — trim or extend based on what the subject
  actually needs, don't ask permission for standard structure.
- **Placeholder facts**: if the user clearly wants to see a design before
  they've nailed down real copy, use clearly-labeled placeholder text
  (e.g. `[endereço aqui]`) rather than blocking on it — but never a
  placeholder that reads as a real fact (no fake phone numbers that look
  legitimate, no invented prices).

## If the user pastes/describes a business informally

Extract everything usable from what they already wrote before asking
anything — a rambling description often already contains the answers to
half the interview list above. Only ask about what's genuinely missing.
