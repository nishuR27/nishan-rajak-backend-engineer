import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nishan Rajak. Built with precision.
      </span>
      <div className="flex items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/nishuR31" },
          { icon: Linkedin, href: "#" },
          { icon: Mail, href: "mailto:nishan.developer.dev@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
