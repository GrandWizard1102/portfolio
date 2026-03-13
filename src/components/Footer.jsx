import React, { useState, useEffect, forwardRef } from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  Globe,
  Code2,
} from "lucide-react";

const Footer = forwardRef((props, ref) => {
  const currentYear = new Date().getFullYear();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(
        new Intl.DateTimeFormat("en-US", options).format(new Date()),
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/GrandWizard1102",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/kavimani-v1106",
      icon: <Linkedin size={20} />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/GrandVizard/",
      icon: <Code2 size={20} />,
    },
  ];

  return (
    <footer className="relative w-full py-10 px-6 mb-20 md:px-20" ref={ref}>
      {/* GLASS CONTAINER */}
      <div
        onMouseMove={handleMouseMove}
        className="relative group max-w-7xl mx-auto rounded-[2rem] overflow-hidden p-8 md:p-12 transition-all duration-500 pointer-events-auto bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl"
      >
        {/* Interactive Spotlight Effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left Side: CTA */}
          <div className="flex-1">
            <h2 className="text-white text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 flex items-center gap-3">
              Get In <span className="text-purple-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-md italic font-light">
              Looking for new opportunities. My inbox is always open.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=v.kavimani1106@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 active:scale-95 overflow-hidden shadow-[0_0_20px_rgba(147,51,234,0.3)]"
            >
              <Mail
                size={18}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
              <span>Send an Email</span>
            </a>
          </div>

          {/* Right Side: Info & Socials */}
          <div className="flex flex-col gap-8 text-right items-start md:items-end w-full md:w-auto">
            <div className="flex flex-col items-start md:items-end gap-1">
              <div className="flex items-center gap-3 text-white/80">
                <Globe size={14} className="text-purple-400" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-purple-400">
                  Location
                </span>
                <span className="font-bold text-white">Chennai, India</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              <span className="text-gray-500 font-mono text-[10px] tracking-[0.3em] uppercase">
                Local Time: {currentTime} IST
              </span>
            </div>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group/icon"
                  aria-label={social.name}
                >
                  {social.icon}
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-purple-600 text-white text-[10px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest font-bold whitespace-nowrap z-50">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em]">
            © {currentYear} Kavimani V. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.3em] flex items-center gap-2">
              Tech: <span className="text-white">React</span> +{" "}
              <span className="text-white">Tailwind</span>
            </p>
            <ExternalLink size={12} className="text-gray-600" />
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
