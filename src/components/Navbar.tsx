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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">Khalid Alrais</span>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollTo("about")} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollTo("experience")} className="text-foreground hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollTo("contact")} className="text-foreground hover:text-primary transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;