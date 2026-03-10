import { motion } from "framer-motion";

const CyberpunkBanner = () => (
  <section className="relative py-32 overflow-hidden">
    {/* Grid background */}
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
    
    {/* Neon lines */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-gradient-purple mb-6">
          THE FUTURE IS NOW
        </h2>
        <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto">
          State-of-the-art GPU clusters. Cutting-edge curriculum updated weekly.
          Real-world AI projects with enterprise data.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
          <span><span className="text-neon-green">●</span> 256x A100 GPUs</span>
          <span className="text-border">|</span>
          <span><span className="text-neon-cyan">●</span> Petabyte Data Lake</span>
          <span className="text-border">|</span>
          <span><span className="text-primary">●</span> 24/7 Lab Access</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CyberpunkBanner;
