import React, { useState } from "react";
import { personalInfo, achievements, certifications, education, experience } from "../data/portfolioData";
import { User, Briefcase, GraduationCap, Award, ShieldCheck, MapPin, Calendar, ExternalLink, Brain, Code, Zap } from "lucide-react";

function About() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", name: "Profile", icon: <User size={14} /> },
    { id: "experience", name: "Experience", icon: <Briefcase size={14} /> },
    { id: "education", name: "Education", icon: <GraduationCap size={14} /> },
    { id: "achievements", name: "Credentials", icon: <Award size={14} /> },
  ];

  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col justify-start transition-all duration-500"
    >
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6 gap-3 w-full">
        <h2 className="text-2xl font-black uppercase tracking-widest text-slate-800 dark:text-white">
          ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-950 via-amber-900 to-amber-750 dark:from-amber-400 dark:to-amber-300">ME</span>
        </h2>
        
        {/* Frosted Tab Buttons */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-100/40 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/50 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 hover:scale-103 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-amber-950 to-amber-800 dark:from-amber-500 dark:to-amber-600 text-white shadow-md"
                  : "text-slate-650 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content block */}
      <div className="w-full">
        
        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="flex flex-col gap-6 animate-fade-in pt-2 w-full">
            {/* Top Row: Pillar Cards */}
            <div className="grid md:grid-cols-3 gap-4 w-full">
              {/* Gen AI Card */}
              <div className="bg-white/20 dark:bg-gray-950/20 border border-white/25 dark:border-white/5 p-5 rounded-2xl hover:scale-[1.01] hover:border-amber-900/20 dark:hover:border-amber-500/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3 text-amber-950 dark:text-amber-400">
                  <div className="p-2 bg-amber-900/10 dark:bg-amber-400/10 rounded-full"><Brain size={16} /></div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider">GenAI & LLMs</h3>
                </div>
                <p className="text-[11px] font-semibold leading-relaxed text-slate-600 dark:text-slate-400">
                  Engineering multi-agent frameworks (LangGraph), vector indexing (FAISS), and Whisper-driven voice RAG applications.
                </p>
              </div>

              {/* Full Stack Card */}
              <div className="bg-white/20 dark:bg-gray-950/20 border border-white/25 dark:border-white/5 p-5 rounded-2xl hover:scale-[1.01] hover:border-amber-800/20 dark:hover:border-amber-500/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3 text-amber-800 dark:text-amber-500">
                  <div className="p-2 bg-amber-800/10 dark:bg-amber-500/10 rounded-full"><Code size={16} /></div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider">Full Stack</h3>
                </div>
                <p className="text-[11px] font-semibold leading-relaxed text-slate-600 dark:text-slate-400">
                  Building responsive React + Tailwind frontends, FastAPI/Node.js backend architectures, and database configurations.
                </p>
              </div>

              {/* Problem Solving Card */}
              <div className="bg-white/20 dark:bg-gray-950/20 border border-white/25 dark:border-white/5 p-5 rounded-2xl hover:scale-[1.01] hover:border-amber-700/20 dark:hover:border-amber-500/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5 mb-3 text-amber-700 dark:text-amber-400">
                  <div className="p-2 bg-amber-700/10 dark:bg-amber-600/10 rounded-full"><Zap size={16} /></div>
                  <h3 className="text-[10px] font-black uppercase tracking-wider">Problem Solving</h3>
                </div>
                <p className="text-[11px] font-semibold leading-relaxed text-slate-600 dark:text-slate-400">
                  Solved 500+ algorithmic tasks across LeetCode (peak rating 1364) and GeeksforGeeks, and 5-Star rated on HackerRank.
                </p>
              </div>
            </div>

            {/* Bottom Row: Bento Focus & Stats Dashboard */}
            <div className="grid md:grid-cols-12 gap-6 pt-6 border-t border-slate-200/30 dark:border-slate-800/30 w-full items-start">
              {/* Focus Areas list (Span 7) */}
              <div className="md:col-span-7 flex flex-col justify-start">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-white mb-4">
                  Focus Areas & Methodology
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-2.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="text-amber-900 dark:text-amber-400 font-extrabold mt-0.5">•</span>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200 font-extrabold uppercase text-[9px] tracking-wider block mb-0.5">Agentic Architectures</strong>
                      Designing robust multi-agent setups (LangGraph) for automated workflows, database querying, and market research.
                    </div>
                  </li>
                  <li className="flex gap-2.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="text-amber-900 dark:text-amber-400 font-extrabold mt-0.5">•</span>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200 font-extrabold uppercase text-[9px] tracking-wider block mb-0.5">Voice RAG Integration</strong>
                      Building conversational audio interfaces combining local FAISS vector bases, OpenAI Whisper, and gTTS pipelines.
                    </div>
                  </li>
                  <li className="flex gap-2.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="text-amber-900 dark:text-amber-400 font-extrabold mt-0.5">•</span>
                    <div>
                      <strong className="text-slate-800 dark:text-slate-200 font-extrabold uppercase text-[9px] tracking-wider block mb-0.5">High-Performance Backends</strong>
                      Developing optimized server gateways with FastAPI and Express.js, utilizing Redis memory caching to reduce load.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Stats Grid (Span 5) */}
              <div className="md:col-span-5 grid grid-cols-2 gap-3 w-full">
                {/* Stat 1 */}
                <div className="p-4 bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 rounded-2xl flex flex-col justify-between hover:border-amber-900/10 dark:hover:border-amber-500/10 transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-2">AI Apps</span>
                  <span className="text-2xl font-black text-amber-900 dark:text-amber-400 leading-none">3+</span>
                </div>
                {/* Stat 2 */}
                <div className="p-4 bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 rounded-2xl flex flex-col justify-between hover:border-amber-800/10 dark:hover:border-amber-500/10 transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-2">DSA Solved</span>
                  <span className="text-2xl font-black text-amber-800 dark:text-amber-500 leading-none">500+</span>
                </div>
                {/* Stat 3 */}
                <div className="p-4 bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 rounded-2xl flex flex-col justify-between hover:border-amber-700/10 dark:hover:border-amber-500/10 transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-2">HackerRank</span>
                  <span className="text-2xl font-black text-amber-700 dark:text-amber-400 leading-none">5★</span>
                </div>
                {/* Stat 4 */}
                <div className="p-4 bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 rounded-2xl flex flex-col justify-between hover:border-amber-900/10 dark:hover:border-amber-500/10 transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 mb-2">CSE CGPA</span>
                  <span className="text-2xl font-black text-amber-900 dark:text-amber-400 leading-none">7.29</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <div className="space-y-4 animate-fade-in">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 p-6 rounded-2xl hover:scale-[1.005] hover:border-amber-900/20 dark:hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                  <h3 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wide">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-1 bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 text-[10px] font-extrabold px-3 py-1 rounded-full border border-amber-900/20">
                    <Calendar size={10} /> {exp.period}
                  </div>
                </div>
                <h4 className="text-xs font-extrabold text-amber-800 dark:text-amber-500 mb-3">
                  {exp.company}
                </h4>
                <p className="text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-400 border-l border-slate-300 dark:border-slate-850 pl-3">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-4 animate-fade-in">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 p-6 rounded-2xl hover:border-amber-900/20 dark:hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-3">
                  <h3 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wide">
                    {edu.degree}
                  </h3>
                  <span className="text-[10px] font-extrabold bg-amber-900/10 dark:bg-amber-400/10 text-amber-900 dark:text-amber-400 px-3 py-1 rounded-full border border-amber-900/20">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-xs font-extrabold text-amber-800 dark:text-amber-500 mb-2">
                  {edu.institution}
                </h4>
                <div className="flex flex-wrap gap-4 text-[10px] font-bold text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <MapPin size={10} /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-900/50 px-2 py-0.5 border border-slate-200/50 dark:border-slate-800/50 rounded-full">
                    Score: {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements & Certifications Tab */}
        {activeTab === "achievements" && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            
            {/* Achievements Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-2 flex items-center gap-2">
                <Award size={14} className="text-amber-900 dark:text-amber-400" /> Key Milestones
              </h3>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-amber-900/5 border border-amber-900/20 dark:bg-amber-500/5 dark:border-amber-500/20 rounded-2xl"
                >
                  <h4 className="text-xs font-black uppercase tracking-wide text-amber-950 dark:text-amber-400 mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Column */}
            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-white border-b border-slate-200/50 dark:border-slate-800/50 pb-2 flex items-center gap-2">
                <ShieldCheck size={14} className="text-amber-800 dark:text-amber-500" /> Verify Certifications
              </h3>
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-amber-900/5 border border-amber-900/20 dark:bg-amber-500/5 dark:border-amber-500/20 rounded-2xl flex justify-between items-start gap-2 hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wide text-amber-950 dark:text-amber-400 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/40 dark:bg-gray-800/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-650 dark:text-slate-350 hover:text-amber-900 dark:hover:text-amber-400 hover:bg-slate-100/50 dark:hover:bg-gray-800 rounded-full transition-all duration-300"
                      aria-label={`Verify ${cert.title}`}
                    >
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default About;