import { motion } from "framer-motion";
import { ArrowRight, ArrowRightLeft, Divide } from "lucide-react";

export function WSJF() {
  return (
    <section id="vote" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm mb-6">
                <span className="text-muted-foreground">For enterprise engineering teams</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold"
            >
              WSJF is the best way to run{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                your software stream
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Weighted Shortest Job First removes gut instinct, politics, and HiPPO-driven decisions from your backlog — replacing them with math.
            </motion.p>
          </div>

          {/* Formula */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="p-8 rounded-2xl border bg-card mb-12 text-center"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">The Formula</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">WSJF</span>
              <span className="text-muted-foreground">=</span>
              <div className="flex flex-col items-center gap-1">
                <span>Cost of Delay</span>
                <div className="w-full h-px bg-foreground" />
                <span>Job Size</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 max-w-lg mx-auto">
              Cost of Delay = Business Value + Time Criticality + Risk Reduction / Opportunity Enablement
            </p>
          </motion.div>

          {/* Why it works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="p-6 rounded-2xl border bg-card">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 mb-4">
                <ArrowRightLeft className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Relative Sizing</h3>
              <p className="text-sm text-muted-foreground">
                Teams score each dimension using Fibonacci numbers (1, 2, 3, 5, 8, 13, 20). Relative comparisons are faster and more accurate than absolute estimates.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-card">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 mb-4">
                <Divide className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Short Jobs Win</h3>
              <p className="text-sm text-muted-foreground">
                The insight: a small, high-value job should always beat a large, medium-value job. Dividing by job size makes this mathematically explicit.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-card">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-4">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ranked Backlog</h3>
              <p className="text-sm text-muted-foreground">
                When every item has a WSJF score, prioritization is automatic. The team works the highest-scored items first — no debate required.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-center p-8 rounded-2xl border bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
          >
            <h3 className="text-2xl font-bold mb-3">Run WSJF with your team using VOTE</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              VOTE guides your team through scoring, reveals votes simultaneously, and auto-ranks your backlog. Decide what to do next — without overthinking.
            </p>
            <a
              href="https://vote.henzi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-700 hover:to-teal-700 transition-all"
            >
              Try VOTE free <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
