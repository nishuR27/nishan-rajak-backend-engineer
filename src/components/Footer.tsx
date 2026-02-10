import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border/30 py-10 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold gradient-text">NR.</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nishan Rajak. Built with precision.
            </span>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: Github, href: "https://github.com/nishuR31", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nishan.developer.dev@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollTop}
            className="glass w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:glow transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
