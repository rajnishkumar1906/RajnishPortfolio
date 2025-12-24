import React from "react";
import { skills } from "../data/portfolioData";

const Skills = () => {
  // OPTIONAL: auto-group categories if your list contains labels
  const categories = {
    "Frontend": ["React", "Next.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "MongoDB" ,"Flask"],
    "AI / ML": ["Python", "LangChain", "Computer Vision", "Deep Learning","RAG"],
    "Tools & DevOps": ["Git", "REST APIs", "Docker"]
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-6 pt-24 bg-white dark:bg-[#0b0b0b]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">
            Skills & <span className="text-green-600">Technologies</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-3">
            A blend of engineering depth, practical problem-solving, and product-focused development.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(categories).map(([title, list]) => (
            <div
              key={title}
              className="border rounded-2xl p-6 bg-white dark:bg-[#0f0f0f]
                         shadow-sm hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  {title}
                </h3>

                <span className="w-2/12 h-[3px] bg-green-600 rounded-full"></span>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full
                               border border-gray-300 text-gray-800
                               dark:border-gray-600 dark:text-gray-200
                               hover:border-green-600 hover:text-green-700
                               dark:hover:border-green-500 dark:hover:text-green-400
                               transition"
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
};

export default Skills;
