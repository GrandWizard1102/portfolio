import { forwardRef, useState } from "react";

const Profile = forwardRef((props, ref) => {
  const leetcodeUsername = "GrandVizard";
  const githubUsername = "GrandWizard1102";

  // Loading states for both external API cards
  const [lcLoading, setLcLoading] = useState(true);
  const [ghLoading, setGhLoading] = useState(true);

  // Reusable loading skeleton to match your site's dark/purple aesthetic
  const CardSkeleton = ({ message }) => (
    <div className="w-full min-h-[160px] md:min-h-[200px] flex flex-col items-center justify-center gap-4 py-8">
      <div className="relative flex items-center justify-center">
        {/* Spinning loading ring */}
        <div className="w-12 h-12 rounded-full border-2 border-purple-500/10 border-t-purple-500 animate-spin" />
        {/* Pulsing core */}
        <div className="absolute w-8 h-8 rounded-full bg-purple-500/10 animate-ping" />
      </div>
      <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 animate-pulse">
        {message}
      </span>
    </div>
  );

  return (
    <section
      ref={ref}
      className="min-h-screen w-full py-20 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase mb-16 tracking-tighter animate-fade-up text-center md:text-left">
          Coding <span className="text-purple-500">Profile</span>
        </h2>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* LeetCode Card */}
          <div className="w-full md:w-1/2 p-3 md:p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300 min-h-[180px] md:min-h-[240px]">
            {lcLoading && <CardSkeleton message="Fetching LeetCode Stats..." />}
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=unicorn&font=Kelly%20Slab&colors=0d0e15%2C161925%2Cf5f6fa%2Ca2a8cd%2Cff79c6%2Cbd93f9%2C8be9fd%2Cffb86c&ext=heatmap`}
              alt="LeetCode Stats"
              className={`w-full h-auto rounded-xl transition-all duration-500 ${
                lcLoading
                  ? "opacity-0 absolute scale-95 pointer-events-none"
                  : "opacity-100 scale-100"
              }`}
              onLoad={() => setLcLoading(false)}
              onError={() => setLcLoading(false)} // Prevents infinite loading if API is down
              loading="lazy"
            />
          </div>

          {/* GitHub Card */}
          <div className="w-full md:w-1/2 p-3 md:p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col justify-center hover:scale-[1.02] transition-transform duration-300 min-h-[180px] md:min-h-[240px]">
            {githubUsername && (
              <>
                {ghLoading && (
                  <CardSkeleton message="Syncing GitHub Profile..." />
                )}
                <img
                  src={`https://ghstats.dev/api/card?username=${githubUsername}&theme=catppuccin&border_radius=12.5&custom_title=My+Github+profile&size=compact&hide=stars%2Cprs%2Cissues&cache=1783963917249`}
                  alt={`${githubUsername}'s GitHub Stats`}
                  className={`w-full h-auto rounded-xl transition-all duration-500 ${
                    ghLoading
                      ? "opacity-0 absolute scale-95 pointer-events-none"
                      : "opacity-100 scale-100"
                  }`}
                  onLoad={() => setGhLoading(false)}
                  onError={() => setGhLoading(false)}
                  loading="lazy"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Profile;
