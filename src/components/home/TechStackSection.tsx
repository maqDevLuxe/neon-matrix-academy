import { motion } from "framer-motion";
import { Brain, Cpu, Database, Layers, Network, Zap, Code, GitBranch } from "lucide-react";

const techs = [
  { icon: Brain, name: "PyTorch", desc: "Deep Learning" },
  { icon: Network, name: "TensorFlow", desc: "ML Framework" },
  { icon: Layers, name: "Transformers", desc: "NLP/LLMs" },
  { icon: Cpu, name: "CUDA", desc: "GPU Computing" },
  { icon: Database, name: "MLflow", desc: "MLOps" },
  { icon: Zap, name: "FastAPI", desc: "Model Serving" },
  { icon: Code, name: "LangChain", desc: "AI Agents" },
  { icon: GitBranch, name: "Kubernetes", desc: "Deployment" },
];

const TechStackSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-primary uppercase tracking-widest">// Tech Stack</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 glitch-hover">
          Industry-Grade <span className="text-gradient-purple">AI/ML Stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {techs.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
          >
            <tech.icon className="w-8 h-8 text-primary mb-4 group-hover:animate-pulse" />
            <h3 className="font-mono text-sm font-semibold text-foreground">{tech.name}</h3>
            <p className="font-mono text-xs text-muted-foreground mt-1">{tech.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
