import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // The inline script in the layout already applied the class pre-paint;
    // just sync component state with the document.
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      title="Toggle light / dark"
      aria-label="Toggle theme"
      className="mono-label flex cursor-pointer items-center gap-2 border-[3px] border-line bg-card px-3 py-2 text-[11px] tracking-[0.12em] text-ink shadow-hard-sm transition-transform hover:translate-x-px hover:translate-y-px hover:shadow-hard-xs"
    >
      <span className="h-[11px] w-[11px] rounded-full border-2 border-line bg-brand-yellow" />
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
