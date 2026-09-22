# Extracting real content from a compiled site bundle

When you only have a `dist`/build export (a zip with `index.html`, hashed asset
filenames, and one or a few minified JS files), there is no source to read —
but the real business content is still in there as string literals. Pull it
out with `bash_tool` rather than guessing or asking the user to retype it.

## 1. Unzip and get your bearings

```bash
mkdir -p /home/claude/site_extract && cd /home/claude/site_extract
unzip -o /path/to/upload.zip
find . -type f
```

Look at `index.html` first — it's usually tiny and just points at the hashed
JS/CSS bundle(s). The real content lives in the JS.

## 2. Pull readable strings out of the minified JS

Minifiers keep string literals (including template literals) intact — only
variable/function names get mangled. Search for them directly rather than
trying to read the whole file.

Bundled frontend frameworks (React, Vue, Three.js, etc.) also ship their own
huge amount of internal string literals (webgl shader code, error messages,
internal prop names). Filter those out or you'll drown in noise.

```bash
# Broad sweep: quoted/template strings containing accented characters or
# other clear natural-language signals (adjust the character class to the
# site's language)
python3 -c "
import re
data = open('assets/index-XXXXXXXX.js', encoding='utf-8').read()
for m in set(re.findall(r'children:\`([^\`]{1,200})\`', data)):
    if re.search(r'[a-zA-Zà-úÀ-Ú]{3,}', m):
        print(repr(m))
"
```

`children:\`...\`` catches JSX text content in React builds specifically —
that's usually where the actual page copy lives (headings, paragraphs, labels,
button text). Also try `name:`, `title:`, `desc(?:ricao|rição|ription)?:`,
`price:`, `address:` or locale-appropriate field names for structured data
(product lists, menu items) — these often sit together in one object literal:

```bash
grep -oP 'name:\`(Product Name Pattern)[^\`]+\`.{0,300}' assets/*.js
```

Once you find one hit, print more context around it (`data[i-100:i+700]` in
Python, or widen the grep) — structured data like a product/menu array is
usually one contiguous object literal with all its fields (name, price, desc,
image, rating) next to each other.

For contact info specifically, search for the field labels rather than the
values, since you don't know the values yet: `Endereço`/`Address`,
`Telefone`/`Phone`, `E-mail`, `Horário`/`Hours`. The value is usually the very
next template literal.

## 3. Recover the brand palette and type choices

The built CSS file is not minified as aggressively and is worth reading
directly for the actual design tokens in use:

```bash
grep -oP '#[0-9a-fA-F]{3,8}' assets/index-XXXXXXXX.css | sort | uniq -c | sort -rn
grep -oP 'font-family:[^;]+;' assets/index-XXXXXXXX.css | sort -u
```

The most-repeated hex values are the real brand palette — use them as the
starting point for the new token system in `frontend-design`'s process,
rather than picking a generic default. This keeps a redesign feeling like an
evolution of the brand instead of an unrelated reskin.

## 4. Recover real images

Image assets in the build folder (usually under `assets/` or `images/`) are
the real, final-quality photography/artwork already in use — copy them into
the new site rather than sourcing or generating replacements. Actually look
at each one with `view` before reusing it; confirm it's still a good fit for
the new design rather than assuming from the filename.

## 5. Sanity-check what you found

Before designing, restate the extracted content back in plain terms (product
list with prices, contact details, hours, taglines) so you're building from
verified facts, not from a half-read grep dump. If a critical fact you'd
expect (price, phone number, address) genuinely isn't in the bundle, don't
invent it — ask the user or leave a clearly marked placeholder.
