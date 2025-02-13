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
                ].map((skill, index, array) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                    {index !== array.length - 1 && (
                      <span className="ml-4 text-primary">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Libraries/Frameworks</h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "NextJS",
                  "ReactJS",
                  "TailwindCSS",
                  "FastAPI",
                  "Flask",
                  "Node.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Figma",
                ].map((skill, index, array) => (
                  <span key={skill} className="text-muted-foreground">
                    {skill}
                    {index !== array.length - 1 && (
                      <span className="ml-4 text-primary">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Developer Tools</h3>
              <div className="flex flex-wrap gap-4">
                {["AWS", "Postman", "Git", "Docker", "Vercel", "Jira"].map(
                  (skill, index, array) => (
                    <span key={skill} className="text-muted-foreground">
                      {skill}
                      {index !== array.length - 1 && (
                        <span className="ml-4 text-primary">•</span>
                      )}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
