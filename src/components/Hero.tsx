import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-fade-in space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="text-primary">Software</span> Engineer
            <span className="text-primary">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-center">
            A passionate software engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies
            <span className="text-primary">.</span>
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/resume.pdf"
              download
              className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;