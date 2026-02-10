import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Layers, Workflow, Code2, Database } from "lucide-react";

const highlights = [
  { icon: Server, label: "Scalable APIs", desc: "REST & GraphQL systems built for reliability and high throughput" },
  { icon: Shield, label: "Auth Architecture", desc: "JWT, OAuth, session-based flows with security-first design" },
  { icon: Layers, label: "Modular Design", desc: "Clean middleware orchestration & service layer patterns" },
  { icon: Workflow, label: "System Thinking", desc: "End-to-end architecture with performance & scalability focus" },
  { icon: Database, label: "Data Layer", desc: "Schema design, ORM patterns, caching strategies" },
  { icon: Code2, label: "Clean Code", desc: "Production-quality code with testing & documentation" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">Who I Am</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a backend-focused software engineering student who designs and builds production-grade systems.
            My work centers on scalable REST architectures, secure authentication flows, middleware orchestration,
            and clean API design — all driven by a philosophy that backend code should be as intentional and
            well-crafted as the products it powers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-500 group cursor-default"
            >
              <div className="w-11 h-11 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-lg">{label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
