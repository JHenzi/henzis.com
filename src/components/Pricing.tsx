export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-[1180px] border-t-[3px] border-line px-4 pb-12 pt-[76px] md:px-7"
    >
      <div className="mx-auto mb-11 max-w-[620px] text-center">
        <div className="mono-label text-xs text-ink-soft">[ Pricing ]</div>
        <h2 className="mb-2 mt-3.5 text-[clamp(34px,4.6vw,54px)] font-extrabold leading-none tracking-[-0.02em]">
          Simple, <span className="serif-accent text-brand-green">honest</span>{" "}
          pricing.
        </h2>
        <p className="m-0 text-[17px] text-ink-soft">
          Two products are free. One pays for itself the first time you use it.
        </p>
      </div>

      <div className="grid items-start gap-6 pt-4 md:grid-cols-3">
        {/* Pacalaca */}
        <div className="border-[3px] border-line bg-card p-6 shadow-hard-xl">
          <div className="mono-label text-[11px] tracking-[0.12em] text-brand-blue">
            Pacalaca
          </div>
          <div className="mb-0.5 mt-2.5 flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tracking-[-0.03em]">$0</span>
            <span className="font-mono text-xs text-ink-soft">/ forever</span>
          </div>
          <p className="text-sm leading-normal text-ink-soft">
            Investing for humans — accessible to everyone at no cost.
          </p>
          <a
            href="https://pacalaca.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label my-4 block border-[3px] border-line bg-card px-3 py-3 text-center text-xs tracking-[0.06em] text-ink no-underline shadow-hard transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs"
          >
            Get started free →
          </a>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 font-mono text-[12.5px] text-ink">
            <li>✓ Free to use</li>
            <li>✓ No credit card</li>
            <li>✓ Built for everyday investors</li>
            <li>✓ No jargon, no complexity</li>
          </ul>
        </div>

        {/* MLS Writer */}
        <div className="relative border-[3px] border-line bg-card p-6 shadow-[8px_8px_0_var(--red)]">
          <div className="mono-label absolute -top-4 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap border-[3px] border-line bg-brand-red px-3 py-1 text-[11px] tracking-[0.1em] text-on-accent shadow-hard-sm">
            ★ Most popular
          </div>
          <div className="mono-label mt-1.5 text-[11px] tracking-[0.12em] text-brand-red">
            MLS Writer
          </div>
          <div className="mb-0.5 mt-2.5 text-[40px] font-extrabold tracking-[-0.02em]">
            See plans
          </div>
          <p className="text-sm leading-normal text-ink-soft">
            Pays for itself the moment your listing goes live faster.
          </p>
          <a
            href="https://mlswriter.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label my-4 block border-[3px] border-line bg-brand-red px-3 py-3 text-center text-xs tracking-[0.06em] text-on-accent no-underline shadow-hard transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs"
          >
            Try for free →
          </a>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 font-mono text-[12.5px] text-ink">
            <li>✓ Listings in seconds</li>
            <li>✓ Social + blog content</li>
            <li>✓ Fair Housing compliant</li>
            <li>✓ Works in all major browsers</li>
          </ul>
        </div>

        {/* VOTE */}
        <div className="border-[3px] border-line bg-card p-6 shadow-hard-xl">
          <div className="mono-label text-[11px] tracking-[0.12em] text-brand-green">
            VOTE
          </div>
          <div className="mb-0.5 mt-2.5 flex items-baseline gap-1.5">
            <span className="text-5xl font-extrabold tracking-[-0.03em]">$0</span>
            <span className="font-mono text-xs text-ink-soft">/ forever</span>
          </div>
          <p className="text-sm leading-normal text-ink-soft">
            WSJF-powered prioritization. Decide what's next without
            overthinking.
          </p>
          <a
            href="https://vote.henzi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label my-4 block border-[3px] border-line bg-brand-green px-3 py-3 text-center text-xs tracking-[0.06em] text-on-accent no-underline shadow-hard transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs"
          >
            Start voting →
          </a>
          <ul className="m-0 flex list-none flex-col gap-2 p-0 font-mono text-[12.5px] text-ink">
            <li>✓ WSJF scoring built in</li>
            <li>✓ Guided scoring system</li>
            <li>✓ Auto-ranked backlog</li>
            <li>✓ No spreadsheets required</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
