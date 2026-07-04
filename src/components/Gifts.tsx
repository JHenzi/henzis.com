const gifts = [
  {
    name: "Pulsefield",
    url: "pulse.henzi.org",
    href: "https://henzi.org/news-pulse-live-art-application.html",
    description:
      "Global headlines as living digital art. News topics cluster as pulsing 3D orbs — color-coded by sentiment, sized by volume, alive with the moment.",
    accentBg: "bg-brand-purple",
    accentText: "text-brand-purple",
    iconText: "text-on-accent",
    rotate: "-rotate-1",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="5" cy="8" r="2" fill="currentColor" opacity="0.6" />
        <circle cx="19" cy="6" r="2.5" fill="currentColor" opacity="0.5" />
        <circle cx="7" cy="17" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="18" cy="17" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "The Personal Diary of B3N-T5-MNT",
    url: "robot.henzi.org",
    href: "https://henzi.org/robot-diary.html",
    description:
      "A maintenance robot in New Orleans watches the world through a window and keeps a diary — weaving in real weather, news, moon phases, and its own memory.",
    accentBg: "bg-brand-yellow",
    accentText: "text-brand-yellow",
    iconText: "text-[#1B1712]",
    rotate: "rotate-1",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="7" y="3" width="10" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="6.5" r="1" fill="currentColor" />
        <circle cx="14" cy="6.5" r="1" fill="currentColor" />
        <path d="M10 9h4" strokeLinecap="round" />
        <path d="M12 11v2" strokeLinecap="round" />
        <rect x="5" y="13" width="14" height="7" rx="2" fill="none" />
        <path d="M8 17h8M8 15.5h5" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: "National Camp Forecast Bureau",
    url: "travel.henzi.org",
    href: "https://henzi.org/camp-forecast.html",
    description:
      "Find the driest campground near you. Thousands of US campgrounds ranked by 10-day forecast quality — born from a simple wish: camping without the rain.",
    accentBg: "bg-brand-green",
    accentText: "text-brand-green",
    iconText: "text-on-accent",
    rotate: "rotate-1",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 5L3.5 20h17L12 5z" strokeLinejoin="round" fill="none" />
        <path d="M12 12v8" strokeLinecap="round" />
        <circle cx="19" cy="5.5" r="2" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    name: "BLOOM Story Writer",
    url: "nlp.henzi.org",
    href: "https://henzi.org/bloom-story-writer.html",
    description:
      "The world's first \"vibe coded\" app (2022): Joe used ChatGPT to write the code and BLOOM to spin the stories — an AI tool built with AI, before it had a name.",
    accentBg: "bg-brand-red",
    accentText: "text-brand-red",
    iconText: "text-on-accent",
    rotate: "-rotate-1",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 5a2 2 0 012-2h12a2 2 0 012 2v13a3 3 0 00-3-3H4V5z" strokeLinejoin="round" fill="none" />
        <path d="M4 15v4h13" strokeLinecap="round" fill="none" />
        <path d="M8 7h8M8 10h8" strokeLinecap="round" opacity="0.7" />
      </svg>
    ),
  },
];

export function Gifts() {
  return (
    <section
      id="gifts"
      className="border-t-[3px] border-line bg-[color-mix(in_srgb,var(--purple)_8%,var(--paper))]"
    >
      <div className="mx-auto max-w-[1180px] px-4 py-[70px] md:px-7">
        <div className="mx-auto mb-10 max-w-[640px] text-center">
          <div className="mono-label text-xs text-ink-soft">
            [ But wait — there's more ]
          </div>
          <h2 className="mt-3.5 text-[clamp(30px,4.2vw,50px)] font-extrabold leading-none tracking-[-0.02em]">
            Gifts from the{" "}
            <span className="serif-accent text-brand-purple">
              Henzi Foundation
            </span>
          </h2>
          <p className="mt-4 text-[17px] text-ink-soft">
            Not every project needs a price tag. These are free experiments and
            art projects — given away because building them was worthwhile in
            itself.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {gifts.map((g) => (
            <a
              key={g.name}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block border-[3px] border-line bg-card p-6 text-ink no-underline shadow-hard-lg transition-transform hover:rotate-0 hover:shadow-hard-sm ${g.rotate}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`inline-flex shrink-0 -rotate-3 border-[3px] border-line p-3 ${g.accentBg} ${g.iconText}`}
                >
                  {g.icon}
                </div>
                <div>
                  <h3
                    className={`mb-1 text-lg font-bold group-hover:underline ${g.accentText}`}
                  >
                    {g.name} →
                  </h3>
                  <p className="text-sm text-ink-soft">{g.description}</p>
                  <p className="mono-label mt-2 text-[10px] text-ink-soft">
                    {g.url}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-9 text-center">
          <a
            href="https://henzi.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-block border-b-[3px] border-line px-0.5 py-1 text-[13px] tracking-[0.06em] text-ink no-underline hover:text-brand-purple"
          >
            The Henzi Foundation — where our excess income goes →
          </a>
        </div>
      </div>
    </section>
  );
}
