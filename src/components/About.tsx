const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <p className="text-lg text-muted-foreground">
              I'm a Software Engineering student at Istanbul Aydin University (IAU), expected to graduate in June 2025. With a strong foundation in both frontend and backend development, I've worked on various projects ranging from AI-driven platforms to financial analysis tools.
            </p>
          </div>
          <div className="animate-slide-in">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Languages</h4>
                <ul className="text-muted-foreground">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Technologies</h4>
                <ul className="text-muted-foreground">
                  <li>React</li>
                  <li>Node.js</li>
                  <li>AWS</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;