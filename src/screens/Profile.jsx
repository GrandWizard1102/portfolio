import { forwardRef } from "react";

const Profile = forwardRef((props, ref) => {
  const leetcodeUsername = "GrandVizard";
  const githubUsername = "GrandWizard1102";

  return (
    // Added 'flex items-center' to vertically center everything inside the screen height
    <section
      ref={ref}
      className="min-h-screen w-full py-20 px-6 md:px-20 flex items-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-black italic uppercase mb-16 tracking-tighter animate-fade-up text-center md:text-left">
          Coding <span className="text-purple-500">Profile</span>
        </h2>

        {/* Added 'mx-auto' here so the card row centers horizontally on large screens */}
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* LeetCode Card */}
          <div className="w-full md:w-1/2 p-3 md:p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex justify-center hover:scale-[1.02] transition-transform duration-300">
            <img
              src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=unicorn&font=Kelly%20Slab&ext=heatmap`}
              alt="LeetCode Stats"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </div>

          {/* GitHub Card */}
          <div className="w-full md:w-1/2 p-3 md:p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex justify-center hover:scale-[1.02] transition-transform duration-300">
            {githubUsername && (
              <img
                src={`https://ghstats.dev/api/card?username=${githubUsername}&theme=catppuccin&border_radius=12.5&custom_title=My+Github+profile&size=compact&hide=stars%2Cprs%2Cissues&cache=1783963917249`}
                alt={`${githubUsername}'s GitHub Stats`}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Profile;
