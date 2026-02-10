import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroOrb from "@/assets/hero-orb.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden laser-bg">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground w-fit"
          >
            <span className="w-2 h-2 rounded-full gradient-bg animate-pulse-glow" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Nishan{" "}
            <span className="gradient-text">Rajak</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Backend engineer building{" "}
            <span className="text-foreground font-medium">scalable REST systems</span>,{" "}
            <span className="text-foreground font-medium">authentication architecture</span>, and{" "}
            <span className="text-foreground font-medium">modular backend design</span>{" "}
            with production-level thinking.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="glass px-6 py-3 rounded-lg font-medium text-sm text-foreground hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
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
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative">
            <img
              src={heroOrb}
              alt="Futuristic glowing orb"
              className="w-72 h-72 md:w-96 md:h-96 object-contain animate-float drop-shadow-2xl"
            />
            <div className="absolute inset-0 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
