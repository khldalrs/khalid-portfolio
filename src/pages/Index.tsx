import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Skills from "@/components/skills";
import Leadership from "@/components/Leadership";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
