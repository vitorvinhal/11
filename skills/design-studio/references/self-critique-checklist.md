# Self-Critique Checklist

Run these checks before delivering any design. Fix issues or note them as intentional trade-offs.

## 1. Contrast & Readability

### Text Contrast
- [ ] Body text contrast ratio ≥ 4.5:1 against background
- [ ] Large text (18px+) contrast ratio ≥ 3:1
- [ ] Text readable without squinting at arm's length
- [ ] No text over busy images without overlay/backdrop

### Visual Hierarchy
- [ ] Headlines clearly larger/bolder than body
- [ ] Most important element most prominent
- [ ] Consistent type scale throughout
- [ ] White space guides eye flow

## 2. Restraint & Focus

### One Signature Element
- [ ] Can I name the ONE memorable visual element?
- [ ] Is everything else quieter than that element?
- [ ] Did I remove at least one decorative thing?
- [ ] Does every element serve the brief?

### Avoiding Defaults
- [ ] Is this one of the three AI-default looks? If yes, revise.
- [ ] Did I make choices specific to THIS subject?
- [ ] Would this design work for a different client without changing much? If yes, revise.

## 3. Responsiveness

### Mobile (375px)
- [ ] Text readable without zooming
- [ ] Touch targets ≥ 44px × 44px
- [ ] No horizontal scroll
- [ ] Images scale properly
- [ ] Navigation accessible

### Tablet (768px)
- [ ] Layout adapts gracefully
- [ ] Images resize appropriately
- [ ] Spacing feels balanced

### Desktop (1440px)
- [ ] Content doesn't stretch too wide
- [ ] Max-width constrains text lines
- [ ] Hover states work

## 4. Accessibility

### Semantic HTML
- [ ] Using proper heading hierarchy (h1 → h2 → h3)
- [ ] Buttons are `<button>`, links are `<a>`
- [ ] Images have descriptive `alt` text
- [ ] Form inputs have labels

### Keyboard Navigation
- [ ] All interactive elements focusable
- [ ] Focus order logical
- [ ] Focus styles visible
- [ ] Skip-to-content link present

### Motion
- [ ] `prefers-reduced-motion` respected
- [ ] Animations not essential to understanding
- [ ] No flashing content (3 times/second)

## 5. Color & Token System

### Consistency
- [ ] All colors defined as CSS variables
- [ ] No bare hex values in component code
- [ ] Font families use variable references
- [ ] Spacing uses consistent scale

### Palette Quality
- [ ] Colors work together (check harmony)
- [ ] Accent color used sparingly (not everywhere)
- [ ] Background/text contrast verified
- [ ] Colors meaningful to the subject

## 6. Typography

### Readability
- [ ] Body font size ≥ 16px
- [ ] Line height 1.5–1.7 for body text
- [ ] Line length 50–75 characters
- [ ] Paragraph spacing clear

### Personality
- [ ] Display font matches subject personality
- [ ] Body font doesn't compete with display
- [ ] Font loading considered (FOUT/FOIT)

## 7. Interaction & Motion

### Purposeful Animation
- [ ] Animations serve function (feedback, guidance)
- [ ] Not just decorative fluff
- [ ] Timing appropriate (not too fast/slow)
- [ ] Easing natural (not robotic)

### Hover/Focus States
- [ ] Interactive elements have hover states
- [ ] Hover state provides feedback
- [ ] Click/tap targets clear
- [ ] State changes visible

## 8. Content & Copy

### Clarity
- [ ] Headlines clear and scannable
- [ ] No jargon without explanation
- [ ] Call-to-action obvious
- [ ] Contact info easy to find

### Tone
- [ ] Voice matches brand personality
- [ ] Consistent throughout
- [ ] Appropriate for audience
- [ ] No placeholder text remaining

## 9. Technical Quality

### Performance
- [ ] Images optimized (WebP where possible)
- [ ] Lazy loading for below-fold images
- [ ] Fonts loaded efficiently
- [ ] No unnecessary scripts

### Code Quality
- [ ] HTML valid and semantic
- [ ] CSS organized and commented
- [ ] JavaScript error-free
- [ ] No console errors

## 10. Delivery

### Package Complete
- [ ] All files included (HTML, CSS, JS, images)
- [ ] Favicon present
- [ ] Paths relative (not absolute)
- [ ] ZIP created for deployment

### Documentation
- [ ] Placeholder content marked with TODO
- [ ] Real vs placeholder info clear
- [ ] Deployment instructions provided
- [ ] Any limitations noted

## Quick Self-Critique Script

```markdown
## Design Self-Critique: [Project Name]

### What I Did Well
- [List 2-3 things that work]

### What's the Signature Element?
- [Name it — is it memorable?]

### What I Cut
- [List 1-2 things I removed for restraint]

### Trade-offs Made
- [List intentional compromises]

### Would I Change Anything?
- [Honest assessment]
```
