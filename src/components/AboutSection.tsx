import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Shield, Layers, Workflow } from "lucide-react";

const highlights = [
  { icon: Server, label: "Scalable APIs", desc: "REST & GraphQL systems built for reliability" },
  { icon: Shield, label: "Auth Architecture", desc: "JWT, OAuth, session management flows" },
  { icon: Layers, label: "Modular Design", desc: "Clean middleware & service layer patterns" },
  { icon: Workflow, label: "System Thinking", desc: "End-to-end architecture with performance focus" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing relative" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm a backend-focused software engineering student who designs and builds production-grade systems.
            My work centers on scalable REST architectures, secure authentication flows, middleware orchestration,
            and clean API design — all driven by a philosophy that backend code should be as intentional and
            well-crafted as the products it powers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 glow-border hover:glow transition-shadow duration-500 group"
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{label}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
