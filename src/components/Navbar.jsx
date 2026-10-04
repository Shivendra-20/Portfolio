import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./Theme_Toggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        
        {/* Logo */}
        <a href="#" className="font-heading font-bold text-lg text-foreground">
          <span className="text-primary">{"<"}</span>
          Shivendra
          <span className="text-primary">{" />"}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-heading text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}

          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-foreground"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-heading text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;