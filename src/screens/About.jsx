import React from "react";
import { forwardRef } from "react";
const About = forwardRef((props, ref) => {
  const education = [
    {
      year: "2023 — 2027",
      degree: "Bachelor of Technology",
      institution: "MIT campus,Anna University",
      description: "Specializing in Artificial Intelligence and Data Science.",
    },
    {
      year: "2021 — 2023",
      degree: "Higher Secondary Education",
      institution: "AKT Academy MHSS",
      description: "",
    },
  ];
  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col items-start justify-center p-6 md:p-20 bg-transparent"
    >
      {/* Section Heading */}
      <div className="flex flex-col lg:flex-row gap-16 w-full">
        {/* Left Column: Bio */}
        <div className="flex-1">
          <h2 className="text-white text-4xl md:text-5xl uppercase italic font-black mb-8 tracking-tighter">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] text-white text-left shadow-[0_20px_50px_rgba(0,0,0,0.4)] mb-8">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              A{" "}
              <span className="text-purple-400 font-bold">
                Full Stack Developer
              </span>{" "}
              dedicated to building robust and scalable digital experiences. I
              thrive on solving complex technical challenges across the{" "}
              <span className="text-purple-400">
                entire development lifecycle
              </span>
              , from crafting seamless interfaces to optimizing{" "}
              <span className="text-purple-400 font-bold">
                high-performance backends
              </span>
              .
            </p>
          </div>
        </div>

        {/* Right Column: Educational Timeline */}
        <div className="flex-1">
          <h3 className="text-white text-4xl md:text-5xl uppercase italic font-bold mb-8 ">
            Education
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                {/* Content Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">{item.degree}</div>
                    <time className="font-mono text-xs text-purple-400">
                      {item.year}
                    </time>
                  </div>
                  <div className="text-purple-300/80 text-sm mb-2">
                    {item.institution}
                  </div>
                  <div className="text-gray-400 text-xs leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
