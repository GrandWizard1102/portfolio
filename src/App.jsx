import { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/logo.png";
import CardNav from "./components/CardNav";
import GradientBlinds from "./components/GradientBlinds";
import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const SkillRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollTo = (elementRef) => {
    if (elementRef.current) {
      const headerOffset = 80;
      const elementPosition = elementRef.current.getBoundingClientRect().top;
      // Use window.scrollY for better compatibility
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  // Handle screen resize for the GradientBlinds density
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      label: "Home",
      bgColor: "#aa5ef5",
      textColor: "#fff",
      onClick: () => {
        scrollTo(HomeRef);
      },
    },
    {
      label: "About",
      bgColor: "#aa5ef5",
      textColor: "#fff",
      onClick: () => {
        scrollTo(AboutRef);
      },
    },
    {
      label: "Skills",
      bgColor: "#aa5ef5",
      textColor: "#fff",
      onClick: () => {
        scrollTo(SkillRef);
      },
    },
    {
      label: "Projects",
      bgColor: "#aa5ef5",
      textColor: "#fff",
      onClick: () => {
        scrollTo(ProjectRef);
      },
    },
    {
      label: "Contact",
      bgColor: "#aa5ef5",
      textColor: "#fff",
      onClick: () => {
        scrollTo(ContactRef);
      },
    },
  ];
  const updateFavicon = (logoPath) => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = logoPath;
    } else {
      // If no icon link exists, create one
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = logoPath;
      document.head.appendChild(newLink);
    }
  };
  const Projects = () => {
    useEffect(() => {
      document.title = "Kavimani V";
      updateFavicon(reactLogo);
    }, []);
  };
  return (
    // min-h-screen allows the page to grow beyond the first fold
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      {/* 1. FIXED BACKGROUND: Stays put while you scroll */}
      <div className="fixed inset-0 z-0">
        <GradientBlinds
          gradientColors={["#ff9ffc", "#5227ff"]}
          angle={20}
          blindCount={isMobile ? 8 : 16}
          noise={isMobile ? 0.1 : 0.3}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={0.5}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="multiply"
        />
      </div>

      {/* 2. FIXED NAVIGATION: Always visible and clickable at the top */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-10 pointer-events-none">
        <div className="pointer-events-auto">
          <CardNav
            logo={reactLogo}
            logoAlt="VK"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#aa5ef5"
            buttonTextColor="#fff"
            ease="power3.out"
            theme="light"
          />
        </div>
      </header>

      {/* 3. SCROLLABLE CONTENT: This is where Home lives */}
      {/* Inside App.js main */}
      <main className="relative z-10 w-full pointer-events-none">
        {/* Pass the function correctly */}
        <Home
          ref={HomeRef}
          onclick1={() => scrollTo(ProjectRef)}
          onclick2={() => scrollTo(ContactRef)}
        />

        <About ref={AboutRef} />

        <Skills ref={SkillRef} />

        <Projects ref={ProjectRef} />
        <Footer ref={ContactRef} />
      </main>
    </div>
  );
}

export default App;
