export function WSJF() {
  return (
    <section id="vote" className="border-t-[3px] border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-[1180px] items-center gap-11 px-4 py-[72px] md:px-7 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <div className="mono-label text-xs text-brand-green">
            [ VOTE · for software teams ]
          </div>
          <h2 className="mt-3.5 text-[clamp(32px,4.4vw,52px)] font-extrabold leading-none tracking-[-0.02em] text-paper">
            Decide what's next,
            <br />
            <span className="serif-accent text-brand-green">
              without the drama.
            </span>
          </h2>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-relaxed text-paper/70">
            Weighted Shortest Job First replaces gut instinct, politics and the
            loudest-voice-wins with plain math. The highest-value work rises to
            the top on its own.
          </p>
          <div className="mono-label mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.05em] text-paper/60">
            <span>✦ Relative sizing</span>
            <span>✦ Short jobs win</span>
            <span>✦ Auto-ranked</span>
          </div>
          <a
            href="https://vote.henzi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label mt-7 inline-block border-[3px] border-paper bg-brand-green px-5 py-3 text-xs tracking-[0.06em] text-on-accent no-underline shadow-[4px_4px_0_var(--green)] transition-transform hover:translate-x-px hover:translate-y-px"
          >
            Start voting →
          </a>
        </div>

        {/* Formula card */}
        <div className="relative border-[3px] border-paper bg-paper px-7 py-8 text-ink shadow-[10px_10px_0_var(--green)]">
          <div className="mono-label text-center text-[11px] tracking-[0.16em] text-ink-soft">
            — The formula —
          </div>
          <div className="my-5 flex items-center justify-center gap-4">
            <span className="serif-accent text-[44px] text-brand-green">WSJF</span>
            <span className="text-[40px] font-extrabold">=</span>
            <div className="text-center">
              <div className="border-b-[3px] border-line pb-2 text-2xl font-extrabold">
                Cost of Delay
              </div>
              <div className="pt-2 text-2xl font-extrabold">Job Size</div>
            </div>
          </div>
          <p className="m-0 text-center font-mono text-[11.5px] leading-[1.7] text-ink-soft">
            Cost of Delay = Business Value + Time Criticality + Risk Reduction
            / Opportunity Enablement
          </p>
          <svg
            viewBox="0 0 60 40"
            className="absolute -top-6 right-6 h-[38px] w-14 text-brand-green"
            fill="none"
            aria-hidden="true"
          >
            <path d="M8 8 Q 30 4 50 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <path d="M38 26 L52 28 L48 14" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
