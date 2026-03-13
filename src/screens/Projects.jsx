import { forwardRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Tekhora '26",
    description:
      "Official symposium website for the Department of Information Technology - AI & DS branch, MIT Anna University. Features event registration and real-time updates.",
    tags: ["React", "Tailwind", "Production"],
    size: "large", // Making this large since it's a live site
    link: "https://tekhora26.live",
  },
  {
    id: 2,
    title: "Real-Time Blind Assist",
    description:
      "Visual-to-Audio Scene Describer for the visually impaired using Deep Learning and CV.",
    tags: ["Computer Vision", "Python", "Deep Learning"],
    size: "small",
    link: "", // Coming soon
  },
  {
    id: 3,
    title: "Weapon Detection",
    description:
      "Real-time threat detection system using HOG features and Flask deployment.",
    tags: ["ML", "OpenCV"],
    size: "small",
    link: "https://github.com/GrandWizard1102/Weapon-Detection",
  },
  {
    id: 4,
    title: "Smart Grievance Redressal",
    description:
      "Automated complaint tracking system built with the MERN stack.",
    tags: ["MERN Stack", "AI"],
    size: "small",
    link: "https://github.com/GrandWizard1102/Smart-Grievance-redressal-system",
  },
];

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen w-full py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase mb-16 tracking-tighter animate-fade-up">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-auto">
          {projects.map((project, index) => {
            const isComingSoon = !project.link;

            // We wrap the content in a Link if it exists, otherwise it's just a div
            const Wrapper = isComingSoon ? "div" : "a";

            return (
              <Wrapper
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-[2rem] overflow-hidden transition-all duration-500 ${
                  isComingSoon
                    ? "cursor-default"
                    : "hover:-translate-y-2 cursor-pointer"
                } ${
                  project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* GLASS INTERFACE LAYERS */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl z-0" />
                <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 group-hover:border-purple-500/50 transition-colors" />

                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[350px]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-widest"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {!isComingSoon && (
                      <Github
                        className="text-white/30 group-hover:text-purple-500 transition-colors"
                        size={20}
                      />
                    )}
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-white font-bold group/link">
                      <span
                        className={`${isComingSoon ? "text-gray-600" : "group-hover/link:text-purple-400"} transition-colors uppercase text-xs tracking-widest`}
                      >
                        {isComingSoon ? "Coming Soon" : "View Project"}
                      </span>
                      {!isComingSoon && (
                        <div className="w-8 h-[2px] bg-purple-500 transition-all group-hover/link:w-12" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Interactive Hover Glow */}
                {!isComingSoon && (
                  <div className="absolute -inset-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                )}
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
