import { motion } from "framer-motion";

const companies = ["OpenAI", "Google DeepMind", "Meta AI", "NVIDIA", "Tesla AI", "Anthropic", "Microsoft", "Amazon"];

const HiredBySection = () => (
  <section className="py-16 border-y border-border bg-card/30">
    <div className="container mx-auto px-6">
      <p className="text-center font-mono text-xs text-muted-foreground mb-8 uppercase tracking-widest">
        // Our graduates build AI at
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {companies.map((company, i) => (
          <motion.div
            key={company}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-lg md:text-xl font-bold text-muted-foreground/40 hover:text-primary transition-colors cursor-default"
          >
            {company}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HiredBySection;
