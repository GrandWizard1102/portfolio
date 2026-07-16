import { forwardRef } from "react";
import { Github, ExternalLink } from "lucide-react";
const projects = [
  {
    id: 1,
    title: "Tekhora '26",
    description:
      "Official symposium website for the Department of Information Technology - AI & DS branch, MIT Anna University. Developed secure QR verification and dynamic routing for thousands of attendees.",
    tags: ["React", "Tailwind", "Production"],
    size: "large",
    github: "https://github.com/Gojo-Satoru-git/AIA_SYMPO",
    live: "https://tekhora26.live",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack MERN application integrated with a machine learning-based recommendation engine to provide personalized product suggestions to users.",
    tags: ["MongoDB", "Express", "React", "Node.js", "ML"],
    size: "small",
    github: "https://github.com/GrandWizard1102/E-commerce",
    live: "",
  },
  {
    id: 3,
    title: "Movie Database System",
    description:
      "Java Swing desktop application using JDBC for direct Oracle database connectivity. Built with advanced query features, ratings, and real-time CRUD operations.",
    tags: ["Java", "Oracle SQL", "Swing", "JDBC"],
    size: "small",
    github: "https://github.com/GrandWizard1102/Movie_Project",
    live: "",
  },
  {
    id: 4,
    title: "Real-Time Blind Assist",
    description:
      "Visual-to-Audio Scene Describer for the visually impaired using YOLOv8, MiDaS depth estimation, BLIP, and text-to-speech audio feedback.",
    tags: ["Computer Vision", "Python", "Deep Learning"],
    size: "small",
    github:
      "https://github.com/GrandWizard1102/Real-Time-Assist-for-visually-Impaired",
    live: "", // Both empty triggers "Coming Soon"
  },
  {
    id: 5,
    title: "Weapon Detection",
    description:
      "Real-time threat detection system using HOG features, OpenCV, and Flask deployment on Render.",
    tags: ["ML", "OpenCV", "Flask"],
    size: "small",
    github: "https://github.com/GrandWizard1102/Weapon-Detection",
    live: "",
  },
  {
    id: 6,
    title: "Smart Grievance Redressal",
    description:
      "Automated complaint tracking system built with the MERN stack to manage and resolve institutional grievances without overhead.",
    tags: ["MERN Stack", "Tailwind"],
    size: "small",
    github:
      "https://github.com/GrandWizard1102/Smart-Grievance-redressal-system",
    live: "",
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
            const isComingSoon = !project.github && !project.live;
            const primaryLink = project.live || project.github;

            return (
              <div
                key={index}
                className={`group relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-purple-500/50 ${
                  isComingSoon ? "cursor-default" : "hover:-translate-y-2"
                } ${
                  project.size === "large" ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Content Container */}
                <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[380px]">
                  {/* Top Bar: Tags and Action Icons */}
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

                    {/* Action Icons */}
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/30 hover:text-purple-500 transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={22} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/30 hover:text-purple-500 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="mt-auto">
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Bottom Link Button */}
                    {isComingSoon ? (
                      <div className="flex items-center gap-2 text-gray-600 font-bold uppercase text-xs tracking-widest">
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-bold group/link inline-flex"
                      >
                        <span className="group-hover/link:text-purple-400 transition-colors uppercase text-xs tracking-widest">
                          {project.live ? "View Live Site" : "View Source Code"}
                        </span>
                        <div className="w-8 h-[2px] bg-purple-500 transition-all group-hover/link:w-12" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                {!isComingSoon && (
                  <div className="absolute -inset-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
