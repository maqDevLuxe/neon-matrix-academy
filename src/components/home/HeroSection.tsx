import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs text-primary">Applications Open — Cohort #17</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6"
          >
            <span className="text-foreground">Become an</span>
            <br />
            <span className="text-gradient-purple glitch-hover inline-block">AI Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Master deep learning, neural architectures, and production ML systems in 16 intensive weeks. 
            Graduate with a portfolio that gets you hired at the world's top AI labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/enroll"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground glow-purple hover:opacity-90 transition-all"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/curriculum"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border font-mono text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              View Curriculum
            </Link>
          </motion.div>

          {/* Floating code block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 max-w-xl mx-auto"
          >
            <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-neon-green/40" />
                <div className="w-3 h-3 rounded-full bg-neon-cyan/40" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">model.py</span>
              </div>
              <div className="p-5 font-mono text-sm text-left leading-relaxed">
                <div><span className="text-primary">import</span> <span className="text-neon-cyan">torch</span></div>
                <div><span className="text-primary">from</span> transformer <span className="text-primary">import</span> <span className="text-neon-green">GPTArchitecture</span></div>
                <div className="mt-2"><span className="text-primary">class</span> <span className="text-neon-cyan">NicheModel</span>(GPTArchitecture):</div>
                <div className="text-muted-foreground pl-4">"""Your next breakthrough starts here."""</div>
                <div className="pl-4"><span className="text-primary">def</span> <span className="text-neon-green">forward</span>(self, x):</div>
                <div className="pl-8"><span className="text-primary">return</span> self.<span className="text-neon-cyan">transform</span>(x)<span className="animate-pulse-neon text-primary">|</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
