import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Credentials = () => {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center space-x-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group">
            <Github className="w-8 h-8" />
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group">
            <Linkedin className="w-8 h-8" />
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
          </a>
          <a href="mailto:khldars@gmail.com" className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group">
            <Mail className="w-8 h-8" />
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
          </a>
          <div className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors group cursor-pointer">
            <Phone className="w-8 h-8" />
            <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">Phone</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;