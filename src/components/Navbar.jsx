import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Track active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -120 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div
      className={`fixed left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "top-4 px-6" : "top-0 px-0"
      }`}
    >
      <nav
        className={`relative max-w-5xl mx-auto transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/25 dark:bg-black/35 border border-white/20 dark:border-white/10 rounded-full shadow-lg"
            : "backdrop-blur-sm bg-transparent border-b border-transparent"
        }`}
      >
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#"
              className="text-lg font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-amber-900 to-amber-700 dark:from-amber-400 dark:via-amber-500 dark:to-amber-300"
            >
              {personalInfo.name.toUpperCase()}
            </a>

            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => {
                const linkId = link.href.replace("#", "") || "home";
                const isActive = activeSection === linkId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 font-extrabold"
                        : "text-slate-700 dark:text-slate-300 hover:text-amber-900 dark:hover:text-amber-400 hover:bg-slate-200/40 dark:hover:bg-slate-800/40"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Dynamic Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 bg-slate-100/50 hover:bg-slate-200/50 dark:bg-slate-900/50 dark:hover:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-full transition-all duration-300 text-slate-700 dark:text-slate-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* Resume download Link */}
              <a
                href={personalInfo.resume}
                className="flex items-center gap-1 bg-gradient-to-r from-amber-950 to-amber-800 dark:from-amber-500 dark:to-amber-600 hover:from-amber-900 hover:to-amber-700 dark:hover:from-amber-400 dark:hover:to-amber-500 text-white font-extrabold uppercase text-[10px] tracking-widest px-4 py-2.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-103"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <ArrowUpRight size={12} />
              </a>
            </div>

            {/* Mobile Menu Action Triggers */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-amber-950 via-amber-700 to-amber-400 rounded-full transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile menu panel overlay */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 p-5 backdrop-blur-2xl bg-white/95 dark:bg-black/95 border border-white/20 dark:border-white/10 rounded-2xl shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-amber-900 dark:hover:text-amber-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-200 dark:border-slate-800" />
              <a
                href={personalInfo.resume}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-950 to-amber-800 dark:from-amber-500 dark:to-amber-600 text-white font-extrabold uppercase text-xs tracking-wider py-3 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Resume <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;