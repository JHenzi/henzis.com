import { motion } from "framer-motion";
import {
  FileText,
  Share2,
  Shield,
  TrendingUp,
  Users,
  Vote,
  BarChart2,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Listings in Seconds",
    description:
      "Enter a property address and get a polished MLS listing ready to publish — no copywriting skills needed.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Share2,
    title: "Social & Blog Content",
    description:
      "Automatically generate Facebook posts, tweets, and property blog articles alongside every listing.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Fair Housing Compliant",
    description:
      "Every piece of content is checked against Fair Housing Act standards so you stay protected.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    title: "Investing for Humans",
    description:
      "Pacalaca strips away the jargon and complexity — built for everyday people, not Wall Street professionals.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Accessible by Design",
    description:
      "A clean, approachable interface that guides you through investing concepts at your own pace.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Vote,
    title: "Decide What's Next",
    description:
      "VOTE uses WSJF scoring to help enterprise software teams prioritize without politics, gut instinct, or HiPPO-driven decisions.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: BarChart2,
    title: "WSJF Prioritization",
    description:
      "Weighted Shortest Job First ranks your backlog by Cost of Delay divided by job size — so the highest-value, shortest work always rises to the top.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "No More Overthinking",
    description:
      "VOTE facilitates team scoring in real time. Everyone votes, the math is done automatically, and your next sprint is clear.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: FileText,
    title: "Work Off Your Plate",
    description:
      "We combine AI with practical software and clean workflows so the useful part gets done for you instead of turning into more admin.",
    gradient: "from-slate-600 to-blue-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
            id="products"
          >
            Three products,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              shared mission
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We build tools for humans, using AI and other software to get things done for you.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
