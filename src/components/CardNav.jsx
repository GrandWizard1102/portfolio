import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { X, Menu, Download } from "lucide-react";

const CardNav = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power4.inOut",
  baseColor = "#ffffff",
  menuColor = "#000000",
  buttonBgColor = "#a855f7",
  buttonTextColor = "#ffffff",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  // Height is slightly taller to give cards that "chunky" premium feel
  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 64;
    const contentEl = navEl.querySelector(".card-nav-content");
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      contentEl.style.visibility = "visible";
      const contentHeight = contentEl.getBoundingClientRect().height;
      contentEl.style.visibility = wasVisible;
      return 64 + contentHeight;
    }
    return 64;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 64 });
    gsap.set(cardsRef.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease: "expo.out",
    }).to(
      cardsRef.current,
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.out",
      },
      "-=0.2",
    );
    return tl;
  };

  useLayoutEffect(() => {
    tlRef.current = createTimeline();
    return () => tlRef.current?.kill();
  }, [items]);

  const toggleMenu = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      tlRef.current?.play();
    } else {
      tlRef.current
        ?.reverse()
        .eventCallback("onReverseComplete", () => setIsExpanded(false));
    }
  };

  return (
    <div
      className={`fixed left-1/2 -translate-x-1/2 w-[94%] max-w-[1100px] z-[100] top-6 ${className}`}
    >
      <nav
        ref={navRef}
        className="bg-white rounded-[1.8rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-black/5 overflow-hidden"
        style={{ backgroundColor: baseColor }}
      >
        {/* TOP BAR: Clean & Centered */}
        <div className="h-[60px] flex items-center justify-between px-6 relative z-20 bg-white">
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors"
            style={{ color: menuColor }}
          >
            {isExpanded ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="absolute left-1/2 -translate-x-1/2">
            <img src={logo} alt={logoAlt} className="h-7 w-auto" />
          </div>

          <a
            href="https://raw.githubusercontent.com/GrandWizard1102/My_resume/main/Resume%20(5).pdf"
            download="Kavimani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-wider flex items-center gap-2 transition-all hover:brightness-110 active:scale-95 shadow-sm"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            <span>Resume</span>
            <Download
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        {/* CARDS GRID: Based on your Image */}
        <div
          className={`card-nav-content flex px-3 pb-5 flex-col md:flex-row gap-2 ${
            isExpanded
              ? "visible pointer-events-auto"
              : "invisible pointer-events-none"
          }`}
        >
          {items?.slice(0, 5).map((item, idx) => (
            <button
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              onClick={() => {
                item.onClick?.();
                toggleMenu();
              }}
              className="flex-1 group relative p-5 rounded-[1.2rem] flex flex-col justify-end text-left transition-all hover:brightness-105 active:scale-[0.98]"
              style={{
                backgroundColor: item.bgColor || "#a855f7",
                color: item.textColor || "#ffffff",
              }}
            >
              <div className="flex justify-between items-center w-full">
                <span className="text-lg md:text-xl font-bold tracking-tight">
                  {item.label}
                </span>
                <GoArrowUpRight className="text-xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
