const tiles = [
  {
    shape: "h-[34px] w-[34px] -rotate-6 border-[3px] border-line bg-brand-blue",
    title: "Invest like a human",
    description: "Plain language, no impossible spreadsheets to decode.",
  },
  {
    shape: "h-[34px] w-[34px] rounded-full border-[3px] border-line bg-brand-yellow",
    title: "One clear view",
    description: "Performance, activity and trades in one honest place.",
  },
  {
    shape: "h-[34px] w-[34px] rotate-[8deg] border-[3px] border-line bg-brand-green",
    title: "Nothing hidden",
    description: "See every trade before it's made, explained simply.",
  },
  {
    shape:
      "h-[34px] w-[34px] rounded-[50%_50%_50%_0] border-[3px] border-line bg-brand-purple",
    title: "Free to start",
    description: "Accessible to everyone — no card, no catch.",
  },
];

export function Pacalaca() {
  return (
    <section id="pacalaca" className="border-t-[3px] border-line">
      <div className="mx-auto max-w-[1180px] px-4 py-[70px] md:px-7">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="mono-label text-xs text-brand-blue">[ Pacalaca ]</div>
          <h2 className="mb-2 mt-3.5 text-[clamp(32px,4.4vw,52px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
            Investing for humans.
          </h2>
          <p className="serif-accent m-0 text-[clamp(22px,3vw,32px)] leading-tight text-brand-blue">
            No jargon. No finance-bro theater. Just a clear picture of your
            money.
          </p>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => (
            <div
              key={t.title}
              className="border-[3px] border-line bg-card p-5 shadow-hard-lg"
            >
              <div className={`mb-3.5 ${t.shape}`} />
              <div className="text-lg font-extrabold">{t.title}</div>
              <p className="mt-2 text-sm leading-normal text-ink-soft">
                {t.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a
            href="https://pacalaca.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-block border-[3px] border-line bg-brand-blue px-5 py-3 text-xs tracking-[0.06em] text-on-accent no-underline shadow-hard transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs"
          >
            Get started free →
          </a>
        </div>
      </div>
    </section>
  );
}
