import { withBase } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1180px] px-4 pb-7 pt-14 md:px-7">
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-[26px] w-[26px] -rotate-6 border-[3px] border-paper bg-brand-red" />
              <span className="text-[22px] font-extrabold">
                Henzi's Services LLC
              </span>
            </div>
            <p className="mt-4 max-w-[34ch] text-[15px] leading-relaxed text-paper/70">
              Small, sharp software for real jobs. Made by humans — real
              estate, investing, prioritization.
            </p>
            <div className="mono-label mt-4 inline-flex items-center gap-2 border-2 border-paper px-3 py-1.5 text-[11px] tracking-[0.1em]">
              Made by humans <span className="text-brand-yellow">✦</span>
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="mono-label mb-3.5 text-[11px] text-paper/60">
              Products
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="https://mlswriter.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper no-underline hover:text-brand-yellow"
              >
                MLS Writer
              </a>
              <a
                href="https://pacalaca.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper no-underline hover:text-brand-yellow"
              >
                Pacalaca
              </a>
              <a
                href="https://vote.henzi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper no-underline hover:text-brand-yellow"
              >
                VOTE
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="mono-label mb-3.5 text-[11px] text-paper/60">
              Company
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={withBase("/about")}
                className="text-paper no-underline hover:text-brand-yellow"
              >
                About
              </a>
              <a
                href="https://henzi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper no-underline hover:text-brand-yellow"
              >
                The Henzi Foundation
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mono-label mt-9 flex flex-wrap justify-between gap-3 border-t-2 border-paper/30 pt-4 text-[11px] tracking-[0.08em] text-paper/60">
          <span>© {currentYear} Henzi's Services LLC</span>
          <span>We drive the AI. Not the other way around.</span>
        </div>
      </div>
    </footer>
  );
}
