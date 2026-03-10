import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import { ExternalLink, MapPin } from "lucide-react";

const alumni = [
  { name: "Sarah Chen", role: "AI Research Scientist", company: "Google DeepMind", location: "London, UK", cohort: "#12", salary: "$210K" },
  { name: "Marcus Williams", role: "Senior ML Engineer", company: "OpenAI", location: "San Francisco, CA", cohort: "#8", salary: "$240K" },
  { name: "Aisha Patel", role: "Computer Vision Lead", company: "Tesla", location: "Palo Alto, CA", cohort: "#10", salary: "$195K" },
  { name: "James Liu", role: "MLOps Architect", company: "Meta AI", location: "Menlo Park, CA", cohort: "#14", salary: "$185K" },
  { name: "Elena Rodriguez", role: "NLP Engineer", company: "Anthropic", location: "San Francisco, CA", cohort: "#11", salary: "$220K" },
  { name: "David Kim", role: "ML Platform Lead", company: "NVIDIA", location: "Santa Clara, CA", cohort: "#9", salary: "$205K" },
  { name: "Fatima Al-Hassan", role: "AI Product Manager", company: "Microsoft", location: "Seattle, WA", cohort: "#13", salary: "$190K" },
  { name: "Ryan O'Brien", role: "Research Engineer", company: "DeepMind", location: "London, UK", cohort: "#7", salary: "$200K" },
];

const Alumni = () => (
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
          <span className="font-mono text-xs text-neon-cyan uppercase tracking-widest">// Alumni Network</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mt-3">
            Our <span className="text-gradient-cyan">Graduates</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            2,800+ engineers building the future of AI at the world's most innovative companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {alumni.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-heading font-bold text-primary">
                  {person.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">Cohort {person.cohort}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <h3 className="font-heading font-bold text-foreground">{person.name}</h3>
              <p className="font-mono text-xs text-primary mt-0.5">{person.role}</p>
              <p className="font-mono text-xs text-muted-foreground">{person.company}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="font-mono text-xs">{person.location}</span>
                </div>
                <span className="font-mono text-xs text-neon-green font-semibold">{person.salary}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Alumni;
