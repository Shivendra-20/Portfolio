const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Tailwind CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
  { category: "ML / Data", items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="mb-4 font-heading text-sm text-primary">
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground">
        Tech <span className="gradient-text">Stack</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {skills.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
          >
            <h3 className="font-heading text-sm text-primary mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-heading rounded-md bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
