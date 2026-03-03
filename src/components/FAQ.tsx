import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MLS Writer?",
    answer:
      "MLS Writer is an AI-powered tool that generates professional MLS listings in seconds. You provide a property address, and it pulls data from real estate databases, analyzes it, and produces multiple formats of marketing copy — including the MLS listing, Facebook posts, tweets, and blog content — all checked for Fair Housing Act compliance. Try it at mlswriter.app.",
  },
  {
    question: "What is Pacalaca?",
    answer:
      "Pacalaca is an investing platform built for everyday people, not Wall Street professionals. The tagline says it all: \"Investing for Humans.\" It strips away the jargon and complexity to make investing approachable and understandable for anyone, regardless of experience. Visit pacalaca.app to get started free.",
  },
  {
    question: "What is VOTE?",
    answer:
      "VOTE is a team prioritization tool at vote.henzi.org that helps enterprise software teams decide what to build next using WSJF (Weighted Shortest Job First) scoring. Teams vote in real time, the math runs automatically, and the highest-priority work rises to the top — without politics or gut instinct.",
  },
  {
    question: "What is WSJF and why does it matter?",
    answer:
      "WSJF stands for Weighted Shortest Job First — a prioritization framework from the Scaled Agile Framework (SAFe). The formula is: WSJF = Cost of Delay ÷ Job Size. Cost of Delay is the sum of Business Value, Time Criticality, and Risk Reduction / Opportunity Enablement. The insight is powerful: short jobs with high cost of delay should always be done before long jobs with low cost of delay. WSJF removes subjectivity from backlog prioritization and ensures the highest-leverage work gets done first. It's the best way to run an enterprise software delivery stream.",
  },
  {
    question: "How does VOTE implement WSJF?",
    answer:
      "VOTE guides your team through scoring each work item on the four WSJF dimensions — Business Value, Time Criticality, Risk Reduction / Opportunity Enablement, and Job Size — using relative sizing (Fibonacci sequence: 1, 2, 3, 5, 8, 13, 20). Everyone votes anonymously, results are revealed simultaneously, the team discusses outliers, and VOTE calculates the final WSJF score. Your backlog is automatically ranked by priority.",
  },
  {
    question: "What does Fair Housing compliant mean?",
    answer:
      "The Fair Housing Act prohibits language in listings that discriminates based on race, color, national origin, religion, sex, familial status, or disability. MLS Writer automatically reviews generated content against these standards so every listing you produce is compliant before it goes out.",
  },
  {
    question: "Who is Henzi's Services LLC?",
    answer:
      "Henzi's Services LLC is the company behind MLS Writer, Pacalaca, and VOTE - founded by Joe Henzi of Henzi.org and the Henzi Foundation. We build tools for humans, using AI and other software to get things done for you whether that's a real estate agent, an everyday investor, or an enterprise engineering team.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Frequently asked{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              questions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Everything you need to know about our products
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
