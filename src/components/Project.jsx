import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Github } from "./BrandIcons";

const projects = [
  {
    title: "TradeWise",
    desc: "Paper trading platform with virtual balance, market/limit orders, portfolio tracking, and live NSE prices via Upstox WebSocket.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/Shivendra-20/Tradewise",
  },
  {
    title: "SentryAid",
    desc: "Role-based women's safety platform with real-time SOS dispatch, live chat, and location sharing via Socket.IO.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    github: "https://github.com/Shivendra-20/SentryAid",
  },
  {
    title: "Portfolio",
    desc: "Personal developer portfolio built with React, Tailwind CSS, and Vite with a terminal-inspired theme.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/Shivendra-20/Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="mb-4 font-heading text-sm text-primary">
          {"// projects"}
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -6,
              boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
            }}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all group h-full"
          >
            <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-[11px] font-heading rounded bg-secondary text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 text-muted-foreground">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-primary transition-colors"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={18} />
                </motion.a>
              )}

              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-primary transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={18} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;