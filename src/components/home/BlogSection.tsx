import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "Why Transformers Changed Everything", tag: "Deep Learning", date: "Mar 2026", read: "8 min" },
  { title: "Building Production ML Pipelines at Scale", tag: "MLOps", date: "Feb 2026", read: "12 min" },
  { title: "The Rise of Multimodal AI Agents", tag: "AI Agents", date: "Feb 2026", read: "6 min" },
];

const BlogSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest">// Blog</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            AI Tech <span className="text-gradient-purple">Insights</span>
          </h2>
        </div>
        <a href="#" className="hidden md:flex items-center gap-1 font-mono text-sm text-primary hover:underline">
          View all <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded-full bg-primary/10 font-mono text-xs text-primary">{post.tag}</span>
              <span className="font-mono text-xs text-muted-foreground">{post.read}</span>
            </div>
            <h3 className="font-heading text-lg font-bold group-hover:text-primary transition-colors mb-2">{post.title}</h3>
            <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
