import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass rounded-xl p-6 flex flex-col gap-4 glow-border hover:glow transition-all duration-500 group"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Featured</span>
          )}
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`${project.title} GitHub`}
          >
            <Github size={18} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.shortDesc}</p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
