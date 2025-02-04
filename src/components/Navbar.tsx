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
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-auto max-w-screen-xl hidden md:block ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 py-4 rounded-full mx-4 my-3 border border-[#ffd300]">
        <div className="flex items-center justify-center space-x-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm"
          >
            Experience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-foreground hover:text-primary transition-colors font-medium relative group text-sm"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
