import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const benefits = [
  "Pay $0 upfront — start learning immediately",
  "Only pay when you land a job earning $50K+",
  "Capped at 15% of income for 24 months",
  "Total payment capped at $30,000",
  "Full refund if not hired within 12 months",
];

const ISASection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-neon-green uppercase tracking-widest">// Financing</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Income Share <span className="text-gradient-cyan">Agreement</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We're so confident in our program that we'll invest in you first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl border border-border bg-card border-glow-cyan"
        >
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-neon-cyan" />
            <h3 className="font-heading text-2xl font-bold">Risk-Free Investment</h3>
          </div>
          <div className="space-y-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-neon-green mt-0.5 shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ISASection;
