import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Tools", href: withBase("/#products") },
    { label: "MLS Writer", href: withBase("/#mls") },
    { label: "Pacalaca", href: withBase("/#pacalaca") },
    { label: "VOTE", href: withBase("/#vote") },
    { label: "Pricing", href: withBase("/#pricing") },
    { label: "About", href: withBase("/about") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-[3px] border-line bg-paper/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-4 py-3 md:px-7">
        {/* Logo */}
        <a
          href={withBase("/")}
          className="flex items-center gap-2.5 text-ink no-underline"
        >
          <span className="inline-block h-[30px] w-[30px] -rotate-6 border-[3px] border-line bg-brand-red shadow-hard-sm" />
          <span className="text-xl font-extrabold tracking-tight">
            Henzi's
          </span>
          <span className="mono-label border-2 border-line px-1.5 py-0.5 text-[11px] tracking-[0.18em]">
            SVCS
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="mono-label hidden items-center gap-6 text-[12.5px] tracking-[0.06em] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-ink no-underline hover:text-brand-red"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://mlswriter.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label hidden border-[3px] border-line bg-ink px-4 py-2 text-xs tracking-[0.08em] text-paper no-underline shadow-hard-sm transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs md:inline-block"
          >
            Try MLS Writer →
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-ink lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t-[3px] border-line bg-paper lg:hidden">
          <div className="mx-auto max-w-[1180px] space-y-4 px-4 py-5 md:px-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mono-label block text-sm text-ink no-underline hover:text-brand-red"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://mlswriter.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label block border-[3px] border-line bg-ink px-4 py-3 text-center text-xs text-paper no-underline shadow-hard-sm"
            >
              Try MLS Writer →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
