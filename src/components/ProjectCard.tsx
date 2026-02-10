import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
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
      className="glass rounded-xl overflow-hidden glow-border hover:glow transition-all duration-500 group relative"
    >
      {/* Top accent line */}
      <div className="h-[2px] w-full gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {project.featured && (
                <span className="text-[9px] font-mono uppercase tracking-widest text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  Featured
                </span>
              )}
              <span className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">
                {project.category}
              </span>
            </div>
            <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all shrink-0"
            aria-label={`${project.title} GitHub`}
          >
            <ArrowUpRight size={16} />
          </a>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{project.shortDesc}</p>

        <div className="flex items-center justify-between pt-2 border-t border-border/30">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
