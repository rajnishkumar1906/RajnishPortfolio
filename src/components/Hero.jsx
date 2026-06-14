import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Github, Linkedin, Mail, FileText, Send, Sparkles } from "lucide-react";

function Hero() {
  const [typedRole, setTypedRole] = useState("");
  const roles = ["Software Engineer", "Full Stack with AI"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentText.substring(0, typedRole.length - 1));
      }, 40); // Faster backspacing speed
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentText.substring(0, typedRole.length + 1));
      }, 75); // Deliberately slower typing generation speed
    }

    if (!isDeleting && typedRole === currentText) {
      timer = setTimeout(() => setIsDeleting(true), 2000); // Pause for 2s at complete string
    } else if (isDeleting && typedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length); // Cycle to next role string
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 flex flex-col justify-center items-center min-h-screen relative animate-float-slow transition-all duration-500"
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
        
        {/* Left Column: Descriptions and Actions (Span 7) */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
            Welcome to my space
          </span>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-3 text-slate-900 dark:text-white">
            I'm {personalInfo.name}
          </h1>
          
          {/* Typewriter animated Title role with flash cursor */}
          <h2 className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-amber-900 dark:text-amber-400 min-h-[1.5rem] flex items-center mb-6">
            <span>{typedRole}</span>
            <span className="border-r-2 border-amber-950 dark:border-amber-450 animate-blink ml-1 h-4 inline-block"></span>
          </h2>

          {/* Tagline Description */}
          <p className="text-xs md:text-sm font-semibold leading-relaxed text-slate-600 dark:text-slate-300 mb-8 border-l border-amber-900/40 dark:border-amber-500/40 pl-4">
            {personalInfo.tagline}
          </p>

          {/* Action Capsule Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#contact"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-950 to-amber-800 dark:from-amber-500 dark:to-amber-600 hover:from-amber-900 hover:to-amber-700 dark:hover:from-amber-400 dark:hover:to-amber-500 text-white font-extrabold uppercase text-[10px] tracking-widest px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-103"
            >
              Get In Touch <Send size={12} />
            </a>
            <a
              href={personalInfo.resume}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 dark:bg-white/10 dark:hover:bg-white/15 border border-white/45 dark:border-white/15 text-slate-800 dark:text-slate-100 font-extrabold uppercase text-[10px] tracking-widest px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-103"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume <FileText size={12} />
            </a>
          </div>

          {/* Social handle dock */}
          <div className="flex gap-4 p-2 bg-slate-150/45 dark:bg-slate-900/45 border border-white/25 dark:border-white/10 rounded-full shadow-inner">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/50 dark:bg-gray-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-amber-900/10 hover:text-amber-900 dark:hover:bg-amber-400/10 dark:hover:text-amber-400 hover:scale-105 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/50 dark:bg-gray-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-amber-800/10 hover:text-amber-850 dark:hover:bg-amber-400/10 dark:hover:text-amber-400 hover:scale-105 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 bg-white/50 dark:bg-gray-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full hover:bg-amber-700/10 hover:text-amber-700 dark:hover:bg-amber-400/10 dark:hover:text-amber-400 hover:scale-105 transition-all duration-300"
              aria-label="Email Address"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Badge (Span 5) */}
        <div className="md:col-span-5 flex justify-center items-center order-1 md:order-2">
          <div className="relative group">
            {/* Outer soft glowing rings and floating frames */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-900 via-amber-600 to-amber-400 dark:from-amber-500 dark:via-amber-450 dark:to-amber-300 rounded-full blur-xl opacity-35 dark:opacity-20 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full border border-amber-900/25 dark:border-amber-400/15 animate-ping" style={{ animationDuration: "3s" }} />
            
            {/* Profile Image water bubble orb */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-white/10 dark:bg-slate-900/20 border border-white/40 dark:border-white/10 shadow-[0_10px_30px_rgba(90,54,29,0.15)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.55)] hover:shadow-[0_0_35px_rgba(207,170,126,0.4)] hover:scale-103 transition-all duration-500 animate-bubble-float overflow-hidden">
              {/* 3D Shiny Specular Glass Bubble Highlights */}
              <div className="absolute top-2 left-4 w-28 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full -rotate-12 pointer-events-none z-10" />
              <div className="absolute bottom-3 right-6 w-4 h-4 bg-white/10 rounded-full pointer-events-none z-10" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none border border-white/20 dark:border-white/5 z-10" />

              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://github.com/identicons/rajnishkumar1906.png";
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;