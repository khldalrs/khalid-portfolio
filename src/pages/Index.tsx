import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
