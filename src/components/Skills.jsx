import React from "react";
import { skills } from "../data/portfolioData";

function Skills() {
  // Group skills by category
  const skillCategories = {
    "Programming Languages": skills.slice(0, 5),
    "Web & Frontend": skills.slice(5, 11),
    "Backend & APIs": skills.slice(11, 18),
    "Databases & Caching": skills.slice(18, 26),
    "AI / Machine Learning": skills.slice(26, 38),
    "LLM & AI Agents": skills.slice(38, 46),
    "DevOps & Tools": skills.slice(46, 54),
    "Core CS Fundamentals": skills.slice(54, 58)
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technical <span className="text-white/70">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div
              key={category}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-white/20">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30 hover:bg-white/30 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;