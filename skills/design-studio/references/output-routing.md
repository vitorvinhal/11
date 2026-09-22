# Output Routing Guide

Decision guide for which tool/file format to produce for a given design request.

## Quick Decision Tree

```
User asks for design help
        │
        ▼
Is it a full multi-section website/landing page?
        │
   YES ─┼─ NO
        │   │
        ▼   ▼
   site-builder   Is it a quick visual for conversation?
        │              │
        │         YES ─┼─ NO
        │              │   │
        │              ▼   ▼
        │         HTML/CSS   Is it a reusable component?
        │         widget         │
        │                   YES ─┼─ NO
        │                        │   │
        │                        ▼   ▼
        │                   HTML/    Is it print/presentation?
        │                   React        │
        │                   artifact  YES ─┼─ NO
        │                                │   │
        │                                ▼   ▼
        │                           PDF/PPTX  Ask user
        │                           document
```

## Output Types

### 1. Inline HTML/CSS Widget
**When to use:**
- Quick diagram or mockup in conversation
- Small interactive demo
- Chart or visualization
- UI component preview

**Characteristics:**
- Single HTML file with embedded CSS/JS
- Renders immediately in browser
- No external dependencies
- Easy to iterate on

**Example requests:**
- "Show me what a pricing table would look like"
- "Create a color palette preview"
- "Make a quick mockup of this form"

### 2. HTML/React Artifact
**When to use:**
- Reusable component user will ship
- App screen or UI module
- Interactive prototype
- Component library entry

**Characteristics:**
- Separate files (HTML, CSS, JS or React components)
- Follows frontend-design conventions
- Token system as CSS variables
- Responsive and accessible

**Example requests:**
- "Build a testimonial carousel component"
- "Create a dashboard card I can reuse"
- "Make a form with validation"

### 3. Full Website (site-builder)
**When to use:**
- Multi-section marketing site
- Landing page with multiple sections
- Business website
- Portfolio site

**Characteristics:**
- Full workflow (interview → design → build → deliver)
- Multiple pages or long single page
- Content extraction from existing assets
- Deploy package with favicon

**Example requests:**
- "Create a landing page for my bakery"
- "Redesign my company website"
- "Build a portfolio site"

### 4. PDF/Document
**When to use:**
- Poster or flyer
- Presentation slides
- One-pager or brochure
- Print-ready material

**Characteristics:**
- Fixed layout for print
- High-resolution assets
- Bleed and margin considerations
- Font embedding

**Example requests:**
- "Design a poster for my event"
- "Create a business card"
- "Make a presentation deck"

## Color Palette by Category

### Food & Beverage
- Warm tones: oranges, reds, yellows
- Appetite-stimulating colors
- Cream/off-white backgrounds
- Chocolate/brown accents

### Technology
- Cool tones: blues, purples, teals
- Clean whites and grays
- Accent with vibrant color
- Modern sans-serif typography

### Health & Wellness
- Soft greens, blues, lavenders
- Natural, calming palette
- White space emphasis
- Organic shapes

### Luxury & Fashion
- Black, gold, deep purple
- High contrast
- Minimal color palette
- Elegant serif typography

### Children & Family
- Bright, saturated colors
- Playful primary colors
- Rounded shapes
- Fun, friendly typography

## Typography Pairing Guide

### Display + Body Pairings

| Display Style | Body Pair | Use Case |
|--------------|-----------|----------|
| Serif (Playfair) | Sans-serif (Inter) | Elegant, editorial |
| Sans-serif (Montserrat) | Sans-serif (Open Sans) | Modern, clean |
| Handwritten (Pacifico) | Sans-serif (Poppins) | Friendly, casual |
| Slab (Roboto Slab) | Sans-serif (Roboto) | Strong, reliable |
| Display (Lobster) | Sans-serif (Raleway) | Bold, distinctive |

### Font Loading
```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Font+Name:wght@400;700&display=swap" rel="stylesheet">

<!-- Font Stack -->
--font-display: 'Font Name', Georgia, serif;
--font-body: 'Body Font', system-ui, sans-serif;
```

## Layout Patterns

### Single Column
```
┌─────────────────┐
│     Header      │
├─────────────────┤
│                 │
│     Content     │
│                 │
├─────────────────┤
│     Footer      │
└─────────────────┘
```
Best for: Editorials, blogs, mobile-first

### Zigzag
```
┌─────────────────┐
│  Image │ Text   │
├─────────────────┤
│  Text │ Image   │
├─────────────────┤
│  Image │ Text   │
└─────────────────┘
```
Best for: Feature lists, product showcases

### Grid Cards
```
┌─────┬─────┬─────┐
│Card │Card │Card │
├─────┼─────┼─────┤
│Card │Card │Card │
└─────┴─────┴─────┘
```
Best for: Portfolios, products, services

### Split Screen
```
┌────────┬────────┐
│        │        │
│  Left  │ Right  │
│        │        │
└────────┴────────┘
```
Best for: Hero sections, comparisons
