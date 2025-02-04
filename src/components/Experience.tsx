const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Fellowship",
      company: "Headstarter",
      date: "Oct 2024 - Present",
      location: "Remote (New York, USA)",
      points: [
        "Led machine learning engineering and full-stack projects",
        "Developed 5+ neural networks in Python",
        "Implemented fine-tuning hyperparameter tuning",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "ThingLogix",
      date: "Jul 2024 - Sep 2024",
      location: "Remote (Dubai, UAE)",
      points: [
        "Developed an OCR web application using Next.js",
        "Enhanced document digitization with AWS Gateway",
        "Delivered project within strict timeline meeting client expectations",
      ],
    },

    {
      title: "Software Engineering Intern",
      company: "NetOceans",
      date: "Oct 2023 - Jan 2024",
      location: "Istanbul, Turkey",
      points: [
        "Designed and deployed 5+ core features",
        "Implemented RESTful APIs",
        "Enhanced platform functionality",
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
