import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import heroOrb from "@/assets/hero-orb.png";
import ClickSpark from "./ClickSpark";

const stats = [
  { value: "9+", label: "Projects" },
  { value: "5+", label: "Backend Systems" },
  { value: "10+", label: "Technologies" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden laser-bg">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground w-fit"
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse-glow" />
            Available for opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
          >
            <p className="text-sm font-mono text-primary mb-2 flex items-center gap-2">
              <Terminal size={14} />
              backend_engineer.init()
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1]">
              Nishan{" "}
              <span className="gradient-text">Rajak</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Building{" "}
            <span className="text-foreground font-medium">scalable REST systems</span>,{" "}
            <span className="text-foreground font-medium">authentication architecture</span>, and{" "}
            <span className="text-foreground font-medium">modular backend design</span>{" "}
            with production-level thinking.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6 }}
            className="flex items-center gap-4 pt-2"
          >
            <ClickSpark>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="gradient-bg text-primary-foreground px-7 py-3.5 rounded-lg font-medium text-sm hover:opacity-90 transition-all glow hover:glow-strong"
              >
                View Projects
              </a>
            </ClickSpark>
            <ClickSpark>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="glass px-7 py-3.5 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-all glow-border"
              >
                Contact Me
              </a>
            </ClickSpark>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="flex items-center gap-5 pt-4"
          >
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
                <Icon size={20} />
              </a>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex items-center gap-8 pt-6 border-t border-border/30 mt-2"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 2.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <img
              src={heroOrb}
              alt="Futuristic glowing orb representing backend engineering"
              className="w-72 h-72 md:w-[420px] md:h-[420px] object-contain animate-float drop-shadow-2xl"
            />
            <div className="absolute inset-0 w-72 h-72 md:w-[420px] md:h-[420px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
            {/* Orbit ring */}
            <div className="absolute inset-[-20px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-[-40px] rounded-full border border-accent/5 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
