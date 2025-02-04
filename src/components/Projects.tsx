const Projects = () => {
  const projects = [
    {
      title: "Dev Overflow: Full-stack AI-driven Platform",
      duration: "Oct 2024 - Present",
      description: "Developed a full-stack platform using Next.js, MongoDB, Neo4Auth, and TailwindCSS, featuring AI-powered answers, voting systems, and personalized content recommendations.",
      points: [
        "Implemented 10+ interactive features including filtering, question-and-answer functionality, voting systems",
        "Enhanced user engagement through AI-driven content recommendations and platform optimization",
        "Integrated a flexible authentication system (Email, Google, GitHub) and AI-driven answer generation using OpenAI for enhanced user interaction"
      ]
    },
    {
      title: "LLM Evaluation Platform",
      duration: "OCT 2024",
      description: "Built an evaluation platform for LLM models in addition to Gemini 1.5 Pro evaluation.",
      points: [
        "Designed and implemented a Prisma-backed PostgreSQL database managing 100k+ data points",
        "Developed a full-stack application using Next.js for the frontend and Express.js/Node.js for the backend, enabling seamless integration and performance optimization"
      ]
    },
    {
      title: "US-Bank Client Data Analysis",
      duration: "Nov 2024",
      description: "Using LLaMA and OpenAI to evaluate accuracy of predicting when banking customers need assistance.",
      points: [
        "Created an end-to-end solution complete with sending automated email to customer based on feature engineering, normalization, model training, evaluating and hyperparameter tuning across 5 LLM models"
      ]
    },
    {
      title: "Financial Analysis & Automation with LLMs",
      duration: "OCT 2024",
      description: "Automated financial analysis across 10,000+ stock descriptions using a 16-dimension vector index.",
      points: [
        "Optimized data processing by parallelizing tasks with 10 concurrent workers, efficiently handling together 100k+ stock tickers overcoming I/O bound latency"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-accent transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <ul className="text-muted-foreground space-y-2">
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
    </section>
  );
};

export default Projects;