import { forwardRef } from "react";
const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full">
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
              I am a Software Engineer @ MIT, Anna University.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Home;
