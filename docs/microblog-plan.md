# Microblog Plan — `/notes`

**Status:** proposal, not yet implemented
**Written:** 2026-08-16
**Domain:** undecided — see §11a

A private-Twitter-shaped microblog built on the existing Astro codebase: I have a thought,
I say it into my phone, it's live in ~90 seconds with a permalink and an RSS feed. No
comments, no follows, no likes, no accounts — just publishing, plus the plumbing that lets
other people follow and share.

**Subject matter is unrestricted** — markets, politics, religion, tech, whatever. It's a
personal opinion feed, not a vertical. That's assumed throughout, and it's the reason §11a
(which domain this lives on) and §11b (per-topic feeds) exist.

---

## 1. The shape of the thing

Three separate problems, solved independently:

| Layer | Question | Answer |
|---|---|---|
| **Capture** | How does a thought become a file? | iOS Shortcut / Siri → GitHub Contents API |
| **Build** | How does a file become HTML? | Astro content collection → `npm run build` in CI |
| **Publish** | How does HTML reach Hetzner? | rsync over SSH, atomic symlink swap |

The design principle: **git is the database.** Every note is a markdown file in this repo.
That gives edit history, undo (`git revert`), offline authoring from the Mac, no backups to
manage, no vendor, no monthly bill, and no runtime to secure. The "hosted service" role is
played by GitHub — which is already in the loop.

---

## 2. Fork residue — cleared

`.github/workflows/deploy.yml` built and deployed to **GitHub Pages**, inherited from the
upstream theme (`ctrimm/astro-genai-startup-theme`). It was never how this site shipped —
henzis.com is nginx serving `dist/` on Hetzner, and `jhenzi.github.io` was not live.

**Removed** (2026-08-16). It's in git history if it's ever wanted. `withBase()` in
`src/lib/utils.ts` — the base-path helper that existed for Pages subdirectory hosting —
stays: with no `base` set in `astro.config.js` it's a no-op passthrough, and it's called in
20 places across 5 components. Its comment no longer claims to be about Pages.

`.github/` is now empty and gone, so §9's workflow is a clean first file there.

**One thing left to check by hand:** GitHub Pages may still be *enabled* in the repo
settings even though nothing serves from it. Repo → Settings → Pages → Source: **None**.

The microblog now needs a deploy path to Hetzner that fires on every push. Two options:

**A. Push-based (recommended).** GitHub Actions builds, then `rsync -az --delete` over SSH
to the Hetzner box using a deploy key stored as a repo secret.
- ✅ Fast (~60–90s end to end), build runs on GitHub's hardware, box needs no Node.
- ⚠️ An SSH key lives in GitHub secrets. Mitigate: dedicated `deploy` user, key restricted
  via `command=` in `authorized_keys`, write access only to the release directory.

**B. Pull-based.** A cron on the Hetzner box every 60s: `git fetch`; if `HEAD` moved,
`npm ci && npm run build` into a new release dir, swap symlink.
- ✅ No credentials in GitHub at all, no inbound access, nothing to leak.
- ⚠️ Build runs on the box (needs Node + ~1GB free RAM during build), up to 60s extra latency.

Recommendation: **A**, unless you'd rather not have a Hetzner key sitting in GitHub — in
which case **B** is genuinely fine for a microblog and one line of crontab.

---

## 3. Content model

New content collection at `src/content/notes/`. One file per note.

```
src/content/notes/
  2026-08-16-1432.md
  2026-08-16-2107.md
  2026-08-17-0903.md
```

Filename is `YYYY-MM-DD-HHmm` in local time — sortable, collision-resistant enough for a
human posting rate, and generated trivially by a Shortcut.

```markdown
---
date: 2026-08-16T14:32:00-05:00
tags: [markets]
---

Watching CVNA on Bloomberg. Inventory turns don't support that multiple —
I think it's a short at these levels.
```

```markdown
---
date: 2026-08-16T21:07:00-05:00
tags: [tech]
---

Every "AI-native" product I've tried this month is a text box with a system
prompt. The moat isn't the model, it's knowing what to do with the output.
```

Same file format regardless of subject. Tags are what separate them downstream (§11b).

Schema (`src/content/config.ts` — Astro 4 collections API, which is what `package.json`
pins):

```ts
import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    title: z.string().optional(),   // usually absent — notes are title-less
    link: z.string().url().optional(), // for link-posts
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
```

Notes:
- **No title by default.** A microblog post's "title" for RSS/OG purposes is derived: first
  sentence, truncated to ~80 chars. Set `title` explicitly only when you want one.
- **`draft: true`** exists for when Siri dictation mangles something and you want to fix it
  before it's public. The default path publishes immediately — that's the whole point.
- **`link`** turns a note into a link-post (headline links out, permalink still yours).

> If you ever bump to Astro 5, this becomes `src/content.config.ts` with the Content Layer
> `glob()` loader. Same schema, different wrapper.

---

## 4. Site surfaces

| Route | Purpose |
|---|---|
| `/notes/` | Reverse-chron stream, paginated ~50/page. Notes render in full — they're short. |
| `/notes/YYYYMMDDHHmm/` | Permalink. Stable forever. Full OG/Twitter card meta. |
| `/notes/tag/<tag>/` | Tag archive |
| `/notes/rss.xml` | Full-content RSS 2.0 — everything |
| `/notes/tag/<tag>/rss.xml` | Per-topic feed (see §11b — this matters more than it looks) |
| `/notes/archive/` | Everything, grouped by month, one line each |
| `/notes/feed.json` | JSON Feed 1.1 (same content, ~15 lines, some readers prefer it) |
| `/notes/search.json` | Build-time index for client-side search |

**Permalinks are the product.** They're what makes a note shareable and what an RSS reader
dedupes on. Pick the URL shape now and never change it. I'd use
`/notes/202608161432/` — opaque, sortable, no slug to regret.

**Pagination** uses Astro's `paginate()` in `src/pages/notes/[...page].astro`. Straight out
of the box for static output.

---

## 5. RSS — the "followers" mechanism

This is the only social feature that matters here, and it's free.

```bash
npm i @astrojs/rss markdown-it sanitize-html
npm i -D @types/sanitize-html
```

`src/pages/notes/rss.xml.js`:

```js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

const parser = new MarkdownIt();

export async function GET(context) {
  const notes = (await getCollection('notes', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date - a.data.date)
    .slice(0, 100);

  return rss({
    title: 'Joe Henzi — Notes',
    description: 'Short posts. Personal opinions, mine alone. Not advice of any kind.',
    site: context.site,
    items: notes.map((n) => ({
      link: `/notes/${idFor(n)}/`,
      pubDate: n.data.date,
      title: n.data.title ?? excerpt(n.body),
      description: excerpt(n.body),
      content: sanitizeHtml(parser.render(n.body)),
    })),
    customData: '<language>en-us</language>',
  });
}
```

Then in `src/layouts/main.astro`, so feed readers autodiscover it site-wide:

```html
<link rel="alternate" type="application/rss+xml"
      title="Joe Henzi — Notes" href="/notes/rss.xml" />
```

**Full content in the feed**, not excerpts. The notes are three sentences long; truncating
them to drive clicks would be silly.

**Per-tag feeds** reuse the same function. `src/pages/notes/tag/[tag]/rss.xml.js`:

```js
export async function getStaticPaths() {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const tags = [...new Set(notes.flatMap((n) => n.data.tags))];
  return tags.map((tag) => ({ params: { tag }, props: { tag } }));
}

export async function GET(context) {
  const { tag } = context.props;
  // ...identical to above, filtered to notes whose tags include `tag`,
  // with title: `Joe Henzi — ${tag}`
}
```

Each tag archive page then advertises its own feed via `<link rel="alternate">`, so a
reader sitting on `/notes/tag/tech/` sees a subscribe option for tech alone. See §11b for
why this is worth the 15 lines.

---

## 6. Sharing (no social platform required)

Per note, on the permalink page and inline in the stream:

- **Copy link** — one button, `navigator.clipboard`.
- **Share** — `navigator.share()` on mobile, which hands off to the OS sheet (Messages,
  Mail, Signal, whatever they use). Hidden via feature detection on desktop.
- **Intent links** — plain `<a href>` to X / Bluesky / Mastodon / LinkedIn compose URLs,
  prefilled with the note text + permalink. These are just links; **no third-party scripts,
  no embeds, no trackers, nothing that phones home.**
- **OG tags** on every permalink so the link unfurls properly wherever it's pasted:
  `og:title` (derived), `og:description` (note text), `og:type=article`,
  `article:published_time`, `twitter:card=summary`.

That covers "ways for people to share" without a single social feature on the site itself.

---

## 7. Search

Static site, so the index is built at build time.

**Start here:** an Astro endpoint at `src/pages/notes/search.json.ts` emitting
`[{id, date, tags, text}]` for every note, plus ~30 lines of client JS on `/notes/` that
filters as you type. At a few hundred short notes the whole index is well under 100KB —
smaller than one of the Unsplash images currently on `/blog`. No dependencies.

**Upgrade path:** if it passes ~1,000 notes or you want the whole site indexed, swap in
[Pagefind](https://pagefind.app/) as a postbuild step. It shards the index so the browser
only downloads what a query touches. Drop-in; nothing above needs to change.

---

## 8. Capture

### 8a. iPhone / Siri — the primary path

One Shortcut named **"Post Note"**. Naming it that is what makes *"Hey Siri, Post Note"*
work — Siri invokes shortcuts by name, so dictation comes free.

Steps:

1. **Dictate Text** (or *Ask for Input* when typing is better than talking)
2. **Choose from Menu** → your standing tags (`markets`, `politics`, `tech`, `faith`,
   `personal`, …) + a "none" option → variable `Tag`. One extra tap, and it's what makes
   the per-topic feeds in §11b actually work — tags added later, in bulk, never happen.
3. **Format Current Date** → `yyyy-MM-dd-HHmm` → variable `Stamp`
4. **Format Current Date** → ISO 8601 with timezone → variable `Iso`
5. **Text** action, building the file body:
   ```
   ---
   date: <Iso>
   tags: [<Tag>]
   ---

   <Dictated Text>
   ```
6. **Base64 Encode** the Text (⚠️ set *Line Breaks: None*)
7. **Get Contents of URL**
   - URL: `https://api.github.com/repos/JHenzi/henzis.com/contents/src/content/notes/<Stamp>.md`
   - Method: `PUT`
   - Headers:
     `Authorization: Bearer <TOKEN>`
     `Accept: application/vnd.github+json`
     `X-GitHub-Api-Version: 2022-11-28`
   - Request Body (JSON):
     `message` = `note: <Stamp>`
     `content` = the Base64 output
     `branch` = `main`
8. **Show Notification** with the resulting permalink

Surface it on the **Action Button**, a **Lock Screen widget**, and the **Share Sheet** (so
you can share a Bloomberg article straight into a link-post).

**Token:** a fine-grained PAT, scoped to *this repo only*, with **Contents: Read and write**
and nothing else. Worst case if the phone is compromised: someone writes files to a public
repo you control, and you revoke the token from the GitHub UI in ten seconds. That's a much
smaller blast radius than an SSH key or a self-hosted endpoint with a static bearer token.

> **This is the detail that makes the whole plan work:** a push made with a *user PAT*
> triggers `on: push` workflows. (A push made with the Actions `GITHUB_TOKEN` deliberately
> does not, to prevent recursion.) So posting from the phone kicks off the build with no
> extra webhook.

### 8b. Mac

The same Shortcut syncs to macOS Shortcuts via iCloud, so *"Hey Siri, post note"* works at
the desk too.

But when you're already at the keyboard, better:

```bash
note() {
  cd ~/Local\ Development/henzis.com || return 1
  local stamp=$(date +%Y-%m-%d-%H%M) iso=$(date -Iseconds)
  local f="src/content/notes/$stamp.md"
  printf -- '---\ndate: %s\ntags: []\n---\n\n%s\n' "$iso" "$*" > "$f"
  git add "$f" && git commit -qm "note: $stamp" && git push -q
  echo "→ https://henzis.com/notes/${stamp//-/}/"
}
```

With no argument it could drop you into `$EDITOR` instead. And `npm run dev` gives you a
live preview before pushing, which the phone path can't.

### 8c. Failure modes

- **No signal** → the Shortcut's HTTP call fails. Fallback: have the Shortcut catch the
  error and append the text to a note in Drafts/Apple Notes, then post it later from the Mac.
- **Dictation garbled it** → fix with a follow-up commit; the URL doesn't change. Or post
  with `draft: true` when you know conditions are bad.
- **Two notes in the same minute** → filename collision, second PUT fails with a 422.
  Rare; if it bites, add seconds to the stamp.

---

## 9. Deploy

Assuming path **A** from §2. This *replaces* the retired Pages workflow — new file,
`.github/workflows/deploy.yml`:

```yaml
name: Build and deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

concurrency:
  group: deploy
  cancel-in-progress: false   # never cancel — a queued note must still ship

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }
      - run: npm ci
      - run: npm run build
      - name: Deploy to Hetzner
        run: |
          install -m 600 -D /dev/stdin ~/.ssh/id_ed25519 <<< "${{ secrets.HETZNER_SSH_KEY }}"
          ssh-keyscan -H "${{ secrets.HETZNER_HOST }}" >> ~/.ssh/known_hosts
          rsync -az --delete -e ssh dist/ \
            deploy@${{ secrets.HETZNER_HOST }}:/var/www/henzis.com/releases/${{ github.sha }}/
          ssh deploy@${{ secrets.HETZNER_HOST }} \
            "ln -sfn /var/www/henzis.com/releases/${{ github.sha }} /var/www/henzis.com/current.new \
             && mv -T /var/www/henzis.com/current.new /var/www/henzis.com/current"
```

Nginx `root` points at `/var/www/henzis.com/current`. `mv -T` over a symlink is atomic, so
no visitor ever sees a half-copied site. Keep the last ~10 releases and prune the rest —
that also gives you an instant rollback by re-pointing the symlink.

`concurrency: cancel-in-progress: false` matters here: if you fire off two notes a minute
apart, the second build must not cancel the first mid-rsync.

---

## 10. Explicitly not building

Worth writing down so it doesn't creep in later:

- ❌ Comments, reactions, likes, follower counts
- ❌ Accounts, login, any database
- ❌ Analytics or tracking on note pages
- ❌ Social embed scripts (X/Bluesky embeds phone home; intent links don't)
- ❌ ActivityPub / fediverse federation — possible later via Bridgy Fed with zero code
  changes, but it's a social feature and you said you don't want one
- ❌ Webmentions

Anyone who wants to follow uses RSS. That's the design.

---

## 11. Scope: opinions on anything

This is a **personal opinion blog** — markets, politics, religion, tech, whatever's in
your head. Not a finance vertical. That's the design target, and nothing here restricts
what goes in it.

It does drive two decisions, though, and only one of them is interesting.

### 11a. Which domain (the real decision)

You have three identity surfaces and they carry very different weight:

| Home | What it signals | Notes |
|---|---|---|
| `henzis.com/notes` | Henzi's Services **LLC** | A real estate agent evaluating MLS Writer finds your religious and political views on the vendor's site. Not fatal — plenty of founders do exactly this — but it's a business-brand decision, not a neutral default. |
| `notes.henzi.org` | Henzi **Foundation** | ⚠️ **Probably the worst option, and the one non-obvious point in this section.** If the Foundation is a 501(c)(3), it is flatly prohibited from campaign intervention for or against candidates (the Johnson Amendment), and lobbying is capped. Personal political posts on the Foundation's domain create a problem that doesn't exist anywhere else. I don't know the Foundation's tax status — **if it's a c3, don't put politics there.** |
| A personal domain | **You** | Cleanest. Opinions are unambiguously yours, the LLC stays a software company, the Foundation stays clean. Costs ~$12/yr and one nginx server block. Same repo, same pipeline, same Shortcut — only `site` in the Astro config changes. |

Recommendation: **a personal domain**, given the scope just widened to politics and
religion. It's the cheapest possible fix and it makes every downstream question
disappear. If you'd rather not, `henzis.com/notes` is a legitimate choice — just a
deliberate one.

Decide before Phase 2, because it sets the permalink domain and permalinks shouldn't move.

### 11b. Tags become load-bearing

If the feed mixes markets, politics, religion, and tech, then a single firehose serves
nobody well — and this has a clean technical answer:

**Per-tag RSS feeds.** `/notes/tag/tech/rss.xml`, `/notes/tag/markets/rss.xml`, etc. Someone
who wants your software takes without your politics can subscribe narrowly. Same for the
reverse. It's the same `rss()` call inside a `getStaticPaths()` loop — maybe 15 extra lines
over the single-feed version, and it's the thing that makes a genuinely mixed personal feed
subscribable by people who only care about one slice of you.

This also means **tagging discipline matters** more than it would for a single-topic blog.
Worth having the Shortcut prompt for a tag (with your 5–6 usual ones as a menu, plus
"none") rather than defaulting to `[]` every time.

### 11c. The disclaimer, generalized

One line in the `/notes/` header and each RSS channel description:

> *Personal opinions, mine alone — not those of Henzi's Services LLC, the Henzi Foundation,
> or anyone I work with. Not advice of any kind.*

Two narrow carve-outs worth knowing, neither of which restricts anything:

- **On specific securities** — if a post is a call on a named company, say whether you hold
  a position. Not because opinions are risky (they aren't; the Investment Advisers Act's
  publisher's exclusion, *Lowe v. SEC* (1985), covers impersonal publications of general
  circulation), but because "I'm short and here's why" is normal and honest, while staying
  silent about a position you hold is the only version that ever becomes a problem.
- **Fact vs. opinion, on any topic** — "I think X is corrupt" is protected opinion; "X took
  a bribe," false and stated as fact, is defamation. This applies to politics exactly as
  much as to markets. Say "I think" when you mean it.

Not legal advice — I'm not a lawyer. The Foundation tax-status question in 11a is the only
item here I'd actually check before posting.

---

## 12. Build order

| Phase | Work | Ships |
|---|---|---|
| **0** | ~~Retire the Pages workflow~~ ✅ done; **decide the domain (§11a)** and push-vs-pull deploy | Permalink shape is locked |
| **1** | Content collection + `/notes/` stream + permalinks + nav link | Posting works from the Mac via git |
| **2** | RSS + per-tag feeds + JSON Feed + OG tags + share buttons | People can follow — narrowly or wholesale — and share |
| **3** | iOS Shortcut (with tag menu) + Siri + `note()` shell function | Posting from the couch |
| **4** | Deploy automation per §9 | The 90-second loop closes |
| **5** | Tag archive pages + `/notes/archive/` + client-side search | Findable |

Phase 1 alone is a working microblog — just one where you post from the laptop. Everything
after is latency and reach. Phases 1–2 are an afternoon; 3–4 are an evening including the
inevitable fight with Shortcuts' JSON body editor.

**§11a gates Phase 1**, and it's the only thing that does. Permalinks shouldn't move once
they're in someone's feed reader, so the domain wants deciding before the first note is
published — not before the code is written.

---

## Appendix: two things I noticed in the repo

Unrelated to the microblog, but relevant to shipping anything under `/blog` or `/notes`:

1. **`/blog` has 6 post cards but only 1 post page exists.** `src/pages/blog/index.astro`
   lists six hardcoded entries; only `getting-started-with-ai.astro` is real. The other
   five link to 404s, and they're all placeholder theme content about generic AI topics —
   currently live on henzis.com. Worth deleting or replacing before adding a second
   content section next to it.

2. **README's tech stack is wrong.** It claims Astro 5 / React 19 / Tailwind v4;
   `package.json` pins Astro 4.16, React 18, Tailwind 3.4. This plan targets what's
   actually pinned. Also `node_modules` isn't installed locally right now, so
   `npm install` first.
