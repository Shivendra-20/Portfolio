import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "./BrandIcons";

const ContactSection = () => {
  const contacts = [
    {
      href: "mailto:shivendrapawaiya978@gmail.com",
      icon: Mail,
      label: "Email",
      value: "shivendrapawaiya978@gmail.com",
    },
    {
      href: "https://github.com/Shivendra-20",
      icon: Github,
      label: "GitHub",
      value: "github.com/Shivendra-20",
      external: true,
    },
    {
      href: "https://www.linkedin.com/in/shivendra-pawaiya-879708323/",
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shivendra-pawaiya",
      external: true,
    },
    {
      href: "https://x.com/Shivendra_1034",
      icon: Twitter,
      label: "Twitter / X",
      value: "x.com/Shivendra_1034",
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-surface">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="mb-4 font-heading text-sm text-primary">
          {"// contact"}
        </div>

        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <p className="text-muted-foreground max-w-lg">
          I'm always open to discussing new projects, ideas, or opportunities to collaborate.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contacts.map(({ href, icon: Icon, label, value, external }, i) => (
          <motion.a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              y: -3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
            }}
            className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
          >
            <Icon size={20} className="text-primary" />
            <div>
              <p className="text-xs text-muted-foreground font-heading">
                {label}
              </p>
              <p className="text-sm text-foreground">{value}</p>
            </div>
          </motion.a>
        ))}

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border"
        >
          <MapPin size={20} className="text-primary" />
          <div>
            <p className="text-xs text-muted-foreground font-heading">
              Location
            </p>
            <p className="text-sm text-foreground">
              NIT Jalandhar, Punjab
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;