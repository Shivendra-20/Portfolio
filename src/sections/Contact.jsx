import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      <div className="mb-4 font-heading text-sm text-primary">
      </div>
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
        Let's <span className="gradient-text">Connect</span>
      </h2>
      <p className="text-muted-foreground mb-10 max-w-lg">
        I'm always open to discussing new projects, ideas, or opportunities to collaborate.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <a
          href="mailto:shivendrapawaiya978@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <Mail size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-heading">Email</p>
            <p className="text-sm text-foreground">shivendrapawaiya978@gmail.com</p>
          </div>
        </a>
        <a
          href="https://github.com/Shivendra-20"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <Github size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-heading">GitHub</p>
            <p className="text-sm text-foreground">github.com/shivendra</p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/shivendra-pawaiya-879708323/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
        >
          <Linkedin size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-heading">LinkedIn</p>
            <p className="text-sm text-foreground">linkedin.com/in/shivendra</p>
          </div>
        </a>
        <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
          <MapPin size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-heading">Location</p>
            <p className="text-sm text-foreground">NIT Jalandhar, Punjab</p>
          </div>
        </div>
      </div>
    </section>
  );
};
