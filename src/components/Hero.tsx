import { motion } from "framer-motion";
import { ArrowRight, Home, TrendingUp, Vote } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <span className="text-muted-foreground">Henzi's Services LLC</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
          >
            Tools Built for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              Real People
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            From generating real estate listings in seconds, to making investing
            accessible for everyone, to helping enterprise teams prioritize what
            matters most.
          </motion.p>

          {/* Product Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-4"
          >
            {/* MLS Writer Card */}
            <a
              href="https://mlswriter.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">MLS Writer</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  AI-powered MLS listing generator. Fair Housing-compliant
                  listings, social posts, and blog content in seconds.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                Try it free <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* Pacalaca Card */}
            <a
              href="https://pacalaca.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Pacalaca</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Investing for humans. A platform designed to make investing
                  approachable and understandable for everyday people.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            {/* VOTE Card */}
            <a
              href="https://vote.henzi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-3 p-6 rounded-2xl border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <Vote className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">VOTE</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Decide what to do next — without overthinking. WSJF-powered
                  prioritization for enterprise software teams.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-green-600 dark:text-green-400 group-hover:gap-2 transition-all">
                Start voting <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
