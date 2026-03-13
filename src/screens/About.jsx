import React from "react";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  const education = [
    {
      year: "2023 — 2027",
      degree: "Bachelor of Technology",
      institution: "MIT campus, Anna University",
      description: "Specializing in Artificial Intelligence and Data Science.",
    },
    {
      year: "2021 — 2023",
      degree: "Higher Secondary Education",
      institution: "AKT Academy MHSS",
      description: "Focused on Computer Science and Mathematics.",
    },
  ];

  return (
    <section
      ref={ref}
      className="min-h-screen w-full flex flex-col items-start justify-center py-0 p-6 md:p-20 bg-transparent"
    >
      <div className="flex flex-col lg:flex-row gap-16 w-full">
        {/* Left Column: Bio */}
        <div className="flex-1">
          <h2 className="text-white text-4xl md:text-5xl uppercase italic font-black mb-8 tracking-tighter">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="group relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 transition-all duration-500">
            {/* NEW GLASS LAYERS */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl z-0" />
            <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] z-20 group-hover:border-purple-500/50 transition-colors" />
            <div className="absolute -inset-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-lg md:text-xl leading-relaxed font-medium text-white/90">
                A{" "}
                <span className="text-purple-400 font-bold">
                  Full Stack Developer
                </span>{" "}
                dedicated to building robust and scalable digital experiences. I
                thrive on solving complex technical challenges across the{" "}
                <span className="text-purple-400">
                  entire development lifecycle
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Educational Timeline */}
        <div className="flex-1">
          <h3 className="text-white text-4xl md:text-5xl uppercase italic font-bold mb-8">
            Education
          </h3>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                {/* Dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] text-purple-400 shadow shrink-0 z-30 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>

                {/* UPDATED EDUCATION GLASS BG */}
                <div className="group/card relative w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded-[1.5rem] overflow-hidden p-6 transition-all duration-500 hover:-translate-y-1">
                  {/* Triple Glass Layers */}
                  <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-xl z-0" />
                  <div className="absolute inset-0 border border-white/10 rounded-[1.5rem] z-20 group-hover/card:border-purple-500/40 transition-colors" />
                  <div className="absolute -inset-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="font-bold text-white text-lg">
                        {item.degree}
                      </div>
                      <time className="font-mono text-[10px] text-purple-400 font-black tracking-widest uppercase">
                        {item.year}
                      </time>
                    </div>
                    <div className="text-purple-300/80 text-sm font-semibold mb-3">
                      {item.institution}
                    </div>
                    <div className="text-gray-400 text-xs leading-relaxed italic">
                      {item.description}
                    </div>
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
