import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "@/data/skills";

const allSkills = skillGroups.flatMap((g) => g.skills);
const doubledSkills = [...allSkills, ...allSkills];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-spacing relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest mb-4 block">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Technologies and concepts I work with daily</p>
        </motion.div>

        {/* Marquee / Logo Loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative py-8 mb-12"
        >
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex animate-marquee w-max gap-4">
            {doubledSkills.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground whitespace-nowrap hover:glow hover:text-primary transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Grouped skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + gi * 0.1 }}
              className="glass rounded-xl p-6 glow-border hover:glow transition-all duration-500"
            >
              <h3 className="font-semibold text-sm text-primary mb-4 font-mono uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full gradient-bg" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
