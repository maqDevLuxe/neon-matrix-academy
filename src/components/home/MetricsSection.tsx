import { motion } from "framer-motion";

const metrics = [
  { value: "98%", label: "Job Placement Rate", sub: "Within 6 months of graduation" },
  { value: "$185K", label: "Avg Starting Salary", sub: "For AI/ML engineer roles" },
  { value: "16", label: "Weeks to Career Change", sub: "Intensive, full-time program" },
  { value: "4.9/5", label: "Student Satisfaction", sub: "From 2,500+ graduates" },
];

const MetricsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-neon-green uppercase tracking-widest">// Outcomes</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
          Results That <span className="text-gradient-cyan">Speak</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, type: "spring" }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-xl border border-border bg-card"
          >
            <div className="text-4xl md:text-5xl font-heading font-bold text-gradient-purple mb-2">
              {metric.value}
            </div>
            <div className="font-mono text-sm text-foreground font-medium">{metric.label}</div>
            <div className="font-mono text-xs text-muted-foreground mt-1">{metric.sub}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
