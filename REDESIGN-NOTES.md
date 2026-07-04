# Redesign Notes — "Henzi Human Software" (July 2026)

The site now implements the print-shop design system from `Henzi Human Software.dc.html`:
paper + ink palette, 3px borders, hard offset shadows, Bricolage Grotesque headlines,
Instrument Serif italic accents, Space Mono labels, flat accent colors (red / blue /
yellow / green / purple), dotted-paper texture, driven by CSS variables in
`src/styles/global.css` — that file is the single source of truth for the palette.

**Update (July 2026):** the comp's vivid one-off section colors are now matched
literally, not toned down — this was corrected after John flagged the first pass as
too conservative ("bland claude beige... don't be lazy"). The page background is the
bright green wash (`#93F09C`, `.bg-page`), the nav is solid purple (`#AA93F0`,
`.bg-nav`), the FAQ band is orange (`#FFA000`, `.bg-faq`), and the MLS section uses the
literal green→tan gradient (`linear-gradient(180deg,#7CBA7E,#D59F69)`, `.bg-mls-gradient`)
— utilities live in `global.css`'s `@layer utilities` block, applied on the relevant
section/`<body>` classNames. These four are intentionally **not** theme-aware — they're
fixed literal values regardless of light/dark, exactly matching the source comp's own
inline styles (which also hardcoded them outside the `--paper`/`--ink` variable system).
One consequence inherited from the comp itself: the MLS section's heading text still
uses the theme-driven ink color, so in dark mode it can read light-on-light against the
fixed light gradient — the comp has the same issue; worth a dedicated fix (e.g. force
dark ink there regardless of theme, as already done for the intro paragraph) if it
bothers you in practice.

A related, unrelated-to-taste bug is also fixed: an earlier manual edit to
`global.css` redefined `--background`, `--foreground`, `--card`, `--border`, and
`--muted-foreground` as raw hex, but `tailwind.config.mjs` was still wrapping those in
`hsl()` — `hsl(#f4ecdd)` is invalid CSS, so those utilities (`bg-background`,
`text-foreground`, `bg-card`, etc.) were silently rendering nothing across the whole
site. Fixed by having Tailwind reference those five tokens directly (no `hsl()`
wrapper); everything else (primary, secondary, muted, accent, popover, destructive,
ring, input) is untouched and still HSL-triplet-based.

## Deliberate deviations from the comp

- **CTAs go straight to the products** (mlswriter.app, pacalaca.app, vote.henzi.org)
  instead of the comp's in-page anchors. Decision pending below on deep-dive pages.
- **Riso placeholder replaced** with the real screenshot `public/MLSWriterOutputPreview.png`
  ("actual output · unedited" caption). A second visual — the input side (address in →
  listing out) — would make the before/after story stronger.
- **Vibe-coder line preserved** from the previous hero as a footnote link
  ("▲ World's first full-stack vibe coder" → nlp.henzi.org).

## Content needs / open questions (revisit these)

1. **Testimonial attribution.** The comp's MLS testimonial said "Alex P. · Realtor" but
   our real quote ("The problem agents have is knowing where to start…") had no name
   attached in the old Testimonials data. Currently shown as "Working Realtor · early
   user" with a lightly edited quote. **Need:** a real, attributable quote (name +
   permission), ideally one per product. The old Testimonials section was dropped —
   its other two quotes were filler ("The site's looking good.").
2. **Main-page brevity vs. deep dives.** Current call: the landing page stays brief
   (comp structure) and CTAs push users to each product's own landing page, since they
   all describe themselves well. *Alternative:* add `/mls-writer`, `/pacalaca`, `/vote`
   deep-dive pages on this site for SEO surface and storytelling we control. If we do
   that, the spotlight sections become teasers linking inward. Not decided.
3. **About page split.** All content was kept on `/about` (nothing lost). It's long.
   Candidate split: `/about` = shop + mission + products, `/joe` (or `/founder`) =
   the six-stamp career timeline + vibe-coder story. More content is better — a
   dedicated founder page gives room to grow rather than trimming.
4. **Foundation presence on the landing page.** Partially addressed: the "Gifts from
   the Henzi Foundation" section (`Gifts.tsx`, after Pricing — the "but wait, there's
   more" beat) now puts the Foundation on the landing page with a "where our excess
   income goes" link. The 100%-impact promise itself still lives only on /about (and
   llms.txt) — a small stamp for it remains worth considering.
   *Slogan (July 2026):* footer tagline is now **"We drive the AI. Not the other way
   around."** — chosen by John over "Humans at the wheel. AI under the hood." Use this
   voice (humans directing AI) for future taglines.
5. **FAQ copy** was carried over verbatim (7 questions). The comp had 6 shorter ones.
   Fine for now; worth a copy pass to match the new voice (shorter, warmer).
6. **Pricing "See plans"** on MLS Writer links to mlswriter.app — confirm actual plan
   names/prices worth surfacing here, or keep deferring to the product site.
7. **Images.** Hero collage is pure SVG/type (good). Wanted: listing input/output pair
   (see above), maybe a Pacalaca screenshot for its section — currently type-only tiles.
8. **Secondary pages** (privacy, terms, blog, changelog, components demo pages) inherit
   the new palette via the remapped Tailwind tokens but haven't been hand-restyled.
   Components demo pages (`/components`, `/advanced-components`, `/dashboard`) are
   theme-template leftovers — decide whether to keep, restyle, or remove.
9. **llms.txt** unchanged by the redesign (content, not design). Still current.
