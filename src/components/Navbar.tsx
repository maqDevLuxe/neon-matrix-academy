import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Curriculum", path: "/curriculum" },
  { label: "Alumni", path: "/alumni" },
  { label: "Enroll", path: "/enroll" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center glow-purple">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono text-lg font-bold text-gradient-purple">
            NICHE.ai
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2 font-mono text-sm transition-colors ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-md bg-primary/10 border border-primary/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{`> ${link.label}`}</span>
            </Link>
          ))}
        </div>

        <Link
          to="/enroll"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary font-mono text-sm font-medium text-primary-foreground glow-purple hover:opacity-90 transition-opacity"
        >
          ./apply_now
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md font-mono text-sm transition-colors ${
                    location.pathname === link.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {`> ${link.label}`}
                </Link>
              ))}
              <Link
                to="/enroll"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md bg-primary font-mono text-sm text-center text-primary-foreground"
              >
                ./apply_now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
