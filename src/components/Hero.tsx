import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16">
      <div className="container mx-auto px-6">
        <div className="animate-fade-in space-y-8">
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:khldars@gmail.com" className="text-foreground hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <span className="text-foreground hover:text-accent transition-colors cursor-pointer">
              <Phone className="w-6 h-6" />
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate software engineer specializing in full-stack development with expertise in React, Node.js, and cloud technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;