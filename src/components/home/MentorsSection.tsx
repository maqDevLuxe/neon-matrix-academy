import { motion } from "framer-motion";

const mentors = [
  { name: "Dr. Sarah Chen", role: "Head of AI Research", company: "Ex-Google DeepMind", specialty: "Transformers & LLMs" },
  { name: "Marcus Williams", role: "Lead ML Engineer", company: "Ex-OpenAI", specialty: "Reinforcement Learning" },
  { name: "Dr. Aiko Tanaka", role: "VP of Engineering", company: "Ex-NVIDIA", specialty: "Computer Vision" },
  { name: "James Rodriguez", role: "Principal Architect", company: "Ex-Tesla AI", specialty: "MLOps & Systems" },
];

const MentorsSection = () => (
  <section className="py-24 bg-card/30">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">// Mentors</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
          Learn from <span className="text-gradient-cyan">Elite Engineers</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, i) => (
          <motion.div
            key={mentor.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
          >
            <div className="w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 text-2xl font-heading font-bold text-primary">
              {mentor.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-heading font-bold text-foreground">{mentor.name}</h3>
            <p className="font-mono text-xs text-primary mt-1">{mentor.role}</p>
            <p className="font-mono text-xs text-muted-foreground mt-0.5">{mentor.company}</p>
            <div className="mt-4 px-3 py-1.5 rounded-md bg-primary/5 border border-primary/10">
              <span className="font-mono text-xs text-muted-foreground">{mentor.specialty}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MentorsSection;
