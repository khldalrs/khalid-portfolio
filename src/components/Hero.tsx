import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="animate-fade-in space-y-8">
          <div className="text-4xl md:text-6xl font-bold space-y-2">
            <p>
              I'm <span className="text-primary">Khalid</span>,
            </p>
            <p>
              A <span className="text-primary">Software Engineer</span>
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Software Engineering student at Istanbul Aydin University,
            graduating in June 2025. Passionate about full-stack development and
            AI, I've built scalable applications integrating modern web
            technologies and AI-driven solutions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/khalidalrais/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-[#ffd300] transition-colors group"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/khldalrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/khalidtechdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/@khalidtechdev0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            <a
              href="/public/Khalid Alrais CV.pdf"
              download
              className="flex items-center space-x-2 bg-white text-primary-foreground px-6 py-2 rounded-full hover:bg-[#ffd300] transition-colors"
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
