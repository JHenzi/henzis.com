export function Hero() {
  return (
    <header id="top" className="relative mx-auto max-w-[1180px] px-4 pb-10 pt-14 md:px-7 md:pt-[70px]">
      {/* crop marks */}
      <span className="absolute left-3 top-9 hidden h-[22px] w-[22px] border-l-[3px] border-t-[3px] border-ink-soft md:block" />
      <span className="absolute right-3 top-9 hidden h-[22px] w-[22px] border-r-[3px] border-t-[3px] border-ink-soft md:block" />

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          {/* Badge */}
          <div className="mono-label inline-flex items-center gap-2 border-[2.5px] border-line bg-brand-yellow px-3 py-1.5 text-xs text-[#1B1712] shadow-hard-sm">
            <span className="h-2 w-2 rounded-full bg-[#1B1712]" />
            Software with a human hand
          </div>

          {/* Headline */}
          <h1 className="mt-5 text-[clamp(42px,6vw,78px)] font-extrabold leading-[.96] tracking-[-0.03em]">
            Tools built for{" "}
            <span className="serif-accent relative inline-block px-1 text-brand-red">
              real people
              <svg
                viewBox="0 0 220 16"
                className="absolute -bottom-2 left-0 h-4 w-full text-brand-red"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 10 Q 40 2 80 9 T 160 8 T 217 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            not just “users.”
          </h1>

          <p className="mt-6 max-w-[34ch] text-[19px] leading-normal text-ink-soft">
            We make small, sharp software for real jobs — writing listings,
            investing without the jargon, deciding what to build next. AI does
            the grunt work. You stay human.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a
              href="#products"
              className="mono-label border-[3px] border-line bg-brand-red px-5 py-3.5 text-[13px] tracking-[0.06em] text-on-accent no-underline shadow-hard-md transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-sm"
            >
              Meet the tools
            </a>
            <a
              href="/about"
              className="mono-label border-b-[3px] border-line px-0.5 py-1 text-[13px] tracking-[0.06em] text-ink no-underline hover:text-brand-red"
            >
              How we think →
            </a>
            <svg
              viewBox="0 0 64 44"
              className="h-[42px] w-[60px] rotate-[4deg] text-ink-soft"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6 34 Q 34 40 54 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M40 10 L56 12 L50 26" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Footnotes */}
          <div className="mono-label mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11.5px] tracking-[0.05em] text-ink-soft">
            <span>▲ Multiple tools, one shop</span>
            <span>▲ Human-first design</span>
            <a
              href="https://nlp.henzi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft no-underline hover:text-brand-red"
            >
              ▲ World's first full-stack vibe coder
            </a>
          </div>
        </div>

        {/* Stamp collage */}
        <div className="relative mx-auto h-[430px] w-full max-w-[440px]">
          <a
            href="https://mlswriter.app"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-0 top-1.5 w-[196px] -rotate-[5deg] border-[3px] border-line bg-card p-4 text-ink no-underline shadow-hard-xl transition-transform hover:rotate-[-3deg]"
          >
            <div className="mono-label flex items-center justify-between text-[10px] text-brand-red">
              MLS Writer<span>№01</span>
            </div>
            <svg viewBox="0 0 60 60" className="my-2 h-[46px] w-[46px] text-brand-red" aria-hidden="true">
              <circle cx="30" cy="22" r="11" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <path d="M14 52 Q30 34 46 52" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <div className="font-serif text-xl leading-none">
              Listings that write themselves.
            </div>
          </a>

          <a
            href="https://pacalaca.app"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-0 top-11 w-[196px] rotate-[4deg] border-[3px] border-line bg-card p-4 text-ink no-underline shadow-hard-xl transition-transform hover:rotate-[2deg]"
          >
            <div className="mono-label flex items-center justify-between text-[10px] text-brand-blue">
              Pacalaca<span>№02</span>
            </div>
            <svg viewBox="0 0 60 60" className="my-2 h-[46px] w-[46px] text-brand-blue" aria-hidden="true">
              <rect x="10" y="34" width="10" height="16" fill="currentColor" />
              <rect x="25" y="24" width="10" height="26" fill="currentColor" />
              <rect x="40" y="14" width="10" height="36" fill="none" stroke="currentColor" strokeWidth="3.5" />
            </svg>
            <div className="font-serif text-xl leading-none">
              Investing that speaks human.
            </div>
          </a>

          <a
            href="https://vote.henzi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-0 left-1/2 w-[200px] -translate-x-1/2 -rotate-2 border-[3px] border-line bg-brand-green p-4 text-on-accent no-underline shadow-hard-xl transition-transform hover:rotate-0"
          >
            <div className="mono-label flex items-center justify-between text-[10px]">
              VOTE<span>№03</span>
            </div>
            <svg viewBox="0 0 60 60" className="my-2 h-11 w-11" aria-hidden="true">
              <rect x="12" y="16" width="36" height="30" rx="2" fill="none" stroke="currentColor" strokeWidth="3.5" />
              <path d="M20 31 l7 7 l13 -15" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-serif text-xl leading-none">Decide what's next.</div>
          </a>

          <span className="animate-floaty absolute -top-2 right-20 font-mono text-[11px] text-brand-yellow">✦</span>
          <span className="animate-floaty-slow absolute left-1.5 top-[150px] font-mono text-sm text-brand-purple">✳</span>
        </div>
      </div>
    </header>
  );
}

export function Marquee() {
  const items =
    "Real estate ✦ Investing ✦ Prioritization ✦ Made by humans ✦ ";
  return (
    <div className="overflow-hidden border-y-[3px] border-line bg-ink text-paper">
      <div className="mono-label flex whitespace-nowrap py-[11px] text-[13px] tracking-[0.16em]">
        <span className="animate-marquee shrink-0 pr-2">{items.repeat(4)}</span>
        <span className="animate-marquee shrink-0 pr-2" aria-hidden="true">
          {items.repeat(4)}
        </span>
      </div>
    </div>
  );
}
