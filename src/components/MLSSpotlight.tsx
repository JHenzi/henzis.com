export function MLSSpotlight() {
  return (
    <section
      id="mls"
      className="border-t-[3px] border-line bg-[color-mix(in_srgb,var(--red)_8%,var(--paper))]"
    >
      <div className="mx-auto grid max-w-[1180px] items-center gap-11 px-4 py-[70px] md:px-7 lg:grid-cols-2">
        <div>
          <div className="mono-label text-xs text-brand-red">[ MLS Writer ]</div>
          <h2 className="mt-3.5 text-[clamp(32px,4.4vw,50px)] font-extrabold leading-none tracking-[-0.02em]">
            Listings in seconds,
            <br />
            <span className="serif-accent text-brand-red">
              not Sunday afternoons.
            </span>
          </h2>
          <p className="mb-5 mt-4 max-w-[40ch] text-[17px] leading-relaxed text-ink">
            Enter a property address and get a ready-to-publish listing — no
            copywriting skills required. Every draft is checked against Fair
            Housing rules so you can publish with confidence.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border-[3px] border-line bg-card p-3.5 shadow-hard">
              <div className="mono-label text-[11px] text-brand-red">Compliant</div>
              <div className="mt-1 font-bold">Fair Housing Act, every time</div>
            </div>
            <div className="border-[3px] border-line bg-card p-3.5 shadow-hard">
              <div className="mono-label text-[11px] text-brand-red">Everywhere</div>
              <div className="mt-1 font-bold">Facebook, X, blogs &amp; more</div>
            </div>
          </div>
        </div>

        <div className="relative pb-8">
          {/* Real MLS Writer output */}
          <div className="border-[3px] border-line bg-card p-3 shadow-hard-xl">
            <img
              src="/MLSWriterOutputPreview.png"
              alt="Actual MLS Writer output: a generated property listing for a home in Desoto, TX"
              className="block w-full border-2 border-line"
              loading="lazy"
            />
            <span className="mono-label mt-3 inline-block border-2 border-line bg-paper px-2 py-1 text-[11px] tracking-[0.1em] text-ink-soft">
              [ actual output · unedited ]
            </span>
          </div>

          {/* Testimonial stamp */}
          <div className="absolute -bottom-4 -right-2 w-[250px] -rotate-3 border-[3px] border-line bg-card px-4 py-3.5 shadow-hard-lg md:-right-3.5">
            <div className="text-[15px] tracking-[2px] text-brand-yellow">
              ★★★★★
            </div>
            <p className="serif-accent my-1.5 text-[19px] leading-tight">
              “The problem agents have is knowing where to start — this just
              solves it.”
            </p>
            <div className="flex items-center gap-2">
              <span className="h-[26px] w-[26px] rounded-full border-2 border-line bg-brand-red" />
              <div className="font-mono text-[11px]">
                Working Realtor
                <span className="text-ink-soft"> · early user</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
