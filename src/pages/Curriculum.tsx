import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import { Clock, Code, Brain, Database, Layers, Cpu, Zap, GitBranch } from "lucide-react";

const modules = [
  {
    week: "1-2",
    title: "Python & Math Foundations",
    icon: Code,
    topics: ["Linear Algebra & Calculus", "Probability & Statistics", "Advanced Python & NumPy", "Data Structures for ML"],
  },
  {
    week: "3-4",
    title: "Machine Learning Core",
    icon: Brain,
    topics: ["Supervised & Unsupervised Learning", "Feature Engineering", "Model Evaluation & Tuning", "Scikit-learn Mastery"],
  },
  {
    week: "5-7",
    title: "Deep Learning & Neural Networks",
    icon: Layers,
    topics: ["Neural Network Architectures", "CNNs & Computer Vision", "RNNs & Sequence Models", "PyTorch Deep Dive"],
  },
  {
    week: "8-10",
    title: "Transformers & LLMs",
    icon: Cpu,
    topics: ["Attention Mechanisms", "GPT Architecture from Scratch", "Fine-Tuning & RLHF", "Prompt Engineering & RAG"],
  },
  {
    week: "11-12",
    title: "MLOps & Production Systems",
    icon: Database,
    topics: ["Model Serving & APIs", "CI/CD for ML", "Monitoring & Observability", "Kubernetes & Docker"],
  },
  {
    week: "13-14",
    title: "AI Agents & Advanced Topics",
    icon: Zap,
    topics: ["LangChain & AI Agents", "Reinforcement Learning", "Multimodal AI", "Generative Models"],
  },
  {
    week: "15-16",
    title: "Capstone & Career Prep",
    icon: GitBranch,
    topics: ["Production Capstone Project", "Portfolio Development", "Interview Preparation", "Hiring Partner Introductions"],
  },
];

const Curriculum = () => (
  <div className="min-h-screen bg-background relative">
    <MatrixRain />
    <Navbar />
    <main className="relative z-10 pt-28 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// Curriculum</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mt-3">
            16-Week <span className="text-gradient-purple">Deep Dive</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            From fundamentals to production-grade AI systems. Every module builds toward your capstone project.
          </p>
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full border border-border bg-card font-mono text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>800+ hours of hands-on learning</span>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <mod.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-neon-cyan">Week {mod.week}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">{mod.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.topics.map((topic) => (
                      <div key={topic} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Curriculum;
