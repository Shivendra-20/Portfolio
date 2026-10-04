const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 md:px-16 lg:px-24 border-t border-border text-center">
      <p className="text-sm text-muted-foreground font-heading">
        <span className="text-primary">Â©</span> {year} Shivendra. Built with{" "}
        <span className="text-primary">React</span> &{" "}
        <span className="text-primary">Tailwind</span>.
      </p>
    </footer>
  );
};

export default Footer;