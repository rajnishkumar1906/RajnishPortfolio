import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-gray-100">

      <Navbar />

      <main className="pt-16">

        <Hero />

        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800 w-full" />

        <About />

        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800 w-full" />

        <Skills />

        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800 w-full" />

        <Projects />

        {/* Separator */}
        <div className="border-t border-gray-200 dark:border-gray-800 w-full" />

        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0b0b0b] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm tracking-wide">
            © 2025 Rajnish Kumar — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
