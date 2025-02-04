const About = () => {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="animate-slide-in">
          <p className="text-lg text-muted-foreground">
            I'm a Software Engineering student at Istanbul Aydin University (IAU), expected to graduate in June 2025. With a strong foundation in both frontend and backend development, I've worked on various projects ranging from AI-driven platforms to financial analysis tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;