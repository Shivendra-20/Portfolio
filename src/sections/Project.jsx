import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal developer portfolio built with React and Tailwind CSS featuring a terminal-inspired dark theme.",
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager App",
    desc: "Full-stack task management application with authentication, CRUD operations, and real-time updates.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "#",
  },
  {
    title: "ML Price Predictor",
    desc: "Machine learning model to predict house prices using regression techniques and feature engineering.",
    tags: ["Python", "Scikit-learn", "Pandas"],
    github: "#",
  },
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="mb-4 font-heading text-sm text-primary">
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all hover:border-glow group"
          >
            <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {project.desc}
            </p>
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
            <div className="flex items-center gap-3 text-muted-foreground">
              {project.github && (
                <a href={project.github} className="hover:text-primary transition-colors">
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a href={project.live} className="hover:text-primary transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
