const products = [
  {
    number: "01",
    category: "Real Estate",
    name: "MLS Writer",
    description:
      "Type an address, get a polished, Fair-Housing-compliant listing in seconds. Plus social posts and blog copy.",
    bullets: ["Listing in seconds", "Social + blog content", "Compliance built in"],
    cta: "Try it free →",
    href: "https://mlswriter.app",
    accent: "brand-red",
    accentBg: "bg-brand-red",
    accentText: "text-brand-red",
  },
  {
    number: "02",
    category: "Investing",
    name: "Pacalaca",
    description:
      "Investing built for humans — plain-language performance, honest activity, and trades explained like a friend would.",
    bullets: ["No jargon, ever", "One clear view", "Free to use"],
    cta: "Learn more →",
    href: "https://pacalaca.app",
    accent: "brand-blue",
    accentBg: "bg-brand-blue",
    accentText: "text-brand-blue",
  },
  {
    number: "03",
    category: "Teams",
    name: "VOTE",
    description:
      "Decide what to build next without the drama. WSJF scoring takes gut-feel and politics out of your backlog.",
    bullets: ["WSJF scoring built in", "Auto-ranked backlog", "No spreadsheets"],
    cta: "Start voting →",
    href: "https://vote.henzi.org",
    accent: "brand-green",
    accentBg: "bg-brand-green",
    accentText: "text-brand-green",
  },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-[1180px] px-4 pb-10 pt-[76px] md:px-7">
      <div className="mx-auto mb-11 max-w-[640px] text-center">
        <div className="mono-label text-xs text-ink-soft">
          [ Three tools · one shop ]
        </div>
        <h2 className="mt-3.5 text-[clamp(34px,4.6vw,54px)] font-extrabold leading-none tracking-[-0.02em]">
          Three products.
          <br />
          <span className="serif-accent text-brand-blue">One human mission.</span>
        </h2>
        <p className="mt-4 text-[17px] text-ink-soft">
          Different problems, same belief: software should feel like a person
          made it for you.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div
            key={p.name}
            className="relative border-[3px] border-line bg-card p-6 shadow-hard-xl transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-md"
          >
            <div className={`-mx-6 -mt-6 mb-5 h-2.5 border-b-[3px] border-line ${p.accentBg}`} />
            <div className="flex items-start justify-between">
              <span className={`mono-label text-[11px] tracking-[0.12em] ${p.accentText}`}>
                {p.category}
              </span>
              <span className="mono-label flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-line text-[10px]">
                {p.number}
              </span>
            </div>
            <div className="mb-1 mt-3.5 font-serif text-[34px] leading-none">
              {p.name}
            </div>
            <p className="mb-4 mt-1.5 text-[15.5px] leading-normal text-ink-soft">
              {p.description}
            </p>
            <ul className="mb-5 flex list-none flex-col gap-2 p-0 font-mono text-xs text-ink">
              {p.bullets.map((b) => (
                <li key={b}>✦ {b}</li>
              ))}
            </ul>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mono-label inline-block border-[3px] border-line px-4 py-2.5 text-xs tracking-[0.06em] text-on-accent no-underline shadow-hard transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs ${p.accentBg}`}
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
