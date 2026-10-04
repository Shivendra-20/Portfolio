import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "./BrandIcons";

const ease = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  const socials = [
    { href: "https://github.com/Shivendra-20", icon: Github },
    { href: "https://www.linkedin.com/in/shivendra-pawaiya-879708323/", icon: Linkedin },
    { href: "https://x.com/Shivendra_1034", icon: Twitter },
    { href: "mailto:shivendrapawaiya978@gmail.com", icon: Mail },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* Floating background orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/6 w-48 h-48 rounded-full bg-primary/3 blur-3xl pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Terminal line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="mb-6 inline-flex items-center gap-2 text-muted-foreground font-heading text-sm"
      >
        <span className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
        <span>~/shivendra</span>
        <span className="text-primary">$</span>
        <span className="text-foreground">whoami</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease }}
        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-4"
      >
        <span className="text-foreground">Hi, I'm </span>
        <span className="gradient-text">Shivendra</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease }}
        className="text-xl md:text-2xl text-muted-foreground font-body max-w-2xl mb-2"
      >
        IT Undergrad @{" "}
        <span className="text-foreground font-semibold">
          NIT Jalandhar
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease }}
        className="text-lg text-muted-foreground font-body max-w-2xl mb-10"
      >
        Building things with{" "}
        <span className="text-primary">C++</span>,{" "}
        <span className="text-primary">MERN</span> &{" "}
        <span className="text-primary">Machine Learning</span>
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease }}
        className="flex items-center gap-4 mb-16"
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-primary text-primary-foreground font-heading font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </motion.a>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 border border-border text-foreground font-heading font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          View Work
        </motion.a>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease }}
        className="flex items-center gap-5 text-muted-foreground"
      >
        {socials.map(({ href, icon: Icon }) => (
          <motion.a
            key={href}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="hover:text-primary transition-colors"
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll down */}
      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default HeroSection;