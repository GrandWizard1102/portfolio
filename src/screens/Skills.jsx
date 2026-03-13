import { forwardRef, useRef, useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";

const Skills = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const internalRef = useRef(null);

  const stacks = [
    {
      Name: "Languages",
      list: ["C/C++", "Java", "Python", "JavaScript"],
    },
    {
      Name: "Frontend",
      list: ["React", "Tailwind CSS", "Java Swing"],
    },
    {
      Name: "Backend/DB",
      list: ["Node js", "Oracle DB", "MongoDB"],
    },
    {
      Name: "Tools",
      list: ["VS Code", "GitHub", "Figma"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const target = ref?.current || internalRef.current;
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [ref]);

  return (
    <section
      ref={ref}
      className="relative h-fit min-h-screen w-full flex flex-col items-start justify-center py-20 px-6 md:px-20 "
    >
      <h2
        className={`text-white text-4xl md:text-5xl uppercase italic font-black tracking-tighter mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Technical <span className="text-purple-400">Stack</span>
      </h2>

      {/* Horizontal Scroll Container */}
      <div className="flex flex-row overflow-x-auto w-full gap-8 py-10 no-scrollbar snap-x snap-mandatory pointer-events-auto">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className={`w-[220px] md:w-[300px] flex-none snap-center transition-all duration-700 ${
              isVisible ? "animate-fade-up opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <SpotlightCard
              className="relative group rounded-[2rem] overflow-hidden p-8 h-[400px]"
              spotlightColor="rgba(170, 94, 245, 0.2)"
            >
              {/* THE GLASS LAYERS */}
              <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-2xl z-0" />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 group-hover:border-purple-500/50 transition-colors " />

              <div className="relative z-30 flex flex-col h-full">
                <h3 className="text-white text-2xl uppercase font-black italic mb-6 tracking-tight">
                  {stack.Name}
                </h3>

                <div className="space-y-4">
                  {stack.list.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-transform group-hover/item:scale-150" />
                      <span className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="mt-auto pt-6">
                  <div className="w-12 h-1 bg-purple-500/30 rounded-full group-hover:w-24 group-hover:bg-purple-500 transition-all duration-500" />
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute -inset-full bg-gradient-to-br from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </SpotlightCard>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
