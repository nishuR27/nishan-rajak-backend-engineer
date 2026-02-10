export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  techStack: string[];
  github: string;
  live?: string;
  category: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "gitignore-generator",
    title: "Gitignore Generator",
    shortDesc: "CLI tool for generating .gitignore files with template support",
    longDesc: "A command-line utility that generates comprehensive .gitignore files based on project type, language, and framework. Supports custom templates and composable rule sets.",
    techStack: ["Python", "CLI", "Git"],
    github: "https://github.com/nishuR31/gitignore-generator",
    category: "Tools",
    featured: true,
  },
  {
    id: "statusmap",
    title: "StatusMap",
    shortDesc: "Real-time service status monitoring dashboard",
    longDesc: "A monitoring dashboard that tracks service health, uptime metrics, and incident history. Built with a focus on reliability and real-time data streaming.",
    techStack: ["Node.js", "Express", "WebSocket", "MongoDB"],
    github: "https://github.com/nishuR31/statusmap",
    category: "Backend",
    featured: true,
  },
  {
    id: "envf",
    title: "Envf",
    shortDesc: "Environment variable management and validation tool",
    longDesc: "A utility for managing, validating, and syncing environment variables across development, staging, and production environments with schema enforcement.",
    techStack: ["TypeScript", "Node.js", "CLI"],
    github: "https://github.com/nishuR31/envf",
    category: "Tools",
    featured: true,
  },
  {
    id: "sol3",
    title: "Sol3",
    shortDesc: "Lightweight authentication middleware framework",
    longDesc: "A modular authentication framework supporting JWT, OAuth, and session-based auth flows. Designed for easy integration into Express/Fastify applications.",
    techStack: ["TypeScript", "Express", "JWT", "OAuth"],
    github: "https://github.com/nishuR31/sol3",
    category: "Backend",
    featured: true,
  },
  {
    id: "focusmode",
    title: "FocusMode",
    shortDesc: "Distraction-blocking productivity application",
    longDesc: "A productivity tool that blocks distracting websites and apps during focus sessions. Features customizable blocklists, scheduling, and session analytics.",
    techStack: ["JavaScript", "Chrome API", "Node.js"],
    github: "https://github.com/nishuR31/focusmode",
    category: "Applications",
    featured: false,
  },
  {
    id: "hbday",
    title: "HBday",
    shortDesc: "Automated birthday greeting system with scheduling",
    longDesc: "An automated system that sends personalized birthday greetings via email and messaging platforms. Features template customization and scheduling engine.",
    techStack: ["Node.js", "Nodemailer", "Cron", "MongoDB"],
    github: "https://github.com/nishuR31/hbday",
    category: "Backend",
    featured: false,
  },
  {
    id: "scafe",
    title: "Scafe",
    shortDesc: "Scaffolding tool for rapid project bootstrapping",
    longDesc: "A project scaffolding CLI that generates boilerplate code with best practices baked in. Supports multiple frameworks and custom template engines.",
    techStack: ["TypeScript", "Node.js", "CLI", "Templates"],
    github: "https://github.com/nishuR31/scafe",
    category: "Tools",
    featured: false,
  },
  {
    id: "sportsspirit",
    title: "SportsSpirit",
    shortDesc: "Sports event management and scoring platform",
    longDesc: "A full-stack platform for managing sports events, tracking scores, and generating leaderboards. Features real-time updates and team management.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/nishuR31/sportsspirit",
    category: "Applications",
    featured: false,
  },
  {
    id: "github-recap",
    title: "GitHub Recap",
    shortDesc: "Annual GitHub contribution analyzer and visualizer",
    longDesc: "Generates a visual recap of GitHub contributions, pull requests, and repository activity over a given time period. Features shareable summary cards.",
    techStack: ["TypeScript", "GitHub API", "React", "D3.js"],
    github: "https://github.com/nishuR31/github-recap",
    category: "Tools",
    featured: true,
  },
];

export const categories = ["All", "Backend", "Tools", "Applications"];
