import { forwardRef, useRef, useState, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
const Skills = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const internalRef = useRef(null);
  const stacks = [
    {
      Name: "Languages",
      list: ["C/C++", "Java", "Python(Data Science)", "JavaScript"],
    },
    {
      Name: "Frontend",
      list: ["React", "HTML/CSS", "Java Swing"],
    },
    {
      Name: "Backend/DB",
      list: ["Node js", "Python flask", "Oracle DB", "MongoDB"],
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
          // Optional: observer.unobserve(entry.target) to animate only once
        }
      },
      { threshold: 0.2 }, // Triggers when 20% of the component is visible
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
      className="relative min-h-[200vh] w-full flex flex-col items-start p-6 md:p-24"
    >
      <h2
        className={`text-white text-4xl md:text-5xl uppercase italic font-black tracking-tighter transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {" "}
        Technical <span className="text-purple-400">Stack</span>
      </h2>
      <div className="flex flex-row overflow-x-auto w-full gap-6 py-10 no-scrollbar snap-x snap-mandatory pointer-events-auto">
        {" "}
        {stacks.map((stack, index) => {
          return (
            <div
              ref={internalRef}
              key={index}
              className={`w-67 h-84 flex-none overflow-hidden ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }} // Staggered entrance
            >
              <SpotlightCard
                className="custom-spotlight-card h-full"
                spotlightColor="#aa5ef5"
                key={index}
              >
                <h1 className="text-white text-xl uppercase font-bold italic">
                  {stack.Name}
                </h1>
                <div className="space-y-2 pt-3 font-bold">
                  {stack.list.map((item, idx) => (
                    <h2
                      key={idx}
                      className="text-gray-400 flex items-center text-lg md:text-xl font-medium leading-relaxed gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </h2>
                  ))}
                </div>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </section>
  );
});
export default Skills;
