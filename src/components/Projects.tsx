const Projects = () => {
  const projects = [
    {
      title: "Dev Overflow",
      description: "Next.js | MongoDB | TailwindCSS | OpenAI",
      duration: "",
      githubLink: "https://github.com/khldalrs/DevFlow",
      points: [
        "Developed a full-stack platform using Next.js, MongoDB, NextAuth, and TailwindCSS, featuring AI-powered answers, voting, and personalized content recommendations",
      ],
    },
    {
      title: "US-Bank Churn Prediction",
      description: "Langchain | Scikit-Learn | Streamlit | Groq",
      githubLink: "https://github.com/khldalrs/Customer_Churn_Predictor",
      points: [
        "Used a 30k+ dataset with multiple LLMs (Llama 3.1b, Deepseek, Groq) to evaluate and improve churn prediction accuracy",
      ],
    },
    {
      title: "Financial Analysis & Automation with LLMs",
      description: "FastAPI | Pinecone | LangChain",
      githubLink: "https://github.com/khldalrs/Financial-Analysis-Backend",
      points: [
        "Ran similarity searches across 10k+ stocks using Pinecone, LangChain, and FastAPI for the backend; optimized the data processing by parallelizing tasks with 10+ concurrent workers to speed up the I/O bound",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ffd300]">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 border border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-colors"
                  >
                    GitHub
                  </a>
                </div>
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
      </div>
    </section>
  );
};

export default Projects;
