import React, { useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "../data/portfolioData";
import { Brain, Database, Eye, Smartphone, FolderGit, Github, ExternalLink, X, Info } from "lucide-react";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  
  const categories = ["All", "Full Stack", "AI/ML", "Computer Vision", "Mobile"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Return category-specific icon (all mapped to brown-bronze scale)
  const getProjectIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return <Brain className="w-6 h-6 text-amber-800 dark:text-amber-300" />;
      case "Full Stack":
        return <Database className="w-6 h-6 text-amber-700 dark:text-amber-400" />;
      case "Computer Vision":
        return <Eye className="w-6 h-6 text-amber-600 dark:text-amber-500" />;
      case "Mobile":
        return <Smartphone className="w-6 h-6 text-amber-500 dark:text-amber-600" />;
      default:
        return <FolderGit className="w-6 h-6 text-amber-400 dark:text-amber-500" />;
    }
  };

  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col justify-start transition-all duration-500"
    >
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6 gap-3 w-full">
        <h2 className="text-2xl font-black uppercase tracking-widest text-slate-800 dark:text-white">
          FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-550 to-amber-400 dark:from-amber-400 dark:to-amber-200">PROJECTS</span>
        </h2>
        
        {/* Frosted Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-103 ${
                filter === cat
                  ? "bg-gradient-to-r from-amber-800 to-amber-600 dark:from-amber-600 dark:to-amber-500 text-white shadow-md"
                  : "text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/20 dark:bg-slate-900/25 border border-white/20 dark:border-white/5 p-5 rounded-2xl shadow-sm hover:scale-[1.03] hover:border-amber-500/30 hover:shadow-[0_8px_30px_rgba(145,99,60,0.12)] dark:hover:shadow-[0_8px_30px_rgba(145,99,60,0.22)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category badge & year */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-amber-500/10 bg-amber-500/10 text-amber-850 dark:text-amber-300">
                    {project.category}
                  </span>
                  <span className="text-[9px] font-extrabold text-slate-500 dark:text-slate-400">
                    {project.year}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl">
                    {getProjectIcon(project.category)}
                  </div>
                  <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase leading-tight line-clamp-2 pt-1">
                    {project.title.split(" — ")[0]}
                  </h3>
                </div>

                {/* Short description */}
                <p className="text-[11px] font-semibold leading-relaxed text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tech chip lists and links */}
              <div>
                <div className="flex flex-wrap gap-1 mb-4 border-t border-slate-100/50 dark:border-slate-900/50 pt-3">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-extrabold uppercase px-2 py-0.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 text-slate-500 dark:text-slate-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/30 text-slate-500/60 dark:text-slate-455 rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Link panel */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-1 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-[10px] font-extrabold uppercase rounded-full hover:scale-102 transition-all duration-300"
                  >
                    <Info size={12} /> Details
                  </button>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/40 dark:bg-gray-800/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-650 dark:text-slate-350 hover:text-amber-600 hover:bg-slate-100/50 dark:hover:bg-gray-800 rounded-full hover:scale-105 transition-all duration-300"
                    aria-label="View Source Code"
                  >
                    <Github size={14} />
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-amber-800 to-amber-600 dark:from-amber-600 dark:to-amber-500 text-white rounded-full hover:scale-105 transition-all duration-300"
                      aria-label="View Live Site"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Overlay Glass Modal */}
      {selectedProject && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white/90 dark:bg-[#150d0a]/95 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-amber-500/10 bg-amber-500/10 text-amber-850 dark:text-amber-300">
                  {selectedProject.category} • {selectedProject.year}
                </span>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full transition-all duration-300 hover:scale-105"
                  aria-label="Close modal"
                >
                  <X size={14} />
                </button>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-slate-850 dark:text-white uppercase tracking-tight mb-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-3">
                {selectedProject.title}
              </h3>

              {/* Descriptions */}
              <div className="space-y-5 mb-6">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-1.5">
                    Overview
                  </h4>
                  <p className="text-xs font-semibold leading-relaxed text-slate-700 dark:text-slate-300">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Bullets feature list */}
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2">
                    Key Implementations
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                        <span className="text-amber-650 dark:text-amber-450 mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div>
              {/* Entire Stack Badges */}
              <div className="mb-6 border-t border-slate-100/50 dark:border-slate-900/50 pt-4">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2.5">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-extrabold uppercase px-2.5 py-1 bg-slate-100/60 dark:bg-slate-900/60 border border-slate-250/30 dark:border-slate-850/30 text-slate-650 dark:text-slate-405 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/40 dark:bg-gray-800/40 border border-slate-250 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-extrabold uppercase rounded-full hover:scale-102 transition-all duration-300 hover:shadow-md"
                >
                  <Github size={14} /> Source Code
                </a>
                {selectedProject.demo !== "#" && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-amber-800 to-amber-600 dark:from-amber-600 dark:to-amber-500 text-white text-xs font-extrabold uppercase rounded-full hover:scale-102 transition-all duration-300 hover:shadow-lg"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}

export default Projects;