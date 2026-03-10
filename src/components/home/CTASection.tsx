import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2 } from "lucide-react";

const CTASection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/10 blur-[200px] pointer-events-none" />
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5 mb-8">
          <Code2 className="w-4 h-4 text-neon-green" />
          <span className="font-mono text-xs text-neon-green">Free AI Coding Assessment</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Ready to <span className="text-gradient-purple">Level Up?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Take our 30-minute coding assessment to see if you qualify. No commitment required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/enroll"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground glow-purple hover:opacity-90 transition-all"
          >
            Take the Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border font-mono text-sm text-foreground hover:border-primary/50 transition-all"
          >
            Download Syllabus
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
