import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jessica M.",
    role: "Real Estate Agent, Florida",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
    content:
      "MLS Writer saves me at least two hours per listing. I put in the address and walk away — the copy comes back compliant, professional, and ready to post.",
    rating: 5,
    productLabel: "MLS Writer",
    productHref: "https://mlswriter.app",
    productColor: "text-purple-600 dark:text-purple-400",
  },
  {
    name: "Derek T.",
    role: "Broker, Texas",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Derek",
    content:
      "The Fair Housing compliance piece alone is worth it. I used to spend 20 minutes carefully reviewing every listing. Now I trust the output and move on.",
    rating: 5,
    productLabel: "MLS Writer",
    productHref: "https://mlswriter.app",
    productColor: "text-purple-600 dark:text-purple-400",
  },
  {
    name: "Anika R.",
    role: "First-time investor",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anika",
    content:
      "Pacalaca finally made investing click for me. Every other app felt like it was built for someone who already knew what they were doing. This one felt like it was built for me.",
    rating: 5,
    productLabel: "Pacalaca",
    productHref: "https://pacalaca.app",
    productColor: "text-blue-600 dark:text-blue-400",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Loved by{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              real users
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Agents, brokers, and everyday investors trust our products
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card p-6 rounded-2xl border bg-card flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 flex-1">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <a
                  href={testimonial.productHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-xs font-semibold shrink-0 hover:underline ${testimonial.productColor}`}
                >
                  {testimonial.productLabel} →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
