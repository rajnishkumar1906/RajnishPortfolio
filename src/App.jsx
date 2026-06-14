import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-100 bg-transparent transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative">
        {/* Ambient floating glows (Motion Dynamics) */}
        <div className="aurora-glow-1 top-[5%] left-[5%] opacity-60 dark:opacity-40 animate-pulse-glow" />
        <div className="aurora-glow-2 top-[35%] right-[5%] opacity-60 dark:opacity-40 animate-pulse-glow" style={{ animationDelay: "2s" }} />
        <div className="aurora-glow-1 top-[65%] left-[10%] opacity-50 dark:opacity-30 animate-pulse-glow" style={{ animationDelay: "4s" }} />

        {/* Section 1: Hero (z-10) */}
        <div 
          id="home"
          className="stacked-section z-10 section-bg border-b border-white/20 dark:border-white/5 scroll-mt-[0px]"
          style={{ top: "0px", minHeight: "100vh" }}
        >
          <Hero />
        </div>

        {/* Section 2: About (z-20) */}
        <div 
          id="about"
          className="stacked-section z-20 backdrop-blur-3xl section-bg border-b border-white/20 dark:border-white/5 shadow-2xl scroll-mt-[4rem]"
          style={{ top: "4rem", minHeight: "calc(100vh - 4rem)" }}
        >
          <About />
        </div>

        {/* Section 3: Skills (z-30) */}
        <div 
          id="skills"
          className="stacked-section z-30 backdrop-blur-3xl section-bg border-b border-white/20 dark:border-white/5 shadow-2xl scroll-mt-[6rem]"
          style={{ top: "6rem", minHeight: "calc(100vh - 6rem)" }}
        >
          <Skills />
        </div>

        {/* Section 4: Projects (z-40) */}
        <div 
          id="projects"
          className="stacked-section z-40 backdrop-blur-3xl section-bg border-b border-white/20 dark:border-white/5 shadow-2xl scroll-mt-[8rem]"
          style={{ top: "8rem", minHeight: "calc(100vh - 8rem)" }}
        >
          <Projects />
        </div>

        {/* Section 5: Contact (z-50) */}
        <div 
          id="contact"
          className="stacked-section z-50 backdrop-blur-3xl section-bg shadow-2xl scroll-mt-[10rem]"
          style={{ top: "10rem", minHeight: "calc(100vh - 10rem)" }}
        >
          <Contact />
        </div>
      </main>

      {/* Frosted interactive scroll alert */}
      <footer className="fixed bottom-4 left-6 z-50 pointer-events-none">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-black/30 border border-white/30 dark:border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-slate-700 dark:text-slate-300 shadow-md">
          Scroll Down to Uncover Sections
        </div>
      </footer>
    </div>
  );
}

export default App;