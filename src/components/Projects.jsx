import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 pt-24 pb-16 bg-white dark:bg-[#0b0b0b]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-black dark:text-white">
            Featured <span className="text-green-600">Projects</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-3">
            A selection of real-world products, research systems and AI applications I’ve built.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-2xl overflow-hidden bg-white dark:bg-[#0f0f0f]
                         shadow-sm hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >
              {/* IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-black dark:text-white mb-1">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-[6px] text-xs rounded-full
                                 border border-gray-300 dark:border-gray-600
                                 text-gray-700 dark:text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between items-center">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-800 dark:text-gray-200
                               hover:text-green-600 transition"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2
                               bg-green-600 hover:bg-green-700
                               text-white px-4 py-2 rounded-full text-sm transition"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
