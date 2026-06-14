import React from "react";
import { skillsGrouped } from "../data/portfolioData";

function Skills() {
  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col justify-start transition-all duration-500"
    >
      
      {/* Section Header */}
      <div className="border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6 w-full">
        <h2 className="text-2xl font-black uppercase tracking-widest text-slate-800 dark:text-white">
          TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-550 to-amber-400 dark:from-amber-400 dark:to-amber-200">SKILLS</span>
        </h2>
      </div>

      {/* Categories Grid (Initial card grid restored, styled for coffee-bronze theme) */}
      <div className="w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(skillsGrouped).map(([category, items], idx) => {
            // Subtle coffee-bronze header styles
            const headerStyles = [
              "from-amber-900/10 to-transparent text-amber-800 dark:text-amber-300 border-amber-800/20",
              "from-amber-800/10 to-transparent text-amber-700 dark:text-amber-400 border-amber-700/20",
              "from-amber-700/10 to-transparent text-amber-600 dark:text-amber-350 border-amber-600/20"
            ];
            const headerStyle = headerStyles[idx % headerStyles.length];

            return (
              <div
                key={category}
                className="bg-white/20 dark:bg-slate-900/25 border border-white/20 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:border-amber-500/15 hover:shadow-md transition-all duration-300"
              >
                <h3 className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-gradient-to-r border rounded-full mb-4 max-w-max ${headerStyle}`}>
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/45 dark:bg-slate-800/15 border border-slate-200/50 dark:border-slate-700/50 text-[10px] md:text-xs font-bold uppercase rounded-full shadow-sm text-slate-700 dark:text-slate-300 hover:text-amber-900 dark:hover:text-amber-400 hover:border-amber-500/40 dark:hover:border-amber-400/40 hover:bg-white dark:hover:bg-slate-900 hover:scale-[1.04] hover:shadow-[0_0_12px_rgba(207,170,126,0.15)] dark:hover:shadow-[0_0_12px_rgba(207,170,126,0.25)] transition-all duration-300 cursor-default"
                    >
                      {/* Interactive indicator dot in brand colors */}
                      <span className="w-1.5 h-1.5 bg-gradient-to-r from-amber-700 to-amber-400 rounded-full inline-block" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;