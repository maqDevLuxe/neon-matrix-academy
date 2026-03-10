import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const counters = [
  { target: 2500000, label: "Lines of Code Written", suffix: "+" },
  { target: 2847, label: "Graduates", suffix: "+" },
  { target: 450, label: "Hiring Partners", suffix: "+" },
  { target: 98, label: "% Employment Rate", suffix: "%" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  const format = (n: number) => {
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}K`;
    return n.toString();
  };

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-gradient-purple">
      {format(count)}{suffix !== "%" ? suffix : ""}
    </span>
  );
};

const CountersSection = () => (
  <section className="py-24 border-y border-border">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((counter, i) => (
          <motion.div
            key={counter.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <AnimatedCounter target={counter.target} suffix={counter.suffix} />
            <div className="font-mono text-xs text-muted-foreground mt-2">{counter.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
