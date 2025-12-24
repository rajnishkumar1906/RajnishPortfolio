import React, { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, FileDown } from "lucide-react";

const Hero = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random(),
      delay: Math.random() * 3,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center justify-center px-6 pt-24
        bg-black text-white overflow-hidden
      "
    >
      {/* ⭐ STARRY BACKGROUND */}
      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              background: "white",
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* ⭐ TWINKLE ANIMATION */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite ease-in-out;
        }
      `}</style>

      {/* FOREGROUND CONTENT */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
            <img
              src={personalInfo.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-gray-300">
          Hello — I’m <span className="font-semibold">{personalInfo.name}</span>
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold mt-2 leading-tight">
          Full Stack Developer
          <span className="text-green-400"> & AI Engineer</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-[17px]">
          Building scalable products and AI-powered systems with real-world impact.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold
                       px-8 py-3 rounded-full flex items-center gap-2 shadow-md"
          >
            Contact Me <ArrowRight size={16} />
          </a>

          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-300 text-white hover:bg-white/10
                       font-semibold px-8 py-3 rounded-full flex items-center gap-2"
          >
            View Resume <FileDown size={16} />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
