import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ClickSpark from "./ClickSpark";

const ProjectsSection = () => {
  const [active, setActive] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-spacing relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-lg mx-auto"
        >
          Systems, tools, and platforms designed with scalability and clean architecture in mind
        </motion.p>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-2 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <ClickSpark key={cat}>
              <button
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active === cat
                    ? "gradient-bg text-primary-foreground glow"
                    : "glass text-muted-foreground hover:text-foreground hover:glow-border"
                }`}
              >
                {cat}
              </button>
            </ClickSpark>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
