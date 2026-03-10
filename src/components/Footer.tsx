import { Link } from "react-router-dom";
import { Terminal, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-md bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-primary" />
            </div>
            <span className="font-mono text-lg font-bold text-gradient-purple">NICHE.ai</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The world's most elite AI & ML coding bootcamp. Transform your career in 16 weeks.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-sm text-primary mb-4">// Programs</h4>
          <div className="space-y-2">
            {["AI Engineering", "Deep Learning", "MLOps", "Computer Vision"].map((item) => (
              <Link key={item} to="/curriculum" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-sm text-primary mb-4">// Company</h4>
          <div className="space-y-2">
            {["About", "Blog", "Careers", "Contact"].map((item) => (
              <a key={item} href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-sm text-primary mb-4">// Connect</h4>
          <div className="flex gap-3">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; 2026 NICHE.ai — All rights reserved
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          <span className="text-neon-green">●</span> All systems operational
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
