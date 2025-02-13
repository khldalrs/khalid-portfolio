import { Github, Linkedin, Instagram, Youtube } from "lucide-react";
import { Download } from "lucide-react";
import TikTok from "./icons/TikTok";

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
              A <span className="text-primary">Software Engineer </span>&
              <span className="text-primary"> Content Creator</span>
            </p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <span className="font-bold">Software Engineering student</span> at{" "}
            <span className="font-bold">Istanbul Aydin University</span>,
            graduating in <span className="font-bold">May 2025</span>. I
            specialize in{" "}
            <span className="font-bold">full-stack development</span> and
            <span className="font-bold"> AI</span>, building scalable
            applications while sharing technical insights with{" "}
            <span className="font-bold">35,000+</span> developers, accumulating
            over <span className="font-bold">2.5M impressions</span>.
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
              <a
                href="https://www.tiktok.com/@khalidtechdev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group"
              >
                <TikTok />
              </a>
            </div>

            <a
              href="/Khalid Alrais CV.pdf"
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
