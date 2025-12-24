import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 pt-24 pb-16 bg-white dark:bg-[#0b0b0b]"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-black dark:text-white mb-3">
          Get in <span className="text-green-600">Touch</span>
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Open to opportunities, collaborations and meaningful work.
        </p>

        {/* Contact Card */}
        <div
          className="border rounded-2xl bg-white dark:bg-[#0f0f0f]
                     px-8 py-10 shadow-sm max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Feel free to reach out — I usually respond within a day.
          </p>

          {/* Email Button */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2
                       bg-green-600 hover:bg-green-700
                       text-white px-8 py-3 rounded-full
                       font-medium transition"
          >
            <Mail size={18} />
            Send Email
          </a>

          {/* Divider */}
          <div className="my-6 border-t border-gray-300 dark:border-gray-700"></div>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            You can also connect with me here
          </p>

          {/* Social Buttons */}
          <div className="flex justify-center gap-6">

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200
                         hover:text-green-600 transition"
            >
              <Github size={20} />
              GitHub
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-200
                         hover:text-green-600 transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
