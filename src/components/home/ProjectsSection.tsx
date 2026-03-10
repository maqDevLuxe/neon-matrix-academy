import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Autonomous Drone Navigation",
    tech: "Computer Vision · Reinforcement Learning",
    desc: "Build a self-navigating drone system using YOLO and PPO algorithms with real-time obstacle avoidance.",
    color: "border-glow-purple",
  },
  {
    title: "GPT-Style Language Model",
    tech: "Transformers · Attention Mechanisms",
    desc: "Train a 125M parameter language model from scratch, including custom tokenizer and RLHF fine-tuning.",
    color: "border-glow-cyan",
  },
  {
    title: "Real-Time Fraud Detection",
    tech: "Streaming ML · Graph Neural Networks",
    desc: "Deploy a production fraud detection pipeline processing 10K transactions/second with sub-50ms latency.",
    color: "border-glow-purple",
  },
  {
    title: "Medical Image Segmentation",
    tech: "U-Net · Transfer Learning",
    desc: "Develop a diagnostic tool achieving 97% accuracy on MRI tumor segmentation using custom architectures.",
    color: "border-glow-cyan",
  },
];

const ProjectsSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">// Capstone Projects</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
          Deep Learning <span className="text-gradient-cyan">Projects</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`group p-8 rounded-xl border bg-card ${project.color} transition-all cursor-pointer`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-xs text-primary">{project.tech}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
