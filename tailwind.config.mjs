import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        line: "var(--line)",
        "on-accent": "var(--on-accent)",
        brand: {
          red: "var(--red)",
          blue: "var(--blue)",
          yellow: "var(--yellow)",
          green: "var(--green)",
          purple: "var(--purple)",
        },
        // background, foreground, card (DEFAULT), border, and muted-foreground
        // are set as raw hex in global.css's :root block — reference them
        // directly. Everything else is still an "H S% L%" triplet, so those
        // keep the hsl() wrapper.
        border: "var(--border)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', ...fontFamily.sans],
        serif: ['"Instrument Serif"', ...fontFamily.serif],
        mono: ['"Space Mono"', ...fontFamily.mono],
      },
      boxShadow: {
        "hard-xs": "2px 2px 0 var(--shadow-c)",
        "hard-sm": "3px 3px 0 var(--shadow-c)",
        hard: "4px 4px 0 var(--shadow-c)",
        "hard-md": "5px 5px 0 var(--shadow-c)",
        "hard-lg": "6px 6px 0 var(--shadow-c)",
        "hard-xl": "8px 8px 0 var(--shadow-c)",
        "hard-2xl": "10px 10px 0 var(--shadow-c)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
