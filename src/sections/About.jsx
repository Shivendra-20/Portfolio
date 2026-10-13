export const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24 animation-delay-400">
      <div className="mb-4 font-heading text-sm text-primary">
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground ">
        About <span className="gradient-text">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a 3rd year Information Technology student at the National Institute
            of Technology, Jalandhar. I'm passionate about solving complex problems
            and building impactful software.
          </p>
          <p>
            Currently deepening my foundations in Data Structures & Algorithms with
            C++, while building full-stack applications with the MERN stack and
            exploring Machine Learning.
          </p>
          <p>
            I believe in learning by building — every project is a chance to push
            boundaries and create something meaningful.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card border border-border border-glow">
            <h3 className="font-heading text-sm text-primary mb-3">{">"} Current Focus</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                DSA with C++ — Problem Solving & Competitive Programming
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                MERN Stack — MongoDB, Express, React, Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Machine Learning — Python, Scikit-learn, TensorFlow
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-heading text-sm text-primary mb-3">{">"} Education</h3>
            <p className="text-foreground font-medium text-sm">NIT Jalandhar</p>
            <p className="text-muted-foreground text-sm">B.Tech Information Technology • 2nd Year</p>
          </div>
        </div>
      </div>
    </section>
  );
};
