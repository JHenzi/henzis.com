# Redesign Notes — "Henzi Human Software" (July 2026)

The site now implements the print-shop design system from `Henzi Human Software.dc.html`:
paper + ink palette, 3px borders, hard offset shadows, Bricolage Grotesque headlines,
Instrument Serif italic accents, Space Mono labels, flat accent colors (red / blue /
yellow / green / purple), dotted-paper texture. **No gradients anywhere.** Light and
dark are paper/ink inversions of the same system, driven by CSS variables in
`src/styles/global.css` — that file is the single source of truth for the palette.

## Deliberate deviations from the comp

- **One-off hardcoded colors dropped.** The comp had a bright-green page background
  (`#93F09C`), a purple nav (`#AA93F0`), an orange FAQ band (`#FFA000`), and a
  green→tan *gradient* on the MLS section. These don't adapt to dark mode and one is
  a gradient (against the brief). They're replaced with theme-aware tints:
  MLS section = 8% red over paper, FAQ = 16% yellow over paper. If you want louder
  colored section bands, tweak those `color-mix()` percentages in
  `MLSSpotlight.tsx` / `FAQ.tsx` — one-line changes.
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
