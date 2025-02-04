const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-8 text-[#ffd300]">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "Python",
                  "Java",
                  "SQL",
                  "C/C++",
                ].map((skill) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Software</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "AWS",
                  "NextJS",
                  "React",
                  "Angular",
                  "TailwindCSS",
                  "FastAPI",
                  "Flask",
                  "Django",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Prisma",
                  "Figma",
                  "Postman",
                  "Git",
                ].map((skill) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
