import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const Leadership = () => {
  const leadership = [
    {
      title: "Content Creator & Tech Influencer",
      description: (
        <>
          KhalidTechDev |{" "}
          <a
            href="https://www.instagram.com/khalidtechdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="https://www.tiktok.com/@khalidtechdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            TikTok
          </a>{" "}
          |{" "}
          <a
            href="https://www.youtube.com/@khalidtechdev0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            YouTube
          </a>
        </>
      ),
      duration: "Jun 2024 – Present",
      points: [
        "Created technical programming content for 35,000+ developers, reaching 2,500,000+ impressions",
      ],
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#ffd300]">Leadership</h2>
        <div className="space-y-12">
          {leadership.map((role, index) => (
            <div
              key={index}
              className="animate-slide-in border border-muted/20 rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <span className="text-muted-foreground">{role.duration}</span>
              </div>
              <p className="text-muted-foreground mb-4">{role.description}</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {role.points.map((point, idx) => (
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

export default Leadership;
