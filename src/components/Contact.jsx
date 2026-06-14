import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Github, Linkedin, Send, Compass, Phone } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Drafts message details into native mail composer
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
  };

  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col justify-start transition-all duration-500"
    >
      
      {/* Section Header */}
      <div className="border-b border-slate-200/50 dark:border-slate-800/50 pb-5 mb-6 w-full">
        <h2 className="text-2xl font-black uppercase tracking-widest text-slate-800 dark:text-white">
          GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-550 to-amber-400 dark:from-amber-400 dark:to-amber-200">TOUCH</span>
        </h2>
      </div>

      {/* Content columns */}
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Contact details list */}
          <div className="space-y-4">
            <div className="bg-white/20 dark:bg-gray-950/20 border border-white/20 dark:border-white/5 p-6 rounded-2xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-800 dark:text-white mb-4">
                Direct Inquiries
              </h3>
              
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-xs font-bold text-slate-650 dark:text-slate-350 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1"
                >
                  <div className="bg-amber-500/10 dark:bg-amber-400/10 p-2.5 border border-amber-500/20 dark:border-amber-400/10 rounded-full text-amber-700 dark:text-amber-300">
                    <Mail size={16} />
                  </div>
                  <span>{personalInfo.email}</span>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-3 text-xs font-bold text-slate-650 dark:text-slate-350 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1"
                >
                  <div className="bg-amber-500/10 dark:bg-amber-400/10 p-2.5 border border-amber-500/20 dark:border-amber-400/10 rounded-full text-amber-700 dark:text-amber-300">
                    <Phone size={16} />
                  </div>
                  <span>{personalInfo.phone}</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-bold text-slate-650 dark:text-slate-350 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1"
                >
                  <div className="bg-amber-500/10 dark:bg-amber-400/10 p-2.5 border border-amber-500/20 dark:border-amber-400/10 rounded-full text-amber-600 dark:text-amber-400">
                    <Github size={16} />
                  </div>
                  <span>github.com/rajnishkumar1906</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs font-bold text-slate-650 dark:text-slate-350 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1"
                >
                  <div className="bg-amber-500/10 dark:bg-amber-400/10 p-2.5 border border-amber-500/20 dark:border-amber-400/10 rounded-full text-amber-700 dark:text-amber-300">
                    <Linkedin size={16} />
                  </div>
                  <span>linkedin.com/in/rajnishkumar1906</span>
                </a>
              </div>
            </div>

            {/* Status details */}
            <div className="bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/15 dark:border-amber-400/10 p-5 rounded-2xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2 flex items-center gap-1.5 animate-pulse">
                <Compass size={14} /> Available for Work
              </h3>
              <p className="text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-400">
                I am currently looking for software engineering roles focusing on AI/ML applications and Full Stack systems. Let's make something amazing.
              </p>
            </div>
          </div>

          {/* Email draft composer form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-white/55 dark:bg-gray-950/25 border border-white/30 dark:border-white/5 p-5 rounded-2xl space-y-4">
              <div>
                <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-white/65 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-xl text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500/40 dark:focus:border-amber-400/30 focus:shadow-[0_0_12px_rgba(145,99,60,0.12)] transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-2.5 bg-white/65 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-xl text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500/40 dark:focus:border-amber-400/30 focus:shadow-[0_0_12px_rgba(145,99,60,0.12)] transition-all duration-300"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Message Body
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3.5 py-2.5 bg-white/65 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/50 rounded-xl text-xs font-semibold text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-500/40 dark:focus:border-amber-400/30 focus:shadow-[0_0_12px_rgba(145,99,60,0.12)] transition-all duration-300 resize-none"
                  placeholder="Hi Rajnish, let's talk about..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-600 hover:from-amber-750 hover:to-amber-550 text-white font-extrabold uppercase text-[10px] tracking-widest py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-102"
              >
                Send Message <Send size={12} />
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;