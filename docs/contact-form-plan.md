# Contact Form Plan — `henzis.com/contact`

**Status:** proposal, not yet implemented
**Written:** 2026-08-17

`/contact` doesn't exist. It was linked from two places until 2026-08-17, when both dead
links were removed. This documents what to build there and which form backend to point it at.

---

## 1. The problem

| Location | Link | State |
|---|---|---|
| `src/pages/404.astro` | `${base}contact` | **Removed 2026-08-17** — was a dead link to the 404 page *from* the 404 page |
| `src/components/CommandPalette.tsx` | `withBase("/contact")` | **Removed 2026-08-17** — was dead |

Both links were deleted rather than left pointing at a missing page. **Nothing on the site
links to `/contact` now**, so building the page means re-adding them (see §5).

There is no `src/pages/contact.astro`. The site's only working contact path is the
`henzi.org` link in the footer.

Note that `Header.tsx` does **not** link to contact — the nav is Tools / MLS Writer /
Pacalaca / VOTE / Pricing / About. So this is a genuine gap, not just a broken link:
a visitor who wants to reach Henzi's Services LLC has nowhere obvious to go.

**Same class of bug as the `/blog` removal**, but the opposite fix. `/blog` was fork filler
with no reason to exist. A contact page on a company site has a reason to exist — a
business selling MLS Writer and Pacalaca should be reachable.

---

## 2. Constraint: the site is static

`astro.config.js` has no `output` set, so it's `static` — `npm run build` emits HTML to
`dist/`, rsynced to nginx on Hetzner. **There is no server-side request handling.** Astro
Actions and API routes are unavailable without switching to an SSR adapter, which would
mean running a Node process on the box and is far more machinery than one form justifies.

So the form must POST somewhere that isn't henzis.com. Three shapes:

1. **Third-party form backend** — form POSTs to a vendor API, vendor emails you. ← this doc
2. **Self-hosted endpoint** — a small service on the Hetzner box behind nginx (§7)
3. **`mailto:` link** — zero infra, but exposes the address to scrapers and breaks for
   anyone without a configured mail client. Fine as a fallback *next to* a form, not as the
   whole answer.

---

## 3. Requirements

Drawn from how the rest of this site is built, and from the constraints already written
down in [`microblog-plan.md §10`](./microblog-plan.md):

- **No third-party JavaScript.** The microblog plan explicitly rules out embeds and scripts
  that phone home. A form backend must work via a plain `fetch()` to its API — no vendor
  `<script>` tag, no widget. This rules out anything embed-based.
- **Free at this volume.** A personal-company contact form gets single-digit submissions
  most months.
- **No secret in the build.** Anything in `dist/` is public. The backend's key must be
  designed to be public (an alias, not a credential).
- **Spam resistance without a CAPTCHA.** A public endpoint gets scraped and hammered.
  Honeypot field minimum; no hCaptcha unless spam actually becomes a problem — a CAPTCHA is
  a third-party script and a real accessibility cost.
- **No account required to reach you.** No "sign in to send a message."

---

## 4. Options compared

Free tiers verified against primary sources, August 2026. Vendor comparison blogs on this
topic are almost entirely competitors ranking themselves first — the numbers below come
from each vendor's own docs, and the ones I couldn't verify at the source are marked.

| Service | Free tier | Key is public-safe | Script-free POST | Notes |
|---|---|---|---|---|
| **Web3Forms** | 250 submissions/mo | ✅ explicitly ("alias to your email address") | ✅ `POST https://api.web3forms.com/submit` | `botcheck` hidden-field spam check built in; hCaptcha optional |
| **Formspree** | 50 submissions/mo, unlimited forms, 2 notification emails, 30-day retention | ✅ endpoint URL is public | ✅ | Most established; free tier is the tightest here |
| **Formspark** | 250 submissions **total**, not monthly | ✅ | ✅ | Then $25 one-time for 50,000 that never expire — see below |
| **FormSubmit** | Advertised free | — | — | ⚠️ Could not verify: site did not respond when checked. Don't pick without confirming it's still maintained |

**Recommendation: Web3Forms.**

- 250/mo free is 5× Formspree's allowance and vastly more than this site will use.
- The access key is *designed* to be public and sit in static HTML. That's the exact
  property a static build needs, and it's documented rather than incidental.
- Plain `fetch` to a documented JSON API. No vendor script, so the "no third-party
  JavaScript" rule holds.
- Getting a key requires only entering an email address — it's mailed to you.

**Worth knowing about Formspark:** $25 once for 50,000 submissions that never expire is
arguably the better long-run deal for a site like this — at realistic volume that's a
lifetime purchase, with no monthly limit to breach and no account to lapse. If you'd rather
pay once and stop thinking about it than depend on a free tier's continued generosity,
that's the one. Not free, so not the recommendation, but it's the honest alternative.

**Caveats on Web3Forms, stated plainly:**

- Free-tier submissions are reportedly deleted after 30 days, and the free dashboard has no
  export. ⚠️ This came from a competitor's comparison page — their privacy policy returned
  403 when checked, so **verify retention and data location directly before relying on it.**
  Mitigation regardless: email is the system of record. Every submission lands in your
  inbox, so the dashboard is a convenience, not storage you depend on.
- Their spam protection is a hidden-field bot check, not scoring. Adequate at this volume.
- It's a free service from a small vendor. If it disappears, swapping the endpoint is a
  ten-line change — which is the real argument for keeping the integration this thin.

---

## 5. The page

`src/pages/contact.astro`, matching the conventions in `about.astro` — `Layout` with a
`title` prop, `container mx-auto px-4`, the `mono-label` / `clamp()` heading pattern.

The form itself should be a React island (`src/components/ContactForm.tsx`, `client:load`)
because it needs submit state, validation, and a success message. Everything else on the
page stays static Astro.

```tsx
// src/components/ContactForm.tsx — sketch, not final
const ACCESS_KEY = "your-public-access-key";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", "New message from henzis.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      setStatus(json.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }
  // ... name / email / message fields, hidden `botcheck`, submit button
}
```

Points that matter:

- **`botcheck`** must be a hidden input styled `display:none` — bots fill it, humans can't.
  Do not use `type="hidden"`; some bots skip those. Use a visible-type input hidden in CSS,
  with `tabindex="-1"` and `autocomplete="off"` so keyboard users never land on it.
- **Keep a `<form action>` fallback** so the form degrades to a normal POST if the island
  hasn't hydrated. Web3Forms supports plain HTML form posts and redirects back.
- **Show the email address in plain text too.** If the form breaks, a visitor should still
  be able to reach you. Obfuscate lightly or accept the scraping.
- **Handle the 429.** The API returns "Too many requests" under rate limiting; the error
  state should say "try again in a minute," not "something went wrong."
- **Never echo submitted content back into the DOM as HTML.** Plain text only.

Then wire it up:

- Add `{ label: "Contact", href: withBase("/contact") }` to `navItems` in `Header.tsx` —
  otherwise the page exists but nothing points at it except the 404 page.
- Re-add the Contact entry to `CommandPalette.tsx` (`id: "contact"`, `icon: Mail` — the
  `Mail` import was dropped when the dead entry was removed, so restore it too).
- Re-add the Contact link to the helpful-links row in `404.astro`.
- Add a footer link.

---

## 6. Privacy policy — a blocker, not a nice-to-have

**This section is the reason `/contact` can't just be shipped when the code is ready.**

As of 2026-08-17 the site has **no privacy policy and no terms**. `privacy.astro` and
`terms.astro` were deleted because they were fork boilerplate for a fictional company
making false claims — see [`site-remediation-tracker.md`](./site-remediation-tracker.md).
Deleting them was right, and while the site collects nothing, having neither is defensible:
no accounts, no cookies, no analytics, no forms, nothing to disclose.

**A contact form ends that.** The moment this page goes live, henzis.com starts collecting
names, email addresses, and free-text messages from the public and transmitting them to a
third-party processor. That is exactly the situation a privacy policy exists to describe.

### Required before `/contact` ships

- [ ] **A real privacy policy exists at `/privacy`.** Short and true beats long and
      borrowed. It needs to cover, at minimum:
  - What the form collects (name, email, message — and nothing else; don't collect a phone
    number you won't use).
  - **Who processes it.** Name the vendor explicitly — "Form submissions are transmitted to
    and processed by Web3Forms" — and link their policy. This is the disclosure that makes
    the third-party choice in §4 lawful to make quietly.
  - Where it ends up (your inbox) and how long you keep it.
  - How someone asks you to delete their message, and at what address.
  - That the site sets no cookies and runs no analytics — still true, and worth stating
    plainly since it's unusual.
- [ ] **Google Fonts is resolved or disclosed** (P1-2 in the tracker). It's currently the
      site's only third-party request. A policy claiming "no third parties" while every page
      load hands a visitor's IP to Google would be a *new* false claim — precisely the thing
      this cleanup was about. Either self-host the fonts via `@fontsource` before the policy
      goes up, or disclose the transfer in it.
- [ ] **The LLC's registered jurisdiction is confirmed.** Needed for the governing-law line
      and for naming the data controller. The repo doesn't state it; `about.astro`'s
      Cincinnati reference is the separate Henzi Foundation 501(c)(3), not the LLC.
- [ ] **The contact route is real and monitored.** Whatever address the policy names for
      deletion requests has to be one you actually read.

### Sequencing

The privacy policy and the contact page ship in the **same commit**, or the policy ships
first. Not after. A form that collects personal data with no policy backing it is the same
category of problem as the old policy that described a company that didn't exist — just
inverted.

**Terms of service are not required for this.** A marketing site with a contact form doesn't
need terms; the deleted ones described an AI API business with paid tiers and SLAs. Leave
`/terms` gone unless you're selling something directly from this domain. MLS Writer and
Pacalaca need their own terms, on their own domains, covering what those products actually do.

---

## 7. The alternative: self-host it

Worth writing down, because the microblog plan's whole argument is "no vendor, git is the
database," and a form backend is a vendor.

You already have the Hetzner box and nginx. A ~40-line endpoint (Go binary or a small
Python/Node service under systemd) behind `location /api/contact` that validates, rate
limits by IP, and hands off to a mail relay would work, cost nothing beyond what the box
already costs, and keep visitor data entirely on infrastructure you control.

**Why it's not the recommendation:** it puts a network-exposed, unauthenticated,
user-input-accepting process on the box that serves the site — the one piece of attack
surface the current static setup completely lacks. It needs patching, monitoring, rate
limiting that actually works, and an SMTP path that doesn't get you classified as spam.
That's real ongoing work for a form that might get five messages a month.

The third-party service keeps the box a pure static file server. That's worth more than
vendor independence here. Revisit if the volume ever justifies it.

---

## 8. Build order

| Phase | Work | Result |
|---|---|---|
| **0** | Verify Web3Forms retention/data-location claims (§4); get an access key | Decision confirmed at the source |
| **1** | Confirm the LLC's registered jurisdiction; self-host fonts or decide to disclose (§6) | The two unknowns the policy depends on are resolved |
| **2** | Write the privacy policy (§6) | Legal basis exists before anything collects data |
| **3** | `contact.astro` + `ContactForm.tsx` + honeypot + no-JS fallback | Page exists, 404/palette links work |
| **4** | Header nav + footer link | Reachable without guessing the URL |
| **5** | Submit a real test message end-to-end; confirm it arrives | Actually works |
| **6** | Deploy — `npm run build`, rsync `dist/` to Hetzner | Live |

**Phases 1–2 come before phase 3 deliberately.** The page is maybe two hours of work and
the policy is the thing gating it, so building the form first just means it sits finished
and unshippable. Do the boring part first.

Phase 6 is listed because it's easy to forget: **pushing to GitHub does not deploy this
site.** There is no CI workflow — the fork's GitHub Pages one was deleted as residue, and
henzis.com is nginx serving `dist/` from Hetzner. Nothing reaches production without a
build and an rsync. See [`microblog-plan.md §9`](./microblog-plan.md) for the automation
that would change that.

---

## Appendix: what was checked

- Formspree free-plan limits — [Formspree account limits docs](https://help.formspree.io/articles/account-management/account-limits) (updated 2025-12-22): 50 submissions/mo, unlimited forms and projects, two notification emails, 30-day retention.
- Web3Forms API shape and access-key model — [Web3Forms API reference](https://docs.web3forms.com/getting-started/api-reference) and [web3forms.com](https://web3forms.com/): 250 submissions/mo free, `access_key` public-safe, `botcheck` field, 200/400/429/500 JSON responses.
- Formspark pricing — [formspark.io/pricing](https://formspark.io/pricing/) via secondary sources: 250 submissions one-time, $25 one-time for 50,000 non-expiring.
- Web3Forms privacy policy — **not verified**, returned HTTP 403.
- FormSubmit — **not verified**, no response.
