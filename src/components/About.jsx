import React from "react";
import { personalInfo, achievements, certifications, education, experience } from "../data/portfolioData";

function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-white/70">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Main Info */}
          <div className="space-y-6">
            {/* Glassmorphism card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-white/80 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>

            {/* Experience Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="text-xl font-medium">{exp.title}</h4>
                  <p className="text-white/70">{exp.company} | {exp.period}</p>
                  <p className="text-white/60 text-sm mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Education, Achievements, Certifications */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium">{education.degree}</h4>
                  <p className="text-white/70">{education.university}</p>
                  <p className="text-white/60">CGPA: {education.cgpa}</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium">{education.highSchool}</h4>
                  <p className="text-white/70">{education.school}</p>
                  <p className="text-white/60">{education.highSchoolPercentage}</p>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white/60 mt-1">🏆</span>
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-white/60 text-sm">{achievement.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Card */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-b border-white/10 last:border-0 pb-3 last:pb-0">
                    <h4 className="font-medium">{cert.title}</h4>
                    <p className="text-white/60 text-sm">{cert.issuer} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;