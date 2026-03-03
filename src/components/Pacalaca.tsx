import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Shield, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: TrendingUp,
    title: "Invest like a human",
    description:
      "See performance, activity, and orders in one simple screen so you can make your own decisions faster.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "One clear view",
    description:
      "Performance, activity, and orders stay in one readable workflow so a quick check feels useful, not overwhelming.",
    gradient: "from-cyan-500 to-sky-500",
  },
  {
    icon: FileText,
    title: "Review before you trade",
    description:
      "Review your order clearly, understand what changed, and place trades on your terms.",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    icon: Shield,
    title: "Protected and steady",
    description:
      "Use reminders, secure connections, and trade protection to keep the process calm and deliberate.",
    gradient: "from-indigo-500 to-blue-500",
  },
];

export function Pacalaca() {
  return (
    <section id="pacalaca" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm mb-6">
                <span className="text-muted-foreground">Pacalaca.app</span>
              </div>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold"
            >
              Investing for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                humans
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Pacalaca keeps investing readable: one calm place to review performance, activity, and trades without drowning in finance jargon.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${highlight.gradient} mb-4`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-8 rounded-2xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30"
          >
            <h3 className="text-2xl font-bold mb-3">Explore Pacalaca Features</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              The full product goes deeper on portfolio review, readable trade flows, and a simpler daily investing workflow.
            </p>
            <a
              href="https://pacalaca.app/features"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-8 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium hover:from-blue-700 hover:to-cyan-700 transition-all"
            >
              See all features <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
