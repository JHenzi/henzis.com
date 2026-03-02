import { motion } from "framer-motion";
import { Check, ArrowRight, Home, TrendingUp, Vote } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Simple,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              honest pricing
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Two products are free. One pays for itself on the first listing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Pacalaca - Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-8 rounded-2xl border bg-card ring-2 ring-blue-500 shadow-xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-1 text-xs font-semibold text-white">
                Always Free
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Pacalaca</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Investing for humans — accessible to everyone at no cost.
              </p>
              <a
                href="https://pacalaca.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 h-10 px-6 rounded-md border bg-background hover:bg-accent font-medium text-sm transition-colors"
              >
                Get started free <ArrowRight className="h-4 w-4" />
              </a>
              <div className="pt-4 space-y-3">
                {[
                  "Free to use",
                  "No credit card required",
                  "Built for everyday investors",
                  "No jargon, no complexity",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* MLS Writer - Paid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-8 rounded-2xl border bg-card ring-2 ring-purple-500 shadow-xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-semibold text-white">
                For Real Estate Pros
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">MLS Writer</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">See plans</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Pays for itself the moment you stop writing listings by hand.
              </p>
              <a
                href="https://mlswriter.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm transition-colors"
              >
                Try for free <ArrowRight className="h-4 w-4" />
              </a>
              <div className="pt-4 space-y-3">
                {[
                  "MLS listings in seconds",
                  "Facebook, Twitter & blog content",
                  "Fair Housing Act compliant",
                  "Works in all major browsers",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* VOTE - Free */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-8 rounded-2xl border bg-card ring-2 ring-emerald-500 shadow-xl"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-1 text-xs font-semibold text-white">
                Always Free
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
                <Vote className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">VOTE</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
              <p className="text-muted-foreground text-sm">
                WSJF-powered prioritization. Decide what to do next — without overthinking.
              </p>
              <a
                href="https://vote.henzi.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 h-10 px-6 rounded-md border bg-background hover:bg-accent font-medium text-sm transition-colors"
              >
                Start voting <ArrowRight className="h-4 w-4" />
              </a>
              <div className="pt-4 space-y-3">
                {[
                  "WSJF scoring built in",
                  "Guided scoring system",
                  "Auto-ranked backlog",
                  "No spreadsheets required",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
