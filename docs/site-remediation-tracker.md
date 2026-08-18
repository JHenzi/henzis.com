# Site Remediation Tracker

**Status:** all P0 resolved 2026-08-17 (committed `ef448ce`, `8a30a38`) — 3 items open
**Opened:** 2026-08-17
**Scope:** fork residue from `ctrimm/astro-genai-startup-theme` that is live on henzis.com
and makes false statements under Henzi's Services LLC's name.

> **Not legal advice.** I'm flagging factual inaccuracies and claims that don't match
> reality. Whether any of it creates actual liability is a question for a lawyer. The
> factual findings below are verified against the source files; the risk framing is my
> read, not a legal opinion.

---

## Summary

The homepage is clean. `index.astro` composes Hero / Products / MLSSpotlight / Pacalaca /
WSJF / Pricing / Gifts / FAQ — all genuinely rewritten for Henzi's Services LLC. `about.astro`
is clean too.

**The legal pages are not.** `privacy.astro` and `terms.astro` are the theme's boilerplate
for a fictional company called "GenAI," published verbatim under your LLC. They state a
business address you don't occupy, a phone number you don't own, security certifications you
don't hold, and bind visitors to arbitration with an entity that doesn't exist.

Three theme demo pages are also live and in the sitemap, one of which displays fabricated
usage numbers and false compliance badges.

| Sev | Count | Status | Theme |
|---|---|---|---|
| **P0** | 6 | ✅ all resolved | False factual claims live under your company name |
| **P1** | 4 | 2 resolved, 2 open | Broken/misleading, not false-claim severity |
| **P2** | 3 | 1 resolved, 2 open | Cleanup |

There was no `robots.txt`, and `@astrojs/sitemap` lists every page — so all of this was
crawlable and submitted for indexing.

### Resolution — 2026-08-17

Ten files deleted, three edited. Committed as `ef448ce`; docs as `dfc9b8e`.
**Committed is not deployed** — see the deploy note at the end of this file.

| Deleted | Why |
|---|---|
| `src/pages/privacy.astro` | P0-1, P0-2 |
| `src/pages/terms.astro` | P0-3, P0-4 |
| `src/pages/advanced-components.astro` | P0-5, P0-6, P2-1 |
| `src/pages/changelog.astro` | P2-1 |
| `src/pages/dashboard.astro` | P2-1 |
| `src/pages/components.astro` | P2-1 |
| `src/pages/markdown-page.md` | P2-1 |
| `src/components/CookieConsent.tsx` | P1-1, P1-3 |
| `src/components/SocialProof.tsx` | P0-5, P0-6 — deleting the page orphaned it, but the fabricated counters and false "SOC 2 Certified" badge lived in this file. Removed so it can't be wired back up. |

| Edited | Change |
|---|---|
| `src/layouts/main.astro` | Dropped the `CookieConsent` import and render |
| `src/components/CommandPalette.tsx` | Removed Components/Changelog/Dashboard entries (now dead); added About; dropped the newly-unused `Settings` icon import |
| `src/pages/404.astro` | `#features` → `#products` — `#features` was a dead anchor; no such id exists on the homepage |

Verified post-build against a clean `dist/`: sitemap is down to `/` and `/about/`, and the
site builds 3 pages (`/`, `/about/`, `404`).

> ⚠️ **The first verification pass was wrong and reported a false all-clear.** Two separate
> grep traps, both worth knowing about for any future audit of this repo:
>
> 1. The sweep used `grep -r ... dist/ | grep -v "_astro"` to skip bundled JS. Astro emits
>    each page as one long line containing *both* the page text and the `/_astro/…` asset
>    links, so that filter discarded entire matching lines. Exclude the **directory**
>    (`--exclude-dir=_astro`), never filter by line content.
> 2. `dist/index.html` contains a literal NUL byte (offset 16902, inside the VOTE card's
>    third `<li>`, emitted by the React 18 SSR render — there is no NUL anywhere in `src/`).
>    `file` classifies it as binary data, so **grep silently skips the homepage entirely**
>    unless you pass `-a`.
>
> Together these hid `404.astro`'s `Page Not Found - GenAI` title through a full "clean"
> report. Re-verified binary-safe with
> `grep -rniaEo … dist/ --exclude-dir=_astro`: genuinely clean.

**Follow-up, same day:** two things were missed in the first pass and fixed after review —
`404.astro:8` still carried the title `Page Not Found - GenAI`, and the dead `/contact`
links were removed from both `404.astro` and `CommandPalette.tsx` rather than left pointing
at a page that doesn't exist. `/contact` now has no inbound links anywhere; building it
means re-adding them (see `contact-form-plan.md` §5).

---

## P0 — false claims currently live

### ✅ P0-1 · Privacy policy is written for a fictional company
- [x] **Resolved** — file deleted

`src/pages/privacy.astro`

| Line | Claim |
|---|---|
| 5 | Page title: `Privacy Policy - GenAI` |
| 14 | "At GenAI, we take your privacy seriously" |
| 107 | "contact us at privacy@genai.com" |
| 150 | "Email: privacy@genai.com" |
| 151 | "Address: 123 AI Street, San Francisco, CA 94102" |
| 152 | "Phone: +1 (555) 123-4567" |
| 157 | "our Data Protection Officer can be reached at dpo@genai.com" |

`genai.com` is not a domain you control. `123 AI Street` is not a real address. `555-123-4567`
is a reserved fictional number. A privacy policy is a statement to the public about how a
named business handles their data — this one names the wrong business and gives four
contact routes that all go nowhere.

**Worst of the set is line 157.** That's a GDPR Article 37 Data Protection Officer contact.
If an EU visitor exercised a data-subject right against it, the request would vanish.

### ✅ P0-2 · Privacy policy claims security certifications you don't hold
- [x] **Resolved** — files deleted

`src/pages/privacy.astro:80-85`

- "Encryption in transit (TLS 1.3) and at rest (AES-256)"
- "Regular security audits and penetration testing"
- "SOC 2 Type II compliance"
- "GDPR and CCPA compliance"

Also `:127-128`, claiming Standard Contractual Clauses approved by the European Commission
are in place for international transfers.

SOC 2 Type II is a specific audited attestation from a licensed CPA firm. Claiming it
without the report is a false statement about your business. The others are the same shape.

### ✅ P0-3 · Terms of Service binds visitors to a fictional entity
- [x] **Resolved** — file deleted

`src/pages/terms.astro`

| Line | Claim |
|---|---|
| 5, 14 | "Welcome to GenAI" / title `Terms of Service - GenAI` |
| 203-205 | Governed by California law; disputes resolved in San Francisco County courts |
| 211 | "contact us at legal@genai.com" |
| 217-219 | Binding AAA arbitration; **jury trial waiver; class action waiver** |
| 236-238 | legal@genai.com / 123 AI Street / +1 (555) 123-4567 |

Line 224 states these Terms are "the entire agreement between you and GenAI."

These terms set California law and San Francisco venue for a company that isn't yours, and
ask visitors to waive jury trial and class action rights on its behalf. This is the single
item I'd fix first — it's the one that purports to *take rights away* from people.

The correct governing law is wherever Henzi's Services LLC is actually registered. I don't
know that from the repo — `about.astro` never states the LLC's jurisdiction (it only says
the *Henzi Foundation* is Cincinnati-based, which is a separate 501(c)(3)). You'll need to
supply it.

### ✅ P0-4 · Terms promise SLAs and support you don't provide
- [x] **Resolved** — file deleted

`src/pages/terms.astro:112-121`

- "Pro tier: 99.9% uptime SLA"
- "Pro: Email support (24-hour response time)"
- "Enterprise: 24/7 dedicated support"

There is no Pro tier, no Enterprise tier, and no support desk. `Pricing.tsx` sells something
entirely different: Pacalaca free, MLS Writer "See plans," VOTE. The Terms describe an AI
API business — model APIs, SDKs, rate limits (`:31-35`) — that isn't what you sell.

### ✅ P0-5 · Fabricated usage numbers live on `/advanced-components`
- [x] **Resolved** — page deleted

`src/pages/advanced-components.astro:138` renders `<LiveUserCount client:load />` from
`src/components/SocialProof.tsx`.

- **`LiveUserCount`** starts at `1247` and increments by a random 0–2 every 3 seconds. It
  renders as "**1,247 users online**" with a live green pulse dot. It is a random number
  generator presented as live telemetry.
- **`StatsTicker`** displays "API Requests 124,567,890", "Active Users 45,231", "Growth
  Rate 234%" — hardcoded.
- **`RecentActivity`** generates fake events like "Sarah J. just signed up — San Francisco, US"
  from a name/location array.

This page is in the sitemap and crawlable. Fabricated social proof on a commercial site is
the kind of thing the FTC's endorsement rules exist for.

### ✅ P0-6 · False trust badges on the same page
- [x] **Resolved** — page deleted

`TrustBadges` in `src/components/SocialProof.tsx` renders: **"SOC 2 Certified"**,
**"GDPR Compliant"**, **"99.9% Uptime"**, **"24/7 Support"**.

Same problem as P0-2, but as a visual badge — which reads as a certification mark.

---

## P1 — misleading or broken

### ✅ P1-1 · Cookie banner asks consent for tracking that doesn't exist
- [x] **Resolved** — banner removed

`src/components/CookieConsent.tsx:70-72` tells every visitor: *"We use cookies to enhance
your browsing experience, serve personalized content, and analyze our traffic."*

**I checked the built output. None of that is true.** The only external hosts in `dist/` are
`fonts.googleapis.com`, `fonts.gstatic.com`, and your own properties (`mlswriter.app`,
`pacalaca.app`, `vote.henzi.org`, `henzi.org`, `nlp.henzi.org`). There is no Google
Analytics, Plausible, Fathom, Umami, Matomo, PostHog, Hotjar, Segment, or Meta pixel
anywhere in the source or the build. The site sets no cookies and does no analytics.

The banner's Accept/Reject/Customize writes `localStorage["cookie-consent"]` and **nothing
in the codebase ever reads it back.** The Analytics and Marketing toggles control nothing.

Two options — either is defensible, but pick deliberately:
- **Remove the banner.** No cookies, no tracking, nothing to consent to. Simplest and most
  honest. This is what I'd do.
- **Keep it and make it accurate** if you plan to add analytics soon — but then the toggles
  must actually gate the loading of whatever you add.

### P1-2 · Google Fonts leaks visitor IPs to a third party
- [ ] **Decide**

`src/layouts/main.astro:16-21` preconnects and loads fonts from `fonts.googleapis.com` /
`fonts.gstatic.com` on every page. Every visitor's IP goes to Google before any consent
interaction.

This is genuinely the *only* third-party request the site makes, and it's the one the
cookie banner doesn't mention. German courts have found unconsented Google Fonts embedding
to violate GDPR. Self-hosting the three families (Bricolage Grotesque, Instrument Serif,
Space Mono) via `@fontsource` removes the issue entirely and makes the site faster.

### ✅ P1-3 · Cookie banner links to a non-existent anchor
- [x] **Resolved** — banner removed

`CookieConsent.tsx:74` links to `/privacy#cookies`. The privacy page's heading at `:110` is
`<h2>Cookies and Tracking</h2>` with **no `id` attribute**. The link lands at the top of the
page. Moot if P1-1 removes the banner.

### P1-4 · `/contact` doesn't exist
- [ ] **Fix**

Was linked from `404.astro` and `CommandPalette.tsx`; both links removed 2026-08-17. There
is still no `src/pages/contact.astro`.
Fully specced separately in [`contact-form-plan.md`](./contact-form-plan.md).

Coupled to this tracker: the P0 fixes need somewhere to point people. `/contact` is the
natural replacement for all seven bogus addresses and phone numbers.

---

## P2 — cleanup

### ✅ P2-1 · Three theme demo pages are live and indexed
- [ ] **Decide**

| Page | Title | In sitemap |
|---|---|---|
| `/changelog` | `Changelog - GenAI` | ✅ |
| `/dashboard` | `Dashboard - GenAI` | ✅ |
| `/components` | `Components - GenAI` | ✅ |
| `/advanced-components` | (hosts P0-5 and P0-6) | ✅ |
| `/markdown-page` | `Markdown + Tailwind` | ✅ |

`changelog.astro` invents a release history that never happened (e.g. "Fixed timezone
display issues in analytics"). These are the theme's showcase pages — useful as a local
component reference, no reason to be public.

Recommended: delete, same as `/blog`. If you want them as a reference, keep them out of the
sitemap and add a `robots.txt`. Deleting `/advanced-components` resolves P0-5 and P0-6 at
the same time.

### P2-2 · `Testimonials.tsx` — verify before it ever ships
- [ ] **Verify**

**Not currently live** — nothing imports it, so this is dead code, not an active problem.
Flagging it so it doesn't get wired up later without a check.

It contains three MLS Writer testimonials: "Alex P., Realtor" and "Sarah, Realtor Assistant"
with `api.dicebear.com` generated cartoon avatars, plus a third with an empty name and role.
Under the heading "MLS Writer App is loved by real estate teams."

I have no way to tell whether these quotes are real. **You do.** If they're real people who
agreed to be quoted, it's fine and only the placeholder avatars need attention. If they're
theme filler or paraphrased, they can't go live. Either delete the file or confirm each quote.

### P2-4 · Eight orphaned theme components remain
- [ ] **Decide**

Deleting the demo pages left these with nothing importing them. All are upstream theme
components, none are referenced by the homepage or About page:

`ChatInterface`, `ComponentTabs`, `Features`, `FileUpload`, `MetricsDashboard`,
`PricingCalculator`, `Testimonials`, `ToastDemo`

They cost nothing at runtime — Astro tree-shakes them out, and the build is unchanged. But
they're dead weight in the repo and a source of confusion later. `Testimonials` is the one
that matters (see P2-2); the rest are safe to delete whenever.

Not deleted unilaterally — say the word and they're gone in one commit.

### P2-3 · No `robots.txt`
- [ ] **Fix**

`public/robots.txt` doesn't exist. Not a problem by itself, but it's the lever for keeping
demo pages out of search results if you'd rather keep them than delete them.

---

## Verified as fine

So you know where *not* to spend time:

- `src/pages/index.astro` and every component it imports — Hero, Products, MLSSpotlight,
  Pacalaca, WSJF, Pricing, Gifts, FAQ. Real content about real products.
- `src/pages/about.astro` — no GenAI references, no fake claims.
- `src/components/Footer.tsx`, `Header.tsx` — correct company name, real product links.
- `FAQ.tsx` — accurate descriptions of MLS Writer, Pacalaca, VOTE, WSJF, and Henzi's
  Services LLC.
- No analytics, trackers, or pixels anywhere (see P1-1).

---

## Suggested order

The first commit should be the one that stops the site making false statements. Everything
else can follow at a normal pace.

| # | Work | Clears |
|---|---|---|
| **1** | Delete `/advanced-components`, `/changelog`, `/dashboard`, `/components`, `/markdown-page` | P0-5, P0-6, P2-1 |
| **2** | Replace `privacy.astro` and `terms.astro` — or take them down until rewritten | P0-1 → P0-4 |
| **3** | Remove `CookieConsent` from `main.astro` | P1-1, P1-3 |
| **4** | Build `/contact` per [`contact-form-plan.md`](./contact-form-plan.md) | P1-4 |
| **5** | Self-host fonts via `@fontsource` | P1-2 |
| **6** | Delete `Testimonials.tsx` or verify the quotes; add `robots.txt` if keeping any demo pages | P2-2, P2-3 |

**On step 2:** deleting the two pages outright is safer than leaving wrong ones up, but a
site selling software with no privacy policy has its own problems — MLS Writer and Pacalaca
presumably do collect user data, and app stores and payment processors ask for one. The
honest short-term move is a short, true policy describing *this marketing site* (no
cookies, no tracking, no accounts, form submissions go to a named processor), with the
product-specific policies living with the products. That's a page you can write truthfully
in an hour, unlike the current one.

**Nothing on the site links to the legal pages.** I grepped every `href` and `withBase()`
call in `src/`: the *only* link to `/privacy` anywhere is the cookie banner
(`CookieConsent.tsx:74`), and **nothing at all links to `/terms`**. Not the footer, not the
header, not the FAQ.

That cuts two ways. It lowers the odds a visitor has read them — but it also means these
pages exist purely as indexable public documents making false claims, with no navigational
reason to keep them. And once step 3 removes the cookie banner, `/privacy` becomes an orphan
too. If you'd rather not rewrite them right now, deleting both is a two-file change with no
link cleanup required.

---

## Verification notes

Everything above was read from the source files rather than inferred, on 2026-08-17 at
commit `08c4e68`:

- Both legal pages read end to end (164 and 252 lines).
- Absence of analytics confirmed by grepping `src/` and `public/` for the major vendors,
  then by extracting every external hostname from the built `dist/` HTML.
- Sitemap contents confirmed from `dist/sitemap-0.xml` after a local `npm run build`.
- `Testimonials.tsx` confirmed unreferenced by grepping all `.astro` and `.tsx` imports.
- `SocialProof` usage confirmed live at `advanced-components.astro:138`.
- Line numbers reflect the working tree *after* the `/blog` removal, which shifted
  `404.astro` up by three lines.

**One caveat:** `/blog` was deleted in the working tree but **is not committed**. The
uncommitted deletion of `.github/workflows/deploy.yml` and the `src/lib/utils.ts` edit from
another session are also still sitting in the index. None of this is live until it's
committed and deployed — and conversely, **every P0 above is live right now.**
