import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NICHE.ai transformed me from a junior dev into an AI engineer at Google in 4 months. The curriculum is absolutely world-class.",
    name: "Alex Kim",
    role: "AI Engineer @ Google",
    prev: "Previously: Junior Web Developer",
  },
  {
    quote: "The hands-on projects alone were worth it. I built a production LLM during the program and my capstone project became my team's core product.",
    name: "Priya Sharma",
    role: "ML Lead @ Anthropic",
    prev: "Previously: Data Analyst",
  },
  {
    quote: "Best investment I've ever made. The ISA model meant zero risk, and I tripled my salary within 6 months of graduating.",
    name: "David Martinez",
    role: "Senior ML Engineer @ NVIDIA",
    prev: "Previously: Software Engineer",
  },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-primary uppercase tracking-widest">// Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
          Developer <span className="text-gradient-purple">Stories</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border border-border bg-card"
          >
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
              <p className="font-mono text-xs text-primary mt-0.5">{t.role}</p>
              <p className="font-mono text-xs text-muted-foreground">{t.prev}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
