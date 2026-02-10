export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Mongoose"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "Linux", "CI/CD", "Nginx", "AWS"],
  },
  {
    category: "Concepts",
    skills: ["System Design", "Auth Architecture", "Middleware", "API Design", "Microservices", "Caching"],
  },
];
