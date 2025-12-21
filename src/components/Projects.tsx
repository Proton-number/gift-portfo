import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
export default function Projects() {
  const projects = [
    {
      id: 1,
      img: "/football.webp",
      altImage: "Predictive Modeling",
      title: "Premier League Predictor",
      description:
        "An ML system predicting Premier League match outcomes with high accuracy using historical data and player statistics analysis.",
      githubLink: "#",
      liveWebsiteLink: "#",
    },
    {
      id: 2,
      img: "/mining.webp",
      altImage: "Data Mining",
      title: "Smart Farming Web App",
      description:
        "Built a web application for farmers to maximize crop yield by analyzing soil data, weather patterns, and historical harvest logs.",
      githubLink: "#",
      liveWebsiteLink: "#",
    },
    {
      id: 3,
      img: "/genai.webp",
      altImage: "Gen AI / NLP",
      title: "Text Summarizer & Gen AI",
      description:
        "Leveraging Deep Learning and NLP to build generative tools. Expertise in Computer Vision and Transformer architectures for real-world tasks.",
      githubLink: "#",
      liveWebsiteLink: "#",
    },
  ];

  return (
    <div className="pt-20 sm:pt-24">
      <div className="text-orange-500 p-3 font-bold rounded-full bg-orange-50 w-fit mb-6 text-sm">
        <span>Portfolio</span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-baseline">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Featured Projects
          </h2>
          <p className=" text-gray-700 text-base sm:text-lg leading-relaxed">
            Innovative ML systems and web applications
          </p>
        </div>
        <Button
          className="flex items-center bg-white gap-2 p-3 sm:px-4 sm:py-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-colors font-semibold mt-4 sm:mt-0 text-black"
          aria-label="View all projects on GitHub"
        >
          <p>View Github</p>
          <ArrowUpRight className="w-4 h-4 " aria-hidden="true" />
        </Button>
      </div>
      {/* Projects grid will go here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-3 mt-10 ">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="p-2 sm:p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            tabIndex={0}
            role="article"
            aria-label={`${project.title} project`}
          >
            <div className="relative overflow-hidden w-full aspect-video rounded-[1.5rem]">
              <img
                src={project.img}
                alt={`${project.title} project screenshot showing ${project.altImage}`}
                className="w-full h-full object-cover rounded-[1.5rem] hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-white backdrop-blur shadow-sm px-3 py-1 text-xs font-bold">
                {project.altImage}
              </div>
            </div>
            <p className="text-xl font-bold text-gray-700">{project.title}</p>
            <p className="leading-relaxed text-muted-foreground text-sm">
              {project.description}
            </p>

            <div className="flex-end">
              <div className="flex gap-2 items-center justify-end mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View code"
                  className="flex items-center gap-1 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-full text-sm font-semibold transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  GitHub
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={project.liveWebsiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View live"
                  className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-black px-3 py-2 rounded-full text-sm font-semibold transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
