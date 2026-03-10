import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MatrixRain from "@/components/MatrixRain";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

const Enroll = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background relative">
      <MatrixRain />
      <Navbar />
      <main className="relative z-10 pt-28 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-neon-green uppercase tracking-widest">// Apply Now</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mt-3">
              Begin Your <span className="text-gradient-purple">Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
              Complete your application in 3 simple steps. No upfront payment required.
            </p>
          </motion.div>

          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <button
                  onClick={() => setStep(s)}
                  className={`w-10 h-10 rounded-full font-mono text-sm font-bold flex items-center justify-center border transition-all ${
                    s === step
                      ? "bg-primary border-primary text-primary-foreground glow-purple"
                      : s < step
                      ? "bg-neon-green/20 border-neon-green/50 text-neon-green"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {s < step ? <CheckCircle className="w-4 h-4" /> : s}
                </button>
                {s < 3 && <div className={`w-12 h-px ${s < step ? "bg-neon-green/50" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="p-8 rounded-xl border border-border bg-card">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-heading text-xl font-bold">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground mb-2">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground mb-2">Current Role</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Software Engineer" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-heading text-xl font-bold">Technical Background</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground mb-2">Years of Coding Experience</label>
                      <select className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                        <option>Less than 1 year</option>
                        <option>1-3 years</option>
                        <option>3-5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-muted-foreground mb-2">Why AI/ML?</label>
                      <textarea className="w-full px-4 py-3 rounded-lg bg-muted border border-border font-mono text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none h-28" placeholder="Tell us about your motivation..." />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-heading text-xl font-bold">Payment Plan</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-heading font-bold text-foreground">Income Share Agreement</p>
                          <p className="font-mono text-xs text-muted-foreground mt-1">$0 upfront — pay 15% of salary after hired</p>
                        </div>
                        <Shield className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div className="p-4 rounded-lg border border-border bg-card cursor-pointer hover:border-muted-foreground/30 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-heading font-bold text-foreground">Upfront Payment</p>
                          <p className="font-mono text-xs text-muted-foreground mt-1">$18,000 — save $12,000 vs ISA cap</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={() => step < 3 ? setStep(step + 1) : null}
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary font-mono text-sm font-semibold text-primary-foreground glow-purple hover:opacity-90 transition-all"
              >
                {step === 3 ? "Submit Application" : "Continue"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Enroll;
