import { forwardRef, useEffect, useState } from "react";
const Home = forwardRef((props, ref) => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 100px, hide the arrow
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={ref} className="w-full h-screen relative">
      <section className="h-screen w-full flex flex-col justify-center items-center pointer-events-none">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-sm md:text-xl italic tracking-[0.1em] uppercase mb-1 animate-fade-up [animation-delay:400ms] [animation-fill-mode:forwards]">
            Hi, This is
          </h1>
          <h2 className="text-white text-5xl lg:text-7xl font-black italic tracking-tighter animate-pop-up">
            KAVIMANI V
          </h2>
          <div className="mt-6 flex justify-center">
            <h2 className="text-white font-mono text-xs lg:text-lg md:text-xl uppercase tracking-tight overflow-hidden whitespace-nowrap border-r-4 border-white w-fit italic animate-typing [animation-delay:1.2s] [animation-fill-mode:forwards]">
              Aspiring Software Engineer Student @ MIT, Anna University
            </h2>
          </div>
        </div>
        <div className="flex gap-4 m-10 pt-6 pointer-events-auto">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold transition"
            onClick={props.onclick1}
          >
            Explore Projects
          </button>
          <button
            className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-full font-bold transition"
            onClick={props.onclick2}
          >
            Get In Touch
          </button>
        </div>
        {showScroll && (
          <div className="absolute bottom-8 text-2xl animate-bounce-subtle opacity-50">
            <span className="icon-glow text-white">↓</span>
          </div>
        )}
      </section>
    </div>
  );
});

export default Home;
