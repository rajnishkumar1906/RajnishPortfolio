import React from "react";
import { personalInfo } from "../data/portfolioData";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 pt-24 pb-16 bg-white dark:bg-[#0b0b0b]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-80 h-96 rounded-2xl overflow-hidden border shadow-sm">
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-black dark:text-white mb-4">
            About <span className="text-green-600">Me</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-[15.5px]">
            {personalInfo.about}
          </p>

          {/* Summary Highlights */}
          <div className="grid sm:grid-cols-3 gap-4">

            <div className="border rounded-xl p-4 bg-white dark:bg-[#0f0f0f]">
              <p className="text-green-600 font-semibold">MERN</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Full-stack engineering
              </p>
            </div>

            <div className="border rounded-xl p-4 bg-white dark:bg-[#0f0f0f]">
              <p className="text-green-600 font-semibold">AI Systems</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Automation & RAG
              </p>
            </div>

            <div className="border rounded-xl p-4 bg-white dark:bg-[#0f0f0f]">
              <p className="text-green-600 font-semibold">Backend</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                APIs & Architecture
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
