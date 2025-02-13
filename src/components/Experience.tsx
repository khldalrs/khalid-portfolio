const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Resident",
      company: "Headstarter",
      date: "Oct 2024 - Present",
      points: [
        "Built 14+ full-stack, machine learning, and AI-engineering projects in fast-paced software team environments",
        "Developed applications with Next.js, TypeScript, FastAPI, and LLM APIs (OpenAI, DeepSeek, Llama 3.1) integrating AI services into full-stack applications",
        "Implemented LLM-chaining, hyperparameter tuning, and fine-tuning on 10+ LLM models, balancing latency and accuracy",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "ThingLogix",
      date: "Jul 2024 - Oct 2024",
      points: [
        "Built an OCR web application with Next.js and Typescript, integrating AWS S3 and API Gateway, to support client document digitization",
        "Created 10+ PRD and requirement specification documents, ensuring alignment between technical implementation for 5+ clients' needs",
        "Researched and evaluated 12+ AI tools and AWS services, selecting optimal technologies for 2 major projects, improving system performance and scalability",
      ],
    },
    {
      title: "Front-end Developer Intern",
      company: "NetOceans",
      date: "Oct 2023 - Jan 2024",
      points: [
        "Designed and deployed 5+ core features using React, significantly enhancing platform functionality and user experience",
        "Implemented and tested 3+ RESTful API integrations, improving data exchange efficiency and system reliability",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ffd300]">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-muted-foreground">{exp.date}</span>
              </div>
              <div className="mb-4">
                <span className="text-primary">{exp.company}</span>
                <span className="text-muted-foreground"> • {exp.location}</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {exp.points.map((point, idx) => (
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

export default Experience;
