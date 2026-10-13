import { motion } from "framer-motion";
import AnimatedSection from "./Animated";
import { StaggerContainer, StaggerItem } from "./Stagger";

const skills = [
  { category: "Languages", items: ["C++", "JavaScript", "Python", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB"] },
  { category: "ML / Data", items: ["NumPy", "Pandas", "Scikit-learn"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      
      <AnimatedSection>
        <div className="mb-4 font-heading text-sm text-primary">
          {"// skills"}
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-foreground">
          Tech <span className="gradient-text">Stack</span>
        </h2>
      </AnimatedSection>

      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {skills.map((group) => (
          <StaggerItem key={group.category}>
            <motion.div
              whileHover={{
                y: -4,
                boxShadow: "0 8px 30px hsl(142 71% 45% / 0.1)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
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
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

    </section>
  );
};

export default SkillsSection;