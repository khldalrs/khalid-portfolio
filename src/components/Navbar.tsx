import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="px-6 py-4">
        <div className="flex items-center justify-center space-x-8">
          <button onClick={() => scrollTo("about")} className="text-foreground hover:text-accent transition-colors">About</button>
          <button onClick={() => scrollTo("experience")} className="text-foreground hover:text-accent transition-colors">Experience</button>
          <button onClick={() => scrollTo("projects")} className="text-foreground hover:text-accent transition-colors">Projects</button>
          <button onClick={() => scrollTo("contact")} className="text-foreground hover:text-accent transition-colors">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;