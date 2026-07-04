import { useState } from "react";

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
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="bg-faq border-t-[3px] border-line"
    >
      <div className="mx-auto max-w-[820px] px-4 py-[70px] md:px-7">
        <div className="mb-9 text-center">
          <div className="mono-label text-xs text-ink-soft">[ FAQ ]</div>
          <h2 className="mt-3 text-[clamp(30px,4vw,46px)] font-extrabold leading-none tracking-[-0.02em]">
            Frequently asked{" "}
            <span className="serif-accent text-brand-purple">questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={index}
                className="border-[3px] border-line bg-card shadow-hard-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent px-5 py-4 text-left font-sans text-[17px] font-bold text-ink"
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 font-mono text-[22px] leading-none text-brand-red">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t-2 border-dashed border-ink/30 px-5 pb-5 pt-4 text-[15px] leading-relaxed text-ink-soft">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
