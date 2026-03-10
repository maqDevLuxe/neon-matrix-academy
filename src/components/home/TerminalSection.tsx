import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const lines = [
  { text: "$ python train.py --model gpt-neo --epochs 100", type: "command" },
  { text: "Loading dataset... ████████████████ 100%", type: "output" },
  { text: "Epoch 1/100 - loss: 3.2451 - accuracy: 0.4521", type: "output" },
  { text: "Epoch 50/100 - loss: 0.1823 - accuracy: 0.9634", type: "output" },
  { text: "Epoch 100/100 - loss: 0.0312 - accuracy: 0.9981", type: "output" },
  { text: "✓ Model saved to ./checkpoints/best_model.pt", type: "success" },
  { text: "$ niche deploy --model best_model.pt --target production", type: "command" },
  { text: "Deploying to GPU cluster... Done ✓", type: "success" },
  { text: "API endpoint: https://api.niche.ai/v1/predict", type: "success" },
];

const TerminalSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev < lines.length ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// Live Preview</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Your <span className="text-gradient-purple">Development</span> Environment
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-xl border border-border bg-card overflow-hidden glow-purple"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-neon-green/40" />
            <div className="w-3 h-3 rounded-full bg-neon-cyan/40" />
            <span className="ml-2 font-mono text-xs text-muted-foreground">terminal — niche-ai-lab</span>
          </div>
          <div className="p-6 font-mono text-sm space-y-1.5 min-h-[280px]">
            {lines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  line.type === "command"
                    ? "text-neon-cyan"
                    : line.type === "success"
                    ? "text-neon-green"
                    : "text-muted-foreground"
                }
              >
                {line.text}
              </motion.div>
            ))}
            {visibleLines < lines.length && (
              <span className="inline-block w-2 h-4 bg-primary animate-pulse-neon" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalSection;
