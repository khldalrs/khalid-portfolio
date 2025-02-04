import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground mb-8">
              I'm currently open to new opportunities. Feel free to reach out if you'd like to connect!
            </p>
            <div className="space-y-6">
              <a href="mailto:khldars@gmail.com" className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
                <span>khldars@gmail.com</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center space-x-4 text-foreground">
                <Phone className="w-6 h-6" />
                <span>Available upon request</span>
              </div>
            </div>
          </div>
          <div className="animate-slide-in">
            <div className="bg-muted/5 p-8 rounded-lg border border-muted/20">
              <h3 className="text-xl font-semibold mb-4">Current Location</h3>
              <p className="text-muted-foreground">Dubai • Istanbul</p>
              <p className="text-muted-foreground mt-4">Open to remote opportunities worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;